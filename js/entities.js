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
  if (Math.abs(dx) > Math.abs(dy)) return dx < 0 ? 1 : 3;
  return dy < 0 ? 0 : 2;
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
    this.dir = dirFromVec(dx, dy);
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
  face(o) { this.dir = dirFromVec(o.x - this.x, o.y - this.y); }
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
    if (this.moving) return { row: w.row + this.dir, col: 1 + (Math.floor(this.walkT / w.ft) % 8) };
    return { row: w.row + this.dir, col: 0 };
  }
  update(dt) {
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
    const { row, col } = this.frame();
    const s = this.scale;
    const size = 64 * s;
    const sx = Math.round(this.x - cam.x - size / 2), sy = Math.round(this.y - cam.y - size + 8 * s);
    let alpha = this.dead ? Math.max(0, 1 - Math.max(0, this.deadT - 0.8) / 1.2) : 1;
    if (this.fadeIn > 0) alpha *= 1 - this.fadeIn / 0.45;
    if (alpha <= 0) return;
    ctx.globalAlpha = alpha;
    if (this.aura) this.aura(ctx, this.x - cam.x, this.y - cam.y);
    ctx.drawImage(img, col * 64, row * 64, 64, 64, sx, sy, size, size);
    if (this.flash > 0) {
      ctx.globalCompositeOperation = 'lighter';
      ctx.globalAlpha = alpha * Math.min(1, this.flash * 5) * 0.6;
      ctx.drawImage(img, col * 64, row * 64, 64, 64, sx, sy, size, size);
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
  aggroOn(e) { if (!this.dead && e && !e.dead) this.target = e; }
  update(dt, game) {
    super.update(dt);
    if (this.dead) return;
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
      if (this.moveToward(this.home.x, this.home.y, this.def.spd * 1.8, dt, 10)) { this.returning = false; this.hp = this.maxHp; }
      return;
    }
    if (this.target) {
      const d = U.dist(this, this.target);
      const reach = this.def.range + (this.target.radius || 14);
      if (d > reach) this.moveToward(this.target.x, this.target.y, this.def.spd * this.speedMul, dt, reach - 6);
      else {
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
      if (this.moveToward(this.wanderTo.x, this.wanderTo.y, this.def.spd * 0.5, dt, 6)) this.wanderTo = null;
    } else if (this.wanderT <= 0) {
      this.wanderT = U.rand(2, 6);
      const a = Math.random() * Math.PI * 2, r = U.rand(40, 160);
      const nx = this.x + Math.cos(a) * r, ny = this.y + Math.sin(a) * r;
      if (Math.hypot(nx - this.home.x, ny - this.home.y) < this.spawn.r * D.TILE + 50) this.wanderTo = { x: nx, y: ny };
    }
  }
  drawOverlay(ctx, cam, isTarget) {
    if (this.dead) return;
    const x = this.x - cam.x, y = this.headY - cam.y;
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
    const c = this.classDef;
    const st = this.stats;
    const spd = this.cls === 'mage' ? st.castSpd : st.atkSpd;
    const delay = c.atkDelay / (1 + spd / 100);
    this.atkCd = delay;
    this.face(target);
    this.act(c.attack, delay * 0.92, () => {
      if (c.projectile) Combat.shoot(this, target, { kind: c.projectile, mult: 1 });
      else Combat.heroHit(this, target, 1);
    });
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
    if (this.chatT <= 0) {
      this.chatT = U.rand(40, 140);
      const msg = U.pick(D.BOT_CHAT);
      game.say(this, msg);
    }
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
    if (this.action) return;
    if (this.state === 'hunt') {
      if (!this.target || this.target.dead) {
        this.target = null;
        let bd = 520;
        for (const m of game.monsters) {
          if (m.dead || m.def.boss && this.lv < m.lv) continue;
          const d = U.dist(this, m);
          if (d < bd) { bd = d; this.target = m; }
        }
      }
      if (this.target) {
        const range = this.classDef.range + this.target.radius;
        if (U.dist(this, this.target) > range) this.moveToward(this.target.x, this.target.y, 150, dt, range - 8);
        else if (this.atkCd <= 0) { this.moving = false; this.basicAttack(this.target, game); }
        else this.moving = false;
        return;
      }
    }
    // wander / idle
    if (this.wanderTo) {
      if (this.moveToward(this.wanderTo.x, this.wanderTo.y, 120, dt, 8)) { this.wanderTo = null; this.idleT = U.rand(1, 6); }
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
