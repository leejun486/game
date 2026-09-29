'use strict';
// 무기 외형 (weapon looks): data, layered rendering, idle flourishes, collection screen and summon.
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
  const EQUIP_BONUS = { atk: [2, 4, 7, 12, 20], crit: [0, 1, 2, 4, 6] };
  const OWN_BONUS = [5, 10, 20, 40, 80]; // max HP per owned look
  const PRICE = { one: 150, eleven: 1500 };
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
  function migrate(p) {
    p.s.wlooks = p.s.wlooks || {};
    const def = DEFAULT[p.cls];
    if (!p.s.wlooks[def]) p.s.wlooks[def] = 1;
    if (p.s.wlook && (!BY_ID[p.s.wlook] || BY_ID[p.s.wlook].cls !== p.cls)) p.s.wlook = null;
  }
  const current = (p) => p.s.wlook || DEFAULT[p.cls];
  function bonuses(p) {
    const out = [];
    const l = BY_ID[current(p)];
    out.push({ atk: EQUIP_BONUS.atk[l.grade], crit: EQUIP_BONUS.crit[l.grade] });
    let hp = 0;
    for (const id in p.s.wlooks || {}) hp += OWN_BONUS[BY_ID[id].grade];
    out.push({ hp });
    return out;
  }

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
  const menuSheet = (p) => D.BAKED_WEAPON[p.sheet] || p.sheet;
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

  // ---------------------------------------------------------------- UI: collection screen
  const { esc, ico } = UI;
  let sel = null, raf = 0, filter = -1;

  function previewLoop(canvas, getId, getSheet) {
    cancelAnimationFrame(raf);
    const g = canvas.getContext('2d');
    const t0 = performance.now();
    const loop = () => {
      if (!canvas.isConnected) return;
      const t = (performance.now() - t0) / 1000;
      const id = getId(), look = BY_ID[id];
      const W = canvas.width, H = canvas.height;
      g.clearRect(0, 0, W, H);
      g.imageSmoothingEnabled = false;
      const col3 = D.GRADES[look.grade].color, el = ELEM[look.el].color;
      const rg = g.createRadialGradient(W / 2, H * 0.52, 10, W / 2, H * 0.52, H * 0.5);
      rg.addColorStop(0, hexA(col3, 0.35)); rg.addColorStop(1, hexA(col3, 0));
      g.fillStyle = rg; g.fillRect(0, 0, W, H);
      g.fillStyle = 'rgba(0,0,0,0.5)'; g.beginPath(); g.ellipse(W / 2, H * 0.86, W * 0.16, H * 0.03, 0, 0, Math.PI * 2); g.fill();
      // cycle: stand -> attack -> flourish -> walk
      const cls = look.cls, fl = FLOURISH[cls][0];
      const atk = { knight: [12, 6, 0.08], elf: [16, 13, 0.06], mage: [4, 8, 0.08] }[cls];
      const cyc = t % 7;
      let row = 10, col = 0;
      if (cyc < 1.2) { row = 10; col = 0; }
      else if (cyc < 2.4) { row = atk[0] + 2; col = Math.min(atk[1] - 1, Math.floor((cyc - 1.2) / atk[2])); }
      else if (cyc < 2.4 + fl.seq.length * fl.ft) {
        const i = Math.min(fl.seq.length - 1, Math.floor((cyc - 2.4) / fl.ft));
        row = ANIMS[fl.anim].row + 2; col = fl.seq[i];
      } else { row = 10; col = walkCol(getSheet(), t * 10); }
      const s = H / 88;
      const pt = drawComposite(g, getSheet(), id, row, col, W / 2, H * 0.86, s, { t });
      if (pt && look.grade >= 3) {
        g.globalCompositeOperation = 'lighter';
        for (let i = 0; i < 6; i++) {
          const a = t * 2 + i * 1.05, r = 22 + Math.sin(t * 3 + i) * 6;
          g.fillStyle = hexA(el, 0.8); g.fillRect(pt.cx + Math.cos(a) * r, pt.cy + Math.sin(a) * r * 0.6, 4, 4);
        }
        g.globalCompositeOperation = 'source-over';
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
  }
  function thumb(canvas, sheet, id) {
    const g = canvas.getContext('2d');
    g.imageSmoothingEnabled = false;
    g.clearRect(0, 0, canvas.width, canvas.height);
    // side-facing action pose so the weapon is clearly visible
    const pose = { knight: [15, 3], elf: [19, 8], mage: [7, 4] }[BY_ID[id].cls];
    drawComposite(g, sheet, id, pose[0], pose[1], canvas.width * 0.42, canvas.height * 0.8, canvas.height / 90, { t: 0 });
  }

  function open() {
    const game = Game, p = game.player;
    const layer = document.getElementById('panel-layer');
    layer.innerHTML = '';
    const el = document.createElement('div');
    el.className = 'panel full';
    layer.appendChild(el);
    const mine = LIST.filter((l) => l.cls === p.cls);
    if (!sel || BY_ID[sel].cls !== p.cls) sel = current(p);
    const render = () => {
      if (el.querySelector('.summon-stage')) return; // a reward popping mid-summon must not wipe the reveal
      const look = BY_ID[sel], owned = p.s.wlooks[sel] || 0;
      const eq = current(p) === sel;
      const list = mine.filter((l) => filter < 0 || l.grade === filter).sort((a, b) => (!!p.s.wlooks[b.id] - !!p.s.wlooks[a.id]) || b.grade - a.grade);
      let hp = 0; for (const id in p.s.wlooks) hp += OWN_BONUS[BY_ID[id].grade];
      el.innerHTML = `<div class="tr-wrap">
        <div class="tr-side">
          <button data-go="transcend">${ico('transcend')}초월</button>
          <button class="on">${ico('sword')}무기 외형</button>
          <button data-soon>${ico('wings')}스킨</button>
          <button data-go="collection">${ico('collection')}결속</button>
        </div>
        <div class="tr-main">
          <div class="tr-head"><h3>무기 외형</h3>
            <div style="display:flex;gap:18px;align-items:center"><span class="cur">${ico('diamond', 'dia')}<b>${U.fmt(p.s.dia)}</b></span>
            <button class="dark-btn" data-pull="1">${ico('diamond', 'dia')} ${PRICE.one} 소환</button><button class="gold-btn" data-pull="11">${ico('diamond', 'dia')} ${U.fmt(PRICE.eleven)} 11회 소환</button><button class="dark-btn" data-go="summon" data-arg="weaponlook:synth">합성</button>
            <button class="close-x" data-close style="font-size:30px">⇥</button></div></div>
          <div class="tr-content">
            <div class="tr-info">
              <div class="grade ${D.GRADES[look.grade].cls}">${D.GRADES[look.grade].name}</div>
              <div class="cname" style="color:${D.GRADES[look.grade].color}">${owned ? '' : '🔒 '}${esc(look.name)}</div>
              <div class="stats"><div>속성 <span style="color:${ELEM[look.el].color}">${ELEM[look.el].name}</span></div>
                <div>장착 효과: 공격력 <span>+${EQUIP_BONUS.atk[look.grade]}</span>${EQUIP_BONUS.crit[look.grade] ? `, 치명타 <span>+${EQUIP_BONUS.crit[look.grade]}%</span>` : ''}</div>
                <div>보유 효과: 최대 HP <span>+${OWN_BONUS[look.grade]}</span></div>
                ${look.grade >= 2 ? '<div style="color:#c9b0e8">✦ 무기 광채 효과</div>' : ''}${look.grade >= 3 ? `<div style="color:${ELEM[look.el].color}">✦ ${ELEM[look.el].name} 오라 · 공격 궤적 효과</div>` : ''}</div>
              <div class="stats" style="font-size:12.5px;color:#a39a88">보유 ${owned}개 · 수집 ${mine.filter((l) => p.s.wlooks[l.id]).length}/${mine.length}<br>전체 보유 효과: 최대 HP +${hp}</div>
              <p style="font-size:12px;color:#888;line-height:1.6">캐릭터가 가만히 서 있으면 무기 외형에 맞는 대기 모션을 보여줍니다.</p>
            </div>
            <div class="tr-center"><canvas id="wl-cv" width="420" height="440"></canvas></div>
            <div class="tr-right">
              <div class="grade-filter">${[-1, 4, 3, 2, 1, 0].map((g) => `<button data-filter="${g}" class="${filter === g ? 'on' : ''}" style="color:${g < 0 ? '#e9d7a8' : D.GRADES[g].color};border-color:${g < 0 ? '' : D.GRADES[g].color}">${g < 0 ? 'All' : D.GRADES[g].name[0]}</button>`).join('')}</div>
              <div class="card-grid">${list.map((l) => `<div class="card gr${l.grade} ${l.id === sel ? 'sel' : ''} ${p.s.wlooks[l.id] ? '' : 'locked'}" data-look="${l.id}"><canvas width="96" height="128"></canvas>
                ${p.s.wlooks[l.id] ? `<span class="cnt">${p.s.wlooks[l.id]}</span>` : ''}${current(p) === l.id ? '<span class="eqb">E</span>' : ''}<div class="nm ${D.GRADES[l.grade].cls}">${esc(l.name)}</div></div>`).join('')}</div>
              <div class="tr-actions">${eq ? '<button class="dark-btn" disabled>장착 중</button>' : `<button class="gold-btn" data-equip ${owned ? '' : 'disabled'}>장착</button>`}</div>
            </div>
          </div>
        </div></div>`;
      el.querySelectorAll('.tr-head button img').forEach((i) => { i.style.width = '16px'; i.style.verticalAlign = '-3px'; });
      el.querySelectorAll('[data-look] canvas').forEach((cv) => thumb(cv, menuSheet(p), cv.parentElement.dataset.look));
      previewLoop(el.querySelector('#wl-cv'), () => sel, () => menuSheet(p));
    };
    el.onclick = (e) => {
      const t = e.target;
      const c = t.closest('[data-look]'); if (c) { sel = c.dataset.look; U.sfx.ui(); return render(); }
      const f = t.closest('[data-filter]'); if (f) { filter = +f.dataset.filter; return render(); }
      if (t.closest('[data-close]')) { cancelAnimationFrame(raf); UI.close(); return; }
      if (t.closest('[data-soon]')) return UI.toast('업데이트 예정입니다.');
      const go = t.closest('[data-go]'); if (go) { cancelAnimationFrame(raf); return UI.open(go.dataset.go, go.dataset.arg); }
      if (t.closest('[data-equip]')) {
        p.s.wlook = sel; p.recalc(); U.sfx.success();
        UI.toast(`${BY_ID[sel].name} 외형을 장착했습니다.`, D.GRADES[BY_ID[sel].grade].color);
        UI.refreshHud(); return render();
      }
      const pull = t.closest('[data-pull]'); if (pull) Gacha.run('weaponlook', +pull.dataset.pull, el, render);
    };
    render();
    return { name: 'weaponlook', rerender: render, onClose: () => cancelAnimationFrame(raf) };
  }

  const gacha = {
    title: '무기 외형', noun: '무기 외형', icon: 'sword', desc: '내 클래스의 무기 외형을 소환합니다.', price: PRICE,
    pool: (p) => LIST.filter((l) => l.cls === p.cls),
    grant: (p, items) => { for (const l of items) p.s.wlooks[l.id] = (p.s.wlooks[l.id] || 0) + 1; p.recalc(); },
    thumb: (cv, l) => thumb(cv, menuSheet(Game.player), l.id),
    count: (p, l) => p.s.wlooks[l.id] || 0,
    take: (p, l) => { p.s.wlooks[l.id]--; },
    view: (best) => { sel = best.id; UI.open('weaponlook'); },
  };

  UI.OPENERS.weaponlook = open;
  return { LIST, BY_ID, ELEM, DEFAULT, load, migrate, current, bonuses, drawComposite, atlasRow, point, startFlourish, tickFlourish, FLOURISH, hexA, gacha };
})();
