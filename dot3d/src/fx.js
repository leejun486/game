// 이펙트: 도트 파티클, 검기 호, 충격파, 지면 경고, 데미지 숫자
import * as THREE from 'three';
import { rand } from './util.js';

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

export class FX {
  constructor(scene, pixel) {
    this.scene = scene;
    this.pixel = pixel;
    this.add = new ParticlePool(scene, 2500, true);
    this.norm = new ParticlePool(scene, 1500, false);
    this.arcs = [];
    this.rings = [];
    this.numbers = [];
    this.numLayer = document.getElementById('numbers');
    this.time = 0;
  }

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
    this.arcs.push({ g, mat, t: 0, dur: opts.dur ?? 0.2, move: opts.move || null, static: !!opts.static });
    return g;
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
      a.mat.uniforms.uFade.value = k > 0.7 ? Math.max(0, 1 - (k - 0.7) / 0.3) : 1;
      if (a.move) a.move(a, dt);
      if (k >= 1) { this.scene.remove(a.g); a.mat.dispose(); a.g.children[0].geometry.dispose(); this.arcs.splice(i, 1); }
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
