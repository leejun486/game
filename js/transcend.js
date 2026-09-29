'use strict';
// 초월 (transcend) cards: collection screen, summon (gacha), synthesis, growth.
const Transcend = (() => {
  const { esc, ico } = UI;
  let sel = null, tab = 'list', filter = -1, synthGrade = 0, raf = 0;

  function owned(p, id) { return p.s.cards[id]; }
  function addCard(p, id) {
    if (!p.s.cards[id]) p.s.cards[id] = { n: 0, lv: 1 };
    p.s.cards[id].n++;
    p.recalc();
  }
  function rollGrade(rates = D.SUMMON_RATES) {
    let r = Math.random();
    for (let g = rates.length - 1; g >= 0; g--) { r -= rates[g]; if (r < 0) return g; }
    return 0;
  }
  function randomCard(grade) { return U.pick(D.CARDS.filter((c) => c.grade === grade)); }
  function spare(p, grade) {
    return D.CARDS.filter((c) => c.grade === grade).reduce((a, c) => a + Math.max(0, (p.s.cards[c.id]?.n || 0) - 1), 0);
  }

  // ---------------------------------------------------------------- big preview renderer
  function startPreview(canvas, getCard) {
    cancelAnimationFrame(raf);
    const g = canvas.getContext('2d');
    const t0 = performance.now();
    const loop = () => {
      if (!canvas.isConnected) return;
      const t = (performance.now() - t0) / 1000;
      const card = getCard();
      const W = canvas.width, H = canvas.height;
      g.clearRect(0, 0, W, H);
      if (card) {
        const col = card.grade >= 4 ? [255, 180, 60] : card.grade === 3 ? [230, 40, 30] : card.grade === 2 ? [60, 130, 255] : card.grade === 1 ? [70, 200, 90] : [180, 180, 180];
        // radiating "feathers" like the reference screen
        g.save(); g.translate(W / 2, H * 0.48);
        for (let i = 0; i < 28; i++) {
          const a = (i / 28) * Math.PI * 2 + t * 0.15;
          const len = H * (0.28 + 0.06 * Math.sin(t * 2 + i));
          g.rotate((Math.PI * 2) / 28);
          const gr = g.createLinearGradient(0, 0, 0, -len);
          gr.addColorStop(0, `rgba(${col},0.0)`); gr.addColorStop(0.4, `rgba(${col},0.55)`); gr.addColorStop(1, `rgba(${col},0)`);
          g.fillStyle = gr;
          g.beginPath(); g.moveTo(-3, 0); g.quadraticCurveTo(-16, -len * 0.6, 0, -len); g.quadraticCurveTo(16, -len * 0.6, 3, 0); g.fill();
          void a;
        }
        g.restore();
        const rg = g.createRadialGradient(W / 2, H * 0.5, 10, W / 2, H * 0.5, H * 0.45);
        rg.addColorStop(0, `rgba(${col},0.35)`); rg.addColorStop(1, `rgba(${col},0)`);
        g.fillStyle = rg; g.fillRect(0, 0, W, H);
        // floor
        g.fillStyle = 'rgba(0,0,0,0.5)'; g.beginPath(); g.ellipse(W / 2, H * 0.86, W * 0.18, H * 0.035, 0, 0, Math.PI * 2); g.fill();
        // animated sprite: idle-walk / slash / spellcast cycle
        const cyc = t % 6;
        let row = 10, col2 = 0;
        if (cyc < 2.5) { row = 10; col2 = walkCol(card.sheet, t * 9); }
        else if (cyc < 3.5) { row = 14; col2 = Math.min(5, Math.floor((cyc - 2.5) * 7)); }
        else if (cyc < 4.3) { row = 2; col2 = Math.min(6, Math.floor((cyc - 3.5) * 9)); }
        else { row = 10; col2 = 0; }
        const img = Sprites[card.sheet];
        if (img) {
          g.imageSmoothingEnabled = false;
          const S = H * 0.8;
          g.drawImage(img, col2 * 64, row * 64, 64, 64, W / 2 - S / 2, H * 0.9 - S, S, S);
        }
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
  }

  // ---------------------------------------------------------------- main screen
  function openTranscend() {
    const game = Game, p = game.player;
    const layer = document.getElementById('panel-layer');
    layer.innerHTML = '';
    const el = document.createElement('div');
    el.className = 'panel full';
    layer.appendChild(el);
    if (!sel) sel = p.s.card || (Object.keys(p.s.cards)[0]) || D.CARDS[3].id;

    const render = () => {
      const card = D.CARD_BY_ID[sel];
      const o = owned(p, sel);
      const lv = o ? o.lv : 1;
      const stats = D.cardStats(card, lv);
      const statHtml = Object.keys(stats).map((k) => `<div>${D.STAT_NAMES[k][0]} <span>+${stats[k]}${D.STAT_NAMES[k][1]}</span></div>`).join('');
      const cards = D.CARDS.filter((c) => filter < 0 || c.grade === filter)
        .sort((a, b) => (!!owned(p, b.id) - !!owned(p, a.id)) || b.grade - a.grade);
      el.innerHTML = `<div class="tr-wrap">
        <div class="tr-side">
          <button class="on">${ico('transcend')}초월</button>
          <button data-wl>${ico('sword')}무기 외형</button>
          <button data-soon>${ico('wings')}스킨</button>
          <button data-soon>${ico('collection')}결속</button>
        </div>
        <div class="tr-main">
          <div class="tr-head"><h3>초월 <span title="카드를 장착하면 외형이 변하고 능력치가 오릅니다." style="display:inline-flex;width:20px;height:20px;border-radius:50%;background:#333;font-size:12px;align-items:center;justify-content:center">?</span></h3>
            <div style="display:flex;gap:18px;align-items:center"><span class="cur">${ico('diamond', 'dia')}<b>${U.fmt(p.s.dia)}</b></span><span class="cur">${ico('gold')}<b>${U.fmt(p.s.gold)}</b></span><span class="cur">${ico('ticket')}<b>${p.count('ticket')}</b></span>
            <button class="dark-btn" data-summon>소환</button><button class="close-x" data-close style="font-size:30px">⇥</button></div></div>
          <div class="tabs" style="margin:0 16px 0 16px">${[['list', '목록'], ['synth', '합성'], ['grow', '성장'], ['confirm', '확정'], ['bonus', '보유 효과']].map(([k, n]) => `<button data-tab="${k}" class="${tab === k ? 'on' : ''}">${n}</button>`).join('')}</div>
          <div class="tr-content">
            <div class="tr-info">${tab === 'bonus' ? bonusHtml(p) : `
              <div class="grade ${D.GRADES[card.grade].cls}">${D.GRADES[card.grade].name}</div>
              <div class="cname" style="color:${D.GRADES[card.grade].color}">${o ? '' : '🔒 '}${esc(card.name)} ${o ? `<small style="color:#ffe38a">Lv.${lv}</small>` : ''}</div>
              <div class="stats">${statHtml}</div>
              <div class="stats" style="font-size:12.5px;color:#a39a88">보유 효과: ${Object.entries(D.COLLECT_BONUS[card.grade]).map(([k, v]) => `${D.STAT_NAMES[k][0]} +${v}`).join(', ')}<br>보유 수량: ${o ? o.n : 0}장</div>
              ${tab === 'grow' ? growHtml(p, card, o) : ''}
              ${tab === 'synth' ? synthHtml(p) : ''}
              ${tab === 'confirm' ? '<p style="color:#888">확정 소환은 업데이트 예정입니다.</p>' : ''}`}
            </div>
            <div class="tr-center"><div class="tr-notice" id="tr-notice"></div><canvas id="tr-cv" width="420" height="440"></canvas></div>
            <div class="tr-right">
              <div class="grade-filter">${[-1, 4, 3, 2, 1, 0].map((g) => `<button data-filter="${g}" class="${filter === g ? 'on' : ''}" style="color:${g < 0 ? '#e9d7a8' : D.GRADES[g].color};border-color:${g < 0 ? '' : D.GRADES[g].color}">${g < 0 ? 'All' : D.GRADES[g].name[0]}</button>`).join('')}</div>
              <div class="card-grid">${cards.map((c) => {
                const oc = owned(p, c.id);
                return `<div class="card gr${c.grade} ${c.id === sel ? 'sel' : ''} ${oc ? '' : 'locked'}" data-card="${c.id}"><canvas width="96" height="128" data-sheet="${c.sheet}"></canvas>
                  ${oc ? `<span class="cnt">${oc.n}</span>` : ''}${p.s.card === c.id ? '<span class="eqb">E</span>' : oc && oc.lv > 1 ? `<span class="lv">+${oc.lv - 1}</span>` : ''}<div class="nm ${D.GRADES[c.grade].cls}">${esc(c.name)}</div></div>`;
              }).join('')}</div>
              <div class="tr-actions">
                <button class="dark-btn" data-tab="grow">성장 바로가기</button>
                ${p.s.card === sel ? '<button class="red-btn" data-unequip>해제</button>' : `<button class="gold-btn" data-equip ${o ? '' : 'disabled'}>장착</button>`}
              </div>
            </div>
          </div>
        </div>
      </div>`;
      // card thumbnails
      el.querySelectorAll('canvas[data-sheet]').forEach((cv) => {
        const g = cv.getContext('2d'); g.imageSmoothingEnabled = false;
        const img = Sprites[cv.dataset.sheet];
        if (img) g.drawImage(img, 8, 10 * 64 + 2, 48, 64, 0, 0, 96, 128);
      });
      startPreview(el.querySelector('#tr-cv'), () => D.CARD_BY_ID[sel]);
      const last = game.lastCardNotice;
      if (last) el.querySelector('#tr-notice').innerHTML = last;
    };
    el.onclick = (e) => {
      const t = e.target;
      const c = t.closest('[data-card]'); if (c) { sel = c.dataset.card; U.sfx.ui(); return render(); }
      const tb = t.closest('[data-tab]'); if (tb) { tab = tb.dataset.tab; return render(); }
      const f = t.closest('[data-filter]'); if (f) { filter = +f.dataset.filter; return render(); }
      if (t.closest('[data-close]')) { cancelAnimationFrame(raf); UI.close(); return; }
      if (t.closest('[data-soon]')) return UI.toast('업데이트 예정입니다.');
      if (t.closest('[data-wl]')) { cancelAnimationFrame(raf); return UI.open('weaponlook'); }
      if (t.closest('[data-summon]')) return UI.open('summon');
      if (t.closest('[data-equip]')) {
        if (!owned(p, sel)) return;
        p.s.card = sel; p.recalc(); U.sfx.success();
        game.fx.push(Combat.makeFx('teleport', p.x, p.y, { follow: p }));
        UI.toast(`${D.CARD_BY_ID[sel].name}(으)로 초월했습니다!`, D.GRADES[D.CARD_BY_ID[sel].grade].color);
        Quests.check(game); UI.refreshHud(); return render();
      }
      if (t.closest('[data-unequip]')) { p.s.card = null; p.recalc(); UI.refreshHud(); return render(); }
      if (t.closest('[data-grow]')) {
        const card = D.CARD_BY_ID[sel], o = owned(p, sel);
        if (!o || o.lv >= D.CARD_MAX_LV) return;
        const cost = D.cardGrowCost(card, o.lv);
        if (p.s.gold < cost) return UI.toast('아데나가 부족합니다.', '#ff8a80');
        p.s.gold -= cost; o.lv++; p.recalc(); U.sfx.success(); UI.toast(`${card.name} 성장 Lv.${o.lv}`, '#ffe38a'); UI.refreshHud(); return render();
      }
      const sg = t.closest('[data-sgrade]'); if (sg) { synthGrade = +sg.dataset.sgrade; return render(); }
      if (t.closest('[data-synth]')) return synth(p, render);
    };
    render();
    return { name: 'transcend', rerender: render, onClose: () => cancelAnimationFrame(raf) };
  }

  function growHtml(p, card, o) {
    if (!o) return '<p style="color:#888;margin-top:10px">보유하지 않은 카드입니다.</p>';
    if (o.lv >= D.CARD_MAX_LV) return '<p style="color:#ffe38a;margin-top:10px">최대 성장 단계입니다.</p>';
    const next = D.cardStats(card, o.lv + 1);
    const cost = D.cardGrowCost(card, o.lv);
    return `<div style="margin-top:10px;font-size:13px">다음 단계 (Lv.${o.lv + 1}): ${Object.entries(next).map(([k, v]) => `${D.STAT_NAMES[k][0]} +${v}${D.STAT_NAMES[k][1]}`).join(', ')}</div>
      <button class="gold-btn" data-grow style="margin-top:10px;width:100%">성장 (${U.fmt(cost)} 아데나)</button>`;
  }
  function synthHtml(p) {
    const g = synthGrade;
    const sp = spare(p, g);
    return `<div style="margin-top:10px;font-size:13px;line-height:1.7">같은 등급의 <b>중복 카드 4장</b>을 소모하여 상위 등급 카드를 획득합니다. (소환 화면의 합성 탭에서 한 번에 여러 번 합성할 수 있습니다)<br>
      <div class="grade-filter" style="margin:8px 0">${[0, 1, 2, 3].map((x) => `<button data-sgrade="${x}" class="${x === g ? 'on' : ''}" style="color:${D.GRADES[x].color};border-color:${D.GRADES[x].color}">${D.GRADES[x].name[0]}</button>`).join('')}</div>
      ${D.GRADES[g].name} → <b class="${D.GRADES[g + 1].cls}">${D.GRADES[g + 1].name}</b> 성공 확률 ${(D.SYNTH_RATES[g] * 100).toFixed(0)}%<br>
      사용 가능한 중복 카드: <b>${sp}</b>장</div>
      <button class="gold-btn" data-synth style="margin-top:8px;width:100%" ${sp >= 4 ? '' : 'disabled'}>합성</button>`;
  }
  function bonusHtml(p) {
    const tot = {};
    let n = 0;
    for (const id in p.s.cards) { n++; for (const [k, v] of Object.entries(D.COLLECT_BONUS[D.CARD_BY_ID[id].grade])) tot[k] = (tot[k] || 0) + v; }
    return `<div class="grade" style="color:#e9d7a8">보유 효과</div><div class="cname" style="color:#e9d7a8">수집 ${n} / ${D.CARDS.length}</div>
      <div class="stats">${Object.keys(tot).length ? Object.entries(tot).map(([k, v]) => `<div>${D.STAT_NAMES[k][0]} <span>+${v}</span></div>`).join('') : '<div style="color:#888">보유한 카드가 없습니다.</div>'}</div>
      <p style="font-size:12px;color:#888">카드를 한 장이라도 보유하면 장착하지 않아도 보유 효과가 적용됩니다.</p>`;
  }
  function synth(p, render) {
    Gacha.synth('transcend', synthGrade, 1, document.getElementById('panel-layer'), render);
  }


  // ---------------------------------------------------------------- summon (reveal lives in gacha.js)
  const gacha = {
    title: '초월', noun: '초월', icon: 'transcend', desc: '영웅들의 영혼을 소환합니다.',
    pool: () => D.CARDS,
    costLabel: (p, n) => { const tk = p.count('ticket'), need = n === 1 ? 1 : 10; return tk >= need ? `${ico('ticket')} 소환권 ${need}` : `${ico('diamond', 'dia')} ${U.fmt(n === 1 ? 100 : 1000)}`; },
    pay: (p, n) => {
      const need = n === 1 ? 1 : 10, dia = n === 1 ? 100 : 1000;
      if (p.count('ticket') >= need) { p.removeById('ticket', need); return true; }
      if (p.s.dia < dia) { UI.toast('다이아가 부족합니다.', '#ff8a80'); return false; }
      p.s.dia -= dia; return true;
    },
    grant: (p, items) => { items.forEach((c) => addCard(p, c.id)); Quests.check(Game); },
    thumb: (cv, c) => { const g = cv.getContext('2d'); g.imageSmoothingEnabled = false; g.drawImage(Sprites[c.sheet], 8, 10 * 64 + 2, 48, 64, 0, 0, cv.width, cv.height); },
    count: (p, c) => p.s.cards[c.id]?.n || 0,
    take: (p, c) => { p.s.cards[c.id].n--; },
    view: (best) => { sel = best.id; tab = 'list'; UI.open('transcend'); },
  };

  UI.OPENERS.transcend = openTranscend;
  return { addCard, rollGrade, randomCard, gacha };
})();
