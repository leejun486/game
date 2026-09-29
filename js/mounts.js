'use strict';
// 탈것 (mounts): procedurally drawn rideable creatures. 희귀 and below are cute, 영웅/전설 are fierce.
// Art is vector-drawn (outlined parts, top-lit gradients, jointed legs, strand manes and tails) and
// cached per animation frame at display resolution. The rider sits on the saddle with legs hanging
// down the near flank, feet in the stirrups.
const Mounts = (() => {
  const { esc, ico } = UI;
  const TAU = Math.PI * 2;
  const hexA = (h, a) => Looks.hexA(h, a);
  const rgb = (h) => { const n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
  const mixMemo = new Map();
  const mix = (a, b, k) => {
    const key = a + b + k; let r = mixMemo.get(key);
    if (!r) { const A = rgb(a), B = rgb(b); r = '#' + A.map((v, i) => Math.round(v + (B[i] - v) * k).toString(16).padStart(2, '0')).join(''); mixMemo.set(key, r); }
    return r;
  };
  const lt = (c, k) => mix(c, '#ffffff', k), dk = (c, k) => mix(c, '#000000', k);

  // ---------------------------------------------------------------- drawing toolkit (art units)
  let OL = '#20141c', LW = 0.7; // outline colour / half-width of the mount being drawn
  let M0 = null;
  const begin = (g) => { M0 = g.getTransform().invertSelf(); };
  // current-frame point -> art-root coordinates (to hand attach points like the saddle back out)
  const W = (g, x, y) => { const p = M0.multiply(g.getTransform()).transformPoint(new DOMPoint(x, y)); return [p.x, p.y]; };

  function spline(g, pts, closed = true) {
    const n = pts.length, P = (i) => pts[closed ? (i + n) % n : U.clamp(i, 0, n - 1)];
    g.moveTo(pts[0][0], pts[0][1]);
    for (let i = 0; i < (closed ? n : n - 1); i++) {
      const p0 = P(i - 1), p1 = P(i), p2 = P(i + 1), p3 = P(i + 2);
      g.bezierCurveTo(p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6, p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6, p2[0], p2[1]);
    }
    if (closed) g.closePath();
  }
  function rpoly(g, pts, r = 1.4) {
    const n = pts.length, m = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
    const s = m(pts[n - 1], pts[0]); g.moveTo(s[0], s[1]);
    for (let i = 0; i < n; i++) { const p = pts[i], q = m(p, pts[(i + 1) % n]); g.arcTo(p[0], p[1], q[0], q[1], r); }
    g.closePath();
  }
  function capsule(g, x1, y1, r1, x2, y2, r2) {
    const dx = x2 - x1, dy = y2 - y1, d = Math.hypot(dx, dy) || 1e-3, a = Math.atan2(dy, dx);
    const o = Math.acos(U.clamp((r1 - r2) / d, -1, 1));
    g.moveTo(x1 + Math.cos(a + o) * r1, y1 + Math.sin(a + o) * r1);
    g.arc(x1, y1, r1, a + o, a - o + TAU);
    g.arc(x2, y2, r2, a - o, a + o);
    g.closePath();
  }
  // stroke first at double width, then fill: unions of sub-paths get a single clean outer outline
  function ink(g, fill, ol = OL, lw = LW) {
    g.lineJoin = 'round'; g.lineCap = 'round';
    if (ol) { g.strokeStyle = ol; g.lineWidth = lw * 2; g.stroke(); }
    g.fillStyle = fill; g.fill();
  }
  const vg = (g, y0, y1, c, hi = 0.3, lo = 0.3) => {
    const gr = g.createLinearGradient(0, y0, 0, y1);
    gr.addColorStop(0, lt(c, hi)); gr.addColorStop(0.5, c); gr.addColorStop(1, dk(c, lo));
    return gr;
  };
  const bounds = (pts) => { let a = Infinity, b = -Infinity; for (const p of pts) { if (p[1] < a) a = p[1]; if (p[1] > b) b = p[1]; } return [a, b]; };
  function blob(g, pts, col, o = {}) {
    const [y0, y1] = bounds(pts);
    g.beginPath(); spline(g, pts);
    ink(g, o.flat ? col : vg(g, y0, y1, col, o.hi, o.lo), o.ol === undefined ? OL : o.ol, o.lw || LW);
  }
  function plate(g, pts, col, o = {}) {
    const [y0, y1] = bounds(pts);
    g.beginPath(); rpoly(g, pts, o.r ?? 1.2);
    ink(g, o.flat ? col : vg(g, y0, y1, col, o.hi ?? 0.45, o.lo ?? 0.35), o.ol === undefined ? OL : o.ol, o.lw || LW);
  }
  function oval(g, x, y, rx, ry, col, o = {}) {
    g.beginPath(); g.ellipse(x, y, Math.max(0.1, rx), Math.max(0.1, ry), o.rot || 0, 0, TAU);
    ink(g, o.flat ? col : vg(g, y - ry, y + ry, col, o.hi, o.lo), o.ol === undefined ? OL : o.ol, o.lw || LW);
  }
  const dot = (g, x, y, r, col) => { g.fillStyle = col; g.beginPath(); g.arc(x, y, r, 0, TAU); g.fill(); };
  function stroke(g, pts, col, w, closed = false) {
    g.strokeStyle = col; g.lineWidth = w; g.lineCap = 'round'; g.lineJoin = 'round';
    g.beginPath(); if (pts.length > 2) spline(g, pts, closed); else { g.moveTo(pts[0][0], pts[0][1]); g.lineTo(pts[1][0], pts[1][1]); }
    g.stroke();
  }
  function glow(g, x, y, r, col, a) {
    const gr = g.createRadialGradient(x, y, 0, x, y, r);
    gr.addColorStop(0, hexA(col, a)); gr.addColorStop(1, hexA(col, 0));
    g.fillStyle = gr; g.beginPath(); g.arc(x, y, r, 0, TAU); g.fill();
  }
  // soft light patch (body sheen, belly shade); a < 0 darkens
  function sheen(g, x, y, rx, ry, a) {
    g.save(); g.translate(x, y); g.scale(1, ry / rx);
    const gr = g.createRadialGradient(0, 0, 0, 0, 0, rx);
    const c = a > 0 ? '255,255,255' : '0,0,0';
    gr.addColorStop(0, `rgba(${c},${Math.abs(a)})`); gr.addColorStop(1, `rgba(${c},0)`);
    g.fillStyle = gr; g.beginPath(); g.arc(0, 0, rx, 0, TAU); g.fill(); g.restore();
  }
  // tapered hair / feather strand from (x, y) along ang; bend curls it sideways
  function lock(g, x, y, ang, len, w, bend, col, o = {}) {
    const dx = Math.cos(ang), dy = Math.sin(ang), nx = -dy, ny = dx;
    const mx = x + dx * len * 0.55 + nx * bend * len * 0.3, my = y + dy * len * 0.55 + ny * bend * len * 0.3;
    const tx = x + dx * len + nx * bend * len * 0.7, ty = y + dy * len + ny * bend * len * 0.7;
    g.beginPath(); g.moveTo(x + nx * w, y + ny * w);
    g.quadraticCurveTo(mx + nx * w * 0.85, my + ny * w * 0.85, tx, ty);
    g.quadraticCurveTo(mx - nx * w * 0.85, my - ny * w * 0.85, x - nx * w, y - ny * w);
    g.closePath();
    ink(g, o.fill || col, o.ol === undefined ? OL : o.ol, o.lw || LW);
    if (o.shine !== false) {
      g.strokeStyle = 'rgba(255,255,255,0.38)'; g.lineWidth = Math.max(0.25, w * 0.3);
      g.beginPath(); g.moveTo(x + nx * w * 0.3, y + ny * w * 0.3);
      g.quadraticCurveTo(mx + nx * w * 0.4, my + ny * w * 0.4, x + dx * len * 0.75 + nx * bend * len * 0.45, y + dy * len * 0.75 + ny * bend * len * 0.45);
      g.stroke();
    }
    return [tx, ty];
  }
  // additive flame tongue
  function flame(g, x, y, ang, len, w, k, hot) {
    const dx = Math.cos(ang), dy = Math.sin(ang), nx = -dy, ny = dx, wob = Math.sin(k) * 0.4;
    const tx = x + dx * len + nx * wob * len * 0.5, ty = y + dy * len + ny * wob * len * 0.5;
    const mx = x + dx * len * 0.5 - nx * wob * len * 0.25, my = y + dy * len * 0.5 - ny * wob * len * 0.25;
    const gr = g.createLinearGradient(x, y, tx, ty);
    gr.addColorStop(0, hexA(hot[0], 0.95)); gr.addColorStop(0.4, hexA(hot[1], 0.85)); gr.addColorStop(1, hexA(hot[2], 0));
    g.fillStyle = gr; g.beginPath(); g.moveTo(x + nx * w, y + ny * w);
    g.quadraticCurveTo(mx + nx * w, my + ny * w, tx, ty);
    g.quadraticCurveTo(mx - nx * w, my - ny * w, x - nx * w, y - ny * w);
    g.closePath(); g.fill();
  }
  const FIRE = ['#fff4c0', '#ff9a2a', '#d0200a'], SHADOW = ['#e6d4ff', '#9b5cff', '#3a0a6a'];
  function flames(g, x, y, ang, len, w, n, k, hot, spread = 0.5) {
    g.save(); g.globalCompositeOperation = 'lighter';
    for (let i = 0; i < n; i++) flame(g, x + (i - n / 2) * w * 0.5, y, ang + (i / Math.max(1, n - 1) - 0.5) * spread, len * (0.7 + 0.3 * Math.sin(k * 1.7 + i * 2.1)), w, k + i * 1.3, hot);
    g.restore();
  }
  // four-point sparkle star
  function star(g, x, y, r, col) {
    g.fillStyle = col; g.beginPath();
    g.moveTo(x, y - r); g.quadraticCurveTo(x, y, x + r, y); g.quadraticCurveTo(x, y, x, y + r); g.quadraticCurveTo(x, y, x - r, y); g.quadraticCurveTo(x, y, x, y - r);
    g.fill();
  }

  // jointed limb from (x, y): segs = [[len, angle, r0, r1]], angle from straight down, + swings forward
  function limb(g, x, y, segs, col) {
    const pts = [[x, y]];
    for (const s of segs) { const [px, py] = pts[pts.length - 1]; pts.push([px + Math.sin(s[1]) * s[0], py + Math.cos(s[1]) * s[0]]); }
    g.beginPath();
    segs.forEach((s, i) => capsule(g, pts[i][0], pts[i][1], s[2], pts[i + 1][0], pts[i + 1][1], s[3]));
    ink(g, vg(g, y, pts[pts.length - 1][1], col, 0.18, 0.3));
    return pts;
  }
  function hoof(g, [x, y], r, ang, col) {
    g.save(); g.translate(x, y); g.rotate(-ang);
    g.beginPath(); rpoly(g, [[-r * 0.95, -r * 0.3], [r * 0.95, -r * 0.3], [r * 1.35, r * 1.25], [-r * 1.05, r * 1.25]], 0.5);
    ink(g, vg(g, -r * 0.3, r * 1.25, col, 0.4, 0.25));
    g.restore();
  }
  function paw(g, [x, y], r, ang, col, claw) {
    g.save(); g.translate(x, y); g.rotate(-ang * 0.6);
    oval(g, r * 0.55, r * 0.35, r * 1.4, r * 0.85, col, { lo: 0.25 });
    g.strokeStyle = OL; g.lineWidth = LW * 0.8;
    for (const tx of [0.6, 1.2]) { g.beginPath(); g.moveTo(r * tx, r * 0.1); g.lineTo(r * tx + 0.2, r * 1.1); g.stroke(); }
    if (claw) for (const tx of [0.8, 1.5, 1.95]) { g.fillStyle = claw; g.beginPath(); g.moveTo(r * tx - 0.5, r * 1.05); g.lineTo(r * tx + 1.4, r * 1.35); g.lineTo(r * tx + 0.2, r * 0.7); g.fill(); }
    g.restore();
  }
  // gait: legs [hindFar, hindNear, foreFar, foreNear] each {sw, lift}; body bob/pitch; sway for hair
  function gait(s, kind, amp) {
    const mv = s.moving, ph = s.ph, t = s.t;
    const offs = kind === 'trot' ? [0, Math.PI, Math.PI, 0] : [0, 0.75, Math.PI - 0.2, Math.PI + 0.55];
    const legs = offs.map((o) => ({ sw: mv ? Math.sin(ph + o) : Math.sin(t * 1.1 + o) * 0.04, lift: mv ? Math.max(0, Math.cos(ph + o)) : 0 }));
    const b = mv ? (kind === 'trot' ? -Math.abs(Math.sin(ph)) * amp : -(Math.sin(ph - 0.6) * 0.5 + 0.5) * amp) : Math.sin(t * 2.2) * amp * 0.12;
    const pitch = mv && kind !== 'trot' ? Math.sin(ph + 0.9) * 0.045 : 0;
    const sway = mv ? Math.sin(ph * (kind === 'trot' ? 2 : 1) - 1.2) : Math.sin(t * 1.6);
    const tt = t % 4;
    return { mv, ph, t, legs, b, pitch, sway, blink: !mv && tt > 3.55 && tt < 3.8, nod: mv ? Math.sin(ph + 0.4) * 0.07 : Math.sin(t * 1.3) * 0.03 };
  }
  function foreLeg(g, x, y, H, w, L, col, rot = 0) {
    const a1 = L.sw * 0.5 + L.lift * 0.45 + rot, a2 = a1 - L.lift * 1.6, a3 = a2 + 0.28 - L.lift * 0.3;
    const p = limb(g, x, y, [[H * 0.5, a1, w, w * 0.72], [H * 0.36, a2, w * 0.66, w * 0.5], [H * 0.12, a3, w * 0.5, w * 0.48]], col);
    return { end: p[3], ang: a3 };
  }
  function hindLeg(g, x, y, H, w, L, col, rot = 0) {
    const a1 = 0.45 + L.sw * 0.45 + L.lift * 0.25 + rot, a2 = a1 - 1.05 - L.lift * 0.55, a3 = a2 + 0.62 + L.lift * 0.45;
    const p = limb(g, x, y, [[H * 0.42, a1, w * 1.35, w * 0.8], [H * 0.38, a2, w * 0.78, w * 0.55], [H * 0.3, a3, w * 0.52, w * 0.48]], col);
    return { end: p[3], ang: a3 };
  }
  // big cute eye (chibi) or fierce glowing almond eye
  function cuteEye(g, x, y, r, P, iris = '#2a1a2e', lash) {
    if (P.blink) { g.strokeStyle = iris; g.lineWidth = 0.8; g.beginPath(); g.arc(x, y - r * 0.2, r * 0.9, 0.3, Math.PI - 0.3); g.stroke(); return; }
    oval(g, x, y, r * 0.82, r, iris, { ol: null, hi: 0.35, lo: 0.1 });
    dot(g, x - r * 0.28, y - r * 0.42, r * 0.36, '#ffffff'); dot(g, x + r * 0.3, y + r * 0.38, r * 0.16, '#ffffff');
    if (lash) { g.strokeStyle = iris; g.lineWidth = 0.6; for (const a of [-2.3, -1.9]) { g.beginPath(); g.moveTo(x + Math.cos(a) * r, y + Math.sin(a) * r); g.lineTo(x + Math.cos(a) * r * 1.5, y + Math.sin(a) * r * 1.45); g.stroke(); } }
  }
  function fierceEye(g, x, y, r, col, P, slant = 0.25) {
    glow(g, x, y, r * 4, col, 0.55);
    if (P.blink) { stroke(g, [[x - r, y], [x + r, y - r * slant]], dk(col, 0.4), 0.7); return; }
    g.beginPath(); g.moveTo(x - r * 1.2, y + r * 0.1); g.quadraticCurveTo(x, y - r * (1 + slant), x + r * 1.25, y - r * slant * 1.5); g.quadraticCurveTo(x, y + r * 0.9, x - r * 1.2, y + r * 0.1); g.closePath();
    ink(g, lt(col, 0.55), OL, 0.4);
    oval(g, x + r * 0.15, y - r * 0.05, r * 0.28, r * 0.62, dk(col, 0.7), { ol: null, flat: true });
    dot(g, x - r * 0.4, y - r * 0.3, r * 0.22, '#ffffff');
  }
  // saddle blanket, seat, flap and girth in body-local coords; (x, top) = middle of the back
  function saddle(g, x, top, bh, t) {
    const by = top + bh * 0.95;
    plate(g, [[x - 10.5, top + 0.4], [x + 8, top], [x + 9, by], [x - 11, by + 0.6]], t.cloth, { r: 2.2 });
    stroke(g, [[x - 10.6, by - 0.3], [x - 1, by + 0.4], [x + 8.8, by - 0.9]], t.trim, 1.3);
    if (t.gem) { dot(g, x - 1, by - 2.6, 1.5, t.trim); dot(g, x - 1, by - 2.6, 0.9, t.gem); }
    plate(g, [[x - 8.5, top - 3.4], [x - 6, top - 0.6], [x + 3.5, top - 0.6], [x + 6, top - 2.8], [x + 7, top + 1.4], [x - 9, top + 1.4]], t.leather, { r: 1.6, lo: 0.45 });
    plate(g, [[x - 4.6, top + 1.4], [x + 4, top + 1.4], [x + 3.6, top + bh * 0.8], [x - 4.2, top + bh * 0.8]], dk(t.leather, 0.1), { r: 1.4 });
    g.setLineDash([0.8, 0.9]); stroke(g, [[x - 3.4, top + 2.4], [x + 2.8, top + 2.4], [x + 2.6, top + bh * 0.7], [x - 3.1, top + bh * 0.7]], lt(t.leather, 0.35), 0.35, true); g.setLineDash([]);
    stroke(g, [[x + 0.2, top + bh * 0.8], [x + 0.6, top + bh * 1.95]], dk(t.leather, 0.2), 1.6);
    plate(g, [[x - 0.8, top + bh * 1.05], [x + 1.6, top + bh * 1.05], [x + 1.6, top + bh * 1.3], [x - 0.8, top + bh * 1.3]], t.metal, { r: 0.3 });
  }
  // stirrup leather (under the rider's leg) and iron (around the foot); sad = saddle point, k = art units per rider px
  function stirrupStrap(g, sad, k, t) { stroke(g, [[sad[0] + 0.6, sad[1] + 2.5], [sad[0] + 4.2 * k, sad[1] + 15 * k]], dk(t.leather, 0.15), 1.1); }
  function stirrupIron(g, sad, k, t) {
    const x = sad[0] + 4.4 * k, y = sad[1] + 17.6 * k;
    g.beginPath(); g.moveTo(x - 2.6 * k, y - 3 * k); g.lineTo(x - 3.2 * k, y + 1.2 * k); g.lineTo(x + 3.6 * k, y + 1.2 * k); g.lineTo(x + 2.8 * k, y - 3 * k);
    g.strokeStyle = OL; g.lineWidth = 1.8; g.lineJoin = 'round'; g.stroke(); g.strokeStyle = t.metal; g.lineWidth = 0.9; g.stroke();
  }
  function reins(g, sad, k, bit, t) {
    const hx = sad[0] + 5 * k, hy = sad[1] - 4 * k;
    g.strokeStyle = dk(t.leather, 0.3); g.lineWidth = 0.75; g.lineCap = 'round';
    g.beginPath(); g.moveTo(hx, hy); g.quadraticCurveTo((hx + bit[0]) / 2, Math.max(hy, bit[1]) + 3, bit[0], bit[1]); g.stroke();
  }
  // rider-side tack shared by every mount; call in both layers with the same geometry
  function riderTack(g, B, sad, k, t, bit) {
    if (!k) return; // no rider (card thumbnails)
    if (B) stirrupStrap(g, sad, k, t);
    else { stirrupIron(g, sad, k, t); if (bit) reins(g, sad, k, bit, t); }
  }

  // ---------------------------------------------------------------- horses (pony, unicorn, nightmare)
  function horse(g, s, L, o) {
    const B = L === 'back', P = gait(s, o.cute ? 'trot' : 'gallop', o.cute ? 2.2 : 3);
    OL = o.ol; LW = o.lw || 0.7; begin(g);
    const { H, bl, bh } = o, yh = bh * 0.2, rear = s.atk ? -0.34 : 0;
    const px = rear ? -bl * 0.6 : 0;
    g.save(); g.translate(0, -(H + yh) + P.b); g.translate(px, yh); g.rotate(rear || P.pitch); g.translate(-px, -yh);
    const legs = rear ? [{ sw: 0, lift: 0 }, { sw: 0.05, lift: 0 }, { sw: 0.8, lift: 1 }, { sw: 0.4, lift: 0.8 }] : P.legs;
    const far = dk(o.coat, 0.2), hr = rear || 0, w = o.legW;
    const sx = -bl * 0.1, top = -bh * 0.9;
    const sad = W(g, sx - 1, top - 1.2);
    const sw = P.sway, flow = P.mv ? 0.75 : 0;
    let bit = null;
    if (B) {
      // far legs, tail
      let l = hindLeg(g, -bl * 0.55 + 2, yh, H, w, legs[0], far, hr); hoof(g, l.end, w * 0.52, l.ang, dk(o.hoof, 0.2));
      l = foreLeg(g, bl * 0.6 + 2, yh, H, w, legs[2], far); hoof(g, l.end, w * 0.52, l.ang, dk(o.hoof, 0.2));
      const tb = [-bl * 0.98, -bh * 0.55], ta = 1.9 + flow + sw * 0.18;
      if (o.fire) flames(g, tb[0], tb[1], ta + 0.3, H * 1.2, 3.2, 5, s.t * 9 + s.ph * 2, FIRE, 0.7);
      else o.tail.forEach((c, i) => lock(g, tb[0] + i * 0.3, tb[1] + i * 0.5, ta + (i - 2) * 0.12, H * (o.cute ? 0.8 : 1.05) - Math.abs(i - 2) * 1.5, o.cute ? 3 : 2.2, sw * 0.35 - 0.15, c));
      // body
      const body = [[bl * 0.62, -bh * 0.98], [bl * 0.15, -bh * 0.84], [-bl * 0.4, -bh * 0.9], [-bl * 0.82, -bh * 0.95], [-bl * 1.04, -bh * 0.45], [-bl * 1.0, bh * 0.3], [-bl * 0.72, bh * 0.82], [-bl * 0.2, bh * 1.0], [bl * 0.35, bh * 0.98], [bl * 0.82, bh * 0.74], [bl * 1.06, bh * 0.08], [bl * 0.98, -bh * 0.62]];
      blob(g, body, o.coat, { hi: 0.35, lo: 0.28 });
      sheen(g, -bl * 0.1, -bh * 0.45, bl * 0.7, bh * 0.35, 0.35);
      sheen(g, 0, bh * 0.75, bl * 0.8, bh * 0.35, -0.12);
      stroke(g, [[-bl * 0.62, -bh * 0.35], [-bl * 0.42, bh * 0.2], [-bl * 0.5, bh * 0.7]], hexA(OL, 0.35), 0.5); // hip muscle line
      if (o.marks) o.marks(g, bl, bh);
      // neck
      const N = o.cute
        ? [[bl * 0.38, -bh * 0.92], [bl * 0.7, -bh * 1.55], [bl * 0.92, -bh * 1.95], [bl * 1.22, -bh * 1.6], [bl * 1.18, -bh * 0.4], [bl * 0.72, -bh * 0.05]]
        : [[bl * 0.38, -bh * 0.95], [bl * 0.74, -bh * 1.75], [bl * 0.98, -bh * 2.5], [bl * 1.22, -bh * 1.95], [bl * 1.24, -bh * 0.9], [bl * 1.04, bh * 0.15], [bl * 0.66, -bh * 0.3]];
      blob(g, N, o.coat, { hi: 0.3, lo: 0.2 });
      if (o.armor) o.armor(g, 'neck', bl, bh);
      // mane along the crest (quadratic through withers -> crest -> poll)
      const cr = (k) => { const a = N[0], b = N[1], c = N[2]; const u = 1 - k; return [u * u * a[0] + 2 * u * k * b[0] + k * k * c[0], u * u * a[1] + 2 * u * k * b[1] + k * k * c[1]]; };
      const nm = o.cute ? 6 : 8;
      for (let i = 0; i < nm; i++) {
        const k = 0.1 + (i / (nm - 1)) * 0.85, [mx, my] = cr(k);
        if (o.fire) { flames(g, mx, my - 1, -2.1 - flow * 0.5 + sw * 0.1, 7 + (i % 3) * 2, 2, 1, s.t * 11 + s.ph * 2 + i, FIRE); continue; }
        lock(g, mx, my - 0.5, 2.05 + flow * 0.45 + Math.sin(sw + i) * 0.1, (o.cute ? 6.5 : 8) + (i % 2) * 1.5, o.cute ? 2.6 : 1.7, 0.25 + sw * 0.1, o.mane[i % o.mane.length]);
      }
      // head
      g.save();
      if (o.cute) {
        const hx = bl * 1.02, hy = -bh * 2.15;
        g.translate(hx, hy); g.rotate(P.nod);
        const hs = o.hs || 1; g.scale(hs, hs);
        lock(g, -2, -6.2, -1.9, 6, 2.2, -0.2, far); // far ear
        oval(g, 0, 0, 8.2, 7.4, o.coat, { hi: 0.4 });
        oval(g, 6.8, 3.4, 5.6, 4.3, o.muzzle, { hi: 0.3, lo: 0.15 });
        sheen(g, -2, -3, 5, 3, 0.4);
        dot(g, 10.3, 2.6, 0.75, dk(o.muzzle, 0.45));
        stroke(g, [[6.5, 5.6], [8.4, 6.3], [10.2, 5.4]], dk(o.muzzle, 0.45), 0.55);
        oval(g, 3.4, 3.6, 2, 1.1, '#ff9ab8', { ol: null, flat: true });
        cuteEye(g, 2.4, -1, 2.5, P, '#2a1a3e', true);
        lock(g, 0.5, -6.8, -1.75 + Math.sin(s.t * 3) * 0.08, 6.5, 2.4, 0.15, o.coat); // near ear
        dot(g, 1.2, -9, 0.9, lt(o.muzzle, 0.2));
        for (let i = 0; i < 3; i++) lock(g, -1 + i * 1.8, -6.5 + i * 0.4, 0.2 + i * 0.35, 6 - i, 2.2, 0.35, o.mane[i % o.mane.length]); // forelock
        if (o.horn) o.horn(g, 2.5, -7.5);
        if (o.flower) { for (let i = 0; i < 5; i++) { const a = (i / 5) * TAU; oval(g, -4.5 + Math.cos(a) * 1.6, -5 + Math.sin(a) * 1.6, 1.3, 1.3, o.flower, { lw: 0.35 }); } dot(g, -4.5, -5, 0.9, '#ffe07a'); }
        bit = W(g, 9.5, 4.8);
      } else {
        const hx = bl * 0.98, hy = -bh * 2.42;
        g.translate(hx, hy); g.rotate(0.9 + P.nod + (rear ? -0.3 : 0));
        const hs = o.hs || 1; g.scale(hs, hs);
        g.save(); g.rotate(-0.9); lock(g, -2.5, -3.5, -1.85, 6.5, 1.6, -0.25, far); g.restore();
        const head = [[-4, -4], [2, -5], [8, -3.6], [13, -2.4], [15.6, 0], [15.2, 3], [12, 4.4], [7, 4.2], [2, 5.4], [-3, 4.6], [-5.5, 0.5]];
        blob(g, head, o.coat, { hi: 0.35, lo: 0.25 });
        stroke(g, [[-1, 4.8], [2.5, 2.2], [1.5, -0.8]], hexA(OL, 0.4), 0.5); // cheek
        oval(g, 13.3, 0.6, 1.2, 0.8, dk(o.coat, 0.55), { ol: null, flat: true });
        stroke(g, [[15.3, 2.8], [12.4, 3.2]], hexA(OL, 0.8), 0.45);
        if (o.eye) fierceEye(g, 2.2, -1.6, 1.5, o.eye, P, 0.3); else cuteEye(g, 2.2, -1.4, 1.6, P);
        if (o.armor) o.armor(g, 'head', bl, bh, s);
        g.save(); g.rotate(-0.9); lock(g, 0, -4.2, -1.75 + Math.sin(s.t * 2.5) * 0.06, 7, 1.7, 0.2, o.coat); g.restore();
        if (!o.fire) for (let i = 0; i < 3; i++) lock(g, -2.5 + i, -4.5, -0.2 + i * 0.35, 5.5 - i, 1.5, 0.3, o.mane[i % o.mane.length]);
        else flames(g, -1, -4, -1.2, 7, 1.8, 3, s.t * 10 + s.ph, FIRE, 0.8);
        bit = W(g, 12.2, 3.6);
      }
      g.restore();
      // near legs
      l = hindLeg(g, -bl * 0.55, yh, H, w, legs[1], o.coat, hr); hoof(g, l.end, w * 0.52, l.ang, o.hoof);
      if (o.feather) lock(g, l.end[0] - 0.5, l.end[1] - 3.5, 1.7, 4, 1.8, 0.2, o.feather);
      if (o.fire) flames(g, l.end[0], l.end[1] + 1, -1.7, 5, 1.6, 2, s.t * 12 + s.ph, FIRE);
      const fl = foreLeg(g, bl * 0.6, yh, H, w, legs[3], o.coat); hoof(g, fl.end, w * 0.52, fl.ang, o.hoof);
      if (o.feather) lock(g, fl.end[0] - 0.5, fl.end[1] - 3.5, 1.7, 4, 1.8, 0.2, o.feather);
      if (o.fire) flames(g, fl.end[0], fl.end[1] + 1, -1.7, 5, 1.6, 2, s.t * 12 + s.ph + 2, FIRE);
      if (o.armor) o.armor(g, 'body', bl, bh, s);
      saddle(g, sx, top, bh, o.tack);
    } else {
      // head transform is needed for the rein bit in the front layer too
      g.save();
      if (o.cute) { g.translate(bl * 1.02, -bh * 2.15); g.rotate(P.nod); g.scale(o.hs || 1, o.hs || 1); bit = W(g, 9.5, 4.8); }
      else { g.translate(bl * 0.98, -bh * 2.42); g.rotate(0.9 + P.nod + (rear ? -0.3 : 0)); g.scale(o.hs || 1, o.hs || 1); bit = W(g, 12.2, 3.6); }
      g.restore();
    }
    g.restore();
    riderTack(g, B, sad, s.k, o.tack, o.cute ? null : bit);
    return sad;
  }

  // ---------------------------------------------------------------- big cats / canines (frost lion, dire wolf)
  function beast(g, s, L, o) {
    const B = L === 'back', P = gait(s, 'gallop', 3.4);
    OL = o.ol; LW = 0.75; begin(g);
    const { H, bl, bh } = o, yh = bh * 0.25, rear = s.atk ? -0.3 : 0, px = -bl * 0.6;
    g.save(); g.translate(0, -(H + yh) + P.b); g.translate(px, yh); g.rotate(rear || P.pitch); g.translate(-px, -yh);
    const legs = rear ? [{ sw: 0, lift: 0 }, { sw: 0.05, lift: 0 }, { sw: 0.9, lift: 1 }, { sw: 0.5, lift: 0.9 }] : P.legs;
    const far = dk(o.coat, 0.25), w = o.legW, sw = P.sway, flow = P.mv ? 0.6 : 0;
    const sx = -bl * 0.12, top = -bh * 0.88;
    const sad = W(g, sx - 1, top - 1.2);
    const hx = bl * 1.14, hy = -bh * (o.wolf ? 1.55 : 1.35);
    const fore = (x, L4, col, far2) => {
      const a1 = L4.sw * 0.55 + L4.lift * 0.5, a2 = a1 - L4.lift * 1.5, a3 = a2 + 0.2;
      const p = limb(g, x, yh - 1, [[H * 0.52, a1, w * 1.15, w * 0.75], [H * 0.36, a2, w * 0.72, w * 0.6], [H * 0.1, a3, w * 0.6, w * 0.6]], col);
      paw(g, p[3], w * 0.75, a3, col, far2 ? null : o.claw);
    };
    const hind = (x, L4, col, far2) => {
      const a1 = 0.5 + L4.sw * 0.5 + L4.lift * 0.3 + (rear || 0), a2 = a1 - 1.1 - L4.lift * 0.5, a3 = a2 + 0.6 + L4.lift * 0.45;
      const p = limb(g, x, yh - 2, [[H * 0.45, a1, w * 1.55, w * 0.85], [H * 0.36, a2, w * 0.8, w * 0.6], [H * 0.27, a3, w * 0.58, w * 0.58]], col);
      paw(g, p[3], w * 0.75, a3, col, far2 ? null : o.claw);
    };
    let bit;
    if (B) {
      if (o.aura) glow(g, 0, -bh * 0.5, bl * 2.2, o.aura, 0.22);
      hind(-bl * 0.58 + 2.5, legs[0], far, true);
      fore(bl * 0.62 + 2.5, legs[2], far, true);
      // tail
      const tb = [-bl * 1.0, -bh * 0.55];
      if (o.wolf) {
        const ta = 2.75 + flow * 0.2 + sw * 0.15;
        const tip = lock(g, tb[0], tb[1], ta, bl * 0.8, 5.4, 0.55 + sw * 0.2, o.coat, { shine: false });
        lock(g, tb[0] - 2, tb[1] + 1, ta + 0.05, bl * 0.75, 2.4, 0.5 + sw * 0.2, lt(o.coat, 0.15));
        flames(g, tip[0], tip[1], -2, 9, 2.4, 3, s.t * 8 + s.ph, SHADOW, 0.9);
      } else {
        const a = -2.1 + sw * 0.25 - flow * 0.5;
        const p = limb(g, tb[0], tb[1], [[bl * 0.35, a + 3.14 + 1.2, 1.6, 1.3], [bl * 0.35, a + 3.14 + 0.5 + sw * 0.3, 1.3, 1.1]], o.coat);
        const [ex, ey] = p[2];
        for (let i = 0; i < 3; i++) o.crystal(g, ex, ey, -2.2 - i * 0.6 + sw * 0.2, 5 - i, 1.6);
      }
      // body
      const body = o.wolf
        ? [[bl * 0.65, -bh * 1.05], [bl * 0.15, -bh * 0.9], [-bl * 0.45, -bh * 0.92], [-bl * 0.9, -bh * 0.78], [-bl * 1.06, -bh * 0.1], [-bl * 0.86, bh * 0.6], [-bl * 0.42, bh * 0.45], [bl * 0.15, bh * 0.66], [bl * 0.65, bh * 1.0], [bl * 1.06, bh * 0.45], [bl * 1.12, -bh * 0.35]]
        : [[bl * 0.72, -bh * 1.0], [bl * 0.2, -bh * 0.86], [-bl * 0.4, -bh * 0.95], [-bl * 0.88, -bh * 0.82], [-bl * 1.06, -bh * 0.15], [-bl * 0.86, bh * 0.62], [-bl * 0.42, bh * 0.6], [bl * 0.1, bh * 0.78], [bl * 0.62, bh * 1.0], [bl * 1.02, bh * 0.55], [bl * 1.12, -bh * 0.3]];
      blob(g, body, o.coat, { hi: 0.35, lo: 0.3 });
      sheen(g, 0, bh * 0.6, bl * 0.8, bh * 0.35, o.wolf ? -0.2 : 0.25);
      sheen(g, -bl * 0.1, -bh * 0.5, bl * 0.75, bh * 0.3, 0.3);
      if (o.marks) o.marks(g, bl, bh, s);
      stroke(g, [[-bl * 0.66, -bh * 0.3], [-bl * 0.46, bh * 0.2], [-bl * 0.55, bh * 0.6]], hexA(OL, 0.35), 0.55);
      if (o.rim) { g.globalAlpha = 0.8; stroke(g, [[bl * 0.62, -bh * 0.98], [bl * 0.1, -bh * 0.84], [-bl * 0.45, -bh * 0.9], [-bl * 0.9, -bh * 0.74]], o.rim, 0.8); g.globalAlpha = 1; }
      if (o.wolf) {
        // fur spikes along the spine and a chest ruff, shadow wisps rising
        for (let i = 0; i < 8; i++) { const k = i / 7, x = bl * 0.75 - k * bl * 1.55, y = -bh * (0.95 - Math.sin(k * Math.PI) * 0.05); lock(g, x, y + 1, -2.4 - flow * 0.3 + Math.sin(sw + i) * 0.08, 5 + (i % 2) * 3, 1.9, -0.2, i % 2 ? lt(o.coat, 0.12) : dk(o.coat, 0.1)); }
        flames(g, -bl * 0.3, -bh * 1.1, -1.9 - flow * 0.4, 9, 2.2, 4, s.t * 7 + s.ph, SHADOW, 1.2);
        // neck
        blob(g, [[bl * 0.45, -bh * 0.95], [bl * 0.95, -bh * 1.65], [bl * 1.3, -bh * 1.55], [bl * 1.3, -bh * 0.4], [bl * 0.95, bh * 0.35]], o.coat, { hi: 0.25 });
        for (let i = 0; i < 6; i++) lock(g, bl * 1.05 + (i % 3) * 1.5, -bh * (1.1 - i * 0.28), 2.0 + flow * 0.5 + Math.sin(sw + i) * 0.1, 6, 2, 0.3, i % 2 ? lt(o.coat, 0.18) : o.coat);
        o.collar(g, bl, bh);
      } else {
        // mane: back ring of long crystalline locks, ears, head, front ring
        const n = 17;
        for (let i = 0; i < n; i++) {
          const a = -1.25 - (i / (n - 1)) * 3.45 + Math.sin(sw + i * 0.7) * 0.07 - flow * 0.12;
          lock(g, hx + Math.cos(a) * 4, hy + Math.sin(a) * 4, a, 12 + (i % 3) * 2.2, 3.4, 0.25, o.mane[i % 3]);
        }
      }
      // head
      g.save(); g.translate(hx, hy); g.rotate((o.wolf ? 0.12 : 0.02) + P.nod * 0.8 + (rear ? -0.35 : 0));
      if (o.wolf) {
        plate(g, [[-3.5, -4], [-2, -13], [2, -5]], far, { r: 0.6 });
        const head = [[-5, -5], [1, -6.2], [6, -4.4], [12, -2.8], [17.2, -1.4], [17.8, 1.4], [13, 3], [8, 4.8], [2, 6.2], [-4, 4.4], [-6, 0]];
        blob(g, head, o.coat, { hi: 0.3, lo: 0.3 });
        blob(g, [[6, 1.6], [12, 1], [17.4, 0.4], [17.2, 1.8], [12, 3.4], [7, 4.4]], lt(o.coat, 0.15), { ol: null });
        oval(g, 16.9, -0.9, 1.4, 1.1, '#101018', { ol: null, hi: 0.5 });
        if (s.atk) {
          plate(g, [[8, 3], [17, 2], [16, 6.5], [9, 6]], '#3a0a18', { r: 0.5 });
          for (let i = 0; i < 4; i++) { g.fillStyle = '#f4ecff'; g.beginPath(); g.moveTo(9.5 + i * 1.8, 3.2); g.lineTo(10.3 + i * 1.8, 5); g.lineTo(11 + i * 1.8, 3); g.fill(); }
        } else {
          stroke(g, [[17, 2], [12.5, 3.4], [8.5, 3.6]], hexA(OL, 0.9), 0.5);
          g.fillStyle = '#f4ecff'; g.beginPath(); g.moveTo(12.4, 3.2); g.lineTo(13, 5.4); g.lineTo(13.7, 3); g.fill();
        }
        stroke(g, [[1.5, -3.8], [6.5, -2.4]], hexA(OL, 0.9), 0.8);
        fierceEye(g, 4.2, -2, 1.5, o.eye, P, 0.4);
        plate(g, [[-1.5, -4.5], [0.5, -13.5], [4, -5]], o.coat, { r: 0.6 });
        plate(g, [[0, -5.5], [0.8, -11], [2.6, -5.6]], o.innerEar, { ol: null, r: 0.4 });
        bit = W(g, 13, 3.6);
      } else {
        oval(g, -1.5, -7, 2.6, 2.6, dk(o.coat, 0.15));
        const head = [[-5, -5], [1, -7], [7, -6], [11, -3], [13.8, 0], [13.2, 3.2], [9.5, 5.2], [4, 6.4], [-2, 5.5], [-5.5, 1]];
        blob(g, head, o.face, { hi: 0.35, lo: 0.25 });
        blob(g, [[7, 1], [12.5, 0.3], [13.4, 3.4], [9.4, 5.6], [5.5, 4.6]], lt(o.face, 0.5), { ol: null });
        plate(g, [[11.6, -0.8], [14.2, -0.6], [13.4, 1.2]], '#1a2e52', { r: 0.4, lw: 0.3 });
        if (s.atk) { plate(g, [[7.5, 3.2], [13, 3], [12, 7.4], [8, 7]], '#0e2446', { r: 0.6 }); g.fillStyle = '#ffffff'; for (const fx of [9.2, 11.8]) { g.beginPath(); g.moveTo(fx - 0.6, 3.3); g.lineTo(fx, 5.6); g.lineTo(fx + 0.6, 3.2); g.fill(); } }
        else { stroke(g, [[13.2, 3.3], [10.5, 4.2], [8, 4]], hexA(OL, 0.9), 0.5); g.fillStyle = '#ffffff'; g.beginPath(); g.moveTo(11, 3.8); g.lineTo(11.5, 5.6); g.lineTo(12.1, 3.6); g.fill(); }
        stroke(g, [[1.6, -4.4], [8.2, -2.8]], hexA(OL, 0.9), 0.9);
        fierceEye(g, 5.6, -2.3, 1.55, o.eye, P, 0.35);
        for (let i = 0; i < 3; i++) o.crystal(g, -1 + i * 3, -6.2 - (i === 1 ? 0.8 : 0), -1.9 + i * 0.28, 6 + (i === 1 ? 3 : 0), 1.7);
        bit = W(g, 10, 4.2);
      }
      g.restore();
      if (!o.wolf) {
        // cheek/chin ruff over the jaw
        for (let i = 0; i < 6; i++) { const a = 1.2 + i * 0.32 + Math.sin(sw + i) * 0.06; lock(g, hx - 1 + Math.cos(a) * 3, hy + 2 + Math.sin(a) * 3, a, 7 + (i % 2) * 2, 2.6, 0.3, o.mane[(i + 1) % 3]); }
        for (let i = 0; i < 5; i++) { const a = -1.6 - i * 0.42; lock(g, hx - 2 + Math.cos(a) * 2, hy + Math.sin(a) * 2, a - flow * 0.1, 6, 2.2, 0.3, o.mane[2]); }
      }
      // near legs + armour + saddle
      hind(-bl * 0.58, legs[1], o.coat);
      fore(bl * 0.62, legs[3], o.coat);
      if (o.wolf) for (const [x, i] of [[-bl * 0.2, 0], [bl * 0.6, 1]]) if (P.mv) flames(g, x, bh + 2 + i, -1.6 - flow, 6, 1.8, 2, s.t * 9 + i * 3, SHADOW);
      if (o.armor) o.armor(g, bl, bh, s);
      saddle(g, sx, top, bh, o.tack);
    } else {
      g.save(); g.translate(hx, hy); g.rotate((o.wolf ? 0.12 : 0.02) + P.nod * 0.8 + (rear ? -0.35 : 0)); bit = W(g, o.wolf ? 13 : 10, o.wolf ? 3.6 : 4.2); g.restore();
    }
    g.restore();
    riderTack(g, B, sad, s.k, o.tack, bit);
    return sad;
  }

  // ---------------------------------------------------------------- art table: facing right, ground at y=0, returns saddle [x, y]
  const TACK = {
    pony: { cloth: '#8fd0ff', trim: '#ffffff', leather: '#a0643a', metal: '#e8d27a' },
    pig: { cloth: '#e0404a', trim: '#ffd76a', leather: '#8a4a2a', metal: '#ffd76a' },
    sheep: { cloth: '#8ee0c0', trim: '#fff4a8', leather: '#9a6a44', metal: '#e8d27a' },
    choco: { cloth: '#4a7ad8', trim: '#ffe28a', leather: '#7a4a2a', metal: '#d8d8e0' },
    panda: { cloth: '#d83a3a', trim: '#ffd24a', leather: '#6a3a22', metal: '#ffd24a' },
    uni: { cloth: '#c8a8ff', trim: '#fff0a8', leather: '#f0e6ff', metal: '#ffd76a', gem: '#ff8ac8' },
    frost: { cloth: '#1e3c7a', trim: '#dff2ff', leather: '#2e3450', metal: '#dfe8f5', gem: '#6ff2ff' },
    wolf: { cloth: '#4a1426', trim: '#b58cff', leather: '#2a1a20', metal: '#b8b0c8', gem: '#ff3a6a' },
    grif: { cloth: '#8a1f2a', trim: '#ffd76a', leather: '#6a3a1a', metal: '#ffd76a', gem: '#ff4a4a' },
    night: { cloth: '#2a0c0c', trim: '#ff6a1a', leather: '#221a1e', metal: '#8a8898', gem: '#ff3a1a' },
  };
  const ART = {
    pony(g, s, L) {
      return horse(g, s, L, {
        cute: true, H: 13, bl: 14, bh: 8, legW: 2.3, coat: '#fbd3e2', muzzle: '#fff0f5', hoof: '#b0708a', ol: '#7a3f5a',
        mane: ['#c8a4ff', '#9fd4ff', '#ffb0dc', '#fff0a8'], tail: ['#c8a4ff', '#9fd4ff', '#ffb0dc', '#fff0a8', '#c8a4ff'], flower: '#ffffff', tack: TACK.pony,
      });
    },
    unicorn(g, s, L) {
      return horse(g, s, L, {
        cute: true, H: 17, bl: 16, bh: 8.5, legW: 2.4, hs: 1.05, coat: '#fbf8ff', muzzle: '#fff4fb', hoof: '#d6b24a', ol: '#6d5b9a', feather: '#e8dcff',
        mane: ['#ff9ac0', '#ffd27a', '#9ff0b8', '#9fd0ff', '#c79cff'], tail: ['#ff9ac0', '#ffd27a', '#9ff0b8', '#9fd0ff', '#c79cff'], tack: TACK.uni,
        marks(g2, bl, bh) { for (const [x, y, r] of [[-bl * 0.7, -bh * 0.2, 1.6], [-bl * 0.45, bh * 0.25, 1.1], [bl * 0.1, bh * 0.5, 1.3]]) star(g2, x, y, r, 'rgba(200,170,255,0.55)'); },
        horn(g2, x, y) {
          glow(g2, x + 3, y - 6, 7, '#fff3b0', 0.8);
          g2.beginPath(); g2.moveTo(x - 1.6, y + 0.5); g2.lineTo(x + 5.5, y - 12.5); g2.lineTo(x + 1.8, y + 0.8); g2.closePath();
          ink(g2, vg(g2, y - 12, y, '#ffd24a', 0.6, 0.2), '#8a6a1a', 0.45);
          for (let i = 1; i < 5; i++) stroke(g2, [[x - 1.2 + i * 1.3, y - i * 2.6 + 0.6], [x + 1.4 + i * 1, y - i * 2.6 - 0.8]], '#fff6c8', 0.45);
          star(g2, x + 5.5, y - 12.5, 2.2, '#ffffff');
        },
      });
    },
    nightmare(g, s, L) {
      const steel = '#4a4858', trim = '#d0402a';
      return horse(g, s, L, {
        H: 23, bl: 19, bh: 9, legW: 2.8, coat: '#241e26', hoof: '#3a2a22', ol: '#0a0608', eye: '#ff5a1a', fire: true, tail: [], mane: [], tack: TACK.night,
        marks(g2, bl, bh) { glow(g2, bl * 0.2, 0, bl * 1.5, '#ff3a1a', 0.12); },
        armor(g2, part, bl, bh, s2) {
          if (part === 'neck') {
            for (let i = 0; i < 4; i++) { const k = i / 3, x = bl * (0.5 + k * 0.42), y = -bh * (1.05 + k * 1.25); plate(g2, [[x - 2.6, y + 0.6], [x + 1.2, y - 1.6], [x + 3.4, y + 1.6], [x - 0.6, y + 4.2]], steel, { r: 1.2 }); dot(g2, x + 0.4, y + 1.2, 0.5, trim); }
          } else if (part === 'head') {
            plate(g2, [[-2, -4.4], [7, -3.8], [12.5, -2.4], [12, 0.6], [6, 1.5], [-1, 0.8]], steel, { r: 1 });
            stroke(g2, [[-1, 0.8], [6, 1.5], [12, 0.6]], trim, 0.7);
            dot(g2, 7.5, -1.4, 0.9, '#ffd76a');
            g2.save(); g2.rotate(-0.9);
            g2.beginPath(); g2.moveTo(-1, -5); g2.quadraticCurveTo(-4, -12, -9, -13); g2.quadraticCurveTo(-4, -9.5, 1.5, -4.5); g2.closePath();
            ink(g2, vg(g2, -13, -4, '#d8d0c0', 0.3, 0.4)); g2.restore();
          } else {
            plate(g2, [[bl * 0.72, -bh * 0.55], [bl * 1.08, -bh * 0.2], [bl * 1.06, bh * 0.55], [bl * 0.78, bh * 0.75], [bl * 0.6, bh * 0.1]], steel, { r: 1.2 });
            stroke(g2, [[bl * 0.62, bh * 0.1], [bl * 0.78, bh * 0.72], [bl * 1.05, bh * 0.52]], trim, 0.8);
            plate(g2, [[-bl * 1.02, -bh * 0.85], [-bl * 0.55, -bh * 0.95], [-bl * 0.5, -bh * 0.1], [-bl * 0.95, bh * 0.1]], steel, { r: 1.5 });
            stroke(g2, [[-bl * 0.95, bh * 0.08], [-bl * 0.5, -bh * 0.12]], trim, 0.8);
            for (const [x, y] of [[-bl * 0.75, -bh * 0.5], [bl * 0.9, bh * 0.2]]) { dot(g2, x, y, 1.1, '#ffd76a'); dot(g2, x, y, 0.5, '#ff5a1a'); }
            void s2;
          }
        },
      });
    },
    frostlion(g, s, L) {
      const crystal = (g2, x, y, a, len, w) => {
        const dx = Math.cos(a), dy = Math.sin(a), nx = -dy, ny = dx;
        g2.beginPath(); g2.moveTo(x + nx * w, y + ny * w); g2.lineTo(x + dx * len * 0.75 + nx * w * 0.9, y + dy * len * 0.75 + ny * w * 0.9); g2.lineTo(x + dx * len, y + dy * len);
        g2.lineTo(x + dx * len * 0.75 - nx * w * 0.9, y + dy * len * 0.75 - ny * w * 0.9); g2.lineTo(x - nx * w, y - ny * w); g2.closePath();
        const gr = g2.createLinearGradient(x, y, x + dx * len, y + dy * len); gr.addColorStop(0, '#5aa8f0'); gr.addColorStop(0.6, '#bff0ff'); gr.addColorStop(1, '#ffffff');
        ink(g2, gr, '#163e7a', 0.45);
        stroke(g2, [[x, y], [x + dx * len * 0.9, y + dy * len * 0.9]], 'rgba(255,255,255,0.6)', 0.35);
      };
      return beast(g, s, L, {
        H: 21, bl: 24, bh: 10, legW: 3.9, coat: '#8cc6f0', face: '#a6d6f7', ol: '#163a6a', eye: '#6ff2ff', claw: '#ffffff', aura: '#7fd4ff',
        mane: ['#2c68c4', '#4a90e0', '#7cc0f8'], tack: TACK.frost, crystal,
        marks(g2, bl, bh) {
          for (let i = 0; i < 4; i++) { const x = -bl * 0.75 + i * bl * 0.3; stroke(g2, [[x, -bh * 0.9], [x - 1.5, -bh * 0.35], [x + 0.5, bh * 0.1]], 'rgba(40,90,170,0.45)', 1.4); }
          sheen(g2, bl * 0.2, bh * 0.6, bl * 0.6, bh * 0.35, 0.35);
        },
        armor(g2, bl, bh) {
          const x = bl * 0.66, y = -bh * 0.35;
          blob(g2, [[x - 5.5, y - 2.5], [x + 1, y - 4.5], [x + 6.5, y - 1.5], [x + 5, y + 3.5], [x - 3.5, y + 4]], '#b8e2ff', { hi: 0.6, lo: 0.25 });
          stroke(g2, [[x - 3.5, y + 3.2], [x + 1, y - 0.2], [x + 4.6, y + 2.6]], 'rgba(40,110,200,0.55)', 0.5);
          dot(g2, x + 1, y + 0.3, 1.4, '#6ff2ff'); glow(g2, x + 1, y + 0.3, 4, '#6ff2ff', 0.6);
          crystal(g2, x - 3, y - 4, -2.0, 7, 1.6); crystal(g2, x + 1.5, y - 5, -1.6, 9, 1.8); crystal(g2, x + 6, y - 2.5, -1.2, 6, 1.4);
        },
      });
    },
    direwolf(g, s, L) {
      return beast(g, s, L, {
        wolf: true, H: 20, bl: 23, bh: 9, legW: 3.4, coat: '#3a3452', ol: '#0c0914', eye: '#ff2a5a', claw: '#e8e0f0', aura: '#9b5cff', rim: '#b08aff', innerEar: '#7a4ab0',
        tack: TACK.wolf,
        collar(g2, bl, bh) {
          g2.save(); g2.translate(bl * 1.05, -bh * 1.1); g2.rotate(-0.45);
          plate(g2, [[-2, -6], [2, -6], [2, 6], [-2, 6]], '#2a1a20', { r: 0.8 });
          for (let i = 0; i < 4; i++) { const y = -4.5 + i * 3; g2.beginPath(); g2.moveTo(1.5, y - 1); g2.lineTo(5, y); g2.lineTo(1.5, y + 1); g2.closePath(); ink(g2, vg(g2, y - 1, y + 1, '#d8d0e8', 0.5, 0.3), OL, 0.35); }
          g2.restore();
        },
        armor(g2, bl, bh) {
          const x = bl * 0.62, y = -bh * 0.3;
          plate(g2, [[x - 5, y - 3], [x + 4, y - 4.5], [x + 7, y], [x + 4, y + 4.5], [x - 4, y + 4]], '#4a4458', { r: 1.4 });
          for (const a of [-2.2, -1.6]) { g2.beginPath(); g2.moveTo(x - 1 + Math.cos(a + 1.57) * 1.4, y - 3 + Math.sin(a + 1.57) * 1.4); g2.lineTo(x - 1 + Math.cos(a) * 7, y - 3 + Math.sin(a) * 7); g2.lineTo(x - 1 - Math.cos(a + 1.57) * 1.4, y - 3 - Math.sin(a + 1.57) * 1.4); g2.closePath(); ink(g2, '#e8e0d0', OL, 0.4); }
          dot(g2, x + 1, y + 0.5, 1.3, '#ff2a5a'); glow(g2, x + 1, y + 0.5, 4, '#ff2a5a', 0.5);
        },
      });
    },
    piggy(g, s, L) {
      const B = L === 'back', P = gait(s, 'trot', 2.6);
      OL = '#8a3a4e'; LW = 0.7; begin(g);
      const H = 7, bl = 14, bh = 10.5, yh = bh * 0.55, coat = '#f9bccb';
      g.save(); g.translate(0, -(H + yh) + P.b);
      const sad = W(g, -2, -bh - 0.8);
      const hx = bl * 0.95, hy = -bh * 0.35;
      const leg = (x, Lg, col) => {
        const a1 = Lg.sw * 0.5 + Lg.lift * 0.4, a2 = a1 - Lg.lift * 1.1;
        const p = limb(g, x, yh - 2, [[H * 0.62, a1, 2.9, 2.4], [H * 0.55, a2, 2.4, 2.2]], col);
        hoof(g, p[2], 1.9, a2, '#b8687c');
      };
      let bit = null;
      if (B) {
        leg(-bl * 0.55 + 2, P.legs[0], dk(coat, 0.18)); leg(bl * 0.55 + 2, P.legs[2], dk(coat, 0.18));
        g.strokeStyle = OL; g.lineWidth = 2.1; g.beginPath(); g.arc(-bl * 1.08, -bh * 0.35, 2.4, 0.3 + P.sway * 0.3, 0.3 + P.sway * 0.3 + Math.PI * 1.6); g.stroke();
        g.strokeStyle = coat; g.lineWidth = 0.9; g.stroke();
        blob(g, [[bl * 0.85, -bh * 0.82], [0, -bh * 1.0], [-bl * 0.82, -bh * 0.85], [-bl * 1.05, 0], [-bl * 0.8, bh * 0.8], [0, bh * 1.0], [bl * 0.8, bh * 0.8], [bl * 1.05, 0]], coat, { hi: 0.4, lo: 0.2 });
        sheen(g, -2, -bh * 0.5, bl * 0.65, bh * 0.35, 0.45);
        oval(g, -bl * 0.45, bh * 0.05, 3.2, 2.4, '#f39ab0', { ol: null, flat: true }); oval(g, -bl * 0.2, bh * 0.45, 2, 1.5, '#f39ab0', { ol: null, flat: true });
        g.save(); g.translate(hx, hy); g.rotate(P.nod);
        lock(g, -4, -6.5, -2.1 + Math.sin(s.t * 3) * 0.1, 6, 2.6, -0.4, dk(coat, 0.15));
        oval(g, 0, 0, 8.4, 7.8, coat, { hi: 0.45 });
        sheen(g, -2, -3.5, 5, 3, 0.4);
        oval(g, 7.6, 1.4, 2.8, 3.4, '#f59aae', { hi: 0.3 });
        oval(g, 7, 0.5, 0.55, 0.95, '#9a3a50', { ol: null, flat: true }); oval(g, 8.6, 0.6, 0.55, 0.95, '#9a3a50', { ol: null, flat: true });
        cuteEye(g, 2.6, -2, 2.1, P, '#3a1a28');
        oval(g, 2.8, 2.8, 1.8, 1, '#ff7a9a', { ol: null, flat: true });
        stroke(g, [[3.5, 5], [5, 5.8], [6.4, 5.1]], '#9a3a50', 0.55);
        lock(g, -0.5, -7, -1.2 + Math.sin(s.t * 3 + 1) * 0.12, 6.5, 2.8, 0.6, coat); // floppy near ear
        g.restore();
        leg(-bl * 0.55, P.legs[1], coat); leg(bl * 0.55, P.legs[3], coat);
        saddle(g, -1, -bh * 0.95, bh * 0.8, TACK.pig);
        for (const tx of [-11, 8]) { stroke(g, [[tx, -bh * 0.2], [tx - 0.5, -bh * 0.2 + 3 + Math.sin(s.t * 4 + tx) * 0.5]], '#ffd76a', 0.7); dot(g, tx - 0.5, -bh * 0.2 + 3.6, 1, '#ffd76a'); }
      } else { g.save(); g.translate(hx, hy); bit = W(g, 6, 4); g.restore(); }
      g.restore();
      riderTack(g, B, sad, s.k, TACK.pig, null); void bit;
      return sad;
    },
    sheep(g, s, L) {
      const B = L === 'back', P = gait(s, 'trot', 2.2);
      OL = '#5a4a5a'; LW = 0.7; begin(g);
      const H = 10, bl = 14, bh = 10, yh = bh * 0.5, wool = '#f7f3ec', face = '#3d3342';
      g.save(); g.translate(0, -(H + yh) + P.b);
      const sad = W(g, -1.5, -bh - 1.6);
      if (B) {
        const leg = (x, Lg, col) => { const l = foreLeg(g, x, yh - 3, H + 2, 1.8, Lg, col); hoof(g, l.end, 1.2, l.ang, '#1a1418'); };
        leg(-bl * 0.55 + 2, P.legs[0], dk(face, 0.2)); leg(bl * 0.5 + 2, P.legs[2], dk(face, 0.2));
        // wool cloud (one path of overlapping puffs -> single outline)
        const puffs = [];
        for (let i = 0; i < 16; i++) { const a = (i / 16) * TAU; puffs.push([Math.cos(a) * bl * 0.88, Math.sin(a) * bh * 0.78, 4.4 + (i % 3) * 0.6]); }
        g.beginPath(); for (const [x, y, r] of puffs) { g.moveTo(x + r, y); g.arc(x, y, r, 0, TAU); }
        g.moveTo(bl * 0.9, 0); g.ellipse(0, 0, bl * 0.9, bh * 0.8, 0, 0, TAU);
        ink(g, vg(g, -bh - 4, bh + 4, wool, 0.4, 0.22));
        for (const [x, y, r] of [[-6, -6, 3.4], [2, -7.5, 3.8], [8, -4, 3], [-10, 0, 3], [0, -1, 3.2], [-4, 5, 2.8], [6, 4, 2.6]]) { sheen(g, x - 0.8, y - 1, r, r * 0.8, 0.8); g.strokeStyle = 'rgba(160,140,150,0.45)'; g.lineWidth = 0.5; g.beginPath(); g.arc(x, y, r * 0.7, 0.4, 2.2); g.stroke(); }
        // head
        g.save(); g.translate(bl * 1.0, -bh * 0.75); g.rotate(P.nod);
        lock(g, -2.5, -1.8, 3.2 + Math.sin(s.t * 2.5) * 0.15, 5.5, 1.6, 0.2, dk(face, 0.2));
        g.beginPath(); g.ellipse(2.6, 1.2, 5.6, 6.4, -0.35, 0, TAU); ink(g, vg(g, -5, 7, face, 0.25, 0.25));
        sheen(g, 3.5, 3, 3, 2, 0.12);
        cuteEye(g, 3.8, -0.4, 1.8, P, '#140c14');
        if (!P.blink) { g.strokeStyle = '#ffffff'; g.lineWidth = 0.4; g.beginPath(); g.ellipse(3.8, -0.4, 1.65, 2, 0, 0, TAU); g.stroke(); }
        oval(g, 4.2, 3.3, 1.5, 0.9, '#ff8aa8', { ol: null, flat: true });
        stroke(g, [[6.2, 5], [7, 5.6], [7.8, 5]], '#140c14', 0.5);
        g.strokeStyle = '#d9a84a'; g.lineWidth = 1.6; g.beginPath(); g.arc(-1.8, -2.2, 2.6, -2.6, 1.9); g.stroke();
        g.strokeStyle = '#8a6a2a'; g.lineWidth = 0.4; g.stroke();
        lock(g, -0.5, -1, 3.0 + Math.sin(s.t * 2.5 + 1) * 0.15, 6, 1.8, -0.2, face);
        g.beginPath(); for (const [x, y, r] of [[0, -5, 2.6], [3, -6, 2.8], [5.5, -4.8, 2.2], [1.5, -3.5, 2]]) { g.moveTo(x + r, y); g.arc(x, y, r, 0, TAU); }
        ink(g, vg(g, -9, -2, wool, 0.4, 0.15));
        g.restore();
        leg(-bl * 0.55, P.legs[1], face); leg(bl * 0.5, P.legs[3], face);
        saddle(g, -0.5, -bh * 0.98, bh * 0.75, TACK.sheep);
        // ribbon bow on the tail end
        const bx = -bl * 0.9, by = -bh * 0.55;
        lock(g, bx, by, -2.6, 4, 1.6, 0, '#ff8ab0'); lock(g, bx, by, -0.6, 4, 1.6, 0, '#ff8ab0'); oval(g, bx, by, 1.2, 1.2, '#ff5a90');
      }
      g.restore();
      riderTack(g, B, sad, s.k, TACK.sheep, null);
      return sad;
    },
    chocobo(g, s, L) {
      const B = L === 'back', P = gait(s, 'trot', 2.8);
      OL = '#7a4a10'; LW = 0.7; begin(g);
      const H = 18, bl = 12, bh = 9.5, yh = bh * 0.45, col = '#ffd23f', leg = '#f39a2e';
      g.save(); g.translate(0, -(H + yh) + P.b);
      const sad = W(g, -2.5, -bh - 0.8);
      const hx = bl * 1.2, hy = -bh * 2.55;
      let bit;
      const birdLeg = (x, Lg, c) => {
        const a1 = -0.42 + Lg.sw * 0.55 + Lg.lift * 0.3, a2 = a1 + 0.84 - Lg.lift * 1.3;
        const p = limb(g, x, yh, [[H * 0.5, a1, 2.3, 1.4], [H * 0.52, a2, 1.3, 1.1]], c);
        const [ex, ey] = p[2];
        for (const [a, l] of [[0.15, 4.4], [0.55, 3.6], [2.9, 2.2]]) { const aa = a - Lg.lift * 0.8; stroke(g, [[ex, ey], [ex + Math.cos(aa) * l, ey + Math.sin(aa) * l]], OL, 1.9); stroke(g, [[ex, ey], [ex + Math.cos(aa) * l, ey + Math.sin(aa) * l]], c, 1); }
      };
      if (B) {
        birdLeg(1.5, P.legs[0], dk(leg, 0.2));
        for (let i = 0; i < 5; i++) lock(g, -bl * 0.95, -bh * 0.35 + i * 0.6, -2.55 + i * 0.22 + P.sway * 0.1 - (P.mv ? 0.2 : 0), 12 - Math.abs(i - 2) * 1.6, 2.4, -0.25, i % 2 ? lt(col, 0.15) : dk(col, 0.08));
        blob(g, [[bl * 0.9, -bh * 0.7], [0, -bh * 1.0], [-bl * 0.9, -bh * 0.78], [-bl * 1.15, -bh * 0.1], [-bl * 0.8, bh * 0.72], [0, bh * 1.0], [bl * 0.8, bh * 0.72], [bl * 1.1, 0]], col, { hi: 0.4, lo: 0.2 });
        sheen(g, bl * 0.2, bh * 0.4, bl * 0.6, bh * 0.4, 0.45);
        // neck & head
        blob(g, [[bl * 0.4, -bh * 0.8], [bl * 0.8, -bh * 1.6], [bl * 0.85, -bh * 2.35], [bl * 1.45, -bh * 2.45], [bl * 1.4, -bh * 1.6], [bl * 1.15, -bh * 0.2]], col, { hi: 0.3 });
        for (let i = 0; i < 4; i++) lock(g, bl * (1.3 - i * 0.05), -bh * (0.6 + i * 0.35), 1.2 + i * 0.1, 4, 1.6, 0.3, lt(col, 0.3));
        g.save(); g.translate(hx, hy); g.rotate(P.nod * 1.5);
        for (let i = 0; i < 3; i++) lock(g, -1.5 + i * 1.2, -4, -2.1 + i * 0.35 + Math.sin(s.t * 4 + i) * 0.08 - (P.mv ? 0.3 : 0), 7 - i * 1.2, 1.7, -0.3, i === 1 ? lt(col, 0.2) : col);
        oval(g, 0, 0, 5.4, 5, col, { hi: 0.4 });
        g.beginPath(); g.moveTo(3.4, -1.8); g.quadraticCurveTo(9.5, -1.4, 11, 0.6); g.quadraticCurveTo(7.5, 2.2, 3.2, 1.8); g.closePath(); ink(g, vg(g, -2, 2, '#ff9a2a', 0.4, 0.2));
        stroke(g, [[3.6, 0.6], [9.6, 0.4]], hexA(OL, 0.8), 0.4);
        cuteEye(g, 1.4, -1, 1.8, P, '#1a3a6a');
        oval(g, 1.8, 2.2, 1.4, 0.8, '#ff9a7a', { ol: null, flat: true });
        bit = W(g, 6, 1.4);
        g.restore();
        // wing
        const f = P.mv ? Math.sin(P.ph * 2) * 0.25 : Math.sin(s.t * 2) * 0.05;
        g.save(); g.translate(bl * 0.25, -bh * 0.45); g.rotate(f);
        for (let i = 0; i < 4; i++) lock(g, 1 - i * 1.4, i * 1.2, 2.9 + i * 0.1, 10 - i, 2.2, 0.2, i % 2 ? dk(col, 0.1) : lt(col, 0.1));
        blob(g, [[3, -2], [-4, -3], [-8, 0], [-3, 3.5], [3, 2]], col, { hi: 0.3 });
        g.restore();
        oval(g, 0, bh * 0.55, 4.5, 3.8, lt(col, 0.2), { hi: 0.3 });
        birdLeg(-1, P.legs[1], leg);
        saddle(g, -1.5, -bh * 0.95, bh * 0.75, TACK.choco);
      } else { g.save(); g.translate(hx, hy); g.rotate(P.nod * 1.5); bit = W(g, 6, 1.4); g.restore(); }
      g.restore();
      riderTack(g, B, sad, s.k, TACK.choco, bit);
      return sad;
    },
    panda(g, s, L) {
      const B = L === 'back', P = gait(s, 'trot', 2.4);
      OL = '#1a1620'; LW = 0.7; begin(g);
      const H = 10, bl = 16, bh = 10.5, yh = bh * 0.4, white = '#f6f2ea', black = '#2a2630';
      g.save(); g.translate(0, -(H + yh) + P.b);
      const sad = W(g, -3, -bh - 1);
      const hx = bl * 1.0, hy = -bh * 1.15;
      if (B) {
        const leg = (x, Lg, col) => {
          const a1 = Lg.sw * 0.5 + Lg.lift * 0.45, a2 = a1 - Lg.lift * 1.2;
          const p = limb(g, x, yh - 2, [[H * 0.62, a1, 3.8, 3.2], [H * 0.5, a2, 3.2, 2.9]], col);
          paw(g, p[2], 2.4, a2, col, null);
        };
        leg(-bl * 0.55 + 2, P.legs[0], dk(black, 0.2)); leg(bl * 0.55 + 2, P.legs[2], dk(black, 0.2));
        oval(g, -bl * 1.02, -bh * 0.35, 2.8, 2.6, white);
        blob(g, [[bl * 0.7, -bh * 0.95], [0, -bh * 1.0], [-bl * 0.8, -bh * 0.8], [-bl * 1.02, 0], [-bl * 0.8, bh * 0.75], [0, bh * 0.95], [bl * 0.75, bh * 0.75], [bl * 1.05, 0]], white, { hi: 0.4, lo: 0.2 });
        blob(g, [[bl * 0.15, -bh * 1.0], [bl * 0.6, -bh * 1.02], [bl * 1.02, -bh * 0.35], [bl * 0.98, bh * 0.4], [bl * 0.55, bh * 0.3], [bl * 0.28, -bh * 0.35]], black, { hi: 0.2 });
        sheen(g, -3, -bh * 0.5, bl * 0.6, bh * 0.35, 0.4);
        g.save(); g.translate(hx, hy); g.rotate(P.nod);
        oval(g, -4.5, -6.8, 2.8, 2.8, black); oval(g, 3.6, -7.6, 2.8, 2.8, black);
        oval(g, 0, 0, 8.6, 7.8, white, { hi: 0.4 });
        sheen(g, -2, -3.5, 5, 3, 0.35);
        oval(g, 3.2, -0.6, 2.4, 3.2, black, { ol: null, rot: -0.5, hi: 0.2 });
        if (P.blink) stroke(g, [[2.2, -0.2], [4.4, -0.8]], '#ffffff', 0.6);
        else { dot(g, 3.5, -0.9, 1.35, '#ffffff'); dot(g, 3.7, -0.7, 0.8, '#101014'); dot(g, 3.3, -1.2, 0.35, '#ffffff'); }
        oval(g, 6.6, 3, 3.4, 2.6, '#ffffff', { hi: 0.2 });
        oval(g, 8.6, 1.9, 1.3, 0.95, '#121016', { ol: null, hi: 0.5 });
        stroke(g, [[8.4, 2.9], [8, 4.2], [6.8, 4.6]], '#121016', 0.5);
        oval(g, 1.8, 3.3, 1.6, 0.9, '#ff9ab0', { ol: null, flat: true });
        // bamboo sprig in the mouth
        stroke(g, [[4.5, 5.2], [14, 2.6]], '#2e6a22', 2); stroke(g, [[4.5, 5.2], [14, 2.6]], '#7ccf4a', 1.1);
        for (const k of [0.35, 0.7]) dot(g, 4.5 + 9.5 * k, 5.2 - 2.6 * k, 0.7, '#3e8a2a');
        lock(g, 12, 2.9, -0.9 + Math.sin(s.t * 3) * 0.2, 5, 1.4, 0.2, '#7ccf4a', { ol: '#2e6a22' }); lock(g, 12.5, 2.8, 0.5, 4, 1.2, -0.2, '#8adf5a', { ol: '#2e6a22' });
        g.restore();
        leg(-bl * 0.55, P.legs[1], black); leg(bl * 0.55, P.legs[3], black);
        saddle(g, -2, -bh * 0.96, bh * 0.75, TACK.panda);
        dot(g, bl * 0.72, -bh * 0.05, 1.8, '#8a6a1a'); dot(g, bl * 0.72, -bh * 0.05, 1.4, '#ffd24a'); dot(g, bl * 0.72, bh * 0.05 + 0.6, 0.4, '#6a4a0a');
      }
      g.restore();
      riderTack(g, B, sad, s.k, TACK.panda, null);
      return sad;
    },
    griffon(g, s, L) {
      const B = L === 'back', P = gait(s, 'gallop', 2);
      OL = '#4a2a0a'; LW = 0.75; begin(g);
      const H = 16, bl = 20, bh = 9.5, gold = '#dca848', white = '#f8f1e2';
      const hover = -16 - (P.mv ? Math.sin(P.ph) * 2 : Math.sin(s.t * 2.2) * 2.5);
      const f = Math.sin(P.mv ? P.ph * 1 : s.t * 3.2); // wing beat
      g.save(); g.translate(0, -(H) + hover); g.rotate(P.mv ? -0.06 : 0);
      const sad = W(g, -bl * 0.15, -bh - 1.3);
      const hx = bl * 1.12, hy = -bh * 1.75;
      const wing = (near) => {
        const ang = 0.42 + f * 0.7, span = 38;
        g.save(); g.translate(bl * 0.3 + (near ? 0 : 3), -bh * 0.75); g.rotate(ang + (near ? 0 : 0.12));
        const c1 = near ? white : dk(white, 0.18), c2 = near ? gold : dk(gold, 0.2), c3 = near ? '#f4d27a' : dk('#f4d27a', 0.2);
        for (let i = 10; i >= 0; i--) {
          const k = i / 10, bx = -span * k, by = -Math.sin(k * Math.PI) * span * 0.14;
          lock(g, bx, by, Math.PI * 0.5 + 0.35 + k * 0.75, span * (0.24 + k * 0.4), 2.6, 0.12, i % 3 === 0 ? c2 : i % 3 === 1 ? c3 : c1);
        }
        for (let i = 7; i >= 0; i--) { const k = i / 7; lock(g, -span * k * 0.8, -Math.sin(k * Math.PI) * span * 0.12 + 1, Math.PI * 0.5 + 0.3 + k * 0.6, span * (0.14 + k * 0.16), 2.4, 0.1, i % 2 ? c1 : c3); }
        blob(g, [[3, -2.5], [-span * 0.45, -span * 0.2], [-span * 0.95, -span * 0.02], [-span * 0.55, span * 0.08], [-span * 0.1, 5]], c1, { hi: 0.4 });
        g.restore();
      };
      const nearBack = f > -0.3; // only a lowered near wing may pass in front of the rider
      let bit;
      if (B) {
        glow(g, 0, -bh * 0.3, 52, '#ffd76a', 0.25);
        wing(false);
        // far legs: talon tucked, hind trailing
        const talon = (x, k, col) => {
          const a1 = 0.9 + k * 0.25, a2 = a1 + 0.9;
          const p = limb(g, x, bh * 0.2, [[H * 0.42, a1, 2.2, 1.6], [H * 0.34, a2, 1.6, 1.3]], col);
          const [ex, ey] = p[2];
          for (const a of [0.2, 0.9, 1.6]) { g.strokeStyle = '#2a1a10'; g.lineWidth = 0.9; g.beginPath(); g.moveTo(ex, ey); g.quadraticCurveTo(ex + Math.cos(a) * 2.5, ey + Math.sin(a) * 2.5, ex + Math.cos(a + 0.6) * 3.4, ey + Math.sin(a + 0.6) * 3.4); g.stroke(); }
        };
        talon(bl * 0.62 + 2, Math.sin(s.t * 2), '#c8962a');
        const hl = hindLeg(g, -bl * 0.58 + 2, 0, H, 3, { sw: -0.9 + Math.sin(s.t * 2) * 0.1, lift: 0.7 }, dk(gold, 0.2), -0.35);
        paw(g, hl.end, 2.2, hl.ang, dk(gold, 0.2), null);
        // tail
        const tp = limb(g, -bl * 1.0, -bh * 0.4, [[bl * 0.45, -1.2 - P.sway * 0.15, 1.5, 1.2], [bl * 0.35, -1.5 - P.sway * 0.3, 1.2, 1]], gold);
        lock(g, tp[2][0], tp[2][1], Math.PI + 0.2 + P.sway * 0.2, 7, 2.4, 0.2, '#8a5a1a');
        // body: lion rear, feathered chest
        blob(g, [[bl * 0.72, -bh * 1.0], [bl * 0.2, -bh * 0.88], [-bl * 0.4, -bh * 0.95], [-bl * 0.88, -bh * 0.8], [-bl * 1.06, -bh * 0.1], [-bl * 0.84, bh * 0.62], [-bl * 0.4, bh * 0.6], [bl * 0.1, bh * 0.8], [bl * 0.62, bh * 1.0], [bl * 1.02, bh * 0.55], [bl * 1.12, -bh * 0.3]], gold, { hi: 0.35, lo: 0.3 });
        sheen(g, -bl * 0.3, -bh * 0.5, bl * 0.6, bh * 0.3, 0.35);
        blob(g, [[bl * 0.05, -bh * 0.95], [bl * 0.72, -bh * 1.08], [bl * 1.16, -bh * 0.35], [bl * 1.02, bh * 0.62], [bl * 0.55, bh * 1.0], [bl * 0.2, bh * 0.5], [bl * 0.05, 0]], white, { hi: 0.3 });
        for (let r = 0; r < 3; r++) for (let i = 0; i < 4; i++) { const x = bl * (0.35 + r * 0.22), y = -bh * 0.6 + i * bh * 0.4; g.strokeStyle = 'rgba(160,120,60,0.45)'; g.lineWidth = 0.5; g.beginPath(); g.arc(x, y, 2.2, 0.2, Math.PI - 0.2); g.stroke(); }
        // neck ruff + eagle head
        blob(g, [[bl * 0.7, -bh * 0.9], [bl * 1.0, -bh * 1.75], [bl * 1.3, -bh * 1.7], [bl * 1.25, -bh * 0.5], [bl * 1.0, bh * 0.1]], white, { hi: 0.35 });
        for (let i = 0; i < 5; i++) lock(g, bl * (0.98 + (i % 2) * 0.1), -bh * (0.6 + i * 0.22), 2.3 + P.sway * 0.08 + (P.mv ? 0.3 : 0), 6, 1.8, 0.3, i % 2 ? white : '#efe4c8', { ol: hexA(OL, 0.5) });
        g.save(); g.translate(hx, hy); g.rotate(P.nod);
        for (let i = 0; i < 4; i++) lock(g, -3, -2 + i * 1.3, Math.PI - 0.3 + i * 0.18 + P.sway * 0.1, 8 - i, 1.9, -0.2, i % 2 ? white : '#e6d8b8');
        blob(g, [[-4.5, -4], [1, -6], [5.5, -4.5], [7.2, -1], [6, 3], [1, 5], [-4, 3.5]], white, { hi: 0.4 });
        g.beginPath(); g.moveTo(5.5, -3.2); g.quadraticCurveTo(11.5, -3.2, 12.2, 1.2); g.quadraticCurveTo(12.4, 3.2, 10.6, 3.6); g.quadraticCurveTo(10.8, 1.6, 9.2, 1.4); g.lineTo(5.8, 2.4); g.closePath();
        ink(g, vg(g, -3, 4, '#ffcc2a', 0.4, 0.3));
        stroke(g, [[6, 0.4], [9.4, 0.6]], hexA(OL, 0.7), 0.4);
        stroke(g, [[0.6, -3.8], [5.2, -2.6]], '#5a3a10', 0.9);
        fierceEye(g, 2.8, -1.8, 1.4, '#ffb020', P, 0.3);
        bit = W(g, 6.5, 2);
        g.restore();
        if (nearBack) wing(true);
        // near legs
        talon(bl * 0.62, Math.sin(s.t * 2 + 1), '#e0ac3a');
        const hn = hindLeg(g, -bl * 0.58, 0, H, 3, { sw: -0.8 + Math.sin(s.t * 2 + 1) * 0.1, lift: 0.6 }, gold, -0.35);
        paw(g, hn.end, 2.2, hn.ang, gold, null);
        // golden barding
        plate(g, [[bl * 0.7, -bh * 0.3], [bl * 1.1, -bh * 0.05], [bl * 1.02, bh * 0.6], [bl * 0.72, bh * 0.75]], '#ffd24a', { r: 1.2, hi: 0.55 });
        dot(g, bl * 0.9, bh * 0.25, 1.3, '#ff4a4a'); glow(g, bl * 0.9, bh * 0.25, 3.5, '#ff4a4a', 0.5);
        saddle(g, -bl * 0.14, -bh * 0.9, bh, TACK.grif);
      } else {
        g.save(); g.translate(hx, hy); g.rotate(P.nod); bit = W(g, 6.5, 2); g.restore();
        if (!nearBack) wing(true);
      }
      g.restore();
      riderTack(g, B, sad, s.k, TACK.grif, bit);
      return sad;
    },
  };

  // ---------------------------------------------------------------- data
  const LIST = [
    { id: 'm_pony', name: '아기 조랑말 뽀니', grade: 0, art: 'pony', scale: 1.7, w: 46, h: 44, spd: 20, el: 'holy', dust: '#e8d9c0' },
    { id: 'm_piggy', name: '꿀꿀 돼지 꿀떡이', grade: 0, art: 'piggy', scale: 1.7, w: 40, h: 34, spd: 20, el: 'none', dust: '#e8d9c0' },
    { id: 'm_sheep', name: '복슬 양 몽실이', grade: 1, art: 'sheep', scale: 1.7, w: 42, h: 36, spd: 30, el: 'none', dust: '#e8d9c0' },
    { id: 'm_chocobo', name: '노랑 꼬꼬새', grade: 1, art: 'chocobo', scale: 1.6, w: 40, h: 58, spd: 30, el: 'holy', dust: '#e8d9c0' },
    { id: 'm_panda', name: '꼬마 판다 대나무', grade: 2, art: 'panda', scale: 1.7, w: 46, h: 38, spd: 40, el: 'nature', dust: '#e8d9c0' },
    { id: 'm_unicorn', name: '솜사탕 유니콘', grade: 2, art: 'unicorn', scale: 1.7, w: 52, h: 54, spd: 40, el: 'holy', dust: '#ffe6f6', sparkle: '#ffd6f0' },
    { id: 'm_frostlion', name: '서리 사자 빙왕', grade: 3, art: 'frostlion', scale: 1.9, w: 72, h: 56, spd: 55, el: 'ice', dust: '#dff2ff', trail: 'ice' },
    { id: 'm_direwolf', name: '그림자 늑대 나이트팽', grade: 3, art: 'direwolf', scale: 1.9, w: 74, h: 56, spd: 55, el: 'shadow', dust: '#6b4aa0', sparkle: '#b07cff' },
    { id: 'm_griffon', name: '황금 그리폰 아우룸', grade: 4, art: 'griffon', scale: 1.9, w: 86, h: 80, spd: 70, el: 'holy', fly: true, sparkle: '#ffe28a' },
    { id: 'm_nightmare', name: '지옥마 헬파이어', grade: 4, art: 'nightmare', scale: 1.95, w: 62, h: 62, spd: 70, el: 'fire', dust: '#4a2a20', trail: 'fire' },
  ];
  const BY_ID = {};
  for (const m of LIST) BY_ID[m.id] = m;
  const OWN_BONUS = [{ hp: 20 }, { hp: 40 }, { hp: 60, def: 1 }, { hp: 100, def: 3 }, { hp: 160, def: 5 }];
  const PRICE = { one: 200, eleven: 2000 };
  const CUTE = (d) => d.grade <= 2;

  function migrate(p) {
    p.s.mounts = p.s.mounts || {};
    if (!Object.keys(p.s.mounts).length) { p.s.mounts.m_pony = 1; p.s.mount = 'm_pony'; }
    if (p.s.mount && !BY_ID[p.s.mount]) p.s.mount = null;
    if (p.s.autoRide === undefined) p.s.autoRide = true;
  }
  function bonuses(p) {
    const out = [];
    for (const id in p.s.mounts || {}) out.push(OWN_BONUS[BY_ID[id].grade]);
    return out;
  }
  const speedMul = (e) => (e.mounted && e.mountId ? 1 + BY_ID[e.mountId].spd / 100 : 1);

  // ---------------------------------------------------------------- mount / dismount
  function mount(e, game, quiet) {
    if (e.mounted || !e.mountId || e.dead) return false;
    e.mounted = true; e.ridePh = 0; e.action = null;
    puff(e, game);
    if (!quiet) U.sfx.ui();
    return true;
  }
  function dismount(e, game) {
    if (!e.mounted) return false;
    e.mounted = false;
    puff(e, game);
    return true;
  }
  function puff(e, game) {
    const d = BY_ID[e.mountId];
    VFX.dust(e.x, e.y, 14, d && d.sparkle ? d.sparkle : '#e8d9c0');
    if (d && d.grade >= 3) VFX.flash(e.x, e.y, 120, Looks.ELEM[d.el].color, 0.4);
  }
  // per-frame: gallop phase from distance travelled, dust, elemental trails, idle emotes
  function tick(e, dt, game) {
    if (!e.mounted) return;
    const d = BY_ID[e.mountId];
    const dxm = e.x - (e.rideLX ?? e.x);
    if (Math.abs(dxm) > 0.25) e.rideFace = dxm > 0 ? 1 : -1;
    else if (e.rideFace === undefined) e.rideFace = e.dir === 1 ? -1 : 1;
    const moved = Math.hypot(e.x - (e.rideLX ?? e.x), e.y - (e.rideLY ?? e.y));
    e.rideLX = e.x; e.rideLY = e.y;
    e.rideMoving = moved > 0.3;
    e.ridePh = (e.ridePh || 0) + (moved / (22 * d.scale)) * Math.PI;
    e.rideT = (e.rideT || 0) + dt;
    // particles: full rate for the player, reduced for others, none off-screen
    const pl = game.player, fx = e === pl ? 1 : pl && Math.hypot(e.x - pl.x, e.y - pl.y) < 900 ? 0.25 : 0;
    if (fx && e.rideMoving && Math.random() < dt * 14 * fx && !d.fly) VFX.dust(e.x - e.rideFace * 14, e.y, 1, d.dust || '#e8d9c0');
    if (fx && e.rideMoving && d.trail && Math.random() < dt * 30 * fx) VFX.trail(d.trail, e.x - e.rideFace * 20, e.y - 30, dt, false);
    if (fx && d.sparkle && Math.random() < dt * (e.rideMoving ? 12 : 3) * fx) VFX.sparkle(e.x + U.rand(-24, 24), e.y, U.rand(10, 50), d.sparkle);
    // idle emote
    if (!e.rideMoving) {
      e.rideIdle = (e.rideIdle || 0) + dt;
      if (e.rideIdle > (e.rideNextEmote || 5)) {
        e.rideIdle = 0; e.rideNextEmote = U.rand(5, 9);
        e.rideEmote = { t: 0, dur: CUTE(d) ? 1.2 : 1.4, kind: CUTE(d) ? U.pick(['hop', 'hearts']) : 'rear' };
        if (!CUTE(d)) { VFX.flash(e.x, e.y, 140, Looks.ELEM[d.el].color, 0.5); if (d.trail) for (let i = 0; i < 6; i++) VFX.trail(d.trail, e.x + e.rideFace * 30, e.y - 50, 0.05, true); }
      }
    } else e.rideIdle = 0;
    if (e.rideEmote) { e.rideEmote.t += dt; if (e.rideEmote.t > e.rideEmote.dur) e.rideEmote = null; }
  }

  // ---------------------------------------------------------------- drawing
  const rc = document.createElement('canvas'); rc.width = 192; rc.height = 200;
  const rg = rc.getContext('2d');
  const RIDER_FEET = 170, RIDER_HIP = 153; // in the rider buffer

  // Frames are cached at display resolution, facing right only (flipped on blit). The gallop phase
  // is quantised to 16 steps and idle time to 1/4s (4s loop), so every rider of a mount shares frames.
  const cache = new Map(), CACHE_MAX = 720;
  const BOX = [-90, -130, 180, 146]; // art-unit canvas: x, y, w, h
  function frameFor(d, layer, st, res) {
    let key, st2;
    if (st.moving) {
      const q = Math.floor((((st.ph % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)) / (Math.PI * 2) * 16);
      key = `${d.id}|${layer}|${res}|m${q}|${st.atk ? 1 : 0}`; st2 = { t: q * 0.12, ph: (q / 16) * Math.PI * 2, moving: true, atk: st.atk };
    } else {
      const q = Math.floor(st.t * 4) % 16;
      key = `${d.id}|${layer}|${res}|i${q}|${st.atk ? 1 : 0}`; st2 = { t: q / 4, ph: 0, moving: false, atk: st.atk };
    }
    st2.k = 1 / d.scale;
    let f = cache.get(key);
    if (f) { cache.delete(key); cache.set(key, f); return f; } // refresh LRU position
    const cw = Math.ceil(BOX[2] * res), ch = Math.ceil(BOX[3] * res), ox = Math.round(-BOX[0] * res), oy = Math.round(-BOX[1] * res);
    const c = document.createElement('canvas'); c.width = cw; c.height = ch;
    const g = c.getContext('2d');
    g.translate(ox, oy); g.scale(res, res);
    const saddle = ART[d.art](g, st2, layer);
    // crop to the opaque bounding box and keep only that
    const px = new Uint32Array(g.getImageData(0, 0, cw, ch).data.buffer);
    let x0 = cw, y0 = ch, x1 = -1, y1 = -1;
    for (let yy = 0; yy < ch; yy++) {
      const row = yy * cw;
      for (let xx = 0; xx < cw; xx++) if (px[row + xx] >>> 24 > 3) { if (xx < x0) x0 = xx; if (xx > x1) x1 = xx; if (yy < y0) y0 = yy; y1 = yy; }
    }
    f = { saddle, c: null, dx: 0, dy: 0 };
    if (x1 >= 0) {
      const t = document.createElement('canvas'); t.width = x1 - x0 + 1; t.height = y1 - y0 + 1;
      t.getContext('2d').drawImage(c, x0, y0, t.width, t.height, 0, 0, t.width, t.height);
      Object.assign(f, { c: t, dx: x0 - ox, dy: y0 - oy });
    }
    cache.set(key, f);
    if (cache.size > CACHE_MAX) cache.delete(cache.keys().next().value);
    return f;
  }
  function drawLayer(ctx, d, layer, x, y, face, st, sc, direct, bare) {
    if (direct) { // previews: draw the vectors straight onto the target
      ctx.save(); ctx.translate(x, y); ctx.scale(face < 0 ? -sc : sc, sc);
      const sad = ART[d.art](ctx, { ...st, k: bare ? 0 : 1 / d.scale }, layer);
      ctx.restore();
      return sad;
    }
    const f = frameFor(d, layer, st, Math.round(sc * 20) / 20);
    if (f.c) {
      ctx.save(); ctx.translate(Math.round(x), Math.round(y)); if (face < 0) ctx.scale(-1, 1);
      ctx.drawImage(f.c, f.dx, f.dy);
      ctx.restore();
    }
    return f.saddle;
  }
  // riderFn(g, feetX, feetY) draws the rider standing with feet at the given point
  function drawRidden(ctx, id, x, y, face, st, riderFn, scaleMul = 1) {
    const d = BY_ID[id], sc = d.scale * scaleMul, direct = scaleMul !== 1 || !riderFn;
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.beginPath(); ctx.ellipse(x, y, d.w * 0.42 * sc * (d.fly ? 0.7 : 1), 5.5 * sc, 0, 0, Math.PI * 2); ctx.fill();
    const saddle = drawLayer(ctx, d, 'back', x, y, face, st, sc, direct, !riderFn);
    if (riderFn) {
      rg.setTransform(1, 0, 0, 1, 0, 0); rg.clearRect(0, 0, rc.width, rc.height);
      riderFn(rg, 96, RIDER_FEET);
      const sx = Math.round(x + saddle[0] * sc * face), sy = Math.round(y + saddle[1] * sc);
      ctx.save(); ctx.imageSmoothingEnabled = false;
      ctx.drawImage(rc, 0, 0, 192, RIDER_HIP, sx - 96 * scaleMul, sy - RIDER_HIP * scaleMul, 192 * scaleMul, RIDER_HIP * scaleMul);
      // legs hang down the near flank with the knees pushed forward into the stirrups
      const lh = RIDER_FEET + 3 - RIDER_HIP;
      ctx.translate(sx, sy); ctx.transform(1, 0, 0.26 * face, 1, 0, 0);
      ctx.drawImage(rc, 0, RIDER_HIP, 192, lh, -96 * scaleMul, 0, 192 * scaleMul, lh * scaleMul);
      ctx.restore();
    }
    drawLayer(ctx, d, 'front', x, y, face, st, sc, direct, !riderFn);
    return { saddleY: saddle[1] * sc };
  }
  // draw an entity riding its mount (player or bot)
  function drawEntity(ctx, cam, e, riderFn) {
    let y = e.y - cam.y;
    const em = e.rideEmote;
    const st = { t: e.rideT || 0, ph: e.ridePh || 0, moving: e.rideMoving, atk: 0 };
    if (em && em.kind === 'hop') y -= Math.abs(Math.sin(em.t * 8)) * 8;
    if (em && em.kind === 'rear') st.atk = 1;
    const r = drawRidden(ctx, e.mountId, e.x - cam.x, y, e.rideFace, st, riderFn);
    if (em && em.kind === 'hearts') {
      const k = em.t / em.dur;
      ctx.save(); ctx.globalAlpha = 1 - k; ctx.fillStyle = '#ff6f9a'; ctx.font = 'bold 13px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText('♥', e.x - cam.x + e.rideFace * 30, y - 50 - k * 22); ctx.fillText('♥', e.x - cam.x + e.rideFace * 40, y - 44 - k * 18);
      ctx.restore();
    }
    e.rideTop = -r.saddleY + 48;
  }

  // ---------------------------------------------------------------- UI
  let sel = null, raf = 0, filter = -1;
  function riderPreviewFn(p) {
    return (g, fx, fy) => { g.imageSmoothingEnabled = false; Looks.drawComposite(g, p.sheet, Looks.current(p), 11, 0, fx, fy, 1, { t: 0 }); };
  }
  function thumb(cv, id) {
    const g = cv.getContext('2d'); g.clearRect(0, 0, cv.width, cv.height);
    const d = BY_ID[id];
    const sc = Math.min((cv.width * 0.92) / (d.w * d.scale), (cv.height * 0.7) / (d.h * d.scale));
    drawRidden(g, id, cv.width * 0.42, cv.height * (d.fly ? 0.95 : 0.84), 1, { t: 0.3, ph: 0, moving: false }, null, sc);
  }
  function open() {
    const game = Game, p = game.player;
    const layer = document.getElementById('panel-layer');
    layer.innerHTML = '';
    const el = document.createElement('div');
    el.className = 'panel full';
    layer.appendChild(el);
    if (!sel) sel = p.s.mount || LIST[0].id;
    const render = () => {
      if (el.querySelector('.summon-stage')) return; // a reward popping mid-summon must not wipe the reveal
      const d = BY_ID[sel], owned = p.s.mounts[sel] || 0, eq = p.s.mount === sel;
      const list = LIST.filter((x) => filter < 0 || x.grade === filter).sort((a, b) => (!!p.s.mounts[b.id] - !!p.s.mounts[a.id]) || b.grade - a.grade);
      const bon = (o) => Object.entries(o).map(([k, v]) => `${D.STAT_NAMES[k][0]} <span>+${v}${D.STAT_NAMES[k][1]}</span>`).join(', ');
      el.innerHTML = `<div class="tr-wrap">
        <div class="tr-side">
          <button data-go="transcend">${ico('transcend')}초월</button>
          <button data-go="weaponlook">${ico('sword')}무기 외형</button>
          <button data-go="pet">${ico('pet')}펫</button>
          <button class="on">${ico('mount')}탈것</button>
        </div>
        <div class="tr-main">
          <div class="tr-head"><h3>탈것</h3>
            <div style="display:flex;gap:18px;align-items:center"><span class="cur">${ico('diamond', 'dia')}<b>${U.fmt(p.s.dia)}</b></span>
            <button class="dark-btn" data-pull="1">${ico('diamond', 'dia')} ${PRICE.one} 소환</button><button class="gold-btn" data-pull="11">${ico('diamond', 'dia')} ${U.fmt(PRICE.eleven)} 11회 소환</button>
            <button class="close-x" data-close style="font-size:30px">⇥</button></div></div>
          <div class="tr-content">
            <div class="tr-info">
              <div class="grade ${D.GRADES[d.grade].cls}">${D.GRADES[d.grade].name} · ${CUTE(d) ? '귀여운 탈것' : '전설의 탈것'}</div>
              <div class="cname" style="color:${D.GRADES[d.grade].color}">${owned ? '' : '🔒 '}${esc(d.name)}</div>
              <div class="stats">
                <div>탑승 시 이동 속도 <span>+${d.spd}%</span></div>
                <div>${d.fly ? '비행형 · ' : ''}속성 <span style="color:${Looks.ELEM[d.el].color}">${Looks.ELEM[d.el].name}</span>${d.trail ? ` · ${d.trail === 'fire' ? '화염' : '서리'} 발자국` : ''}${d.sparkle ? ' · 반짝이 효과' : ''}</div>
                <div>보유 효과: ${bon(OWN_BONUS[d.grade])}</div>
              </div>
              <div class="stats" style="font-size:12.5px;color:#a39a88">보유 ${owned}마리 · 수집 ${LIST.filter((x) => p.s.mounts[x.id]).length}/${LIST.length}</div>
              <label class="ride-opt"><input type="checkbox" data-auto ${p.s.autoRide ? 'checked' : ''}> 먼 거리 이동 시 자동 탑승</label>
              <p style="font-size:12px;color:#888;line-height:1.6">R 키 또는 화면의 탑승 버튼으로 타고 내립니다. 공격하거나 스킬을 쓰면 자동으로 내립니다.</p>
            </div>
            <div class="tr-center"><canvas id="mount-cv" width="440" height="440"></canvas></div>
            <div class="tr-right">
              <div class="grade-filter">${[-1, 4, 3, 2, 1, 0].map((g) => `<button data-filter="${g}" class="${filter === g ? 'on' : ''}" style="color:${g < 0 ? '#e9d7a8' : D.GRADES[g].color};border-color:${g < 0 ? '' : D.GRADES[g].color}">${g < 0 ? 'All' : D.GRADES[g].name[0]}</button>`).join('')}</div>
              <div class="card-grid">${list.map((x) => `<div class="card gr${x.grade} ${x.id === sel ? 'sel' : ''} ${p.s.mounts[x.id] ? '' : 'locked'}" data-mount="${x.id}"><canvas width="96" height="128"></canvas>
                ${p.s.mounts[x.id] ? `<span class="cnt">${p.s.mounts[x.id]}</span>` : ''}${p.s.mount === x.id ? '<span class="eqb">E</span>' : ''}<div class="nm ${D.GRADES[x.grade].cls}">${esc(x.name)}</div></div>`).join('')}</div>
              <div class="tr-actions">${eq ? '<button class="dark-btn" disabled>사용 중</button>' : `<button class="gold-btn" data-equip ${owned ? '' : 'disabled'}>사용하기</button>`}</div>
            </div>
          </div>
        </div></div>`;
      el.querySelectorAll('.tr-head button img').forEach((i) => { i.style.width = '16px'; i.style.verticalAlign = '-3px'; });
      el.querySelectorAll('[data-mount] canvas').forEach((cv) => thumb(cv, cv.parentElement.dataset.mount));
      preview(el.querySelector('#mount-cv'), p);
    };
    el.onclick = (e) => {
      const t = e.target;
      const c = t.closest('[data-mount]'); if (c) { sel = c.dataset.mount; U.sfx.ui(); return render(); }
      const f = t.closest('[data-filter]'); if (f) { filter = +f.dataset.filter; return render(); }
      if (t.closest('[data-close]')) { cancelAnimationFrame(raf); UI.close(); return; }
      const go = t.closest('[data-go]'); if (go) { cancelAnimationFrame(raf); return UI.open(go.dataset.go); }
      if (t.closest('[data-auto]')) { p.s.autoRide = t.checked; return; }
      if (t.closest('[data-equip]')) {
        const was = p.mounted; if (was) dismount(p, game);
        p.s.mount = sel; p.mountId = sel; p.recalc(); U.sfx.success();
        if (was) mount(p, game, true);
        UI.toast(`${BY_ID[sel].name}을(를) 탈것으로 사용합니다.`, D.GRADES[BY_ID[sel].grade].color); UI.refreshHud(); return render();
      }
      const pull = t.closest('[data-pull]'); if (pull) summon(+pull.dataset.pull, el, render);
    };
    render();
    return { name: 'mount', rerender: render, onClose: () => cancelAnimationFrame(raf) };
  }
  function preview(canvas, p) {
    cancelAnimationFrame(raf);
    const g = canvas.getContext('2d');
    const t0 = performance.now();
    let ph = 0, last = t0;
    const loop = (now) => {
      if (!canvas.isConnected) return;
      now = now || performance.now();
      const t = (now - t0) / 1000, dt = Math.min(0.05, (now - last) / 1000); last = now;
      const d = BY_ID[sel];
      const W = canvas.width, H = canvas.height;
      g.clearRect(0, 0, W, H);
      const col = D.GRADES[d.grade].color;
      const rgd = g.createRadialGradient(W / 2, H * 0.6, 10, W / 2, H * 0.6, H * 0.5);
      rgd.addColorStop(0, hexA(col, 0.32)); rgd.addColorStop(1, hexA(col, 0));
      g.fillStyle = rgd; g.fillRect(0, 0, W, H);
      const moving = (t % 6) < 3.5;
      if (moving) ph += dt * 9;
      const sc = Math.min(2.2, (W * 0.78) / (d.w * d.scale), (H * 0.62) / ((d.h + 12) * d.scale));
      drawRidden(g, sel, W / 2, H * 0.8, 1, { t, ph, moving }, riderPreviewFn(p), sc);
      raf = requestAnimationFrame(loop);
    };
    loop();
  }
  function summon(n, panelEl, back) {
    const p = Game.player;
    const cost = n === 1 ? PRICE.one : PRICE.eleven;
    if (p.s.dia < cost) return UI.toast('다이아가 부족합니다.', '#ff8a80');
    p.s.dia -= cost;
    const res = [];
    for (let i = 0; i < n; i++) { const g = Transcend.rollGrade(); res.push(U.pick(LIST.filter((x) => x.grade === g))); }
    if (n === 11 && !res.some((x) => x.grade >= 2)) res[U.randi(0, 10)] = U.pick(LIST.filter((x) => x.grade === 2));
    for (const x of res) p.s.mounts[x.id] = (p.s.mounts[x.id] || 0) + 1;
    p.recalc(); UI.refreshHud();
    const stage = document.createElement('div');
    stage.className = 'summon-stage';
    stage.innerHTML = `<div class="summon-cards">${res.map((x, i) => `<div class="s-card glow${x.grade}" data-i="${i}"><div class="back">${ico('mount')}</div>
      <div class="front card gr${x.grade}"><canvas width="96" height="128"></canvas><div class="nm ${D.GRADES[x.grade].cls}">${esc(x.name)}</div></div></div>`).join('')}</div>
      <div class="summon-btns"><button class="dark-btn" data-all>모두 열기</button><button class="gold-btn" data-ok>확인</button></div>`;
    panelEl.appendChild(stage);
    if (Forge.wants(res)) Forge.play(stage, res[0].grade);
    stage.querySelectorAll('.s-card').forEach((sc, i) => thumb(sc.querySelector('canvas'), res[i].id));
    const flip = (sc) => {
      if (sc.classList.contains('flip')) return;
      sc.classList.add('flip');
      const x = res[+sc.dataset.i];
      if (x.grade >= 4) U.sfx.legend(); else if (x.grade >= 3) U.sfx.success(); else U.sfx.ui();
      if (x.grade >= 3) UI.announce(`<b>${esc(p.name)}</b>님이 <em class="${x.grade >= 4 ? 'legend' : ''}">${esc(x.name)}</em> 탈것을 획득했습니다.`);
    };
    stage.onclick = (e) => {
      const sc = e.target.closest('.s-card'); if (sc) return flip(sc);
      if (e.target.closest('[data-all]')) stage.querySelectorAll('.s-card').forEach((s, i) => setTimeout(() => flip(s), i * 110));
      if (e.target.closest('[data-ok]')) { stage.querySelectorAll('.s-card').forEach(flip); stage.remove(); sel = res.slice().sort((a, b) => b.grade - a.grade)[0].id; back(); }
    };
  }

  UI.OPENERS.mount = open;
  return { LIST, BY_ID, migrate, bonuses, speedMul, mount, dismount, tick, drawEntity, drawRidden };
})();
