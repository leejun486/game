import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

// 면마다 실제 크기에 맞춰 UV를 늘린 박스 (텍셀 밀도 일정)
export function boxGeo(w, h, d, tile = 4) {
  const g = new THREE.BoxGeometry(w, h, d);
  const uv = g.attributes.uv;
  const dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];
  for (let f = 0; f < 6; f++) {
    for (let v = 0; v < 4; v++) {
      const i = f * 4 + v;
      uv.setXY(i, (uv.getX(i) * dims[f][0]) / tile, (uv.getY(i) * dims[f][1]) / tile);
    }
  }
  return g;
}

export function cylGeo(rt, rb, h, seg = 12, tileU = 0, tileV = 0) {
  const g = new THREE.CylinderGeometry(rt, rb, h, seg);
  if (tileU) {
    const uv = g.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * tileU, uv.getY(i) * tileV);
  }
  return g;
}

// 같은 재질의 정적 지오메트리를 하나로 합쳐 드로우콜 절약
export class Batcher {
  constructor() { this.groups = new Map(); }
  add(geo, mat, matrix) {
    let g = geo.index ? geo.toNonIndexed() : geo.clone();
    if (!g.attributes.uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k);
    g.applyMatrix4(matrix);
    if (!this.groups.has(mat)) this.groups.set(mat, []);
    this.groups.get(mat).push(g);
  }
  // 편의: 위치/회전/스케일로 추가
  put(geo, mat, x, y, z, ry = 0, rx = 0, rz = 0, s = 1) {
    _m.compose(_p.set(x, y, z), _q.setFromEuler(_e.set(rx, ry, rz, 'YXZ')), _s.set(s, s, s));
    this.add(geo, mat, _m);
  }
  build(parent, { cast = true, receive = true } = {}) {
    const meshes = [];
    for (const [mat, list] of this.groups) {
      const merged = mergeGeometries(list, false);
      const mesh = new THREE.Mesh(merged, mat);
      mesh.castShadow = cast;
      mesh.receiveShadow = receive;
      parent.add(mesh);
      meshes.push(mesh);
    }
    this.groups.clear();
    return meshes;
  }
}
const _m = new THREE.Matrix4();
const _p = new THREE.Vector3();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _s = new THREE.Vector3();

// 한옥 지붕: 처마가 오목하게 휘고 귀가 들리는 우진각/팔작 형태 근사
// 반환: { top, under, fascia, height(x,z) }
export function roofGeometry({ w, d, h, overhang = 2, lift = 0.7, power = 1.7, seg = 28, thick = 0.28, tile = 2 }) {
  const W = w + overhang * 2, D = d + overhang * 2;
  const half = Math.min(W, D) / 2;
  const height = (x, z) => {
    const dx = W / 2 - Math.abs(x), dz = D / 2 - Math.abs(z);
    const m = Math.max(0, Math.min(dx, dz));
    const t = Math.min(1, m / half);
    let y = h * Math.pow(t, power);
    const u = Math.min(1, Math.abs(x) / (W / 2)), v = Math.min(1, Math.abs(z) / (D / 2));
    y += lift * Math.pow(u * v, 2.2);
    return y;
  };
  const nx = seg, nz = Math.max(6, Math.round((seg * D) / W));
  const pos = [], nor = [], uvs = [];
  const posU = [], norU = [], uvU = [];
  const e = 0.05;
  const nrm = (x, z) => {
    const hx = (height(x + e, z) - height(x - e, z)) / (2 * e);
    const hz = (height(x, z + e) - height(x, z - e)) / (2 * e);
    return new THREE.Vector3(-hx, 1, -hz).normalize();
  };
  const gx = (i) => -W / 2 + (W * i) / nx;
  const gz = (j) => -D / 2 + (D * j) / nz;
  const pushTri = (a, b, c) => {
    const cx = (a[0] + b[0] + c[0]) / 3, cz = (a[1] + b[1] + c[1]) / 3;
    const frontFace = W / 2 - Math.abs(cx) > D / 2 - Math.abs(cz);
    for (const [x, z] of [a, b, c]) {
      const y = height(x, z);
      const n = nrm(x, z);
      pos.push(x, y, z); nor.push(n.x, n.y, n.z);
      if (frontFace) uvs.push(x / tile, (D / 2 - Math.abs(z)) / tile);
      else uvs.push(z / tile, (W / 2 - Math.abs(x)) / tile);
    }
    // 아랫면 (반대 감기, 아래로 두께만큼)
    for (const [x, z] of [a, c, b]) {
      const y = height(x, z) - thick;
      posU.push(x, y, z); norU.push(0, -1, 0);
      uvU.push(x / 2, z / 2);
    }
  };
  for (let i = 0; i < nx; i++) for (let j = 0; j < nz; j++) {
    const a = [gx(i), gz(j)], b = [gx(i + 1), gz(j)], c = [gx(i + 1), gz(j + 1)], dd = [gx(i), gz(j + 1)];
    // 대각선 방향을 중심 기준으로 맞춰 추녀선이 깔끔하게
    const flip = (gx(i) + gx(i + 1)) * (gz(j) + gz(j + 1)) > 0;
    if (flip) { pushTri(a, dd, b); pushTri(b, dd, c); }
    else { pushTri(a, dd, c); pushTri(a, c, b); }
  }
  const top = new THREE.BufferGeometry();
  top.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  top.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  top.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  const under = new THREE.BufferGeometry();
  under.setAttribute('position', new THREE.Float32BufferAttribute(posU, 3));
  under.setAttribute('normal', new THREE.Float32BufferAttribute(norU, 3));
  under.setAttribute('uv', new THREE.Float32BufferAttribute(uvU, 2));

  // 처마 테두리 (위아래를 잇는 띠)
  const fp = [], fn = [], fu = [];
  const ring = [];
  for (let i = 0; i <= nx; i++) ring.push([gx(i), -D / 2, 0, 0, -1]);
  for (let j = 1; j <= nz; j++) ring.push([W / 2, gz(j), 1, 0, 0]);
  for (let i = nx - 1; i >= 0; i--) ring.push([gx(i), D / 2, 0, 0, 1]);
  for (let j = nz - 1; j >= 0; j--) ring.push([-W / 2, gz(j), -1, 0, 0]);
  let acc = 0;
  for (let k = 0; k < ring.length - 1; k++) {
    const [x0, z0] = ring[k], [x1, z1, ax, , az] = ring[k + 1];
    const y0 = height(x0, z0), y1 = height(x1, z1);
    const len = Math.hypot(x1 - x0, z1 - z0);
    const quad = [[x0, y0, z0, acc, 1], [x1, y1, z1, acc + len, 1], [x1, y1 - thick, z1, acc + len, 0], [x0, y0 - thick, z0, acc, 0]];
    for (const idx of [0, 2, 1, 0, 3, 2]) {
      const q = quad[idx];
      fp.push(q[0], q[1], q[2]); fn.push(ax, 0, az); fu.push(q[3] / 4, q[4] * 0.25);
    }
    acc += len;
  }
  const fascia = new THREE.BufferGeometry();
  fascia.setAttribute('position', new THREE.Float32BufferAttribute(fp, 3));
  fascia.setAttribute('normal', new THREE.Float32BufferAttribute(fn, 3));
  fascia.setAttribute('uv', new THREE.Float32BufferAttribute(fu, 2));

  return { top, under, fascia, height, W, D };
}

// 반구형 덮개 등에 쓰는 회전체
export function latheGeo(profile, seg = 12) {
  return new THREE.LatheGeometry(profile.map(([r, y]) => new THREE.Vector2(r, y)), seg);
}
