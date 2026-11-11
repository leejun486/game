'use strict';
// 고해상도 캐릭터: 관절 리그로 그려서 굽는 설화풍 치비 캐릭터.
// 각 캐릭터는 시트 한 장으로 구워지고, game.js의 LPC 행 번호(걷기 8~11, 베기 12~15, 시전 0~3, 찌르기 4~7, 활 16~19, 쓰러짐 20)를
// map으로 이 시트의 행에 대응시킨다. 왼쪽은 오른쪽 옆모습을 뒤집어 그린다.
const RIG = (() => {
const TAU = Math.PI * 2;
const OL = '#1a1220'; // outline ink
const LW = 1.15; // outline width in world units

// ---------------------------------------------------------------- colour helpers
function rgb(h) { const n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; }
function shade(h, k) { // k > 0 toward white, k < 0 toward black
  const [r, g, b] = rgb(h), t = k > 0 ? 255 : 0, a = Math.abs(k);
  return `rgb(${Math.round(r + (t - r) * a)},${Math.round(g + (t - g) * a)},${Math.round(b + (t - b) * a)})`;
}
function lin(g, x0, y0, x1, y1, base, hi = 0.28, lo = -0.38) {
  const gr = g.createLinearGradient(x0, y0, x1, y1);
  gr.addColorStop(0, shade(base, hi)); gr.addColorStop(0.5, base); gr.addColorStop(1, shade(base, lo));
  return gr;
}
function rad(g, x, y, r, base) {
  const gr = g.createRadialGradient(x - r * 0.35, y - r * 0.4, r * 0.1, x, y, r * 1.1);
  gr.addColorStop(0, shade(base, 0.35)); gr.addColorStop(0.6, base); gr.addColorStop(1, shade(base, -0.4));
  return gr;
}
// fill + ink outline for the current path
function ink(g, fill, lw = LW) { g.fillStyle = fill; g.fill(); g.lineWidth = lw; g.strokeStyle = OL; g.lineJoin = 'round'; g.stroke(); }
// an outlined capsule from (x0,y0) to (x1,y1)
function bone(g, x0, y0, x1, y1, w, col, hiCol) {
  g.lineCap = 'round';
  g.strokeStyle = OL; g.lineWidth = w + LW * 2; g.beginPath(); g.moveTo(x0, y0); g.lineTo(x1, y1); g.stroke();
  g.strokeStyle = col; g.lineWidth = w; g.beginPath(); g.moveTo(x0, y0); g.lineTo(x1, y1); g.stroke();
  if (hiCol) { g.strokeStyle = hiCol; g.lineWidth = Math.max(0.6, w * 0.28); g.beginPath(); g.moveTo(x0 - w * 0.18, y0 - w * 0.1); g.lineTo(x1 - w * 0.18, y1 - w * 0.1); g.stroke(); }
}
function circ(g, x, y, r) { g.beginPath(); g.arc(x, y, r, 0, TAU); }
function ell(g, x, y, rx, ry, a = 0) { g.beginPath(); g.ellipse(x, y, rx, ry, a, 0, TAU); }
// a limb from a joint at angle a (0 = straight down, + = forward), two segments with a bend
function limb(g, x, y, a, bend, l1, l2, w, col, hi) {
  const kx = x + Math.sin(a) * l1, ky = y + Math.cos(a) * l1;
  const b = a + bend, ex = kx + Math.sin(b) * l2, ey = ky + Math.cos(b) * l2;
  bone(g, x, y, kx, ky, w, col, hi);
  bone(g, kx, ky, ex, ey, w * 0.92, col, hi);
  return { kx, ky, ex, ey, ang: b };
}

// ---------------------------------------------------------------- weapons (drawn along +x from the grip)
function weapon(g, kind, d, glow) {
  switch (kind) {
    case 'sword': { // 환도: curved single-edged blade
      g.beginPath(); g.moveTo(1, -1.4); g.quadraticCurveTo(14, -3.4, 25, -1.2); g.lineTo(26.5, 0.2); g.quadraticCurveTo(14, 0.4, 1, 1.4); g.closePath();
      ink(g, lin(g, 0, -3, 0, 2, '#d9e2ea', 0.5, -0.25), 0.9);
      g.strokeStyle = 'rgba(255,255,255,0.85)'; g.lineWidth = 0.6; g.beginPath(); g.moveTo(3, -1); g.quadraticCurveTo(14, -2.6, 24, -1); g.stroke();
      g.beginPath(); g.rect(-1.5, -3.2, 2.4, 6.4); ink(g, '#d9a640', 0.8);
      bone(g, -1.5, 0, -6.5, 0, 2.2, '#5b1f1a');
      break;
    }
    case 'bow': { // 각궁: horn bow held upright in the hand
      const pull = d.pull || 0;
      g.lineCap = 'round';
      g.strokeStyle = OL; g.lineWidth = 3.4; g.beginPath(); g.moveTo(0, -15); g.quadraticCurveTo(7, -9, 2, 0); g.quadraticCurveTo(7, 9, 0, 15); g.stroke();
      g.strokeStyle = '#7a4a2a'; g.lineWidth = 2; g.beginPath(); g.moveTo(0, -15); g.quadraticCurveTo(7, -9, 2, 0); g.quadraticCurveTo(7, 9, 0, 15); g.stroke();
      g.strokeStyle = '#e9d7a8'; g.lineWidth = 0.7; g.beginPath(); g.moveTo(0.6, -12); g.quadraticCurveTo(6.2, -8, 2.4, -2); g.stroke();
      g.strokeStyle = 'rgba(240,240,230,0.9)'; g.lineWidth = 0.5; g.beginPath(); g.moveTo(0, -15); g.lineTo(-pull, 0); g.lineTo(0, 15); g.stroke();
      if (d.arrow) { bone(g, -pull, 0, -pull + 20, 0, 0.9, '#c9a45c'); g.beginPath(); g.moveTo(-pull + 23, 0); g.lineTo(-pull + 19.5, -1.8); g.lineTo(-pull + 19.5, 1.8); g.closePath(); ink(g, '#e6f6ff', 0.6); }
      break;
    }
    case 'staff': { // 도사 지팡이: wood with a bell and a paper talisman
      bone(g, -8, 0, 22, 0, 2.2, '#8a5a30', '#c08a50');
      circ(g, 23.5, 0, 3.2); ink(g, rad(g, 23.5, 0, 3.2, '#ffd36b'), 0.9);
      g.beginPath(); g.rect(15, 1.5, 3.4, 7); ink(g, '#f2d36b', 0.6);
      g.strokeStyle = '#b3241c'; g.lineWidth = 0.6; g.beginPath(); g.moveTo(16.7, 2.5); g.lineTo(16.7, 7.8); g.stroke();
      if (glow) { const gr = g.createRadialGradient(23.5, 0, 0, 23.5, 0, 9); gr.addColorStop(0, 'rgba(255,240,200,0.9)'); gr.addColorStop(0.4, `rgba(${glow},0.6)`); gr.addColorStop(1, `rgba(${glow},0)`); g.fillStyle = gr; circ(g, 23.5, 0, 9); g.fill(); }
      break;
    }
    case 'club': case 'spiked': case 'big': { // 도깨비 방망이
      const L = kind === 'big' ? 22 : kind === 'spiked' ? 18 : 12, R = kind === 'big' ? 5.2 : kind === 'spiked' ? 4.2 : 2.8;
      g.beginPath(); g.moveTo(-2, -1.5); g.lineTo(L - R, -R); g.arc(L - R, 0, R, -Math.PI / 2, Math.PI / 2); g.lineTo(-2, 1.5); g.closePath();
      ink(g, lin(g, 0, -R, 0, R, '#8a5a30'), 1);
      if (kind !== 'club') for (let i = 0; i < 4; i++) { const x = L * 0.45 + i * (L * 0.15); circ(g, x, -R * 0.55 + (i % 2) * R * 1.1, 1); ink(g, '#e9d7a8', 0.6); }
      g.strokeStyle = 'rgba(255,220,170,0.45)'; g.lineWidth = 0.8; g.beginPath(); g.moveTo(2, -1); g.lineTo(L - R, -R * 0.6); g.stroke();
      break;
    }
    case 'spear': case 'trident': {
      bone(g, -6, 0, 24, 0, 1.8, '#6a4a2a', '#9a7a50');
      if (kind === 'spear') { g.beginPath(); g.moveTo(23, -2.4); g.lineTo(31, 0); g.lineTo(23, 2.4); g.closePath(); ink(g, '#b8bcc4', 0.8); }
      else { for (const o of [-3.6, 0, 3.6]) { g.beginPath(); g.moveTo(23, o - 1); g.lineTo(30, o); g.lineTo(23, o + 1); g.closePath(); ink(g, '#c9d2c8', 0.6); } bone(g, 23, -3.6, 23, 3.6, 1.2, '#c9d2c8'); }
      break;
    }
    case 'axe': { // 우두귀왕의 대부
      bone(g, -8, 0, 28, 0, 2.4, '#4a3020', '#7a5030');
      g.beginPath(); g.moveTo(20, -1.5); g.quadraticCurveTo(25, -14, 33, -12); g.quadraticCurveTo(31, 0, 33, 12); g.quadraticCurveTo(25, 14, 20, 1.5); g.closePath();
      ink(g, lin(g, 20, -12, 33, 12, '#8d929c', 0.45, -0.3), 1);
      g.strokeStyle = 'rgba(255,255,255,0.75)'; g.lineWidth = 0.8; g.beginPath(); g.moveTo(32, -11); g.quadraticCurveTo(30.3, 0, 32, 11); g.stroke();
      circ(g, 21, 0, 2); ink(g, '#d9a640', 0.7);
      break;
    }
    case 'fan': { // 저승사자: an iron folding fan held like a blade
      g.beginPath(); g.moveTo(0, 0); g.arc(0, 0, 16, -0.55, 0.55); g.closePath(); ink(g, lin(g, 0, -9, 16, 9, '#26232c', 0.25, -0.3), 1);
      g.strokeStyle = 'rgba(200,40,50,0.8)'; g.lineWidth = 0.6;
      for (let i = -2; i <= 2; i++) { const a = i * 0.24; g.beginPath(); g.moveTo(2, 0); g.lineTo(Math.cos(a) * 15, Math.sin(a) * 15); g.stroke(); }
      break;
    }
    case 'claw': {
      g.strokeStyle = '#f0e8d8'; g.lineWidth = 1; g.lineCap = 'round';
      for (const o of [-1.6, 0, 1.6]) { g.beginPath(); g.moveTo(0, o); g.quadraticCurveTo(4, o - 0.4, 6, o + 1.4); g.stroke(); }
      break;
    }
    case 'fire': case 'void': {
      if (!glow) break;
      const c = kind === 'void' ? '150,80,255' : '255,130,40';
      const gr = g.createRadialGradient(3, 0, 0, 3, 0, 8); gr.addColorStop(0, 'rgba(255,250,230,0.95)'); gr.addColorStop(0.35, `rgba(${c},0.85)`); gr.addColorStop(1, `rgba(${c},0)`);
      g.fillStyle = gr; circ(g, 3, 0, 8 * glow); g.fill();
      break;
    }
  }
}

// ---------------------------------------------------------------- heads
function eyes(g, x, y, r, d, view, k = 1) {
  const col = d.eyeGlow || d.eyes || '#2b1d18';
  const draw = (ex) => {
    if (d.eyeGlow) {
      const gr = g.createRadialGradient(ex, y, 0, ex, y, r * 0.42); gr.addColorStop(0, '#fffbe0'); gr.addColorStop(0.4, col); gr.addColorStop(1, 'rgba(0,0,0,0)');
      g.fillStyle = gr; circ(g, ex, y, r * 0.42); g.fill();
      ell(g, ex, y, r * 0.15, r * 0.12 * k); g.fillStyle = '#fffbe0'; g.fill();
    } else {
      ell(g, ex, y, r * 0.17, r * 0.24 * k); g.fillStyle = col; g.fill();
      circ(g, ex + r * 0.05, y - r * 0.09, r * 0.07); g.fillStyle = '#fff'; g.fill();
    }
  };
  if (view === 'side') draw(x + r * 0.42);
  else { draw(x - r * 0.36); draw(x + r * 0.36); }
}
function horns(g, x, y, r, d, view) {
  const n = d.horns, c = d.hornCol || '#f3e2b0';
  const one = (hx, dir, size) => {
    g.beginPath(); g.moveTo(hx - 2.2 * size, y - r * 0.7); g.quadraticCurveTo(hx + dir * 2 * size, y - r * 1.5 - 3 * size, hx + dir * 3.5 * size, y - r * 1.75 - 3 * size);
    g.quadraticCurveTo(hx + dir * 1.2 * size, y - r * 1.2, hx + 2.2 * size, y - r * 0.72); g.closePath(); ink(g, lin(g, hx, y - r * 2, hx, y - r * 0.6, c), 0.9);
  };
  const sz = d.hornSize || 1;
  if (n === 1) one(x + (view === 'side' ? r * 0.15 : 0), view === 'side' ? 1 : 0.3, sz);
  else if (view === 'side') { one(x - r * 0.25, -0.4, sz); one(x + r * 0.35, 0.8, sz); }
  else { one(x - r * 0.5, -1, sz); one(x + r * 0.5, 1, sz); }
}
function head(g, x, y, d, view, P) {
  const r = d.headR || 10.5, skin = d.skin;
  // behind-head pieces
  if (d.hairStyle === 'ponytail' && view !== 'front') { const bx = view === 'side' ? x - r * 0.9 : x; bone(g, bx, y - r * 0.3, bx - (view === 'side' ? 6 : 0) + Math.sin(P.t * 6) * 1.2, y + r * 0.9, 3.4, d.hair, shade(d.hair, 0.25)); }
  if (d.hairStyle === 'long' || d.hairStyle === 'ghost') {
    g.beginPath(); g.moveTo(x - r * 1.05, y - r * 0.2); g.quadraticCurveTo(x - r * 1.2, y + r * 1.6, x - r * 0.6 + Math.sin(P.t * 5) * 1.5, y + r * (d.hairStyle === 'ghost' ? 2.6 : 1.9));
    g.lineTo(x + r * 0.6, y + r * (d.hairStyle === 'ghost' ? 2.6 : 1.9)); g.quadraticCurveTo(x + r * 1.2, y + r * 1.6, x + r * 1.05, y - r * 0.2); g.closePath();
    ink(g, lin(g, x, y - r, x, y + r * 2, d.hair, 0.2, -0.3));
  }
  if (d.head === 'wolf' || d.head === 'boar' || d.head === 'bull' || d.head === 'snake') { beastHead(g, x, y, r, d, view); return; }
  if (d.head === 'skull') { skull(g, x, y, r, d, view); return; }
  // face
  circ(g, x, y, r); ink(g, rad(g, x, y, r, skin));
  if (view === 'side') { ell(g, x + r * 0.95, y + r * 0.15, r * 0.14, r * 0.2); g.fillStyle = shade(skin, -0.12); g.fill(); }
  if (d.mask === 'fox') foxMask(g, x, y, r, view);
  else if (view !== 'back' && d.hairStyle !== 'ghost') {
    eyes(g, x, y + r * 0.08, r, d, view);
    // cheeks and mouth
    g.fillStyle = 'rgba(255,120,120,0.28)';
    if (view === 'front') { circ(g, x - r * 0.58, y + r * 0.42, r * 0.16); g.fill(); circ(g, x + r * 0.58, y + r * 0.42, r * 0.16); g.fill(); }
    else { circ(g, x + r * 0.35, y + r * 0.45, r * 0.15); g.fill(); }
    if (d.fangs) { const mx = view === 'side' ? x + r * 0.55 : x; g.fillStyle = '#fff'; g.beginPath(); g.moveTo(mx - 2, y + r * 0.5); g.lineTo(mx - 1.2, y + r * 0.85); g.lineTo(mx - 0.4, y + r * 0.5); g.fill(); g.beginPath(); g.moveTo(mx + 0.4, y + r * 0.5); g.lineTo(mx + 1.2, y + r * 0.85); g.lineTo(mx + 2, y + r * 0.5); g.fill(); }
  }
  // hair / hats on top
  if (d.hairStyle === 'ghost' && view !== 'back') { // 처녀귀신: hair parted in two curtains, a sliver of pale face and one eye
    const gap = view === 'side' ? r * 0.32 : r * 0.36, cx = view === 'side' ? x + r * 0.45 : x + r * 0.1;
    for (const sd of [-1, 1]) {
      g.beginPath(); g.moveTo(cx + sd * gap, y - r * 0.85); g.quadraticCurveTo(cx + sd * gap * 0.5, y + r * 0.6, cx + sd * gap * 1.5 + Math.sin(P.t * 4 + sd) * 1, y + r * 2.4);
      g.lineTo(x + sd * r * 1.08, y + r * 2.3); g.quadraticCurveTo(x + sd * r * 1.15, y - r * 0.2, x + sd * r * 0.5, y - r * 1.0); g.quadraticCurveTo(cx, y - r * 1.15, cx + sd * gap, y - r * 0.85); g.closePath();
      ink(g, lin(g, x, y - r, x, y + r * 2, d.hair, 0.18, -0.3));
    }
    g.strokeStyle = 'rgba(160,30,40,0.8)'; g.lineWidth = 0.7; g.beginPath(); g.moveTo(cx - gap * 0.3, y + r * 0.55); g.lineTo(cx - gap * 0.2, y + r * 0.95); g.stroke(); // a thin line of blood
    const ex = cx - gap * 0.05;
    const gr = g.createRadialGradient(ex, y + r * 0.05, 0, ex, y + r * 0.05, r * 0.32); gr.addColorStop(0, '#ffe6e6'); gr.addColorStop(0.35, '#ff3040'); gr.addColorStop(1, 'rgba(255,0,0,0)');
    g.fillStyle = gr; circ(g, ex, y + r * 0.05, r * 0.32); g.fill();
  }
  if (d.hairStyle === 'ghost' && view === 'back') { circ(g, x, y, r * 1.06); ink(g, lin(g, x - r, y - r, x + r, y + r, d.hair, 0.2, -0.3)); }
  if (d.hair && d.hairStyle !== 'ghost' && d.hat !== 'helmet') {
    g.beginPath();
    if (view === 'side') { g.moveTo(x + r * 0.7, y - r * 0.55); g.quadraticCurveTo(x + r * 0.2, y - r * 1.25, x - r * 0.6, y - r * 0.95); g.quadraticCurveTo(x - r * 1.25, y - r * 0.2, x - r * 0.75, y + r * 0.7); g.quadraticCurveTo(x - r * 0.2, y + r * 0.1, x + r * 0.1, y - r * 0.35); g.quadraticCurveTo(x + r * 0.45, y - r * 0.3, x + r * 0.7, y - r * 0.55); }
    else if (view === 'front') { g.moveTo(x - r * 1.02, y + r * 0.2); g.quadraticCurveTo(x - r * 1.15, y - r * 1.25, x, y - r * 1.12); g.quadraticCurveTo(x + r * 1.15, y - r * 1.25, x + r * 1.02, y + r * 0.2); g.quadraticCurveTo(x + r * 0.7, y - r * 0.45, x + r * 0.15, y - r * 0.38); g.lineTo(x, y - r * 0.6); g.lineTo(x - r * 0.15, y - r * 0.38); g.quadraticCurveTo(x - r * 0.7, y - r * 0.45, x - r * 1.02, y + r * 0.2); }
    else { g.moveTo(x - r * 1.04, y + r * 0.45); g.quadraticCurveTo(x - r * 1.15, y - r * 1.25, x, y - r * 1.12); g.quadraticCurveTo(x + r * 1.15, y - r * 1.25, x + r * 1.04, y + r * 0.45); g.quadraticCurveTo(x, y + r * 0.85, x - r * 1.04, y + r * 0.45); }
    ink(g, lin(g, x - r, y - r, x + r, y + r, d.hair, 0.3, -0.3));
    g.strokeStyle = shade(d.hair, 0.45); g.lineWidth = 0.7; g.beginPath(); g.arc(x - r * 0.1, y - r * 0.4, r * 0.7, -2.4, -1.4); g.stroke();
  }
  if (d.band) { g.lineWidth = 2; g.strokeStyle = OL; g.beginPath(); g.arc(x, y + r * 0.1, r * 1.0, -2.7, -0.45); g.stroke(); g.lineWidth = 1.3; g.strokeStyle = d.band; g.stroke(); }
  if (d.horns) horns(g, x, y, r, d, view);
  if (d.hat) hat(g, x, y, r, d, view, P);
  if (d.talisman && view !== 'back') { // 강시 이마의 부적
    const tx = view === 'side' ? x + r * 0.55 : x;
    g.save(); g.translate(tx, y - r * 0.35); g.rotate(Math.sin(P.t * 8) * 0.08);
    g.beginPath(); g.rect(-2.4, 0, 4.8, r * 1.15); ink(g, '#f2d36b', 0.7);
    g.strokeStyle = '#b3241c'; g.lineWidth = 0.7; g.beginPath(); g.moveTo(0, 1.5); g.lineTo(0, r * 1.0); g.moveTo(-1.4, 4); g.lineTo(1.4, 4); g.moveTo(-1.2, 7); g.lineTo(1.2, 8); g.stroke();
    g.restore();
  }
}
function foxMask(g, x, y, r, view) {
  if (view === 'back') { for (const s of [-1, 1]) { g.beginPath(); g.moveTo(x + s * r * 0.35, y - r * 0.8); g.lineTo(x + s * r * 0.75, y - r * 1.55); g.lineTo(x + s * r * 0.95, y - r * 0.55); g.closePath(); ink(g, '#fff6ef', 0.9); } return; }
  const cx = view === 'side' ? x + r * 0.25 : x;
  g.beginPath(); g.moveTo(cx - r * 0.95, y - r * 0.35); g.quadraticCurveTo(cx - r * 0.9, y + r * 0.55, cx, y + r * 0.95); g.quadraticCurveTo(cx + r * 0.9, y + r * 0.55, cx + r * 0.95, y - r * 0.35); g.quadraticCurveTo(cx, y - r * 0.75, cx - r * 0.95, y - r * 0.35); g.closePath();
  ink(g, lin(g, cx, y - r, cx, y + r, '#fff6ef', 0.4, -0.15));
  for (const s of [-1, 1]) { // ears
    g.beginPath(); g.moveTo(cx + s * r * 0.3, y - r * 0.6); g.lineTo(cx + s * r * 0.78, y - r * 1.5); g.lineTo(cx + s * r * 0.98, y - r * 0.45); g.closePath(); ink(g, '#fff6ef', 0.9);
    g.beginPath(); g.moveTo(cx + s * r * 0.48, y - r * 0.62); g.lineTo(cx + s * r * 0.76, y - r * 1.2); g.lineTo(cx + s * r * 0.86, y - r * 0.58); g.closePath(); g.fillStyle = '#ff8fb0'; g.fill();
    g.strokeStyle = '#c8243a'; g.lineWidth = 1.1; g.lineCap = 'round'; g.beginPath(); g.moveTo(cx + s * r * 0.18, y + r * 0.02); g.quadraticCurveTo(cx + s * r * 0.4, y - r * 0.16, cx + s * r * 0.62, y + r * 0.04); g.stroke();
    g.strokeStyle = 'rgba(200,36,58,0.7)'; g.lineWidth = 0.8; g.beginPath(); g.moveTo(cx + s * r * 0.55, y + r * 0.35); g.lineTo(cx + s * r * 0.85, y + r * 0.25); g.stroke();
  }
  circ(g, cx, y + r * 0.62, r * 0.12); g.fillStyle = '#2a1a20'; g.fill();
  g.fillStyle = '#c8243a'; g.beginPath(); g.moveTo(cx, y - r * 0.55); g.lineTo(cx - r * 0.12, y - r * 0.3); g.lineTo(cx, y - r * 0.12); g.lineTo(cx + r * 0.12, y - r * 0.3); g.fill();
}
function hat(g, x, y, r, d, view, P) {
  switch (d.hat) {
    case 'helmet': { // 투구 with a red plume
      const hy = y - r * 0.38;
      g.beginPath(); g.arc(x, hy, r * 1.08, Math.PI * 1.02, Math.PI * 1.98); g.lineTo(x + r * 1.08, hy + r * 0.2); g.lineTo(x - r * 1.08, hy + r * 0.2); g.closePath();
      ink(g, lin(g, x - r, hy - r, x + r, hy + r * 0.3, d.hatCol, 0.45, -0.35));
      g.beginPath(); g.rect(x - r * 1.18, hy + r * 0.08, r * 2.36, r * 0.3); ink(g, d.trim || '#d9a640', 0.9);
      for (let i = -2; i <= 2; i++) { circ(g, x + i * r * 0.42, hy + r * 0.23, 0.7); g.fillStyle = '#fff3c0'; g.fill(); }
      g.strokeStyle = 'rgba(255,255,255,0.6)'; g.lineWidth = 0.8; g.beginPath(); g.arc(x, hy, r * 0.85, -2.6, -1.9); g.stroke();
      // a ridge down the bowl
      g.strokeStyle = shade(d.hatCol, -0.45); g.lineWidth = 0.9; g.beginPath(); g.moveTo(x, hy - r * 1.05); g.lineTo(x, hy + r * 0.05); g.stroke();
      bone(g, x, hy - r * 1.06, x, hy - r * 1.4, 1.6, '#d9a640');
      const sway = Math.sin(P.t * 7) * 1.5, back = view === 'side' ? -1 : 0;
      g.beginPath(); g.moveTo(x - 1, hy - r * 1.4); g.quadraticCurveTo(x + back * 8 + sway, hy - r * 2.1, x + back * 12 + sway * 1.5, hy - r * 0.95); g.quadraticCurveTo(x + back * 5, hy - r * 1.45, x + 1.5, hy - r * 1.35); g.closePath();
      ink(g, lin(g, x, hy - r * 2, x, hy - r, d.plume || '#d8322a', 0.35, -0.3), 0.9);
      if (view !== 'front') { g.beginPath(); g.moveTo(x - r * (view === 'side' ? 1.1 : 1.05), hy + r * 0.3); g.lineTo(x - r * (view === 'side' ? 1.15 : 1.05), y + r * 0.75); g.lineTo(x + (view === 'side' ? -r * 0.35 : r * 1.05), y + r * 0.75); g.lineTo(x + (view === 'side' ? -r * 0.3 : r * 1.05), hy + r * 0.3); g.closePath(); ink(g, lin(g, x - r, hy, x + r, y + r, d.hatCol, 0.2, -0.4), 0.8); } // neck guard
      break;
    }
    case 'gat': { // 흑립: wide black brim, tall crown, chin cord
      const by = y - r * 0.55, W = r * (view === 'side' ? 2.3 : 2.0);
      ell(g, x, by, W, r * (view === 'side' ? 0.26 : 0.4)); ink(g, 'rgba(22,18,28,0.92)', 0.9);
      g.beginPath(); g.moveTo(x - r * 0.62, by); g.lineTo(x - r * 0.52, by - r * 1.2); g.quadraticCurveTo(x, by - r * 1.35, x + r * 0.52, by - r * 1.2); g.lineTo(x + r * 0.62, by); g.closePath();
      ink(g, lin(g, x - r, by - r, x + r, by, '#1c1822', 0.25, -0.2));
      g.beginPath(); g.rect(x - r * 0.6, by - r * 0.32, r * 1.2, r * 0.22); g.fillStyle = '#5a1a20'; g.fill();
      if (view !== 'back') { g.strokeStyle = '#d9c9a0'; g.lineWidth = 0.6; g.beginPath(); g.moveTo(x - r * 0.75, by); g.quadraticCurveTo(x - r * 0.6, y + r * 1.0, x, y + r * 1.05); g.quadraticCurveTo(x + r * 0.6, y + r * 1.0, x + r * 0.75, by); g.stroke(); }
      break;
    }
    case 'qing': { // 강시의 청나라 관모
      const by = y - r * 0.5;
      g.beginPath(); g.moveTo(x - r * 1.1, by + r * 0.15); g.quadraticCurveTo(x - r * 1.0, by - r * 0.95, x, by - r * 1.0); g.quadraticCurveTo(x + r * 1.0, by - r * 0.95, x + r * 1.1, by + r * 0.15); g.closePath();
      ink(g, lin(g, x - r, by - r, x + r, by, '#22202a', 0.25, -0.25));
      g.beginPath(); g.rect(x - r * 1.12, by - r * 0.05, r * 2.24, r * 0.3); ink(g, '#4a3a8a', 0.8);
      circ(g, x, by - r * 1.1, r * 0.22); ink(g, rad(g, x, by - r * 1.1, r * 0.22, '#d8322a'), 0.8);
      if (view === 'back') { bone(g, x, by + r * 0.2, x - 1, by + r * 1.9, 2.6, '#1a1620'); }
      break;
    }
    case 'crown': { // 어둑시니의 검은 관
      const by = y - r * 0.75;
      g.beginPath(); g.moveTo(x - r * 0.95, by + r * 0.2);
      for (let i = 0; i <= 4; i++) { const px = x - r * 0.95 + (i / 4) * r * 1.9; g.lineTo(px, by - (i % 2 === 0 ? r * 0.85 : r * 0.35)); }
      g.lineTo(x + r * 0.95, by + r * 0.2); g.closePath(); ink(g, lin(g, x, by - r, x, by + r * 0.2, '#3a2a10', 0.5, -0.3));
      for (let i = 0; i <= 4; i += 2) { circ(g, x - r * 0.95 + (i / 4) * r * 1.9, by - r * 0.85, 1.1); g.fillStyle = '#c070ff'; g.fill(); }
      break;
    }
    case 'hood': {
      g.beginPath(); g.arc(x, y, r * 1.2, Math.PI * 0.9, Math.PI * 2.1); g.quadraticCurveTo(x + r * 1.3, y + r * 1.3, x + r * 0.4, y + r * 1.25); g.lineTo(x - r * 0.4, y + r * 1.25); g.quadraticCurveTo(x - r * 1.3, y + r * 1.3, x - r * 1.18, y + r * 0.3); g.closePath();
      ink(g, lin(g, x - r, y - r, x + r, y + r, d.hatCol, 0.2, -0.4));
      if (view !== 'back') { ell(g, view === 'side' ? x + r * 0.35 : x, y + r * 0.15, r * 0.62, r * 0.7); g.fillStyle = '#08050c'; g.fill(); eyes(g, view === 'side' ? x : x, y + r * 0.15, r * 0.8, d, view); }
      break;
    }
  }
}
function skull(g, x, y, r, d, view) {
  g.beginPath(); g.arc(x, y - r * 0.08, r * 0.95, Math.PI * 0.85, Math.PI * 2.15); g.lineTo(x + r * 0.55, y + r * 0.95); g.lineTo(x - r * 0.55, y + r * 0.95); g.closePath();
  ink(g, rad(g, x, y, r, d.bone));
  if (view !== 'back') {
    const ox = view === 'side' ? r * 0.25 : 0;
    for (const s of view === 'side' ? [1] : [-1, 1]) { ell(g, x + ox + s * r * (view === 'side' ? 0.2 : 0.38), y, r * 0.24, r * 0.3); g.fillStyle = '#120c16'; g.fill(); }
    eyes(g, x + ox * 0.3, y, r * 0.9, d, view);
    g.strokeStyle = OL; g.lineWidth = 0.7; g.beginPath(); for (let i = -2; i <= 2; i++) { g.moveTo(x + ox + i * r * 0.18, y + r * 0.62); g.lineTo(x + ox + i * r * 0.18, y + r * 0.92); } g.stroke();
  }
  if (d.hat) hat(g, x, y, r, d, view, { t: 0 });
}
function beastHead(g, x, y, r, d, view) {
  const fur = d.skin, side = view === 'side';
  // ears / horns
  if (d.head === 'wolf') for (const s of side ? [-0.3, 0.25] : [-1, 1]) { g.beginPath(); const ex = x + s * r * (side ? 1 : 0.62); g.moveTo(ex - r * 0.32, y - r * 0.6); g.lineTo(ex + (side ? -r * 0.1 : s * r * 0.15), y - r * 1.55); g.lineTo(ex + r * 0.32, y - r * 0.6); g.closePath(); ink(g, lin(g, ex, y - r * 1.5, ex, y - r * 0.6, fur), 0.9); }
  if (d.head === 'bull') for (const s of [-1, 1]) { if (side && s < 0) continue; const hx = x + s * r * 0.75; g.beginPath(); g.moveTo(hx, y - r * 0.55); g.quadraticCurveTo(hx + s * r * 1.4, y - r * 0.9, hx + s * r * 1.25, y - r * 2.0); g.quadraticCurveTo(hx + s * r * 0.9, y - r * 1.0, hx - s * r * 0.15, y - r * 0.15); g.closePath(); ink(g, lin(g, hx, y - r * 2, hx, y, '#efe4c8', 0.3, -0.3), 0.9); }
  circ(g, x, y, r); ink(g, rad(g, x, y, r, fur));
  if (d.head === 'snake') { // 이무기: scaled head with a hood frill
    g.fillStyle = shade(fur, -0.25); for (let i = 0; i < 5; i++) { circ(g, x - r * 0.5 + i * r * 0.25, y - r * 0.5 + (i % 2) * 2, 1.2); g.fill(); }
  }
  // muzzle
  if (view !== 'back') {
    const mx = side ? x + r * 0.85 : x, my = y + r * 0.35, mw = side ? r * 0.75 : r * 0.55;
    ell(g, mx, my, mw, r * 0.45); ink(g, rad(g, mx, my, mw, d.belly || shade(fur, 0.3)), 0.9);
    circ(g, mx + (side ? mw * 0.75 : 0), my - r * 0.12, r * 0.15); g.fillStyle = '#1a1018'; g.fill();
    if (d.head === 'boar' || d.head === 'bull') { // nostrils
      g.fillStyle = '#3a1a1a'; circ(g, mx + (side ? mw * 0.55 : -r * 0.18), my, r * 0.08); g.fill(); if (!side) { circ(g, mx + r * 0.18, my, r * 0.08); g.fill(); }
    }
    if (d.head === 'boar') for (const s of side ? [1] : [-1, 1]) { g.beginPath(); const tx = mx + (side ? mw * 0.4 : s * mw * 0.7); g.moveTo(tx - 1, my + r * 0.25); g.quadraticCurveTo(tx + (side ? 3 : s * 2), my + r * 0.2, tx + (side ? 2.5 : s * 2.5), my - r * 0.5); g.lineTo(tx + 1, my + r * 0.35); g.closePath(); ink(g, '#fff6e0', 0.7); }
    if (d.head === 'bull' && d.ring) { g.strokeStyle = '#d9a640'; g.lineWidth = 1.2; g.beginPath(); g.arc(mx + (side ? mw * 0.5 : 0), my + r * 0.3, r * 0.22, 0, Math.PI); g.stroke(); }
    if (d.head === 'wolf' || d.head === 'snake') { g.fillStyle = '#fff'; for (const o of side ? [0.25, 0.6] : [-0.25, 0.25]) { g.beginPath(); g.moveTo(mx + mw * o - 0.8, my + r * 0.3); g.lineTo(mx + mw * o, my + r * 0.62); g.lineTo(mx + mw * o + 0.8, my + r * 0.3); g.fill(); } }
    const ey = y - r * 0.15;
    eyes(g, x + (side ? r * 0.05 : 0), ey, r * 0.95, d, view, 0.8);
    // brow
    g.strokeStyle = OL; g.lineWidth = 1; g.beginPath();
    if (side) { g.moveTo(x + r * 0.1, ey - r * 0.38); g.lineTo(x + r * 0.75, ey - r * 0.18); } else { g.moveTo(x - r * 0.65, ey - r * 0.42); g.lineTo(x - r * 0.12, ey - r * 0.22); g.moveTo(x + r * 0.65, ey - r * 0.42); g.lineTo(x + r * 0.12, ey - r * 0.22); }
    g.stroke();
  }
  if (d.mane) { g.beginPath(); g.moveTo(x - r * 0.9, y - r * 0.6); for (let i = 0; i < 5; i++) g.lineTo(x - r * 0.9 + i * r * 0.35 + 1, y - r * (1.15 + (i % 2) * 0.35)); g.lineTo(x + r * 0.6, y - r * 0.6); g.closePath(); ink(g, shade(fur, -0.35), 0.8); }
}

// ---------------------------------------------------------------- bodies
function torso(g, x, y, w, h, d, view, lean) {
  const st = d.torso, c = d.torsoCol;
  g.save(); g.translate(x, y); g.rotate(lean);
  // y = 0 at hips, -h at shoulders
  if (st === 'robe' || st === 'longrobe' || st === 'ghost') {
    const skirt = st === 'robe' ? 4 : st === 'longrobe' ? 13 : 16, flare = st === 'robe' ? 1.25 : 1.4;
    g.beginPath(); g.moveTo(-w * 0.45, -h); g.quadraticCurveTo(-w * 0.62, -h * 0.4, -w * 0.5 * flare, skirt);
    if (st === 'ghost') { for (let i = 0; i <= 6; i++) { const px = -w * 0.5 * flare + (i / 6) * w * flare; g.lineTo(px, skirt + (i % 2 ? -3 : 2) + Math.sin(d._t * 6 + i) * 1.5); } }
    else g.quadraticCurveTo(0, skirt + 2, w * 0.5 * flare, skirt);
    g.quadraticCurveTo(w * 0.62, -h * 0.4, w * 0.45, -h); g.closePath();
    ink(g, lin(g, -w, -h, w, skirt, c, 0.25, -0.35));
    if (d.trim) { g.strokeStyle = d.trim; g.lineWidth = 1.2; g.beginPath(); g.moveTo(-w * 0.5 * flare + 1, skirt - 0.8); g.quadraticCurveTo(0, skirt + 1.2, w * 0.5 * flare - 1, skirt - 0.8); g.stroke(); }
  } else {
    const bw = st === 'bulky' || st === 'bare_big' ? w * 1.15 : w;
    g.beginPath(); g.moveTo(-bw * 0.42, -h); g.quadraticCurveTo(-bw * 0.62, -h * 0.5, -bw * 0.42, 1); g.lineTo(bw * 0.42, 1); g.quadraticCurveTo(bw * 0.62, -h * 0.5, bw * 0.42, -h); g.closePath();
    ink(g, lin(g, -bw, -h, bw, 0, c, 0.28, -0.38));
    if (st === 'bare' || st === 'bare_big') { // muscles and a tiger-skin loincloth (호피)
      g.strokeStyle = shade(c, -0.3); g.lineWidth = 0.7; g.beginPath(); g.moveTo(0, -h * 0.75); g.lineTo(0, -h * 0.35); g.moveTo(-bw * 0.25, -h * 0.62); g.quadraticCurveTo(-bw * 0.1, -h * 0.5, 0, -h * 0.62); g.moveTo(bw * 0.25, -h * 0.62); g.quadraticCurveTo(bw * 0.1, -h * 0.5, 0, -h * 0.62); g.stroke();
      g.beginPath(); g.moveTo(-bw * 0.5, -h * 0.25); g.lineTo(bw * 0.5, -h * 0.25); g.lineTo(bw * 0.46, 5); g.lineTo(0, 3); g.lineTo(-bw * 0.46, 5); g.closePath(); ink(g, lin(g, 0, -h * 0.3, 0, 5, '#e3a437', 0.2, -0.25), 0.9);
      g.strokeStyle = '#2a1a10'; g.lineWidth = 1; for (let i = 0; i < 4; i++) { const px = -bw * 0.35 + i * bw * 0.24; g.beginPath(); g.moveTo(px, -h * 0.2); g.quadraticCurveTo(px + 1.5, 0, px - 0.5, 3); g.stroke(); }
    } else if (st === 'armor') { // 두정갑: lacquered coat studded with brass
      g.beginPath(); g.moveTo(-bw * 0.5, -h * 0.3); g.lineTo(bw * 0.5, -h * 0.3); g.lineTo(bw * 0.55, 5); g.lineTo(-bw * 0.55, 5); g.closePath(); ink(g, lin(g, 0, -h * 0.3, 0, 5, shade(c, -0.1)), 0.9);
      g.fillStyle = '#ffe29a'; for (let r = 0; r < 4; r++) for (let i = 0; i < 4; i++) { circ(g, -bw * 0.36 + i * bw * 0.24, -h * 0.8 + r * h * 0.27 + (r > 1 ? 1.5 : 0), 0.6); g.fill(); }
      g.beginPath(); g.rect(-bw * 0.5, -h * 0.36, bw, 2.2); ink(g, d.trim || '#d9a640', 0.7);
      g.strokeStyle = d.trim || '#d9a640'; g.lineWidth = 1; g.beginPath(); g.moveTo(-bw * 0.3, -h); g.lineTo(0, -h * 0.55); g.lineTo(bw * 0.3, -h); g.stroke();
    } else if (st === 'tunic') {
      g.beginPath(); g.moveTo(-bw * 0.5, -h * 0.3); g.lineTo(bw * 0.5, -h * 0.3); g.lineTo(bw * 0.58, 6); g.lineTo(-bw * 0.58, 6); g.closePath(); ink(g, lin(g, 0, -h * 0.3, 0, 6, c), 0.9);
      g.strokeStyle = d.trim; g.lineWidth = 1.3; g.beginPath(); g.moveTo(-bw * 0.35, -h); g.lineTo(bw * 0.15, -h * 0.45); g.stroke();
      g.beginPath(); g.rect(-bw * 0.5, -h * 0.34, bw, 2); ink(g, d.trim, 0.6);
    } else if (st === 'ribs') {
      g.strokeStyle = shade(c, -0.35); g.lineWidth = 0.9; for (let i = 0; i < 4; i++) { g.beginPath(); g.moveTo(-bw * 0.38, -h * 0.85 + i * h * 0.17); g.quadraticCurveTo(0, -h * 0.75 + i * h * 0.17, bw * 0.38, -h * 0.85 + i * h * 0.17); g.stroke(); }
      if (d.rag) { g.beginPath(); g.moveTo(-bw * 0.5, -h * 0.2); g.lineTo(bw * 0.5, -h * 0.2); g.lineTo(bw * 0.4, 5); g.lineTo(bw * 0.1, 2); g.lineTo(-bw * 0.15, 6); g.lineTo(-bw * 0.45, 3); g.closePath(); ink(g, d.rag, 0.8); }
    } else if (st === 'fur' || st === 'bulky') {
      g.fillStyle = d.belly || shade(c, 0.3); ell(g, view === 'side' ? bw * 0.12 : 0, -h * 0.45, bw * 0.28, h * 0.32); g.fill();
      if (d.pants) { g.beginPath(); g.moveTo(-bw * 0.48, -h * 0.15); g.lineTo(bw * 0.48, -h * 0.15); g.lineTo(bw * 0.45, 4); g.lineTo(-bw * 0.45, 4); g.closePath(); ink(g, lin(g, 0, -h * 0.2, 0, 4, d.pants), 0.8); }
      if (d.plates) { g.beginPath(); g.moveTo(-bw * 0.45, -h); g.lineTo(bw * 0.45, -h); g.lineTo(bw * 0.38, -h * 0.55); g.lineTo(-bw * 0.38, -h * 0.55); g.closePath(); ink(g, lin(g, 0, -h, 0, -h * 0.5, d.plates, 0.4, -0.2), 0.8); g.fillStyle = '#ffe29a'; circ(g, 0, -h * 0.78, 1); g.fill(); }
    }
  }
  if (d.sash) { g.beginPath(); g.rect(-w * 0.52, -h * 0.4, w * 1.04, 2.4); ink(g, d.sash, 0.7); }
  g.restore();
}
function cape(g, x, y, d, view, P) {
  if (!d.cape) return;
  const sway = Math.sin(P.t * 5) * 1.5 + (P.moving ? -2.5 : 0);
  g.beginPath();
  if (view === 'side') { g.moveTo(x - 3, y); g.quadraticCurveTo(x - 10 + sway, y + 10, x - 9 + sway * 1.6, y + 20); g.lineTo(x + 2, y + 19); g.quadraticCurveTo(x + 1, y + 9, x + 2, y); }
  else { g.moveTo(x - 7, y); g.quadraticCurveTo(x - 10, y + 12, x - 9 + sway * 0.5, y + 21); g.lineTo(x + 9 - sway * 0.5, y + 21); g.quadraticCurveTo(x + 10, y + 12, x + 7, y); }
  g.closePath(); ink(g, lin(g, x - 8, y, x + 8, y + 20, d.cape, 0.2, -0.4));
}
function tails(g, x, y, d, P, view) {
  if (!d.tails) return;
  const n = d.tails, col = d.tailCol;
  for (let i = 0; i < n; i++) {
    const a = (view === 'side' ? -2.2 : -Math.PI / 2) + (i - (n - 1) / 2) * 0.55 + Math.sin(P.t * 4 + i) * 0.15;
    const L = d.tailLen || 12, ex = x + Math.cos(a) * L, ey = y + Math.sin(a) * L;
    g.beginPath(); g.moveTo(x - 2, y); g.quadraticCurveTo(x + Math.cos(a + 0.6) * L * 0.6, y + Math.sin(a + 0.6) * L * 0.6, ex, ey);
    g.quadraticCurveTo(x + Math.cos(a - 0.5) * L * 0.6, y + Math.sin(a - 0.5) * L * 0.6, x + 2, y); g.closePath();
    ink(g, lin(g, x, y, ex, ey, col, 0.3, -0.25), 0.9);
    if (d.tailTip) { circ(g, ex - Math.cos(a) * 2, ey - Math.sin(a) * 2, 2.2); g.fillStyle = d.tailTip; g.fill(); }
  }
}

// ---------------------------------------------------------------- full figure
// P: view, t, legs [back, front] angles, knee bend, arms [back, front], elbow bends, bob, lean, hop, wpnAng offset, glow, pull, arrow
function figure(g, d, P) {
  const S = d.size || 1, view = P.view, side = view === 'side';
  d._t = P.t;
  g.save(); g.scale(S, S);
  const legL = d.legL ?? 13, ghost = d.body === 'ghost';
  const hipY = (ghost ? -legL - 4 + Math.sin(P.t * 4) * 1.5 : -legL) + P.bob, th = d.torsoH || 14, tw = d.torsoW || 15;
  const lean = P.lean + (d.body === 'beast' ? 0.28 : 0);
  const shX = Math.sin(lean) * th, shY = hipY - Math.cos(lean) * th; // shoulder centre
  const headR = d.headR || 10.5, headX = shX + (d.body === 'beast' && side ? 4 : 0), headY = shY - headR * 0.82 + (d.body === 'beast' ? 3 : 0);
  const lw = d.legW || 5.2, aw = d.armW || 4.4, armL = d.armL || 6.2;
  const legCol = d.legCol || d.skin, boot = d.boot;
  const skel = d.body === 'skeleton';
  const limbCol = (c) => (skel ? d.bone : c);
  const legW = skel ? 2.4 : lw, armW = skel ? 2.2 : aw;
  const drawLeg = (hx, a, bend, dark, lift = 0) => {
    const c = dark ? shade(limbCol(legCol), -0.25) : limbCol(legCol);
    const r = limb(g, hx, hipY, a, bend, legL * 0.52 * (1 - lift), legL * 0.5 * (1 - lift), legW, c, skel ? null : shade(c, 0.2));
    if (boot && !skel) { g.beginPath(); g.ellipse(r.ex + (side ? 1.2 : 0), r.ey - 0.6, side ? 3.4 : 2.8, 2, 0, 0, TAU); ink(g, dark ? shade(boot, -0.25) : boot, 0.9); }
    else if (skel) { circ(g, r.kx, r.ky, 1.4); ink(g, d.bone, 0.6); }
  };
  const handPos = (sx, sy, a, bend) => { const ex = sx + Math.sin(a) * armL, ey = sy + Math.cos(a) * armL, b = a + bend; return { ex, ey, hx: ex + Math.sin(b) * armL, hy: ey + Math.cos(b) * armL, ang: b }; };
  const drawArm = (sx, sy, a, bend, dark, holds) => {
    const c = dark ? shade(limbCol(d.armCol || d.torsoCol), -0.25) : limbCol(d.armCol || d.torsoCol);
    const r = limb(g, sx, sy, a, bend, armL, armL, armW, c, skel ? null : shade(c, 0.22));
    if (holds && P.weapon && !dark) { // at rest a weapon keeps its own carry angle; in action it follows the forearm
      const rot = P.restAbs !== undefined ? P.restAbs : Math.atan2(Math.cos(r.ang), Math.sin(r.ang)) + (P.wpnAng || 0);
      g.save(); g.translate(r.ex, r.ey); g.rotate(rot); weapon(g, P.weapon, P, P.glow); g.restore();
    }
    circ(g, r.ex, r.ey, armW * 0.62); ink(g, dark ? shade(skel ? d.bone : d.hand || d.skin, -0.2) : (skel ? d.bone : d.hand || d.skin), 0.8);
    if (d.claws && !holds) { g.save(); g.translate(r.ex, r.ey); g.rotate(Math.atan2(Math.cos(r.ang), Math.sin(r.ang))); weapon(g, 'claw', P); g.restore(); }
    return r;
  };
  const backArmX = shX + (side ? -1.5 : tw * 0.48), frontArmX = shX + (side ? 1.5 : -tw * 0.48), armY = shY + 2;
  if (view === 'back') { // weapon and front pieces go behind the body
    drawArm(frontArmX, armY, -P.arms[1] * 0.6, P.elbow[1], false, true);
    drawArm(backArmX, armY, P.arms[0] * 0.6, P.elbow[0], false, false);
    if (!ghost) { drawLeg(-tw * 0.22, 0, 0, false, P.lift[1]); drawLeg(tw * 0.22, 0, 0, false, P.lift[0]); }
    torso(g, 0, hipY, tw, th, d, view, 0);
    tails(g, 0, hipY - 2, d, P, view);
    head(g, headX, headY, d, view, P);
    cape(g, shX, shY + 1, d, view, P);
    g.restore(); return;
  }
  if (side) cape(g, shX, shY + 1, d, view, P);
  if (side) tails(g, -tw * 0.3, hipY - 1, d, P, view);
  if (side) {
    drawArm(backArmX, armY, P.arms[0], P.elbow[0], true, false);
    if (!ghost) drawLeg(-1.5, P.legs[0], P.knee[0], true);
    if (P.bowBack) { /* the drawing hand stays behind */ }
    if (!ghost) drawLeg(1.5, P.legs[1], P.knee[1], false);
  } else {
    if (!ghost) { drawLeg(-tw * 0.22, 0, 0, false, P.lift[0]); drawLeg(tw * 0.22, 0, 0, false, P.lift[1]); }
    if (d.tails) tails(g, 0, hipY - 2, d, P, view);
  }
  torso(g, 0, hipY, tw, th, d, view, side ? lean : 0);
  if (d.quiver && side) { g.save(); g.translate(shX - 5, shY + 3); g.rotate(-0.5); g.beginPath(); g.rect(-2, -6, 4.5, 12); ink(g, '#6b4128', 0.8); for (const o of [-1, 0.6, 2]) bone(g, o, -6, o, -9, 0.7, '#e9d7a8'); g.restore(); }
  if (!side) drawArm(backArmX, armY, -P.arms[0] * 0.5 - 0.25, -P.elbow[0], false, false);
  head(g, headX, headY, d, view, P);
  const fr = drawArm(frontArmX, armY, side ? P.arms[1] : P.arms[1] * 0.5 + 0.25, side ? P.elbow[1] : P.elbow[1], false, true);
  if (d.offhand === 'fire' && P.glow) { g.save(); g.translate(fr.ex, fr.ey); weapon(g, d.fireKind || 'fire', P, P.glow); g.restore(); }
  g.restore();
}

// ---------------------------------------------------------------- poses
function pose(d, kind, f, n, view) {
  const P = { view, t: f * 0.13, lift: [0, 0], legs: [0, 0], knee: [0, 0], arms: [0.05, -0.1], elbow: [-0.35, -0.5], bob: 0, lean: 0, weapon: d.weapon, wpnAng: d.grip ?? -0.4, moving: kind === 'walk' && f > 0 };
  const hop = d.body === 'hop';
  if (kind === 'walk') {
    if (f === 0) { P.arms = [0.08, -0.08]; return hopArms(d, P); }
    const ph = ((f - 1) / 8) * TAU, s = Math.sin(ph);
    if (hop) { P.bob = -Math.abs(Math.sin(ph)) * 5; P.legs = [0.1, 0.1]; P.knee = [0.15, 0.15]; return hopArms(d, P); }
    P.legs = [-s * 0.55, s * 0.55]; P.knee = [Math.max(0, s) * 0.5, Math.max(0, -s) * 0.5];
    P.arms = [s * 0.5, -s * 0.55]; P.bob = -Math.abs(Math.cos(ph)) * 1.4; P.lean = 0.06;
    P.lift = [Math.max(0, s) * 0.32, Math.max(0, -s) * 0.32]; // front/back views: feet step up and down
    if (d.body === 'beast') { P.knee = [-0.35 + Math.max(0, s) * 0.4, -0.35 + Math.max(0, -s) * 0.4]; }
    return hopArms(d, P);
  }
  if (kind === 'slash' || kind === 'thrust') { // wind up overhead, cut down through the target, recover
    const seq = kind === 'slash' ? [-2.5, -2.8, -0.6, 1.5, 1.2, 0.4] : [-1.9, -2.4, -2.6, -0.4, 1.4, 1.6, 1.0, 0.3];
    P.arms[1] = seq[Math.min(f, seq.length - 1)]; P.elbow[1] = f < 2 ? -0.6 : 0.05;
    P.arms[0] = f < 2 ? 0.5 : -0.3; P.lean = f < 2 ? -0.12 : f < 4 ? 0.22 : 0.08;
    P.legs = [-0.3, 0.35]; P.knee = [0.2, 0.15]; P.wpnAng = d.grip ?? -0.4;
    if (kind === 'thrust') P.glow = f >= 2 && f <= 5 ? (d.glowCol || '255,180,90') : null;
    if (f === 3) P.smear = true;
    return P;
  }
  if (kind === 'cast') { // arms rise forward, fire gathers in the hands
    const k = Math.min(1, f / 4);
    P.arms = [1.2 + k * 0.6, 1.4 + k * 0.7]; P.elbow = [-0.2, -0.3]; P.lean = -0.05;
    P.glow = f >= 2 && f <= 5 ? 0.6 + 0.4 * Math.sin(f) : 0; P.wpnAng = 0;
    return P;
  }
  if (kind === 'shoot') { // raise the bow, draw the string, loose, follow through
    const raise = Math.min(1, f / 3), draw = f < 3 ? 0 : f < 9 ? (f - 3) / 6 : 0;
    P.arms = [0.3 + raise * 1.2, 0.2 + raise * 1.35]; P.elbow = [-0.3 - draw * 1.9, 0]; P.wpnAng = -Math.PI / 2 + 1.57 * 0;
    P.weapon = 'bow'; P.pull = draw * 8; P.arrow = f >= 3 && f < 9; P.lean = -0.04;
    P.restAbs = 0; // the bow stays upright in the hand
    return P;
  }
  if (kind === 'hurt') { // knocked over backwards
    const k = Math.min(1, f / 4);
    P.fall = k; P.arms = [-0.8 - k, -1.2 - k * 0.6]; P.legs = [0.2 * k, 0.5 * k]; P.lean = -0.2 * k;
    if (P.weapon && REST[P.weapon] !== undefined) P.restAbs = REST[P.weapon] - k * 1.2;
    return P;
  }
  return P;
}
// how each weapon is carried while walking: canvas angle, 0 = forward, -PI/2 = straight up
const REST = { sword: 1.15, staff: -1.35, bow: 0, club: -0.85, spiked: -0.85, big: -1.0, spear: -1.42, trident: -1.42, axe: -1.1, fan: 0.55 };
function hopArms(d, P) { if (P.weapon && REST[P.weapon] !== undefined) P.restAbs = REST[P.weapon]; if (d.body === 'hop') { P.arms = [Math.PI / 2 - 0.05, Math.PI / 2]; P.elbow = [0, 0]; } if (d.body === 'ghost') { P.arms = [0.25, 0.3]; P.elbow = [0.1, 0.1]; } return P; }

// draws one frame centred on (0,0) = feet
function frame(g, d, kind, f, n, view) {
  const P = pose(d, kind, f, n, view);
  g.save();
  if (P.fall) { g.translate(P.fall * 22, 0); g.rotate(-P.fall * 1.35); g.translate(0, -P.fall * 2); } // topple backwards, lying centred in the cell
  // soft contact shadow is drawn by the game; here only a faint aura for the special ones
  if (d.aura && d.bossAura) { // only bosses carry a glow in the art; regular foes stay tight so crowds draw fast
    const gr = g.createRadialGradient(0, -22, 2, 0, -22, 34); gr.addColorStop(0, `rgba(${d.aura},0.35)`); gr.addColorStop(1, `rgba(${d.aura},0)`);
    g.fillStyle = gr; circ(g, 0, -22, 34); g.fill();
  }
  figure(g, d, P);
  if (P.smear && (P.view === 'side')) { // a pale smear behind the swing
    g.globalCompositeOperation = 'lighter';
    g.strokeStyle = 'rgba(255,240,220,0.55)'; g.lineWidth = 3; g.lineCap = 'round';
    g.beginPath(); g.arc(2, -24, 20 * (d.size || 1), -1.6, 0.9); g.stroke();
    g.globalCompositeOperation = 'source-over';
  }
  g.restore();
}

// ---------------------------------------------------------------- character designs
const SKIN = '#f3cfae';
const DEFS = {
  hero_knight: { skin: SKIN, hair: '#2a1a14', torso: 'armor', torsoCol: '#a52a22', trim: '#d9a640', armCol: '#7d1f1a', hand: '#5d6069', legCol: '#3a2420', boot: '#241612',
    hat: 'helmet', hatCol: '#5d6069', plume: '#e0352c', cape: '#6e1414', weapon: 'sword', grip: -0.35 },
  hero_elf: { skin: '#f6d8bd', hair: '#1d1a24', hairStyle: 'ponytail', band: '#3f8f6a', torso: 'tunic', torsoCol: '#eef2ea', trim: '#3f8f6a', armCol: '#e3eadf', legCol: '#3a5e4c', boot: '#5a3e2a',
    weapon: 'bow', quiver: true, grip: 0 },
  hero_mage: { skin: '#f8dccb', hair: '#f4eef8', hairStyle: 'long', mask: 'fox', torso: 'robe', torsoCol: '#e46a9a', trim: '#ffd36b', armCol: '#e86f9f', legCol: '#c94e80', boot: '#f6f0ea',
    weapon: 'staff', grip: -0.2, tails: 3, tailCol: '#fff3ea', tailTip: '#ffd0e0', tailLen: 13, glowCol: '255,140,200' },
  imp: { size: 0.8, skin: '#e0523a', hair: '#2a1a14', horns: 1, eyeGlow: '#ffd23a', fangs: true, torso: 'bare', torsoCol: '#e0523a', legCol: '#d2482f', weapon: 'club', grip: -0.5 },
  caster: { size: 0.82, skin: '#f0802e', hair: '#3a1a0a', horns: 1, hornCol: '#ffe9b0', eyeGlow: '#fff27a', fangs: true, torso: 'bare', torsoCol: '#f0802e', legCol: '#d86a24', weapon: null, offhand: 'fire', aura: '255,140,40' },
  wolf: { body: 'beast', head: 'wolf', skin: '#7f8189', belly: '#c9c6bd', eyeGlow: '#ff4a3a', torso: 'fur', torsoCol: '#74767e', pants: '#5a3e2a', legCol: '#6a6c74', armCol: '#74767e', hand: '#6a6c74', claws: true, weapon: null, tails: 1, tailCol: '#6a6c74', tailLen: 11 },
  frostwolf: { body: 'beast', head: 'wolf', skin: '#a8d4ee', belly: '#f2fbff', eyeGlow: '#7ff4ff', torso: 'fur', torsoCol: '#9ccbe8', pants: '#3a5a8a', legCol: '#8fc0e0', armCol: '#9ccbe8', hand: '#8fc0e0', claws: true, weapon: null, tails: 1, tailCol: '#c8e8ff', tailLen: 12, aura: '150,220,255' },
  gangsi: { body: 'hop', skin: '#a9cdb0', eyes: '#1a2a1e', hat: 'qing', talisman: true, torso: 'longrobe', torsoCol: '#2e4f8a', trim: '#d9a640', armCol: '#2a4880', hand: '#a9cdb0', legCol: '#20304f', boot: '#111', weapon: null },
  skel: { body: 'skeleton', head: 'skull', bone: '#ece6d4', eyeGlow: '#ff5a3a', torso: 'ribs', torsoCol: '#ece6d4', rag: '#5a4636', hat: null, weapon: 'spear', grip: -0.2 },
  voidskel: { body: 'skeleton', head: 'skull', bone: '#c4b4ee', eyeGlow: '#c070ff', torso: 'ribs', torsoCol: '#c4b4ee', rag: '#3a1a5a', weapon: 'sword', grip: -0.35, aura: '120,60,220' },
  voidcaster: { body: 'skeleton', head: 'skull', bone: '#d0c4ee', eyeGlow: '#d890ff', hat: 'hood', hatCol: '#3a1a5a', torso: 'longrobe', torsoCol: '#3a1a5a', trim: '#9a6ad8', armCol: '#3a1a5a', weapon: null, offhand: 'fire', fireKind: 'void', aura: '130,60,230' },
  boar: { body: 'beast', head: 'boar', skin: '#7a5236', belly: '#c49a72', eyeGlow: '#ffb02a', mane: true, size: 1.05, torso: 'bulky', torsoCol: '#6b4a32', pants: '#3a2a1a', plates: '#8a6a3a', legCol: '#5a3a24', armCol: '#6b4a32', hand: '#5a3a24', torsoW: 17, weapon: 'club', grip: -0.5 },
  dok: { size: 1.02, skin: '#3e7fd0', hair: '#1a1430', horns: 2, eyeGlow: '#ffe14a', fangs: true, torso: 'bare', torsoCol: '#3e7fd0', legCol: '#3470bd', torsoW: 16, weapon: 'spiked', grip: -0.5 },
  liz: { head: 'snake', skin: '#4d9a5a', belly: '#e0dca0', eyeGlow: '#ffe14a', torso: 'fur', torsoCol: '#44884f', plates: '#8a6a3a', pants: '#3a2a1a', legCol: '#3f7f4a', armCol: '#44884f', hand: '#3f7f4a', weapon: 'trident', grip: -0.15, tails: 1, tailCol: '#44884f', tailLen: 13 },
  big: { size: 1.1, skin: '#8a2d2d', hair: '#20101a', horns: 2, hornSize: 1.3, eyeGlow: '#ffcf3a', fangs: true, torso: 'bare_big', torsoCol: '#8a2d2d', legCol: '#7a2626', torsoW: 18, torsoH: 15, armW: 5.4, legW: 6, weapon: 'big', grip: -0.55, headR: 10 },
  wraith: { body: 'ghost', skin: '#d4dbe8', hair: '#0d0a12', hairStyle: 'ghost', torso: 'ghost', torsoCol: '#ece9f2', armCol: '#e2dfea', hand: '#c4ccdc', weapon: null, aura: '150,110,255' },
  boss1: { bossAura: true, skin: '#ece6e2', hair: '#120e16', eyes: '#3a0c10', hat: 'gat', torso: 'longrobe', torsoCol: '#17141c', sash: '#9a1a24', armCol: '#1c1822', hand: '#ece6e2', legCol: '#111', boot: '#0a0a0c', weapon: 'fan', grip: -0.2, aura: '200,30,50' },
  boss2: { bossAura: true, body: 'beast', head: 'bull', ring: true, skin: '#4a3028', belly: '#8a6a58', eyeGlow: '#ff4a2a', mane: true, size: 1.05, torso: 'bulky', torsoCol: '#3e2a24', plates: '#b38a30', pants: '#5a1a14', legCol: '#3a2620', armCol: '#4a3028', hand: '#3a2620', torsoW: 18, armW: 5.4, legW: 6, weapon: 'axe', grip: -0.45, aura: '255,90,40' },
  boss3: { bossAura: true, body: 'ghost', skin: '#120a20', hair: '#05030a', hat: 'crown', eyeGlow: '#d070ff', torso: 'ghost', torsoCol: '#1e1236', armCol: '#24163e', hand: '#0e0818', claws: true, cape: '#2e0e4a', weapon: null, offhand: 'fire', fireKind: 'void', aura: '150,60,255', headR: 10 },
};

// which LPC rows each sheet needs and how they map onto baked rows
const VIEWS = ['back', 'side', 'front']; // up, left/right, down
const KIND_ROW = { cast: 0, thrust: 4, walk: 8, slash: 12, shoot: 16 };
const FRAMES = { walk: 9, slash: 6, cast: 7, thrust: 8, shoot: 13, hurt: 6 };
function rowsFor(id) {
  const k = ['walk', 'slash'];
  if (id === 'hero_elf') k.push('shoot');
  if (id === 'hero_mage') k.push('thrust');
  if (id === 'caster' || id === 'voidcaster' || id === 'boss3') k.push('cast');
  return k;
}
function bake(id, F = 120, res = 1.5) {
  const d = DEFS[id], kinds = rowsFor(id);
  const rows = kinds.length * 3 + 1, cols = Math.max(FRAMES.hurt, ...kinds.map((k) => FRAMES[k]));
  const c = document.createElement('canvas'); c.width = F * cols; c.height = F * rows;
  const g = c.getContext('2d');
  const map = {}, ncols = [];
  let r = 0;
  for (const kind of kinds) {
    VIEWS.forEach((view, vi) => {
      const n = FRAMES[kind];
      for (let f = 0; f < n; f++) {
        g.save(); g.translate(f * F + F / 2, r * F + F - 4 * res); g.scale(res, res);
        frame(g, d, kind, f, n, view);
        g.restore();
      }
      ncols[r] = n;
      const base = KIND_ROW[kind];
      if (vi === 0) map[base] = [r, false];
      if (vi === 1) { map[base + 1] = [r, true]; map[base + 3] = [r, false]; }
      if (vi === 2) map[base + 2] = [r, false];
      r++;
    });
  }
  for (let f = 0; f < FRAMES.hurt; f++) { g.save(); g.translate(f * F + F / 2, r * F + F - 4 * res); g.scale(res, res); frame(g, d, 'hurt', f, 6, 'side'); g.restore(); }
  ncols[r] = FRAMES.hurt; map[20] = [r, false];
  // trim every frame to the pixels it actually uses, so drawing skips the empty margins of the cell
  const px = g.getImageData(0, 0, c.width, c.height).data, rects = [];
  for (let rr = 0; rr < rows; rr++) {
    rects[rr] = [];
    for (let cc = 0; cc < ncols[rr]; cc++) {
      let x0 = F, y0 = F, x1 = -1, y1 = -1;
      for (let y = 0; y < F; y += 2) {
        const row = ((rr * F + y) * c.width + cc * F) * 4;
        for (let x = 0; x < F; x += 2) if (px[row + x * 4 + 3] > 8) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
      }
      rects[rr][cc] = x1 < 0 ? null : [Math.max(0, x0 - 2), Math.max(0, y0 - 2), Math.min(F, x1 + 3) - Math.max(0, x0 - 2), Math.min(F, y1 + 3) - Math.max(0, y0 - 2)];
    }
  }
  return { canvas: c, info: { F, res, foot: 4, walk: 8, map, cols: ncols, rects, smooth: true } };
}
return { bake, DEFS };
})();
