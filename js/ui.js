'use strict';
// DOM UI: HUD, chat, toasts and all the panels (menu, inventory, shop, skills, quests, ...).
const UI = (() => {
  const $ = (id) => document.getElementById(id);
  const icons = {};
  let game = null;
  let panel = null; // { name, el, onUpdate }
  let invSel = null;

  const iconImg = (n) => { if (!icons[n]) { icons[n] = new Image(); icons[n].src = `assets/icons/${n}.svg`; } return icons[n]; };
  const ico = (n, cls = '') => `<img src="assets/icons/${n}.svg" class="${cls}" alt="">`;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  // draw one sprite frame into a canvas
  function spriteCanvas(sheet, size, row = 10, col = 0, crop = 1) {
    const c = document.createElement('canvas');
    c.width = size; c.height = size;
    drawSprite(c, sheet, row, col, crop);
    return c;
  }
  function drawSprite(c, sheet, row = 10, col = 0, crop = 1) {
    const g = c.getContext('2d');
    g.imageSmoothingEnabled = false;
    g.clearRect(0, 0, c.width, c.height);
    const img = Sprites[sheet];
    if (!img) return;
    // crop < 1 zooms on the upper body
    const sw = 64 * crop, sx = col * 64 + (64 - sw) / 2, sy = row * 64 + (64 - sw) * 0.25;
    g.drawImage(img, sx, sy, sw, sw, 0, 0, c.width, c.height);
  }

  // ---------------------------------------------------------------- messages
  function chat(msg, cls = '', name = null) {
    const log = $('chat-log');
    const d = document.createElement('div');
    if (cls) d.className = cls;
    d.innerHTML = name ? `<span class="name">${esc(name)}</span>: ${esc(msg)}` : esc(msg);
    log.appendChild(d);
    while (log.children.length > 40) log.removeChild(log.firstChild);
  }
  function announce(html) {
    const a = $('announce');
    const d = document.createElement('div');
    d.innerHTML = html; a.appendChild(d);
    setTimeout(() => d.remove(), 5000);
    while (a.children.length > 3) a.removeChild(a.firstChild);
  }
  function toast(msg, color = '#eee6d4') {
    const t = $('toast');
    const d = document.createElement('div');
    d.textContent = msg; d.style.color = color;
    t.appendChild(d);
    setTimeout(() => d.remove(), 2200);
    while (t.children.length > 3) t.removeChild(t.firstChild);
  }
  function skillName(n) {
    const t = $('toast');
    const d = document.createElement('div');
    d.textContent = n; d.style.color = '#ffcf7a'; d.style.fontWeight = '700'; d.style.fontSize = '17px'; d.style.background = 'none'; d.style.border = '0'; d.style.textShadow = '0 0 6px #000, 0 0 3px #000';
    t.appendChild(d); setTimeout(() => d.remove(), 1200);
  }

  // ---------------------------------------------------------------- HUD
  const SLOT_ITEMS = ['hp_s', 'hp_m', 'mp_s', 'tp_town'];
  function buildSlots() {
    const p = game.player;
    const el = $('slots');
    el.innerHTML = '';
    p.classDef.skills.forEach((id, i) => {
      const sk = D.SKILLS[id];
      const s = document.createElement('div');
      s.className = 'slot skill'; s.title = `${sk.name} (MP ${sk.mp}, 쿨타임 ${sk.cd}초)\n${sk.desc}`;
      s.innerHTML = `${ico(sk.icon)}<span class="n">${i + 1}</span><span class="mp-cost">${sk.mp}</span><div class="cd" style="transform:scaleY(0)"></div><div class="cdt"></div>`;
      s.onclick = () => p.castSkill(i, game);
      el.appendChild(s);
    });
    SLOT_ITEMS.forEach((id, i) => {
      const it = D.ITEMS[id];
      const s = document.createElement('div');
      s.className = 'slot'; s.title = `${it.name}\n${it.desc}`;
      s.innerHTML = `${ico(it.icon)}<span class="n">${i + 5}</span><span class="c"></span>`;
      s.onclick = () => useSlotItem(i);
      el.appendChild(s);
    });
  }
  function useSlotItem(i) {
    const p = game.player;
    const it = p.s.inv.find((x) => x.id === SLOT_ITEMS[i]);
    if (!it) return toast(`${D.ITEMS[SLOT_ITEMS[i]].name}이(가) 없습니다.`);
    p.useItem(it.uid, game);
    flashSlot(4 + i);
  }
  function flashSlot(i) {
    const s = $('slots').children[i];
    if (!s) return;
    s.classList.remove('flash'); void s.offsetWidth; s.classList.add('flash');
  }
  let lastZone = '';
  function refreshHud() {
    const p = game.player;
    if (!p) return;
    const st = p.s;
    $('cur-dia').textContent = U.fmt(st.dia);
    $('cur-gold').textContent = U.fmt(st.gold);
    $('hp-fill').style.width = (p.hp / p.maxHp) * 100 + '%';
    $('mp-fill').style.width = (p.mp / p.maxMp) * 100 + '%';
    $('hp-text').textContent = `${U.fmt(Math.max(0, p.hp))}/${U.fmt(p.maxHp)}`;
    $('mp-text').textContent = `${U.fmt(p.mp)}/${U.fmt(p.maxMp)}`;
    $('lvl').textContent = st.lv;
    const pct = p.expPct();
    $('exp-fill').style.width = pct + '%';
    $('exp-text').textContent = `Exp ${pct.toFixed(4)}%   ⚔ 전투력 ${U.fmt(p.power)}   ☠ ${U.fmt(st.kills)}`;
    // slots
    const slots = $('slots').children;
    p.classDef.skills.forEach((id, i) => {
      const s = slots[i]; if (!s) return;
      const cd = p.skillCd[id] || 0, sk = D.SKILLS[id];
      s.querySelector('.cd').style.transform = `scaleY(${cd > 0 ? cd / sk.cd : 0})`;
      s.querySelector('.cdt').textContent = cd > 0 ? Math.ceil(cd) : '';
      s.classList.toggle('nomp', p.mp < sk.mp);
    });
    SLOT_ITEMS.forEach((id, i) => {
      const s = slots[4 + i]; if (!s) return;
      const n = p.count(id);
      s.querySelector('.c').textContent = n;
      s.classList.toggle('empty', n === 0);
    });
    const hpTotal = p.count('hp_s') + p.count('hp_m') + p.count('hp_l');
    $('auto-potion-count').textContent = U.fmt(hpTotal);
    $('auto-potion').classList.toggle('on', !!st.autoPotion);
    $('btn-auto').classList.toggle('on', p.auto);
    // buffs
    const bEl = $('buffs');
    const buffHtml = p.buffs.map((b) => {
      const icon = b.id === 'rage' ? 'aura' : b.id === 'wind' ? 'sprint' : b.id === 'haste' ? 'pot-green' : 'star';
      return `<div class="buff" title="${esc(b.name)}">${ico(icon)}<b>${Math.ceil(b.t)}</b></div>`;
    }).join('') + (st.card ? `<div class="buff" title="초월: ${esc(D.CARD_BY_ID[st.card].name)}" style="background:rgba(60,20,20,.85)">${ico('transcend')}</div>` : '');
    if (bEl._h !== buffHtml) { bEl.innerHTML = buffHtml; bEl._h = buffHtml; }
    // zone
    const z = World.zoneAt(p.x, p.y);
    if (z.name !== lastZone) {
      lastZone = z.name;
      $('zone-text').textContent = z.name;
      $('zone-name').classList.toggle('danger', !z.safe);
      toast(z.safe ? `${z.name} (안전 지역)` : `${z.name} (전투 지역)`, z.safe ? '#9fe0ff' : '#ff9a8a');
    }
    // target
    const t = p.target;
    if (t && !t.dead) {
      $('target-frame').classList.remove('hidden');
      $('target-name').innerHTML = `<span style="color:${t.def.boss ? '#ff6b5e' : '#fff'}">Lv.${t.lv} ${esc(t.name)}</span> <small style="color:#aaa">${U.fmt(Math.max(0, t.hp))}/${U.fmt(t.maxHp)}</small>`;
      $('target-fill').style.width = (t.hp / t.maxHp) * 100 + '%';
    } else $('target-frame').classList.add('hidden');
    const d = new Date();
    $('clock').textContent = `${game.darkness() > 0.15 ? '☾' : '☀'} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
    if (panel && panel.onUpdate) panel.onUpdate();
  }
  function refreshQuest() {
    const p = game.player;
    const q = Quests.current(p), pr = Quests.progress(p);
    $('q-title').textContent = q.title;
    $('q-desc').textContent = q.desc;
    $('q-prog').textContent = pr.claimed ? '완료' : `${U.fmt(pr.cur)}/${U.fmt(pr.need)}`;
    $('quest-tracker').classList.toggle('done', pr.done && !pr.claimed);
  }
  function markInv() { $('inv-dot').classList.remove('hidden'); }
  function refreshAll() { refreshHud(); refreshQuest(); if (panel && panel.rerender) panel.rerender(); }

  // ---------------------------------------------------------------- minimap
  function drawMinimap() {
    const c = $('minimap'), g = c.getContext('2d');
    const p = game.player;
    const T = D.TILE, zoom = 2.2; // minimap px per tile
    g.save();
    g.clearRect(0, 0, c.width, c.height);
    g.beginPath(); g.arc(75, 75, 75, 0, Math.PI * 2); g.clip();
    g.fillStyle = '#111'; g.fillRect(0, 0, 150, 150);
    g.imageSmoothingEnabled = false;
    const ptx = p.x / T, pty = p.y / T;
    g.drawImage(World.mini, 75 - ptx * zoom, 75 - pty * zoom, D.MAP_W * zoom, D.MAP_H * zoom);
    const dot = (e, col, r) => {
      const x = 75 + (e.x / T - ptx) * zoom, y = 75 + (e.y / T - pty) * zoom;
      if (x < 0 || y < 0 || x > 150 || y > 150) return;
      g.fillStyle = col; g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
    };
    for (const m of game.monsters) if (!m.dead) dot(m, m.def.boss ? '#ff2a2a' : '#e05a4a', m.def.boss ? 4 : 1.6);
    for (const b of game.bots) dot(b, '#6fb4ff', 2);
    for (const n of game.npcs) if (n.def.title) dot(n, '#ffd76a', 2.4);
    const dest = Quests.destination(p);
    if (dest) {
      const x = U.clamp(75 + (dest.x / T - ptx) * zoom, 6, 144), y = U.clamp(75 + (dest.y / T - pty) * zoom, 6, 144);
      g.fillStyle = '#ffe38a'; g.font = 'bold 12px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('!', x, y);
    }
    g.fillStyle = '#fff'; g.strokeStyle = '#000'; g.lineWidth = 1;
    g.translate(75, 75); g.rotate([Math.PI, -Math.PI / 2, 0, Math.PI / 2][p.dir]);
    g.beginPath(); g.moveTo(0, 6); g.lineTo(-4, -4); g.lineTo(4, -4); g.closePath(); g.fill(); g.stroke();
    g.restore();
  }

  // ---------------------------------------------------------------- panels
  function close() {
    if (panel && panel.onClose) panel.onClose();
    $('panel-layer').innerHTML = ''; panel = null;
  }
  function makePanel(title, cls = 'center', backdrop = true) {
    const layer = $('panel-layer');
    layer.innerHTML = '';
    if (backdrop) { const b = document.createElement('div'); b.className = 'panel-backdrop'; b.onclick = close; layer.appendChild(b); }
    const el = document.createElement('div');
    el.className = 'panel ' + cls;
    if (title !== null) el.innerHTML = `<div class="panel-head"><h3>${title}</h3><button class="close-x">×</button></div><div class="panel-body"></div>`;
    layer.appendChild(el);
    const x = el.querySelector('.close-x'); if (x) x.onclick = close;
    return { el, body: el.querySelector('.panel-body') };
  }
  function isOpen() { return !!panel; }

  const OPENERS = {};
  function open(name, arg) {
    U.sfx.ui();
    if (panel && panel.name === name && !arg) return close();
    close();
    const fn = OPENERS[name];
    if (fn) { panel = fn(arg) || { name }; panel.name = name; }
    else { panel = OPENERS.soon(name); panel.name = name; }
  }

  OPENERS.soon = (name) => {
    const titles = { event: '이벤트', pass: '시즌 패스', guild: '혈맹', craft: '제작', exchange: '거래소', pvp: 'PvP', dungeon: '던전', collection: '수집', achievement: '업적' };
    const { body } = makePanel(titles[name] || '알림', 'center dialog');
    body.innerHTML = `<p style="text-align:center;color:#a39a88;padding:20px 0">업데이트 예정입니다.</p>`;
    return {};
  };

  // ------- big menu drawer (screenshot 2)
  OPENERS.menu = () => {
    const { el } = makePanel(null, 'menu-drawer');
    const top = [['shop', 'shop', '상점'], ['summon', 'summon', '소환'], ['event', 'event', '이벤트'], ['pass', 'pass', '시즌 패스'], ['skills', 'skill', '스킬'], ['inventory', 'inventory', '인벤토리']];
    const grid = [
      ['character', 'character', '캐릭터'], ['stats', 'star', '잠재력'], ['skills', 'blade', '전투 특성'], ['transcend', 'transcend', '초월', 1], ['weaponlook', 'sword', '무기 외형'], ['collection', 'collection', '결속'], ['skin', 'wings', '스킨'],
      ['teleport', 'teleport', '권능'], ['summon', 'summon', '서판 조합'], ['quests', 'quest', '퀘스트', 1], ['event', 'bell', '의뢰'], ['craft', 'craft', '제작'], ['achievement', 'achievement', '업적', 1], ['collection', 'spellbook', '수집', 1],
      ['guild', 'guild', '길드', 1], ['ranking', 'ranking', '순위'], ['exchange', 'exchange', '관계'], ['exchange', 'trade', '거래소'], ['pvp', 'pvp', 'PvP'], ['ranking', 'skull', '원수'], ['auto', 'auto', 'AI 모드'],
      ['map', 'compass', '위치 저장'],
    ];
    el.innerHTML = `
      <div class="menu-top">${top.map(([a, i, t]) => `<button data-a="${a}">${ico(i)}<span>${t}</span></button>`).join('')}
        <button class="close-x" style="position:absolute;right:10px;top:8px;font-size:34px">×</button></div>
      <div class="banner" id="menu-banner"><div><h4>개발자 노트</h4><small>자세히 보기</small></div></div>
      <div class="feature-grid">
        <button data-a="transcend" style="background:linear-gradient(90deg,rgba(0,0,0,.6),rgba(0,0,0,.1)),linear-gradient(120deg,#5a4630,#2a2016)">성소<small>초월 · 영혼의 성소</small></button>
        <button data-a="bosstime" style="background:linear-gradient(90deg,rgba(0,0,0,.5),rgba(0,0,0,.1)),radial-gradient(circle at 70% 60%,#d9a24a,#1a1206 60%)">이클립스 타임<small>보스 출현 정보</small></button>
        <button data-a="dungeon" style="background:linear-gradient(90deg,rgba(0,0,0,.6),rgba(0,0,0,.1)),radial-gradient(circle at 75% 50%,#7a3ad0,#150a24 65%)">던전<small>이클립스 균열 · 일일 3회</small></button>
        <button data-a="pvp" style="background:linear-gradient(90deg,rgba(0,0,0,.6),rgba(0,0,0,.1)),linear-gradient(120deg,#6a4a3a,#1d1410)">전장<small>업데이트 예정</small></button>
      </div>
      <div class="icon-grid">${grid.map(([a, i, t, dot]) => `<button data-a="${a}">${ico(i)}<span>${t}</span>${dot ? '<i class="dot"></i>' : ''}</button>`).join('')}</div>
      <div class="menu-side">
        <button data-a="mail" title="우편">${ico('mail')}</button>
        <button data-a="map" title="지도">${ico('map')}</button>
        <button data-a="settings" title="설정">${ico('settings')}</button>
        <button data-a="logout" title="종료">${ico('exit')}</button>
      </div>`;
    el.querySelector('.close-x').onclick = close;
    const banner = el.querySelector('#menu-banner');
    const pc = spriteCanvas('knight_gold', 88, 10, 0, 0.7); banner.appendChild(pc);
    el.onclick = (e) => {
      const b = e.target.closest('[data-a]'); if (!b) return;
      const a = b.dataset.a;
      if (a === 'auto') { close(); toggleAuto(); return; }
      if (a === 'logout') { game.save(); location.reload(); return; }
      open(a);
    };
    return {};
  };

  // ------- inventory
  OPENERS.inventory = () => {
    $('inv-dot').classList.add('hidden');
    const { body } = makePanel('인벤토리');
    const render = () => {
      const p = game.player;
      const eqRow = (slot, label) => {
        const it = p.equipped(slot);
        const def = it && D.ITEMS[it.id];
        return `<div class="equip-slot" data-slot="${slot}"><span class="lbl">${label}</span>${def ? `<div class="cell bg${def.grade}" style="width:44px;padding:5px">${ico(def.icon)}</div><div><div class="${D.GRADES[def.grade].cls}">${it.en ? '+' + it.en + ' ' : ''}${esc(def.name)}</div></div>` : '<span style="color:#666;font-size:12px">비어 있음</span>'}</div>`;
      };
      const st = p.stats;
      body.innerHTML = `<div class="inv-wrap">
        <div class="equip-box">${eqRow('weapon', '무기')}${eqRow('armor', '갑옷')}${eqRow('ring', '장신구')}
          <div class="stat-list">
            <div>공격력 <b>${st.atk}</b></div><div>방어력 <b>${st.def}</b></div>
            <div>최대 HP <b>${U.fmt(st.maxHp)}</b></div><div>최대 MP <b>${U.fmt(st.maxMp)}</b></div>
            <div>공격 속도 <b>+${st.atkSpd}%</b></div><div>시전 속도 <b>+${st.castSpd}%</b></div>
            <div>치명타 <b>${st.crit.toFixed(1)}%</b></div><div>회피 <b>${st.eva}</b></div>
            <div>피해 감소 <b>${st.dmgRed}</b></div><div>이동 속도 <b>+${st.moveSpd}%</b></div>
          </div></div>
        <div><div class="bag">${p.s.inv.map((it) => {
          const def = D.ITEMS[it.id];
          const eq = Object.values(p.s.equip).includes(it.uid);
          return `<div class="cell bg${def.grade} ${invSel === it.uid ? 'sel' : ''}" data-uid="${it.uid}" title="${esc(def.name)}">${ico(def.icon)}${it.en ? `<span class="e">+${it.en}</span>` : ''}${eq ? '<span class="eq">E</span>' : ''}${it.n > 1 ? `<span class="c">${U.fmt(it.n)}</span>` : ''}</div>`;
        }).join('')}</div>
        <div class="item-detail" id="item-detail"></div></div></div>`;
      renderDetail();
    };
    const renderDetail = () => {
      const p = game.player;
      const box = body.querySelector('#item-detail');
      const it = invSel && p.item(invSel);
      if (!it) { box.innerHTML = '<span style="color:#777">아이템을 선택하세요.</span>'; return; }
      const def = D.ITEMS[it.id];
      const eq = Object.values(p.s.equip).includes(it.uid);
      const lines = [];
      if (def.atk) lines.push(`공격력 +${def.atk}${it.en ? ` (강화 +${it.en * 2 + Math.max(0, it.en - 6) * 2})` : ''}`);
      if (def.def) lines.push(`방어력 +${def.def}${it.en && def.kind === 'armor' ? ` (강화 +${(it.en * 1.5).toFixed(0)})` : ''}`);
      if (def.hp) lines.push(`최대 HP +${def.hp}`);
      if (def.atkSpd) lines.push(`공격 속도 +${def.atkSpd}%`);
      if (def.cls) lines.push(`${D.CLASSES[def.cls].name} 전용`);
      if (def.lv > 1) lines.push(`착용 레벨 ${def.lv}`);
      const sell = Math.floor((def.price || 1000) * 0.3);
      box.innerHTML = `<h4 class="${D.GRADES[def.grade].cls}">${it.en ? '+' + it.en + ' ' : ''}${esc(def.name)} <small style="color:#888">[${D.GRADES[def.grade].name}]</small></h4>
        <div style="color:#bbb">${def.desc ? esc(def.desc) : ''}${lines.join(' · ')}</div>
        <div class="btns">
          ${D.isEquip(def) ? (eq ? `<button class="dark-btn" data-do="unequip">해제</button>` : `<button class="gold-btn" data-do="use">장착</button>`) : ''}
          ${!D.isEquip(def) && def.kind !== 'enchant' && def.kind !== 'ticket' ? `<button class="gold-btn" data-do="use">사용</button>` : ''}
          ${def.kind === 'ticket' ? `<button class="gold-btn" data-do="use">소환하기</button>` : ''}
          ${(def.kind === 'weapon' || def.kind === 'armor') ? `<button class="dark-btn" data-do="enchant">강화</button>` : ''}
          ${!eq && def.kind !== 'ticket' ? `<button class="red-btn" data-do="sell">판매 (${U.fmt(sell)} 아데나${it.n > 1 ? ' x' + it.n : ''})</button>` : ''}
        </div>`;
    };
    body.onclick = (e) => {
      const p = game.player;
      const c = e.target.closest('[data-uid]');
      if (c) { invSel = +c.dataset.uid; render(); return; }
      const s = e.target.closest('[data-slot]');
      if (s && p.s.equip[s.dataset.slot]) { invSel = p.s.equip[s.dataset.slot]; render(); return; }
      const b = e.target.closest('[data-do]'); if (!b) return;
      const it = p.item(invSel); if (!it) return;
      const def = D.ITEMS[it.id];
      if (b.dataset.do === 'use') p.useItem(it.uid, game);
      else if (b.dataset.do === 'unequip') { p.unequip(def.kind); }
      else if (b.dataset.do === 'enchant') { enchantItem(it); }
      else if (b.dataset.do === 'sell') {
        const sell = Math.floor((def.price || 1000) * 0.3) * it.n;
        p.s.gold += sell; p.removeItem(it.uid, it.n); invSel = null; U.sfx.coin(); toast(`${U.fmt(sell)} 아데나에 판매했습니다.`);
      }
      refreshHud(); render();
    };
    render();
    return { rerender: render };
  };

  function enchantItem(it) {
    const p = game.player;
    const def = D.ITEMS[it.id];
    const scroll = def.kind === 'weapon' ? 'sc_weapon' : 'sc_armor';
    if (!p.count(scroll)) return toast(`${D.ITEMS[scroll].name}이(가) 없습니다.`);
    const cur = it.en || 0;
    const safe = D.SAFE_ENCHANT[def.kind];
    if (cur >= 15) return toast('최대 강화 수치입니다.');
    const rate = cur < safe ? 1 : D.enchantRate(cur);
    if (cur >= safe && !confirm(`안전 강화 수치(+${safe})를 넘었습니다.\n성공 확률 ${(rate * 100).toFixed(0)}%, 실패 시 아이템이 증발합니다.\n강화하시겠습니까?`)) return;
    p.removeById(scroll);
    const inc = cur < safe && cur < 3 ? U.randi(1, 2) : 1; // Lineage-style: low levels can jump
    if (Math.random() < rate) {
      it.en = cur + inc;
      U.sfx.success();
      toast(`${def.name}이(가) 한 순간 ${def.kind === 'weapon' ? '파랗게' : '은색으로'} 빛납니다. (+${it.en})`, '#9fe0ff');
      chat(`+${it.en} ${def.name} 강화 성공!`, 'sys');
      if (it.en >= 7) announce(`<b>${esc(p.name)}</b>님이 <em>+${it.en} ${esc(def.name)}</em> 강화에 성공했습니다!`);
    } else {
      U.sfx.fail();
      toast(`${def.name}이(가) 강렬하게 빛나더니 증발되었습니다...`, '#ff8a80');
      chat(`+${cur} ${def.name} 강화 실패 (증발)`, 'warn');
      p.removeItem(it.uid); invSel = null;
    }
    p.recalc();
    Quests.check(game);
    refreshAll();
  }
  function openEnchant(target) {
    open('inventory');
    const p = game.player;
    const it = p.equipped(target);
    if (it) { invSel = it.uid; panel.rerender(); } else toast(`강화할 ${target === 'weapon' ? '무기' : '갑옷'}를 장착하세요.`);
  }

  // ------- shop
  OPENERS.shop = (shopId = 'general') => {
    const shop = D.SHOPS[shopId] || D.SHOPS.general;
    const { body } = makePanel(shop.title);
    const tabs = Object.keys(D.SHOPS);
    const render = () => {
      const p = game.player;
      body.innerHTML = `<div class="tabs">${tabs.map((t) => `<button data-tab="${t}" class="${t === shopId ? 'on' : ''}">${D.SHOPS[t].title}</button>`).join('')}<button data-tab="dia">다이아 상점</button></div>
        <div class="shop-list">${shop.items.map((id) => {
          const it = D.ITEMS[id];
          const lock = it.cls && it.cls !== p.cls;
          return `<div class="shop-item" style="${lock ? 'opacity:.45' : ''}">${ico(it.icon)}<div class="info"><div class="${D.GRADES[it.grade].cls}">${esc(it.name)}</div>
            <div class="price">${ico('gold')} ${U.fmt(it.price)}</div><div style="font-size:11px;color:#888">${it.cls ? D.CLASSES[it.cls].name + ' 전용 · ' : ''}${it.lv ? 'Lv.' + it.lv : ''}${it.desc ? esc(it.desc).slice(0, 26) : ''}${it.atk ? ' 공격 +' + it.atk : ''}${it.def ? ' 방어 +' + it.def : ''}</div></div>
            <div class="qty">${D.isEquip(it) ? `<button class="dark-btn" data-buy="${id}" data-n="1">구매</button>` : `<button class="dark-btn" data-buy="${id}" data-n="1">1</button><button class="dark-btn" data-buy="${id}" data-n="10">10</button><button class="dark-btn" data-buy="${id}" data-n="100">100</button>`}</div></div>`;
        }).join('')}</div>`;
    };
    body.onclick = (e) => {
      const t = e.target.closest('[data-tab]');
      if (t) { if (t.dataset.tab === 'dia') return open('summon'); return open('shop', t.dataset.tab); }
      const b = e.target.closest('[data-buy]'); if (!b) return;
      const p = game.player, it = D.ITEMS[b.dataset.buy], n = +b.dataset.n;
      const cost = it.price * n;
      if (p.s.gold < cost) return toast('아데나가 부족합니다.', '#ff8a80');
      p.s.gold -= cost; p.addItem(it.id, n); U.sfx.coin();
      toast(`${it.name} ${n}개 구매`); refreshHud();
    };
    render();
    return {};
  };

  // ------- skills
  OPENERS.skills = () => {
    const { body } = makePanel('스킬');
    const p = game.player;
    body.innerHTML = `<p style="color:#a39a88;margin-top:0">${esc(p.classDef.name)} 전용 스킬 · 단축키 1~4 · AI 모드에서 자동 사용</p>` +
      p.classDef.skills.map((id, i) => {
        const s = D.SKILLS[id];
        return `<div class="list-row"><div style="display:flex;gap:12px;align-items:center"><div class="slot skill" style="width:48px;height:48px">${ico(s.icon)}<span class="n">${i + 1}</span></div>
          <div><b style="color:#e9d7a8">${s.name}</b><div class="sub">${s.desc}</div></div></div><div class="sub">MP ${s.mp} · 쿨 ${s.cd}s</div></div>`;
      }).join('') +
      `<div class="list-row"><div style="display:flex;gap:12px;align-items:center"><div class="slot skill" style="width:48px;height:48px">${ico('sprint')}</div><div><b style="color:#e9d7a8">질주</b><div class="sub">3초간 이동속도 45% 증가 (L.Shift)</div></div></div><div class="sub">쿨 12s</div></div>`;
    return {};
  };

  // ------- quests
  OPENERS.quests = () => {
    const { body } = makePanel('퀘스트');
    const render = () => {
      const p = game.player;
      const pr = Quests.progress(p);
      body.innerHTML = D.QUESTS.map((q, i) => {
        const cur = i === p.s.quest, done = i < p.s.quest;
        const r = q.reward;
        const rw = [r.gold ? `아데나 ${U.fmt(r.gold)}` : '', r.dia ? `다이아 ${r.dia}` : '', ...(r.items ? Object.keys(r.items).map((k) => `${D.ITEMS[k].name} x${r.items[k]}`) : [])].filter(Boolean).join(', ');
        return `<div class="list-row ${cur ? 'cur' : ''} ${done ? 'done' : ''}"><div><b>${q.title}</b><div class="sub">${q.desc}${q.n ? ` (${q.n})` : ''} · 보상: ${rw}</div></div>
          <div>${done ? '완료' : cur ? (pr.done ? '<button class="gold-btn" data-claim>보상 받기</button>' : `${pr.cur}/${pr.need}`) : '🔒'}</div></div>`;
      }).join('') + (Quests.isDaily(p) ? `<div class="list-row cur"><div><b>${D.DAILY_QUEST.title}</b><div class="sub">${D.DAILY_QUEST.desc} · 매일 초기화</div></div><div>${pr.claimed ? '완료' : pr.done ? '<button class="gold-btn" data-claim>보상 받기</button>' : `${pr.cur}/${pr.need}`}</div></div>` : '');
    };
    body.onclick = (e) => { if (e.target.closest('[data-claim]')) { Quests.claim(game); render(); } };
    render();
    return { rerender: render };
  };

  // ------- character
  OPENERS.character = () => {
    const { body } = makePanel('캐릭터');
    const p = game.player, st = p.stats;
    const cv = spriteCanvas(p.sheet, 160, 10, 0);
    const card = p.s.card && D.CARD_BY_ID[p.s.card];
    body.innerHTML = `<div style="display:flex;gap:18px;flex-wrap:wrap"><div id="char-cv" style="background:radial-gradient(#3a2a20,#0e0b09);border:1px solid var(--line)"></div>
      <div style="flex:1;min-width:220px"><h2 style="margin:0;color:#e9d7a8">${esc(p.name)} <small style="font-size:14px;color:#a39a88">Lv.${p.s.lv} ${p.classDef.name}</small></h2>
      <div style="margin:6px 0 10px;color:#a39a88">전투력 <b style="color:#ffd76a">${U.fmt(p.power)}</b> · 처치 ${U.fmt(p.s.kills)} · 플레이 ${Math.floor(p.s.playTime / 60)}분</div>
      ${card ? `<div style="margin-bottom:10px">초월: <b class="${D.GRADES[card.grade].cls}">[${D.GRADES[card.grade].name}] ${esc(card.name)}</b></div>` : '<div style="margin-bottom:10px;color:#777">초월 없음</div>'}
      <div class="stat-list" style="columns:2">
        <div>공격력 <b>${st.atk}</b></div><div>방어력 <b>${st.def}</b></div><div>HP <b>${U.fmt(st.maxHp)}</b></div><div>MP <b>${U.fmt(st.maxMp)}</b></div>
        <div>공격 속도 <b>+${st.atkSpd}%</b></div><div>시전 속도 <b>+${st.castSpd}%</b></div><div>치명타 <b>${st.crit.toFixed(1)}%</b></div><div>회피 <b>${st.eva}</b></div>
        <div>피해 감소 <b>${st.dmgRed}</b></div><div>이동 속도 <b>+${st.moveSpd}%</b></div></div></div></div>`;
    body.querySelector('#char-cv').appendChild(cv);
    return {};
  };

  // ------- teleport
  OPENERS.teleport = () => {
    const { body } = makePanel('순간이동');
    body.innerHTML = `<p style="margin-top:0;color:#a39a88">원하는 사냥터로 즉시 이동합니다.</p>` + D.TELEPORTS.map((t, i) =>
      `<div class="list-row"><div><b>${t.name}</b> <span class="sub">${t.lv}</span></div><button class="dark-btn" data-tp="${i}">${t.cost ? U.fmt(t.cost) + ' 아데나' : '무료'}</button></div>`).join('');
    body.onclick = (e) => {
      const b = e.target.closest('[data-tp]'); if (!b) return;
      const t = D.TELEPORTS[+b.dataset.tp], p = game.player;
      if (p.s.gold < t.cost) return toast('아데나가 부족합니다.', '#ff8a80');
      p.s.gold -= t.cost; close();
      game.teleportPlayer(t.x * D.TILE, t.y * D.TILE);
    };
    return {};
  };

  // ------- NPC dialog
  OPENERS.npc = (npc) => {
    const d = npc.def;
    const { body } = makePanel(esc(d.name), 'center dialog');
    const cv = spriteCanvas(d.sheet, 96, 10, 0, 0.8);
    body.innerHTML = `<div class="npc-talk"><div id="npc-cv"></div><p>${esc(d.talk)}</p></div><div class="dialog-btns">
      ${d.shop ? `<button class="gold-btn" data-do="shop">거래하기</button>` : ''}
      ${d.teleport ? `<button class="gold-btn" data-do="tp">순간이동</button><button class="dark-btn" data-do="dg">이클립스 균열</button><button class="dark-btn" data-do="boss">보스 정보</button>` : ''}
      ${d.transcend ? `<button class="gold-btn" data-do="tr">초월</button><button class="dark-btn" data-do="summon">초월 소환</button>` : ''}
      <button class="dark-btn" data-do="bye">대화 종료</button></div>`;
    body.querySelector('#npc-cv').appendChild(cv);
    body.onclick = (e) => {
      const b = e.target.closest('[data-do]'); if (!b) return;
      const a = b.dataset.do;
      if (a === 'shop') open('shop', d.shop);
      else if (a === 'tp') open('teleport');
      else if (a === 'dg') open('dungeon');
      else if (a === 'boss') open('bosstime');
      else if (a === 'tr') open('transcend');
      else if (a === 'summon') open('summon');
      else close();
    };
    return {};
  };

  // ------- ranking (fake server ranking incl. bots)
  OPENERS.ranking = () => {
    const { body } = makePanel('순위');
    const p = game.player;
    const rows = game.bots.map((b) => ({ name: b.name, guild: b.guild, lv: b.lv, cls: b.classDef.name, power: Math.round(b.stats.atk * 10 + b.maxHp + b.lv * 50 + b.stats.atkSpd * 15) }));
    rows.push({ name: p.name, guild: '', lv: p.s.lv, cls: p.classDef.name, power: p.power, me: true });
    rows.sort((a, b) => b.lv - a.lv || b.power - a.power);
    body.innerHTML = `<div class="tabs"><button class="on">레벨 순위</button></div>` + rows.map((r, i) =>
      `<div class="list-row ${r.me ? 'me' : ''}"><div><b style="display:inline-block;width:34px;color:${i < 3 ? '#ffd76a' : '#aaa'}">${i + 1}</b>${esc(r.name)} <span class="sub">${r.guild ? '[' + esc(r.guild) + '] ' : ''}${r.cls}</span></div><div class="sub">Lv.${r.lv} · 전투력 ${U.fmt(r.power)}</div></div>`).join('');
    return {};
  };

  // ------- settings
  OPENERS.settings = () => {
    const { body } = makePanel('설정', 'center dialog');
    const p = game.player;
    body.innerHTML = `<div class="list-row"><span>효과음</span><button class="dark-btn" data-do="snd">${game.muted ? '꺼짐' : '켜짐'}</button></div>
      <div class="list-row"><span>자동 물약 (HP 55% 이하)</span><button class="dark-btn" data-do="pot">${p.s.autoPotion ? '켜짐' : '꺼짐'}</button></div>
      <div class="list-row"><span>게임 저장</span><button class="dark-btn" data-do="save">저장</button></div>
      <div class="list-row"><span>저장 삭제 후 처음부터</span><button class="red-btn" data-do="reset">초기화</button></div>
      <p class="sub" style="color:#888;font-size:12px;line-height:1.6">조작: 클릭 이동/공격 · WASD 이동 · 1~4 스킬 · 5~8 아이템 · Space 근처 적 공격 · G AI 모드 · Shift 질주 · I 인벤토리 · K 스킬 · U 상점 · C 캐릭터 · J 퀘스트 · Y 초월 · P 시즌 패스 · O 보스 정보 · T 순간이동 · B 귀환 · M 지도 · Enter 채팅 · 마우스 휠 줌</p>`;
    body.onclick = (e) => {
      const b = e.target.closest('[data-do]'); if (!b) return;
      const a = b.dataset.do;
      if (a === 'snd') { game.muted = !game.muted; U.setMuted(game.muted); }
      if (a === 'pot') p.s.autoPotion = !p.s.autoPotion;
      if (a === 'save') { game.save(); toast('저장되었습니다.'); }
      if (a === 'reset' && confirm('정말 모든 진행 상황을 삭제할까요?')) { game.wipe(); return; }
      OPENERS.settings();
    };
    return {};
  };

  // ------- world map
  OPENERS.map = () => {
    const { body } = makePanel('지도');
    const c = document.createElement('canvas');
    const S = 4; c.width = D.MAP_W * S; c.height = D.MAP_H * S;
    const g = c.getContext('2d'); g.imageSmoothingEnabled = false;
    body.classList.add('bigmap');
    const draw = () => {
      g.drawImage(World.mini, 0, 0, c.width, c.height);
      g.font = 'bold 22px sans-serif'; g.textAlign = 'center'; g.lineWidth = 4; g.strokeStyle = '#000';
      const lbl = (t, x, y, col = '#fff') => { g.strokeText(t, x * S, y * S); g.fillStyle = col; g.fillText(t, x * S, y * S); };
      lbl('라스카노 마을', 90, 86, '#9fe0ff'); lbl('바람의 초원', 90, 40); lbl('망자의 묘지', 145, 70); lbl('오크 요새', 90, 128); lbl('고요한 숲', 30, 120);
      g.font = 'bold 16px sans-serif';
      lbl('☠ 뱀파이어 군주', 165, 80, '#ff6b5e'); lbl('☠ 미노타우르스 킹', 90, 162, '#ff6b5e');
      const p = game.player;
      g.fillStyle = '#fff'; g.beginPath(); g.arc(p.x / D.TILE * S, p.y / D.TILE * S, 7, 0, Math.PI * 2); g.fill();
      g.strokeStyle = '#e33'; g.lineWidth = 3; g.stroke();
    };
    draw();
    body.appendChild(c);
    const hint = document.createElement('p'); hint.className = 'sub'; hint.style.color = '#888'; hint.textContent = '지도를 클릭하면 해당 위치로 자동 이동합니다.';
    body.appendChild(hint);
    c.onclick = (e) => {
      const r = c.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * D.MAP_W * D.TILE, y = ((e.clientY - r.top) / r.height) * D.MAP_H * D.TILE;
      const f = World.findFree(x, y, 16);
      game.player.stopAll(); game.player.navigateTo(f.x, f.y); close();
    };
    return {};
  };
  OPENERS.mail = () => {
    const { body } = makePanel('우편', 'center dialog');
    const p = game.player;
    const got = p.s.mailClaimed;
    body.innerHTML = `<div class="list-row"><div><b>[운영자] 오픈 기념 선물</b><div class="sub">초월 소환권 x5, 다이아 500</div></div>${got ? '<span class="sub">수령 완료</span>' : '<button class="gold-btn" data-do="get">받기</button>'}</div>`;
    body.onclick = (e) => {
      if (!e.target.closest('[data-do]')) return;
      p.s.mailClaimed = true; p.addItem('ticket', 5); p.s.dia += 500; U.sfx.coin(); toast('선물을 수령했습니다!', '#ffe38a'); refreshHud(); OPENERS.mail();
    };
    return {};
  };
  OPENERS.stats = OPENERS.character;
  OPENERS.weaponlook = () => OPENERS.transcend();
  OPENERS.skin = () => OPENERS.transcend();

  // Quest tracker click: claim if done, otherwise teleport straight to where the quest happens.
  // Works mid-hunt: the current target is dropped and AI mode resumes on arrival.
  function questGo() {
    const p = game.player;
    if (!p || p.dead) return;
    if (Quests.claim(game)) return;
    if (p.teleporting) return;
    if (Dungeon.active) return toast('던전에서는 퀘스트 이동을 할 수 없습니다.', '#ff8a80');
    const q = Quests.current(p);
    const dest = Quests.destination(p);
    if (q.type === 'equipCard') return open('transcend');
    if (q.type === 'enchant') return openEnchant('weapon');
    if (dest && dest.npc) {
      const n = game.npcs.find((x) => x.def.id === dest.npc);
      p.auto = false;
      const walk = () => { p.talkTo = n; };
      if (U.dist(p, n) < 900) { p.stopAll(); walk(); }
      else { toast(`${n.def.name}에게 이동합니다.`, '#9fe0ff'); game.teleportPlayer(n.x, n.y + 90, { then: walk }); }
      return;
    }
    // kill quests go to that monster's spawn; level / daily quests go to the best hunting ground
    const spawn = dest ? D.SPAWNS.find((s) => s.m === q.m) : game.bestSpawnNear(p);
    if (!spawn) return open('quests');
    const cx = spawn.x * D.TILE, cy = spawn.y * D.TILE;
    const hunt = () => { if (!p.auto) { p.auto = true; refreshHud(); } };
    if (Math.hypot(p.x - cx, p.y - cy) < spawn.r * D.TILE) {
      hunt(); toast('이미 사냥터에 있습니다. AI 모드로 사냥합니다.', '#9fe0ff'); return;
    }
    toast(`${D.MONSTERS[spawn.m].name} 사냥터로 순간이동합니다.`, '#9fe0ff');
    game.teleportPlayer(cx + U.rand(-80, 80), cy + U.rand(-80, 80), { then: hunt });
  }

  function toggleAuto() {
    const p = game.player;
    p.auto = !p.auto;
    if (p.auto && p.inTown) {
      const sp = game.bestSpawnNear(p);
      if (sp) { p.navigateTo(sp.x * D.TILE, sp.y * D.TILE); toast('AI 모드: 사냥터로 이동합니다.', '#9fe0ff'); }
    } else toast(p.auto ? 'AI 모드 시작' : 'AI 모드 종료', '#9fe0ff');
    if (!p.auto) p.stopAll();
    refreshHud();
  }

  // ---------------------------------------------------------------- init
  function init(g) {
    game = g;
    buildSlots();
    document.querySelectorAll('#hud [data-act]').forEach((b) => {
      b.addEventListener('click', () => {
        const a = b.dataset.act;
        if (a === 'town') return game.useTownScroll();
        open(a);
      });
    });
    $('btn-auto').onclick = toggleAuto;
    $('btn-target').onclick = () => game.attackNearest();
    $('btn-sprint').onclick = () => game.player.sprint();
    $('auto-potion').onclick = () => { game.player.s.autoPotion = !game.player.s.autoPotion; toast(`자동 물약 ${game.player.s.autoPotion ? '켜짐' : '꺼짐'}`); refreshHud(); };
    $('minimap').onclick = () => open('map');
    $('quest-tracker').onclick = questGo;
    const input = $('chat-input');
    input.addEventListener('keydown', (e) => {
      e.stopPropagation();
      if (e.key === 'Enter') {
        const v = input.value.trim();
        if (v) game.say(game.player, v);
        input.value = ''; input.blur();
      } else if (e.key === 'Escape') input.blur();
    });
    refreshAll();
  }

  return {
    init, iconImg, spriteCanvas, drawSprite, chat, announce, toast, skillName, refreshHud, refreshQuest, refreshAll, markInv,
    flashSlot, drawMinimap, open, close, isOpen, openEnchant, toggleAuto, useSlotItem, esc, ico, makePanel, OPENERS,
    get panelName() { return panel && panel.name; },
    setPanel(p) { panel = p; },
  };
})();
