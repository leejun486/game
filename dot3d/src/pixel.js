// 도트 3D 렌더 파이프라인
// 1) 저해상도 렌더 타깃에 장면을 그림 (깊이·노멀 패스 + 컬러 패스)
// 2) 깊이/노멀 차이로 외곽선(어둡게)과 모서리 하이라이트(밝게)를 찍음
// 3) 구름 그림자, 밤 색보정, 디더링을 입혀 nearest 업스케일
// 카메라는 텍셀 격자에 스냅하고, 남는 소수점 픽셀은 캔버스를 CSS로 밀어서 부드럽게 스크롤
import * as THREE from 'three';
import { cloudNoiseTex } from './textures.js';
import { shared } from './materials.js';

export const PPU = 16; // 화면 픽셀 / 월드 유닛

const vert = /* glsl */`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;

const frag = /* glsl */`
uniform sampler2D tColor;
uniform sampler2D tNormal;
uniform sampler2D tDepth;
uniform sampler2D tCloud;
uniform vec2 res;
uniform float cNear;
uniform float cFar;
uniform mat4 invViewProj;
uniform float time;
uniform float night;
uniform float outline;
uniform float flash;
uniform vec3 flashColor;
uniform float vignette;
varying vec2 vUv;

float rawD(vec2 uv) { return texture2D(tDepth, uv).r; }
float linD(vec2 uv) { return cNear + rawD(uv) * (cFar - cNear); }
vec3 getN(vec2 uv) { return texture2D(tNormal, uv).rgb * 2.0 - 1.0; }

float bayer4(vec2 p) {
  ivec2 q = ivec2(mod(p, 4.0));
  int i = q.x + q.y * 4;
  float m[16];
  m[0]=0.;m[1]=8.;m[2]=2.;m[3]=10.;m[4]=12.;m[5]=4.;m[6]=14.;m[7]=6.;
  m[8]=3.;m[9]=11.;m[10]=1.;m[11]=9.;m[12]=15.;m[13]=7.;m[14]=13.;m[15]=5.;
  for (int k = 0; k < 16; k++) if (k == i) return m[k] / 16.0;
  return 0.0;
}

float normalEdge(vec3 n, float d, vec2 uv) {
  float dd = linD(uv) - d;
  vec3 nn = getN(uv);
  vec3 bias = vec3(1.0, 1.0, 1.0);
  float nd = dot(n - nn, bias);
  float nInd = clamp(smoothstep(-0.01, 0.01, nd), 0.0, 1.0);
  float dInd = clamp(sign(dd * 0.25 + 0.0025), 0.0, 1.0);
  return (1.0 - dot(n, nn)) * dInd * nInd;
}

vec3 sat(vec3 c, float s) { float l = dot(c, vec3(0.299, 0.587, 0.114)); return mix(vec3(l), c, s); }

void main() {
  vec2 t = 1.0 / res;
  vec3 col = texture2D(tColor, vUv).rgb;
  float dr = rawD(vUv);
  float d = cNear + dr * (cFar - cNear);
  vec3 n = getN(vUv);

  if (dr < 0.9999 && outline > 0.0) {
    float dd = 0.0;
    dd += clamp(linD(vUv + vec2(t.x, 0.0)) - d, 0.0, 1.0);
    dd += clamp(linD(vUv - vec2(t.x, 0.0)) - d, 0.0, 1.0);
    dd += clamp(linD(vUv + vec2(0.0, t.y)) - d, 0.0, 1.0);
    dd += clamp(linD(vUv - vec2(0.0, t.y)) - d, 0.0, 1.0);
    float dEdge = step(0.35, dd);

    float ne = 0.0;
    ne += normalEdge(n, d, vUv + vec2(t.x, 0.0));
    ne += normalEdge(n, d, vUv - vec2(t.x, 0.0));
    ne += normalEdge(n, d, vUv + vec2(0.0, t.y));
    ne += normalEdge(n, d, vUv - vec2(0.0, t.y));
    float nEdge = step(0.12, ne);

    float coef = dEdge > 0.0 ? (1.0 - 0.48 * outline) : (1.0 + 0.32 * nEdge * outline);
    col *= coef;
  }

  // 월드 좌표 복원 → 흐르는 구름 그림자 (디더링)
  vec4 ndc = vec4(vUv * 2.0 - 1.0, dr * 2.0 - 1.0, 1.0);
  vec4 wp = invViewProj * ndc; wp /= wp.w;
  vec2 cuv = wp.xz * 0.012 + vec2(time * 0.006, time * 0.0035);
  float cl = texture2D(tCloud, cuv).r;
  float dither = bayer4(gl_FragCoord.xy);
  float cs = smoothstep(0.47, 0.62, cl);
  float shadow = step(dither * 0.9 + 0.05, cs) * (1.0 - night);
  col *= 1.0 - 0.26 * shadow;

  // 색보정: 낮은 살짝 따뜻하게, 밤은 푸르게
  col = sat(col, mix(1.12, 0.85, night));
  col *= mix(vec3(1.04, 1.0, 0.95), vec3(0.72, 0.82, 1.12), night);
  col += vec3(0.004, 0.006, 0.02) * night;

  // 비네트
  vec2 vc = vUv - 0.5;
  col *= 1.0 - dot(vc, vc) * vignette;

  col = mix(col, flashColor, flash);

  // 미세 디더 후 채널당 6비트 정도로 양자화 → 그라데이션 띠를 도트답게
  col = max(col, 0.0);
  vec3 srgb = pow(col, vec3(1.0 / 2.2));
  srgb = floor(srgb * 48.0 + dither) / 48.0;
  gl_FragColor = vec4(srgb, 1.0);
}`;

export class PixelRenderer {
  constructor(container) {
    this.container = container;
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'view';
    container.appendChild(this.canvas);
    const r = (this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: false, powerPreference: 'high-performance' }));
    r.setPixelRatio(1);
    r.shadowMap.enabled = true;
    r.shadowMap.type = THREE.PCFShadowMap;
    r.shadowMap.autoUpdate = false;
    r.outputColorSpace = THREE.LinearSRGBColorSpace; // 합성 셰이더에서 직접 sRGB로 변환
    this.pixelSize = 3;
    this.userZoom = 0;

    this.colorTarget = null;
    this.normalTarget = null;

    this.normalFront = new THREE.MeshNormalMaterial();
    this.normalDouble = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide });

    this.compMat = new THREE.ShaderMaterial({
      vertexShader: vert,
      fragmentShader: frag,
      uniforms: {
        tColor: { value: null },
        tNormal: { value: null },
        tDepth: { value: null },
        tCloud: { value: cloudNoiseTex() },
        res: { value: new THREE.Vector2(1, 1) },
        cNear: { value: 1 },
        cFar: { value: 100 },
        invViewProj: { value: new THREE.Matrix4() },
        time: shared.time,
        night: shared.night,
        outline: { value: 1 },
        flash: { value: 0 },
        flashColor: { value: new THREE.Color(1, 1, 1) },
        vignette: { value: 0.55 },
      },
      depthTest: false,
      depthWrite: false,
    });
    this.compScene = new THREE.Scene();
    this.compCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.compMat);
    quad.frustumCulled = false;
    this.compScene.add(quad);

    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 160);
    this.pitch = THREE.MathUtils.degToRad(45);
    this.camDist = 70;
    this.shift = { x: 0, y: 0 };
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  // 화면 면적 기준: 데스크톱 720p→3, 1080p→4, 휴대폰(세로·가로)→2
  basePixelSize() {
    return Math.max(2, Math.round(Math.sqrt(window.innerWidth * window.innerHeight) / 330));
  }

  autoPixelSize() {
    return this.basePixelSize() + this.userZoom;
  }

  zoom(dir) {
    const base = this.basePixelSize();
    const next = Math.min(Math.max(base + this.userZoom + dir, 2), base + 3);
    this.userZoom = next - base;
    this.resize();
  }

  resize() {
    const ps = (this.pixelSize = Math.max(2, this.autoPixelSize()));
    const W = (this.W = Math.ceil(window.innerWidth / ps));
    const H = (this.H = Math.ceil(window.innerHeight / ps));
    // 서브픽셀 스크롤을 위해 사방 1픽셀 여유
    const RW = (this.RW = W + 2), RH = (this.RH = H + 2);
    this.renderer.setSize(RW, RH, false);
    Object.assign(this.canvas.style, {
      width: RW * ps + 'px',
      height: RH * ps + 'px',
    });
    const opts = { minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter, type: THREE.HalfFloatType };
    this.colorTarget?.dispose();
    this.normalTarget?.dispose();
    this.colorTarget = new THREE.WebGLRenderTarget(RW, RH, opts);
    this.normalTarget = new THREE.WebGLRenderTarget(RW, RH, { minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter });
    this.normalTarget.depthTexture = new THREE.DepthTexture(RW, RH);
    this.normalTarget.depthTexture.type = THREE.UnsignedIntType;
    this.compMat.uniforms.res.value.set(RW, RH);

    const cam = this.camera;
    cam.left = -RW / PPU / 2;
    cam.right = RW / PPU / 2;
    cam.top = RH / PPU / 2;
    cam.bottom = -RH / PPU / 2;
    cam.updateProjectionMatrix();
  }

  // 월드 좌표 → 화면(CSS 픽셀)
  project(v, out = { x: 0, y: 0 }) {
    const p = _v.copy(v).project(this.camera);
    const ps = this.pixelSize;
    out.x = (p.x * 0.5 + 0.5) * this.RW * ps - ps + this.shift.x;
    out.y = (-p.y * 0.5 + 0.5) * this.RH * ps - ps + this.shift.y;
    out.z = p.z;
    return out;
  }

  // 화면 좌표 → 높이 y 평면 위의 월드 좌표
  unproject(sx, sy, planeY = 0) {
    const ps = this.pixelSize;
    const nx = ((sx + ps - this.shift.x) / (this.RW * ps)) * 2 - 1;
    const ny = -(((sy + ps - this.shift.y) / (this.RH * ps)) * 2 - 1);
    const o = _v.set(nx, ny, -1).unproject(this.camera);
    const e = _v2.set(nx, ny, 1).unproject(this.camera);
    const dir = e.sub(o);
    const t = (planeY - o.y) / dir.y;
    return new THREE.Vector3(o.x + dir.x * t, planeY, o.z + dir.z * t);
  }

  // 목표 지점을 바라보도록 카메라 배치 + 텍셀 스냅
  setFocus(target) {
    const cam = this.camera;
    const p = this.pitch;
    const back = _v.set(0, Math.sin(p), Math.cos(p)).multiplyScalar(this.camDist);
    cam.position.copy(target).add(back);
    cam.up.set(0, 1, 0);
    cam.lookAt(target);
    cam.updateMatrixWorld();
    // 카메라 기준 오른쪽/위쪽 축으로 위치를 텍셀 단위로 스냅
    const right = _r.setFromMatrixColumn(cam.matrixWorld, 0);
    const up = _u.setFromMatrixColumn(cam.matrixWorld, 1);
    const wpp = 1 / PPU;
    const rx = cam.position.dot(right), uy = cam.position.dot(up);
    const sx = Math.round(rx / wpp) * wpp, sy = Math.round(uy / wpp) * wpp;
    cam.position.addScaledVector(right, sx - rx).addScaledVector(up, sy - uy);
    cam.updateMatrixWorld();
    const remX = (rx - sx) / wpp, remY = (uy - sy) / wpp;
    const ps = this.pixelSize;
    this.shift.x = -remX * ps;
    this.shift.y = remY * ps;
    this.canvas.style.transform = `translate(${(-ps + this.shift.x).toFixed(2)}px, ${(-ps + this.shift.y).toFixed(2)}px)`;
  }

  render(scene) {
    const r = this.renderer;
    const cam = this.camera;

    // 1) 노멀 + 깊이 패스 (외곽선이 필요 없는 것은 숨김)
    const swapped = [];
    const hidden = [];
    scene.traverseVisible((o) => {
      if (!(o.isMesh || o.isPoints || o.isLine || o.isSprite)) return;
      if (o.userData.noOutline || o.isPoints || o.isSprite || o.isLine || (o.material && o.material.transparent)) {
        hidden.push(o);
      } else {
        swapped.push(o, o.material);
        const m = o.userData.nmat || (Array.isArray(o.material) ? (o.material[0].side === THREE.DoubleSide ? this.normalDouble : this.normalFront) : o.material.side === THREE.DoubleSide ? this.normalDouble : this.normalFront);
        o.material = m;
      }
    });
    for (const o of hidden) o.visible = false;
    const bg = scene.background;
    scene.background = null;
    r.setRenderTarget(this.normalTarget);
    r.setClearColor(0x8080ff, 1);
    r.clear();
    r.render(scene, cam);
    for (let i = 0; i < swapped.length; i += 2) swapped[i].material = swapped[i + 1];
    for (const o of hidden) o.visible = true;
    scene.background = bg;

    // 2) 컬러 패스
    r.shadowMap.needsUpdate = true;
    r.setRenderTarget(this.colorTarget);
    r.render(scene, cam);

    // 3) 합성
    const u = this.compMat.uniforms;
    u.tColor.value = this.colorTarget.texture;
    u.tNormal.value = this.normalTarget.texture;
    u.tDepth.value = this.normalTarget.depthTexture;
    u.cNear.value = cam.near;
    u.cFar.value = cam.far;
    u.invViewProj.value.multiplyMatrices(cam.projectionMatrix, cam.matrixWorldInverse).invert();
    r.setRenderTarget(null);
    r.render(this.compScene, this.compCam);
  }
}

const _v = new THREE.Vector3();
const _v2 = new THREE.Vector3();
const _r = new THREE.Vector3();
const _u = new THREE.Vector3();
