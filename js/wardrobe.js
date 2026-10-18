'use strict';
// 옷장 (wardrobe): dress the character piece by piece — 모자, 상의, 하의, 신발, 장식 (망토·목도리) and 무기 — or
// switch to a 특수 외형 (a whole different sprite, e.g. the 여우 도사). The body is stacked at run time from the layer
// sheets built by tools/build_wardrobe.py (assets/wardrobe): back_bg, bare body, bottom, shoes, top, back, head, hat,
// once per combination, into a canvas registered as a sprite sheet; the weapon look is drawn over it by Looks.
// Parts come from the 의상 소환 (gacha). Worn parts give stats by grade, every owned part a little HP, and wearing
// every piece of a 코디 세트 (선비, 무녀, 저승사자 …) adds that set's bonus.
const Wardrobe = (() => {
  const { esc, ico } = UI;
  const SEX = { knight: 'male', elf: 'female', mage: 'female' };
  const TABS = [['top', '상의'], ['hat', '모자'], ['bottom', '하의'], ['shoes', '신발'], ['back', '장식'], ['weapon', '무기'], ['set', '세트']];
  const SLOT_NAME = Object.fromEntries(TABS);
  const BODY = ['bottom', 'shoes', 'top', 'back', 'hat']; // the layered slots; a 특수 외형 hides them all
  const P = (slot, list) => list.map(([id, name, grade, extra]) => Object.assign({ id, slot, name, grade }, extra));
  const PARTS = [
    ...P('top', [
      ['top_plate', '강철 판금 갑옷', 0], ['top_leather', '숲지기 가죽옷', 0], ['top_blouse', '청색 저고리', 0],
      ['top_dobok', '흰 도복', 1], ['top_mubok', '검은 무복', 1], ['top_hanbok', '색동 한복 저고리', 1],
      ['top_bronze', '청동 무관 갑주', 2], ['top_dopo', '선비의 도포', 2], ['top_jeonpo', '청룡 전포', 2], ['top_muneo', '무녀의 신복', 2], ['top_hwarang', '화랑 전복', 2],
      ['top_hongpo', '어사의 홍포', 3], ['top_general', '황금 장군 갑주', 3], ['top_jeoseung', '저승사자 흑도포', 3],
      ['top_dragon', '용린 금갑', 4],
    ]),
    ...P('hat', [
      ['hat_band_red', '붉은 무사 머리띠', 0], ['hat_band_white', '흰 머리띠', 0],
      ['hat_hood', '나그네 두건', 1], ['hat_satgat', '삿갓', 1],
      ['hat_gokkal', '도사의 고깔', 2], ['hat_jeonrip', '무관의 전립', 2], ['hat_gat_white', '백립', 2],
      ['hat_horns', '도깨비 뿔', 3], ['hat_gat', '흑립 (갓)', 3], ['hat_hwagwan', '화관', 3],
      ['hat_crown', '신라 금관', 4],
    ]),
    ...P('bottom', [
      ['bottom_plate', '강철 각반', 0], ['bottom_pants', '숲지기 바지', 0], ['bottom_skirt', '남색 치마', 0],
      ['bottom_baji', '흰 통바지', 1], ['bottom_baji_navy', '쪽빛 바지', 1], ['bottom_chima_sky', '하늘빛 치마', 1],
      ['bottom_baji_black', '검은 무관 바지', 2], ['bottom_chima_red', '다홍 치마', 2],
      ['bottom_gold', '황금 각반', 3],
    ]),
    ...P('shoes', [
      ['shoes_plate', '강철 철화', 0], ['shoes_boots', '가죽 장화', 0], ['shoes_boots_white', '흰 장화', 0],
      ['shoes_boots_black', '검은 목화', 1], ['shoes_jipsin', '짚신', 1],
      ['shoes_beoseon', '버선', 2], ['shoes_gold', '황금 철화', 3],
    ]),
    ...P('back', [
      ['back_scarf_red', '붉은 목도리', 1], ['back_scarf_white', '흰 목도리', 1],
      ['back_cape_red', '홍색 망토', 2, { bg: true }], ['back_cape_white', '백색 망토', 2, { bg: true }],
      ['back_cape_black', '저승의 흑망토', 3, { bg: true }], ['back_cape_gold', '황금 용포 망토', 4, { bg: true }],
    ]),
    // 특수 외형: a whole sprite of its own
    { id: 'set_dosa', slot: 'set', name: '여우 도사', grade: 2, cls: 'mage', sheet: 'mage_px' },
    { id: 'set_knight_px', slot: 'set', name: '강철 기사 (도트)', grade: 2, cls: 'knight', sheet: 'knight_px' },
    { id: 'set_elf_px', slot: 'set', name: '숲의 궁수 (도트)', grade: 2, cls: 'elf', sheet: 'elf_px' },
  ];
  // the weapon slot is the weapon-look art (Looks.LIST), one family per class
  const ITEMS = PARTS.concat(Looks.LIST.map((l) => ({ id: l.id, slot: 'weapon', name: l.name, grade: l.grade, cls: l.cls })));
  const BY_ID = {};
  for (const it of ITEMS) BY_ID[it.id] = it;
  // 코디 세트: wear every piece for the bonus
  const OUTFITS = [
    { id: 'cd_seonbi', name: '선비', parts: ['hat_gat', 'top_dopo', 'bottom_baji', 'shoes_beoseon'], bonus: { expPct: 5, hp: 250 } },
    { id: 'cd_muneo', name: '무녀', parts: ['hat_hwagwan', 'top_muneo', 'bottom_chima_red', 'shoes_beoseon'], bonus: { castSpd: 6, hp: 250 } },
    { id: 'cd_hwarang', name: '화랑', parts: ['hat_band_red', 'top_hwarang', 'bottom_baji_black', 'shoes_beoseon', 'back_scarf_red'], bonus: { atkSpd: 5, moveSpd: 4 } },
    { id: 'cd_nageune', name: '나그네 무사', parts: ['hat_satgat', 'top_dobok', 'bottom_baji', 'shoes_jipsin'], bonus: { moveSpd: 6, eva: 6 } },
    { id: 'cd_jeoseung', name: '저승사자', parts: ['hat_gat', 'top_jeoseung', 'bottom_baji_black', 'shoes_boots_black', 'back_cape_black'], bonus: { crit: 4, atk: 18 } },
    { id: 'cd_janggun', name: '대장군', parts: ['hat_jeonrip', 'top_general', 'bottom_gold', 'shoes_gold', 'back_cape_gold'], bonus: { def: 16, hp: 600 } },
  ];
  const DEFAULT = {
    knight: { top: 'top_plate', bottom: 'bottom_plate', shoes: 'shoes_plate', hat: null, back: null, weapon: 'ks_steel', set: null },
    elf: { top: 'top_leather', bottom: 'bottom_pants', shoes: 'shoes_boots', hat: null, back: null, weapon: 'eb_medium', set: null },
    mage: { top: 'top_blouse', bottom: 'bottom_skirt', shoes: 'shoes_boots_white', hat: null, back: null, weapon: 'ms_purple', set: 'set_dosa' },
  };
  const BONUS = {
    weapon: (g) => ({ atk: [2, 4, 7, 12, 20][g], crit: [0, 1, 2, 4, 6][g] }),
    top: (g) => ({ def: [1, 2, 4, 7, 12][g], hp: [10, 25, 50, 90, 150][g] }),
    hat: (g) => ({ crit: [0, 1, 2, 3, 5][g], hp: [5, 15, 30, 55, 90][g] }),
    bottom: (g) => ({ def: [1, 2, 3, 5, 8][g], hp: [10, 20, 40, 70, 120][g] }),
    shoes: (g) => ({ eva: [0, 1, 2, 3, 5][g], moveSpd: [0, 1, 1, 2, 3][g] }),
    back: (g) => ({ atk: [1, 2, 4, 6, 10][g], crit: [0, 1, 1, 2, 3][g] }),
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
    // the class's starting pieces and its 특수 외형 are always owned (older saves get 하의·신발 this way too)
    for (const k in d) if (d[k] && !own[d[k]]) own[d[k]] = 1;
    for (const it of PARTS) if (it.slot === 'set' && it.cls === p.cls && !own[it.id]) own[it.id] = 1;
    for (const k in d) if (!(k in s.ward.eq)) s.ward.eq[k] = d[k];
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
  // stack the layers of an outfit into a sheet; returns its Sprites key, or null while the layers still load
  function build(cls, e, onReady) {
    const key = 'ward_' + cls + '_' + BODY.map((k) => e[k] || '-').join('_');
    if (Sprites[key]) return key;
    const sx = SEX[cls], part = (k) => e[k] && img(`${e[k]}_${sx}`);
    const layers = [];
    if (e.back && BY_ID[e.back].bg) layers.push(img(`${e.back}_${sx}_bg`));
    layers.push(img('base_' + cls), part('bottom'), part('shoes'), part('top'), part('back'), img('head_' + cls), part('hat'));
    const ls = layers.filter(Boolean);
    if (!ls.every(ready)) {
      if (onReady) for (const im of ls) if (!ready(im)) im.addEventListener('load', () => { if (ls.every(ready)) onReady(); }, { once: true });
      return null;
    }
    const c = document.createElement('canvas'); c.width = 832; c.height = 1344;
    const g = c.getContext('2d');
    for (const im of ls) g.drawImage(im, 0, 0);
    Sprites[key] = c;
    window.SPRITE_ROWS[key] = window.SPRITE_ROWS[cls];
    return key;
  }
  // the sheet a player (or a preview) wears
  function sheetFor(cls, e, onReady) {
    const set = e.set && BY_ID[e.set];
    if (set && usable(set, cls) && Sprites[set.sheet]) return set.sheet;
    const base = D.CLASSES[cls].sheet; // while the layers load
    return build(cls, e, onReady) || (window.SPRITE_ROWS[base + '_nw'] ? base + '_nw' : base);
  }
  function playerSheet(p) {
    return sheetFor(p.cls, eq(p), () => { p.recalc(); UI.refreshAll(); });
  }
  function preload(cls) {
    const sx = SEX[cls];
    img('base_' + cls); img('head_' + cls);
    for (const it of PARTS) if (BODY.includes(it.slot)) { img(`${it.id}_${sx}`); if (it.bg) img(`${it.id}_${sx}_bg`); }
  }

  // a 코디 세트 counts when every piece is worn (a 특수 외형 covers them, so none count then)
  const outfitWorn = (e, o) => !e.set && o.parts.every((id) => e[BY_ID[id].slot] === id);
  function bonuses(p) {
    const out = [], e = eq(p);
    const set = e.set && BY_ID[e.set];
    if (set) out.push(BONUS.set(set.grade)); else for (const k of BODY) if (e[k]) out.push(BONUS[k](BY_ID[e[k]].grade));
    out.push(BONUS.weapon(BY_ID[weapon(p)].grade));
    for (const o of OUTFITS) if (outfitWorn(e, o)) out.push(o.bonus);
    let hp = 0;
    for (const id in p.s.ward.own) if (BY_ID[id]) hp += OWN_HP[BY_ID[id].grade];
    out.push({ hp });
    return out;
  }
  const bonusText = (b) => Object.entries(b).filter(([, v]) => v).map(([k, v]) => `${D.STAT_NAMES[k][0]} +${v}${D.STAT_NAMES[k][1]}`).join(', ');
  // put an item on an outfit; a body part takes the 특수 외형 off, a 특수 외형 toggles
  const wear = (e, it) => { if (it.slot === 'set') e.set = e.set === it.id ? null : it.id; else { e[it.slot] = it.id; if (it.slot !== 'weapon') e.set = null; } };
  function equip(p, id) {
    const it = BY_ID[id];
    if (!it || !p.s.ward.own[id] || !usable(it, p.cls)) return false;
    wear(eq(p), it);
    p.s.ward.changed = true;
    p.recalc(); Quests.check(Game); UI.refreshAll();
    return true;
  }
  // put on every owned piece of a 코디 세트; returns how many pieces are still missing
  function wearOutfit(p, o) {
    const e = eq(p);
    let missing = 0;
    for (const id of o.parts) if (p.s.ward.own[id]) e[BY_ID[id].slot] = id; else missing++;
    e.set = null; p.s.ward.changed = true;
    p.recalc(); UI.refreshAll();
    return missing;
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
  // the glow under a character in a 영웅+ outfit (the 특수 외형, or the best worn piece)
  function auraGrade(p) {
    const e = eq(p), set = e.set && BY_ID[e.set];
    if (set) return set.grade;
    return Math.max(-1, ...BODY.map((k) => (e[k] ? BY_ID[e[k]].grade : -1)));
  }

  // ---------------------------------------------------------------- drawing helpers
  // draw a frame of an outfit; (x, y) = feet
  function drawOutfit(g, cls, e, x, y, s, row = 10, col = 0) {
    Looks.drawComposite(g, sheetFor(cls, e), e.weapon || DEFAULT[cls].weapon, row, col, x, y, s, { t: 0 });
  }
  // card art: the piece on the character, framed on the part of the body it covers:
  // [first, last] row of the 64px cell to show (the big LPC head spans about 14-38, the body 38-52, the legs 52-62)
  const FRAME = { hat: [5, 36], top: [24, 54], bottom: [38, 64], shoes: [46, 64], back: [9, 64], set: [9, 64] };
  function thumb(cv, it) {
    const p = Game.player, g = cv.getContext('2d');
    g.imageSmoothingEnabled = false; g.clearRect(0, 0, cv.width, cv.height);
    const e = Object.assign({}, eq(p));
    if (it.slot === 'set') e.set = it.id; else wear(e, it);
    if (it.slot === 'weapon') return Looks.drawComposite(g, sheetFor(p.cls, Object.assign({}, e, { set: null })), it.id, { knight: 15, elf: 19, mage: 7 }[p.cls], { knight: 3, elf: 8, mage: 4 }[p.cls], cv.width * 0.42, cv.height * 0.8, cv.height / 90, { t: 0 });
    const [r0, r1] = FRAME[it.slot];
    const sheet = sheetFor(p.cls, e), F = window.SPRITE_FRAME[sheet] || 64, k = F / 64;
    // the name label covers the bottom fifth of the card: fit the rows into the part above it.
    // drawComposite puts the cell's bottom 8px under the feet point, so solve for where row r1 lands
    const z = (cv.height * 0.78) / ((r1 - r0) * k);
    const y = cv.height * 0.82 + (F - 8 - r1 * k) * z;
    // capes are shown from behind
    Looks.drawComposite(g, sheet, e.weapon || DEFAULT[p.cls].weapon, it.slot === 'back' ? 8 : 10, 0, cv.width / 2, y, z, { t: 0 });
  }

  // ---------------------------------------------------------------- 옷장 panel
  let tab = 'top', sel = null, raf = 0, filter = 'all';
  function open(arg) {
    const p = Game.player;
    if (arg && BY_ID[arg]) { sel = arg; tab = BY_ID[arg].slot; }
    const { el, body } = UI.makePanel('옷장');
    el.style.width = 'min(960px, 97vw)';
    let pose = 'walk', spin = true, facing = 2;
    const tryOn = () => { // what the preview shows: the outfit with the selected (maybe unowned) item on
      const e = Object.assign({}, eq(p)), it = sel && BY_ID[sel];
      if (it && usable(it, p.cls)) { if (it.slot === 'set') e.set = it.id; else wear(e, it); }
      return e;
    };
    const wornIn = (e, x) => (x.slot === 'set' ? e.set === x.id : e[x.slot] === x.id && (!e.set || x.slot === 'weapon'));
    const outfitsHtml = (e) => OUTFITS.map((o) => {
      const own = o.parts.filter((id) => p.s.ward.own[id]).length, on = outfitWorn(e, o);
      return `<div class="ward-outfit ${on ? 'on' : ''}"><div><b>${esc(o.name)} 세트</b> <span class="sub">${own}/${o.parts.length} 보유${on ? ' · 효과 적용 중' : ''}</span>
        <div class="ward-pieces">${o.parts.map((id) => `<span class="${p.s.ward.own[id] ? D.GRADES[BY_ID[id].grade].cls : 'miss'}" data-it="${id}">${esc(BY_ID[id].name)}</span>`).join('')}</div>
        <div class="sub">세트 효과: ${bonusText(o.bonus)}</div></div><button class="dark-btn" data-outfit="${o.id}">입기</button></div>`;
    }).join('');
    const render = () => {
      if (!el.isConnected) return;
      const e = eq(p);
      let list = ITEMS.filter((it) => it.slot === tab && usable(it, p.cls));
      if (filter === 'own') list = list.filter((x) => p.s.ward.own[x.id]);
      const it = sel && BY_ID[sel];
      const owned = it && p.s.ward.own[it.id];
      const worn = it && wornIn(e, it);
      const ownN = Object.keys(p.s.ward.own).filter((id) => BY_ID[id] && usable(BY_ID[id], p.cls)).length;
      const total = ITEMS.filter((x) => usable(x, p.cls)).length;
      const sum = {}; for (const b of bonuses(p)) for (const k in b) sum[k] = (sum[k] || 0) + b[k];
      const wornRow = (k) => {
        const hidden = e.set && k !== 'weapon', w = !hidden && e[k] && BY_ID[e[k]];
        return `<div><span class="sub">${SLOT_NAME[k]}</span> ${w ? `<b class="${D.GRADES[w.grade].cls}">${esc(w.name)}</b>` : `<span class="sub">${hidden ? '(특수 외형)' : '없음'}</span>`}</div>`;
      };
      body.innerHTML = `<div class="ward-wrap">
        <div class="ward-left">
          <canvas class="ward-cv" width="240" height="280"></canvas>
          <div class="ward-pose"><button data-turn="-1" title="돌리기">⟲</button><button data-pose="walk" class="${pose === 'walk' ? 'on' : ''}">걷기</button><button data-pose="idle" class="${pose === 'idle' ? 'on' : ''}">서기</button><button data-pose="attack" class="${pose === 'attack' ? 'on' : ''}">공격</button><button data-turn="1" title="돌리기">⟳</button></div>
          <div class="ward-worn">${e.set ? `<div><span class="sub">외형</span> <b class="${D.GRADES[BY_ID[e.set].grade].cls}">${esc(BY_ID[e.set].name)}</b></div>` : ''}${['hat', 'top', 'bottom', 'shoes', 'back', 'weapon'].map(wornRow).join('')}</div>
          <div class="sub" style="font-size:12px;line-height:1.6">수집 ${ownN} / ${total} · 의상 효과: ${bonusText(sum)}</div>
          <button class="gold-btn" data-summon style="width:100%">${ico('wings')} 의상 소환</button>
        </div>
        <div class="ward-right">
          <div class="tabs">${TABS.map(([k, n]) => `<button data-tab="${k}" class="${tab === k ? 'on' : ''}">${n}</button>`).join('')}</div>
          ${tab === 'set' ? '<div class="ward-sub">특수 외형</div>' : `<div class="ward-filter"><button data-filter="all" class="${filter === 'all' ? 'on' : ''}">전체</button><button data-filter="own" class="${filter === 'own' ? 'on' : ''}">보유</button></div>`}
          <div class="card-grid ward-grid">${list.map((x) => `<div class="card gr${x.grade} ${x.id === sel ? 'sel' : ''} ${p.s.ward.own[x.id] ? '' : 'locked'}" data-it="${x.id}"><canvas width="96" height="110"></canvas>
            ${p.s.ward.own[x.id] > 1 ? `<span class="cnt">${p.s.ward.own[x.id]}</span>` : ''}${wornIn(e, x) ? '<span class="eqb">E</span>' : ''}<div class="nm ${D.GRADES[x.grade].cls}">${esc(x.name)}</div></div>`).join('') || '<p class="sub">표시할 의상이 없습니다.</p>'}</div>
          ${tab === 'set' ? `<div class="ward-sub">코디 세트 — 모든 부위를 입으면 세트 효과</div><div class="ward-outfits">${outfitsHtml(e)}</div>` : ''}
          ${tab === 'set' && !it ? '' : `<div class="ward-detail">${it ? `<b class="${D.GRADES[it.grade].cls}">[${D.GRADES[it.grade].name}] ${esc(it.name)}</b> <span class="sub">${it.slot === 'set' ? '특수 외형' : SLOT_NAME[it.slot]}</span>
            <div class="sub">착용 효과: ${bonusText(BONUS[it.slot](it.grade))} · 보유 효과: 최대 HP +${OWN_HP[it.grade]}${it.slot === 'set' ? ' · 입으면 모자·상의·하의·신발·장식 대신 이 외형이 보입니다' : ''}${OUTFITS.filter((o) => o.parts.includes(it.id)).map((o) => ` · ${o.name} 세트 부위`).join('')}</div>
            <div class="btns">${owned ? (worn ? (['set', 'hat', 'back'].includes(it.slot) ? '<button class="dark-btn" data-off>벗기</button>' : '<span class="sub">착용 중</span>') : '<button class="gold-btn" data-wear>착용</button>') : '<span class="sub">🔒 미보유 — 미리 입어 보는 중입니다. 의상 소환에서 얻을 수 있어요.</span>'}</div>` : '<span class="sub">의상을 고르면 왼쪽에서 미리 입어 볼 수 있습니다.</span>'}</div>`}
        </div></div>`;
      body.querySelectorAll('.card[data-it] canvas').forEach((cv) => thumb(cv, BY_ID[cv.parentElement.dataset.it]));
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
        // sheet order 0 up, 1 left, 2 down, 3 right; until the player turns it, it spins through them
        const dir = spin ? [2, 3, 0, 1][Math.floor(t / 2.2) % 4] : facing;
        const e = tryOn(), sheet = sheetFor(p.cls, e), F = window.SPRITE_FRAME[sheet] || 64;
        let row, col;
        if (pose === 'attack') {
          const [r0, n] = { knight: [12, 6], elf: [16, 13], mage: [0, 7] }[p.cls];
          row = r0 + dir; col = Math.floor(t * 10) % n;
        } else { row = 8 + dir; col = pose === 'walk' ? 1 + (Math.floor(t * 8) % 8) : 0; }
        Looks.drawComposite(g, sheet, e.weapon || DEFAULT[p.cls].weapon, row, col, 120, 268, F === 96 ? 2.6 : 3.6, { t });
        raf = requestAnimationFrame(loop);
      };
      loop();
    };
    body.onclick = (ev) => {
      const t = ev.target;
      const tb = t.closest('[data-tab]'); if (tb) { tab = tb.dataset.tab; sel = null; U.sfx.ui(); return render(); }
      const fb = t.closest('[data-filter]'); if (fb) { filter = fb.dataset.filter; return render(); }
      const pb = t.closest('[data-pose]'); if (pb) { pose = pb.dataset.pose; return render(); }
      const tn = t.closest('[data-turn]');
      if (tn) { // front → right → back → left
        const ring = [2, 3, 0, 1];
        if (spin) { spin = false; facing = 2; }
        facing = ring[(ring.indexOf(facing) + (tn.dataset.turn === '1' ? 1 : 3)) % 4];
        return;
      }
      const ob = t.closest('[data-outfit]');
      if (ob) {
        const o = OUTFITS.find((x) => x.id === ob.dataset.outfit), miss = wearOutfit(p, o);
        U.sfx.success(); UI.toast(miss ? `${o.name} 세트: 보유한 부위만 입었습니다 (${miss}개 부족)` : `${o.name} 세트 착용! 세트 효과 적용`, miss ? '#ffd76a' : '#8ff0a4');
        return render();
      }
      const c = t.closest('[data-it]'); if (c) { sel = c.dataset.it; U.sfx.ui(); return render(); }
      if (t.closest('[data-wear]')) { if (equip(p, sel)) { U.sfx.success(); Game.fx.push(Combat.makeFx('teleport', p.x, p.y, { follow: p })); UI.toast(`${BY_ID[sel].name} 착용!`, D.GRADES[BY_ID[sel].grade].color); } return render(); }
      if (t.closest('[data-off]')) { const it = BY_ID[sel], e = eq(p); if (it.slot === 'set') e.set = null; else e[it.slot] = null; p.s.ward.changed = true; p.recalc(); UI.refreshAll(); return render(); }
      if (t.closest('[data-summon]')) { cancelAnimationFrame(raf); return UI.open('summon', 'wardrobe'); }
    };
    render();
    return { rerender: render, onClose: () => cancelAnimationFrame(raf) };
  }

  // ---------------------------------------------------------------- 의상 소환
  const gacha = {
    title: '의상', noun: '의상', icon: 'wings', desc: '모자·상의·하의·신발·장식·무기 외형을 소환합니다. 소환권이 있으면 소환권을 먼저 씁니다.',
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
  return { ITEMS, BY_ID, DEFAULT, OUTFITS, migrate, weapon, playerSheet, sheetFor, preload, bonuses, equip, hasUpgrade, auraGrade, gacha, randomItem, give, drawOutfit };
})();
