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
  const COLL = [
    { id: 'c1', name: '초보 모험가의 무기', items: ['w_sword1', 'w_bow1', 'w_staff1'], bonus: { atk: 2 } },
    { id: 'c2', name: '수련자의 장비', items: ['a_1', 'r_1'], bonus: { def: 2, hp: 30 } },
    { id: 'c3', name: '연금술사의 선반', items: ['hp_s', 'hp_m', 'hp_l', 'mp_s', 'haste'], bonus: { hp: 50, mp: 30 } },
    { id: 'c4', name: '주문서 수집가', items: ['tp_town', 'sc_weapon', 'sc_armor'], bonus: { crit: 2 } },
    { id: 'c5', name: '강철의 기사', items: ['w_sword2', 'a_2'], bonus: { atk: 3, def: 2 } },
    { id: 'c6', name: '숲과 마나', items: ['w_bow2', 'w_staff2'], bonus: { atkSpd: 3, castSpd: 3 } },
    { id: 'c7', name: '미스릴 수집가', items: ['w_sword3', 'w_bow3', 'w_staff3'], bonus: { atk: 6 } },
    { id: 'c8', name: '판금의 수호', items: ['a_3', 'r_2'], bonus: { def: 5, hp: 150 } },
    { id: 'c9', name: '영웅의 증표', items: ['a_4', 'r_3'], bonus: { atk: 8, dmgRed: 3 } },
  ];
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
    s.dungeon = s.dungeon || { day: '', used: 0, clears: 0 };
    s.bossKills = s.bossKills || 0;
    // v2 quest list removed the old #3 (초월 카드 장착) quest: shift saves past it
    if (!s.qv) { if (s.quest > 2) s.quest--; else if (s.quest === 2) s.qprog = 0; s.qv = 2; }
  }
  // extra stats from collections + guild, consumed by Player.recalc
  function bonuses(p) {
    const out = [];
    for (const c of COLL) if ((p.s.coll[c.id] || []).length === c.items.length) out.push(c.bonus);
    const g = GUILDS.find((x) => x.name === p.s.guild);
    if (g) out.push(g.bonus);
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

  // red dots on the top menu
  function badges(game) {
    const p = game.player; if (!p) return;
    const set = (act, on) => {
      const b = document.querySelector(`#top-menu [data-act="${act}"]`); if (!b) return;
      let d = b.querySelector('.dot');
      if (on && !d) { d = document.createElement('i'); d.className = 'dot'; b.appendChild(d); }
      if (!on && d) d.remove();
    };
    set('event', attendReady(p)); set('pass', passReady(p));
    set('menu', achReady(p) || attendReady(p));
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

  O.collection = () => {
    const { body } = UI.makePanel('수집');
    const render = () => {
      const p = Game.player;
      const eq = Object.values(p.s.equip);
      body.innerHTML = `<p style="margin-top:0;color:#a39a88">아이템을 등록하면 소모되며, 세트를 완성하면 능력치가 영구적으로 오릅니다. (장착 중인 장비는 등록할 수 없습니다)</p>` + COLL.map((c) => {
        const reg = p.s.coll[c.id] || [];
        const complete = reg.length === c.items.length;
        const bonus = Object.entries(c.bonus).map(([k, v]) => `${D.STAT_NAMES[k][0]} +${v}${D.STAT_NAMES[k][1]}`).join(', ');
        return `<div class="coll ${complete ? 'complete' : ''}"><div class="coll-head"><b>${c.name}</b><span class="${complete ? 'g1' : 'sub'}">${complete ? '완성 · ' : ''}${bonus}</span></div>
          <div class="coll-items">${c.items.map((id) => {
            const it = D.ITEMS[id], done = reg.includes(id);
            const have = p.s.inv.some((i) => i.id === id && !eq.includes(i.uid));
            return `<div class="cell bg${it.grade} ${done ? '' : 'dim'}" title="${esc(it.name)}" ${!done && have ? `data-reg="${c.id}:${id}"` : ''}>${ico(it.icon)}${done ? '<span class="eq">✔</span>' : have ? '<span class="c" style="color:#7ee07e">등록</span>' : ''}</div>`;
          }).join('')}</div></div>`;
      }).join('');
    };
    body.onclick = (e) => {
      const b = e.target.closest('[data-reg]'); if (!b) return;
      const [cid, id] = b.dataset.reg.split(':');
      const p = Game.player, eq = Object.values(p.s.equip);
      const it = p.s.inv.find((i) => i.id === id && !eq.includes(i.uid));
      if (!it) return;
      p.removeItem(it.uid);
      (p.s.coll[cid] = p.s.coll[cid] || []).push(id);
      const c = COLL.find((x) => x.id === cid);
      if (p.s.coll[cid].length === c.items.length) { U.sfx.legend(); UI.toast(`수집 완성: ${c.name}`, '#7ee07e'); } else U.sfx.success();
      p.recalc(); UI.refreshHud(); render();
    };
    render();
    return { rerender: render };
  };

  O.guild = () => {
    const { body } = UI.makePanel('혈맹');
    const render = () => {
      const p = Game.player;
      const members = (g) => Game.bots.filter((b) => b.guild === g).length + (p.s.guild === g ? 1 : 0);
      body.innerHTML = `<p style="margin-top:0;color:#a39a88">${p.s.guild ? `현재 <b style="color:#ffd76a">[${esc(p.s.guild)}]</b> 혈맹 소속입니다.` : '가입할 혈맹을 선택하세요. 혈맹마다 고유한 혈맹 버프가 있습니다.'}</p>` +
        GUILDS.map((g) => `<div class="list-row ${p.s.guild === g.name ? 'me' : ''}"><div style="display:flex;gap:10px;align-items:center">${ico('guild')}<div><b>${g.name}</b> <span class="sub">멤버 ${members(g.name)}명</span><div class="sub">${g.desc} · 혈맹 버프: <span style="color:#7ee07e">${g.label}</span></div></div></div>
          ${p.s.guild === g.name ? '<button class="red-btn" data-leave>탈퇴</button>' : `<button class="dark-btn" data-join="${g.name}" ${p.s.guild ? 'disabled' : ''}>가입</button>`}</div>`).join('');
      body.querySelectorAll('.list-row img').forEach((i) => { i.style.width = '34px'; });
    };
    body.onclick = (e) => {
      const p = Game.player;
      const j = e.target.closest('[data-join]');
      if (j && !p.s.guild) {
        p.s.guild = j.dataset.join; p.recalc(); U.sfx.success();
        UI.toast(`[${p.s.guild}] 혈맹에 가입했습니다!`, '#ffd76a');
        const mate = Game.bots.find((b) => b.guild === p.s.guild);
        if (mate) setTimeout(() => Game.say(mate, `${p.name}님 환영합니다~!`), 1200);
        render(); UI.refreshHud(); return;
      }
      if (e.target.closest('[data-leave]') && confirm('혈맹을 탈퇴할까요?')) { p.s.guild = ''; p.recalc(); render(); UI.refreshHud(); }
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

  return { migrate, bonuses, passXp, badges, give, GUILDS };
})();
