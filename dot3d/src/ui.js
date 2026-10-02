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
  setClass(cfg) {
    drawPortrait(document.getElementById('portrait-cv'), cfg.id);
    document.getElementById('hero-name').innerHTML = `${cfg.title} <b>${cfg.name}</b><span class="lv">Lv.7</span>`;
    for (const k of ['atk', 'dash', 'skill', 'skill2', 'skill3']) {
      const t = cfg.labels[k];
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
    this.setCd('dash', p.dashCd, p.dashMax || 0.5);
    this.setCd('skill', p.skillCd, p.skillMax);
    this.setCd('skill2', p.cd2 || 0, p.cd2Max);
    this.setCd('skill3', p.cd3 || 0, p.cd3Max);
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
