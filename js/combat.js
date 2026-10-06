'use strict';
// Combat resolution, projectiles, visual effects, loot and quest progress.
const Combat = (() => {
  function floatText(game, e, text, color, big = false) {
    game.floaters.push({ text, x: e.x + U.rand(-10, 10), y: e.headY - 6, t: 0, color, big });
  }

  function damageMonster(game, hero, mon, mult, opts = {}) {
    if (!mon || mon.dead) return 0;
    const st = hero.stats;
    let raw = st.atk * mult * D.HERO_DMG * U.rand(0.9, 1.1);
    const crit = Math.random() * 100 < (st.crit || 5) + (opts.critBonus || 0);
    if (crit) raw *= 1.6;
    let dmg = Math.max(1, Math.round(Math.max(raw * 0.15, raw - mon.def_ * 0.6)));
    if (hero === game.player && hero.s.gm && hero.s.gm.oneHit) dmg = Math.max(dmg, Math.ceil(mon.hp));
    mon.hp -= dmg; mon.flash = 0.15;
    mon.aggroOn(hero);
    if (hero === game.player) {
      mon.damagedBy.set('player', (mon.damagedBy.get('player') || 0) + dmg);
      floatText(game, mon, String(dmg), crit ? '#ffdb4d' : '#ffffff', crit);
      hitFeedback(game, hero, mon, crit, opts.el);
      if (crit) game.shake = Math.max(game.shake, 4);
    } else game.fx.push(makeFx('spark', mon.x, mon.y - 28 * mon.scale, { color: crit ? '#ffdb4d' : '#fff' }));
    if (opts.slow) mon.slowT = opts.slow;
    if (mon.hp <= 0) kill(game, mon, hero);
    return dmg;
  }
  // the player's hits sound and look different per class and element, with random variety
  function hitFeedback(game, hero, mon, crit, el) {
    const x = mon.x, y = mon.y - 28 * mon.scale;
    if (el === 'fire') { U.sfx.fireHit(); VFX.fireBurst(mon.x, mon.y, 26, 0.3); }
    else if (el === 'ice') { U.sfx.iceHit(); VFX.iceBurst(mon.x, mon.y, 24, 0.35); }
    else if (el === 'lightning') { U.sfx.zapHit(); VFX.sparkBurst(x, mon.y, 'zap', 5); }
    else if (hero.cls === 'knight') {
      crit ? U.sfx.heavyHit() : U.sfx.slashHit();
      game.fx.push(makeFx(crit ? 'bigslash' : 'slash', x, y, { dir: U.rand(-3, 3), color: crit ? '#ffd76a' : ['#fff6d8', '#ffe6c0', '#e8f0ff'][U.randi(0, 2)] }));
    } else if (hero.cls === 'elf') {
      crit ? U.sfx.heavyHit() : U.sfx.arrowHit();
      game.fx.push(makeFx('spark', x, y, { color: crit ? '#ffdb4d' : ['#b8ffcf', '#e8ffe0', '#9fe8ff'][U.randi(0, 2)] }));
      if (Math.random() < 0.5) VFX.dust(mon.x, mon.y, 2, '#d8f0c0');
    } else {
      crit ? U.sfx.heavyHit() : U.sfx.boltHit();
      game.fx.push(makeFx('burst', x, y, { r: crit ? 40 : 24, color: ['#b18cff', '#8fb8ff', '#d08cff'][U.randi(0, 2)] }));
    }
    if (crit) {
      game.fx.push(makeFx('shock', mon.x, mon.y, { r: 60, color: '#ffd76a', dur: 0.35 }));
      if (el) U.sfx.heavyHit();
    }
  }
  function heroHit(hero, target, mult) {
    const game = Game;
    if (!target || target.dead) return;
    if (U.dist(hero, target) > hero.classDef.range + target.radius + 40) return;
    if (hero !== game.player) game.fx.push(makeFx('slash', target.x, target.y - 26, { dir: hero.dir }));
    damageMonster(game, hero, target, mult);
  }
  function monsterHit(mon, target, heavy, aoe) {
    const game = Game;
    if (!target || target.dead || mon.dead) return;
    if (!aoe && U.dist(mon, target) > mon.def.range + target.radius + 30) return;
    if (target === game.player) {
      const p = target, st = p.stats;
      if (p.s.gm && p.s.gm.god) { floatText(game, p, 'IMMUNE', '#ffd76a'); return; }
      if (Math.random() < st.eva / (st.eva + 320)) { floatText(game, p, 'MISS', '#b0d8ff'); return; }
      let raw = mon.atk * U.rand(0.85, 1.15) * (heavy ? 1.8 : 1);
      const dmg = Math.max(1, Math.round(raw - st.def * 0.6 - st.dmgRed));
      p.hp -= dmg; p.flash = 0.12; p.combatT = 5;
      floatText(game, p, '-' + dmg, '#ff5b4d');
      if (heavy) { game.shake = 8; game.fx.push(makeFx('doom', p.x, p.y - 20, { color: '#ff3b2e' })); }
      if (p.auto && !p.target) p.target = mon;
      if (p.hp <= 0) game.playerDie(mon);
    } else {
      target.hp -= Math.max(1, mon.atk * 0.6);
      target.flash = 0.1;
      if (!target.target) target.target = mon;
    }
  }

  function kill(game, mon, killer) {
    mon.dead = true; mon.deadT = 0; mon.action = null; mon.target = null;
    game.scheduleRespawn(mon);
    Siege.onKill(game, mon);
    const byPlayer = killer === game.player || mon.damagedBy.has('player');
    if (!byPlayer) return;
    const p = game.player;
    const d = mon.def;
    // level-difference penalty so low monsters give less
    const diff = p.s.lv - d.lv;
    const expMul = diff > 8 ? Math.max(0.1, 1 - (diff - 8) * 0.1) : 1;
    const exp = Math.round(d.exp * expMul);
    p.gainExp(exp, game);
    if (d.boss) BotChat.onEvent(`${p.name}가 보스 ${d.name}을(를) 처치했다`, [`${d.name} 잡았다고?`, `${p.name}님 ㄷㄷ`, '드랍 뭐 나왔어요?']);
    floatText(game, mon, `EXP +${U.fmt(exp)}`, '#7cf29a');
    const gold = U.randi(d.gold[0], d.gold[1]);
    p.s.gold += gold;
    p.s.kills++;
    setTimeout(() => { floatText(game, mon, `+${U.fmt(gold)} 아데나`, '#ffd76a'); U.sfx.coin(); }, 180);
    // drops: plain loot flies to the player; 희귀+ stays on the ground under a pillar of light (see Game.updateDrops)
    const table = [...D.DROPS.common, ...(D.DROPS[d.id] || [])];
    for (let [id, ch] of table) {
      if (Math.random() < Math.min(1, ch * (D.DROP_MUL[D.ITEMS[id].kind] || 1))) {
        id = D.forClass(id, p.cls);
        const n = D.ITEMS[id].kind === 'potion' ? U.randi(1, 3) : 1;
        const a = Math.random() * Math.PI * 2, r = U.rand(20, 60);
        game.drops.push({ id, n, x: mon.x + Math.cos(a) * r, y: mon.y + Math.sin(a) * r * 0.6, sx: mon.x, sy: mon.y, t: 0 });
        game.dropped(D.ITEMS[id], game.drops[game.drops.length - 1]);
      }
    }
    if (d.boss && d.id !== 'dungeon') p.s.bossKills++;
    Content.passXp(p, d.boss ? 30 : 1);
    Content.clanXp(p, d.boss ? 60 : 1);
    if (Math.random() < (d.boss ? 1 : 0.004)) { const dia = d.boss ? U.randi(80, 200) : U.randi(1, 5); p.s.dia += dia; UI.chat(`다이아 ${dia}개를 획득했습니다.`, 'drop'); }
    if (d.boss) UI.announce(`<b>${p.name}</b>님이 <em>${d.name}</em>을(를) 처치했습니다!`);
    Quests.onKill(game, d.id);
    UI.refreshHud();
  }

  // ---------------------------------------------------------------- projectiles
  function shoot(hero, target, o) {
    const game = Game;
    const sy = hero.y - 30;
    const pr = {
      kind: o.kind, x: hero.x, y: sy, target, owner: hero, mult: o.mult, speed: o.kind === 'arrow' ? 900 : 620,
      opts: o.opts || {}, onHit: o.onHit, t: 0, pierce: o.pierce, el: o.el !== undefined ? o.el : (o.kind === 'bolt' ? 'arcane' : null),
    };
    if (o.pierce) {
      const a = Math.atan2(target.y - hero.y, target.x - hero.x);
      pr.vx = Math.cos(a); pr.vy = Math.sin(a); pr.hit = new Set(); pr.life = 0.7;
    }
    game.projectiles.push(pr);
    if (o.kind === 'bolt' && hero === game.player) U.sfx.boltCast();
  }
  function updateProjectiles(game, dt) {
    const out = [];
    for (const p of game.projectiles) {
      p.t += dt;
      if (p.el) VFX.trail(p.el, p.x, p.y, dt, p.big);
      if (p.pierce) {
        p.x += p.vx * p.speed * dt; p.y += p.vy * p.speed * dt; p.life -= dt;
        for (const m of game.monsters) {
          if (m.dead || p.hit.has(m)) continue;
          if (Math.hypot(m.x - p.x, m.y - 30 - p.y) < 40 * m.scale) { p.hit.add(m); damageMonster(game, p.owner, m, p.mult, { critBonus: p.critBonus ?? 20, slow: p.slow, el: p.el }); if (p.onPierce) p.onPierce(m); }
        }
        if (p.life > 0) out.push(p);
        else if (p.onEnd) p.onEnd(p.x, p.y + 30);
        continue;
      }
      const t = p.target;
      if (!t || t.dead) { if (p.t < 0.6 && t) out.push(p); continue; }
      const tx = t.x, ty = t.y - 28 * t.scale;
      const dx = tx - p.x, dy = ty - p.y, d = Math.hypot(dx, dy);
      const step = p.speed * dt;
      p.ang = Math.atan2(dy, dx);
      if (d <= step + 6) {
        if (p.onHit) p.onHit(t);
        else {
          damageMonster(game, p.owner, t, p.mult, p.opts);
          if (p.kind === 'bolt') game.fx.push(makeFx('burst', tx, ty, { color: '#b18cff' }));
        }
      } else { p.x += (dx / d) * step; p.y += (dy / d) * step; out.push(p); }
    }
    game.projectiles = out;
  }
  function drawProjectile(ctx, cam, p) {
    const x = p.x - cam.x, y = p.y - cam.y;
    const a = p.pierce ? Math.atan2(p.vy, p.vx) : p.ang || 0;
    if (p.el === 'fire') return p.kind === 'arrow' ? VFX.drawFireArrow(ctx, x, y, a) : VFX.drawFireball(ctx, x, y, a, p.big);
    if (p.el === 'ice') return p.kind === 'arrow' ? VFX.drawFrostArrow(ctx, x, y, a) : VFX.drawIceLance(ctx, x, y, a, p.big);
    ctx.save(); ctx.translate(x, y); ctx.rotate(a);
    if (p.kind === 'arrow') {
      if (p.pierce) {
        ctx.globalCompositeOperation = 'lighter';
        const g = ctx.createLinearGradient(-80, 0, 20, 0); g.addColorStop(0, 'rgba(120,255,200,0)'); g.addColorStop(1, 'rgba(160,255,220,0.9)');
        ctx.fillStyle = g; ctx.fillRect(-80, -6, 100, 12);
        ctx.fillStyle = '#eafff6'; ctx.fillRect(-30, -2, 50, 4);
      } else {
        ctx.strokeStyle = '#d9c7a0'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(-18, 0); ctx.lineTo(8, 0); ctx.stroke();
        ctx.fillStyle = '#ddd'; ctx.beginPath(); ctx.moveTo(12, 0); ctx.lineTo(6, -3); ctx.lineTo(6, 3); ctx.fill();
        ctx.fillStyle = '#c33'; ctx.fillRect(-18, -3, 5, 6);
      }
    } else {
      const col = p.opts.color || '#b18cff';
      ctx.globalCompositeOperation = 'lighter';
      const r = p.big ? 20 : 10;
      const g = ctx.createRadialGradient(0, 0, 1, 0, 0, r * 2);
      g.addColorStop(0, '#fff'); g.addColorStop(0.3, col); g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(0, 0, r * 2, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = col; ctx.globalAlpha = 0.5; ctx.fillRect(-r * 2.5, -r * 0.4, r * 2, r * 0.8);
    }
    ctx.restore();
  }

  // ---------------------------------------------------------------- skills
  function aoe(game, hero, x, y, radius, mult, opts) {
    let n = 0;
    for (const m of game.monsters) {
      if (m.dead) continue;
      if (Math.hypot(m.x - x, (m.y - y) * 1.3) < radius + m.radius) { damageMonster(game, hero, m, mult, opts); n++; }
    }
    return n;
  }
  function castSkill(p, sk, target, game) {
    const anim = sk.anim;
    const dur = 0.55 / (1 + (p.cls === 'mage' ? p.stats.castSpd : p.stats.atkSpd) / 200);
    if (target) p.face(target);
    p.combatT = 5;
    UI.skillName(sk.name);
    switch (sk.type) {
      case 'single':
        p.act(anim, dur, () => {
          if (sk.fx === 'ice') {
            shoot(p, target, { kind: 'bolt', mult: sk.mult, opts: { slow: sk.slow, color: '#7fd4ff' }, onHit: (t) => {
              damageMonster(game, p, t, sk.mult, { slow: sk.slow }); game.fx.push(makeFx('ice', t.x, t.y));
            } });
            U.sfx.magic();
          } else {
            game.fx.push(makeFx(sk.fx === 'doom' ? 'doom' : 'bigslash', target.x, target.y - 26, { color: sk.fx === 'doom' ? '#ff4a2e' : '#fff3c0' }));
            damageMonster(game, p, target, sk.mult, { critBonus: sk.fx === 'doom' ? 30 : 10 });
            game.shake = sk.fx === 'doom' ? 10 : 4;
            U.sfx.crit();
          }
        });
        break;
      case 'aoe_self':
        p.act(anim, dur, () => {
          game.fx.push(makeFx('whirl', p.x, p.y, { r: sk.radius }));
          aoe(game, p, p.x, p.y, sk.radius, sk.mult); game.shake = 5; U.sfx.swing(); setTimeout(U.sfx.swing, 90);
        });
        break;
      case 'aoe_target': {
        const tx = target.x, ty = target.y;
        p.act(anim, dur, () => {
          if (sk.fx === 'fire') {
            shoot(p, target, { kind: 'bolt', mult: sk.mult, opts: { color: '#ff8a2e' }, onHit: () => {
              game.fx.push(makeFx('explode', target.x, target.y, { r: sk.radius, color: '#ff8a2e' }));
              aoe(game, p, target.x, target.y, sk.radius, sk.mult); U.sfx.boom(); game.shake = 5;
            } });
            game.projectiles[game.projectiles.length - 1].big = true;
          } else if (sk.fx === 'meteor') {
            game.fx.push(makeFx('meteor', tx, ty, { r: sk.radius, onLand: () => { aoe(game, p, tx, ty, sk.radius, sk.mult); U.sfx.boom(); game.shake = 14; } }));
          } else if (sk.fx === 'rain') {
            game.fx.push(makeFx('rain', tx, ty, { r: sk.radius }));
            U.sfx.bow();
            for (let i = 0; i < 3; i++) setTimeout(() => { aoe(game, p, tx, ty, sk.radius, sk.mult / 3 * 1.2); }, 250 + i * 200);
          }
        });
        break;
      }
      case 'multi':
        p.act(anim, dur, () => {
          for (let i = 0; i < sk.count; i++) setTimeout(() => { if (!target.dead) { shoot(p, target, { kind: 'arrow', mult: sk.mult }); U.sfx.bow(); } }, i * 90);
        });
        break;
      case 'pierce':
        p.act(anim, dur, () => { shoot(p, target, { kind: 'arrow', mult: sk.mult, pierce: true }); U.sfx.magic(); });
        break;
      case 'buff':
        p.act(anim, dur, () => { p.addBuff(sk.buff); game.fx.push(makeFx('buff', p.x, p.y, { follow: p, color: sk.buff.id === 'rage' ? '#ff5a3a' : '#7dffcf' })); U.sfx.magic(); UI.refreshHud(); });
        break;
      case 'heal':
        p.act(anim, dur, () => {
          const n = Math.round(p.maxHp * sk.pct); p.hp = Math.min(p.maxHp, p.hp + n);
          floatText(game, p, '+' + n, '#6cff7a', true);
          game.fx.push(makeFx('heal', p.x, p.y, { follow: p, color: '#7dff8a' })); U.sfx.potion();
        });
        break;
    }
  }

  // ---------------------------------------------------------------- effects
  function makeFx(type, x, y, o = {}) {
    const dur = { spark: 0.25, slash: 0.22, bigslash: 0.35, doom: 0.5, whirl: 0.45, explode: 0.55, ice: 0.6, meteor: 1.25, rain: 0.9,
      heal: 1.0, buff: 0.9, levelup: 1.8, teleport: 0.8, tpcast: 1.0, tparrive: 0.75, mote: 0.7, glint: 0.45, rune: 1.2, breath: 0.5, petbolt: 0.35, dash: 0.3, zap: 0.25, burst: 0.3, loot: 0.9, castcircle: 0.75, shock: 0.5, pillar: 0.65, legendfall: 1.6 }[type] || 0.5;
    return Object.assign({ type, x, y, t: 0, dur }, o);
  }
  // extra punch layered on skill effects the frame they appear: shockwave rings, light, sparks, shake
  function boost(game, f) {
    const near = game.player && Math.hypot(f.x - game.player.x, f.y - game.player.y) < 900;
    if (!near) return;
    const ring = (r, color, dur) => game.fx.push(makeFx('shock', f.x, f.y, { r, color, dur }));
    switch (f.type) {
      case 'bigslash': ring(80, f.color || '#fff6d8'); VFX.sparkBurst(f.x, f.y + 26, 'spark', 10); break;
      case 'doom': ring(150, f.color || '#ff4a2e'); ring(90, '#ffffff', 0.35); VFX.flash(f.x, f.y + 26, 220, f.color || '#ff4a2e', 0.4); VFX.sparkBurst(f.x, f.y + 26, 'ember', 20); game.shake = Math.max(game.shake, 7); break;
      case 'whirl': ring((f.r || 120) * 1.15, '#fff2c4'); VFX.sparkBurst(f.x, f.y, 'spark', 14); break;
      case 'explode': case 'burst': {
        const r = f.r || 40;
        ring(r * 1.5, f.color || '#ff8a2e'); if (r > 80) ring(r * 0.9, '#ffffff', 0.35);
        VFX.flash(f.x, f.y, r * 2, f.color || '#ff8a2e', 0.35);
        if (r > 60) { VFX.sparkBurst(f.x, f.y, 'ember', 16); game.shake = Math.max(game.shake, 5); }
        break;
      }
      case 'dash': VFX.sparkBurst(f.to[0], f.to[1], 'spark', 12); ring(70, f.color || '#fff3c0'); break;
      case 'zap': VFX.flash(f.to[0], f.to[1], 90, f.color || '#aee6ff', 0.25); break;
      case 'heal': case 'buff': if (!f.small) game.fx.push(makeFx('pillar', f.x, f.y, { color: f.color, follow: f.follow })); break;
      case 'legendfall': break;
    }
  }
  function updateFx(game, dt) {
    for (const f of game.fx) {
      if (!f.boosted) { f.boosted = true; boost(game, f); }
      f.t += dt;
      if (f.follow) { f.x = f.follow.x; f.y = f.follow.y; }
      if (f.type === 'legendfall' && !f.landed && f.t >= 0.35) {
        f.landed = true;
        for (const [r, c, d] of [[260, '#ffd86a', 0.7], [160, '#ffffff', 0.45], [380, '#ffb13a', 0.9]]) game.fx.push(makeFx('shock', f.x, f.y, { r, color: c, dur: d }));
        VFX.flash(f.x, f.y, 520, '#ffd86a', 0.9);
        VFX.sparkBurst(f.x, f.y, 'ember', 40);
        for (let i = 0; i < 24; i++) VFX.sparkle(f.x + U.rand(-90, 90), f.y + U.rand(-30, 30), U.rand(0, 120), '#ffe9a0');
        game.shake = Math.max(game.shake, 14);
        U.sfx.boom();
      }
      if (f.type === 'meteor' && !f.landed) {
        const q = Math.min(1, f.t / 0.7);
        VFX.trail('fire', f.x + (1 - q) * 260, f.y - (1 - q) * 520 - 20, dt, true);
        if (f.t >= 0.7) {
          f.landed = true; VFX.fireBurst(f.x, f.y, f.r || 90, (f.r || 90) > 120 ? 1.6 : 0.9); VFX.debris(f.x, f.y, 12);
          game.fx.push(makeFx('shock', f.x, f.y, { r: (f.r || 90) * 1.7, color: '#ff8a2e', dur: 0.6 }), makeFx('shock', f.x, f.y, { r: (f.r || 90) * 1.1, color: '#fff2c4', dur: 0.4 }));
          VFX.sparkBurst(f.x, f.y, 'ember', 24);
          f.onLand && f.onLand();
        }
      }
    }
    game.fx = game.fx.filter((f) => f.t < f.dur);
    for (const ft of game.floaters) { ft.t += dt; ft.y -= (ft.big ? 40 : 34) * dt; }
    game.floaters = game.floaters.filter((f) => f.t < 1.1);
  }
  function drawFx(ctx, cam, f) {
    const x = f.x - cam.x, y = f.y - cam.y, k = f.t / f.dur;
    ctx.save();
    switch (f.type) {
      case 'spark': {
        ctx.globalCompositeOperation = 'lighter';
        ctx.strokeStyle = f.color; ctx.lineWidth = 2; ctx.globalAlpha = 1 - k;
        for (let i = 0; i < 6; i++) {
          const a = i * 1.05 + f.x;
          ctx.beginPath(); ctx.moveTo(x + Math.cos(a) * 4, y + Math.sin(a) * 4); ctx.lineTo(x + Math.cos(a) * (8 + k * 20), y + Math.sin(a) * (8 + k * 20)); ctx.stroke();
        }
        break;
      }
      case 'slash': case 'bigslash': {
        ctx.globalCompositeOperation = 'lighter';
        const big = f.type === 'bigslash';
        ctx.globalAlpha = 1 - k; ctx.strokeStyle = f.color || '#fff6d8'; ctx.lineWidth = big ? 7 : 4;
        const r = big ? 46 : 30, st = -2.4 + (f.dir || 0) * 0.6;
        ctx.beginPath(); ctx.arc(x, y, r, st + k * 1.2, st + 1.8 + k * 1.2); ctx.stroke();
        if (big) { ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(x, y, r * 0.7, st + 0.6 + k * 1.5, st + 2.4 + k * 1.5); ctx.stroke(); }
        break;
      }
      case 'mobarrow': { // enemy archer's arrow, (x, y) -> (tx, ty)
        const ax = U.lerp(f.x, f.tx, k) - cam.x, ay = U.lerp(f.y, f.ty, k) - cam.y, an = Math.atan2(f.ty - f.y, f.tx - f.x);
        ctx.translate(ax, ay); ctx.rotate(an);
        ctx.strokeStyle = '#d8c8a0'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(-18, 0); ctx.lineTo(6, 0); ctx.stroke();
        ctx.fillStyle = '#eee'; ctx.beginPath(); ctx.moveTo(8, 0); ctx.lineTo(2, -3); ctx.lineTo(2, 3); ctx.fill();
        break;
      }
      case 'stompwarn': { // ground ring that fills up until the stomp lands
        ctx.translate(x, y); ctx.scale(1, 0.55);
        const R = f.r || 180;
        const rgb = f.dark ? ['150,60,230', '200,120,255', '235,200,255'] : f.fire ? ['255,110,30', '255,170,80', '255,225,170'] : ['90,180,255', '160,225,255', '200,240,255'];
        ctx.fillStyle = `rgba(${rgb[0]},${0.12 + k * 0.18})`; ctx.beginPath(); ctx.arc(0, 0, R, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = `rgba(${rgb[1]},0.35)`; ctx.beginPath(); ctx.arc(0, 0, R * k, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = `rgba(${rgb[2]},${0.6 + Math.sin(f.t * 30) * 0.3})`; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(0, 0, R, 0, Math.PI * 2); ctx.stroke();
        break;
      }
      case 'doom': {
        ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = 1 - k;
        ctx.strokeStyle = f.color || '#ff4a2e'; ctx.lineWidth = 10 * (1 - k) + 2;
        const L = 60 + k * 30;
        ctx.beginPath(); ctx.moveTo(x - L, y - L * 0.6); ctx.lineTo(x + L, y + L * 0.6); ctx.moveTo(x + L, y - L * 0.6); ctx.lineTo(x - L, y + L * 0.6); ctx.stroke();
        const g = ctx.createRadialGradient(x, y, 0, x, y, 70); g.addColorStop(0, 'rgba(255,120,60,0.8)'); g.addColorStop(1, 'rgba(255,0,0,0)');
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, 70, 0, Math.PI * 2); ctx.fill();
        break;
      }
      case 'whirl': {
        ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = 1 - k;
        ctx.translate(x, y - 20); ctx.scale(1, 0.55);
        ctx.strokeStyle = '#fff2c4'; ctx.lineWidth = 6;
        for (let i = 0; i < 3; i++) { ctx.beginPath(); ctx.arc(0, 0, f.r * (0.4 + k * 0.6) - i * 14, k * 12 + i * 2, k * 12 + i * 2 + 2.2); ctx.stroke(); }
        break;
      }
      case 'explode': case 'burst': {
        ctx.globalCompositeOperation = 'lighter';
        const r = (f.r || 40) * (0.3 + k * 0.9);
        const g = ctx.createRadialGradient(x, y - 10, 0, x, y - 10, r);
        g.addColorStop(0, `rgba(255,255,220,${1 - k})`); g.addColorStop(0.35, hexA(f.color || '#ff8a2e', 0.9 * (1 - k))); g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y - 10, r, 0, Math.PI * 2); ctx.fill();
        break;
      }
      case 'ice': {
        ctx.globalAlpha = 1 - k;
        ctx.fillStyle = '#bfefff'; ctx.strokeStyle = '#5fb8e8';
        for (let i = 0; i < 7; i++) {
          const a = (i / 7) * Math.PI * 2, d = 14 + k * 8;
          const px = x + Math.cos(a) * d, py = y - 6 + Math.sin(a) * d * 0.5;
          ctx.beginPath(); ctx.moveTo(px - 5, py); ctx.lineTo(px, py - 26 - (i % 3) * 8); ctx.lineTo(px + 5, py); ctx.closePath(); ctx.fill(); ctx.stroke();
        }
        break;
      }
      case 'meteor': {
        if (f.t < 0.7) {
          const q = f.t / 0.7;
          ctx.globalAlpha = 0.5; ctx.strokeStyle = '#ff5a2e'; ctx.lineWidth = 2;
          ctx.beginPath(); ctx.ellipse(x, y, f.r * q, f.r * 0.5 * q, 0, 0, Math.PI * 2); ctx.stroke();
          ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'lighter';
          const mx = x + (1 - q) * 260, my = y - (1 - q) * 520 - 20;
          const g = ctx.createRadialGradient(mx, my, 0, mx, my, 44);
          g.addColorStop(0, '#fff'); g.addColorStop(0.3, '#ffb34a'); g.addColorStop(1, 'rgba(255,60,0,0)');
          ctx.fillStyle = g; ctx.beginPath(); ctx.arc(mx, my, 44, 0, Math.PI * 2); ctx.fill();
          ctx.strokeStyle = 'rgba(255,140,40,0.6)'; ctx.lineWidth = 16; ctx.beginPath(); ctx.moveTo(mx, my); ctx.lineTo(mx + 90, my - 180); ctx.stroke();
        } else {
          const q = (f.t - 0.7) / 0.55;
          ctx.globalCompositeOperation = 'lighter';
          const r = f.r * (0.5 + q);
          const g = ctx.createRadialGradient(x, y - 10, 0, x, y - 10, r);
          g.addColorStop(0, `rgba(255,255,200,${1 - q})`); g.addColorStop(0.4, `rgba(255,120,30,${0.9 * (1 - q)})`); g.addColorStop(1, 'rgba(120,0,0,0)');
          ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y - 10, r, 0, Math.PI * 2); ctx.fill();
        }
        break;
      }
      case 'rain': {
        ctx.strokeStyle = '#e8dcc0'; ctx.lineWidth = 2; ctx.globalAlpha = 1 - k * 0.5;
        for (let i = 0; i < 18; i++) {
          const ax = x + Math.sin(i * 12.9) * f.r * 0.8, ay = y + Math.cos(i * 7.3) * f.r * 0.4;
          const ph = ((f.t * 3 + i * 0.13) % 1);
          const yy = ay - 160 * (1 - ph);
          ctx.beginPath(); ctx.moveTo(ax + 10 * (1 - ph), yy - 22); ctx.lineTo(ax, yy); ctx.stroke();
        }
        ctx.globalAlpha = 0.25; ctx.fillStyle = '#ffffff';
        ctx.beginPath(); ctx.ellipse(x, y, f.r, f.r * 0.45, 0, 0, Math.PI * 2); ctx.fill();
        break;
      }
      case 'heal': case 'buff': {
        ctx.globalCompositeOperation = 'lighter';
        ctx.globalAlpha = 1 - k;
        ctx.strokeStyle = f.color; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.ellipse(x, y, 26 + k * 10, 10 + k * 4, 0, 0, Math.PI * 2); ctx.stroke();
        ctx.fillStyle = f.color;
        const n = f.small ? 6 : 12;
        for (let i = 0; i < n; i++) {
          const a = i * 2.4, rr = 20;
          ctx.fillRect(x + Math.cos(a) * rr * Math.sin(i + k * 3), y - 10 - ((k * 70 + i * 9) % 70), 3, 3);
        }
        break;
      }
      case 'dash': {
        const tx = f.to[0] - cam.x, ty = f.to[1] - cam.y;
        ctx.globalCompositeOperation = 'lighter';
        ctx.strokeStyle = hexA(f.color, 0.8 * (1 - k)); ctx.lineWidth = 18 * (1 - k) + 2; ctx.lineCap = 'round';
        ctx.beginPath(); ctx.moveTo(x, y - 30); ctx.lineTo(tx, ty - 30); ctx.stroke();
        for (let i = 1; i < 4; i++) { ctx.fillStyle = hexA(f.color, 0.35 * (1 - k)); ctx.beginPath(); ctx.ellipse(U.lerp(x, tx, i / 4), U.lerp(y, ty, i / 4) - 30, 12, 24, 0, 0, Math.PI * 2); ctx.fill(); }
        break;
      }
      case 'zap': {
        const tx = f.to[0] - cam.x, ty = f.to[1] - cam.y;
        ctx.globalCompositeOperation = 'lighter';
        for (const [w, a] of [[6, 0.35], [2, 1]]) {
          ctx.strokeStyle = hexA(f.color, a * (1 - k)); ctx.lineWidth = w;
          ctx.beginPath(); ctx.moveTo(x, y);
          for (let i = 1; i < 8; i++) { const q = i / 8; ctx.lineTo(U.lerp(x, tx, q) + Math.sin(i * 13.7 + f.t * 60) * 10, U.lerp(y, ty, q) + Math.cos(i * 7.3 + f.t * 50) * 10); }
          ctx.lineTo(tx, ty); ctx.stroke();
        }
        break;
      }
      case 'breath': {
        // cone of fire from (x,y) toward f.to
        const tx = f.to[0] - cam.x, ty = f.to[1] - cam.y;
        const a = Math.atan2(ty - y, tx - x), L = Math.hypot(tx - x, ty - y) * Math.min(1, k * 2.5);
        ctx.globalCompositeOperation = 'lighter';
        ctx.save(); ctx.translate(x, y); ctx.rotate(a);
        const gr = ctx.createLinearGradient(0, 0, L, 0);
        gr.addColorStop(0, hexA('#fff4c0', 0.95 * (1 - k))); gr.addColorStop(0.35, hexA(f.color, 0.85 * (1 - k))); gr.addColorStop(1, hexA(f.color, 0));
        ctx.fillStyle = gr;
        ctx.beginPath(); ctx.moveTo(0, -3); ctx.lineTo(L, -L * 0.28); ctx.quadraticCurveTo(L * 1.1, 0, L, L * 0.28); ctx.lineTo(0, 3); ctx.closePath(); ctx.fill();
        for (let i = 0; i < 8; i++) { const d = ((f.t * 3 + i * 0.13) % 1) * L; ctx.fillStyle = hexA('#ffe08a', 1 - k); ctx.fillRect(d, Math.sin(i * 7 + f.t * 20) * d * 0.2, 3, 3); }
        ctx.restore();
        break;
      }
      case 'petbolt': {
        const tgt = f.to;
        const tx = tgt.x - cam.x, ty = tgt.y - 26 - cam.y;
        const bx = U.lerp(x, tx, k), by = U.lerp(y, ty, k) - Math.sin(k * Math.PI) * 30;
        ctx.globalCompositeOperation = 'lighter';
        const r = f.big ? 16 : 9;
        const gr = ctx.createRadialGradient(bx, by, 0, bx, by, r);
        gr.addColorStop(0, '#fff'); gr.addColorStop(0.35, hexA(f.color, 0.95)); gr.addColorStop(1, hexA(f.color, 0));
        ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(bx, by, r, 0, Math.PI * 2); ctx.fill();
        break;
      }
      case 'rune': {
        const q = Math.min(1, k * 4) * Math.min(1, (1 - k) * 4);
        ctx.globalCompositeOperation = 'lighter';
        ctx.save(); ctx.translate(x, y); ctx.scale(1, 0.45); ctx.rotate(f.t * 1.6);
        ctx.strokeStyle = hexA(f.color, 0.85 * q); ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.arc(0, 0, 44, 0, Math.PI * 2); ctx.stroke();
        ctx.beginPath(); ctx.arc(0, 0, 30, 0, Math.PI * 2); ctx.stroke();
        ctx.beginPath();
        for (let i = 0; i <= 5; i++) { const a = (i * 2 * Math.PI * 2) / 5; i ? ctx.lineTo(Math.cos(a) * 30, Math.sin(a) * 30) : ctx.moveTo(Math.cos(a) * 30, Math.sin(a) * 30); }
        ctx.stroke();
        for (let i = 0; i < 12; i++) { const a = (i / 12) * Math.PI * 2; ctx.fillStyle = hexA(f.color, q); ctx.fillRect(Math.cos(a) * 44 - 2, Math.sin(a) * 44 - 2, 4, 4); }
        ctx.restore();
        break;
      }
      case 'mote': {
        ctx.globalCompositeOperation = 'lighter';
        let mx = x, my = y - k * 26;
        if (f.to) { mx = U.lerp(f.x, f.to[0], k) - cam.x; my = U.lerp(f.y, f.to[1], k) - cam.y; }
        ctx.fillStyle = hexA(f.color, 1 - k);
        ctx.beginPath(); ctx.arc(mx, my, 2.4 * (1 - k * 0.5), 0, Math.PI * 2); ctx.fill();
        break;
      }
      case 'glint': {
        ctx.globalCompositeOperation = 'lighter';
        const L = 18 * Math.sin(k * Math.PI);
        ctx.strokeStyle = hexA(f.color, 1 - k); ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(x - L, y); ctx.lineTo(x + L, y); ctx.moveTo(x, y - L); ctx.lineTo(x, y + L); ctx.stroke();
        ctx.fillStyle = `rgba(255,255,255,${1 - k})`; ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2); ctx.fill();
        break;
      }
      case 'tpcast': {
        // magic circle opening under the caster while blue motes rise
        const q = Math.min(1, 0.4 + k * 1.2);
        ctx.globalCompositeOperation = 'lighter';
        ctx.save(); ctx.translate(x, y); ctx.scale(1, 0.45);
        ctx.rotate(f.t * 3);
        ctx.strokeStyle = `rgba(120,200,255,${q})`; ctx.lineWidth = 4;
        ctx.beginPath(); ctx.arc(0, 0, 58 * q, 0, Math.PI * 2); ctx.stroke();
        ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(0, 0, 34 * q, 0, Math.PI * 2); ctx.stroke();
        ctx.beginPath();
        for (let i = 0; i <= 6; i++) { const a = (i * 2 * Math.PI * 2) / 6; const px = Math.cos(a) * 34 * q, py = Math.sin(a) * 34 * q; i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); }
        ctx.stroke();
        for (let i = 0; i < 8; i++) { const a = (i / 8) * Math.PI * 2; ctx.fillStyle = `rgba(200,240,255,${q})`; ctx.fillRect(Math.cos(a) * 46 * q - 2, Math.sin(a) * 46 * q - 2, 4, 4); }
        ctx.restore();
        const g = ctx.createRadialGradient(x, y - 30, 0, x, y - 30, 60);
        g.addColorStop(0, `rgba(140,210,255,${0.45 * q})`); g.addColorStop(1, 'rgba(80,160,255,0)');
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y - 30, 60, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#bfe8ff';
        for (let i = 0; i < 14; i++) {
          const a = i * 2.39, r = 14 + (i % 4) * 8;
          const py = y - ((f.t * 90 + i * 17) % 90);
          ctx.globalAlpha = q * (1 - ((f.t * 90 + i * 17) % 90) / 90);
          ctx.fillRect(x + Math.cos(a + f.t * 4) * r, py, 3, 3);
        }
        if (k > 0.6) { // flash just before vanishing
          ctx.globalAlpha = (k - 0.6) / 0.4;
          const bg = ctx.createLinearGradient(x, y - 240, x, y);
          bg.addColorStop(0, 'rgba(160,220,255,0)'); bg.addColorStop(1, 'rgba(210,240,255,0.9)');
          ctx.fillStyle = bg; ctx.fillRect(x - 18, y - 240, 36, 240);
        }
        break;
      }
      case 'tparrive': {
        ctx.globalCompositeOperation = 'lighter';
        const a = 1 - k;
        const bg = ctx.createLinearGradient(x, y - 260, x, y);
        bg.addColorStop(0, 'rgba(160,220,255,0)'); bg.addColorStop(1, `rgba(210,240,255,${0.85 * a})`);
        ctx.fillStyle = bg; ctx.fillRect(x - 22 * a, y - 260, 44 * a, 260);
        ctx.strokeStyle = `rgba(150,215,255,${a})`; ctx.lineWidth = 4 * a + 1;
        ctx.beginPath(); ctx.ellipse(x, y, 20 + k * 90, (20 + k * 90) * 0.4, 0, 0, Math.PI * 2); ctx.stroke();
        ctx.fillStyle = `rgba(220,245,255,${a})`;
        for (let i = 0; i < 12; i++) { const an = (i / 12) * Math.PI * 2; const r = 10 + k * 70; ctx.fillRect(x + Math.cos(an) * r - 2, y - 20 + Math.sin(an) * r * 0.5 - 2, 4, 4); }
        break;
      }
      case 'levelup': case 'teleport': {
        ctx.globalCompositeOperation = 'lighter';
        const col = f.type === 'levelup' ? '255,215,100' : '120,200,255';
        const a = k < 0.2 ? k / 0.2 : 1 - (k - 0.2) / 0.8;
        const g = ctx.createLinearGradient(x, y - 220, x, y);
        g.addColorStop(0, `rgba(${col},0)`); g.addColorStop(1, `rgba(${col},${0.7 * a})`);
        ctx.fillStyle = g; ctx.fillRect(x - 28, y - 220, 56, 220);
        ctx.strokeStyle = `rgba(${col},${a})`; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.ellipse(x, y, 34 + k * 20, 13 + k * 7, 0, 0, Math.PI * 2); ctx.stroke();
        if (f.type === 'levelup') {
          ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = a;
          ctx.font = 'bold 22px Georgia, serif'; ctx.textAlign = 'center';
          ctx.lineWidth = 4; ctx.strokeStyle = '#3a2400'; ctx.strokeText('LEVEL UP!', x, y - 110 - k * 30);
          ctx.fillStyle = '#ffe38a'; ctx.fillText('LEVEL UP!', x, y - 110 - k * 30);
        }
        break;
      }
      case 'castcircle': { // rotating magic circle under the caster with a burst of light
        const a = k < 0.15 ? k / 0.15 : 1 - (k - 0.15) / 0.85, R = 44 + k * 18, col = f.color || '#ffd86a';
        ctx.globalCompositeOperation = 'lighter';
        const col2 = ctx.createLinearGradient(0, y, 0, y - 150);
        col2.addColorStop(0, hexA(col, 0.45 * a)); col2.addColorStop(1, hexA(col, 0));
        ctx.fillStyle = col2; ctx.fillRect(x - 22, y - 150, 44, 150);
        ctx.translate(x, y); ctx.scale(1, 0.42); ctx.rotate(f.t * 2.4);
        ctx.strokeStyle = hexA(col, 0.9 * a); ctx.lineWidth = 3;
        ctx.beginPath(); ctx.arc(0, 0, R, 0, Math.PI * 2); ctx.stroke();
        ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(0, 0, R * 0.72, 0, Math.PI * 2); ctx.stroke();
        ctx.strokeStyle = hexA('#ffffff', 0.7 * a); ctx.lineWidth = 1.5;
        for (let tri = 0; tri < 2; tri++) {
          ctx.beginPath();
          for (let i = 0; i <= 3; i++) { const q = (i / 3) * Math.PI * 2 + tri * Math.PI / 3; ctx[i ? 'lineTo' : 'moveTo'](Math.cos(q) * R * 0.72, Math.sin(q) * R * 0.72); }
          ctx.stroke();
        }
        ctx.fillStyle = hexA(col, a);
        for (let i = 0; i < 12; i++) { const q = (i / 12) * Math.PI * 2; ctx.fillRect(Math.cos(q) * R * 0.86 - 2, Math.sin(q) * R * 0.86 - 2, 4, 4); }
        const g = ctx.createRadialGradient(0, 0, 0, 0, 0, R);
        g.addColorStop(0, hexA(col, 0.35 * a)); g.addColorStop(1, hexA(col, 0));
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(0, 0, R, 0, Math.PI * 2); ctx.fill();
        break;
      }
      case 'shock': { // expanding ground ring
        const q = 1 - Math.pow(1 - k, 2), R = (f.r || 100) * (0.15 + q * 0.95);
        ctx.globalCompositeOperation = 'lighter';
        ctx.translate(x, y); ctx.scale(1, 0.45);
        ctx.strokeStyle = hexA(f.color || '#ffffff', 0.9 * (1 - k)); ctx.lineWidth = 10 * (1 - k) + 1.5;
        ctx.beginPath(); ctx.arc(0, 0, R, 0, Math.PI * 2); ctx.stroke();
        ctx.strokeStyle = hexA('#ffffff', 0.6 * (1 - k)); ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(0, 0, R * 0.92, 0, Math.PI * 2); ctx.stroke();
        break;
      }
      case 'pillar': { // column of light for buffs and heals
        const a = (1 - k) * Math.min(1, k * 6), W = 26 * (1 - k * 0.4), col = f.color || '#ffffff';
        ctx.globalCompositeOperation = 'lighter';
        const g = ctx.createLinearGradient(0, y, 0, y - 200);
        g.addColorStop(0, hexA(col, 0.6 * a)); g.addColorStop(0.7, hexA(col, 0.2 * a)); g.addColorStop(1, hexA(col, 0));
        ctx.fillStyle = g; ctx.fillRect(x - W, y - 200, W * 2, 200);
        ctx.fillStyle = hexA('#ffffff', 0.5 * a); ctx.fillRect(x - W * 0.2, y - 200, W * 0.4, 200);
        break;
      }
      case 'legendfall': { // a spear of gold light drops from the sky onto a 전설 drop, then radiates
        ctx.globalCompositeOperation = 'lighter';
        if (f.t < 0.35) {
          const q = f.t / 0.35, top = y - 900, bot = top + (900 * q);
          const g = ctx.createLinearGradient(0, top, 0, bot);
          g.addColorStop(0, 'rgba(255,220,120,0)'); g.addColorStop(1, 'rgba(255,240,190,0.95)');
          ctx.fillStyle = g; ctx.fillRect(x - 26, top, 52, bot - top);
          ctx.fillStyle = 'rgba(255,255,255,0.9)'; ctx.fillRect(x - 6, top, 12, bot - top);
        } else {
          const q = (f.t - 0.35) / (f.dur - 0.35), a = 1 - q;
          const g = ctx.createRadialGradient(x, y - 30, 0, x, y - 30, 240 * (0.4 + q));
          g.addColorStop(0, `rgba(255,250,220,${0.9 * a})`); g.addColorStop(0.3, `rgba(255,200,80,${0.55 * a})`); g.addColorStop(1, 'rgba(255,150,0,0)');
          ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y - 30, 240 * (0.4 + q), 0, Math.PI * 2); ctx.fill();
          ctx.translate(x, y - 30); ctx.rotate(f.t * 1.2);
          for (let i = 0; i < 16; i++) {
            ctx.rotate(Math.PI / 8);
            ctx.fillStyle = `rgba(255,225,130,${0.28 * a})`;
            const L = 180 + q * 260;
            ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(-10 - q * 10, -L); ctx.lineTo(10 + q * 10, -L); ctx.closePath(); ctx.fill();
          }
        }
        break;
      }
      case 'loot': {
        ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = 1 - k;
        ctx.fillStyle = f.color;
        ctx.fillRect(x - 2, y - 30 - k * 60, 4, 30);
        ctx.beginPath(); ctx.arc(x, y - 30 - k * 60, 6, 0, Math.PI * 2); ctx.fill();
        break;
      }
    }
    ctx.restore();
  }
  function hexA(hex, a) {
    const n = parseInt(hex.slice(1), 16);
    return `rgba(${n >> 16},${(n >> 8) & 255},${n & 255},${Math.max(0, a)})`;
  }
  function drawFloater(ctx, cam, f) {
    const a = f.t < 0.8 ? 1 : 1 - (f.t - 0.8) / 0.3;
    const sc = f.t < 0.1 ? 1 + (0.1 - f.t) * 6 : 1;
    ctx.save();
    ctx.globalAlpha = Math.max(0, a);
    ctx.font = `bold ${Math.round((f.big ? 22 : 15) * sc)}px sans-serif`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
    ctx.lineWidth = 4; ctx.strokeStyle = 'rgba(0,0,0,0.9)';
    ctx.strokeText(f.text, f.x - cam.x, f.y - cam.y);
    ctx.fillStyle = f.color; ctx.fillText(f.text, f.x - cam.x, f.y - cam.y);
    ctx.restore();
  }

  // damage dealt by the player's pet; rewards and aggro go to the player
  function petHit(game, mon, mult, color) {
    const p = game.player;
    if (!mon || mon.dead || !p) return 0;
    const raw = p.stats.atk * mult * D.HERO_DMG * U.rand(0.9, 1.1);
    const crit = Math.random() * 100 < p.stats.crit;
    const dmg = Math.max(1, Math.round(Math.max(raw * 0.2, raw * (crit ? 1.6 : 1) - mon.def_ * 0.5)));
    mon.hp -= dmg; mon.flash = 0.12;
    mon.damagedBy.set('player', (mon.damagedBy.get('player') || 0) + dmg);
    if (!mon.target) mon.aggroOn(p);
    game.floaters.push({ text: String(dmg), x: mon.x + U.rand(-14, 14), y: mon.headY + 4, t: 0, color: crit ? '#ffdb4d' : color, big: false });
    if (mon.hp <= 0) kill(game, mon, p);
    return dmg;
  }

  return { floatText, heroHit, monsterHit, shoot, petHit, updateProjectiles, drawProjectile, castSkill, makeFx, updateFx, drawFx, drawFloater, damageMonster };
})();

// ---------------------------------------------------------------- quests
const Quests = {
  current(p) {
    if (p.s.quest < D.QUESTS.length) return D.QUESTS[p.s.quest];
    return D.DAILY_QUEST;
  },
  isDaily(p) { return p.s.quest >= D.QUESTS.length; },
  progress(p) {
    const q = this.current(p);
    if (this.isDaily(p)) {
      const today = new Date().toDateString();
      if (p.s.daily.day !== today) p.s.daily = { day: today, prog: 0, done: false };
      return { cur: p.s.daily.prog, need: q.n, done: p.s.daily.prog >= q.n, claimed: p.s.daily.done };
    }
    switch (q.type) {
      case 'level': return { cur: p.s.lv, need: q.n, done: p.s.lv >= q.n };
      case 'equipCard': return { cur: p.s.card ? 1 : 0, need: 1, done: !!p.s.card };
      case 'enchant': { const w = p.equipped('weapon'); const en = w ? w.en || 0 : 0; return { cur: Math.min(en, q.n), need: q.n, done: en >= q.n }; }
      case 'talk': return { cur: p.s.qprog, need: 1, done: p.s.qprog >= 1 };
      default: return { cur: Math.min(p.s.qprog, q.n), need: q.n, done: p.s.qprog >= q.n };
    }
  },
  onKill(game, mid) {
    const p = game.player, q = this.current(p);
    if (this.isDaily(p)) { this.progress(p); if (!p.s.daily.done) p.s.daily.prog++; }
    else if (q.type === 'kill' && q.m === mid) p.s.qprog++;
    this.check(game);
  },
  onTalk(game, npcId) {
    const p = game.player, q = this.current(p);
    if (!this.isDaily(p) && q.type === 'talk' && q.npc === npcId) { p.s.qprog = 1; this.check(game); }
  },
  check(game) {
    const p = game.player;
    const pr = this.progress(p);
    const was = this._done;
    this._done = pr.done && !pr.claimed;
    if (this._done && !was) { UI.toast(`퀘스트 완료: ${this.current(p).title}`, '#7ee07e'); U.sfx.success(); }
    UI.refreshQuest();
  },
  claim(game) {
    const p = game.player;
    const pr = this.progress(p);
    if (!pr.done || pr.claimed) return false;
    const q = this.current(p), r = q.reward;
    const wasDaily = this.isDaily(p);
    const parts = [];
    if (r.gold) { p.s.gold += r.gold; parts.push(`아데나 ${U.fmt(r.gold)}`); }
    if (r.dia) { p.s.dia += r.dia; parts.push(`다이아 ${r.dia}`); }
    if (r.items) for (const id in r.items) { p.addItem(id, r.items[id]); parts.push(`${D.ITEMS[id].name} ${r.items[id]}`); }
    UI.chat(`[퀘스트 보상] ${parts.join(', ')}`, 'sys');
    UI.toast('보상 획득: ' + parts.join(', '), '#ffe38a');
    Content.passXp(p, 10);
    if (this.isDaily(p)) p.s.daily.done = true;
    else { p.s.quest++; p.s.qprog = 0; }
    this._done = false;
    U.sfx.coin();
    this.check(game);
    UI.refreshAll();
    if (q.ending) return this.finale(game, q), true;
    if (!wasDaily) {
      const next = this.current(p);
      UI.story(q.by || '', q.end);
      if (!this.isDaily(p)) {
        if (next.ch !== q.ch) UI.story('', [`— ${next.ch} —`]);
        UI.story(next.by || '', next.story);
      }
    }
    return true;
  },
  // 6-8: Eloa's last words, the choice, the ending film, then her answer to that choice
  finale(game, q) {
    const p = game.player;
    UI.story(q.by, q.end, () => UI.choice('인장을 어떻게 하겠는가?', ['dark', 'light'].map((k) => ({ value: k, label: D.ENDINGS[k].pick, sub: `칭호 「${D.ENDINGS[k].title}」 · ${D.setBonusText(D.ENDINGS[k].bonus)}` })), (k) => {
      p.s.ending = k; p.recalc(); game.save();
      UI.ending(k, () => {
        UI.announce(`<b>${UI.esc(p.name)}</b>님이 칭호 <em class="mythic">「${D.ENDINGS[k].title}」</em>을(를) 얻었습니다!`);
        UI.story(q.by, D.ENDINGS[k].after);
        UI.story('', ['— 이클립스: 어웨이크닝 · 완 —', '이클립스 균열과 녹스의 성채는 계속 열려 있습니다. 신화 장비 「일식의 각성자」를 모아 보세요.']);
      });
    }));
  },
  // where to go for the current quest
  destination(p) {
    const q = this.current(p);
    if (q.type === 'talk') { const n = D.NPCS.find((x) => x.id === q.npc); return { npc: q.npc, x: D.TOWN.x + n.dx * D.TILE, y: D.TOWN.y + n.dy * D.TILE }; }
    if (q.type === 'kill') { const s = D.SPAWNS.find((x) => x.m === q.m); return { x: s.x * D.TILE, y: s.y * D.TILE, hunt: true }; }
    return null;
  },
};
