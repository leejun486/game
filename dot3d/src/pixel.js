// 도트 3D 렌더 파이프라인
// 1) 저해상도 렌더 타깃에 장면을 그림 (깊이·노멀 패스 + 컬러 패스)
// 2) 깊이/노멀 차이로 외곽선(어둡게)과 모서리 하이라이트(밝게)를 찍음
// 3) 구름 그림자, 밤 색보정, 디더링을 입혀 nearest 업스케일
// 카메라는 텍셀 격자에 스냅하고, 남는 소수점 픽셀은 캔버스를 CSS로 밀어서 부드럽게 스크롤
import * as THREE from 'three';
import { cloudNoiseTex } from './textures.js';
import { shared } from './materials.js';
import { GFX } from './gfx.js';
import { loadSettings } from './settings.js';
import { STYLE_ID } from './style.js';

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

// ===================== 고화질 후처리 =====================
// 반 해상도 가우시안 블러 (블룸·틸트시프트 공용)
const blurFrag = /* glsl */`
uniform sampler2D tSrc;
uniform vec2 dir;
uniform float bright;
varying vec2 vUv;
void main() {
  vec3 c = vec3(0.0);
  float w[5]; w[0] = 0.227; w[1] = 0.194; w[2] = 0.122; w[3] = 0.054; w[4] = 0.016;
  c += texture2D(tSrc, vUv).rgb * w[0];
  for (int i = 1; i < 5; i++) {
    c += texture2D(tSrc, vUv + dir * float(i)).rgb * w[i];
    c += texture2D(tSrc, vUv - dir * float(i)).rgb * w[i];
  }
  gl_FragColor = vec4(c, 1.0);
}`;

const hdFrag = /* glsl */`
#define STYLE ${STYLE_ID}
uniform sampler2D tColor;
uniform sampler2D tBlur;
uniform sampler2D tNormal;
uniform sampler2D tDepth;
uniform sampler2D tCloud;
uniform vec2 res;
uniform vec2 viewSize;
uniform float cNear;
uniform float cFar;
uniform mat4 invViewProj;
uniform float time;
uniform float night;
uniform float flash;
uniform vec3 flashColor;
uniform float vignette;
uniform float aoOn;
uniform vec3 gTint;
uniform float gSat;
uniform vec3 gHaze;
uniform float gHazeAmt;
uniform float pxPerUnit;
uniform float tanHalf;
uniform float aspect;
varying vec2 vUv;

// 원근 카메라 깊이 → 카메라 앞 거리
float linD(vec2 uv) { float d = texture2D(tDepth, uv).r; return cNear * cFar / (cFar - d * (cFar - cNear)); }
vec3 viewPos(vec2 uv) { float z = linD(uv); return vec3((uv.x * 2.0 - 1.0) * tanHalf * aspect * z, (uv.y * 2.0 - 1.0) * tanHalf * z, -z); }
float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
vec3 sat(vec3 c, float s) { float l = dot(c, vec3(0.299, 0.587, 0.114)); return mix(vec3(l), c, s); }

// 그림 스타일 외곽선: 깊이가 끊기거나 면 방향이 크게 바뀌는 곳 (w = 선 굵기, 픽셀)
float inkEdge(vec2 uv, float w) {
  float d0 = linD(uv);
  vec3 n0 = texture2D(tNormal, uv).rgb * 2.0 - 1.0;
  vec2 px = w / res;
  float e = 0.0;
  for (int i = 0; i < 8; i++) {
    if (aoOn == 0.0 && mod(float(i), 2.0) > 0.5) continue; // 화질 낮음: 네 방향만 (휴대폰 부담 절반)
    float a = float(i) * 0.7854;
    vec2 o = vec2(cos(a), sin(a)) * px;
    float d = linD(uv + o);
    vec3 n = texture2D(tNormal, uv + o).rgb * 2.0 - 1.0;
    e = max(e, smoothstep(0.02, 0.045, (d - d0) / d0));
    e = max(e, smoothstep(0.35, 0.6, 1.0 - dot(n0, n)) * step(abs(d - d0) / d0, 0.2));
  }
  return e;
}

// 쿠와하라 필터: 네 구역 중 가장 고른 구역의 평균 → 잔무늬가 지워지고 붓으로 칠한 듯한 면이 됨
vec3 kuwahara(vec2 uv, int R) {
  vec2 px = 1.0 / res;
  vec3 m[4]; vec3 s2[4];
  for (int k = 0; k < 4; k++) { m[k] = vec3(0.0); s2[k] = vec3(0.0); }
  float n = 0.0;
  for (int j = 0; j <= 4; j++) for (int i = 0; i <= 4; i++) {
    if (i > R || j > R) continue;
    vec2 o = vec2(float(i), float(j)) * px * 1.5;
    vec3 a = texture2D(tColor, uv + vec2(-o.x, -o.y)).rgb; m[0] += a; s2[0] += a * a;
    vec3 b = texture2D(tColor, uv + vec2(o.x, -o.y)).rgb; m[1] += b; s2[1] += b * b;
    vec3 c = texture2D(tColor, uv + vec2(-o.x, o.y)).rgb; m[2] += c; s2[2] += c * c;
    vec3 d = texture2D(tColor, uv + vec2(o.x, o.y)).rgb; m[3] += d; s2[3] += d * d;
    n += 1.0;
  }
  vec3 best = m[0] / n; float bv = 1e9;
  for (int k = 0; k < 4; k++) {
    vec3 mu = m[k] / n; vec3 v = abs(s2[k] / n - mu * mu);
    float vs = v.r + v.g + v.b;
    if (vs < bv) { bv = vs; best = mu; }
  }
  return best;
}

void main() {
#if STYLE == 0
  vec3 col = texture2D(tColor, vUv).rgb;
#else
  // 셀 애니는 선명하게 (붓칠 필터는 화면을 뭉개서 동화 수채화에만)
  vec3 col = STYLE == 2 && aoOn > 0.0 ? kuwahara(vUv, 2) : texture2D(tColor, vUv).rgb;
#endif
  float dr = texture2D(tDepth, vUv).r;
  vec3 blur = texture2D(tBlur, vUv).rgb;

  // ---- 화면 공간 AO: 노멀 쪽 반구에서 가까이 막힌 정도 ----
  float ao = 0.0;
  if (dr < 0.9999 && aoOn > 0.0 && STYLE == 0) {
    vec3 P = viewPos(vUv);
    vec3 N = normalize(texture2D(tNormal, vUv).rgb * 2.0 - 1.0);
    float rad = 0.55 / (2.0 * P.z * -1.0 * tanHalf); // 0.55유닛이 그 깊이에서 차지하는 화면 비율
    float a0 = hash(gl_FragCoord.xy) * 6.2832;
    for (int i = 0; i < 12; i++) {
      float fi = float(i);
      float a = a0 + fi * 2.39996;
      float r = (fi + 1.0) / 12.0;
      vec2 off = vec2(cos(a), sin(a)) * rad * r * vec2(res.y / res.x, 1.0);
      vec3 S = viewPos(vUv + off);
      vec3 v = S - P;
      float d = length(v);
      ao += max(0.0, dot(N, v / (d + 1e-4)) - 0.12) * (1.0 / (1.0 + d * d * 4.0));
    }
    ao = clamp(ao / 12.0 * 2.2, 0.0, 1.0);
  }
  col *= 1.0 - ao * 0.62;

  // ---- 흐르는 구름 그림자 (부드럽게) ----
  vec4 ndc = vec4(vUv * 2.0 - 1.0, dr * 2.0 - 1.0, 1.0);
  vec4 wp = invViewProj * ndc; wp /= wp.w;
  vec2 cuv = wp.xz * 0.012 + vec2(time * 0.006, time * 0.0035);
  float cl = smoothstep(0.45, 0.66, texture2D(tCloud, cuv).r);
  col *= 1.0 - 0.22 * cl * (1.0 - night);

  // ---- 틸트시프트: 화면 위아래로 갈수록 흐리게 (미니어처 느낌) ----
  float ty = abs(vUv.y - 0.45) * 2.0;
  float dof = smoothstep(0.58, 1.05, ty);
  col = mix(col, blur * (1.0 - ao * 0.3), dof * (STYLE == 0 ? 0.75 : 0.0));

  // ---- 블룸: 밝은 곳이 은은하게 번짐 ----
  vec3 bloom = max(blur - vec3(0.78 - night * 0.45), 0.0);
  col += bloom * mix(0.55, 1.1, night);

  // ---- 지역 색감: 먼 곳(화면 위쪽)에 대기가 끼고, 지역마다 색과 채도가 다름 (밤엔 절반만) ----
  float gk = (1.0 - night * 0.5) * (STYLE == 0 ? 1.0 : 0.45); // 그림 스타일은 지역 색 보정을 옅게 (맑은 색)
  col = mix(col, gHaze * mix(1.0, 0.35, night), gHazeAmt * gk * smoothstep(0.3, 1.0, vUv.y) * (dr < 0.9999 ? 1.0 : 0.6));
  col = max(sat(col, mix(1.0, gSat, gk)), 0.0) * mix(vec3(1.0), gTint, gk);

#if STYLE != 0
  // ---- 그림 스타일: 외곽선 + 색 ----
  {
    float ink = dr < 0.9999 ? inkEdge(vUv, STYLE == 3 ? 2.6 : STYLE == 2 ? 1.6 : 1.3) : 0.0;
  #if STYLE == 1
    col = max(sat(col, 1.3), 0.0) * 1.25;
    col = mix(col, col * vec3(0.18, 0.14, 0.24), ink * 0.9);
  #elif STYLE == 2
    // 종이 결 (낮은 주파수 얼룩 + 가는 섬유)
    float paper = hash(floor(gl_FragCoord.xy * 0.5)) * 0.05 + texture2D(tCloud, gl_FragCoord.xy / res * 1.7).r * 0.12;
    col = max(sat(col, 0.95), 0.0) * 1.15;
    col *= 0.93 + paper;
    float wob = hash(floor(gl_FragCoord.xy / 3.0)) * 0.4 + 0.6;
    col = mix(col, vec3(0.30, 0.20, 0.14), ink * 0.7 * wob);
  #else
    col = max(sat(col, 1.25), 0.0) * 1.25;
    col = mix(col, vec3(0.25, 0.16, 0.32), ink * 0.95);
  #endif
  }
  // 필믹 대신 부드러운 톤 (밝은 곳이 바래지 않게)
  col = col / (1.0 + col * 0.35);
  // 애니메이션의 밤: 푸르고 밝게 (캐릭터가 잘 보이게)
  col = mix(col, col * vec3(1.15, 1.3, 1.6) + vec3(0.006, 0.01, 0.025), night * 0.75);
  vec2 vc0 = vUv - 0.5;
  col *= 1.0 - dot(vc0, vc0) * vignette * 0.7;
  col = mix(col, flashColor, flash);
  col = clamp(col, 0.0, 1.0);
  gl_FragColor = vec4(pow(col, vec3(1.0 / 2.2)) + (hash(gl_FragCoord.xy + time) - 0.5) / 255.0, 1.0);
  return;
#endif
  // ---- 색보정: 낮은 따뜻하고 부드럽게, 밤은 푸르게 ----
  col = max(sat(col, mix(1.08, 0.82, night)), 0.0);
  col *= mix(vec3(1.06, 1.0, 0.9), vec3(0.7, 0.82, 1.14), night);
  // 필믹 톤매핑 (ACES 근사), 노출 살짝 낮춤
  col *= 0.88;
  col = (col * (2.51 * col + 0.03)) / (col * (2.43 * col + 0.59) + 0.14);
  // 그림자는 살짝 푸르게, 밝은 곳은 살짝 노랗게 (영화 같은 색감)
  float lum = dot(col, vec3(0.299, 0.587, 0.114));
  col += mix(vec3(-0.01, 0.0, 0.025), vec3(0.025, 0.012, -0.02), smoothstep(0.2, 0.8, lum)) * (1.0 - night);

  vec2 vc = vUv - 0.5;
  col *= 1.0 - dot(vc, vc) * vignette * 1.3;
  col = mix(col, flashColor, flash);
  col = clamp(col, 0.0, 1.0);
  vec3 srgb = pow(col, vec3(1.0 / 2.2));
  srgb += (hash(gl_FragCoord.xy + time) - 0.5) / 255.0; // 미세 노이즈로 띠 방지
  gl_FragColor = vec4(srgb, 1.0);
}`;

export class PixelRenderer {
  constructor(container) {
    this.quality = loadSettings().quality;
    this.container = container;
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'view';
    container.appendChild(this.canvas);
    const r = (this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: false, powerPreference: 'high-performance' }));
    r.setPixelRatio(1);
    r.shadowMap.enabled = true;
    r.shadowMap.type = GFX.hd ? THREE.PCFSoftShadowMap : THREE.PCFShadowMap;
    this.hd = GFX.hd;
    if (this.hd) this.canvas.style.imageRendering = 'auto';
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
    if (this.hd) {
      this.hdMat = new THREE.ShaderMaterial({
        vertexShader: vert, fragmentShader: hdFrag, depthTest: false, depthWrite: false,
        uniforms: {
          tColor: { value: null }, tBlur: { value: null }, tNormal: { value: null }, tDepth: { value: null }, tCloud: { value: cloudNoiseTex() },
          res: { value: new THREE.Vector2(1, 1) }, viewSize: { value: new THREE.Vector2(1, 1) }, cNear: { value: 1 }, cFar: { value: 100 },
          invViewProj: { value: new THREE.Matrix4() }, time: shared.time, night: shared.night, flash: { value: 0 },
          flashColor: { value: new THREE.Color(1, 1, 1) }, vignette: { value: 0.55 }, aoOn: { value: 1 }, gTint: { value: new THREE.Vector3(1, 1, 1) }, gSat: { value: 1 }, gHaze: { value: new THREE.Color('#ffffff') }, gHazeAmt: { value: 0 }, pxPerUnit: { value: 48 }, tanHalf: { value: 0.27 }, aspect: { value: 1.7 },
        },
      });
      this.blurMat = new THREE.ShaderMaterial({ vertexShader: vert, fragmentShader: blurFrag, depthTest: false, depthWrite: false, uniforms: { tSrc: { value: null }, dir: { value: new THREE.Vector2() }, bright: { value: 0 } } });
      // 합성 쪽에서 쓰는 깜빡임 값은 도트용 재질과 공유
      this.compMat.uniforms.flash = this.hdMat.uniforms.flash;
      this.compMat.uniforms.flashColor = this.hdMat.uniforms.flashColor;
    }
    this.compScene = new THREE.Scene();
    this.compCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const quad = (this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.hd ? this.hdMat : this.compMat));
    quad.frustumCulled = false;
    this.compScene.add(quad);

    // 고화질은 화각이 좁은 원근 카메라 (건물 앞면이 보이고 깊이감이 생김), 도트는 정사영
    this.fov = 28;
    this.camera = this.hd ? new THREE.PerspectiveCamera(this.fov, 1, 2, 320) : new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 160);
    this.pitch = THREE.MathUtils.degToRad(GFX.hd ? 52 : 45);
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
    // 고화질은 한 단계 멀리서 (레퍼런스처럼 마당이 넓게 보이게).
    // 애니메이션 그림체는 캐릭터가 크게 보이도록 한 단계 가까이 (세로 화면은 시야가 좁아 그대로 멀리)
    const far = this.hd && !(STYLE_ID !== 0 && window.innerWidth >= window.innerHeight) ? 1 : 0;
    return this.basePixelSize() + this.userZoom - far;
  }

  zoom(dir) {
    const base = this.basePixelSize();
    const next = Math.min(Math.max(base + this.userZoom + dir, this.hd ? 3 : 2), base + 3);
    this.userZoom = next - base;
    this.resize();
  }

  resize() {
    if (this.hd) return this.resizeHD();
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

  // 고화질: 화면 해상도 그대로(기기 배율 최대 1.5배, 화소 수 상한) 렌더. 확대 단계는 화면에 보이는 크기만 바꿈
  setQuality(q) {
    this.quality = q;
    if (this.hd) this.resize();
  }

  resizeHD() {
    const ps = (this.pixelSize = Math.max(1.5, this.autoPixelSize()));
    const cw = window.innerWidth, ch = window.innerHeight;
    // 화질 단계(설정): 높음은 기기 배율 1.5배까지, 낮음은 화소 수를 크게 줄이고 AO·MSAA를 끔
    const Q = this.quality || 'high';
    let sc = Math.min(window.devicePixelRatio || 1, { high: 1.5, mid: 1.0, low: 0.85 }[Q]);
    // 휴대폰은 화소 수를 줄여 발열·배터리 부담을 덜어 줌
    const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const maxPx = { high: touch ? 1.1e6 : 2.4e6, mid: touch ? 0.8e6 : 1.4e6, low: touch ? 0.5e6 : 0.8e6 }[Q];
    if (cw * ch * sc * sc > maxPx) sc = Math.sqrt(maxPx / (cw * ch));
    const RW = (this.RW = Math.round(cw * sc)), RH = (this.RH = Math.round(ch * sc));
    this.W = RW; this.H = RH; this.cssScale = sc;
    this.renderer.setSize(RW, RH, false);
    Object.assign(this.canvas.style, { width: cw + 'px', height: ch + 'px', transform: 'none' });
    const lin = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, type: THREE.HalfFloatType };
    for (const t of ['colorTarget', 'normalTarget', 'blurA', 'blurB']) this[t]?.dispose();
    this.colorTarget = new THREE.WebGLRenderTarget(RW, RH, { ...lin, samples: { high: 4, mid: 2, low: 0 }[Q] });
    if (this.hdMat) this.hdMat.uniforms.aoOn.value = Q === 'low' ? 0 : 1;
    this.normalTarget = new THREE.WebGLRenderTarget(RW, RH, { minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter });
    this.normalTarget.depthTexture = new THREE.DepthTexture(RW, RH);
    this.normalTarget.depthTexture.type = THREE.UnsignedIntType;
    const hw = Math.max(1, RW >> 1), hh = Math.max(1, RH >> 1);
    this.blurA = new THREE.WebGLRenderTarget(hw, hh, lin);
    this.blurB = new THREE.WebGLRenderTarget(hw, hh, lin);
    // 화면에 1유닛이 차지하는 CSS 픽셀 = 도트 모드와 같게 (16 × 확대 단계)
    const upp = 1 / (PPU * ps);
    const vw = cw * upp, vh = ch * upp;
    const cam = this.camera;
    // 초점 거리에서 보이는 높이가 vh가 되도록 카메라 거리를 정함
    const tanHalf = Math.tan(THREE.MathUtils.degToRad(this.fov / 2));
    this.camDist = vh / (2 * tanHalf);
    cam.aspect = cw / ch;
    cam.updateProjectionMatrix();
    const u = this.hdMat.uniforms;
    u.tanHalf.value = tanHalf;
    u.aspect.value = cw / ch;
    u.res.value.set(RW, RH);
    u.viewSize.value.set(vw, vh);
    u.pxPerUnit.value = RH / vh;
    this.shift.x = 0; this.shift.y = 0;
  }

  // 월드 좌표 → 화면(CSS 픽셀)
  project(v, out = { x: 0, y: 0 }) {
    if (this.hd) {
      const p = _v.copy(v).project(this.camera);
      out.x = (p.x * 0.5 + 0.5) * window.innerWidth;
      out.y = (-p.y * 0.5 + 0.5) * window.innerHeight;
      out.z = p.z;
      return out;
    }
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
    let nx = ((sx + ps - this.shift.x) / (this.RW * ps)) * 2 - 1;
    let ny = -(((sy + ps - this.shift.y) / (this.RH * ps)) * 2 - 1);
    if (this.hd) { nx = (sx / window.innerWidth) * 2 - 1; ny = -((sy / window.innerHeight) * 2 - 1); }
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
    const back = _v.set(0, Math.sin(p), Math.cos(p)).multiplyScalar(this.camDist * (this.hd ? this.camK ?? 1 : 1));
    cam.position.copy(target).add(back);
    cam.up.set(0, 1, 0);
    cam.lookAt(target);
    cam.updateMatrixWorld();
    if (this.hd) return; // 고화질은 스냅 없이 부드럽게
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

    if (this.hd) { this.composeHD(cam); return; }
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

PixelRenderer.prototype.composeHD = function (cam) {
  const r = this.renderer;
  // 반 해상도 블러 두 번 (가로→세로), 두 번 반복해서 넓게
  const B = this.blurMat, bu = B.uniforms;
  this.quad.material = B;
  const pass = (src, dst, dx, dy) => { bu.tSrc.value = src.texture; bu.dir.value.set(dx / dst.width, dy / dst.height); r.setRenderTarget(dst); r.render(this.compScene, this.compCam); };
  pass(this.colorTarget, this.blurA, 1.5, 0);
  pass(this.blurA, this.blurB, 0, 1.5);
  pass(this.blurB, this.blurA, 2.5, 0);
  pass(this.blurA, this.blurB, 0, 2.5);
  const u = this.hdMat.uniforms;
  this.quad.material = this.hdMat;
  u.tColor.value = this.colorTarget.texture;
  u.tBlur.value = this.blurB.texture;
  u.tNormal.value = this.normalTarget.texture;
  u.tDepth.value = this.normalTarget.depthTexture;
  u.cNear.value = cam.near;
  u.cFar.value = cam.far;
  u.invViewProj.value.multiplyMatrices(cam.projectionMatrix, cam.matrixWorldInverse).invert();
  r.setRenderTarget(null);
  r.render(this.compScene, this.compCam);
};

const _v = new THREE.Vector3();
const _v2 = new THREE.Vector3();
const _r = new THREE.Vector3();
const _u = new THREE.Vector3();
