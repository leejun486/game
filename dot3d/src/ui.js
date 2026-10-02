import { item, itemDesc, drawItemIcon, RARITY, WEAPONS, OUTFITS } from './items.js';
import { EVOS, branchOf, rankOf, freePoints, RANK_NAME, MAX_RANK } from './evolve.js';
import { expNeed, SKILL_LEVEL } from './entities.js';

// HTML HUD: 체력, 스킬, 임무, 배너, 대화창, 보스 체력, 적 체력바, 상호작용 표시
export class UI {
  constructor(game) {
    this.game = game;
    const $ = (id) => document.getElementById(id);
    this.el = {
      hud: $('hud'), hpFill: $('hp-fill'), hpLag: $('hp-lag'), hpText: $('hp-text'),
      
      quest: $('quest-text'), questTitle: $('quest-title'),
      banner: $('banner'), bannerMain: $('banner-main'), bannerSub: $('banner-sub'),
      dialog: $('dialog'), dName: $('dialog-name'), dText: $('dialog-text'),
      prompt: $('prompt'), boss: $('boss'), bossFill: $('boss-fill'), bossLag: $('boss-lag'), bossName: $('boss-name'),
      bars: $('hpbars'), title: $('title'), over: $('gameover'), combo: $('combo'), comboN: $('combo-n'),
      kills: $('kills'), best: $('best'), toast: $('toast'), flash: $('flash'),
    };
    this.hpLag = 1;
    this.bossLag = 1;
    this.dialogState = null;
    this.bars = new Map();
    this.bannerT = 0;
    this.toastT = 0;
  }

  showHud(v) { this.el.hud.classList.toggle('hidden', !v); }

  // 직업에 맞게 이름·초상화·버튼 이름을 바꿈
  setClass(cfg, pl = this.game.player) {
    drawPortrait(document.getElementById('portrait-cv'), cfg.id);
    document.getElementById('hero-name').innerHTML = `${cfg.title} <b>${cfg.name}</b><span class="lv">Lv.${pl?.level ?? 1}</span>`;
    this.refreshBag();
    const pr = this.game.progressOf ? this.game.progressOf(cfg.id) : null;
    for (const k of ['atk', 'dash', 'skill', 'skill2', 'skill3']) {
      // 파생 기술을 수련했으면 그 이름으로
      const slot = { skill: 1, skill2: 2, skill3: 3 }[k];
      const br = slot && pr ? branchOf(pr, cfg.id, pl?.level ?? 1, slot) : null;
      const t = br ? EVOS[cfg.id][slot][br].short + RANK_NAME[rankOf(pr, cfg.id, pl?.level ?? 1, slot)] : cfg.labels[k];
      document.getElementById('sk-' + k).textContent = t;
      document.querySelectorAll('.lbl-' + k).forEach((el) => (el.textContent = t));
    }
    document.querySelector('#combo span').textContent = cfg.hitWord;
  }

  setQuest(title, text) {
    const key = title + '|' + text;
    if (key === this.questKey) return;
    const titleChanged = !this.questKey || this.questKey.split('|')[0] !== title;
    this.questKey = key;
    this.el.questTitle.textContent = title;
    if (!titleChanged) { this.el.quest.innerHTML = text; return; }
    this.el.quest.innerHTML = text;
    this.el.quest.parentElement.classList.remove('pulse');
    void this.el.quest.parentElement.offsetWidth;
    this.el.quest.parentElement.classList.add('pulse');
  }

  banner(main, sub = '', dur = 2.6, cls = '') {
    this.el.bannerMain.textContent = main;
    this.el.bannerSub.textContent = sub;
    this.el.banner.className = 'show ' + cls;
    this.bannerT = dur;
  }

  // 쿨타임 표시: HUD 칸과 터치 버튼 모두
  slots(key) {
    this.slotCache = this.slotCache || {};
    if (!this.slotCache[key]) {
      this.slotCache[key] = [...document.querySelectorAll(`[data-slot="${key}"]`)].map((el) => ({ el, cd: el.querySelector('.cd'), t: el.querySelector('.cdt') }));
    }
    return this.slotCache[key];
  }

  setCd(key, remain, max) {
    this.cdState = this.cdState || {};
    const cooling = remain > 0.02;
    const txt = !cooling ? '' : remain >= 1 ? String(Math.ceil(remain)) : remain.toFixed(1);
    const pct = cooling ? ((remain / max) * 100).toFixed(1) + '%' : '0%';
    const prev = this.cdState[key];
    for (const s of this.slots(key)) {
      s.cd.style.setProperty('--p', pct);
      if (s.t.textContent !== txt) s.t.textContent = txt;
      s.el.classList.toggle('cooling', cooling);
      if (prev && !cooling) { s.el.classList.remove('ready'); void s.el.offsetWidth; s.el.classList.add('ready'); }
    }
    this.cdState[key] = cooling;
  }

  // 레벨이 모자라 잠긴 스킬 칸: 흑백 + 필요 레벨
  setLock(key, lv) {
    for (const s of this.slots(key)) {
      s.el.classList.toggle('locked', !!lv);
      if (lv) { s.cd.style.setProperty('--p', '0%'); const t = `Lv${lv}`; if (s.t.textContent !== t) s.t.textContent = t; s.el.classList.remove('cooling'); }
      else if (s.t.textContent.startsWith('Lv')) s.t.textContent = '';
    }
  }

  // ---------- 기술 수련 ----------
  showSkills(open) {
    document.getElementById('skills').classList.toggle('show', open);
    if (open) this.refreshSkills();
  }

  refreshSkills() {
    const g = this.game, p = g.player;
    const body = document.getElementById('skills-body');
    if (!body || !document.getElementById('skills').classList.contains('show')) return;
    const pr = g.progressOf(p.cls);
    const pts = freePoints(pr, p.level);
    body.innerHTML = `<div class="evo-pts">수련점 <b>${pts}</b> <small>레벨이 오를 때마다 1점 · 단계마다 1점</small></div>`;
    const keys = { 1: 'K', 2: 'L', 3: 'I' };
    for (const slot of [1, 2, 3]) {
      const E = EVOS[p.cls][slot];
      const r = pr.rank?.[slot] || (pr.evo?.[slot] ? 1 : 0);
      const br = pr.evo?.[slot];
      const next = r < MAX_RANK ? E.lv[r] : null;
      const canTrain = br && next && p.level >= next && pts > 0;
      const row = document.createElement('div');
      row.className = 'evo-row' + (p.level < E.lv[0] ? ' locked' : '');
      const pips = Array.from({ length: MAX_RANK }, (_, i) => `<i class="${i < r ? 'on' : ''}">${RANK_NAME[i + 1]}</i>`).join('');
      let status;
      if (p.level < E.lv[0]) status = `Lv.${E.lv[0]}에 수련 가능 (지금 Lv.${p.level})`;
      else if (!br) status = pts > 0 ? '<b style="color:#ffd76a">수련 가능!</b> 갈래를 고르세요' : '수련점이 없어요';
      else if (!next) status = '<b style="color:#ffd76a">각성 완료</b>';
      else status = `다음 단계 ${RANK_NAME[r + 1]}: Lv.${next}`;
      row.innerHTML = `<div class="evo-head"><span class="key">${keys[slot]}</span>${E.base}<span class="pips">${pips}</span><small>${status}</small></div>`;
      const opts = document.createElement('div');
      opts.className = 'evo-opts';
      for (const b of ['a', 'b']) {
        const B = E[b];
        const o = document.createElement('div');
        const mine = br === b;
        o.className = 'evo-opt' + (mine ? ' on' : '');
        const steps = [
          [1, B.desc], [2, '피해 증가 · 재사용 단축'], [3, '강화: ' + B.r3], [4, '피해 증가 · 재사용 단축'], [5, B.r5],
        ].map(([k, t]) => `<li class="${mine && r >= k ? 'got' : ''}"><em>${RANK_NAME[k]}</em> ${t}</li>`).join('');
        o.innerHTML = `<b>${B.name}</b><ul>${steps}</ul>`;
        if (p.level >= E.lv[0]) o.addEventListener('click', (e) => { e.stopPropagation(); g.chooseEvo(slot, b); });
        opts.append(o);
      }
      row.append(opts);
      if (br && next) {
        const btn = document.createElement('button');
        btn.className = 'evo-train' + (canTrain ? '' : ' off');
        btn.textContent = canTrain ? `${E[br].name} ${RANK_NAME[r + 1]}단계 수련 (수련점 1)` : p.level < next ? `${RANK_NAME[r + 1]}단계는 Lv.${next}부터` : '수련점이 부족해요';
        if (canTrain) btn.addEventListener('click', (e) => { e.stopPropagation(); g.trainEvo(slot); });
        row.append(btn);
      }
      body.append(row);
    }
  }

  // ---------- 가방 ----------
  showBag(open) {
    document.getElementById('bag').classList.toggle('show', open);
    if (open) this.refreshBag();
  }

  itemRow(id, cls, onClick) {
    const it = item(id);
    const row = document.createElement('div');
    row.className = 'it ' + cls;
    const cv = document.createElement('canvas');
    cv.width = cv.height = 16;
    drawItemIcon(cv, id);
    const txt = document.createElement('div');
    txt.innerHTML = `<span style="color:${RARITY[it.tier].color}">${it.name}</span><small>${RARITY[it.tier].name} · ${itemDesc(it, !cls.includes('locked-it'))}</small>`;
    row.append(cv, txt);
    if (onClick) row.addEventListener('click', (e) => { e.stopPropagation(); onClick(); });
    return row;
  }

  refreshBag() {
    const g = this.game;
    if (!g || !g.player || !document.getElementById('bag').classList.contains('show')) return;
    const p = g.player;
    const pr = g.progressOf(p.cls);
    document.getElementById('bag-stats').innerHTML =
      `${p.cfg.title} ${p.cfg.name} <b>Lv.${p.level}</b><br>경험치 <b>${Math.floor(p.exp)}</b> / ${expNeed(p.level)}<br>` +
      `최대 체력 <b>${p.maxHp}</b><br>공격력 <b>×${p.atkMul.toFixed(2)}</b><br>받는 피해 <b>-${Math.round(p.def * 100)}%</b>`;
    for (const [elId, id] of [['eq-weapon', pr.weapon], ['eq-outfit', pr.outfit]]) {
      const el = document.getElementById(elId);
      el.innerHTML = '';
      const r = this.itemRow(id, 'on');
      el.append(...r.childNodes);
    }
    const wl = document.getElementById('bag-weapons'), ol = document.getElementById('bag-outfits');
    wl.innerHTML = ''; ol.innerHTML = '';
    // 내 직업 무기 먼저, 다른 직업 무기는 흐리게. 아직 없는 장비는 자리만 보여줌
    for (const cls of [p.cls, ...Object.keys(WEAPONS).filter((c) => c !== p.cls)]) {
      for (const w of WEAPONS[cls]) {
        if (!g.inv.has(w.id)) { if (cls === p.cls) wl.append(this.itemRow(w.id, 'locked-it')); continue; }
        const mine = cls === p.cls;
        wl.append(this.itemRow(w.id, (pr.weapon === w.id ? 'on' : '') + (mine ? '' : ' other'), mine ? () => g.equipItem(w.id) : null));
      }
    }
    for (const o of [...OUTFITS].sort((a, b) => a.tier - b.tier)) {
      if (!g.inv.has(o.id)) { ol.append(this.itemRow(o.id, 'locked-it')); continue; }
      ol.append(this.itemRow(o.id, pr.outfit === o.id ? 'on' : '', () => g.equipItem(o.id)));
    }
  }

  // 쿨타임 중에 누르면 칸이 붉게 흔들림
  denied(key) {
    for (const s of this.slots(key)) { s.el.classList.remove('denied'); void s.el.offsetWidth; s.el.classList.add('denied'); }
  }

  // 오른쪽 아래 작은 저장 표시
  saveMark() {
    const el = document.getElementById('savemark');
    if (!el) return;
    el.classList.remove('show');
    void el.offsetWidth;
    el.classList.add('show');
  }

  toast(text, dur = 2.2) {
    this.el.toast.textContent = text;
    this.el.toast.classList.add('show');
    this.toastT = dur;
  }

  flash(color, strength) {
    const f = this.el.flash;
    f.style.transition = 'none';
    f.style.background = color;
    f.style.opacity = String(strength);
    requestAnimationFrame(() => { f.style.transition = 'opacity 0.35s'; f.style.opacity = '0'; });
  }

  dialog(name, lines, onDone) {
    this.dialogState = { name, lines, i: 0, shown: 0, onDone, acc: 0 };
    this.el.dialog.classList.add('show');
    this.el.dName.textContent = name;
    this.el.dText.textContent = '';
  }

  get inDialog() { return !!this.dialogState; }

  advance() {
    const d = this.dialogState;
    if (!d) return;
    const line = d.lines[d.i];
    if (d.shown < line.length) { d.shown = line.length; this.el.dText.textContent = line; return; }
    d.i++;
    d.shown = 0;
    d.acc = 0;
    if (d.i >= d.lines.length) {
      this.el.dialog.classList.remove('show');
      this.dialogState = null;
      d.onDone && d.onDone();
    }
  }

  setBoss(enemy) {
    this.bossEnemy = enemy;
    this.el.boss.classList.toggle('show', !!enemy);
    if (enemy) { this.el.bossName.textContent = enemy.name || '도깨비 대왕'; this.bossLag = 1; }
  }

  update(dt) {
    const g = this.game, p = g.player, el = this.el;
    // 체력
    const hp = p.hp / p.maxHp;
    this.hpLag = Math.max(hp, this.hpLag - dt * 0.5);
    el.hpFill.style.width = (hp * 100).toFixed(1) + '%';
    el.hpLag.style.width = (this.hpLag * 100).toFixed(1) + '%';
    el.hpText.textContent = `${Math.ceil(p.hp)} / ${p.maxHp}`;
    el.hpFill.classList.toggle('low', hp < 0.3);
    // 경험치
    const need = expNeed(p.level);
    document.getElementById('exp-fill').style.width = ((p.exp / need) * 100).toFixed(1) + '%';
    const et = `EXP ${Math.floor(p.exp)} / ${need}`;
    const etEl = document.getElementById('exp-text');
    if (etEl.textContent !== et) etEl.textContent = et;
    document.getElementById('bag-dot').classList.toggle('hidden', !this.newItem);
    this.setCd('dash', p.dashCd, p.dashMax || 0.5);
    this.setCd('skill', p.skillCd, p.skillMax * g.skillCdMul(p, 1));
    for (const slot of [2, 3]) {
      const key = 'skill' + slot;
      if (p.level < SKILL_LEVEL[slot]) this.setLock(key, SKILL_LEVEL[slot]);
      else { this.setLock(key, 0); this.setCd(key, (slot === 2 ? p.cd2 : p.cd3) || 0, (slot === 2 ? p.cd2Max : p.cd3Max) * g.skillCdMul(p, slot)); }
    }
    el.kills.textContent = g.kills;
    if (el.best) el.best.textContent = g.bestCombo;

    // 보스
    if (this.bossEnemy) {
      const b = this.bossEnemy;
      const k = Math.max(0, b.hp / b.maxHp);
      this.bossLag = Math.max(k, this.bossLag - dt * 0.4);
      el.bossFill.style.width = (k * 100).toFixed(1) + '%';
      el.bossLag.style.width = (this.bossLag * 100).toFixed(1) + '%';
      if (b.dead && this.bossLag <= 0.001) this.setBoss(null);
    }

    // 배너, 토스트
    if (this.bannerT > 0) { this.bannerT -= dt; if (this.bannerT <= 0) el.banner.classList.remove('show'); }
    if (this.toastT > 0) { this.toastT -= dt; if (this.toastT <= 0) el.toast.classList.remove('show'); }

    // 연속 베기
    if (g.hitCombo >= 2 && g.time - g.lastHitTime < 2) {
      el.combo.classList.add('show');
      el.comboN.textContent = g.hitCombo;
    } else el.combo.classList.remove('show');

    // 대화 타자 효과
    const d = this.dialogState;
    if (d) {
      const line = d.lines[d.i];
      if (d.shown < line.length) {
        d.acc += dt * 38;
        const before = d.shown;
        d.shown = Math.min(line.length, Math.floor(d.acc));
        if (d.shown > before && d.shown % 2 === 0) g.audio.play('talk');
        el.dText.textContent = line.slice(0, d.shown);
      }
      el.dialog.classList.toggle('done', d.shown >= line.length);
    }

    // 적 체력바
    const ps = g.pixel.pixelSize;
    const live = new Set();
    for (const e of g.enemies) {
      if (e.type === 'boss' || e.dead || e.spawning || e.hp >= e.maxHp) continue;
      live.add(e);
      let bar = this.bars.get(e);
      if (!bar) {
        bar = document.createElement('div');
        bar.className = 'ebar';
        bar.innerHTML = '<i></i>';
        el.bars.appendChild(bar);
        this.bars.set(e, bar);
      }
      const top = e.type === 'wisp' ? 2.0 : 1.75;
      const s = g.pixel.project({ x: e.pos.x, y: e.y + top, z: e.pos.z, isVector3: true, clone() { return this; } });
      bar.style.transform = `translate(${Math.round(s.x / ps) * ps}px, ${Math.round(s.y / ps) * ps}px)`;
      bar.firstChild.style.width = (e.hp / e.maxHp) * 100 + '%';
    }
    for (const [e, bar] of this.bars) if (!live.has(e)) { bar.remove(); this.bars.delete(e); }

    // 상호작용 표시
    const it = g.nearInteract;
    if (it && !this.inDialog && g.state === 'play') {
      const s = g.pixel.project(it.promptPos);
      el.prompt.style.transform = `translate(${Math.round(s.x / ps) * ps}px, ${Math.round(s.y / ps) * ps}px)`;
      el.prompt.innerHTML = `<b>E</b>${it.label}`;
      el.prompt.classList.add('show');
    } else el.prompt.classList.remove('show');
  }
}

// 20x20 도트 초상화 (직업별)
const PORTRAITS = {
  sword: {
    bg: '#3a4878',
    rows: [
      '....................',
      '.......hhhhhh.......',
      '.....hhhhhhhhhh.....',
      '....hhhhhhhhhhhh....',
      '...hhhhhhhhhhhhhh...',
      '...rrrrrrrrrrrrrr...',
      '...hhhhsssshhhhhh...',
      '...hhsssssssssshh...',
      '...hssssssssssssh...',
      '...hsseessssseessh..',
      '...hsseWsssseeWsh...',
      '...hsseessssseessh..',
      '...hspssssssssspsh..',
      '....ssssssmmsssss...',
      '.....ssssssssssss...',
      '......ssssssssss....',
      '.......cwwwwwwc.....',
      '.....wwwcwwwwcwww...',
      '....wwwwwcwwcwwwwww.',
      '...wwwwwwwccwwwwwwww',
    ],
    col: { h: '#2a2024', r: '#c8302c', s: '#f6d6b6', e: '#1b1416', W: '#ffffff', p: '#f0a0a0', m: '#b85a50', w: '#eeeae0', c: '#2e4f8f' },
  },
  mage: {
    bg: '#4a3a78',
    rows: [
      '.......kkkkkk.......',
      '.......kkkkkk.......',
      '.......kkkkkk.......',
      '.......vvvvvv.......',
      'kkkkkkkkkkkkkkkkkkkk',
      '...hhhhhhhhhhhhhh...',
      '...hhhhsssshhhhhh...',
      '...hhsssssssssshh...',
      '...hssssssssssssh...',
      '..bhsseessssseesshb.',
      '...hsseWsssseeWsh...',
      '..bhsseessssseesshb.',
      '...hspssssssssspsh..',
      '..b.ssssssmmsssss.b.',
      '.....ssssssssssss...',
      '......ssssssssss....',
      '.......gnnnnnng.....',
      '.....nnngnnnngnnn...',
      '....nnnnngnngnnnnnn.',
      '...nnnnnnnggnnnnnnnn',
    ],
    col: { k: '#16141c', v: '#6a5ad8', h: '#1e1a24', s: '#f4d4b2', e: '#1b1416', W: '#ffffff', p: '#f0a0a0', m: '#b85a50', n: '#3a3a7a', g: '#e0b040', b: '#e0a84a' },
  },
  elf: {
    bg: '#2e5a3a',
    rows: [
      '....................',
      '.......hhhhhh.......',
      '.....hhhhhhhhhhff...',
      '....hhhhhhhhhhhfFf..',
      '...hhhhhhhhhhhhhf...',
      '...hhhhhhhhhhhhhh...',
      '...hhhhsssshhhhhh...',
      '..hhhsssssssssshhh..',
      's.hhssssssssssssh.s.',
      'sshhsseessssseesshss',
      '..hhsseWsssseeWshh..',
      '..hhsseessssseesshh.',
      '..hhspssssssssspshh.',
      '..hh.ssssssmmssss.hh',
      '..hh..ssssssssss..hh',
      '..hh...ssssssss...hh',
      '..hh...lgggggl....hh',
      '..h..gggglgglggg...h',
      '....ggggggllgggggg..',
      '...gggggggggggggggg.',
    ],
    col: { h: '#e8e4c8', s: '#fbe2cc', e: '#2a6a4a', W: '#ffffff', p: '#f8a8b8', m: '#c86a60', g: '#5aa84e', l: '#bfe07a', f: '#ff9ac0', F: '#fff0a0' },
  },
};

export function drawPortrait(cv, cls = 'sword') {
  if (!cv) return;
  const P = PORTRAITS[cls] || PORTRAITS.sword;
  const g = cv.getContext('2d');
  g.fillStyle = P.bg;
  g.fillRect(0, 0, 20, 20);
  P.rows.forEach((row, y) => [...row].forEach((ch, x) => { if (P.col[ch]) { g.fillStyle = P.col[ch]; g.fillRect(x, y, 1, 1); } }));
}
