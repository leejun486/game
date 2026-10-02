import * as THREE from 'three';
import { makeHero, makeDokkaebi, makeGuard, makeLady } from './character.js';
import { toon } from './materials.js';
import { NAV_R } from './world.js';
import { clamp, angleDiff, dampAngle, rand, lerp, smooth } from './util.js';

const tmp = new THREE.Vector3();

// ===================== 플레이어 =====================
export class Player {
  constructor(game) {
    this.game = game;
    this.rig = makeHero();
    game.scene.add(this.rig.root);
    this.pos = new THREE.Vector3(0, 0.12, 16);
    this.yaw = Math.PI;
    this.vel = new THREE.Vector3();
    this.radius = 0.32;
    this.maxHp = 120;
    this.hp = this.maxHp;
    this.attack = null;
    this.combo = 0;
    this.comboTimer = 0;
    this.buffered = false;
    this.dashT = 0;
    this.dashCd = 0;
    this.dashDir = new THREE.Vector3();
    this.skillCd = 0;
    this.skillMax = 2.6;
    this.invuln = 0;
    this.hurtT = 0;
    this.dead = false;
    this.stepAcc = 0;
    this.y = this.pos.y;
    this.lastCombat = 0;
  }

  reset() {
    this.hp = this.maxHp;
    this.dead = false;
    this.attack = null;
    this.invuln = 1.5;
    this.rig.deadT = 0;
  }

  aimYaw(input) {
    const g = this.game;
    // 1) 근처 적 자동 조준
    let best = null, bd = 1e9;
    const baseYaw = input.moveLen > 0.1 ? Math.atan2(input.mx, input.mz) : this.yaw;
    for (const e of g.enemies) {
      if (e.dead || e.spawning) continue;
      const dx = e.pos.x - this.pos.x, dz = e.pos.z - this.pos.z;
      const d = Math.hypot(dx, dz);
      if (d > 3.6) continue;
      const a = Math.abs(angleDiff(baseYaw, Math.atan2(dx, dz)));
      const score = d + a * 1.5;
      if (a < 1.7 && score < bd) { bd = score; best = Math.atan2(dx, dz); }
    }
    if (best !== null) return best;
    // 2) 마우스 방향
    if (input.mouseRecent && input.mouseWorld) {
      return Math.atan2(input.mouseWorld.x - this.pos.x, input.mouseWorld.z - this.pos.z);
    }
    return baseYaw;
  }

  startAttack(input) {
    if (this.dead || this.dashT > 0) return;
    if (this.attack) {
      if (this.attack.t > 0.4) this.buffered = true;
      return;
    }
    const kind = this.combo % 3;
    this.combo++;
    this.yaw = this.aimYaw(input);
    this.attack = { t: 0, kind, dur: kind === 2 ? 0.46 : 0.34, hit: false };
    this.game.audio.play(kind === 2 ? 'swing3' : 'swing');
    this.lastCombat = this.game.time;
  }

  startDash(input) {
    if (this.dead || this.dashCd > 0) return;
    const dir = input.moveLen > 0.1 ? tmp.set(input.mx, 0, input.mz).normalize() : tmp.set(Math.sin(this.yaw), 0, Math.cos(this.yaw));
    this.dashDir.copy(dir);
    this.yaw = Math.atan2(dir.x, dir.z);
    this.dashT = 0.2;
    this.dashCd = 0.5;
    this.invuln = Math.max(this.invuln, 0.3);
    this.attack = null;
    this.buffered = false;
    this.game.audio.play('dash');
    this.game.fx.dust(this.pos.x, this.pos.y, this.pos.z, 8);
  }

  startSkill(input) {
    if (this.dead || this.skillCd > 0 || this.dashT > 0) return;
    this.skillCd = this.skillMax;
    this.yaw = this.aimYaw(input);
    this.attack = { t: 0, kind: 0, dur: 0.36, hit: true, skill: true };
    this.game.audio.play('swing3');
    this.game.spawnSwordWave(this);
    this.lastCombat = this.game.time;
  }

  damage(dmg, from) {
    if (this.invuln > 0 || this.dead || this.game.godMode) return false;
    this.hp -= dmg;
    this.invuln = 0.7;
    this.blinkT = 0.7;
    this.hurtT = 0.3;
    this.lastCombat = this.game.time;
    const g = this.game;
    g.fx.number(this.pos.clone().add(new THREE.Vector3(0, 1.7, 0)), dmg, 'player');
    g.audio.play('hurt');
    g.shake(0.25);
    g.screenFlash(0.25, '#ff3030');
    if (from) {
      tmp.subVectors(this.pos, from).setY(0).normalize();
      this.vel.addScaledVector(tmp, 7);
    }
    if (this.hp <= 0) {
      this.hp = 0;
      this.dead = true;
      g.onPlayerDeath();
    }
    return true;
  }

  update(dt, input) {
    const g = this.game;
    this.dashCd = Math.max(0, this.dashCd - dt);
    this.skillCd = Math.max(0, this.skillCd - dt);
    this.invuln = Math.max(0, this.invuln - dt);
    this.hurtT = Math.max(0, this.hurtT - dt);
    this.comboTimer -= dt;

    let speed = 0;
    if (!this.dead) {
      // 이동
      let mv = 0;
      if (this.dashT > 0) {
        this.dashT -= dt;
        const s = 14 * (0.4 + 0.6 * (this.dashT / 0.2));
        g.world.move(this.pos, this.dashDir.x * s * dt, this.dashDir.z * s * dt, this.radius);
        speed = s;
        if (Math.random() < 0.8) g.fx.add.emit({ x: this.pos.x + rand(-0.2, 0.2), y: this.pos.y + rand(0.3, 1.1), z: this.pos.z + rand(-0.2, 0.2), life: 0.25, size: 2, color: '#bfe8ff' });
        // 잔상
        this.ghostT = (this.ghostT ?? 0) - dt;
        if (this.ghostT <= 0) { this.ghostT = 0.045; g.fx.ghost(this.rig); }
      } else {
        const slow = this.attack ? (this.attack.skill ? 0.1 : 0.22) : 1;
        const sp = 4.6 * slow;
        if (input.moveLen > 0.1) {
          mv = 1;
          const dx = input.mx * sp, dz = input.mz * sp;
          this.vel.x = lerp(this.vel.x, dx, 1 - Math.exp(-18 * dt));
          this.vel.z = lerp(this.vel.z, dz, 1 - Math.exp(-18 * dt));
          if (!this.attack) this.yaw = dampAngle(this.yaw, Math.atan2(input.mx, input.mz), 16, dt);
        } else {
          this.vel.x = lerp(this.vel.x, 0, 1 - Math.exp(-14 * dt));
          this.vel.z = lerp(this.vel.z, 0, 1 - Math.exp(-14 * dt));
        }
        // 공격 중 전진 스텝
        if (this.attack && !this.attack.skill) {
          const a = this.attack;
          if (a.t > 0.25 && a.t < 0.5) {
            const lunge = a.kind === 2 ? 3.5 : 2.6;
            this.vel.x += Math.sin(this.yaw) * lunge * dt * 10 * (1 - Math.exp(-dt * 5));
            this.vel.z += Math.cos(this.yaw) * lunge * dt * 10 * (1 - Math.exp(-dt * 5));
          }
        }
        g.world.move(this.pos, this.vel.x * dt, this.vel.z * dt, this.moveR);
        speed = Math.hypot(this.vel.x, this.vel.z);
      }
      // 발걸음 먼지
      this.stepAcc += speed * dt;
      if (this.stepAcc > 1.1 && this.dashT <= 0) { this.stepAcc = 0; g.fx.dust(this.pos.x, this.pos.y, this.pos.z, 2); }

      // 공격 진행
      if (this.attack) {
        const a = this.attack;
        a.t += dt / a.dur;
        if (!a.hit && a.t >= 0.36) {
          a.hit = true;
          g.playerSwingHit(this, a.kind);
        }
        if (a.t >= 1) {
          this.attack = null;
          if (this.buffered) { this.buffered = false; this.startAttack(input); }
          else this.comboTimer = 0.35;
        }
      } else if (this.comboTimer <= 0) {
        this.combo = 0;
      }
    }

    // 높이
    const h = g.world.heightAt(this.pos.x, this.pos.z);
    this.y = lerp(this.y, h, 1 - Math.exp(-20 * dt));
    this.pos.y = h;

    // 자연 회복
    if (!this.dead && g.time - this.lastCombat > 4 && this.hp < this.maxHp) this.hp = Math.min(this.maxHp, this.hp + dt * 6);

    // 리그
    const r = this.rig;
    r.root.position.set(this.pos.x, this.y, this.pos.z);
    r.root.rotation.y = this.yaw;
    r.animate(dt, {
      speed: this.dead ? 0 : speed,
      attack: this.attack ? { t: Math.min(1, this.attack.t), kind: this.attack.kind } : null,
      dash: this.dashT > 0,
      hurt: this.hurtT / 0.3,
      dead: this.dead,
    });
    // 피격 무적 깜빡임 / 검 빛
    this.blinkT = Math.max(0, (this.blinkT || 0) - dt);
    r.root.visible = this.dead || this.blinkT <= 0 || Math.floor(g.time * 18) % 2 === 0;
    r.setFlash(this.hurtT > 0.2 ? 0.6 : 0);
    if (r.bladeMat) {
      const glow = this.attack ? 0.5 : (g.night > 0.5 ? 0.16 : 0.08); // 평소에도 은은한 칼빛
      r.bladeMat.emissive.setRGB(glow * 0.6, glow * 0.9, glow);
      r.edgeMat.emissive.setRGB(glow * 1.2, glow * 1.4, glow * 1.6);
    }
  }
}

// ===================== 적 =====================
const TYPES = {
  blue: { hp: 46, speed: 2.7, dmg: 10, range: 1.5, windup: 0.5, recover: 0.6, radius: 0.46, rig: 'blue', exp: 10 },
  red: { hp: 72, speed: 3.1, dmg: 15, range: 1.6, windup: 0.42, recover: 0.5, radius: 0.48, rig: 'red', exp: 16 },
  wisp: { hp: 28, speed: 3.2, dmg: 9, range: 7, windup: 0.6, recover: 1.6, radius: 0.35, exp: 12 },
  boss: { hp: 900, speed: 2.35, dmg: 24, range: 2.7, windup: 0.85, recover: 0.8, radius: 0.95, rig: 'boss', exp: 200 },
};

export class Enemy {
  constructor(game, type, pos, level = 1) {
    this.game = game;
    this.type = type;
    const T = (this.T = TYPES[type]);
    const lv = 1 + (level - 1) * 0.25;
    this.maxHp = Math.round(T.hp * lv);
    this.hp = this.maxHp;
    this.dmg = Math.round(T.dmg * (1 + (level - 1) * 0.15));
    this.radius = T.radius;
    // 벽·소품과의 충돌 반경은 길찾기 격자와 같게 (좁은 틈에서 끼이지 않도록)
    this.moveR = type === 'boss' ? NAV_R[1] : Math.min(T.radius, NAV_R[0]);
    this.pos = pos.clone();
    this.vel = new THREE.Vector3();
    this.yaw = 0;
    this.state = 'spawn';
    this.st = 0;
    this.attackCd = rand(0.4, 1.2);
    this.hurtT = 0;
    this.flashT = 0;
    this.dead = false;
    this.deadT = 0;
    this.spawning = true;
    this.y = pos.y;
    this.strafe = Math.random() < 0.5 ? 1 : -1;
    this.leapCd = 6;
    this.summoned = 0;
    if (type === 'wisp') this.buildWisp();
    else {
      this.rig = makeDokkaebi(T.rig);
      game.scene.add(this.rig.root);
    }
    this.root = this.rig ? this.rig.root : this.wisp;
    this.root.position.copy(this.pos);
    this.root.scale.setScalar(0.01);
    game.fx.blueFire(pos.x, pos.y, pos.z, type === 'boss' ? 80 : 30, type === 'boss' ? 1.2 : 0.5);
    game.fx.ring(pos, type === 'boss' ? 3 : 1.4, '#7fd8ff', 0.5);
    game.audio.play('spawn');
  }

  buildWisp() {
    const g = new THREE.Group();
    const coreMat = new THREE.MeshBasicMaterial({ color: new THREE.Color('#bff4ff') });
    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.28, 1), coreMat);
    g.add(core);
    const shell = new THREE.Mesh(new THREE.IcosahedronGeometry(0.36, 1), new THREE.MeshBasicMaterial({ color: new THREE.Color('#3a8cff'), transparent: true, opacity: 0.45, depthWrite: false }));
    shell.userData.noOutline = true;
    g.add(shell);
    const eyeM = new THREE.MeshBasicMaterial({ color: 0x0a1030 });
    for (const s of [-1, 1]) {
      const e = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.1, 0.04), eyeM);
      e.position.set(s * 0.09, 0.03, 0.27);
      g.add(e);
    }
    this.game.scene.add(g);
    this.wisp = g;
    this.coreMat = coreMat;
  }

  get alive() { return !this.dead; }

  center() { return tmp.set(this.pos.x, this.y + (this.type === 'boss' ? 2.0 : this.type === 'wisp' ? 1.3 : 0.8), this.pos.z); }

  hit(dmg, dir, knock = 5, stun = 0.25) {
    if (this.dead || this.spawning) return false;
    this.hp -= dmg;
    this.flashT = 0.12;
    if (this.type !== 'boss' || this.state === 'chase') {
      const k = this.type === 'boss' ? knock * 0.15 : knock;
      this.vel.addScaledVector(dir, k);
      if (this.type !== 'boss') {
        this.hurtT = stun;
        if (this.state === 'windup' && stun >= 0.25) { this.state = 'chase'; this.attackCd = 0.6; this.clearTele(); }
      }
    }
    if (this.hp <= 0) this.die();
    return true;
  }

  die() {
    this.dead = true;
    this.hp = 0;
    this.deadT = 0;
    this.clearTele();
    const g = this.game;
    g.audio.play('poof');
    if (this.type === 'wisp') {
      g.fx.blueFire(this.pos.x, this.y + 1, this.pos.z, 40, 0.4);
      g.fx.ring(new THREE.Vector3(this.pos.x, this.y, this.pos.z), 1.5, '#7fd8ff', 0.4);
    }
    g.onEnemyKilled(this);
  }

  clearTele() {
    if (this.tele) { this.game.fx.removeRing(this.tele); this.tele = null; }
  }

  update(dt) {
    const g = this.game, p = g.player;
    this.st += dt;
    this.flashT = Math.max(0, this.flashT - dt);
    this.hurtT = Math.max(0, this.hurtT - dt);
    this.attackCd -= dt;
    this.leapCd -= dt;

    if (this.dead) {
      this.deadT += dt;
      if (this.type === 'wisp') {
        this.root.scale.setScalar(Math.max(0.01, 1 - this.deadT * 4));
      } else {
        this.rig.animate(dt, { speed: 0, dead: true });
        this.rig.setFlash(Math.max(0, 0.8 - this.deadT * 2));
        if (this.deadT > 0.55 && !this.poofed) {
          this.poofed = true;
          const big = this.type === 'boss';
          g.fx.smoke(this.pos.x, this.y + 0.3, this.pos.z, big ? 30 : 12);
          g.fx.blueFire(this.pos.x, this.y + 0.2, this.pos.z, big ? 60 : 24, big ? 1.4 : 0.6);
          g.fx.coins(this.pos.x, this.y, this.pos.z, big ? 30 : 6);
          g.audio.play('coin');
          this.root.visible = false;
        }
      }
      return this.deadT < 1.2;
    }

    // 등장
    if (this.spawning) {
      const k = smooth(clamp(this.st / 0.7, 0, 1));
      this.root.scale.setScalar(Math.max(0.01, k));
      if (Math.random() < 0.6) g.fx.blueFire(this.pos.x, this.pos.y, this.pos.z, 2, this.type === 'boss' ? 1 : 0.4);
      if (this.st >= 0.7) { this.spawning = false; this.state = 'chase'; this.st = 0; this.root.scale.setScalar(1); if (Math.random() < 0.4 || this.type === 'boss') g.audio.play('laugh'); }
      if (this.type === 'wisp') this.root.position.set(this.pos.x, this.pos.y + 1.3 * k, this.pos.z);
      else this.place(dt, 0);
      return true;
    }

    const dx = p.pos.x - this.pos.x, dz = p.pos.z - this.pos.z;
    const dist = Math.hypot(dx, dz);
    const toYaw = Math.atan2(dx, dz);
    let speed = 0;
    let attackAnim = null;
    const T = this.T;

    if (this.type === 'wisp') return this.updateWisp(dt, dist, toYaw);

    // 넉백
    if (this.vel.lengthSq() > 0.001) {
      g.world.move(this.pos, this.vel.x * dt, this.vel.z * dt, this.moveR);
      this.vel.multiplyScalar(Math.exp(-9 * dt));
    }

    if (this.hurtT > 0) {
      // 경직
    } else if (this.state === 'chase') {
      const sameLevel = Math.abs(p.pos.y - this.pos.y) < 0.5;
      if (p.dead) {
        // 플레이어가 쓰러지면 제자리에서 웃음
        speed = 0;
        this.yaw = dampAngle(this.yaw, toYaw, 8, dt);
      } else if (this.type === 'boss' && this.leapCd <= 0 && dist > 4.5 && dist < 14) {
        this.state = 'leapPrep'; this.st = 0;
        this.leapTarget = p.pos.clone();
        this.tele = g.fx.ring(this.leapTarget, 3.6, '#ff4a3a', 1, 1);
      } else if (dist > T.range * 0.85 || !sameLevel) {
        const sp = T.speed * (this.type === 'boss' && this.hp < this.maxHp * 0.4 ? 1.25 : 1);
        speed = this.chaseMove(dt, sp, dx, dz, dist);
        // 돌아가는 중엔 가는 방향을, 곧장 갈 땐 플레이어를 바라봄
        this.yaw = dampAngle(this.yaw, this.los ? toYaw : Math.atan2(this.moveX, this.moveZ), 8, dt);
      } else {
        this.yaw = dampAngle(this.yaw, toYaw, 8, dt);
        if (this.attackCd <= 0) {
          this.state = 'windup'; this.st = 0;
          if (this.type === 'boss') {
            const f = new THREE.Vector3(this.pos.x + Math.sin(this.yaw) * 1.6, this.pos.y, this.pos.z + Math.cos(this.yaw) * 1.6);
            this.tele = g.fx.ring(f, 2.6, '#ff4a3a', 1, 1);
            this.smashAt = f;
          }
        }
      }
    } else if (this.state === 'windup') {
      if (this.st < T.windup * 0.6) this.yaw = dampAngle(this.yaw, toYaw, 5, dt);
      attackAnim = { t: 0.28 * clamp(this.st / T.windup, 0, 1), kind: 2 };
      if (this.tele) this.tele.mat.uniforms.uProg.value = this.st / T.windup;
      if (this.type === 'boss' && this.smashAt) {
        this.smashAt.set(this.pos.x + Math.sin(this.yaw) * 1.6, this.pos.y, this.pos.z + Math.cos(this.yaw) * 1.6);
        if (this.tele) this.tele.m.position.set(this.smashAt.x, this.smashAt.y + 0.04, this.smashAt.z);
      }
      if (this.st >= T.windup) { this.state = 'strike'; this.st = 0; g.audio.play('swing'); }
    } else if (this.state === 'strike') {
      attackAnim = { t: 0.28 + 0.34 * clamp(this.st / 0.12, 0, 1), kind: 2 };
      if (!this.struck && this.st >= 0.08) {
        this.struck = true;
        if (this.type === 'boss') {
          this.clearTele();
          g.bossSlam(this, this.smashAt, 2.6, this.dmg);
        } else {
          const fx = Math.sin(this.yaw), fz = Math.cos(this.yaw);
          const hx = this.pos.x + fx * 0.9, hz = this.pos.z + fz * 0.9;
          g.fx.dust(hx, this.pos.y, hz, 5);
          if (Math.hypot(p.pos.x - hx, p.pos.z - hz) < 1.05 + p.radius && Math.abs(p.pos.y - this.pos.y) < 1) {
            p.damage(this.dmg, this.pos);
          }
        }
      }
      if (this.st >= 0.12) { this.state = 'recover'; this.st = 0; this.struck = false; }
    } else if (this.state === 'recover') {
      attackAnim = { t: 0.62 + 0.38 * clamp(this.st / T.recover, 0, 1), kind: 2 };
      if (this.st >= T.recover) { this.state = 'chase'; this.st = 0; this.attackCd = rand(0.6, 1.4); }
    } else if (this.state === 'leapPrep') {
      attackAnim = { t: 0.2 * clamp(this.st / 0.6, 0, 1), kind: 2 };
      if (this.tele) this.tele.mat.uniforms.uProg.value = this.st / 1.5;
      if (this.st >= 0.6) {
        this.state = 'leap'; this.st = 0;
        this.leapFrom = this.pos.clone();
        g.audio.play('dash');
        g.fx.dust(this.pos.x, this.pos.y, this.pos.z, 14);
      }
    } else if (this.state === 'leap') {
      const k = clamp(this.st / 0.9, 0, 1);
      if (this.tele) this.tele.mat.uniforms.uProg.value = 0.4 + k * 0.6;
      this.pos.x = lerp(this.leapFrom.x, this.leapTarget.x, smooth(k));
      this.pos.z = lerp(this.leapFrom.z, this.leapTarget.z, smooth(k));
      this.jumpY = Math.sin(k * Math.PI) * 4.5;
      attackAnim = { t: 0.28, kind: 2 };
      if (k >= 1) {
        this.jumpY = 0;
        this.clearTele();
        // 착지 지점이 막혀 있으면 가까운 빈 곳으로
        const h = g.world.heightAt(this.pos.x, this.pos.z);
        if (g.world.isBlocked(this.pos.x, this.pos.z, this.moveR * 0.7, h)) this.pos.copy(this.leapFrom);
        g.bossSlam(this, this.pos.clone(), 3.6, Math.round(this.dmg * 1.2), true);
        this.state = 'recover'; this.st = 0;
        this.leapCd = rand(6, 9);
      }
    }

    this.place(dt, speed, attackAnim);
    return true;
  }

  updateWisp(dt, dist, toYaw) {
    const g = this.game, p = g.player;
    this.yaw = dampAngle(this.yaw, toYaw, 6, dt);
    if (this.vel.lengthSq() > 0.001) {
      g.world.move(this.pos, this.vel.x * dt, this.vel.z * dt, this.moveR);
      this.vel.multiplyScalar(Math.exp(-6 * dt));
    }
    const dx = p.pos.x - this.pos.x, dz = p.pos.z - this.pos.z;
    const ux = dx / (dist || 1), uz = dz / (dist || 1);
    let mx = 0, mz = 0;
    if (this.state === 'chase') {
      if (dist > 7.5) {
        const d = g.world.clearLine(this.pos.x, this.pos.z, p.pos.x, p.pos.z, this.moveR) ? null : g.world.navDir(this.pos, 0);
        if (d) { mx = d.x; mz = d.z; } else { mx = ux; mz = uz; }
      }
      else if (dist < 4.5) { mx = -ux; mz = -uz; }
      mx += -uz * this.strafe * 0.6; mz += ux * this.strafe * 0.6;
      if (Math.random() < dt * 0.3) this.strafe *= -1;
      if (this.attackCd <= 0 && dist < 10 && !p.dead) { this.state = 'windup'; this.st = 0; g.audio.play('orb'); }
    } else if (this.state === 'windup') {
      if (Math.random() < 0.8) g.fx.add.emit({ x: this.pos.x + rand(-0.6, 0.6), y: this.y + 1.3 + rand(-0.6, 0.6), z: this.pos.z + rand(-0.6, 0.6), vx: 0, vy: 0, vz: 0, life: 0.3, size: 2, color: '#8fe8ff' });
      if (this.st >= this.T.windup) {
        g.spawnOrb(this);
        this.state = 'chase'; this.st = 0; this.attackCd = rand(2.0, 3.0);
      }
    }
    const len = Math.hypot(mx, mz);
    if (len > 0.01) g.world.move(this.pos, (mx / len) * this.T.speed * dt, (mz / len) * this.T.speed * dt, this.moveR);
    // 둥실둥실
    const h = g.world.heightAt(this.pos.x, this.pos.z);
    this.y = lerp(this.y, h, 1 - Math.exp(-6 * dt));
    const bob = Math.sin(g.time * 3 + this.strafe) * 0.15;
    this.root.position.set(this.pos.x, this.y + 1.3 + bob, this.pos.z);
    this.root.rotation.y = this.yaw;
    const pulse = this.state === 'windup' ? 1 + Math.sin(this.st * 40) * 0.12 + this.st * 0.4 : 1;
    this.root.scale.setScalar(pulse);
    this.coreMat.color.set(this.flashT > 0 ? '#ffffff' : this.state === 'windup' ? '#e8ffff' : '#9feaff');
    if (Math.random() < 0.7) g.fx.add.emit({ x: this.pos.x + rand(-0.15, 0.15), y: this.y + 1.45 + bob, z: this.pos.z + rand(-0.15, 0.15), vx: rand(-0.3, 0.3), vy: rand(0.8, 1.6), vz: rand(-0.3, 0.3), life: rand(0.3, 0.6), size: rand(2, 4), endSize: 1, color: '#7fe0ff', color2: '#1a40ff' });
    return true;
  }

  // 추격 이동: 곧장 갈 수 있으면 직선(살짝 옆으로 돌아 들어옴), 막혀 있으면 흐름장 길찾기,
  // 그래도 제자리에 걸리면 잠깐 옆으로 비켜서 빠져나옴. 반환: 실제 이동 속도
  chaseMove(dt, sp, dx, dz, dist) {
    const w = this.game.world, p = this.game.player;
    const big = this.type === 'boss' ? 1 : 0;
    this.losT = (this.losT ?? 0) - dt;
    if (this.losT <= 0) {
      this.losT = 0.2 + Math.random() * 0.1;
      this.los = Math.abs(p.pos.y - this.pos.y) < 0.5 && w.clearLine(this.pos.x, this.pos.z, p.pos.x, p.pos.z, this.moveR);
    }
    let mx, mz;
    if (this.los || dist < 1.2) {
      const side = dist > 3 ? 0.35 * this.strafe : 0;
      const ux = dx / dist, uz = dz / dist;
      mx = ux - uz * side; mz = uz + ux * side;
      const l = Math.hypot(mx, mz); mx /= l; mz /= l;
    } else {
      const d = w.navDir(this.pos, big);
      if (d) { mx = d.x; mz = d.z; } else { mx = dx / dist; mz = dz / dist; }
    }
    if (this.unstuckT > 0) { this.unstuckT -= dt; mx = this.unstuckX; mz = this.unstuckZ; }
    // 방향 전환을 부드럽게
    this.moveX = this.moveX === undefined ? mx : this.moveX + (mx - this.moveX) * Math.min(1, dt * 12);
    this.moveZ = this.moveZ === undefined ? mz : this.moveZ + (mz - this.moveZ) * Math.min(1, dt * 12);
    const ml = Math.hypot(this.moveX, this.moveZ) || 1;
    const bx = this.pos.x, bz = this.pos.z;
    w.move(this.pos, (this.moveX / ml) * sp * dt, (this.moveZ / ml) * sp * dt, this.moveR);
    const moved = Math.hypot(this.pos.x - bx, this.pos.z - bz);
    this.stuckAcc = moved < sp * dt * 0.35 ? (this.stuckAcc || 0) + dt : 0;
    if (this.stuckAcc > 0.35) {
      this.stuckAcc = 0;
      this.los = false; this.losT = 0.8;
      this.strafe *= -1;
      const a = Math.atan2(mz, mx) + (Math.random() < 0.5 ? 1 : -1) * (Math.PI / 2 + Math.random() * 0.5);
      this.unstuckX = Math.cos(a); this.unstuckZ = Math.sin(a); this.unstuckT = 0.3;
    }
    return dt > 0 ? moved / dt : 0;
  }

  place(dt, speed, attackAnim = null) {
    const g = this.game;
    const h = g.world.heightAt(this.pos.x, this.pos.z);
    this.y = lerp(this.y, h, 1 - Math.exp(-18 * dt));
    this.pos.y = h;
    const r = this.rig;
    r.root.position.set(this.pos.x, this.y + (this.jumpY || 0), this.pos.z);
    r.root.rotation.y = this.yaw;
    r.animate(dt, { speed, attack: attackAnim, hurt: this.hurtT > 0 ? this.hurtT / 0.25 : 0 });
    // 공격 준비 중엔 붉게 깜빡임, 피격 시 흰색
    if (this.flashT > 0) r.setFlash(0.9);
    else if (this.state === 'windup' && this.type !== 'boss') r.setFlash(Math.floor(this.st * 14) % 2 ? 0.35 : 0);
    else if (this.state === 'windup' || this.state === 'leapPrep') r.setFlash(Math.floor(this.st * 10) % 2 ? 0.25 : 0);
    else r.setFlash(0);
  }

  dispose() {
    this.clearTele();
    this.game.scene.remove(this.root);
  }
}

// ===================== NPC =====================
export class NPC {
  constructor(game, kind, x, z, yaw, name, lines) {
    this.game = game;
    this.rig = kind === 'guard' ? makeGuard() : makeLady();
    this.pos = new THREE.Vector3(x, game.world.heightAt(x, z), z);
    this.baseYaw = yaw;
    this.yaw = yaw;
    this.name = name;
    this.lines = lines;
    this.radius = 0.4;
    game.scene.add(this.rig.root);
    game.world.circles.push({ x, z, r: 0.4, y: this.pos.y });
  }

  update(dt) {
    const p = this.game.player;
    const d = Math.hypot(p.pos.x - this.pos.x, p.pos.z - this.pos.z);
    const target = d < 4 ? Math.atan2(p.pos.x - this.pos.x, p.pos.z - this.pos.z) : this.baseYaw;
    this.yaw = dampAngle(this.yaw, target, 4, dt);
    this.rig.root.position.copy(this.pos);
    this.rig.root.rotation.y = this.yaw;
    this.rig.animate(dt, { speed: 0 });
  }
}

// ===================== 참새 =====================
export class Bird {
  constructor(game, pos) {
    this.game = game;
    const g = (this.root = new THREE.Group());
    const brown = toon({ color: new THREE.Color('#8a5a3a') });
    const light = toon({ color: new THREE.Color('#e8d8b8') });
    const dark = toon({ color: new THREE.Color('#2a2020') });
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.1, 6, 5), brown);
    body.scale.set(0.9, 0.8, 1.2);
    body.position.y = 0.1;
    const belly = new THREE.Mesh(new THREE.SphereGeometry(0.075, 6, 4), light);
    belly.position.set(0, 0.07, 0.03);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.065, 6, 5), brown);
    head.position.set(0, 0.19, 0.08);
    const beak = new THREE.Mesh(new THREE.ConeGeometry(0.02, 0.05, 4), dark);
    beak.rotation.x = Math.PI / 2;
    beak.position.set(0, 0.18, 0.15);
    const tail = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.015, 0.1), dark);
    tail.position.set(0, 0.12, -0.13);
    tail.rotation.x = -0.4;
    this.wings = [];
    for (const s of [-1, 1]) {
      const w = new THREE.Group();
      w.position.set(s * 0.07, 0.13, 0);
      const wm = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.015, 0.1), brown);
      wm.position.x = s * 0.06;
      w.add(wm);
      g.add(w);
      this.wings.push(w);
    }
    this.head = head;
    g.add(body, belly, head, beak, tail);
    g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    game.scene.add(g);
    this.pos = pos.clone();
    this.yaw = rand(0, Math.PI * 2);
    this.state = 'idle';
    this.t = rand(0, 2);
    this.hopY = 0;
    this.vel = new THREE.Vector3();
  }

  update(dt) {
    const g = this.game, p = g.player;
    this.t -= dt;
    const d = Math.hypot(p.pos.x - this.pos.x, p.pos.z - this.pos.z);
    if (this.state !== 'fly' && this.state !== 'gone' && (d < 2.6 || g.alarm > 0)) {
      this.state = 'fly';
      const ax = this.pos.x - p.pos.x, az = this.pos.z - p.pos.z;
      const l = Math.hypot(ax, az) || 1;
      this.vel.set((ax / l) * 4 + rand(-1, 1), 4.5, (az / l) * 4 + rand(-1, 1));
      this.yaw = Math.atan2(this.vel.x, this.vel.z);
    }
    if (this.state === 'idle') {
      this.head.position.y = 0.19 - (Math.sin(g.time * 9 + this.yaw * 10) > 0.6 ? 0.05 : 0);
      if (this.t <= 0) {
        this.t = rand(0.4, 1.6);
        if (Math.random() < 0.6) { this.state = 'hop'; this.hopT = 0; this.yaw += rand(-1.2, 1.2); }
      }
    } else if (this.state === 'hop') {
      this.hopT += dt;
      const k = this.hopT / 0.2;
      this.hopY = Math.sin(Math.min(1, k) * Math.PI) * 0.12;
      const nx = this.pos.x + Math.sin(this.yaw) * dt * 1.2, nz = this.pos.z + Math.cos(this.yaw) * dt * 1.2;
      if (!g.world.isBlocked(nx, nz, 0.1, this.pos.y)) { this.pos.x = nx; this.pos.z = nz; }
      if (k >= 1) { this.state = 'idle'; this.hopY = 0; }
    } else if (this.state === 'fly') {
      this.pos.addScaledVector(this.vel, dt);
      this.vel.y += dt * 1.5;
      for (const w of this.wings) w.rotation.z = Math.sin(g.time * 50) * 1.1 * (w.position.x > 0 ? 1 : -1);
      if (this.pos.y > 14) { this.state = 'gone'; this.root.visible = false; this.t = rand(8, 16); }
    } else if (this.state === 'gone') {
      if (this.t <= 0 && g.alarm <= 0) {
        const sp = g.world.randomWalkable(p.pos.x, p.pos.z, 8, 15);
        if (sp) { this.pos.copy(sp); this.state = 'idle'; this.root.visible = true; for (const w of this.wings) w.rotation.z = 0; }
        else this.t = 2;
      }
    }
    if (this.state === 'idle' || this.state === 'hop') this.pos.y = g.world.heightAt(this.pos.x, this.pos.z);
    this.root.position.set(this.pos.x, this.pos.y + this.hopY, this.pos.z);
    this.root.rotation.y = this.yaw;
  }
}
