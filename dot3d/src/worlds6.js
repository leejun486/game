// 새 지역: 왕릉 고분 (백설 고원 남동쪽 고갯길 너머 옛 왕들의 무덤)
import * as THREE from 'three';
import { toon, animateMesh, ANIM } from './materials.js';
import { boxGeo, cylGeo, Batcher } from './geom.js';
import { mulberry32 } from './util.js';
import { mat4 } from './world.js';
import { extraMaterials, ground, pathStrip, disc, trigger, cairn } from './worlds2.js';
import { GFX } from './gfx.js';
import * as HD from './hdtex.js';
import { thatchHut, leafyTree } from './worlds5.js';

const C = (h) => new THREE.Color(h);
const at = (m, x, y, z) => { m.position.set(x, y, z); return m; };

// ======================= 왕릉 고분 =======================
//  해 질 녘 마른 풀밭. 홍살문 → 참도(돌길) → 정자각 → 언덕 위 큰 봉분, 곳곳의 작은 고분
//  봉분 둘레의 무인석·문인석·석양, 꺼진 장명등 셋(불 밝히기), 혼유석 앞 향로(웨이브)
function tombMaterials(W) {
  const M = W.M;
  M.tombGrass = GFX.hd ? toon({ ...HD.hdGrass([96, 102, 66]), roughness: 1 }) : toon({ color: C('#6e7048') });
  M.mound = GFX.hd ? toon({ ...HD.hdGrass([88, 108, 62]), roughness: 1 }) : toon({ color: C('#5e7044') });
  M.granite = toon({ color: C('#a8a49a') });
  M.graniteDark = toon({ color: C('#7a766e') });
  M.moss = toon({ color: C('#5a6a3a') });
  M.hongsal = toon({ color: C('#b2302a') });
  M.lampStone = toon({ color: C('#b8b2a4') });
  M.ghostFire = toon({ color: C('#d8d0ff'), emissive: C('#6a4aff'), emissiveIntensity: 0.9, transparent: true, opacity: 0.8 });
  W.lavaMats = W.lavaMats || [];
  W.lavaMats.push({ mat: M.ghostFire, base: 0.9 });
}

// 봉분: 둥근 흙무덤 + 병풍석 띠 + 난간석 (r: 반지름)
function mound(W, x, z, r, big = false) {
  const M = W.M, B = W.batch;
  B.add(new THREE.SphereGeometry(r, 24, 10, 0, Math.PI * 2, 0, Math.PI / 2), M.mound, mat4(x, -0.05, z, 0, 0, 0, [1, 0.42, 1]));
  if (big) {
    B.add(cylGeo(r * 1.0, r * 1.02, 0.55, 28), M.granite, mat4(x, 0.27, z));
    for (let k = 0; k < 12; k++) {
      const a = (k / 12) * Math.PI * 2;
      B.add(boxGeo(0.12, 0.4, 0.12, 1), M.graniteDark, mat4(x + Math.cos(a) * r * 1.01, 0.3, z + Math.sin(a) * r * 1.01, -a));
    }
    // 난간석: 기둥과 가로대
    const rr = r + 1.0;
    for (let k = 0; k < 16; k++) {
      const a = (k / 16) * Math.PI * 2;
      if (Math.abs(Math.sin(a) + 1) < 0.15) continue; // 앞쪽(혼유석 자리)은 비움
      B.add(boxGeo(0.16, 0.8, 0.16, 1), M.granite, mat4(x + Math.cos(a) * rr, 0.4, z + Math.sin(a) * rr));
      const b = a + Math.PI / 16, L = 2 * rr * Math.sin(Math.PI / 16);
      B.add(cylGeo(0.05, 0.05, L, 5), M.granite, mat4(x + Math.cos(b) * rr * 0.98, 0.62, z + Math.sin(b) * rr * 0.98, 0, -b, Math.PI / 2));
    }
  }
  W.circles.push({ x, z, r: big ? r + 1.1 : r * 0.92, y: 0 });
}

// 석상: 무인석(칼 든 장수) / 문인석(홀 든 문관) / 석양(돌 양)
function statue(W, x, z, ry, kind) {
  const M = W.M, B = W.batch;
  if (kind === 'sheep') {
    B.add(new THREE.SphereGeometry(0.55, 10, 8), M.granite, mat4(x, 0.55, z, ry, 0, 0, [0.8, 0.75, 1.3]));
    B.add(new THREE.SphereGeometry(0.28, 8, 6), M.granite, mat4(x + Math.sin(ry) * 0.7, 0.9, z + Math.cos(ry) * 0.7, ry));
    for (const s of [-1, 1]) B.add(new THREE.TorusGeometry(0.12, 0.05, 5, 8), M.graniteDark, mat4(x + Math.sin(ry) * 0.6 + Math.cos(ry) * s * 0.2, 1.0, z + Math.cos(ry) * 0.6 - Math.sin(ry) * s * 0.2, ry + Math.PI / 2));
    B.add(boxGeo(1.0, 0.18, 1.5, 1), M.graniteDark, mat4(x, 0.09, z, ry));
    W.circles.push({ x, z, r: 0.75, y: 0 });
    return;
  }
  const warrior = kind === 'warrior';
  B.add(boxGeo(0.9, 0.25, 0.9, 1), M.graniteDark, mat4(x, 0.12, z, ry));
  B.add(boxGeo(0.7, 1.5, 0.5, 2), M.granite, mat4(x, 1.0, z, ry));
  B.add(boxGeo(0.78, 0.12, 0.56, 1), M.graniteDark, mat4(x, 1.05, z, ry));
  B.add(new THREE.SphereGeometry(0.3, 10, 8), M.granite, mat4(x, 2.0, z, ry, 0, 0, [1, 1.1, 0.95]));
  if (warrior) {
    B.add(new THREE.ConeGeometry(0.34, 0.36, 8), M.graniteDark, mat4(x, 2.36, z, ry));
    B.add(boxGeo(0.1, 1.2, 0.1, 1), M.graniteDark, mat4(x + Math.sin(ry) * 0.3, 1.25, z + Math.cos(ry) * 0.3, ry));
  } else {
    B.add(cylGeo(0.22, 0.24, 0.3, 8), M.graniteDark, mat4(x, 2.36, z, ry));
    B.add(boxGeo(0.08, 0.5, 0.04, 1), M.granite, mat4(x + Math.sin(ry) * 0.3, 1.5, z + Math.cos(ry) * 0.3, ry));
  }
  W.circles.push({ x, z, r: 0.55, y: 0 });
}

// 장명등: 무덤 앞을 밝히는 돌 등 (불 밝히기 퀘스트)
function stoneLamp(W, x, z) {
  const M = W.M, B = W.batch;
  B.add(boxGeo(0.8, 0.2, 0.8, 1), M.graniteDark, mat4(x, 0.1, z));
  B.add(cylGeo(0.16, 0.2, 1.0, 8), M.lampStone, mat4(x, 0.7, z));
  B.add(boxGeo(0.7, 0.12, 0.7, 1), M.lampStone, mat4(x, 1.26, z));
  B.add(boxGeo(0.56, 0.56, 0.56, 1), M.lampStone, mat4(x, 1.6, z));
  B.add(boxGeo(0.6, 0.36, 0.14, 1), M.black, mat4(x, 1.6, z + 0.22));
  B.add(new THREE.ConeGeometry(0.6, 0.4, 4), M.lampStone, mat4(x, 2.08, z, Math.PI / 4));
  B.add(new THREE.SphereGeometry(0.09, 6, 4), M.lampStone, mat4(x, 2.32, z));
  W.lanterns.push(new THREE.Vector3(x, 1.6, z));
  W.circles.push({ x, z, r: 0.55, y: 0 });
}

// 홍살문: 붉은 기둥 둘, 위에 붉은 살과 태극 문양
function hongsalmun(W, x, z) {
  const M = W.M, B = W.batch;
  for (const s of [-1, 1]) {
    B.add(cylGeo(0.16, 0.18, 4.6, 8), M.hongsal, mat4(x + s * 2.4, 2.3, z));
    B.add(cylGeo(0.3, 0.34, 0.3, 8), M.graniteDark, mat4(x + s * 2.4, 0.15, z));
    W.circles.push({ x: x + s * 2.4, z, r: 0.3, y: 0 });
  }
  B.add(boxGeo(5.4, 0.18, 0.18, 1), M.hongsal, mat4(x, 3.9, z));
  B.add(boxGeo(5.4, 0.14, 0.14, 1), M.hongsal, mat4(x, 3.2, z));
  for (let k = 0; k < 13; k++) B.add(boxGeo(0.05, 1.2, 0.05, 1), M.hongsal, mat4(x - 2.1 + k * 0.35, 4.5, z));
  const tg = new THREE.Mesh(new THREE.CircleGeometry(0.32, 16), M.blue);
  tg.position.set(x, 4.35, z + 0.1);
  W.root.add(tg);
  const tr = new THREE.Mesh(new THREE.CircleGeometry(0.32, 16, 0, Math.PI), M.red);
  tr.position.set(x, 4.35, z + 0.11);
  W.root.add(tr);
}

// 정자각: 제사 지내는 丁 자 모양 집 (기단 위 기둥, 기와지붕)
function jeongjagak(W, x, z) {
  const M = W.M, B = W.batch;
  // 낮은 기단 (턱이 낮아 그냥 올라섬)
  B.add(boxGeo(6.8, 0.2, 4.4, 2), M.block, mat4(x, 0.1, z));
  B.add(boxGeo(6.8, 0.001, 4.4, 4), M.slab, mat4(x, 0.201, z));
  W.rects.push({ x0: x - 3.4, x1: x + 3.4, z0: z - 2.2, z1: z + 2.2, h: 0.2 });
  for (const px of [-2.8, -0.9, 0.9, 2.8]) for (const pz of [-1.6, 1.6]) {
    B.add(cylGeo(0.16, 0.18, 2.6, 8), M.hongsal, mat4(x + px, 1.5, z + pz));
    W.circles.push({ x: x + px, z: z + pz, r: 0.25, y: 0.2 });
  }
  B.add(boxGeo(5.4, 1.8, 0.12, 2), M.plaster, mat4(x, 1.6, z + 1.6));
  W.blockRects.push({ x0: x - 2.9, x1: x + 2.9, z0: z + 1.4, z1: z + 1.8 });
  W.roof({ cx: x, cy: 2.75, cz: z, w: 6.4, d: 3.6, h: 1.5, overhang: 0.9, lift: 0.45, ridge: true });
}

export function buildTomb(W) {
  extraMaterials(W);
  tombMaterials(W);
  const M = W.M, B = (W.batch = new Batcher());
  W.foliage = new Batcher();
  ground(W, M.tombGrass);
  // 북쪽 경계는 고원 눈밭이 이어지게
  for (let i = 0; i < 14; i++) { const R = mulberry32(4100 + i); disc(W, M.snowCap || M.snow, (R() - 0.5) * 40, -26 + R() * 3, 1 + R() * 1.4).position.y = 0.004; }
  // 흙길: 북동쪽 어귀 → 홍살문 / 참도(박석 돌길): 홍살문 → 정자각
  pathStrip(W, M.fpath, [[14, -27], [12, -21], [6, -17], [0, -15.5]], 1.8, 0.006);
  pathStrip(W, M.path, [[0, -15], [0, -3.2]], 2.2, 0.02);
  pathStrip(W, M.fpath, [[-3, -8], [-10, -10], [-14, -4], [-14, 8]], 1.4, 0.006);
  pathStrip(W, M.fpath, [[3, -8], [11, -3], [14, 4]], 1.4, 0.006);
  hongsalmun(W, 0, -15);
  jeongjagak(W, 0, -1);

  // 언덕 위 큰 봉분 (왕릉) + 혼유석 + 둘레 석상
  mound(W, 0, 17, 4.6, true);
  B.add(boxGeo(1.6, 0.5, 1.0, 1), M.granite, mat4(0, 0.25, 11.2));
  for (const [x, z, ry, k] of [[-3.4, 9.5, 0.6, 'warrior'], [3.4, 9.5, -0.6, 'warrior'], [-5.2, 7.2, 0.4, 'scholar'], [5.2, 7.2, -0.4, 'scholar'], [-6.4, 13.5, Math.PI / 2, 'sheep'], [6.4, 13.5, -Math.PI / 2, 'sheep'], [-5.6, 20.5, Math.PI * 0.8, 'sheep'], [5.6, 20.5, -Math.PI * 0.8, 'sheep']]) statue(W, x, z, ry, k);
  // 참도 둘레 무인석·문인석
  for (const z of [-11, -6.5]) for (const s of [-1, 1]) statue(W, s * 2.6, z, s * -Math.PI / 2, z < -8 ? 'scholar' : 'warrior');
  // 작은 고분들
  for (const [x, z, r] of [[-14, 9, 3.2], [14.5, 13, 3.6], [-15, -17, 2.8], [10, -18, 2.4], [-8, 19, 2.2], [15.5, -8, 2.0]]) mound(W, x, z, r);
  // 장명등 셋: 왕릉 앞, 서쪽 고분 앞, 동쪽 길가
  for (const [x, z] of [[-2, 8.4], [-11.2, 5.5], [12, 0.5]]) stoneLamp(W, x, z);

  // 향로 (웨이브 장치): 혼유석 앞의 큰 청동 향로, 위로 넋불이 맴돎
  const burner = new THREE.Group();
  burner.position.set(0, 0, 12.6);
  const body = new THREE.Group();
  body.position.y = 0.55;
  body.add(new THREE.Mesh(new THREE.SphereGeometry(0.62, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.6), M.bronze));
  body.add(at(new THREE.Mesh(cylGeo(0.58, 0.6, 0.12, 14), M.bronzeDark), 0, 0.3, 0));
  for (let k = 0; k < 3; k++) { const a = (k / 3) * Math.PI * 2; body.add(at(new THREE.Mesh(cylGeo(0.07, 0.05, 0.6, 5), M.bronzeDark), Math.cos(a) * 0.4, -0.35, Math.sin(a) * 0.4)); }
  for (const s of [-1, 1]) body.add(at(new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.04, 5, 10), M.bronzeDark), s * 0.66, 0.2, 0)).rotation.y = Math.PI / 2;
  const flame = at(new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 6), M.ghostFire), 0, 0.8, 0);
  body.add(flame);
  burner.add(body);
  trigger(W, burner, body, 0, 12.6, '향로', 'bigbell', 2.6, 1.0);

  // 소나무 (곧게 선 능 소나무), 마른 나무, 돌무더기
  for (const [x, z, s, sd] of [[-9, -20, 1.1, 1], [8, -12, 1.0, 2], [-17, -6, 1.2, 3], [17, 4, 1.1, 4], [-10, 15, 1.0, 5], [11, 20, 1.1, 6], [-17, 18, 1.0, 7], [6, -23, 0.9, 8], [-5, -21, 0.9, 9], [17, -18, 1.0, 10]]) W.pine(x, 0, z, s, 4200 + sd, true, false);
  const Rb = mulberry32(4301);
  for (let i = 0; i < 52; i++) {
    const side = Math.floor(Rb() * 4);
    const x = side < 2 ? (side ? 1 : -1) * (20.5 + Rb() * 4) : (Rb() - 0.5) * 46;
    const z = side >= 2 ? (side === 2 ? -27.5 - Rb() * 2 : 24 + Rb() * 2) : (Rb() - 0.5) * 50;
    if (side === 2 && Math.abs(x - 14) < 5) continue;
    if (side === 3 && Math.abs(x + 14) < 5) continue;
    W.pine(x, 0, z, 1.1 + Rb() * 0.5, 4400 + i, false, false);
  }
  cairn(W, -6, -12, 1, 91); cairn(W, 9, 8, 0.9, 92);
  // 떠도는 넋불 (장식): 고분 위로 희미하게 맴도는 보랏빛 불
  for (const [x, z] of [[-14, 9], [14.5, 13], [-15, -17], [-8, 19]]) B.add(new THREE.SphereGeometry(0.14, 6, 4), M.ghostFire, mat4(x + 0.4, 2.2, z - 0.3));

  // 풀
  W.grassAreas = [];
  const Rf = mulberry32(4501);
  for (let i = 0; i < 22; i++) {
    const x = (Rf() - 0.5) * 36, z = -22 + Rf() * 44;
    if (Math.abs(x) < 4 && z < 0) continue;
    if (Math.hypot(x, z - 15) < 7.5) continue;
    W.grassAreas.push({ x0: x - 1.2, x1: x + 1.2, z0: z - 1, z1: z + 1, y: 0 });
  }
  W.scatterGrass();

  // 남서쪽 고갯길 (도깨비 밤장터로): 무너진 돌담이 막고 있다가 퀘스트로 치워짐
  W.blockRects.push({ x0: -20, x1: -16.2, z0: 22.6, z1: 23.6 }, { x0: -11.8, x1: 20, z0: 22.6, z1: 23.6 });
  pathStrip(W, M.fpath, [[-14, 8], [-13, 16], [-14, 26]], 1.4, 0.006);
  const rubble = new THREE.Group();
  const Rv = mulberry32(4701);
  for (let i = 0; i < 8; i++) {
    const r = new THREE.Mesh(boxGeo(0.7 + Rv() * 0.5, 0.5 + Rv() * 0.4, 0.6, 1), i % 2 ? M.granite : M.graniteDark);
    r.position.set(-16 + Rv() * 4, 0.3 + (i % 3) * 0.45, 22.6 + Rv() * 1.0);
    r.rotation.set(0, Rv() * 0.6, (Rv() - 0.5) * 0.3);
    r.castShadow = true;
    rubble.add(r);
  }
  W.root.add(rubble);
  W.addGate('market', { x0: -16.2, x1: -11.8, z0: 22.6, z1: 23.6 }, (k) => {
    rubble.position.y = -k * 1.8;
    rubble.visible = k < 0.99;
  });

  B.build(W.root);
  for (const m of W.foliage.build(W.root)) animateMesh(m, ANIM.foliage);
}

// ======================= 도깨비 밤장터 =======================
//  도깨비들이 밤마다 여는 난장. 줄줄이 걸린 등롱, 천막 친 난전, 한가운데 윷판과 푸른 도깨비불 모닥불
//  난장 북을 울리면(웨이브) 장터 주인 외다리 독각귀가 나옴
function marketMaterials(W) {
  const M = W.M;
  M.marketDirt = GFX.hd ? toon({ ...HD.hdDirt([120, 96, 70]), roughness: 1 }) : toon({ color: C('#7a6046') });
  M.straw = toon({ color: C('#c8a868') });
  M.mat2 = toon({ color: C('#d8c08a') });
  M.lanternR = toon({ color: C('#ff8a5a'), emissive: C('#ff3a1a'), emissiveIntensity: 1.0 });
  M.lanternB = toon({ color: C('#8ad8ff'), emissive: C('#2a6aff'), emissiveIntensity: 1.0 });
  M.dokFire = toon({ color: C('#bff0ff'), emissive: C('#2a8aff'), emissiveIntensity: 1.4, transparent: true, opacity: 0.85 });
  M.awning = ['#c8302c', '#2f5aa8', '#e0b040', '#3a8a4a', '#8a3a9a'].map((h) => toon({ color: C(h), side: THREE.DoubleSide }));
  W.lavaMats = W.lavaMats || [];
  W.lavaMats.push({ mat: M.lanternR, base: 1.0 }, { mat: M.lanternB, base: 1.0 }, { mat: M.dokFire, base: 1.4 });
}

// 난전: 평상 + 기둥 넷 + 천막, 위에 물건 (항아리·비단 두루마리·호리병)
function stall(W, x, z, ry, seed) {
  const M = W.M, B = W.batch, R = mulberry32(seed);
  const cs = Math.cos(ry), sn = Math.sin(ry);
  const P = (lx, lz) => [x + lx * cs + lz * sn, z - lx * sn + lz * cs];
  B.add(boxGeo(2.6, 0.5, 1.4, 1), M.wood2, mat4(x, 0.25, z, ry));
  for (const [lx, lz] of [[-1.25, -0.65], [1.25, -0.65], [-1.25, 0.65], [1.25, 0.65]]) { const [px, pz] = P(lx, lz); B.add(cylGeo(0.05, 0.05, 2.2, 5), M.darkWood, mat4(px, 1.1, pz)); }
  const aw = M.awning[Math.floor(R() * M.awning.length)];
  B.add(boxGeo(3.0, 0.05, 1.9, 1), aw, mat4(x, 2.2, z, ry, 0, 0.08));
  for (let k = 0; k < 4; k++) {
    const [px, pz] = P(-0.9 + k * 0.6, (R() - 0.5) * 0.6);
    const t = Math.floor(R() * 3);
    if (t === 0) B.add(new THREE.SphereGeometry(0.2, 10, 8), M.pot, mat4(px, 0.68, pz, 0, 0, 0, [1, 1.2, 1]));
    else if (t === 1) B.add(cylGeo(0.1, 0.1, 0.6, 8), M.awning[Math.floor(R() * 5)], mat4(px, 0.6, pz, ry, 0, Math.PI / 2));
    else { B.add(new THREE.SphereGeometry(0.13, 8, 6), M.straw, mat4(px, 0.62, pz)); B.add(new THREE.SphereGeometry(0.09, 8, 6), M.straw, mat4(px, 0.8, pz)); }
  }
  W.circles.push({ x, z, r: 1.35, y: 0 });
}

// 등롱 줄: 두 기둥 사이에 처진 줄 + 붉고 푸른 등롱
function lanternString(W, x0, z0, x1, z1, n = 6) {
  const M = W.M, B = W.batch;
  for (const [x, z] of [[x0, z0], [x1, z1]]) { B.add(cylGeo(0.07, 0.08, 3.4, 6), M.darkWood, mat4(x, 1.7, z)); W.circles.push({ x, z, r: 0.15, y: 0 }); }
  const L = Math.hypot(x1 - x0, z1 - z0), ry = Math.atan2(x1 - x0, z1 - z0);
  for (let i = 0; i <= n; i++) {
    const t = i / n, sag = Math.sin(t * Math.PI) * 0.5;
    const x = x0 + (x1 - x0) * t, z = z0 + (z1 - z0) * t, y = 3.3 - sag;
    if (i < n) B.add(cylGeo(0.012, 0.012, L / n + 0.02, 3), M.black, mat4(x + (x1 - x0) / n / 2, y - 0.05, z + (z1 - z0) / n / 2, 0, ry, Math.PI / 2));
    if (i > 0 && i < n) {
      B.add(new THREE.SphereGeometry(0.18, 10, 8), i % 2 ? M.lanternR : M.lanternB, mat4(x, y - 0.35, z, 0, 0, 0, [1, 1.25, 1]));
      B.add(cylGeo(0.1, 0.1, 0.05, 8), M.black, mat4(x, y - 0.12, z));
    }
  }
}

// 장승 한 쌍 (장터 어귀)
function jangseungPair(W, x, z) {
  const M = W.M, B = W.batch;
  for (const s of [-1, 1]) {
    const px = x + s * 1.6;
    B.add(cylGeo(0.26, 0.3, 2.6, 8), M.wood2, mat4(px, 1.3, z));
    B.add(new THREE.SphereGeometry(0.34, 10, 8), M.wood2, mat4(px, 2.7, z, 0, 0, 0, [1, 1.2, 1]));
    B.add(cylGeo(0.36, 0.36, 0.3, 10), M.black, mat4(px, 3.05, z));
    for (const e of [-1, 1]) B.add(new THREE.SphereGeometry(0.07, 6, 4), M.black, mat4(px + e * 0.12, 2.8, z - 0.3));
    B.add(boxGeo(0.28, 0.06, 0.06, 1), M.red, mat4(px, 2.55, z - 0.32));
    W.circles.push({ x: px, z, r: 0.35, y: 0 });
  }
}

export function buildMarket(W) {
  extraMaterials(W);
  tombMaterials(W);
  marketMaterials(W);
  const M = W.M, B = (W.batch = new Batcher());
  W.foliage = new Batcher();
  ground(W, M.tombGrass);
  // 장터 길과 마당 (다져진 흙)
  pathStrip(W, M.marketDirt, [[-14, -27], [-13, -18], [-8, -10], [-2, -4], [0, 2]], 3.2, 0.006);
  disc(W, M.marketDirt, 0, 3, 8.5).position.y = 0.008;
  pathStrip(W, M.marketDirt, [[6, 6], [11, 12], [14, 18], [14, 26]], 2.4, 0.006);
  pathStrip(W, M.marketDirt, [[-6, 6], [-12, 10], [-15, 16]], 2.0, 0.006);
  jangseungPair(W, -13.5, -22);
  // 난전들: 길 양옆과 마당 둘레
  const stalls = [[-17.2, -16, Math.PI / 2], [-9.5, -17.5, -Math.PI / 2 + 0.3], [-14, -8.5, Math.PI / 2 + 0.4], [-4, -12, -Math.PI / 2 + 0.6], [-9, 1.5, Math.PI / 2], [9, 0, -Math.PI / 2], [6.5, -6.5, -0.6], [-5, 11.5, Math.PI], [5, 12, Math.PI], [-2, -7.8, 0.1], [11.5, -10, -1.2], [-16.5, 3, Math.PI / 2]];
  stalls.forEach(([x, z, ry], i) => stall(W, x, z, ry, 5100 + i));
  // 등롱 줄
  for (const [a, b, c, d] of [[-16, -20, -10.5, -14], [-11.5, -12, -6, -8], [-6, -3, 6, -3], [-6, 9, 6, 9], [-8, -3, -8, 9], [8, -3, 8, 9], [9, 10, 13, 16]]) lanternString(W, a, b, c, d);
  // 윷판 멍석과 도깨비불 모닥불
  B.add(boxGeo(3.2, 0.04, 3.2, 1), M.straw, mat4(-3.2, 0.02, 2.5, 0.2));
  for (let k = 0; k < 4; k++) B.add(boxGeo(0.12, 0.04, 0.6, 1), M.mat2, mat4(-3.6 + k * 0.25, 0.06, 2.4, 0.2 + k * 0.4));
  for (let k = 0; k < 6; k++) B.add(cylGeo(0.07, 0.07, 0.02 + k * 0.012, 8), M.gold, mat4(-2.2 + (k % 3) * 0.2, 0.05 + k * 0.006, 3.3 + Math.floor(k / 3) * 0.2));
  for (let k = 0; k < 6; k++) B.add(cylGeo(0.08, 0.1, 1.0, 5), M.darkWood, mat4(3.2, 0.2, 2.6, k * 0.55, 0, 1.2));
  for (let k = 0; k < 5; k++) B.add(new THREE.ConeGeometry(0.28 - k * 0.04, 0.9 + k * 0.15, 6), M.dokFire, mat4(3.2 + (k % 2 ? 0.15 : -0.12), 0.55 + k * 0.08, 2.6 + (k - 2) * 0.08));
  W.lanterns.push(new THREE.Vector3(3.2, 0.9, 2.6));
  W.circles.push({ x: 3.2, z: 2.6, r: 0.9, y: 0 });
  // 장독대와 쌓인 궤짝
  for (const [x, z, n] of [[16, -4, 5], [-17, 12, 4], [13, 6, 3]]) for (let k = 0; k < n; k++) B.add(new THREE.SphereGeometry(0.42 - (k % 2) * 0.1, 10, 8), M.pot, mat4(x + (k % 3) * 0.8 - 0.8, 0.35, z + Math.floor(k / 3) * 0.8, 0, 0, 0, [1, 1.1, 1]));
  for (const [x, z, n] of [[16, -4, 5], [-17, 12, 4], [13, 6, 3]]) W.circles.push({ x: x, z: z + 0.3, r: 1.4, y: 0 });

  // 난장 북 (웨이브 장치): 붉은 천 감은 큰 북과 북틀
  const drum = new THREE.Group();
  drum.position.set(0, 0, 8.5);
  for (const s of [-1, 1]) drum.add(at(new THREE.Mesh(boxGeo(0.2, 2.6, 0.2, 1), M.darkWood), s * 1.25, 1.3, 0));
  drum.add(at(new THREE.Mesh(boxGeo(2.7, 0.2, 0.22, 1), M.red), 0, 2.55, 0));
  const body = new THREE.Group();
  body.position.set(0, 1.45, 0);
  const shell = new THREE.Mesh(cylGeo(0.9, 0.9, 0.9, 16), M.drumSide);
  shell.rotation.x = Math.PI / 2;
  body.add(shell);
  for (const s of [-1, 1]) { const f = new THREE.Mesh(new THREE.CircleGeometry(0.9, 16), M.drumFace); f.position.z = s * 0.46; if (s < 0) f.rotation.y = Math.PI; body.add(f); }
  body.add(at(new THREE.Mesh(cylGeo(0.92, 0.92, 0.2, 16), M.awning[0]), 0, 0, 0)).rotation.x = Math.PI / 2;
  drum.add(body);
  trigger(W, drum, body, 0, 8.5, '난장 북', 'drum', 3.4, 1.3);

  // 나무: 오래된 느티나무 둘, 경계 소나무
  for (const [x, z, s, sd] of [[-12, 18, 1.3, 1], [15, -17, 1.2, 2], [17, 9, 1.0, 3], [-17, -4, 1.0, 4], [2, -20, 0.9, 5], [7, 20, 1.0, 6]]) W.pine(x, 0, z, s, 5200 + sd, true, false, true);
  const Rb = mulberry32(5301);
  for (let i = 0; i < 52; i++) {
    const side = Math.floor(Rb() * 4);
    const x = side < 2 ? (side ? 1 : -1) * (20.5 + Rb() * 4) : (Rb() - 0.5) * 46;
    const z = side >= 2 ? (side === 2 ? -27.5 - Rb() * 2 : 24 + Rb() * 2) : (Rb() - 0.5) * 50;
    if (side === 2 && Math.abs(x + 14) < 5) continue;
    if (side === 3 && Math.abs(x - 14) < 5) continue;
    W.pine(x, 0, z, 1.1 + Rb() * 0.5, 5400 + i, false, false);
  }
  cairn(W, 12, -20, 1, 95); cairn(W, -7, 19, 0.9, 96);
  // 풀
  W.grassAreas = [];
  const Rf = mulberry32(5501);
  for (let i = 0; i < 18; i++) {
    const x = (Rf() - 0.5) * 36, z = -22 + Rf() * 44;
    if (Math.hypot(x, z - 3) < 10) continue;
    W.grassAreas.push({ x0: x - 1.2, x1: x + 1.2, z0: z - 1, z1: z + 1, y: 0 });
  }
  W.scatterGrass();

  // 남동쪽 갯바람 길 (남해 갯벌로): 쌓인 궤짝이 막고 있다가 퀘스트로 치워짐
  W.blockRects.push({ x0: -20, x1: 11.8, z0: 22.6, z1: 23.6 }, { x0: 16.2, x1: 20, z0: 22.6, z1: 23.6 });
  const crates = new THREE.Group();
  const Rv = mulberry32(5701);
  for (let i = 0; i < 7; i++) {
    const c = new THREE.Mesh(boxGeo(0.9, 0.8, 0.9, 1), i % 2 ? M.wood2 : M.darkWood);
    c.position.set(12.3 + (i % 4) * 1.1, 0.4 + Math.floor(i / 4) * 0.8, 23.1 + (Rv() - 0.5) * 0.3);
    c.rotation.y = (Rv() - 0.5) * 0.4;
    c.castShadow = true;
    crates.add(c);
  }
  W.root.add(crates);
  W.addGate('tidal', { x0: 11.8, x1: 16.2, z0: 22.6, z1: 23.6 }, (k) => {
    crates.position.y = -k * 1.8;
    crates.visible = k < 0.99;
  });

  B.build(W.root);
  for (const m of W.foliage.build(W.root)) animateMesh(m, ANIM.foliage);
}

// ======================= 남해 갯벌 마을 =======================
//  북쪽은 모래밭 바닷가 마을 (초가, 덕장, 돌담, 당산나무), 남쪽은 끝없는 갯벌 (물웅덩이에선 느려짐)
//  당산나무 아래 징을 치면(웨이브) 사람 목소리를 흉내 내는 장산범이 나옴
function tidalMaterials(W) {
  const M = W.M;
  M.beach = GFX.hd ? toon({ ...HD.hdDirt([196, 178, 140]), roughness: 1 }) : toon({ color: C('#c8b890') });
  M.mud = toon({ color: C('#5e5248'), roughness: 0.35, metalness: GFX.hd ? 0.1 : 0 });
  M.mudWet = toon({ color: C('#6e8c96'), roughness: 0.1, metalness: GFX.hd ? 0.25 : 0 });
  M.seaFar = toon({ color: C('#3a7a9a'), roughness: 0.15, metalness: GFX.hd ? 0.2 : 0 });
  M.fishDry = toon({ color: C('#b8a888') });
  M.mudWall = M.mudWall || toon({ color: C('#c8a878') });
  M.thatch = M.thatch || toon({ color: C('#b8945a') });
  M.basalt = toon({ color: C('#4a4648') });
  M.rainbow = ['#e84a4a', '#f0a03a', '#f0e04a', '#5ac85a', '#4a8ae8', '#8a5ad8'].map((h) => toon({ color: C(h), emissive: C(h), emissiveIntensity: 0.35 }));
}

// 덕장: 생선 말리는 나무 시렁
function dryingRack(W, x, z, ry) {
  const M = W.M, B = W.batch;
  const cs = Math.cos(ry), sn = Math.sin(ry);
  for (const l of [-1.6, 0, 1.6]) B.add(cylGeo(0.06, 0.07, 2.2, 5), M.darkWood, mat4(x + l * cs, 1.1, z - l * sn));
  for (const h of [1.5, 2.0]) {
    B.add(cylGeo(0.035, 0.035, 3.4, 4), M.wood2, mat4(x, h, z, 0, ry, Math.PI / 2));
    for (let k = 0; k < 7; k++) { const l = -1.4 + k * 0.47; B.add(new THREE.ConeGeometry(0.07, 0.42, 5), M.fishDry, mat4(x + l * cs, h - 0.25, z - l * sn, Math.PI, 0, 0, [1, 1, 0.4])); }
  }
  W.circles.push({ x: x - 1.6 * cs, z: z + 1.6 * sn, r: 0.15, y: 0 }, { x, z, r: 0.15, y: 0 }, { x: x + 1.6 * cs, z: z - 1.6 * sn, r: 0.15, y: 0 });
}

// 갯벌에 얹힌 고깃배
function boat(W, x, z, ry) {
  const M = W.M, B = W.batch;
  B.add(boxGeo(1.3, 0.5, 3.6, 2), M.wood2, mat4(x, 0.25, z, ry, 0, 0.12));
  B.add(new THREE.ConeGeometry(0.66, 1.0, 4), M.wood2, mat4(x + Math.sin(ry) * 2.2, 0.28, z + Math.cos(ry) * 2.2, Math.PI / 2, ry, Math.PI / 4, [1, 1, 0.55]));
  B.add(cylGeo(0.05, 0.05, 2.6, 5), M.darkWood, mat4(x, 1.5, z, 0, 0, 0.1));
  W.circles.push({ x, z, r: 1.0, y: 0 }, { x: x + Math.sin(ry) * 1.4, z: z + Math.cos(ry) * 1.4, r: 0.8, y: 0 }, { x: x - Math.sin(ry) * 1.4, z: z - Math.cos(ry) * 1.4, r: 0.8, y: 0 });
}

// 갯벌 물웅덩이: 얕은 물 (걸음이 느려짐, 인면어는 빨라짐)
function mudPool(W, x, z, rx, rz) {
  const m = new THREE.Mesh(new THREE.CircleGeometry(1, 24), W.M.mudWet);
  m.rotation.x = -Math.PI / 2;
  m.position.set(x, 0.012, z);
  m.scale.set(rx, rz, 1);
  m.receiveShadow = true;
  W.root.add(m);
  W.wet.push({ x, z, rx, rz });
}

export function buildTidal(W) {
  extraMaterials(W);
  tombMaterials(W);
  tidalMaterials(W);
  const M = W.M, B = (W.batch = new Batcher());
  W.foliage = new Batcher();
  ground(W, M.beach);
  // 갯벌: 마을 남쪽 전체
  const flat = new THREE.Mesh(new THREE.PlaneGeometry(60, 22.6), M.mud);
  flat.rotation.x = -Math.PI / 2; flat.position.set(0, 0.006, 11.3); flat.receiveShadow = true;
  W.root.add(flat);
  for (let i = 0; i < 18; i++) { const R = mulberry32(6000 + i); disc(W, M.mud, (R() - 0.5) * 40, 0.5 + R() * 2.5, 0.8 + R() * 1.4).position.y = 0.007; }
  for (const [x, z, rx, rz] of [[-6, 9, 3.2, 2.0], [7, 13, 3.6, 2.2], [-13, 16, 2.6, 1.8], [14, 6, 2.2, 1.6], [0, 19, 4, 1.6], [-2, 13.5, 1.8, 1.2]]) mudPool(W, x, z, rx, rz);
  // 남쪽 먼바다
  const sea = new THREE.Mesh(new THREE.PlaneGeometry(80, 1.4), M.seaFar);
  sea.rotation.x = -Math.PI / 2; sea.position.set(0, 0.02, 22.4); W.root.add(sea);
  // 마을 길
  pathStrip(W, M.fpath, [[14, -27], [12, -20], [6, -14], [0, -9], [-2, -2], [-3, 4]], 2.0, 0.006);
  pathStrip(W, M.fpath, [[0, -9], [-8, -12], [-13, -14]], 1.4, 0.006);
  // 널다리: 마을 → 갯벌 남서쪽 (무지개 다리 쪽)
  const bw = [[-3, 4], [-6, 9], [-10, 14], [-14, 19], [-14, 23]];
  for (let i = 0; i < bw.length - 1; i++) {
    const [x0, z0] = bw[i], [x1, z1] = bw[i + 1];
    const L = Math.hypot(x1 - x0, z1 - z0), ry = Math.atan2(x1 - x0, z1 - z0);
    B.add(boxGeo(1.5, 0.08, L + 0.2, 1), M.wood2, mat4((x0 + x1) / 2, 0.12, (z0 + z1) / 2, ry));
    for (let k = 0; k <= L; k += 1.2) B.add(boxGeo(1.6, 0.04, 0.12, 1), M.darkWood, mat4(x0 + (x1 - x0) * k / L, 0.17, z0 + (z1 - z0) * k / L, ry));
    W.boards.push({ x0, z0, x1, z1, w: 0.8 });
  }
  // 초가 마을과 돌담
  thatchHut(W, -12, -18, Math.PI / 2);
  thatchHut(W, -14, -7, Math.PI / 2);
  thatchHut(W, 11, -7, -Math.PI / 2);
  thatchHut(W, -3, -21, 0);
  for (const [x0, z0, x1, z1] of [[-17, -23, -17, -2], [8, -12, 8, -1], [-8, -24, 1, -24]]) {
    const L = Math.hypot(x1 - x0, z1 - z0), n = Math.round(L / 0.6);
    for (let k = 0; k <= n; k++) { const t = k / n; B.add(new THREE.IcosahedronGeometry(0.32, 0), M.basalt, mat4(x0 + (x1 - x0) * t, 0.28, z0 + (z1 - z0) * t, k, k * 2, 0)); }
    W.blockRects.push({ x0: Math.min(x0, x1) - 0.3, x1: Math.max(x0, x1) + 0.3, z0: Math.min(z0, z1) - 0.3, z1: Math.max(z0, z1) + 0.3 });
  }
  dryingRack(W, 5, -19, 0.2); dryingRack(W, -8, -3, -0.3); dryingRack(W, 14, -15, 1.2);
  boat(W, 9, 9, 0.6); boat(W, -15, 9, -0.4); boat(W, 13, 18, 1.4);
  // 당산나무와 징 (웨이브 장치)
  leafyTree(W, -6.5, 3, 1.6, 6101, M.leaf, M.leaf2);
  for (let k = 0; k < 10; k++) { const a = (k / 10) * Math.PI * 2; B.add(new THREE.IcosahedronGeometry(0.28, 0), M.rock, mat4(-6.5 + Math.cos(a) * 1.6, 0.2, 3 + Math.sin(a) * 1.6)); }
  const gong = new THREE.Group();
  gong.position.set(-1.5, 0, 5);
  for (const s of [-1, 1]) gong.add(at(new THREE.Mesh(boxGeo(0.16, 2.4, 0.16, 1), M.darkWood), s * 1.0, 1.2, 0));
  gong.add(at(new THREE.Mesh(boxGeo(2.3, 0.16, 0.18, 1), M.red), 0, 2.35, 0));
  const body = new THREE.Group();
  body.position.set(0, 1.45, 0);
  const disk = new THREE.Mesh(cylGeo(0.7, 0.7, 0.08, 20), M.bronze);
  disk.rotation.x = Math.PI / 2;
  body.add(disk);
  body.add(at(new THREE.Mesh(cylGeo(0.2, 0.2, 0.1, 12), M.gold), 0, 0, 0.02)).rotation.x = Math.PI / 2;
  gong.add(body);
  trigger(W, gong, body, -1.5, 5, '갯마을 징', 'gong', 3.0, 1.1);
  // 나무: 바닷가 해송
  for (const [x, z, s, sd] of [[16, -22, 1.1, 1], [-17, -14, 1.0, 2], [3, -25, 1.0, 3], [17, -2, 1.0, 4], [-17, 1, 1.1, 5]]) W.pine(x, 0, z, s, 6200 + sd, true, false);
  const Rb = mulberry32(6301);
  for (let i = 0; i < 40; i++) {
    const side = Math.floor(Rb() * 3);
    const x = side < 2 ? (side ? 1 : -1) * (20.5 + Rb() * 4) : (Rb() - 0.5) * 46;
    const z = side < 2 ? -27 + Rb() * 28 : -27.5 - Rb() * 2;
    if (side === 2 && Math.abs(x - 14) < 5) continue;
    W.pine(x, 0, z, 1.0 + Rb() * 0.5, 6400 + i, false, false);
  }
  // 갯벌 동서쪽 끝은 바위
  for (let i = 0; i < 16; i++) { const R = mulberry32(6501 + i), s = i % 2 ? 1 : -1; B.add(new THREE.IcosahedronGeometry(0.8 + R() * 0.6, 0), M.basalt, mat4(s * (20 + R() * 2), 0.3, 2 + R() * 21, R() * 3, R() * 3, 0)); }
  cairn(W, 10, -24, 1, 97);
  W.grassAreas = [];
  const Rf = mulberry32(6601);
  for (let i = 0; i < 12; i++) {
    const x = (Rf() - 0.5) * 34, z = -24 + Rf() * 20;
    if (Math.abs(x - 4) < 4 && z > -16) continue;
    W.grassAreas.push({ x0: x - 1.1, x1: x + 1.1, z0: z - 0.9, z1: z + 0.9, y: 0 });
  }
  W.scatterGrass();

  // 남쪽 끝 바다: 무지개 다리가 놓이면 천상 선계로 (퀘스트로 나타남)
  W.blockRects.push({ x0: -20, x1: -16.2, z0: 22.6, z1: 23.6 }, { x0: -11.8, x1: 20, z0: 22.6, z1: 23.6 });
  const rb = new THREE.Group();
  rb.position.set(-14, 0, 23);
  W.M.rainbow.forEach((m, i) => {
    const arc = new THREE.Mesh(new THREE.TorusGeometry(5 - i * 0.18, 0.09, 4, 24, Math.PI), m);
    arc.rotation.y = Math.PI / 2;
    arc.position.z = 3;
    rb.add(arc);
  });
  W.root.add(rb);
  W.addGate('sky', { x0: -16.2, x1: -11.8, z0: 22.6, z1: 23.6 }, (k) => {
    rb.scale.setScalar(Math.max(0.001, k));
    rb.visible = k > 0.01;
  });

  B.build(W.root);
  for (const m of W.foliage.build(W.root)) animateMesh(m, ANIM.foliage);
}

// ======================= 천상 선계 =======================
//  구름 위의 선계. 구름 바닥과 구름 더미, 옥돌 길, 복숭아나무, 금빛 정자, 떠다니는 별빛
//  구름 제단의 천둥 북을 울리면(웨이브) 천둥 장수 뇌공이 내려옴
function skyMaterials(W) {
  const M = W.M;
  M.cloud = toon({ color: C('#f0f2fa') });
  M.cloud2 = toon({ color: C('#dfe4f4') });
  M.cloudFloor = toon({ color: C('#e4e8f6') });
  M.jade = toon({ color: C('#7ac8a8') });
  M.starGlow = toon({ color: C('#fff8d8'), emissive: C('#ffd870'), emissiveIntensity: 1.3 });
  W.lavaMats = W.lavaMats || [];
  W.lavaMats.push({ mat: M.starGlow, base: 1.3 });
}

// 구름 더미: 동글동글 뭉친 흰 덩어리 (막힘)
function cloudPuff(W, x, z, s, seed, collide = true) {
  const M = W.M, B = W.batch, R = mulberry32(seed);
  for (let k = 0; k < 5; k++) {
    const r = (0.6 + R() * 0.5) * s;
    B.add(new THREE.SphereGeometry(r, 12, 8), k % 2 ? M.cloud : M.cloud2, mat4(x + (R() - 0.5) * 1.6 * s, r * 0.55, z + (R() - 0.5) * 1.2 * s));
  }
  if (collide) W.circles.push({ x, z, r: 1.2 * s, y: 0 });
}

// 금빛 정자: 붉은 기둥 넷, 기와지붕
function pavilion(W, x, z) {
  const M = W.M, B = W.batch;
  B.add(boxGeo(4.4, 0.25, 4.4, 2), M.jade, mat4(x, 0.12, z));
  W.rects.push({ x0: x - 2.2, x1: x + 2.2, z0: z - 2.2, z1: z + 2.2, h: 0.25 });
  for (const [px, pz] of [[-1.7, -1.7], [1.7, -1.7], [-1.7, 1.7], [1.7, 1.7]]) {
    B.add(cylGeo(0.14, 0.16, 2.6, 8), M.red, mat4(x + px, 1.55, z + pz));
    W.circles.push({ x: x + px, z: z + pz, r: 0.22, y: 0.25 });
  }
  W.roof({ cx: x, cy: 2.85, cz: z, w: 4.6, d: 4.6, h: 1.4, overhang: 0.8, lift: 0.5, ridge: false });
}

export function buildSky(W) {
  extraMaterials(W);
  tombMaterials(W);
  tidalMaterials(W);
  skyMaterials(W);
  const M = W.M, B = (W.batch = new Batcher());
  W.foliage = new Batcher();
  ground(W, M.cloudFloor);
  for (let i = 0; i < 30; i++) { const R = mulberry32(7000 + i); disc(W, i % 2 ? M.cloud : M.cloud2, (R() - 0.5) * 40, -24 + R() * 46, 0.8 + R() * 1.8).position.y = 0.005; }
  // 무지개 끝 (북서쪽 어귀)
  const rb = new THREE.Group();
  rb.position.set(-14, 0, -26);
  M.rainbow.forEach((m, i) => { const arc = new THREE.Mesh(new THREE.TorusGeometry(4 - i * 0.16, 0.08, 4, 24, Math.PI), m); arc.rotation.y = Math.PI / 2; rb.add(arc); });
  W.root.add(rb);
  // 옥돌 길: 어귀 → 정자 → 구름 제단
  pathStrip(W, M.slab, [[-14, -27], [-12, -18], [-5, -12], [0, -5], [0, 4]], 2.2, 0.02);
  pathStrip(W, M.slab, [[0, -5], [9, -6], [12, -10]], 1.6, 0.02);
  disc(W, M.slab, 0, 7, 4.4).position.y = 0.022;
  pavilion(W, 12, -12);
  // 구름 제단과 천둥 북 (웨이브 장치)
  const drum = new THREE.Group();
  drum.position.set(0, 0, 8);
  for (const s of [-1, 1]) drum.add(at(new THREE.Mesh(boxGeo(0.2, 2.8, 0.2, 1), M.gold), s * 1.35, 1.4, 0));
  drum.add(at(new THREE.Mesh(boxGeo(2.9, 0.2, 0.22, 1), M.red), 0, 2.75, 0));
  const body = new THREE.Group();
  body.position.set(0, 1.55, 0);
  const shell = new THREE.Mesh(cylGeo(1.0, 1.0, 0.95, 16), M.drumSide);
  shell.rotation.x = Math.PI / 2;
  body.add(shell);
  for (const s of [-1, 1]) { const f = new THREE.Mesh(new THREE.CircleGeometry(1.0, 16), M.drumFace); f.position.z = s * 0.48; if (s < 0) f.rotation.y = Math.PI; body.add(f); }
  for (let k = 0; k < 6; k++) { const a = (k / 6) * Math.PI * 2; body.add(at(new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.3, 4), M.starGlow), Math.cos(a) * 1.15, Math.sin(a) * 1.15, 0)).rotation.z = a - Math.PI / 2; }
  drum.add(body);
  cloudPuff(W, -1.8, 9.2, 0.7, 7101, false); cloudPuff(W, 1.8, 9.2, 0.7, 7102, false);
  trigger(W, drum, body, 0, 8, '천둥 북', 'drum', 3.6, 1.4);
  // 복숭아나무 (선계의 반도)
  const keep = [M.leaf, M.leaf2];
  for (const [x, z, s, sd] of [[-9, -4, 1.1, 1], [8, 2, 1.0, 2], [-12, 10, 1.2, 3], [11, 14, 1.0, 4], [-5, 17, 0.9, 5], [6, -20, 1.0, 6]]) leafyTree(W, x, z, s, 7200 + sd, M.blossom, M.blossomW);
  [M.leaf, M.leaf2] = keep;
  // 구름 더미: 가운데는 몇 개, 둘레는 벽처럼 빽빽
  for (const [x, z, s] of [[-15, -12, 1.2], [15, -1, 1.1], [-4, -18, 0.9], [5, 13, 0.9], [-15, 3, 1.0], [16, 18, 1.2], [-10, 20, 1.1]]) cloudPuff(W, x, z, s, 7300 + Math.round(x * 7 + z));
  const Rb = mulberry32(7401);
  for (let i = 0; i < 46; i++) {
    const side = Math.floor(Rb() * 4);
    const x = side < 2 ? (side ? 1 : -1) * (20.5 + Rb() * 4) : (Rb() - 0.5) * 46;
    const z = side >= 2 ? (side === 2 ? -27.5 - Rb() * 2 : 24 + Rb() * 2) : (Rb() - 0.5) * 50;
    if (side === 2 && Math.abs(x + 14) < 5) continue;
    cloudPuff(W, x, z, 1.4 + Rb() * 0.8, 7500 + i, false);
  }
  // 떠다니는 별빛
  for (let i = 0; i < 26; i++) { const R = mulberry32(7600 + i); B.add(new THREE.OctahedronGeometry(0.08 + R() * 0.06, 0), M.starGlow, mat4((R() - 0.5) * 36, 2.5 + R() * 3, -22 + R() * 44, R() * 3, R() * 3, 0)); }
  // 남쪽 끝은 하늘 낭떠러지 (막힘)
  W.blockRects.push({ x0: -20, x1: 20, z0: 22.6, z1: 23.6 });
  W.grassAreas = [];
  B.build(W.root);
  for (const m of W.foliage.build(W.root)) animateMesh(m, ANIM.foliage);
}
