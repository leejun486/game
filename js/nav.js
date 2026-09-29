'use strict';
// Navigation: a walkability grid built from world collision + A* pathfinding with path smoothing.
const Nav = (() => {
  const C = 32, R = 13; // cell size, agent radius used for walkability
  let W = 0, H = 0, walk = null;

  function build() {
    W = Math.ceil(World.widthPx / C); H = Math.ceil(World.heightPx / C);
    walk = new Uint8Array(W * H);
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) walk[y * W + x] = World.blocked(x * C + C / 2, y * C + C / 2, R) ? 0 : 1;
  }
  const cellOf = (px, py) => [U.clamp(Math.floor(px / C), 0, W - 1), U.clamp(Math.floor(py / C), 0, H - 1)];
  const ok = (x, y) => x >= 0 && y >= 0 && x < W && y < H && walk[y * W + x] === 1;
  // nearest walkable cell to (cx, cy) within a small ring search
  function nearestOpen(cx, cy) {
    if (ok(cx, cy)) return [cx, cy];
    for (let r = 1; r < 8; r++) for (let dy = -r; dy <= r; dy++) for (let dx = -r; dx <= r; dx++) {
      if (Math.max(Math.abs(dx), Math.abs(dy)) !== r) continue;
      if (ok(cx + dx, cy + dy)) return [cx + dx, cy + dy];
    }
    return null;
  }
  // true if a circle of radius r can travel in a straight line from a to b
  function lineClear(ax, ay, bx, by, r = 12) {
    const d = Math.hypot(bx - ax, by - ay), n = Math.ceil(d / 14);
    for (let i = 1; i <= n; i++) {
      const k = i / n;
      if (World.blocked(ax + (bx - ax) * k, ay + (by - ay) * k, r)) return false;
    }
    return true;
  }

  // ---- binary heap keyed by f
  function heap() {
    const a = [];
    return {
      get size() { return a.length; },
      push(n, f) { a.push([f, n]); let i = a.length - 1; while (i > 0) { const p = (i - 1) >> 1; if (a[p][0] <= a[i][0]) break; [a[p], a[i]] = [a[i], a[p]]; i = p; } },
      pop() {
        const top = a[0], last = a.pop();
        if (a.length) { a[0] = last; let i = 0; for (;;) { const l = i * 2 + 1, r = l + 1; let m = i; if (l < a.length && a[l][0] < a[m][0]) m = l; if (r < a.length && a[r][0] < a[m][0]) m = r; if (m === i) break; [a[m], a[i]] = [a[i], a[m]]; i = m; } }
        return top[1];
      },
    };
  }

  // A* from (ax, ay) to (bx, by) in world pixels. Returns [{x, y}, ...] or null.
  function find(ax, ay, bx, by, maxNodes = 40000) {
    if (!walk) return null;
    const s = nearestOpen(...cellOf(ax, ay)), g = nearestOpen(...cellOf(bx, by));
    if (!s || !g) return null;
    const si = s[1] * W + s[0], gi = g[1] * W + g[0];
    const gScore = new Map([[si, 0]]), came = new Map();
    const open = heap();
    const hcost = (x, y) => { const dx = Math.abs(x - g[0]), dy = Math.abs(y - g[1]); return (dx + dy) + (Math.SQRT2 - 2) * Math.min(dx, dy); };
    open.push(si, hcost(s[0], s[1]));
    const closed = new Set();
    let found = false, n = 0;
    while (open.size && n++ < maxNodes) {
      const cur = open.pop();
      if (cur === gi) { found = true; break; }
      if (closed.has(cur)) continue;
      closed.add(cur);
      const cx = cur % W, cy = (cur / W) | 0, gc = gScore.get(cur);
      for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
        if (!dx && !dy) continue;
        const nx = cx + dx, ny = cy + dy;
        if (!ok(nx, ny)) continue;
        if (dx && dy && (!ok(cx + dx, cy) || !ok(cx, cy + dy))) continue; // no corner cutting
        const ni = ny * W + nx, ng = gc + (dx && dy ? Math.SQRT2 : 1);
        if (ng < (gScore.get(ni) ?? Infinity)) { gScore.set(ni, ng); came.set(ni, cur); open.push(ni, ng + hcost(nx, ny)); }
      }
    }
    if (!found) return null;
    const cells = [];
    for (let c = gi; c !== undefined && c !== si; c = came.get(c)) cells.push(c);
    cells.reverse();
    let pts = cells.map((c) => ({ x: (c % W) * C + C / 2, y: ((c / W) | 0) * C + C / 2 }));
    // end exactly at the goal if it is reachable from the last cell
    if (!World.blocked(bx, by, R) && (!pts.length || lineClear(pts[pts.length - 1].x, pts[pts.length - 1].y, bx, by))) pts.push({ x: bx, y: by });
    // smooth: from each anchor, jump to the farthest point still in line of sight
    const out = [];
    let ax2 = ax, ay2 = ay, i = 0;
    while (i < pts.length) {
      let j = pts.length - 1;
      while (j > i && !lineClear(ax2, ay2, pts[j].x, pts[j].y)) j--;
      out.push(pts[j]); ax2 = pts[j].x; ay2 = pts[j].y; i = j + 1;
    }
    return out;
  }

  return { build, find, lineClear, get ready() { return !!walk; } };
})();
