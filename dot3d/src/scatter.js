// 바닥 장식: 지역마다 풀포기·들꽃·자갈·낙엽·갈대·버섯·눈덩이를 인스턴싱으로 촘촘히 깖
//  - 모든 지역을 지은 뒤(충돌 정보가 월드 좌표로 옮겨진 다음) 한 번 실행
//  - 길 위에는 자갈·낙엽만, 길 가장자리에는 풀포기를 몰아 심어 경계를 덮음
//  - 막힌 곳(건물·바위·나무 밑동)과 물 위, 높은 단 위에는 놓지 않음
//  - 화질 '낮음'·도트 모드는 개수를 줄임
import * as THREE from 'three';
import { toon, animateMesh, ANIM } from './materials.js';
import { mulberry32 } from './util.js';
import { GFX } from './gfx.js';

// ---------------------------------------------------------------- 모양 (모두 원점 바닥 기준, 위로 +y)
// 양면: 삼각형마다 뒤집은 복사본을 더함 (재질 DoubleSide는 뒷면 법선을 아래로 뒤집어 까맣게 보임)
function merge(parts) {
  const pos = [], nor = [], col = [];
  for (const p of parts) {
    pos.push(...p.pos); nor.push(...p.nor); col.push(...p.col);
    for (let t = 0; t < p.pos.length / 9; t++) for (const v of [0, 2, 1]) {
      const i = t * 3 + v;
      pos.push(p.pos[i * 3], p.pos[i * 3 + 1], p.pos[i * 3 + 2]); nor.push(p.nor[i * 3], p.nor[i * 3 + 1], p.nor[i * 3 + 2]); col.push(p.col[i * 3], p.col[i * 3 + 1], p.col[i * 3 + 2]);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  return g;
}
// 잎 하나: 바닥은 어둡고 끝은 밝은 삼각형, 바깥으로 기울어짐
function blade(a, lean, h, w, base = [0.55, 0.6, 0.5], tip = [1.15, 1.12, 0.95]) {
  const c = Math.cos(a), s = Math.sin(a);
  const px = -s * w, pz = c * w; // 잎 폭 방향
  const tx = c * lean, tz = s * lean;
  return { pos: [-px, 0, -pz, px, 0, pz, tx, h, tz], nor: [0, 1, 0, 0, 1, 0, 0, 1, 0], col: [...base, ...base, ...tip] };
}
function tuftGeo(n = 5, h = 0.34, spread = 0.12) {
  const parts = [];
  for (let i = 0; i < n; i++) { const a = (i / n) * Math.PI * 2 + i * 0.7; parts.push(blade(a, spread * (0.6 + (i % 3) * 0.3), h * (0.75 + ((i * 37) % 10) / 25), 0.035)); }
  return merge(parts);
}
function reedGeo() {
  const parts = [];
  for (let i = 0; i < 4; i++) { const a = i * 1.7; parts.push(blade(a, 0.08, 0.85 + i * 0.12, 0.025, [0.45, 0.55, 0.35], [0.9, 1.0, 0.7])); }
  // 부들 이삭 (갈색 막대)
  const B = [0.5, 0.32, 0.18], y0 = 0.72, y1 = 0.92, r = 0.03;
  parts.push({ pos: [-r, y0, 0, r, y0, 0, r, y1, 0, -r, y0, 0, r, y1, 0, -r, y1, 0], nor: Array(6).fill([0, 0, 1]).flat(), col: Array(6).fill(B).flat() });
  return merge(parts);
}
function flowerGeo() {
  const parts = [blade(0, 0.02, 0.2, 0.012, [0.35, 0.55, 0.3], [0.45, 0.65, 0.35])];
  // 꽃잎: 위를 보는 육각 원반
  const y = 0.2, r = 0.065, W = [1, 1, 1];
  const pos = [];
  for (let i = 0; i < 6; i++) { const a0 = (i / 6) * Math.PI * 2, a1 = ((i + 1) / 6) * Math.PI * 2; pos.push(0, y + 0.01, 0, Math.cos(a1) * r, y, Math.sin(a1) * r, Math.cos(a0) * r, y, Math.sin(a0) * r); }
  parts.push({ pos, nor: Array(18).fill([0, 1, 0]).flat(), col: Array(18).fill(W).flat() });
  // 꽃술
  const c = 0.02, Y = [1.6, 1.4, 0.4];
  parts.push({ pos: [-c, y + 0.015, -c, c, y + 0.015, c, c, y + 0.015, -c], nor: [0, 1, 0, 0, 1, 0, 0, 1, 0], col: [...Y, ...Y, ...Y] });
  return merge(parts);
}
function pebbleGeo() {
  const g = new THREE.IcosahedronGeometry(0.14, 0);
  g.scale(1, 0.55, 0.8);
  g.translate(0, 0.02, 0);
  g.setAttribute('color', new THREE.Float32BufferAttribute(Array(g.attributes.position.count * 3).fill(1), 3));
  return g;
}
function leafGeo() {
  // 바닥에 누운 마름모 잎 (가운데가 살짝 솟음)
  const L = 0.22, W = 0.1, y = 0.015;
  const pos = [-L, y, 0, 0, y + 0.02, 0, 0, y, W, 0, y + 0.02, 0, L, y, 0, 0, y, W, -L, y, 0, 0, y, -W, 0, y + 0.02, 0, 0, y + 0.02, 0, 0, y, -W, L, y, 0];
  return merge([{ pos, nor: Array(12).fill([0, 1, 0]).flat(), col: Array(12).fill([1, 1, 1]).flat() }]);
}
function mushroomGeo() {
  const stem = new THREE.CylinderGeometry(0.025, 0.03, 0.12, 6).translate(0, 0.06, 0).toNonIndexed();
  const cap = new THREE.SphereGeometry(0.075, 8, 4, 0, Math.PI * 2, 0, Math.PI / 2).translate(0, 0.11, 0).toNonIndexed();
  const part = (g, c) => ({ pos: [...g.attributes.position.array], nor: [...g.attributes.normal.array], col: Array(g.attributes.position.count).fill(c).flat() });
  return merge([part(stem, [1, 0.96, 0.88]), part(cap, [1.0, 0.35, 0.28])]);
}
function lumpGeo() {
  const g = new THREE.IcosahedronGeometry(0.2, 1);
  g.scale(1, 0.4, 0.85);
  g.setAttribute('color', new THREE.Float32BufferAttribute(Array(g.attributes.position.count * 3).fill(1), 3));
  return g;
}
const GEO = {};
const geo = (k) => (GEO[k] ||= { tuft: () => tuftGeo(), tall: () => tuftGeo(6, 0.55, 0.16), reed: reedGeo, flower: flowerGeo, pebble: pebbleGeo, leaf: leafGeo, mushroom: mushroomGeo, lump: lumpGeo }[k]());

// ---------------------------------------------------------------- 지역별 구성
// kind: 모양, d: 1㎡당 개수, where: off(길 밖) / on(길 위) / any, edge: 길 가장자리 1m당 추가 개수, colors, s: 크기 범위, wind
const SETS = {
  palace: [
    { kind: 'tuft', d: 0.9, where: 'off', edge: 3, colors: ['#6f9c48', '#5d8c3e', '#86ad52'], s: [0.8, 1.3], wind: true },
    { kind: 'flower', d: 0.12, where: 'off', colors: ['#f6c8d8', '#ffffff', '#f2d870', '#e8a8c8'], s: [0.8, 1.2], wind: true },
    { kind: 'pebble', d: 0.08, where: 'any', colors: ['#9a9488', '#b8b2a4', '#7c766c'], s: [0.6, 1.4] },
  ],
  bamboo: [
    { kind: 'tuft', d: 1.1, where: 'off', edge: 3, colors: ['#4f7a38', '#5d8a40', '#3e6a30'], s: [0.9, 1.5], wind: true },
    { kind: 'tall', d: 0.25, where: 'off', colors: ['#557f3a', '#6a9046'], s: [0.8, 1.2], wind: true },
    { kind: 'leaf', d: 0.6, where: 'any', colors: ['#b8b060', '#a0a050', '#c8b878', '#8a8a48'], s: [0.8, 1.3] },
    { kind: 'pebble', d: 0.06, where: 'any', colors: ['#8a8478', '#6e6a60'], s: [0.6, 1.3] },
  ],
  temple: [
    { kind: 'lump', d: 0.18, where: 'off', colors: ['#f2f4f8', '#e6eaf2'], s: [0.6, 1.4] },
    { kind: 'tuft', d: 0.35, where: 'off', edge: 1.5, colors: ['#b8a878', '#a89868', '#c8b890'], s: [0.7, 1.1], wind: true },
    { kind: 'pebble', d: 0.12, where: 'any', colors: ['#8a8a90', '#a4a4aa', '#6e6e76'], s: [0.6, 1.4] },
  ],
  swamp: [
    { kind: 'tuft', d: 0.8, where: 'off', edge: 2.5, colors: ['#5a6e3a', '#6a7a42', '#4e6034'], s: [0.9, 1.4], wind: true },
    { kind: 'reed', d: 0.22, where: 'off', colors: ['#6a8048', '#7a8a50'], s: [0.8, 1.3], wind: true },
    { kind: 'mushroom', d: 0.05, where: 'off', colors: ['#ffffff', '#e8d8c8', '#c8b8ff'], s: [0.7, 1.4] },
    { kind: 'pebble', d: 0.08, where: 'any', colors: ['#5a5446', '#6a6450'], s: [0.6, 1.3] },
  ],
  canyon: [
    { kind: 'pebble', d: 0.5, where: 'any', colors: ['#3a3434', '#4a4040', '#2a2626', '#5a4a44'], s: [0.6, 2.0] },
    { kind: 'tuft', d: 0.12, where: 'off', colors: ['#7a6a48', '#8a7650'], s: [0.6, 1.0], wind: true },
  ],
  fortress: [
    { kind: 'leaf', d: 1.1, where: 'any', colors: ['#e05a2a', '#f08a30', '#c8402a', '#f0b040', '#a8582e'], s: [0.8, 1.4] },
    { kind: 'tuft', d: 0.5, where: 'off', edge: 2, colors: ['#b0943e', '#c8a850', '#9a8040'], s: [0.8, 1.3], wind: true },
    { kind: 'pebble', d: 0.08, where: 'any', colors: ['#8a7a68', '#a0907c'], s: [0.6, 1.3] },
  ],
  sea: [
    { kind: 'pebble', d: 0.35, where: 'any', colors: ['#f2d8d0', '#fff4e8', '#e8b8a8', '#d8e8f0', '#c8a890'], s: [0.5, 1.2] },
    { kind: 'tall', d: 0.3, where: 'off', colors: ['#3a8a7a', '#4aa08a', '#2a7468'], s: [0.8, 1.4], wind: true },
  ],
  valley: [
    { kind: 'tuft', d: 1.4, where: 'off', edge: 3.5, colors: ['#5aa040', '#6ab048', '#4a9038', '#7ab850'], s: [0.9, 1.5], wind: true },
    { kind: 'flower', d: 0.3, where: 'off', colors: ['#ffffff', '#f2d040', '#f08ab0', '#a8a0ff', '#ff9a50'], s: [0.8, 1.3], wind: true },
    { kind: 'pebble', d: 0.07, where: 'any', colors: ['#9a9488', '#7c766c'], s: [0.6, 1.3] },
  ],
  snowfield: [
    { kind: 'lump', d: 0.22, where: 'off', colors: ['#ffffff', '#eef2fa'], s: [0.6, 1.6] },
    { kind: 'tuft', d: 0.22, where: 'off', edge: 1.2, colors: ['#a89a78', '#bcae88'], s: [0.6, 1.0], wind: true },
    { kind: 'pebble', d: 0.06, where: 'any', colors: ['#5a5a66', '#70707a'], s: [0.6, 1.4] },
  ],
  tower: [
    { kind: 'pebble', d: 0.12, where: 'any', colors: ['#d8d0c0', '#4a3a5a', '#6a5a7a'], s: [0.6, 1.3] },
  ],
};

// ---------------------------------------------------------------- 길까지의 거리 (음수: 길 안)
function pathDist(shapes, x, z) {
  let d = 1e9;
  for (const s of shapes) {
    let v;
    if (s.type === 'disc') v = Math.hypot(x - s.x, z - s.z) - s.r;
    else {
      const ex = s.x1 - s.x0, ez = s.z1 - s.z0, L2 = ex * ex + ez * ez || 1;
      const t = Math.max(0, Math.min(1, ((x - s.x0) * ex + (z - s.z0) * ez) / L2));
      v = Math.hypot(x - (s.x0 + ex * t), z - (s.z0 + ez * t)) - s.w / 2;
    }
    if (v < d) d = v;
  }
  return d;
}

export function scatterDetails(W, R, quality) {
  const set = SETS[R.id];
  if (!set) return;
  const mul = ({ high: 1, mid: 0.7, low: 0.35 }[quality] ?? 1) * (GFX.hd ? 1 : 0.6);
  const shapes = (W.pathShapes || []).filter((s) => s.region === R.id);
  const rnd = mulberry32(7000 + R.id.length * 131 + R.id.charCodeAt(0));
  const area = (R.x1 - R.x0) * (R.z1 - R.z0);
  const free = (x, z) => {
    if (z < R.from || z >= R.to) return null; // 다른 지역과 겹치는 테두리는 그 지역 몫
    const h = W.heightAt(x, z);
    if (h > 0.3) return null; // 단·계단 위는 비움
    if (W.isBlocked(x, z, 0.2, h)) return null;
    if (W.inWater(x, z)) return null;
    return h;
  };
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), v = new THREE.Vector3(), sc = new THREE.Vector3();
  const col = new THREE.Color();
  for (const L of set) {
    const pts = [];
    const n = Math.round(area * L.d * mul);
    for (let k = 0; k < n; k++) {
      const x = R.x0 + rnd() * (R.x1 - R.x0), z = R.z0 + rnd() * (R.z1 - R.z0);
      const pd = shapes.length ? pathDist(shapes, x, z) : 9;
      if (L.where === 'off' && pd < 0.15) continue;
      if (L.where === 'on' && pd > -0.1) continue;
      const h = free(x, z);
      if (h === null) continue;
      pts.push([x, h, z]);
    }
    // 길 가장자리: 둘레를 따라 걸으며 바깥쪽에 몰아 심기 (경계를 풀이 덮음)
    if (L.edge && shapes.length) {
      for (const s of shapes) {
        const per = s.type === 'disc' ? Math.PI * 2 * s.r : 2 * Math.hypot(s.x1 - s.x0, s.z1 - s.z0);
        const m = Math.round(per * L.edge * mul);
        for (let k = 0; k < m; k++) {
          let x, z;
          const off = -0.15 + rnd() * 0.75;
          if (s.type === 'disc') { const a = rnd() * Math.PI * 2; x = s.x + Math.cos(a) * (s.r + off); z = s.z + Math.sin(a) * (s.r + off); }
          else {
            const t = rnd(), ex = s.x1 - s.x0, ez = s.z1 - s.z0, L1 = Math.hypot(ex, ez) || 1, side = rnd() < 0.5 ? -1 : 1;
            x = s.x0 + ex * t + (-ez / L1) * side * (s.w / 2 + off); z = s.z0 + ez * t + (ex / L1) * side * (s.w / 2 + off);
          }
          if (pathDist(shapes, x, z) < -0.2) continue; // 다른 길 한가운데면 건너뜀
          const h = free(x, z);
          if (h === null) continue;
          pts.push([x, h, z]);
        }
      }
    }
    if (!pts.length) continue;
    const mat = toon({ color: 0xffffff, vertexColors: true });
    const mesh = new THREE.InstancedMesh(geo(L.kind), mat, pts.length);
    const cols = L.colors.map((c) => new THREE.Color(c));
    pts.forEach(([x, y, z], i) => {
      const s = L.s[0] + rnd() * (L.s[1] - L.s[0]);
      e.set(L.kind === 'leaf' ? (rnd() - 0.5) * 0.3 : (rnd() - 0.5) * 0.25, rnd() * Math.PI * 2, L.kind === 'leaf' ? (rnd() - 0.5) * 0.3 : (rnd() - 0.5) * 0.25);
      m4.compose(v.set(x, y, z), q.setFromEuler(e), sc.set(s, s * (L.kind === 'pebble' ? 0.7 + rnd() * 0.6 : 1), s));
      mesh.setMatrixAt(i, m4);
      // 같은 색이라도 조금씩 밝기를 달리하고, 넓은 얼룩(패치)으로 묶어 자연스럽게
      const patch = Math.sin(x * 0.37) * Math.cos(z * 0.29) * 0.5 + 0.5;
      col.copy(cols[Math.floor(rnd() * cols.length)]).multiplyScalar(0.88 + rnd() * 0.24 + (patch - 0.5) * 0.12);
      mesh.setColorAt(i, col);
    });
    mesh.instanceMatrix.needsUpdate = true;
    mesh.computeBoundingSphere();
    mesh.receiveShadow = true;
    mesh.castShadow = false;
    mesh.userData.noOutline = true;
    if (L.wind) animateMesh(mesh, ANIM.grass, { shadow: false });
    W.top.add(mesh);
  }
}
