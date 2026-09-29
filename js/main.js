'use strict';
// Boot, main loop, input, camera, rendering, save/load.
const SAVE_KEY = 'eclipse_awakening_save_v1';

const Game = {
  player: null, monsters: [], npcs: [], bots: [], projectiles: [], fx: [], floaters: [], respawns: [], drops: [],
  cam: { x: 0, y: 0 }, zoom: 1, shake: 0, time: 0, started: false, muted: false, lastCardNotice: '',

  fighters() { return this.player && !this.player.dead ? [this.player, ...this.bots] : this.bots; },
  nearestMonster(from, maxD, pred) {
    let best = null, bd = maxD;
    for (const m of this.monsters) {
      if (m.dead || (pred && !pred(m))) continue;
      const d = U.dist(from, m);
      if (d < bd) { bd = d; best = m; }
    }
    return best;
  },
  monstersNear(from, r) { return this.monsters.reduce((n, m) => n + (!m.dead && U.dist(from, m) < r ? 1 : 0), 0); },
  bestSpawnNear(p) {
    // pick the highest-level suitable spawn; prefer close ones
    const lv = p.s.lv;
    const ok = D.SPAWNS.filter((s) => !D.MONSTERS[s.m].boss && D.MONSTERS[s.m].lv <= lv + 2);
    if (!ok.length) return D.SPAWNS[0];
    const top = Math.max(...ok.map((s) => D.MONSTERS[s.m].lv));
    const cands = ok.filter((s) => D.MONSTERS[s.m].lv >= top - 4);
    cands.sort((a, b) => Math.hypot(a.x * 64 - p.x, a.y * 64 - p.y) - Math.hypot(b.x * 64 - p.x, b.y * 64 - p.y));
    return cands[0];
  },
  say(ent, text) {
    ent.bubble = { text, t: 5 };
    if (ent === this.player) UI.chat(text, 'me', ent.name);
    else UI.chat(text, '', ent.name);
  },
  interact(npc) {
    Quests.onTalk(this, npc.def.id);
    if (npc.def.transcend) return UI.open('npc', npc);
    UI.open('npc', npc);
  },
  scheduleRespawn(mon) {
    const s = mon.spawn;
    if (s.noRespawn) return;
    this.respawns.push({ t: s.respawn || U.rand(5, 11), spawn: s });
  },
  // Teleport with a cast motion: charge (spellcast + magic circle) -> vanish -> arrive.
  // opts.instant skips the cast (used when reviving); opts.then runs after arrival.
  teleportPlayer(x, y, opts = {}) {
    const p = this.player;
    const arrive = () => {
      this.fx.push(Combat.makeFx('teleport', p.x, p.y));
      const f = World.findFree(x, y, 16);
      p.x = f.x; p.y = f.y; p.stopAll();
      p.teleporting = false; p.fadeIn = 0.45;
      this.fx.push(Combat.makeFx('tparrive', p.x, p.y, { follow: p }));
      this.snapCamera();
      U.sfx.magic();
      if (opts.then) opts.then();
    };
    if (opts.instant || p.dead) { p.action = null; return arrive(); }
    if (p.teleporting) return false;
    p.stopAll(); p.action = null; p.teleporting = true;
    this.fx.push(Combat.makeFx('tpcast', p.x, p.y, { follow: p }));
    U.sfx.charge();
    p.act('spellcast', 1.0, arrive, true);
    return true;
  },
  returnToTown() {
    this.teleportPlayer(D.TOWN.x + U.rand(-120, 120), D.TOWN.y + 160 + U.rand(-40, 40));
    this.player.auto = false;
    UI.toast('라스카노 마을로 귀환했습니다.', '#9fe0ff');
  },
  useTownScroll() {
    const p = this.player;
    if (p.dead) return;
    const it = p.s.inv.find((i) => i.id === 'tp_town');
    if (!it) return UI.toast('마을 귀환 주문서가 없습니다.');
    p.useItem(it.uid, this);
  },
  attackNearest() {
    const p = this.player;
    const m = this.nearestMonster(p, 700);
    if (m) { p.moveTo = null; p.waypoints = []; p.talkTo = null; p.target = m; }
    else UI.toast('주변에 적이 없습니다.');
  },
  playerDie(killer) {
    const p = this.player;
    p.dead = true; p.deadT = 0; p.hp = 0; p.auto = false; p.stopAll(); p.action = null; p.teleporting = false;
    U.sfx.die();
    const lost = Math.floor(D.expToNext(p.s.lv) * 0.05);
    const real = Math.min(p.s.exp, lost);
    p.s.exp -= real;
    UI.chat(`${killer.name}에게 사망하였습니다. 경험치 ${U.fmt(real)} 손실.`, 'warn');
    for (const m of this.monsters) if (m.target === p) m.target = null;
    setTimeout(() => {
      document.getElementById('death-info').textContent = `${killer.name}에게 사망했습니다. (경험치 -${U.fmt(real)})`;
      document.getElementById('death-screen').classList.remove('hidden');
    }, 1200);
  },
  revive() {
    const p = this.player;
    document.getElementById('death-screen').classList.add('hidden');
    p.dead = false; p.deadT = 0; p.hp = p.maxHp; p.mp = p.maxMp;
    this.teleportPlayer(D.TOWN.x, D.TOWN.y + 180, { instant: true });
    UI.refreshAll();
  },
  // 0 = bright day, ~0.6 = deep night. The dungeon is always dim.
  darkness() {
    if (this.player && World.zoneAt(this.player.x, this.player.y).dungeon) return 0.55;
    const f = Math.sin(this.dayPhase() * Math.PI * 2);
    return U.clamp((-f - 0.05) * 1.1, 0, 0.72);
  },
  dayPhase() { return ((this.time + 30) % 480) / 480; },
  updateDrops(dt) {
    const p = this.player;
    for (const d of this.drops) {
      d.t += dt;
      if (!p || p.dead || d.t < 0.9) continue;
      const dist = Math.hypot(p.x - d.x, p.y - d.y);
      if (dist > 700) continue;
      const sp = (420 + d.t * 400) * dt;
      if (dist < 24 || sp >= dist) { d.picked = true; this.pickup(d); }
      else { d.x += ((p.x - d.x) / dist) * sp; d.y += ((p.y - d.y) / dist) * sp; }
    }
    this.drops = this.drops.filter((d) => !d.picked && d.t < 90);
  },
  pickup(d) {
    const p = this.player, it = D.ITEMS[d.id];
    p.addItem(d.id, d.n);
    UI.chat(`${it.name}${d.n > 1 ? ` (${d.n})` : ''}을(를) 획득했습니다.`, 'drop');
    if (D.isEquip(it)) {
      const why = p.canEquip({ id: d.id });
      if (why) UI.chat(`└ ${why}`, 'warn');
      else p.autoEquipBest();
    }
    this.fx.push(Combat.makeFx('loot', p.x, p.y, { color: D.GRADES[it.grade].color }));
    if (it.grade >= 3) UI.announce(`<b>${UI.esc(p.name)}</b>님이 <em class="${it.grade >= 4 ? 'legend' : ''}">${UI.esc(it.name)}</em>을(를) 획득했습니다.`);
    U.sfx.coin();
    UI.markInv();
  },
  drawDrops(ctx, cam) {
    for (const d of this.drops) {
      const it = D.ITEMS[d.id];
      let x = d.x, y = d.y, h = 0;
      if (d.t < 0.45) { const k = d.t / 0.45; x = U.lerp(d.sx, d.x, k); y = U.lerp(d.sy, d.y, k); h = Math.sin(k * Math.PI) * 50; }
      else h = 4 + Math.sin(d.t * 5) * 3;
      const sx = x - cam.x, sy = y - cam.y;
      const col = D.GRADES[it.grade].color;
      ctx.save();
      ctx.globalAlpha = 0.5; ctx.fillStyle = col;
      ctx.beginPath(); ctx.ellipse(sx, sy, 14, 5, 0, 0, Math.PI * 2); ctx.fill();
      if (it.grade >= 2) {
        ctx.globalAlpha = 0.35 + Math.sin(d.t * 6) * 0.15; ctx.globalCompositeOperation = 'lighter';
        ctx.fillRect(sx - 2, sy - 70, 4, 70);
      }
      ctx.restore();
      const img = UI.iconImg(it.icon);
      if (img.complete) ctx.drawImage(img, sx - 13, sy - 26 - h, 26, 26);
    }
  },
  snapCamera() {
    const vw = innerWidth / this.zoom, vh = innerHeight / this.zoom;
    this.cam.x = this.player.x - vw / 2; this.cam.y = this.player.y - 40 - vh / 2;
  },
  save() {
    const p = this.player;
    if (!p) return;
    const s = p.s;
    s.x = p.dead ? D.TOWN.x : p.x; s.y = p.dead ? D.TOWN.y + 160 : p.y;
    s.hp = p.dead ? p.maxHp : p.hp; s.mp = p.mp;
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(s)); } catch (e) { /* storage unavailable */ }
  },
  wipe() {
    try { localStorage.removeItem(SAVE_KEY); } catch (e) { /* ignore */ }
    this.player = null;
    location.reload();
  },
};

// ---------------------------------------------------------------- boot
(function boot() {
  const canvas = document.getElementById('view');
  const ctx = canvas.getContext('2d');
  let dpr = 1;
  function resize() {
    dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = Math.floor(innerWidth * dpr); canvas.height = Math.floor(innerHeight * dpr);
    Game.zoom = Game.userZoom || (innerWidth < 700 ? 0.75 : innerWidth < 1100 ? 0.9 : 1.05);
  }
  addEventListener('resize', resize);
  resize();

  // load sprite sheets
  const names = Object.keys(window.SPRITE_ROWS);
  let loaded = 0;
  const total = names.length + 1; // + weapon looks
  const tick = () => { loaded++; if (loaded === total) ready(); };
  Looks.load(tick);
  // recoloured monster sheets are canvases made from their base sheet once it loads
  const variantsOf = {};
  for (const [v, [base, filter]] of Object.entries(D.SHEET_VARIANTS || {})) {
    window.SPRITE_ROWS[v] = window.SPRITE_ROWS[base];
    (variantsOf[base] = variantsOf[base] || []).push([v, filter]);
  }
  const makeVariants = (n, img) => {
    for (const [v, filter] of variantsOf[n] || []) {
      const c = document.createElement('canvas'); c.width = img.width; c.height = img.height;
      const g = c.getContext('2d'); g.filter = filter; g.drawImage(img, 0, 0);
      Sprites[v] = c;
    }
  };
  names.forEach((n) => {
    const img = new Image();
    img.onload = () => { makeVariants(n, img); tick(); };
    img.onerror = () => { console.warn('sprite failed', n); tick(); };
    img.src = `assets/sprites/${n}.png`;
    Sprites[n] = img;
  });

  let propGrid = null, lightCv = null;
  function buildPropGrid() {
    propGrid = new Map();
    for (const p of World.props) {
      const k = Math.floor(p.y / 512) * 1000 + Math.floor(p.x / 512);
      if (!propGrid.has(k)) propGrid.set(k, []);
      propGrid.get(k).push(p);
    }
  }

  function populate() {
    for (const s of D.SPAWNS) for (let i = 0; i < s.n; i++) Game.monsters.push(new Monster(D.MONSTERS[s.m], s));
    for (const n of D.NPCS) Game.npcs.push(new NPC(n));
    for (let i = 0; i < 24; i++) Game.bots.push(new Bot(i));
  }

  function ready() {
    World.init();
    Nav.build();
    buildPropGrid();
    populate();
    Game.cam.x = D.TOWN.x - innerWidth / 2; Game.cam.y = D.TOWN.y - innerHeight / 2;
    setupTitle();
    requestAnimationFrame(frame);
  }

  // ---------------------------------------------------------------- title
  let chosen = 'knight';
  function setupTitle() {
    const box = document.getElementById('class-select');
    const cards = [];
    for (const [id, c] of Object.entries(D.CLASSES)) {
      const d = document.createElement('div');
      d.className = 'class-card' + (id === chosen ? ' on' : '');
      d.innerHTML = `<canvas width="128" height="128"></canvas><h4>${c.name}</h4><p>${c.desc.replace('\n', '<br>')}</p>`;
      d.onclick = () => { chosen = id; cards.forEach((x) => x.el.classList.toggle('on', x.id === id)); U.sfx.ui(); };
      box.appendChild(d);
      cards.push({ id, el: d, cv: d.querySelector('canvas'), cls: c });
    }
    let t = 0;
    (function anim() {
      if (Game.started) return;
      t += 1 / 60;
      for (const c of cards) {
        const on = c.id === chosen;
        const a = on ? ANIMS[c.cls.attack] : ANIMS.walk;
        const col = on ? Math.floor(t / a.ft) % a.frames : 1 + (Math.floor(t / 0.1) % 8);
        const g = c.cv.getContext('2d');
        g.clearRect(0, 0, c.cv.width, c.cv.height); g.imageSmoothingEnabled = false;
        Looks.drawComposite(g, c.cls.sheet + '_nw', Looks.DEFAULT[c.id], a.row + 2, col, 64, 120, 2, { t });
      }
      requestAnimationFrame(anim);
    })();
    let save = null;
    try { save = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null'); } catch (e) { save = null; }
    if (save && save.cls && D.CLASSES[save.cls]) {
      document.getElementById('continue-box').classList.remove('hidden');
      document.getElementById('continue-info').textContent = `(${save.name} · Lv.${save.lv} ${D.CLASSES[save.cls].name})`;
      document.getElementById('continue-btn').onclick = () => start(save);
      document.getElementById('reset-btn').onclick = () => { if (confirm('저장된 캐릭터를 삭제할까요?')) Game.wipe(); };
    }
    const nick = document.getElementById('nick-input');
    nick.value = U.pick(['세라니스', '아크엔젤', '달빛기사', '용사', '제로원', '크로우']) + U.randi(1, 99);
    document.getElementById('start-btn').onclick = () => {
      const name = nick.value.trim() || '모험가';
      start(Player.newSave(name.slice(0, 10), chosen));
    };
    nick.addEventListener('keydown', (e) => { if (e.key === 'Enter') document.getElementById('start-btn').click(); e.stopPropagation(); });
  }

  function start(save) {
    U.audio();
    Game.player = new Player(save);
    Pets.spawn(Game);
    const f = World.findFree(Game.player.x, Game.player.y, 16);
    Game.player.x = f.x; Game.player.y = f.y;
    Game.started = true;
    Game.snapCamera();
    document.getElementById('title-screen').classList.add('hidden');
    document.getElementById('hud').classList.remove('hidden');
    UI.init(Game);
    Quests.check(Game);
    UI.chat('이클립스: 어웨이크닝에 오신 것을 환영합니다!', 'sys');
    UI.chat('퀘스트 창(오른쪽 위)을 클릭하면 자동으로 이동합니다. AI 모드로 자동 사냥!', 'sys');
    if (!save.mailClaimed) UI.chat('[우편] 오픈 기념 선물이 도착했습니다. (메뉴 → 우편)', 'whisper');
    setInterval(() => Game.save(), 10000);
    addEventListener('beforeunload', () => Game.save());
    setInterval(serverNews, 45000);
  }

  // fake server-wide announcements, like the reference ("AI콤보님이 ... 획득했습니다.")
  function serverNews() {
    if (!Game.started) return;
    const b = U.pick(Game.bots);
    const r = Math.random();
    if (r < 0.45) {
      const c = Transcend.randomCard(Math.random() < 0.2 ? 4 : 3);
      UI.announce(`<b>${UI.esc(b.name)}</b>님이 <em class="${c.grade >= 4 ? 'legend' : ''}">${UI.esc(c.name)}</em> 초월을 획득했습니다.`);
    } else if (r < 0.8) {
      const it = D.ITEMS[U.pick(['w_sword4', 'w_bow4', 'w_staff4', 'a_4', 'r_3', 'w_sword5', 'w_staff5'])];
      UI.announce(`<b>${UI.esc(b.name)}</b>님이 <em class="${it.grade >= 4 ? 'legend' : ''}">${UI.esc(it.name)}</em>을(를) 획득했습니다.`);
    } else {
      UI.announce(`<b>${UI.esc(b.name)}</b>님이 <em>+${U.randi(7, 10)} ${UI.esc(D.ITEMS[U.pick(['w_sword3', 'w_bow3', 'w_staff3'])].name)}</em> 강화에 성공했습니다!`);
    }
  }

  // ---------------------------------------------------------------- input
  const keys = new Set();
  const mouse = { x: 0, y: 0, down: false, world: { x: 0, y: 0 } };
  const toWorld = (sx, sy) => ({ x: sx / Game.zoom + Game.cam.x, y: sy / Game.zoom + Game.cam.y });

  function entityAt(wx, wy) {
    // prefer monsters, then NPCs; hit-test the sprite box
    const hit = (e, pad = 0) => {
      const s = e.scale || 1;
      return wx > e.x - 20 * s - pad && wx < e.x + 20 * s + pad && wy > e.y - 56 * s - pad && wy < e.y + 8 + pad;
    };
    let best = null, bd = 1e9;
    for (const m of Game.monsters) if (!m.dead && hit(m, 8)) { const d = Math.abs(m.y - wy); if (d < bd) { bd = d; best = m; } }
    if (best) return best;
    for (const n of Game.npcs) if (hit(n, 6)) return n;
    return null;
  }
  function clickWorld(sx, sy) {
    const p = Game.player;
    if (!p || p.dead) return;
    const w = toWorld(sx, sy);
    const e = entityAt(w.x, w.y);
    p.stopAll();
    if (e instanceof Monster) { p.target = e; }
    else if (e instanceof NPC) { p.talkTo = e; }
    else {
      p.moveTo = { x: w.x, y: w.y };
      Game.fx.push({ type: 'click', x: w.x, y: w.y, t: 0, dur: 0.45 });
    }
  }
  canvas.addEventListener('pointerdown', (e) => {
    if (!Game.started) return;
    mouse.down = true; mouse.x = e.clientX; mouse.y = e.clientY; mouse.heldT = 0;
    document.getElementById('chat-input').blur();
    clickWorld(e.clientX, e.clientY);
  });
  addEventListener('pointerup', () => { mouse.down = false; });
  canvas.addEventListener('pointermove', (e) => {
    mouse.x = e.clientX; mouse.y = e.clientY;
    if (!Game.started) return;
    const w = toWorld(e.clientX, e.clientY);
    canvas.style.cursor = entityAt(w.x, w.y) ? 'pointer' : 'default';
  });
  canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    Game.userZoom = U.clamp((Game.userZoom || Game.zoom) * (e.deltaY > 0 ? 0.9 : 1.1), 0.55, 1.8);
    Game.zoom = Game.userZoom;
  }, { passive: false });
  canvas.addEventListener('contextmenu', (e) => e.preventDefault());

  const MOVE = { w: [0, -1], arrowup: [0, -1], s: [0, 1], arrowdown: [0, 1], a: [-1, 0], arrowleft: [-1, 0], d: [1, 0], arrowright: [1, 0] };
  addEventListener('keydown', (e) => {
    if (!Game.started) return;
    const k = e.key.toLowerCase();
    if (document.activeElement && document.activeElement.tagName === 'INPUT') return;
    if (k === 'enter') { document.getElementById('chat-input').focus(); e.preventDefault(); return; }
    if (k === 'escape') { UI.close(); return; }
    if (k === 'f2' || k === '`') { e.preventDefault(); UI.open('admin'); return; }
    if (MOVE[k]) { keys.add(k); e.preventDefault(); return; }
    if (e.repeat) return;
    const p = Game.player;
    if (k >= '1' && k <= '4') p.castSkill(+k - 1, Game);
    else if (k === 'q') p.castSkill(4, Game);
    else if (k === 'e') p.castSkill(5, Game);
    else if (k >= '5' && k <= '8') UI.useSlotItem(+k - 5);
    else if (k === ' ') { e.preventDefault(); Game.attackNearest(); }
    else if (k === 'g') UI.toggleAuto();
    else if (k === 'shift') p.sprint();
    else if (k === 'i') UI.open('inventory');
    else if (k === 'k') UI.open('skills');
    else if (k === 'u') UI.open('shop');
    else if (k === 'c') UI.open('character');
    else if (k === 'j') UI.open('quests');
    else if (k === 't') UI.open('teleport');
    else if (k === 'm') UI.open('map');
    else if (k === 'b') Game.useTownScroll();
    else if (k === 'y') UI.open('transcend');
    else if (k === 'p') UI.open('pass');
    else if (k === 'v') UI.open('weaponlook');
    else if (k === 'n') UI.open('pet');
    else if (k === 'r') UI.toggleRide();
    else if (k === 'o') UI.open('bosstime');
    else if (k === 'tab') { e.preventDefault(); UI.open('menu'); }
  });
  addEventListener('keyup', (e) => keys.delete(e.key.toLowerCase()));
  addEventListener('blur', () => keys.clear());
  document.getElementById('revive-btn').onclick = () => Game.revive();

  // on-screen joystick for touch devices
  const joy = { x: 0, y: 0 };
  const joyEl = document.getElementById('joy'), knob = document.getElementById('joy-knob');
  if (matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) document.body.classList.add('touch');
  let joyId = null;
  const joyMove = (e) => {
    const r = joyEl.getBoundingClientRect();
    let dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
    const R = r.width / 2 - 10, l = Math.hypot(dx, dy);
    if (l > R) { dx = (dx / l) * R; dy = (dy / l) * R; }
    knob.style.transform = `translate(${dx}px, ${dy}px)`;
    const m = Math.hypot(dx, dy) / R;
    joy.x = m > 0.25 ? dx / R : 0; joy.y = m > 0.25 ? dy / R : 0;
  };
  joyEl.addEventListener('pointerdown', (e) => { joyId = e.pointerId; joyEl.setPointerCapture(e.pointerId); joyMove(e); e.preventDefault(); });
  joyEl.addEventListener('pointermove', (e) => { if (e.pointerId === joyId) joyMove(e); });
  const joyEnd = (e) => { if (e.pointerId !== joyId) return; joyId = null; joy.x = joy.y = 0; knob.style.transform = ''; };
  joyEl.addEventListener('pointerup', joyEnd); joyEl.addEventListener('pointercancel', joyEnd);

  // ---------------------------------------------------------------- update
  let hudT = 0, miniT = 0, badgeT = 0;
  function update(dt) {
    Game.time += dt;
    Nav.frame();
    const p = Game.player;
    if (p) {
      let kx = 0, ky = 0;
      for (const k of keys) { kx += MOVE[k][0]; ky += MOVE[k][1]; }
      kx += joy.x; ky += joy.y;
      p.keys.x = kx; p.keys.y = ky;
      // hold the mouse button to keep walking toward the cursor
      if (mouse.down && !p.target && !p.talkTo && !p.dead) {
        mouse.heldT += dt;
        if (mouse.heldT > 0.25) { const w = toWorld(mouse.x, mouse.y); p.moveTo = w; p.waypoints = []; }
      }
      p.update(dt, Game);
      if (p.talkAfterNav && !p.moveTo) { p.talkTo = p.talkAfterNav; p.talkAfterNav = null; }
    }
    Dungeon.update(Game, dt);
    Skills.update(Game, dt);
    VFX.update(dt);
    if (Game.pet) Game.pet.update(dt, Game);
    Game.updateDrops(dt);
    for (const m of Game.monsters) m.update(dt, Game);
    for (const n of Game.npcs) { n.lookAt = p; n.update(dt); }
    for (const b of Game.bots) { b.update(dt, Game); if (b.bubble) b.bubble.t -= dt; }
    if (p && p.bubble) p.bubble.t -= dt;
    // remove corpses, respawn
    Game.monsters = Game.monsters.filter((m) => !(m.dead && m.deadT > 2.2));
    for (const r of Game.respawns) r.t -= dt;
    const due = Game.respawns.filter((r) => r.t <= 0);
    Game.respawns = Game.respawns.filter((r) => r.t > 0);
    for (const r of due) {
      const m = new Monster(D.MONSTERS[r.spawn.m], r.spawn);
      Game.monsters.push(m);
      Game.fx.push(Combat.makeFx('teleport', m.x, m.y));
      if (m.def.boss && Game.started) {
        UI.announce(`<em>${m.def.name}</em>이(가) ${World.zoneAt(m.x, m.y).name}에 출현했습니다!`);
        UI.chat(`[알림] ${m.def.name}이(가) 출현했습니다!`, 'warn');
      }
    }
    Combat.updateProjectiles(Game, dt);
    Combat.updateFx(Game, dt);
    if (Game.shake > 0) Game.shake = Math.max(0, Game.shake - dt * 30);

    // camera
    const vw = innerWidth / Game.zoom, vh = innerHeight / Game.zoom;
    let tx, ty;
    if (p) { tx = p.x - vw / 2; ty = p.y - 40 - vh / 2; }
    else { tx = D.TOWN.x - vw / 2 + Math.sin(Game.time * 0.1) * 400; ty = D.TOWN.y - vh / 2 + Math.cos(Game.time * 0.08) * 250; }
    const k = Math.min(1, dt * (p ? 8 : 1.5));
    Game.cam.x += (tx - Game.cam.x) * k; Game.cam.y += (ty - Game.cam.y) * k;
    Game.cam.x = U.clamp(Game.cam.x, 0, World.widthPx - vw); Game.cam.y = U.clamp(Game.cam.y, 0, World.heightPx - vh);

    if (Game.started) {
      hudT -= dt; miniT -= dt;
      if (hudT <= 0) { hudT = 0.1; UI.refreshHud(); }
      if (miniT <= 0) { miniT = 0.2; UI.drawMinimap(); }
      badgeT -= dt;
      if (badgeT <= 0) { badgeT = 1; Content.badges(Game); }
    }
  }

  // ---------------------------------------------------------------- render
  function render() {
    const z = Game.zoom;
    const sh = Game.shake;
    const cam = { x: Math.round(Game.cam.x + (sh ? U.rand(-sh, sh) : 0)), y: Math.round(Game.cam.y + (sh ? U.rand(-sh, sh) : 0)) };
    const vw = innerWidth / z, vh = innerHeight / z;
    ctx.setTransform(dpr * z, 0, 0, dpr * z, 0, 0);
    ctx.imageSmoothingEnabled = false;
    ctx.fillStyle = '#1a1a14'; ctx.fillRect(0, 0, vw, vh);
    World.drawGround(ctx, cam, vw, vh, Game.started ? 2 : 4);
    VFX.drawGround(ctx, cam);

    // gather visible props
    const x0 = cam.x - 200, y0 = cam.y - 120, x1 = cam.x + vw + 200, y1 = cam.y + vh + 260;
    const vis = [];
    const ground = [];
    for (let gy = Math.floor(y0 / 512); gy <= Math.floor(y1 / 512); gy++) for (let gx = Math.floor(x0 / 512); gx <= Math.floor(x1 / 512); gx++) {
      const list = propGrid.get(gy * 1000 + gx); if (!list) continue;
      for (const pr of list) {
        if (pr.x < x0 || pr.x > x1 || pr.y < y0 || pr.y > y1) continue;
        (pr.ground ? ground : vis).push({ y: pr.y, prop: pr });
      }
    }
    const t = Game.time;
    for (const g of ground) World.drawProp(ctx, g.prop, g.prop.x - cam.x, g.prop.y - cam.y, t);
    Skills.drawGround(ctx, cam, t);
    Game.drawDrops(ctx, cam);
    // click markers under entities
    for (const f of Game.fx) if (f.type === 'click') {
      const k = f.t / f.dur;
      ctx.strokeStyle = `rgba(255,240,180,${1 - k})`; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.ellipse(f.x - cam.x, f.y - cam.y, 14 * (1 - k * 0.5), 6 * (1 - k * 0.5), 0, 0, Math.PI * 2); ctx.stroke();
    }
    const inView = (e) => e.x > x0 && e.x < x1 && e.y > y0 && e.y < y1;
    const ents = [];
    for (const m of Game.monsters) if (inView(m)) ents.push(m);
    for (const n of Game.npcs) if (inView(n)) ents.push(n);
    for (const b of Game.bots) if (inView(b)) ents.push(b);
    if (Game.player) ents.push(Game.player);
    if (Game.pet) ents.push(Game.pet);
    for (const e of ents) vis.push({ y: e.y, ent: e });
    vis.sort((a, b) => a.y - b.y);
    for (const v of vis) {
      if (v.prop) World.drawProp(ctx, v.prop, v.prop.x - cam.x, v.prop.y - cam.y, t);
      else v.ent.draw(ctx, cam);
    }
    for (const pr of Game.projectiles) Combat.drawProjectile(ctx, cam, pr);
    for (const f of Game.fx) if (f.type !== 'click') Combat.drawFx(ctx, cam, f);
    // day / night lighting: darken everything, then cut out light around fires and the player
    const dark = Game.darkness();
    if (dark > 0.02) {
      const lights = [];
      for (const g of [...ground, ...vis]) {
        const pr = g.prop; if (!pr) continue;
        const r = { torch: 130, bonfire: 210, brazier: 200, portal: 190, rift: 260, altar: 200, house: 70 }[pr.type];
        if (r) lights.push([pr.x, pr.y - (pr.type === 'house' ? 60 : 40), r]);
      }
      if (Game.player) lights.push([Game.player.x, Game.player.y - 30, 170]);
      for (const pr of Game.projectiles) if (pr.kind === 'bolt' || pr.el) lights.push([pr.x, pr.y, pr.el === 'fire' ? 150 : 110]);
      for (const l of VFX.lights()) lights.push(l);
      for (const h of Skills.hazards) if (h.kind === 'fire' || h.kind === 'blizzard') lights.push([h.x, h.y - 20, h.r * 1.4]);
      for (const f of Game.fx) if (['explode', 'meteor', 'levelup', 'teleport', 'heal', 'buff', 'doom'].includes(f.type)) lights.push([f.x, f.y - 30, 180]);
      if (!lightCv || lightCv.width !== canvas.width || lightCv.height !== canvas.height) {
        lightCv = document.createElement('canvas'); lightCv.width = canvas.width; lightCv.height = canvas.height;
      }
      const lg = lightCv.getContext('2d');
      lg.globalCompositeOperation = 'source-over';
      lg.clearRect(0, 0, lightCv.width, lightCv.height);
      lg.fillStyle = `rgba(4,8,30,${dark})`; lg.fillRect(0, 0, lightCv.width, lightCv.height);
      lg.globalCompositeOperation = 'destination-out';
      const s = dpr * z;
      for (const [lx, ly, lr] of lights) {
        const x = (lx - cam.x) * s, y = (ly - cam.y) * s, r = lr * s;
        const gr = lg.createRadialGradient(x, y, 0, x, y, r);
        gr.addColorStop(0, 'rgba(0,0,0,0.88)'); gr.addColorStop(0.45, 'rgba(0,0,0,0.5)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
        lg.fillStyle = gr; lg.beginPath(); lg.arc(x, y, r, 0, Math.PI * 2); lg.fill();
      }
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.drawImage(lightCv, 0, 0);
      ctx.setTransform(dpr * z, 0, 0, dpr * z, 0, 0);
    }
    // elemental particles on top of the lighting so fire and frost glow at night
    VFX.draw(ctx, cam);
    // overlays (names, bars)
    const p = Game.player;
    for (const e of ents) {
      if (e instanceof Monster) e.drawOverlay(ctx, cam, p && p.target === e);
      else e.drawOverlay(ctx, cam);
    }
    for (const f of Game.floaters) Combat.drawFloater(ctx, cam, f);

    // zone atmosphere + vignette
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const W = innerWidth, H = innerHeight;
    const zone = p ? World.zoneAt(p.x, p.y).id : 'town';
    const tint = { grave: 'rgba(20,30,70,0.28)', orc: 'rgba(90,40,10,0.14)', forest: 'rgba(0,40,20,0.12)', snow: 'rgba(160,200,255,0.10)', field: 'rgba(255,220,150,0.04)', town: 'rgba(255,200,120,0.05)' }[zone];
    if (tint) { ctx.fillStyle = tint; ctx.fillRect(0, 0, W, H); }
    if (zone === 'snow') { // falling snow drifting in the wind
      const tt = performance.now() / 1000;
      ctx.fillStyle = 'rgba(255,255,255,0.85)';
      for (let i = 0; i < 140; i++) {
        const sp = 30 + (i % 7) * 12, sz = 1 + (i % 3);
        const px = ((i * 97.3 + tt * 22 + Math.sin(tt * 0.8 + i) * 18) % (W + 40) + W + 40) % (W + 40) - 20;
        const py = ((i * 57.1 + tt * sp) % (H + 20)) - 10;
        ctx.fillRect(px, py, sz, sz);
      }
    }
    const vg = ctx.createRadialGradient(W / 2, H / 2, Math.min(W, H) * 0.35, W / 2, H / 2, Math.max(W, H) * 0.75);
    vg.addColorStop(0, 'rgba(0,0,0,0)'); vg.addColorStop(1, 'rgba(0,0,0,0.55)');
    ctx.fillStyle = vg; ctx.fillRect(0, 0, W, H);
    if (p && p.dead) { ctx.fillStyle = 'rgba(40,0,0,0.25)'; ctx.fillRect(0, 0, W, H); }
  }

  let last = performance.now();
  function frame(now) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    update(dt);
    render();
    requestAnimationFrame(frame);
  }
})();
