// 새 지역: 청류 계곡 (용궁 뒤 샘물길 너머 여름 골짜기) · 백설 고원 (계곡 남서쪽 눈 덮인 고원)
import * as THREE from 'three';
import { toon, animateMesh, ANIM, shared } from './materials.js';
import { boxGeo, cylGeo, Batcher } from './geom.js';
import { mulberry32 } from './util.js';
import { mat4, blendStrip } from './world.js';
import { extraMaterials, ground, pathStrip, disc, trigger, cairn } from './worlds2.js';
import { GFX } from './gfx.js';
import * as HD from './hdtex.js';

const C = (h) => new THREE.Color(h);
const at = (m, x, y, z) => { m.position.set(x, y, z); return m; };

// 흐르는 냇물: 물살 무늬가 하류 쪽으로 흘러가고, 기슭 쪽은 하얀 물거품
function streamMaterial(W) {
  const mat = new THREE.ShaderMaterial({
    uniforms: { uTime: shared.time, uNight: { value: 0 } },
    vertexShader: `
      varying vec2 vUv; varying vec3 vW;
      void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: `
      uniform float uTime; uniform float uNight;
      varying vec2 vUv; varying vec3 vW;
      vec3 lin(vec3 c){ return pow(c, vec3(2.2)); }
      void main(){
        vec2 q = floor(vec2(vUv.x * 10.0, vUv.y * 5.0)) ;
        float v = vUv.y * 2.2 - uTime * 1.6;
        float w = sin(v * 3.1 + sin(vUv.x * 9.0 + vUv.y) * 1.4) + sin(v * 5.3 + vUv.x * 4.0) * 0.6 + sin(floor(vW.x * 8.0) * 0.7 + floor(vW.z * 8.0) * 1.3 - uTime * 3.0) * 0.35;
        vec3 c = vec3(0.24, 0.58, 0.66);
        if (w > 0.9) c = vec3(0.38, 0.72, 0.78);
        if (w > 1.45) c = vec3(0.82, 0.95, 0.96);
        if (w < -1.1) c = vec3(0.16, 0.44, 0.52);
        float edge = min(vUv.x, 1.0 - vUv.x);
        float foam = step(edge, 0.08 + 0.05 * sin(vUv.y * 7.0 - uTime * 4.0));
        c = mix(c, vec3(0.92, 0.98, 1.0), foam * 0.85);
        c = lin(c);
        c *= mix(1.0, 0.35, uNight);
        gl_FragColor = vec4(c, 1.0);
      }`,
  });
  W.nightUniforms.push(mat.uniforms.uNight);
  return mat;
}

// 곡선을 따라 넓적한 띠 (냇물·물가 모래). u: 가로 0~1, v: 길이
function ribbon(W, curve, width, y, mat, n = 90) {
  const pos = [], uv = [], idx = [];
  let len = 0, prev = null;
  for (let i = 0; i <= n; i++) {
    const t = i / n, p = curve.getPoint(t), d = curve.getTangent(t);
    if (prev) len += p.distanceTo(prev);
    prev = p;
    const nx = -d.z, nz = d.x, l = Math.hypot(nx, nz) || 1;
    const w = width * (1 + 0.12 * Math.sin(t * 17));
    pos.push(p.x + (nx / l) * w / 2, y, p.z + (nz / l) * w / 2, p.x - (nx / l) * w / 2, y, p.z - (nz / l) * w / 2);
    uv.push(0, len / 3, 1, len / 3);
    if (i < n) { const k = i * 2; idx.push(k, k + 2, k + 1, k + 1, k + 2, k + 3); }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  const m = new THREE.Mesh(g, mat);
  m.receiveShadow = true;
  m.userData.noOutline = true;
  W.root.add(m);
  return m;
}

// 잎 색만 바꾼 나무 (소나무 꼴)
export function leafyTree(W, x, z, s, seed, l1, l2, collide = true, snowy = false) {
  const M = W.M, keep = [M.leaf, M.leaf2];
  M.leaf = l1; M.leaf2 = l2;
  W.pine(x, 0, z, s, seed, collide, snowy, !snowy);
  [M.leaf, M.leaf2] = keep;
}

// 초가집: 흙벽, 둥근 볏짚 지붕 (snow: 지붕에 눈)
export function thatchHut(W, x, z, ry, snow = false) {
  const M = W.M, B = W.batch;
  B.add(boxGeo(4.2, 2.0, 2.8, 2), M.mudWall, mat4(x, 1.0, z, ry));
  B.add(boxGeo(4.4, 0.25, 3.0, 2), M.wood2, mat4(x, 0.12, z, ry));
  const roof = new THREE.SphereGeometry(1, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2);
  B.add(roof, M.thatch, mat4(x, 1.95, z, ry, 0, 0, [2.7, 1.25, 2.0]));
  if (snow) B.add(roof, M.snowCap, mat4(x, 2.0, z, ry, 0, 0, [2.62, 1.34, 1.93]));
  // 문과 창
  const fx = Math.sin(ry), fz = Math.cos(ry);
  B.add(boxGeo(0.8, 1.3, 0.06, 1), M.darkWood, mat4(x + fx * 1.42, 0.75, z + fz * 1.42, ry));
  B.add(boxGeo(0.6, 0.5, 0.06, 1), M.lattice, mat4(x + fx * 1.42 + Math.cos(ry) * 1.2, 1.2, z + fz * 1.42 - Math.sin(ry) * 1.2, ry));
  W.circles.push({ x, z, r: 2.2, y: 0 });
}

// ======================= 청류 계곡 =======================
//  졸졸 흐르는 시냇물이 골짜기를 가로지름. 물에 들어가면 느려지고 나무다리·징검돌은 괜찮음
//  물레방아를 돌리면(웨이브) 천년 왕지네가 나옴. 산신 제단의 촛불 셋을 밝히는 퀘스트
function valleyMaterials(W) {
  const M = W.M;
  M.summerGrass = toon({ color: C('#6ab04a') });
  M.bank = toon({ color: C('#c8b890') });
  if (GFX.hd) {
    M.summerGrass = toon({ ...HD.hdGrass([92, 150, 66]), roughness: 1 });
    M.bank = toon({ ...HD.hdDirt([176, 160, 120]), roughness: 1 });
  }
  M.leafSummer = toon({ color: C('#3f8f3a') });
  M.leafSummer2 = toon({ color: C('#7ac04a') });
  M.hydrangea = toon({ color: C('#7a8aff') });
  M.hydrangea2 = toon({ color: C('#c88aff') });
  M.lily = M.lily || toon({ color: C('#4a8a3a') });
  M.dayLily = toon({ color: C('#ff8a2a') });
  M.mudWall = toon({ color: C('#c8a878') });
  M.thatch = toon({ color: C('#b8945a') });
  M.candle = toon({ color: C('#fff4d0'), emissive: C('#000000') });
  W.glowMats.push({ mat: M.candle, color: new THREE.Color('#ffb040'), k: 1.2 });
}

export function buildValley(W) {
  extraMaterials(W);
  valleyMaterials(W);
  const M = W.M, B = (W.batch = new Batcher());
  W.foliage = new Batcher();
  ground(W, M.summerGrass);
  // 북쪽은 용궁의 모래가 번져 들어옴
  if (M.sand) blendStrip(W, M.sand, -60, 60, -26.1, -21.5, 0.004);
  // 흙길: 북동쪽 어귀(용궁에서 올라오는 샘물길) → 물레방아 → 다리 → 남서쪽 고원 길
  pathStrip(W, M.fpath, [[14, -27], [12, -18], [8, -10], [5, -4], [-3, -4], [-8, 2], [-11, 10], [-13, 18], [-14, 25]], 2.6);
  disc(W, M.fpath, 6, -6, 3.2);

  // 시냇물: 북서쪽 폭포에서 남쪽으로 굽이쳐 흐름
  const pts = [[-10, -29], [-8, -22], [-4, -16], [-1, -10], [0, -4], [-1.5, 2], [1.5, 8], [3.5, 14], [1.5, 20], [-0.5, 25.6]].map(([x, z]) => new THREE.Vector3(x, 0, z));
  const curve = new THREE.CatmullRomCurve3(pts);
  ribbon(W, curve, 5.0, 0.012, M.bank);
  ribbon(W, curve, 3.4, 0.035, streamMaterial(W));
  for (let i = 0; i <= 60; i++) {
    const p = curve.getPoint(i / 60);
    W.wet.push({ x: p.x, z: p.z, rx: 1.75, rz: 1.75 });
  }
  // 물가 돌·갈대
  const R = mulberry32(1201);
  for (let i = 0; i < 70; i++) {
    const t = R(), p = curve.getPoint(t), d = curve.getTangent(t);
    const side = R() < 0.5 ? -1 : 1, off = 1.9 + R() * 0.8;
    const x = p.x - d.z * side * off, z = p.z + d.x * side * off;
    if (R() < 0.55) B.add(new THREE.IcosahedronGeometry(0.18 + R() * 0.28, 0), R() < 0.5 ? M.rock : M.rockDark, mat4(x, 0.08, z, R() * 6, R(), 0, [1, 0.6, 1]));
    else for (let k = 0; k < 4; k++) B.add(cylGeo(0.02, 0.03, 0.8 + R() * 0.6, 3), M.leafSummer2, mat4(x + (R() - 0.5) * 0.4, 0.45, z + (R() - 0.5) * 0.4, 0, (R() - 0.5) * 0.4, (R() - 0.5) * 0.4));
  }
  // 물속 큰 바위 몇 개 (물살이 갈라짐)
  for (const t of [0.18, 0.47, 0.83]) {
    const p = curve.getPoint(t);
    B.add(new THREE.IcosahedronGeometry(0.75, 0), M.rockDark, mat4(p.x + 0.5, 0.25, p.z, t * 9, 0, 0, [1.2, 0.7, 1]));
    W.circles.push({ x: p.x + 0.5, z: p.z, r: 0.8, y: 0 });
  }

  // 폭포: 북서쪽 바위 절벽에서 냇물이 시작됨
  for (const [x, z, s] of [[-13, -27, 1.6], [-7, -28, 1.5], [-10, -30, 2.0]]) {
    for (let k = 0; k < 3; k++) B.add(new THREE.IcosahedronGeometry(1.2 * s, 0), k % 2 ? M.rock : M.rockDark, mat4(x + (k - 1) * 1.2, 0.8 * s + k * 0.6, z - k * 0.4, k, 0.2, 0, [1, 1.4, 0.9]));
  }
  const fall = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 4.2, 1, 6), streamMaterial(W));
  fall.position.set(-10, 2.0, -27.4);
  fall.rotation.x = -0.12;
  fall.userData.noOutline = true;
  W.root.add(fall);
  W.blockRects.push({ x0: -16, x1: -4, z0: -31, z1: -26.5 });

  // 나무다리 (길이 냇물을 건너는 곳) + 징검돌
  const bp = curve.getPoint(0.42);
  B.add(boxGeo(6.2, 0.16, 1.9, 4), M.wood2, mat4(bp.x, 0.42, -4));
  for (const s of [-1, 1]) {
    B.add(boxGeo(6.2, 0.08, 0.08, 2), M.darkWood, mat4(bp.x, 0.95, -4 + s * 0.9));
    for (const dx of [-2.8, 0, 2.8]) B.add(cylGeo(0.06, 0.06, 0.6, 5), M.darkWood, mat4(bp.x + dx, 0.7, -4 + s * 0.9));
    W.blockRects.push({ x0: bp.x - 3.1, x1: bp.x + 3.1, z0: -4 + s * 0.9 - 0.1, z1: -4 + s * 0.9 + 0.1 });
  }
  W.boards.push({ x0: bp.x - 3.2, z0: -4, x1: bp.x + 3.2, z1: -4, w: 0.95 });
  const sp = curve.getPoint(0.75);
  for (let k = -2; k <= 2; k++) B.add(cylGeo(0.42, 0.5, 0.18, 7), M.rock, mat4(sp.x + k * 0.9, 0.07, sp.z + Math.sin(k) * 0.3));
  W.boards.push({ x0: sp.x - 2.2, z0: sp.z, x1: sp.x + 2.2, z1: sp.z, w: 0.55 });

  // 물레방아 (웨이브 장치): 냇물가 방앗간 + 도는 바퀴
  const mill = new THREE.Group();
  mill.position.set(0.9, 0, 1.6);
  mill.add(at(new THREE.Mesh(boxGeo(2.4, 2.0, 2.2, 2), M.mudWall), 1.4, 1.0, 0));
  const mroof = new THREE.Mesh(new THREE.SphereGeometry(1, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2), M.thatch);
  mroof.scale.set(1.7, 0.9, 1.5); mroof.position.set(1.4, 1.95, 0);
  mill.add(mroof);
  const wheel = new THREE.Group();
  wheel.position.set(-0.3, 1.2, 0);
  wheel.add(new THREE.Mesh(new THREE.TorusGeometry(1.1, 0.08, 5, 16), M.darkWood));
  for (let k = 0; k < 8; k++) {
    const sp2 = new THREE.Mesh(boxGeo(0.08, 2.2, 0.08, 1), M.wood2);
    sp2.rotation.z = (k / 8) * Math.PI;
    wheel.add(sp2);
    const pad = new THREE.Mesh(boxGeo(0.5, 0.06, 0.45, 1), M.wood2);
    const a = (k / 8) * Math.PI * 2;
    pad.position.set(Math.cos(a) * 1.15, Math.sin(a) * 1.15, 0);
    pad.rotation.z = a;
    wheel.add(pad);
  }
  wheel.rotation.order = 'YXZ';
  wheel.rotation.y = Math.PI / 2;
  const wheelSpin = new THREE.Group();
  wheelSpin.add(wheel);
  wheelSpin.position.copy(wheel.position); wheel.position.set(0, 0, 0);
  mill.add(wheelSpin);
  W.spinners.push({ obj: wheel, axis: 'z', speed: -1.2 });
  trigger(W, mill, wheelSpin, 0.9, 1.6, '물레방아', 'drum', 3.6, 1.0);
  W.drums[W.drums.length - 1].reach = 3.4;
  W.circles.push({ x: 2.3, z: 1.6, r: 1.5, y: 0 });

  // 포수의 초가집 (어귀)
  thatchHut(W, 15.5, -14, -Math.PI / 2);
  // 산신 제단 촛불 (불 밝히기 퀘스트)
  for (const [x, z] of [[14, 10], [-14, -6], [11, -22]]) {
    B.add(boxGeo(1.4, 0.6, 0.9, 1), M.rock, mat4(x, 0.3, z));
    B.add(cylGeo(0.08, 0.08, 0.35, 6), M.candle, mat4(x - 0.3, 0.78, z));
    B.add(cylGeo(0.08, 0.08, 0.45, 6), M.candle, mat4(x + 0.3, 0.83, z));
    B.add(boxGeo(0.4, 0.25, 0.3, 1), M.bronze, mat4(x, 0.73, z));
    W.lanterns.push(new THREE.Vector3(x, 1.05, z));
    W.circles.push({ x, z, r: 0.8, y: 0 });
  }

  // 수국·원추리 꽃밭
  const Rf = mulberry32(1301);
  for (let i = 0; i < 22; i++) {
    const x = (Rf() - 0.5) * 36, z = -22 + Rf() * 44;
    const p = curve.getPoint(Math.min(1, Math.max(0, (z + 29) / 56)));
    if (Math.abs(x - p.x) < 4) continue;
    if (Rf() < 0.5) for (let k = 0; k < 3; k++) W.foliage.add(new THREE.IcosahedronGeometry(1, 1), k % 2 ? M.hydrangea : M.hydrangea2, mat4(x + (Rf() - 0.5) * 0.7, 0.35, z + (Rf() - 0.5) * 0.7, 0, 0, 0, [0.38, 0.32, 0.38]));
    else for (let k = 0; k < 5; k++) {
      const fx = x + (Rf() - 0.5) * 0.8, fz = z + (Rf() - 0.5) * 0.8;
      B.add(cylGeo(0.015, 0.02, 0.6, 3), M.leafSummer, mat4(fx, 0.3, fz));
      B.add(new THREE.ConeGeometry(0.09, 0.14, 5), M.dayLily, mat4(fx, 0.64, fz, 0, Math.PI, 0));
    }
  }
  // 나무: 숲 속 공터 둘레와 경계
  for (const [x, z, s, sd] of [[-15, -16, 1.1, 1], [-16, 2, 1.0, 2], [15, 0, 1.0, 3], [16, 16, 1.1, 4], [-6, 16, 0.9, 5], [8, -18, 0.9, 6], [-17, 18, 1.0, 7], [9, 21, 1.0, 8]]) leafyTree(W, x, z, s, 1400 + sd, M.leafSummer, M.leafSummer2);
  const Rb = mulberry32(1501);
  for (let i = 0; i < 48; i++) {
    const side = Math.floor(Rb() * 4);
    const x = side < 2 ? (side ? 1 : -1) * (20.5 + Rb() * 4) : (Rb() - 0.5) * 46;
    const z = side >= 2 ? (side === 2 ? -27.5 - Rb() * 2 : 24 + Rb() * 2) : (Rb() - 0.5) * 50;
    if (side === 2 && Math.abs(x - 14) < 5) continue;
    if (side === 3 && Math.abs(x + 14) < 5) continue;
    if (side === 3 && Math.abs(x) < 3) continue;
    leafyTree(W, x, z, 1 + Rb() * 0.5, 1600 + i, M.leafSummer, M.leafSummer2, false);
  }
  cairn(W, -6, -13, 1, 71); cairn(W, 10, 14, 0.9, 72);

  // 풀
  W.grassAreas = [];
  for (let i = 0; i < 26; i++) {
    const x = (Rf() - 0.5) * 36, z = -22 + Rf() * 44;
    const p = curve.getPoint(Math.min(1, Math.max(0, (z + 29) / 56)));
    if (Math.abs(x - p.x) < 3.2) continue;
    W.grassAreas.push({ x0: x - 1.2, x1: x + 1.2, z0: z - 1, z1: z + 1, y: 0 });
  }
  W.scatterGrass();

  // 남쪽 경계와 고원 길: 넝쿨 덮인 바위가 막고 있다가 퀘스트로 치워짐
  W.blockRects.push({ x0: -20, x1: -16.2, z0: 22.6, z1: 23.6 }, { x0: -11.8, x1: 20, z0: 22.6, z1: 23.6 });
  const vines = new THREE.Group();
  const Rv = mulberry32(1701);
  for (let i = 0; i < 7; i++) {
    const r = new THREE.Mesh(new THREE.IcosahedronGeometry(0.55 + Rv() * 0.4, 0), i % 2 ? M.rock : M.rockDark);
    r.position.set(-16 + Rv() * 4, 0.35 + Rv() * 0.5, 22.6 + Rv() * 1.0);
    r.castShadow = true;
    vines.add(r);
    const v = new THREE.Mesh(new THREE.IcosahedronGeometry(0.4, 0), M.leafSummer);
    v.position.copy(r.position).add(new THREE.Vector3(0, 0.4, 0));
    vines.add(v);
  }
  W.root.add(vines);
  W.addGate('snowfield', { x0: -16.2, x1: -11.8, z0: 22.6, z1: 23.6 }, (k) => {
    vines.position.y = -k * 1.8;
    vines.visible = k < 0.99;
  });

  B.build(W.root);
  for (const m of W.foliage.build(W.root)) animateMesh(m, ANIM.foliage);
}

// ======================= 백설 고원 =======================
//  무릎까지 눈이 쌓인 고원. 눈 쌓인 소나무, 눈더미, 얼어붙은 못, 버려진 사냥꾼 마을
//  꺼진 화톳불 셋을 피우고 얼음 북을 울리면 서리 거인 동장군이 나옴
function snowMaterials(W) {
  const M = W.M;
  M.deepSnow = M.snow;
  M.snowCap = toon({ color: C('#e6ecf4') });
  M.iceLake = toon({ color: C('#a8d8f0'), roughness: 0.2, metalness: GFX.hd ? 0.2 : 0 });
  M.iceStream = toon({ color: C('#94c8e4'), roughness: 0.15, metalness: GFX.hd ? 0.2 : 0 });
  M.iceCrystal = toon({ color: C('#d8f4ff'), emissive: C('#2a8aff'), emissiveIntensity: 0.6, transparent: true, opacity: 0.85 });
  M.mudWall = M.mudWall || toon({ color: C('#c8a878') });
  M.thatch = M.thatch || toon({ color: C('#b8945a') });
  W.lavaMats = W.lavaMats || [];
  W.lavaMats.push({ mat: M.iceCrystal, base: 0.6 });
}

// 꺼진 화톳불: 돌 둘레 + 장작 (불 밝히기 퀘스트)
function firePit(W, x, z) {
  const M = W.M, B = W.batch;
  for (let k = 0; k < 8; k++) {
    const a = (k / 8) * Math.PI * 2;
    B.add(new THREE.IcosahedronGeometry(0.2, 0), M.rockDark, mat4(x + Math.cos(a) * 0.6, 0.12, z + Math.sin(a) * 0.6));
  }
  for (let k = 0; k < 4; k++) B.add(cylGeo(0.07, 0.08, 0.9, 5), M.darkWood, mat4(x, 0.25, z, k * 0.8, 0, 1.1));
  W.lanterns.push(new THREE.Vector3(x, 0.5, z));
  W.circles.push({ x, z, r: 0.75, y: 0 });
}

export function buildSnowfield(W) {
  extraMaterials(W);
  snowMaterials(W);
  const M = W.M, B = (W.batch = new Batcher());
  W.foliage = new Batcher();
  // 고원 바닥: 큰 얼룩 없이 고르게 쌓인 눈 (살짝 푸른 그늘)
  M.snowGround = toon({ color: C('#d6dee9') }); // 살짝 푸르스름하게: 캐릭터와 그림자가 보이도록
  ground(W, M.snowGround);
  for (let i = 0; i < 40; i++) { const R = mulberry32(3000 + i); const d = disc(W, M.snowCap, (R() - 0.5) * 38, -24 + R() * 46, 0.8 + R() * 1.6); d.position.y = 0.004; d.scale.set(1.6, 1, 1); }
  if (M.summerGrass) blendStrip(W, M.summerGrass, -60, 60, -26.1, -20.5, 0.004);
  // 발자국 길: 북서쪽 어귀 → 마을 → 얼음 북
  // 밟아 다진 눈길 (흙이 살짝 비침)
  M.trodden = toon({ color: C('#c4c2c8') });
  pathStrip(W, M.trodden, [[-14, -27], [-12, -18], [-6, -12], [0, -6], [2, 2], [0, 9]], 1.8, 0.006);
  disc(W, M.trodden, 0, 12, 4.2).position.y = 0.008;

  // 계곡에서 흘러온 시냇물이 고원에 들어서며 얼어붙어 못으로 이어짐 (경계에서 물이 뚝 끊기지 않게)
  {
    const ice = new THREE.CatmullRomCurve3([[-0.5, -27.5], [-0.7, -22], [1.2, -17.5], [4.8, -13.5], [8.6, -10]].map(([x, z]) => new THREE.Vector3(x, 0, z)));
    ribbon(W, ice, 4.6, 0.009, M.snowCap);
    ribbon(W, ice, 3.0, 0.02, M.iceStream);
    for (let i = 0; i < 8; i++) {
      const p = ice.getPoint(0.12 + i * 0.1);
      const crack = new THREE.Mesh(new THREE.PlaneGeometry(0.05, 1.2 + (i % 3) * 0.5), toon({ color: C('#e8f8ff') }));
      crack.rotation.set(-Math.PI / 2, 0, i * 1.3);
      crack.position.set(p.x + (i % 2 ? 0.4 : -0.3), 0.025, p.z);
      crack.userData.noOutline = true;
      W.root.add(crack);
    }
  }

  // 얼어붙은 못
  const lake = new THREE.Mesh(new THREE.CircleGeometry(5.5, 32), M.iceLake);
  lake.rotation.x = -Math.PI / 2; lake.position.set(10, 0.01, -8);
  lake.scale.set(1.2, 0.8, 1);
  lake.receiveShadow = true;
  W.root.add(lake);
  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * Math.PI * 2;
    const crack = new THREE.Mesh(new THREE.PlaneGeometry(0.06, 2.5 + (i % 3)), toon({ color: C('#e8f8ff') }));
    crack.rotation.set(-Math.PI / 2, 0, a);
    crack.position.set(10 + Math.cos(a) * 1.8, 0.015, -8 + Math.sin(a) * 1.2);
    crack.userData.noOutline = true;
    W.root.add(crack);
  }

  // 버려진 사냥꾼 마을: 눈 덮인 초가 셋, 울타리
  thatchHut(W, -13, -6, Math.PI / 2, true);
  thatchHut(W, -14.5, 4, Math.PI / 2, true);
  thatchHut(W, 13.5, 6, -Math.PI / 2, true);
  for (let k = 0; k < 9; k++) {
    B.add(cylGeo(0.07, 0.08, 1.1, 5), M.darkWood, mat4(-9.5, 0.55, -10 + k * 1.6));
    B.add(new THREE.SphereGeometry(0.12, 6, 4), M.snowCap, mat4(-9.5, 1.12, -10 + k * 1.6));
  }
  B.add(boxGeo(0.08, 0.08, 13, 2), M.darkWood, mat4(-9.5, 0.8, -3.6));
  W.blockRects.push({ x0: -9.6, x1: -9.4, z0: -10.2, z1: 3.0 });
  // 화톳불 셋
  for (const [x, z] of [[-6, -18], [14.5, -1], [-11, 13]]) firePit(W, x, z);

  // 얼음 북 (웨이브 장치): 고드름 달린 큰 북
  const drum = new THREE.Group();
  drum.position.set(0, 0, 12.5);
  for (const s of [-1, 1]) drum.add(at(new THREE.Mesh(boxGeo(0.2, 2.6, 0.2, 1), M.darkWood), s * 1.25, 1.3, 0));
  drum.add(at(new THREE.Mesh(boxGeo(2.7, 0.2, 0.22, 1), M.darkWood), 0, 2.55, 0));
  const body = new THREE.Group();
  body.position.set(0, 1.45, 0);
  const shell = new THREE.Mesh(cylGeo(0.9, 0.9, 0.9, 16), M.drumSide);
  shell.rotation.x = Math.PI / 2;
  body.add(shell);
  for (const s of [-1, 1]) { const f = new THREE.Mesh(new THREE.CircleGeometry(0.9, 16), M.drumFace); f.position.z = s * 0.46; if (s < 0) f.rotation.y = Math.PI; body.add(f); }
  for (let k = 0; k < 7; k++) body.add(at(new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.4, 4), M.iceCrystal), -0.9 + k * 0.3, -0.95, 0)).rotation.x = Math.PI;
  drum.add(body);
  trigger(W, drum, body, 0, 12.5, '얼음 북', 'drum', 3.4, 1.3);
  // 얼음 결정 무리
  for (const [x, z, s] of [[-4, 16, 1], [4.5, 16.5, 0.8], [6, 9, 0.7], [-5.5, 8.5, 0.9], [16, -16, 1.2], [-16, 18, 1]]) {
    for (let k = 0; k < 4; k++) B.add(new THREE.ConeGeometry(0.22 * s, (1.2 + k * 0.3) * s, 5), M.iceCrystal, mat4(x + (k % 2 ? 0.3 : -0.25) * s, (0.6 + k * 0.15) * s, z + (k - 1.5) * 0.2 * s, 0, (k - 1.5) * 0.25, (k % 2 ? 0.25 : -0.2)));
    W.circles.push({ x, z, r: 0.6 * s, y: 0 });
  }
  // 눈더미
  const Rd = mulberry32(2101);
  for (let i = 0; i < 14; i++) {
    const x = (Rd() - 0.5) * 34, z = -22 + Rd() * 44;
    if (Math.hypot(x, z - 12) < 7 || Math.hypot(x - 10, z + 8) < 7 || (x < -8 && z > -12 && z < 8)) continue;
    const r = 0.8 + Rd() * 1.0;
    B.add(new THREE.SphereGeometry(r, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), M.snowCap, mat4(x, 0, z, Rd() * 6, 0, 0, [1.3, 0.6, 1]));
    W.circles.push({ x, z, r: r * 1.05, y: 0 });
  }
  // 눈 쌓인 소나무: 숲과 경계
  for (const [x, z, s, sd] of [[-4, -22, 1.1, 1], [6, -20, 1.0, 2], [17, -6, 1.1, 3], [-17, -16, 1.0, 4], [8, 20, 1.0, 5], [-8, 21, 1.1, 6], [17, 15, 1.0, 7], [2, -14, 0.8, 8], [-3, -2, 0.9, 9], [7, 4, 0.85, 10], [-17, 10, 1.0, 11], [12, -18, 0.9, 12]]) W.pine(x, 0, z, s, 2200 + sd, true, true);
  const Rb = mulberry32(2301);
  for (let i = 0; i < 52; i++) {
    const side = Math.floor(Rb() * 4);
    const x = side < 2 ? (side ? 1 : -1) * (20.5 + Rb() * 4) : (Rb() - 0.5) * 46;
    const z = side >= 2 ? (side === 2 ? -27.5 - Rb() * 2 : 23.5 + Rb() * 2.5) : (Rb() - 0.5) * 50;
    if (side === 2 && Math.abs(x + 14) < 5) continue;
    if (side === 3 && Math.abs(x - 14) < 5) continue;
    W.pine(x, 0, z, 1.1 + Rb() * 0.5, 2400 + i, false, true);
  }
  cairn(W, 4, -2, 1, 81); cairn(W, -2, -16, 0.9, 82);

  // 남동쪽 고갯길 (왕릉 고분으로): 얼음 벽이 막고 있다가 퀘스트로 녹음
  W.blockRects.push({ x0: -20, x1: 11.8, z0: 22.6, z1: 23.6 }, { x0: 16.2, x1: 20, z0: 22.6, z1: 23.6 });
  pathStrip(W, M.trodden, [[2, 9], [8, 15], [12, 20], [14, 26]], 1.6, 0.006);
  const iceWall = new THREE.Group();
  const Ri = mulberry32(2501);
  for (let i = 0; i < 9; i++) {
    const h = 1.2 + Ri() * 1.4;
    const c = new THREE.Mesh(new THREE.ConeGeometry(0.35 + Ri() * 0.25, h, 5), M.iceCrystal);
    c.position.set(12 + Ri() * 4, h / 2, 22.6 + Ri() * 1.0);
    c.rotation.set((Ri() - 0.5) * 0.4, Ri() * 3, (Ri() - 0.5) * 0.4);
    iceWall.add(c);
  }
  for (let i = 0; i < 4; i++) iceWall.add(at(new THREE.Mesh(new THREE.SphereGeometry(0.9, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), M.snowCap), 12.4 + i * 1.1, 0, 23.1));
  W.root.add(iceWall);
  W.addGate('tomb', { x0: 11.8, x1: 16.2, z0: 22.6, z1: 23.6 }, (k) => {
    iceWall.position.y = -k * 2.6;
    iceWall.visible = k < 0.99;
  });

  B.build(W.root);
  for (const m of W.foliage.build(W.root)) animateMesh(m, ANIM.foliage);
}
