'use strict';
// 이클립스 균열: a timed, wave-based dungeon with a boss on the last wave. 3 entries per day.
const Dungeon = (() => {
  const WAVES = 5, TIME = 300, DAILY = 3;
  const POOL = ['skeleton', 'zombie', 'orc', 'lizardman', 'wolfman', 'boarman', 'troll'];
  let st = null; // active run

  const today = () => new Date().toDateString();
  function entries(p) {
    if (p.s.dungeon.day !== today()) { p.s.dungeon.day = today(); p.s.dungeon.used = 0; }
    return DAILY - p.s.dungeon.used;
  }
  function scaledDef(base, L, boss) {
    const b = D.MONSTERS[base];
    return Object.assign({}, b, {
      id: 'dungeon', name: boss ? '균열의 수호자 ' + b.name : '균열의 ' + b.name,
      lv: L, hp: Math.round((boss ? 200 : 22) * L + 200), atk: Math.round((boss ? 1.9 : 1.5) * L + 4), def: Math.round(0.6 * L),
      exp: Math.round(10 * Math.pow(L, 1.5) * (boss ? 25 : 1.4)), gold: [L * 6, L * 12], aggro: true, boss: !!boss,
      scale: boss ? 1.8 : b.scale, spd: b.spd * 1.1,
    });
  }
  function spawnWave(game) {
    const p = game.player;
    st.wave++;
    const L = Math.max(5, p.s.lv);
    const c = D.DUNGEON_CENTER;
    const spawn = { x: c.x, y: c.y, r: 9, noRespawn: true };
    st.mobs = [];
    if (st.wave === WAVES) {
      const def = scaledDef(U.pick(['minotaur', 'vampire']), L + 3, true);
      const m = new Monster(def, { x: c.x, y: c.y - 6, r: 1, noRespawn: true });
      st.mobs.push(m);
      UI.announce(`<em>${def.name}</em>이(가) 균열에서 모습을 드러냈습니다!`);
      U.sfx.boom(); game.shake = 12;
    } else {
      const n = 4 + st.wave * 2;
      for (let i = 0; i < n; i++) st.mobs.push(new Monster(scaledDef(U.pick(POOL), L, false), spawn));
      UI.toast(`웨이브 ${st.wave} / ${WAVES}`, '#c9a0ff');
    }
    for (const m of st.mobs) {
      m.target = p; m.inDungeon = true;
      game.monsters.push(m);
      game.fx.push(Combat.makeFx('teleport', m.x, m.y, { color: 'purple' }));
    }
  }
  function enter(game) {
    const p = game.player;
    if (st) return UI.toast('이미 던전에 있습니다.');
    if (p.s.lv < 5) return UI.toast('레벨 5 이상 입장 가능합니다.', '#ff8a80');
    if (entries(p) <= 0) return UI.toast('오늘의 입장 횟수를 모두 사용했습니다.', '#ff8a80');
    p.s.dungeon.used++;
    st = { wave: 0, t: TIME, mobs: [], next: 2.5, done: false };
    UI.close();
    game.teleportPlayer(D.DUNGEON_CENTER.x * D.TILE, (D.DUNGEON_CENTER.y + 8) * D.TILE);
    UI.toast('이클립스 균열에 입장했습니다.', '#c9a0ff');
    UI.chat('[던전] 5개의 웨이브를 제한 시간 안에 모두 처치하세요.', 'sys');
    document.getElementById('dungeon-hud').classList.remove('hidden');
  }
  function finish(game, win) {
    const p = game.player;
    for (const m of game.monsters) if (m.inDungeon && !m.dead) { m.dead = true; m.deadT = 2; }
    st.done = true;
    if (win) {
      const L = p.s.lv;
      const r = { gold: L * 800, dia: 60 + Math.floor(L * 1.5), items: { sc_weapon: 1, ticket: 1, hp_l: 5 } };
      if (Math.random() < 0.3) r.items.sc_armor = 1;
      p.s.gold += r.gold; p.s.dia += r.dia;
      for (const id in r.items) p.addItem(id, r.items[id]);
      p.s.dungeon.clears = (p.s.dungeon.clears || 0) + 1;
      Content.passXp(p, 40);
      U.sfx.legend();
      UI.toast('던전 클리어!', '#ffe38a');
      UI.chat(`[던전 보상] 아데나 ${U.fmt(r.gold)}, 다이아 ${r.dia}, 무기 마법 주문서, 초월 소환권, 강력 체력 회복제 x5`, 'sys');
      UI.announce(`<b>${UI.esc(p.name)}</b>님이 <em>이클립스 균열</em>을 정복했습니다!`);
    } else {
      U.sfx.fail();
      UI.toast('던전 실패...', '#ff8a80');
    }
    setTimeout(() => {
      if (!p.dead && World.zoneAt(p.x, p.y).dungeon) game.returnToTown();
      st = null;
      document.getElementById('dungeon-hud').classList.add('hidden');
    }, win ? 5000 : 1500);
  }
  function update(game, dt) {
    if (!st || st.done) return;
    const p = game.player;
    if (p.teleporting) return;
    const inside = World.zoneAt(p.x, p.y).dungeon;
    if (p.dead || !inside) return finish(game, false);
    st.t -= dt;
    if (st.t <= 0) { UI.chat('[던전] 제한 시간이 초과되었습니다.', 'warn'); return finish(game, false); }
    if (st.mobs.every((m) => m.dead)) {
      if (st.wave >= WAVES) return finish(game, true);
      st.next -= dt;
      if (st.next <= 0) { st.next = 3; spawnWave(game); }
    }
    const left = st.mobs.filter((m) => !m.dead).length;
    const mm = Math.floor(st.t / 60), ss = Math.floor(st.t % 60);
    document.getElementById('dungeon-hud').innerHTML =
      `<b>이클립스 균열</b> · 웨이브 ${Math.max(1, st.wave)}/${WAVES} · 남은 적 ${left} · <span style="color:${st.t < 60 ? '#ff6b5e' : '#fff'}">${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}</span>`;
  }

  return { enter, update, entries, get active() { return !!st; }, DAILY };
})();
