'use strict';
// 운영자 모드 (GM panel): grant currency/items/levels/cards, cheat toggles and world controls.
const Admin = (() => {
  const { ico } = UI;

  const gm = (p) => (p.s.gm = p.s.gm || { god: false, oneHit: false, speed: false });
  function done(msg) {
    const p = Game.player;
    p.recalc(); U.sfx.coin(); UI.toast(`[GM] ${msg}`, '#ffd76a'); UI.chat(`[운영자] ${msg}`, 'whisper');
    Quests.check(Game); UI.refreshAll();
  }
  function setLevel(p, lv) {
    p.s.lv = U.clamp(lv, 1, D.MAX_LV); p.s.exp = 0; p.recalc(); p.hp = p.maxHp; p.mp = p.maxMp;
    Game.fx.push(Combat.makeFx('levelup', p.x, p.y, { follow: p })); U.sfx.level();
  }

  const ACTIONS = {
    dia1k: (p) => { p.s.dia += 1000; return '다이아 1,000 지급'; },
    dia10k: (p) => { p.s.dia += 10000; return '다이아 10,000 지급'; },
    dia100k: (p) => { p.s.dia += 100000; return '다이아 100,000 지급'; },
    gold1m: (p) => { p.s.gold += 1000000; return '아데나 1,000,000 지급'; },
    gold100m: (p) => { p.s.gold += 100000000; return '아데나 100,000,000 지급'; },
    ticket10: (p) => { p.addItem('ticket', 10); return '초월 소환권 10장 지급'; },
    ticket100: (p) => { p.addItem('ticket', 100); return '초월 소환권 100장 지급'; },
    scrolls: (p) => { p.addItem('sc_weapon', 10); p.addItem('sc_armor', 10); return '무기/갑옷 마법 주문서 각 10장 지급'; },
    potions: (p) => { p.addItem('hp_l', 100); p.addItem('hp_m', 200); p.addItem('mp_s', 200); p.addItem('haste', 10); p.addItem('tp_town', 20); return '물약 세트 지급'; },
    gearAll: (p) => {
      for (const id in D.ITEMS) { const it = D.ITEMS[id]; if (D.isEquip(it) && (!it.cls || it.cls === p.cls)) p.addItem(id, 1); }
      return '모든 장비 지급';
    },
    legendWpn: (p) => {
      const id = { knight: 'w_sword5', elf: 'w_bow5', mage: 'w_staff5' }[p.cls];
      const it = p.addItem(id, 1, 9);
      if (p.s.lv >= D.ITEMS[id].lv) p.equip(it.uid);
      return `+9 ${D.ITEMS[id].name} 지급${p.s.lv >= D.ITEMS[id].lv ? ' 및 장착' : ` (Lv.${D.ITEMS[id].lv}부터 착용)`}`;
    },
    lv1: (p) => { setLevel(p, p.s.lv + 1); return `레벨 ${p.s.lv}`; },
    lv10: (p) => { setLevel(p, p.s.lv + 10); return `레벨 ${p.s.lv}`; },
    lvMax: (p) => { setLevel(p, D.MAX_LV); return `최대 레벨 ${p.s.lv}`; },
    heal: (p) => { p.hp = p.maxHp; p.mp = p.maxMp; p.skillCd = {}; p.sprintCd = 0; return 'HP/MP 회복, 쿨타임 초기화'; },
    cardsAll: (p) => { for (const c of D.CARDS) Transcend.addCard(p, c.id); return `초월 카드 ${D.CARDS.length}종 전부 지급`; },
    cardsMax: (p) => {
      if (!Object.keys(p.s.cards).length) for (const c of D.CARDS) Transcend.addCard(p, c.id);
      for (const id in p.s.cards) p.s.cards[id].lv = D.CARD_MAX_LV;
      return '보유 초월 카드 최대 성장';
    },
    cardLegend: (p) => { const c = Transcend.randomCard(4); Transcend.addCard(p, c.id); return `[전설] ${c.name} 지급`; },
    god: (p) => { gm(p).god = !gm(p).god; return `무적 ${gm(p).god ? 'ON' : 'OFF'}`; },
    oneHit: (p) => { gm(p).oneHit = !gm(p).oneHit; return `원킬 ${gm(p).oneHit ? 'ON' : 'OFF'}`; },
    speed: (p) => { gm(p).speed = !gm(p).speed; return `이동속도 2배 ${gm(p).speed ? 'ON' : 'OFF'}`; },
    bosses: () => {
      let n = 0;
      for (const s of D.SPAWNS.filter((x) => D.MONSTERS[x.m].boss)) {
        if (Game.monsters.some((m) => m.spawn === s && !m.dead)) continue;
        const r = Game.respawns.find((x) => x.spawn === s);
        if (r) r.t = 0; else Game.respawns.push({ t: 0, spawn: s });
        n++;
      }
      return n ? `필드 보스 ${n}마리 즉시 소환` : '보스가 이미 모두 출현해 있습니다';
    },
    dungeon: (p) => { p.s.dungeon.used = 0; p.s.dungeon.day = new Date().toDateString(); return '던전 입장 횟수 초기화'; },
    dayNight: () => { const night = Game.darkness() > 0.15; Game.time = night ? 90 : 330; return night ? '낮으로 전환' : '밤으로 전환'; },
    passMax: (p) => { p.s.pass.xp = 30 * 25; p.s.pass.premium = true; return '시즌 패스 만렙 + 프리미엄'; },
    attend: (p) => { p.s.attend.day = ''; return '출석 체크 초기화 (다시 받을 수 있음)'; },
    questSkip: (p) => {
      if (p.s.quest >= D.QUESTS.length) { p.s.daily.prog = D.DAILY_QUEST.n; return '일일 퀘스트 완료 처리'; }
      const q = D.QUESTS[p.s.quest];
      if (q.type === 'level') setLevel(p, Math.max(p.s.lv, q.n));
      else p.s.qprog = q.n || 1;
      if (q.type === 'equipCard' && !p.s.card) { const c = D.CARDS[0]; Transcend.addCard(p, c.id); p.s.card = c.id; }
      if (q.type === 'enchant') { const w = p.equipped('weapon'); if (w) w.en = Math.max(w.en || 0, q.n); }
      return `퀘스트 [${q.title}] 완료 처리 (트래커를 눌러 보상 수령)`;
    },
    gmOff: (p) => { p.s.gm = { god: false, oneHit: false, speed: false }; return '치트 모두 해제'; },
  };

  const SECTIONS = [
    ['재화', [['dia1k', '다이아 +1,000'], ['dia10k', '다이아 +10,000'], ['dia100k', '다이아 +100,000'], ['gold1m', '아데나 +100만'], ['gold100m', '아데나 +1억'], ['ticket10', '소환권 +10'], ['ticket100', '소환권 +100']]],
    ['아이템', [['scrolls', '강화 주문서 x10'], ['potions', '물약 세트'], ['gearAll', '모든 장비'], ['legendWpn', '+9 전설 무기']]],
    ['캐릭터', [['lv1', '레벨 +1'], ['lv10', '레벨 +10'], ['lvMax', '최대 레벨'], ['heal', '회복 · 쿨 초기화'], ['questSkip', '현재 퀘스트 완료']]],
    ['초월', [['cardsAll', '모든 카드 획득'], ['cardsMax', '카드 최대 성장'], ['cardLegend', '전설 카드 1장']]],
    ['치트', [['god', '무적', 'god'], ['oneHit', '원킬', 'oneHit'], ['speed', '이동속도 2배', 'speed'], ['gmOff', '치트 모두 해제']]],
    ['월드', [['bosses', '보스 즉시 소환'], ['dungeon', '던전 횟수 초기화'], ['dayNight', '낮/밤 전환'], ['passMax', '시즌 패스 만렙'], ['attend', '출석 초기화']]],
  ];

  UI.OPENERS.admin = () => {
    const { el, body } = UI.makePanel(`${ico('crown')} 운영자 모드`);
    el.classList.add('gm-panel');
    el.querySelector('.panel-head img').style.cssText = 'width:22px;vertical-align:-4px;margin-right:4px';
    const render = () => {
      const p = Game.player, g = gm(p);
      body.innerHTML = `<p class="gm-warn">운영자 전용 기능입니다. 변경 사항은 즉시 적용되고 저장됩니다.</p>
        <div class="gm-now">다이아 <b>${U.fmt(p.s.dia)}</b> · 아데나 <b>${U.fmt(p.s.gold)}</b> · 소환권 <b>${p.count('ticket')}</b> · Lv.<b>${p.s.lv}</b></div>` +
        SECTIONS.map(([title, btns]) => `<div class="gm-sec"><h4>${title}</h4><div class="gm-btns">${btns.map(([id, label, flag]) =>
          `<button class="${flag ? (g[flag] ? 'gold-btn' : 'dark-btn') : 'dark-btn'}" data-gm="${id}">${label}${flag ? (g[flag] ? ' ON' : ' OFF') : ''}</button>`).join('')}</div></div>`).join('') +
        `<div class="gm-sec"><h4>직접 입력</h4><div class="gm-btns">
          <input id="gm-dia" type="number" min="0" placeholder="다이아 수량"><button class="dark-btn" data-gm-in="dia">다이아 지급</button>
          <input id="gm-lv" type="number" min="1" max="${D.MAX_LV}" placeholder="레벨 (1~${D.MAX_LV})"><button class="dark-btn" data-gm-in="lv">레벨 설정</button></div></div>`;
      body.querySelectorAll('input').forEach((i) => i.addEventListener('keydown', (e) => e.stopPropagation()));
    };
    body.onclick = (e) => {
      const p = Game.player;
      const b = e.target.closest('[data-gm]');
      if (b) { done(ACTIONS[b.dataset.gm](p)); render(); return; }
      const inp = e.target.closest('[data-gm-in]');
      if (inp) {
        if (inp.dataset.gmIn === 'dia') {
          const n = Math.floor(+body.querySelector('#gm-dia').value);
          if (!(n > 0)) return UI.toast('수량을 입력하세요.');
          p.s.dia += Math.min(n, 1e9); done(`다이아 ${U.fmt(Math.min(n, 1e9))} 지급`);
        } else {
          const n = Math.floor(+body.querySelector('#gm-lv').value);
          if (!(n >= 1)) return UI.toast('레벨을 입력하세요.');
          setLevel(p, n); done(`레벨 ${p.s.lv}로 설정`);
        }
        render();
      }
    };
    render();
    return { rerender: render };
  };

  return { gm };
})();
