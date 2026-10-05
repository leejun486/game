// 새 지역: 물안개 늪 (폐사찰 뒷문 너머)
//  기믹: 얕은 물웅덩이는 걸음이 느려짐(물귀신은 오히려 빨라짐). 나무 다리 위는 괜찮음
import * as THREE from 'three';
import { toon, animateMesh, ANIM } from './materials.js';
import { boxGeo, cylGeo, Batcher, latheGeo } from './geom.js';
import * as T from './textures.js';
import { mulberry32 } from './util.js';
import { mat4, blendStrip } from './world.js';
import { extraMaterials, ground, pathStrip, disc, trigger, cairn, PAVED } from './worlds2.js';
import { pondMaterial } from './water.js';
import { GFX } from './gfx.js';
import * as HD from './hdtex.js';

const C = (h) => new THREE.Color(h);
const at = (m, x, y, z) => { m.position.set(x, y, z); return m; };

function swampMaterials(W) {
  const M = W.M;
  M.marsh = toon({ map: T.forestGrassTex(), color: C('#8a9a78') });
  M.mud = toon({ map: T.forestPathTex(), color: C('#7a6a58') });
  if (GFX.hd) {
    M.marsh = toon({ ...HD.hdGrass([62, 84, 54]), roughness: 1 });
    M.mud = toon({ ...HD.hdDirt([92, 80, 62]), roughness: 0.95 });
  }
  // 늪 웅덩이: 물결·반사·물가 거품이 있는 고인 물 (water.js)
  M.water = pondMaterial(W, { deep: '#1a3430', shallow: '#3a6450', sky: '#9cc4b4', foam: '#cfe2d4' });
  M.waterEdge = toon({ color: C('#4a5a3e') });
  M.plank = toon({ ...(GFX.hd ? HD.hdWood([112, 84, 58]) : { map: T.woodTex() }), color: GFX.hd ? undefined : C('#a08870'), roughness: 0.9 });
  M.reed = toon({ color: C('#8a9a5a') });
  M.reed2 = toon({ color: C('#6a7a46') });
  M.lily = toon({ color: C('#3f7a44'), side: THREE.DoubleSide });
  M.lotus = toon({ color: C('#f2a6c0'), emissive: C('#000000') });
  M.deadwood = toon({ color: C('#4a4038') });
  M.moss = toon({ color: C('#5a6a3a') });
  M.gongMetal = toon({ color: C('#c89a4a'), metalness: GFX.hd ? 0.7 : 0, roughness: 0.35 });
  W.glowMats.push({ mat: M.lotus, color: new THREE.Color('#ff7ab0'), k: 0.35 });
}

// 물웅덩이: 겉보기는 둥근 수면, 판정은 원 (다리 위는 제외)
function pool(W, x, z, r, sx = 1, sz = 1) {
  const M = W.M;
  const geo = new THREE.CircleGeometry(1, 40);
  const edge = new THREE.Mesh(geo, M.waterEdge);
  edge.rotation.x = -Math.PI / 2;
  edge.position.set(x, 0.008, z);
  edge.scale.set(r * sx + 0.45, r * sz + 0.45, 1);
  edge.receiveShadow = true;
  W.root.add(edge);
  const w = new THREE.Mesh(geo, M.water);
  w.rotation.x = -Math.PI / 2;
  w.position.set(x, 0.03, z);
  w.scale.set(r * sx, r * sz, 1);
  w.receiveShadow = true;
  w.userData.noOutline = true;
  W.root.add(w);
  W.wet.push({ x, z, rx: r * sx, rz: r * sz });
  // 수련잎과 연꽃
  const R = mulberry32(Math.round(x * 13 + z * 7 + 100));
  for (let i = 0; i < Math.round(r * 2.2); i++) {
    const a = R() * Math.PI * 2, d = Math.sqrt(R()) * 0.85;
    const lx = x + Math.cos(a) * d * r * sx, lz = z + Math.sin(a) * d * r * sz;
    const pad = new THREE.Mesh(new THREE.CircleGeometry(0.32 + R() * 0.25, 10, 0.3, Math.PI * 2 - 0.3), M.lily);
    pad.rotation.set(-Math.PI / 2, 0, R() * 6);
    pad.position.set(lx, 0.045, lz);
    pad.userData.noOutline = true;
    W.root.add(pad);
    if (R() < 0.35) {
      for (let k = 0; k < 5; k++) {
        const pet = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.22, 4), M.lotus);
        pet.position.set(lx + Math.cos(k * 1.26) * 0.06, 0.13, lz + Math.sin(k * 1.26) * 0.06);
        pet.rotation.set(Math.sin(k * 1.26) * 0.5, 0, -Math.cos(k * 1.26) * 0.5);
        W.root.add(pet);
      }
    }
  }
}

// 나무 다리 (판자 + 말뚝): 다리 위는 물 판정에서 빠짐
function boardwalk(W, pts, width = 1.8) {
  const M = W.M, B = W.batch;
  for (let i = 0; i < pts.length - 1; i++) {
    const [x0, z0] = pts[i], [x1, z1] = pts[i + 1];
    const len = Math.hypot(x1 - x0, z1 - z0);
    const yaw = Math.atan2(x1 - x0, z1 - z0);
    const n = Math.ceil(len / 0.42);
    for (let k = 0; k < n; k++) {
      const t = (k + 0.5) / n;
      const x = x0 + (x1 - x0) * t, z = z0 + (z1 - z0) * t;
      B.add(boxGeo(width, 0.08, 0.36, 1), M.plank, mat4(x, 0.12 + Math.sin(k * 2.1) * 0.012, z, yaw, Math.sin(k * 1.7) * 0.03, 0));
    }
    for (let k = 0; k <= Math.floor(len / 2); k++) {
      const t = k / Math.max(1, Math.floor(len / 2));
      const x = x0 + (x1 - x0) * t, z = z0 + (z1 - z0) * t;
      for (const s of [-1, 1]) {
        const px = x + Math.cos(yaw) * s * (width / 2 + 0.05), pz = z - Math.sin(yaw) * s * (width / 2 + 0.05);
        B.add(cylGeo(0.07, 0.08, 0.7, 6), M.deadwood, mat4(px, 0.2, pz));
      }
    }
    W.boards.push({ x0, z0, x1, z1, w: width / 2 + 0.25 });
  }
}

// 말라 죽은 고목: 비틀린 줄기와 앙상한 가지
function deadTree(W, x, z, s, seed, collide = true) {
  const M = W.M, B = W.batch;
  const R = mulberry32(seed);
  let px = x, pz = z, py = 0, lean = (R() - 0.5) * 0.4, dir = R() * 6;
  for (let i = 0; i < 4; i++) {
    const h = (1.0 + R() * 0.5) * s, r0 = (0.32 - i * 0.06) * s, r1 = (0.26 - i * 0.06) * s;
    const nx = px + Math.sin(dir) * lean * h, nz = pz + Math.cos(dir) * lean * h;
    const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(nx - px, h, nz - pz).normalize());
    B.add(cylGeo(Math.max(0.05, r1), Math.max(0.07, r0), h, 7), M.deadwood, new THREE.Matrix4().compose(new THREE.Vector3((px + nx) / 2, py + h / 2, (pz + nz) / 2), q, new THREE.Vector3(1, 1, 1)));
    // 곁가지
    if (i > 0) for (let k = 0; k < 2; k++) {
      const a = R() * 6, L = (0.8 + R() * 0.9) * s;
      const q2 = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(Math.cos(a), 0.6 + R() * 0.5, Math.sin(a)).normalize());
      const off = new THREE.Vector3(0, L / 2, 0).applyQuaternion(q2);
      B.add(cylGeo(0.03 * s, 0.07 * s, L, 5), M.deadwood, new THREE.Matrix4().compose(new THREE.Vector3(nx + off.x, py + h * 0.8 + off.y, nz + off.z), q2, new THREE.Vector3(1, 1, 1)));
    }
    px = nx; pz = nz; py += h * 0.95; dir += (R() - 0.5) * 1.6; lean = 0.2 + R() * 0.4;
  }
  // 이끼가 늘어진 뿌리 둔덕
  B.add(new THREE.SphereGeometry(0.6 * s, 8, 5), M.moss, mat4(x, 0, z, 0, 0, 0, [1.2, 0.35, 1.2]));
  if (collide) W.circles.push({ x, z, r: 0.45 * s, y: 0 });
}

// 갈대 덤불 (인스턴싱)
function reeds(W, list) {
  const geo = new THREE.ConeGeometry(0.035, 1, 3);
  geo.translate(0, 0.5, 0);
  const R = mulberry32(919);
  const items = [];
  for (const [x, z, r, n] of list) for (let i = 0; i < n; i++) {
    const a = R() * 6.28, d = Math.sqrt(R()) * r;
    items.push([x + Math.cos(a) * d, z + Math.sin(a) * d, 0.9 + R() * 1.1]);
  }
  const inst = new THREE.InstancedMesh(geo, W.M.reed, items.length);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
  items.forEach(([x, z, h], i) => {
    e.set((R() - 0.5) * 0.35, R() * 6, (R() - 0.5) * 0.35);
    m4.compose(new THREE.Vector3(x, 0, z), q.setFromEuler(e), new THREE.Vector3(1, h, 1));
    inst.setMatrixAt(i, m4);
    // 갈대 이삭
    if (i % 3 === 0) W.foliage.add(new THREE.SphereGeometry(1, 5, 4), W.M.reed2, new THREE.Matrix4().compose(new THREE.Vector3(x, h * 0.98, z), new THREE.Quaternion(), new THREE.Vector3(0.05, 0.16, 0.05)));
  });
  inst.castShadow = true;
  animateMesh(inst, ANIM.foliage);
  W.root.add(inst);
}

export function buildSwamp(W) {
  extraMaterials(W);
  swampMaterials(W);
  const M = W.M, B = (W.batch = new Batcher());
  W.foliage = new Batcher();
  ground(W, M.marsh);
  // 북쪽 끝은 폐사찰의 눈이 녹아 번짐
  blendStrip(W, M.snow, -60, 60, -26.1, -20.5, 0.004);
  // 북쪽 경계: 폐사찰 뒷문 앞(x -14)만 트임
  W.blockRects.push({ x0: -20, x1: -17.2, z0: -26.6, z1: -25.4 }, { x0: -10.8, x1: 20, z0: -26.6, z1: -25.4 });
  // 진흙길: 폐사찰 뒷문(북서쪽) → 늪 가운데 → 제단(남쪽) → 남동쪽 협곡 어귀
  pathStrip(W, M.mud, [[-14, -27], [-13, -19], [-8, -12]], 3.0);
  pathStrip(W, M.mud, [[4, -1], [5, 6]], 3.0);
  pathStrip(W, M.mud, [[-2, 18], [6, 19], [12, 23]], 3.0);
  disc(W, M.mud, -11, -18, 4.2);
  disc(W, M.mud, 1, -4, 4.5);

  // 물웅덩이 (나무 다리로 건넘)
  pool(W, -4, -9, 4.6, 1.3, 0.8);
  pool(W, 8.5, -12, 5, 1.0, 0.9);
  pool(W, -9.5, 4, 5.4, 0.9, 1.1);
  pool(W, 9, 7, 4.6, 1.1, 1.0);
  pool(W, -1, 12.5, 3.6, 1.5, 0.7);
  pool(W, -15, -6, 2.6, 1.0, 1.0);
  pool(W, 15, -3, 2.8, 1.0, 1.2);
  boardwalk(W, [[-8.5, -12], [-4, -9], [1, -5.5]]);
  boardwalk(W, [[4.6, 6.5], [1.2, 9.5], [-1, 12.5], [-1.5, 16.5]]);

  // 용왕 제단: 물가 돌단 위에 큰 징 (이무기를 깨우는 장치)
  // 높이 0.3: 계단 없이 올라설 수 있고 길찾기도 통과
  W.terrace(-4.5, 3.5, 16.5, 21.5, 0.3);
  B.add(boxGeo(5, 0.15, 0.6, 1), M.stoneGrey, mat4(-0.5, 0.075, 16.2));
  for (const [x, z] of [[-4.2, 16.8], [3.2, 16.8], [-4.2, 21.2], [3.2, 21.2]]) {
    B.add(boxGeo(0.4, 0.9, 0.4, 1), M.stoneGrey, mat4(x, 0.75, z));
    W.circles.push({ x, z, r: 0.35, y: 0.3 });
  }
  const gong = new THREE.Group();
  gong.position.set(-0.5, 0.3, 19.5);
  for (const s of [-1, 1]) gong.add(at(new THREE.Mesh(cylGeo(0.12, 0.14, 2.8, 8), M.wood), s * 1.2, 1.4, 0));
  gong.add(at(new THREE.Mesh(boxGeo(2.8, 0.16, 0.2, 1), M.dancheong), 0, 2.8, 0));
  for (const s of [-1, 1]) gong.add(at(new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.4, 6), M.gold), s * 1.45, 2.9, 0)).rotation.z = s * 1.3;
  const body = new THREE.Group();
  body.position.set(0, 1.55, 0);
  const disk = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.85, 0.08, 28), M.gongMetal);
  disk.rotation.x = Math.PI / 2;
  const boss = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 8), M.gongMetal);
  boss.scale.z = 0.5;
  boss.position.z = 0.06;
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.85, 0.05, 6, 28), M.bronzeDark);
  for (const s of [-1, 1]) body.add(at(new THREE.Mesh(boxGeo(0.03, 1.1, 0.03, 1), M.cloth[0]), s * 0.5, 0.75, 0));
  body.add(disk, boss, rim);
  gong.add(body);
  trigger(W, gong, body, -0.5, 19.5, '징', 'gong', 3.6, 1.3);
  // 제단 양옆 용 비석
  for (const s of [-1, 1]) {
    B.add(boxGeo(0.9, 0.35, 0.6, 1), M.stoneGrey, mat4(-0.5 + s * 3, 0.47, 21));
    B.add(boxGeo(0.7, 1.5, 0.22, 1), M.stoneLight, mat4(-0.5 + s * 3, 1.4, 21));
    B.add(boxGeo(0.86, 0.3, 0.32, 1), M.stoneGrey, mat4(-0.5 + s * 3, 2.25, 21));
  }

  // 연꽃 석등 셋 (퀘스트로 불을 밝힘): 작은 섬 위
  for (const [x, z] of [[13.5, -12.5], [-14.5, 10.5], [13.5, 13.5]]) {
    disc(W, M.mud, x, z, 1.6);
    W.stoneLantern(x, 0, z);
  }

  // 사공 영감의 나룻배 (늪 어귀)
  const boat = new THREE.Group();
  boat.position.set(-15, 0.05, -6);
  boat.rotation.y = 0.6;
  const hull = new THREE.Mesh(latheGeo([[0.0, 0], [0.5, 0.05], [0.62, 0.3], [0.6, 0.38]], 10), M.plank);
  hull.scale.set(1, 1, 2.6);
  boat.add(hull);
  boat.add(at(new THREE.Mesh(boxGeo(0.05, 0.05, 2.6, 1), M.deadwood), 0.5, 0.75, 0.6)).rotation.x = 0.5;
  W.root.add(boat);
  boat.traverse((o) => { if (o.isMesh) o.castShadow = true; });

  // 고목과 갈대
  for (const [x, z, s, sd, c] of [[-6, -18, 1.1, 1, 1], [7, -20, 1.3, 2, 1], [16, -16, 1.0, 3, 1], [-17, -14, 1.2, 4, 1], [5, 2, 0.8, 5, 1], [-5, 7, 1.1, 6, 1], [16, 3, 1.2, 7, 1], [-16, 16, 1.3, 8, 1], [8, 17, 1.0, 9, 1], [-9, 20, 0.9, 10, 1], [17, 19, 1.1, 11, 1]]) deadTree(W, x, z, s, sd, c);
  reeds(W, [[-4, -14, 2.2, 26], [12, -8, 1.8, 18], [-13, 0, 2, 22], [3, 9, 1.4, 12], [12, 2, 1.6, 16], [-5, 16, 1.6, 14], [5, 14, 1.4, 12], [-17, -22, 2, 18], [17, -22, 2, 18]]);
  for (const [x, z] of [[-4, -14], [12, -8], [-13, 0], [12, 2], [-5, 16]]) W.circles.push({ x, z, r: 1.2, y: 0 });
  cairn(W, -10.5, -15, 1, 21); cairn(W, 6.5, -4.5, 0.9, 22);

  // 남쪽 경계와 협곡으로 가는 길: 무너진 바위가 막고 있다가 퀘스트로 치워짐
  W.blockRects.push({ x0: -20, x1: 9.4, z0: 21.9, z1: 23.1 }, { x0: 14.6, x1: 20, z0: 21.9, z1: 23.1 });
  const rocks = new THREE.Group();
  const Rr = mulberry32(55);
  for (let i = 0; i < 9; i++) {
    const r = new THREE.Mesh(new THREE.IcosahedronGeometry(0.5 + Rr() * 0.5, 0), i % 2 ? M.rock : M.rockDark);
    r.position.set(9.8 + Rr() * 4.4, 0.3 + Rr() * 0.6, 21.8 + Rr() * 1.2);
    r.rotation.set(Rr() * 6, Rr() * 6, 0);
    r.castShadow = true;
    rocks.add(r);
  }
  W.root.add(rocks);
  W.addGate('canyon', { x0: 9.4, x1: 14.6, z0: 21.6, z1: 23.2 }, (k) => {
    rocks.position.y = -k * 1.8;
    rocks.visible = k < 0.99;
  });

  // 경계: 빽빽한 고목·갈대 (북쪽 입구와 남동쪽 출구는 비움)
  const Rb = mulberry32(77);
  const border = [];
  for (let i = 0; i < 70; i++) {
    const side = Math.floor(Rb() * 4);
    const x = side < 2 ? (side ? 1 : -1) * (20.5 + Rb() * 4) : (Rb() - 0.5) * 48;
    const z = side >= 2 ? (side === 2 ? -27.5 - Rb() * 2 : 22.5 + Rb() * 2) : (Rb() - 0.5) * 52;
    if (side === 2 && Math.abs(x + 14) < 5) continue;
    if (side === 3 && Math.abs(x - 12) < 5) continue;
    if (Rb() < 0.4) deadTree(W, x, z, 0.8 + Rb() * 0.6, 200 + i, false);
    else border.push([x, z, 1.4, 10]);
  }
  reeds(W, border);

  B.build(W.root);
  for (const m of W.foliage.build(W.root)) animateMesh(m, ANIM.foliage);
}

// ======================= 불가사리 협곡 =======================
//  기믹: 바닥의 용암 분화구가 때때로 터짐(붉게 달아오르면 피할 것). 용암 강은 돌다리로만 건넘
function canyonMaterials(W) {
  const M = W.M;
  M.ash = toon({ map: T.forestPathTex(), color: C('#5a4a44') });
  M.basalt = toon({ map: T.stoneBlockTex([96, 88, 86]) });
  M.basaltDark = toon({ color: C('#3a3432') });
  if (GFX.hd) {
    M.ash = toon({ ...HD.hdDirt([84, 70, 62]), roughness: 1 });
    M.basalt = toon({ ...HD.hdBlock([92, 84, 82]), roughness: 0.95 });
  }
  PAVED.add(M.basalt);
  M.lava = toon({ color: C('#ff7a1a'), emissive: C('#ff4a00'), emissiveIntensity: 1.4 });
  M.lavaCrust = toon({ color: C('#2a1e1a'), emissive: C('#4a1200') });
  M.ember = toon({ color: C('#ffb060'), emissive: C('#ff6a00'), emissiveIntensity: 2 });
  M.iron = toon({ color: C('#4a4a50'), metalness: GFX.hd ? 0.8 : 0, roughness: 0.4 });
  M.rust = toon({ color: C('#8a4a2a') });
  W.lavaMats = W.lavaMats || [];
  W.lavaMats.push({ mat: M.lava, base: 1.4 }, { mat: M.ember, base: 2 });
}

// 용암 흐름: 이어진 점들을 따라 넓적한 띠. 판정은 막힌 사각형들
function lavaRiver(W, pts, width, gaps = []) {
  const M = W.M;
  for (let i = 0; i < pts.length - 1; i++) {
    const [x0, z0] = pts[i], [x1, z1] = pts[i + 1];
    const len = Math.hypot(x1 - x0, z1 - z0) + width * 0.5;
    const yaw = Math.atan2(x1 - x0, z1 - z0);
    const crust = new THREE.Mesh(new THREE.PlaneGeometry(width + 1.0, len), M.lavaCrust);
    crust.rotation.set(-Math.PI / 2, 0, yaw);
    crust.position.set((x0 + x1) / 2, 0.015, (z0 + z1) / 2);
    W.root.add(crust);
    const lv = new THREE.Mesh(new THREE.PlaneGeometry(width, len), M.lava);
    lv.rotation.set(-Math.PI / 2, 0, yaw);
    lv.position.set((x0 + x1) / 2, 0.03, (z0 + z1) / 2);
    lv.userData.noOutline = true;
    W.root.add(lv);
    // 판정: 띠를 0.8 간격 원으로 근사 (다리 자리는 비움)
    const n = Math.ceil(len / 0.8);
    for (let k = 0; k <= n; k++) {
      const x = x0 + (x1 - x0) * (k / n), z = z0 + (z1 - z0) * (k / n);
      if (gaps.some(([gx, gz, gr]) => Math.hypot(x - gx, z - gz) < gr)) continue;
      W.circles.push({ x, z, r: width * 0.5 + 0.1, y: 0 });
    }
  }
}

function lavaPool(W, x, z, r) {
  const M = W.M;
  const c = new THREE.Mesh(new THREE.CircleGeometry(r + 0.6, 28), M.lavaCrust);
  c.rotation.x = -Math.PI / 2; c.position.set(x, 0.015, z);
  W.root.add(c);
  const l = new THREE.Mesh(new THREE.CircleGeometry(r, 28), M.lava);
  l.rotation.x = -Math.PI / 2; l.position.set(x, 0.03, z);
  l.userData.noOutline = true;
  W.root.add(l);
  W.circles.push({ x, z, r: r + 0.1, y: 0 });
}

// 현무암 바위·절벽
function crag(W, x, z, s, seed, collide = true) {
  const M = W.M, B = W.batch;
  const R = mulberry32(seed);
  for (let i = 0; i < 4; i++) {
    const h = (1.6 + R() * 2.6) * s, w = (0.8 + R() * 0.9) * s;
    B.add(new THREE.CylinderGeometry(w * 0.7, w, h, 6), i % 2 ? M.basalt : M.basaltDark, mat4(x + (R() - 0.5) * s * 1.4, h / 2, z + (R() - 0.5) * s * 1.4, R() * 6, (R() - 0.5) * 0.15, (R() - 0.5) * 0.15));
  }
  if (collide) W.circles.push({ x, z, r: 1.1 * s, y: 0 });
}

// 땅에 꽂힌 부러진 칼·창 (불가사리가 먹다 남긴 쇠붙이)
function scrap(W, x, z, seed) {
  const M = W.M, B = W.batch;
  const R = mulberry32(seed);
  for (let i = 0; i < 5; i++) {
    const a = R() * 6, d = R() * 0.9;
    const h = 0.5 + R() * 0.7;
    B.add(boxGeo(0.06, h, 0.02, 1), R() < 0.5 ? M.iron : M.rust, mat4(x + Math.cos(a) * d, h * 0.4, z + Math.sin(a) * d, R() * 6, (R() - 0.5) * 0.7, (R() - 0.5) * 0.7));
  }
  B.add(new THREE.IcosahedronGeometry(0.4, 0), M.rust, mat4(x, 0.1, z, R() * 6, 0, 0, [1, 0.4, 1]));
}

export function buildCanyon(W) {
  extraMaterials(W);
  canyonMaterials(W);
  const M = W.M, B = (W.batch = new Batcher());
  W.foliage = new Batcher();
  W.vents = W.vents || [];
  W.portals = W.portals || [];
  ground(W, M.ash);
  if (M.marsh) blendStrip(W, M.marsh, -60, 60, -26.1, -20.5, 0.004);
  pathStrip(W, M.basalt, [[12, -27], [10, -16], [3, -9], [0, -4], [0, 4], [-1, 10]], 2.6, 0.02);
  disc(W, M.basalt, 0, 15, 6);

  // 용암 강: 동서로 가로지름, 가운데 돌다리로만 건넘
  lavaRiver(W, [[-22, -2], [-12, -5], [-4, -3.5], [4, -4.5], [12, -2.5], [22, -5]], 2.6, [[0, -4, 2.2]]);
  // 돌다리
  B.add(boxGeo(3.2, 0.25, 4.4, 2), M.basalt, mat4(0, 0.12, -4));
  for (const s of [-1, 1]) {
    B.add(boxGeo(0.3, 0.55, 4.4, 1), M.basaltDark, mat4(s * 1.55, 0.4, -4));
    W.blockRects.push({ x0: s * 1.55 - 0.15, x1: s * 1.55 + 0.15, z0: -6.2, z1: -1.8 });
  }
  lavaPool(W, -12, 10, 3.6);
  lavaPool(W, 14, 9, 2.6);
  lavaPool(W, -14, -15, 2.2);

  // 분화구 (때때로 터짐)
  for (const [x, z] of [[6, -15], [-5, -12], [8, 4], [-5, 5], [4, 10], [-8, -20], [15, -11]]) {
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.75, 0.22, 6, 14), M.basaltDark);
    rim.rotation.x = -Math.PI / 2; rim.position.set(x, 0.08, z);
    W.root.add(rim);
    const glow = toon({ color: C('#3a1408'), emissive: C('#ff4a00'), emissiveIntensity: 0.4 });
    const core = new THREE.Mesh(new THREE.CircleGeometry(0.6, 14), glow);
    core.rotation.x = -Math.PI / 2; core.position.set(x, 0.05, z);
    core.userData.noOutline = true;
    W.root.add(core);
    W.vents.push({ x, z, mat: glow, local: true });
  }

  // 대장간 터: 돌가마, 풀무(웨이브 장치), 모루, 쇠붙이 더미
  B.add(new THREE.CylinderGeometry(2.0, 2.5, 3.2, 12, 1, true), M.basalt, mat4(-3.5, 1.6, 17));
  B.add(new THREE.CylinderGeometry(1.2, 2.0, 1.4, 12), M.basaltDark, mat4(-3.5, 3.9, 17));
  B.add(new THREE.CylinderGeometry(0.5, 0.8, 1.6, 8), M.basaltDark, mat4(-3.5, 5.2, 17));
  const mouth = new THREE.Mesh(new THREE.CircleGeometry(0.85, 12, 0, Math.PI), M.ember);
  mouth.position.set(-3.5, 0.6, 14.45);
  W.root.add(mouth);
  W.circles.push({ x: -3.5, z: 17, r: 2.4, y: 0 });
  const bel = new THREE.Group();
  bel.position.set(2.2, 0, 15);
  bel.add(at(new THREE.Mesh(boxGeo(1.6, 0.7, 1.0, 1), M.darkWood), 0, 0.55, 0));
  const lid = new THREE.Group();
  lid.position.set(0, 0.95, 0);
  lid.add(at(new THREE.Mesh(boxGeo(1.7, 0.12, 1.1, 1), M.wood), 0, 0, 0));
  lid.add(at(new THREE.Mesh(boxGeo(0.12, 0.9, 0.12, 1), M.wood), 0.7, 0.45, 0));
  lid.add(at(new THREE.Mesh(boxGeo(0.12, 0.12, 1.3, 1), M.wood), 0.7, 0.9, 0));
  bel.add(lid);
  bel.add(at(new THREE.Mesh(cylGeo(0.1, 0.12, 2.4, 6), M.iron), -1.6, 0.35, 0)).rotation.z = Math.PI / 2;
  trigger(W, bel, lid, 2.2, 15, '풀무', 'fire', 2.8, 1.0);
  // 모루
  B.add(boxGeo(0.5, 0.6, 0.5, 1), M.basaltDark, mat4(5.5, 0.3, 17.5));
  B.add(boxGeo(1.1, 0.3, 0.5, 1), M.iron, mat4(5.5, 0.75, 17.5));
  B.add(new THREE.ConeGeometry(0.25, 0.5, 4), M.iron, mat4(6.25, 0.75, 17.5, 0, 0, Math.PI / 2));
  W.circles.push({ x: 5.5, z: 17.5, r: 0.6, y: 0 });
  for (const [x, z, sd] of [[7, 13, 1], [-7.5, 14, 2], [9, -10, 3], [-9, -9, 4], [2, -18, 5], [-2, 7, 6], [11, 18, 7]]) scrap(W, x, z, 30 + sd);
  // 쇠사슬 기둥 (불가사리를 묶어 두었던)
  for (const [x, z] of [[-7, 19], [7, 20]]) {
    B.add(cylGeo(0.35, 0.45, 2.6, 8), M.basaltDark, mat4(x, 1.3, z));
    for (let k = 0; k < 6; k++) B.add(new THREE.TorusGeometry(0.16, 0.04, 4, 8), M.iron, mat4(x + (x < 0 ? 1 : -1) * (0.4 + k * 0.28), 1.7 - k * 0.22, z - 0.1, 0, k % 2 ? Math.PI / 2 : 0, 0));
    W.circles.push({ x, z, r: 0.5, y: 0 });
  }

  // 저승 문: 불가사리를 물리치면 열리는 시련탑 입구
  B.add(boxGeo(3.2, 0.3, 2.2, 2), M.basaltDark, mat4(-9.3, 0.15, 18));
  const gate = portalMesh(W, -9.3, 18, 1.3, 0.3);
  W.portals.push({ x: -9.3, z: 16.8, kind: 'enter', label: '저승 문 (시련탑)', promptY: 3.4, mesh: gate });
  W.circles.push({ x: -10.7, z: 18, r: 0.35, y: 0 }, { x: -7.9, z: 18, r: 0.35, y: 0 });

  // 협곡 벽 (가장자리 바위 절벽)
  const Rb = mulberry32(99);
  for (let z = -26; z <= 23; z += 2.6) {
    for (const s of [-1, 1]) crag(W, s * (18.5 + Rb() * 2.5), z, 1.4 + Rb() * 0.6, 400 + Math.round(z * 3) + s, false);
  }
  for (let x = -18; x <= 18; x += 2.8) {
    if (Math.abs(x - 12) > 3.2) crag(W, x, -27 - Rb(), 1.2 + Rb() * 0.5, 500 + Math.round(x * 3), false);
    if (Math.abs(x - 15) > 3.2) crag(W, x, 23.5 + Rb(), 1.3 + Rb() * 0.5, 600 + Math.round(x * 3), false);
  }
  // 남쪽 경계와 단풍 산성으로 가는 산길: 쓰러진 통나무 목책이 막고 있다가 퀘스트로 치워짐
  W.blockRects.push({ x0: -20, x1: 12.8, z0: 22.2, z1: 23.4 }, { x0: 17.2, x1: 20, z0: 22.2, z1: 23.4 });
  const logs = new THREE.Group();
  for (let i = 0; i < 5; i++) {
    const lg = new THREE.Mesh(cylGeo(0.18, 0.2, 4.8, 7), M.darkWood || M.basaltDark);
    lg.rotation.z = Math.PI / 2;
    lg.rotation.y = (i - 2) * 0.08;
    lg.position.set(15, 0.2 + (i % 3) * 0.36, 22.6 + (i % 2) * 0.35);
    lg.castShadow = true;
    logs.add(lg);
  }
  for (const s of [-1, 1]) { const st = new THREE.Mesh(cylGeo(0.12, 0.14, 1.8, 6), M.darkWood || M.basaltDark); st.position.set(15 + s * 2.1, 0.9, 22.8); logs.add(st); }
  W.root.add(logs);
  W.addGate('fortress', { x0: 12.8, x1: 17.2, z0: 22.2, z1: 23.4 }, (k) => {
    logs.position.y = -k * 1.6;
    logs.visible = k < 0.99;
  });
  W.blockRects.push({ x0: -20, x1: 9.2, z0: -26.6, z1: -25.4 }, { x0: 14.8, x1: 20, z0: -26.6, z1: -25.4 });
  // 안쪽 바위
  for (const [x, z, s, sd] of [[-10, -18, 1.1, 1], [14, -18, 1.0, 2], [-15, 2, 1.2, 3], [16, 2, 1.0, 4], [-15, 19.5, 1.1, 5], [12, 12, 0.9, 6], [-2, -16, 0.7, 7]]) crag(W, x, z, s, 700 + sd);
  cairn(W, 9, -20, 1, 31);

  B.build(W.root);
}

// ======================= 저승 시련탑 =======================
// 허공에 뜬 둥근 단. 층마다 몰려오는 적을 모두 물리치면 가운데 다음 층 문이 열림
export function buildTower(W) {
  extraMaterials(W);
  const M = W.M, B = (W.batch = new Batcher());
  W.foliage = new Batcher();
  W.portals = W.portals || [];
  const voidM = new THREE.MeshBasicMaterial({ color: C('#0c0812') });
  const v = new THREE.Mesh(new THREE.PlaneGeometry(200, 120), voidM);
  v.rotation.x = -Math.PI / 2; v.position.y = -2.5;
  W.root.add(v);
  const R0 = 15;
  // 단: 박석 원판 + 둘레 석축 + 바닥 문양
  const top = new THREE.Mesh(new THREE.CylinderGeometry(R0, R0 - 0.8, 2.5, 48), M.blockDark);
  top.position.y = -1.25;
  top.receiveShadow = true;
  W.root.add(top);
  const floor = new THREE.Mesh(new THREE.CircleGeometry(R0, 48), M.slab);
  floor.geometry.attributes.uv.array.forEach((x, i, a) => (a[i] = x * R0));
  floor.rotation.x = -Math.PI / 2; floor.position.y = 0.002;
  floor.receiveShadow = true;
  W.root.add(floor);
  const sig = toon({ color: C('#3a1a4a'), emissive: C('#8a2aff'), emissiveIntensity: 0.6 });
  for (const r of [4.2, 7.5]) {
    const ring = new THREE.Mesh(new THREE.RingGeometry(r - 0.12, r + 0.12, 64), sig);
    ring.rotation.x = -Math.PI / 2; ring.position.y = 0.01;
    ring.userData.noOutline = true;
    W.root.add(ring);
  }
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const spoke = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 3.3), sig);
    spoke.rotation.set(-Math.PI / 2, 0, a);
    spoke.position.set(Math.sin(a) * 5.85, 0.012, Math.cos(a) * 5.85);
    spoke.userData.noOutline = true;
    W.root.add(spoke);
  }
  W.lavaMats = W.lavaMats || [];
  W.lavaMats.push({ mat: sig, base: 0.6 });
  // 둘레 판정: 원 모양 벽
  for (let i = 0; i < 64; i++) {
    const a = (i / 64) * Math.PI * 2;
    W.circles.push({ x: Math.sin(a) * (R0 + 0.6), z: Math.cos(a) * (R0 + 0.6), r: 1.0, y: 0 });
  }
  // 도깨비불 기둥 열 개
  const flame = toon({ color: C('#bfa0ff'), emissive: C('#7a3aff'), emissiveIntensity: 2 });
  W.lavaMats.push({ mat: flame, base: 2 });
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2 + 0.31;
    const x = Math.sin(a) * (R0 - 1.2), z = Math.cos(a) * (R0 - 1.2);
    B.add(cylGeo(0.4, 0.5, 3.4, 8), M.blockDark, mat4(x, 1.7, z));
    B.add(cylGeo(0.62, 0.5, 0.3, 8), M.stoneGrey, mat4(x, 3.5, z));
    const f = new THREE.Mesh(new THREE.IcosahedronGeometry(0.34, 1), flame);
    f.position.set(x, 3.95, z);
    f.userData.noOutline = true;
    animateMesh(f, ANIM.flag);
    W.root.add(f);
    W.lanterns.push(new THREE.Vector3(x, 3.95, z));
    W.circles.push({ x, z, r: 0.55, y: 0 });
  }
  // 남쪽 홍살문 (나가는 문) + 가운데 다음 층 문
  const red = toon({ color: C('#b02a2a') });
  for (const s of [-1, 1]) B.add(cylGeo(0.16, 0.18, 4.4, 8), red, mat4(s * 2.2, 2.2, 12.6));
  B.add(boxGeo(5.2, 0.22, 0.22, 1), red, mat4(0, 4.1, 12.6));
  for (let i = 0; i < 9; i++) B.add(boxGeo(0.06, 1.0, 0.06, 1), red, mat4(-1.8 + i * 0.45, 4.6, 12.6));
  B.add(new THREE.SphereGeometry(0.22, 8, 6), M.gold, mat4(0, 5.25, 12.6));
  W.portals.push({ x: 0, z: 12.4, kind: 'exit', label: '시련탑 나가기', promptY: 3.2 });
  const swirl = portalMesh(W, 0, 0, 1.6);
  swirl.visible = false;
  W.portals.push({ x: 0, z: 0, kind: 'next', label: '다음 층으로', promptY: 3.2, mesh: swirl });
  B.build(W.root);
}

// 소용돌이 문 (세운 고리 + 빛나는 막)
export function portalMesh(W, x, z, r = 1.4, y = 0) {
  const M = W.M;
  const g = new THREE.Group();
  g.position.set(x, y, z);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(r, 0.16, 8, 36), M.blockDark || M.rockDark);
  ring.position.y = r + 0.1;
  g.add(ring);
  const film = new THREE.Mesh(new THREE.CircleGeometry(r - 0.05, 36), new THREE.MeshBasicMaterial({ color: C('#a070ff'), transparent: true, opacity: 0.55, side: THREE.DoubleSide, depthWrite: false }));
  film.position.y = r + 0.1;
  film.userData.noOutline = true;
  film.userData.spin = true;
  g.add(film);
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    g.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.1, 6, 4), new THREE.MeshBasicMaterial({ color: C('#e0c8ff') })), Math.cos(a) * r, r + 0.1 + Math.sin(a) * r, 0));
  }
  W.root.add(g);
  return g;
}
