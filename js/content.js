'use strict';
// Meta systems: attendance event, season pass, achievements, item collection, guilds, boss timer.
const Content = (() => {
  const { esc, ico } = UI;
  const today = () => new Date().toDateString();

  // ---------------------------------------------------------------- data
  const ATTEND = [
    { items: { hp_s: 50 }, label: '체력 회복제 50' },
    { gold: 10000, label: '아데나 10,000' },
    { items: { ticket: 1 }, label: '초월 소환권 1' },
    { items: { sc_armor: 1 }, label: '갑옷 마법 주문서 1' },
    { dia: 150, label: '다이아 150' },
    { items: { sc_weapon: 1 }, label: '무기 마법 주문서 1' },
    { items: { ticket: 5 }, label: '초월 소환권 5' },
  ];
  const PASS_TIERS = 30, PASS_STEP = 25, PASS_PRICE = 1000;
  const passReward = (i, prem) => {
    const n = i + 1;
    if (!prem) {
      if (n % 10 === 0) return { items: { ticket: 2 }, label: '소환권 2', icon: 'ticket' };
      if (n % 5 === 0) return { items: { sc_armor: 1 }, label: '갑옷 주문서', icon: 'scroll-armor' };
      if (n % 2 === 0) return { items: { hp_m: 10 }, label: '고급 물약 10', icon: 'pot-orange' };
      return { gold: 2000 * n, label: `아데나 ${U.fmt(2000 * n)}`, icon: 'gold' };
    }
    if (n === PASS_TIERS) return { legend: true, label: '전설 초월 카드', icon: 'transcend' };
    if (n % 10 === 0) return { items: { ticket: 5 }, label: '소환권 5', icon: 'ticket' };
    if (n % 5 === 0) return { items: { sc_weapon: 1 }, label: '무기 주문서', icon: 'scroll-weapon' };
    if (n % 3 === 0) return { items: { ticket: 1 }, label: '소환권 1', icon: 'ticket' };
    return { dia: 30, label: '다이아 30', icon: 'diamond' };
  };
  const wpnEn = (p) => Math.max(0, ...p.s.inv.filter((i) => D.ITEMS[i.id].kind === 'weapon').map((i) => i.en || 0));
  const ACH = [
    { id: 'k100', name: '사냥꾼', desc: '몬스터 100마리 처치', need: 100, cur: (p) => p.s.kills, dia: 50 },
    { id: 'k1000', name: '학살자', desc: '몬스터 1,000마리 처치', need: 1000, cur: (p) => p.s.kills, dia: 200 },
    { id: 'k5000', name: '전장의 지배자', desc: '몬스터 5,000마리 처치', need: 5000, cur: (p) => p.s.kills, dia: 500 },
    { id: 'lv10', name: '성장의 시작', desc: '레벨 10 달성', need: 10, cur: (p) => p.s.lv, dia: 50 },
    { id: 'lv20', name: '숙련자', desc: '레벨 20 달성', need: 20, cur: (p) => p.s.lv, dia: 100 },
    { id: 'lv30', name: '베테랑', desc: '레벨 30 달성', need: 30, cur: (p) => p.s.lv, dia: 200 },
    { id: 'lv40', name: '영웅', desc: '레벨 40 달성', need: 40, cur: (p) => p.s.lv, dia: 400 },
    { id: 'en7', name: '강화의 달인', desc: '무기 +7 강화 성공', need: 7, cur: wpnEn, dia: 150 },
    { id: 'en9', name: '신의 손', desc: '무기 +9 강화 성공', need: 9, cur: wpnEn, dia: 500 },
    { id: 'card5', name: '수집가', desc: '초월 카드 5종 보유', need: 5, cur: (p) => Object.keys(p.s.cards).length, dia: 50 },
    { id: 'card15', name: '영혼의 수집가', desc: '초월 카드 15종 보유', need: 15, cur: (p) => Object.keys(p.s.cards).length, dia: 300 },
    { id: 'boss1', name: '보스 사냥꾼', desc: '필드 보스 처치', need: 1, cur: (p) => p.s.bossKills, dia: 100 },
    { id: 'boss10', name: '보스 학살자', desc: '필드 보스 10회 처치', need: 10, cur: (p) => p.s.bossKills, dia: 500 },
    { id: 'dg1', name: '균열 돌파', desc: '이클립스 균열 클리어', need: 1, cur: (p) => p.s.dungeon.clears || 0, dia: 100 },
    { id: 'dg10', name: '균열 정복자', desc: '이클립스 균열 10회 클리어', need: 10, cur: (p) => p.s.dungeon.clears || 0, dia: 400 },
    { id: 'rich', name: '백만장자', desc: '아데나 1,000,000 보유', need: 1000000, cur: (p) => p.s.gold, dia: 200 },
  ];
  // Item collections. A slot is an item id, optionally with a minimum enchant ('w_sword3+7'). Weapon slots
  // take any class's version of that weapon (drops always come in the player's own class).
  // cat: weapon | armor | enchant | set | misc | boss
  const COLL = [
    { id: 'c1', cat: 'weapon', name: '초보 모험가의 무기', items: ['w_sword1', 'w_bow1', 'w_staff1'], bonus: { atk: 2 } },
    { id: 'c5', cat: 'weapon', name: '강철의 기사', items: ['w_sword2', 'a_2'], bonus: { atk: 3, def: 2 } },
    { id: 'c6', cat: 'weapon', name: '숲과 마나', items: ['w_bow2', 'w_staff2'], bonus: { atkSpd: 3, castSpd: 3 } },
    { id: 'c7', cat: 'weapon', name: '미스릴 수집가', items: ['w_sword3', 'w_bow3', 'w_staff3'], bonus: { atk: 6 } },
    { id: 'w1', cat: 'weapon', name: '흑요석의 날', items: ['w_sword4', 'w_sword4'], bonus: { atk: 8, crit: 1 } },
    { id: 'w2', cat: 'weapon', name: '무기 장인의 진열장', items: ['w_sword1', 'w_sword2', 'w_sword3', 'w_sword4'], bonus: { atk: 5, atkSpd: 3, castSpd: 3 } },
    { id: 'w3', cat: 'weapon', name: '전설의 무기고', items: ['w_sword5', 'w_sword6'], bonus: { atk: 15, crit: 3 } },
    { id: 'c2', cat: 'armor', name: '수련자의 장비', items: ['a_1', 'r_1'], bonus: { def: 2, hp: 30 } },
    { id: 'c8', cat: 'armor', name: '판금의 수호', items: ['a_3', 'r_2'], bonus: { def: 5, hp: 150 } },
    { id: 'c9', cat: 'armor', name: '영웅의 증표', items: ['a_4', 'r_3'], bonus: { atk: 8, dmgRed: 3 } },
    { id: 'a1', cat: 'armor', name: '갑옷 진열장', items: ['a_1', 'a_2', 'a_3'], bonus: { def: 4, hp: 120 } },
    { id: 'a2', cat: 'armor', name: '용의 비늘', items: ['a_4', 'a_4'], bonus: { def: 6, hp: 250 } },
    { id: 'a3', cat: 'armor', name: '불타는 갑주', items: ['a_5'], bonus: { hp: 400, dmgRed: 3 } },
    { id: 'a4', cat: 'armor', name: '반지 수집가', items: ['r_1', 'r_2', 'r_3'], bonus: { atk: 4, def: 3, hp: 100 } },
    { id: 'a5', cat: 'armor', name: '장신구 명장', items: ['r_r', 'r_h', 'r_l'], bonus: { atk: 10, crit: 5 } },
    { id: 'e1', cat: 'enchant', name: '+3 강화 입문', items: ['w_sword1+3', 'a_1+3'], bonus: { atk: 3, def: 2 } },
    { id: 'e2', cat: 'enchant', name: '+5 강철 연마', items: ['w_sword2+5', 'a_2+5'], bonus: { atk: 6, hp: 120 } },
    { id: 'e3', cat: 'enchant', name: '+6 안전 강화의 달인', items: ['w_sword3+6', 'a_3+4'], bonus: { atk: 10, def: 5 } },
    { id: 'e4', cat: 'enchant', name: '+7 도전자', items: ['w_sword3+7'], bonus: { atk: 8, crit: 4 } },
    { id: 'e5', cat: 'enchant', name: '+7 영웅의 칼날', items: ['w_sword4+7', 'a_4+5'], bonus: { atk: 15, hp: 300 } },
    { id: 'e6', cat: 'enchant', name: '+8 전설의 연마', items: ['w_sword5+8'], bonus: { atk: 25, crit: 5 } },
    { id: 'e7', cat: 'enchant', name: '+6 강철 갑옷 장인', items: ['a_2+6', 'a_3+6'], bonus: { def: 10, hp: 300, dmgRed: 2 } },
    { id: 'e8', cat: 'enchant', name: '+9 신화의 경지', items: ['w_sword6+9'], bonus: { atk: 40, atkSpd: 8, castSpd: 8, crit: 5 } },
    { id: 'e9', cat: 'enchant', name: '+7 은빛 기사단', items: ['w_sword_r1+7', 'a_r1+5'], bonus: { atk: 12, hp: 200 } },
    { id: 'e10', cat: 'enchant', name: '+8 핏빛 군단', items: ['w_sword_h1+8', 'a_h1+6'], bonus: { atk: 22, hp: 450, crit: 3 } },
    { id: 's1', cat: 'set', name: '은빛 기사단 전시', items: ['w_sword_r1', 'a_r1'], bonus: { atk: 5, hp: 150 } },
    { id: 's2', cat: 'set', name: '폭풍의 흔적', items: ['w_sword_r2', 'a_r2'], bonus: { atkSpd: 4, castSpd: 4, moveSpd: 3 } },
    { id: 's3', cat: 'set', name: '핏빛 군단의 깃발', items: ['w_sword_h1', 'a_h1'], bonus: { atk: 10, hp: 300 } },
    { id: 's4', cat: 'set', name: '심연의 문장', items: ['w_sword_h2', 'a_h2'], bonus: { def: 10, dmgRed: 3 } },
    { id: 's5', cat: 'set', name: '천상의 심판 성물', items: ['w_sword_l1', 'a_l1', 'r_l'], bonus: { atk: 25, hp: 800, crit: 5 } },
    { id: 'c3', cat: 'misc', name: '연금술사의 선반', items: ['hp_s', 'hp_m', 'hp_l', 'mp_s', 'haste'], bonus: { hp: 50, mp: 30 } },
    { id: 'c4', cat: 'misc', name: '주문서 수집가', items: ['tp_town', 'sc_weapon', 'sc_armor'], bonus: { crit: 2 } },
    { id: 'm1', cat: 'misc', name: '회복의 달인', items: ['hp_l', 'hp_l', 'hp_l', 'hp_l', 'hp_l'], bonus: { hp: 150, mp: 50 } },
    { id: 'm2', cat: 'misc', name: '강화 재료 창고', items: ['sc_weapon', 'sc_weapon', 'sc_armor', 'sc_armor'], bonus: { atk: 4, def: 4 } },
    { id: 'm3', cat: 'misc', name: '여행자의 가방', items: ['tp_town', 'tp_town', 'tp_town', 'haste', 'haste'], bonus: { moveSpd: 5, eva: 20 } },
    { id: 'm4', cat: 'misc', name: '초월의 인장', items: ['ticket', 'ticket', 'ticket'], bonus: { expPct: 5 } },
    { id: 'b1', cat: 'boss', name: '뱀파이어 군주의 유산', items: ['w_sword4', 'a_4', 'r_3'], bonus: { atk: 8, dmgRed: 2 } },
    { id: 'b2', cat: 'boss', name: '미노타우르스의 보물', items: ['w_sword5', 'a_4', 'r_h'], bonus: { hp: 300, def: 6 } },
    { id: 'b3', cat: 'boss', name: '서리 거인의 결정', items: ['w_sword_h2', 'a_h2', 'r_h'], bonus: { atk: 12, hp: 250, eva: 30 } },
    { id: 'b4', cat: 'boss', name: '화염 군주의 전리품', items: ['w_sword6', 'a_5', 'r_l'], bonus: { atk: 20, hp: 400, crit: 3 } },
  ];
  const COLL_CATS = [['all', '전체'], ['weapon', '무기'], ['armor', '방어구·장신구'], ['enchant', '강화'], ['set', '세트'], ['misc', '소모품'], ['boss', '보스 전리품']];
  // slot 'w_bow3+7' -> { id, en, fam }: weapons match by family (any class), everything else by id
  const fam = (id) => id.replace(/^w_(sword|bow|staff)/, 'w_*');
  const parseSlot = (slot) => { const [id, en] = slot.split('+'); return { id, en: +en || 0, fam: fam(id) }; };
  // the unequipped bag item that fills a slot, preferring the lowest enchant that still qualifies
  function candidate(p, slot) {
    const q = parseSlot(slot), eq = Object.values(p.s.equip);
    return p.s.inv.filter((i) => fam(i.id) === q.fam && (i.en || 0) >= q.en && !eq.includes(i.uid))
      .sort((a, b) => (a.en || 0) - (b.en || 0))[0];
  }
  // registered slots are stored as slot indices (older saves stored item ids)
  function regOf(p, c) {
    let r = p.s.coll[c.id] || (p.s.coll[c.id] = []);
    if (r.some((x) => typeof x === 'string')) {
      const idx = [];
      for (const id of r) { const k = c.items.findIndex((it, i) => !idx.includes(i) && fam(it.split('+')[0]) === fam(id)); if (k >= 0) idx.push(k); }
      r = p.s.coll[c.id] = idx;
    }
    return r;
  }
  const complete = (p, c) => regOf(p, c).length === c.items.length;
  const GUILDS = [
    { name: '용맹', desc: '공격에 특화된 전투 혈맹', bonus: { atk: 4 }, label: '공격력 +4' },
    { name: '붉은매', desc: '빠른 성장을 추구하는 사냥 혈맹', bonus: { expPct: 10 }, label: '획득 경험치 +10%' },
    { name: '천상', desc: '서로를 지키는 수호 혈맹', bonus: { hp: 120 }, label: '최대 HP +120' },
    { name: '흑기사단', desc: '보스 레이드 전문 혈맹', bonus: { atkSpd: 6 }, label: '공격 속도 +6%' },
    { name: '바람', desc: '자유로운 모험가들의 혈맹', bonus: { moveSpd: 6, eva: 20 }, label: '이동 속도 +6%, 회피 +20' },
  ];

  // ---------------------------------------------------------------- state helpers
  function migrate(s) {
    s.attend = s.attend || { day: '', count: 0 };
    s.pass = s.pass || { xp: 0, premium: false, free: [], prem: [] };
    s.ach = s.ach || {};
    s.coll = s.coll || {};
    s.guild = s.guild || '';
    s.clans = s.clans || {}; // clan level per clan name: { lv, xp, day, don }
    s.myClan = s.myClan || null; // { name, color } of a clan the player founded
    s.clanBots = s.clanBots || []; // bots recruited into it (their clan isn't saved on the bots)
    s.dungeon = s.dungeon || { day: '', used: 0, clears: 0 };
    s.bossKills = s.bossKills || 0;
    // v2 quest list removed the old #3 (초월 카드 장착) quest: shift saves past it
    if (!s.qv) { if (s.quest > 2) s.quest--; else if (s.quest === 2) s.qprog = 0; s.qv = 2; }
    // v3: story chapters added report quests between chapters
    if (s.qv === 2) { s.quest = s.quest >= 23 ? D.QUESTS.length : D.QUEST_V2_TO_V3(s.quest); s.qv = 3; s.introSeen = true; }
  }
  // ---------------------------------------------------------------- clans
  // clan level (1~10) grows from kills, bosses, donations and sieges; each level adds attack and HP.
  // A founded clan has its own name and colour and recruits bots; holding 아스텔라 성 adds the castle buff.
  const CLAN_MAX = 10, DONATE = { gold: 10000, xp: 150, perDay: 5 }, FOUND = { gold: 100000, lv: 20 };
  const clanNeed = (lv) => 300 * lv * lv;
  const CASTLE_BONUS = { atk: 12, hp: 400, def: 6 };
  function allGuilds(p) {
    const own = p.s.myClan && { name: p.s.myClan.name, desc: '내가 세운 혈맹', bonus: { atk: 3, hp: 80 }, label: '공격력 +3, 최대 HP +80', own: true };
    return own ? [own, ...GUILDS] : GUILDS;
  }
  function clanInfo(p) {
    if (!p.s.guild) return null;
    const c = p.s.clans[p.s.guild] = p.s.clans[p.s.guild] || { lv: 1, xp: 0, day: '', don: 0 };
    return c;
  }
  const clanLvBonus = (lv) => ({ atk: (lv - 1) * 2, hp: (lv - 1) * 40 });
  function clanXp(p, n) {
    const c = clanInfo(p);
    if (!c || c.lv >= CLAN_MAX) return;
    c.xp += n;
    let up = false;
    while (c.lv < CLAN_MAX && c.xp >= clanNeed(c.lv)) { c.xp -= clanNeed(c.lv); c.lv++; up = true; }
    if (up) {
      UI.announce(`<b>[${esc(p.s.guild)}]</b> 혈맹이 <em>${c.lv}레벨</em>이 되었습니다!`);
      U.sfx.success(); p.recalc(); UI.refreshHud();
    }
  }
  // bots don't save their clan: put recruited ones back into the player's founded clan
  function syncClanBots(p) {
    if (!p.s.myClan) return;
    for (const b of Game.bots) if (p.s.clanBots.includes(b.name)) b.guild = p.s.myClan.name;
  }
  // extra stats from collections + guild, consumed by Player.recalc
  function bonuses(p) {
    const out = [];
    for (const c of COLL) if (complete(p, c)) out.push(c.bonus);
    const g = allGuilds(p).find((x) => x.name === p.s.guild);
    if (g) { out.push(g.bonus); out.push(clanLvBonus(clanInfo(p).lv)); }
    if (g && Siege.isOwner(p)) out.push(CASTLE_BONUS);
    return out;
  }
  function give(p, r) {
    const parts = [];
    if (r.gold) { p.s.gold += r.gold; parts.push(`아데나 ${U.fmt(r.gold)}`); }
    if (r.dia) { p.s.dia += r.dia; parts.push(`다이아 ${r.dia}`); }
    if (r.items) for (const id in r.items) { p.addItem(id, r.items[id]); parts.push(`${D.ITEMS[id].name} ${r.items[id]}`); }
    if (r.legend) {
      const c = Transcend.randomCard(4); Transcend.addCard(p, c.id); parts.push(`[전설] ${c.name}`);
      UI.announce(`<b>${esc(p.name)}</b>님이 <em class="legend">${esc(c.name)}</em> 초월을 획득했습니다.`);
    }
    U.sfx.coin();
    UI.toast('획득: ' + parts.join(', '), '#ffe38a');
    UI.chat('[보상] ' + parts.join(', '), 'sys');
    p.recalc(); UI.refreshAll();
  }
  function passXp(p, n) {
    const before = Math.floor(p.s.pass.xp / PASS_STEP);
    p.s.pass.xp = Math.min(PASS_TIERS * PASS_STEP, p.s.pass.xp + n);
    const after = Math.floor(p.s.pass.xp / PASS_STEP);
    if (after > before) UI.toast(`시즌 패스 ${after}단계 달성!`, '#c79cff');
  }
  const passTier = (p) => Math.floor(p.s.pass.xp / PASS_STEP);
  const attendReady = (p) => p.s.attend.day !== today();
  const passReady = (p) => {
    const t = passTier(p);
    for (let i = 0; i < t; i++) {
      if (!p.s.pass.free.includes(i)) return true;
      if (p.s.pass.premium && !p.s.pass.prem.includes(i)) return true;
    }
    return false;
  };
  const achReady = (p) => ACH.some((a) => !p.s.ach[a.id] && a.cur(p) >= a.need);

  // what needs doing, per menu entry: a red dot shows only for these (a reward waiting or an action to take)
  function menuDots(p) {
    const qp = Quests.progress(p);
    const equipReg = COLL.some((c) => !complete(p, c) && c.items.some((slot, i) => D.isEquip(D.ITEMS[parseSlot(slot).id]) && !regOf(p, c).includes(i) && candidate(p, slot)));
    return {
      quests: qp.done && !qp.claimed,
      mail: !p.s.mailClaimed,
      achievement: achReady(p),
      event: attendReady(p),
      pass: passReady(p),
      skills: Skills.anyChoice(p),
      collection: equipReg,
      transcend: !p.s.card && Object.keys(p.s.cards || {}).length > 0,
      pet: !p.s.pet && Object.keys(p.s.pets || {}).length > 0,
      mount: !p.s.mount && Object.keys(p.s.mounts || {}).length > 0,
      guild: Siege.isOwner(p) && Siege.castle(p).taxDay !== today(),
      siege: Siege.isOwner(p) && Siege.castle(p).taxDay !== today(),
    };
  }
  // red dots on the top menu
  function badges(game) {
    const p = game.player; if (!p) return;
    const set = (act, on) => {
      const b = document.querySelector(`#top-menu [data-act="${act}"]`); if (!b) return;
      let d = b.querySelector('.dot');
      if (on && !d) { d = document.createElement('i'); d.className = 'dot'; b.appendChild(d); }
      if (!on && d) d.remove();
    };
    set('event', attendReady(p)); set('pass', passReady(p)); set('skills', Skills.anyChoice(p));
    const dots = menuDots(p);
    set('menu', Object.values(dots).some(Boolean));
  }

  // ---------------------------------------------------------------- panels
  const O = UI.OPENERS;
  O.event = () => {
    const { body } = UI.makePanel('이벤트 · 7일 출석 체크');
    const render = () => {
      const p = Game.player, a = p.s.attend, ready = attendReady(p);
      const idx = a.count % 7;
      body.innerHTML = `<p style="margin-top:0;color:#a39a88">매일 접속하고 보상을 받으세요! 7일마다 보상이 반복됩니다.</p>
        <div class="attend-grid">${ATTEND.map((r, i) => {
          const done = i < idx || (!ready && i === idx - 0 && false);
          const cur = ready && i === idx;
          return `<div class="attend ${i < idx ? 'done' : ''} ${cur ? 'cur' : ''}"><b>${i + 1}일차</b>${ico(r.items ? D.ITEMS[Object.keys(r.items)[0]].icon : r.dia ? 'diamond' : 'gold')}<span>${r.label}</span>${i < idx ? '<i>✔</i>' : ''}</div>`;
          void done;
        }).join('')}</div>
        <div style="text-align:center;margin-top:16px">${ready ? '<button class="gold-btn" data-claim>출석 보상 받기</button>' : '<span class="sub" style="color:#888">오늘은 이미 출석했습니다. 내일 다시 오세요!</span>'}</div>`;
    };
    body.onclick = (e) => {
      if (!e.target.closest('[data-claim]')) return;
      const p = Game.player;
      if (!attendReady(p)) return;
      const r = ATTEND[p.s.attend.count % 7];
      p.s.attend.day = today(); p.s.attend.count++;
      give(p, r); render();
    };
    render();
    return { rerender: render };
  };

  O.pass = () => {
    const { el, body } = UI.makePanel('시즌 패스 · 이클립스의 서막');
    el.style.width = 'min(900px, 96vw)';
    const render = () => {
      const p = Game.player, ps = p.s.pass, tier = passTier(p);
      const pct = ((ps.xp % PASS_STEP) / PASS_STEP) * 100;
      body.innerHTML = `<div class="pass-top"><div><b style="font-size:20px;color:#e9d7a8">Lv.${tier}</b> / ${PASS_TIERS}
          <div class="tbar" style="width:220px;margin-top:4px"><i style="width:${tier >= PASS_TIERS ? 100 : pct}%;background:linear-gradient(#c79cff,#6b3fb0)"></i></div>
          <span class="sub" style="color:#888">몬스터 처치 +1 · 보스 +30 · 던전 클리어 +40 · 퀘스트 +10 (단계당 ${PASS_STEP})</span></div>
          ${ps.premium ? '<span style="color:#ffd76a;font-weight:700">★ 프리미엄 활성화</span>' : `<button class="gold-btn" data-prem>${ico('diamond', 'dia')} ${U.fmt(PASS_PRICE)} 프리미엄 활성화</button>`}
          <button class="dark-btn" data-all>모두 받기</button></div>
        <div class="pass-track">${Array.from({ length: PASS_TIERS }, (_, i) => {
          const f = passReward(i, false), pr = passReward(i, true);
          const open = i < tier;
          const cell = (r, claimed, lock, kind) => `<div class="pass-cell ${claimed ? 'got' : open && !lock ? 'ready' : ''} ${lock ? 'lock' : ''}" data-i="${i}" data-k="${kind}">${ico(r.icon, r.icon === 'diamond' ? 'dia' : '')}<span>${r.label}</span>${claimed ? '<i>✔</i>' : lock ? '<i>🔒</i>' : ''}</div>`;
          return `<div class="pass-col ${open ? 'open' : ''}"><div class="pass-lv">${i + 1}</div>${cell(f, ps.free.includes(i), false, 'free')}${cell(pr, ps.prem.includes(i), !ps.premium, 'prem')}</div>`;
        }).join('')}</div>`;
      body.querySelectorAll('button img').forEach((i) => { i.style.width = '16px'; i.style.verticalAlign = '-3px'; });
      const track = body.querySelector('.pass-track');
      track.scrollLeft = Math.max(0, (tier - 3) * 104);
    };
    const claim = (i, k) => {
      const p = Game.player, ps = p.s.pass;
      if (i >= passTier(p)) return false;
      if (k === 'free' && !ps.free.includes(i)) { ps.free.push(i); give(p, passReward(i, false)); return true; }
      if (k === 'prem' && ps.premium && !ps.prem.includes(i)) { ps.prem.push(i); give(p, passReward(i, true)); return true; }
      return false;
    };
    body.onclick = (e) => {
      const p = Game.player;
      if (e.target.closest('[data-prem]')) {
        if (p.s.dia < PASS_PRICE) return UI.toast('다이아가 부족합니다.', '#ff8a80');
        p.s.dia -= PASS_PRICE; p.s.pass.premium = true; U.sfx.success(); UI.toast('프리미엄 패스가 활성화되었습니다!', '#ffd76a'); return render();
      }
      if (e.target.closest('[data-all]')) {
        let n = 0;
        for (let i = 0; i < passTier(p); i++) { if (claim(i, 'free')) n++; if (claim(i, 'prem')) n++; }
        if (!n) UI.toast('받을 보상이 없습니다.');
        return render();
      }
      const c = e.target.closest('[data-i]');
      if (c && claim(+c.dataset.i, c.dataset.k)) render();
    };
    render();
    return { rerender: render };
  };

  O.achievement = () => {
    const { body } = UI.makePanel('업적');
    const render = () => {
      const p = Game.player;
      const list = ACH.slice().sort((a, b) => (!!p.s.ach[a.id] - !!p.s.ach[b.id]) || ((b.cur(p) >= b.need) - (a.cur(p) >= a.need)));
      body.innerHTML = `<p style="margin-top:0;color:#a39a88">달성 ${ACH.filter((a) => p.s.ach[a.id]).length} / ${ACH.length}</p>` + list.map((a) => {
        const cur = Math.min(a.cur(p), a.need), done = p.s.ach[a.id], ok = cur >= a.need;
        return `<div class="list-row ${done ? 'done' : ''}"><div style="display:flex;gap:10px;align-items:center">${ico('achievement')}<div><b>${a.name}</b><div class="sub">${a.desc} · 보상 다이아 ${a.dia}</div>
          <div class="tbar" style="width:180px;margin-top:3px"><i style="width:${(cur / a.need) * 100}%;background:linear-gradient(#ffd76a,#a07a20)"></i></div></div></div>
          <div>${done ? '완료' : ok ? `<button class="gold-btn" data-ach="${a.id}">받기</button>` : `<span class="sub">${U.fmt(cur)}/${U.fmt(a.need)}</span>`}</div></div>`;
      }).join('');
      body.querySelectorAll('.list-row > div > img').forEach((i) => { i.style.width = '32px'; });
    };
    body.onclick = (e) => {
      const b = e.target.closest('[data-ach]'); if (!b) return;
      const p = Game.player, a = ACH.find((x) => x.id === b.dataset.ach);
      if (p.s.ach[a.id] || a.cur(p) < a.need) return;
      p.s.ach[a.id] = true; give(p, { dia: a.dia });
      UI.announce(`<b>${esc(p.name)}</b>님이 업적 <em>[${esc(a.name)}]</em>을(를) 달성했습니다!`);
      render();
    };
    render();
    return { rerender: render };
  };

  let collCat = 'all', collReady = false;
  O.collection = () => {
    const { el, body } = UI.makePanel('수집');
    el.style.width = 'min(760px, 96vw)';
    const bonusText = (b) => Object.entries(b).map(([k, v]) => `${D.STAT_NAMES[k][0]} +${v}${D.STAT_NAMES[k][1]}`).join(', ');
    const render = () => {
      const p = Game.player;
      const done = COLL.filter((c) => complete(p, c));
      const total = {};
      for (const c of done) for (const k in c.bonus) total[k] = (total[k] || 0) + c.bonus[k];
      const canReg = (c) => !complete(p, c) && c.items.some((slot, i) => !regOf(p, c).includes(i) && candidate(p, slot));
      const list = COLL.filter((c) => (collCat === 'all' || c.cat === collCat) && (!collReady || canReg(c)));
      const readyN = COLL.filter(canReg).length;
      body.innerHTML = `<div class="coll-summary"><div><b>수집 ${done.length} / ${COLL.length}</b> <span class="sub">완성한 수집의 효과는 영구 적용됩니다.</span></div>
          <div class="coll-total">${Object.keys(total).length ? bonusText(total) : '<span class="sub">아직 완성한 수집이 없습니다.</span>'}</div></div>
        <div class="coll-tabs">${COLL_CATS.map(([k, n]) => `<button data-cat="${k}" class="${collCat === k ? 'on' : ''}">${n}</button>`).join('')}
          <label class="coll-ready"><input type="checkbox" data-ready ${collReady ? 'checked' : ''}> 등록 가능만 (${readyN})</label>
          <button class="gold-btn" data-regall ${readyN ? '' : 'disabled'}>모두 등록</button></div>
        <p class="sub" style="margin:6px 0 8px">등록한 아이템은 소모됩니다. '모두 등록'은 장비만 등록합니다. 장착 중인 장비는 등록되지 않으며, <b>+숫자</b> 칸은 그 이상 강화된 장비만 등록할 수 있습니다. 무기 칸은 내 직업의 같은 등급 무기로 채울 수 있습니다.</p>` +
        list.map((c) => {
          const reg = regOf(p, c), full = reg.length === c.items.length;
          return `<div class="coll ${full ? 'complete' : ''}"><div class="coll-head"><b>${c.name}</b><span class="${full ? 'g1' : 'sub'}">${full ? '완성 · ' : `${reg.length}/${c.items.length} · `}${bonusText(c.bonus)}</span></div>
            <div class="coll-items">${c.items.map((slot, i) => {
              const q = parseSlot(slot), it = D.ITEMS[D.forClass(q.id, p.cls)], got = reg.includes(i), cand = !got && candidate(p, slot);
              return `<div class="cell bg${it.grade} ${got ? '' : 'dim'}" title="${esc((q.en ? '+' + q.en + ' 이상 ' : '') + it.name)}" ${cand ? `data-reg="${c.id}:${i}"` : ''}>${ico(it.icon)}${q.en ? `<span class="en">+${q.en}</span>` : ''}${got ? '<span class="eq">✔</span>' : cand ? '<span class="c" style="color:#7ee07e">등록</span>' : ''}</div>`;
            }).join('')}</div></div>`;
        }).join('');
    };
    const register = (p, c, i) => {
      const it = candidate(p, c.items[i]);
      if (!it || regOf(p, c).includes(i)) return false;
      p.removeItem(it.uid);
      p.s.coll[c.id].push(i);
      return true;
    };
    body.onclick = (e) => {
      const p = Game.player;
      const cat = e.target.closest('[data-cat]'); if (cat) { collCat = cat.dataset.cat; U.sfx.ui(); return render(); }
      if (e.target.closest('[data-ready]')) { collReady = e.target.checked; return render(); }
      if (e.target.closest('[data-regall]')) {
        // equipment only, and the steepest enchant requirements first so a +7 weapon lands in a +7 slot
        const tasks = [];
        for (const c of COLL) { if (complete(p, c)) continue; const r = regOf(p, c); c.items.forEach((slot, i) => { const q = parseSlot(slot); if (!r.includes(i) && D.isEquip(D.ITEMS[q.id]) && candidate(p, slot)) tasks.push([c, i, q.en]); }); }
        if (!tasks.length) return UI.toast('등록할 수 있는 장비가 없습니다. 물약·주문서·소환권은 칸을 눌러 직접 등록하세요.', '#ffd76a');
        tasks.sort((x, y) => y[2] - x[2]);
        return UI.ask("등록 가능한 장비를 모두 등록합니다.\n(물약·주문서·소환권은 직접 등록) 등록한 아이템은 사라집니다.", () => {
          const before = COLL.filter((c) => complete(p, c)).length;
          let n = 0;
          for (const [c, i] of tasks) if (register(p, c, i)) n++;
          const fin = COLL.filter((c) => complete(p, c)).length - before;
          if (n) { fin ? U.sfx.legend() : U.sfx.success(); UI.toast(`${n}개 등록${fin ? ` · 수집 ${fin}개 완성!` : ''}`, '#7ee07e'); p.recalc(); UI.refreshHud(); }
          render();
        }, '모두 등록');
      }
      const b = e.target.closest('[data-reg]'); if (!b) return;
      const [cid, i] = b.dataset.reg.split(':');
      const c = COLL.find((x) => x.id === cid);
      regOf(p, c);
      if (!register(p, c, +i)) return;
      if (complete(p, c)) { U.sfx.legend(); UI.toast(`수집 완성: ${c.name}`, '#7ee07e'); } else U.sfx.success();
      p.recalc(); UI.refreshHud(); render();
    };
    render();
    return { rerender: render };
  };

  O.guild = () => {
    const { body } = UI.makePanel('혈맹');
    const render = () => {
      const p = Game.player;
      syncClanBots(p);
      const members = (g) => Game.bots.filter((b) => b.guild === g);
      const list = allGuilds(p);
      const cur = list.find((g) => g.name === p.s.guild);
      let html = '';
      if (cur) {
        const c = clanInfo(p), need = clanNeed(c.lv), lb = clanLvBonus(c.lv), own = cur.own;
        const donLeft = c.day === new Date().toDateString() ? DONATE.perDay - c.don : DONATE.perDay;
        const mem = members(cur.name);
        const castle = Siege.isOwner(p);
        html += `<div class="clan-card"><div style="display:flex;gap:12px;align-items:center">
            <div class="castle-card" style="margin:0;padding:0;border:0;background:none"><div class="flag" style="background:${Siege.colorOf(cur.name)}"></div></div>
            <div style="flex:1"><b style="font-size:17px;color:var(--gold)">[${esc(cur.name)}]</b> <span class="sub">Lv.${c.lv}${castle ? ' · 🏰 아스텔라 성주' : ''} · 멤버 ${mem.length + 1}명</span>
              <div class="xp"><i style="width:${c.lv >= CLAN_MAX ? 100 : Math.round((c.xp / need) * 100)}%"></i></div>
              <div class="sub">${c.lv >= CLAN_MAX ? '최대 레벨' : `혈맹 경험치 ${U.fmt(c.xp)} / ${U.fmt(need)} (사냥 1, 보스 60, 기부 ${DONATE.xp}, 공성 승리 800)`}</div>
              <div class="sub" style="color:#7ee07e">혈맹 버프: ${cur.label}${c.lv > 1 ? `, 레벨 보너스 공격력 +${lb.atk} · HP +${lb.hp}` : ''}${castle ? `, 성주 버프 공격력 +${CASTLE_BONUS.atk} · HP +${CASTLE_BONUS.hp} · 방어력 +${CASTLE_BONUS.def}` : ''}</div></div></div>
          <div class="btns">
            <button class="gold-btn" data-donate ${donLeft > 0 ? '' : 'disabled'}>기부 ${U.fmt(DONATE.gold)} 아데나 (오늘 ${donLeft}회)</button>
            ${own ? `<button class="dark-btn" data-recruit>혈맹원 모집 (5,000 아데나)</button>` : ''}
            <button class="dark-btn" data-siege>공성전</button>
            ${own ? '<button class="red-btn" data-disband>해산</button>' : '<button class="red-btn" data-leave>탈퇴</button>'}
          </div>
          <div class="clan-members"><div><b style="color:#ffd76a">${own ? '군주' : '혈맹원'}</b> ${esc(p.name)} <span class="sub">Lv.${p.s.lv}</span></div>
            ${mem.slice(0, 15).map((b, i) => `<div>${!own && i === 0 ? '<b style="color:#ffd76a">군주</b> ' : ''}${esc(b.name)} <span class="sub">${b.classDef.name} Lv.${b.lv}</span></div>`).join('')}</div></div>`;
      } else {
        html += `<p style="margin-top:0;color:#a39a88">가입할 혈맹을 고르거나 새 혈맹을 세우세요. 혈맹마다 버프가 있고, 혈맹 레벨이 오를수록 강해집니다. 혈맹이 있어야 공성전에 참여할 수 있습니다.</p>`;
      }
      html += list.filter((g) => g.name !== p.s.guild).map((g) => `<div class="list-row"><div style="display:flex;gap:10px;align-items:center"><div style="width:14px;height:18px;background:${Siege.colorOf(g.name)};clip-path:polygon(0 0,100% 0,100% 80%,50% 100%,0 80%)"></div><div><b>${esc(g.name)}</b> <span class="sub">멤버 ${members(g.name).length}명${Siege.castle(p).owner === g.name ? ' · 🏰 성주 혈맹' : ''}</span><div class="sub">${g.desc} · 혈맹 버프: <span style="color:#7ee07e">${g.label}</span></div></div></div>
          <button class="dark-btn" data-join="${esc(g.name)}" ${p.s.guild ? 'disabled' : ''}>가입</button></div>`).join('');
      if (!p.s.guild && !p.s.myClan) html += `<div class="clan-card"><b>혈맹 창설</b> <span class="sub">Lv.${FOUND.lv} 이상 · ${U.fmt(FOUND.gold)} 아데나</span>
        <div class="clan-form"><input type="text" maxlength="6" placeholder="혈맹 이름 (2~6자)" data-cname><input type="color" value="#c0392b" data-ccolor><button class="gold-btn" data-found>창설</button></div></div>`;
      body.innerHTML = html;
    };
    body.onclick = (e) => {
      const p = Game.player, t = (sel) => e.target.closest(sel);
      if (t('[data-join]') && !p.s.guild) {
        p.s.guild = t('[data-join]').dataset.join; p.recalc(); U.sfx.success();
        UI.toast(`[${p.s.guild}] 혈맹에 가입했습니다!`, '#ffd76a');
        const mate = Game.bots.find((b) => b.guild === p.s.guild);
        if (mate) setTimeout(() => Game.say(mate, `${p.name}님 환영합니다~!`), 1200);
      } else if (t('[data-leave]')) return UI.ask('혈맹을 탈퇴할까요?', () => { p.s.guild = ''; p.recalc(); render(); UI.refreshHud(); }, '탈퇴');
      else if (t('[data-disband]')) return UI.ask('혈맹을 해산할까요? 모집한 혈맹원도 흩어집니다.', () => {
        for (const b of Game.bots) if (b.guild === p.s.myClan.name) b.guild = U.pick(D.GUILDS);
        delete p.s.clans[p.s.myClan.name]; p.s.myClan = null; p.s.clanBots = []; p.s.guild = ''; p.recalc(); render(); UI.refreshHud();
      }, '해산'); else if (t('[data-donate]')) {
        const c = clanInfo(p), today = new Date().toDateString();
        if (c.day !== today) { c.day = today; c.don = 0; }
        if (c.don >= DONATE.perDay) return UI.toast('오늘은 더 기부할 수 없습니다.');
        if (p.s.gold < DONATE.gold) return UI.toast('아데나가 부족합니다.', '#ff8a80');
        p.s.gold -= DONATE.gold; c.don++; U.sfx.coin();
        UI.toast(`혈맹 경험치 +${DONATE.xp}`, '#ffd76a'); clanXp(p, DONATE.xp);
      } else if (t('[data-recruit]')) {
        if (p.s.gold < 5000) return UI.toast('아데나가 부족합니다.', '#ff8a80');
        const cand = Game.bots.filter((b) => b.guild !== p.s.myClan.name);
        if (!cand.length) return UI.toast('더 모집할 사람이 없습니다.');
        const b = U.pick(cand);
        p.s.gold -= 5000; b.guild = p.s.myClan.name; p.s.clanBots.push(b.name); U.sfx.success();
        UI.toast(`${b.name}님이 혈맹에 합류했습니다!`, '#ffd76a');
        setTimeout(() => Game.say(b, U.pick(['잘 부탁드립니다 군주님!', '공성 언제 가요?', '열심히 하겠습니다 ㅎㅎ'])), 800);
      } else if (t('[data-found]')) {
        const name = body.querySelector('[data-cname]').value.trim(), color = body.querySelector('[data-ccolor]').value;
        if (p.s.lv < FOUND.lv) return UI.toast(`레벨 ${FOUND.lv} 이상부터 창설할 수 있습니다.`, '#ff8a80');
        if (name.length < 2 || /[<>&"']/.test(name)) return UI.toast('혈맹 이름은 2~6자로 정해 주세요.', '#ff8a80');
        if (GUILDS.some((g) => g.name === name)) return UI.toast('이미 있는 혈맹 이름입니다.', '#ff8a80');
        if (p.s.gold < FOUND.gold) return UI.toast('아데나가 부족합니다.', '#ff8a80');
        p.s.gold -= FOUND.gold; p.s.myClan = { name, color }; p.s.guild = name; p.recalc(); U.sfx.legend();
        UI.announce(`<b>${esc(p.name)}</b>님이 <em>[${esc(name)}]</em> 혈맹을 창설했습니다!`);
      } else if (t('[data-siege]')) return UI.open('siege');
      else return;
      render(); UI.refreshHud();
    };
    render();
    return { rerender: render };
  };

  O.siege = () => {
    const { body } = UI.makePanel('공성전 · 아스텔라 성', 'center dialog');
    const render = () => {
      const p = Game.player, cs = Siege.castle(p), own = Siege.isOwner(p);
      const taxed = cs.taxDay === new Date().toDateString();
      body.innerHTML = `<div class="castle-card"><div class="flag" style="background:${Siege.ownerColor()}"></div>
          <div><h4>아스텔라 성</h4><div>성주 혈맹 <b style="color:#ffd76a">[${esc(cs.owner)}]</b>${own ? ' <span style="color:#7ee07e">(우리 혈맹)</span>' : ''}</div>
          <div class="sub">바람의 초원 북동쪽 성채 · 우리 혈맹 공성 승리 ${cs.wins}회</div></div></div>
        <div class="stat-list">
          <div>참여 조건 <b>혈맹 소속 · Lv.${Siege.MIN_LV} 이상</b></div><div>선전포고 비용 <b>${U.fmt(Siege.COST)} 아데나</b></div>
          <div>제한 시간 <b>${Siege.TIME / 60}분</b></div><div>목표 <b>성문 → 수호탑 파괴</b></div>
          <div>수비 <b>수비대 · 궁수 · 성주 혈맹 용사 4명</b></div><div>아군 <b>우리 혈맹원 최대 8명 합류</b></div></div>
        <p class="sub" style="color:#a39a88;font-size:12px;line-height:1.6">승리하면 우리 혈맹이 성주가 됩니다: 매일 세금(아데나·다이아·초월 소환권), 성주 버프(공격력 +12, HP +400, 방어력 +6), 성 깃발이 우리 혈맹 색으로 바뀝니다. 적의 레벨은 캐릭터 레벨에 맞춰집니다. 공성 중 사망하면 여기서 전장으로 복귀할 수 있습니다.</p>
        <div class="dialog-btns">
          ${Siege.active ? '<button class="gold-btn" data-rejoin>전장 복귀</button>' : own ? `<button class="gold-btn" data-tax ${taxed ? 'disabled' : ''}>${taxed ? '오늘 세금 수령 완료' : '세금 걷기'}</button>` : `<button class="gold-btn" data-declare ${p.s.guild ? '' : 'disabled'}>선전포고</button>`}
          ${p.s.guild ? '' : '<button class="dark-btn" data-guild>혈맹 가입하기</button>'}
          <button class="dark-btn" data-x>닫기</button></div>`;
    };
    body.onclick = (e) => {
      const t = (sel) => e.target.closest(sel);
      if (t('[data-declare]')) return Siege.declare(Game);
      if (t('[data-rejoin]')) return Siege.rejoin(Game);
      if (t('[data-tax]')) { Siege.claimTax(Game); return render(); }
      if (t('[data-guild]')) return UI.open('guild');
      if (t('[data-x]')) UI.close();
    };
    render();
    return { rerender: render };
  };

  O.dungeon = () => {
    const { body } = UI.makePanel('던전 · 이클립스 균열', 'center dialog');
    const p = Game.player;
    const left = Dungeon.entries(p);
    body.innerHTML = `<div class="dg-banner"><h4>이클립스 균열</h4><small>시공간의 균열 너머에서 괴물들이 몰려옵니다</small></div>
      <div class="stat-list">
        <div>입장 조건 <b>Lv.5 이상</b></div><div>제한 시간 <b>5분</b></div><div>구성 <b>4 웨이브 + 보스</b></div>
        <div>몬스터 레벨 <b>캐릭터 레벨에 맞춰 조정</b></div><div>오늘 남은 입장 <b>${left} / ${Dungeon.DAILY}</b></div><div>클리어 횟수 <b>${p.s.dungeon.clears || 0}</b></div></div>
      <p class="sub" style="color:#a39a88;font-size:12px">보상: 아데나, 다이아, 무기 마법 주문서, 초월 소환권, 강력 체력 회복제 (+ 확률로 갑옷 마법 주문서)</p>
      <div class="dialog-btns"><button class="gold-btn" data-enter ${left > 0 ? '' : 'disabled'}>입장하기</button><button class="dark-btn" data-x>닫기</button></div>`;
    body.onclick = (e) => {
      if (e.target.closest('[data-enter]')) Dungeon.enter(Game);
      if (e.target.closest('[data-x]')) UI.close();
    };
    return {};
  };

  O.bosstime = () => {
    const { body } = UI.makePanel('이클립스 타임 · 보스 출현 정보');
    const bosses = D.SPAWNS.filter((s) => D.MONSTERS[s.m].boss);
    const render = () => {
      body.innerHTML = bosses.map((s, i) => {
        const def = D.MONSTERS[s.m];
        const alive = Game.monsters.find((m) => m.spawn === s && !m.dead);
        const rs = Game.respawns.find((r) => r.spawn === s);
        const status = alive ? `<span style="color:#ff6b5e;font-weight:700">출현 중</span> <span class="sub">HP ${Math.round((alive.hp / alive.maxHp) * 100)}%</span>`
          : rs ? `<span class="sub">다음 출현까지 ${Math.floor(rs.t / 60)}:${String(Math.floor(rs.t % 60)).padStart(2, '0')}</span>` : '<span class="sub">대기 중</span>';
        return `<div class="list-row"><div style="display:flex;gap:12px;align-items:center"><div id="boss-cv-${i}" style="background:radial-gradient(#4a1414,#0e0808);border:1px solid #6a2a2a"></div>
          <div><b style="color:#ff8a80">Lv.${def.lv} ${def.name}</b><div class="sub">${World.zoneAt(s.x * 64, s.y * 64).name} · 재출현 ${Math.round(s.respawn / 60)}분</div><div>${status}</div></div></div>
          <button class="dark-btn" data-go="${i}">이동 (3,000 아데나)</button></div>`;
      }).join('') + '<p class="sub" style="color:#888;font-size:12px">보스는 처치 후 일정 시간이 지나면 다시 출현합니다. 보스 처치 시 초월 소환권과 희귀 장비를 획득할 수 있습니다.</p>';
      bosses.forEach((s, i) => body.querySelector('#boss-cv-' + i).appendChild(UI.spriteCanvas(D.MONSTERS[s.m].sheet, 64, 10, 0, 0.8)));
    };
    body.onclick = (e) => {
      const b = e.target.closest('[data-go]'); if (!b) return;
      const p = Game.player, s = bosses[+b.dataset.go];
      if (p.s.gold < 3000) return UI.toast('아데나가 부족합니다.', '#ff8a80');
      p.s.gold -= 3000; UI.close();
      Game.teleportPlayer(s.x * D.TILE, (s.y + 7) * D.TILE);
    };
    render();
    const iv = setInterval(() => { if (UI.panelName !== 'bosstime') return clearInterval(iv); render(); }, 1000);
    return {};
  };

  return { migrate, bonuses, passXp, badges, menuDots, give, GUILDS, clanXp, syncClanBots };
})();
