// 궁궐 마당 레벨: 지오메트리 + 충돌/높이
import * as THREE from 'three';
import { toon, animateMesh, ANIM, shared } from './materials.js';
import { boxGeo, cylGeo, Batcher, roofGeometry, latheGeo } from './geom.js';
import * as T from './textures.js';
import { mulberry32 } from './util.js';
import { buildBamboo, buildTemple } from './worlds2.js';
import { GFX } from './gfx.js';
import * as HD from './hdtex.js';

// 오픈월드: 세 지역을 남북으로 이어 붙임. 궁궐 남문 → 죽림 → 설원 폐사찰
//  ox/oz: 지역 원점의 월드 위치, flip: 180° 돌려 놓음(폐사찰 입구가 죽림 쪽을 보게)
//  x0..z1: 그 지역에서 걸을 수 있는 월드 좌표 범위 (이웃 지역과 살짝 겹쳐서 이어짐)
export const REGIONS = [
  { id: 'palace', ox: 0, oz: 0, flip: false, x0: -21.6, x1: 21.6, z0: -33.3, z1: 30, gate: { z: 21.2, x0: -3.2, x1: 3.2 }, from: -1e9, to: 29.5, spawn: [0, 0.12, 16] },
  { id: 'bamboo', ox: 0, oz: 55.6, flip: false, x0: -19.6, x1: 19.6, z0: 29, z1: 78, from: 29.5, to: 77.2, spawn: [0, 0, 36] },
  { id: 'temple', ox: 0, oz: 98.8, flip: true, x0: -19.6, x1: 19.6, z0: 76.2, z1: 124.4, from: 77.2, to: 1e9, spawn: [0, 0, 84] },
];

export class World {
  constructor(scene) {
    this.scene = scene;
    this.regions = REGIONS;
    // 전체 외곽 (길찾기 격자 범위)
    this.bounds = { x0: -21.6, x1: 21.6, z0: -33.3, z1: 124.4 };
    this.spawn = new THREE.Vector3(0, 0.12, 16);
    this.top = new THREE.Group();
    scene.add(this.top);
    this.rects = [];     // 높이 사각형 {x0,x1,z0,z1,h}
    this.ramps = [];     // 계단 경사 {x0,x1,z0,z1,h0,h1}
    this.blockRects = [];
    this.circles = [];   // {x,z,r}
    this.lanterns = [];  // 밤에 켜지는 빛 위치
    this.glowMats = [];  // 밤에 빛나는 재질 {mat, base}
    this.drums = [];
    this.windows = [];
    this.spawnPoints = [];
    this.gates = {};     // 퀘스트로 열리는 문 {rect, open, t, anim(k)}
    this.makeMaterials();
    for (const R of REGIONS) this.buildRegion(R);
    this.root = this.top;
  }

  // 지역 하나를 제 좌표계(그룹)에 짓고, 충돌·높이 정보를 월드 좌표로 옮김
  buildRegion(R) {
    const g = new THREE.Group();
    g.position.set(R.ox, 0, R.oz);
    if (R.flip) g.rotation.y = Math.PI;
    this.top.add(g);
    this.root = g;
    const n = { rects: this.rects.length, ramps: this.ramps.length, blockRects: this.blockRects.length, circles: this.circles.length, drums: this.drums.length, lanterns: this.lanterns.length, spawnPoints: this.spawnPoints.length };
    if (R.id === 'palace') this.build();
    else if (R.id === 'bamboo') buildBamboo(this);
    else buildTemple(this);
    const f = (x, z) => (R.flip ? [R.ox - x, R.oz - z] : [R.ox + x, R.oz + z]);
    const box = (r) => {
      const [ax, az] = f(r.x0, r.z0), [bx, bz] = f(r.x1, r.z1);
      r.x0 = Math.min(ax, bx); r.x1 = Math.max(ax, bx); r.z0 = Math.min(az, bz); r.z1 = Math.max(az, bz);
    };
    for (const r of this.rects.slice(n.rects)) box(r);
    for (const r of this.blockRects.slice(n.blockRects)) box(r);
    for (const r of this.ramps.slice(n.ramps)) { box(r); if (R.flip) [r.h0, r.h1] = [r.h1, r.h0]; }
    for (const c of this.circles.slice(n.circles)) [c.x, c.z] = f(c.x, c.z);
    const v = (p) => { const [x, z] = f(p.x, p.z); p.x = x; p.z = z; };
    for (const d of this.drums.slice(n.drums)) { v(d.pos); d.region = R.id; }
    for (const p of this.lanterns.slice(n.lanterns)) { v(p); p.region = R.id; }
    for (const p of this.spawnPoints.slice(n.spawnPoints)) v(p);
  }

  // 퀘스트 문: anim(k)는 0(닫힘)~1(열림) 사이 모습을 그림
  addGate(id, rect, anim) {
    this.blockRects.push(rect);
    this.gates[id] = { rect, anim, open: false, k: 0 };
    anim(0);
  }

  // 열고 닫음. 길찾기 격자도 다시 만듦 (instant: 애니메이션 없이)
  setGate(id, open, instant = false) {
    const G = this.gates[id];
    if (!G || G.open === open) return false;
    G.open = open;
    G.rect.off = open;
    if (instant) { G.k = open ? 1 : 0; G.anim(G.k); }
    if (this.nav) this.buildNav();
    return true;
  }

  // 월드 좌표가 속한 지역
  regionAt(x, z) {
    for (const R of REGIONS) if (z >= R.from && z < R.to) return R;
    return REGIONS[0];
  }

  // 어느 지역 안이든 걸을 수 있는 범위인지 (몸체 반경 r 만큼 여유)
  inside(x, z, r = 0) {
    for (const R of REGIONS) {
      if (x < R.x0 + r || x > R.x1 - r || z < R.z0 + r || z > R.z1) continue;
      if (R.gate && z > R.gate.z - r && (x < R.gate.x0 + r || x > R.gate.x1 - r)) continue;
      return true;
    }
    return false;
  }

  dispose() {
    this.scene.remove(this.top);
    this.top.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
  }

  makeMaterials() {
    const c = (hex) => new THREE.Color(hex);
    this.M = {
      floor: toon({ map: T.stoneFloorTex() }),
      slab: toon({ map: T.stoneFloorTex(9, [186, 178, 160], 25) }),
      path: toon({ map: T.pathStoneTex() }),
      block: toon({ map: T.stoneBlockTex() }),
      blockDark: toon({ map: T.stoneBlockTex([140, 134, 120]) }),
      grass: toon({ map: T.grassTex() }),
      dirt: toon({ map: T.dirtTex() }),
      wood: toon({ map: T.woodTex() }),
      darkWood: toon({ map: T.darkWoodTex() }),
      roof: toon({ map: T.roofTileTex() }),
      roofUnder: toon({ map: T.dancheongTex() }),
      fascia: toon({ map: T.dancheongTex(), side: THREE.DoubleSide }),
      ridge: toon({ color: c('#3b4048') }),
      mortar: toon({ color: c('#e2dccb') }),
      dancheong: toon({ map: T.dancheongTex() }),
      plaster: toon({ map: T.plasterTex() }),
      bark: toon({ map: T.barkTex() }),
      leaf: toon({ color: c('#3f6e3e') }),
      leaf2: toon({ color: c('#5f924a') }),
      bronze: toon({ color: c('#6e5a3e') }),
      bronzeDark: toon({ color: c('#3c3226') }),
      gold: toon({ color: c('#d9a83a') }),
      black: toon({ color: c('#2a2624') }),
      stoneLight: toon({ color: c('#bdb5a2') }),
      stoneGrey: toon({ color: c('#a29c8e') }),
      pot: toon({ color: c('#c9b48e') }),
      lotus: toon({ color: c('#4e8a4a') }),
      pink: toon({ color: c('#e889a6') }),
      orange: toon({ color: c('#e88a3a') }),
      blue: toon({ color: c('#2f5aa8') }),
      red: toon({ color: c('#b23a2e') }),
      drumSide: toon({ map: T.drumSideTex() }),
      drumFace: toon({ map: T.drumFaceTex() }),
      medallion: toon({ map: T.medallionTex(), polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 }),
      carving: toon({ map: T.stairCarvingTex() }),
      lattice: toon({ map: T.latticeTex(), emissiveMap: T.latticeTex(true), emissive: c('#000000') }),
      lampGlow: toon({ color: c('#f3e2b8'), emissive: c('#000000') }),
    };
    // 고화질: 주요 바닥·벽·지붕을 고해상도 텍스처 + 노멀맵으로 교체
    if (GFX.hd) {
      const M = this.M;
      const use = (k, t, o = {}) => { M[k] = toon({ ...t, ...o }); };
      use('floor', HD.hdFloor(), { roughness: 0.9 });
      use('slab', HD.hdSlab(), { roughness: 0.9 });
      use('path', HD.hdPath(), { roughness: 0.88 });
      use('block', HD.hdBlock(), { roughness: 0.92 });
      use('blockDark', HD.hdBlock([140, 134, 120]), { roughness: 0.92 });
      use('grass', HD.hdGrass(), { roughness: 1 });
      use('dirt', HD.hdDirt(), { roughness: 1 });
      use('wood', HD.hdWood(), { roughness: 0.6 });
      use('darkWood', HD.hdWood([92, 60, 40]), { roughness: 0.7 });
      use('roof', HD.hdRoof(), { roughness: 0.75 });
      use('plaster', HD.hdPlaster(), { roughness: 0.95 });
      for (const k of ['stoneLight', 'stoneGrey', 'mortar', 'pot']) M[k].roughness = 0.9;
      use('bark', HD.hdBark(), { roughness: 0.95 });
      use('leaf', HD.hdNeedle([46, 84, 50]), { roughness: 0.9 });
      use('leaf2', HD.hdNeedle([68, 108, 60]), { roughness: 0.9 });
      use('medallion', HD.hdMedallion(), { roughness: 0.92, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 });
      for (const k of ['gold', 'bronze', 'bronzeDark']) { M[k].metalness = 0.55; M[k].roughness = 0.45; }
    }
    this.glowMats.push({ mat: this.M.lattice, color: new THREE.Color('#ffb060'), k: 1.1 });
    this.glowMats.push({ mat: this.M.lampGlow, color: new THREE.Color('#ffc070'), k: 1.6 });
  }

  // ---------- 높이 / 충돌 ----------
  heightAt(x, z) {
    let h = 0;
    for (const r of this.rects) if (x >= r.x0 && x <= r.x1 && z >= r.z0 && z <= r.z1 && r.h > h) h = r.h;
    for (const r of this.ramps) {
      if (x >= r.x0 && x <= r.x1 && z >= r.z0 && z <= r.z1) {
        const t = (z - r.z0) / (r.z1 - r.z0);
        const v = r.h0 + (r.h1 - r.h0) * t;
        if (v > h) h = v;
      }
    }
    return h;
  }

  isBlocked(x, z, r, fromH) {
    // 지역 경계 (궁궐은 정문 통로로만 바깥과 이어짐)
    if (!this.inside(x, z, r)) return true;
    for (const b of this.blockRects) if (!b.off && x > b.x0 - r && x < b.x1 + r && z > b.z0 - r && z < b.z1 + r) return true;
    for (const c of this.circles) {
      const dx = x - c.x, dz = z - c.z, rr = c.r + r;
      if (dx * dx + dz * dz < rr * rr && Math.abs((c.y || 0) - fromH) < 1.5) return true;
    }
    const h = this.heightAt(x, z);
    if (Math.abs(h - fromH) > 0.45) return true;
    const k = r * 0.8;
    for (const [ox, oz] of OFFS) if (Math.abs(this.heightAt(x + ox * k, z + oz * k) - h) > 0.45) return true;
    return false;
  }

  // 원형 몸체를 미끄러지듯 이동. 반환: 실제로 움직였는지
  move(pos, dx, dz, r) {
    const len = Math.hypot(dx, dz);
    const steps = Math.max(1, Math.ceil(len / 0.15));
    const sx = dx / steps, sz = dz / steps;
    let moved = false;
    // 이미 장애물에 박혀 있으면(소환·밀림 등) 높이 규칙만 지키며 빠져나오게 허용
    const h0 = this.heightAt(pos.x, pos.z);
    if (this.isBlocked(pos.x, pos.z, r, h0)) {
      const nx = pos.x + dx, nz = pos.z + dz;
      if (Math.abs(this.heightAt(nx, nz) - h0) <= 0.45 && this.inside(nx, nz)) { pos.x = nx; pos.z = nz; return true; }
    }
    for (let i = 0; i < steps; i++) {
      const h = this.heightAt(pos.x, pos.z);
      if (!this.isBlocked(pos.x + sx, pos.z + sz, r, h)) { pos.x += sx; pos.z += sz; moved = true; }
      else if (sx && !this.isBlocked(pos.x + sx, pos.z, r, h)) { pos.x += sx; moved = true; }
      else if (sz && !this.isBlocked(pos.x, pos.z + sz, r, h)) { pos.z += sz; moved = true; }
      else break;
    }
    return moved;
  }

  randomWalkable(cx, cz, rMin, rMax, tries = 30) {
    for (let i = 0; i < tries; i++) {
      const a = Math.random() * Math.PI * 2, d = rMin + Math.random() * (rMax - rMin);
      const x = cx + Math.cos(a) * d, z = cz + Math.sin(a) * d;
      const h = this.heightAt(x, z);
      // 궁궐 남문 통로 밖으로는 소환하지 않음
      if (!this.isBlocked(x, z, 0.5, h) && this.inside(x, z, 1.5) && !(z > 20 && z < 30)) return new THREE.Vector3(x, h, z);
    }
    return null;
  }

  // ---------- 빌드 ----------
  build() {
    const M = this.M;
    const B = (this.batch = new Batcher());
    const R = mulberry32(77);
    this.foliage = new Batcher();

    // 바깥 풀밭 (성벽 밖)
    // 남쪽은 죽림 바닥과 이어지므로 z=30 까지만
    const outer = new THREE.Mesh(new THREE.PlaneGeometry(160, 110), M.dirt);
    outer.geometry.attributes.uv.array.forEach((v, i, a) => (a[i] = v * (i % 2 === 0 ? 80 : 55)));
    outer.rotation.x = -Math.PI / 2;
    outer.position.set(0, -0.02, -25);
    outer.receiveShadow = true;
    this.root.add(outer);

    // 마당 박석
    const floorGeo = new THREE.PlaneGeometry(48, 58);
    floorGeo.attributes.uv.array.forEach((v, i, a) => (a[i] = v * (i % 2 === 0 ? 12 : 14.5)));
    const floor = new THREE.Mesh(floorGeo, M.floor);
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(0, 0, -6);
    floor.receiveShadow = true;
    this.root.add(floor);

    // 어도 (가운데 길)
    B.add(boxGeo(5.2, 0.12, 24.6, 4), M.path, mat4(0, 0.06, 8.7));
    this.rects.push({ x0: -2.6, x1: 2.6, z0: -3.6, z1: 21, h: 0.12 });
    // 정문 밖 길
    B.add(boxGeo(5.2, 0.08, 10, 4), M.path, mat4(0, 0.04, 27));
    this.rects.push({ x0: -2.6, x1: 2.6, z0: 21, z1: 32, h: 0.08 });

    // 월대 1, 2
    this.terrace(-15, 15, -14, -6, 0.9);
    this.terrace(-12, 12, -22, -13, 1.8);
    this.stairs(-6, -3.6, 0.9, 0);
    this.stairs(-13, -10.6, 1.8, 0.9);

    // 난간
    this.balustrade(-15, -6, -2.9, -6, 0.9);
    this.balustrade(2.9, -6, 15, -6, 0.9);
    this.balustrade(-15, -14, -15, -6, 0.9);
    this.balustrade(15, -14, 15, -6, 0.9);
    this.balustrade(-12, -13, -2.9, -13, 1.8);
    this.balustrade(2.9, -13, 12, -13, 1.8);
    this.balustrade(-12, -22, -12, -13, 1.8);
    this.balustrade(12, -22, 12, -13, 1.8);

    // 해태상
    for (const s of [-1, 1]) {
      this.haetae(s * 3.3, 0.9, -6.5, s);
      this.haetae(s * 3.3, 1.8, -13.5, s);
    }

    // 전각
    this.hall();

    // 드무 (방화수 솥)
    for (const s of [-1, 1]) this.cauldron(s * 6.2, 0.9, -8.2);
    for (const s of [-1, 1]) this.cauldron(s * 10.5, 1.8, -15.2);

    // 깃발
    for (const s of [-1, 1]) {
      this.flag(s * 5.4, 1.8, -13.45, 'red', s);
      this.flag(s * 4.6, 0.9, -8.6, 'white', s);
      this.flag(s * 4.8, 0, 1.2, 'red', s);
      this.flag(s * 4.8, 0, 9.5, 'white', s);
      this.flag(s * 19.5, 0, -24, 'navy', s);
      this.flag(s * 20, 0, -11, 'navy', s);
      this.flag(s * 20, 0, 18, 'navy', s);
    }

    // 큰 북
    for (const s of [-1, 1]) this.drum(s * 10.5, 4.2, s);

    // 바닥 문양
    for (const s of [-1, 1]) {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(6, 6), M.medallion);
      m.rotation.x = -Math.PI / 2;
      m.position.set(s * 17, 0.012, 4.2);
      m.receiveShadow = true;
      this.root.add(m);
    }

    // 화단 + 소나무
    this.planter(-14.6, -6, -6, -1.4);
    this.planter(6, 14.6, -6, -1.4);
    this.planter(-14, -7.4, 9.2, 14.2);
    this.planter(7.4, 14, 9.2, 14.2);
    this.pine(-11.2, 0.3, -3.6, 1.15, 3);
    this.pine(11.4, 0.3, -3.4, 1.1, 4);
    this.pine(-10.6, 0.3, 11.8, 0.85, 5);
    this.pine(10.8, 0.3, 11.6, 0.8, 6);
    this.shrub(-7.4, 0.3, -2.6); this.shrub(7.6, 0.3, -2.4); this.shrub(-13.2, 0.3, -2.2); this.shrub(13, 0.3, -4.6);
    this.shrub(-8.4, 0.3, 13.1); this.shrub(8.6, 0.3, 10.2);

    // 뒤뜰 나무
    for (const [x, z, s, sd] of [[-16, -28, 1.2, 11], [15, -27, 1.3, 12], [-5, -30, 1.0, 13], [6, -31, 0.95, 14], [17.5, -18.5, 0.9, 15], [-17.5, -18, 0.95, 16]]) this.pine(x, 0, z, s, sd);
    // 성 밖 나무
    for (const [x, z, s, sd] of [[-12, 27, 1.2, 21], [11, 28, 1.3, 22], [-30, 10, 1.3, 27], [31, -5, 1.2, 28], [-31, -20, 1.2, 29], [30, 15, 1.1, 30]]) this.pine(x, 0, z, s, sd, false);

    // 화분 받침
    for (const s of [-1, 1]) {
      this.flowerPot(s * 3.7, 4.6);
      this.flowerPot(s * 3.7, 13.4);
      this.flowerPot(s * 3.7, -1.6);
    }

    // 석등
    for (const s of [-1, 1]) {
      this.stoneLantern(s * 7.6, 0, 17.2);
      this.stoneLantern(s * 16.5, 0, -2.2);
      this.stoneLantern(s * 16.5, 0, 12);
      this.stoneLantern(s * 10.9, 1.8, -21);
      this.stoneLantern(s * 13.6, 0.9, -7);
    }
    this.stoneLantern(-11, 0, -26);
    this.stoneLantern(11, 0, -24);

    // 연못
    this.pond(-21, -15, -31.2, -24.6);

    // 행각과 담장
    this.corridor(-1);
    this.corridor(1);
    this.northWall();
    this.southWall();

    // 풀
    this.scatterGrass();

    B.build(this.root);
    const fol = this.foliage.build(this.root);
    for (const m of fol) animateMesh(m, ANIM.foliage);

    // 적 등장 지점 (정문 밖)
    this.spawnPoints.push(new THREE.Vector3(0, 0, 25), new THREE.Vector3(-1.5, 0, 26), new THREE.Vector3(1.5, 0, 26));
  }

  terrace(x0, x1, z0, z1, h) {
    const M = this.M, B = this.batch;
    const w = x1 - x0, d = z1 - z0;
    // 측면(석축)과 윗면(박석)
    const g = boxGeo(w, h, d, 2);
    const top = boxGeo(w, 0.001, d, 4);
    B.add(g, M.block, mat4((x0 + x1) / 2, h / 2, (z0 + z1) / 2));
    B.add(top, M.slab, mat4((x0 + x1) / 2, h + 0.001, (z0 + z1) / 2));
    // 갑석 (윗단 테두리)
    B.add(boxGeo(w + 0.3, 0.14, 0.4, 2), M.stoneLight, mat4((x0 + x1) / 2, h - 0.05, z1 + 0.05));
    this.rects.push({ x0, x1, z0, z1, h });
  }

  stairs(zTop, zBot, hTop, hBot) {
    const M = this.M, B = this.batch;
    const n = 6;
    const depth = (zBot - zTop) / n;
    const dh = (hTop - hBot) / n;
    for (let k = 0; k < n; k++) {
      const hh = hTop - dh * (k + 1) + dh; // 이 단의 윗면 높이
      const z = zTop + depth * (k + 0.5);
      const y0 = hBot - 0.2;
      const geo = boxGeo(5.2, hh - y0, depth, 2);
      B.add(geo, k % 2 ? M.stoneLight : M.stoneGrey, mat4(0, (hh + y0) / 2, z));
    }
    // 답도 + 소맷돌
    const len = Math.hypot(zBot - zTop, hTop - hBot);
    const ang = Math.atan2(hTop - hBot, zBot - zTop);
    const cz = (zTop + zBot) / 2, cy = (hTop + hBot) / 2;
    const carve = boxGeo(1.4, 0.12, len, 2);
    const uv = carve.attributes.uv;
    for (let i = 8; i < 12; i++) uv.setXY(i, (i % 2), i < 10 ? 1 : 0); // 윗면에 조각 텍스처 꽉 차게
    B.add(carve, M.carving, mat4(0, cy + 0.06, cz, 0, ang));
    for (const s of [-1, 1]) B.add(boxGeo(0.45, 0.4, len + 0.2, 2), M.stoneLight, mat4(s * 2.82, cy + 0.12, cz, 0, ang));
    this.ramps.push({ x0: -2.6, x1: 2.6, z0: zTop, z1: zBot, h0: hTop, h1: hBot });
  }

  balustrade(x0, z0, x1, z1, y) {
    const M = this.M, B = this.batch;
    const len = Math.hypot(x1 - x0, z1 - z0);
    const ry = Math.atan2(-(z1 - z0), x1 - x0);
    const n = Math.max(1, Math.round(len / 1.6));
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      const x = x0 + (x1 - x0) * t, z = z0 + (z1 - z0) * t;
      B.add(boxGeo(0.24, 0.62, 0.24, 2), M.stoneLight, mat4(x, y + 0.31, z));
      B.add(boxGeo(0.3, 0.1, 0.3, 2), M.stoneGrey, mat4(x, y + 0.65, z));
    }
    const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
    B.add(boxGeo(len, 0.08, 0.12, 2), M.stoneLight, mat4(cx, y + 0.5, cz, ry));
    B.add(boxGeo(len, 0.18, 0.08, 2), M.stoneGrey, mat4(cx, y + 0.14, cz, ry));
  }

  haetae(x, y, z, s) {
    const M = this.M, B = this.batch;
    B.add(boxGeo(0.7, 0.3, 0.9, 2), M.stoneGrey, mat4(x, y + 0.15, z));
    B.add(new THREE.SphereGeometry(0.32, 8, 6), M.stoneLight, mat4(x, y + 0.6, z, 0, 0, 0, [1, 0.9, 1.25]));
    B.add(new THREE.SphereGeometry(0.27, 8, 6), M.stoneLight, mat4(x, y + 0.95, z + 0.25));
    B.add(new THREE.SphereGeometry(0.12, 6, 4), M.stoneGrey, mat4(x - 0.12, y + 1.15, z + 0.2));
    B.add(new THREE.SphereGeometry(0.12, 6, 4), M.stoneGrey, mat4(x + 0.12, y + 1.15, z + 0.2));
    B.add(boxGeo(0.12, 0.3, 0.12, 2), M.stoneLight, mat4(x - 0.15, y + 0.45, z + 0.3));
    B.add(boxGeo(0.12, 0.3, 0.12, 2), M.stoneLight, mat4(x + 0.15, y + 0.45, z + 0.3));
    this.circles.push({ x, z, r: 0.45, y });
  }

  hall() {
    const M = this.M, B = this.batch;
    const y0 = 2.1, zc = -18.5;
    // 기단
    B.add(boxGeo(19.4, 0.3, 6.2, 2), M.block, mat4(0, 1.95, zc));
    B.add(boxGeo(19.6, 0.06, 6.4, 2), M.stoneLight, mat4(0, 2.1, zc));
    this.blockRects.push({ x0: -9.7, x1: 9.7, z0: -21.6, z1: -15.4 });
    // 내부 몸체
    B.add(boxGeo(17.6, 3.5, 4.6, 2), M.darkWood, mat4(0, y0 + 1.75, zc));
    // 기둥
    const colGeo = cylGeo(0.24, 0.27, 3.6, 10, 1, 1);
    for (let i = 0; i <= 6; i++) {
      const x = -9 + i * 3;
      B.add(colGeo, M.wood, mat4(x, y0 + 1.8, -16));
      B.add(colGeo, M.wood, mat4(x, y0 + 1.8, -21));
      B.add(cylGeo(0.36, 0.38, 0.14, 10), M.stoneLight, mat4(x, y0 + 0.07, -16));
    }
    for (const s of [-1, 1]) B.add(colGeo, M.wood, mat4(s * 9, y0 + 1.8, -18.5));
    // 창호 (앞면)
    for (let i = 0; i < 6; i++) {
      const x = -7.5 + i * 3;
      for (const k of [-0.62, 0.62]) {
        B.add(new THREE.BoxGeometry(1.22, 3.3, 0.08), M.lattice, mat4(x + k, y0 + 1.68, -16.18));
      }
      B.add(boxGeo(2.76, 0.12, 0.14, 2), M.wood, mat4(x, y0 + 3.38, -16.15));
      B.add(boxGeo(2.76, 0.1, 0.14, 2), M.wood, mat4(x, y0 + 0.05, -16.15));
    }
    // 창호 (옆면)
    for (const s of [-1, 1]) for (const z of [-17.25, -19.75]) {
      B.add(new THREE.BoxGeometry(0.08, 3.3, 2.3), M.lattice, mat4(s * 8.85, y0 + 1.68, z));
    }
    this.hallLightPos = [new THREE.Vector3(-4.5, 3.8, -15.0), new THREE.Vector3(4.5, 3.8, -15.0)];
    // 창방·평방 단청
    B.add(boxGeo(18.8, 0.42, 5.8, 4), M.dancheong, mat4(0, 5.9, zc));
    B.add(boxGeo(19.6, 0.4, 6.6, 4), M.dancheong, mat4(0, 6.3, zc));
    // 공포 (처마 밑 촘촘한 블록)
    for (let i = 0; i <= 24; i++) {
      const x = -9.6 + i * 0.8;
      for (const z of [-15.1, -21.9]) {
        B.add(boxGeo(0.3, 0.26, 0.6, 1), i % 2 ? M.dancheong : M.red, mat4(x, 6.58, z));
      }
    }
    for (let i = 0; i <= 8; i++) for (const s of [-1, 1]) B.add(boxGeo(0.6, 0.26, 0.3, 1), i % 2 ? M.dancheong : M.red, mat4(s * 9.95, 6.58, -21.7 + i * 0.8));
    // 아래 지붕
    this.roof({ cx: 0, cy: 6.72, cz: zc, w: 19.6, d: 6.4, h: 1.5, overhang: 1.5, lift: 0.7, ridge: false });
    // 2층
    B.add(boxGeo(13.2, 2.1, 2.9, 2), M.darkWood, mat4(0, 8.35, zc));
    for (let i = 0; i < 6; i++) {
      const x = -5.5 + i * 2.2;
      B.add(new THREE.BoxGeometry(1.7, 1.25, 0.06), M.lattice, mat4(x, 8.55, zc + 1.48));
    }
    for (let i = 0; i <= 6; i++) {
      B.add(cylGeo(0.17, 0.17, 2.1, 8), M.wood, mat4(-6.6 + i * 2.2, 8.35, zc + 1.5));
    }
    B.add(boxGeo(14, 0.4, 3.6, 4), M.dancheong, mat4(0, 9.55, zc));
    // 위 지붕
    this.roof({ cx: 0, cy: 9.8, cz: zc, w: 14, d: 3.6, h: 2.4, overhang: 1.9, lift: 0.85, ridge: true });
  }

  roof({ cx, cy, cz, w, d, h, overhang, lift, ridge, power = 1.7, tile = 2, rot = 0 }) {
    const M = this.M;
    const r = roofGeometry({ w, d, h, overhang, lift, power, tile });
    const g = new THREE.Group();
    g.position.set(cx, cy, cz);
    g.rotation.y = rot;
    const top = new THREE.Mesh(r.top, M.roof);
    const under = new THREE.Mesh(r.under, M.roofUnder);
    const fascia = new THREE.Mesh(r.fascia, M.fascia);
    for (const m of [top, under, fascia]) { m.castShadow = true; m.receiveShadow = true; g.add(m); }
    // 용마루 + 추녀마루
    const W = r.W, D = r.D;
    const ridgeLen = Math.max(0.5, W - D);
    if (ridge) {
      const rg = new THREE.Mesh(boxGeo(ridgeLen + 0.6, 0.5, 0.5, 2), M.ridge);
      rg.position.set(0, h + 0.2, 0);
      const band = new THREE.Mesh(boxGeo(ridgeLen + 0.3, 0.2, 0.56, 2), M.mortar);
      band.position.set(0, h + 0.05, 0);
      g.add(rg, band);
      for (const s of [-1, 1]) {
        const orn = new THREE.Mesh(boxGeo(0.5, 0.8, 0.6, 1), M.ridge);
        orn.position.set(s * (ridgeLen / 2 + 0.3), h + 0.45, 0);
        orn.rotation.z = s * 0.15;
        g.add(orn);
      }
    }
    // 추녀마루
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      const start = new THREE.Vector3(sx * ridgeLen / 2, 0, 0);
      const end = new THREE.Vector3(sx * W / 2, 0, sz * D / 2);
      const N = 7;
      let prev = null;
      for (let i = 0; i <= N; i++) {
        const t = 0.02 + (i / N) * 0.96;
        const x = start.x + (end.x - start.x) * t, z = start.z + (end.z - start.z) * t;
        const p = new THREE.Vector3(x, r.height(x, z) + 0.12, z);
        if (prev) {
          const mid = prev.clone().add(p).multiplyScalar(0.5);
          const len = prev.distanceTo(p);
          const seg = new THREE.Mesh(boxGeo(0.32, 0.26, len + 0.08, 1), M.ridge);
          seg.position.copy(mid);
          seg.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), p.clone().sub(prev).normalize());
          seg.castShadow = true;
          g.add(seg);
        }
        prev = p;
      }
      // 잡상 몇 개
      for (let k = 0; k < 3; k++) {
        const t = 0.62 + k * 0.1;
        const x = start.x + (end.x - start.x) * t, z = start.z + (end.z - start.z) * t;
        const fig = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.24, 0.16), M.ridge);
        fig.position.set(x, r.height(x, z) + 0.36, z);
        g.add(fig);
      }
    }
    this.root.add(g);
    return { group: g, r };
  }

  cauldron(x, y, z) {
    const M = this.M, B = this.batch;
    B.add(boxGeo(1.2, 0.2, 1.2, 2), M.stoneGrey, mat4(x, y + 0.1, z));
    const bowl = latheGeo([[0.0, 0], [0.42, 0.02], [0.58, 0.25], [0.62, 0.55], [0.56, 0.72], [0.62, 0.78], [0.5, 0.78]], 12);
    B.add(bowl, M.bronze, mat4(x, y + 0.2, z));
    B.add(new THREE.CircleGeometry(0.5, 12), M.bronzeDark, mat4(x, y + 0.9, z, 0, -Math.PI / 2));
    for (const s of [-1, 1]) B.add(new THREE.TorusGeometry(0.12, 0.035, 4, 8), M.bronzeDark, mat4(x + s * 0.6, y + 0.6, z, Math.PI / 2));
    this.circles.push({ x, z, r: 0.7, y });
  }

  flag(x, y, z, kind, side) {
    const M = this.M, B = this.batch;
    const h = 4.4;
    B.add(boxGeo(0.7, 0.28, 0.7, 1), M.black, mat4(x, y + 0.14, z));
    B.add(boxGeo(0.4, 0.4, 0.4, 1), M.darkWood, mat4(x, y + 0.48, z));
    B.add(cylGeo(0.055, 0.07, h, 6), M.black, mat4(x, y + h / 2, z));
    B.add(new THREE.ConeGeometry(0.1, 0.35, 6), M.gold, mat4(x, y + h + 0.15, z));
    // 깃발 (깃대 쪽이 로컬 x=-0.5)
    const fw = GFX.hd ? 1.5 : 1.1, fh = GFX.hd ? 1.9 : 1.4;
    const geo = new THREE.PlaneGeometry(fw, fh, 10, 6);
    const mat = toon({ map: GFX.hd ? HD.hdBanner(kind).map : T.bannerTex(kind), side: THREE.DoubleSide, roughness: 0.95 });
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x + side * (fw / 2 + 0.05), y + h - fh * 0.62, z);
    if (side < 0) m.scale.x = -1;
    m.rotation.y = side < 0 ? 0.25 : -0.25;
    m.castShadow = true;
    m.receiveShadow = true;
    animateMesh(m, ANIM.flag);
    this.root.add(m);
    this.circles.push({ x, z, r: 0.4, y });
  }

  drum(x, z, side) {
    const M = this.M, B = this.batch;
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = side * 0.5;
    // 받침대
    const legGeo = boxGeo(0.18, 2.2, 0.18, 1);
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      const leg = new THREE.Mesh(legGeo, M.wood);
      leg.position.set(sx * 0.75, 1.0, sz * 0.75);
      leg.rotation.set(sz * 0.12, 0, -sx * 0.12);
      g.add(leg);
    }
    for (const sz of [-1, 1]) {
      const bar = new THREE.Mesh(boxGeo(1.7, 0.14, 0.14, 1), M.wood);
      bar.position.set(0, 0.35, sz * 0.8);
      g.add(bar);
    }
    const body = new THREE.Group();
    body.position.y = 2.15;
    const barrel = new THREE.Mesh(latheGeo([[0.95, -0.75], [1.08, -0.4], [1.12, 0], [1.08, 0.4], [0.95, 0.75]], 18), M.drumSide);
    barrel.rotation.x = Math.PI / 2;
    body.add(barrel);
    for (const s of [-1, 1]) {
      const face = new THREE.Mesh(new THREE.CircleGeometry(0.95, 18), M.drumFace);
      face.position.z = s * 0.76;
      face.rotation.y = s > 0 ? 0 : Math.PI;
      body.add(face);
      // 징 박힌 테
      for (let k = 0; k < 14; k++) {
        const a = (k / 14) * Math.PI * 2;
        const stud = new THREE.Mesh(new THREE.SphereGeometry(0.05, 4, 3), M.gold);
        stud.position.set(Math.cos(a) * 0.97, Math.sin(a) * 0.97, s * 0.66);
        body.add(stud);
      }
    }
    // 위 장식
    const crown = new THREE.Mesh(new THREE.ConeGeometry(0.25, 0.6, 6), M.gold);
    crown.position.y = 1.35;
    body.add(crown);
    g.add(body);
    g.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    this.root.add(g);
    this.circles.push({ x, z, r: 1.25, y: 0 });
    this.drums.push({ group: g, body, pos: new THREE.Vector3(x, 0, z), shake: 0, label: '북', sound: 'drum', reach: 2.9, promptY: 4.0 });
  }

  planter(x0, x1, z0, z1) {
    const M = this.M, B = this.batch;
    const w = x1 - x0, d = z1 - z0, cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
    const bh = 0.32, bw = 0.3;
    B.add(boxGeo(w, bh, bw, 2), M.stoneLight, mat4(cx, bh / 2, z0 + bw / 2));
    B.add(boxGeo(w, bh, bw, 2), M.stoneLight, mat4(cx, bh / 2, z1 - bw / 2));
    B.add(boxGeo(bw, bh, d - bw * 2, 2), M.stoneLight, mat4(x0 + bw / 2, bh / 2, cz));
    B.add(boxGeo(bw, bh, d - bw * 2, 2), M.stoneLight, mat4(x1 - bw / 2, bh / 2, cz));
    // 모서리 돌기둥
    for (const [x, z] of [[x0, z0], [x1, z0], [x0, z1], [x1, z1]]) {
      B.add(boxGeo(0.42, 0.46, 0.42, 1), M.stoneGrey, mat4(x + (x === x0 ? 0.15 : -0.15), 0.23, z + (z === z0 ? 0.15 : -0.15)));
    }
    B.add(boxGeo(w - bw * 2, 0.26, d - bw * 2, 2), M.grass, mat4(cx, 0.13, cz));
    this.rects.push({ x0, x1, z0, z1, h: 0.3 });
    this.grassAreas = this.grassAreas || [];
    this.grassAreas.push({ x0: x0 + bw, x1: x1 - bw, z0: z0 + bw, z1: z1 - bw, y: 0.26 });
  }

  pine(x, y, z, s, seed, collide = true, snowy = false) {
    const B = this.batch, F = this.foliage, M = this.M;
    const R = mulberry32(seed * 97 + 3);
    const up = new THREE.Vector3(0, 1, 0);
    let p = new THREE.Vector3(x, y, z);
    let dir = new THREE.Vector3((R() - 0.5) * 0.5, 1, (R() - 0.5) * 0.5).normalize();
    const segs = 5;
    const segLen = 0.9 * s;
    let r0 = 0.3 * s;
    const pts = [];
    for (let i = 0; i < segs; i++) {
      const r1 = r0 * 0.8;
      const end = p.clone().addScaledVector(dir, segLen);
      const geo = new THREE.CylinderGeometry(r1, r0, segLen * 1.05, 7);
      const q = new THREE.Quaternion().setFromUnitVectors(up, dir);
      B.add(geo, M.bark, new THREE.Matrix4().compose(p.clone().add(end).multiplyScalar(0.5), q, new THREE.Vector3(1, 1, 1)));
      pts.push(end.clone());
      p = end;
      r0 = r1;
      // 줄기가 구불구불
      dir.x += (R() - 0.5) * 0.7;
      dir.z += (R() - 0.5) * 0.5;
      dir.y = 1;
      dir.normalize();
    }
    const pad = (c, sx, sy, sz, mat) => {
      // 고화질: 가장자리가 들쭉날쭉한 납작한 솔잎층 (분재 소나무 느낌), 도트: 둥근 잎뭉치
      const geo = GFX.hd ? needlePad(R) : new THREE.IcosahedronGeometry(1, 1);
      const k = GFX.hd ? 1.12 : 1;
      F.add(geo, mat, new THREE.Matrix4().compose(c, new THREE.Quaternion().setFromEuler(new THREE.Euler((R() - 0.5) * 0.15, R() * 6, (R() - 0.5) * 0.15)), new THREE.Vector3(sx * k, sy * (GFX.hd ? 0.9 : 1), sz * k)));
    };
    // 가지 + 잎뭉치 (우산형)
    for (let i = 2; i < segs; i++) {
      const base = pts[i - 1];
      const nb = 2;
      for (let b = 0; b < nb; b++) {
        const a = R() * Math.PI * 2;
        const L = (1.2 + R() * 1.0) * s * (1 - (i - 2) * 0.18) * (GFX.hd ? 1.2 : 1);
        const bd = new THREE.Vector3(Math.cos(a), 0.25 + R() * 0.3, Math.sin(a)).normalize();
        const end = base.clone().addScaledVector(bd, L);
        const geo = new THREE.CylinderGeometry(0.06 * s, 0.11 * s, L, 5);
        const q = new THREE.Quaternion().setFromUnitVectors(up, bd);
        B.add(geo, M.bark, new THREE.Matrix4().compose(base.clone().add(end).multiplyScalar(0.5), q, new THREE.Vector3(1, 1, 1)));
        const ps = (0.8 + R() * 0.4) * s * (GFX.hd ? 0.6 : 1);
        if (GFX.hd) {
          // 분재처럼: 가지 끝마다 납작한 솔잎층 두세 겹, 줄기가 비쳐 보이게
          pad(end.clone().add(new THREE.Vector3(0, 0.05 * s, 0)), 1.25 * ps, 0.32 * ps, 1.05 * ps, M.leaf);
          pad(end.clone().add(new THREE.Vector3((R() - 0.5) * 0.3, 0.32 * s, (R() - 0.5) * 0.3)), 0.85 * ps, 0.26 * ps, 0.75 * ps, snowy ? M.snowLeaf : M.leaf2);
          if (R() < 0.5) pad(end.clone().add(new THREE.Vector3(0, 0.55 * s, 0)), 0.5 * ps, 0.2 * ps, 0.45 * ps, snowy ? M.snowLeaf : M.leaf2);
        } else {
          pad(end.clone().add(new THREE.Vector3(0, 0.15 * s, 0)), 1.25 * ps, 0.42 * ps, 1.05 * ps, M.leaf);
          pad(end.clone().add(new THREE.Vector3(0.1, 0.42 * s, 0.05)), 0.85 * ps, 0.3 * ps, 0.75 * ps, snowy ? M.snowLeaf : M.leaf2);
        }
      }
    }
    const top = pts[segs - 1];
    pad(top.clone().add(new THREE.Vector3(0, 0.2 * s, 0)), 1.5 * s, 0.5 * s, 1.3 * s, M.leaf);
    pad(top.clone().add(new THREE.Vector3(0.1, 0.55 * s, 0)), 1.0 * s, 0.35 * s, 0.9 * s, snowy ? M.snowLeaf : M.leaf2);
    if (collide) this.circles.push({ x, z, r: 0.45 * s, y });
  }

  shrub(x, y, z) {
    const F = this.foliage, M = this.M;
    const R = mulberry32(Math.floor(x * 31 + z * 7));
    for (let i = 0; i < 3; i++) {
      F.add(new THREE.IcosahedronGeometry(1, 1), i ? M.leaf2 : M.leaf, new THREE.Matrix4().compose(
        new THREE.Vector3(x + (R() - 0.5) * 0.6, y + 0.3 + i * 0.12, z + (R() - 0.5) * 0.6), new THREE.Quaternion(), new THREE.Vector3(0.55, 0.42, 0.5)));
    }
  }

  flowerPot(x, z) {
    const M = this.M, B = this.batch;
    B.add(boxGeo(0.7, 0.5, 0.7, 2), M.stoneLight, mat4(x, 0.25, z));
    B.add(boxGeo(0.8, 0.08, 0.8, 2), M.stoneGrey, mat4(x, 0.52, z));
    B.add(latheGeo([[0.18, 0], [0.3, 0.1], [0.34, 0.3], [0.3, 0.38]], 10), M.pot, mat4(x, 0.56, z));
    const R = mulberry32(Math.floor(x * 13 + z * 5 + 99));
    for (let i = 0; i < 6; i++) {
      const a = R() * Math.PI * 2, d = R() * 0.2;
      B.add(new THREE.IcosahedronGeometry(0.09, 0), i % 3 ? M.pink : M.orange, mat4(x + Math.cos(a) * d, 0.98 + R() * 0.1, z + Math.sin(a) * d));
    }
    B.add(new THREE.IcosahedronGeometry(0.22, 0), M.leaf2, mat4(x, 0.9, z));
    this.circles.push({ x, z, r: 0.45, y: 0 });
  }

  stoneLantern(x, y, z) {
    const M = this.M, B = this.batch;
    B.add(cylGeo(0.42, 0.46, 0.2, 8), M.stoneGrey, mat4(x, y + 0.1, z));
    B.add(cylGeo(0.3, 0.38, 0.16, 8), M.stoneLight, mat4(x, y + 0.28, z));
    B.add(cylGeo(0.13, 0.15, 0.9, 8), M.stoneLight, mat4(x, y + 0.8, z));
    B.add(cylGeo(0.36, 0.2, 0.2, 8), M.stoneLight, mat4(x, y + 1.32, z));
    // 화사석 (빛나는 창)
    B.add(cylGeo(0.22, 0.22, 0.42, 8), M.lampGlow, mat4(x, y + 1.63, z));
    for (let k = 0; k < 4; k++) {
      const a = (k / 4) * Math.PI * 2 + Math.PI / 4;
      B.add(boxGeo(0.1, 0.44, 0.1, 1), M.stoneLight, mat4(x + Math.cos(a) * 0.24, y + 1.63, z + Math.sin(a) * 0.24));
    }
    B.add(new THREE.ConeGeometry(0.52, 0.32, 8), M.stoneGrey, mat4(x, y + 2.0, z));
    B.add(new THREE.SphereGeometry(0.1, 6, 4), M.stoneGrey, mat4(x, y + 2.22, z));
    this.lanterns.push(new THREE.Vector3(x, y + 1.65, z));
    this.circles.push({ x, z, r: 0.45, y });
  }

  pond(x0, x1, z0, z1) {
    const M = this.M, B = this.batch;
    const w = x1 - x0, d = z1 - z0, cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
    const b = 0.4, h = 0.35;
    B.add(boxGeo(w, h, b, 2), M.blockDark, mat4(cx, h / 2, z0 + b / 2));
    B.add(boxGeo(w, h, b, 2), M.blockDark, mat4(cx, h / 2, z1 - b / 2));
    B.add(boxGeo(b, h, d - 2 * b, 2), M.blockDark, mat4(x0 + b / 2, h / 2, cz));
    B.add(boxGeo(b, h, d - 2 * b, 2), M.blockDark, mat4(x1 - b / 2, h / 2, cz));
    const water = new THREE.Mesh(new THREE.PlaneGeometry(w - 2 * b, d - 2 * b), waterMaterial());
    water.rotation.x = -Math.PI / 2;
    water.position.set(cx, 0.2, cz);
    this.root.add(water);
    this.water = water;
    const R = mulberry32(5);
    for (let i = 0; i < 9; i++) {
      const x = x0 + 0.9 + R() * (w - 1.8), z = z0 + 0.9 + R() * (d - 1.8);
      const r = 0.3 + R() * 0.25;
      B.add(cylGeo(r, r, 0.03, 9), M.lotus, mat4(x, 0.23, z));
      if (R() < 0.45) {
        B.add(new THREE.ConeGeometry(0.12, 0.22, 5), M.pink, mat4(x + 0.1, 0.36, z));
      }
    }
    this.blockRects.push({ x0: x0 - 0.1, x1: x1 + 0.1, z0: z0 - 0.1, z1: z1 + 0.1 });
  }

  corridor(side) {
    const M = this.M, B = this.batch;
    const xIn = side * 22, xOut = side * 26.2;
    const cx = (xIn + xOut) / 2;
    const z0 = -34, z1 = 22, len = z1 - z0, cz = (z0 + z1) / 2;
    B.add(boxGeo(4.4, 0.5, len, 2), M.block, mat4(cx, 0.25, cz));
    B.add(boxGeo(4.4, 0.02, len, 4), M.slab, mat4(cx, 0.51, cz));
    // 뒷벽
    B.add(boxGeo(0.4, 3.6, len, 2), M.plaster, mat4(side * 25.9, 2.3, cz));
    // 기둥 + 인방
    const colGeo = cylGeo(0.17, 0.19, 3.3, 8);
    for (let z = z0 + 1; z <= z1 - 1; z += 3) {
      B.add(colGeo, M.wood, mat4(side * 22.5, 2.15, z));
      B.add(boxGeo(0.4, 0.14, 0.4, 1), M.stoneLight, mat4(side * 22.5, 0.56, z));
    }
    B.add(boxGeo(0.3, 0.36, len, 4), M.dancheong, mat4(side * 22.5, 3.85, cz));
    this.roof({ cx: side * 24.2, cy: 4.05, cz, w: 3.8, d: len, h: 1.25, overhang: 1.0, lift: 0, ridge: true, power: 1.5 });
  }

  northWall() {
    const M = this.M, B = this.batch;
    B.add(boxGeo(44, 3.2, 0.6, 2), M.plaster, mat4(0, 1.6, -33.9));
    this.roof({ cx: 0, cy: 3.2, cz: -33.9, w: 44, d: 0.5, h: 0.5, overhang: 0.55, lift: 0, ridge: true, power: 1.2 });
  }

  southWall() {
    const M = this.M, B = this.batch;
    for (const s of [-1, 1]) {
      const x0 = s * 3.9, x1 = s * 22;
      const cx = (x0 + x1) / 2, w = Math.abs(x1 - x0);
      B.add(boxGeo(w, 1.2, 0.7, 2), M.block, mat4(cx, 0.6, 21.9));
      B.add(boxGeo(w + 0.1, 0.12, 0.85, 2), M.stoneLight, mat4(cx, 1.26, 21.9));
      this.blockRects.push({ x0: Math.min(x0, x1), x1: Math.max(x0, x1), z0: 21.4, z1: 22.4 });
      // 정문 기둥
      B.add(boxGeo(0.7, 3.4, 0.7, 1), M.wood, mat4(s * 3.6, 1.7, 21.9));
      B.add(boxGeo(1, 0.3, 1, 1), M.stoneLight, mat4(s * 3.6, 0.15, 21.9));
      this.circles.push({ x: s * 3.6, z: 21.9, r: 0.5, y: 0 });
    }
    B.add(boxGeo(7.9, 0.5, 0.8, 4), M.dancheong, mat4(0, 3.5, 21.9));
    this.roof({ cx: 0, cy: 3.75, cz: 21.9, w: 8, d: 1.1, h: 0.9, overhang: 0.8, lift: 0.3, ridge: true });
    // 남문 문짝: 궁을 지키기 전엔 닫혀 있음 (퀘스트로 열림). 경첩은 기둥 쪽
    const doors = [];
    for (const s of [-1, 1]) {
      const hinge = new THREE.Group();
      hinge.position.set(s * 3.25, 0, 21.9);
      const leaf = new THREE.Mesh(boxGeo(3.2, 3.1, 0.14, 2), M.darkWood);
      leaf.position.set(-s * 1.6, 1.6, 0);
      const band = new THREE.Mesh(boxGeo(3.2, 0.12, 0.17, 1), M.bronzeDark);
      band.position.set(-s * 1.6, 2.3, 0);
      const band2 = band.clone(); band2.position.y = 0.9;
      const knob = new THREE.Mesh(new THREE.SphereGeometry(0.1, 6, 4), M.gold);
      knob.position.set(-s * 3.0, 1.6, 0.12);
      hinge.add(leaf, band, band2, knob);
      hinge.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
      this.root.add(hinge);
      doors.push([hinge, s]);
    }
    this.addGate('south', { x0: -3.25, x1: 3.25, z0: 21.6, z1: 22.2 }, (k) => {
      // 바깥(남쪽)으로 활짝 열림
      for (const [h, s] of doors) h.rotation.y = s * k * 1.75;
    });
  }

  scatterGrass() {
    const areas = this.grassAreas;
    let total = 0;
    for (const a of areas) total += Math.floor((a.x1 - a.x0) * (a.z1 - a.z0) * 26);
    const blade = new THREE.BufferGeometry();
    blade.setAttribute('position', new THREE.Float32BufferAttribute([-0.05, 0, 0, 0.05, 0, 0, 0.0, 0.38, 0], 3));
    blade.setAttribute('normal', new THREE.Float32BufferAttribute([0, 1, 0, 0, 1, 0, 0, 1, 0], 3));
    blade.setAttribute('color', new THREE.Float32BufferAttribute([0.55, 0.62, 0.5, 0.55, 0.62, 0.5, 1.15, 1.12, 0.95], 3));
    const mat = toon({ color: 0xffffff, vertexColors: true, side: THREE.DoubleSide });
    const mesh = new THREE.InstancedMesh(blade, mat, total);
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
    const col = new THREE.Color();
    const R = mulberry32(99);
    const greens = ['#6f9c48', '#5d8c3e', '#86ad52', '#7aa04a'].map((h) => new THREE.Color(h));
    let i = 0;
    for (const a of areas) {
      const n = Math.floor((a.x1 - a.x0) * (a.z1 - a.z0) * 26);
      for (let k = 0; k < n; k++) {
        const x = a.x0 + R() * (a.x1 - a.x0), z = a.z0 + R() * (a.z1 - a.z0);
        e.set(0, R() * Math.PI, 0);
        const s = 0.7 + R() * 0.7;
        m4.compose(new THREE.Vector3(x, a.y, z), q.setFromEuler(e), new THREE.Vector3(s, s * (0.8 + R() * 0.6) * (GFX.hd ? 0.55 : 1), s));
        mesh.setMatrixAt(i, m4);
        const patch = Math.sin(x * 0.7) * Math.cos(z * 0.9) * 0.5 + 0.5;
        col.copy(greens[Math.floor(R() * greens.length)]).lerp(new THREE.Color('#a8b85a'), patch * 0.35);
        if (R() < 0.015) col.set(R() < 0.5 ? '#f2eee0' : '#f0c850');
        mesh.setColorAt(i, col);
        i++;
      }
    }
    mesh.receiveShadow = true;
    mesh.castShadow = false;
    mesh.userData.noOutline = true;
    animateMesh(mesh, ANIM.grass, { shadow: false });
    this.root.add(mesh);
  }

  // ---------- 길찾기: 격자 + 플레이어 기준 흐름장(다익스트라) ----------
  // 작은 몸체(일반 도깨비)와 큰 몸체(대왕)용 통행 가능 격자를 따로 만든다
  buildNav() {
    const bd = this.bounds;
    const cs = 0.5, x0 = Math.floor(bd.x0) - 0.5, z0 = Math.floor(bd.z0) - 0.5;
    const nx = Math.ceil((bd.x1 - x0 + 0.5) / cs), nz = Math.ceil((bd.z1 - z0 + 0.5) / cs);
    const N = nx * nz;
    const h = new Float32Array(N);
    const ok = [new Uint8Array(N), new Uint8Array(N)];
    for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) {
      const x = x0 + (i + 0.5) * cs, z = z0 + (j + 0.5) * cs;
      const k = j * nx + i;
      const hh = (h[k] = this.heightAt(x, z));
      ok[0][k] = this.isBlocked(x, z, NAV_R[0], hh) ? 0 : 1;
      ok[1][k] = this.isBlocked(x, z, NAV_R[1], hh) ? 0 : 1;
    }
    this.nav = { cs, x0, z0, nx, nz, h, ok, dist: [new Float32Array(N), new Float32Array(N)], target: [-1, -1], heap: new Int32Array(N * 8), hd: new Float32Array(N * 8) };
  }

  navCell(x, z) {
    const n = this.nav;
    const i = Math.floor((x - n.x0) / n.cs), j = Math.floor((z - n.z0) / n.cs);
    if (i < 0 || j < 0 || i >= n.nx || j >= n.nz) return -1;
    return j * n.nx + i;
  }

  // 두 칸 사이를 지날 수 있는지 (높이 차가 작아야 함: 계단은 통과, 월대 벽은 불가)
  navLink(a, b, big) {
    const n = this.nav;
    return n.ok[big][b] && Math.abs(n.h[a] - n.h[b]) <= 0.35;
  }

  // 플레이어 위치로 향하는 흐름장 갱신 (목표 칸이 바뀔 때만)
  updateFlow(tx, tz, big) {
    const n = this.nav;
    if (!n) return;
    let t = this.navCell(tx, tz);
    if (t < 0) return;
    if (!n.ok[big][t]) {
      // 목표가 막힌 칸이면 가까운 열린 칸으로
      let best = -1, bd = 1e9;
      const ti = t % n.nx, tj = Math.floor(t / n.nx);
      for (let dj = -4; dj <= 4; dj++) for (let di = -4; di <= 4; di++) {
        const i = ti + di, j = tj + dj;
        if (i < 0 || j < 0 || i >= n.nx || j >= n.nz) continue;
        const k = j * n.nx + i;
        if (n.ok[big][k] && Math.abs(n.h[k] - n.h[t]) < 0.5 && di * di + dj * dj < bd) { bd = di * di + dj * dj; best = k; }
      }
      if (best < 0) return;
      t = best;
    }
    if (n.target[big] === t) return;
    n.target[big] = t;
    const D = n.dist[big];
    D.fill(Infinity);
    D[t] = 0;
    // 이진 힙 다익스트라
    const heap = n.heap, hd = n.hd;
    let size = 0;
    const push = (k, d) => {
      let i = size++;
      while (i > 0) { const p = (i - 1) >> 1; if (hd[p] <= d) break; heap[i] = heap[p]; hd[i] = hd[p]; i = p; }
      heap[i] = k; hd[i] = d;
    };
    const pop = () => {
      const top = heap[0];
      const lk = heap[--size], ld = hd[size];
      let i = 0;
      while (true) {
        let c = 2 * i + 1;
        if (c >= size) break;
        if (c + 1 < size && hd[c + 1] < hd[c]) c++;
        if (hd[c] >= ld) break;
        heap[i] = heap[c]; hd[i] = hd[c]; i = c;
      }
      heap[i] = lk; hd[i] = ld;
      return top;
    };
    push(t, 0);
    const nx = n.nx;
    while (size > 0) {
      const d0 = hd[0];
      const a = pop();
      if (d0 > D[a]) continue;
      if (d0 > 140) break; // 70유닛 밖은 계산하지 않음 (넓은 오픈월드)
      const ai = a % nx, aj = (a - ai) / nx;
      for (let k = 0; k < 8; k++) {
        const di = NDI[k], dj = NDJ[k];
        const i = ai + di, j = aj + dj;
        if (i < 0 || j < 0 || i >= nx || j >= n.nz) continue;
        const b = j * nx + i;
        if (!this.navLink(a, b, big)) continue;
        // 대각선은 양옆 칸이 모두 열려 있어야 (모서리 끼임 방지)
        if (di && dj && (!this.navLink(a, aj * nx + i, big) || !this.navLink(a, j * nx + ai, big))) continue;
        const nd = d0 + (di && dj ? 1.4142 : 1);
        if (nd < D[b]) { D[b] = nd; push(b, nd); }
      }
    }
  }

  // 흐름장을 따라 몇 칸 앞을 내다본 이동 방향. 길이 없으면 null
  navDir(pos, big) {
    const n = this.nav;
    if (!n) return null;
    let c = this.navCell(pos.x, pos.z);
    if (c < 0) return null;
    const D = n.dist[big];
    if (!isFinite(D[c])) {
      // 내 칸이 막힌 칸(벽에 살짝 걸침)이면 이웃 중 가장 좋은 칸에서 시작
      let best = -1, bd = Infinity;
      const ci = c % n.nx, cj = Math.floor(c / n.nx);
      for (let k = 0; k < 8; k++) {
        const i = ci + NDI[k], j = cj + NDJ[k];
        if (i < 0 || j < 0 || i >= n.nx || j >= n.nz) continue;
        const b = j * n.nx + i;
        if (D[b] < bd && Math.abs(n.h[b] - n.h[c]) <= 0.5) { bd = D[b]; best = b; }
      }
      if (best < 0) return null;
      c = best;
    }
    // 내리막을 따라 최대 6칸(3유닛)까지 경로를 따라간 뒤,
    // 그중 곧장 갈 수 있는 가장 먼 칸을 목표로 (모서리를 억지로 질러가다 걸리지 않게)
    const path = [];
    let cur = c;
    for (let s = 0; s < 6; s++) {
      const ci = cur % n.nx, cj = (cur - ci) / n.nx;
      let best = cur, bd = D[cur];
      for (let k = 0; k < 8; k++) {
        const i = ci + NDI[k], j = cj + NDJ[k];
        if (i < 0 || j < 0 || i >= n.nx || j >= n.nz) continue;
        const b = j * n.nx + i;
        if (D[b] < bd && this.navLink(cur, b, big)) { bd = D[b]; best = b; }
      }
      if (best === cur) break;
      cur = best;
      path.push(cur);
    }
    if (!path.length) return null;
    const center = (k) => { const ti = k % n.nx, tj = (k - ti) / n.nx; return [n.x0 + (ti + 0.5) * n.cs, n.z0 + (tj + 0.5) * n.cs]; };
    let tx, tz;
    for (let s = path.length - 1; s >= 0; s--) {
      [tx, tz] = center(path[s]);
      if (s === 0 || this.clearLine(pos.x, pos.z, tx, tz, NAV_R[big])) break;
    }
    const dx = tx - pos.x, dz = tz - pos.z;
    const l = Math.hypot(dx, dz);
    if (l < 0.05) return null;
    return { x: dx / l, z: dz / l, dist: D[c] * n.cs };
  }

  // 두 점 사이를 장애물 없이 곧장 갈 수 있는지
  clearLine(ax, az, bx, bz, r) {
    const len = Math.hypot(bx - ax, bz - az);
    const steps = Math.ceil(len / 0.35);
    let prevH = this.heightAt(ax, az);
    for (let s = 1; s <= steps; s++) {
      const t = s / steps;
      const x = ax + (bx - ax) * t, z = az + (bz - az) * t;
      if (this.isBlocked(x, z, r, prevH)) return false;
      prevH = this.heightAt(x, z);
    }
    return true;
  }

  setNight(n) {
    for (const g of this.glowMats) g.mat.emissive.copy(g.color).multiplyScalar(n * g.k);
  }

  update(dt, t) {
    for (const G of Object.values(this.gates)) {
      const tk = G.open ? 1 : 0;
      if (G.k !== tk) { G.k = tk > G.k ? Math.min(1, G.k + dt * 0.8) : Math.max(0, G.k - dt * 0.8); G.anim(G.k); }
    }
    for (const d of this.drums) {
      if (d.shake > 0) {
        d.shake = Math.max(0, d.shake - dt * 2.5);
        const s = d.shake;
        d.body.scale.set(1 + Math.sin(t * 60) * 0.05 * s, 1 + Math.sin(t * 60 + 1) * 0.05 * s, 1);
        d.body.rotation.z = Math.sin(t * 40) * 0.04 * s;
      }
    }
    if (this.water) this.water.material.uniforms.uNight.value = shared.night.value;
  }
}

const OFFS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
// 길찾기·장애물 충돌용 몸체 반경 (일반 도깨비, 대왕)
export const NAV_R = [0.36, 0.7];
const NDI = [1, -1, 0, 0, 1, 1, -1, -1];
const NDJ = [0, 0, 1, -1, 1, -1, 1, -1];

// 두 바닥 사이를 도트 디더링으로 섞는 띠: zSolid 쪽은 꽉 차고 zClear 쪽으로 갈수록 성기게 사라짐
let ditherCache = null;
function ditherAlpha() {
  if (ditherCache) return ditherCache;
  const W = 16, H = 96;
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  const g = c.getContext('2d');
  const img = g.createImageData(W, H);
  const bayer = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const k = y / (H - 1); // 0 = 위(북) 투명, 1 = 아래(남) 불투명
    const n = (Math.sin(x * 12.9 + y * 78.2) * 43758.5) % 1;
    const th = (bayer[(y % 4) * 4 + (x % 4)] + 0.5) / 16 * 0.7 + Math.abs(n) * 0.3;
    const v = k > th ? 255 : 0;
    const i = (y * W + x) * 4;
    img.data[i] = img.data[i + 1] = img.data[i + 2] = v; img.data[i + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.magFilter = t.minFilter = THREE.NearestFilter;
  t.generateMipmaps = false;
  t.wrapS = THREE.RepeatWrapping;
  ditherCache = t;
  return t;
}

export function blendStrip(W, baseMat, x0, x1, zSolid, zClear, y = -0.01) {
  const w = x1 - x0, d = Math.abs(zSolid - zClear);
  const map = baseMat.map.clone();
  map.needsUpdate = true;
  map.wrapS = map.wrapT = THREE.RepeatWrapping;
  map.repeat.set(w / 2, d / 2);
  const alpha = ditherAlpha().clone();
  alpha.needsUpdate = true;
  alpha.repeat.set(w, 1);
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), toon({ map, alphaMap: alpha, alphaTest: 0.5 }));
  m.rotation.x = -Math.PI / 2;
  // 판의 위쪽(uv.y=1)이 북쪽(-z): 불투명한 쪽이 남쪽이 아니면 뒤집음
  if (zSolid < zClear) m.rotation.z = Math.PI;
  m.position.set((x0 + x1) / 2, y, (zSolid + zClear) / 2);
  m.receiveShadow = true;
  W.root.add(m);
  return m;
}

// 솔잎층 하나: 위는 낮은 돔, 아래는 납작, 가장자리는 들쭉날쭉 (반지름 1 기준)
const padCache = [];
function needlePad(R) {
  const v = Math.floor(R() * 4);
  if (padCache[v]) return padCache[v];
  const seg = 22, pos = [], uv = [], idx = [];
  const rr = [];
  for (let i = 0; i < seg; i++) rr.push(0.82 + Math.random() * 0.3 + (i % 2) * 0.1);
  pos.push(0, 0.42, 0); uv.push(0.5, 0.5);
  for (let i = 0; i < seg; i++) {
    const a = (i / seg) * Math.PI * 2;
    pos.push(Math.cos(a) * rr[i] * 0.62, 0.3, Math.sin(a) * rr[i] * 0.62); uv.push(0.5 + Math.cos(a) * 0.3, 0.5 + Math.sin(a) * 0.3);
  }
  for (let i = 0; i < seg; i++) {
    const a = (i / seg) * Math.PI * 2;
    pos.push(Math.cos(a) * rr[i], 0, Math.sin(a) * rr[i]); uv.push(0.5 + Math.cos(a) * 0.5, 0.5 + Math.sin(a) * 0.5);
  }
  pos.push(0, -0.16, 0); uv.push(0.5, 0.5);
  const top = 0, mid = 1, out = 1 + seg, bot = 1 + seg * 2;
  for (let i = 0; i < seg; i++) {
    const j = (i + 1) % seg;
    idx.push(top, mid + j, mid + i);
    idx.push(mid + i, mid + j, out + j, mid + i, out + j, out + i);
    idx.push(bot, out + i, out + j);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  padCache[v] = g.toNonIndexed();
  padCache[v].computeVertexNormals();
  return padCache[v];
}

export function mat4(x, y, z, ry = 0, rx = 0, rz = 0, s = null) {
  const m = new THREE.Matrix4();
  const sc = Array.isArray(s) ? new THREE.Vector3(...s) : new THREE.Vector3(1, 1, 1);
  m.compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz, 'YXZ')), sc);
  return m;
}

export function waterMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: { uTime: shared.time, uNight: { value: 0 } },
    vertexShader: `
      varying vec3 vW;
      void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: `
      uniform float uTime; uniform float uNight;
      varying vec3 vW;
      vec3 lin(vec3 c){ return pow(c, vec3(2.2)); }
      void main(){
        vec2 p = floor(vW.xz * 16.0) / 16.0;
        float w = sin(p.x * 3.1 + uTime * 1.3) + sin(p.y * 2.3 - uTime * 1.1) + sin((p.x + p.y) * 4.7 + uTime * 2.0) * 0.5;
        vec3 deep = vec3(0.16, 0.36, 0.42);
        vec3 c = deep;
        if (w > 1.2) c = vec3(0.30, 0.55, 0.58);
        if (w > 1.75) c = vec3(0.70, 0.86, 0.84);
        if (w < -1.3) c = vec3(0.11, 0.27, 0.33);
        c = lin(c);
        c *= mix(1.0, 0.35, uNight);
        gl_FragColor = vec4(c, 1.0);
      }`,
  });
}
