// 새 지역: 단풍 산성 (협곡 남쪽 산길 너머) · 용궁 (산성 남서쪽 바닷길 아래)
import * as THREE from 'three';
import { toon, animateMesh, ANIM } from './materials.js';
import { boxGeo, cylGeo, Batcher, latheGeo } from './geom.js';
import { mulberry32 } from './util.js';
import { mat4, blendStrip } from './world.js';
import { extraMaterials, ground, pathStrip, disc, trigger, cairn } from './worlds2.js';
import { GFX } from './gfx.js';
import * as HD from './hdtex.js';

const C = (h) => new THREE.Color(h);
const at = (m, x, y, z) => { m.position.set(x, y, z); return m; };

// ======================= 단풍 산성 =======================
//  산적 도깨비가 차지한 옛 산성. 성벽 가운데 문루로 들어가고, 안마당 봉화대에 불을 올리면 백호가 내려옴
function fortressMaterials(W) {
  const M = W.M;
  M.autumnGrass = toon({ color: C('#a8843a') });
  M.autumnPath = toon({ map: W.M.fpath.map || null, color: C('#c8a070') });
  if (GFX.hd) {
    M.autumnGrass = toon({ ...HD.hdGrass([150, 112, 52]), roughness: 1 });
    M.autumnPath = toon({ ...HD.hdDirt([150, 116, 80]), roughness: 1 });
  }
  M.maple = toon({ color: C('#d8402a') });
  M.maple2 = toon({ color: C('#f08a2a') });
  M.maple3 = toon({ color: C('#f4c040') });
  M.fire = toon({ color: C('#ffb060'), emissive: C('#ff5a00'), emissiveIntensity: 1.8 });
  W.lavaMats = W.lavaMats || [];
  W.lavaMats.push({ mat: M.fire, base: 1.8 });
}

// 단풍나무: 소나무 꼴에 붉은·주황 잎
function maple(W, x, z, s, seed, collide = true) {
  const M = W.M;
  const keep = [M.leaf, M.leaf2];
  const R = mulberry32(seed);
  M.leaf = R() < 0.5 ? M.maple : M.maple2;
  M.leaf2 = R() < 0.3 ? M.maple3 : M.maple2;
  W.pine(x, 0, z, s, seed, collide);
  [M.leaf, M.leaf2] = keep;
}

// 성벽 한 토막 (여장 포함). 판정은 막힌 사각형
function wallRun(W, x0, x1, z, h = 2.4, t = 1.2) {
  const M = W.M, B = W.batch;
  const len = x1 - x0, cx = (x0 + x1) / 2;
  B.add(boxGeo(len, h, t, Math.max(1, Math.round(len / 3))), M.block, mat4(cx, h / 2, z));
  B.add(boxGeo(len, 0.12, t + 0.2, 1), M.blockDark, mat4(cx, h + 0.06, z));
  for (let x = x0 + 0.5; x < x1 - 0.3; x += 1.2) B.add(boxGeo(0.7, 0.5, t * 0.5, 1), M.blockDark, mat4(x, h + 0.37, z - t * 0.22));
  W.blockRects.push({ x0, x1, z0: z - t / 2, z1: z + t / 2 });
}

// 봉수대: 돌 굴뚝 위 불그릇. light 퀘스트의 '석등' 역할 (불을 붙이면 연기가 오름)
function beacon(W, x, z) {
  const M = W.M, B = W.batch;
  B.add(cylGeo(0.75, 0.95, 1.6, 8), M.blockDark, mat4(x, 0.8, z));
  B.add(cylGeo(0.55, 0.7, 0.5, 8), M.block, mat4(x, 1.85, z));
  B.add(cylGeo(0.62, 0.42, 0.25, 10), M.bronzeDark, mat4(x, 2.2, z));
  for (let k = 0; k < 5; k++) B.add(boxGeo(0.06, 0.06, 0.6, 1), M.darkWood, mat4(x, 2.36, z, k * 0.63));
  W.lanterns.push(new THREE.Vector3(x, 2.3, z));
  W.circles.push({ x, z, r: 1.0, y: 0 });
}

export function buildFortress(W) {
  extraMaterials(W);
  fortressMaterials(W);
  const M = W.M, B = (W.batch = new Batcher());
  W.foliage = new Batcher();
  ground(W, M.autumnGrass);
  // 북쪽은 협곡의 재 덮인 땅이 번져 들어옴
  if (M.ash) blendStrip(W, M.ash, -60, 60, -26.1, -20.5, 0.004);
  // 산길: 협곡 쪽 동쪽 어귀 → 문루 → 봉화대, 그리고 남서쪽 바닷길
  pathStrip(W, M.autumnPath, [[15, -27], [13, -18], [6, -11], [0, -5], [0, 3], [0, 10], [0, 15]], 3.0);
  pathStrip(W, M.autumnPath, [[0, 10], [-8, 14], [-14, 19], [-15, 25]], 2.4);
  disc(W, M.autumnPath, 0, 12, 6.5);

  // 성벽: 동서로 가로지르고 가운데 문루
  wallRun(W, -20, -2.6, 2);
  wallRun(W, 2.6, 20, 2);
  // 동서 성벽 (안마당 옆)
  for (const s of [-1, 1]) {
    const x = s * 18.6;
    B.add(boxGeo(1.2, 2.4, 20, 6), M.block, mat4(x, 1.2, 12.5));
    W.blockRects.push({ x0: x - 0.6, x1: x + 0.6, z0: 2.6, z1: 22.6 });
  }
  // 문루: 돌 홍예 기둥 둘 + 다락 + 지붕
  for (const s of [-1, 1]) {
    B.add(boxGeo(1.6, 3.6, 2.2, 2), M.block, mat4(s * 3.4, 1.8, 2));
    W.blockRects.push({ x0: s * 3.4 - 0.8, x1: s * 3.4 + 0.8, z0: 0.9, z1: 3.1 });
  }
  B.add(boxGeo(8.4, 0.6, 2.4, 3), M.blockDark, mat4(0, 3.9, 2));
  for (const sx of [-3, -1, 1, 3]) B.add(cylGeo(0.14, 0.16, 1.6, 8), M.red, mat4(sx, 5.0, 2));
  B.add(boxGeo(7.4, 0.3, 2.2, 3), M.dancheong, mat4(0, 5.85, 2));
  W.roof({ cx: 0, cy: 6.0, cz: 2, w: 7.6, d: 2.6, h: 1.6, overhang: 1.2, lift: 0.5, ridge: true });
  // 문짝 (활짝 열린 채로)
  for (const s of [-1, 1]) B.add(boxGeo(0.12, 2.6, 2.0, 1), M.darkWood, mat4(s * 2.45, 1.3, 3.2, s * 0.9));

  // 안마당: 큰 봉화대 (웨이브 장치) + 성곽 모서리의 봉수대 셋 (불 밝히기)
  const fire = new THREE.Group();
  fire.position.set(0, 0, 15.5);
  fire.add(at(new THREE.Mesh(cylGeo(1.5, 1.8, 1.2, 10), M.block), 0, 0.6, 0));
  fire.add(at(new THREE.Mesh(cylGeo(1.1, 1.35, 1.0, 10), M.blockDark), 0, 1.7, 0));
  const bowl = new THREE.Group();
  bowl.position.set(0, 2.3, 0);
  bowl.add(at(new THREE.Mesh(cylGeo(1.0, 0.7, 0.4, 12), M.bronzeDark), 0, 0, 0));
  for (let k = 0; k < 6; k++) { const lg = new THREE.Mesh(boxGeo(0.1, 0.1, 1.4, 1), M.darkWood); lg.position.y = 0.25; lg.rotation.y = k * 0.52; bowl.add(lg); }
  const coal = new THREE.Mesh(new THREE.SphereGeometry(0.55, 8, 4, 0, Math.PI * 2, 0, Math.PI / 2), M.fire);
  coal.position.y = 0.15;
  coal.userData.noOutline = true;
  bowl.add(coal);
  fire.add(bowl);
  trigger(W, fire, bowl, 0, 15.5, '봉화', 'fire', 3.6, 1.9);
  W.drums[W.drums.length - 1].reach = 3.5;
  for (const [x, z] of [[-15.5, 5.5], [15.5, 5.5], [13.5, 19.5]]) beacon(W, x, z);
  // 군막과 깃발
  for (const [x, z, r] of [[-11, 11, 0.4], [10.5, 12.5, -0.3]]) {
    B.add(new THREE.ConeGeometry(2.1, 2.4, 6), M.cloth[3], mat4(x, 1.2, z, r));
    B.add(cylGeo(0.06, 0.06, 3.2, 5), M.darkWood, mat4(x, 1.6, z));
    W.circles.push({ x, z, r: 1.8, y: 0 });
  }
  const Rf = mulberry32(81);
  for (const [x, z] of [[-17, 3.4], [-9, 3.4], [9, 3.4], [17, 3.4], [-5.4, 21], [5.4, 21]]) {
    B.add(cylGeo(0.05, 0.05, 3.4, 4), M.darkWood, mat4(x, 1.7 + (z < 5 ? 2.4 : 0), z));
    const fl = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.6), M.cloth[Rf() < 0.5 ? 0 : 2]);
    fl.position.set(x + 0.45, 3.0 + (z < 5 ? 2.4 : 0), z);
    fl.castShadow = true;
    animateMesh(fl, ANIM.flag);
    W.root.add(fl);
  }
  // 무너진 바위·돌탑·나뭇단
  for (const [x, z, s, sd] of [[-6, -16, 1, 11], [8, -4, 0.9, 12], [-13, -6, 1.1, 13], [5, 18.5, 0.8, 14]]) cairn(W, x, z, s, sd);
  for (const [x, z] of [[-6.5, 8], [6.8, 7.5], [-4.5, 19]]) {
    for (let k = 0; k < 4; k++) B.add(cylGeo(0.12, 0.12, 1.4, 6), M.wood2, mat4(x, 0.14 + Math.floor(k / 2) * 0.22, z + (k % 2) * 0.25 - 0.12, 0, 0, Math.PI / 2));
    W.circles.push({ x, z, r: 0.75, y: 0 });
  }

  // 단풍 숲: 성 밖 비탈 + 경계
  const R = mulberry32(707);
  const outer = [[-15, -20], [-9, -22], [-3, -19], [4, -23], [-16, -12], [-9, -10], [9, -15], [17, -9], [-17, -3], [11, -2], [-5, -2], [17, -18]];
  outer.forEach(([x, z], i) => maple(W, x + (R() - 0.5) * 2, z + (R() - 0.5) * 2, 0.9 + R() * 0.4, 900 + i));
  for (const [x, z] of [[-14, 15], [-8, 21], [15, 15], [9, 21]]) maple(W, x, z, 0.85, 950 + Math.round(x * 3 + z));
  for (let i = 0; i < 46; i++) {
    const side = Math.floor(R() * 4);
    const x = side < 2 ? (side ? 1 : -1) * (20.5 + R() * 4) : (R() - 0.5) * 46;
    const z = side >= 2 ? (side === 2 ? -27.5 - R() * 2 : 24 + R() * 2) : (R() - 0.5) * 50;
    if (side === 2 && Math.abs(x - 15) < 5) continue;
    if (side === 3 && Math.abs(x + 15) < 5) continue;
    maple(W, x, z, 1 + R() * 0.5, 1000 + i, false);
  }
  // 낙엽 깔린 자리
  for (let i = 0; i < 34; i++) {
    const x = (R() - 0.5) * 36, z = -24 + R() * 46;
    const lf = disc(W, i % 3 ? M.maple2 : M.maple, x, z, 0.25 + R() * 0.45);
    lf.position.y = 0.006 + i * 0.0002;
  }

  // 남쪽 경계와 바닷길: 기암 사이를 금줄이 막고 있다가 퀘스트로 걷힘
  W.blockRects.push({ x0: -20, x1: -17.2, z0: 22.6, z1: 23.6 }, { x0: -12.8, x1: 20, z0: 22.6, z1: 23.6 });
  for (const s of [-1, 1]) {
    B.add(new THREE.CylinderGeometry(0.7, 1.1, 3.2, 6), M.rockDark, mat4(-15 + s * 2.6, 1.6, 23.1, s));
  }
  const rope = new THREE.Group();
  rope.add(at(new THREE.Mesh(cylGeo(0.05, 0.05, 4.6, 5), M.wood2), -15, 1.6, 23.1)).rotation.z = Math.PI / 2;
  for (let k = 0; k < 7; k++) {
    const p = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 0.42), M.cloth[3]);
    p.position.set(-17 + k * 0.66, 1.3, 23.1);
    rope.add(p);
  }
  W.root.add(rope);
  W.addGate('sea', { x0: -17.2, x1: -12.8, z0: 22.6, z1: 23.6 }, (k) => {
    rope.position.y = k * 3;
    rope.visible = k < 0.99;
  });

  W.grassAreas = [];
  B.build(W.root);
  for (const m of W.foliage.build(W.root)) animateMesh(m, ANIM.foliage);
}

// ======================= 용궁 =======================
//  바닷속 용왕의 궁. 산호와 미역 숲 사이 붉은 기둥의 궁전, 진주 등 셋을 밝히고 용고(龍鼓)를 울리면 용왕이 나옴
function seaMaterials(W) {
  const M = W.M;
  M.sand = toon({ color: C('#f2e8e2') });
  if (GFX.hd) M.sand = toon({ ...HD.hdDirt([238, 226, 216]), roughness: 1 });
  M.coral = toon({ color: C('#ff6a7a') });
  M.coral2 = toon({ color: C('#ffa04a') });
  M.weed = toon({ color: C('#3a8a5a'), side: THREE.DoubleSide });
  M.shell = toon({ color: C('#f4e8e0') });
  M.pearl = toon({ color: C('#f0f8ff'), emissive: C('#6ac8ff'), emissiveIntensity: 0.4 });
  M.seaRoof = toon({ map: W.M.roof.map, color: C('#6ad0c8') });
  M.jade = toon({ color: C('#3aa88a') });
  W.glowMats.push({ mat: M.pearl, color: new THREE.Color('#8ad8ff'), k: 1.2 });
}

function coral(W, x, z, s, seed) {
  const M = W.M, B = W.batch;
  const R = mulberry32(seed);
  const mat = R() < 0.5 ? M.coral : M.coral2;
  for (let i = 0; i < 5; i++) {
    const a = R() * 6, tilt = 0.2 + R() * 0.5, h = (0.7 + R() * 0.8) * s;
    const dx = Math.sin(tilt) * Math.cos(a) * h * 0.5, dz = Math.sin(tilt) * Math.sin(a) * h * 0.5;
    B.add(cylGeo(0.05 * s, 0.1 * s, h, 5), mat, mat4(x + dx, h * 0.45, z + dz, a, tilt * Math.sin(a), tilt * Math.cos(a)));
    B.add(new THREE.SphereGeometry(0.1 * s, 6, 4), mat, mat4(x + dx * 2, h * 0.9, z + dz * 2));
  }
  W.circles.push({ x, z, r: 0.5 * s, y: 0 });
}

function seaweed(W, x, z, seed) {
  const M = W.M;
  const R = mulberry32(seed);
  for (let i = 0; i < 4; i++) {
    const h = 1.4 + R() * 1.6;
    const w = new THREE.Mesh(new THREE.PlaneGeometry(0.22, h, 1, 4), M.weed);
    w.position.set(x + (R() - 0.5) * 0.8, h / 2, z + (R() - 0.5) * 0.8);
    w.rotation.y = R() * 6;
    animateMesh(w, ANIM.flag);
    W.root.add(w);
  }
}

// 진주 등: 받침 위에 빛나는 큰 진주 (light 퀘스트)
function pearlLamp(W, x, z) {
  const M = W.M, B = W.batch;
  B.add(cylGeo(0.5, 0.6, 0.3, 8), M.jade, mat4(x, 0.15, z));
  B.add(cylGeo(0.16, 0.2, 1.1, 8), M.jade, mat4(x, 0.85, z));
  // 조개 받침
  B.add(new THREE.SphereGeometry(0.42, 10, 6, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), M.shell, mat4(x, 1.55, z));
  B.add(new THREE.SphereGeometry(0.26, 10, 8), M.pearl, mat4(x, 1.62, z));
  W.lanterns.push(new THREE.Vector3(x, 1.62, z));
  W.circles.push({ x, z, r: 0.6, y: 0 });
}

export function buildSeaPalace(W) {
  extraMaterials(W);
  seaMaterials(W);
  const M = W.M, B = (W.batch = new Batcher());
  W.foliage = new Batcher();
  ground(W, M.sand);
  if (M.autumnGrass) blendStrip(W, M.autumnGrass, -60, 60, -26.1, -21.5, 0.004);
  pathStrip(W, M.slab, [[-15, -27], [-12, -18], [-5, -10], [0, -4], [0, 4]], 2.8);
  disc(W, M.slab, 0, 2, 5);
  disc(W, M.slab, 0, 13, 7.5);

  // 용궁 본전: 옥 기단 + 붉은 기둥 + 푸른 기와 지붕
  B.add(boxGeo(13, 0.3, 7, 4), M.jade, mat4(0, 0.15, 15));
  for (const sx of [-5.5, -2.8, 2.8, 5.5]) for (const sz of [12, 18]) {
    B.add(cylGeo(0.26, 0.3, 4.2, 10), M.red, mat4(sx, 2.25, sz));
    W.circles.push({ x: sx, z: sz, r: 0.35, y: 0 });
  }
  B.add(boxGeo(12.4, 0.5, 7.2, 4), M.dancheong, mat4(0, 4.55, 15));
  const keep = M.roof;
  M.roof = M.seaRoof;
  W.roof({ cx: 0, cy: 4.8, cz: 15, w: 12.8, d: 7.4, h: 2.6, overhang: 1.8, lift: 0.8, ridge: true });
  M.roof = keep;
  // 뒷벽과 옥좌
  B.add(boxGeo(12, 3.6, 0.4, 4), M.plaster, mat4(0, 1.8, 18.4));
  W.blockRects.push({ x0: -6, x1: 6, z0: 18.2, z1: 18.6 });
  B.add(boxGeo(2.2, 1.0, 1.2, 2), M.gold, mat4(0, 0.8, 17.4));
  B.add(boxGeo(2.4, 1.8, 0.3, 2), M.red, mat4(0, 1.5, 17.95));
  W.circles.push({ x: 0, z: 17.4, r: 1.2, y: 0 });

  // 용고(龍鼓): 앞뜰의 큰 북 (웨이브 장치)
  const drum = new THREE.Group();
  drum.position.set(0, 0, 8.5);
  for (const s of [-1, 1]) drum.add(at(new THREE.Mesh(boxGeo(0.18, 2.6, 0.18, 1), M.red), s * 1.2, 1.3, 0));
  drum.add(at(new THREE.Mesh(boxGeo(2.6, 0.18, 0.2, 1), M.red), 0, 2.55, 0));
  const body = new THREE.Group();
  body.position.set(0, 1.45, 0);
  const shell = new THREE.Mesh(cylGeo(0.85, 0.85, 0.9, 16), M.drumSide);
  shell.rotation.x = Math.PI / 2;
  body.add(shell);
  for (const s of [-1, 1]) { const f = new THREE.Mesh(new THREE.CircleGeometry(0.85, 16), M.drumFace); f.position.z = s * 0.46; if (s < 0) f.rotation.y = Math.PI; body.add(f); }
  drum.add(body);
  trigger(W, drum, body, 0, 8.5, '용고', 'drum', 3.4, 1.3);
  for (const [x, z] of [[-11, 6], [11, 6], [-9, -14]]) pearlLamp(W, x, z);

  // 거대한 조개와 산호·미역 숲
  for (const [x, z, s] of [[-14, 14, 1.4], [14, 15, 1.2]]) {
    const top = new THREE.Mesh(new THREE.SphereGeometry(1, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2), M.shell);
    top.scale.set(1.3 * s, 0.6 * s, 1.1 * s);
    top.position.set(x, 0.4 * s, z - 0.3 * s);
    top.rotation.x = -0.5;
    top.castShadow = true;
    W.root.add(top);
    B.add(new THREE.SphereGeometry(1, 12, 6, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), M.shell, mat4(x, 0.45 * s, z, 0, 0, 0, [1.3 * s, 0.45 * s, 1.1 * s]));
    B.add(new THREE.SphereGeometry(0.4 * s, 10, 8), M.pearl, mat4(x, 0.55 * s, z));
    W.circles.push({ x, z, r: 1.3 * s, y: 0 });
  }
  const R = mulberry32(515);
  const spots = [[-8, -20, 1], [6, -18, 1.2], [-15, -6, 1.1], [14, -8, 1], [9, -2, 0.8], [-9, 2, 0.9], [15, 3, 1.1], [-16, 6, 0.9], [8, 22, 1], [-8, 22, 1], [16, -20, 1.2], [-4, -14, 0.7],
    [-17, -16, 1.2], [3, -24, 1], [17, -14, 1], [-13, 20, 1.1], [16, 21, 1], [11, 9, 0.9], [-3, -21, 0.8], [12, -24, 1.1], [-18, 13, 1], [4, -9, 0.6]];
  spots.forEach(([x, z, s], i) => { if (i % 3 === 2) seaweed(W, x, z, 600 + i); else coral(W, x, z, s * 1.7, 600 + i); });
  // 모래 물결 무늬 (밝은 띠)
  const rip = toon({ color: C('#fff4d0') });
  for (let i = 0; i < 30; i++) {
    const x = (R() - 0.5) * 36, z = -24 + R() * 44;
    if (Math.abs(x) < 7 && z > 5) continue;
    const m = new THREE.Mesh(new THREE.PlaneGeometry(1.6 + R() * 1.6, 0.12), rip);
    m.rotation.set(-Math.PI / 2, 0, 0.3 + (R() - 0.5) * 0.4);
    m.position.set(x, 0.008, z);
    m.userData.noOutline = true;
    W.root.add(m);
  }
  for (let i = 0; i < 40; i++) {
    const side = Math.floor(R() * 4);
    const x = side < 2 ? (side ? 1 : -1) * (20.5 + R() * 4) : (R() - 0.5) * 46;
    const z = side >= 2 ? (side === 2 ? -27.5 - R() * 2 : 23.5 + R() * 2.5) : (R() - 0.5) * 50;
    if (side === 2 && Math.abs(x + 15) < 5) continue;
    if (side === 3 && Math.abs(x - 14) < 5) continue;
    if (R() < 0.5) coral(W, x, z, 1.2 + R() * 0.6, 700 + i); else seaweed(W, x, z, 700 + i);
  }
  // 바위
  for (const [x, z, s, sd] of [[-12, -12, 1, 51], [12, -13, 1.2, 52], [-5, 6, 0.8, 53], [5, 5, 0.8, 54]]) cairn(W, x, z, s, sd);

  // 남쪽 경계와 계곡으로 가는 샘물길: 큰 대합 조개가 입을 다물고 막고 있다가 퀘스트로 열림
  W.blockRects.push({ x0: -20, x1: 11.8, z0: 22.6, z1: 23.6 }, { x0: 16.2, x1: 20, z0: 22.6, z1: 23.6 });
  const clam = new THREE.Group();
  clam.position.set(14, 0, 23.1);
  const lidTop = new THREE.Mesh(new THREE.SphereGeometry(1, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2), M.shell);
  lidTop.scale.set(2.2, 1.0, 1.0);
  clam.add(lidTop);
  const pearlC = new THREE.Mesh(new THREE.SphereGeometry(0.35, 10, 8), M.pearl);
  pearlC.position.y = 0.3;
  clam.add(pearlC);
  clam.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  W.root.add(clam);
  W.addGate('valley', { x0: 11.8, x1: 16.2, z0: 22.6, z1: 23.6 }, (k) => {
    clam.position.y = -k * 1.6;
    clam.visible = k < 0.99;
  });

  B.build(W.root);
  for (const m of W.foliage.build(W.root)) animateMesh(m, ANIM.foliage);
}
