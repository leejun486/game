// HTML HUD: 체력, 스킬, 임무, 배너, 대화창, 보스 체력, 적 체력바, 상호작용 표시
export class UI {
  constructor(game) {
    this.game = game;
    const $ = (id) => document.getElementById(id);
    this.el = {
      hud: $('hud'), hpFill: $('hp-fill'), hpLag: $('hp-lag'), hpText: $('hp-text'),
      dashCd: $('cd-dash'), skillCd: $('cd-skill'),
      quest: $('quest-text'), questTitle: $('quest-title'),
      banner: $('banner'), bannerMain: $('banner-main'), bannerSub: $('banner-sub'),
      dialog: $('dialog'), dName: $('dialog-name'), dText: $('dialog-text'),
      prompt: $('prompt'), boss: $('boss'), bossFill: $('boss-fill'), bossLag: $('boss-lag'), bossName: $('boss-name'),
      bars: $('hpbars'), title: $('title'), over: $('gameover'), combo: $('combo'), comboN: $('combo-n'),
      kills: $('kills'), toast: $('toast'), flash: $('flash'),
    };
    this.hpLag = 1;
    this.bossLag = 1;
    this.dialogState = null;
    this.bars = new Map();
    this.bannerT = 0;
    this.toastT = 0;
    drawPortrait(document.getElementById('portrait-cv'));
  }

  showHud(v) { this.el.hud.classList.toggle('hidden', !v); }

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
    el.dashCd.style.height = (p.dashCd / 0.5) * 100 + '%';
    el.skillCd.style.height = (p.skillCd / p.skillMax) * 100 + '%';
    el.kills.textContent = g.kills;

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

// 20x20 도트 초상화
function drawPortrait(cv) {
  if (!cv) return;
  const g = cv.getContext('2d');
  const rows = [
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
  ];
  const col = { h: '#2a2024', r: '#c8302c', s: '#f6d6b6', e: '#1b1416', W: '#ffffff', p: '#f0a0a0', m: '#b85a50', w: '#eeeae0', c: '#2e4f8f' };
  g.fillStyle = '#3a4878';
  g.fillRect(0, 0, 20, 20);
  rows.forEach((row, y) => [...row].forEach((ch, x) => { if (col[ch]) { g.fillStyle = col[ch]; g.fillRect(x, y, 1, 1); } }));
}
