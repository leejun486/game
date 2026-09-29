'use strict';
// Weapon looks drawn in code at the hand of the SD field characters (their sheets carry no weapon;
// rig_meta.js gives the hand position, weapon angle, layer and bow draw per frame).
const WeaponArt = (() => {
  const S = {
    ks_steel: { kind: 'sword', blade: '#dfe6f0', hilt: '#2a2026', guard: '#b8b0a8', len: 38 },
    ks_bronze: { kind: 'sword', blade: '#e0a860', hilt: '#4a2a18', guard: '#b07a3a', len: 36 },
    ks_saber: { kind: 'sword', blade: '#e8eef6', hilt: '#2a2a3a', guard: '#e0c050', len: 38, curve: 5 },
    ks_rapier: { kind: 'sword', blade: '#d8f0ff', hilt: '#3a4a8a', guard: '#c0d8f0', len: 42, thin: true },
    ks_mace: { kind: 'mace', blade: '#e8d890', hilt: '#5a3a22', len: 30 },
    ks_long: { kind: 'sword', blade: '#eef2f8', hilt: '#2a3a7a', guard: '#e8c050', len: 46 },
    ks_gold: { kind: 'sword', blade: '#ffe070', hilt: '#8a2a2a', guard: '#fff0a0', len: 44 },
    ks_axe: { kind: 'axe', blade: '#d8d0d0', hilt: '#5a2a1a', len: 38 },
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
  const OL = 'rgba(20,12,16,0.85)';
  const shade = (hex, k) => { const n = parseInt(hex.slice(1), 16); const f = (v) => Math.max(0, Math.min(255, Math.round(v * k))); return `rgb(${f(n >> 16)},${f((n >> 8) & 255)},${f(n & 255)})`; };
  function line(g, pts, col, w) { g.strokeStyle = col; g.lineWidth = w; g.lineCap = 'round'; g.lineJoin = 'round'; g.beginPath(); pts.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y))); g.stroke(); }
  function inked(g, path, fill) { g.beginPath(); path(); g.lineJoin = 'round'; g.strokeStyle = OL; g.lineWidth = 1.6; g.stroke(); g.fillStyle = fill; g.fill(); }

  // draw weapon `id` gripped at (x, y), pointing along ang (deg); face = +1 right / -1 left; returns the tip
  function draw(g, id, x, y, ang, s, pull, face, glowCol) {
    const w = S[id] || S.ks_steel;
    const a = (ang * Math.PI) / 180;
    g.save(); g.translate(x, y); g.rotate(a); g.scale(s, s);
    let tip = [40, 0];
    if (w.kind === 'sword') {
      const L = w.len, hw = w.thin ? 1.3 : 2.4, cv = w.curve || 0;
      line(g, [[-2, 0], [-11, 0]], OL, 5.2); line(g, [[-2, 0], [-11, 0]], w.hilt, 3.2);
      line(g, [[-11, 0], [-13, 5], [-12, 11]], '#c0282a', 2.2); // tassel
      inked(g, () => g.rect(-2, -5.5, 3, 11), w.guard);
      const gr = g.createLinearGradient(0, -hw, 0, hw); gr.addColorStop(0, '#ffffff'); gr.addColorStop(0.45, w.blade); gr.addColorStop(1, shade(w.blade, 0.55));
      inked(g, () => { g.moveTo(1, -hw); g.quadraticCurveTo(L * 0.6, -hw - cv, L - 6, -hw - cv * 1.3); g.lineTo(L, -cv * 1.6); g.lineTo(L - 6, hw - cv * 1.3); g.quadraticCurveTo(L * 0.6, hw - cv, 1, hw); g.closePath(); }, gr);
      if (w.edge) line(g, [[4, -hw + 0.6], [L - 7, -hw - cv * 1.2 + 0.6]], w.edge, 0.9);
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
      const R = w.big ? 30 : 26, b = face; // limbs bow away from the archer
      const back = -b * (w.recurve ? 5 : 8);
      const px = -b * (8 + pull * 16);
      // local frame: u runs along the stave (the weapon angle), v across it; +v*b points at the target
      const P = (u, v) => [u, v];
      const limb = (sgn) => {
        const t0 = P(0, b * 4), c = P(sgn * R * 0.55, b * 6), t1 = P(sgn * R, back);
        g.beginPath(); g.moveTo(...t0); g.quadraticCurveTo(...c, ...t1);
        if (w.recurve) { const t2 = P(sgn * (R + 5), back + b * 5); g.quadraticCurveTo(...P(sgn * (R + 3), back), ...t2); }
        g.lineCap = 'round'; g.strokeStyle = OL; g.lineWidth = 4.6; g.stroke(); g.strokeStyle = w.wood; g.lineWidth = 2.8; g.stroke();
      };
      // string first (behind the stave), pulled back toward the archer
      const T = (sgn) => P(sgn * R, back);
      g.strokeStyle = w.string; g.lineWidth = 0.9;
      g.beginPath(); g.moveTo(...T(-1)); g.lineTo(...P(0, back + px)); g.lineTo(...T(1)); g.stroke();
      if (pull > 0.1) { // nocked arrow
        line(g, [P(0, back + px), P(0, b * 18)], '#e8d8b0', 1.4);
        inked(g, () => { const a0 = P(-2.5, b * 16), a1 = P(0, b * 22), a2 = P(2.5, b * 16); g.moveTo(...a0); g.lineTo(...a1); g.lineTo(...a2); g.closePath(); }, '#e8ecf0');
        line(g, [P(-2, back + px), P(0, back + px + b * 4)], '#ff6a8a', 1.4); line(g, [P(2, back + px), P(0, back + px + b * 4)], '#ff6a8a', 1.4);
      }
      limb(-1); limb(1);
      inked(g, () => { const [gx, gy] = P(0, b * 3); g.rect(gx - 2.4, gy - 4, 4.8, 8); }, '#5a3a22');
      for (const sgn of [-1, 1]) { const [tx, ty] = T(sgn); inked(g, () => g.arc(tx, ty, 1.8, 0, Math.PI * 2), w.tip); }
      tip = P(0, b * 20);
    } else if (w.kind === 'staff') {
      const L = 52;
      const gr = g.createLinearGradient(0, -2, 0, 2); gr.addColorStop(0, shade(w.wood, 1.35)); gr.addColorStop(1, shade(w.wood, 0.7));
      inked(g, () => g.rect(-22, -1.8, L + 22, 3.6), gr);
      for (let i = -16; i < L; i += 11) line(g, [[i, -1.8], [i + 4, 1.8]], shade(w.wood, 0.55), 0.8); // wrap
      const gem = w.gem, R = w.big ? 6.5 : 5;
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
