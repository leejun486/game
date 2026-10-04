// 단풍 산성·용궁의 몬스터 리그: 까마귀 요괴, 꽃게 병사, 해파리, 거북 장군
// 다른 리그와 같은 꼴: root, mats, setFlash(v), animate(dt, {speed, attack, hurt, dead})
import * as THREE from 'three';
import { toon } from './materials.js';
import { clamp, lerp, smooth } from './util.js';

const C = (h) => new THREE.Color(h);
function mesh(geo, mat, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.rotation.set(rx, ry, rz);
  return m;
}

class BaseRig {
  constructor() {
    this.mats = [];
    this.root = new THREE.Group();
    this.body = new THREE.Group();
    this.root.add(this.body);
    this.phase = Math.random() * 6;
    this.deadT = 0;
  }
  mat(o) { const m = toon(o); this.mats.push(m); return m; }
  finish() { this.root.traverse((o) => { if (o.isMesh) o.castShadow = true; }); }
  setFlash(v) {
    if (v === this._lastFlash) return;
    this._lastFlash = v;
    for (const m of this.mats) v > 0 ? m.emissive.setRGB(v, v * 0.95, v * 0.9) : m.emissive.set(0, 0, 0);
  }
  // 공격 동작의 세 구간 (준비 0~0.28, 내려침 0.28~0.48, 회복 0.62~1)
  atk(p) {
    if (!p.attack) return [0, 0, 0];
    const t = p.attack.t;
    return [smooth(clamp(t / 0.28, 0, 1)), smooth(clamp((t - 0.28) / 0.2, 0, 1)), smooth(clamp((t - 0.62) / 0.38, 0, 1))];
  }
}

// ======================= 단풍 산성 =======================
// 까마귀 요괴: 붉은 눈의 큰 까마귀. 공중에 떠서 날개를 치며 깃털 화살을 쏨
export class CrowRig extends BaseRig {
  constructor() {
    super();
    const black = this.mat({ color: C('#1c1a24') }), sheen = this.mat({ color: C('#3a3450') }), beak = this.mat({ color: C('#c8a040') });
    const eyeM = toon({ color: C('#ff3a2a'), emissive: C('#aa0a00'), emissiveIntensity: 1.4 });
    this.body.scale.setScalar(1.25);
    this.fly = new THREE.Group();
    this.fly.position.y = 1.25;
    this.body.add(this.fly);
    const trunk = mesh(new THREE.SphereGeometry(0.24, 12, 8), black);
    trunk.scale.set(0.9, 0.85, 1.35);
    this.fly.add(trunk);
    this.fly.add(mesh(new THREE.SphereGeometry(0.17, 10, 8), sheen, 0, 0.04, 0.05)).scale.set(1, 0.8, 1.2);
    this.head = new THREE.Group();
    this.head.position.set(0, 0.12, 0.3);
    this.fly.add(this.head);
    this.head.add(mesh(new THREE.SphereGeometry(0.14, 10, 8), black));
    this.head.add(mesh(new THREE.ConeGeometry(0.06, 0.24, 6), beak, 0, -0.02, 0.2, Math.PI / 2, 0, 0));
    for (const s of [-1, 1]) {
      this.head.add(mesh(new THREE.SphereGeometry(0.035, 6, 4), eyeM, s * 0.08, 0.04, 0.09));
      // 머리 깃
      this.head.add(mesh(new THREE.ConeGeometry(0.03, 0.16, 4), black, s * 0.04, 0.14, -0.06, -0.6, 0, s * 0.3));
    }
    // 날개: 어깨 → 깃털 세 장
    this.wings = [];
    for (const s of [-1, 1]) {
      const w = new THREE.Group();
      w.position.set(s * 0.18, 0.08, 0.02);
      for (let k = 0; k < 4; k++) {
        const f = mesh(new THREE.BoxGeometry(0.36 - k * 0.04, 0.025, 0.14), k % 2 ? sheen : black, s * (0.18 + k * 0.17), 0, -k * 0.05);
        f.rotation.y = s * k * 0.12;
        w.add(f);
      }
      this.fly.add(w);
      this.wings.push({ g: w, s });
    }
    // 꼬리깃과 세 발
    for (let k = -1; k <= 1; k++) this.fly.add(mesh(new THREE.BoxGeometry(0.08, 0.02, 0.32), black, k * 0.07, -0.02, -0.38, 0, k * 0.25, 0));
    for (let k = -1; k <= 1; k++) this.fly.add(mesh(new THREE.CylinderGeometry(0.015, 0.012, 0.22, 4), beak, k * 0.06, -0.26, 0.02));
    this.finish();
  }
  animate(dt, p) {
    this.phase += dt * (p.attack ? 22 : 13);
    const f = Math.sin(this.phase);
    for (const w of this.wings) w.g.rotation.z = w.s * (f * 0.7 + 0.15);
    let pitch = 0;
    if (p.attack) { const [a] = this.atk(p); pitch = -a * 0.5; this.fly.position.z = -a * 0.15; } else this.fly.position.z = 0;
    this.fly.position.y = 1.25 + Math.sin(this.phase * 0.5) * 0.08 - Math.max(0, f) * 0.04;
    this.fly.rotation.x = pitch + (p.hurt > 0 ? -0.4 * p.hurt : 0);
    if (p.dead) {
      this.deadT += dt;
      const k = smooth(clamp(this.deadT / 0.45, 0, 1));
      this.fly.position.y = lerp(1.25, 0.15, k);
      this.fly.rotation.z = k * 2.4;
    } else { this.deadT = 0; this.fly.rotation.z = 0; }
  }
}

// ======================= 용궁 =======================
// 꽃게 병사: 넓적한 등딱지, 긴 집게 둘, 옆으로 종종걸음
export class CrabRig extends BaseRig {
  constructor() {
    super();
    const shell = this.mat({ color: C('#c8462a') }), under = this.mat({ color: C('#f0c8a0') }), dark = this.mat({ color: C('#6a1a10') });
    const eyeM = toon({ color: C('#101010') });
    this.body.scale.setScalar(1.35);
    this.torso = new THREE.Group();
    this.torso.position.y = 0.36;
    this.body.add(this.torso);
    const top = mesh(new THREE.SphereGeometry(0.36, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), shell);
    top.scale.set(1.25, 0.5, 0.95);
    this.torso.add(top);
    const bot = mesh(new THREE.SphereGeometry(0.36, 12, 6, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), under);
    bot.scale.set(1.2, 0.3, 0.9);
    this.torso.add(bot);
    for (const s of [-1, 1]) {
      for (let k = 0; k < 3; k++) this.torso.add(mesh(new THREE.ConeGeometry(0.035, 0.12, 4), dark, s * (0.3 + k * 0.06), 0.06, 0.18 - k * 0.12, 0, 0, -s * 1.3));
      this.torso.add(mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.16, 4), dark, s * 0.09, 0.2, 0.26));
      this.torso.add(mesh(new THREE.SphereGeometry(0.045, 6, 4), eyeM, s * 0.09, 0.29, 0.26));
    }
    // 집게
    this.claws = [];
    for (const s of [-1, 1]) {
      const arm = new THREE.Group();
      arm.position.set(s * 0.32, 0.02, 0.24);
      arm.add(mesh(new THREE.CapsuleGeometry(0.05, 0.22, 3, 6), shell, s * 0.06, 0, 0.12, Math.PI / 2, 0, -s * 0.5));
      const hand = new THREE.Group();
      hand.position.set(s * 0.12, 0.02, 0.32);
      hand.add(mesh(new THREE.SphereGeometry(0.11, 8, 6), shell, 0, 0, 0.04)).scale.set(0.9, 0.8, 1.3);
      hand.add(mesh(new THREE.ConeGeometry(0.05, 0.2, 5), shell, 0, 0.04, 0.2, Math.PI / 2, 0, 0));
      const pin = new THREE.Group();
      pin.position.set(0, -0.03, 0.08);
      pin.add(mesh(new THREE.ConeGeometry(0.035, 0.18, 5), dark, 0, 0, 0.1, Math.PI / 2, 0, 0));
      hand.add(pin);
      arm.add(hand);
      this.torso.add(arm);
      this.claws.push({ arm, pin, s });
    }
    // 다리 여섯
    this.legs = [];
    for (const s of [-1, 1]) for (let k = 0; k < 3; k++) {
      const g = new THREE.Group();
      g.position.set(s * 0.36, 0, 0.1 - k * 0.16);
      const up = mesh(new THREE.CylinderGeometry(0.025, 0.02, 0.24, 4), shell, s * 0.1, 0.03, 0, 0, 0, s * 1.1);
      g.add(up);
      g.add(mesh(new THREE.CylinderGeometry(0.02, 0.01, 0.3, 4), dark, s * 0.22, -0.16, 0, 0, 0, s * 0.3));
      this.torso.add(g);
      this.legs.push({ g, s, k });
    }
    this.finish();
  }
  animate(dt, p) {
    const s = p.speed || 0;
    this.phase += dt * (3 + s * 4);
    const [a, b, r] = this.atk(p);
    for (const L of this.legs) L.g.rotation.x = s > 0 ? Math.sin(this.phase + L.k * 2 + (L.s > 0 ? 1 : 0)) * 0.4 : 0;
    this.torso.position.y = 0.36 + (s > 0 ? Math.abs(Math.sin(this.phase * 2)) * 0.03 : 0);
    for (const c of this.claws) {
      c.arm.rotation.x = (-a * 0.9 + b * 1.3) * (1 - r);
      c.pin.rotation.x = -0.35 + (a - b) * 0.5 * (1 - r) + Math.sin(this.phase * 0.7 + c.s) * 0.08;
    }
    this.torso.rotation.z = p.hurt > 0 ? Math.sin(this.phase * 30) * 0.1 * p.hurt : 0;
    if (p.dead) {
      this.deadT += dt;
      this.body.rotation.z = smooth(clamp(this.deadT / 0.4, 0, 1)) * Math.PI;
      this.body.position.y = 0.35 * smooth(clamp(this.deadT / 0.4, 0, 1));
    } else { this.deadT = 0; this.body.rotation.z = 0; this.body.position.y = 0; }
  }
}

// 해파리: 반투명한 갓, 늘어진 촉수. 공중에 떠서 독 방울을 쏨 (맞으면 느려짐)
export class JellyRig extends BaseRig {
  constructor() {
    super();
    const bell = this.mat({ color: C('#d8a0ff'), transparent: true, opacity: 0.72 });
    const core = toon({ color: C('#ffe0ff'), emissive: C('#c84aff'), emissiveIntensity: 1.2 });
    const tent = this.mat({ color: C('#f0c8ff'), transparent: true, opacity: 0.6 });
    this.body.scale.setScalar(1.2);
    this.fly = new THREE.Group();
    this.fly.position.y = 1.3;
    this.body.add(this.fly);
    this.bell = mesh(new THREE.SphereGeometry(0.36, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), bell);
    this.bell.material.side = THREE.DoubleSide;
    this.fly.add(this.bell);
    this.fly.add(mesh(new THREE.SphereGeometry(0.16, 10, 8), core, 0, 0.1, 0));
    this.fly.add(mesh(new THREE.TorusGeometry(0.34, 0.03, 6, 20), tent, 0, 0.0, 0, Math.PI / 2, 0, 0));
    this.tents = [];
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      const g = new THREE.Group();
      g.position.set(Math.cos(a) * 0.24, 0, Math.sin(a) * 0.24);
      const len = 0.5 + (i % 3) * 0.15;
      g.add(mesh(new THREE.CylinderGeometry(0.025, 0.008, len, 4), tent, 0, -len / 2, 0));
      this.fly.add(g);
      this.tents.push({ g, a, ph: i * 0.8 });
    }
    this.finish();
    // 반투명 몸은 그림자를 드리우지 않음
    this.bell.castShadow = false;
  }
  animate(dt, p) {
    this.phase += dt * 2.4;
    const pulse = Math.sin(this.phase * 1.6);
    let sq = pulse * 0.08;
    if (p.attack) { const [a] = this.atk(p); sq = -a * 0.2; }
    this.bell.scale.set(1 - sq, 1 + sq * 1.4, 1 - sq);
    this.fly.position.y = 1.3 + Math.sin(this.phase) * 0.12;
    for (const t of this.tents) {
      t.g.rotation.x = Math.sin(this.phase * 1.3 + t.ph) * 0.25 * Math.sin(t.a);
      t.g.rotation.z = Math.sin(this.phase * 1.3 + t.ph) * 0.25 * Math.cos(t.a);
    }
    this.fly.rotation.z = p.hurt > 0 ? Math.sin(this.phase * 40) * 0.15 * p.hurt : 0;
    if (p.dead) {
      this.deadT += dt;
      const k = smooth(clamp(this.deadT / 0.5, 0, 1));
      this.fly.position.y = lerp(1.3, 0.2, k);
      this.fly.scale.set(1 + k * 0.4, 1 - k * 0.7, 1 + k * 0.4);
    } else { this.deadT = 0; this.fly.scale.set(1, 1, 1); }
  }
}

// 거북 장군: 등딱지에 투구를 쓴 큰 거북. 두 발로 서서 등딱지로 내려찍음 (단단함)
export class TurtleRig extends BaseRig {
  constructor() {
    super();
    const skin = this.mat({ color: C('#6a8a5a') }), shellM = this.mat({ color: C('#4a5a3a') }), rim = this.mat({ color: C('#c8b070') });
    const helm = this.mat({ color: C('#3a3a48') }), gold = this.mat({ color: C('#e0b040') }), belly = this.mat({ color: C('#d8cc98') });
    const eyeM = toon({ color: C('#ffe060'), emissive: C('#6a4a00') });
    this.body.scale.setScalar(1.3);
    this.torso = new THREE.Group();
    this.torso.position.y = 0.5;
    this.body.add(this.torso);
    // 배딱지(앞)와 등딱지(뒤)
    const plast = mesh(new THREE.SphereGeometry(0.34, 12, 8), belly, 0, 0.32, 0.05);
    plast.scale.set(1, 1.15, 0.7);
    this.torso.add(plast);
    const back = mesh(new THREE.SphereGeometry(0.46, 14, 10, 0, Math.PI * 2, 0, Math.PI / 2), shellM, 0, 0.32, -0.12, -Math.PI / 2, 0, 0);
    back.scale.set(1, 1, 0.75);
    this.torso.add(back);
    this.torso.add(mesh(new THREE.TorusGeometry(0.44, 0.04, 6, 24), rim, 0, 0.32, -0.12));
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      this.torso.add(mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.03, 6), rim, Math.cos(a) * 0.22, 0.32 + Math.sin(a) * 0.22, -0.44, Math.PI / 2, 0, 0));
    }
    // 머리 + 투구
    this.head = new THREE.Group();
    this.head.position.set(0, 0.82, 0.08);
    this.torso.add(this.head);
    const hd = mesh(new THREE.SphereGeometry(0.16, 10, 8), skin, 0, 0, 0.04);
    hd.scale.set(1, 0.9, 1.2);
    this.head.add(hd);
    this.head.add(mesh(new THREE.SphereGeometry(0.19, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), helm, 0, 0.04, 0));
    this.head.add(mesh(new THREE.ConeGeometry(0.04, 0.2, 5), gold, 0, 0.27, 0));
    this.head.add(mesh(new THREE.BoxGeometry(0.4, 0.03, 0.04), gold, 0, 0.06, 0.12));
    for (const s of [-1, 1]) this.head.add(mesh(new THREE.SphereGeometry(0.03, 6, 4), eyeM, s * 0.08, 0.0, 0.2));
    // 팔: 짧고 굵은 앞발 (물갈퀴 방패)
    this.arms = [];
    for (const s of [-1, 1]) {
      const g = new THREE.Group();
      g.position.set(s * 0.36, 0.55, 0.05);
      g.add(mesh(new THREE.CapsuleGeometry(0.08, 0.24, 3, 6), skin, 0, -0.18, 0));
      g.add(mesh(new THREE.BoxGeometry(0.2, 0.06, 0.24), skin, 0, -0.38, 0.04));
      this.torso.add(g);
      this.arms.push(g);
    }
    this.legs = [];
    for (const s of [-1, 1]) {
      const g = new THREE.Group();
      g.position.set(s * 0.2, 0.5, 0);
      g.add(mesh(new THREE.CapsuleGeometry(0.1, 0.22, 3, 6), skin, 0, -0.26, 0));
      g.add(mesh(new THREE.BoxGeometry(0.22, 0.07, 0.28), skin, 0, -0.48, 0.05));
      this.body.add(g);
      this.legs.push(g);
    }
    this.finish();
  }
  animate(dt, p) {
    const s = p.speed || 0, walk = clamp(s / 2, 0, 1);
    this.phase += dt * (2 + s * 1.5);
    const w = Math.sin(this.phase) * walk;
    this.legs[0].rotation.x = w * 0.45; this.legs[1].rotation.x = -w * 0.45;
    this.torso.rotation.z = w * 0.07;
    const [a, b, r] = this.atk(p);
    // 공격: 등을 젖혔다가 앞으로 엎어지며 내려찍음
    this.torso.rotation.x = (-0.3 * a + 0.75 * b) * (1 - r);
    for (const g of this.arms) g.rotation.x = (-2.2 * a + 2.6 * b) * (1 - r) + (p.attack ? 0 : -w * 0.4 * (g === this.arms[0] ? 1 : -1));
    this.head.rotation.x = p.hurt > 0 ? -0.3 * p.hurt : 0;
    if (p.dead) {
      this.deadT += dt;
      this.body.rotation.x = -smooth(clamp(this.deadT / 0.5, 0, 1)) * Math.PI / 2;
    } else { this.deadT = 0; this.body.rotation.x = 0; }
  }
}

// ======================= 청류 계곡 =======================
// 왕벌 요괴: 노랑·검정 줄무늬 배, 빠르게 떠는 날개. 공중에서 독침을 쏨
export class BeeRig extends BaseRig {
  constructor() {
    super();
    const yel = this.mat({ color: C('#f0c020') }), blk = this.mat({ color: C('#1a1410') });
    const wingM = this.mat({ color: C('#e8f4ff'), transparent: true, opacity: 0.55 });
    const eyeM = toon({ color: C('#ff3a1a'), emissive: C('#8a0a00') });
    this.body.scale.setScalar(1.3);
    this.fly = new THREE.Group();
    this.fly.position.y = 1.2;
    this.body.add(this.fly);
    this.fly.add(mesh(new THREE.SphereGeometry(0.13, 10, 8), blk, 0, 0, 0.08)).scale.set(1, 0.95, 1.1);
    this.head = new THREE.Group();
    this.head.position.set(0, 0.02, 0.24);
    this.fly.add(this.head);
    this.head.add(mesh(new THREE.SphereGeometry(0.1, 10, 8), yel));
    for (const s of [-1, 1]) {
      this.head.add(mesh(new THREE.SphereGeometry(0.05, 6, 4), eyeM, s * 0.06, 0.03, 0.05));
      this.head.add(mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.18, 4), blk, s * 0.04, 0.13, 0.04, 0.4, 0, s * 0.3));
    }
    // 배: 줄무늬 마디 + 침
    this.abd = new THREE.Group();
    this.abd.position.set(0, -0.02, -0.08);
    this.fly.add(this.abd);
    for (let k = 0; k < 4; k++) {
      const b = mesh(new THREE.SphereGeometry(0.15 - k * 0.02, 10, 8), k % 2 ? blk : yel, 0, -k * 0.03, -k * 0.11);
      b.scale.set(1, 0.9, 0.8);
      this.abd.add(b);
    }
    this.abd.add(mesh(new THREE.ConeGeometry(0.03, 0.14, 5), blk, 0, -0.12, -0.48, -Math.PI / 2 - 0.3, 0, 0));
    this.wings = [];
    for (const s of [-1, 1]) {
      const w = new THREE.Group();
      w.position.set(s * 0.08, 0.1, 0.06);
      const m = mesh(new THREE.SphereGeometry(0.2, 8, 4), wingM, s * 0.18, 0, -0.04);
      m.scale.set(1, 0.08, 0.45);
      w.add(m);
      this.fly.add(w);
      this.wings.push({ g: w, s });
    }
    for (let k = 0; k < 3; k++) for (const s of [-1, 1]) this.fly.add(mesh(new THREE.CylinderGeometry(0.01, 0.008, 0.16, 4), blk, s * 0.08, -0.12, 0.12 - k * 0.07, 0, 0, s * 0.5));
    this.finish();
    for (const w of this.wings) w.g.children[0].castShadow = false;
  }
  animate(dt, p) {
    this.phase += dt * 60;
    for (const w of this.wings) w.g.rotation.z = w.s * Math.sin(this.phase) * 0.6;
    let curl = 0;
    if (p.attack) { const [a, b, r] = this.atk(p); curl = (a - b * 0.5) * (1 - r); }
    this.abd.rotation.x = curl * 0.9;
    this.fly.position.y = 1.2 + Math.sin(this.phase * 0.05) * 0.1;
    this.fly.rotation.z = p.hurt > 0 ? Math.sin(this.phase * 0.5) * 0.2 * p.hurt : 0;
    if (p.dead) {
      this.deadT += dt;
      const k = smooth(clamp(this.deadT / 0.4, 0, 1));
      this.fly.position.y = lerp(1.2, 0.12, k);
      this.fly.rotation.z = k * 3;
    } else this.deadT = 0;
  }
}

// 사마귀 요괴: 꼿꼿이 선 가슴, 낫 같은 앞발 둘로 베어 냄
export class MantisRig extends BaseRig {
  constructor() {
    super();
    const g1 = this.mat({ color: C('#6ab04a') }), g2 = this.mat({ color: C('#a8d86a') }), dk = this.mat({ color: C('#2a5a2a') });
    const eyeM = toon({ color: C('#e8ff7a'), emissive: C('#5a8a00') });
    this.body.scale.setScalar(1.45);
    // 배 (뒤로 길게)
    const abd = mesh(new THREE.SphereGeometry(0.16, 10, 8), g1, 0, 0.42, -0.3);
    abd.scale.set(0.9, 0.8, 2.0);
    this.body.add(abd);
    // 가슴 (곧추섬)
    this.torso = new THREE.Group();
    this.torso.position.set(0, 0.45, -0.02);
    this.body.add(this.torso);
    const th = mesh(new THREE.CapsuleGeometry(0.06, 0.45, 3, 6), g2, 0, 0.25, 0.04);
    th.rotation.x = 0.35;
    this.torso.add(th);
    this.head = new THREE.Group();
    this.head.position.set(0, 0.58, 0.16);
    this.torso.add(this.head);
    const hd = mesh(new THREE.ConeGeometry(0.11, 0.16, 3), g2, 0, 0, 0.02, Math.PI, 0, 0);
    this.head.add(hd);
    for (const s of [-1, 1]) {
      this.head.add(mesh(new THREE.SphereGeometry(0.045, 6, 4), eyeM, s * 0.09, 0.03, 0.02));
      this.head.add(mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.3, 3), dk, s * 0.04, 0.17, 0.06, 0.6, 0, s * 0.3));
    }
    // 낫 앞발
    this.arms = [];
    for (const s of [-1, 1]) {
      const a = new THREE.Group();
      a.position.set(s * 0.07, 0.42, 0.12);
      a.add(mesh(new THREE.CapsuleGeometry(0.03, 0.22, 3, 5), g1, 0, -0.06, 0.1, 1.0, 0, 0));
      const fore = new THREE.Group();
      fore.position.set(0, -0.12, 0.22);
      fore.add(mesh(new THREE.BoxGeometry(0.03, 0.3, 0.05), g2, 0, 0.15, 0));
      for (let k = 0; k < 4; k++) fore.add(mesh(new THREE.ConeGeometry(0.012, 0.06, 3), dk, 0, 0.05 + k * 0.06, 0.03, Math.PI / 2, 0, 0));
      a.add(fore);
      this.torso.add(a);
      this.arms.push({ a, fore, s });
    }
    // 다리 넷
    this.legs = [];
    for (const [x, z] of [[-1, 0], [1, 0], [-1, -0.25], [1, -0.25]]) {
      const g = new THREE.Group();
      g.position.set(x * 0.08, 0.42, z);
      g.add(mesh(new THREE.CylinderGeometry(0.015, 0.012, 0.5, 4), dk, x * 0.12, -0.2, 0, 0, 0, x * 0.5));
      this.body.add(g);
      this.legs.push(g);
    }
    // 날개 (등에 접힘)
    const wing = mesh(new THREE.SphereGeometry(0.16, 8, 4), this.mat({ color: C('#c8e8a0'), transparent: true, opacity: 0.7 }), 0, 0.52, -0.32);
    wing.scale.set(0.9, 0.15, 2.2);
    this.body.add(wing);
    this.finish();
  }
  animate(dt, p) {
    const s = p.speed || 0;
    this.phase += dt * (3 + s * 3);
    this.legs.forEach((l, i) => (l.rotation.x = s > 0 ? Math.sin(this.phase + i * 1.6) * 0.4 : 0));
    const [a, b, r] = this.atk(p);
    for (const A of this.arms) {
      A.a.rotation.x = (-1.3 * a + 1.8 * b) * (1 - r) + Math.sin(this.phase * 0.5 + A.s) * 0.05;
      A.fore.rotation.x = -0.8 + (0.9 * a - 0.6 * b) * (1 - r);
    }
    this.torso.rotation.x = (-0.25 * a + 0.4 * b) * (1 - r) + (p.hurt > 0 ? -0.3 * p.hurt : 0);
    this.head.rotation.y = Math.sin(this.phase * 0.3) * 0.3;
    if (p.dead) {
      this.deadT += dt;
      this.body.rotation.z = smooth(clamp(this.deadT / 0.45, 0, 1)) * Math.PI / 2;
    } else { this.deadT = 0; this.body.rotation.z = 0; }
  }
}

export const makeCrow = () => new CrowRig();
export const makeCrab = () => new CrabRig();
export const makeJelly = () => new JellyRig();
export const makeTurtle = () => new TurtleRig();
export const makeBee = () => new BeeRig();
export const makeMantis = () => new MantisRig();
