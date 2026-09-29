'use strict';
// Weapon looks drawn in code at the hand of the SD field characters (their sheets carry no weapon;
// rig_meta.js gives the hand position, weapon angle, layer and bow draw per frame).
const WeaponArt = (() => {
  const S = {
    ks_steel: { kind: 'sword', blade: '#dfe6f0', hilt: '#2a2026', guard: '#b8b0a8', len: 38 },
    ks_bronze: { kind: 'sword', blade: '#e0a860', hilt: '#4a2a18', guard: '#b07a3a', len: 36 },
    ks_saber: { kind: 'sword', blade: '#e8eef6', hilt: '#2a2a3a', guard: '#e0c050', len: 38, curve: 5 },
    ks_rapier: { kind: 'sword', blade: '#d8f0ff', hilt: '#3a4a8a', guard: '#c0d8f0', len: 42, thin: true },
    ks_mace: { kind: 'sword', blade: '#e8d890', hilt: '#5a3a22', guard: '#fff0a0', len: 30 }, // painted sword recoloured until mace art exists
    ks_long: { kind: 'sword', blade: '#eef2f8', hilt: '#2a3a7a', guard: '#e8c050', len: 46 },
    ks_gold: { kind: 'sword', blade: '#ffe070', hilt: '#8a2a2a', guard: '#fff0a0', len: 44 },
    ks_axe: { kind: 'sword', blade: '#d8d0d0', hilt: '#5a2a1a', guard: '#a02030', len: 38 }, // painted sword recoloured until axe art exists
    ks_frost: { kind: 'sword', blade: '#a8ecff', hilt: '#1a4a7a', guard: '#e0f8ff', len: 46 },
    ks_flame: { kind: 'sword', blade: '#ff8a3a', hilt: '#2a1a1a', guard: '#ffd060', len: 48, edge: '#fff0a0' },
    eb_medium: { kind: 'bow', wood: '#7a4a28', tip: '#d8b050', string: '#f0ead8' },
    eb_light: { kind: 'bow', wood: '#e8dcc0', tip: '#b89060', string: '#f8f4e8' },
    eb_recurve: { kind: 'bow', wood: '#4a8a40', tip: '#e0c060', string: '#f0ead8', recurve: true },
    eb_great: { kind: 'bow', wood: '#6a4020', tip: '#e0c060', string: '#f0ead8', big: true },
    eb_silver: { kind: 'bow', wood: '#d8e4f0', tip: '#a8ecff', string: '#a8ecff', recurve: true },
    eb_gold: { kind: 'bow', wood: '#f0c040', tip: '#fff0a0', string: '#fff8d0', recurve: true },
    eb_shadow: { kind: 'bow', wood: '#4a3a6a', tip: '#c8a8ff', string: '#c8a8ff', big: true },
    eb_crimson: { kind: 'bow', wood: '#b02a2a', tip: '#ffd060', string: '#ffd060', recurve: true, big: true },
    ms_purple: { kind: 'staff', wood: '#5a3a24', top: 'orb', gem: '#b070ff' },
    ms_gnarled: { kind: 'staff', wood: '#5a4a2a', top: 'gnarl', gem: '#7ad86a' },
    ms_loop: { kind: 'staff', wood: '#8a6a40', top: 'loop', gem: '#ffe070', ring: '#e8c050' },
    ms_serpent: { kind: 'staff', wood: '#3a6a3a', top: 'serpent', gem: '#e03030' },
    ms_earth: { kind: 'staff', wood: '#6a5030', top: 'orb', gem: '#5ad07a', big: true },
    ms_diamond: { kind: 'staff', wood: '#e8c050', top: 'diamond', gem: '#a8f0ff' },
    ms_frost: { kind: 'staff', wood: '#a8c8e8', top: 'orb', gem: '#8ae8ff', big: true },
    ms_inferno: { kind: 'staff', wood: '#3a1a1a', top: 'orb', gem: '#ff5a1a', big: true, horns: true },
  };
  const OL = 'rgba(40,24,28,0.62)';

  // painted weapon art (assets/weapons/img): grip/tip in image px, upp = world units per image px.
  // Other looks of the same kind are recoloured copies of these (computed once per look).
  const ART = {
    sword: { src: 'assets/weapons/img/sword.webp', grip: [15.7, 90.3], tip: [15.7, 0.5], upp: 1.2 / 3 },
    bow: { src: 'assets/weapons/img/bow.webp', grip: [11.9, 51.1], tip: [17.8, 51.1], upp: 1.2 / 3, strTop: [1.3, 1.6], strBot: [0.9, 110.6] },
    staff: { src: 'assets/weapons/img/staff.webp', grip: [21.9, 104.2], tip: [21.4, 20.5], upp: 1 / 3 },
  };
  // hue shift (deg), saturation / brightness multipliers, optional colour tint [hex, amount]
  const TINT = {
    ks_steel: {}, ks_mace: { tint: ['#fff0b0', 0.45], bri: 1.1 }, ks_axe: { tint: ['#c02030', 0.45], bri: 0.9 }, ks_bronze: { tint: ['#d8904a', 0.5] }, ks_saber: { bri: 1.08, sat: 0.8 }, ks_rapier: { tint: ['#a8e0ff', 0.25], hue: 200 },
    ks_long: { hue: 215 }, ks_gold: { tint: ['#ffcc3a', 0.55] }, ks_frost: { hue: 190, tint: ['#8ae8ff', 0.5] }, ks_flame: { hue: 20, tint: ['#ff6a2a', 0.5] },
    eb_medium: {}, eb_light: { sat: 0.45, bri: 1.35 }, eb_recurve: { hue: 80 }, eb_great: { bri: 0.78 }, eb_silver: { sat: 0.25, bri: 1.4, tint: ['#bfe8ff', 0.3] },
    eb_gold: { tint: ['#ffcc3a', 0.5] }, eb_shadow: { tint: ['#7a4ab0', 0.6], bri: 0.85 }, eb_crimson: { tint: ['#d82a2a', 0.5] },
    ms_purple: {}, ms_gnarled: { hue: 200 }, ms_loop: { hue: 140, tint: ['#ffd24a', 0.3] }, ms_serpent: { hue: 95 }, ms_earth: { hue: 230 },
    ms_diamond: { hue: -85, bri: 1.1 }, ms_frost: { hue: -80, tint: ['#bff0ff', 0.3] }, ms_inferno: { hue: 115, tint: ['#ff5a1a', 0.3] },
  };
  const imgs = {}, variants = {};
  for (const k in ART) { const im = new Image(); im.src = ART[k].src; imgs[k] = im; }
  function recolor(im, o) {
    const c = document.createElement('canvas'); c.width = im.width; c.height = im.height;
    const g = c.getContext('2d'); g.drawImage(im, 0, 0);
    if (!o.hue && !o.sat && !o.bri && !o.tint) return c;
    const d = g.getImageData(0, 0, c.width, c.height), p = d.data;
    const hs = (o.hue || 0) / 360, sm = o.sat ?? 1, bm = o.bri ?? 1;
    const tn = o.tint ? parseInt(o.tint[0].slice(1), 16) : 0, ta = o.tint ? o.tint[1] : 0;
    const tr = (tn >> 16) / 255, tg = ((tn >> 8) & 255) / 255, tb = (tn & 255) / 255;
    for (let i = 0; i < p.length; i += 4) {
      if (!p[i + 3]) continue;
      let r = p[i] / 255, gg = p[i + 1] / 255, b = p[i + 2] / 255;
      const mx = Math.max(r, gg, b), mn = Math.min(r, gg, b), l = mx, dd = mx - mn;
      let h = 0, s = mx ? dd / mx : 0;
      if (dd) h = mx === r ? ((gg - b) / dd) % 6 : mx === gg ? (b - r) / dd + 2 : (r - gg) / dd + 4;
      h = (((h / 6 + hs) % 1) + 1) % 1; s = Math.min(1, s * sm); const v = Math.min(1, l * bm);
      const f = h * 6, k = Math.floor(f), q = f - k, P = v * (1 - s), Q = v * (1 - s * q), T = v * (1 - s * (1 - q));
      [r, gg, b] = [[v, T, P], [Q, v, P], [P, v, T], [P, Q, v], [T, P, v], [v, P, Q]][k % 6];
      if (ta) { const lum = 0.3 * r + 0.59 * gg + 0.11 * b; r += (lum * tr * 1.4 - r) * ta; gg += (lum * tg * 1.4 - gg) * ta; b += (lum * tb * 1.4 - b) * ta; }
      p[i] = Math.min(255, r * 255); p[i + 1] = Math.min(255, gg * 255); p[i + 2] = Math.min(255, b * 255);
    }
    g.putImageData(d, 0, 0);
    return c;
  }
  function variant(id, kind) {
    if (variants[id]) return variants[id];
    const im = imgs[kind];
    if (!im || !im.complete || !im.naturalWidth || !(id in TINT)) return null;
    return (variants[id] = recolor(im, TINT[id]));
  }
  function drawArt(g, id, w, x, y, a, s, pull, face, glowCol) {
    const A = ART[w.kind], cv = variant(id, w.kind);
    if (!cv) return null;
    const mirror = w.kind === 'bow' && face < 0;
    g.save(); g.translate(x, y); g.rotate(a); g.scale(s, s);
    g.rotate(Math.PI / 2); // image "up" runs along the weapon direction
    if (mirror) g.scale(-1, 1);
    g.scale(A.upp, A.upp);
    const [gx, gy] = A.grip;
    if (w.kind === 'bow') {
      // string pulled back toward the archer (image -x); arrow nocked while drawing
      const pxl = A.strTop[0] - pull * 30;
      g.strokeStyle = 'rgba(236,222,196,0.55)'; g.lineWidth = 0.9; g.lineCap = 'round';
      g.beginPath(); g.moveTo(A.strTop[0] - gx, A.strTop[1] - gy); g.lineTo(pxl - gx, 0); g.lineTo(A.strBot[0] - gx, A.strBot[1] - gy); g.stroke();
      if (pull > 0.1) {
        g.strokeStyle = '#e0cfa8'; g.lineWidth = 2; g.beginPath(); g.moveTo(pxl - gx, 0); g.lineTo(A.tip[0] - gx + 20, 0); g.stroke();
        g.fillStyle = '#e8ecf0'; g.beginPath(); g.moveTo(A.tip[0] - gx + 28, 0); g.lineTo(A.tip[0] - gx + 19, -3.5); g.lineTo(A.tip[0] - gx + 19, 3.5); g.closePath(); g.fill();
        g.fillStyle = '#ff6a8a'; g.fillRect(pxl - gx - 1, -3, 5, 6);
      }
    }
    g.drawImage(cv, -gx, -gy);
    if (glowCol) {
      g.globalCompositeOperation = 'lighter';
      const tx = A.tip[0] - gx, ty = A.tip[1] - gy, R = 40;
      const gr = g.createRadialGradient(tx, ty, 0, tx, ty, R); gr.addColorStop(0, glowCol); gr.addColorStop(1, 'rgba(0,0,0,0)');
      g.fillStyle = gr; g.beginPath(); g.arc(tx, ty, R, 0, Math.PI * 2); g.fill();
    }
    g.restore();
    // tip in world space: image offset (tip - grip) rotated into the weapon frame
    const ix = (A.tip[0] - gx) * (mirror ? -1 : 1) * A.upp * s, iy = (A.tip[1] - gy) * A.upp * s;
    const lx = -iy, ly = ix; // undo the quarter turn
    return [x + lx * Math.cos(a) - ly * Math.sin(a), y + lx * Math.sin(a) + ly * Math.cos(a)];
  }
  const shade = (hex, k) => { const n = parseInt(hex.slice(1), 16); const f = (v) => Math.max(0, Math.min(255, Math.round(v * k))); return `rgb(${f(n >> 16)},${f((n >> 8) & 255)},${f(n & 255)})`; };
  function line(g, pts, col, w) { g.strokeStyle = col; g.lineWidth = w; g.lineCap = 'round'; g.lineJoin = 'round'; g.beginPath(); pts.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y))); g.stroke(); }
  function inked(g, path, fill) { g.beginPath(); path(); g.lineJoin = 'round'; g.strokeStyle = OL; g.lineWidth = 1.2; g.stroke(); g.fillStyle = fill; g.fill(); }

  // draw weapon `id` gripped at (x, y), pointing along ang (deg); face = +1 right / -1 left; returns the tip
  function draw(g, id, x, y, ang, s, pull, face, glowCol) {
    const w = S[id] || S.ks_steel;
    const a = (ang * Math.PI) / 180;
    if (ART[w.kind]) { const tipArt = drawArt(g, id, w, x, y, a, s, pull, face, glowCol); if (tipArt) return tipArt; }
    g.save(); g.translate(x, y); g.rotate(a); g.scale(s, s);
    let tip = [40, 0];
    if (w.kind === 'sword') {
      // grip sits inside the fist (origin); guard just past it, blade beyond
      const L = w.len * 0.78, hw = w.thin ? 1.2 : 2.1, cv = (w.curve || 0) * 0.8;
      line(g, [[4, 0], [-8, 0]], OL, 4.4); line(g, [[4, 0], [-8, 0]], w.hilt, 2.6);
      line(g, [[-2, -1.2], [0, 1.2]], 'rgba(200,40,40,0.9)', 0.9); line(g, [[-5, -1.2], [-3, 1.2]], 'rgba(200,40,40,0.9)', 0.9); // wrap
      inked(g, () => g.arc(-8, 0, 1.7, 0, Math.PI * 2), w.guard); // pommel
      const gg = g.createLinearGradient(0, -5, 0, 5); gg.addColorStop(0, '#fff6d0'); gg.addColorStop(0.5, w.guard); gg.addColorStop(1, shade(w.guard, 0.5));
      inked(g, () => { g.moveTo(4, -5); g.quadraticCurveTo(6.5, 0, 4, 5); g.lineTo(6.5, 4); g.quadraticCurveTo(8, 0, 6.5, -4); g.closePath(); }, gg);
      const bx0 = 7.5;
      const gr = g.createLinearGradient(0, -hw - cv, 0, hw);
      gr.addColorStop(0, '#ffffff'); gr.addColorStop(0.35, shade(w.blade, 1.08)); gr.addColorStop(0.55, shade(w.blade, 0.8)); gr.addColorStop(1, shade(w.blade, 0.45));
      inked(g, () => { g.moveTo(bx0, -hw); g.quadraticCurveTo(L * 0.6, -hw - cv, L - 5, -hw - cv * 1.3); g.lineTo(L, -cv * 1.6); g.lineTo(L - 5, hw - cv * 1.3); g.quadraticCurveTo(L * 0.6, hw - cv, bx0, hw); g.closePath(); }, gr);
      line(g, [[bx0 + 1, -0.2], [L - 8, -cv * 1.2 - 0.2]], 'rgba(90,100,120,0.55)', 0.6); // fuller
      if (w.edge) line(g, [[bx0 + 1, -hw + 0.5], [L - 6, -hw - cv * 1.2 + 0.5]], w.edge, 0.8);
      tip = [L, -cv * 1.6];
    } else if (w.kind === 'mace' || w.kind === 'axe') {
      const L = w.len;
      line(g, [[-8, 0], [L, 0]], OL, 4.6); line(g, [[-8, 0], [L, 0]], w.hilt, 2.8);
      if (w.kind === 'mace') {
        const gr = g.createRadialGradient(L + 3, -2, 1, L + 4, 0, 8); gr.addColorStop(0, '#fff8d0'); gr.addColorStop(1, shade(w.blade, 0.6));
        for (let i = 0; i < 6; i++) { const b = (i / 6) * Math.PI * 2; inked(g, () => { g.moveTo(L + 4 + Math.cos(b) * 5, Math.sin(b) * 5); g.lineTo(L + 4 + Math.cos(b) * 9, Math.sin(b) * 9); g.lineTo(L + 4 + Math.cos(b + 0.4) * 5, Math.sin(b + 0.4) * 5); }, shade(w.blade, 0.8)); }
        inked(g, () => g.arc(L + 4, 0, 6, 0, Math.PI * 2), gr);
        tip = [L + 10, 0];
      } else {
        const gr = g.createLinearGradient(L - 12, 0, L + 2, 14); gr.addColorStop(0, shade(w.blade, 0.7)); gr.addColorStop(1, '#ffffff');
        inked(g, () => { g.moveTo(L - 12, 2); g.quadraticCurveTo(L - 16, 14, L - 10, 20); g.quadraticCurveTo(L, 16, L + 3, 18); g.quadraticCurveTo(L + 1, 8, L, 2); g.closePath(); }, gr);
        inked(g, () => { g.moveTo(L - 9, -2); g.lineTo(L - 6, -9); g.lineTo(L - 2, -2); g.closePath(); }, shade(w.blade, 0.75));
        tip = [L, 18];
      }
    } else if (w.kind === 'bow') {
      const R = w.big ? 21 : 18, b = face; // limbs bow away from the archer
      const back = -b * (w.recurve ? 3.5 : 5.5);
      const px = -b * (5.5 + pull * 12);
      // local frame: u runs along the stave (the weapon angle), v across it; +v*b points at the target
      const P = (u, v) => [u, v];
      const limb = (sgn) => {
        const t0 = P(0, b * 3), c = P(sgn * R * 0.55, b * 4.5), t1 = P(sgn * R, back);
        g.beginPath(); g.moveTo(...t0); g.quadraticCurveTo(...c, ...t1);
        if (w.recurve) { const t2 = P(sgn * (R + 5), back + b * 5); g.quadraticCurveTo(...P(sgn * (R + 3), back), ...t2); }
        g.lineCap = 'round'; g.strokeStyle = OL; g.lineWidth = 3.4; g.stroke(); g.strokeStyle = w.wood; g.lineWidth = 2.2; g.stroke();
        g.strokeStyle = 'rgba(255,240,210,0.45)'; g.lineWidth = 0.7; g.stroke();
      };
      // string first (behind the stave), pulled back toward the archer
      const T = (sgn) => P(sgn * R, back);
      g.strokeStyle = w.string; g.lineWidth = 0.9;
      g.beginPath(); g.moveTo(...T(-1)); g.lineTo(...P(0, back + px)); g.lineTo(...T(1)); g.stroke();
      if (pull > 0.1) { // nocked arrow
        line(g, [P(0, back + px), P(0, b * 13)], '#e8d8b0', 1.1);
        inked(g, () => { const a0 = P(-1.8, b * 11.5), a1 = P(0, b * 16), a2 = P(1.8, b * 11.5); g.moveTo(...a0); g.lineTo(...a1); g.lineTo(...a2); g.closePath(); }, '#e8ecf0');
        line(g, [P(-2, back + px), P(0, back + px + b * 4)], '#ff6a8a', 1.4); line(g, [P(2, back + px), P(0, back + px + b * 4)], '#ff6a8a', 1.4);
      }
      limb(-1); limb(1);
      inked(g, () => { const [gx, gy] = P(0, b * 3); g.rect(gx - 3, gy - 1.6, 6, 3.2); }, '#5a3a22');
      for (const sgn of [-1, 1]) { const [tx, ty] = T(sgn); inked(g, () => g.arc(tx, ty, 1.2, 0, Math.PI * 2), w.tip); }
      tip = P(0, b * 14);
    } else if (w.kind === 'staff') {
      const L = 36;
      const gr = g.createLinearGradient(0, -1.5, 0, 1.5); gr.addColorStop(0, shade(w.wood, 1.45)); gr.addColorStop(0.5, w.wood); gr.addColorStop(1, shade(w.wood, 0.65));
      inked(g, () => { g.moveTo(-15, -1); g.lineTo(L, -1.5); g.lineTo(L, 1.5); g.lineTo(-15, 1); g.closePath(); }, gr);
      for (let i = -10; i < L; i += 9) line(g, [[i, -1.4], [i + 3, 1.4]], shade(w.wood, 0.55), 0.6); // wrap
      const gem = w.gem, R = w.big ? 5 : 4.2;
      if (w.top === 'orb') {
        if (w.horns) { line(g, [[L - 2, -3], [L + 6, -11], [L + 12, -12]], OL, 3.4); line(g, [[L - 2, -3], [L + 6, -11], [L + 12, -12]], '#e8dcc0', 2); line(g, [[L - 2, 3], [L + 6, 11], [L + 12, 12]], OL, 3.4); line(g, [[L - 2, 3], [L + 6, 11], [L + 12, 12]], '#e8dcc0', 2); }
        line(g, [[L - 3, -4], [L + 2, -6]], '#d8b050', 2); line(g, [[L - 3, 4], [L + 2, 6]], '#d8b050', 2);
        const og = g.createRadialGradient(L + R - 2, -2, 0.5, L + R, 0, R); og.addColorStop(0, '#ffffff'); og.addColorStop(0.35, gem); og.addColorStop(1, shade(gem, 0.45));
        inked(g, () => g.arc(L + R, 0, R, 0, Math.PI * 2), og);
        tip = [L + R, 0];
      } else if (w.top === 'gnarl') {
        line(g, [[L, 0], [L + 8, -6], [L + 11, -2]], OL, 4); line(g, [[L, 0], [L + 8, -6], [L + 11, -2]], w.wood, 2.4);
        line(g, [[L, 0], [L + 7, 6], [L + 11, 3]], OL, 4); line(g, [[L, 0], [L + 7, 6], [L + 11, 3]], w.wood, 2.4);
        inked(g, () => g.arc(L + 7, 0, 3, 0, Math.PI * 2), gem);
        tip = [L + 7, 0];
      } else if (w.top === 'loop') {
        g.strokeStyle = OL; g.lineWidth = 3.6; g.beginPath(); g.arc(L + 8, 0, 8, 0, Math.PI * 2); g.stroke();
        g.strokeStyle = w.ring; g.lineWidth = 2; g.stroke();
        inked(g, () => g.arc(L + 8, 0, 3, 0, Math.PI * 2), gem);
        tip = [L + 8, 0];
      } else if (w.top === 'serpent') {
        g.strokeStyle = OL; g.lineWidth = 4; g.beginPath(); g.arc(L + 6, 0, 6, Math.PI, Math.PI * 2.7); g.stroke();
        g.strokeStyle = w.wood; g.lineWidth = 2.4; g.stroke();
        inked(g, () => g.arc(L + 11, 3, 2, 0, Math.PI * 2), gem);
        tip = [L + 8, 0];
      } else {
        const dg = g.createLinearGradient(L, -6, L + 16, 6); dg.addColorStop(0, '#ffffff'); dg.addColorStop(1, gem);
        inked(g, () => { g.moveTo(L, 0); g.lineTo(L + 8, -6); g.lineTo(L + 16, 0); g.lineTo(L + 8, 6); g.closePath(); }, dg);
        tip = [L + 8, 0];
      }
    }
    // element glow along/at the business end for rare+ looks
    if (glowCol) {
      g.globalCompositeOperation = 'lighter';
      const gr = g.createRadialGradient(tip[0], tip[1], 0, tip[0], tip[1], 14);
      gr.addColorStop(0, glowCol); gr.addColorStop(1, 'rgba(0,0,0,0)');
      g.fillStyle = gr; g.beginPath(); g.arc(tip[0], tip[1], 14, 0, Math.PI * 2); g.fill();
    }
    g.restore();
    const ca = Math.cos(a), sa = Math.sin(a);
    return [x + (tip[0] * ca - tip[1] * sa) * s, y + (tip[0] * sa + tip[1] * ca) * s];
  }
  return { draw, SPEC: S };
})();
