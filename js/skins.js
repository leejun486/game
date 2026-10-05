'use strict';
// 캐릭터 스킨: 직업별 외형(옷·머리색), 상점 구매와 보스 드랍, 장착·보유 효과, 스킨 화면.
//  - 스킨은 몸 시트만 바꾸고 무기는 무기 외형(js/looks.js)이 그대로 그립니다.
//  - 초월 카드로 변신 중이면 변신 모습이 우선입니다 (Player.recalc).
//  - 새 스킨 시트는 tools/build_skins.py로 만들고 assets/sprites/skins_meta.js에 행 정보가 들어갑니다.
const Skins = (() => {
  // how: { gold } 아데나 구매 · { dia } 다이아 구매 · { boss: [몬스터 id], chance } 보스 처치 시 확률 획득
  const LIST = [
    { id: 'k_default', cls: 'knight', name: '강철 기사', grade: 0, sheet: 'knight', how: {} },
    { id: 'k_royal', cls: 'knight', name: '왕실 근위대', grade: 1, sheet: 'skin_k_royal', how: { gold: 300000 } },
    { id: 'k_gold', cls: 'knight', name: '황금 기사', grade: 2, sheet: 'knight_gold', how: { dia: 800 } },
    { id: 'k_dark', cls: 'knight', name: '흑철 기사', grade: 3, sheet: 'knight_dark', how: { dia: 1800 } },
    { id: 'k_crimson', cls: 'knight', name: '진홍 성기사', grade: 3, sheet: 'skin_k_crimson', how: { boss: ['vampire'], chance: 0.1 } },
    { id: 'k_legion', cls: 'knight', name: '불멸 군단장', grade: 4, sheet: 'skin_k_legion', how: { boss: ['minotaur', 'frost_giant', 'ignis', 'nox_apostle', 'nox'], chance: 0.04 } },
    { id: 'e_default', cls: 'elf', name: '숲의 궁수', grade: 0, sheet: 'elf', how: {} },
    { id: 'e_red', cls: 'elf', name: '진홍 사냥꾼', grade: 1, sheet: 'elf_red', how: { gold: 300000 } },
    { id: 'e_night', cls: 'elf', name: '밤의 추적자', grade: 2, sheet: 'skin_e_night', how: { dia: 800 } },
    { id: 'e_snow', cls: 'elf', name: '설원의 사수', grade: 3, sheet: 'skin_e_snow', how: { dia: 1800 } },
    { id: 'e_dawn', cls: 'elf', name: '새벽의 수호자', grade: 4, sheet: 'skin_e_dawn', how: { boss: ['minotaur', 'frost_giant', 'ignis', 'nox_apostle', 'nox'], chance: 0.04 } },
    { id: 'm_default', cls: 'mage', name: '견습 마법사', grade: 0, sheet: 'mage', how: {} },
    { id: 'm_white', cls: 'mage', name: '백의 현자', grade: 1, sheet: 'mage_white', how: { gold: 300000 } },
    { id: 'm_flame', cls: 'mage', name: '화염 술사', grade: 2, sheet: 'skin_m_flame', how: { dia: 800 } },
    { id: 'm_abyss', cls: 'mage', name: '심연의 마녀', grade: 3, sheet: 'skin_m_abyss', how: { dia: 1800 } },
    { id: 'm_star', cls: 'mage', name: '별빛 대마법사', grade: 4, sheet: 'skin_m_star', how: { boss: ['minotaur', 'frost_giant', 'ignis', 'nox_apostle', 'nox'], chance: 0.04 } },
  ];
  const BY_ID = {};
  for (const s of LIST) BY_ID[s.id] = s;
  const DEFAULT = { knight: 'k_default', elf: 'e_default', mage: 'm_default' };
  const EQUIP_DEF = [0, 1, 2, 4, 6];      // 장착 효과: 방어력
  const OWN_HP = [0, 10, 25, 50, 100];    // 보유 효과: 스킨 하나마다 최대 HP

  // ---------------------------------------------------------------- state
  function migrate(p) {
    p.s.skins = p.s.skins || {};
    p.s.skins[DEFAULT[p.cls]] = 1;
    if (p.s.skin && (!BY_ID[p.s.skin] || BY_ID[p.s.skin].cls !== p.cls || !p.s.skins[p.s.skin])) p.s.skin = null;
  }
  const current = (p) => p.s.skin || DEFAULT[p.cls];
  // 몸 시트 이름 (Player.recalc가 '_nw' 무기 없는 시트로 바꿔 씀)
  const sheet = (p) => (BY_ID[current(p)] || BY_ID[DEFAULT[p.cls]]).sheet;
  function bonuses(p) {
    let hp = 0;
    for (const id in p.s.skins || {}) if (BY_ID[id]) hp += OWN_HP[BY_ID[id].grade];
    return [{ def: EQUIP_DEF[BY_ID[current(p)].grade] }, { hp }];
  }
  function grant(p, id, why) {
    const s = BY_ID[id];
    if (!s || p.s.skins[id]) return false;
    p.s.skins[id] = 1;
    p.recalc();
    const G = D.GRADES[s.grade];
    UI.toast(`스킨 획득: ${s.name}`, G.color);
    UI.chat(`스킨 [${s.name}]을(를) 획득했습니다.${why ? ` (${why})` : ''}`, 'drop');
    if (s.grade >= 3) UI.announce(`<b>${UI.esc(p.name)}</b>님이 <em>${UI.esc(s.name)}</em> 스킨을 획득했습니다!`);
    U.sfx.success();
    UI.refreshHud();
    return true;
  }
  // 보스 처치: 내 직업의 아직 없는 드랍 스킨을 확률로 획득 (Combat.onKill)
  function onBossKill(game, def) {
    const p = game.player;
    for (const s of LIST) {
      if (s.cls !== p.cls || p.s.skins[s.id] || !s.how.boss || !s.how.boss.includes(def.id)) continue;
      if (Math.random() < s.how.chance) grant(p, s.id, `${def.name} 처치`);
    }
  }
  function howText(s) {
    const h = s.how;
    if (h.gold) return `상점: ${U.fmt(h.gold)} 아데나`;
    if (h.dia) return `상점: 다이아 ${U.fmt(h.dia)}`;
    if (h.boss) return `보스 처치 시 ${Math.round(h.chance * 100)}% 확률: ${h.boss.map((b) => D.MONSTERS[b]?.name || b).join(', ')}`;
    return '기본 외형';
  }

  // ---------------------------------------------------------------- drawing
  // 무기 외형까지 얹어 그림 (row/col은 LPC 행·열)
  function draw(g, s, p, row, col, x, y, scale, t) {
    const nw = window.SPRITE_ROWS[s.sheet + '_nw'] ? s.sheet + '_nw' : s.sheet;
    if (!Sprites[nw]) return;
    Looks.drawComposite(g, nw, Looks.current(p), row, col, x, y, scale, { t });
  }
  function thumb(cv, s, p) {
    const g = cv.getContext('2d');
    g.imageSmoothingEnabled = false;
    g.clearRect(0, 0, cv.width, cv.height);
    draw(g, s, p, 10, 0, cv.width / 2, cv.height * 0.84, cv.height / 80, 0);
  }

  // ---------------------------------------------------------------- UI
  const { esc, ico } = UI;
  let sel = null, raf = 0;
  function previewLoop(canvas, p) {
    cancelAnimationFrame(raf);
    const g = canvas.getContext('2d');
    const t0 = performance.now();
    const loop = () => {
      if (!canvas.isConnected) return;
      const t = (performance.now() - t0) / 1000;
      const s = BY_ID[sel];
      const W = canvas.width, H = canvas.height;
      g.clearRect(0, 0, W, H);
      g.imageSmoothingEnabled = false;
      const col = D.GRADES[s.grade].color;
      const rg = g.createRadialGradient(W / 2, H * 0.52, 10, W / 2, H * 0.52, H * 0.5);
      rg.addColorStop(0, Looks.hexA(col, 0.35)); rg.addColorStop(1, Looks.hexA(col, 0));
      g.fillStyle = rg; g.fillRect(0, 0, W, H);
      g.fillStyle = 'rgba(0,0,0,0.5)'; g.beginPath(); g.ellipse(W / 2, H * 0.86, W * 0.16, H * 0.03, 0, 0, Math.PI * 2); g.fill();
      // 아래 → 오른쪽 → 위 → 왼쪽으로 돌며 걷기, 방향마다 잠깐 섰다가
      const dirs = [10, 11, 8, 9], k = Math.floor(t / 2.2) % 4, local = t % 2.2;
      const row = dirs[k], c = local < 0.5 ? 0 : walkCol(s.sheet, local * 10);
      draw(g, s, p, row, c, W / 2, H * 0.86, H / 88, t);
      // 영웅 이상: 발밑에서 빛 알갱이가 피어오름
      if (s.grade >= 3) {
        g.globalCompositeOperation = 'lighter';
        for (let i = 0; i < 10; i++) {
          const ph = (t * 0.6 + i / 10) % 1, a = i * 2.4;
          g.fillStyle = Looks.hexA(col, 0.7 * (1 - ph));
          g.fillRect(W / 2 + Math.cos(a) * 46, H * 0.86 - ph * 150, 4, 4);
        }
        g.globalCompositeOperation = 'source-over';
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
  }

  function open() {
    const p = Game.player;
    const layer = document.getElementById('panel-layer');
    layer.innerHTML = '';
    const el = document.createElement('div');
    el.className = 'panel full';
    layer.appendChild(el);
    const mine = LIST.filter((s) => s.cls === p.cls);
    if (!sel || BY_ID[sel].cls !== p.cls) sel = current(p);
    const render = () => {
      const s = BY_ID[sel], owned = !!p.s.skins[sel], eq = current(p) === sel;
      const list = mine.slice().sort((a, b) => (!!p.s.skins[b.id] - !!p.s.skins[a.id]) || a.grade - b.grade);
      let hp = 0; for (const id in p.s.skins) if (BY_ID[id]) hp += OWN_HP[BY_ID[id].grade];
      const h = s.how;
      const buy = owned ? '' : h.gold ? `<button class="gold-btn" data-buy>${U.fmt(h.gold)} 아데나로 구매</button>`
        : h.dia ? `<button class="gold-btn" data-buy>${ico('diamond', 'dia')} ${U.fmt(h.dia)} 구매</button>` : '';
      el.innerHTML = `<div class="tr-wrap">
        <div class="tr-side">
          <button data-go="transcend">${ico('transcend')}초월</button>
          <button data-go="weaponlook">${ico('sword')}무기 외형</button>
          <button class="on">${ico('wings')}스킨</button>
          <button data-go="collection">${ico('collection')}수집</button>
        </div>
        <div class="tr-main">
          <div class="tr-head"><h3>스킨</h3>
            <div style="display:flex;gap:18px;align-items:center">
              <span class="cur">${ico('gold')}<b>${U.fmt(p.s.gold)}</b></span>
              <span class="cur">${ico('diamond', 'dia')}<b>${U.fmt(p.s.dia)}</b></span>
              <button class="close-x" data-close style="font-size:30px">⇥</button></div></div>
          <div class="tr-content">
            <div class="tr-info">
              <div class="grade ${D.GRADES[s.grade].cls}">${D.GRADES[s.grade].name}</div>
              <div class="cname" style="color:${D.GRADES[s.grade].color}">${owned ? '' : '🔒 '}${esc(s.name)}</div>
              <div class="stats">
                <div>장착 효과: 방어력 <span>+${EQUIP_DEF[s.grade]}</span></div>
                <div>보유 효과: 최대 HP <span>+${OWN_HP[s.grade]}</span></div>
                <div style="color:#c9b0e8">획득: ${esc(howText(s))}</div>
                ${s.grade >= 3 ? '<div style="color:#e8c070">✦ 스킨 화면 빛 효과</div>' : ''}</div>
              <div class="stats" style="font-size:12.5px;color:#a39a88">수집 ${mine.filter((x) => p.s.skins[x.id]).length}/${mine.length}<br>전체 보유 효과: 최대 HP +${hp}</div>
              <p style="font-size:12px;color:#888;line-height:1.6">스킨은 겉모습만 바꾸고 무기 외형은 그대로 보입니다. 초월 카드로 변신하면 변신 모습이 먼저 보입니다.</p>
            </div>
            <div class="tr-center"><canvas id="sk-cv" width="420" height="440"></canvas></div>
            <div class="tr-right">
              <div class="card-grid">${list.map((x) => `<div class="card gr${x.grade} ${x.id === sel ? 'sel' : ''} ${p.s.skins[x.id] ? '' : 'locked'}" data-skin="${x.id}"><canvas width="96" height="128"></canvas>
                ${current(p) === x.id ? '<span class="eqb">E</span>' : ''}<div class="nm ${D.GRADES[x.grade].cls}">${esc(x.name)}</div></div>`).join('')}</div>
              <div class="tr-actions">${eq ? '<button class="dark-btn" disabled>장착 중</button>' : owned ? '<button class="gold-btn" data-equip>장착</button>' : buy || `<button class="dark-btn" disabled>${h.boss ? '보스 처치로 획득' : '미보유'}</button>`}</div>
            </div>
          </div>
        </div></div>`;
      el.querySelectorAll('.tr-head img').forEach((i) => { i.style.width = '16px'; i.style.verticalAlign = '-3px'; });
      el.querySelectorAll('[data-skin] canvas').forEach((cv) => thumb(cv, BY_ID[cv.parentElement.dataset.skin], p));
      previewLoop(el.querySelector('#sk-cv'), p);
    };
    el.onclick = (e) => {
      const t = e.target;
      const c = t.closest('[data-skin]'); if (c) { sel = c.dataset.skin; U.sfx.ui(); return render(); }
      if (t.closest('[data-close]')) { cancelAnimationFrame(raf); UI.close(); return; }
      const go = t.closest('[data-go]'); if (go) { cancelAnimationFrame(raf); return UI.open(go.dataset.go, go.dataset.arg); }
      if (t.closest('[data-equip]')) {
        p.s.skin = sel; p.recalc(); U.sfx.success();
        UI.toast(`${BY_ID[sel].name} 스킨을 장착했습니다.`, D.GRADES[BY_ID[sel].grade].color);
        UI.refreshHud(); return render();
      }
      if (t.closest('[data-buy]')) {
        const s = BY_ID[sel], h = s.how;
        if (h.gold && p.s.gold < h.gold) return UI.toast('아데나가 부족합니다.', '#ff8a7a');
        if (h.dia && p.s.dia < h.dia) return UI.toast('다이아가 부족합니다.', '#ff8a7a');
        if (h.gold) p.s.gold -= h.gold; else p.s.dia -= h.dia;
        grant(p, s.id, '상점 구매');
        return render();
      }
    };
    render();
    return { name: 'skin', rerender: render, onClose: () => cancelAnimationFrame(raf) };
  }

  UI.OPENERS.skin = open;
  return { LIST, BY_ID, DEFAULT, migrate, current, sheet, bonuses, grant, onBossKill, howText };
})();
