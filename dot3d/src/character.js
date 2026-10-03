// 2.5등신 로우폴리 캐릭터 + 절차적 애니메이션
import * as THREE from 'three';
import { toon } from './materials.js';
import { GFX } from './gfx.js';
import { tigerTex, clothTex } from './textures.js';
import { clamp, lerp, smooth } from './util.js';

const C = (h) => new THREE.Color(h);
// 칼집 로컬 좌표: 꽂힌 자세 / 칼집 축 위로 뽑힌 자세, 손 로컬 좌표: 쥔 자세
const SHEATHED_POS = new THREE.Vector3(0, 0.17, 0);
const ALIGN_POS = new THREE.Vector3(0, 0.8, 0);
const HAND_POS = new THREE.Vector3(0, 0, 0);
const IDENT_Q = new THREE.Quaternion();
const easeOut = (x) => 1 - Math.pow(1 - x, 3);
const easeInOut = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

const HDC = GFX.hd;

// 주름 잡힌 치맛자락·도포 자락: 아래로 갈수록 골이 깊어지는 원뿔대 (고화질만)
function pleat(rt, rb, h, folds = 12, amp = 0.06) {
  const g = new THREE.CylinderGeometry(rt, rb, h, HDC ? 40 : 10, HDC ? 4 : 1);
  if (HDC && amp) {
    const p = g.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
      if (Math.hypot(x, z) < 1e-4) continue;
      const t = (h / 2 - y) / h;
      const k = 1 + amp * t * Math.sin(Math.atan2(z, x) * folds);
      p.setXYZ(i, x * k, y, z * k);
    }
    g.computeVertexNormals();
  }
  return g;
}

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

    // 무늬 옷감: 옷에 pattern이 있으면 바탕색 위에 무늬 텍스처 (h = 감싸는 높이, 세로 반복 맞춤)
    const cloth = (color, h = 0.4, kind = cfg.pattern) => {
      if (!kind) return mat({ color: C(color) });
      const t = clothTex(kind, color, cfg.patA || '#ffffff', cfg.patB || '#ffd040').clone();
      t.needsUpdate = true;
      t.repeat.set(1, kind === 'saekdong' ? Math.max(0.25, h * 0.7) : Math.max(0.2, h * 0.45));
      return mat({ map: t });
    };
    this.cloth = cloth;
    const skin = mat({ color: C(cfg.skin) });
    const legLen = cfg.legLen ?? 0.36;
    this.legLen = legLen;
    // 다리
    const legMat = mat({ color: C(cfg.pants) });
    const shoeMat = mat({ color: C(cfg.shoes || '#26211f') });
    this.legs = [];
    for (const side of cfg.noLegs ? [] : [-1, 1]) {
      const g = new THREE.Group();
      g.position.set(side * 0.1 * (cfg.wide || 1), legLen, 0);
      if (HDC && !['dokkaebi'].includes(cfg.type)) {
        // 넉넉한 바지 (허벅지 넓고 발목에서 모임) + 행전 + 앞코가 올라간 신
        const L = cfg.limb || 1;
        const prof = [[0.062, -legLen + 0.1], [0.08, -legLen * 0.72], [0.1, -legLen * 0.42], [0.098, -legLen * 0.15], [0.086, 0.04]].map(([r, y]) => new THREE.Vector2(r * L, y));
        g.add(mesh(new THREE.LatheGeometry(prof, 16), legMat));
        g.add(mesh(new THREE.CylinderGeometry(0.066 * L, 0.07 * L, 0.07, 14), this.mat({ color: C(cfg.wrap || '#ece4d0') }), 0, -legLen + 0.12, 0));
        const shoe = mesh(new THREE.SphereGeometry(0.075, 14, 10), shoeMat, 0, -legLen + 0.045, 0.035);
        shoe.scale.set(0.95, 0.55, 1.55);
        g.add(shoe);
        const toe = mesh(new THREE.ConeGeometry(0.025, 0.07, 8), shoeMat, 0, -legLen + 0.07, 0.15);
        toe.rotation.x = 1.1;
        g.add(toe);
      } else {
        g.add(mesh(new THREE.CapsuleGeometry(0.075 * (cfg.limb || 1), legLen - 0.15, 3, 6), legMat, 0, -legLen / 2 + 0.02, 0));
        g.add(mesh(new THREE.BoxGeometry(0.14, 0.08, 0.2), shoeMat, 0, -legLen + 0.04, 0.03));
      }
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

    if (cfg.type === 'ghost') {
      // 원귀: 다리 없이 끌리는 흰 소복
      const robe = mat({ color: C(cfg.robe), transparent: true, opacity: 0.88 });
      this.hips.add(mesh(new THREE.CylinderGeometry(0.16, 0.24, 0.46, 10), robe, 0, 0.2, 0));
      this.hips.add(mesh(new THREE.CylinderGeometry(0.24, 0.42, 0.9, 12), robe, 0, -0.45, 0));
    } else if (cfg.type === 'mage' || cfg.type === 'jiangshi' || cfg.type === 'reaper') {
      // 도사: 발목까지 내려오는 도포 + 금색 띠
      const robe = cloth(cfg.robe, 0.46), robe2 = cloth(cfg.robe, 0.4);
      const trim = mat({ color: C(cfg.belt) });
      this.hips.add(mesh(pleat(0.17, 0.25, 0.46, 0, 0), robe, 0, 0.2, 0));
      this.hips.add(mesh(pleat(0.25, 0.36, 0.4, 14, 0.07), robe2, 0, -0.14, 0));
      this.hips.add(mesh(pleat(0.362, 0.37, 0.04, 14, HDC ? 0.07 : 0), trim, 0, -0.33, 0));
      this.hips.add(mesh(pleat(0.228, 0.235, 0.06, 0, 0), trim, 0, 0.1, 0));
      const collar = mat({ color: C('#f0ead8') });
      for (const s of [-1, 1]) {
        const cl = mesh(new THREE.BoxGeometry(0.06, 0.3, 0.04), collar, s * 0.05, 0.28, 0.19);
        cl.rotation.z = s * 0.5; this.hips.add(cl);
      }
      // 허리에 매단 부적 주머니 / 강시 관복 흉배
      if (cfg.type === 'mage') this.hips.add(mesh(new THREE.BoxGeometry(0.1, 0.13, 0.06), mat({ color: C('#c8302c') }), -0.2, 0.0, 0.12));
      if (cfg.type === 'jiangshi') this.hips.add(mesh(new THREE.BoxGeometry(0.2, 0.18, 0.04), mat({ color: C('#e0b040') }), 0, 0.26, 0.2));
    } else if (cfg.type === 'elf') {
      // 요정: 잎사귀 빛 저고리 + 짧은 치마 + 가죽 띠
      const top = cloth(cfg.robe, 0.42);
      const skirt = cloth(cfg.skirt, 0.2);
      const belt = mat({ color: C(cfg.belt) });
      this.hips.add(mesh(pleat(0.15, 0.21, 0.42, 0, 0), top, 0, 0.2, 0));
      this.hips.add(mesh(pleat(0.21, 0.3, 0.2, 10, 0.09), skirt, 0, -0.04, 0));
      this.hips.add(mesh(pleat(0.212, 0.215, 0.05, 0, 0), belt, 0, 0.08, 0));
      // 잎 모양 깃
      const leaf = mat({ color: C('#bfe07a') });
      for (const s of [-1, 1]) {
        const l = mesh(new THREE.BoxGeometry(0.12, 0.05, 0.08), leaf, s * 0.09, 0.4, 0.12);
        l.rotation.z = s * 0.4; this.hips.add(l);
      }
      // 등의 화살통
      const quiver = new THREE.Group();
      quiver.position.set(-0.1, 0.25, -0.2);
      quiver.rotation.set(-0.25, 0, 0.45);
      quiver.add(mesh(new THREE.CylinderGeometry(0.07, 0.06, 0.42, 8), belt, 0, 0, 0));
      const feather = mat({ color: C('#f4f0e4') });
      for (let i = 0; i < 4; i++) quiver.add(mesh(new THREE.BoxGeometry(0.03, 0.12, 0.05), feather, (i - 1.5) * 0.03, 0.27, (i % 2) * 0.03));
      this.hips.add(quiver);
    } else if (cfg.type === 'hero' || cfg.type === 'guard') {
      const robe = cloth(cfg.robe, 0.44), robe2 = cloth(cfg.robe, 0.24);
      const belt = mat({ color: C(cfg.belt) });
      this.hips.add(mesh(pleat(0.17, 0.235, 0.44, 0, 0), robe, 0, 0.2, 0));
      this.hips.add(mesh(pleat(0.24, 0.31, 0.24, 12, 0.08), robe2, 0, -0.04, 0));
      this.hips.add(mesh(pleat(0.215, 0.225, 0.07, 0, 0), belt, 0, 0.1, 0));
      if (HDC) {
        // 자락 끝 선(색 띠)과 흰 동정, 허리띠 매듭과 늘어진 끈
        this.hips.add(mesh(pleat(0.312, 0.318, 0.035, 12, 0.08), mat({ color: C(cfg.collar || cfg.belt) }), 0, -0.155, 0));
        const dong = mat({ color: C('#f4efe2') });
        for (const sx of [-1, 1]) { const d = mesh(new THREE.BoxGeometry(0.022, 0.2, 0.03), dong, sx * 0.085, 0.33, 0.2); d.rotation.z = sx * 0.5; this.hips.add(d); }
        this.hips.add(mesh(new THREE.TorusGeometry(0.035, 0.016, 6, 12), belt, -0.12, 0.1, 0.2));
        for (const [x, rz] of [[-0.135, 0.15], [-0.105, -0.1]]) { const t2 = mesh(new THREE.BoxGeometry(0.03, 0.16, 0.012), belt, x, 0.0, 0.215); t2.rotation.z = rz; this.hips.add(t2); }
      }
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
      this.hips.add(mesh(pleat(0.17, 0.42, 0.62, 16, 0.06), skirt, 0, -0.06, 0));
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
    const headMesh = mesh(new THREE.SphereGeometry(hr, HDC ? 28 : 14, HDC ? 20 : 10), skin);
    headMesh.scale.set(1, 0.93, 0.95);
    this.head.add(headMesh);
    this.buildFace(hr, cfg);
    this.buildHair(hr, cfg);

    // 팔
    this.arms = [];
    const sleeve = cfg.sleevePat ? cloth(cfg.sleeve || cfg.robe, 0.5, cfg.sleevePat) : cfg.pattern && cfg.sleeve === cfg.robe ? cloth(cfg.robe, 0.3) : mat({ color: C(cfg.sleeve || cfg.robe || cfg.skin) });
    for (const side of [-1, 1]) {
      const g = new THREE.Group();
      g.position.set(side * (cfg.shoulder ?? 0.21), -0.03, 0);
      const wide = HDC && ['hero', 'guard', 'mage', 'lady', 'jiangshi', 'reaper'].includes(cfg.type);
      if (wide || (HDC && cfg.type === 'elf')) {
        // 한복 소매: 어깨에서 소맷부리로 넓어지고 끝에 끝동
        const rb = wide ? (cfg.type === 'mage' || cfg.type === 'reaper' ? 0.13 : 0.112) : 0.082;
        g.add(mesh(new THREE.SphereGeometry(0.075, 14, 10), sleeve, 0, -0.02, 0));
        g.add(mesh(new THREE.CylinderGeometry(0.07, rb, 0.26, 18), sleeve, 0, -0.15, 0));
        if (cfg.cuff) g.add(mesh(new THREE.CylinderGeometry(rb + 0.004, rb + 0.006, 0.045, 18), mat({ color: C(cfg.cuff) }), 0, -0.27, 0));
      } else {
        const arm = mesh(new THREE.CapsuleGeometry(0.068 * (cfg.limb || 1), 0.2, 3, 6), sleeve, 0, -0.14, 0);
        g.add(arm);
        if (cfg.cuff) g.add(mesh(new THREE.CylinderGeometry(0.08, 0.085, 0.05, 8), mat({ color: C(cfg.cuff) }), 0, -0.26, 0));
      }
      const hand = new THREE.Group();
      hand.position.y = -0.31;
      // 장갑을 끼면 손과 손목 토시가 장갑 색으로
      hand.add(mesh(new THREE.SphereGeometry(0.065 * (cfg.limb || 1) * (cfg.gloves ? 1.12 : 1), 6, 5), cfg.gloves ? (this.gloveMat ||= mat({ color: C(cfg.gloves) })) : skin));
      if (cfg.gloves) g.add(mesh(new THREE.CylinderGeometry(0.078, 0.082, 0.08, 8), this.gloveMat, 0, -0.25, 0));
      g.add(hand);
      g.userData.hand = hand;
      this.chest.add(g);
      this.arms.push(g);
    }
    // arms[0] = 오른팔(-x), arms[1] = 왼팔(+x)
    this.armR = this.arms[0];
    this.armL = this.arms[1];
    this.handR = this.armR.userData.hand;
    this.handL = this.armL.userData.hand;

    if (cfg.armor) this.buildArmor(cfg);
    if (cfg.acc) this.buildAccessory(cfg.acc, hr, cfg);
    this.flutter = [];
    if (cfg.deco) for (const d of cfg.deco) this.buildDeco(d, hr, cfg);
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
    } else if (HDC) {
      // 반짝이는 둥근 눈동자 + 하이라이트 두 점, 가는 눈썹, 작은 입
      const glossy = toon({ color: C(cfg.eye || '#1b1416'), roughness: 0.25 });
      const white = toon({ color: C('#ffffff'), emissive: C('#555555') });
      for (const s of [-1, 1]) {
        const e = mesh(new THREE.SphereGeometry(0.036, 14, 10), glossy, s * 0.095, -0.02, z - 0.025);
        e.scale.set(0.95, 1.35, 0.6);
        this.head.add(e);
        this.head.add(mesh(new THREE.SphereGeometry(0.011, 8, 6), white, s * 0.095 + 0.012, 0.006, z - 0.004));
        this.head.add(mesh(new THREE.SphereGeometry(0.006, 6, 4), white, s * 0.095 - 0.01, -0.035, z - 0.006));
        const br = mesh(new THREE.BoxGeometry(0.07, 0.014, 0.012), this.mat({ color: C(cfg.hair || '#231c1e') }), s * 0.1, 0.06, z - 0.03);
        br.rotation.z = s * -0.12;
        this.head.add(br);
      }
      this.head.add(mesh(new THREE.BoxGeometry(0.035, 0.01, 0.01), this.mat({ color: C('#a04848') }), 0, -0.1, z - 0.035));
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
    const cap = mesh(new THREE.SphereGeometry(hr * 1.06, HDC ? 28 : 14, HDC ? 14 : 8, 0, Math.PI * 2, 0, Math.PI * 0.5), hairM);
    cap.rotation.x = -0.35;
    cap.position.set(0, 0.02, -0.02);
    this.head.add(cap);
    // 앞머리
    if (HDC) {
      // 끝이 뾰족한 머리 가닥들이 이마를 덮고, 귀 옆으로 옆머리
      for (let i = -3; i <= 3; i++) {
        const a = i * 0.24;
        const b = mesh(new THREE.ConeGeometry(0.045, 0.17, 6), hairM, Math.sin(a) * hr * 0.82, hr * 0.5 - Math.abs(i) * 0.012, Math.cos(a) * hr * 0.82);
        b.rotation.set(Math.PI - 0.55, a, -i * 0.08);
        this.head.add(b);
      }
      for (const sx of [-1, 1]) {
        const lock = mesh(new THREE.ConeGeometry(0.04, 0.22, 6), hairM, sx * hr * 0.92, hr * 0.05, hr * 0.25);
        lock.rotation.set(Math.PI, 0, sx * -0.12);
        this.head.add(lock);
      }
    } else for (let i = -2; i <= 2; i++) {
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
    } else if (cfg.type === 'mage') {
      // 갓: 넓은 챙 + 높은 대우 + 갓끈 구슬
      const hatM = this.mat({ color: C('#16141c') });
      const hy = hr * 0.66;
      this.head.add(mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.022, 18), hatM, 0, hy, 0));
      this.head.add(mesh(new THREE.CylinderGeometry(0.13, 0.15, 0.26, 12), hatM, 0, hy + 0.13, 0));
      this.head.add(mesh(new THREE.CylinderGeometry(0.152, 0.152, 0.03, 12), this.mat({ color: C('#6a5ad8') }), 0, hy + 0.03, 0));
      const bead = this.mat({ color: C('#e0a84a') });
      for (const s of [-1, 1]) for (let i = 0; i < 4; i++) this.head.add(mesh(new THREE.SphereGeometry(0.022, 4, 3), bead, s * (0.22 - i * 0.015), hy - 0.06 - i * 0.07, 0.06));
    } else if (cfg.type === 'elf') {
      // 긴 머리 + 뾰족한 귀 + 꽃 머리핀
      this.head.add(mesh(new THREE.BoxGeometry(0.46, 0.55, 0.14), hairM, 0, -0.2, -0.2));
      for (const s of [-1, 1]) {
        this.head.add(mesh(new THREE.BoxGeometry(0.08, 0.38, 0.1), hairM, s * 0.25, -0.12, 0.06));
        const ear = mesh(new THREE.ConeGeometry(0.045, 0.2, 4), this.mat({ color: C(cfg.skin) }), s * 0.3, 0.04, -0.02);
        ear.rotation.z = -s * 1.15;
        this.head.add(ear);
      }
      const flower = this.mat({ color: C('#ff9ac0') });
      this.head.add(mesh(new THREE.IcosahedronGeometry(0.06, 0), flower, 0.2, 0.18, 0.1));
      this.head.add(mesh(new THREE.IcosahedronGeometry(0.035, 0), this.mat({ color: C('#fff0a0') }), 0.22, 0.2, 0.14));
      const tail = new THREE.Group();
      tail.position.set(0, -0.3, -0.24);
      tail.add(mesh(new THREE.BoxGeometry(0.3, 0.32, 0.06), hairM, 0, -0.16, 0));
      this.head.add(tail);
      this.tail = tail;
    } else if (cfg.type === 'jiangshi') {
      // 둥근 관모 + 꼭지 + 이마에 붙은 부적
      const hatM = this.mat({ color: C('#1a1a20') });
      this.head.add(mesh(new THREE.CylinderGeometry(0.3, 0.32, 0.16, 12), hatM, 0, hr * 0.7, 0));
      this.head.add(mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.03, 12), this.mat({ color: C('#6a1a1a') }), 0, hr * 0.62, 0));
      this.head.add(mesh(new THREE.SphereGeometry(0.06, 6, 4), this.mat({ color: C('#c8302c') }), 0, hr * 0.7 + 0.12, 0));
      const tali = new THREE.Mesh(new THREE.PlaneGeometry(0.14, 0.34), new THREE.MeshBasicMaterial({ color: '#f2d36b', side: THREE.DoubleSide }));
      tali.position.set(0, 0.0, hr * 0.98);
      tali.rotation.x = -0.15;
      const ink = new THREE.Mesh(new THREE.PlaneGeometry(0.04, 0.26), new THREE.MeshBasicMaterial({ color: '#c8302c', side: THREE.DoubleSide }));
      ink.position.z = 0.003;
      tali.add(ink);
      this.head.add(tali);
      this.talisman = tali;
    } else if (cfg.type === 'ghost') {
      // 길게 늘어진 검은 머리가 얼굴을 반쯤 가림
      const hm = this.mat({ color: C(cfg.hair), transparent: true, opacity: 0.92 });
      this.head.add(mesh(new THREE.BoxGeometry(0.5, 0.95, 0.16), hm, 0, -0.32, -0.18));
      for (const s of [-1, 1]) this.head.add(mesh(new THREE.BoxGeometry(0.15, 0.85, 0.08), hm, s * 0.15, -0.25, hr * 0.92));
      this.head.add(mesh(new THREE.BoxGeometry(0.5, 0.1, 0.5), hm, 0, hr * 0.85, 0));
    } else if (cfg.type === 'reaper') {
      // 저승사자 흑립: 아주 넓은 챙 + 높은 대우
      const hatM = this.mat({ color: C('#0e0c12') });
      const hy = hr * 0.66;
      this.head.add(mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.025, 18), hatM, 0, hy, 0));
      this.head.add(mesh(new THREE.CylinderGeometry(0.15, 0.17, 0.32, 12), hatM, 0, hy + 0.16, 0));
      this.head.add(mesh(new THREE.BoxGeometry(0.1, 0.035, 0.03), this.mat({ color: C('#a01a2a') }), 0, -0.12, hr * 0.92));
      for (const s of [-1, 1]) for (let i = 0; i < 5; i++) this.head.add(mesh(new THREE.SphereGeometry(0.022, 4, 3), this.mat({ color: C('#2a2a30') }), s * (0.24 - i * 0.015), hy - 0.06 - i * 0.07, 0.06));
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

  // 갑옷 장식: 어깨받이와 가슴판 (heavy는 더 크고 투구 장식까지)
  buildArmor(cfg) {
    const heavy = cfg.armor === 'heavy';
    const plate = this.mat({ color: C(cfg.trim || '#d9a83a') });
    const dark = this.mat({ color: C(cfg.pants || '#2a2a34') });
    for (const side of [-1, 1]) {
      const pad = mesh(new THREE.BoxGeometry(heavy ? 0.2 : 0.16, 0.08, heavy ? 0.24 : 0.2), plate, side * (heavy ? 0.25 : 0.23), 0.0, 0);
      pad.rotation.z = side * -0.35;
      this.chest.add(pad);
      if (heavy) {
        const pad2 = mesh(new THREE.BoxGeometry(0.17, 0.06, 0.22), dark, side * 0.28, -0.07, 0);
        pad2.rotation.z = side * -0.5;
        this.chest.add(pad2);
      }
    }
    this.hips.add(mesh(new THREE.BoxGeometry(0.26, heavy ? 0.26 : 0.18, 0.06), plate, 0, 0.24, 0.17));
    if (heavy) {
      this.hips.add(mesh(new THREE.BoxGeometry(0.42, 0.14, 0.06), dark, 0, -0.06, 0.24));
      this.head.add(mesh(new THREE.BoxGeometry(0.06, 0.12, 0.03), plate, 0, 0.2, 0.28));
    }
  }

  // 옷 장식: 망토·목도리·고름 띠·피백(선녀 띠)·흉배·팔찌·화관·꽃비녀
  // 흔들리는 부분은 this.flutter에 넣어 animate에서 바람·달리기에 따라 나부낌
  buildDeco(d, hr, cfg) {
    const A = this.mat({ color: C(cfg.decoA || cfg.trim || '#c8302c') });
    const T = this.mat({ color: C(cfg.decoB || cfg.belt || '#e0b040') });
    const torsoZ = cfg.type === 'elf' ? 0.175 : cfg.type === 'mage' ? 0.205 : 0.2;
    const flap = (parent, x, y, z, w, len, m, base, amp, run, rz = 0) => {
      const g = new THREE.Group();
      g.position.set(x, y, z);
      g.rotation.z = rz;
      g.add(mesh(new THREE.BoxGeometry(w, len, 0.02), m, 0, -len / 2, 0));
      parent.add(g);
      this.flutter.push({ g, base, amp, run, ph: Math.random() * 6 });
      return g;
    };
    if (d === 'cape') {
      // 어깨에서 등으로 떨어지는 망토 (겉감 + 안감 테두리)
      const g = flap(this.chest, 0, 0.0, -0.17, 0.44, 0.62, A, 0.12, 0.06, 0.6);
      g.add(mesh(new THREE.BoxGeometry(0.46, 0.04, 0.024), T, 0, -0.6, 0));
      g.add(mesh(new THREE.BoxGeometry(0.46, 0.05, 0.05), T, 0, 0, 0.01));
      for (const sx of [-1, 1]) this.chest.add(mesh(new THREE.SphereGeometry(0.035, 5, 4), T, sx * 0.13, -0.02, 0.15));
    } else if (d === 'scarf') {
      const ring = mesh(new THREE.TorusGeometry(0.13, 0.045, 5, 12), A, 0, 0.01, 0);
      ring.rotation.x = Math.PI / 2;
      this.chest.add(ring);
      flap(this.chest, 0.07, 0.0, -0.13, 0.08, 0.42, A, 0.35, 0.12, 1.0, 0.15);
      flap(this.chest, 0.12, -0.01, -0.11, 0.07, 0.3, A, 0.3, 0.14, 0.9, 0.3);
    } else if (d === 'sash') {
      // 허리 뒤로 늘어진 긴 고름 띠
      this.hips.add(mesh(new THREE.TorusGeometry(0.06, 0.025, 4, 8), A, 0.06, 0.12, -0.22));
      flap(this.hips, 0.04, 0.1, -0.22, 0.06, 0.46, A, 0.2, 0.1, 0.8, 0.1);
      flap(this.hips, 0.1, 0.1, -0.21, 0.06, 0.38, T, 0.18, 0.12, 0.8, 0.25);
    } else if (d === 'ribbon') {
      // 피백: 등 뒤로 둥글게 걸친 선녀의 띠 + 양 끝이 나부낌
      const glow = this.mat({ color: C(cfg.decoA || '#e8d0ff'), emissive: C(cfg.decoGlow || '#3a2a6a') });
      const arc = mesh(new THREE.TorusGeometry(0.4, 0.024, 4, 20, Math.PI), glow, 0, -0.02, -0.2);
      arc.rotation.x = -0.35;
      this.chest.add(arc);
      this.ribbonArc = arc;
      flap(this.chest, 0.4, -0.02, -0.2, 0.05, 0.55, glow, 0.25, 0.15, 0.9);
      flap(this.chest, -0.4, -0.02, -0.2, 0.05, 0.55, glow, 0.25, 0.15, 0.9);
    } else if (d === 'badge') {
      // 흉배: 가슴의 네모 수놓은 판
      this.hips.add(mesh(new THREE.BoxGeometry(0.17, 0.16, 0.02), T, 0, 0.27, torsoZ));
      this.hips.add(mesh(new THREE.BoxGeometry(0.1, 0.09, 0.02), A, 0, 0.27, torsoZ + 0.008));
      this.hips.add(mesh(new THREE.BoxGeometry(0.04, 0.04, 0.02), T, 0, 0.27, torsoZ + 0.014));
    } else if (d === 'bracers') {
      for (const arm of this.arms) {
        arm.add(mesh(new THREE.CylinderGeometry(0.084, 0.09, 0.11, 8), T, 0, -0.2, 0));
        arm.add(mesh(new THREE.CylinderGeometry(0.092, 0.092, 0.02, 8), A, 0, -0.17, 0));
      }
    } else if (d === 'crown') {
      if (cfg.type === 'mage') return; // 갓 위에는 생략
      const gold = this.mat({ color: C('#ffd040'), emissive: C('#3a2600') });
      const y = hr * 0.88;
      for (let i = 0; i < 7; i++) {
        const a = (i / 7) * Math.PI * 2;
        const c = mesh(new THREE.ConeGeometry(0.03, i % 2 ? 0.07 : 0.11, 4), gold, Math.cos(a) * 0.13, y + 0.04, Math.sin(a) * 0.13);
        this.head.add(c);
      }
      const band = mesh(new THREE.TorusGeometry(0.13, 0.022, 4, 14), gold, 0, y, 0);
      band.rotation.x = Math.PI / 2;
      this.head.add(band);
      this.head.add(mesh(new THREE.IcosahedronGeometry(0.035, 0), this.mat({ color: C(cfg.decoA || '#ff4a6a'), emissive: C('#4a0a1a') }), 0, y + 0.03, 0.13));
    } else if (d === 'flowerPin') {
      const pet = this.mat({ color: C(cfg.decoA || '#ff9ac0') });
      const mid = this.mat({ color: C('#fff0a0') });
      for (const [x, y, z, r] of [[-0.22, 0.12, 0.02, 0.06], [-0.2, 0.2, -0.08, 0.045], [-0.26, 0.04, -0.06, 0.04]]) {
        this.head.add(mesh(new THREE.IcosahedronGeometry(r, 0), pet, x, y, z));
        this.head.add(mesh(new THREE.IcosahedronGeometry(r * 0.45, 0), mid, x - 0.02, y + 0.01, z + r * 0.6));
      }
      // 떨잠 구슬 줄
      flap(this.head, -0.24, 0.02, 0.0, 0.015, 0.16, T, 0.0, 0.2, 0.3);
    }
  }

  // 보스 전용 옷 장식: 도깨비 뿔, 여우 귀와 꼬리, 저승사자 갓
  buildAccessory(acc, hr, cfg) {
    if (acc === 'horns') {
      const horn = this.mat({ color: C('#ffd040'), emissive: C('#3a2000') });
      const tip = this.mat({ color: C('#c8302c') });
      for (const s of [-1, 1]) {
        const h = new THREE.Group();
        h.position.set(s * 0.16, hr * 0.85, 0.05);
        h.rotation.z = -s * 0.4;
        h.add(mesh(new THREE.ConeGeometry(0.07, 0.26, 5), horn, 0, 0.11, 0));
        h.add(mesh(new THREE.ConeGeometry(0.035, 0.1, 5), tip, 0, 0.27, 0));
        this.head.add(h);
      }
      // 이마의 도깨비 구슬
      this.head.add(mesh(new THREE.IcosahedronGeometry(0.035, 0), this.mat({ color: C('#9ad8ff'), emissive: C('#1a6aaa') }), 0, hr * 0.45, hr * 0.92));
    } else if (acc === 'fox') {
      const fur = this.mat({ color: C('#f4ece4') });
      const inner = this.mat({ color: C('#ff9a6a') });
      for (const s of [-1, 1]) {
        const ear = new THREE.Group();
        ear.position.set(s * 0.17, hr * 0.95, 0);
        ear.rotation.z = -s * 0.3;
        ear.add(mesh(new THREE.ConeGeometry(0.095, 0.26, 4), fur, 0, 0.11, 0));
        ear.add(mesh(new THREE.ConeGeometry(0.05, 0.16, 4), inner, 0, 0.08, 0.04));
        this.head.add(ear);
      }
      // 허리 뒤로 늘어진 꼬리 셋
      this.foxTails = [];
      const tipM = this.mat({ color: C('#ff7a2a'), emissive: C('#4a1400') });
      for (let i = -1; i <= 1; i++) {
        const t = new THREE.Group();
        t.position.set(i * 0.08, 0.1, -0.2);
        t.rotation.set(1.0, i * 0.5, 0);
        const body = mesh(new THREE.CapsuleGeometry(0.085, 0.36, 3, 6), fur, 0, -0.24, 0);
        t.add(body);
        t.add(mesh(new THREE.SphereGeometry(0.09, 6, 5), tipM, 0, -0.48, 0));
        this.hips.add(t);
        this.foxTails.push(t);
      }
    } else if (acc === 'gat') {
      const hatM = this.mat({ color: C('#0c0a10') });
      const band = this.mat({ color: C('#8a5ad8'), emissive: C('#2a0a4a') });
      const hy = hr * 0.66;
      if (cfg.type !== 'mage') {
        this.head.add(mesh(new THREE.CylinderGeometry(0.44, 0.44, 0.022, 18), hatM, 0, hy, 0));
        this.head.add(mesh(new THREE.CylinderGeometry(0.13, 0.15, 0.3, 12), hatM, 0, hy + 0.15, 0));
      }
      this.head.add(mesh(new THREE.CylinderGeometry(0.156, 0.156, 0.04, 12), band, 0, hy + 0.04, 0));
      // 갓끈: 보랏빛 구슬 줄
      const bead = this.mat({ color: C('#e0c8ff'), emissive: C('#4a2a8a') });
      for (const s of [-1, 1]) for (let i = 0; i < 6; i++) this.head.add(mesh(new THREE.SphereGeometry(0.024, 4, 3), bead, s * (0.24 - i * 0.012), hy - 0.05 - i * 0.065, 0.07));
    }
  }

  buildWeapon(kind) {
    const hand = this.handR;
    const w = new THREE.Group();
    // 주의: Object3D.add()는 부모를 반환하므로, 자식 회전은 붙이기 전에 지정
    const rot = (m, ax, v) => { m.rotation[ax] = v; return m; };
    // 무기는 팔의 연장선(-y) 방향으로
    if (kind === 'sword') {
      // 일본도풍: 긴 손잡이(엮은 끈 무늬), 둥근 코등이, 가늘고 길게 휜 칼날
      const ws = this.cfg.wstyle || {};
      const blade = this.mat({ color: C(ws.blade || '#c9d4e0'), emissive: C('#000000') });
      const edge = this.mat({ color: C(ws.edge || '#ffffff'), emissive: C('#000000') });
      const wrap = this.mat({ color: C(ws.wrap || '#1c1824') });
      const wrapLight = this.mat({ color: C('#d8d0e8') });
      const gold = this.mat({ color: C(ws.guard || '#d9a83a') });
      this.glowColor = ws.glow ? C(ws.glow) : null;
      const black = this.mat({ color: C('#141218') });
      // 손잡이: 손 위아래로 길게 (양손 잡이)
      for (let i = 0; i < 6; i++) {
        w.add(mesh(new THREE.CylinderGeometry(0.023, 0.023, 0.045, 6), i % 2 ? wrapLight : wrap, 0, 0.12 - i * 0.045, 0));
      }
      w.add(mesh(new THREE.CylinderGeometry(0.026, 0.026, 0.03, 6), gold, 0, 0.16, 0)); // 칼자루 끝 장식
      const tsuba = mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.022, 10), black, 0, -0.13, 0);
      w.add(tsuba);
      w.add(rot(mesh(new THREE.TorusGeometry(0.072, 0.008, 4, 12), gold, 0, -0.13, 0), 'x', Math.PI / 2));
      w.add(mesh(new THREE.BoxGeometry(0.03, 0.05, 0.045), gold, 0, -0.165, 0)); // 하바키
      // 칼날: 여러 마디를 살짝씩 휘어 이어 붙임 (등 쪽으로 곡선), 끝으로 갈수록 가늘게
      const N = 7, L = 1.08 * (ws.long || 1);
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
      const tip = mesh(new THREE.ConeGeometry(0.036, 0.14, 4), edge, 0, y - Math.cos(ang) * 0.06, z - Math.sin(ang) * 0.06 - 0.002);
      tip.rotation.x = Math.PI + ang;
      tip.scale.set(0.55, 1, 0.8);
      w.add(tip);
      this.bladeMat = blade;
      this.edgeMat = edge;
      // 왼쪽 허리의 칼집 (입구가 로컬 원점, 칼집은 로컬 -y 방향)
      if (this.cfg.type === 'hero') {
        const saya = new THREE.Group();
        // 입구는 왼쪽 허리 앞, 끝은 뒤쪽 아래로 (rotation.x 양수 = 로컬 -y가 뒤쪽을 향함)
        saya.position.set(0.21, 0.1, 0.12);
        saya.rotation.set(1.22, 0, 0.18);
        const lac = this.mat({ color: C('#1a1420') });
        // 칼날과 같은 곡률로 휘게 마디를 이어 붙임 (곧은 칼집이면 휜 칼끝이 옆·끝으로 삐져나옴)
        // 칼날은 칼집 안 y=-0.02부터 시작 → 칼집 길이 = 칼날 + 칼끝 + 여유
        const SN = 8, sl = L + 0.3;
        let sy = 0, sz = 0.004, sa = 0;
        for (let i = 0; i < SN; i++) {
          const segL = sl / SN;
          const g = new THREE.Group();
          g.position.set(0, sy, sz);
          g.rotation.x = sa;
          g.add(mesh(new THREE.BoxGeometry(0.05, segL + 0.02, 0.108), lac, 0, -segL / 2, 0.008));
          if (i === SN - 1) g.add(mesh(new THREE.BoxGeometry(0.056, 0.05, 0.088), gold, 0, -segL + 0.01, 0));
          saya.add(g);
          sy -= Math.cos(sa) * segL;
          sz -= Math.sin(sa) * segL;
          sa -= (0.035 * 7 / L) * segL; // 칼날과 같은 단위 길이당 휨
        }
        saya.add(mesh(new THREE.BoxGeometry(0.052, 0.05, 0.096), this.mat({ color: C('#c8302c') }), 0, -0.12, 0.004));
        saya.add(mesh(new THREE.BoxGeometry(0.052, 0.03, 0.096), gold, 0, -0.015, 0.004));
        this.hips.add(saya);
        this.saya = saya;
      }
    } else if (kind === 'club') {
      const wood = this.mat({ color: C('#7a4a2a') });
      const stud = this.mat({ color: C('#c8c0b0') });
      const g = mesh(new THREE.CylinderGeometry(0.11, 0.045, 0.75, 7), wood, 0, -0.32, 0);
      g.rotation.x = Math.PI;
      w.add(g);
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2;
        w.add(rot(mesh(new THREE.ConeGeometry(0.03, 0.07, 4), stud, Math.cos(a) * 0.1, -0.55 + (i % 2) * 0.1, Math.sin(a) * 0.1), 'z', -Math.cos(a) * 1.5));
      }
    } else if (kind === 'goldclub') {
      const gold = this.mat({ color: C('#e0b040'), emissive: C('#000') });
      const g = mesh(new THREE.CylinderGeometry(0.14, 0.05, 0.85, 8), gold, 0, -0.36, 0);
      g.rotation.x = Math.PI;
      w.add(g);
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        w.add(rot(mesh(new THREE.ConeGeometry(0.035, 0.09, 4), gold, Math.cos(a) * 0.13, -0.62 + (i % 2) * 0.12, Math.sin(a) * 0.13), 'z', -Math.cos(a) * 1.5));
      }
    } else if (kind === 'staff') {
      // 도사의 지팡이: 위로 뻗은 막대 + 금빛 초승달 + 빛나는 구슬 + 매달린 부적
      const ws = this.cfg.wstyle || {};
      const big = ws.big || 1;
      const wood = this.mat({ color: C(ws.wood || '#5a3e2a') });
      const gold = this.mat({ color: C(ws.moon || '#e0b040') });
      w.add(mesh(new THREE.CylinderGeometry(0.028, 0.034, 1.55, 6), wood, 0, 0.35, 0));
      w.add(rot(mesh(new THREE.TorusGeometry(0.14 * big, 0.022 * big, 4, 12, Math.PI * 1.4), gold, 0, 1.2, 0), 'z', -Math.PI * 0.2));
      if (big > 1.2) for (const s of [-1, 1]) w.add(rot(mesh(new THREE.ConeGeometry(0.03, 0.18, 4), gold, s * 0.14, 1.05, 0), 'z', s * 0.6));
      const orb = this.mat({ color: C(ws.orb || '#b8a8ff'), emissive: C('#000000') });
      this.orbMat = orb;
      this.glowColor = C(ws.orbGlow || '#6a4aff');
      w.add(mesh(new THREE.IcosahedronGeometry(0.075 * big, 1), orb, 0, 1.2, 0));
      const tali = new THREE.MeshBasicMaterial({ color: new THREE.Color('#f2d36b'), side: THREE.DoubleSide });
      const t = new THREE.Mesh(new THREE.PlaneGeometry(0.08, 0.2), tali);
      t.position.set(0.05, 1.0, 0);
      w.add(t);
    } else if (kind === 'bow') {
      // 활: 왼손에 쥠. 손 로컬 -y가 팔 방향 → 활대는 손 로컬 z축을 따라 세움, 배는 -y(앞)로 휨
      const ws = this.cfg.wstyle || {};
      const big = ws.big || 1;
      const wood = this.mat({ color: C(ws.wood || '#8a5a32'), emissive: C('#000000') });
      this.glowColor = ws.glow ? C(ws.glow) : null;
      this.bowMat = wood;
      const curve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(0, 0.1, 0.5 * big), new THREE.Vector3(0, -0.22 * big, 0), new THREE.Vector3(0, 0.1, -0.5 * big));
      w.add(mesh(new THREE.TubeGeometry(curve, 10, 0.024, 4), wood));
      w.add(mesh(new THREE.BoxGeometry(0.05, 0.05, 0.12), this.mat({ color: C(ws.grip || '#3a7a3a') }), 0, -0.1, 0));
      if (ws.tips) for (const s of [-1, 1]) w.add(mesh(new THREE.BoxGeometry(0.05, 0.05, 0.1), this.mat({ color: C(ws.tips) }), 0, 0.1, s * 0.5 * big));
      const strM = new THREE.MeshBasicMaterial({ color: new THREE.Color('#f0ece0') });
      this.bowEnds = [new THREE.Vector3(0, 0.1, 0.5 * big), new THREE.Vector3(0, 0.1, -0.5 * big)];
      this.bowStrings = [0, 1].map(() => { const s = new THREE.Mesh(new THREE.BoxGeometry(0.012, 1, 0.012), strM); w.add(s); return s; });
      // 시위에 건 화살
      const arrow = new THREE.Group();
      arrow.add(mesh(new THREE.BoxGeometry(0.02, 0.72, 0.02), this.mat({ color: C('#9a7a52') }), 0, -0.36, 0));
      arrow.add(rot(mesh(new THREE.ConeGeometry(0.03, 0.09, 4), this.mat({ color: C('#d8dde4') }), 0, -0.76, 0), 'x', Math.PI));
      this.nockArrow = arrow;
      w.add(arrow);
      this.setBowDraw(0);
      w.traverse((o) => { if (o.isMesh) o.castShadow = true; });
      this.handL.add(w);
      this.weapon = w;
      return;
    } else if (kind === 'spear') {
      const wood = this.mat({ color: C('#6a4a32') });
      const steel = this.mat({ color: C('#cfd6de') });
      const shaft = mesh(new THREE.CylinderGeometry(0.025, 0.025, 2.0, 5), wood, 0, 0.2, 0);
      w.add(shaft);
      w.add(mesh(new THREE.ConeGeometry(0.05, 0.25, 4), steel, 0, 1.3, 0));
      w.add(rot(mesh(new THREE.ConeGeometry(0.06, 0.1, 6), this.mat({ color: C('#c8302c') }), 0, 1.13, 0), 'x', Math.PI));
    }
    w.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    hand.add(w);
    this.weapon = w;
    if (this.saya) {
      // 처음엔 칼집에 꽂힌 상태
      this.saya.add(w);
      w.position.copy(SHEATHED_POS);
      w.quaternion.identity();
      this.sheathed = true;
      this.wStage = 'in';
    }
  }

  // 활시위 당김 정도 (0~1): 시위 두 가닥과 걸린 화살 위치를 갱신
  setBowDraw(d) {
    if (!this.bowStrings) return;
    const nock = new THREE.Vector3(0, 0.1 + 0.42 * d, 0);
    this.bowStrings.forEach((s, i) => {
      const e = this.bowEnds[i];
      const dir = new THREE.Vector3().subVectors(nock, e);
      const len = dir.length();
      s.position.copy(e).addScaledVector(dir, 0.5);
      s.scale.set(1, len, 1);
      s.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
    });
    this.nockArrow.position.copy(nock);
    this.nockArrow.visible = d > 0.15;
  }

  // ---- 발도 / 납도 ----
  // 칼을 손에 옮겨 붙이되 월드 위치를 유지 → 매 프레임 손 자세로 빠르게 보간 = 칼집에서 뽑혀 나오는 모습
  unsheathe() {
    if (!this.saya || !this.sheathed) return;
    this.handR.attach(this.weapon);
    this.sheathed = false;
    this.wStage = 'hand';
  }

  // 칼집에 옮겨 붙인 뒤: ① 칼집 축 위로 뽑힌 자세로 정렬 → ② 칼집 안으로 미끄러져 들어감
  sheathe() {
    if (!this.saya || this.sheathed) return;
    this.saya.attach(this.weapon);
    this.sheathed = true;
    this.wStage = 'align';
    this.wStageT = 0;
  }

  updateWeapon(dt) {
    if (!this.saya) return;
    const w = this.weapon;
    let pos, rate;
    if (this.wStage === 'hand') { pos = HAND_POS; rate = 26; }
    else if (this.wStage === 'align') {
      pos = ALIGN_POS; rate = 22;
      this.wStageT += dt;
      if (this.wStageT > 0.16) { this.wStage = 'slide'; this.wStageT = 0; }
    } else if (this.wStage === 'slide') {
      pos = SHEATHED_POS; rate = 16;
      this.wStageT += dt;
      if (this.wStageT > 0.22) { this.wStage = 'in'; this.justSheathed = true; }
    } else { pos = SHEATHED_POS; rate = 30; }
    const k = 1 - Math.exp(-rate * dt);
    w.position.lerp(pos, k);
    w.quaternion.slerp(IDENT_Q, k);
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
    const sword = this.cfg.weapon === 'sword';
    if (sword && !this.sheathed) {
      // 뽑은 칼: 칼끝을 앞쪽 아래로 겨누고, 뛸 때 오른팔은 조금만 흔듦
      armRx = -sw * 0.18 - 0.2; wristX = -1.2;
    }
    if (sword && this.saya) {
      // 왼손은 칼집 입구를 쥠
      armLx = -0.5 + sw * 0.12; armLz = 0.18;
    }

    // 도사 지팡이: 팔+손목 회전 합(staffT)으로 지팡이 각도를 정함 (0 = 위로 곧게)
    const staff = this.cfg.weapon === 'staff';
    let staffT = 0.22;
    if (staff) { armRx = -0.3 - sw * 0.15; armRz = 0.18; }
    // 요정 활: 왼손에 활을 쥐고 살짝 앞으로
    const bow = this.cfg.weapon === 'bow';
    let bowDraw = 0;
    if (bow) { armLx = -0.3 + sw * 0.3; armLz = -0.08; }

    if (p.attack && p.attack.kind >= 20) {
      // 활쏘기: 왼팔로 활을 겨누고 오른손으로 시위를 당겼다가 놓음 (21 = 부채꼴 연사)
      const t = p.attack.t, k = p.attack.kind;
      const draw = easeOut(clamp(t / 0.45, 0, 1));
      const rel = t > 0.45 ? easeOut(clamp((t - 0.45) / 0.2, 0, 1)) : 0;
      const aim = 1 - easeInOut(clamp((t - 0.7) / 0.3, 0, 1));
      const up = Math.min(1, draw * 1.6) * aim;
      bowDraw = draw * (1 - rel);
      armLx = lerp(armLx, k === 23 ? -2.45 : -1.55, up); armLz = lerp(armLz, 0.06, up);
      if (k === 23) chestPitch = -0.3 * up; // 화살비: 하늘로 겨눔
      armRx = lerp(armRx, (k === 23 ? -2.2 : -1.42) + 0.35 * rel, up); armRz = lerp(armRz, -0.62 + 0.5 * rel, up);
      chestYaw = (k === 21 ? lerp(-0.7, 0.5, rel) : -0.4) * aim;
      legL = 0.3 * aim; legR = -0.2 * aim;
    } else if (p.attack && p.attack.kind >= 10) {
      // 도사: 10/12 = 왼손으로 부적 던지기(12는 양손), 11 = 지팡이를 치켜들었다 내리꽂기
      const t = p.attack.t, k = p.attack.kind;
      if (k === 11) {
        const wind = easeInOut(clamp(t / 0.45, 0, 1));
        const strike = easeOut(clamp((t - 0.45) / 0.15, 0, 1));
        const hold = 1 - easeInOut(clamp((t - 0.7) / 0.3, 0, 1));
        armRx = lerp(-0.3, lerp(-2.7, -1.25, strike), Math.max(wind, strike) * hold);
        staffT = lerp(0.22, lerp(0.35, 1.75, strike), Math.max(wind, strike) * hold);
        armLx = lerp(armLx, lerp(-2.2, -1.1, strike), wind * hold);
        chestPitch = lerp(-0.2 * wind, 0.35, strike) * hold;
        bob -= 0.05 * strike * hold;
        legL = 0.35 * strike * hold; legR = -0.3 * strike * hold;
      } else {
        const wind = easeInOut(clamp(t / 0.35, 0, 1));
        const strike = easeOut(clamp((t - 0.35) / 0.2, 0, 1));
        const hold = 1 - easeInOut(clamp((t - 0.65) / 0.35, 0, 1));
        armLx = lerp(armLx, lerp(0.6, -1.75, strike), hold * Math.max(wind, strike));
        armLz = lerp(armLz, -0.1, hold);
        chestYaw = lerp(-0.45 * wind, 0.3, strike) * hold;
        if (k === 12) { armRx = lerp(armRx, -1.3, strike * hold); staffT = lerp(0.22, 1.3, strike * hold); }
        legL = 0.25 * strike * hold; legR = -0.2 * strike * hold;
      }
    } else if (p.attack) {
      wristX = 0; // 벨 때는 칼이 팔의 연장선
      const t = p.attack.t;
      const k = p.attack.kind;
      // 0: 오른→왼 가로베기, 1: 왼→오른 되베기, 2: 내려찍기, 3: 발도베기(칼집에서 뽑으며 왼→오른)
      const wEnd = k === 3 ? 0.3 : 0.26;
      const sEnd = k === 3 ? 0.56 : 0.5;
      const wind = easeInOut(clamp(t / wEnd, 0, 1));
      const strike = easeOut(clamp((t - wEnd) / (sEnd - wEnd), 0, 1));
      const rec = easeInOut(clamp((t - sEnd - 0.08) / (1 - sEnd - 0.08), 0, 1));
      const hold = 1 - rec;
      if (k === 0 || k === 1) {
        const dir = k === 0 ? 1 : -1;
        const from = -1.2 * dir, to = 1.5 * dir;
        chestYaw = lerp(lerp(0, from, wind), to, strike) * hold;
        armRx = lerp(armRx, lerp(-1.4, -1.58, strike), hold * Math.max(wind, strike));
        armRz = lerp(0.12, k === 0 ? 0.45 : 0.15, wind) * hold;
        armLx = lerp(armLx, 0.35, hold);
        legL = 0.35 * hold; legR = -0.25 * hold;
        bob -= 0.04 * strike * hold;
      } else if (k === 3) {
        // 발도: 오른손이 왼허리 칼자루로 → 몸을 틀며 단숨에 뽑아 벰 → 칼집은 뒤로 당김
        chestYaw = lerp(lerp(0, 0.95, wind), -1.55, strike) * hold;
        armRx = lerp(lerp(armRx, -0.75, wind), -1.58, strike);
        armRx = lerp(-0.2, armRx, hold);
        armRz = lerp(lerp(0.12, -0.95, wind), 0.4, strike) * hold;
        armLx = lerp(lerp(armLx, -0.6, wind), 0.55, strike);
        armLx = lerp(-0.5, armLx, hold);
        legL = lerp(0.2 * wind, 0.55, strike) * hold; legR = lerp(-0.1 * wind, -0.35, strike) * hold;
        bob -= (0.06 * wind + 0.05 * strike) * hold;
        chestPitch = lerp(0.15 * wind, 0.2, strike) * hold;
      } else {
        const up = -2.9, down = -0.45;
        armRx = lerp(lerp(armRx, up, wind), down, strike);
        armRx = lerp(armRx, -0.25, rec);
        armRy = 0;
        chestPitch = lerp(lerp(0, -0.25, wind), 0.38, strike) * hold;
        armLx = armRx * 0.9;
        armLz = -0.05;
        bob -= 0.06 * strike * hold;
        legL = 0.4 * strike * hold; legR = -0.4 * strike * hold;
      }
    } else if (p.sheathing > 0) {
      // 납도: 칼을 왼허리 칼집 입구로 가져와 밀어 넣음
      const s = p.sheathing;
      const reach = Math.sin(Math.min(1, s * 1.3) * Math.PI * 0.5) * (1 - easeInOut(clamp((s - 0.75) / 0.25, 0, 1)));
      armRx = lerp(armRx, -1.15, reach);
      armRz = lerp(armRz, -0.7, reach);
      wristX = lerp(-1.2, 0, Math.min(1, s * 3));
      chestYaw = 0.35 * reach;
      armLx = lerp(armLx, -0.7, reach);
    }
    if (p.dash) {
      chestPitch = 0.45;
      legL = 0.9; legR = -0.7;
      armRx = sword && !this.sheathed ? 1.3 : 0.9; armLx = sword ? -0.5 : 0.9;
      wristX = 0; // 회피 때는 칼을 뒤로 끌며 달림
      bob = 0.02;
    }
    if (staff) wristX = staffT - armRx;
    if (this.cfg.type === 'jiangshi' && !p.dead) {
      // 강시: 두 팔을 앞으로 쭉 뻗고, 두 다리를 붙인 채 깡충깡충
      armRx = p.attack ? armRx - 1.0 : -1.55; armLx = p.attack ? armLx - 1.0 : -1.55; armRz = 0.05; armLz = -0.05;
      legL = 0; legR = 0;
      bob = (p.hop || 0) * 0.45;
      chestPitch = -0.05;
    }
    if (this.cfg.type === 'ghost' && !p.dead) {
      // 원귀: 둥둥 떠다니며 소매를 늘어뜨림
      bob = 0.35 + Math.sin(this.idleT * 2.2) * 0.1;
      if (!p.attack) { armRx = -0.5; armLx = -0.5; }
      chestPitch = 0.15;
    }
    if (p.hurt > 0) {
      chestPitch = -0.35 * p.hurt;
      headPitch = -0.2 * p.hurt;
    }
    if (p.cast) {
      armLx = -1.5; armLz = -0.2;
    }

    const L = 1 - Math.exp(-(p.attack ? 34 : 16) * dt);
    const lp = (o, key, v) => (o[key] += (v - o[key]) * L);
    if (this.legs.length) { lp(this.legs[0].rotation, 'x', legR); lp(this.legs[1].rotation, 'x', legL); }
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
    this.updateWeapon(dt);
    if (bow) {
      this.bowCur = (this.bowCur || 0) + (bowDraw - (this.bowCur || 0)) * (1 - Math.exp(-(bowDraw < (this.bowCur || 0) ? 60 : 20) * dt));
      this.setBowDraw(this.bowCur);
    }
    if (this.orbMat) {
      const glow = 0.45 + Math.sin(this.idleT * 4) * 0.15 + (p.attack ? 0.5 : 0);
      this.orbMat.emissive.copy(this.glowColor).multiplyScalar(glow);
    }
    this.body.rotation.z = bodyRoll;

    if (this.tail) {
      this.tail.rotation.x = 0.25 + run * 0.6 + Math.sin(this.idleT * 7) * 0.08 * run;
    }
    // 망토·띠 나부낌: 달릴수록 뒤로 들리고, 가만히 있어도 바람에 살랑
    for (const f of this.flutter) {
      f.g.rotation.x = f.base + run * f.run + Math.sin(this.idleT * (2.4 + run * 4) + f.ph) * f.amp * (0.6 + run);
    }
    if (this.ribbonArc) this.ribbonArc.position.y = -0.02 + Math.sin(this.idleT * 1.8) * 0.025;
    if (this.foxTails) {
      this.foxTails.forEach((t, i) => {
        t.rotation.x = 1.0 + run * 0.5 + Math.sin(this.idleT * 3 + i) * 0.12;
        t.rotation.y = (i - 1) * 0.5 + Math.sin(this.idleT * 2.2 + i * 1.7) * 0.25;
      });
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

export function makeHero(o = {}) {
  return new Rig({ ...{
    type: 'hero', scale: 1.15, skin: '#f6d6b6', robe: '#eeeae0', sleeve: '#eeeae0', cuff: '#2e4f8f', belt: '#2e4f8f', collar: '#2e4f8f',
    pants: '#3a3f5a', hair: '#2a2024', weapon: 'sword',
  }, ...o });
}

// 옷 팔레트를 직업별 리그 색 설정으로 바꿈
// 방어구 → 리그 설정: 장갑 색, 각반(바지·신발) 색, 허리띠 색
export function gearLook(eq) {
  const c = {};
  if (eq.gloves) c.gloves = eq.gloves;
  if (eq.legs) { c.pants = eq.legs; c.shoes = '#1e1a1c'; }
  if (eq.belt) c.belt = eq.belt;
  return c;
}

// 옷 아이템 → 리그 설정 (색, 갑옷, 무늬, 장식)
export function outfitLook(type, o) {
  if (!o || !o.pal) return {};
  const c = outfitColors(type, o.pal, o.armor, o.acc);
  if (o.pattern) { c.pattern = o.pattern; c.patA = o.pal.patA || o.pal.trim; c.patB = o.pal.patB || o.pal.accent; }
  if (o.sleevePat) c.sleevePat = o.sleevePat;
  if (o.deco) { c.deco = o.deco; c.decoA = o.pal.decoA || o.pal.accent; c.decoB = o.pal.decoB || o.pal.trim; c.decoGlow = o.pal.decoGlow; }
  if (o.pal.hair) c.hair = o.pal.hair;
  return c;
}

export function outfitColors(type, pal, armor, acc) {
  if (!pal) return {};
  if (acc) return { ...outfitColors(type, pal, armor), acc };
  if (type === 'hero') return { robe: pal.main, sleeve: pal.main, cuff: pal.accent, belt: pal.accent, collar: pal.accent, pants: pal.dark, armor, trim: pal.trim };
  if (type === 'mage') return { robe: pal.main, sleeve: pal.main, cuff: pal.trim, belt: pal.trim, pants: pal.dark, armor, trim: pal.trim };
  return { robe: pal.main, sleeve: pal.main, cuff: pal.trim, skirt: pal.accent, belt: pal.dark, pants: pal.trim, armor, trim: pal.trim };
}

export function makeGuard() {
  return new Rig({
    type: 'guard', scale: 1.15, skin: '#eac8a6', robe: '#2b4374', sleeve: '#2b4374', cuff: '#c8302c', belt: '#c8302c', collar: '#c8302c',
    pants: '#1f2438', hair: '#1c1a1e', weapon: 'spear',
  });
}

export function makeMage(o = {}) {
  return new Rig({ ...{
    type: 'mage', scale: 1.15, skin: '#f4d4b2', robe: '#3a3a7a', sleeve: '#3a3a7a', cuff: '#e0b040', belt: '#e0b040',
    pants: '#24244a', hair: '#1e1a24', weapon: 'staff',
  }, ...o });
}

export function makeElf(o = {}) {
  return new Rig({ ...{
    type: 'elf', scale: 1.12, skin: '#fbe2cc', robe: '#5aa84e', sleeve: '#5aa84e', cuff: '#e8d8a0', skirt: '#3f7a3a', belt: '#7a4e2e',
    pants: '#f0e8d0', shoes: '#6a4428', hair: '#e8e4c8', eye: '#2a6a4a', weapon: 'bow',
  }, ...o });
}

export function makeLady(o = {}) {
  return new Rig({
    type: 'lady', scale: 1.15, skin: '#f6d8bc', robe: '#9cc46a', sleeve: '#9cc46a', cuff: '#d84a6a', skirt: '#d8486a',
    pants: '#d8486a', hair: '#2a2024', ...o,
  });
}

export function makeJiangshi() {
  return new Rig({
    type: 'jiangshi', scale: 1.12, skin: '#b8d0ae', robe: '#2a5a5a', sleeve: '#2a5a5a', cuff: '#e0b040', belt: '#e0b040',
    pants: '#1a2a2a', hair: '#1a1a20', eye: '#c8302c',
  });
}

export function makeGhost() {
  return new Rig({
    type: 'ghost', scale: 1.15, skin: '#e8eef4', robe: '#f4f4f0', sleeve: '#f4f4f0', hair: '#0a0a10', eye: '#ff2030', noLegs: true,
  });
}

export function makeReaper() {
  return new Rig({
    type: 'reaper', scale: 2.05, skin: '#eef0f2', robe: '#141218', sleeve: '#141218', cuff: '#3a2a4a', belt: '#5a1a2a',
    pants: '#0c0a10', hair: '#0a0a10', eye: '#1a0a0a',
  });
}

// 네 발 짐승 (여우 / 구미호)
export class QuadRig {
  constructor(variant = 'fox') {
    const boss = variant === 'gumiho';
    const pal = boss
      ? { fur: '#f4ecdc', belly: '#ffffff', tip: '#7fd8ff', dark: '#3a3040', mark: '#c8302c' }
      : { fur: '#d8742a', belly: '#f6eedc', tip: '#ffffff', dark: '#3a2a20', mark: '#2a1a14' };
    this.mats = [];
    const mat = (o) => { const m = toon(o); this.mats.push(m); return m; };
    const fur = mat({ color: C(pal.fur) }), belly = mat({ color: C(pal.belly) }), dark = mat({ color: C(pal.dark) });
    const tipM = boss ? toon({ color: C(pal.tip), emissive: C('#2a7aff') }) : mat({ color: C(pal.tip) });
    this.root = new THREE.Group();
    this.body = new THREE.Group();
    this.body.scale.setScalar(boss ? 2.1 : 1.1);
    this.root.add(this.body);
    this.torso = new THREE.Group();
    this.torso.position.y = 0.42;
    this.body.add(this.torso);
    const trunk = mesh(new THREE.CapsuleGeometry(0.17, 0.42, 4, 8), fur);
    trunk.rotation.x = Math.PI / 2;
    this.torso.add(trunk);
    this.torso.add(mesh(new THREE.SphereGeometry(0.15, 8, 6), belly, 0, -0.05, 0.22));
    // 머리
    this.head = new THREE.Group();
    this.head.position.set(0, 0.16, 0.38);
    this.torso.add(this.head);
    this.head.add(mesh(new THREE.SphereGeometry(0.17, 10, 8), fur));
    const snout = mesh(new THREE.ConeGeometry(0.09, 0.24, 6), belly, 0, -0.04, 0.2);
    snout.rotation.x = Math.PI / 2;
    this.head.add(snout);
    this.head.add(mesh(new THREE.SphereGeometry(0.035, 5, 4), dark, 0, -0.03, 0.32));
    for (const s of [-1, 1]) {
      const ear = mesh(new THREE.ConeGeometry(0.07, 0.2, 4), fur, s * 0.1, 0.17, -0.02);
      ear.rotation.z = -s * 0.25;
      this.head.add(ear);
      this.head.add(mesh(new THREE.ConeGeometry(0.035, 0.1, 4), dark, s * 0.1, 0.2, 0.01)).rotation.z = 0;
      this.head.add(mesh(new THREE.BoxGeometry(0.06, 0.035, 0.02), toon({ color: C(boss ? '#ff4a6a' : '#ffd040'), emissive: C(boss ? '#8a0a2a' : '#5a3a00') }), s * 0.08, 0.04, 0.15));
      if (boss) this.head.add(mesh(new THREE.BoxGeometry(0.03, 0.09, 0.02), mat({ color: C(pal.mark) }), s * 0.05, 0.1, 0.15));
    }
    // 꼬리 (구미호는 아홉 개를 부채처럼)
    this.tails = [];
    const n = boss ? 9 : 1;
    for (let i = 0; i < n; i++) {
      const tg = new THREE.Group();
      tg.position.set(0, 0.05, -0.3);
      const spread = n > 1 ? (i / (n - 1) - 0.5) * 2.4 : 0;
      tg.rotation.set(-0.7 - (n > 1 ? Math.cos(spread) * 0.2 : 0), spread * 0.6, 0);
      const t = mesh(new THREE.SphereGeometry(1, 8, 6), fur, 0, 0, -0.32);
      t.scale.set(0.12, 0.12, 0.36);
      tg.add(t);
      const tip = mesh(new THREE.SphereGeometry(1, 6, 5), tipM, 0, 0, -0.62);
      tip.scale.set(0.09, 0.09, 0.12);
      tg.add(tip);
      this.torso.add(tg);
      this.tails.push({ g: tg, base: tg.rotation.clone(), ph: i * 0.7 });
    }
    // 다리
    this.legs = [];
    for (const [x, z] of [[-0.1, 0.2], [0.1, 0.2], [-0.1, -0.2], [0.1, -0.2]]) {
      const g = new THREE.Group();
      g.position.set(x, 0.32, z);
      g.add(mesh(new THREE.CapsuleGeometry(0.045, 0.22, 3, 5), fur, 0, -0.15, 0));
      g.add(mesh(new THREE.SphereGeometry(0.05, 5, 4), dark, 0, -0.29, 0.02));
      this.body.add(g);
      this.legs.push(g);
    }
    this.root.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    this.phase = 0;
    this.idleT = Math.random() * 10;
    this.deadT = 0;
  }

  setFlash(v) {
    if (v === this._lastFlash) return;
    this._lastFlash = v;
    for (const m of this.mats) v > 0 ? m.emissive.setRGB(v, v * 0.95, v * 0.9) : m.emissive.set(0, 0, 0);
  }

  animate(dt, p) {
    const s = p.speed || 0;
    const run = clamp(s / 4, 0, 1);
    this.idleT += dt;
    this.phase += dt * (4 + s * 3);
    const ph = this.phase;
    // 질주: 앞다리·뒷다리가 번갈아
    const g = Math.sin(ph) * run;
    const legs = [g * 0.9, g * 0.9, -g * 0.9, -g * 0.9];
    let pitch = Math.cos(ph) * 0.08 * run, bob = Math.abs(Math.sin(ph)) * 0.08 * run, headX = 0;
    if (p.attack) {
      const t = p.attack.t;
      const wind = smooth(clamp(t / 0.3, 0, 1)), strike = smooth(clamp((t - 0.3) / 0.25, 0, 1)), rec = smooth(clamp((t - 0.62) / 0.38, 0, 1));
      pitch = lerp(lerp(0, -0.35, wind), 0.35, strike) * (1 - rec);
      bob = lerp(-0.08 * wind, 0.06, strike) * (1 - rec);
      headX = lerp(-0.3 * wind, 0.4, strike) * (1 - rec);
      legs[0] = legs[1] = lerp(0.3 * wind, -0.9, strike) * (1 - rec);
      legs[2] = legs[3] = lerp(-0.4 * wind, 0.7, strike) * (1 - rec);
    }
    if (p.hurt > 0) { pitch = -0.3 * p.hurt; headX = -0.3 * p.hurt; }
    const L = 1 - Math.exp(-24 * dt);
    this.legs.forEach((lg, i) => (lg.rotation.x += (legs[i] - lg.rotation.x) * L));
    this.torso.rotation.x += (pitch - this.torso.rotation.x) * L;
    this.head.rotation.x += (headX - this.head.rotation.x) * L;
    this.body.position.y = bob;
    for (const t of this.tails) {
      t.g.rotation.y = t.base.y + Math.sin(this.idleT * 3 + t.ph) * 0.18;
      t.g.rotation.x = t.base.x + Math.sin(this.idleT * 2.3 + t.ph) * 0.1 - run * 0.3;
    }
    if (p.dead) {
      this.deadT += dt;
      const f = smooth(clamp(this.deadT / 0.4, 0, 1));
      this.body.rotation.z = f * Math.PI / 2;
    } else { this.deadT = 0; this.body.rotation.z = 0; }
  }
}

export function makeFox(variant = 'fox') { return new QuadRig(variant); }

export function makeDokkaebi(variant = 'blue') {
  const V = {
    blue: { skin: '#5d8fd8', hair: '#e2522e', horns: 1, scale: 1.12 },
    red: { skin: '#d8574a', hair: '#2a2430', horns: 2, scale: 1.18 },
    boss: { skin: '#b03a5a', hair: '#f0e8d8', horns: 2, scale: 2.3, horn: '#f0c040' },
    fire: { skin: '#3a2a2a', hair: '#ff7a1a', horns: 2, scale: 1.2, horn: '#ffb040' },
  }[variant];
  return new Rig({
    type: 'dokkaebi', skin: V.skin, hair: V.hair, horns: V.horns, horn: V.horn, scale: V.scale,
    pants: V.skin, sleeve: V.skin, legLen: 0.3, torsoH: 0.42, headR: 0.32, neck: 0.3, shoulder: 0.27, limb: 1.35, wide: 1.3,
    weapon: variant === 'boss' ? 'goldclub' : 'club', eye: '#1b1416',
  });
}

// ======================= 물안개 늪 =======================
// 물귀신: 물에 젖은 검푸른 소복, 산발한 긴 머리, 다리 없이 미끄러지듯 다가옴
export function makeWaterGhost() {
  return new Rig({
    type: 'ghost', scale: 1.12, skin: '#9cb8ae', robe: '#36564f', sleeve: '#36564f', hair: '#060a0a', eye: '#7affd0', noLegs: true,
  });
}

// 두꺼비 요괴: 납작 엎드린 몸, 큰 입, 툭 튀어나온 금빛 눈, 등에 혹. 독침(구슬)을 뱉음
export class ToadRig {
  constructor() {
    this.mats = [];
    const mat = (o) => { const m = toon(o); this.mats.push(m); return m; };
    const skin = mat({ color: C('#6a7a3a') }), belly = mat({ color: C('#d8d0a0') }), wart = mat({ color: C('#4a5a2a') }), mouth = mat({ color: C('#8a2a2a') });
    const eyeM = toon({ color: C('#ffd040'), emissive: C('#5a3a00') });
    this.root = new THREE.Group();
    this.body = new THREE.Group();
    this.body.scale.setScalar(1.25);
    this.root.add(this.body);
    this.torso = new THREE.Group();
    this.torso.position.y = 0.32;
    this.body.add(this.torso);
    const trunk = mesh(new THREE.SphereGeometry(0.42, 14, 10), skin);
    trunk.scale.set(1.1, 0.7, 1.15);
    this.torso.add(trunk);
    const bel = mesh(new THREE.SphereGeometry(0.38, 12, 8), belly, 0, -0.08, 0.08);
    bel.scale.set(1.0, 0.55, 1.05);
    this.torso.add(bel);
    const R = (k) => Math.sin(k * 12.9898) * 43758.5453 % 1;
    for (let i = 0; i < 9; i++) {
      const a = (i / 9) * Math.PI * 2, d = 0.18 + Math.abs(R(i)) * 0.14;
      this.torso.add(mesh(new THREE.SphereGeometry(0.055 + Math.abs(R(i + 3)) * 0.04, 6, 4), wart, Math.cos(a) * d, 0.24, Math.sin(a) * d - 0.05));
    }
    // 머리 (아래턱이 따로 벌어짐)
    this.head = new THREE.Group();
    this.head.position.set(0, 0.06, 0.36);
    this.torso.add(this.head);
    const top = mesh(new THREE.SphereGeometry(0.3, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), skin);
    top.scale.set(1.15, 0.6, 1);
    this.head.add(top);
    this.jaw = new THREE.Group();
    this.head.add(this.jaw);
    const jaw = mesh(new THREE.SphereGeometry(0.3, 12, 6, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), belly);
    jaw.scale.set(1.12, 0.45, 1);
    this.jaw.add(jaw);
    this.jaw.add(mesh(new THREE.CircleGeometry(0.26, 12), mouth, 0, 0.005, 0)).rotation.x = -Math.PI / 2;
    for (const s of [-1, 1]) {
      const eye = mesh(new THREE.SphereGeometry(0.1, 10, 8), eyeM, s * 0.17, 0.17, 0.05);
      this.head.add(eye);
      this.head.add(mesh(new THREE.BoxGeometry(0.025, 0.1, 0.03), toon({ color: C('#100800') }), s * 0.17, 0.17, 0.145));
      this.head.add(mesh(new THREE.SphereGeometry(0.11, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2.4), skin, s * 0.17, 0.2, 0.04));
    }
    // 다리: 앞다리는 버팀, 뒷다리는 접혀 있다가 뛰어오를 때 펴짐
    this.legs = [];
    for (const [x, z, back] of [[-0.3, 0.25, 0], [0.3, 0.25, 0], [-0.36, -0.22, 1], [0.36, -0.22, 1]]) {
      const g = new THREE.Group();
      g.position.set(x, 0.22, z);
      const th = mesh(new THREE.CapsuleGeometry(back ? 0.1 : 0.06, back ? 0.18 : 0.14, 3, 6), skin, 0, -0.1, back ? -0.05 : 0);
      th.rotation.x = back ? 0.9 : 0.2;
      g.add(th);
      const foot = mesh(new THREE.BoxGeometry(0.16, 0.03, 0.18), skin, 0, -0.2, back ? 0.05 : 0.06);
      g.add(foot);
      this.body.add(g);
      this.legs.push({ g, back });
    }
    this.root.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    this.phase = Math.random() * 6;
    this.deadT = 0;
  }

  setFlash(v) {
    if (v === this._lastFlash) return;
    this._lastFlash = v;
    for (const m of this.mats) v > 0 ? m.emissive.setRGB(v, v * 0.95, v * 0.9) : m.emissive.set(0, 0, 0);
  }

  animate(dt, p) {
    const s = p.speed || 0;
    this.phase += dt * (s > 0 ? 5 : 1.5);
    const hop = s > 0 ? Math.max(0, Math.sin(this.phase)) : 0;
    let open = 0, crouch = 0, puff = 1 + Math.sin(this.phase * 2.2) * 0.04; // 숨 쉴 때 볼록
    if (p.attack) {
      const t = p.attack.t;
      crouch = smooth(clamp(t / 0.28, 0, 1)) * (1 - smooth(clamp((t - 0.3) / 0.3, 0, 1)));
      open = smooth(clamp((t - 0.15) / 0.2, 0, 1)) * (1 - smooth(clamp((t - 0.6) / 0.3, 0, 1)));
      puff = 1 + crouch * 0.18;
    }
    this.body.position.y = hop * 0.35 - crouch * 0.08;
    this.torso.scale.set(puff, 1, puff);
    this.jaw.rotation.x = open * 0.7;
    this.head.rotation.x = -open * 0.25;
    for (const L of this.legs) if (L.back) L.g.rotation.x = -hop * 0.9;
    if (p.hurt > 0) this.torso.rotation.z = Math.sin(this.phase * 30) * 0.08 * p.hurt; else this.torso.rotation.z = 0;
    if (p.dead) {
      this.deadT += dt;
      this.body.rotation.z = smooth(clamp(this.deadT / 0.4, 0, 1)) * Math.PI;
      this.body.position.y = 0.4 * smooth(clamp(this.deadT / 0.4, 0, 1));
    } else { this.deadT = 0; this.body.rotation.z = 0; }
  }
}

export function makeToad() { return new ToadRig(); }

// 이무기: 용이 되지 못한 거대한 뱀. 고개를 쳐들고, 몸통 마디들이 머리가 지나간 길을 따라옴
export class SerpentRig {
  constructor() {
    this.mats = [];
    const mat = (o) => { const m = toon(o); this.mats.push(m); return m; };
    const scale = mat({ color: C('#2a4a5a') }), belly = mat({ color: C('#c8c09a') }), fin = mat({ color: C('#3a8a8a') }), dark = mat({ color: C('#16222a') });
    const eyeM = toon({ color: C('#ffe060'), emissive: C('#aa6a00') });
    this.root = new THREE.Group();
    this.body = new THREE.Group();
    this.root.add(this.body);
    const S = 1.9;
    this.S = S;
    // 머리: 길쭉한 주둥이, 아래턱, 수염, 이마의 작은 혹(아직 뿔이 되지 못함)
    this.neck = new THREE.Group();
    this.neck.position.y = 1.5 * S * 0.6;
    this.body.add(this.neck);
    this.head = new THREE.Group();
    this.neck.add(this.head);
    const skull = mesh(new THREE.SphereGeometry(0.34, 14, 10), scale);
    skull.scale.set(1, 0.75, 1.25);
    skull.scale.multiplyScalar(S);
    this.head.add(skull);
    const snout = mesh(new THREE.BoxGeometry(0.42, 0.2, 0.5), scale, 0, -0.02 * S, 0.42 * S);
    snout.scale.multiplyScalar(S);
    this.head.add(snout);
    this.jaw = new THREE.Group();
    this.jaw.position.set(0, -0.12 * S, 0.12 * S);
    this.head.add(this.jaw);
    const jaw = mesh(new THREE.BoxGeometry(0.36, 0.1, 0.55), belly, 0, 0, 0.26 * S);
    jaw.scale.multiplyScalar(S);
    this.jaw.add(jaw);
    for (const s of [-1, 1]) {
      this.head.add(mesh(new THREE.SphereGeometry(0.075 * S, 8, 6), eyeM, s * 0.2 * S, 0.12 * S, 0.22 * S));
      this.head.add(mesh(new THREE.SphereGeometry(0.06 * S, 6, 4), fin, s * 0.13 * S, 0.24 * S, -0.02 * S));
      for (const k of [0, 1]) {
        const w = mesh(new THREE.CylinderGeometry(0.008 * S, 0.016 * S, 0.7 * S, 4), belly, s * (0.2 + k * 0.03) * S, -0.06 * S, 0.62 * S);
        w.rotation.set(0.6 + k * 0.4, 0, s * (1.1 + k * 0.3));
        this.head.add(w);
      }
      for (let k = 0; k < 3; k++) this.jaw.add(mesh(new THREE.ConeGeometry(0.025 * S, 0.09 * S, 4), belly, s * 0.12 * S, 0.06 * S, (0.3 + k * 0.12) * S)).rotation.x = Math.PI;
    }
    // 몸통 마디
    this.segs = [];
    const N = 18;
    for (let i = 0; i < N; i++) {
      const k = i / (N - 1);
      const r = (0.5 - 0.36 * k) * S * (i < 2 ? 0.9 : 1);
      const g = new THREE.Group();
      const ball = mesh(new THREE.SphereGeometry(r, 12, 8), scale);
      ball.scale.set(1, 0.9, 1.25);
      g.add(ball);
      const bl = mesh(new THREE.SphereGeometry(r * 0.86, 10, 6), belly, 0, -r * 0.22, 0);
      bl.scale.set(1, 0.7, 1.2);
      g.add(bl);
      if (i % 2 === 0 && i < N - 2) {
        const f = mesh(new THREE.ConeGeometry(r * 0.32, r * 0.9, 4), fin, 0, r * 0.95, 0);
        f.rotation.x = -0.5;
        g.add(f);
      }
      if (i % 3 === 1) for (const s of [-1, 1]) g.add(mesh(new THREE.SphereGeometry(r * 0.2, 5, 4), dark, s * r * 0.75, r * 0.3, 0));
      this.body.add(g);
      this.segs.push({ g, r });
    }
    this.gap = 0.42 * S;
    this.trail = [];
    this.root.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    this.phase = 0;
    this.deadT = 0;
    this.rise = 1;
  }

  setFlash(v) {
    if (v === this._lastFlash) return;
    this._lastFlash = v;
    for (const m of this.mats) v > 0 ? m.emissive.setRGB(v, v * 0.95, v * 0.9) : m.emissive.set(0, 0, 0);
  }

  // 머리(루트)가 지나간 길을 기록해 마디를 그 위에 늘어놓음
  updateTrail() {
    const p = this.root.position, yaw = this.root.rotation.y;
    const T = this.trail;
    if (!T.length) {
      for (let i = 0; i < 60; i++) T.push(new THREE.Vector3(p.x - Math.sin(yaw) * i * 0.25, p.y, p.z - Math.cos(yaw) * i * 0.25));
    }
    if (T[0].distanceTo(p) > 0.12) { T.unshift(p.clone()); if (T.length > 140) T.pop(); }
  }

  animate(dt, p) {
    const S = this.S;
    this.phase += dt * (2 + (p.speed || 0) * 1.5);
    this.updateTrail();
    const root = this.root.position, yaw = this.root.rotation.y;
    const cy = Math.cos(yaw), sy = Math.sin(yaw);
    // 마디: 길을 따라 일정 간격 + 옆으로 굽이침
    let acc = 0, j = 0;
    const T = this.trail;
    let prev = root;
    this.segs.forEach((sg, i) => {
      const want = (i + 1) * this.gap;
      while (j < T.length - 1 && acc + T[j].distanceTo(T[j + 1]) < want) { acc += T[j].distanceTo(T[j + 1]); j++; }
      const a = T[j], b = T[Math.min(j + 1, T.length - 1)];
      const seg = a.distanceTo(b) || 1;
      const t = Math.min(1, (want - acc) / seg);
      const wx = a.x + (b.x - a.x) * t, wz = a.z + (b.z - a.z) * t;
      const dx = wx - root.x, dz = wz - root.z;
      // 월드 → 루트 로컬 (y축 회전의 역)
      let lx = dx * cy - dz * sy, lz = dx * sy + dz * cy;
      lx += Math.sin(this.phase * 2 - i * 0.6) * 0.12 * S * Math.min(1, i / 3);
      // 앞쪽 몇 마디는 고개를 쳐든 목으로 이어짐
      const lift = Math.max(0, 1 - i / 4) * this.neck.position.y * 0.8 * this.rise;
      sg.g.position.set(lx, sg.r * 0.8 + lift, lz);
      const pp = i ? this.segs[i - 1].g.position : new THREE.Vector3(0, this.neck.position.y, 0);
      sg.g.rotation.y = Math.atan2(pp.x - lx, pp.z - lz);
      prev = sg.g.position;
    });
    // 머리 동작
    let lunge = 0, open = 0;
    if (p.attack) {
      const t = p.attack.t;
      const wind = smooth(clamp(t / 0.28, 0, 1)), strike = smooth(clamp((t - 0.28) / 0.2, 0, 1)), rec = smooth(clamp((t - 0.62) / 0.38, 0, 1));
      lunge = (strike - wind * 0.4) * (1 - rec);
      open = Math.max(wind, strike) * (1 - rec);
    }
    this.neck.position.y = (1.5 * 0.6 + Math.sin(this.phase) * 0.05) * S * this.rise;
    this.neck.position.z = lunge * 0.9 * S;
    this.head.rotation.x = 0.15 - lunge * 0.5 + (p.hurt > 0 ? -0.3 * p.hurt : 0);
    this.jaw.rotation.x = open * 0.7;
    if (p.dead) {
      this.deadT += dt;
      this.rise = Math.max(0.15, 1 - this.deadT * 1.6);
      this.body.rotation.z = smooth(clamp(this.deadT / 0.6, 0, 1)) * 0.6;
    } else { this.deadT = 0; this.body.rotation.z = 0; this.rise += (1 - this.rise) * Math.min(1, dt * 4); }
  }
}

export function makeImugi() { return new SerpentRig(); }

// ======================= 불가사리 협곡 =======================
// 돌장승: 장승이 쇳물에 깨어나 걸어 다님. 네모난 몸, 부릅뜬 눈에 불빛, 바위 주먹
export class StoneRig {
  constructor() {
    this.mats = [];
    const mat = (o) => { const m = toon(o); this.mats.push(m); return m; };
    const stone = mat({ color: C('#8a827a') }), dark = mat({ color: C('#5a544e') }), hat = mat({ color: C('#2a2624') });
    const glow = toon({ color: C('#ffb060'), emissive: C('#ff5a00'), emissiveIntensity: 1.6 });
    this.root = new THREE.Group();
    this.body = new THREE.Group();
    this.body.scale.setScalar(1.35);
    this.root.add(this.body);
    this.torso = new THREE.Group();
    this.torso.position.y = 0.45;
    this.body.add(this.torso);
    this.torso.add(mesh(new THREE.BoxGeometry(0.62, 0.95, 0.5), stone, 0, 0.5, 0));
    this.torso.add(mesh(new THREE.BoxGeometry(0.66, 0.08, 0.54), dark, 0, 0.2, 0));
    // 얼굴: 관모, 부릅뜬 눈, 주먹코, 드러낸 이
    this.torso.add(mesh(new THREE.CylinderGeometry(0.34, 0.36, 0.3, 10), hat, 0, 1.12, 0));
    this.torso.add(mesh(new THREE.CylinderGeometry(0.46, 0.46, 0.05, 12), hat, 0, 0.98, 0));
    for (const sx of [-1, 1]) {
      this.torso.add(mesh(new THREE.SphereGeometry(0.1, 8, 6), stone, sx * 0.15, 0.78, 0.25));
      this.torso.add(mesh(new THREE.SphereGeometry(0.055, 6, 4), glow, sx * 0.15, 0.78, 0.33));
    }
    this.torso.add(mesh(new THREE.SphereGeometry(0.1, 6, 4), dark, 0, 0.62, 0.28));
    this.torso.add(mesh(new THREE.BoxGeometry(0.34, 0.06, 0.04), mat({ color: C('#e8e0d0') }), 0, 0.46, 0.26));
    this.torso.add(mesh(new THREE.BoxGeometry(0.1, 0.5, 0.03), mat({ color: C('#a8302a') }), 0, 0.12, 0.26));
    // 팔: 어깨 → 바위 주먹
    this.arms = [];
    for (const sx of [-1, 1]) {
      const g = new THREE.Group();
      g.position.set(sx * 0.42, 0.85, 0);
      g.add(mesh(new THREE.BoxGeometry(0.2, 0.5, 0.22), dark, 0, -0.25, 0));
      const fist = mesh(new THREE.IcosahedronGeometry(0.2, 0), stone, 0, -0.58, 0.02);
      g.add(fist);
      this.torso.add(g);
      this.arms.push(g);
    }
    this.legs = [];
    for (const sx of [-1, 1]) {
      const g = new THREE.Group();
      g.position.set(sx * 0.17, 0.45, 0);
      g.add(mesh(new THREE.BoxGeometry(0.22, 0.42, 0.26), dark, 0, -0.22, 0));
      g.add(mesh(new THREE.BoxGeometry(0.28, 0.1, 0.34), stone, 0, -0.42, 0.04));
      this.body.add(g);
      this.legs.push(g);
    }
    this.root.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    this.phase = Math.random() * 6;
    this.deadT = 0;
  }

  setFlash(v) {
    if (v === this._lastFlash) return;
    this._lastFlash = v;
    for (const m of this.mats) v > 0 ? m.emissive.setRGB(v, v * 0.9, v * 0.8) : m.emissive.set(0, 0, 0);
  }

  animate(dt, p) {
    const s = p.speed || 0, walk = clamp(s / 2, 0, 1);
    this.phase += dt * (2 + s * 1.6);
    const w = Math.sin(this.phase) * walk;
    this.legs[0].rotation.x = w * 0.5; this.legs[1].rotation.x = -w * 0.5;
    this.torso.rotation.z = w * 0.08;
    let arm = 0;
    if (p.attack) {
      const t = p.attack.t;
      const up = smooth(clamp(t / 0.28, 0, 1)), down = smooth(clamp((t - 0.28) / 0.12, 0, 1)), rec = smooth(clamp((t - 0.62) / 0.38, 0, 1));
      arm = (-2.6 * up + 3.2 * down) * (1 - rec);
      this.torso.rotation.x = (-0.15 * up + 0.35 * down) * (1 - rec);
    } else this.torso.rotation.x = 0;
    for (const a of this.arms) a.rotation.x = arm + (p.attack ? 0 : -w * 0.4 * (a === this.arms[0] ? 1 : -1));
    if (p.hurt > 0) this.torso.position.x = Math.sin(this.phase * 40) * 0.03 * p.hurt; else this.torso.position.x = 0;
    if (p.dead) {
      this.deadT += dt;
      this.body.rotation.x = -smooth(clamp(this.deadT / 0.5, 0, 1)) * Math.PI / 2;
    } else { this.deadT = 0; this.body.rotation.x = 0; }
  }
}

export function makeStoneGolem() { return new StoneRig(); }

// 불가사리: 쇠를 먹고 자라는 괴물. 곰의 몸, 코끼리 코, 등에 쇠바늘, 소꼬리, 범의 다리
export class BeastRig {
  constructor() {
    this.mats = [];
    const mat = (o) => { const m = toon(o); this.mats.push(m); return m; };
    const hide = mat({ color: C('#4a4448') }), belly = mat({ color: C('#6a5e58') }), horn = mat({ color: C('#e8dcc0') });
    this.spikeMat = toon({ color: C('#8a8a92'), emissive: C('#000000'), metalness: HDC ? 0.8 : 0, roughness: 0.35 });
    this.mats.push(this.spikeMat);
    const eyeM = toon({ color: C('#ffd040'), emissive: C('#ff6a00'), emissiveIntensity: 1.5 });
    this.root = new THREE.Group();
    this.body = new THREE.Group();
    this.body.scale.setScalar(2.2);
    this.root.add(this.body);
    this.torso = new THREE.Group();
    this.torso.position.y = 0.62;
    this.body.add(this.torso);
    const trunk = mesh(new THREE.CapsuleGeometry(0.34, 0.55, 6, 12), hide);
    trunk.rotation.x = Math.PI / 2;
    this.torso.add(trunk);
    const hump = mesh(new THREE.SphereGeometry(0.34, 12, 8), hide, 0, 0.18, 0.12);
    hump.scale.set(1, 0.8, 1.1);
    this.torso.add(hump);
    this.torso.add(mesh(new THREE.SphereGeometry(0.28, 10, 8), belly, 0, -0.14, 0.05)).scale.set(1, 0.6, 1.4);
    // 등의 쇠바늘
    for (let i = 0; i < 16; i++) {
      const row = i % 4, col = Math.floor(i / 4);
      const sp = mesh(new THREE.ConeGeometry(0.045, 0.32, 5), this.spikeMat, (row - 1.5) * 0.12, 0.38 - Math.abs(row - 1.5) * 0.06, 0.32 - col * 0.2);
      sp.rotation.set(-0.5, 0, (row - 1.5) * -0.35);
      this.torso.add(sp);
    }
    // 머리: 코끼리 코(마디), 엄니, 작은 눈, 귀
    this.head = new THREE.Group();
    this.head.position.set(0, 0.12, 0.55);
    this.torso.add(this.head);
    const sk = mesh(new THREE.SphereGeometry(0.26, 12, 10), hide);
    sk.scale.set(1, 0.9, 1.05);
    this.head.add(sk);
    this.trunkSegs = [];
    let parent = this.head, z = 0.2, y = -0.05;
    for (let i = 0; i < 5; i++) {
      const g = new THREE.Group();
      g.position.set(0, y, z);
      g.add(mesh(new THREE.CylinderGeometry(0.075 - i * 0.01, 0.09 - i * 0.01, 0.16, 8), belly, 0, -0.06, 0.02)).rotation.x = 0.4;
      parent.add(g);
      this.trunkSegs.push(g);
      parent = g; z = 0.1; y = -0.11;
    }
    for (const sx of [-1, 1]) {
      const t = mesh(new THREE.ConeGeometry(0.035, 0.26, 6), horn, sx * 0.12, -0.12, 0.2);
      t.rotation.set(1.7, 0, sx * 0.3);
      this.head.add(t);
      this.head.add(mesh(new THREE.SphereGeometry(0.04, 6, 4), eyeM, sx * 0.13, 0.08, 0.2));
      const ear = mesh(new THREE.SphereGeometry(0.1, 6, 4), hide, sx * 0.24, 0.12, -0.02);
      ear.scale.set(0.4, 1, 0.9);
      this.head.add(ear);
    }
    // 꼬리
    this.tail = new THREE.Group();
    this.tail.position.set(0, 0.05, -0.55);
    this.torso.add(this.tail);
    this.tail.add(mesh(new THREE.CylinderGeometry(0.025, 0.045, 0.4, 5), hide, 0, -0.15, -0.08)).rotation.x = -0.5;
    this.tail.add(mesh(new THREE.SphereGeometry(0.07, 6, 4), mat({ color: C('#2a2426') }), 0, -0.32, -0.2));
    // 범의 다리 (줄무늬 대신 굵고 짧게)
    this.legs = [];
    for (const [x, z] of [[-0.2, 0.32], [0.2, 0.32], [-0.22, -0.3], [0.22, -0.3]]) {
      const g = new THREE.Group();
      g.position.set(x, 0.5, z);
      g.add(mesh(new THREE.CapsuleGeometry(0.1, 0.32, 4, 8), hide, 0, -0.22, 0));
      g.add(mesh(new THREE.SphereGeometry(0.11, 8, 6), belly, 0, -0.45, 0.04)).scale.set(1, 0.5, 1.2);
      for (let k = -1; k <= 1; k++) g.add(mesh(new THREE.ConeGeometry(0.02, 0.06, 4), horn, k * 0.05, -0.47, 0.14)).rotation.x = 1.5;
      this.body.add(g);
      this.legs.push(g);
    }
    this.root.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    this.phase = 0;
    this.heat = 0;
    this.deadT = 0;
  }

  setFlash(v) {
    if (v === this._lastFlash) return;
    this._lastFlash = v;
    for (const m of this.mats) {
      if (m === this.spikeMat) continue;
      v > 0 ? m.emissive.setRGB(v, v * 0.95, v * 0.9) : m.emissive.set(0, 0, 0);
    }
  }

  // 체력이 줄면 쇠바늘이 벌겋게 달아오름 (0~1)
  setHeat(k) {
    if (Math.abs(k - this.heat) < 0.01) return;
    this.heat = k;
    this.spikeMat.emissive.setRGB(1.0 * k, 0.32 * k, 0.04 * k);
  }

  animate(dt, p) {
    const s = p.speed || 0, run = clamp(s / 5, 0, 1);
    this.phase += dt * (2.2 + s * 1.4);
    const ph = this.phase;
    const g = Math.sin(ph) * (0.15 + run * 0.6);
    const legs = [g, -g, -g, g];
    let pitch = 0, bob = Math.abs(Math.sin(ph)) * 0.03 * (s > 0 ? 1 : 0);
    if (p.attack) {
      // 앞발을 들어 올렸다가 쾅 내려찍음
      const t = p.attack.t;
      const up = smooth(clamp(t / 0.28, 0, 1)), down = smooth(clamp((t - 0.28) / 0.1, 0, 1)), rec = smooth(clamp((t - 0.62) / 0.38, 0, 1));
      pitch = (-0.55 * up + 0.7 * down) * (1 - rec);
      legs[0] = legs[1] = (-1.1 * up + 1.2 * down) * (1 - rec);
      bob = 0.12 * up * (1 - down);
    }
    if (p.hurt > 0) pitch = -0.15 * p.hurt;
    const L = 1 - Math.exp(-20 * dt);
    this.legs.forEach((lg, i) => (lg.rotation.x += (legs[i] - lg.rotation.x) * L));
    this.torso.rotation.x += (pitch - this.torso.rotation.x) * L;
    this.body.position.y = bob;
    this.trunkSegs.forEach((sg, i) => (sg.rotation.x = 0.25 + Math.sin(ph * 0.8 - i * 0.6) * 0.18 + (p.attack ? -0.3 : 0)));
    this.tail.rotation.y = Math.sin(ph * 0.7) * 0.5;
    if (p.dead) {
      this.deadT += dt;
      this.body.rotation.z = smooth(clamp(this.deadT / 0.6, 0, 1)) * Math.PI / 2;
    } else { this.deadT = 0; this.body.rotation.z = 0; }
  }
}

export function makeBulgasari() { return new BeastRig(); }
