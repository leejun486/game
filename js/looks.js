'use strict';
// 무기 외형 (weapon looks): the weapon art worn in the 옷장's 무기 slot — data, layered rendering, idle flourishes.
const Looks = (() => {
  const ELEM = {
    none: { name: '무속성', color: '#fff3c8' }, fire: { name: '화염', color: '#ff6a2a' }, ice: { name: '냉기', color: '#7fd4ff' },
    holy: { name: '신성', color: '#ffe28a' }, shadow: { name: '암흑', color: '#b07cff' }, nature: { name: '자연', color: '#7dff8a' },
    blood: { name: '혈기', color: '#ff3050' },
  };
  const LIST = [
    { id: 'ks_steel', name: '강철 장검', grade: 0, el: 'none' },
    { id: 'ks_bronze', name: '청동 장검', grade: 0, el: 'none' },
    { id: 'ks_saber', name: '기병대 세이버', grade: 1, el: 'none' },
    { id: 'ks_rapier', name: '결투가의 레이피어', grade: 1, el: 'ice' },
    { id: 'ks_mace', name: '성기사의 철퇴', grade: 1, el: 'holy' },
    { id: 'ks_long', name: '왕실 기사단 롱소드', grade: 2, el: 'none' },
    { id: 'ks_gold', name: '태양의 황금검', grade: 2, el: 'holy' },
    { id: 'ks_axe', name: '광전사의 전투도끼', grade: 3, el: 'blood' },
    { id: 'ks_frost', name: '서리한의 빙검', grade: 3, el: 'ice' },
    { id: 'ks_flame', name: '데스나이트의 불검', grade: 4, el: 'fire' },
    { id: 'eb_medium', name: '사냥꾼의 활', grade: 0, el: 'none' },
    { id: 'eb_light', name: '자작나무 활', grade: 0, el: 'none' },
    { id: 'eb_recurve', name: '숲지기의 리커브', grade: 1, el: 'nature' },
    { id: 'eb_great', name: '요정족 장궁', grade: 1, el: 'nature' },
    { id: 'eb_silver', name: '달빛 은궁', grade: 2, el: 'ice' },
    { id: 'eb_gold', name: '태양의 황금궁', grade: 2, el: 'holy' },
    { id: 'eb_shadow', name: '그림자 사냥꾼의 활', grade: 3, el: 'shadow' },
    { id: 'eb_crimson', name: '사이하의 진홍궁', grade: 4, el: 'fire' },
    { id: 'ms_purple', name: '자수정 마법구', grade: 0, el: 'shadow' },
    { id: 'ms_gnarled', name: '뒤틀린 고목 지팡이', grade: 0, el: 'nature' },
    { id: 'ms_loop', name: '현자의 고리 지팡이', grade: 1, el: 'holy' },
    { id: 'ms_serpent', name: '뱀의 지팡이', grade: 1, el: 'nature' },
    { id: 'ms_earth', name: '대지의 마법구', grade: 2, el: 'nature' },
    { id: 'ms_diamond', name: '황금 다이아 지팡이', grade: 2, el: 'holy' },
    { id: 'ms_frost', name: '빙결의 마법구', grade: 3, el: 'ice' },
    { id: 'ms_inferno', name: '바포메트의 화염구', grade: 4, el: 'fire' },
  ];
  const BY_ID = {};
  for (const l of LIST) { l.cls = window.WEAPON_META[l.id].cls; BY_ID[l.id] = l; }
  const DEFAULT = { knight: 'ks_steel', elf: 'eb_medium', mage: 'ms_purple' };
  const IMG = {};

  // ---------------------------------------------------------------- assets / state
  function load(onDone) {
    const ids = Object.keys(window.WEAPON_META);
    let n = ids.length * 2;
    for (const id of ids) for (const k of ['bg', 'fg']) {
      const im = new Image();
      im.onload = im.onerror = () => { if (--n === 0 && onDone) onDone(); };
      im.src = `assets/weapons/${id}_${k}.png`;
      IMG[id + '_' + k] = im;
    }
  }
  const current = (p) => Wardrobe.weapon(p); // what the 옷장 has in the 무기 slot

  // ---------------------------------------------------------------- rendering
  // map a body sheet row to a weapon atlas row (-1 = weapon hidden for that pose)
  const ATTACK_ROW = { knight: 12, elf: 16, mage: 4 };
  function atlasRow(cls, row) {
    if (row >= 8 && row <= 11) return row - 8;
    if (row >= ATTACK_ROW[cls] && row < ATTACK_ROW[cls] + 4) return 4 + row - ATTACK_ROW[cls];
    if (row === 20) return 8;
    return -1;
  }
  // weapon tip/centre in cell coordinates, or null
  function point(id, arow, col) {
    const r = window.WEAPON_META[id].pts[arow];
    return r && r[col] ? r[col] : null;
  }
  // draw body + weapon layers; (x, y) = feet position, s = scale
  // menus show looks on a body that can wear them
  function drawComposite(ctx, sheet, id, row, col, x, y, s, opt = {}) {
    const body = Sprites[sheet];
    if (!body) return;
    const look = BY_ID[id], cls = look.cls;
    const baked = D.BAKED_WEAPON[sheet]; // the weapon is part of this art: no look layers over it
    const arow = baked ? -1 : atlasRow(cls, row);
    const F = window.SPRITE_FRAME[sheet] || 64; // feet sit 8px above the cell bottom, centred
    const bx = Math.round(x - (F / 2) * s), by = Math.round(y - (F - 8) * s);
    const wx = bx - 64 * s, wy = by - 64 * s;
    const bg = IMG[id + '_bg'], fg = IMG[id + '_fg'];
    const ok = arow >= 0 && bg && bg.complete && fg && fg.complete;
    if (ok) ctx.drawImage(bg, col * 192, arow * 192, 192, 192, wx, wy, 192 * s, 192 * s);
    ctx.drawImage(body, col * F, row * F, F, F, bx, by, F * s, F * s);
    if (opt.flash > 0) {
      const a = ctx.globalAlpha;
      ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = a * Math.min(1, opt.flash * 5) * 0.6;
      ctx.drawImage(body, col * F, row * F, F, F, bx, by, F * s, F * s);
      ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = a;
    }
    if (!ok) return null;
    ctx.drawImage(fg, col * 192, arow * 192, 192, 192, wx, wy, 192 * s, 192 * s);
    // enchanted glow for rare+ looks: redraw the weapon additively, pulsing
    if (look.grade >= 2) {
      const t = opt.t ?? performance.now() / 1000;
      const a = ctx.globalAlpha;
      ctx.globalCompositeOperation = 'lighter';
      ctx.globalAlpha = a * ((look.grade >= 4 ? 0.45 : look.grade >= 3 ? 0.32 : 0.18) + Math.sin(t * 4) * 0.12);
      ctx.drawImage(bg, col * 192, arow * 192, 192, 192, wx, wy, 192 * s, 192 * s);
      ctx.drawImage(fg, col * 192, arow * 192, 192, 192, wx, wy, 192 * s, 192 * s);
      const pt = point(id, arow, col);
      if (pt && look.grade >= 3) {
        const cx = wx + pt[0] * s, cy = wy + pt[1] * s, R = (look.grade >= 4 ? 30 : 20) * s;
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, R);
        g.addColorStop(0, hexA(ELEM[look.el].color, 0.45)); g.addColorStop(1, hexA(ELEM[look.el].color, 0));
        ctx.globalAlpha = a; ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = a;
    }
    const pt = point(id, arow, col);
    return pt ? { cx: wx + pt[0] * s, cy: wy + pt[1] * s, tx: wx + pt[2] * s, ty: wy + pt[3] * s } : null;
  }
  function hexA(hex, a) {
    const n = parseInt(hex.slice(1), 16);
    return `rgba(${n >> 16},${(n >> 8) & 255},${n & 255},${Math.max(0, a)})`;
  }

  // ---------------------------------------------------------------- idle flourishes
  // each returns { anim, seq, ft, fx(p, game) } — a short weapon routine played while standing still
  const FLOURISH = {
    knight: [
      { name: '검무', anim: 'slash', seq: [0, 1, 2, 3, 4, 5, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 5], ft: 0.075, glint: true },
      { name: '검 겨누기', anim: 'slash', seq: [0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 2, 1, 0], ft: 0.09, glint: true },
    ],
    elf: [
      { name: '시위 당기기', anim: 'shoot', seq: [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 10, 11, 12, 0], ft: 0.07, charge: true },
    ],
    mage: [
      { name: '마력 집중', anim: 'thrust', seq: [0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 0], ft: 0.09, rune: true },
      { name: '마법구 돌리기', anim: 'thrust', seq: [0, 1, 2, 3, 4, 5, 6, 7, 7, 6, 5, 4, 3, 2, 1, 0], ft: 0.075, orbit: true },
    ],
  };
  function startFlourish(p, game) {
    const f = U.pick(FLOURISH[p.cls]);
    p.action = { anim: f.anim, seq: f.seq, ft: f.ft, t: 0, dur: f.seq.length * f.ft, hitAt: 2, fired: true, idle: true, flourish: f };
    const el = ELEM[BY_ID[current(p)].el].color;
    if (f.rune) game.fx.push(Combat.makeFx('rune', p.x, p.y, { follow: p, color: el, dur: f.seq.length * f.ft }));
    if (f.orbit || f.charge) p.orbitFx = { t: 0, dur: f.seq.length * f.ft, color: el };
  }
  // called every frame from Player.update while a flourish plays
  function tickFlourish(p, game, dt, tip) {
    const ac = p.action;
    if (!ac || !ac.flourish || !tip) return;
    const f = ac.flourish, el = ELEM[BY_ID[current(p)].el].color;
    const frame = Math.floor(ac.t / ac.ft);
    if (f.glint && frame === f.seq.length - 1 && !ac.glinted) { ac.glinted = true; game.fx.push(Combat.makeFx('glint', tip.tx, tip.ty, { color: el })); }
    if (f.charge && frame >= 9 && frame <= 15 && Math.random() < dt * 30) {
      const a = Math.random() * Math.PI * 2;
      game.fx.push(Combat.makeFx('mote', tip.cx + Math.cos(a) * 26, tip.cy + Math.sin(a) * 26, { color: el, to: [tip.cx, tip.cy] }));
    }
    if (f.charge && frame === 16 && !ac.released) { ac.released = true; game.fx.push(Combat.makeFx('burst', tip.cx, tip.cy, { color: el, r: 50 })); }
  }

  return { LIST, BY_ID, ELEM, DEFAULT, load, current, drawComposite, atlasRow, point, startFlourish, tickFlourish, FLOURISH, hexA };
})();
