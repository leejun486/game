'use strict';
// 탈것 (mounts): procedurally drawn rideable creatures. 희귀 and below are cute, 영웅/전설 are fierce.
// The rider is drawn cropped at the hips on the saddle so it looks seated, and bobs with the gallop.
const Mounts = (() => {
  const { esc, ico } = UI;
  const ell = (g, x, y, rx, ry, col, rot = 0) => { g.fillStyle = col; g.beginPath(); g.ellipse(x, y, Math.max(0.1, rx), Math.max(0.1, ry), rot, 0, Math.PI * 2); g.fill(); };
  const poly = (g, pts, col) => { g.fillStyle = col; g.beginPath(); pts.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y))); g.closePath(); g.fill(); };
  const line = (g, x1, y1, x2, y2, col, w = 1) => { g.strokeStyle = col; g.lineWidth = w; g.lineCap = 'round'; g.beginPath(); g.moveTo(x1, y1); g.lineTo(x2, y2); g.stroke(); };
  const eye = (g, x, y, r = 1.6) => { ell(g, x, y, r, r * 1.1, '#1b1420'); ell(g, x - r * 0.35, y - r * 0.4, r * 0.4, r * 0.4, '#fff'); };
  const hexA = (h, a) => Looks.hexA(h, a);
  const glow = (g, x, y, r, col, a) => { const gr = g.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, hexA(col, a)); gr.addColorStop(1, hexA(col, 0)); g.fillStyle = gr; g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill(); };
  // four legs; ph = gallop phase, moving = bool. xs = [hindFar, hindNear, foreFar, foreNear]
  function legs(g, s, xs, top, len, w, colFar, colNear, hoof) {
    xs.forEach((x, i) => {
      const off = [0, Math.PI, Math.PI * 0.5, Math.PI * 1.5][i];
      const sw = s.moving ? Math.sin(s.ph + off) : 0;
      const lift = s.moving ? Math.max(0, Math.cos(s.ph + off)) * len * 0.25 : 0;
      const fx = x + sw * len * 0.45, fy = -lift;
      line(g, x, top, fx, fy, i % 2 ? colNear : colFar, w);
      if (hoof) ell(g, fx, fy - 1, w * 0.6, 1.4, hoof);
    });
  }
  const bob = (s, amp) => (s.moving ? -Math.abs(Math.sin(s.ph)) * amp : Math.sin(s.t * 2) * amp * 0.25);

  // Each art draws facing right, ground under the body centre at (0,0). layer: 'back' | 'front'.
  // Returns the saddle point [x, y] in art units.
  const ART = {
    pony(g, s, L) {
      const b = bob(s, 2.2);
      if (L === 'front') return [-1, -27 + b];
      legs(g, s, [-11, -8, 7, 10], -14 + b, 14, 3.4, '#e7a9c2', '#f5bdd3', '#8a5a6a');
      g.save(); g.translate(-16, -19 + b); g.rotate(Math.sin(s.t * (s.moving ? 9 : 3)) * 0.25 + 0.5);
      for (let i = 0; i < 3; i++) ell(g, -3, i * 3, 5, 2.2, ['#b9a2ff', '#9fd0ff', '#ffb3e0'][i]); g.restore();
      ell(g, 0, -19 + b, 16, 8.5, '#f7c6d9'); ell(g, 2, -16 + b, 10, 4, '#fbd9e6');
      ell(g, 13, -27 + b, 5.5, 8, '#f7c6d9', 0.5);
      ell(g, 19, -32 + b, 7, 6.5, '#f7c6d9'); ell(g, 24, -29 + b, 4.5, 3.6, '#fde6ef');
      for (let i = 0; i < 4; i++) ell(g, 10 + i * 2.4, -35 + b + i * 2.2, 3.2, 2.4, ['#b9a2ff', '#9fd0ff', '#ffb3e0', '#b9a2ff'][i]);
      poly(g, [[15, -37 + b], [16, -42 + b], [19, -37 + b]], '#f7c6d9');
      eye(g, 20.5, -33 + b, 1.9); ell(g, 19, -29.5 + b, 1.8, 1, 'rgba(255,120,150,0.6)'); ell(g, 26.5, -29.5 + b, 0.7, 0.6, '#b0707f');
      ell(g, -1, -27 + b, 7, 2.2, '#8a5a3a'); ell(g, -1, -27.6 + b, 6, 1.2, '#c9905a');
      return [-1, -27 + b];
    },
    piggy(g, s, L) {
      const b = s.moving ? -Math.abs(Math.sin(s.ph)) * 3 : Math.sin(s.t * 2) * 0.6;
      if (L === 'front') return [-2, -25 + b];
      legs(g, s, [-8, -5, 6, 9], -8 + b, 8, 4, '#e8a0ae', '#f4b3c0', '#b06a7a');
      g.strokeStyle = '#f4b3c0'; g.lineWidth = 1.6; g.beginPath(); g.arc(-17, -17 + b, 3, 0, Math.PI * 1.6); g.stroke();
      ell(g, 0, -15 + b, 15, 10.5, '#f7bcc8'); ell(g, 2, -11 + b, 10, 4.5, '#fbd3db');
      ell(g, 14, -19 + b, 8.5, 8, '#f7bcc8');
      ell(g, 21, -17 + b, 4, 3.4, '#f59aae'); ell(g, 20, -17 + b, 0.8, 1, '#a24a5c'); ell(g, 22.3, -17 + b, 0.8, 1, '#a24a5c');
      poly(g, [[9, -25 + b], [11, -31 + b], [14, -25 + b]], '#f59aae');
      eye(g, 16, -21 + b, 1.6); ell(g, 14, -16 + b, 1.8, 1, 'rgba(255,90,130,0.55)');
      ell(g, -2, -25 + b, 7, 2, '#7a4a2a');
      return [-2, -25 + b];
    },
    sheep(g, s, L) {
      const b = bob(s, 2);
      if (L === 'front') return [-1, -30 + b];
      legs(g, s, [-9, -6, 7, 10], -12 + b, 12, 2.6, '#3a3036', '#4a4046', '#1b1418');
      for (const [x, y, r] of [[-12, -20, 7], [-6, -26, 8], [2, -27, 8], [9, -24, 7], [-9, -15, 7], [0, -15, 8], [8, -16, 7], [12, -20, 6]]) ell(g, x, y + b, r, r * 0.9, '#f4f0ea');
      for (const [x, y] of [[-6, -29], [3, -30], [-11, -22], [10, -26]]) ell(g, x, y + b, 3, 2.4, '#ffffff');
      ell(g, 17, -24 + b, 5, 6.5, '#3a3036', 0.3); ell(g, 12.5, -27 + b, 3.4, 1.6, '#3a3036', -0.5);
      eye(g, 18.5, -26 + b, 1.3);
      for (const [x, y] of [[13, -30], [16, -31], [19, -30]]) ell(g, x, y + b, 2.6, 2.2, '#f4f0ea');
      return [-1, -30 + b];
    },
    chocobo(g, s, L) {
      const b = s.moving ? -Math.abs(Math.sin(s.ph)) * 3 : Math.sin(s.t * 2) * 0.8;
      if (L === 'front') { ell(g, 1, -27 + b, 7, 4, '#f2bd2c', Math.sin(s.t * (s.moving ? 14 : 3)) * 0.3 - 0.2); return [-2, -35 + b]; }
      const st = s.moving ? Math.sin(s.ph) : 0;
      for (const [x, o] of [[-3, 1], [4, -1]]) { line(g, x, -20 + b, x + st * o * 7, -2, '#f08a1a', 2.2); line(g, x + st * o * 7, -1, x + st * o * 7 + 4, -0.5, '#f08a1a', 1.6); }
      for (let i = 0; i < 3; i++) poly(g, [[-12, -28 + b], [-24 - i * 2, -38 + b + i * 5], [-14, -22 + b]], ['#f2bd2c', '#ffd84a', '#e8a91c'][i]);
      ell(g, 0, -27 + b, 14, 10, '#ffd84a');
      g.strokeStyle = '#ffd84a'; g.lineWidth = 7; g.lineCap = 'round'; g.beginPath(); g.moveTo(8, -32 + b); g.quadraticCurveTo(12, -40 + b, 14, -44 + b); g.stroke();
      ell(g, 15, -46 + b, 6, 5.5, '#ffd84a');
      poly(g, [[19, -47 + b], [26, -45 + b], [19, -43 + b]], '#ff8a1a');
      for (let i = 0; i < 3; i++) line(g, 12 + i, -51 + b, 9 + i * 2, -56 + b - i, '#f2bd2c', 1.6);
      eye(g, 17, -47 + b, 1.5);
      return [-2, -35 + b];
    },
    panda(g, s, L) {
      const b = s.moving ? -Math.abs(Math.sin(s.ph)) * 2.5 : Math.sin(s.t * 1.5) * 0.6;
      if (L === 'front') return [-3, -29 + b];
      legs(g, s, [-10, -6, 7, 11], -10 + b, 10, 5, '#1f1c22', '#2a262e', null);
      ell(g, -16, -20 + b, 3, 3, '#f4f0ea');
      ell(g, 0, -18 + b, 17, 11, '#f4f0ea'); ell(g, 7, -18 + b, 5, 11.5, '#2a262e');
      ell(g, 16, -25 + b, 9.5, 8.5, '#f4f0ea');
      ell(g, 11, -32 + b, 3, 3, '#2a262e'); ell(g, 20, -33 + b, 3, 3, '#2a262e');
      ell(g, 18, -26 + b, 3, 2.4, '#2a262e', 0.4); eye(g, 18.3, -26.5 + b, 1.1);
      ell(g, 23, -22.5 + b, 1.3, 1, '#1b1420'); ell(g, 14, -21 + b, 1.6, 0.9, 'rgba(255,130,160,0.5)');
      ell(g, -3, -29 + b, 7, 2, '#b8322b');
      return [-3, -29 + b];
    },
    unicorn(g, s, L) {
      const b = bob(s, 2.2);
      if (L === 'front') return [-1, -27 + b];
      legs(g, s, [-11, -8, 7, 10], -14 + b, 14, 3.4, '#e4e0f0', '#f4f2fb', '#c9a7e8');
      const rb = ['#ff9ab8', '#ffd27a', '#9ff0b0', '#9fd0ff', '#c79cff'];
      g.save(); g.translate(-16, -19 + b); g.rotate(Math.sin(s.t * (s.moving ? 9 : 3)) * 0.25 + 0.5);
      rb.forEach((c, i) => ell(g, -4, -3 + i * 1.8, 6, 1.6, c)); g.restore();
      ell(g, 0, -19 + b, 16, 8.5, '#fbfaff'); ell(g, 2, -16 + b, 10, 4, '#ffffff');
      ell(g, 13, -27 + b, 5.5, 8, '#fbfaff', 0.5);
      ell(g, 19, -32 + b, 7, 6.5, '#fbfaff'); ell(g, 24, -29 + b, 4.5, 3.6, '#fff4fb');
      rb.forEach((c, i) => ell(g, 9 + i * 2, -36 + b + i * 2, 3, 2.2, c));
      poly(g, [[19, -38 + b], [24, -50 + b], [22, -37 + b]], '#ffd24a'); line(g, 20, -41 + b, 23, -42 + b, '#fff3b0', 0.8);
      eye(g, 20.5, -33 + b, 1.9); ell(g, 19, -29.5 + b, 1.8, 1, 'rgba(255,120,170,0.6)');
      glow(g, 23, -46 + b, 6, '#fff3b0', 0.8);
      return [-1, -27 + b];
    },
    frostlion(g, s, L) {
      const b = bob(s, 3);
      if (L === 'front') {
        const n = 11;
        for (let i = 0; i < n; i++) { const a = -2.4 + (i / n) * 3.4, r = 12 + Math.sin(s.t * 5 + i) * 1.5; poly(g, [[28 + Math.cos(a) * 5, -40 + b + Math.sin(a) * 5], [28 + Math.cos(a) * (r + 6), -40 + b + Math.sin(a) * (r + 6)], [28 + Math.cos(a + 0.3) * 6, -40 + b + Math.sin(a + 0.3) * 6]], i % 2 ? '#e6f6ff' : '#9fd0ff'); }
        ell(g, 31, -39 + b, 8, 7, '#cfe8ff'); poly(g, [[35, -41 + b], [44, -37 + b], [43, -34 + b], [35, -34 + b]], '#cfe8ff');
        ell(g, 43, -36.5 + b, 1.4, 1.2, '#2a4a70');
        glow(g, 34, -41 + b, 6, '#6ff2ff', 0.9); ell(g, 34, -41 + b, 1.6, 1.3, '#e8ffff');
        return [-4, -40 + b];
      }
      glow(g, 4, -30, 50, '#7fd4ff', 0.25);
      legs(g, s, [-17, -12, 13, 18], -20 + b, 20, 5.5, '#8fb8e8', '#a8cdf2', '#e6f6ff');
      g.save(); g.translate(-26, -30 + b); g.rotate(-0.4 + Math.sin(s.t * 4) * 0.2); line(g, 0, 0, -14, -6, '#b8dcff', 3); ell(g, -16, -7, 5, 4, '#e6f6ff'); g.restore();
      ell(g, 0, -30 + b, 26, 12, '#cfe8ff'); ell(g, 2, -24 + b, 18, 5, '#e6f6ff');
      for (let i = 0; i < 4; i++) poly(g, [[-14 + i * 7, -40 + b], [-11 + i * 7, -48 + b - (i % 2) * 3], [-8 + i * 7, -40 + b]], '#a8d8ff');
      ell(g, -4, -41 + b, 9, 2.6, '#35587a'); ell(g, -4, -41.8 + b, 7.5, 1.4, '#7fd4ff');
      return [-4, -40 + b];
    },
    direwolf(g, s, L) {
      const b = bob(s, 3);
      if (L === 'front') {
        ell(g, 27, -37 + b, 9, 7, '#2a2334'); poly(g, [[31, -39 + b], [44, -35 + b], [43, -31 + b], [31, -31 + b]], '#2a2334');
        poly(g, [[22, -42 + b], [24, -52 + b], [28, -43 + b]], '#2a2334'); poly(g, [[27, -43 + b], [30, -53 + b], [33, -41 + b]], '#2a2334');
        glow(g, 33, -38 + b, 7, '#ff3050', 0.9); ell(g, 33, -38 + b, 1.6, 1.2, '#ffd0d8');
        if (s.atk) poly(g, [[34, -31 + b], [44, -31 + b], [38, -26 + b]], '#1a1420');
        return [-4, -38 + b];
      }
      glow(g, 2, -28, 50, '#9b5cff', 0.28);
      legs(g, s, [-16, -11, 12, 17], -19 + b, 19, 5, '#1f1928', '#2e2638', '#120d18');
      g.save(); g.translate(-24, -30 + b); g.rotate(-0.5 + Math.sin(s.t * 4) * 0.18); ell(g, -10, 0, 14, 5, '#2a2334'); ell(g, -20, 0, 5, 3.4, '#6b4aa0'); g.restore();
      ell(g, 0, -29 + b, 24, 11, '#2a2334'); ell(g, 2, -23 + b, 16, 4.5, '#3a3046');
      for (let i = 0; i < 6; i++) poly(g, [[-16 + i * 6, -38 + b], [-13 + i * 6, -47 + b - (i % 2) * 4], [-10 + i * 6, -38 + b]], i % 2 ? '#6b4aa0' : '#3a3046');
      ell(g, -4, -39 + b, 9, 2.6, '#5a1a2a');
      return [-4, -38 + b];
    },
    griffon(g, s, L) {
      const hover = -18 - Math.sin(s.t * 2.2) * 3, b = hover;
      const f = Math.sin(s.t * (s.moving ? 9 : 4));
      const wing = (dir, col, col2) => {
        g.save(); g.translate(-2, -32 + b); g.rotate(dir * (0.15 + f * 0.75));
        poly(g, [[0, 0], [-10, -12], [-24, -24], [-40, -26], [-34, -18], [-40, -12], [-28, -8], [-32, -2], [-14, 2]], col);
        for (let i = 0; i < 4; i++) line(g, -12 - i * 6, -2 - i * 5, -30 - i * 3, -8 - i * 5, col2, 1);
        g.restore();
      };
      if (L === 'front') { wing(-1, '#fff4d6', '#d9b25a'); return [-4, -43 + b]; }
      glow(g, 0, -30 + b, 52, '#ffd76a', 0.3);
      wing(1, '#e8d49a', '#b88a3a');
      line(g, -18, -30 + b, -34, -26 + b + Math.sin(s.t * 3) * 3, '#c9983a', 3); ell(g, -36, -26 + b + Math.sin(s.t * 3) * 3, 3.5, 2.6, '#8a5a1a');
      for (const [x, y] of [[-12, -20], [-6, -19], [8, -20], [12, -19]]) line(g, x, y + b, x - 2, y + 7 + b, '#c9983a', 3.4);
      ell(g, -2, -30 + b, 20, 10, '#d9aa4a'); ell(g, 8, -32 + b, 11, 9, '#f4ecd8');
      ell(g, 18, -41 + b, 7.5, 7, '#ffffff');
      poly(g, [[23, -43 + b], [31, -39 + b], [24, -36 + b]], '#ffcf3a'); poly(g, [[27, -39 + b], [31, -39 + b], [28, -35 + b]], '#e0a020');
      poly(g, [[13, -46 + b], [8, -52 + b], [15, -48 + b]], '#ffffff');
      glow(g, 20, -43 + b, 5, '#ffe28a', 0.9); ell(g, 20, -43 + b, 1.5, 1.4, '#3a2410');
      ell(g, -4, -42 + b, 9, 2.4, '#8a2a2a'); ell(g, -4, -42.8 + b, 7, 1.2, '#ffd76a');
      return [-4, -43 + b];
    },
    nightmare(g, s, L) {
      const b = bob(s, 2.6);
      const fire = (x, y, n, len, ang) => {
        g.save(); g.globalCompositeOperation = 'lighter';
        for (let i = 0; i < n; i++) {
          const k = i / n, a = ang + Math.sin(s.t * 12 + i) * 0.25;
          const gr = g.createRadialGradient(x, y, 0, x, y, len);
          gr.addColorStop(0, 'rgba(255,240,180,0.9)'); gr.addColorStop(0.4, 'rgba(255,120,30,0.7)'); gr.addColorStop(1, 'rgba(200,20,0,0)');
          g.fillStyle = gr;
          g.beginPath(); g.moveTo(x + i * 1.8, y + i * 1.2); g.quadraticCurveTo(x + Math.cos(a) * len * 0.6 + i * 2, y + Math.sin(a) * len * 0.6, x + Math.cos(a) * len * (1 - k * 0.3) + i * 2, y + Math.sin(a) * len * (1 - k * 0.3)); g.lineTo(x + i * 1.8 + 3, y + i * 1.2 + 2); g.fill();
        }
        g.restore();
      };
      if (L === 'front') {
        ell(g, 22, -36 + b, 7.5, 6.5, '#1d1618'); ell(g, 27, -33 + b, 5, 3.8, '#241c1f');
        glow(g, 23, -37 + b, 6, '#ff3a1a', 0.95); ell(g, 23, -37 + b, 1.5, 1.2, '#ffe0a0');
        fire(15, -40 + b, 5, 16, -2.3);
        return [-1, -30 + b];
      }
      glow(g, 0, -24, 48, '#ff3a1a', 0.25);
      legs(g, s, [-12, -9, 8, 11], -16 + b, 16, 3.8, '#161113', '#221a1d', '#ff6a1a');
      fire(-17, -22 + b, 6, 20, 3.4);
      ell(g, 0, -22 + b, 18, 9.5, '#1d1618'); ell(g, 3, -18 + b, 11, 4, '#2a2024');
      ell(g, 14, -30 + b, 6, 9, '#1d1618', 0.5);
      ell(g, -1, -30 + b, 8, 2.4, '#5a1010'); ell(g, -1, -30.8 + b, 6.5, 1.2, '#ff6a1a');
      return [-1, -30 + b];
    },
  };

  // ---------------------------------------------------------------- data
  const LIST = [
    { id: 'm_pony', name: '아기 조랑말 뽀니', grade: 0, art: 'pony', scale: 1.8, spd: 20, el: 'holy', dust: '#e8d9c0' },
    { id: 'm_piggy', name: '꿀꿀 돼지 꿀떡이', grade: 0, art: 'piggy', scale: 1.8, spd: 20, el: 'none', dust: '#e8d9c0' },
    { id: 'm_sheep', name: '복슬 양 몽실이', grade: 1, art: 'sheep', scale: 1.8, spd: 30, el: 'none', dust: '#e8d9c0' },
    { id: 'm_chocobo', name: '노랑 꼬꼬새', grade: 1, art: 'chocobo', scale: 1.7, spd: 30, el: 'holy', dust: '#e8d9c0' },
    { id: 'm_panda', name: '꼬마 판다 대나무', grade: 2, art: 'panda', scale: 1.8, spd: 40, el: 'nature', dust: '#e8d9c0' },
    { id: 'm_unicorn', name: '솜사탕 유니콘', grade: 2, art: 'unicorn', scale: 1.8, spd: 40, el: 'holy', dust: '#ffe6f6', sparkle: '#ffd6f0' },
    { id: 'm_frostlion', name: '서리 사자 빙왕', grade: 3, art: 'frostlion', scale: 2.0, spd: 55, el: 'ice', dust: '#dff2ff', trail: 'ice' },
    { id: 'm_direwolf', name: '그림자 늑대 나이트팽', grade: 3, art: 'direwolf', scale: 2.0, spd: 55, el: 'shadow', dust: '#6b4aa0', sparkle: '#b07cff' },
    { id: 'm_griffon', name: '황금 그리폰 아우룸', grade: 4, art: 'griffon', scale: 2.0, spd: 70, el: 'holy', fly: true, sparkle: '#ffe28a' },
    { id: 'm_nightmare', name: '지옥마 헬파이어', grade: 4, art: 'nightmare', scale: 2.1, spd: 70, el: 'fire', dust: '#4a2a20', trail: 'fire' },
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

  // Mount frames are cached: the gallop phase is quantised to 16 steps and idle time to 1/8s
  // (4s loop), so each distinct frame is drawn once and reused by every rider of that mount.
  const cache = new Map(), CACHE_MAX = 320;
  function frameFor(d, layer, face, st) {
    let key, st2;
    if (st.moving) {
      const q = Math.floor((((st.ph % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)) / (Math.PI * 2) * 16);
      key = `${d.id}|${layer}|${face}|m${q}|${st.atk ? 1 : 0}`; st2 = { t: q * 0.12, ph: (q / 16) * Math.PI * 2, moving: true, atk: st.atk };
    } else {
      const q = Math.floor(st.t * 8) % 32;
      key = `${d.id}|${layer}|${face}|i${q}|${st.atk ? 1 : 0}`; st2 = { t: q / 8, ph: 0, moving: false, atk: st.atk };
    }
    let f = cache.get(key);
    if (f) { cache.delete(key); cache.set(key, f); return f; } // refresh LRU position
    const c = document.createElement('canvas'); c.width = 220; c.height = 150;
    const g = c.getContext('2d');
    g.translate(110, 130);
    if (face < 0) g.scale(-1, 1);
    const saddle = ART[d.art](g, st2, layer);
    // crop to the opaque bounding box so blits only touch pixels that matter
    const px = g.getImageData(0, 0, 220, 150).data;
    let x0 = 220, y0 = 150, x1 = -1, y1 = -1;
    for (let yy = 0; yy < 150; yy++) for (let xx = 0; xx < 220; xx++) if (px[(yy * 220 + xx) * 4 + 3] > 4) { if (xx < x0) x0 = xx; if (xx > x1) x1 = xx; if (yy < y0) y0 = yy; if (yy > y1) y1 = yy; }
    f = { c, saddle, box: x1 < 0 ? null : [x0, y0, x1 - x0 + 1, y1 - y0 + 1] };
    cache.set(key, f);
    if (cache.size > CACHE_MAX) cache.delete(cache.keys().next().value);
    return f;
  }
  function drawLayer(ctx, d, layer, x, y, face, st, scale) {
    const f = frameFor(d, layer, face < 0 ? -1 : 1, st);
    if (f.box) {
      const [bx, by, bw, bh] = f.box;
      const smooth = ctx.imageSmoothingEnabled; ctx.imageSmoothingEnabled = false;
      ctx.drawImage(f.c, bx, by, bw, bh, Math.round(x + (bx - 110) * scale), Math.round(y + (by - 130) * scale), Math.round(bw * scale), Math.round(bh * scale));
      ctx.imageSmoothingEnabled = smooth;
    }
    return f.saddle;
  }
  // riderFn(g, feetX, feetY) draws the rider standing with feet at the given point
  function drawRidden(ctx, id, x, y, face, st, riderFn, scaleMul = 1) {
    const d = BY_ID[id], sc = d.scale * scaleMul;
    // shadow
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.beginPath(); ctx.ellipse(x, y, (d.fly ? 26 : 30) * sc * 0.9, 7 * sc, 0, 0, Math.PI * 2); ctx.fill();
    const saddle = drawLayer(ctx, d, 'back', x, y, face, st, sc);
    if (riderFn) {
      rg.setTransform(1, 0, 0, 1, 0, 0); rg.clearRect(0, 0, rc.width, rc.height);
      riderFn(rg, 96, RIDER_FEET);
      const sx = x + saddle[0] * sc * face, sy = y + saddle[1] * sc;
      ctx.save(); ctx.imageSmoothingEnabled = false;
      ctx.drawImage(rc, 0, 0, 192, RIDER_HIP, Math.round(sx - 96 * scaleMul), Math.round(sy - RIDER_HIP * scaleMul), 192 * scaleMul, RIDER_HIP * scaleMul);
      ctx.restore();
    }
    drawLayer(ctx, d, 'front', x, y, face, st, sc);
    return { saddleY: saddle[1] * sc };
  }
  // draw an entity riding its mount (player or bot)
  function drawEntity(ctx, cam, e, riderFn) {
    const d = BY_ID[e.mountId];
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
    void d;
  }

  // ---------------------------------------------------------------- UI
  let sel = null, raf = 0, filter = -1;
  function riderPreviewFn(p) {
    return (g, fx, fy) => { g.imageSmoothingEnabled = false; Looks.drawComposite(g, p.sheet, Looks.current(p), 11, 0, fx, fy, 1, { t: 0 }); };
  }
  function thumb(cv, id) {
    const g = cv.getContext('2d'); g.clearRect(0, 0, cv.width, cv.height);
    const d = BY_ID[id];
    const sc = Math.min(cv.width / (70 * d.scale), 1.1);
    drawRidden(g, id, cv.width * 0.45, cv.height * 0.86, 1, { t: 0.3, ph: 0, moving: false }, null, sc);
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
      const sc = Math.min(2.4, (W * 0.8) / (80 * d.scale));
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
