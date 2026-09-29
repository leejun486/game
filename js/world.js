'use strict';
// World: tile map generation, terrain rendering (chunked), props, collision, minimap.
const World = (() => {
  const T = D.TILE, W = D.MAP_W, H = D.MAP_H;
  const GRASS = 0, DIRT = 1, STONE = 2, GRAVE = 3, SAND = 4, WATER = 5, FOREST = 6, ROAD = 7, CLIFF = 8, DUNGEON = 9, SNOW = 10, ICE = 11, TRAIL = 12;
  const tiles = new Uint8Array(W * H);
  const solid = new Uint8Array(W * H);
  const props = [];
  const buckets = new Map(); // tile key -> props with collision
  const SEED = 1337;

  const tileAt = (tx, ty) => (tx < 0 || ty < 0 || tx >= W || ty >= H ? CLIFF : tiles[ty * W + tx]);
  const zoneAt = (x, y) => {
    const tx = x / T, ty = y / T;
    for (const z of D.ZONES) if (z.test(tx, ty)) return z;
    return D.ZONES[D.ZONES.length - 1];
  };

  // ---------------------------------------------------------------- generation
  function generate() {
    for (let ty = 0; ty < H; ty++) {
      for (let tx = 0; tx < W; tx++) {
        const z = zoneAt(tx * T + 32, ty * T + 32).id;
        const n = U.fbm(tx * 0.08, ty * 0.08, SEED, 3);
        let t = GRASS;
        if (z === 'town') t = STONE;
        else if (z === 'dungeon') t = DUNGEON;
        else if (z === 'field') t = n > 0.62 ? DIRT : GRASS;
        else if (z === 'forest') t = n > 0.66 ? GRASS : FOREST;
        else if (z === 'grave') t = n > 0.6 ? FOREST : GRAVE;
        else if (z === 'orc') t = n > 0.64 ? DIRT : SAND;
        else if (z === 'snow') t = SNOW;
        tiles[ty * W + tx] = t;
      }
    }
    // lake in the west forest + a pond in the field
    const lake = (cx, cy, rx, ry) => {
      for (let ty = cy - ry - 3; ty <= cy + ry + 3; ty++) for (let tx = cx - rx - 3; tx <= cx + rx + 3; tx++) {
        const d = Math.hypot((tx - cx) / rx, (ty - cy) / ry) + (U.fbm(tx * 0.2, ty * 0.2, SEED + 5, 2) - 0.5) * 0.5;
        if (d < 1 && tx >= 0 && ty >= 0 && tx < W && ty < H) tiles[ty * W + tx] = WATER;
      }
    };
    lake(34, 96, 15, 11);
    lake(20, 40, 8, 6);
    lake(62, 30, 6, 4);
    // roads out of the town gates
    const road = (x0, y0, x1, y1, w) => {
      const len = Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0));
      for (let i = 0; i <= len; i++) {
        const cx = Math.round(U.lerp(x0, x1, i / len) + (U.vnoise(i * 0.15, 0, SEED + 9) - 0.5) * 3);
        const cy = Math.round(U.lerp(y0, y1, i / len) + (U.vnoise(0, i * 0.15, SEED + 11) - 0.5) * 3);
        for (let oy = -w; oy <= w; oy++) for (let ox = -w; ox <= w; ox++) {
          const tx = cx + ox, ty = cy + oy;
          if (tx < 0 || ty < 0 || tx >= W || ty >= H) continue;
          const cur = tiles[ty * W + tx];
          if (cur !== WATER && cur !== STONE) tiles[ty * W + tx] = DIRT;
        }
      }
    };
    road(90, 74, 92, 8, 1); road(106, 90, 172, 86, 1); road(90, 106, 90, 172, 1); road(74, 90, 52, 94, 1);
    road(90, 60, 60, 72, 1);
    road(60, 72, 44, 52, 1); road(44, 52, 24, 12, 1); // trail up into the snowfield
    // snowfield: lakes freeze over (walkable ice), the trail is packed snow
    for (let ty = 0; ty < H; ty++) for (let tx = 0; tx < W; tx++) {
      if (zoneAt(tx * T + 32, ty * T + 32).id !== 'snow') continue;
      const i = ty * W + tx;
      if (tiles[i] === WATER) tiles[i] = ICE;
      else if (tiles[i] === DIRT) tiles[i] = TRAIL;
    }
    // cobbled streets inside town
    for (let ty = 75; ty <= 105; ty++) for (let tx = 75; tx <= 105; tx++) {
      if (Math.abs(tx - 90) <= 1 || Math.abs(ty - 90) <= 1) {
        if (Math.hypot(tx - 90, ty - 90) > 6) tiles[ty * W + tx] = ROAD;
      }
    }
    for (let i = 0; i < W * H; i++) solid[i] = tiles[i] === WATER ? 1 : 0;
    placeProps();
    buildDungeon();
  }

  function addProp(type, x, y, r = 0, extra = {}) {
    const p = Object.assign({ type, x, y, r, v: Math.floor(U.hash(Math.floor(x), Math.floor(y), 3) * 4) }, extra);
    props.push(p);
    if (r > 0) {
      const tx = Math.floor(x / T), ty = Math.floor(y / T);
      const k = ty * W + tx;
      if (!buckets.has(k)) buckets.set(k, []);
      buckets.get(k).push(p);
    }
    return p;
  }

  function freeTile(tx, ty, margin = 0) {
    for (let oy = -margin; oy <= margin; oy++) for (let ox = -margin; ox <= margin; ox++) {
      const t = tileAt(tx + ox, ty + oy);
      if (t === WATER || t === CLIFF || t === DIRT || t === ROAD || t === STONE || t === TRAIL) return false;
    }
    return true;
  }
  const nearSpawn = (tx, ty) => D.SPAWNS.some((s) => Math.hypot(tx - s.x, ty - s.y) < s.r * 0.7);

  function placeProps() {
    const r = U.rng(SEED);
    const cx = 90 * T, cy = 90 * T;
    // --- town walls with 4 gates ---
    for (let i = -15; i <= 15; i++) {
      const gate = Math.abs(i) <= 1;
      if (!gate) {
        addWall(90 + i, 75); addWall(90 + i, 105);
        addWall(75, 90 + i); addWall(105, 90 + i);
      } else {
        // gate posts
      }
    }
    for (const [gx, gy] of [[88, 75], [92, 75], [88, 105], [92, 105], [75, 88], [75, 92], [105, 88], [105, 92]]) {
      addProp('torch', gx * T + 32, gy * T + 70, 0);
    }
    // --- plaza: portal circle, well, torches around ---
    addProp('portal', cx, cy, 0, { ground: true });
    for (let a = 0; a < 8; a++) {
      const ang = (a / 8) * Math.PI * 2 + Math.PI / 8;
      addProp('torch', cx + Math.cos(ang) * 330, cy + Math.sin(ang) * 330, 10);
    }
    // market (east side)
    const stalls = [[7, -1, 0], [7, 3, 1], [7, 7, 2], [7, -5, 3], [-7, -1, 1], [-7, 4, 0]];
    for (const [dx, dy, v] of stalls) addProp('stall', cx + dx * T, cy + dy * T, 34, { v });
    // crates & barrels sprinkled
    for (let i = 0; i < 40; i++) {
      const dx = (r() * 26 - 13), dy = (r() * 26 - 13);
      if (Math.hypot(dx, dy) < 8 || Math.abs(dx) < 2.5 || Math.abs(dy) < 2.5) continue;
      if (NPC_SPOTS.some(([nx, ny]) => Math.hypot(nx - dx, ny - dy) < 2)) continue;
      addProp(r() < 0.5 ? 'crate' : 'barrel', cx + dx * T, cy + dy * T, 16);
    }
    // houses in town corners
    for (const [hx, hy] of [[-11, -11], [11, -11], [-11, 11], [11, 11], [-5, -12], [5, 12], [-12, 7], [12, -7]]) {
      addProp('house', cx + hx * T, cy + hy * T, 60, { v: Math.abs(hx + hy) % 3 });
    }
    // --- nature ---
    for (let ty = 1; ty < H - 1; ty++) {
      for (let tx = 1; tx < W - 1; tx++) {
        const z = zoneAt(tx * T, ty * T).id;
        if (z === 'town' || z === 'dungeon') continue;
        const t = tileAt(tx, ty);
        if (!freeTile(tx, ty, 1)) continue;
        const spawnArea = nearSpawn(tx, ty);
        const roll = r();
        const x = tx * T + r() * T, y = ty * T + r() * T;
        if (z === 'forest') {
          if (roll < (spawnArea ? 0.05 : 0.22)) addProp(r() < 0.55 ? 'pine' : 'tree', x, y, 20);
          else if (roll < 0.26) addProp('bush', x, y, 0);
          else if (roll < 0.28) addProp('rock', x, y, 16);
        } else if (z === 'field') {
          if (roll < (spawnArea ? 0.015 : 0.06)) addProp('tree', x, y, 20);
          else if (roll < 0.1) addProp('bush', x, y, 0);
          else if (roll < 0.115) addProp('rock', x, y, 16);
          else if (roll < 0.2) addProp('flowers', x, y, 0, { ground: true });
        } else if (z === 'grave') {
          if (roll < 0.05) addProp('tomb', x, y, 14);
          else if (roll < 0.065) addProp('cross', x, y, 8);
          else if (roll < (spawnArea ? 0.075 : 0.1)) addProp('deadtree', x, y, 16);
          else if (roll < 0.12) addProp('bones', x, y, 0, { ground: true });
          else if (roll < 0.13) addProp('rock', x, y, 16);
        } else if (z === 'snow') {
          if (Math.hypot(tx - 22, ty - 8) < 9) continue; // keep the giant's arena open
          if (t === ICE) { if (roll < 0.01) addProp('icecrystal', x, y, 16); continue; }
          if (roll < (spawnArea ? 0.03 : 0.13)) addProp('snowpine', x, y, 20);
          else if (roll < (spawnArea ? 0.04 : 0.16)) addProp('icecrystal', x, y, 16);
          else if (roll < 0.18) addProp('snowrock', x, y, 16);
          else if (roll < 0.2) addProp('snowdrift', x, y, 0, { ground: true });
        } else if (z === 'orc') {
          if (roll < 0.012) addProp('tent', x, y, 40);
          else if (roll < 0.02) addProp('bonfire', x, y, 18);
          else if (roll < 0.04) addProp('rock', x, y, 16);
          else if (roll < 0.06) addProp('bones', x, y, 0, { ground: true });
          else if (roll < (spawnArea ? 0.065 : 0.08)) addProp('deadtree', x, y, 16);
        }
      }
    }
    // orc fortress palisade ring (south) with an opening on the north side
    const fx = 90, fy = 140, fr = 22;
    for (let a = 0; a < 360; a += 2.2) {
      const rad = (a * Math.PI) / 180;
      if (Math.abs(a - 270) < 12) continue; // north gate
      const x = (fx + Math.cos(rad) * fr) * T, y = (fy + Math.sin(rad) * fr * 0.75) * T;
      const tx = Math.floor(x / T), ty = Math.floor(y / T);
      if (tileAt(tx, ty) === WATER) continue;
      addProp('palisade', x, y, 24);
    }
    // boss arenas
    addProp('altar', 165 * T, 86 * T, 0, { ground: true });
    addProp('altar', 90 * T, 168 * T, 0, { ground: true });
    addProp('altar', 22 * T, 8 * T, 0, { ground: true, frost: true });
    for (let a = 0; a < 6; a++) { const ang = (a / 6) * Math.PI * 2; addProp('icecrystal', (22 + Math.cos(ang) * 6) * T, (8 + Math.sin(ang) * 4.5) * T, 16); }
  }
  // 이클립스 균열: a walled arena only reachable through the dungeon teleport
  function buildDungeon() {
    const { x0, y0, x1, y1 } = D.DUNGEON_RECT;
    // clear anything the nature pass may have put right outside the walls
    for (let i = props.length - 1; i >= 0; i--) {
      const p = props[i], tx = p.x / T, ty = p.y / T;
      if (tx > x0 - 2 && tx < x1 + 2 && ty > y0 - 2 && ty < y1 + 3) props.splice(i, 1);
    }
    for (const [k, list] of buckets) {
      buckets.set(k, list.filter((p) => props.includes(p)));
    }
    for (let tx = x0; tx <= x1; tx++) { addWall(tx, y0); addWall(tx, y1); }
    for (let ty = y0 + 1; ty < y1; ty++) { addWall(x0, ty); addWall(x1, ty); }
    const cx = D.DUNGEON_CENTER.x * T, cy = D.DUNGEON_CENTER.y * T;
    addProp('rift', cx, cy, 0, { ground: true });
    for (const [dx, dy] of [[-8, -6], [8, -6], [-8, 6], [8, 6], [-12, 0], [12, 0]]) addProp('pillar', cx + dx * T, cy + dy * T, 22);
    for (const [dx, dy] of [[-12, -10], [12, -10], [-12, 10], [12, 10]]) addProp('brazier', cx + dx * T, cy + dy * T, 16);
  }
  const NPC_SPOTS = D.NPCS.map((n) => [n.dx, n.dy]);

  function addWall(tx, ty) {
    solid[ty * W + tx] = 1;
    addProp('wall', tx * T + 32, ty * T + 60, 0);
  }

  // ---------------------------------------------------------------- collision
  function blocked(x, y, rad = 14) {
    if (x < rad || y < rad || x > W * T - rad || y > H * T - rad) return true;
    const tx0 = Math.floor((x - rad) / T), tx1 = Math.floor((x + rad) / T);
    const ty0 = Math.floor((y - rad) / T), ty1 = Math.floor((y + rad) / T);
    for (let ty = ty0; ty <= ty1; ty++) for (let tx = tx0; tx <= tx1; tx++) {
      if (solid[ty * W + tx]) {
        // circle vs tile rect
        const nx = U.clamp(x, tx * T, tx * T + T), ny = U.clamp(y, ty * T, ty * T + T);
        if ((x - nx) ** 2 + (y - ny) ** 2 < rad * rad) return true;
      }
    }
    const ctx = Math.floor(x / T), cty = Math.floor(y / T);
    for (let ty = cty - 1; ty <= cty + 1; ty++) for (let tx = ctx - 1; tx <= ctx + 1; tx++) {
      const b = buckets.get(ty * W + tx);
      if (!b) continue;
      for (const p of b) if ((p.x - x) ** 2 + (p.y - y) ** 2 < (p.r + rad) ** 2) return true;
    }
    return false;
  }
  function findFree(x, y, rad = 14) {
    if (!blocked(x, y, rad)) return { x, y };
    for (let d = 16; d < 600; d += 16) {
      for (let a = 0; a < 16; a++) {
        const nx = x + Math.cos((a / 16) * Math.PI * 2) * d, ny = y + Math.sin((a / 16) * Math.PI * 2) * d;
        if (!blocked(nx, ny, rad)) return { x: nx, y: ny };
      }
    }
    return { x, y };
  }

  // ---------------------------------------------------------------- terrain rendering
  const CH = 512; // chunk size in world px
  const RES = 2; // world px per texel
  const chunks = new Map();

  const PAL = {
    [GRASS]: [78, 112, 54], [FOREST]: [50, 82, 42], [DIRT]: [124, 100, 70], [STONE]: [170, 154, 130],
    [ROAD]: [140, 128, 110], [DUNGEON]: [58, 52, 66], [GRAVE]: [74, 70, 64], [SAND]: [178, 148, 100], [WATER]: [38, 78, 112], [CLIFF]: [30, 30, 30], [SNOW]: [214, 224, 236], [ICE]: [150, 196, 226], [TRAIL]: [176, 182, 192],
  };

  function texel(wx, wy) {
    // jitter the lookup so tile borders are organic
    const jx = (U.vnoise(wx * 0.02, wy * 0.02, 71) - 0.5) * 44;
    const jy = (U.vnoise(wx * 0.02, wy * 0.02, 93) - 0.5) * 44;
    const tx = Math.floor((wx + jx) / T), ty = Math.floor((wy + jy) / T);
    let t = tileAt(tx, ty);
    const trueT = tileAt(Math.floor(wx / T), Math.floor(wy / T));
    if (trueT === STONE || trueT === ROAD) t = trueT; // keep crisp town edges
    if ((t === WATER) !== (trueT === WATER)) t = trueT; // collision must match visuals
    let [r, g, b] = PAL[t];
    const n = U.fbm(wx * 0.012, wy * 0.012, 7, 3);
    const fine = U.hash(Math.floor(wx / RES), Math.floor(wy / RES), 5);
    let k = 0.8 + n * 0.4 + (fine - 0.5) * 0.08;
    if (t === STONE) {
      // flagstones in offset rows
      const sz = 40, row = Math.floor(wy / sz);
      const off = (row % 2) * (sz / 2);
      const sx = Math.floor((wx + off) / sz);
      const lx = (wx + off) - sx * sz, ly = wy - row * sz;
      const edge = lx < 3 || ly < 3;
      const sv = U.hash(sx, row, 13);
      k = 0.86 + sv * 0.18 + (fine - 0.5) * 0.06 + (n - 0.5) * 0.15;
      if (edge) k *= 0.62;
      // circular plaza rings
      const d = Math.hypot(wx - D.TOWN.x, wy - D.TOWN.y);
      if (d < 420) {
        const ring = d % 70;
        if (ring < 3) k *= 0.7;
        r += 6; g += 4;
      }
    } else if (t === DUNGEON) {
      const sz = 48, row = Math.floor(wy / sz), sx = Math.floor(wx / sz);
      const lx = wx - sx * sz, ly = wy - row * sz;
      k = 0.8 + U.hash(sx, row, 29) * 0.25 + (n - 0.5) * 0.2;
      if (lx < 3 || ly < 3) k *= 0.55;
      const crack = Math.abs(U.fbm(wx * 0.01, wy * 0.01, 41, 3) - 0.5);
      if (crack < 0.005) { r = 120; g = 64; b = 180; k = 1; }
    } else if (t === ROAD) {
      const sz = 18, row = Math.floor(wy / sz), off = (row % 2) * 9;
      const sx = Math.floor((wx + off) / sz);
      const lx = (wx + off) - sx * sz, ly = wy - row * sz;
      k = 0.82 + U.hash(sx, row, 17) * 0.24;
      if (lx < 3 || ly < 3) k *= 0.6;
    } else if (t === GRASS || t === FOREST) {
      if (fine > 0.93) { g += 18; r += 6; }
      if (fine < 0.05) { r -= 10; g -= 10; }
      const patch = U.fbm(wx * 0.004, wy * 0.004, 21, 2);
      if (patch > 0.6) { r += 12; g += 8; } // dry patches
    } else if (t === WATER) {
      const w = Math.sin(wx * 0.05 + U.vnoise(wx * 0.01, wy * 0.01, 3) * 6) * Math.cos(wy * 0.07);
      k = 0.9 + w * 0.08 + n * 0.15;
      // shoreline foam/dark
      let shore = false;
      for (const [ox, oy] of [[20, 0], [-20, 0], [0, 20], [0, -20]]) {
        if (tileAt(Math.floor((wx + ox) / T), Math.floor((wy + oy) / T)) !== WATER) shore = true;
      }
      if (shore) k *= 0.8;
    } else if (t === GRAVE) {
      if (fine > 0.9) { g += 10; }
    } else if (t === SNOW) {
      // soft drifts with blue shadows and glints
      const drift = U.fbm(wx * 0.006, wy * 0.006, 61, 3);
      k = 0.9 + drift * 0.14 + (fine - 0.5) * 0.04;
      b += 8 - drift * 10; r -= (1 - drift) * 12; g -= (1 - drift) * 6;
      if (fine > 0.985) { r = g = b = 255; k = 1; }
    } else if (t === TRAIL) { // trodden snow with footprints
      k = 0.92 + n * 0.12 + (fine - 0.5) * 0.06;
      if (U.hash(Math.floor(wx / 14), Math.floor(wy / 10), 77) > 0.9) k *= 0.88;
    } else if (t === ICE) {
      k = 0.92 + n * 0.12;
      const crack = Math.abs(U.fbm(wx * 0.015, wy * 0.015, 83, 3) - 0.5);
      if (crack < 0.012) { r += 60; g += 50; b += 30; }
      const sheen = Math.sin((wx + wy) * 0.02 + U.vnoise(wx * 0.004, wy * 0.004, 9) * 5);
      if (sheen > 0.92) { r += 30; g += 30; b += 20; }
    } else if (t === SAND) {
      if (fine > 0.95) { r -= 25; g -= 25; b -= 20; }
    }
    return [r * k, g * k, b * k];
  }

  function buildChunk(cx, cy) {
    const n = CH / RES;
    const c = document.createElement('canvas');
    c.width = n; c.height = n;
    const g = c.getContext('2d');
    const img = g.createImageData(n, n);
    const d = img.data;
    for (let y = 0; y < n; y++) {
      for (let x = 0; x < n; x++) {
        const [r, gg, b] = texel(cx * CH + x * RES, cy * CH + y * RES);
        const i = (y * n + x) * 4;
        d[i] = r; d[i + 1] = gg; d[i + 2] = b; d[i + 3] = 255;
      }
    }
    g.putImageData(img, 0, 0);
    return c;
  }
  function getChunk(cx, cy, allowBuild) {
    const k = cy * 1000 + cx;
    let c = chunks.get(k);
    if (!c && allowBuild) { c = buildChunk(cx, cy); chunks.set(k, c); }
    return c;
  }

  function drawGround(ctx, cam, vw, vh, budget = 3) {
    const x0 = Math.floor(cam.x / CH), y0 = Math.floor(cam.y / CH);
    const x1 = Math.floor((cam.x + vw) / CH), y1 = Math.floor((cam.y + vh) / CH);
    ctx.imageSmoothingEnabled = false;
    for (let cy = y0; cy <= y1; cy++) for (let cx = x0; cx <= x1; cx++) {
      if (cx < 0 || cy < 0 || cx * CH >= W * T || cy * CH >= H * T) continue;
      let c = getChunk(cx, cy, false);
      if (!c && budget > 0) { c = getChunk(cx, cy, true); budget--; }
      if (c) ctx.drawImage(c, cx * CH - cam.x, cy * CH - cam.y, CH, CH);
      else { ctx.fillStyle = '#3d4a30'; ctx.fillRect(cx * CH - cam.x, cy * CH - cam.y, CH, CH); }
    }
    // pre-warm neighbours
    if (budget > 0) {
      for (let cy = y0 - 1; cy <= y1 + 1 && budget > 0; cy++) for (let cx = x0 - 1; cx <= x1 + 1 && budget > 0; cx++) {
        if (cx < 0 || cy < 0 || cx * CH >= W * T || cy * CH >= H * T) continue;
        if (!getChunk(cx, cy, false)) { getChunk(cx, cy, true); budget--; }
      }
    }
  }

  // ---------------------------------------------------------------- prop art (pre-rendered)
  const art = {};
  function mk(w, h, fn) { const c = document.createElement('canvas'); c.width = w; c.height = h; fn(c.getContext('2d'), w, h); return c; }
  function shadow(g, x, y, rx, ry, a = 0.3) { g.fillStyle = `rgba(0,0,0,${a})`; g.beginPath(); g.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2); g.fill(); }
  function blob(g, x, y, r, col) { g.fillStyle = col; g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill(); }

  function buildArt() {
    for (let v = 0; v < 4; v++) {
      const rr = U.rng(100 + v);
      art['tree' + v] = mk(150, 170, (g, w, h) => {
        shadow(g, w / 2 + 8, h - 12, 50, 16, 0.35);
        g.fillStyle = '#4a3322'; g.fillRect(w / 2 - 7, h - 60, 14, 50);
        g.fillStyle = '#35241a'; g.fillRect(w / 2 + 2, h - 60, 5, 50);
        const hue = [[46, 88, 38], [58, 96, 40], [40, 80, 44], [70, 98, 36]][v];
        const col = (k) => `rgb(${hue[0] * k | 0},${hue[1] * k | 0},${hue[2] * k | 0})`;
        const blobs = [];
        for (let i = 0; i < 9; i++) blobs.push([w / 2 + (rr() - 0.5) * 70, 62 + (rr() - 0.5) * 50, 22 + rr() * 16]);
        blobs.forEach(([x, y, r]) => blob(g, x + 3, y + 5, r, col(0.62)));
        blobs.forEach(([x, y, r]) => blob(g, x, y, r, col(0.9)));
        blobs.forEach(([x, y, r]) => blob(g, x - r * 0.25, y - r * 0.3, r * 0.6, col(1.15)));
        for (let i = 0; i < 90; i++) {
          const [bx, by, br] = blobs[i % blobs.length];
          const a = rr() * Math.PI * 2, d = rr() * br;
          g.fillStyle = col(0.7 + rr() * 0.7);
          g.fillRect(bx + Math.cos(a) * d, by + Math.sin(a) * d, 3, 3);
        }
      });
      art['pine' + v] = mk(110, 170, (g, w, h) => {
        shadow(g, w / 2 + 6, h - 10, 34, 12, 0.35);
        g.fillStyle = '#3f2c1e'; g.fillRect(w / 2 - 5, h - 34, 10, 26);
        const base = [[30, 70, 44], [34, 76, 40], [28, 64, 48], [38, 78, 42]][v];
        for (let i = 0; i < 5; i++) {
          const y = h - 30 - i * 26, hw = 46 - i * 8;
          const k = 0.75 + i * 0.08;
          g.fillStyle = `rgb(${base[0] * k | 0},${base[1] * k | 0},${base[2] * k | 0})`;
          g.beginPath(); g.moveTo(w / 2 - hw, y); g.lineTo(w / 2, y - 44); g.lineTo(w / 2 + hw, y); g.closePath(); g.fill();
          g.fillStyle = `rgba(255,255,255,0.08)`;
          g.beginPath(); g.moveTo(w / 2 - hw * 0.6, y - 4); g.lineTo(w / 2, y - 44); g.lineTo(w / 2 - 4, y - 4); g.closePath(); g.fill();
        }
      });
      art['deadtree' + v] = mk(120, 150, (g, w, h) => {
        shadow(g, w / 2, h - 8, 28, 9, 0.3);
        g.strokeStyle = '#4b4038'; g.lineCap = 'round';
        const branch = (x, y, a, len, wd) => {
          if (wd < 1.2) return;
          const x2 = x + Math.cos(a) * len, y2 = y + Math.sin(a) * len;
          g.lineWidth = wd; g.beginPath(); g.moveTo(x, y); g.lineTo(x2, y2); g.stroke();
          branch(x2, y2, a - 0.4 - rr() * 0.4, len * 0.7, wd * 0.62);
          branch(x2, y2, a + 0.4 + rr() * 0.4, len * 0.7, wd * 0.62);
        };
        branch(w / 2, h - 10, -Math.PI / 2 + (rr() - 0.5) * 0.3, 44, 10);
      });
      art['rock' + v] = mk(80, 60, (g, w, h) => {
        shadow(g, w / 2 + 4, h - 10, 30, 9, 0.35);
        const pts = [];
        for (let i = 0; i < 8; i++) { const a = (i / 8) * Math.PI * 2; pts.push([w / 2 + Math.cos(a) * (22 + rr() * 8), h - 22 + Math.sin(a) * (14 + rr() * 5)]); }
        g.fillStyle = '#6d6a64'; g.beginPath(); pts.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y))); g.fill();
        g.fillStyle = '#8c8880'; g.beginPath(); g.ellipse(w / 2 - 5, h - 28, 14, 8, -0.3, 0, Math.PI * 2); g.fill();
        g.fillStyle = '#4e4b46'; g.beginPath(); g.ellipse(w / 2 + 6, h - 16, 16, 5, 0, 0, Math.PI); g.fill();
      });
      art['bush' + v] = mk(60, 44, (g, w, h) => {
        shadow(g, w / 2, h - 6, 22, 6, 0.3);
        const c = [[60, 100, 44], [70, 110, 48], [52, 90, 50], [84, 104, 40]][v];
        for (let i = 0; i < 6; i++) blob(g, w / 2 + (rr() - 0.5) * 26, h - 16 - rr() * 10, 9 + rr() * 5, `rgb(${c[0]},${c[1]},${c[2]})`);
        for (let i = 0; i < 4; i++) blob(g, w / 2 + (rr() - 0.5) * 20, h - 22 - rr() * 8, 5, `rgb(${c[0] + 30},${c[1] + 30},${c[2] + 10})`);
        if (v === 2) for (let i = 0; i < 5; i++) blob(g, w / 2 + (rr() - 0.5) * 26, h - 14 - rr() * 14, 2.5, '#c63b3b');
      });
      art['flowers' + v] = mk(40, 24, (g) => {
        const cols = ['#f2e36b', '#f08fb0', '#ffffff', '#b894ff'];
        for (let i = 0; i < 7; i++) blob(g, 6 + rr() * 28, 6 + rr() * 14, 2.2, cols[(v + i) % 4]);
      });
      art['tomb' + v] = mk(50, 64, (g, w, h) => {
        shadow(g, w / 2 + 3, h - 6, 20, 6, 0.4);
        g.fillStyle = '#5d5a57'; g.fillRect(w / 2 - 15, h - 12, 30, 7);
        g.fillStyle = v % 2 ? '#8a8680' : '#7a7772';
        g.beginPath(); g.moveTo(w / 2 - 12, h - 10); g.lineTo(w / 2 - 12, h - 40); g.arc(w / 2, h - 40, 12, Math.PI, 0); g.lineTo(w / 2 + 12, h - 10); g.fill();
        g.fillStyle = 'rgba(0,0,0,0.35)'; g.fillRect(w / 2 - 1.5, h - 42, 3, 18); g.fillRect(w / 2 - 6, h - 36, 12, 3);
        g.fillStyle = 'rgba(80,110,60,0.6)'; g.fillRect(w / 2 - 12, h - 16, 10 + v * 3, 5);
      });
    }
    art.cross = mk(40, 70, (g, w, h) => {
      shadow(g, w / 2, h - 5, 12, 4, 0.35);
      g.fillStyle = '#5b4330'; g.fillRect(w / 2 - 3, h - 56, 6, 52); g.fillRect(w / 2 - 14, h - 46, 28, 6);
    });
    art.bones = mk(40, 20, (g) => {
      g.fillStyle = '#d8d0bc'; g.fillRect(6, 10, 18, 3); g.fillRect(14, 4, 3, 13); blob(g, 30, 10, 5, '#e2dccb');
      g.fillStyle = '#333'; g.fillRect(28, 9, 2, 2); g.fillRect(31, 9, 2, 2);
    });
    art.crate = mk(50, 56, (g, w, h) => {
      shadow(g, w / 2 + 4, h - 6, 22, 6, 0.4);
      g.fillStyle = '#8a6036'; g.fillRect(6, h - 44, 38, 38);
      g.fillStyle = '#a57744'; g.fillRect(6, h - 44, 38, 10);
      g.strokeStyle = '#5a3c20'; g.lineWidth = 2; g.strokeRect(7, h - 43, 36, 36);
      g.beginPath(); g.moveTo(7, h - 7); g.lineTo(43, h - 34); g.stroke();
    });
    art.barrel = mk(44, 56, (g, w, h) => {
      shadow(g, w / 2 + 3, h - 6, 17, 5, 0.4);
      g.fillStyle = '#7b5230'; g.fillRect(8, h - 44, 28, 36);
      g.fillStyle = '#946538'; g.fillRect(12, h - 44, 8, 36);
      g.fillStyle = '#3b3b3b'; g.fillRect(8, h - 38, 28, 3); g.fillRect(8, h - 16, 28, 3);
      g.fillStyle = '#a07048'; g.beginPath(); g.ellipse(w / 2, h - 44, 14, 5, 0, 0, Math.PI * 2); g.fill();
    });
    const awn = [['#b8322b', '#efe4cf'], ['#2b5bb8', '#efe4cf'], ['#2f8a45', '#f2e2b0'], ['#7a3ab0', '#f2e2b0']];
    for (let v = 0; v < 4; v++) {
      art['stall' + v] = mk(120, 110, (g, w, h) => {
        shadow(g, w / 2, h - 10, 56, 14, 0.35);
        g.fillStyle = '#6b4a2c'; g.fillRect(14, h - 70, 5, 62); g.fillRect(w - 19, h - 70, 5, 62);
        g.fillStyle = '#8a5f37'; g.fillRect(10, h - 36, w - 20, 22);
        g.fillStyle = '#a3754a'; g.fillRect(10, h - 36, w - 20, 6);
        const goods = ['#d9463c', '#f0c040', '#6ab04c', '#e8e0d0', '#5a8fd8'];
        for (let i = 0; i < 9; i++) blob(g, 22 + i * 9.5, h - 40, 5, goods[(i + v) % 5]);
        for (let i = 0; i < 6; i++) {
          g.fillStyle = awn[v][i % 2];
          g.beginPath(); g.moveTo(6 + i * 18, h - 74); g.lineTo(24 + i * 18, h - 74); g.lineTo(24 + i * 18, h - 96); g.lineTo(12 + i * 18, h - 100); g.fill();
          g.beginPath(); g.arc(15 + i * 18, h - 74, 9, 0, Math.PI); g.fill();
        }
      });
    }
    for (let v = 0; v < 3; v++) {
      art['house' + v] = mk(190, 200, (g, w, h) => {
        shadow(g, w / 2 + 10, h - 16, 90, 22, 0.4);
        const wall = ['#b8a584', '#a8987e', '#c2ae8a'][v], roof = ['#8a3b2c', '#3d5a7a', '#6a4a2c'][v];
        g.fillStyle = wall; g.fillRect(24, h - 100, w - 48, 86);
        g.fillStyle = 'rgba(0,0,0,0.18)'; g.fillRect(w / 2 + 20, h - 100, w / 2 - 44, 86);
        g.strokeStyle = 'rgba(60,40,20,0.5)'; g.lineWidth = 5;
        g.strokeRect(24, h - 100, w - 48, 86); g.beginPath(); g.moveTo(w / 2, h - 100); g.lineTo(w / 2, h - 14); g.stroke();
        g.fillStyle = '#4a3020'; g.fillRect(w / 2 - 14, h - 52, 28, 38);
        g.fillStyle = '#ffd98a'; g.fillRect(44, h - 76, 20, 18); g.fillRect(w - 64, h - 76, 20, 18);
        g.fillStyle = '#3a2a1a'; g.fillRect(53, h - 76, 2, 18); g.fillRect(w - 55, h - 76, 2, 18);
        g.fillStyle = roof;
        g.beginPath(); g.moveTo(10, h - 96); g.lineTo(w / 2, h - 176); g.lineTo(w - 10, h - 96); g.closePath(); g.fill();
        g.fillStyle = 'rgba(0,0,0,0.25)'; g.beginPath(); g.moveTo(w / 2, h - 176); g.lineTo(w - 10, h - 96); g.lineTo(w / 2, h - 96); g.fill();
        g.strokeStyle = 'rgba(0,0,0,0.25)'; g.lineWidth = 2;
        for (let i = 1; i < 6; i++) { g.beginPath(); g.moveTo(10 + i * 14, h - 96 - i * 13.5); g.lineTo(w - 10 - i * 14, h - 96 - i * 13.5); g.stroke(); }
      });
    }
    art.wall = mk(64, 100, (g, w, h) => {
      g.fillStyle = '#5e574c'; g.fillRect(0, h - 70, w, 62);
      g.fillStyle = '#8a8172'; g.fillRect(0, h - 92, w, 24);
      for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) {
        g.fillStyle = `rgba(0,0,0,${0.12 + ((r + c) % 3) * 0.05})`;
        g.fillRect(c * 16 + (r % 2) * 8 - 8, h - 68 + r * 15, 15, 13);
      }
      g.fillStyle = '#9d9483'; for (let c = 0; c < 4; c++) g.fillRect(c * 16 + 2, h - 100, 11, 10);
      g.fillStyle = 'rgba(0,0,0,0.35)'; g.fillRect(0, h - 10, w, 6);
    });
    art.palisade = mk(40, 90, (g, w, h) => {
      shadow(g, w / 2, h - 6, 20, 5, 0.3);
      for (let i = 0; i < 3; i++) {
        const x = 4 + i * 12, top = h - 76 - (i % 2) * 8;
        g.fillStyle = i % 2 ? '#6b4a2a' : '#7c5632'; g.fillRect(x, top, 11, h - 8 - top);
        g.beginPath(); g.moveTo(x, top); g.lineTo(x + 5.5, top - 10); g.lineTo(x + 11, top); g.fill();
      }
      g.fillStyle = '#4a3220'; g.fillRect(0, h - 50, w, 5);
    });
    art.tent = mk(130, 110, (g, w, h) => {
      shadow(g, w / 2, h - 10, 60, 14, 0.35);
      g.fillStyle = '#8c6a44'; g.beginPath(); g.moveTo(8, h - 12); g.lineTo(w / 2, h - 96); g.lineTo(w - 8, h - 12); g.fill();
      g.fillStyle = '#6e5234'; g.beginPath(); g.moveTo(w / 2, h - 96); g.lineTo(w - 8, h - 12); g.lineTo(w / 2, h - 12); g.fill();
      g.fillStyle = '#2a1c10'; g.beginPath(); g.moveTo(w / 2 - 16, h - 12); g.lineTo(w / 2, h - 52); g.lineTo(w / 2 + 16, h - 12); g.fill();
      g.strokeStyle = '#3a2a1a'; g.lineWidth = 3; g.beginPath(); g.moveTo(w / 2 - 6, h - 104); g.lineTo(w / 2 + 6, h - 88); g.moveTo(w / 2 + 6, h - 104); g.lineTo(w / 2 - 6, h - 88); g.stroke();
    });
    art.pillar = mk(60, 150, (g, w, h) => {
      shadow(g, w / 2 + 6, h - 10, 26, 8, 0.45);
      g.fillStyle = '#4a4450'; g.fillRect(12, h - 22, 36, 14);
      g.fillStyle = '#6d6676'; g.fillRect(16, h - 130, 28, 110);
      g.fillStyle = 'rgba(0,0,0,0.3)'; g.fillRect(34, h - 130, 10, 110);
      g.fillStyle = '#7d7688'; g.fillRect(10, h - 140, 40, 12);
      g.fillStyle = 'rgba(170,90,255,0.55)'; g.fillRect(27, h - 110, 4, 60);
    });
    for (let v = 0; v < 4; v++) {
      const rr = U.rng(300 + v);
      art['snowpine' + v] = mk(110, 180, (g, w, h) => {
        shadow(g, w / 2 + 8, h - 10, 36, 12, 0.25);
        g.fillStyle = '#3f2c1e'; g.fillRect(w / 2 - 5, h - 34, 10, 26);
        for (let i = 0; i < 5; i++) {
          const y = h - 30 - i * 27, hw = 48 - i * 8;
          const k = 0.7 + i * 0.07;
          g.fillStyle = `rgb(${24 * k | 0},${60 * k | 0},${54 * k | 0})`;
          g.beginPath(); g.moveTo(w / 2 - hw, y); g.lineTo(w / 2, y - 46); g.lineTo(w / 2 + hw, y); g.closePath(); g.fill();
          // snow caps on each tier
          g.fillStyle = '#eef4fb';
          g.beginPath(); g.moveTo(w / 2 - hw * 0.72, y - 10); g.quadraticCurveTo(w / 2 - hw * 0.3, y - 4 - rr() * 4, w / 2, y - 12); g.quadraticCurveTo(w / 2 + hw * 0.35, y - 3, w / 2 + hw * 0.7, y - 11); g.lineTo(w / 2, y - 46); g.closePath(); g.fill();
          g.fillStyle = 'rgba(150,180,220,0.45)'; g.beginPath(); g.moveTo(w / 2, y - 46); g.lineTo(w / 2 + hw * 0.7, y - 11); g.lineTo(w / 2 + 4, y - 10); g.closePath(); g.fill();
        }
      });
      art['icecrystal' + v] = mk(70, 90, (g, w, h) => {
        shadow(g, w / 2, h - 8, 26, 7, 0.25);
        const shards = 3 + v;
        for (let i = 0; i < shards; i++) {
          const x = w / 2 + (rr() - 0.5) * 34, len = 28 + rr() * 44, lean = (rr() - 0.5) * 0.7, bw = 6 + rr() * 6;
          const tx = x + Math.sin(lean) * len, ty = h - 10 - Math.cos(lean) * len;
          const gr = g.createLinearGradient(x, h - 10, tx, ty); gr.addColorStop(0, '#5aa8e0'); gr.addColorStop(0.6, '#bfeaff'); gr.addColorStop(1, '#ffffff');
          g.fillStyle = gr; g.beginPath(); g.moveTo(x - bw, h - 10); g.lineTo(tx, ty); g.lineTo(x + bw, h - 10); g.closePath(); g.fill();
          g.strokeStyle = 'rgba(30,70,130,0.7)'; g.lineWidth = 1.2; g.stroke();
          g.strokeStyle = 'rgba(255,255,255,0.8)'; g.beginPath(); g.moveTo(x - bw * 0.3, h - 12); g.lineTo(tx, ty); g.stroke();
        }
      });
      art['snowrock' + v] = mk(80, 60, (g, w, h) => {
        shadow(g, w / 2 + 4, h - 10, 30, 9, 0.25);
        const pts = [];
        for (let i = 0; i < 8; i++) { const a = (i / 8) * Math.PI * 2; pts.push([w / 2 + Math.cos(a) * (22 + rr() * 8), h - 22 + Math.sin(a) * (14 + rr() * 5)]); }
        g.fillStyle = '#6a7482'; g.beginPath(); pts.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y))); g.fill();
        g.fillStyle = '#f2f6fb'; g.beginPath(); g.ellipse(w / 2 - 2, h - 32, 20, 8, -0.15, 0, Math.PI * 2); g.fill();
        g.fillStyle = '#4c5563'; g.beginPath(); g.ellipse(w / 2 + 6, h - 16, 16, 5, 0, 0, Math.PI); g.fill();
      });
      art['snowdrift' + v] = mk(70, 26, (g) => {
        g.fillStyle = 'rgba(255,255,255,0.75)'; g.beginPath(); g.ellipse(35, 16, 30, 7, 0, 0, Math.PI * 2); g.fill();
        g.fillStyle = 'rgba(140,170,210,0.35)'; g.beginPath(); g.ellipse(40, 19, 22, 4, 0, 0, Math.PI * 2); g.fill();
      });
    }
    art.woodpile = mk(50, 30, (g) => { g.fillStyle = '#4a3020'; g.fillRect(8, 16, 34, 6); g.fillRect(12, 11, 26, 6); g.fillStyle = '#2b2b2b'; blob(g, 25, 16, 10, 'rgba(30,30,30,0.6)'); });
  }

  function drawProp(ctx, p, sx, sy, t) {
    let a;
    switch (p.type) {
      case 'tree': case 'pine': case 'deadtree': case 'rock': case 'bush': case 'flowers': case 'tomb': case 'stall':
      case 'snowpine': case 'icecrystal': case 'snowrock': case 'snowdrift': a = art[p.type + p.v % 4]; break;
      case 'house': a = art['house' + (p.v % 3)]; break;
      default: a = art[p.type];
    }
    if (p.type === 'portal') return drawPortal(ctx, sx, sy, t);
    if (p.type === 'altar') return drawAltar(ctx, sx, sy, t, p.frost);
    if (p.type === 'rift') return drawRift(ctx, sx, sy, t);
    if (p.type === 'brazier') { ctx.fillStyle = '#3a3440'; ctx.fillRect(sx - 12, sy - 30, 24, 30); ctx.fillStyle = '#56505e'; ctx.fillRect(sx - 16, sy - 34, 32, 6); return flame(ctx, sx, sy - 36, 1.2, t, sx, true); }
    if (p.type === 'torch') return drawTorch(ctx, sx, sy, t, p);
    if (p.type === 'bonfire') return drawBonfire(ctx, sx, sy, t);
    if (!a) return;
    ctx.drawImage(a, Math.round(sx - a.width / 2), Math.round(sy - a.height + 8));
  }
  function flame(ctx, x, y, s, t, seed, purple) {
    const f = Math.sin(t * 14 + seed) * 0.15 + Math.sin(t * 23 + seed * 2) * 0.1;
    const grd = ctx.createRadialGradient(x, y, 0, x, y, 70 * s);
    grd.addColorStop(0, purple ? 'rgba(180,90,255,0.4)' : 'rgba(255,170,60,0.35)'); grd.addColorStop(1, 'rgba(255,120,30,0)');
    ctx.fillStyle = grd; ctx.beginPath(); ctx.arc(x, y, 70 * s, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = purple ? '#a05aff' : '#ff7b22';
    ctx.beginPath(); ctx.ellipse(x, y - 8 * s, 7 * s * (1 + f), 13 * s * (1 - f), 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = purple ? '#e6c8ff' : '#ffd35a';
    ctx.beginPath(); ctx.ellipse(x, y - 5 * s, 4 * s, 8 * s * (1 + f), 0, 0, Math.PI * 2); ctx.fill();
  }
  function drawTorch(ctx, x, y, t, p) {
    ctx.fillStyle = 'rgba(0,0,0,0.3)'; ctx.beginPath(); ctx.ellipse(x, y, 8, 3, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#3a2c20'; ctx.fillRect(x - 3, y - 46, 6, 46);
    ctx.fillStyle = '#6a5a48'; ctx.fillRect(x - 7, y - 50, 14, 6);
    flame(ctx, x, y - 52, 1, t, p.x);
  }
  function drawBonfire(ctx, x, y, t) {
    ctx.drawImage(art.woodpile, x - 25, y - 22);
    flame(ctx, x, y - 6, 1.5, t, x + y);
  }
  function drawPortal(ctx, x, y, t) {
    // stone dais like the plaza in the reference screenshot
    ctx.save();
    ctx.translate(x, y); ctx.scale(1, 0.62);
    const rings = [[150, '#8d826f'], [132, '#a39884'], [100, '#7e7464'], [86, '#968b78'], [52, '#6e655a'], [36, '#877c6b']];
    for (const [r, c] of rings) { ctx.fillStyle = c; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill(); }
    ctx.strokeStyle = 'rgba(40,30,20,0.45)'; ctx.lineWidth = 2;
    for (let i = 0; i < 24; i++) {
      const a = (i / 24) * Math.PI * 2;
      ctx.beginPath(); ctx.moveTo(Math.cos(a) * 100, Math.sin(a) * 100); ctx.lineTo(Math.cos(a) * 150, Math.sin(a) * 150); ctx.stroke();
    }
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      ctx.beginPath(); ctx.moveTo(Math.cos(a) * 36, Math.sin(a) * 36); ctx.lineTo(Math.cos(a) * 86, Math.sin(a) * 86); ctx.stroke();
    }
    const glow = 0.35 + Math.sin(t * 2) * 0.15;
    const grd = ctx.createRadialGradient(0, 0, 0, 0, 0, 60);
    grd.addColorStop(0, `rgba(160,220,255,${glow})`); grd.addColorStop(1, 'rgba(120,180,255,0)');
    ctx.fillStyle = grd; ctx.beginPath(); ctx.arc(0, 0, 60, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
    // light beam
    const bg = ctx.createLinearGradient(x, y - 160, x, y);
    bg.addColorStop(0, 'rgba(255,255,255,0)'); bg.addColorStop(1, `rgba(220,240,255,${0.18 + Math.sin(t * 3) * 0.06})`);
    ctx.fillStyle = bg; ctx.fillRect(x - 5, y - 160, 10, 160);
  }
  function drawRift(ctx, x, y, t) {
    ctx.save(); ctx.translate(x, y); ctx.scale(1, 0.55);
    for (let i = 0; i < 3; i++) {
      ctx.strokeStyle = `rgba(170,90,255,${0.5 - i * 0.12})`; ctx.lineWidth = 6 - i * 1.5;
      ctx.beginPath(); ctx.arc(0, 0, 120 + i * 40, t * (0.4 + i * 0.2), t * (0.4 + i * 0.2) + Math.PI * 1.6); ctx.stroke();
    }
    const g = ctx.createRadialGradient(0, 0, 0, 0, 0, 110);
    g.addColorStop(0, `rgba(20,0,40,0.95)`); g.addColorStop(0.7, `rgba(90,30,160,${0.5 + Math.sin(t * 2) * 0.15})`); g.addColorStop(1, 'rgba(90,30,160,0)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(0, 0, 110, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }
  function drawAltar(ctx, x, y, t, frost) {
    ctx.save(); ctx.translate(x, y); ctx.scale(1, 0.6);
    ctx.fillStyle = frost ? 'rgba(20,60,110,0.45)' : 'rgba(60,10,10,0.55)'; ctx.beginPath(); ctx.arc(0, 0, 170, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = frost ? `rgba(120,210,255,${0.5 + Math.sin(t * 2) * 0.2})` : `rgba(220,40,40,${0.45 + Math.sin(t * 2) * 0.2})`; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.arc(0, 0, 150, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath();
    for (let i = 0; i <= 5; i++) { const a = (i * 2 * Math.PI * 2) / 5 - Math.PI / 2; const px = Math.cos(a) * 150, py = Math.sin(a) * 150; i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); }
    ctx.stroke(); ctx.restore();
  }

  // ---------------------------------------------------------------- minimap
  let miniBase = null;
  function buildMini() {
    const c = document.createElement('canvas'); c.width = W; c.height = H;
    const g = c.getContext('2d'); const img = g.createImageData(W, H);
    for (let i = 0; i < W * H; i++) {
      let [r, gg, b] = PAL[tiles[i]];
      if (solid[i] && tiles[i] !== WATER) { r = 60; gg = 55; b = 50; }
      img.data[i * 4] = r; img.data[i * 4 + 1] = gg; img.data[i * 4 + 2] = b; img.data[i * 4 + 3] = 255;
    }
    g.putImageData(img, 0, 0);
    for (const p of props) {
      if (p.type === 'tree' || p.type === 'pine' || p.type === 'snowpine') { g.fillStyle = 'rgba(20,50,20,0.7)'; g.fillRect(p.x / T, p.y / T, 1, 1); }
      if (p.type === 'house' || p.type === 'palisade' || p.type === 'tent') { g.fillStyle = '#6a4a2c'; g.fillRect(p.x / T - 0.5, p.y / T - 0.5, 1.5, 1.5); }
    }
    miniBase = c;
  }

  return {
    GRASS, DIRT, STONE, GRAVE, SAND, WATER, FOREST, ROAD, DUNGEON, SNOW, ICE,
    tiles, props, tileAt, zoneAt, blocked, findFree,
    init() { generate(); buildArt(); buildMini(); },
    drawGround, drawProp,
    get mini() { return miniBase; },
    get widthPx() { return W * T; }, get heightPx() { return H * T; },
    tileIsFree: (tx, ty) => { const t = tileAt(tx, ty); return t !== WATER && t !== CLIFF && !solid[ty * W + tx]; },
  };
})();
