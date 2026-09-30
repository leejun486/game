'use strict';
// Entities: sprite animation, movement, player / monsters / NPCs / other players (bots).
const Sprites = {};
const ANIMS = {
  spellcast: { row: 0, frames: 7, ft: 0.075, hit: 5 },
  thrust: { row: 4, frames: 8, ft: 0.06, hit: 5 },
  walk: { row: 8, frames: 9, ft: 0.075 },
  slash: { row: 12, frames: 6, ft: 0.07, hit: 3 },
  shoot: { row: 16, frames: 13, ft: 0.045, hit: 9 },
  hurt: { row: 20, frames: 6, ft: 0.1 },
};
// direction indices in LPC sheets: 0 up, 1 left, 2 down, 3 right
function dirFromVec(dx, dy) {
  // heading upward shows the back until the path is well over toward sideways (~60° off vertical);
  // a plain 45° split made climbing paths read as a sideways shuffle
  if (Math.abs(dx) > Math.abs(dy) * (dy < 0 ? 1.7 : 1)) return dx < 0 ? 1 : 3;
  return dy < 0 ? 0 : 2;
}
// diagonal facing for sheets that carry diagonal rows (21-40): 0 up-left, 1 down-left, 2 down-right, 3 up-right, -1 none
function diagFromVec(dx, dy) {
  const ax = Math.abs(dx), ay = Math.abs(dy);
  if (ax < 0.45 * ay || ay < 0.45 * ax) return -1;
  return dx < 0 ? (dy < 0 ? 0 : 1) : (dy < 0 ? 3 : 2);
}
// LPC row -> diagonal row when the entity faces diagonally and its sheet has them
function diagRow(ent, row) {
  if (ent.diag == null || ent.diag < 0 || row >= 20) return row;
  const rows = window.SPRITE_ROWS[ent.sheet];
  return rows && rows.length > 21 ? 21 + Math.floor(row / 4) * 4 + ent.diag : row;
}
function animFor(sheet, anim) {
  const rows = window.SPRITE_ROWS[sheet];
  const a = ANIMS[anim];
  if (rows && rows[a.row] < a.frames) return anim === 'shoot' ? 'thrust' : 'slash';
  return anim;
}

class Entity {
  constructor(o) {
    this.x = o.x; this.y = o.y;
    this.sheet = o.sheet; this.scale = o.scale || 1;
    this.name = o.name || ''; this.dir = o.dir ?? 2;
    this.moving = false; this.walkT = 0;
    this.action = null; this.flash = 0; this.dead = false; this.deadT = 0;
    this.hp = this.maxHp = o.hp || 100;
    this.slowT = 0; this.radius = 14;
    this.id = Entity.nextId++;
  }
  get speedMul() { return this.slowT > 0 ? 0.5 : 1; }
  moveToward(tx, ty, speed, dt, stopDist = 4) {
    const dx = tx - this.x, dy = ty - this.y;
    const d = Math.hypot(dx, dy);
    if (d <= stopDist) { this.moving = false; return true; }
    const step = Math.min(d - stopDist + 0.01, speed * dt);
    this.tryMove((dx / d) * step, (dy / d) * step);
    this.dir = dirFromVec(dx, dy); this.diag = diagFromVec(dx, dy);
    this.moving = true;
    return false;
  }
  tryMove(mx, my) {
    const r = this.radius;
    if (!World.blocked(this.x + mx, this.y + my, r)) { this.x += mx; this.y += my; return true; }
    // steer around the obstacle, preferring the side that worked last time
    const len = Math.hypot(mx, my), a = Math.atan2(my, mx);
    const side = this.slideSide || 1;
    for (const da of [0.6, 1.1, 1.5]) {
      for (const sg of [side, -side]) {
        const nx = Math.cos(a + da * sg) * len, ny = Math.sin(a + da * sg) * len;
        if (!World.blocked(this.x + nx, this.y + ny, r)) { this.x += nx; this.y += ny; this.slideSide = sg; return true; }
      }
    }
    return false;
  }
  face(o) { this.dir = dirFromVec(o.x - this.x, o.y - this.y); this.diag = diagFromVec(o.x - this.x, o.y - this.y); }
  // move toward a (possibly moving) goal; follow an A* route when the straight line is blocked
  goTo(tx, ty, speed, dt, stop, maxNodes) {
    const d = Math.hypot(tx - this.x, ty - this.y);
    if (d <= stop) { this.moving = false; this.route = null; return true; }
    const now = this.clock || 0;
    const stale = !this.routeGoal || Math.hypot(this.routeGoal.x - tx, this.routeGoal.y - ty) > 80 || now - this.routeT > 1.2;
    if (Nav.ready && (this.forceRoute || (stale && now - (this.routeCheck || 0) > (this.navPriority ? 0.25 : 0.5)))) {
      this.routeCheck = now;
      const direct = !this.forceRoute && (d < 80 || Nav.lineClear(this.x, this.y, tx, ty, Math.min(14, this.radius)));
      if (direct) { this.route = null; this.routeFailed = false; }
      else {
        const r = this.navPriority ? Nav.find(this.x, this.y, tx, ty) : Nav.findBudget(this.x, this.y, tx, ty, maxNodes || 20000);
        if (r !== undefined) { this.route = r; this.routeFailed = !r; }
      }
      if (direct || this.route !== undefined) { this.routeGoal = { x: tx, y: ty }; this.routeT = now; this.forceRoute = false; }
    }
    if (this.route && this.route.length) {
      const n = this.route[0];
      if (this.moveToward(n.x, n.y, speed, dt, 6)) this.route.shift();
      this.moving = true;
      return false;
    }
    return this.moveToward(tx, ty, speed, dt, stop);
  }
  // accumulate seconds spent pushing against something; forces a re-route after ~0.45s
  trackStuck(dt, speed) {
    const moved = Math.hypot(this.x - (this.lastX ?? this.x), this.y - (this.lastY ?? this.y));
    this.lastX = this.x; this.lastY = this.y;
    if (!this.moving || this.action) { this.stuckT = Math.max(0, (this.stuckT || 0) - dt * 2); return this.stuckT; }
    if (moved < speed * dt * 0.3) this.stuckT = (this.stuckT || 0) + dt; else this.stuckT = Math.max(0, (this.stuckT || 0) - dt);
    if (this.stuckT > 0.45 && !this.rerouted) { this.forceRoute = true; this.rerouted = true; }
    if (this.stuckT === 0) this.rerouted = false;
    return this.stuckT;
  }
  // start an action animation; onHit fires at the anim's hit frame
  act(anim, dur, onHit, stretch = false) {
    anim = animFor(this.sheet, anim);
    const a = ANIMS[anim];
    const full = a.frames * a.ft;
    this.action = { anim, t: 0, dur: stretch ? dur : Math.min(full, dur), hitAt: (a.hit || a.frames - 1) / a.frames, onHit, fired: false };
    this.moving = false;
  }
  updateAction(dt) {
    const ac = this.action;
    if (!ac) return;
    ac.t += dt;
    if (!ac.fired && ac.t >= ac.dur * ac.hitAt) { ac.fired = true; ac.onHit && ac.onHit(); }
    if (ac.t >= ac.dur) this.action = null;
  }
  frame() {
    if (this.dead) {
      const a = ANIMS.hurt;
      return { row: a.row, col: Math.min(a.frames - 1, Math.floor(this.deadT / a.ft)) };
    }
    if (this.action && this.action.seq) {
      const ac = this.action;
      return { row: ANIMS[ac.anim].row + this.dir, col: ac.seq[Math.min(ac.seq.length - 1, Math.floor(ac.t / ac.ft))] };
    }
    if (this.action) {
      const a = ANIMS[this.action.anim];
      const col = Math.min(a.frames - 1, Math.floor((this.action.t / this.action.dur) * a.frames));
      return { row: a.row + this.dir, col };
    }
    const w = ANIMS.walk;
    if (this.moving) return { row: w.row + this.dir, col: walkCol(this.sheet, this.walkT / w.ft) };
    return { row: w.row + this.dir, col: 0 };
  }
  update(dt) {
    this.clock = (this.clock || 0) + dt;
    if (this.moving) this.walkT += dt * this.speedMul;
    if (this.flash > 0) this.flash -= dt;
    if (this.fadeIn > 0) this.fadeIn -= dt;
    if (this.slowT > 0) this.slowT -= dt;
    if (this.dead) this.deadT += dt;
    this.updateAction(dt);
  }
  draw(ctx, cam) {
    const img = Sprites[this.sheet];
    if (!img) return;
    const { row: row0, col } = this.frame();
    const row = diagRow(this, row0);
    const s = this.scale, F = window.SPRITE_FRAME[this.sheet] || 64;
    const size = F * s;
    const sx = Math.round(this.x - cam.x - size / 2), sy = Math.round(this.y - cam.y - size + 8 * s);
    let alpha = this.dead ? Math.max(0, 1 - Math.max(0, this.deadT - 0.8) / 1.2) : 1;
    if (this.fadeIn > 0) alpha *= 1 - this.fadeIn / 0.45;
    if (alpha <= 0) return;
    ctx.globalAlpha = alpha;
    if (this.aura) this.aura(ctx, this.x - cam.x, this.y - cam.y);
    ctx.drawImage(img, col * F, row * F, F, F, sx, sy, size, size);
    if (this.flash > 0) {
      ctx.globalCompositeOperation = 'lighter';
      ctx.globalAlpha = alpha * Math.min(1, this.flash * 5) * 0.6;
      ctx.drawImage(img, col * F, row * F, F, F, sx, sy, size, size);
      ctx.globalCompositeOperation = 'source-over';
    }
    if (this.slowT > 0) {
      ctx.globalAlpha = 0.35; ctx.fillStyle = '#7fd4ff';
      ctx.beginPath(); ctx.ellipse(this.x - cam.x, this.y - cam.y, 18 * s, 7 * s, 0, 0, Math.PI * 2); ctx.fill();
    }
    ctx.globalAlpha = 1;
  }
  get headY() { return this.y - 58 * this.scale; }
}
Entity.nextId = 1;

function drawLabel(ctx, text, x, y, color, font = '12px sans-serif') {
  ctx.font = font; ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
  ctx.lineWidth = 3; ctx.strokeStyle = 'rgba(0,0,0,0.85)'; ctx.strokeText(text, x, y);
  ctx.fillStyle = color; ctx.fillText(text, x, y);
}
function drawHpBar(ctx, x, y, w, pct, col = '#d63a30') {
  ctx.fillStyle = 'rgba(0,0,0,0.75)'; ctx.fillRect(x - w / 2 - 1, y - 1, w + 2, 6);
  ctx.fillStyle = col; ctx.fillRect(x - w / 2, y, w * U.clamp(pct, 0, 1), 4);
}

// ---------------------------------------------------------------- Monster
class Monster extends Entity {
  constructor(def, spawn) {
    const p = Monster.spawnPoint(spawn);
    super({ x: p.x, y: p.y, sheet: def.sheet, scale: def.scale, name: def.name, hp: def.hp });
    this.def = def; this.spawn = spawn; this.home = { x: p.x, y: p.y };
    this.atk = def.atk; this.def_ = def.def; this.lv = def.lv;
    this.target = null; this.atkCd = U.rand(0, 1); this.wanderT = U.rand(1, 4); this.wanderTo = null;
    this.radius = 14 * def.scale; this.team = 'mob';
    this.damagedBy = new Map();
  }
  static spawnPoint(s) {
    for (let i = 0; i < 30; i++) {
      const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * s.r * D.TILE;
      const x = s.x * D.TILE + Math.cos(a) * r, y = s.y * D.TILE + Math.sin(a) * r;
      if (!World.blocked(x, y, 20)) return { x, y };
    }
    return World.findFree(s.x * D.TILE, s.y * D.TILE, 20);
  }
  aura(ctx, x, y) {
    if (!this.def.boss) return;
    const t = performance.now() / 1000;
    ctx.save(); ctx.globalAlpha *= 0.5 + Math.sin(t * 3) * 0.2;
    const g = ctx.createRadialGradient(x, y - 40 * this.scale, 5, x, y - 40 * this.scale, 60 * this.scale);
    g.addColorStop(0, 'rgba(255,40,40,0.55)'); g.addColorStop(1, 'rgba(255,0,0,0)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y - 40 * this.scale, 60 * this.scale, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }
  draw(ctx, cam) { super.draw(ctx, cam); if (!this.dead && (this.frozenT > 0 || this.chillT > 0)) VFX.status(ctx, cam, this); }
  aggroOn(e) { if (!this.dead && e && !e.dead) this.target = e; }
  update(dt, game) {
    super.update(dt);
    if (this.dead) return;
    if (this.chillT > 0) this.chillT -= dt;
    if (this.frozenT > 0) this.frozenT -= dt;
    if (this.stunT > 0) { this.stunT -= dt; this.moving = false; this.action = null; return; }
    this.atkCd -= dt;
    const leash = !this.inDungeon && Math.hypot(this.x - this.home.x, this.y - this.home.y) > 950;
    if (this.target && (this.target.dead || leash || this.target.inTown || U.dist(this, this.target) > 900)) {
      this.target = null; this.returning = leash;
    }
    if (!this.target && this.inDungeon && game.player && !game.player.dead) this.target = game.player;
    if (!this.target && this.def.aggro && !this.returning) {
      let best = null, bd = this.def.boss ? 330 : 240;
      for (const e of game.fighters()) {
        if (e.dead || e.inTown) continue;
        const d = U.dist(this, e);
        if (d < bd) { bd = d; best = e; }
      }
      this.target = best;
    }
    if (this.action) return;
    if (this.returning) {
      const sp = this.def.spd * 1.8;
      if (this.goTo(this.home.x, this.home.y, sp, dt, 10, 20000)) { this.returning = false; this.hp = this.maxHp; }
      else if (this.trackStuck(dt, sp) > 3) { this.x = this.home.x; this.y = this.home.y; this.returning = false; this.hp = this.maxHp; this.stuckT = 0; }
      return;
    }
    if (this.target && (this.def.skill === 'frostStomp' || this.def.skill === 'fireStomp') && this.bossSkill(dt, game)) return;
    if (this.target) {
      const d = U.dist(this, this.target);
      const reach = this.def.range + (this.target.radius || 14);
      if (d > reach) {
        const sp = this.def.spd * this.speedMul;
        this.goTo(this.target.x, this.target.y, sp, dt, reach - 6);
        // can't reach the target (wall, water): give up and walk home
        if (this.trackStuck(dt, sp) > 2.5 || (this.routeFailed && d > 200)) {
          if (!this.inDungeon) { this.target = null; this.returning = true; }
          this.stuckT = 0; this.routeFailed = false;
        }
      } else {
        this.moving = false; this.face(this.target);
        if (this.atkCd <= 0) {
          this.atkCd = this.def.boss ? 1.6 : 1.5;
          const tgt = this.target;
          const heavy = this.def.boss && Math.random() < 0.25;
          this.act(heavy ? 'thrust' : 'slash', 0.5, () => Combat.monsterHit(this, tgt, heavy));
        }
      }
      return;
    }
    // wander
    this.wanderT -= dt;
    if (this.wanderTo) {
      if (this.moveToward(this.wanderTo.x, this.wanderTo.y, this.def.spd * 0.5, dt, 6) || this.trackStuck(dt, this.def.spd * 0.5) > 1) { this.wanderTo = null; this.stuckT = 0; }
    } else if (this.wanderT <= 0) {
      this.wanderT = U.rand(2, 6);
      const a = Math.random() * Math.PI * 2, r = U.rand(40, 160);
      const nx = this.x + Math.cos(a) * r, ny = this.y + Math.sin(a) * r;
      if (Math.hypot(nx - this.home.x, ny - this.home.y) < this.spawn.r * D.TILE + 50 && Nav.lineClear(this.x, this.y, nx, ny, 12)) this.wanderTo = { x: nx, y: ny };
    }
  }
  // 서리 거인: every few seconds a telegraphed frost stomp (big ring, then damage + slow);
  // below half health it also calls frost wolves once
  bossSkill(dt, game) {
    this.skillCd = (this.skillCd ?? 4) - dt;
    if (!this.summoned && this.hp < this.maxHp * 0.5) {
      this.summoned = true;
      const fire = this.def.skill === 'fireStomp';
      UI.announce(`<em>${this.name}</em>이(가) ${fire ? '지옥 늑대' : '서리 늑대'}를 불러냅니다!`);
      for (let i = 0; i < 4; i++) {
        const a = (i / 4) * Math.PI * 2, m = new Monster(D.MONSTERS[fire ? 'hell_wolf' : 'frost_wolf'], { x: this.x / D.TILE + Math.cos(a) * 2.5, y: this.y / D.TILE + Math.sin(a) * 2, r: 1, noRespawn: true });
        m.summon = true; m.target = this.target; m.home = { x: this.home.x, y: this.home.y };
        game.monsters.push(m); game.fx.push(Combat.makeFx('teleport', m.x, m.y));
      }
    }
    if (this.skillCd > 0 || U.dist(this, this.target) > 420) return false;
    this.skillCd = U.rand(7, 9);
    const R = 190, x = this.x, y = this.y;
    game.fx.push(Combat.makeFx('stompwarn', x, y, { r: R, dur: 1.3 }));
    this.act('thrust', 1.3, () => {
      const near = game.player && Math.hypot(game.player.x - x, game.player.y - y) < 700;
      if (near) { game.shake = 12; U.sfx.boom(); }
      const fire = this.def.skill === 'fireStomp';
      if (fire) { VFX.fireBurst(x, y, R, 2); VFX.debris(x, y, 16); } else VFX.iceBurst(x, y, R, 1.8);
      game.fx.push(Combat.makeFx('explode', x, y, { color: fire ? '#ff6a1a' : '#9fe0ff', r: R }));
      for (const e of game.fighters()) {
        if (e.dead || Math.hypot(e.x - x, e.y - y) > R + (e.radius || 14)) continue;
        Combat.monsterHit(this, e, true, true);
        if (!fire) e.slowT = 3;
      }
    }, true);
    this.moving = false;
    return true;
  }
  drawOverlay(ctx, cam, isTarget) {
    if (this.dead) return;
    const x = this.x - cam.x, y = this.headY - cam.y;
    if (this.stunT > 0) { // dizzy stars
      const t = performance.now() / 1000;
      for (let i = 0; i < 3; i++) { const a = t * 5 + (i / 3) * Math.PI * 2; drawLabel(ctx, '★', x + Math.cos(a) * 14, y - 14 + Math.sin(a) * 4, '#ffe28a', '11px sans-serif'); }
    }
    const col = this.def.boss ? '#ff6b5e' : this.def.aggro ? '#ffb3a8' : '#f0f0f0';
    drawLabel(ctx, (this.def.boss ? '[보스] ' : '') + this.name, x, y - 4, col, this.def.boss ? 'bold 13px sans-serif' : '12px sans-serif');
    if (isTarget || this.hp < this.maxHp) drawHpBar(ctx, x, y, this.def.boss ? 90 : 44, this.hp / this.maxHp);
    if (isTarget) {
      ctx.strokeStyle = 'rgba(255,80,60,0.9)'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.ellipse(this.x - cam.x, this.y - cam.y, 22 * this.scale, 9 * this.scale, 0, 0, Math.PI * 2); ctx.stroke();
    }
  }
}

// ---------------------------------------------------------------- NPC
class NPC extends Entity {
  constructor(def) {
    super({ x: D.TOWN.x + def.dx * D.TILE, y: D.TOWN.y + def.dy * D.TILE, sheet: def.sheet, name: def.name, dir: def.dir });
    this.def = def; this.team = 'npc'; this.radius = 16; this.idleT = U.rand(3, 8);
  }
  update(dt) {
    super.update(dt);
    this.idleT -= dt;
    if (this.idleT <= 0 && !this.action) { this.idleT = U.rand(5, 12); this.act('spellcast', 0.6); }
    if (!this.action && this.lookAt && U.dist(this, this.lookAt) < 200) this.face(this.lookAt);
    else if (!this.action) this.dir = this.def.dir;
  }
  drawOverlay(ctx, cam) {
    const x = this.x - cam.x, y = this.headY - cam.y;
    if (this.def.title) drawLabel(ctx, this.def.name.split(' ').pop(), x, y - 4, '#ffffff', '12px sans-serif');
    if (this.def.title) drawLabel(ctx, this.def.title, x, y - 18, '#f7d27a', 'bold 12px sans-serif');
    else drawLabel(ctx, this.def.name, x, y - 4, '#bfe3ff');
    if (this.def.shop || this.def.teleport || this.def.transcend) {
      // floating marker like the merchant bubbles in the reference
      const t = performance.now() / 1000;
      const by = y - 44 + Math.sin(t * 2 + this.id) * 3;
      ctx.fillStyle = 'rgba(20,24,30,0.85)'; ctx.strokeStyle = 'rgba(233,215,168,0.7)'; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(x, by, 13, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      const ic = UI.iconImg(this.def.shop ? 'gold' : this.def.teleport ? 'teleport' : 'transcend');
      if (ic.complete) ctx.drawImage(ic, x - 9, by - 9, 18, 18);
    }
  }
}

// ---------------------------------------------------------------- base for player & bots
class Hero extends Entity {
  constructor(o) {
    super(o);
    this.cls = o.cls; this.team = 'hero';
    this.atkCd = 0; this.target = null; this.inTown = false;
  }
  get classDef() { return D.CLASSES[this.cls]; }
  basicAttack(target, game) {
    if (this.mounted) Mounts.dismount(this, game);
    const c = this.classDef;
    const st = this.stats;
    const spd = this.cls === 'mage' ? st.castSpd : st.atkSpd;
    const delay = c.atkDelay / (1 + spd / 100);
    this.atkCd = delay;
    this.face(target);
    this.act(c.attack, delay * 0.92, () => {
      if (c.projectile) Combat.shoot(this, target, { kind: c.projectile, mult: 1 });
      else Combat.heroHit(this, target, 1);
      // class passives that make plain attacks work on packs:
      // knights cleave the enemies around the target, elves loose extra arrows at nearby enemies
      if (c.cleave) {
        let n = 0;
        for (const m of game.monsters) {
          if (n >= c.cleave.n || m === target || m.dead || Math.hypot(m.x - target.x, m.y - target.y) > c.cleave.r + m.radius) continue;
          Combat.damageMonster(game, this, m, c.cleave.mult); n++;
        }
        if (n && this === game.player) game.fx.push(Combat.makeFx('whirl', target.x, target.y, { r: c.cleave.r, dur: 0.3 }));
      }
      if (c.volley) {
        let n = 0;
        for (const m of game.monsters) {
          if (n >= c.volley.n || m === target || m.dead || Math.hypot(m.x - target.x, m.y - target.y) > c.volley.r) continue;
          Combat.shoot(this, m, { kind: c.projectile, mult: c.volley.mult }); n++;
        }
      }
    });
    // only your own swings make noise; other players fight silently
    if (this !== game.player) return;
    if (c.attack === 'slash') U.sfx.swing();
    else if (c.attack === 'shoot') setTimeout(() => U.sfx.bow(), delay * 400);
  }
}

// ---------------------------------------------------------------- other players
class Bot extends Hero {
  constructor(i) {
    const look = U.pick(D.BOT_SHEETS);
    const p = World.findFree(D.TOWN.x + U.rand(-500, 500), D.TOWN.y + U.rand(-500, 500), 16);
    super({ x: p.x, y: p.y, sheet: look.sheet, cls: look.cls, name: D.BOT_NAMES[i % D.BOT_NAMES.length] });
    this.guild = U.pick(D.GUILDS);
    this.lv = U.randi(3, 45);
    const c = this.classDef;
    this.maxHp = this.hp = Math.round(c.base.hp + c.grow.hp * this.lv);
    this.stats = { atk: c.base.atk + c.grow.atk * this.lv + this.lv, atkSpd: U.randi(0, 40), castSpd: U.randi(0, 40), crit: 5, def: 10 };
    this.state = 'town'; this.stateT = U.rand(5, 50); this.wanderTo = null; this.idleT = 0;
    this.chatT = U.rand(10, 80);
    this.mountId = Math.random() < 0.5 ? U.pick(Mounts.LIST).id : null; this.rideFace = 1;
    this.ignore = {};
  }
  pickHuntSpawn() {
    const ok = D.SPAWNS.filter((s) => !D.MONSTERS[s.m].boss && D.MONSTERS[s.m].lv <= this.lv + 3);
    return U.pick(ok.length ? ok : D.SPAWNS.slice(0, 2));
  }
  // cast the teleport spell, then vanish and reappear at the destination
  teleport(x, y, game) {
    if (this.teleporting) return;
    this.teleporting = true; this.target = null; this.wanderTo = null;
    game.fx.push(Combat.makeFx('tpcast', this.x, this.y, { follow: this }));
    this.act('spellcast', 0.9, () => {
      game.fx.push(Combat.makeFx('teleport', this.x, this.y));
      const p = World.findFree(x, y, 16);
      this.x = p.x; this.y = p.y; this.target = null; this.wanderTo = null;
      this.teleporting = false; this.fadeIn = 0.45;
      game.fx.push(Combat.makeFx('tparrive', this.x, this.y));
    }, true);
  }
  update(dt, game) {
    super.update(dt);
    this.inTown = World.zoneAt(this.x, this.y).safe;
    this.atkCd -= dt; this.stateT -= dt; this.chatT -= dt;
    if (this.hp < this.maxHp) this.hp = Math.min(this.maxHp, this.hp + this.maxHp * 0.04 * dt);
    if (this.hp <= this.maxHp * 0.15) { this.hp = this.maxHp; this.state = 'town'; this.stateT = U.rand(20, 40); this.teleport(D.TOWN.x + U.rand(-300, 300), D.TOWN.y + U.rand(-300, 300), game); return; }
    if (this.stateT <= 0) {
      if (this.state === 'town') {
        this.state = 'hunt'; this.stateT = U.rand(60, 180);
        const s = this.pickHuntSpawn(); this.huntSpawn = s;
        this.teleport(s.x * D.TILE + U.rand(-100, 100), s.y * D.TILE + U.rand(-100, 100), game);
      } else {
        this.state = 'town'; this.stateT = U.rand(20, 60);
        this.teleport(D.TOWN.x + U.rand(-400, 400), D.TOWN.y + U.rand(-400, 400), game);
      }
    }
    Mounts.tick(this, dt, game);
    if (this.action) return;
    // ride while strolling around town, walk while hunting
    if (this.mountId) {
      if (this.state === 'town' && this.wanderTo && !this.mounted) Mounts.mount(this, game, true);
      if (this.state === 'hunt' && this.mounted && this.target) Mounts.dismount(this, game);
    }
    if (this.state === 'hunt') {
      if (!this.target || this.target.dead) {
        this.target = null;
        let bd = 520;
        for (const m of game.monsters) {
          if (m.dead || m.def.boss && this.lv < m.lv || this.ignore[m.id] > game.time) continue;
          const d = U.dist(this, m);
          if (d < bd) { bd = d; this.target = m; }
        }
      }
      if (this.target) {
        const range = this.classDef.range + this.target.radius;
        if (U.dist(this, this.target) > range) {
          this.goTo(this.target.x, this.target.y, 150, dt, range - 8);
          if (this.trackStuck(dt, 150) > 2 || this.routeFailed) { this.ignore[this.target.id] = game.time + 10; this.target = null; this.stuckT = 0; this.routeFailed = false; }
        }
        else if (this.atkCd <= 0) { this.moving = false; this.basicAttack(this.target, game); }
        else this.moving = false;
        return;
      }
    }
    // wander / idle
    if (this.wanderTo) {
      if (this.goTo(this.wanderTo.x, this.wanderTo.y, 120 * Mounts.speedMul(this), dt, 8, 4000)) { this.wanderTo = null; this.idleT = U.rand(1, 6); }
      else if (this.trackStuck(dt, 120) > 1.5 || this.routeFailed) { this.wanderTo = null; this.idleT = 0.5; this.stuckT = 0; this.routeFailed = false; }
    } else {
      this.idleT -= dt;
      if (this.idleT <= 0) {
        const cx = this.state === 'town' ? D.TOWN.x : this.x, cy = this.state === 'town' ? D.TOWN.y : this.y;
        const rad = this.state === 'town' ? 700 : 300;
        const p = { x: cx + U.rand(-rad, rad), y: cy + U.rand(-rad, rad) };
        if (!World.blocked(p.x, p.y, 16)) this.wanderTo = p; else this.idleT = 0.5;
      }
    }
  }
  draw(ctx, cam) {
    if (!this.mounted || this.dead) return super.draw(ctx, cam);
    const img = Sprites[this.sheet], row = this.rideVert < 0 ? 8 : this.rideVert > 0 ? 10 : this.rideFace > 0 ? 11 : 9;
    if (this.fadeIn > 0) ctx.globalAlpha = 1 - this.fadeIn / 0.45;
    Mounts.drawEntity(ctx, cam, this, (g, fx, fy) => { g.imageSmoothingEnabled = false; if (img) { const F = window.SPRITE_FRAME[this.sheet] || 64; g.drawImage(img, 0, row * F, F, F, fx - F / 2, fy - F + 8, F, F); } });
    ctx.globalAlpha = 1;
  }
  get headY() { return this.mounted ? this.y - (this.rideTop || 90) : this.y - 58 * this.scale; }
  drawOverlay(ctx, cam) {
    const x = this.x - cam.x, y = this.headY - cam.y;
    drawLabel(ctx, this.name, x, y - 4, '#8fc1ff');
    if (this.guild) drawLabel(ctx, this.guild, x, y - 18, '#ffe08a', '11px sans-serif');
    if (this.bubble && this.bubble.t > 0) drawBubble(ctx, this.bubble.text, x, y - (this.guild ? 34 : 20));
  }
}
function drawBubble(ctx, text, x, y) {
  ctx.font = '12px sans-serif';
  const w = Math.min(220, ctx.measureText(text).width + 16);
  ctx.fillStyle = 'rgba(255,255,255,0.92)';
  ctx.beginPath(); ctx.roundRect ? ctx.roundRect(x - w / 2, y - 24, w, 20, 6) : ctx.rect(x - w / 2, y - 24, w, 20); ctx.fill();
  ctx.beginPath(); ctx.moveTo(x - 5, y - 4); ctx.lineTo(x + 5, y - 4); ctx.lineTo(x, y + 2); ctx.fill();
  ctx.fillStyle = '#222'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(text, x, y - 14, 210);
}
