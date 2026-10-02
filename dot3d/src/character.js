// 2.5등신 로우폴리 캐릭터 + 절차적 애니메이션
import * as THREE from 'three';
import { toon } from './materials.js';
import { tigerTex } from './textures.js';
import { clamp, lerp, smooth } from './util.js';

const C = (h) => new THREE.Color(h);

function mesh(geo, mat, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

export class Rig {
  constructor(cfg) {
    this.cfg = cfg;
    this.mats = [];
    const mat = (o) => { const m = toon(o); m.userData.baseEmissive = (o.emissive || C('#000')).clone?.() || C('#000'); this.mats.push(m); return m; };
    this.mat = mat;
    const s = cfg.scale || 1;
    this.root = new THREE.Group();
    this.body = new THREE.Group();
    this.body.scale.setScalar(s);
    this.root.add(this.body);

    const skin = mat({ color: C(cfg.skin) });
    const legLen = cfg.legLen ?? 0.36;
    this.legLen = legLen;
    // 다리
    const legMat = mat({ color: C(cfg.pants) });
    const shoeMat = mat({ color: C(cfg.shoes || '#26211f') });
    this.legs = [];
    for (const side of [-1, 1]) {
      const g = new THREE.Group();
      g.position.set(side * 0.1 * (cfg.wide || 1), legLen, 0);
      g.add(mesh(new THREE.CapsuleGeometry(0.075 * (cfg.limb || 1), legLen - 0.15, 3, 6), legMat, 0, -legLen / 2 + 0.02, 0));
      g.add(mesh(new THREE.BoxGeometry(0.14, 0.08, 0.2), shoeMat, 0, -legLen + 0.04, 0.03));
      this.body.add(g);
      this.legs.push(g);
    }
    // 골반 / 몸통
    this.hips = new THREE.Group();
    this.hips.position.y = legLen;
    this.body.add(this.hips);
    this.chest = new THREE.Group();
    this.chest.position.y = cfg.torsoH ?? 0.4;
    this.hips.add(this.chest);

    if (cfg.type === 'hero' || cfg.type === 'guard') {
      const robe = mat({ color: C(cfg.robe) });
      const belt = mat({ color: C(cfg.belt) });
      this.hips.add(mesh(new THREE.CylinderGeometry(0.17, 0.235, 0.44, 10), robe, 0, 0.2, 0));
      this.hips.add(mesh(new THREE.CylinderGeometry(0.24, 0.31, 0.24, 10), robe, 0, -0.04, 0));
      this.hips.add(mesh(new THREE.CylinderGeometry(0.215, 0.225, 0.07, 10), belt, 0, 0.1, 0));
      // 깃 (V자)
      const collar = mat({ color: C(cfg.collar || '#2a2a36') });
      const cl = mesh(new THREE.BoxGeometry(0.05, 0.26, 0.04), collar, 0.05, 0.3, 0.19);
      cl.rotation.z = 0.5; this.hips.add(cl);
      const cr = mesh(new THREE.BoxGeometry(0.05, 0.26, 0.04), collar, -0.05, 0.3, 0.19);
      cr.rotation.z = -0.5; this.hips.add(cr);
      // 옷고름
      const tie = mesh(new THREE.BoxGeometry(0.04, 0.16, 0.02), belt, 0.06, 0.04, 0.24);
      tie.rotation.z = 0.2; this.hips.add(tie);
      this.tie = tie;
    } else if (cfg.type === 'lady') {
      const top = mat({ color: C(cfg.robe) });
      const skirt = mat({ color: C(cfg.skirt) });
      this.hips.add(mesh(new THREE.CylinderGeometry(0.15, 0.2, 0.22, 10), top, 0, 0.3, 0));
      this.hips.add(mesh(new THREE.CylinderGeometry(0.17, 0.42, 0.62, 12), skirt, 0, -0.06, 0));
      const ribbon = mat({ color: C('#c23a4a') });
      this.hips.add(mesh(new THREE.BoxGeometry(0.06, 0.2, 0.03), ribbon, 0.04, 0.18, 0.18));
    } else if (cfg.type === 'dokkaebi') {
      // 볼록한 배 + 호피 반바지
      this.hips.add(mesh(new THREE.SphereGeometry(0.27, 10, 8), skin, 0, 0.25, 0.02));
      const tiger = mat({ map: tigerTex() });
      this.hips.add(mesh(new THREE.CylinderGeometry(0.25, 0.29, 0.2, 10), tiger, 0, 0.0, 0));
      const beltM = mat({ color: C('#2b2220') });
      this.hips.add(mesh(new THREE.CylinderGeometry(0.262, 0.262, 0.05, 10), beltM, 0, 0.1, 0));
    }

    // 머리
    this.head = new THREE.Group();
    this.head.position.y = cfg.neck ?? 0.27;
    this.chest.add(this.head);
    const hr = cfg.headR ?? 0.27;
    const headMesh = mesh(new THREE.SphereGeometry(hr, 14, 10), skin);
    headMesh.scale.set(1, 0.93, 0.95);
    this.head.add(headMesh);
    this.buildFace(hr, cfg);
    this.buildHair(hr, cfg);

    // 팔
    this.arms = [];
    const sleeve = mat({ color: C(cfg.sleeve || cfg.robe || cfg.skin) });
    for (const side of [-1, 1]) {
      const g = new THREE.Group();
      g.position.set(side * (cfg.shoulder ?? 0.21), -0.03, 0);
      const arm = mesh(new THREE.CapsuleGeometry(0.068 * (cfg.limb || 1), 0.2, 3, 6), sleeve, 0, -0.14, 0);
      g.add(arm);
      if (cfg.cuff) g.add(mesh(new THREE.CylinderGeometry(0.08, 0.085, 0.05, 8), mat({ color: C(cfg.cuff) }), 0, -0.26, 0));
      const hand = new THREE.Group();
      hand.position.y = -0.31;
      hand.add(mesh(new THREE.SphereGeometry(0.065 * (cfg.limb || 1), 6, 5), skin));
      g.add(hand);
      g.userData.hand = hand;
      this.chest.add(g);
      this.arms.push(g);
    }
    // arms[0] = 오른팔(-x), arms[1] = 왼팔(+x)
    this.armR = this.arms[0];
    this.armL = this.arms[1];
    this.handR = this.armR.userData.hand;

    if (cfg.weapon) this.buildWeapon(cfg.weapon);

    this.root.traverse((o) => { if (o.isMesh) o.castShadow = true; });

    // 애니메이션 상태
    this.phase = 0;
    this.idleT = Math.random() * 10;
    this.flash = 0;
    this.lean = 0;
    this.deadT = 0;
  }

  buildFace(hr, cfg) {
    const eye = this.mat({ color: C(cfg.eye || '#1b1416') });
    const z = hr * 0.93;
    if (cfg.type === 'dokkaebi') {
      // 눈은 발광 (밤에도 번뜩이도록, 피격 플래시와 별개)
      const white = toon({ color: C('#f4e86a'), emissive: C('#7a6410') });
      for (const s of [-1, 1]) {
        const e = mesh(new THREE.SphereGeometry(0.075, 6, 5), white, s * 0.11, 0.03, z - 0.04);
        e.scale.z = 0.5;
        this.head.add(e);
        this.head.add(mesh(new THREE.BoxGeometry(0.045, 0.06, 0.02), eye, s * 0.11, 0.03, z + 0.0));
        // 눈썹
        const br = mesh(new THREE.BoxGeometry(0.12, 0.035, 0.03), this.mat({ color: C(cfg.hair) }), s * 0.11, 0.13, z - 0.02);
        br.rotation.z = s * 0.35;
        this.head.add(br);
      }
      // 큰 입 + 이빨
      const mouth = mesh(new THREE.BoxGeometry(0.26, 0.07, 0.04), this.mat({ color: C('#5a1820') }), 0, -0.11, z - 0.05);
      this.head.add(mouth);
      const tooth = this.mat({ color: C('#fbf6e8') });
      for (const s of [-1, 1]) this.head.add(mesh(new THREE.ConeGeometry(0.025, 0.07, 4), tooth, s * 0.08, -0.06, z - 0.03));
      // 뿔
      const hornM = this.mat({ color: C(cfg.horn || '#efe2b0') });
      const horns = cfg.horns ?? 1;
      for (let i = 0; i < horns; i++) {
        const x = horns === 1 ? 0 : (i ? 0.13 : -0.13);
        const h = mesh(new THREE.ConeGeometry(0.06, 0.24, 6), hornM, x, hr + 0.06, 0.02);
        h.rotation.z = -x * 1.5;
        this.head.add(h);
      }
      // 코
      this.head.add(mesh(new THREE.SphereGeometry(0.05, 5, 4), this.mat({ color: new THREE.Color(cfg.skin).multiplyScalar(0.8) }), 0, -0.02, z));
    } else {
      for (const s of [-1, 1]) {
        this.head.add(mesh(new THREE.BoxGeometry(0.05, 0.085, 0.03), eye, s * 0.095, -0.02, z - 0.01));
        // 눈 하이라이트
        this.head.add(mesh(new THREE.BoxGeometry(0.02, 0.025, 0.01), this.mat({ color: C('#ffffff') }), s * 0.095 + 0.01, 0.005, z + 0.008));
      }
      const blush = this.mat({ color: C('#f0a0a0') });
      for (const s of [-1, 1]) this.head.add(mesh(new THREE.BoxGeometry(0.06, 0.025, 0.02), blush, s * 0.16, -0.085, z - 0.06));
    }
  }

  buildHair(hr, cfg) {
    const hairM = this.mat({ color: C(cfg.hair || '#231c1e') });
    if (cfg.type === 'dokkaebi') {
      // 삐죽삐죽한 산발
      for (let i = 0; i < 9; i++) {
        const a = (i / 9) * Math.PI * 2;
        const spike = mesh(new THREE.ConeGeometry(0.07, 0.22, 4), hairM);
        const dir = new THREE.Vector3(Math.cos(a) * 0.8, 0.55, Math.sin(a) * 0.8 - 0.25).normalize();
        spike.position.copy(dir).multiplyScalar(hr * 0.95);
        spike.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
        this.head.add(spike);
      }
      return;
    }
    // 뒷머리 캡
    const cap = mesh(new THREE.SphereGeometry(hr * 1.06, 14, 8, 0, Math.PI * 2, 0, Math.PI * 0.5), hairM);
    cap.rotation.x = -0.35;
    cap.position.set(0, 0.02, -0.02);
    this.head.add(cap);
    // 앞머리
    for (let i = -2; i <= 2; i++) {
      const b = mesh(new THREE.BoxGeometry(0.09, 0.12, 0.06), hairM, i * 0.07, hr * 0.62, hr * 0.68);
      b.rotation.x = 0.5;
      b.rotation.z = i * 0.15;
      this.head.add(b);
    }
    if (cfg.type === 'hero') {
      // 상투 + 머리띠 + 댕기
      this.head.add(mesh(new THREE.SphereGeometry(0.09, 8, 6), hairM, 0, hr + 0.04, -0.06));
      const band = mesh(new THREE.TorusGeometry(hr * 0.98, 0.025, 4, 16), this.mat({ color: C('#c8302c') }), 0, 0.09, 0);
      band.rotation.x = Math.PI / 2 - 0.3;
      this.head.add(band);
      const tail = new THREE.Group();
      tail.position.set(0, 0.06, -hr * 0.95);
      const rib = mesh(new THREE.BoxGeometry(0.07, 0.36, 0.02), this.mat({ color: C('#c8302c') }), 0, -0.18, 0);
      tail.add(rib);
      this.head.add(tail);
      this.tail = tail;
    } else if (cfg.type === 'guard') {
      // 전립 (챙 넓은 모자)
      const hatM = this.mat({ color: C('#1d1b22') });
      this.head.add(mesh(new THREE.CylinderGeometry(0.44, 0.44, 0.03, 16), hatM, 0, hr * 0.62, 0));
      this.head.add(mesh(new THREE.SphereGeometry(0.2, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), hatM, 0, hr * 0.62, 0));
      this.head.add(mesh(new THREE.SphereGeometry(0.05, 5, 4), this.mat({ color: C('#d0a030') }), 0, hr * 0.62 + 0.22, 0));
      this.head.add(mesh(new THREE.ConeGeometry(0.05, 0.15, 5), this.mat({ color: C('#c8302c') }), 0, hr * 0.62 + 0.3, 0));
    } else if (cfg.type === 'lady') {
      this.head.add(mesh(new THREE.SphereGeometry(0.13, 8, 6), hairM, 0, -0.05, -hr * 0.95));
      this.head.add(mesh(new THREE.BoxGeometry(0.3, 0.025, 0.025), this.mat({ color: C('#e0b040') }), 0, -0.04, -hr * 1.1));
    }
  }

  buildWeapon(kind) {
    const hand = this.handR;
    const w = new THREE.Group();
    // 무기는 팔의 연장선(-y) 방향으로
    if (kind === 'sword') {
      // 일본도풍: 긴 손잡이(엮은 끈 무늬), 둥근 코등이, 가늘고 길게 휜 칼날
      const blade = this.mat({ color: C('#c9d4e0'), emissive: C('#000000') });
      const edge = this.mat({ color: C('#ffffff'), emissive: C('#000000') });
      const wrap = this.mat({ color: C('#1c1824') });
      const wrapLight = this.mat({ color: C('#d8d0e8') });
      const gold = this.mat({ color: C('#d9a83a') });
      const black = this.mat({ color: C('#141218') });
      // 손잡이: 손 위아래로 길게 (양손 잡이)
      for (let i = 0; i < 6; i++) {
        w.add(mesh(new THREE.CylinderGeometry(0.023, 0.023, 0.045, 6), i % 2 ? wrapLight : wrap, 0, 0.12 - i * 0.045, 0));
      }
      w.add(mesh(new THREE.CylinderGeometry(0.026, 0.026, 0.03, 6), gold, 0, 0.16, 0)); // 칼자루 끝 장식
      const tsuba = mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.022, 10), black, 0, -0.13, 0);
      w.add(tsuba);
      w.add(mesh(new THREE.TorusGeometry(0.072, 0.008, 4, 12), gold, 0, -0.13, 0)).rotation.x = Math.PI / 2;
      w.add(mesh(new THREE.BoxGeometry(0.03, 0.05, 0.045), gold, 0, -0.165, 0)); // 하바키
      // 칼날: 여러 마디를 살짝씩 휘어 이어 붙임 (등 쪽으로 곡선), 끝으로 갈수록 가늘게
      const N = 7, L = 1.08;
      let y = -0.19, z = 0, ang = 0;
      for (let i = 0; i < N; i++) {
        const segL = L / N;
        const taper = 1 - (i / N) * 0.35;
        const g = new THREE.Group();
        g.position.set(0, y, z);
        g.rotation.x = ang;
        const b = mesh(new THREE.BoxGeometry(0.03, segL + 0.012, 0.068 * taper), blade, 0, -segL / 2, -0.004);
        const e = mesh(new THREE.BoxGeometry(0.034, segL + 0.012, 0.02), edge, 0, -segL / 2, 0.032 * taper);
        g.add(b, e);
        w.add(g);
        y -= Math.cos(ang) * segL;
        z -= Math.sin(ang) * segL;
        ang -= 0.035;
      }
      // 칼끝(키사키): 비스듬히 깎인 끝
      const tip = mesh(new THREE.ConeGeometry(0.036, 0.14, 4), edge, 0, y - 0.06, z - 0.002);
      tip.rotation.x = Math.PI + ang;
      tip.scale.set(0.55, 1, 1);
      w.add(tip);
      this.bladeMat = blade;
      this.edgeMat = edge;
      // 왼쪽 허리의 칼집
      if (this.cfg.type === 'hero') {
        const saya = new THREE.Group();
        // 입구는 왼쪽 허리 앞, 끝은 뒤쪽 아래로 (rotation.x 양수 = 로컬 -y가 뒤쪽을 향함)
        saya.position.set(0.21, 0.1, 0.12);
        saya.rotation.set(1.22, 0, 0.18);
        const lac = this.mat({ color: C('#1a1420') });
        saya.add(mesh(new THREE.BoxGeometry(0.035, 0.95, 0.06), lac, 0, -0.42, 0));
        saya.add(mesh(new THREE.BoxGeometry(0.04, 0.04, 0.065), gold, 0, -0.9, 0));
        saya.add(mesh(new THREE.BoxGeometry(0.04, 0.05, 0.07), this.mat({ color: C('#c8302c') }), 0, -0.1, 0));
        this.hips.add(saya);
      }
    } else if (kind === 'club') {
      const wood = this.mat({ color: C('#7a4a2a') });
      const stud = this.mat({ color: C('#c8c0b0') });
      const g = mesh(new THREE.CylinderGeometry(0.11, 0.045, 0.75, 7), wood, 0, -0.32, 0);
      g.rotation.x = Math.PI;
      w.add(g);
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2;
        w.add(mesh(new THREE.ConeGeometry(0.03, 0.07, 4), stud, Math.cos(a) * 0.1, -0.55 + (i % 2) * 0.1, Math.sin(a) * 0.1)).rotation.z = -Math.cos(a) * 1.5;
      }
    } else if (kind === 'goldclub') {
      const gold = this.mat({ color: C('#e0b040'), emissive: C('#000') });
      const g = mesh(new THREE.CylinderGeometry(0.14, 0.05, 0.85, 8), gold, 0, -0.36, 0);
      g.rotation.x = Math.PI;
      w.add(g);
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        w.add(mesh(new THREE.ConeGeometry(0.035, 0.09, 4), gold, Math.cos(a) * 0.13, -0.62 + (i % 2) * 0.12, Math.sin(a) * 0.13)).rotation.z = -Math.cos(a) * 1.5;
      }
    } else if (kind === 'spear') {
      const wood = this.mat({ color: C('#6a4a32') });
      const steel = this.mat({ color: C('#cfd6de') });
      const shaft = mesh(new THREE.CylinderGeometry(0.025, 0.025, 2.0, 5), wood, 0, 0.2, 0);
      w.add(shaft);
      w.add(mesh(new THREE.ConeGeometry(0.05, 0.25, 4), steel, 0, 1.3, 0));
      w.add(mesh(new THREE.ConeGeometry(0.06, 0.1, 6), this.mat({ color: C('#c8302c') }), 0, 1.13, 0)).rotation.x = Math.PI;
    }
    w.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    hand.add(w);
    this.weapon = w;
  }

  setFlash(v) {
    if (v === this._lastFlash) return;
    this._lastFlash = v;
    for (const m of this.mats) {
      if (v > 0) m.emissive.setRGB(v, v * 0.95, v * 0.9);
      else m.emissive.set(0, 0, 0);
    }
  }

  // p: {speed, moving, attack:{t, kind} | null, dash, hurt, dead, dt}
  animate(dt, p) {
    const s = p.speed || 0;
    const run = clamp(s / 4, 0, 1);
    this.idleT += dt;
    if (run > 0.05) this.phase += dt * (6 + s * 1.6);
    const ph = this.phase;
    const sw = Math.sin(ph) * run;

    // 기본 포즈
    let legL = sw * 0.9, legR = -sw * 0.9;
    let armRx = -sw * 0.7 - 0.25, armRz = 0.12, armRy = 0;
    let armLx = sw * 0.7, armLz = -0.12;
    let chestYaw = 0, chestPitch = 0.08 * run;
    let bob = Math.abs(Math.cos(ph)) * 0.06 * run;
    const breath = Math.sin(this.idleT * 2.4) * 0.012 * (1 - run);
    this.chest.position.y = (this.cfg.torsoH ?? 0.4) + breath;
    let headPitch = 0;
    let bodyRoll = 0;
    let wristX = 0;

    if (this.cfg.weapon === 'spear') { armRx = -0.35; armRz = 0.25; wristX = -1.2; }

    if (p.attack) {
      const t = p.attack.t;
      const k = p.attack.kind;
      // 0: 오른→왼 가로베기, 1: 왼→오른, 2: 내려찍기
      const wind = smooth(clamp(t / 0.28, 0, 1));
      const strike = smooth(clamp((t - 0.28) / 0.22, 0, 1));
      const rec = smooth(clamp((t - 0.62) / 0.38, 0, 1));
      if (k === 0 || k === 1) {
        const dir = k === 0 ? 1 : -1;
        const from = -1.25 * dir, to = 1.35 * dir;
        chestYaw = lerp(lerp(0, from, wind), to, strike) * (1 - rec);
        armRx = lerp(armRx, lerp(-1.45, -1.55, strike), (1 - rec) * Math.max(wind, strike));
        armRz = lerp(0.12, 0.35, wind) * (1 - rec);
        armLx = 0.4 * (1 - rec);
        legL = 0.35 * (1 - rec); legR = -0.25 * (1 - rec);
      } else {
        const up = -2.9, down = -0.45;
        armRx = lerp(lerp(armRx, up, wind), down, strike);
        armRx = lerp(armRx, -0.25, rec);
        armRy = 0;
        chestPitch = lerp(lerp(0, -0.25, wind), 0.35, strike) * (1 - rec);
        armLx = armRx * 0.9;
        armLz = -0.05;
        bob -= 0.05 * strike * (1 - rec);
        legL = 0.4 * strike * (1 - rec); legR = -0.4 * strike * (1 - rec);
      }
    }
    if (p.dash) {
      chestPitch = 0.45;
      legL = 0.9; legR = -0.7;
      armRx = 0.9; armLx = 0.9;
      bob = 0.02;
    }
    if (p.hurt > 0) {
      chestPitch = -0.35 * p.hurt;
      headPitch = -0.2 * p.hurt;
    }
    if (p.cast) {
      armLx = -1.5; armLz = -0.2;
    }

    const L = 1 - Math.exp(-28 * dt);
    const lp = (o, key, v) => (o[key] += (v - o[key]) * L);
    lp(this.legs[0].rotation, 'x', legR);
    lp(this.legs[1].rotation, 'x', legL);
    lp(this.armR.rotation, 'x', armRx);
    lp(this.armR.rotation, 'z', -armRz);
    lp(this.armR.rotation, 'y', armRy);
    lp(this.armL.rotation, 'x', armLx);
    lp(this.armL.rotation, 'z', -armLz);
    lp(this.chest.rotation, 'y', chestYaw);
    lp(this.hips.rotation, 'x', chestPitch);
    lp(this.head.rotation, 'x', headPitch);
    if (this.handR) lp(this.handR.rotation, 'x', wristX);
    this.body.position.y = bob;
    this.body.rotation.z = bodyRoll;

    if (this.tail) {
      this.tail.rotation.x = 0.25 + run * 0.6 + Math.sin(this.idleT * 7) * 0.08 * run;
    }

    // 사망: 쓰러지기
    if (p.dead) {
      this.deadT += dt;
      const f = smooth(clamp(this.deadT / 0.45, 0, 1));
      this.body.rotation.x = -f * Math.PI / 2;
      this.body.position.y = f * 0.15;
    } else {
      this.deadT = 0;
      this.body.rotation.x = 0;
    }
  }
}

export function makeHero() {
  return new Rig({
    type: 'hero', scale: 1.15, skin: '#f6d6b6', robe: '#eeeae0', sleeve: '#eeeae0', cuff: '#2e4f8f', belt: '#2e4f8f', collar: '#2e4f8f',
    pants: '#3a3f5a', hair: '#2a2024', weapon: 'sword',
  });
}

export function makeGuard() {
  return new Rig({
    type: 'guard', scale: 1.15, skin: '#eac8a6', robe: '#2b4374', sleeve: '#2b4374', cuff: '#c8302c', belt: '#c8302c', collar: '#c8302c',
    pants: '#1f2438', hair: '#1c1a1e', weapon: 'spear',
  });
}

export function makeLady() {
  return new Rig({
    type: 'lady', scale: 1.15, skin: '#f6d8bc', robe: '#9cc46a', sleeve: '#9cc46a', cuff: '#d84a6a', skirt: '#d8486a',
    pants: '#d8486a', hair: '#2a2024',
  });
}

export function makeDokkaebi(variant = 'blue') {
  const V = {
    blue: { skin: '#5d8fd8', hair: '#e2522e', horns: 1, scale: 1.12 },
    red: { skin: '#d8574a', hair: '#2a2430', horns: 2, scale: 1.18 },
    boss: { skin: '#b03a5a', hair: '#f0e8d8', horns: 2, scale: 2.3, horn: '#f0c040' },
  }[variant];
  return new Rig({
    type: 'dokkaebi', skin: V.skin, hair: V.hair, horns: V.horns, horn: V.horn, scale: V.scale,
    pants: V.skin, sleeve: V.skin, legLen: 0.3, torsoH: 0.42, headR: 0.32, neck: 0.3, shoulder: 0.27, limb: 1.35, wide: 1.3,
    weapon: variant === 'boss' ? 'goldclub' : 'club', eye: '#1b1416',
  });
}
