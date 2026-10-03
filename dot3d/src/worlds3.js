// 새 지역: 물안개 늪 (폐사찰 뒷문 너머)
//  기믹: 얕은 물웅덩이는 걸음이 느려짐(물귀신은 오히려 빨라짐). 나무 다리 위는 괜찮음
import * as THREE from 'three';
import { toon, animateMesh, ANIM } from './materials.js';
import { boxGeo, cylGeo, Batcher, latheGeo } from './geom.js';
import * as T from './textures.js';
import { mulberry32 } from './util.js';
import { mat4, blendStrip } from './world.js';
import { extraMaterials, ground, pathStrip, disc, trigger, cairn } from './worlds2.js';
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
  M.water = new THREE.MeshStandardMaterial({ color: C('#2e4a44'), roughness: 0.12, metalness: 0.1, transparent: true, opacity: 0.86, emissive: C('#000000') });
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
