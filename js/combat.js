'use strict';
// Combat resolution, projectiles, visual effects, loot and quest progress.
const Combat = (() => {
  function floatText(game, e, text, color, big = false) {
    game.floaters.push({ text, x: e.x + U.rand(-10, 10), y: e.headY - 6, t: 0, color, big });
  }

  function damageMonster(game, hero, mon, mult, opts = {}) {
    if (!mon || mon.dead) return 0;
    const st = hero.stats;
    let raw = st.atk * mult * U.rand(0.9, 1.1);
    const crit = Math.random() * 100 < (st.crit || 5) + (opts.critBonus || 0);
    if (crit) raw *= 1.6;
    const dmg = Math.max(1, Math.round(Math.max(raw * 0.15, raw - mon.def_ * 0.6)));
    mon.hp -= dmg; mon.flash = 0.15;
    mon.aggroOn(hero);
    if (hero === game.player) {
      mon.damagedBy.set('player', (mon.damagedBy.get('player') || 0) + dmg);
      floatText(game, mon, String(dmg), crit ? '#ffdb4d' : '#ffffff', crit);
      crit ? U.sfx.crit() : U.sfx.hit();
      if (crit) game.shake = Math.max(game.shake, 4);
    }
    if (opts.slow) mon.slowT = opts.slow;
    game.fx.push(makeFx('spark', mon.x, mon.y - 28 * mon.scale, { color: crit ? '#ffdb4d' : '#fff' }));
    if (mon.hp <= 0) kill(game, mon, hero);
    return dmg;
  }
  function heroHit(hero, target, mult) {
    const game = Game;
    if (!target || target.dead) return;
    if (U.dist(hero, target) > hero.classDef.range + target.radius + 40) return;
    game.fx.push(makeFx('slash', target.x, target.y - 26, { dir: hero.dir }));
    damageMonster(game, hero, target, mult);
  }
  function monsterHit(mon, target, heavy) {
    const game = Game;
    if (!target || target.dead || mon.dead) return;
    if (U.dist(mon, target) > mon.def.range + target.radius + 30) return;
    if (target === game.player) {
      const p = target, st = p.stats;
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
    const byPlayer = killer === game.player || mon.damagedBy.has('player');
    if (!byPlayer) return;
    const p = game.player;
    const d = mon.def;
    // level-difference penalty so low monsters give less
    const diff = p.s.lv - d.lv;
    const expMul = diff > 8 ? Math.max(0.1, 1 - (diff - 8) * 0.1) : 1;
    const exp = Math.round(d.exp * expMul);
    p.gainExp(exp, game);
    floatText(game, mon, `EXP +${U.fmt(exp)}`, '#7cf29a');
    const gold = U.randi(d.gold[0], d.gold[1]);
    p.s.gold += gold;
    p.s.kills++;
    setTimeout(() => { floatText(game, mon, `+${U.fmt(gold)} 아데나`, '#ffd76a'); U.sfx.coin(); }, 180);
    // drops (auto-loot)
    // items drop on the ground and fly to the player (see Game.updateDrops)
    const table = [...D.DROPS.common, ...(D.DROPS[d.id] || [])];
    for (const [id, ch] of table) {
      if (Math.random() < ch) {
        const n = D.ITEMS[id].kind === 'potion' ? U.randi(1, 3) : 1;
        const a = Math.random() * Math.PI * 2, r = U.rand(20, 60);
        game.drops.push({ id, n, x: mon.x + Math.cos(a) * r, y: mon.y + Math.sin(a) * r * 0.6, sx: mon.x, sy: mon.y, t: 0 });
      }
    }
    if (d.boss && d.id !== 'dungeon') p.s.bossKills++;
    Content.passXp(p, d.boss ? 30 : 1);
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
      opts: o.opts || {}, onHit: o.onHit, t: 0, pierce: o.pierce,
    };
    if (o.pierce) {
      const a = Math.atan2(target.y - hero.y, target.x - hero.x);
      pr.vx = Math.cos(a); pr.vy = Math.sin(a); pr.hit = new Set(); pr.life = 0.7;
    }
    game.projectiles.push(pr);
    if (o.kind === 'bolt' && hero === game.player) U.sfx.magic();
  }
  function updateProjectiles(game, dt) {
    const out = [];
    for (const p of game.projectiles) {
      p.t += dt;
      if (p.pierce) {
        p.x += p.vx * p.speed * dt; p.y += p.vy * p.speed * dt; p.life -= dt;
        for (const m of game.monsters) {
          if (m.dead || p.hit.has(m)) continue;
          if (Math.hypot(m.x - p.x, m.y - 30 - p.y) < 40 * m.scale) { p.hit.add(m); damageMonster(game, p.owner, m, p.mult, { critBonus: 20 }); }
        }
        if (p.life > 0) out.push(p);
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
    const dur = 0.55 / (1 + (anim === 'spellcast' ? p.stats.castSpd : p.stats.atkSpd) / 200);
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
      heal: 1.0, buff: 0.9, levelup: 1.8, teleport: 0.8, burst: 0.3, loot: 0.9 }[type] || 0.5;
    return Object.assign({ type, x, y, t: 0, dur }, o);
  }
  function updateFx(game, dt) {
    for (const f of game.fx) {
      f.t += dt;
      if (f.follow) { f.x = f.follow.x; f.y = f.follow.y; }
      if (f.type === 'meteor' && !f.landed && f.t >= 0.7) { f.landed = true; f.onLand && f.onLand(); }
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

  return { floatText, heroHit, monsterHit, shoot, updateProjectiles, drawProjectile, castSkill, makeFx, updateFx, drawFx, drawFloater, damageMonster };
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
    return true;
  },
  // where to go for the current quest
  destination(p) {
    const q = this.current(p);
    if (q.type === 'talk') { const n = D.NPCS.find((x) => x.id === q.npc); return { npc: q.npc, x: D.TOWN.x + n.dx * D.TILE, y: D.TOWN.y + n.dy * D.TILE }; }
    if (q.type === 'kill') { const s = D.SPAWNS.find((x) => x.m === q.m); return { x: s.x * D.TILE, y: s.y * D.TILE, hunt: true }; }
    return null;
  },
};
