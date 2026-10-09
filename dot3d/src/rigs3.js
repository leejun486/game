// 새 지역 몬스터 모양 (기존 Rig·StoneRig를 바탕으로 덧붙임)
//  왕릉 고분: 망령 병사, 무인석, 원귀 궁녀, 어둑시니
import * as THREE from 'three';
import { toon } from './materials.js';
import { Rig, StoneRig, makeDokkaebi, makeLady } from './character.js';
import { BaseRig, makeBeast, CrabRig, CrowRig } from './rigs2.js';
import { clamp, smooth } from './util.js';

const C = (h) => new THREE.Color(h);
function mesh(geo, mat, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.rotation.set(rx, ry, rz);
  m.castShadow = true;
  return m;
}

// 망령 병사: 순장된 옛 병사의 넋. 잿빛 얼굴, 녹슨 갑옷 조각, 흰 머리, 푸른 눈빛, 창
export function makeTombSoldier() {
  const r = new Rig({
    type: 'guard', scale: 1.16, skin: '#b8c0b0', robe: '#4a4c56', sleeve: '#4a4c56', cuff: '#7a2a24', belt: '#3a3020', collar: '#7a2a24',
    pants: '#2a2a30', hair: '#d8d8d0', eye: '#7affe0', weapon: 'spear',
  });
  const rust = r.mat({ color: C('#6a4a3a') }), plate = r.mat({ color: C('#7a7a80') });
  // 어깨 비늘 갑옷과 가슴판 (녹슬고 이 빠진)
  for (const s of [-1, 1]) {
    const sh = mesh(new THREE.SphereGeometry(0.13, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2), s < 0 ? rust : plate, s * 0.22, 0.02, 0);
    sh.scale.set(1.1, 0.6, 1);
    r.chest.add(sh);
  }
  r.hips.add(mesh(new THREE.BoxGeometry(0.34, 0.24, 0.04), plate, 0, 0.26, 0.2));
  r.hips.add(mesh(new THREE.BoxGeometry(0.12, 0.08, 0.045), rust, 0.08, 0.2, 0.2));
  // 넋의 푸른 기운 (가슴 한가운데)
  r.hips.add(mesh(new THREE.SphereGeometry(0.04, 6, 4), toon({ color: C('#bfffee'), emissive: C('#2affc0'), emissiveIntensity: 1.6 }), 0, 0.3, 0.23));
  return r;
}

// 원귀 궁녀: 한을 품은 궁녀. 다리 없이 떠다니는 옅은 보랏빛 당의, 꽃비녀, 보랏빛 눈
export function makeCourtGhost() {
  const r = new Rig({
    type: 'ghost', scale: 1.12, skin: '#e2e4f0', robe: '#cbb8e0', sleeve: '#cbb8e0', hair: '#0a0810', eye: '#b070ff', noLegs: true,
    deco: ['flowerPin', 'ribbon'], decoA: '#b890ff', decoB: '#f0e0ff', decoGlow: '#4a2a8a',
  });
  // 당의 앞섶의 금박 띠
  r.hips.add(mesh(new THREE.BoxGeometry(0.3, 0.05, 0.02), r.mat({ color: C('#e0c060') }), 0, 0.12, 0.23));
  return r;
}

// 무인석: 왕릉을 지키던 돌 장수가 깨어남. 투구, 갑옷 띠, 큰 돌칼
export function makeMuinseok() {
  const r = new StoneRig('muin');
  const st = r.stoneMat, dk = r.darkMat;
  // 투구 끝 뿔과 귀 가리개
  r.torso.add(mesh(new THREE.ConeGeometry(0.12, 0.3, 6), dk, 0, 1.4, 0));
  for (const s of [-1, 1]) r.torso.add(mesh(new THREE.BoxGeometry(0.06, 0.26, 0.24), dk, s * 0.36, 0.82, 0));
  // 갑옷 비늘 줄
  for (let i = 0; i < 3; i++) r.torso.add(mesh(new THREE.BoxGeometry(0.64, 0.05, 0.52), dk, 0, 0.42 + i * 0.16, 0));
  // 오른손 큰 돌칼 (팔과 함께 휘두름)
  const arm = r.arms[1];
  const blade = mesh(new THREE.BoxGeometry(0.08, 0.9, 0.16), st, 0, -0.95, 0.12);
  arm.add(blade);
  arm.add(mesh(new THREE.BoxGeometry(0.26, 0.06, 0.2), dk, 0, -0.55, 0.1));
  // 이끼
  const moss = toon({ color: C('#5a6a3a') });
  r.mats.push(moss);
  for (const [x, y, z] of [[0.2, 0.95, 0.15], [-0.25, 0.3, 0.2], [0.1, 1.2, -0.1]]) r.torso.add(mesh(new THREE.IcosahedronGeometry(0.07, 0), moss, x, y, z));
  return r;
}

// 어둑시니: 볼수록 커지는 어둠. 바닥까지 끌리는 거대한 그림자 자락, 구부정한 머리에 가득한 눈,
// 땅에 닿을 듯 긴 팔과 발톱, 몸 둘레를 맴도는 검은 연기
class EodumRig extends BaseRig {
  constructor() {
    super();
    const shade = this.mat({ color: C('#16101f') }), shade2 = this.mat({ color: C('#241a32') });
    const eye = this.mat({ color: C('#f4e8ff'), emissive: C('#9a5aff'), emissiveIntensity: 2.2 });
    this.eyeMat = eye;
    this.body.scale.setScalar(1.35);
    // 자락: 아래로 퍼지는 종 모양 + 너덜너덜한 끝
    const prof = [[0.0, 2.25], [0.42, 2.1], [0.55, 1.75], [0.6, 1.3], [0.78, 0.7], [1.0, 0.18], [1.05, 0.0]].map(([r, y]) => new THREE.Vector2(r, y));
    this.cloak = new THREE.Group();
    this.body.add(this.cloak);
    this.cloak.add(mesh(new THREE.LatheGeometry(prof, 18), shade));
    for (let k = 0; k < 14; k++) {
      const a = (k / 14) * Math.PI * 2;
      this.cloak.add(mesh(new THREE.ConeGeometry(0.16, 0.42 + (k % 3) * 0.12, 4), k % 2 ? shade : shade2, Math.cos(a) * 0.98, 0.05, Math.sin(a) * 0.98, Math.PI, 0, 0));
    }
    // 머리: 앞으로 숙인 둥근 덩어리, 눈 일곱, 찢어진 입
    this.head = new THREE.Group();
    this.head.position.set(0, 2.15, 0.22);
    this.cloak.add(this.head);
    const hd = mesh(new THREE.SphereGeometry(0.5, 16, 12), shade2);
    hd.scale.set(1.05, 0.92, 1);
    this.head.add(hd);
    for (const [x, y, r] of [[0, 0.12, 0.1], [-0.2, 0.2, 0.065], [0.2, 0.2, 0.065], [-0.3, 0.0, 0.05], [0.3, 0.0, 0.05], [-0.12, 0.34, 0.04], [0.12, 0.34, 0.04]]) {
      const z = Math.sqrt(Math.max(0, 0.25 - x * x - y * y)) * 0.98;
      this.head.add(mesh(new THREE.SphereGeometry(r, 10, 8), eye, x, y, z));
    }
    this.head.add(mesh(new THREE.BoxGeometry(0.42, 0.05, 0.05), this.mat({ color: C('#4a0a2a'), emissive: C('#2a0010') }), 0, -0.2, 0.44));
    // 긴 팔: 어깨 → 팔꿈치 → 발톱
    this.arms = [];
    for (const s of [-1, 1]) {
      const g = new THREE.Group();
      g.position.set(s * 0.55, 1.7, 0.05);
      g.add(mesh(new THREE.CylinderGeometry(0.1, 0.07, 1.3, 7), shade2, 0, -0.65, 0));
      for (let k = -1; k <= 1; k++) g.add(mesh(new THREE.ConeGeometry(0.04, 0.32, 4), shade, k * 0.07, -1.42, 0.04, Math.PI + 0.15, 0, k * 0.15));
      g.rotation.z = s * 0.25;
      this.cloak.add(g);
      this.arms.push(g);
    }
    // 연기
    const smoke = new THREE.MeshBasicMaterial({ color: '#0a0612', transparent: true, opacity: 0.5, depthWrite: false });
    this.smoke = [];
    for (let i = 0; i < 9; i++) {
      const m = new THREE.Mesh(new THREE.SphereGeometry(0.28 + (i % 3) * 0.08, 8, 6), smoke);
      m.userData.noOutline = true;
      m.userData.a = (i / 9) * Math.PI * 2; m.userData.h = 0.2 + (i % 4) * 0.35;
      this.body.add(m);
      this.smoke.push(m);
    }
    this.finish();
    for (const m of this.smoke) m.castShadow = false;
  }

  animate(dt, p) {
    this.phase += dt * (1.6 + (p.speed || 0) * 0.6);
    const [up, down, rec] = this.atk(p);
    this.cloak.position.y = Math.sin(this.phase * 1.3) * 0.06;
    this.cloak.rotation.z = Math.sin(this.phase * 0.7) * 0.04;
    this.head.rotation.x = 0.25 + Math.sin(this.phase * 0.9) * 0.06 - up * 0.35 * (1 - rec) + down * 0.4 * (1 - rec);
    this.arms.forEach((a, i) => {
      const s = i ? 1 : -1;
      a.rotation.x = (-2.2 * up + 2.8 * down) * (1 - rec) + Math.sin(this.phase + i) * 0.12;
      a.rotation.z = s * (0.25 + up * 0.3 * (1 - rec));
    });
    for (const m of this.smoke) {
      m.userData.a += dt * 0.8;
      const r = 1.05 + Math.sin(this.phase + m.userData.a * 2) * 0.12;
      m.position.set(Math.cos(m.userData.a) * r, m.userData.h + Math.sin(this.phase * 2 + m.userData.a) * 0.1, Math.sin(m.userData.a) * r);
    }
    this.eyeMat.emissiveIntensity = 1.8 + Math.sin(this.phase * 3) * 0.5;
    if (p.hurt > 0) this.cloak.position.x = Math.sin(this.phase * 40) * 0.04 * p.hurt; else this.cloak.position.x = 0;
    if (p.dead) {
      this.deadT += dt;
      const k = smooth(clamp(this.deadT / 1.0, 0, 1));
      this.body.scale.set(1.35 * (1 + k * 0.4), 1.35 * (1 - k * 0.95), 1.35 * (1 + k * 0.4));
    } else { this.deadT = 0; this.body.scale.setScalar(1.35); }
  }
}

export function makeEodum() { return new EodumRig(); }

// ======================= 도깨비 밤장터 =======================
// 장난꾸러기 도깨비: 작고 날랜 초록 도깨비, 머리에 쓴 장난감 탈
export function makeImp() {
  const r = makeDokkaebi('imp');
  const mask = r.mat({ color: C('#f0e0c0') }), red = r.mat({ color: C('#c8302c') });
  const m = mesh(new THREE.CircleGeometry(0.16, 12), mask, 0.12, 0.22, 0.2, -0.4, 0.5, 0.3);
  r.head.add(m);
  r.head.add(mesh(new THREE.CircleGeometry(0.04, 8), red, 0.13, 0.24, 0.215, -0.4, 0.5, 0.3));
  return r;
}

// 노름꾼 도깨비: 보랏빛 도깨비, 패랭이 갓, 허리에 엽전 꾸러미. 엽전을 부채꼴로 던짐
export function makeGambler() {
  const r = makeDokkaebi('gambler');
  const straw = r.mat({ color: C('#c8a868') }), coin = r.mat({ color: C('#e0b040'), emissive: C('#3a2600') });
  r.head.add(mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.03, 16), straw, 0, 0.3, 0));
  r.head.add(mesh(new THREE.CylinderGeometry(0.16, 0.2, 0.18, 12), straw, 0, 0.39, 0));
  for (let k = 0; k < 5; k++) r.hips.add(mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.015, 8), coin, 0.24, -0.02 - k * 0.025, 0.08, Math.PI / 2, 0, 0.3));
  return r;
}

// 둔갑 너구리: 통통한 너구리, 눈가 검은 털, 머리 위 둔갑 나뭇잎
export function makeTanuki() {
  const r = makeBeast('tanuki');
  const leaf = r.mat({ color: C('#5aa83a') }), dark = r.mat({ color: C('#2a1e16') });
  const l = mesh(new THREE.SphereGeometry(0.1, 8, 6), leaf, 0, 0.2, 0.0, 0, 0.4, 0);
  l.scale.set(1, 0.25, 1.7);
  r.head.add(l);
  for (const s of [-1, 1]) { const m = mesh(new THREE.SphereGeometry(0.06, 8, 6), dark, s * 0.09, 0.04, 0.14); m.scale.set(1.2, 0.8, 0.6); r.head.add(m); }
  return r;
}

// 독각귀: 다리가 하나뿐인 큰 도깨비. 외다리로 껑충껑충 뛰고, 금방망이와 커다란 호리병
export function makeDokgak() {
  const r = makeDokkaebi('dokgak');
  if (r.legs.length === 2) { r.legs[0].visible = false; r.legs[1].position.x = 0; r.legs[1].scale.set(1.5, 1, 1.5); }
  const gourd = r.mat({ color: C('#d8a84a') }), rope = r.mat({ color: C('#8a2a24') }), gold = r.mat({ color: C('#f0c040'), emissive: C('#3a2600') });
  const g = new THREE.Group();
  g.position.set(-0.26, 0.05, -0.12);
  g.add(mesh(new THREE.SphereGeometry(0.13, 10, 8), gourd, 0, -0.1, 0));
  g.add(mesh(new THREE.SphereGeometry(0.09, 10, 8), gourd, 0, 0.06, 0));
  g.add(mesh(new THREE.TorusGeometry(0.05, 0.015, 4, 8), rope, 0, 0.0, 0, Math.PI / 2, 0, 0));
  r.hips.add(g);
  // 목에 건 엽전 꿰미
  for (let i = 0; i < 9; i++) {
    const a = Math.PI * (0.15 + 0.7 * (i / 8));
    r.chest.add(mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.012, 8), gold, Math.cos(a) * 0.22, -0.02 - Math.sin(a) * 0.08, 0.12 + Math.sin(a) * 0.1, Math.PI / 2, 0, 0));
  }
  return r;
}

// ======================= 남해 갯벌 마을 =======================
// 농게: 갯벌 빛 등딱지, 한쪽만 엄청 큰 주황 집게
export function makeFiddler() {
  const r = new CrabRig();
  r.mats[0].color.set('#5a4a62'); r.mats[1].color.set('#c8b8a8'); r.mats[2].color.set('#2a2030');
  const big = r.mat({ color: C('#f08a3a') });
  const [L, R] = r.claws;
  R.arm.traverse((o) => { if (o.isMesh && o.material === r.mats[0]) o.material = big; });
  R.arm.children[1].scale.setScalar(2.1);
  R.arm.children[1].position.x += 0.08;
  L.arm.scale.setScalar(0.6);
  return r;
}

// 인면어: 사람 얼굴을 한 물고기. 은빛 비늘 몸, 지느러미 팔, 꼬리로 서서 뒤뚱뒤뚱
class FishRig extends BaseRig {
  constructor() {
    super();
    const scale = this.mat({ color: C('#7a9aa8') }), belly = this.mat({ color: C('#d8e4e0') }), fin = this.mat({ color: C('#4a6a7a'), transparent: true, opacity: 0.9 });
    const face = this.mat({ color: C('#e8d0b8') }), dark = this.mat({ color: C('#1a1a20') }), lip = this.mat({ color: C('#a84a4a') });
    this.body.scale.setScalar(1.3);
    this.torso = new THREE.Group();
    this.torso.position.y = 0.55;
    this.body.add(this.torso);
    const b = mesh(new THREE.SphereGeometry(0.34, 14, 10), scale, 0, 0.05, 0);
    b.scale.set(0.85, 1.25, 0.8);
    this.torso.add(b);
    const bl = mesh(new THREE.SphereGeometry(0.3, 12, 8), belly, 0, -0.02, 0.08);
    bl.scale.set(0.75, 1.1, 0.7);
    this.torso.add(bl);
    // 얼굴 (몸 위쪽 앞면에 사람 얼굴)
    this.head = new THREE.Group();
    this.head.position.set(0, 0.32, 0.18);
    this.torso.add(this.head);
    const f = mesh(new THREE.SphereGeometry(0.17, 12, 10), face, 0, 0, 0.02);
    f.scale.set(1, 1.1, 0.6);
    this.head.add(f);
    for (const sx of [-1, 1]) {
      this.head.add(mesh(new THREE.SphereGeometry(0.03, 6, 4), dark, sx * 0.06, 0.04, 0.12));
      this.head.add(mesh(new THREE.BoxGeometry(0.06, 0.012, 0.01), dark, sx * 0.06, 0.09, 0.115, 0, 0, sx * 0.25));
    }
    this.head.add(mesh(new THREE.BoxGeometry(0.08, 0.025, 0.02), lip, 0, -0.07, 0.11));
    // 등지느러미
    for (let k = 0; k < 5; k++) this.torso.add(mesh(new THREE.ConeGeometry(0.05, 0.22 - k * 0.02, 4), fin, 0, 0.45 - k * 0.12, -0.22 - k * 0.02, -0.6, 0, 0));
    // 지느러미 팔
    this.arms = [];
    for (const sx of [-1, 1]) {
      const g = new THREE.Group();
      g.position.set(sx * 0.27, 0.05, 0.05);
      const m = mesh(new THREE.ConeGeometry(0.1, 0.32, 4), fin, sx * 0.05, -0.12, 0, 0, 0, sx * 0.5);
      m.scale.set(1, 1, 0.3);
      g.add(m);
      this.torso.add(g);
      this.arms.push(g);
    }
    // 꼬리: 몸 아래로 이어져 땅을 짚음
    this.tail = new THREE.Group();
    this.tail.position.set(0, -0.38, -0.05);
    this.torso.add(this.tail);
    this.tail.add(mesh(new THREE.CylinderGeometry(0.16, 0.08, 0.22, 10), scale, 0, -0.05, 0));
    for (const sx of [-1, 1]) { const t = mesh(new THREE.ConeGeometry(0.12, 0.3, 4), fin, sx * 0.13, -0.2, 0.04, 0, 0, sx * 2.2); t.scale.set(1, 1, 0.3); this.tail.add(t); }
    this.finish();
  }
  animate(dt, p) {
    const s = p.speed || 0;
    this.phase += dt * (3 + s * 5);
    const [a, b, r] = this.atk(p);
    const hop = s > 0 ? Math.abs(Math.sin(this.phase)) : 0;
    this.torso.position.y = 0.55 + hop * 0.18;
    this.torso.rotation.x = (-a * 0.35 + b * 0.7) * (1 - r) + (s > 0 ? 0.1 : 0);
    this.torso.rotation.z = Math.sin(this.phase * 0.5) * 0.06;
    this.tail.rotation.x = -hop * 0.4;
    this.arms.forEach((g, i) => { g.rotation.z = (i ? -1 : 1) * (0.2 + Math.sin(this.phase * 2 + i) * 0.25); g.rotation.x = -a * 1.2 * (1 - r); });
    if (p.hurt > 0) this.torso.position.x = Math.sin(this.phase * 40) * 0.03 * p.hurt; else this.torso.position.x = 0;
    if (p.dead) {
      this.deadT += dt;
      this.body.rotation.z = smooth(clamp(this.deadT / 0.4, 0, 1)) * Math.PI / 2;
    } else { this.deadT = 0; this.body.rotation.z = 0; }
  }
}
export const makeFishman = () => new FishRig();

// 갯귀신: 갯벌에 빠져 죽은 넋. 진흙 빛 소복, 해초 같은 머리, 누런 눈. 진흙 덩이를 던짐
export function makeMudGhost() {
  return new Rig({ type: 'ghost', scale: 1.12, skin: '#8a7a6a', robe: '#5a4a3a', sleeve: '#5a4a3a', hair: '#2a3a1a', eye: '#ffd040', noLegs: true });
}

// 장산범: 하얀 긴 털이 땅까지 끌리는 산짐승. 사람 목소리를 흉내 냄
export function makeJangsan() {
  const r = makeBeast('jangsan');
  const hair = r.mat({ color: C('#f4f0e8') });
  for (let k = 0; k < 14; k++) {
    const side = k % 2 ? 1 : -1, z = 0.4 - Math.floor(k / 2) * 0.13;
    const h = mesh(new THREE.ConeGeometry(0.07, 0.42, 4), hair, side * 0.24, -0.12, z, 0, 0, side * 0.25);
    h.rotation.x = Math.PI;
    r.torso.add(h);
  }
  for (let k = 0; k < 5; k++) r.head.add(mesh(new THREE.ConeGeometry(0.06, 0.3, 4), hair, (k - 2) * 0.06, 0.1, -0.12, -2.4, 0, (k - 2) * 0.2));
  return r;
}

// ======================= 천상 선계 =======================
// 천둥 동자: 등에 작은 북 고리를 멘 아이 신장. 번개 구슬을 던짐
export function makeThunderKid() {
  const r = new Rig({
    type: 'hero', scale: 0.95, skin: '#f4d8c0', robe: '#2a5ab8', sleeve: '#2a5ab8', cuff: '#ffd040', belt: '#ffd040', collar: '#ffd040',
    pants: '#1a2a5a', hair: '#1a1420', eye: '#2a1a14', weapon: 'club',
  });
  const drum = r.mat({ color: C('#c8302c') }), face = r.mat({ color: C('#f0e0b0') }), gold = r.mat({ color: C('#ffd040'), emissive: C('#3a2a00') });
  const ring = mesh(new THREE.TorusGeometry(0.36, 0.025, 5, 20), gold, 0, 0.15, -0.22);
  r.chest.add(ring);
  for (let k = 0; k < 6; k++) {
    const a = (k / 6) * Math.PI * 2;
    const d = mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.06, 10), drum, Math.cos(a) * 0.36, 0.15 + Math.sin(a) * 0.36, -0.22, Math.PI / 2, 0, 0);
    r.chest.add(d);
    r.chest.add(mesh(new THREE.CircleGeometry(0.07, 10), face, Math.cos(a) * 0.36, 0.15 + Math.sin(a) * 0.36, -0.185));
  }
  // 상투 두 개 (아이 머리)
  for (const sx of [-1, 1]) r.head.add(mesh(new THREE.SphereGeometry(0.07, 8, 6), r.mat({ color: C('#1a1420') }), sx * 0.14, 0.2, -0.02));
  return r;
}

// 학 요괴: 흰 몸, 검은 날개 끝, 붉은 정수리. 깃털 화살을 부채꼴로 쏨
export function makeCrane() {
  const r = new CrowRig();
  r.mats[0].color.set('#f4f4f0'); r.mats[1].color.set('#1c1a24'); r.mats[2].color.set('#3a3a3a');
  const crown = r.mat({ color: C('#d82a2a') });
  r.head.add(mesh(new THREE.SphereGeometry(0.06, 8, 6), crown, 0, 0.12, 0.02));
  r.head.scale.set(0.9, 1.0, 1.25);
  return r;
}

// 선녀 그림자: 하늘에서 쫓겨난 선녀의 그림자. 어두운 보랏빛 옷, 빛나는 피백, 다리 없이 미끄러짐
export function makeShadowFairy() {
  return makeLady({ robe: '#3a2a5a', sleeve: '#3a2a5a', cuff: '#c8a0ff', skirt: '#24183a', pants: '#24183a', hair: '#0a0814', skin: '#c8c0dc', eye: '#e0c0ff', deco: ['ribbon', 'flowerPin'], decoA: '#c8a0ff', decoB: '#f0e0ff', decoGlow: '#6a3aaa' });
}

// 뇌공: 하늘의 천둥 장수. 등 뒤의 북 고리, 금 갑옷, 큰 망치, 번개 빛 눈
export function makeNoegong() {
  const r = new Rig({
    type: 'guard', scale: 2.45, skin: '#3a6ab8', robe: '#e0b040', sleeve: '#2a3a7a', cuff: '#ffd040', belt: '#c8302c', collar: '#ffd040',
    pants: '#1a2a5a', hair: '#f4f4ff', eye: '#bff0ff', weapon: 'goldclub', deco: ['cape', 'bracers'], decoA: '#2a3a7a', decoB: '#ffd040',
  });
  const drum = r.mat({ color: C('#c8302c') }), face = r.mat({ color: C('#f4e8c8') }), gold = r.mat({ color: C('#ffd040'), emissive: C('#4a3200') });
  const bolt = r.mat({ color: C('#e8f8ff'), emissive: C('#4aa8ff'), emissiveIntensity: 1.6 });
  r.drumRing = new THREE.Group();
  r.drumRing.position.set(0, 0.25, -0.3);
  r.chest.add(r.drumRing);
  r.drumRing.add(mesh(new THREE.TorusGeometry(0.5, 0.03, 5, 28), gold));
  for (let k = 0; k < 8; k++) {
    const a = (k / 8) * Math.PI * 2;
    r.drumRing.add(mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.08, 12), drum, Math.cos(a) * 0.5, Math.sin(a) * 0.5, 0, Math.PI / 2, 0, 0));
    r.drumRing.add(mesh(new THREE.CircleGeometry(0.085, 12), face, Math.cos(a) * 0.5, Math.sin(a) * 0.5, 0.045));
  }
  // 머리 위 번개 뿔
  for (const sx of [-1, 1]) r.head.add(mesh(new THREE.ConeGeometry(0.035, 0.22, 4), bolt, sx * 0.12, 0.28, 0, 0, 0, -sx * 0.4));
  return r;
}
