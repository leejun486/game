'use strict';
// 펫 (pets): procedurally drawn companions. 희귀 and below are cute, 영웅/전설 are fierce.
// A pet follows the player, attacks the player's target, emotes while idle and grants stats.
const Pets = (() => {
  const { esc, ico } = UI;

  // ---------------------------------------------------------------- tiny drawing helpers
  const ell = (g, x, y, rx, ry, col, rot = 0) => { g.fillStyle = col; g.beginPath(); g.ellipse(x, y, Math.max(0.1, rx), Math.max(0.1, ry), rot, 0, Math.PI * 2); g.fill(); };
  const poly = (g, pts, col) => { g.fillStyle = col; g.beginPath(); pts.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y))); g.closePath(); g.fill(); };
  const line = (g, x1, y1, x2, y2, col, w = 1) => { g.strokeStyle = col; g.lineWidth = w; g.lineCap = 'round'; g.beginPath(); g.moveTo(x1, y1); g.lineTo(x2, y2); g.stroke(); };
  const eye = (g, x, y, r = 1.6, shine = true) => { ell(g, x, y, r, r * 1.1, '#1b1420'); if (shine) ell(g, x - r * 0.35, y - r * 0.4, r * 0.4, r * 0.4, '#fff'); };
  const glow = (g, x, y, r, col, a = 0.5) => {
    const gr = g.createRadialGradient(x, y, 0, x, y, r);
    gr.addColorStop(0, hexA(col, a)); gr.addColorStop(1, hexA(col, 0));
    g.fillStyle = gr; g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
  };
  const hexA = (h, a) => Looks.hexA(h, a);

  // Each art fn draws facing right with the feet (or hover point) at (0,0). s = { t, moving, atk (0..1), emote }
  const ART = {
    slime(g, s) {
      const hop = s.moving ? Math.abs(Math.sin(s.t * 8)) * 6 : Math.abs(Math.sin(s.t * 3)) * 1.2;
      const sq = s.moving ? Math.sin(s.t * 16) * 0.14 : Math.sin(s.t * 3) * 0.07;
      const w = 12 * (1 + sq + s.atk * 0.2), h = 10 * (1 - sq), y = -hop;
      g.fillStyle = '#6fdc6a'; g.strokeStyle = '#2e8a3a'; g.lineWidth = 1;
      g.beginPath(); g.ellipse(0, y - 2, w, h, 0, Math.PI, 0); g.lineTo(w, y); g.quadraticCurveTo(0, y + 3, -w, y); g.closePath(); g.fill(); g.stroke();
      ell(g, -w * 0.45, y - h * 0.7, 3, 2, 'rgba(255,255,255,0.75)');
      eye(g, 2, y - 6); eye(g, 7, y - 6);
      ell(g, 0, y - 3, 1.8, 1, 'rgba(255,120,150,0.7)'); ell(g, 9, y - 3, 1.8, 1, 'rgba(255,120,150,0.7)');
      g.strokeStyle = '#1b1420'; g.beginPath(); g.arc(4.5, y - 4, 1.4, 0.2, Math.PI - 0.2); g.stroke();
    },
    chick(g, s) {
      const hop = s.moving ? Math.abs(Math.sin(s.t * 10)) * 3 : 0;
      const y = -hop, step = s.moving ? Math.sin(s.t * 20) * 2 : 0;
      line(g, -2, y - 3, -2 + step, 0, '#f08a1a', 1.2); line(g, 2, y - 3, 2 - step, 0, '#f08a1a', 1.2);
      ell(g, 0, y - 9, 8, 7, '#ffd84a'); ell(g, 4, y - 17, 6, 5.5, '#ffd84a');
      ell(g, -2, y - 9, 4, 2.6, '#f2bd2c', Math.sin(s.t * (s.moving ? 18 : 4)) * 0.5 - 0.3);
      poly(g, [[9, y - 18], [14, y - 16.5], [9, y - 15]], '#ff8a1a');
      eye(g, 6, y - 18, 1.3); ell(g, 5, y - 15.5, 1.5, 0.9, 'rgba(255,120,120,0.6)');
      line(g, 3, y - 22, 2, y - 25, '#f2bd2c', 1); line(g, 4.5, y - 22, 5.5, y - 25.5, '#f2bd2c', 1);
    },
    puppy(g, s) {
      const b = s.moving ? Math.sin(s.t * 14) : 0;
      for (const [x, ph] of [[-6, 0], [-3, 1], [4, 1], [7, 0]]) g.fillStyle = '#9a6232', g.fillRect(x - 1.2, -6 + (ph ? b : -b) * 1.2, 2.6, 6 - (ph ? b : -b) * 1.2);
      g.save(); g.translate(-10, -12); g.rotate(Math.sin(s.t * (s.moving ? 16 : 10)) * 0.6 - 0.4); ell(g, -3, 0, 4, 2, '#c8874a'); g.restore();
      ell(g, 0, -9, 10, 6.5, '#c8874a'); ell(g, 1, -7, 6, 3.2, '#f3dcb8');
      ell(g, 9, -16 - s.atk * 2, 7, 6.5, '#c8874a');
      ell(g, 5, -17 - s.atk * 2, 3, 5.5, '#7b4a22', 0.3 + Math.sin(s.t * 5) * 0.1);
      ell(g, 14, -13.5 - s.atk * 2, 4, 3, '#f3dcb8'); ell(g, 17, -14.5 - s.atk * 2, 1.4, 1.2, '#1b1420');
      eye(g, 11, -18 - s.atk * 2, 1.5);
      if (!s.moving && s.atk === 0) ell(g, 15, -10.5, 1.3, 2, '#ff7a90');
    },
    bunny(g, s) {
      const hop = s.moving ? Math.abs(Math.sin(s.t * 9)) * 7 : Math.abs(Math.sin(s.t * 2)) * 0.8;
      const y = -hop;
      ell(g, -9, y - 9, 3, 3, '#ffffff');
      ell(g, 0, y - 7, 9, 6.5, '#f7f3f0'); ell(g, -3, y - 2, 4, 2, '#ece5e0');
      ell(g, 7, y - 13, 6, 5.5, '#f7f3f0');
      const ew = Math.sin(s.t * 3) * 0.1;
      for (const [x, r] of [[4.5, -0.25 + ew], [8, 0.15 - ew]]) { ell(g, x, y - 22, 2.4, 7.5, '#f7f3f0', r); ell(g, x, y - 22, 1.1, 5.5, '#ffb3c6', r); }
      eye(g, 9.5, y - 14, 1.5); ell(g, 12.5, y - 11.5, 1.1, 0.9, '#ff8fab'); ell(g, 8, y - 10.5, 1.6, 0.9, 'rgba(255,140,170,0.55)');
    },
    kitty(g, s) {
      const y = -6 - Math.sin(s.t * 3) * 2.5; // floats
      const f = Math.sin(s.t * 14) * 0.7;
      ell(g, -2, y - 13, 5, 2.4, 'rgba(255,255,255,0.9)', -0.6 - f); ell(g, 1, y - 13, 5, 2.4, '#ffffff', -0.9 + f);
      g.strokeStyle = '#c99be8'; g.lineWidth = 2.2; g.lineCap = 'round';
      g.beginPath(); g.moveTo(-8, y - 8); g.quadraticCurveTo(-15, y - 10 + Math.sin(s.t * 3) * 3, -12, y - 17); g.stroke();
      ell(g, 0, y - 7, 8.5, 5.5, '#dcbaf9');
      ell(g, 8, y - 13, 6.5, 6, '#dcbaf9');
      poly(g, [[3.5, y - 16], [4.5, y - 22], [7.5, y - 18]], '#dcbaf9'); poly(g, [[9, y - 18.5], [12.5, y - 22], [12.5, y - 16]], '#dcbaf9');
      poly(g, [[4.6, y - 17], [5, y - 20], [6.6, y - 18]], '#ffb3d6');
      eye(g, 9.5, y - 14, 1.8); ell(g, 13, y - 11.5, 0.9, 0.7, '#ff7aa8');
      line(g, 12, y - 11, 17, y - 12, 'rgba(90,60,110,0.7)', 0.6); line(g, 12, y - 10.5, 17, y - 9.5, 'rgba(90,60,110,0.7)', 0.6);
      glow(g, 0, y - 10, 16, '#ffb3f0', 0.25);
    },
    fox(g, s) {
      const b = s.moving ? Math.sin(s.t * 14) : 0;
      for (let i = 0; i < 3; i++) {
        g.save(); g.translate(-9, -11); g.rotate(-0.9 + i * 0.45 + Math.sin(s.t * 3 + i) * 0.18);
        ell(g, -8, 0, 9, 3.6, '#f08a3c'); ell(g, -15, 0, 3, 2.6, '#fff4e6'); g.restore();
      }
      for (const [x, ph] of [[-5, 0], [-2, 1], [4, 1], [7, 0]]) g.fillStyle = '#3a2418', g.fillRect(x - 1, -6 + (ph ? b : -b), 2.2, 6 - (ph ? b : -b));
      ell(g, 0, -9, 10, 5.5, '#f08a3c'); ell(g, 4, -7, 5, 3, '#fff4e6');
      ell(g, 10, -15 - s.atk * 2, 6, 5, '#f08a3c');
      poly(g, [[13, -17 - s.atk * 2], [20, -13.5 - s.atk * 2], [13, -12 - s.atk * 2]], '#f08a3c'); ell(g, 19.5, -14 - s.atk * 2, 1.2, 1, '#1b1420');
      poly(g, [[6, -18], [7, -25], [10, -19.5]], '#f08a3c'); poly(g, [[10.5, -19.5], [13, -25], [14, -18]], '#f08a3c');
      poly(g, [[7, -21.5], [7.4, -24.2], [8.6, -21.6]], '#3a2418'); poly(g, [[12, -21.8], [12.9, -24.4], [13.2, -21.5]], '#3a2418');
      eye(g, 12, -16 - s.atk * 2, 1.3);
    },
    frostwolf(g, s) {
      glow(g, 0, -22, 42, '#7fd4ff', 0.28 + s.atk * 0.3);
      const b = s.moving ? Math.sin(s.t * 12) : 0;
      g.save(); g.translate(-20, -24); g.rotate(-0.5 + Math.sin(s.t * 4) * 0.15); ell(g, -9, 0, 12, 5, '#b8dcff'); ell(g, -16, 0, 5, 3.5, '#eef8ff'); g.restore();
      for (const [x, ph] of [[-13, 0], [-8, 1], [9, 1], [14, 0]]) {
        const sw = (ph ? b : -b) * 3;
        line(g, x, -14, x + sw, -2, ph ? '#8fb8e8' : '#a8cdf2', 3.2); ell(g, x + sw + 1, -1.5, 2.6, 1.6, '#dff0ff');
      }
      ell(g, 0, -20, 19, 9.5, '#cfe8ff'); ell(g, 2, -15, 13, 4.5, '#eef8ff');
      for (let i = 0; i < 5; i++) poly(g, [[-12 + i * 5, -27], [-10 + i * 5, -35 - (i % 2) * 3], [-7 + i * 5, -27]], '#a8d0ff');
      const hy = -30 - s.atk * 4;
      ell(g, 19, hy, 9, 7, '#cfe8ff');
      poly(g, [[24, hy - 3], [36, hy + 1], [36, hy + 4], [24, hy + 5]], '#cfe8ff');
      if (s.atk > 0) poly(g, [[26, hy + 4], [36, hy + 4], [30, hy + 9]], '#5c7fae');
      ell(g, 36, hy + 1.5, 1.6, 1.4, '#243a5a');
      poly(g, [[13, hy - 4], [15, hy - 14], [19, hy - 5]], '#cfe8ff'); poly(g, [[19, hy - 5], [22, hy - 14], [24, hy - 3]], '#cfe8ff');
      glow(g, 23, hy - 1, 6, '#6ff2ff', 0.9); ell(g, 23, hy - 1, 1.6, 1.3, '#e8ffff');
    },
    raven(g, s) {
      const y = -34 - Math.sin(s.t * 2.5) * 4, f = Math.sin(s.t * (s.atk ? 20 : 9));
      glow(g, 0, y, 34, '#9b5cff', 0.3 + s.atk * 0.3);
      const wing = (dir, col) => {
        g.save(); g.translate(-2, y - 3); g.rotate(dir * (0.2 + f * 0.8));
        poly(g, [[0, 0], [-10, -6], [-22, -14], [-30, -12], [-22, -6], [-26, -2], [-14, 0]], col); g.restore();
      };
      wing(1, '#130d18');
      poly(g, [[-9, y + 1], [-24, y - 2], [-22, y + 4], [-25, y + 8], [-9, y + 4]], '#1a1320');
      ell(g, 0, y, 11, 6.5, '#1f1628'); ell(g, 10, y - 4, 6, 5.5, '#1f1628');
      poly(g, [[15, y - 5], [23, y - 2.5], [15, y - 1]], '#4a4452');
      glow(g, 12, y - 5, 5, '#ff3050', 0.9); ell(g, 12, y - 5, 1.3, 1.2, '#ffd0d8');
      wing(-1, '#2a1f38');
    },
    phoenix(g, s) {
      const y = -38 - Math.sin(s.t * 2.2) * 5, f = Math.sin(s.t * (s.atk ? 18 : 7));
      glow(g, 0, y, 46, '#ff7a1a', 0.35 + s.atk * 0.3);
      g.save(); g.globalCompositeOperation = 'lighter';
      for (let i = 0; i < 3; i++) {
        const gr = g.createLinearGradient(-8, y, -48, y);
        gr.addColorStop(0, 'rgba(255,220,90,0.95)'); gr.addColorStop(1, 'rgba(255,60,0,0)');
        g.strokeStyle = gr; g.lineWidth = 5 - i * 1.3;
        g.beginPath(); g.moveTo(-8, y + 1); g.quadraticCurveTo(-26, y + 6 + i * 4 + Math.sin(s.t * 4 + i) * 5, -48 - i * 4, y + 2 + i * 6 + Math.sin(s.t * 3 + i) * 6); g.stroke();
      }
      g.restore();
      const wing = (dir, a) => {
        g.save(); g.translate(-1, y - 2); g.rotate(dir * (0.25 + f * 0.85));
        const gr = g.createLinearGradient(0, 0, -30, -18); gr.addColorStop(0, '#ff9a2a'); gr.addColorStop(1, `rgba(255,230,120,${a})`);
        poly(g, [[0, 0], [-12, -9], [-26, -20], [-34, -16], [-28, -10], [-33, -6], [-22, -3], [-26, 1], [-12, 1]], gr); g.restore();
      };
      wing(1, 0.6);
      ell(g, 0, y, 10, 6.5, '#ff8a2a'); ell(g, 2, y + 2, 6, 3, '#ffd24a');
      ell(g, 10, y - 5, 5.5, 5, '#ff9a2a');
      for (let i = 0; i < 3; i++) poly(g, [[6 + i * 2, y - 8], [3 + i * 3, y - 18 - i * 2 + Math.sin(s.t * 8 + i) * 2], [9 + i * 2, y - 9]], i === 1 ? '#ffe070' : '#ff6a1a');
      poly(g, [[14, y - 6], [20, y - 4], [14, y - 2.5]], '#ffd24a');
      glow(g, 12, y - 6, 4, '#fff6c0', 1); ell(g, 12, y - 6, 1.2, 1.1, '#fff');
      wing(-1, 0.9);
    },
    dragon(g, s) {
      const y = -40 - Math.sin(s.t * 2) * 4, f = Math.sin(s.t * (s.atk ? 12 : 5));
      glow(g, 0, y, 50, '#ff3a1a', 0.18 + s.atk * 0.35);
      const wing = (dir, mem) => {
        g.save(); g.translate(-3, y - 6); g.rotate(dir * (0.1 + f * 0.7));
        poly(g, [[0, 0], [-6, -22], [-18, -34], [-40, -30], [-30, -20], [-34, -12], [-22, -8], [-24, -1], [-10, 2]], mem);
        line(g, 0, 0, -18, -34, '#1a1216', 1.6); line(g, -18, -34, -30, -20, '#1a1216', 1); line(g, -18, -34, -22, -8, '#1a1216', 1); line(g, -18, -34, -40, -30, '#1a1216', 1.2);
        g.restore();
      };
      wing(1, 'rgba(70,30,45,0.95)');
      g.strokeStyle = '#2a2330'; g.lineCap = 'round';
      for (let i = 0; i < 4; i++) { g.lineWidth = 7 - i * 1.6; g.beginPath(); g.moveTo(-10 - i * 8, y + 2 + Math.sin(s.t * 3 - i) * i * 1.5); g.lineTo(-18 - i * 8, y + 4 + Math.sin(s.t * 3 - i - 1) * (i + 1) * 1.5); g.stroke(); }
      poly(g, [[-46, y + 4 + Math.sin(s.t * 3 - 4) * 6], [-54, y - 1 + Math.sin(s.t * 3 - 4) * 6], [-52, y + 9 + Math.sin(s.t * 3 - 4) * 6]], '#8a2020');
      ell(g, 0, y, 15, 8.5, '#2a2330'); ell(g, 2, y + 3, 10, 4, '#6b3a2a');
      g.lineWidth = 8; g.beginPath(); g.moveTo(10, y - 3); g.quadraticCurveTo(16, y - 12, 22, y - 15 - s.atk * 2); g.stroke();
      const hy = y - 16 - s.atk * 2;
      poly(g, [[18, hy - 5], [30, hy - 3], [38, hy + 1], [36, hy + 4], [26, hy + 5], [18, hy + 4]], '#2f2736');
      if (s.atk > 0) poly(g, [[26, hy + 5], [37, hy + 4], [30, hy + 10]], '#1a1216');
      line(g, 20, hy - 4, 12, hy - 12, '#c9b89a', 2); line(g, 23, hy - 4, 17, hy - 13, '#c9b89a', 1.6);
      for (let i = 0; i < 4; i++) poly(g, [[-8 + i * 5, y - 7], [-6 + i * 5, y - 12], [-3 + i * 5, y - 7]], '#8a2020');
      glow(g, 27, hy - 1, 6, '#ff3a1a', 1); ell(g, 27, hy - 1, 1.6, 1.2, '#ffe0a0');
      wing(-1, 'rgba(95,40,55,0.97)');
    },
  };

  // ---------------------------------------------------------------- data
  const LIST = [
    { id: 'p_slime', name: '말랑 슬라임', grade: 0, art: 'slime', ranged: false, el: 'nature', size: 26, voice: ['말랑~', '뿌잉!'] },
    { id: 'p_chick', name: '삐약 병아리', grade: 0, art: 'chick', ranged: false, el: 'holy', size: 26, voice: ['삐약!', '삐약삐약~'] },
    { id: 'p_puppy', name: '복실 강아지', grade: 1, art: 'puppy', ranged: false, el: 'none', size: 30, voice: ['멍멍!', '왈!'] },
    { id: 'p_bunny', name: '솜사탕 토끼', grade: 1, art: 'bunny', ranged: false, el: 'holy', size: 30, voice: ['깡총!', '♪'] },
    { id: 'p_kitty', name: '요정 고양이 루루', grade: 2, art: 'kitty', ranged: true, el: 'shadow', size: 32, voice: ['냥~', '냐앙!'] },
    { id: 'p_fox', name: '세꼬리 여우 호야', grade: 2, art: 'fox', ranged: false, el: 'fire', size: 32, voice: ['캥!', '호야~'] },
    { id: 'p_frostwolf', name: '서리 늑대 펜리르', grade: 3, art: 'frostwolf', ranged: false, el: 'ice', size: 64, voice: ['아우우—!'] },
    { id: 'p_raven', name: '그림자 까마귀 모르가', grade: 3, art: 'raven', ranged: true, el: 'shadow', size: 60, fly: true, voice: ['까악—!'] },
    { id: 'p_phoenix', name: '불사조 이그니스', grade: 4, art: 'phoenix', ranged: true, el: 'fire', size: 72, fly: true, voice: ['끼이이—!'] },
    { id: 'p_dragon', name: '흑룡 칼리고', grade: 4, art: 'dragon', ranged: true, el: 'fire', size: 80, fly: true, voice: ['크아아앙!'] },
  ];
  const BY_ID = {};
  for (const p of LIST) BY_ID[p.id] = p;
  const DMG = [0.3, 0.4, 0.55, 0.9, 1.4], CD = [2.2, 2.0, 1.8, 1.5, 1.3];
  const EQUIP_BONUS = [{ expPct: 3 }, { expPct: 5, hp: 50 }, { expPct: 8, atk: 3 }, { expPct: 8, atk: 8, crit: 2 }, { expPct: 12, atk: 15, crit: 4, atkSpd: 5 }];
  const OWN_BONUS = [{ def: 1 }, { def: 2 }, { def: 3, hp: 20 }, { def: 5, hp: 50 }, { def: 8, hp: 100 }];
  const PRICE = { one: 200, eleven: 2000 };
  const CUTE = (d) => d.grade <= 2;

  function migrate(p) {
    p.s.pets = p.s.pets || {};
    if (!Object.keys(p.s.pets).length) { p.s.pets.p_slime = 1; p.s.pet = 'p_slime'; }
    if (p.s.pet && !BY_ID[p.s.pet]) p.s.pet = null;
  }
  function bonuses(p) {
    const out = [];
    if (p.s.pet) out.push(EQUIP_BONUS[BY_ID[p.s.pet].grade]);
    for (const id in p.s.pets || {}) out.push(OWN_BONUS[BY_ID[id].grade]);
    return out;
  }

  // ---------------------------------------------------------------- drawing into a pixel buffer
  const buf = document.createElement('canvas'); buf.width = 160; buf.height = 128;
  const bg = buf.getContext('2d');
  // draws the pet with its feet/hover anchor at screen (x, y); s = on-screen pixels per art unit
  function drawPet(ctx, def, x, y, face, st, scale = 2) {
    bg.setTransform(1, 0, 0, 1, 0, 0);
    bg.clearRect(0, 0, buf.width, buf.height);
    bg.translate(80, 110);
    if (face < 0) bg.scale(-1, 1);
    ART[def.art](bg, st);
    ctx.save();
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(buf, Math.round(x - 80 * scale), Math.round(y - 110 * scale), 160 * scale, 128 * scale);
    ctx.restore();
  }

  // ---------------------------------------------------------------- the pet entity
  class Pet {
    constructor(owner, id) {
      this.owner = owner; this.def = BY_ID[id];
      this.x = owner.x - 40; this.y = owner.y + 10; this.face = 1;
      this.t = Math.random() * 10; this.moving = false; this.atk = 0; this.atkCd = 1;
      this.state = 'follow'; this.emoteT = U.rand(4, 7); this.emote = null; this.bubble = null; this.idleFor = 0;
    }
    get headY() { return this.y - (this.def.fly ? 60 : this.def.size * 0.9); }
    update(dt, game) {
      const p = this.owner, d = this.def;
      this.t += dt;
      if (this.atk > 0) this.atk = Math.max(0, this.atk - dt * 3);
      if (this.bubble) { this.bubble.t -= dt; if (this.bubble.t <= 0) this.bubble = null; }
      if (this.emote) { this.emote.t += dt; if (this.emote.t > this.emote.dur) this.emote = null; }
      this.atkCd -= dt;
      const tgt = p.target && !p.target.dead && !p.dead ? p.target : null;
      // follow point: behind the player's shoulder
      const side = p.dir === 1 ? 1 : p.dir === 3 ? -1 : (this.face > 0 ? -1 : 1);
      let gx = p.x + side * 42, gy = p.y + 14, speed = 190 * (1 + p.stats.moveSpd / 100) * (p.sprintT > 0 ? 1.45 : 1);
      if (tgt && U.dist(p, tgt) < 700) {
        const reach = d.ranged ? 170 : 34 + tgt.radius;
        const dd = U.dist(this, tgt);
        if (dd > reach) { gx = tgt.x - (tgt.x > this.x ? reach - 6 : -(reach - 6)); gy = tgt.y + 6; speed *= 1.25; }
        else { gx = this.x; gy = this.y; this.face = tgt.x >= this.x ? 1 : -1; if (this.atkCd <= 0) this.attack(tgt, game); }
      }
      const dx = gx - this.x, dy = gy - this.y, dist = Math.hypot(dx, dy);
      if (dist > 1200) { this.x = p.x - 40; this.y = p.y + 10; return; } // teleported: catch up instantly
      if (dist > 6) {
        const st = Math.min(dist, speed * (dist > 220 ? 1.6 : 1) * dt);
        this.x += (dx / dist) * st; this.y += (dy / dist) * st;
        if (Math.abs(dx) > 2) this.face = dx > 0 ? 1 : -1;
        this.moving = true;
      } else this.moving = false;
      // idle emotes
      const idle = !tgt && !p.moving && !this.moving && !p.dead;
      this.idleFor = idle ? this.idleFor + dt : 0;
      if (idle) {
        this.emoteT -= dt;
        if (this.emoteT <= 0) { this.emoteT = U.rand(5, 9); this.doEmote(game); }
      }
    }
    attack(tgt, game) {
      const d = this.def;
      this.atkCd = CD[d.grade]; this.atk = 1;
      const el = Looks.ELEM[d.el].color;
      const mult = DMG[d.grade];
      if (d.art === 'dragon') {
        game.fx.push(Combat.makeFx('breath', this.x + this.face * 60, this.y - 56, { to: [tgt.x, tgt.y - 20], color: '#ff6a1a', dur: 0.5 }));
        setTimeout(() => { if (!tgt.dead) { Combat.petHit(game, tgt, mult, '#ffb36a'); for (const m of game.monsters) if (m !== tgt && !m.dead && U.dist(m, tgt) < 90) Combat.petHit(game, m, mult * 0.5, '#ffb36a'); VFX.fireBurst(tgt.x, tgt.y, 90, 0.9); } }, 260);
        U.sfx.boom();
      } else if (d.ranged) {
        const sx = this.x + this.face * (d.fly ? 20 : 10), sy = this.y - (d.fly ? 44 : 18);
        game.fx.push(Combat.makeFx('petbolt', sx, sy, { to: tgt, color: el, big: d.grade >= 3, dur: 0.35 }));
        setTimeout(() => { if (!tgt.dead) { Combat.petHit(game, tgt, mult, '#ffd6f0'); if (d.el === 'fire') VFX.fireBurst(tgt.x, tgt.y, d.grade >= 3 ? 60 : 36, d.grade >= 3 ? 0.6 : 0.35); else if (d.el === 'ice') VFX.iceBurst(tgt.x, tgt.y, 40, 0.5); else game.fx.push(Combat.makeFx('burst', tgt.x, tgt.y - 26, { color: el, r: d.grade >= 3 ? 70 : 40 })); } }, 330);
      } else {
        // melee lunge
        this.x += this.face * 10;
        Combat.petHit(game, tgt, mult, CUTE(d) ? '#ffd6f0' : '#c9f0ff');
        if (d.art === 'frostwolf') { VFX.iceBurst(tgt.x, tgt.y, 46, 0.7); tgt.chillT = Math.max(tgt.chillT || 0, 1.5); } else if (d.art === 'fox') VFX.fireBurst(tgt.x, tgt.y, 26, 0.3); else game.fx.push(Combat.makeFx('spark', tgt.x, tgt.y - 20, { color: el }));
        if (d.grade >= 3) game.shake = Math.max(game.shake, 3);
      }
      if (CUTE(d) && Math.random() < 0.25) this.say(U.pick(d.voice));
    }
    say(text) { this.bubble = { text, t: 1.6 }; }
    doEmote(game) {
      const d = this.def;
      if (CUTE(d)) {
        const kind = this.idleFor > 20 ? 'sleep' : U.pick(['hearts', 'notes', 'spin', 'hop']);
        this.emote = { kind, t: 0, dur: kind === 'sleep' ? 5 : 1.6 };
        if (kind === 'hearts' || kind === 'hop') this.say(U.pick(d.voice));
      } else {
        this.emote = { kind: d.fly ? 'circle' : 'howl', t: 0, dur: d.fly ? 2.6 : 1.4 };
        if (Math.random() < 0.6) this.say(U.pick(d.voice));
        const el = Looks.ELEM[d.el].color;
        game.fx.push(Combat.makeFx('rune', this.x, this.y, { color: el, dur: 1.2 }));
        if (d.art === 'dragon' || d.art === 'phoenix') game.fx.push(Combat.makeFx('breath', this.x + this.face * 50, this.y - 60, { to: [this.x + this.face * 140, this.y - 150], color: d.art === 'dragon' ? '#ff6a1a' : '#ffd24a', dur: 0.6 }));
      }
    }
    draw(ctx, cam) {
      const d = this.def;
      let x = this.x - cam.x, y = this.y - cam.y, face = this.face;
      const e = this.emote;
      // ground shadow
      ctx.fillStyle = 'rgba(0,0,0,0.28)';
      ctx.beginPath(); ctx.ellipse(x, y, d.size * (d.fly ? 0.35 : 0.45), d.size * 0.13, 0, 0, Math.PI * 2); ctx.fill();
      if (e && e.kind === 'circle') { const a = (e.t / e.dur) * Math.PI * 2; x += Math.cos(a) * 60; y += Math.sin(a) * 26 - 10; face = Math.cos(a + Math.PI / 2) > 0 ? 1 : -1; }
      if (e && e.kind === 'hop') y -= Math.abs(Math.sin(e.t * 9)) * 10;
      const st = { t: this.t, moving: this.moving || (e && e.kind === 'circle'), atk: this.atk || (e && e.kind === 'howl' ? Math.sin(Math.min(1, e.t / e.dur) * Math.PI) : 0) };
      if (e && e.kind === 'spin') face = Math.sin(e.t * 18) > 0 ? 1 : -1;
      if (e && e.kind === 'sleep') { st.moving = false; st.t = 0; }
      drawPet(ctx, d, x, y, face, st, 2);
      // emote overlays
      if (e) {
        const k = e.t / e.dur, hy = y - (d.fly ? 70 : d.size * 0.9);
        ctx.save(); ctx.font = 'bold 13px sans-serif'; ctx.textAlign = 'center';
        if (e.kind === 'hearts') for (let i = 0; i < 3; i++) { ctx.globalAlpha = 1 - k; ctx.fillStyle = '#ff6f9a'; ctx.fillText('♥', x - 10 + i * 10, hy - k * 26 - i * 4); }
        if (e.kind === 'notes') for (let i = 0; i < 2; i++) { ctx.globalAlpha = 1 - k; ctx.fillStyle = '#9fd0ff'; ctx.fillText(i ? '♬' : '♪', x - 8 + i * 16 + Math.sin(e.t * 6 + i) * 4, hy - k * 24); }
        if (e.kind === 'sleep') { ctx.fillStyle = '#d8e8ff'; ctx.globalAlpha = 0.9; ctx.fillText('z', x + 10, hy - ((e.t * 12) % 16)); ctx.fillText('Z', x + 18, hy - 8 - ((e.t * 12 + 8) % 16)); }
        ctx.restore();
      }
    }
    drawOverlay(ctx, cam) {
      const d = this.def, x = this.x - cam.x, y = this.headY - cam.y;
      drawLabel(ctx, d.name, x, y - 2, D.GRADES[d.grade].color, '11px sans-serif');
      if (this.bubble) drawBubble(ctx, this.bubble.text, x, y - 16);
    }
  }

  function spawn(game) {
    const p = game.player;
    game.pet = p && p.s.pet ? new Pet(p, p.s.pet) : null;
  }

  // ---------------------------------------------------------------- UI
  let sel = null, raf = 0, filter = -1;
  function thumb(cv, id, t = 0) {
    const g = cv.getContext('2d'); g.clearRect(0, 0, cv.width, cv.height);
    const d = BY_ID[id];
    const sc = Math.min((cv.height * 0.55) / (d.fly ? d.size * 0.95 : d.size), cv.width / (d.size * 1.45));
    drawPet(g, d, cv.width / 2 + (d.fly ? 6 * sc : 0), cv.height * (d.fly ? 0.94 : 0.82), 1, { t, moving: false, atk: 0 }, sc);
  }
  function open() {
    const game = Game, p = game.player;
    const layer = document.getElementById('panel-layer');
    layer.innerHTML = '';
    const el = document.createElement('div');
    el.className = 'panel full';
    layer.appendChild(el);
    if (!sel) sel = p.s.pet || LIST[0].id;
    const render = () => {
      if (el.querySelector('.summon-stage')) return; // a reward popping mid-summon must not wipe the reveal
      const d = BY_ID[sel], owned = p.s.pets[sel] || 0, eq = p.s.pet === sel;
      const list = LIST.filter((x) => filter < 0 || x.grade === filter).sort((a, b) => (!!p.s.pets[b.id] - !!p.s.pets[a.id]) || b.grade - a.grade);
      const bon = (o) => Object.entries(o).map(([k, v]) => `${D.STAT_NAMES[k][0]} <span>+${v}${D.STAT_NAMES[k][1]}</span>`).join(', ');
      el.innerHTML = `<div class="tr-wrap pet-wrap">
        <div class="tr-side">
          <button data-go="transcend">${ico('transcend')}초월</button>
          <button data-go="weaponlook">${ico('sword')}무기 외형</button>
          <button class="on">${ico('pet')}펫</button>
          <button data-go="collection">${ico('collection')}결속</button>
        </div>
        <div class="tr-main">
          <div class="tr-head"><h3>펫</h3>
            <div style="display:flex;gap:18px;align-items:center"><span class="cur">${ico('diamond', 'dia')}<b>${U.fmt(p.s.dia)}</b></span>
            <button class="dark-btn" data-pull="1">${ico('diamond', 'dia')} ${PRICE.one} 소환</button><button class="gold-btn" data-pull="11">${ico('diamond', 'dia')} ${U.fmt(PRICE.eleven)} 11회 소환</button><button class="dark-btn" data-go="summon" data-arg="pet:synth">합성</button>
            <button class="close-x" data-close style="font-size:30px">⇥</button></div></div>
          <div class="tr-content">
            <div class="tr-info">
              <div class="grade ${D.GRADES[d.grade].cls}">${D.GRADES[d.grade].name} · ${CUTE(d) ? '귀여운 펫' : '전설의 수호수'}</div>
              <div class="cname" style="color:${D.GRADES[d.grade].color}">${owned ? '' : '🔒 '}${esc(d.name)}</div>
              <div class="stats">
                <div>속성 <span style="color:${Looks.ELEM[d.el].color}">${Looks.ELEM[d.el].name}</span> · ${d.fly ? '비행' : '지상'} · ${d.ranged ? '원거리' : '근접'}</div>
                <div>공격: 캐릭터 공격력의 <span>${Math.round(DMG[d.grade] * 100)}%</span> (${CD[d.grade]}초마다)${d.art === 'dragon' ? ' · 광역 화염 브레스' : ''}</div>
                <div>동행 효과: ${bon(EQUIP_BONUS[d.grade])}</div>
                <div>보유 효과: ${bon(OWN_BONUS[d.grade])}</div>
              </div>
              <div class="stats" style="font-size:12.5px;color:#a39a88">보유 ${owned}마리 · 수집 ${LIST.filter((x) => p.s.pets[x.id]).length}/${LIST.length}</div>
              <p style="font-size:12px;color:#888;line-height:1.6">펫은 캐릭터를 따라다니며 대상을 함께 공격합니다. 가만히 있으면 ${CUTE(d) ? '애교를 부립니다 ♥' : '위엄을 뽐냅니다'}.</p>
            </div>
            <div class="tr-center"><canvas id="pet-cv" width="420" height="440"></canvas></div>
            <div class="tr-right">
              <div class="grade-filter">${[-1, 4, 3, 2, 1, 0].map((g) => `<button data-filter="${g}" class="${filter === g ? 'on' : ''}" style="color:${g < 0 ? '#e9d7a8' : D.GRADES[g].color};border-color:${g < 0 ? '' : D.GRADES[g].color}">${g < 0 ? 'All' : D.GRADES[g].name[0]}</button>`).join('')}</div>
              <div class="card-grid">${list.map((x) => `<div class="card gr${x.grade} ${x.id === sel ? 'sel' : ''} ${p.s.pets[x.id] ? '' : 'locked'}" data-pet="${x.id}"><canvas width="96" height="128"></canvas>
                ${p.s.pets[x.id] ? `<span class="cnt">${p.s.pets[x.id]}</span>` : ''}${p.s.pet === x.id ? '<span class="eqb">E</span>' : ''}<div class="nm ${D.GRADES[x.grade].cls}">${esc(x.name)}</div></div>`).join('')}</div>
              <div class="tr-actions">${eq ? '<button class="red-btn" data-unequip>돌려보내기</button>' : `<button class="gold-btn" data-equip ${owned ? '' : 'disabled'}>함께하기</button>`}</div>
            </div>
          </div>
        </div></div>`;
      el.querySelectorAll('.tr-head button img').forEach((i) => { i.style.width = '16px'; i.style.verticalAlign = '-3px'; });
      el.querySelectorAll('[data-pet] canvas').forEach((cv) => thumb(cv, cv.parentElement.dataset.pet));
      preview(el.querySelector('#pet-cv'));
    };
    el.onclick = (e) => {
      const t = e.target;
      const c = t.closest('[data-pet]'); if (c) { sel = c.dataset.pet; U.sfx.ui(); return render(); }
      const f = t.closest('[data-filter]'); if (f) { filter = +f.dataset.filter; return render(); }
      if (t.closest('[data-close]')) { cancelAnimationFrame(raf); UI.close(); return; }
      const go = t.closest('[data-go]'); if (go) { cancelAnimationFrame(raf); return UI.open(go.dataset.go, go.dataset.arg); }
      if (t.closest('[data-equip]')) {
        p.s.pet = sel; p.recalc(); spawn(game); U.sfx.success();
        game.pet.say(U.pick(BY_ID[sel].voice));
        UI.toast(`${BY_ID[sel].name}와(과) 함께합니다!`, D.GRADES[BY_ID[sel].grade].color); UI.refreshHud(); return render();
      }
      if (t.closest('[data-unequip]')) { p.s.pet = null; p.recalc(); spawn(game); UI.refreshHud(); return render(); }
      const pull = t.closest('[data-pull]'); if (pull) Gacha.run('pet', +pull.dataset.pull, el, render);
    };
    render();
    return { name: 'pet', rerender: render, onClose: () => cancelAnimationFrame(raf) };
  }
  function preview(canvas) {
    cancelAnimationFrame(raf);
    const g = canvas.getContext('2d');
    const t0 = performance.now();
    const loop = () => {
      if (!canvas.isConnected) return;
      const t = (performance.now() - t0) / 1000, d = BY_ID[sel];
      const W = canvas.width, H = canvas.height;
      g.clearRect(0, 0, W, H);
      const col = D.GRADES[d.grade].color;
      const rg = g.createRadialGradient(W / 2, H * 0.55, 10, W / 2, H * 0.55, H * 0.5);
      rg.addColorStop(0, hexA(col, 0.35)); rg.addColorStop(1, hexA(col, 0));
      g.fillStyle = rg; g.fillRect(0, 0, W, H);
      const cyc = t % 5, moving = cyc > 3.2 && cyc < 4.4, atk = cyc > 2.2 && cyc < 2.8 ? Math.sin((cyc - 2.2) / 0.6 * Math.PI) : 0;
      const sc = (H * 0.5) / (d.fly ? d.size * 0.95 : d.size);
      g.fillStyle = 'rgba(0,0,0,0.45)'; g.beginPath(); g.ellipse(W / 2, H * 0.84, d.size * sc * 0.4, d.size * sc * 0.1, 0, 0, Math.PI * 2); g.fill();
      drawPet(g, d, W / 2 + (d.fly ? 8 * sc : 0), H * (d.fly ? 0.9 : 0.84), 1, { t, moving, atk }, sc);
      if (CUTE(d) && cyc < 1.6) { g.font = 'bold 28px sans-serif'; g.textAlign = 'center'; g.globalAlpha = 1 - cyc / 1.6; g.fillStyle = '#ff6f9a'; g.fillText('♥', W / 2 + 40, H * 0.35 - cyc * 40); g.globalAlpha = 1; }
      raf = requestAnimationFrame(loop);
    };
    loop();
  }
  const gacha = {
    title: '펫', noun: '펫', icon: 'pet', desc: '함께 싸울 동료를 부화시킵니다.', price: PRICE,
    pool: () => LIST,
    grant: (p, items) => { for (const x of items) p.s.pets[x.id] = (p.s.pets[x.id] || 0) + 1; p.recalc(); },
    thumb: (cv, x) => thumb(cv, x.id, 1),
    count: (p, x) => p.s.pets[x.id] || 0,
    take: (p, x) => { p.s.pets[x.id]--; },
    view: (best) => { sel = best.id; UI.open('pet'); },
  };

  UI.OPENERS.pet = open;
  return { LIST, BY_ID, migrate, bonuses, spawn, drawPet, gacha };
})();
