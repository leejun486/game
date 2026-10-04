// 사람 모양 보스의 장식: 기본 몸(Rig)을 만든 뒤 덧붙임
//  두억시니: 호피 어깨걸이, 큰 구슬 목걸이, 갈기, 금 팔찌
//  저승사자: 좁힌 갓 챙, 떠다니는 명부, 발밑 어둠 기운
//  염라대왕: 면류관(구슬 줄), 등 뒤에 떠 있는 업경대(업보를 비추는 거울)
import * as THREE from 'three';
import { toon } from './materials.js';
import { tigerTex } from './textures.js';

const C = (h) => new THREE.Color(h);
function mesh(geo, mat, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.rotation.set(rx, ry, rz);
  return m;
}
const shadows = (g) => g.traverse((o) => { if (o.isMesh) o.castShadow = true; });

export function decorateDokkaebiKing(r) {
  const gold = r.mat({ color: C('#f0c040') }), bead = r.mat({ color: C('#2a1a3a') });
  const pelt = r.mat({ map: tigerTex() });
  // 호피 어깨걸이
  for (const s of [-1, 1]) {
    const p = mesh(new THREE.SphereGeometry(0.2, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), pelt, s * 0.2, 0.02, 0);
    p.scale.set(1.2, 0.7, 1.1);
    p.rotation.z = -s * 0.35;
    r.chest.add(p);
  }
  // 큰 구슬 목걸이 (금 구슬과 검은 구슬을 번갈아)
  for (let i = 0; i < 11; i++) {
    const a = Math.PI * (0.15 + 0.7 * (i / 10));
    r.chest.add(mesh(new THREE.SphereGeometry(i === 5 ? 0.06 : 0.04, 8, 6), i % 2 ? gold : bead, Math.cos(a) * 0.24, -0.02 - Math.sin(a) * 0.1, 0.12 + Math.sin(a) * 0.12));
  }
  // 흰 갈기: 머리 둘레로 삐죽
  const mane = r.mat({ color: C('#f4ece0') });
  for (let i = 0; i < 9; i++) {
    const a = Math.PI * (0.1 + 0.8 * (i / 8));
    const c = mesh(new THREE.ConeGeometry(0.06, 0.22, 4), mane, Math.cos(a) * 0.3, 0.08, -Math.sin(a) * 0.18 - 0.05);
    c.rotation.set(-0.8, 0, -Math.cos(a) * 1.2);
    r.head.add(c);
  }
  // 금 팔찌
  for (const arm of r.arms) arm.add(mesh(new THREE.TorusGeometry(0.075, 0.022, 5, 10), gold, 0, -0.26, 0, Math.PI / 2, 0, 0));
  shadows(r.root);
  return r;
}

export function decorateReaper(r) {
  // 갓 챙을 조금 좁혀 어깨와 도포가 보이게
  r.head.traverse((o) => { if (o.isMesh && o.geometry.type === 'CylinderGeometry' && o.geometry.parameters.radiusTop === 0.55) o.scale.set(0.62, 1, 0.62); });
  // 떠다니는 명부: 펼친 책 + 보랏빛
  const book = new THREE.Group();
  const cover = r.mat({ color: C('#2a1a3a') }), page = r.mat({ color: C('#efe6d0') });
  const glow = toon({ color: C('#c890ff'), emissive: C('#8a3aff'), emissiveIntensity: 1.4 });
  for (const s of [-1, 1]) {
    const leaf = mesh(new THREE.BoxGeometry(0.24, 0.02, 0.3), cover, s * 0.12, 0, 0, 0, 0, -s * 0.18);
    book.add(leaf);
    book.add(mesh(new THREE.BoxGeometry(0.21, 0.02, 0.27), page, s * 0.11, 0.015, 0, 0, 0, -s * 0.18));
    for (let k = 0; k < 4; k++) book.add(mesh(new THREE.BoxGeometry(0.015, 0.005, 0.2), glow, s * (0.05 + k * 0.035), 0.03, 0, 0, 0, -s * 0.18));
  }
  book.position.set(-0.42, 0.25, 0.2);
  book.userData.float = true;
  r.chest.add(book);
  r.floaters = (r.floaters || []).concat([{ obj: book, base: book.position.clone(), spin: 0.6 }]);
  // 발밑 어둠 기운 (납작한 보라 원)
  const aura = new THREE.Mesh(new THREE.CircleGeometry(0.75, 24), new THREE.MeshBasicMaterial({ color: '#2a0a3a', transparent: true, opacity: 0.45, depthWrite: false }));
  aura.rotation.x = -Math.PI / 2;
  aura.position.y = 0.02;
  aura.userData.noOutline = true;
  r.body.add(aura);
  shadows(book);
  return r;
}

export function decorateYeomra(r) {
  // 도사 갓·부적·화관을 떼고 면류관을 씌움
  r.head.traverse((o) => {
    if (!o.isMesh || o === r.head) return;
    const P = o.geometry?.parameters || {};
    const hat = o.geometry?.type === 'CylinderGeometry' && P.radiusTop >= 0.29;
    const top = o.position.y > 0.2 && (o.geometry?.type === 'ConeGeometry' || o.geometry?.type === 'SphereGeometry' || o.material?.color?.getHexString?.() === 'ffd040');
    if (hat || top) o.visible = false;
  });
  if (r.talisman) r.talisman.visible = false;
  const black = r.mat({ color: C('#141014') }), gold = r.mat({ color: C('#f0c040') });
  const crown = new THREE.Group();
  crown.position.set(0, 0.3, 0);
  crown.add(mesh(new THREE.CylinderGeometry(0.17, 0.19, 0.18, 12), black, 0, 0, 0));
  crown.add(mesh(new THREE.BoxGeometry(0.62, 0.035, 0.42), black, 0, 0.11, 0, -0.08, 0, 0));
  crown.add(mesh(new THREE.BoxGeometry(0.64, 0.02, 0.44), gold, 0, 0.09, 0, -0.08, 0, 0));
  const beadCols = ['#c8302c', '#2a6aff', '#f0c040', '#3aa85a', '#ffffff'];
  const beads = beadCols.map((c) => r.mat({ color: C(c) }));
  for (const zs of [-1, 1]) for (let i = 0; i < 9; i++) {
    const x = -0.27 + i * 0.0675, z = zs * 0.21;
    for (let k = 0; k < 4; k++) crown.add(mesh(new THREE.SphereGeometry(0.018, 5, 4), beads[(i + k) % beads.length], x, 0.07 - k * 0.055, z + zs * 0.005 * k));
  }
  r.head.add(crown);
  // 업경대: 등 뒤에 떠 있는 둥근 청동 거울, 붉게 빛남
  const mirror = new THREE.Group();
  const bronze = r.mat({ color: C('#8a5a2a') });
  const face = toon({ color: C('#ff7a5a'), emissive: C('#ff1a0a'), emissiveIntensity: 1.3 });
  mirror.add(mesh(new THREE.TorusGeometry(0.34, 0.05, 6, 24), bronze));
  mirror.add(mesh(new THREE.CircleGeometry(0.32, 24), face, 0, 0, 0.01));
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    mirror.add(mesh(new THREE.ConeGeometry(0.05, 0.16, 4), gold, Math.cos(a) * 0.44, Math.sin(a) * 0.44, 0, 0, 0, a - Math.PI / 2));
  }
  mirror.position.set(0, 0.55, -0.55);
  mirror.rotation.x = -0.5;
  r.chest.add(mirror);
  r.floaters = (r.floaters || []).concat([{ obj: mirror, base: mirror.position.clone(), spin: 0 }]);
  shadows(crown);
  return r;
}
