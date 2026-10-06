// 이펙트: 도트 파티클, 검기 호, 충격파, 지면 경고, 데미지 숫자
import * as THREE from 'three';
import { disposeSkeletons } from './dispose.js';
import { clone as cloneSkinned } from 'three/examples/jsm/utils/SkeletonUtils.js';
import { rand } from './util.js';

// 바닥 마법진 텍스처 (팔괘·별·태극 문양, 흰색 → 재질 색으로 물듦)
let circleTex = null;
function magicCircleTexture() {
  if (circleTex) return circleTex;
  const N = 128, c = document.createElement('canvas');
  c.width = c.height = N;
  const g = c.getContext('2d');
  g.imageSmoothingEnabled = false;
  g.strokeStyle = g.fillStyle = '#fff';
  const ctr = N / 2;
  const circle = (r, w) => { g.lineWidth = w; g.beginPath(); g.arc(ctr, ctr, r, 0, Math.PI * 2); g.stroke(); };
  circle(61, 2); circle(56, 1); circle(40, 2); circle(18, 1);
  // 팔괘: 원 둘레에 막대 세 줄(이어진/끊어진)
  for (let k = 0; k < 8; k++) {
    const a = (k / 8) * Math.PI * 2;
    g.save(); g.translate(ctr, ctr); g.rotate(a);
    for (let l = 0; l < 3; l++) {
      const y = -50 + l * 4, broken = (k >> l) & 1;
      if (broken) { g.fillRect(-7, y, 6, 2); g.fillRect(1, y, 6, 2); } else g.fillRect(-7, y, 14, 2);
    }
    g.restore();
  }
  // 팔각 별
  g.lineWidth = 1;
  g.beginPath();
  for (let k = 0; k <= 8; k++) {
    const a = (k * 3 / 8) * Math.PI * 2;
    const x = ctr + Math.cos(a) * 40, y = ctr + Math.sin(a) * 40;
    k ? g.lineTo(x, y) : g.moveTo(x, y);
  }
  g.stroke();
  // 작은 점 고리
  for (let k = 0; k < 24; k++) { const a = (k / 24) * Math.PI * 2; g.fillRect(ctr + Math.cos(a) * 30 - 1, ctr + Math.sin(a) * 30 - 1, 2, 2); }
  // 가운데 태극(반원 두 개)
  g.beginPath(); g.arc(ctr, ctr, 12, 0, Math.PI); g.fill();
  g.globalCompositeOperation = 'destination-out';
  g.beginPath(); g.arc(ctr - 6, ctr, 6, 0, Math.PI * 2); g.fill();
  g.globalCompositeOperation = 'source-over';
  g.beginPath(); g.arc(ctr + 6, ctr, 6, Math.PI, Math.PI * 2); g.fill();
  // 알파를 0/1로 (도트 느낌)
  const img = g.getImageData(0, 0, N, N);
  for (let i = 3; i < img.data.length; i += 4) img.data[i] = img.data[i] > 90 ? 255 : 0;
  g.putImageData(img, 0, 0);
  circleTex = new THREE.CanvasTexture(c);
  circleTex.magFilter = circleTex.minFilter = THREE.NearestFilter;
  circleTex.generateMipmaps = false;
  return circleTex;
}

const pVert = /* glsl */`
attribute vec3 aColor;
attribute float aSize;
attribute float aAlpha;
varying vec3 vColor;
varying float vAlpha;
void main() {
  vColor = aColor; vAlpha = aAlpha;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = aSize;
}`;
const pFrag = /* glsl */`
varying vec3 vColor;
varying float vAlpha;
void main() {
  if (vAlpha <= 0.01) discard;
  gl_FragColor = vec4(vColor * vAlpha, vAlpha);
}`;

class ParticlePool {
  constructor(scene, cap, additive) {
    this.cap = cap;
    this.list = [];
    const g = (this.geo = new THREE.BufferGeometry());
    this.pos = new Float32Array(cap * 3);
    this.col = new Float32Array(cap * 3);
    this.size = new Float32Array(cap);
    this.alpha = new Float32Array(cap);
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aColor', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aSize', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aAlpha', new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage));
    const mat = new THREE.ShaderMaterial({
      vertexShader: pVert,
      fragmentShader: pFrag,
      transparent: true,
      depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.CustomBlending,
      blendSrc: THREE.OneFactor,
      blendDst: THREE.OneMinusSrcAlphaFactor,
    });
    this.points = new THREE.Points(g, mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = additive ? 20 : 10;
    scene.add(this.points);
  }

  emit(o) {
    if (this.list.length >= this.cap) this.list.shift();
    const c = o.color instanceof THREE.Color ? o.color : new THREE.Color(o.color ?? 0xffffff);
    this.list.push({
      x: o.x, y: o.y, z: o.z,
      vx: o.vx || 0, vy: o.vy || 0, vz: o.vz || 0,
      g: o.g ?? 0, drag: o.drag ?? 0,
      life: o.life ?? 1, max: o.life ?? 1,
      size: o.size ?? 2, endSize: o.endSize ?? o.size ?? 2,
      r: c.r, gg: c.g, b: c.b,
      c2: o.color2 ? new THREE.Color(o.color2) : null,
      alpha: o.alpha ?? 1,
      flicker: o.flicker || 0,
      floor: o.floor ?? -100,
      wob: o.wob || 0, seed: Math.random() * 100,
    });
  }

  update(dt, t) {
    const L = this.list;
    let n = 0;
    for (let i = L.length - 1; i >= 0; i--) {
      const p = L[i];
      p.life -= dt;
      if (p.life <= 0) { L.splice(i, 1); continue; }
      p.vy -= p.g * dt;
      const d = Math.exp(-p.drag * dt);
      p.vx *= d; p.vy *= d; p.vz *= d;
      p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
      if (p.wob) { p.x += Math.sin(t * 2 + p.seed) * p.wob * dt; p.z += Math.cos(t * 1.7 + p.seed) * p.wob * dt; }
      if (p.y < p.floor) { p.y = p.floor; p.vy *= -0.3; p.vx *= 0.6; p.vz *= 0.6; }
    }
    for (const p of L) {
      if (n >= this.cap) break;
      const k = p.life / p.max;
      this.pos[n * 3] = p.x; this.pos[n * 3 + 1] = p.y; this.pos[n * 3 + 2] = p.z;
      let r = p.r, g = p.gg, b = p.b;
      if (p.c2) { r = p.c2.r + (r - p.c2.r) * k; g = p.c2.g + (g - p.c2.g) * k; b = p.c2.b + (b - p.c2.b) * k; }
      this.col[n * 3] = r; this.col[n * 3 + 1] = g; this.col[n * 3 + 2] = b;
      this.size[n] = Math.max(1, Math.round(p.endSize + (p.size - p.endSize) * k));
      let a = p.alpha * Math.min(1, k * 3);
      if (p.flicker) a *= 1 - p.flicker * (Math.sin(t * 30 + p.seed * 10) * 0.5 + 0.5);
      this.alpha[n] = a;
      n++;
    }
    this.geo.setDrawRange(0, n);
    for (const k of ['position', 'aColor', 'aSize', 'aAlpha']) this.geo.attributes[k].needsUpdate = true;
  }
}

const arcVert = /* glsl */`
varying vec2 vL;
void main(){ vL = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`;
const arcFrag = /* glsl */`
uniform float uProg; uniform float uStart; uniform float uLen; uniform float uInner; uniform float uOuter;
uniform vec3 uColor; uniform float uFade; uniform float uTail;
varying vec2 vL;
void main(){
  float ang = atan(vL.y, vL.x);
  float a = (ang - uStart) / uLen;
  a = fract(a + 2.0);
  float r = (length(vL) - uInner) / (uOuter - uInner);
  float tail = uProg - a;
  if (tail < 0.0 || tail > uTail) discard;
  float b = 1.0 - tail / uTail;
  b *= smoothstep(0.0, 0.6, r);
  b = b * b;
  if (r > 0.86) b = 1.6 * (1.0 - tail / uTail);
  b *= uFade;
  b = floor(b * 4.0 + 0.5) / 4.0;
  if (b <= 0.0) discard;
  gl_FragColor = vec4(uColor * b, b);
}`;

const ringFrag = /* glsl */`
uniform vec3 uColor; uniform float uAlpha; uniform float uProg; uniform float uMode;
varying vec2 vL;
void main(){
  float r = length(vL);
  float a = 0.0;
  if (uMode < 0.5) { // 충격파 링
    a = step(0.86, r) * step(r, 1.0);
  } else { // 지면 경고: 테두리 + 차오르는 원
    a = step(0.92, r) * step(r, 1.0) * 0.9 + step(r, uProg) * 0.35;
    float stripe = step(0.5, fract((vL.x + vL.y) * 4.0));
    a *= 0.75 + 0.25 * stripe;
  }
  a *= uAlpha;
  if (a <= 0.01) discard;
  gl_FragColor = vec4(uColor * a, a);
}`;

const flashFrag = /* glsl */`
uniform vec3 uColor; uniform float uAlpha;
varying vec2 vL;
void main(){
  float x = abs(vL.x), y = abs(vL.y);
  float a = (1.0 - x * x) * (1.0 - y);
  float core = step(y, 0.35) * (1.0 - x);
  vec3 c = mix(uColor, vec3(1.0), core);
  a = floor(a * uAlpha * 4.0 + 0.5) / 4.0;
  if (a <= 0.0) discard;
  gl_FragColor = vec4(c * a, a);
}`;

export class FX {
  constructor(scene, pixel) {
    this.scene = scene;
    this.pixel = pixel;
    this.add = new ParticlePool(scene, 2500, true);
    this.norm = new ParticlePool(scene, 1500, false);
    this.arcs = [];
    this.rings = [];
    this.numbers = [];
    this.flashes = [];
    this.ghosts = [];
    this.bolts = [];
    this.circles = [];
    this.scorches = [];
    this.streaks = [];
    this.spikes = [];
    this.numLayer = document.getElementById('numbers');
    this.warnCol = null; // 접근성: 적의 공격 예고 색을 하나로 (설정 → 위험 표시 색)
    this.time = 0;
  }

  // 적 공격 예고(바닥 원·경고선)의 색
  warn(c) { return this.warnCol || c; }

  spark(x, y, z, n = 10, color = '#fff6c8', speed = 6) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, e = rand(-0.2, 1.0);
      const s = speed * rand(0.4, 1);
      this.add.emit({ x, y, z, vx: Math.cos(a) * s, vy: e * s * 0.8, vz: Math.sin(a) * s, g: 12, drag: 4, life: rand(0.15, 0.35), size: 3, endSize: 1, color, color2: '#ff8a30' });
    }
  }

  dust(x, y, z, n = 4, color = '#c8bca0') {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      this.norm.emit({ x: x + rand(-0.15, 0.15), y: y + 0.05, z: z + rand(-0.15, 0.15), vx: Math.cos(a) * 0.8, vy: rand(0.3, 0.9), vz: Math.sin(a) * 0.8, drag: 3, life: rand(0.3, 0.55), size: 3, endSize: 1, color, alpha: 0.75 });
    }
  }

  colorFire(x, y, z, n = 20, spread = 0.5, c1 = '#9ff0ff', c2 = '#2050ff') {
    for (let i = 0; i < n; i++) {
      this.add.emit({
        x: x + rand(-spread, spread), y: y + rand(0, 0.4), z: z + rand(-spread, spread),
        vx: rand(-0.4, 0.4), vy: rand(1.2, 3.2), vz: rand(-0.4, 0.4), drag: 1.5,
        life: rand(0.35, 0.8), size: rand(2, 4), endSize: 1, color: c1, color2: c2, flicker: 0.3,
      });
    }
  }

  blueFire(x, y, z, n = 20, spread = 0.5) {
    for (let i = 0; i < n; i++) {
      this.add.emit({
        x: x + rand(-spread, spread), y: y + rand(0, 0.4), z: z + rand(-spread, spread),
        vx: rand(-0.4, 0.4), vy: rand(1.2, 3.2), vz: rand(-0.4, 0.4), drag: 1.5,
        life: rand(0.35, 0.8), size: rand(2, 4), endSize: 1, color: '#9ff0ff', color2: '#2050ff', flicker: 0.3,
      });
    }
  }

  smoke(x, y, z, n = 8) {
    for (let i = 0; i < n; i++) {
      this.norm.emit({ x: x + rand(-0.4, 0.4), y: y + rand(0, 0.5), z: z + rand(-0.4, 0.4), vx: rand(-0.6, 0.6), vy: rand(0.5, 1.4), vz: rand(-0.6, 0.6), drag: 2, life: rand(0.5, 0.9), size: 5, endSize: 2, color: '#d8d4e8', alpha: 0.7 });
    }
  }

  coins(x, y, z, n = 6) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      this.add.emit({ x, y: y + 0.4, z, vx: Math.cos(a) * rand(1, 2.5), vy: rand(3, 5), vz: Math.sin(a) * rand(1, 2.5), g: 14, life: rand(0.7, 1.1), size: 2, color: '#ffe070', floor: y + 0.02, flicker: 0.5 });
    }
  }

  // 검기 호. kind 0/1: 가로, 2: 세로
  slash(origin, yaw, kind = 0, opts = {}) {
    const inner = opts.inner ?? 0.45, outer = opts.outer ?? 1.9;
    const len = opts.len ?? 2.8;
    const start = -Math.PI / 2 - len / 2;
    const geo = new THREE.RingGeometry(inner, outer, 24, 1, start, len);
    const mat = new THREE.ShaderMaterial({
      vertexShader: arcVert, fragmentShader: arcFrag,
      uniforms: {
        uProg: { value: 0 }, uStart: { value: start }, uLen: { value: len }, uInner: { value: inner }, uOuter: { value: outer },
        uColor: { value: new THREE.Color(opts.color || '#e8fbff') }, uFade: { value: 1 }, uTail: { value: opts.static ? 1.2 : 0.55 },
      },
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    });
    const m = new THREE.Mesh(geo, mat);
    const g = new THREE.Group();
    g.add(m);
    g.position.copy(origin);
    g.rotation.y = yaw;
    m.rotation.x = -Math.PI / 2;
    if (kind === 1) m.scale.x = -1;
    if (kind === 2) { m.rotation.set(0, 0, 0); m.rotation.y = Math.PI / 2; m.rotation.z = -Math.PI / 2 + 0.0; g.position.y += 0.2; }
    m.renderOrder = 30;
    this.scene.add(g);
    if (opts.scale) g.scale.setScalar(opts.scale);
    this.arcs.push({ g, mat, t: 0, dur: opts.dur ?? 0.2, move: opts.move || null, static: !!opts.static, fadeAll: !!opts.fadeAll, kill: false });
    return g;
  }

  // X자 섬광 (카메라 쪽으로 기울여 세운 두 줄기 빛)
  cross(pos, color = '#bff4ff', size = 2.2, dur = 0.38) {
    const g = new THREE.Group();
    g.position.copy(pos);
    g.rotation.x = -Math.PI / 4;
    const mats = [];
    for (const [rz, w] of [[0.75, 1], [-0.75, 0.8]]) {
      const mat = new THREE.ShaderMaterial({
        vertexShader: arcVert, fragmentShader: flashFrag,
        uniforms: { uColor: { value: new THREE.Color(color) }, uAlpha: { value: 1 } },
        transparent: true, depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
      });
      const m = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
      m.rotation.z = rz;
      m.scale.set(size * 0.5 * w, 0.14, 1);
      m.renderOrder = 40;
      g.add(m);
      mats.push(mat);
    }
    this.scene.add(g);
    this.flashes.push({ g, mats, t: 0, dur, size });
  }

  // 바닥 마법진: 펼쳐지며 회전하다 사라짐
  circle(pos, radius, color = '#b89aff', dur = 1, spin = 1.2) {
    const mat = new THREE.MeshBasicMaterial({ map: magicCircleTexture(), color: new THREE.Color(color), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
    const m = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
    m.rotation.x = -Math.PI / 2;
    m.position.set(pos.x, pos.y + 0.05, pos.z);
    m.renderOrder = 22;
    this.scene.add(m);
    const c = { m, mat, t: 0, dur, radius, spin };
    this.circles.push(c);
    return c;
  }

  // 바닥 그을음 / 서리 자국 (천천히 사라짐)
  scorch(pos, radius, color = '#1a1220', dur = 2.5) {
    const mat = new THREE.MeshBasicMaterial({ color: new THREE.Color(color), transparent: true, opacity: 0.55, depthWrite: false });
    const m = new THREE.Mesh(new THREE.CircleGeometry(radius, 12), mat);
    m.rotation.x = -Math.PI / 2;
    m.position.set(pos.x, pos.y + 0.03, pos.z);
    m.renderOrder = 5;
    this.scene.add(m);
    this.scorches.push({ m, mat, t: 0, dur });
  }

  // 두 점 사이를 잇는 전기 사슬 (지그재그)
  arc(a, b, color = '#d8c8ff', width = 0.6) {
    const g = new THREE.Group();
    const core = new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
    const glow = new THREE.MeshBasicMaterial({ color: new THREE.Color(color), transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending, depthWrite: false });
    const N = 6;
    let p = a.clone();
    for (let i = 1; i <= N; i++) {
      const t = i / N;
      const q = a.clone().lerp(b, t);
      if (i < N) q.add(new THREE.Vector3(rand(-0.35, 0.35), rand(-0.3, 0.3), rand(-0.35, 0.35)));
      const len = p.distanceTo(q);
      const dir = q.clone().sub(p).normalize();
      const quat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
      for (const [m, w] of [[glow, 0.3 * width], [core, 0.1 * width]]) {
        const s = new THREE.Mesh(new THREE.BoxGeometry(w, len + 0.04, w), m);
        s.position.copy(p).lerp(q, 0.5); s.quaternion.copy(quat); s.renderOrder = 45;
        g.add(s);
      }
      p = q;
    }
    this.scene.add(g);
    this.bolts.push({ g, mats: [core, glow], t: 0, dur: 0.25 });
  }

  // 일섬: 지나간 자리에 남는 날카로운 빛줄기
  streak(a, b, color = '#ffffff', dur = 0.45, width = 0.35) {
    const len = a.distanceTo(b);
    const mat = new THREE.ShaderMaterial({
      vertexShader: arcVert, fragmentShader: flashFrag,
      uniforms: { uColor: { value: new THREE.Color(color) }, uAlpha: { value: 1 } },
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    });
    const m = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
    m.position.copy(a).lerp(b, 0.5);
    m.rotation.order = 'YXZ';
    m.rotation.y = Math.atan2(b.x - a.x, b.z - a.z) + Math.PI / 2;
    m.rotation.x = -Math.PI / 2;
    m.scale.set(len / 2, width / 2, 1);
    m.renderOrder = 42;
    this.scene.add(m);
    this.streaks.push({ m, mat, t: 0, dur, w: width });
  }

  // 얼음 가시: 땅에서 솟았다가 잠시 뒤 부서짐
  iceSpike(pos, h = 1.2, life = 1.3) {
    if (!this.iceMat) {
      this.iceMat = new THREE.MeshToonMaterial({ color: new THREE.Color('#bfe8ff'), emissive: new THREE.Color('#2a5a8a') });
    }
    const m = new THREE.Mesh(new THREE.ConeGeometry(0.22 + Math.random() * 0.1, h, 5), this.iceMat);
    m.position.set(pos.x, pos.y - h / 2, pos.z);
    m.rotation.set(rand(-0.25, 0.25), rand(0, 6), rand(-0.25, 0.25));
    m.castShadow = true;
    this.scene.add(m);
    this.spikes.push({ m, t: 0, life, h, y0: pos.y });
  }

  // 하늘에서 내리치는 번개 줄기: 지그재그 마디 (흰 심 + 보랏빛 테두리), 깜빡이며 사라짐
  bolt(ground, width = 1) {
    const g = new THREE.Group();
    const core = new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
    const glow = new THREE.MeshBasicMaterial({ color: '#8a6aff', transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false });
    let p = new THREE.Vector3(ground.x + rand(-1.5, 1.5), ground.y + 13, ground.z + rand(-1.5, 1.5));
    const N = 9;
    for (let i = 1; i <= N; i++) {
      const t = i / N;
      const q = new THREE.Vector3(
        ground.x + (p.x - ground.x) * 0 + (i < N ? rand(-0.7, 0.7) * (1 - t) : 0),
        ground.y + 13 * (1 - t),
        ground.z + (i < N ? rand(-0.7, 0.7) * (1 - t) : 0));
      const mid = p.clone().add(q).multiplyScalar(0.5);
      const len = p.distanceTo(q);
      const dir = q.clone().sub(p).normalize();
      const quat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
      for (const [m, w] of [[glow, 0.42 * width], [core, 0.16 * width]]) {
        const s = new THREE.Mesh(new THREE.BoxGeometry(w, len + 0.05, w), m);
        s.position.copy(mid); s.quaternion.copy(quat); s.renderOrder = 45;
        g.add(s);
      }
      // 곁가지
      if (i > 2 && i < N - 1 && Math.random() < 0.45) {
        const bl = rand(0.6, 1.4);
        const bd = new THREE.Vector3(rand(-1, 1), -rand(0.3, 1), rand(-1, 1)).normalize();
        const b = new THREE.Mesh(new THREE.BoxGeometry(0.1 * width, bl, 0.1 * width), core);
        b.position.copy(q).addScaledVector(bd, bl / 2);
        b.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), bd);
        g.add(b);
      }
      p = q;
    }
    this.scene.add(g);
    this.bolts.push({ g, mats: [core, glow], t: 0, dur: 0.32 });
    // 땅에 닿은 지점 섬광
    this.ring(ground, 1.2 * width, '#ffffff', 0.25);
  }

  // 잔상: 캐릭터를 통째로 복제해 푸른 빛으로 칠한 뒤 서서히 사라지게
  // 잔상: 몸이 겹치는 곳이 더해져 하얗게 뜨지 않게 옅게 (예전 0.55는 캐릭터가 하얗게 깜빡이는 것처럼 보였음)
  ghost(rig, color = '#5ab8ff', dur = 0.28, alpha = 0.26) {
    const mat = new THREE.MeshBasicMaterial({ color: new THREE.Color(color), transparent: true, opacity: alpha, blending: THREE.AdditiveBlending, depthWrite: false });
    const c = cloneSkinned(rig.root);
    c.traverse((o) => { if (o.isMesh) { o.material = mat; o.castShadow = false; o.receiveShadow = false; } });
    this.scene.add(c);
    this.ghosts.push({ c, mat, t: 0, dur, alpha });
  }

  ring(pos, radius, color = '#ffffff', dur = 0.35, mode = 0) {
    const geo = new THREE.CircleGeometry(1, 32);
    const mat = new THREE.ShaderMaterial({
      vertexShader: arcVert, fragmentShader: ringFrag,
      uniforms: { uColor: { value: new THREE.Color(color) }, uAlpha: { value: 1 }, uProg: { value: 0 }, uMode: { value: mode } },
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    });
    const m = new THREE.Mesh(geo, mat);
    m.rotation.x = -Math.PI / 2;
    m.position.copy(pos);
    m.position.y += 0.04;
    m.renderOrder = 25;
    this.scene.add(m);
    const r = { m, mat, t: 0, dur, radius, mode, manual: mode === 1 };
    m.scale.setScalar(mode === 1 ? radius : 0.01);
    this.rings.push(r);
    return r;
  }

  removeRing(r) {
    r.dead = true;
  }

  number(pos, value, kind = 'normal') {
    const el = document.createElement('div');
    el.className = 'dmg ' + kind;
    el.textContent = value;
    this.numLayer.appendChild(el);
    this.numbers.push({ el, p: pos.clone(), vy: 2.6, vx: rand(-0.6, 0.6), t: 0, life: kind === 'heal' ? 1.0 : 0.85 });
  }

  update(dt) {
    this.time += dt;
    this.add.update(dt, this.time);
    this.norm.update(dt, this.time);
    for (let i = this.arcs.length - 1; i >= 0; i--) {
      const a = this.arcs[i];
      a.t += dt;
      const k = a.t / a.dur;
      a.mat.uniforms.uProg.value = a.static ? 1.0 : Math.min(1.55, k * 1.55);
      a.mat.uniforms.uFade.value = a.fadeAll ? Math.max(0, 1 - k) * (a.alpha ?? 1) : k > 0.7 ? Math.max(0, 1 - (k - 0.7) / 0.3) : 1;
      if (a.move) a.move(a, dt);
      if (k >= 1 || a.kill) { this.scene.remove(a.g); a.mat.dispose(); a.g.children[0].geometry.dispose(); this.arcs.splice(i, 1); }
    }
    for (let i = this.rings.length - 1; i >= 0; i--) {
      const r = this.rings[i];
      r.t += dt;
      if (!r.manual) {
        const k = r.t / r.dur;
        r.m.scale.setScalar(0.2 + r.radius * Math.sqrt(k));
        r.mat.uniforms.uAlpha.value = 1 - k;
        if (k >= 1) r.dead = true;
      }
      if (r.dead) { this.scene.remove(r.m); r.mat.dispose(); r.m.geometry.dispose(); this.rings.splice(i, 1); }
    }
    for (let i = this.flashes.length - 1; i >= 0; i--) {
      const fl = this.flashes[i];
      fl.t += dt;
      const k = fl.t / fl.dur;
      const grow = Math.min(1, fl.t / 0.06);
      fl.g.children.forEach((m, j) => { m.scale.x = fl.size * 0.5 * (j ? 0.8 : 1) * (0.3 + 0.7 * grow); m.scale.y = 0.14 * (1 - k * 0.7); });
      for (const m of fl.mats) m.uniforms.uAlpha.value = Math.max(0, 1 - k * k);
      if (k >= 1) { this.scene.remove(fl.g); for (const m of fl.mats) m.dispose(); fl.g.children.forEach((m) => m.geometry.dispose()); this.flashes.splice(i, 1); }
    }
    for (let i = this.circles.length - 1; i >= 0; i--) {
      const c = this.circles[i];
      c.t += dt;
      const k = c.t / c.dur;
      const open = Math.min(1, c.t / 0.18);
      c.m.scale.setScalar(c.radius * (0.4 + 0.6 * (1 - Math.pow(1 - open, 3))));
      c.m.rotation.z += dt * c.spin;
      c.mat.opacity = k > 0.75 ? Math.max(0, 1 - (k - 0.75) / 0.25) : 1;
      if (k >= 1 || c.dead) { this.scene.remove(c.m); c.mat.dispose(); c.m.geometry.dispose(); this.circles.splice(i, 1); }
    }
    for (let i = this.scorches.length - 1; i >= 0; i--) {
      const s = this.scorches[i];
      s.t += dt;
      s.mat.opacity = 0.55 * Math.max(0, 1 - s.t / s.dur);
      if (s.t >= s.dur) { this.scene.remove(s.m); s.mat.dispose(); s.m.geometry.dispose(); this.scorches.splice(i, 1); }
    }
    for (let i = this.streaks.length - 1; i >= 0; i--) {
      const s = this.streaks[i];
      s.t += dt;
      const k = s.t / s.dur;
      s.mat.uniforms.uAlpha.value = Math.max(0, 1 - k * k);
      s.m.scale.y = (s.w / 2) * (1 - k * 0.8);
      if (k >= 1) { this.scene.remove(s.m); s.mat.dispose(); s.m.geometry.dispose(); this.streaks.splice(i, 1); }
    }
    for (let i = this.spikes.length - 1; i >= 0; i--) {
      const s = this.spikes[i];
      s.t += dt;
      const up = Math.min(1, s.t / 0.12);
      s.m.position.y = s.y0 - s.h / 2 + s.h * (1 - Math.pow(1 - up, 3)) * 0.95;
      if (s.t >= s.life) {
        // 부서지는 얼음 조각
        for (let k = 0; k < 6; k++) this.add.emit({ x: s.m.position.x, y: s.y0 + rand(0.2, s.h), z: s.m.position.z, vx: rand(-2, 2), vy: rand(1, 4), vz: rand(-2, 2), g: 12, life: rand(0.3, 0.6), size: 3, endSize: 1, color: '#e8f8ff', color2: '#5aa8ff' });
        this.scene.remove(s.m); s.m.geometry.dispose(); this.spikes.splice(i, 1);
      }
    }
    for (let i = this.bolts.length - 1; i >= 0; i--) {
      const b = this.bolts[i];
      b.t += dt;
      const k = b.t / b.dur;
      b.g.visible = k < 0.35 || Math.floor(b.t * 40) % 2 === 0;
      b.mats[0].opacity = Math.max(0, 1 - k);
      b.mats[1].opacity = 0.55 * Math.max(0, 1 - k);
      if (k >= 1) { this.scene.remove(b.g); b.g.traverse((o) => o.geometry && o.geometry.dispose()); b.mats.forEach((m) => m.dispose()); this.bolts.splice(i, 1); }
    }
    for (let i = this.ghosts.length - 1; i >= 0; i--) {
      const gh = this.ghosts[i];
      gh.t += dt;
      const k = gh.t / gh.dur;
      gh.mat.opacity = gh.alpha * (1 - k) * (1 - k);
      if (k >= 1) { this.scene.remove(gh.c); gh.mat.dispose(); disposeSkeletons(gh.c); this.ghosts.splice(i, 1); }
    }
    for (let i = this.numbers.length - 1; i >= 0; i--) {
      const n = this.numbers[i];
      n.t += dt;
      n.vy -= 7 * dt;
      n.p.y += n.vy * dt;
      n.p.x += n.vx * dt;
      const s = this.pixel.project(n.p);
      const ps = this.pixel.pixelSize;
      const sx = Math.round(s.x / ps) * ps, sy = Math.round(s.y / ps) * ps;
      const pop = n.t < 0.08 ? 1.6 - n.t * 7 : 1;
      n.el.style.transform = `translate(${sx}px, ${sy}px) translate(-50%, -50%) scale(${pop.toFixed(2)})`;
      n.el.style.opacity = n.t > n.life * 0.6 ? String(1 - (n.t - n.life * 0.6) / (n.life * 0.4)) : '1';
      if (n.t >= n.life) { n.el.remove(); this.numbers.splice(i, 1); }
    }
  }
}
