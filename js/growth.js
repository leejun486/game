'use strict';
// 성장: 한계돌파 (limit break) and 각성 (awakening).
// 한계돌파: the level stops at 20 / 40 / 60 until the character breaks through with 돌파석 + 아데나. Exp keeps
// filling up to the cap and carries over the moment the limit breaks. Every break is a permanent bonus.
// 각성: from Lv.50 with two breaks, five stages named after the 사신 + 황룡, paid with 각성의 여의주. Each stage is a
// bigger bonus, a coloured ring under the character and an "n각성" tag over the name.
const Growth = (() => {
  const { esc, ico } = UI;
  const LIMITS = [{ lv: 20, stone: 3, gold: 20000 }, { lv: 40, stone: 8, gold: 150000 }, { lv: 60, stone: 15, gold: 600000 }];
  const BREAK_BONUS = { atkPct: 4, hp: 300, def: 6 };
  const AWAKEN_LV = 50, AWAKEN_LB = 2;
  const AWAKEN = [
    { name: '청룡', color: '#4fd1b0', gem: 2, gold: 200000 },
    { name: '현무', color: '#7d8cff', gem: 4, gold: 500000 },
    { name: '백호', color: '#e9f1ff', gem: 7, gold: 1000000 },
    { name: '주작', color: '#ff5a46', gem: 11, gold: 2000000 },
    { name: '황룡', color: '#ffd23a', gem: 16, gold: 4000000 },
  ];
  const AWAKEN_BONUS = { atkPct: 5, hp: 600, crit: 1.5, dmgRed: 1 };

  function migrate(s) {
    // saves from before 한계돌파: every cap already passed (or reached) counts as broken
    if (s.lb == null) s.lb = LIMITS.filter((l) => s.lv >= l.lv).length;
    if (s.aw == null) s.aw = 0;
  }
  const cap = (p) => (p.s.lb < LIMITS.length ? LIMITS[p.s.lb].lv : D.MAX_LV);
  const capped = (p) => p.s.lv >= cap(p) && p.s.lv < D.MAX_LV;
  const scale = (b, n) => { const o = {}; for (const k in b) o[k] = Math.round(b[k] * n * 10) / 10; return o; };
  // stat blocks for Player.recalc (atkPct is applied there as a percentage)
  function bonuses(p) {
    const out = [];
    if (p.s.lb) out.push(scale(BREAK_BONUS, p.s.lb));
    if (p.s.aw) out.push(scale(AWAKEN_BONUS, p.s.aw));
    return out;
  }
  const nextBreak = (p) => (p.s.lb < LIMITS.length ? LIMITS[p.s.lb] : null);
  const nextAwaken = (p) => (p.s.aw < AWAKEN.length ? AWAKEN[p.s.aw] : null);
  const awakenOpen = (p) => p.s.lv >= AWAKEN_LV && p.s.lb >= AWAKEN_LB;
  const canBreak = (p) => { const n = nextBreak(p); return !!n && capped(p) && p.count('breakstone') >= n.stone && p.s.gold >= n.gold; };
  const canAwaken = (p) => { const n = nextAwaken(p); return !!n && awakenOpen(p) && p.count('awakegem') >= n.gem && p.s.gold >= n.gold; };
  const ready = (p) => canBreak(p) || canAwaken(p);

  function doBreak(p) {
    const n = nextBreak(p);
    if (!n) return;
    if (!capped(p)) return UI.toast(`Lv.${n.lv}에 도달하면 한계돌파할 수 있습니다.`, '#ff8a80');
    if (p.count('breakstone') < n.stone) return UI.toast('돌파석이 부족합니다.', '#ff8a80');
    if (p.s.gold < n.gold) return UI.toast('아데나가 부족합니다.', '#ff8a80');
    p.removeById('breakstone', n.stone); p.s.gold -= n.gold;
    p.s.lb++; p.capNote = false;
    Game.fx.push(Combat.makeFx('levelup', p.x, p.y, { follow: p }));
    Game.fx.push(Combat.makeFx('burst', p.x, p.y - 30, { color: '#ffd76a', r: 90 }));
    Game.shake = Math.max(Game.shake, 8);
    U.sfx.legend();
    UI.announce(`<b>${esc(p.name)}</b>님이 <em>${p.s.lb}차 한계돌파</em>에 성공했습니다! (최대 Lv.${cap(p)})`);
    UI.chat(`[한계돌파] ${p.s.lb}차 돌파 성공! 레벨 제한이 Lv.${cap(p)}(으)로 올랐습니다.`, 'sys');
    p.recalc();
    p.gainExp(0, Game); // exp saved up at the cap turns into levels now
    UI.refreshAll();
  }
  function doAwaken(p) {
    const n = nextAwaken(p);
    if (!n) return;
    if (!awakenOpen(p)) return UI.toast(`Lv.${AWAKEN_LV}, ${AWAKEN_LB}차 한계돌파 후 각성할 수 있습니다.`, '#ff8a80');
    if (p.count('awakegem') < n.gem) return UI.toast('각성의 여의주가 부족합니다.', '#ff8a80');
    if (p.s.gold < n.gold) return UI.toast('아데나가 부족합니다.', '#ff8a80');
    p.removeById('awakegem', n.gem); p.s.gold -= n.gold;
    p.s.aw++;
    Game.fx.push(Combat.makeFx('levelup', p.x, p.y, { follow: p }));
    Game.fx.push(Combat.makeFx('burst', p.x, p.y - 30, { color: n.color, r: 120 }));
    Game.shake = Math.max(Game.shake, 12);
    U.sfx.legend();
    UI.announce(`<b>${esc(p.name)}</b>님이 <em class="${p.s.aw >= 5 ? 'legend' : ''}">${n.name}의 각성</em>(${p.s.aw}각성)을 이루었습니다!`);
    BotChat.onEvent(`${p.name}가 ${p.s.aw}각성(${n.name})을 달성했다`, [`${p.name}님 ${p.s.aw}각성 ㄷㄷ`, '각성 이펙트 멋지다', '여의주 어디서 모아요?']);
    p.recalc(); UI.refreshAll();
  }

  // drop table entries by monster: 돌파석 from Lv.12+ monsters, 각성의 여의주 from Lv.40+, bosses guaranteed
  function drops(d) {
    const out = [];
    if (d.boss) {
      for (let i = 0; i < Math.ceil(d.lv / 12); i++) out.push(['breakstone', 1]);
      if (d.lv >= 50) for (let i = 0; i < (d.lv >= 80 ? 3 : d.lv >= 70 ? 2 : 1); i++) out.push(['awakegem', 1]);
    } else {
      if (d.lv >= 12) out.push(['breakstone', 0.005]);
      if (d.lv >= 40) out.push(['awakegem', 0.0012]);
    }
    return out;
  }

  // the 각성 ring: drawn under the character, turning, in the stage colour
  function drawAura(ctx, p, x, y) {
    const aw = p.s.aw;
    if (!aw) return;
    const st = AWAKEN[aw - 1], t = performance.now() / 1000;
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(1, 0.38);
    ctx.globalAlpha *= 0.8 + Math.sin(t * 2) * 0.15;
    ctx.strokeStyle = st.color; ctx.lineWidth = 3; ctx.shadowColor = st.color; ctx.shadowBlur = 14;
    ctx.beginPath(); ctx.arc(0, 0, 34 + aw * 2, 0, Math.PI * 2); ctx.stroke();
    // one rune tick per stage, turning
    ctx.lineWidth = 4;
    for (let i = 0; i < aw * 2; i++) {
      const a = t * 0.9 + (i / (aw * 2)) * Math.PI * 2;
      ctx.beginPath(); ctx.arc(0, 0, 44 + aw * 2, a, a + 0.25); ctx.stroke();
    }
    ctx.restore();
  }
  const tag = (p) => (p.s.aw ? { text: `${AWAKEN[p.s.aw - 1].name} ${p.s.aw}각성`, color: AWAKEN[p.s.aw - 1].color } : null);

  // ---------------------------------------------------------------- panel
  let tab = 'break';
  const bonusText = (b) => Object.entries(b).filter(([, v]) => v).map(([k, v]) => (k === 'atkPct' ? `공격력 +${v}%` : `${D.STAT_NAMES[k][0]} +${v}${D.STAT_NAMES[k][1]}`)).join(', ');
  const have = (n, need, label, icon) => `<div class="gr-cost ${n >= need ? 'ok' : 'no'}">${ico(icon)}<span>${label}</span><b>${U.fmt(n)} / ${U.fmt(need)}</b></div>`;
  function open(arg) {
    const p = Game.player;
    if (arg === 'awaken' || arg === 'break') tab = arg;
    const { el, body } = UI.makePanel('성장');
    el.style.width = 'min(760px, 96vw)';
    const render = () => {
      if (!el.isConnected) return;
      let main;
      if (tab === 'break') {
        const n = nextBreak(p);
        const pips = LIMITS.map((l, i) => `<div class="gr-pip ${i < p.s.lb ? 'on' : ''}"><b>${i + 1}차</b><small>Lv.${l.lv}</small></div>`).join('<i class="gr-link"></i>');
        main = `<div class="gr-stage"><div class="gr-emblem brk"><span>${p.s.lb}</span><small>차 돌파</small></div>
            <div class="gr-pips">${pips}</div></div>
          <div class="gr-info">
            <div>현재 레벨 제한 <b>Lv.${cap(p)}</b>${capped(p) ? ' <em class="gr-warn">한계 도달 — 경험치가 쌓이고 있습니다</em>' : ''}</div>
            <div>누적 돌파 효과 <b>${p.s.lb ? bonusText(scale(BREAK_BONUS, p.s.lb)) : '없음'}</b></div>
            ${n ? `<div>다음 돌파 효과 <b>${bonusText(BREAK_BONUS)}</b>, 레벨 제한 Lv.${LIMITS[p.s.lb + 1] ? LIMITS[p.s.lb + 1].lv : D.MAX_LV}</div>
              <div class="gr-costs">${have(p.count('breakstone'), n.stone, '돌파석', 'breakstone')}${have(p.s.gold, n.gold, '아데나', 'gold')}</div>
              <button class="gold-btn gr-go" data-break ${canBreak(p) ? '' : 'disabled'}>${capped(p) ? `${p.s.lb + 1}차 한계돌파` : `Lv.${n.lv} 도달 시 돌파 가능`}</button>`
            : '<div class="gr-done">모든 한계를 돌파했습니다.</div>'}
            <p class="sub">돌파석: Lv.12 이상 몬스터·보스·던전·퀘스트 보상, 잡화 상점에서도 구할 수 있습니다.</p>
          </div>`;
      } else {
        const n = nextAwaken(p);
        const pips = AWAKEN.map((a, i) => `<div class="gr-pip ${i < p.s.aw ? 'on' : ''}" style="--c:${a.color}"><b>${a.name}</b><small>${i + 1}각성</small></div>`).join('<i class="gr-link"></i>');
        const cur = p.s.aw ? AWAKEN[p.s.aw - 1] : null;
        main = `<div class="gr-stage"><div class="gr-emblem awk" style="--c:${cur ? cur.color : '#8a8070'}"><span>${p.s.aw}</span><small>${cur ? cur.name + ' 각성' : '각성 전'}</small></div>
            <div class="gr-pips">${pips}</div></div>
          <div class="gr-info">
            ${awakenOpen(p) ? '' : `<div class="gr-warn">Lv.${AWAKEN_LV} 달성, ${AWAKEN_LB}차 한계돌파 후 각성할 수 있습니다. (현재 Lv.${p.s.lv}, ${p.s.lb}차 돌파)</div>`}
            <div>누적 각성 효과 <b>${p.s.aw ? bonusText(scale(AWAKEN_BONUS, p.s.aw)) : '없음'}</b></div>
            ${n ? `<div>다음 각성 <b style="color:${n.color}">${n.name}</b> 효과 <b>${bonusText(AWAKEN_BONUS)}</b> · 발밑에 ${n.name}의 고리</div>
              <div class="gr-costs">${have(p.count('awakegem'), n.gem, '각성의 여의주', 'awakegem')}${have(p.s.gold, n.gold, '아데나', 'gold')}</div>
              <button class="gold-btn gr-go" data-awaken ${canAwaken(p) ? '' : 'disabled'}>${n.name}의 각성</button>`
            : '<div class="gr-done">황룡의 각성까지 모두 이루었습니다.</div>'}
            <p class="sub">각성의 여의주: Lv.40 이상 몬스터, Lv.50 이상 보스, Lv.50 이상 던전 보상, 잡화 상점에서 구할 수 있습니다.</p>
          </div>`;
      }
      body.innerHTML = `<div class="tabs"><button data-tab="break" class="${tab === 'break' ? 'on' : ''}">한계돌파${canBreak(p) ? '<i class="dot"></i>' : ''}</button><button data-tab="awaken" class="${tab === 'awaken' ? 'on' : ''}">각성${canAwaken(p) ? '<i class="dot"></i>' : ''}</button></div>
        <div class="gr-wrap">${main}</div>`;
    };
    body.onclick = (e) => {
      const t = e.target;
      const tb = t.closest('[data-tab]'); if (tb) { tab = tb.dataset.tab; U.sfx.ui(); return render(); }
      if (t.closest('[data-break]')) { doBreak(p); return render(); }
      if (t.closest('[data-awaken]')) { doAwaken(p); return render(); }
    };
    render();
    return { rerender: render };
  }
  UI.OPENERS.growth = open;

  return { LIMITS, AWAKEN, AWAKEN_LV, migrate, cap, capped, bonuses, ready, canBreak, canAwaken, drops, drawAura, tag };
})();
