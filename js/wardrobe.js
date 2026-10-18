'use strict';
// 옷장 (wardrobe): dress the character from parts — 모자 (hat), 상의 (top), 무기 (weapon look) — or a whole-body
// 세트. The body is drawn from layered sheets built by tools/build_wardrobe.py (assets/wardrobe): the class's bare
// base + the top + the hat are stacked once per combination into a canvas registered as a sprite sheet, and the
// weapon look is drawn over it by Looks.drawComposite. A 세트 swaps in its own full sheet (e.g. the 여우 도사).
// Parts are won from the 의상 소환 (gacha) and give small bonuses: worn parts by grade, every owned part a little HP.
const Wardrobe = (() => {
  const { esc, ico } = UI;
  const SEX = { knight: 'male', elf: 'female', mage: 'female' };
  const SLOTS = [['top', '상의'], ['hat', '모자'], ['weapon', '무기'], ['set', '세트']];
  const PARTS = [
    { id: 'top_plate', slot: 'top', name: '강철 판금 갑옷', grade: 0 },
    { id: 'top_leather', slot: 'top', name: '숲지기 가죽옷', grade: 0 },
    { id: 'top_blouse', slot: 'top', name: '청색 저고리', grade: 0 },
    { id: 'top_dobok', slot: 'top', name: '흰 도복', grade: 1 },
    { id: 'top_mubok', slot: 'top', name: '검은 무복', grade: 1 },
    { id: 'top_hanbok', slot: 'top', name: '분홍 한복 저고리', grade: 1 },
    { id: 'top_bronze', slot: 'top', name: '청동 무관 갑주', grade: 2 },
    { id: 'top_dopo', slot: 'top', name: '선비의 도포', grade: 2 },
    { id: 'top_jeonpo', slot: 'top', name: '청룡 전포', grade: 2 },
    { id: 'top_hongpo', slot: 'top', name: '어사의 홍포', grade: 3 },
    { id: 'top_general', slot: 'top', name: '황금 장군 갑주', grade: 3 },
    { id: 'top_dragon', slot: 'top', name: '용린 금갑', grade: 4 },
    { id: 'hat_band_red', slot: 'hat', name: '붉은 무사 머리띠', grade: 0 },
    { id: 'hat_band_white', slot: 'hat', name: '흰 머리띠', grade: 0 },
    { id: 'hat_hood', slot: 'hat', name: '나그네 두건', grade: 1 },
    { id: 'hat_gokkal', slot: 'hat', name: '도사의 고깔', grade: 2 },
    { id: 'hat_jeonrip', slot: 'hat', name: '무관의 전립', grade: 2 },
    { id: 'hat_horns', slot: 'hat', name: '도깨비 뿔', grade: 3 },
    { id: 'hat_crown', slot: 'hat', name: '신라 금관', grade: 4 },
    { id: 'set_dosa', slot: 'set', name: '여우 도사', grade: 2, cls: 'mage', sheet: 'mage_px' },
  ];
  // the weapon slot is the old weapon-look art (Looks.LIST), one family per class
  const ITEMS = PARTS.concat(Looks.LIST.map((l) => ({ id: l.id, slot: 'weapon', name: l.name, grade: l.grade, cls: l.cls })));
  const BY_ID = {};
  for (const it of ITEMS) BY_ID[it.id] = it;
  const DEFAULT = {
    knight: { top: 'top_plate', hat: null, weapon: 'ks_steel', set: null },
    elf: { top: 'top_leather', hat: null, weapon: 'eb_medium', set: null },
    mage: { top: 'top_blouse', hat: null, weapon: 'ms_purple', set: 'set_dosa' },
  };
  const BONUS = {
    weapon: (g) => ({ atk: [2, 4, 7, 12, 20][g], crit: [0, 1, 2, 4, 6][g] }),
    top: (g) => ({ def: [1, 2, 4, 7, 12][g], hp: [10, 25, 50, 90, 150][g] }),
    hat: (g) => ({ crit: [0, 1, 2, 3, 5][g], hp: [5, 15, 30, 55, 90][g] }),
    set: (g) => ({ def: [1, 2, 4, 7, 12][g], hp: [15, 40, 80, 145, 240][g], crit: [0, 1, 2, 3, 5][g] }),
  };
  const OWN_HP = [5, 10, 20, 40, 80];
  const usable = (it, cls) => !it.cls || it.cls === cls;

  // ---------------------------------------------------------------- state
  function migrate(p) {
    const s = p.s;
    if (!s.ward) {
      s.ward = { own: {}, eq: Object.assign({}, DEFAULT[p.cls]), changed: false };
      // weapon looks already collected carry over; 초월 cards (removed) are refunded as 의상 소환권
      for (const id in s.wlooks || {}) if (BY_ID[id]) s.ward.own[id] = s.wlooks[id];
      if (s.wlook && BY_ID[s.wlook] && BY_ID[s.wlook].cls === p.cls) s.ward.eq.weapon = s.wlook;
      const cards = Object.values(s.cards || {}).reduce((a, c) => a + (c.n || 0), 0);
      if (cards) { s.inv = s.inv || []; const t = s.inv.find((i) => i.id === 'ticket'); const n = Math.min(40, cards); if (t) t.n += n; else s.inv.push({ uid: Date.now(), id: 'ticket', n }); s.wardRefund = n; }
      delete s.cards; delete s.card;
    }
    const d = DEFAULT[p.cls], own = s.ward.own;
    for (const k of ['top', 'weapon', 'set']) if (d[k] && !own[d[k]]) own[d[k]] = 1;
    for (const k in s.ward.eq) { const id = s.ward.eq[k]; if (id && (!BY_ID[id] || !own[id] || !usable(BY_ID[id], p.cls))) s.ward.eq[k] = d[k]; }
  }
  const eq = (p) => p.s.ward.eq;
  const weapon = (p) => (p.s.ward && p.s.ward.eq.weapon) || DEFAULT[p.cls].weapon;

  // ---------------------------------------------------------------- sheets
  const IMG = {};
  function img(name) {
    if (!IMG[name]) { const im = new Image(); im.src = `assets/wardrobe/${name}.png`; IMG[name] = im; }
    return IMG[name];
  }
  const ready = (im) => im.complete && im.naturalWidth > 0;
  // stack base + top + hat into a sheet; returns its Sprites key, or null while the layers are still loading
  function build(cls, top, hat, onReady) {
    const key = `ward_${cls}_${top || '-'}_${hat || '-'}`;
    if (Sprites[key]) return key;
    const layers = [img('base_' + cls)];
    if (top) layers.push(img(`${top}_${SEX[cls]}`));
    if (hat) layers.push(img(`${hat}_${SEX[cls]}`));
    if (!layers.every(ready)) {
      if (onReady) for (const im of layers) if (!ready(im)) im.addEventListener('load', () => { if (layers.every(ready)) onReady(); }, { once: true });
      return null;
    }
    const c = document.createElement('canvas'); c.width = 832; c.height = 1344;
    const g = c.getContext('2d');
    for (const im of layers) g.drawImage(im, 0, 0);
    Sprites[key] = c;
    window.SPRITE_ROWS[key] = window.SPRITE_ROWS[cls];
    return key;
  }
  // the sheet a player (or a preview) wears
  function sheetFor(cls, e, onReady) {
    const set = e.set && BY_ID[e.set];
    if (set && usable(set, cls) && Sprites[set.sheet]) return set.sheet;
    const base = D.CLASSES[cls].sheet; // while the layers load
    return build(cls, e.top, e.hat, onReady) || (window.SPRITE_ROWS[base + '_nw'] ? base + '_nw' : base);
  }
  function playerSheet(p) {
    return sheetFor(p.cls, eq(p), () => { p.recalc(); UI.refreshAll(); });
  }
  function preload(cls) { img('base_' + cls); for (const it of PARTS) if (it.slot === 'top' || it.slot === 'hat') img(`${it.id}_${SEX[cls]}`); }

  function bonuses(p) {
    const out = [], e = eq(p);
    const set = e.set && BY_ID[e.set];
    if (set) out.push(BONUS.set(set.grade)); else for (const k of ['top', 'hat']) if (e[k]) out.push(BONUS[k](BY_ID[e[k]].grade));
    out.push(BONUS.weapon(BY_ID[weapon(p)].grade));
    let hp = 0;
    for (const id in p.s.ward.own) if (BY_ID[id]) hp += OWN_HP[BY_ID[id].grade];
    out.push({ hp });
    return out;
  }
  // a red dot on 옷장: an owned part better than what is worn in its slot
  function hasUpgrade(p) {
    const e = eq(p);
    if (e.set) return false;
    return Object.keys(p.s.ward.own).some((id) => {
      const it = BY_ID[id];
      if (!it || it.slot === 'set' || !usable(it, p.cls)) return false;
      const w = e[it.slot] && BY_ID[e[it.slot]];
      return !w || it.grade > w.grade;
    });
  }
  // the glow under a character in a 영웅+ outfit (the set, or the best of top and hat)
  function auraGrade(p) {
    const e = eq(p), set = e.set && BY_ID[e.set];
    if (set) return set.grade;
    return Math.max(-1, ...['top', 'hat'].map((k) => (e[k] ? BY_ID[e[k]].grade : -1)));
  }
  const bonusText = (b) => Object.entries(b).filter(([, v]) => v).map(([k, v]) => `${D.STAT_NAMES[k][0]} +${v}${D.STAT_NAMES[k][1]}`).join(', ');
  function equip(p, id) {
    const it = BY_ID[id];
    if (!it || !p.s.ward.own[id] || !usable(it, p.cls)) return false;
    const e = eq(p);
    if (it.slot === 'set') e.set = e.set === id ? null : id;
    else { e[it.slot] = id; if (it.slot !== 'weapon') e.set = null; } // a part takes the set off
    p.s.ward.changed = true;
    p.recalc(); Quests.check(Game); UI.refreshAll();
    return true;
  }

  // ---------------------------------------------------------------- drawing helpers
  // draw a standing (or walking) frame of an outfit; (x, y) = feet
  function drawOutfit(g, cls, e, x, y, s, row = 10, col = 0) {
    const sheet = sheetFor(cls, e);
    Looks.drawComposite(g, sheet, e.weapon || DEFAULT[cls].weapon, row, col, x, y, s, { t: 0 });
  }
  function thumb(cv, it) {
    const p = Game.player, g = cv.getContext('2d');
    g.imageSmoothingEnabled = false; g.clearRect(0, 0, cv.width, cv.height);
    const e = Object.assign({}, eq(p));
    if (it.slot === 'set') e.set = it.id; else { e[it.slot] = it.id; if (it.slot !== 'weapon') e.set = null; }
    if (it.slot === 'weapon') return Looks.drawComposite(g, sheetFor(p.cls, Object.assign({}, e, { set: null })), it.id, { knight: 15, elf: 19, mage: 7 }[p.cls], { knight: 3, elf: 8, mage: 4 }[p.cls], cv.width * 0.42, cv.height * 0.8, cv.height / 90, { t: 0 });
    // hats are small: show the head and shoulders bigger
    const zoom = it.slot === 'hat' ? cv.height / 46 : cv.height / 66;
    drawOutfit(g, p.cls, e, cv.width / 2, it.slot === 'hat' ? cv.height * 1.25 : cv.height * 0.9, zoom);
  }

  // ---------------------------------------------------------------- 옷장 panel
  let tab = 'top', sel = null, raf = 0;
  function open(arg) {
    const p = Game.player;
    if (arg && BY_ID[arg]) { sel = arg; tab = BY_ID[arg].slot; }
    const { el, body } = UI.makePanel('옷장');
    el.style.width = 'min(900px, 97vw)';
    const tryOn = () => { // what the preview shows: the outfit with the selected (maybe unowned) item on
      const e = Object.assign({}, eq(p)), it = sel && BY_ID[sel];
      if (it && usable(it, p.cls)) { if (it.slot === 'set') e.set = it.id; else { e[it.slot] = it.id; if (it.slot !== 'weapon') e.set = null; } }
      return e;
    };
    const render = () => {
      if (!el.isConnected) return;
      const e = eq(p), list = ITEMS.filter((it) => it.slot === tab && usable(it, p.cls));
      const it = sel && BY_ID[sel];
      const owned = it && p.s.ward.own[it.id];
      const worn = it && (it.slot === 'set' ? e.set === it.id : e[it.slot] === it.id && (!e.set || it.slot === 'weapon'));
      const ownN = Object.keys(p.s.ward.own).filter((id) => BY_ID[id] && usable(BY_ID[id], p.cls)).length;
      const total = ITEMS.filter((x) => usable(x, p.cls)).length;
      const own = {}; for (const b of bonuses(p)) for (const k in b) own[k] = (own[k] || 0) + b[k];
      body.innerHTML = `<div class="ward-wrap">
        <div class="ward-left">
          <canvas class="ward-cv" width="240" height="280"></canvas>
          <div class="ward-worn">${['top', 'hat', 'weapon'].map((k) => { const w = e.set && k !== 'weapon' ? BY_ID[e.set] : e[k] && BY_ID[e[k]]; return `<div><span class="sub">${SLOTS.find((s) => s[0] === k)[1]}</span> ${w ? `<b class="${D.GRADES[w.grade].cls}">${esc(w.name)}</b>` : '<span class="sub">없음</span>'}</div>`; }).join('')}</div>
          <div class="sub" style="font-size:12px;line-height:1.6">수집 ${ownN} / ${total} · 의상 효과: ${bonusText(own)}</div>
          <button class="gold-btn" data-summon style="width:100%">${ico('wings')} 의상 소환</button>
        </div>
        <div class="ward-right">
          <div class="tabs">${SLOTS.map(([k, n]) => `<button data-tab="${k}" class="${tab === k ? 'on' : ''}">${n}</button>`).join('')}</div>
          <div class="card-grid ward-grid">${list.map((x) => `<div class="card gr${x.grade} ${x.id === sel ? 'sel' : ''} ${p.s.ward.own[x.id] ? '' : 'locked'}" data-it="${x.id}"><canvas width="96" height="110"></canvas>
            ${p.s.ward.own[x.id] > 1 ? `<span class="cnt">${p.s.ward.own[x.id]}</span>` : ''}${(x.slot === 'set' ? e.set === x.id : e[x.slot] === x.id && (!e.set || x.slot === 'weapon')) ? '<span class="eqb">E</span>' : ''}<div class="nm ${D.GRADES[x.grade].cls}">${esc(x.name)}</div></div>`).join('') || '<p class="sub">이 직업이 입을 수 있는 세트가 없습니다.</p>'}</div>
          <div class="ward-detail">${it ? `<b class="${D.GRADES[it.grade].cls}">[${D.GRADES[it.grade].name}] ${esc(it.name)}</b>
            <div class="sub">착용 효과: ${bonusText(BONUS[it.slot](it.grade))} · 보유 효과: 최대 HP +${OWN_HP[it.grade]}${it.slot === 'set' ? ' · 세트를 입으면 모자·상의 대신 세트 외형이 보입니다' : ''}</div>
            <div class="btns">${owned ? (worn ? (it.slot === 'set' || it.slot === 'hat' ? `<button class="dark-btn" data-off>벗기</button>` : '<span class="sub">착용 중</span>') : `<button class="gold-btn" data-wear>착용</button>`) : '<span class="sub">🔒 미보유 — 미리보기 중입니다. 의상 소환에서 얻을 수 있어요.</span>'}</div>` : '<span class="sub">의상을 고르면 왼쪽에서 미리 입어 볼 수 있습니다.</span>'}</div>
        </div></div>`;
      body.querySelectorAll('[data-it] canvas').forEach((cv) => thumb(cv, BY_ID[cv.parentElement.dataset.it]));
      startPreview(body.querySelector('.ward-cv'));
    };
    const startPreview = (cv) => {
      cancelAnimationFrame(raf);
      const g = cv.getContext('2d'), t0 = performance.now();
      const loop = () => {
        if (!cv.isConnected) return;
        const t = (performance.now() - t0) / 1000;
        g.clearRect(0, 0, cv.width, cv.height);
        const rg = g.createRadialGradient(120, 170, 10, 120, 170, 140); rg.addColorStop(0, 'rgba(233,215,168,0.18)'); rg.addColorStop(1, 'rgba(0,0,0,0)');
        g.fillStyle = rg; g.fillRect(0, 0, cv.width, cv.height);
        g.fillStyle = 'rgba(0,0,0,0.45)'; g.beginPath(); g.ellipse(120, 262, 46, 10, 0, 0, Math.PI * 2); g.fill();
        g.imageSmoothingEnabled = false;
        // turns slowly through the four facings, walking
        const dir = Math.floor(t / 2.2) % 4, sheetE = tryOn();
        const sheet = sheetFor(p.cls, sheetE), F = window.SPRITE_FRAME[sheet] || 64;
        const walkRow = F === 96 ? 8 + [2, 1, 0, 3][dir] : 8 + [2, 1, 0, 3][dir];
        const col = 1 + (Math.floor(t * 8) % 8);
        Looks.drawComposite(g, sheet, sheetE.weapon || DEFAULT[p.cls].weapon, walkRow, col, 120, 268, (F === 96 ? 2.6 : 3.6), { t });
        raf = requestAnimationFrame(loop);
      };
      loop();
    };
    body.onclick = (ev) => {
      const t = ev.target;
      const tb = t.closest('[data-tab]'); if (tb) { tab = tb.dataset.tab; sel = null; U.sfx.ui(); return render(); }
      const c = t.closest('[data-it]'); if (c) { sel = c.dataset.it; U.sfx.ui(); return render(); }
      if (t.closest('[data-wear]')) { if (equip(p, sel)) { U.sfx.success(); Game.fx.push(Combat.makeFx('teleport', p.x, p.y, { follow: p })); UI.toast(`${BY_ID[sel].name} 착용!`, D.GRADES[BY_ID[sel].grade].color); } return render(); }
      if (t.closest('[data-off]')) { const it = BY_ID[sel], e = eq(p); if (it.slot === 'set') e.set = null; else if (it.slot === 'hat') e.hat = null; p.s.ward.changed = true; p.recalc(); UI.refreshAll(); return render(); }
      if (t.closest('[data-summon]')) { cancelAnimationFrame(raf); return UI.open('summon', 'wardrobe'); }
    };
    render();
    return { rerender: render, onClose: () => cancelAnimationFrame(raf) };
  }

  // ---------------------------------------------------------------- 의상 소환
  const gacha = {
    title: '의상', noun: '의상', icon: 'wings', desc: '모자·상의·무기 외형을 소환합니다. 소환권이 있으면 소환권을 먼저 씁니다.',
    pool: (p) => ITEMS.filter((it) => it.slot !== 'set' && usable(it, p.cls)),
    costLabel: (p, n) => { const tk = p.count('ticket'), need = n === 1 ? 1 : 10; return tk >= need ? `${ico('ticket')} 소환권 ${need}` : `${ico('diamond', 'dia')} ${U.fmt(n === 1 ? 100 : 1000)}`; },
    pay: (p, n) => {
      const need = n === 1 ? 1 : 10, dia = n === 1 ? 100 : 1000;
      if (p.count('ticket') >= need) { p.removeById('ticket', need); return true; }
      if (p.s.dia < dia) { UI.toast('다이아가 부족합니다.', '#ff8a80'); return false; }
      p.s.dia -= dia; return true;
    },
    grant: (p, items) => { for (const it of items) p.s.ward.own[it.id] = (p.s.ward.own[it.id] || 0) + 1; p.recalc(); Quests.check(Game); },
    thumb: (cv, it) => thumb(cv, it),
    count: (p, it) => p.s.ward.own[it.id] || 0,
    take: (p, it) => { p.s.ward.own[it.id]--; if (!p.s.ward.own[it.id]) delete p.s.ward.own[it.id]; },
    view: (best) => { sel = best.id; tab = best.slot; UI.open('wardrobe'); },
  };
  // a random part for rewards: grade g, usable by cls
  const randomItem = (cls, g) => U.pick(ITEMS.filter((it) => it.slot !== 'set' && usable(it, cls) && it.grade === g));
  function give(p, it) { p.s.ward.own[it.id] = (p.s.ward.own[it.id] || 0) + 1; p.recalc(); }

  UI.OPENERS.wardrobe = open;
  UI.OPENERS.weaponlook = () => open(); // old shortcuts land in the wardrobe
  return { ITEMS, BY_ID, DEFAULT, migrate, weapon, playerSheet, sheetFor, preload, bonuses, equip, hasUpgrade, auraGrade, gacha, randomItem, give, drawOutfit };
})();
