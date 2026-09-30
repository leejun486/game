'use strict';
// 공성전: a clan declares war on 아스텔라 성 (D.CASTLE), breaks the gate, then the guardian tower inside the keep.
// The owning clan's guards, archers and named champions defend; bots of the player's clan join the attack.
// Winning makes the player's clan the castle owner: a daily tax, a castle buff (Content.bonuses) and its banners.
const Siege = (() => {
  const TIME = 600, COST = 100000, MIN_LV = 25, PREP = 10;
  const C = D.CASTLE, T = D.TILE;
  const COLORS = { '용맹': '#b8312b', '붉은매': '#d8702a', '천상': '#3f8cff', '흑기사단': '#4a3458', '바람': '#3aa86a' };
  let st = null; // active siege
  const today = () => new Date().toDateString();

  function castle(p) { p.s.castle = p.s.castle || { owner: '흑기사단', taxDay: '', wins: 0 }; return p.s.castle; }
  const owner = () => (Game.player ? castle(Game.player).owner : '흑기사단');
  function colorOf(name) {
    const p = Game.player;
    if (p && p.s.myClan && p.s.myClan.name === name) return p.s.myClan.color;
    return COLORS[name] || '#8a6a2a';
  }
  const ownerColor = () => colorOf(owner());
  const isOwner = (p) => !!p.s.guild && castle(p).owner === p.s.guild;

  // the gate gap in the south wall is solid only while a siege is on
  function gateSolid(v) {
    for (let tx = C.gate[0]; tx <= C.gate[1]; tx++) World.setSolid(tx, C.y1, v);
    Nav.refresh((C.gate[0] - 2) * T, (C.y1 - 2) * T, (C.gate[1] + 3) * T, (C.y1 + 3) * T);
  }

  // ---------------------------------------------------------------- defenders
  function mk(id, L, o) {
    const d = Object.assign({ id, lv: L, spd: 85, scale: 1, aggro: true, range: 56, def: Math.round(0.6 * L) }, o);
    d.exp = Math.round(10 * Math.pow(L, 1.5) * (o.expMul || 1.6)); d.gold = [L * 4, L * 9];
    return d;
  }
  function place(game, def, tx, ty, r = 0) {
    const m = new Monster(def, { x: tx, y: ty, r, noRespawn: true });
    if (!r) { m.x = tx * T; m.y = ty * T; m.home = { x: m.x, y: m.y }; }
    m.siege = true; st.mobs.push(m); game.monsters.push(m);
    return m;
  }
  function spawnDefenders(game) {
    const p = game.player, L = Math.max(20, p.s.lv), own = owner();
    const guard = mk('siege_guard', L, { name: `${own} 수비대`, sheet: 'npc_guard', hp: 60 * L + 800, atk: Math.round(2.7 * L + 22), scale: 1.05, def: Math.round(0.8 * L) });
    const archer = mk('siege_archer', L, { name: `${own} 궁수`, sheet: 'elf_red', hp: 38 * L + 500, atk: Math.round(2.3 * L + 14), ranged: true, range: 290, def: Math.round(0.4 * L) });
    const gate = mk('castle_gate', L, { name: '아스텔라 성문', structure: 'gate', hp: 750 * L + 10000, atk: 0, aggro: false, radius: 64, height: 150, expMul: 20 });
    const tower = mk('castle_tower', L, { name: '수호탑', structure: 'tower', hp: 1100 * L + 15000, atk: Math.round(2.6 * L + 20), aggro: false, radius: 44, height: 200, range: 380, expMul: 30 });
    st.gate = place(game, gate, (C.gate[0] + C.gate[1]) / 2 + 0.5, C.y1 + 0.55);
    st.tower = place(game, tower, C.tower.x + 0.5, C.tower.y + 0.5);
    // outside the gate, on the inner side of the south wall (shooting over it), in the courtyard and the keep
    for (let i = 0; i < 6; i++) place(game, guard, 128 + (i - 2.5) * 2.2, C.y1 + 3.5, 1);
    for (let i = 0; i < 8; i++) place(game, archer, C.x0 + 3 + i * 3.3 + (i > 3 ? 3 : 0), C.y1 - 1.6);
    for (let i = 0; i < 10; i++) place(game, guard, 128 + U.rand(-10, 10), U.rand(C.keep.y1 + 2, C.y1 - 3), 1);
    // the owner clan's champions guard the tower
    const names = Game.bots.filter((b) => b.guild === own).map((b) => b.name).concat(D.BOT_NAMES).slice(0, 4);
    names.forEach((n, i) => {
      const look = D.BOT_SHEETS[i % D.BOT_SHEETS.length];
      const champ = mk('siege_champion', L + 2, { name: `[${own}] ${n}`, sheet: look.sheet, hp: 220 * L + 4000, atk: Math.round(3.2 * L + 30), def: L, scale: 1.12, spd: 95, range: look.cls === 'knight' ? 60 : 250, ranged: look.cls !== 'knight', expMul: 5 });
      place(game, champ, C.tower.x + [-3, 3, -2, 2][i], C.tower.y + [2, 2, 4, 4][i]);
    });
  }

  // ---------------------------------------------------------------- flow
  function declare(game) {
    const p = game.player;
    if (st) return UI.toast('이미 공성전이 진행 중입니다.');
    if (!p.s.guild) return UI.toast('혈맹에 가입해야 공성전에 참여할 수 있습니다.', '#ff8a80');
    if (isOwner(p)) return UI.toast('이미 우리 혈맹의 성입니다.', '#ffd76a');
    if (p.s.lv < MIN_LV) return UI.toast(`레벨 ${MIN_LV} 이상부터 선전포고할 수 있습니다.`, '#ff8a80');
    if (Dungeon.active) return UI.toast('던전에서는 선전포고할 수 없습니다.', '#ff8a80');
    if (p.s.gold < COST) return UI.toast('아데나가 부족합니다.', '#ff8a80');
    p.s.gold -= COST;
    st = { phase: 'prep', t: PREP, left: TIME, mobs: [], allies: [] };
    UI.close();
    game.teleportPlayer(128 * T + 32, (C.y1 + 8) * T);
    UI.announce(`<b>[${UI.esc(p.s.guild)}]</b> 혈맹이 <em>[${UI.esc(owner())}]</em> 혈맹의 아스텔라 성에 선전포고했습니다!`);
    UI.chat(`[공성전] ${PREP}초 후 공성전이 시작됩니다. 성문을 부수고 성 안의 수호탑을 파괴하세요.`, 'sys');
    BotChat.onEvent(`${p.s.guild} 혈맹이 ${owner()} 혈맹 성에 선전포고`, ['공성 가즈아', `${owner()} 긴장해라 ㅋㅋ`, '성문 부수러 갑니다']);
    hud(true);
  }
  function begin(game) {
    const p = game.player;
    st.phase = 'gate';
    gateSolid(true);
    spawnDefenders(game);
    U.sfx.boom(); game.shake = 10;
    UI.announce('<em>공성전이 시작되었습니다!</em> 성문을 파괴하세요!');
    // clanmates rally at the gate
    const mates = Game.bots.filter((b) => b.guild === p.s.guild && !b.dead).slice(0, 8);
    for (const b of mates) {
      b.state = 'hunt'; b.stateT = TIME + 30; b.siegeAlly = true; st.allies.push(b);
      b.teleport(128 * T + U.rand(-300, 300), (C.y1 + 6) * T + U.rand(-80, 120), game);
    }
    if (mates.length) setTimeout(() => Game.say(mates[0], U.pick(['성문부터 부숩시다!', '다들 모여요!!', '궁수 조심하세요'])), 1500);
  }
  function onKill(game, mon) {
    if (!st || st.done) return;
    if (mon === st.gate) {
      gateSolid(false); st.phase = 'tower';
      game.shake = 18; U.sfx.boom();
      VFX.debris(mon.x, mon.y, 30); VFX.fireBurst(mon.x, mon.y, 120, 1.2);
      UI.announce('<em>아스텔라 성문</em>이 무너졌습니다! 수호탑으로 진격하세요!');
      for (const m of st.mobs) if (!m.dead && !m.def.structure) m.aggroOn(game.player);
    } else if (mon === st.tower) finish(game, true);
  }
  function finish(game, win) {
    const p = game.player;
    st.done = true;
    for (const m of st.mobs) if (!m.dead) { m.dead = true; m.deadT = 2; }
    gateSolid(false);
    for (const b of st.allies) { b.siegeAlly = false; b.state = 'town'; b.stateT = U.rand(10, 30); }
    const cs = castle(p);
    if (win) {
      const prev = cs.owner, L = p.s.lv;
      cs.owner = p.s.guild; cs.wins++; cs.taxDay = '';
      const r = { gold: L * 3000, dia: 1000, items: { ticket: 10, sc_weapon: 3, sc_armor: 3 } };
      Content.give(p, r);
      Content.clanXp(p, 800);
      U.sfx.legend(); game.shake = 14;
      VFX.fireBurst(st.tower.x, st.tower.y, 200, 2);
      UI.announce(`<b>[${UI.esc(p.s.guild)}]</b> 혈맹이 <em class="legend">아스텔라 성</em>을 점령했습니다! (${UI.esc(prev)} → ${UI.esc(p.s.guild)})`);
      BotChat.onEvent(`${p.s.guild} 혈맹이 아스텔라 성을 점령`, ['성주님 ㅊㅋㅊㅋ', `${p.s.guild} 미쳤다`, '세금 얼마 걷어요?']);
      p.recalc(); UI.refreshAll();
    } else {
      U.sfx.fail();
      UI.announce(`<em>[${UI.esc(cs.owner)}]</em> 혈맹이 아스텔라 성을 지켜냈습니다.`);
    }
    game.save();
    setTimeout(() => { st = null; hud(false); }, 4000);
  }
  function update(game, dt) {
    if (!st || st.done) return;
    if (st.phase === 'prep') {
      st.t -= dt;
      if (st.t <= 0) begin(game);
    } else {
      st.left -= dt;
      if (st.left <= 0) { UI.chat('[공성전] 제한 시간이 끝났습니다.', 'warn'); return finish(game, false); }
    }
    const el = document.getElementById('siege-hud');
    if (!el) return;
    const t = st.phase === 'prep' ? st.t : st.left, mm = Math.floor(t / 60), ss = Math.floor(t % 60);
    const tgt = st.phase === 'prep' ? '준비' : st.phase === 'gate' ? `성문 ${Math.max(0, Math.round((st.gate.hp / st.gate.maxHp) * 100))}%` : `수호탑 ${Math.max(0, Math.round((st.tower.hp / st.tower.maxHp) * 100))}%`;
    el.innerHTML = `<b style="color:${ownerColor()}">■</b> <b>공성전</b> · ${st.phase === 'prep' ? '시작까지' : tgt} · <span style="color:${t < 60 ? '#ff6b5e' : '#fff'}">${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}</span>`;
  }
  function hud(on) {
    let el = document.getElementById('siege-hud');
    if (on && !el) { el = document.createElement('div'); el.id = 'siege-hud'; document.getElementById('hud').appendChild(el); }
    if (!on && el) el.remove();
  }
  // back into the fight after dying (free while a siege is on)
  function rejoin(game) {
    if (!st || st.done) return;
    UI.close();
    game.teleportPlayer(128 * T + 32, (C.y1 + 7) * T);
  }
  function claimTax(game) {
    const p = game.player, cs = castle(p);
    if (!isOwner(p)) return;
    if (cs.taxDay === today()) return UI.toast('오늘의 세금은 이미 걷었습니다.');
    cs.taxDay = today();
    Content.give(p, { gold: 30000 + p.s.lv * 1500, dia: 300, items: { ticket: 2 } });
  }

  // ---------------------------------------------------------------- structures
  // the tower shoots the nearest attacker in range every couple of seconds
  function structureTick(m, dt, game) {
    if (m.def.structure !== 'tower') return;
    m.atkCd -= dt;
    if (m.atkCd > 0) return;
    let best = null, bd = m.def.range;
    for (const e of game.fighters()) { if (e.dead) continue; const d = U.dist(e, m); if (d < bd) { bd = d; best = e; } }
    if (!best) return;
    m.atkCd = 2.2;
    game.fx.push(Combat.makeFx('mobarrow', m.x, m.y - 170, { tx: best.x, ty: best.y - 26, dur: 0.3 }));
    setTimeout(() => { if (!m.dead && !best.dead) { Combat.monsterHit(m, best, true, true); VFX.sparkBurst(best.x, best.y - 20, 'arcane', 8); } }, 300);
  }
  function drawStructure(ctx, cam, m) {
    if (m.dead && m.deadT > 0.6) return;
    const x = m.x - cam.x, y = m.y - cam.y, hp = m.hp / m.maxHp;
    ctx.save();
    if (m.dead) ctx.globalAlpha = 1 - m.deadT / 0.6;
    if (m.flash > 0) ctx.translate(U.rand(-2, 2), 0);
    if (m.def.structure === 'gate') {
      const w = 3 * T, h = 132;
      ctx.fillStyle = 'rgba(0,0,0,0.35)'; ctx.fillRect(x - w / 2, y + 6, w, 16);
      ctx.fillStyle = '#4a3322'; ctx.fillRect(x - w / 2 + 8, y - h, w - 16, h + 18);
      ctx.fillStyle = '#5e422c';
      for (let i = 0; i < 6; i++) ctx.fillRect(x - w / 2 + 12 + i * ((w - 24) / 6), y - h + 4, (w - 24) / 6 - 4, h + 10);
      ctx.fillStyle = '#2a2a30';
      for (const yy of [y - h + 22, y - h / 2, y - 6]) ctx.fillRect(x - w / 2 + 8, yy, w - 16, 7);
      ctx.fillStyle = '#9a9aa6';
      for (const yy of [y - h + 25, y - h / 2 + 3, y - 3]) for (let i = 0; i < 7; i++) ctx.fillRect(x - w / 2 + 16 + i * 26, yy - 1, 3, 3);
      ctx.strokeStyle = '#1a120c'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(x, y - h); ctx.lineTo(x, y + 18); ctx.stroke();
      // cracks as it breaks
      ctx.strokeStyle = 'rgba(15,8,4,0.9)'; ctx.lineWidth = 2;
      const cracks = Math.floor((1 - hp) * 8);
      for (let i = 0; i < cracks; i++) { const cx = x - w / 2 + 20 + ((i * 53) % (w - 40)), cy = y - h + 20 + ((i * 37) % (h - 30)); ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + 10, cy + 14); ctx.lineTo(cx + 4, cy + 26); ctx.stroke(); }
      if (m.flash > 0) { ctx.globalCompositeOperation = 'lighter'; ctx.fillStyle = `rgba(255,220,160,${m.flash * 2})`; ctx.fillRect(x - w / 2 + 8, y - h, w - 16, h + 18); }
    } else {
      const col = ownerColor(), t = performance.now() / 1000;
      ctx.fillStyle = 'rgba(0,0,0,0.35)'; ctx.beginPath(); ctx.ellipse(x, y, 52, 16, 0, 0, Math.PI * 2); ctx.fill();
      const g = ctx.createLinearGradient(x - 38, 0, x + 38, 0); g.addColorStop(0, '#5a5560'); g.addColorStop(0.5, '#8a8490'); g.addColorStop(1, '#4a4550');
      ctx.fillStyle = g; ctx.fillRect(x - 36, y - 160, 72, 162);
      ctx.fillStyle = '#6a6470'; for (let i = 0; i < 5; i++) ctx.fillRect(x - 44 + i * 20, y - 176, 14, 18);
      ctx.strokeStyle = 'rgba(30,26,34,0.5)'; ctx.lineWidth = 1;
      for (let yy = y - 150; yy < y; yy += 16) { ctx.beginPath(); ctx.moveTo(x - 36, yy); ctx.lineTo(x + 36, yy); ctx.stroke(); }
      ctx.fillStyle = '#1e1a24'; ctx.fillRect(x - 7, y - 120, 14, 24); ctx.fillRect(x - 12, y - 30, 24, 32);
      // the crystal on top glows in the owner's colours
      const pulse = 0.6 + Math.sin(t * 3) * 0.25;
      const cg = ctx.createRadialGradient(x, y - 196, 2, x, y - 196, 46); cg.addColorStop(0, `rgba(255,255,255,${pulse})`); cg.addColorStop(0.3, col); cg.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = cg; ctx.beginPath(); ctx.arc(x, y - 196, 46, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(x, y - 222); ctx.lineTo(x + 12, y - 196); ctx.lineTo(x, y - 176); ctx.lineTo(x - 12, y - 196); ctx.closePath(); ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.7)'; ctx.stroke();
      if (hp < 0.5) { ctx.strokeStyle = 'rgba(20,16,24,0.9)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(x - 20, y - 140); ctx.lineTo(x - 6, y - 110); ctx.lineTo(x - 16, y - 80); ctx.stroke(); }
      if (m.flash > 0) { ctx.globalCompositeOperation = 'lighter'; ctx.fillStyle = `rgba(255,220,160,${m.flash * 2})`; ctx.fillRect(x - 36, y - 176, 72, 178); }
    }
    ctx.restore();
  }

  const objective = () => (st && !st.done ? [st.gate, st.tower].find((m) => m && !m.dead) || null : null);
  return {
    objective, declare, update, onKill, rejoin, claimTax, structureTick, drawStructure, ownerColor, colorOf, isOwner, castle,
    COST, MIN_LV, TIME, get active() { return !!st && !st.done; }, get phase() { return st && st.phase; },
    owner,
  };
})();
