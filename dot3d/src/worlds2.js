// 새 지역: 죽림(대나무 숲) · 설원 폐사찰
import * as THREE from 'three';
import { toon, animateMesh, ANIM } from './materials.js';
import { boxGeo, cylGeo, Batcher, latheGeo } from './geom.js';
import * as T from './textures.js';
import { mulberry32 } from './util.js';
import { mat4, blendStrip } from './world.js';

const C = (h) => new THREE.Color(h);
const at = (m, x, y, z) => { m.position.set(x, y, z); return m; };

function extraMaterials(W) {
  const M = W.M;
  M.bamboo = toon({ map: T.bambooTex() });
  M.snow = toon({ map: T.snowTex() });
  M.fpath = toon({ map: T.forestPathTex() });
  M.fgrass = toon({ map: T.forestGrassTex() });
  M.bambooLeaf = toon({ color: C('#6aa84a') });
  M.bambooLeaf2 = toon({ color: C('#4a8a3e') });
  M.snowLeaf = toon({ color: C('#eef4fa') });
  M.cloth = ['#c8302c', '#2f5aa8', '#e0b040', '#f0ece0', '#3a8a4a'].map((h) => toon({ color: C(h), side: THREE.DoubleSide }));
  M.wood2 = toon({ color: C('#8a6a4a') });
  M.ice = toon({ color: C('#bfe8ff'), emissive: C('#000000') });
  M.rock = toon({ color: C('#8a8478') });
  M.rockDark = toon({ color: C('#6a665e') });
  W.glowMats.push({ mat: M.ice, color: new THREE.Color('#4ab0ff'), k: 0.7 });
}

// 바닥: 큰 평면 + 길 조각들
// 지역 길이(z -26.1..22.1)만큼만 깔아서 이웃 지역 바닥과 겹치지 않게
function ground(W, mat, y = 0) {
  const g = new THREE.Mesh(new THREE.PlaneGeometry(120, 48.2), mat);
  g.geometry.attributes.uv.array.forEach((v, i, a) => (a[i] = v * (i % 2 === 0 ? 60 : 24.1)));
  g.rotation.x = -Math.PI / 2;
  g.position.set(0, y, -2);
  g.receiveShadow = true;
  W.root.add(g);
}

function pathStrip(W, mat, pts, width, y0 = 0.012) {
  for (let i = 0; i < pts.length - 1; i++) {
    const [x0, z0] = pts[i], [x1, z1] = pts[i + 1];
    const len = Math.hypot(x1 - x0, z1 - z0) + width * 0.6;
    const geo = new THREE.PlaneGeometry(width, len);
    geo.attributes.uv.array.forEach((v, k, a) => (a[k] = v * (k % 2 === 0 ? width / 2 : len / 2)));
    const m = new THREE.Mesh(geo, mat);
    m.rotation.order = 'YXZ';
    m.rotation.y = Math.atan2(x1 - x0, z1 - z0);
    m.rotation.x = -Math.PI / 2;
    m.position.set((x0 + x1) / 2, y0 + (i % 2) * 0.002, (z0 + z1) / 2); // 높이를 쌓지 않음: 바닥 효과가 길 아래로 묻히지 않게
    m.receiveShadow = true;
    W.root.add(m);
  }
}

function disc(W, mat, x, z, r) {
  const geo = new THREE.CircleGeometry(r, 24);
  geo.attributes.uv.array.forEach((v, k, a) => (a[k] = v * r));
  const m = new THREE.Mesh(geo, mat);
  m.rotation.x = -Math.PI / 2;
  m.position.set(x, 0.01, z);
  m.receiveShadow = true;
  W.root.add(m);
  return m;
}

// 울리면 웨이브가 시작되는 물건 (북과 같은 역할)
function trigger(W, group, body, x, z, label, sound, promptY, r = 1.1) {
  group.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  W.root.add(group);
  W.circles.push({ x, z, r, y: 0 });
  W.drums.push({ group, body, pos: new THREE.Vector3(x, 0, z), shake: 0, label, sound, reach: 2.6, promptY });
}

// 돌탑 (작은 돌을 쌓은 탑)
function cairn(W, x, z, s = 1, seed = 1) {
  const R = mulberry32(seed);
  let y = 0;
  for (let i = 0; i < 6; i++) {
    const r = (0.42 - i * 0.055) * s;
    const h = r * 0.6;
    W.batch.add(new THREE.IcosahedronGeometry(1, 0), i % 2 ? W.M.rock : W.M.rockDark, mat4(x + (R() - 0.5) * 0.06, y + h * 0.5, z + (R() - 0.5) * 0.06, R() * 6, 0, 0, [r, h, r]));
    y += h * 0.85;
  }
  W.circles.push({ x, z, r: 0.45 * s, y: 0 });
}

// ======================= 죽림 =======================
export function buildBamboo(W) {
  extraMaterials(W);
  const M = W.M, B = (W.batch = new Batcher());
  W.foliage = new Batcher();
  const R = mulberry32(303);
  ground(W, M.fgrass);
  // 굽이진 흙길과 가운데 공터
  const pathX = (z) => Math.sin(z * 0.12) * 2.2;
  const pts = [];
  for (let z = 24; z >= -28; z -= 4) pts.push([pathX(z), z]);
  pathStrip(W, M.fpath, pts, 3.6);
  disc(W, M.fpath, 0, 1, 8.5);
  disc(W, M.fpath, 0, -15, 4.2);
  // 지역 이음새: 북쪽은 궁궐 밖 흙길 위로 풀밭이 번지고, 남쪽 끝은 눈이 내려앉아 설원으로 이어짐
  blendStrip(W, M.fgrass, -60, 60, -25.6, -31.6, -0.012);
  blendStrip(W, M.snow, -60, 60, 22.6, 12, 0.004);
  const Rs = mulberry32(17);
  for (let i = 0; i < 18; i++) {
    const z = 6 + Rs() * 14, x = (Rs() - 0.5) * 36;
    if (Math.abs(x - pathX(z)) < 2.5) continue;
    disc(W, M.snow, x, z, 0.6 + Rs() * 1.2 * (z - 4) / 16).position.y = 0.006;
  }

  // 대나무 숲: 덩어리(그로브)마다 충돌 원 하나, 줄기는 인스턴싱
  const stalks = [];
  for (let gx = -19; gx <= 19; gx += 4.2) for (let gz = -25; gz <= 21; gz += 4.2) {
    const x = gx + (R() - 0.5) * 2.4, z = gz + (R() - 0.5) * 2.4;
    if (Math.hypot(x, z - 1) < 11.5) continue;           // 공터
    if (Math.abs(x - pathX(z)) < 4.2) continue;         // 길
    if (Math.hypot(x, z + 15) < 7) continue;            // 서낭당
    if (z < -18.5 && Math.abs(x) < 10) continue;        // 궁궐 쪽 어귀는 트인 풀밭
    const gr = 1.4 + R() * 1.4;
    const n = Math.floor(gr * 6);
    for (let i = 0; i < n; i++) {
      const a = R() * Math.PI * 2, d = Math.sqrt(R()) * gr;
      stalks.push([x + Math.cos(a) * d, z + Math.sin(a) * d, 3.2 + R() * 2.6]);
    }
    W.circles.push({ x, z, r: gr * 0.85, y: 0 });
  }
  // 경계 바깥도 빽빽하게
  for (let i = 0; i < 160; i++) {
    const side = Math.floor(R() * 4);
    const x = side < 2 ? (side ? 1 : -1) * (21 + R() * 6) : (R() - 0.5) * 50;
    const z = side >= 2 ? (side === 2 ? -27 - R() * 3 : 20 + R() * 2.5) : (R() - 0.5) * 56;
    // 남북 끝은 가장자리에만 (궁궐 남문 앞과 폐사찰 입구를 막지 않게)
    if (side >= 2 && Math.abs(x) < 12) continue;
    stalks.push([x, z, 3.5 + R() * 2.8]);
  }
  const geo = new THREE.CylinderGeometry(0.085, 0.1, 1, 6);
  geo.translate(0, 0.5, 0);
  const inst = new THREE.InstancedMesh(geo, M.bamboo, stalks.length);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
  stalks.forEach(([x, z, h], i) => {
    e.set((R() - 0.5) * 0.08, R() * 6, (R() - 0.5) * 0.08);
    m4.compose(new THREE.Vector3(x, 0, z), q.setFromEuler(e), new THREE.Vector3(1, h, 1));
    inst.setMatrixAt(i, m4);
    // 잎: 위쪽에 가는 잎뭉치 몇 개
    for (let k = 0; k < 3; k++) {
      const y = h * (0.62 + k * 0.14);
      const a = R() * Math.PI * 2;
      W.foliage.add(new THREE.IcosahedronGeometry(1, 0), z > 12 && k % 2 ? M.snowLeaf : k % 2 ? M.bambooLeaf : M.bambooLeaf2,
        new THREE.Matrix4().compose(new THREE.Vector3(x + Math.cos(a) * 0.35, y, z + Math.sin(a) * 0.35), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, a, 0.3)), new THREE.Vector3(0.55, 0.12, 0.28)));
    }
  });
  inst.castShadow = true;
  inst.receiveShadow = true;
  animateMesh(inst, ANIM.foliage);
  W.root.add(inst);

  // 서낭당: 오래된 고목 + 오색 천 + 돌탑 + 방울
  W.pine(-1.8, 0, -16.5, 1.35, 77);
  const R2 = mulberry32(5);
  for (let i = 0; i < 14; i++) {
    const a = R2() * Math.PI * 2, d = 1 + R2() * 1.6;
    const cl = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 0.9, 1, 3), M.cloth[i % 5]);
    cl.position.set(-1.8 + Math.cos(a) * d, 2.2 + R2() * 1.2, -16.5 + Math.sin(a) * d);
    cl.rotation.y = R2() * 6;
    cl.castShadow = true;
    animateMesh(cl, ANIM.flag);
    W.root.add(cl);
  }
  cairn(W, 2.2, -16.8, 1.4, 3);
  cairn(W, -4.8, -13.8, 1, 4);
  // 방울 틀
  const bell = new THREE.Group();
  bell.position.set(2.4, 0, -13.2);
  bell.add(at(new THREE.Mesh(boxGeo(0.14, 2.4, 0.14, 1), M.wood2), -0.7, 1.2, 0));
  bell.add(at(new THREE.Mesh(boxGeo(0.14, 2.4, 0.14, 1), M.wood2), 0.7, 1.2, 0));
  bell.add(at(new THREE.Mesh(boxGeo(1.7, 0.14, 0.18, 1), M.wood2), 0, 2.38, 0));
  const body = new THREE.Group();
  body.position.set(0, 2.3, 0);
  const b1 = new THREE.Mesh(latheGeo([[0.02, 0], [0.18, -0.08], [0.3, -0.42], [0.34, -0.55], [0.0, -0.55]], 10), M.gold);
  const b2 = new THREE.Mesh(new THREE.SphereGeometry(0.08, 6, 4), M.bronzeDark);
  b2.position.y = -0.6;
  const rope = new THREE.Mesh(boxGeo(0.03, 0.9, 0.03, 1), M.cloth[0]);
  rope.position.y = -1.05;
  body.add(b1, b2, rope);
  bell.add(body);
  trigger(W, bell, body, 2.4, -13.2, '방울', 'bell', 3.2, 0.9);

  // 장승 한 쌍: 궁궐 쪽 어귀와 설원 쪽 출구
  for (const s of [-1, 1]) jangseung(W, s * 3.2, 17.5, s);
  for (const s of [-1, 1]) jangseung(W, pathX(-21) + s * 3, -21, s);
  // 어귀의 소나무 몇 그루와 풀밭
  for (const [x, z, sc, sd] of [[-7.5, -23, 1.0, 41], [8, -22.5, 1.1, 42], [-11, -19.5, 0.9, 43], [12, -20, 0.95, 44]]) W.pine(x, 0, z, sc, sd);
  // 돌탑과 석등
  cairn(W, -8, 6, 1.1, 7); cairn(W, 8.4, -4, 1, 8); cairn(W, 7, 8.5, 0.8, 9);
  for (const [x, z] of [[-7.5, -5], [7.6, 3], [-6, 9], [5.6, -8.5]]) W.stoneLantern(x, 0, z);
  // 풀
  W.grassAreas = [{ x0: -9, x1: -4, z0: -25, z1: -20, y: 0 }, { x0: 4.5, x1: 9.5, z0: -24.5, z1: -19.5, y: 0 }];
  for (let i = 0; i < 10; i++) {
    const a = R() * Math.PI * 2, d = 9 + R() * 3;
    const x = Math.cos(a) * d, z = 1 + Math.sin(a) * d;
    W.grassAreas.push({ x0: x - 1.2, x1: x + 1.2, z0: z - 1, z1: z + 1, y: 0 });
  }
  W.scatterGrass();

  B.build(W.root);
  for (const m of W.foliage.build(W.root)) animateMesh(m, ANIM.foliage);
}

function jangseung(W, x, z, side) {
  const M = W.M, B = W.batch;
  const wood = W.M.wood2;
  B.add(cylGeo(0.26, 0.3, 2.6, 8), wood, mat4(x, 1.3, z));
  // 모자 (천하대장군은 관모, 지하여장군은 족두리 느낌)
  B.add(cylGeo(side > 0 ? 0.3 : 0.24, 0.3, 0.4, 8), M.black, mat4(x, 2.75, z));
  // 얼굴: 부릅뜬 눈, 주먹코, 이빨
  for (const s of [-1, 1]) {
    B.add(new THREE.SphereGeometry(0.08, 6, 4), M.mortar, mat4(x + s * 0.11, 2.25, z + 0.24));
    B.add(new THREE.SphereGeometry(0.035, 4, 3), M.black, mat4(x + s * 0.11, 2.25, z + 0.31));
  }
  B.add(new THREE.SphereGeometry(0.09, 6, 4), wood, mat4(x, 2.1, z + 0.28));
  B.add(boxGeo(0.3, 0.06, 0.06, 1), M.mortar, mat4(x, 1.93, z + 0.27));
  B.add(boxGeo(0.12, 1.1, 0.03, 1), M.red, mat4(x, 1.1, z + 0.28));
  W.circles.push({ x, z, r: 0.4, y: 0 });
}

// ======================= 설원 폐사찰 =======================
export function buildTemple(W) {
  extraMaterials(W);
  const M = W.M, B = (W.batch = new Batcher());
  W.foliage = new Batcher();
  const R = mulberry32(505);
  ground(W, M.snow, -0.004);
  pathStrip(W, M.path, [[0, 24], [0, 10], [0, -5]], 3.6, 0.02);
  disc(W, M.slab, 0, 3, 7.5);

  // 무너진 절터: 월대 + 계단, 부서진 기둥, 기울어진 지붕
  W.terrace(-11, 11, -22, -7, 0.8);
  W.stairs(-7, -4.6, 0.8, 0);
  W.balustrade(-11, -7, -2.9, -7, 0.8);
  W.balustrade(2.9, -7, 11, -7, 0.8);
  for (let i = 0; i < 7; i++) {
    const x = -9 + i * 3;
    const h = [3.2, 1.4, 2.6, 0.9, 3.2, 2.0, 1.1][i];
    B.add(cylGeo(0.26, 0.29, h, 10), M.wood, mat4(x, 0.8 + h / 2, -19.5));
    B.add(cylGeo(0.36, 0.38, 0.14, 10), M.stoneLight, mat4(x, 0.87, -19.5));
    W.circles.push({ x, z: -19.5, r: 0.4, y: 0.8 });
    if (h > 2.5) B.add(boxGeo(0.7, 0.2, 0.7, 1), M.snow, mat4(x, 0.8 + h + 0.05, -19.5));
  }
  const fallen = W.roof({ cx: 4, cy: 0.9, cz: -15.5, w: 7, d: 3, h: 1.2, overhang: 1, lift: 0.4, ridge: true, rot: 0.25 });
  fallen.group.rotation.z = 0.18;
  W.blockRects.push({ x0: -0.5, x1: 8.6, z0: -18.2, z1: -13.2 });
  // 석탑 (5층)
  stonePagoda(W, -5, 0.8, -13.5);
  W.circles.push({ x: -5, z: -13.5, r: 1.3, y: 0.8 });

  // 종각 (범종): 웨이브 시작 장치
  const pav = new THREE.Group();
  pav.position.set(-11.5, 0, 4);
  for (const [px, pz] of [[-1.3, -1.3], [1.3, -1.3], [-1.3, 1.3], [1.3, 1.3]]) {
    pav.add(at(new THREE.Mesh(cylGeo(0.14, 0.16, 3.2, 8), M.wood), px, 1.6, pz));
  }
  pav.add(at(new THREE.Mesh(boxGeo(3, 0.2, 3, 2), M.dancheong), 0, 3.25, 0));
  const body = new THREE.Group();
  body.position.set(0, 3.1, 0);
  const bellGeo = latheGeo([[0.05, 0], [0.42, -0.08], [0.55, -0.5], [0.62, -1.3], [0.7, -1.5], [0.0, -1.5]], 14);
  body.add(new THREE.Mesh(bellGeo, M.bronze));
  const band = new THREE.Mesh(cylGeo(0.6, 0.6, 0.06, 14), M.gold);
  band.position.y = -0.7;
  body.add(band);
  pav.add(body);
  const roofG = new THREE.Group();
  pav.add(roofG);
  trigger(W, pav, body, -11.5, 4, '범종', 'bigbell', 4.6, 1.9);
  const pr = W.roof({ cx: -11.5, cy: 3.35, cz: 4, w: 3, d: 3, h: 1.1, overhang: 0.9, lift: 0.5, ridge: true });
  pr.group.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  // 지붕에 쌓인 눈
  B.add(boxGeo(2.4, 0.12, 2.4, 2), M.snow, mat4(-11.5, 4.5, 4));

  // 무너진 담장
  // 절 바깥 담장과 일주문 (입구, 대숲 쪽). 문에는 금줄이 쳐져 있어 도사가 걷어 줘야 들어갈 수 있음
  for (const s of [-1, 1]) {
    for (let x = 2.9; x < 19.6; x += 2.2) {
      const xx = s * (x + 1.1), h = 1.25 + R() * 0.45;
      B.add(boxGeo(2.2, h, 0.7, 2), M.blockDark, mat4(xx, h / 2, 20.5));
      B.add(boxGeo(2.3, 0.14, 0.85, 2), M.stoneLight, mat4(xx, h + 0.05, 20.5));
      B.add(boxGeo(2.2, 0.12, 0.8, 2), M.snow, mat4(xx, h + 0.18, 20.5));
    }
    W.blockRects.push({ x0: s > 0 ? 2.75 : -19.8, x1: s > 0 ? 19.8 : -2.75, z0: 20.1, z1: 20.9 });
    // 일주문 기둥
    B.add(cylGeo(0.3, 0.32, 3.6, 10), M.wood, mat4(s * 2.4, 1.8, 20.5));
    B.add(cylGeo(0.5, 0.55, 0.3, 10), M.stoneLight, mat4(s * 2.4, 0.15, 20.5));
    W.circles.push({ x: s * 2.4, z: 20.5, r: 0.45, y: 0 });
  }
  B.add(boxGeo(5.6, 0.45, 0.7, 4), M.dancheong, mat4(0, 3.55, 20.5));
  B.add(boxGeo(1.6, 0.7, 0.1, 1), M.darkWood, mat4(0, 3.1, 20.88));
  const ir = W.roof({ cx: 0, cy: 3.8, cz: 20.5, w: 6.2, d: 1.6, h: 1.0, overhang: 0.9, lift: 0.45, ridge: true });
  ir.group.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  B.add(boxGeo(5.4, 0.12, 1.4, 2), M.snow, mat4(0, 4.75, 20.5));
  // 금줄: 새끼줄에 흰 종이 술
  const rope = new THREE.Group();
  const straw = toon({ color: C('#c8a868') });
  rope.add(at(new THREE.Mesh(boxGeo(4.4, 0.07, 0.07, 1), straw), 0, 1.9, 20.5));
  for (let i = 0; i < 9; i++) {
    const paper = new THREE.Mesh(new THREE.PlaneGeometry(0.14, 0.32), M.cloth[3]);
    paper.position.set(-1.9 + i * 0.48, 1.7, 20.55);
    paper.rotation.z = (i % 2 ? 0.2 : -0.2);
    animateMesh(paper, ANIM.flag);
    rope.add(paper);
  }
  W.root.add(rope);
  W.addGate('temple', { x0: -2.2, x1: 2.2, z0: 20.2, z1: 20.8 }, (k) => {
    // 금줄이 툭 끊어져 떨어지며 사라짐
    rope.visible = k < 0.99;
    rope.position.y = -k * 1.6;
    rope.rotation.x = k * 0.6;
  });

  for (const [x0, x1, z] of [[-19, -12, -24], [6, 19, -24]]) {
    for (let x = x0; x < x1; x += 2.2) {
      if (R() < 0.25) continue;
      const h = 0.6 + R() * 1.2;
      B.add(boxGeo(2.1, h, 0.6, 2), M.blockDark, mat4(x + 1.1, h / 2, z));
      B.add(boxGeo(2.1, 0.1, 0.7, 2), M.snow, mat4(x + 1.1, h + 0.04, z));
      W.blockRects.push({ x0: x, x1: x + 2.2, z0: z - 0.35, z1: z + 0.35 });
    }
  }
  // 눈 덮인 소나무
  for (const [x, z, s, sd] of [[-16, -6, 1.2, 1], [15.5, -9, 1.3, 2], [16, 8, 1.1, 3], [-16, 12, 1.0, 4], [13, -20, 1.0, 5], [-15, -20, 1.2, 6], [-22, 2, 1.3, 7], [22, -2, 1.2, 8], [-8, 22, 1.1, 9], [9, 23, 1.2, 10]]) {
    W.pine(x, 0, z, s, sd, Math.abs(x) < 19.5, true);
  }
  // 얼음 결정 (밤에 빛남)
  for (let i = 0; i < 14; i++) {
    const a = R() * Math.PI * 2, d = 9.5 + R() * 6;
    const x = Math.cos(a) * d, z = 3 + Math.sin(a) * d * 0.9;
    if (z < -6 || Math.abs(x) > 18) continue;
    for (let k = 0; k < 3; k++) {
      const h = 0.6 + R() * 1.1;
      B.add(new THREE.ConeGeometry(0.16 + R() * 0.1, h, 5), M.ice, mat4(x + (R() - 0.5) * 0.6, h / 2, z + (R() - 0.5) * 0.6, R() * 6, (R() - 0.5) * 0.4, (R() - 0.5) * 0.4));
    }
    W.circles.push({ x, z, r: 0.5, y: 0 });
  }
  // 석등과 돌탑
  for (const [x, z] of [[-6.5, 9], [6.5, 9], [6.5, -3], [-6, -3.5]]) W.stoneLantern(x, 0, z);
  W.stoneLantern(9.5, 0.8, -9); W.stoneLantern(-9.5, 0.8, -9);
  cairn(W, 12, 6, 1, 11); cairn(W, -14, -10, 0.9, 12);

  B.build(W.root);
  for (const m of W.foliage.build(W.root)) animateMesh(m, ANIM.foliage);
}

function stonePagoda(W, x, y, z) {
  const M = W.M, B = W.batch;
  B.add(boxGeo(2.2, 0.5, 2.2, 2), M.stoneGrey, mat4(x, y + 0.25, z));
  let yy = y + 0.5;
  for (let i = 0; i < 5; i++) {
    const w = 1.3 - i * 0.16;
    B.add(boxGeo(w * 0.7, 0.55, w * 0.7, 2), M.stoneLight, mat4(x, yy + 0.27, z));
    yy += 0.55;
    B.add(boxGeo(w + 0.3, 0.14, w + 0.3, 2), M.stoneGrey, mat4(x, yy + 0.07, z));
    B.add(boxGeo(w + 0.2, 0.06, w + 0.2, 2), M.snow, mat4(x, yy + 0.17, z));
    yy += 0.2;
  }
  B.add(cylGeo(0.05, 0.08, 0.7, 6), M.bronze, mat4(x, yy + 0.35, z));
}
