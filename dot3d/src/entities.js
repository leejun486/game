import * as THREE from 'three';
import { makeDokkaebi, makeGuard, makeLady, makeMage, makeFox, makeJiangshi, makeGhost, makeReaper } from './character.js';
import { CLASSES } from './classes.js';
import { outfitLook } from './character.js';
import { item, WEAPONS, perksOf } from './items.js';

// 스킬 해금 레벨
export const SKILL_LEVEL = { 2: 3, 3: 5 };
export const expNeed = (lv) => 40 + lv * 30;
import { toon } from './materials.js';
import { NAV_R } from './world.js';
import { clamp, angleDiff, dampAngle, rand, lerp, smooth } from './util.js';

const tmp = new THREE.Vector3();
// 추가 스킬 동작은 기존 동작을 재사용: 일섬→발도, 회오리→가로베기, 화룡부→양손 던지기, 빙결진→지팡이 내리꽂기, 회오리 정령→부채꼴
const ANIM_KIND = { 4: 3, 5: 0, 13: 12, 14: 11, 24: 21 };

// ===================== 플레이어 =====================
export class Player {
  constructor(game, cls = 'sword') {
    this.game = game;
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
    this.moveR = this.radius;
    this.setClass(cls);
  }

  // 직업을 바꾸면 캐릭터 모델과 능력치를 새로 만듦
  setClass(cls) {
    const C = CLASSES[cls] || CLASSES.sword;
    this.cls = C.id;
    this.cfg = C;
    // 직업별 레벨·장비는 game.progress에 보관
    const pr = this.game.progressOf(C.id);
    this.level = pr.level;
    this.exp = pr.exp;
    this.skillMax = C.skillCd;
    this.cd2 = 0; this.cd3 = 0;
    this.cd2Max = C.skill2Cd; this.cd3Max = C.skill3Cd;
    this.dashMax = C.dashCd;
    this.attack = null;
    this.combo = 0;
    this.sheatheT = 0;
    this.buildRig();
    this.recalc(true);
  }

  // 착용 장비를 반영해 캐릭터 모델을 새로 만듦 (옷 색·갑옷·무기 모양)
  buildRig() {
    const pr = this.game.progressOf(this.cls);
    const w = item(pr.weapon), o = item(pr.outfit);
    const type = { sword: 'hero', mage: 'mage', elf: 'elf' }[this.cls];
    const old = this.rig;
    this.rig = this.cfg.make({ wstyle: w?.style, ...outfitLook(type, o) });
    if (old) {
      this.game.scene.remove(old.root);
      this.rig.root.position.copy(old.root.position);
      this.rig.root.rotation.y = old.root.rotation.y;
    }
    this.game.scene.add(this.rig.root);
  }

  // 레벨·장비로 능력치 계산
  recalc(full = false) {
    const pr = this.game.progressOf(this.cls);
    const w = item(pr.weapon), o = item(pr.outfit);
    const ratio = this.maxHp ? this.hp / this.maxHp : 1;
    this.maxHp = Math.round(this.cfg.hp + (this.level - 1) * 12 + (o?.hp || 0));
    this.atkMul = (1 + (this.level - 1) * 0.08) * (1 + (w?.atk || 0));
    this.def = o?.def || 0;
    this.perks = perksOf(pr.weapon, pr.outfit);
    this.dashMax = this.cfg.dashCd * (this.perks.has('swift') ? 0.7 : 1);
    this.hp = full ? this.maxHp : Math.max(1, Math.round(this.maxHp * ratio));
  }

  equip(id) {
    const it = item(id);
    if (!it) return false;
    if (it.kind === 'weapon' && it.cls !== this.cls) return false;
    const pr = this.game.progressOf(this.cls);
    if (it.kind === 'weapon') pr.weapon = id; else pr.outfit = id;
    this.buildRig();
    this.recalc();
    return true;
  }

  addExp(n) {
    this.exp += n;
    let up = 0;
    while (this.exp >= expNeed(this.level)) { this.exp -= expNeed(this.level); this.level++; up++; }
    const pr = this.game.progressOf(this.cls);
    pr.level = this.level; pr.exp = this.exp;
    if (up) { this.recalc(true); this.game.onLevelUp(this, up); }
  }

  reset() {
    this.hp = this.maxHp;
    this.dead = false;
    this.attack = null;
    this.invuln = 1.5;
    this.rig.deadT = 0;
  }

  aimYaw(input, range = this.cls === 'sword' ? 3.6 : 11) {
    const g = this.game;
    // 0) 자동 타겟이 잡혀 있으면 그쪽으로
    const t = g.target;
    if (t && !t.dead && !t.spawning && Math.hypot(t.pos.x - this.pos.x, t.pos.z - this.pos.z) < g.targetRange() + 2) {
      return Math.atan2(t.pos.x - this.pos.x, t.pos.z - this.pos.z);
    }
    // 1) 근처 적 자동 조준 (원거리 직업은 더 멀리)
    let best = null, bd = 1e9;
    const baseYaw = input.moveLen > 0.1 ? Math.atan2(input.mx, input.mz) : this.yaw;
    for (const e of g.enemies) {
      if (e.dead || e.spawning) continue;
      const dx = e.pos.x - this.pos.x, dz = e.pos.z - this.pos.z;
      const d = Math.hypot(dx, dz);
      if (d > range) continue;
      const a = Math.abs(angleDiff(baseYaw, Math.atan2(dx, dz)));
      const score = d + a * (range > 4 ? 4 : 1.5);
      if (a < (range > 4 ? 0.9 : 1.7) && score < bd) { bd = score; best = Math.atan2(dx, dz); }
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
    if (this.cls !== 'sword') {
      // 도사: 불부적 → 불부적 → 세 장 부채꼴 / 요정: 사격 → 사격 → 세 발 동시
      const base = this.cls === 'mage' ? 10 : 20;
      const kind = base + [0, 0, 2][this.combo % 3];
      this.combo++;
      this.yaw = this.aimYaw(input);
      const third = kind % 10 === 2;
      this.attack = { t: 0, kind, dur: this.cls === 'mage' ? (third ? 0.46 : 0.36) : (third ? 0.42 : 0.32), hit: false, hitAt: this.cls === 'mage' ? 0.42 : 0.47 };
      if (this.cls === 'elf') this.game.audio.play('bowdraw');
      this.lastCombat = this.game.time;
      return;
    }
    // 칼집에 있으면 발도베기(3)로 시작 → 가로베기(0) → 내려찍기(2).
    // 칼을 뽑은 채 이어서 치면 되베기(1) → 가로베기(0) → 내려찍기(2)
    const r = this.rig;
    const fromSheath = r.sheathed;
    if (fromSheath) { this.combo = 0; this.drawCut(); }
    else if (this.combo === 0) this.comboFromSheath = false;
    const seq = this.comboFromSheath ? [3, 0, 2] : [1, 0, 2];
    const kind = seq[this.combo % 3];
    this.combo++;
    this.yaw = this.aimYaw(input);
    this.attack = { t: 0, kind, dur: kind === 2 ? 0.48 : kind === 3 ? 0.42 : 0.36, hit: false, hitAt: kind === 3 ? 0.44 : 0.38 };
    if (kind !== 3) this.game.audio.play(kind === 2 ? 'swing3' : 'swing');
    this.lastCombat = this.game.time;
    this.sinceAttack = 0;
  }

  // 칼집에서 칼을 뽑음 (발도)
  drawCut() {
    this.rig.unsheathe();
    this.sheatheT = 0;
    this.comboFromSheath = true;
    this.game.audio.play('draw');
    const sp = this.rig.saya;
    if (sp) {
      const p = new THREE.Vector3();
      sp.getWorldPosition(p);
      this.game.fx.spark(p.x, p.y, p.z, 6, '#ffffff', 3);
    }
  }

  startDash(input) {
    if (this.dead || this.dashCd > 0) return;
    const dir = input.moveLen > 0.1 ? tmp.set(input.mx, 0, input.mz).normalize() : tmp.set(Math.sin(this.yaw), 0, Math.cos(this.yaw));
    this.dashDir.copy(dir);
    this.yaw = Math.atan2(dir.x, dir.z);
    if (this.cls === 'mage') { this.blink(dir); return; }
    this.dashT = 0.2;
    this.dashCd = this.dashMax ?? 0.5;
    this.invuln = Math.max(this.invuln, 0.3);
    this.attack = null;
    this.buffered = false;
    this.game.audio.play('dash');
    this.game.fx.dust(this.pos.x, this.pos.y, this.pos.z, 8);
  }

  // 도사의 축지법: 순식간에 몇 걸음 앞으로 이동 (벽은 못 뚫음)
  blink(dir) {
    const g = this.game;
    const from = this.pos.clone();
    g.fx.ghost(this.rig, '#9a7aff', 0.4);
    g.fx.smoke(from.x, from.y + 0.2, from.z, 10);
    g.world.move(this.pos, dir.x * 3.6, dir.z * 3.6, this.moveR);
    this.vel.set(0, 0, 0);
    this.dashCd = this.dashMax;
    this.invuln = Math.max(this.invuln, 0.35);
    this.attack = null;
    this.buffered = false;
    g.audio.play('blink');
    const to = this.pos;
    for (let i = 0; i < 14; i++) {
      const t = i / 13;
      g.fx.add.emit({ x: from.x + (to.x - from.x) * t, y: from.y + 0.8 + rand(-0.4, 0.4), z: from.z + (to.z - from.z) * t, vx: rand(-0.5, 0.5), vy: rand(0, 1), vz: rand(-0.5, 0.5), life: rand(0.25, 0.5), size: 3, endSize: 1, color: '#d8c8ff', color2: '#5a3aff' });
    }
    g.fx.ring(new THREE.Vector3(to.x, g.world.heightAt(to.x, to.z), to.z), 1.6, '#b8a0ff', 0.35);
    g.fx.smoke(to.x, to.y + 0.2, to.z, 8);
  }

  // 추가 스킬 (slot 2, 3). 공격 동작(kind)과 발동 시점(hitAt)에 맞춰 game.castSkill(slot)이 실행됨
  startExtraSkill(input, slot) {
    if (this.dead || this.dashT > 0) return;
    const key = slot === 2 ? 'cd2' : 'cd3';
    if (this.level < SKILL_LEVEL[slot]) return;
    if (this[key] > 0) return;
    if (this.attack && this.attack.t < 0.6) return;
    this[key] = (slot === 2 ? this.cd2Max : this.cd3Max) * this.game.skillCdMul(this, slot);
    this.yaw = this.aimYaw(input);
    this.combo = 0;
    this.buffered = false;
    const g = this.game;
    const T = {
      sword: { 2: { kind: 4, dur: 0.5, hitAt: 0.3 }, 3: { kind: 5, dur: 0.9, hitAt: 0.05 } },
      mage: { 2: { kind: 13, dur: 0.5, hitAt: 0.45 }, 3: { kind: 14, dur: 0.62, hitAt: 0.5 } },
      elf: { 2: { kind: 23, dur: 0.55, hitAt: 0.5 }, 3: { kind: 24, dur: 0.5, hitAt: 0.47 } },
    }[this.cls][slot];
    if (this.cls === 'sword' && this.rig.sheathed) this.drawCut();
    this.attack = { t: 0, kind: T.kind, dur: T.dur, hit: false, hitAt: T.hitAt, skill: true, slot };
    if (this.cls === 'mage') g.audio.play('chant');
    else if (this.cls === 'elf') g.audio.play('bowdraw');
    this.sinceAttack = 0;
    this.lastCombat = g.time;
  }

  startSkill(input) {
    if (this.dead || this.skillCd > 0 || this.dashT > 0) return;
    if (this.cls !== 'sword') {
      this.skillCd = this.skillMax * this.game.skillCdMul(this, 1);
      this.yaw = this.aimYaw(input);
      this.combo = 0;
      if (this.cls === 'mage') {
        this.attack = { t: 0, kind: 11, dur: 0.62, hit: false, hitAt: 0.5, skill: true };
        this.game.audio.play('chant');
      } else {
        this.attack = { t: 0, kind: 21, dur: 0.5, hit: false, hitAt: 0.47, skill: true };
        this.game.audio.play('bowdraw');
      }
      this.lastCombat = this.game.time;
      return;
    }
    this.skillCd = this.skillMax * this.game.skillCdMul(this, 1);
    this.yaw = this.aimYaw(input);
    const fromSheath = this.rig.sheathed;
    if (fromSheath) this.drawCut();
    this.attack = { t: 0, kind: fromSheath ? 3 : 1, dur: fromSheath ? 0.4 : 0.36, hit: true, skill: true };
    this.combo = 0;
    this.sinceAttack = 0;
    if (!fromSheath) this.game.audio.play('swing3');
    this.game.skillSword1(this);
    this.lastCombat = this.game.time;
  }

  damage(dmg, from) {
    if (this.invuln > 0 || this.dead || this.game.godMode) return false;
    dmg = Math.max(1, Math.round(dmg * (1 - (this.def || 0))));
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
    this.cd2 = Math.max(0, (this.cd2 || 0) - dt);
    this.cd3 = Math.max(0, (this.cd3 || 0) - dt);
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
        if (this.ghostT <= 0) { this.ghostT = 0.045; g.fx.ghost(this.rig, this.cls === 'elf' ? '#7ad86a' : '#5ab8ff'); }
        if (this.cls === 'elf' && Math.random() < 0.6) g.fx.norm.emit({ x: this.pos.x + rand(-0.3, 0.3), y: this.pos.y + rand(0.2, 0.9), z: this.pos.z + rand(-0.3, 0.3), vx: rand(-1, 1), vy: rand(0.5, 1.5), vz: rand(-1, 1), wob: 1.5, life: rand(0.5, 0.9), size: 2, color: Math.random() < 0.5 ? '#8ad06a' : '#c8e88a' });
      } else {
        const slow = this.attack ? (this.attack.kind === 5 ? 0.7 : this.attack.skill ? (this.cls === 'sword' ? 0.1 : 0.25) : this.cls === 'sword' ? 0.22 : 0.45) : 1;
        const sp = 4.6 * slow * (this.perks?.has('swift') ? 1.15 : 1);
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
        if (this.attack && !this.attack.skill && this.cls === 'sword') {
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
        if (!a.hit && a.t >= (a.hitAt ?? 0.38)) {
          a.hit = true;
          if (a.slot) g.castSkill(this, a.slot);
          else if (a.skill) g.playerSkillHit(this, a);
          else if (this.cls === 'sword') g.playerSwingHit(this, a.kind);
          else g.playerShoot(this, a.kind);
        }
        if (a.t >= 1) {
          this.attack = null;
          if (this.buffered) { this.buffered = false; this.startAttack(input); }
          else this.comboTimer = 0.35;
        }
      } else if (this.comboTimer <= 0) {
        this.combo = 0;
      }
      // 한동안 베지 않으면 칼을 칼집에 넣음 (납도)
      const r = this.rig;
      if (!this.attack && r.saya) {
        this.sinceAttack = (this.sinceAttack ?? 9) + dt;
        if (!r.sheathed && this.sinceAttack > 0.9 && this.dashT <= 0) {
          r.sheathe();
          this.sheatheT = 0.0001;
        }
      }
      if (this.sheatheT > 0) {
        this.sheatheT += dt / 0.42;
        if (r.justSheathed) { r.justSheathed = false; g.audio.play('sheathe'); }
        if (this.sheatheT >= 1) this.sheatheT = 0;
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
    // 회오리베기: 몸 전체가 세 바퀴 회전
    const spin = this.attack && this.attack.kind === 5 ? Math.min(1, this.attack.t / 0.85) * Math.PI * 6 : 0;
    r.root.rotation.y = this.yaw + spin;
    r.animate(dt, {
      speed: this.dead ? 0 : speed,
      attack: this.attack ? { t: Math.min(1, this.attack.t), kind: ANIM_KIND[this.attack.kind] ?? this.attack.kind } : null,
      sheathing: this.sheatheT > 0 ? Math.min(1, this.sheatheT) : 0,
      dash: this.dashT > 0,
      hurt: this.hurtT / 0.3,
      dead: this.dead,
    });
    // 피격 무적 깜빡임 / 검 빛
    this.blinkT = Math.max(0, (this.blinkT || 0) - dt);
    r.root.visible = this.dead || this.blinkT <= 0 || Math.floor(g.time * 18) % 2 === 0;
    r.setFlash(this.hurtT > 0.2 ? 0.6 : 0);
    if (r.bladeMat) {
      const glow = this.attack ? 0.5 : r.sheathed ? 0 : (g.night > 0.5 ? 0.16 : 0.08); // 뽑은 칼엔 은은한 칼빛
      if (r.glowColor) {
        // 좋은 칼은 뽑으면 고유한 빛
        const k = r.sheathed ? 0 : glow + 0.22 + Math.sin(g.time * 5) * 0.06;
        r.bladeMat.emissive.copy(r.glowColor).multiplyScalar(k * 0.8);
        r.edgeMat.emissive.copy(r.glowColor).multiplyScalar(k * 1.4);
      } else {
        r.bladeMat.emissive.setRGB(glow * 0.6, glow * 0.9, glow);
        r.edgeMat.emissive.setRGB(glow * 1.2, glow * 1.4, glow * 1.6);
      }
    }
    if (r.bowMat && r.glowColor) r.bowMat.emissive.copy(r.glowColor).multiplyScalar(0.3 + Math.sin(g.time * 4) * 0.08 + (this.attack ? 0.3 : 0));
    // 빛나는 무기 주변 반짝이
    if (r.glowColor && !r.sheathed && Math.random() < dt * 14) {
      const wp = r.weapon.getWorldPosition(tmp);
      g.fx.add.emit({ x: wp.x + rand(-0.3, 0.3), y: wp.y + rand(-0.3, 0.5), z: wp.z + rand(-0.3, 0.3), vy: rand(0.2, 0.8), life: rand(0.3, 0.6), size: 2, color: '#ffffff', color2: '#' + r.glowColor.getHexString() });
    }
  }
}

// ===================== 적 =====================
// 도깨비불 계열 색 (몸, 꼬리불, 쏘는 구슬)
const PAL = {
  blue: { core: '#bff4ff', hi: '#e8ffff', idle: '#9feaff', shell: '#3a8cff', trail: '#7fe0ff', trail2: '#1a40ff', orb: '#d8fbff', eye: 0x0a1030, fire: ['#9ff0ff', '#2050ff'] },
  fox: { core: '#ffe0c0', hi: '#fff4e0', idle: '#ffc89a', shell: '#ff6a2a', trail: '#ffb070', trail2: '#ff2a00', orb: '#ffe8c8', eye: 0x3a0a00, fire: ['#ffd08a', '#ff3a00'] },
  ghost: { core: '#f0e0ff', hi: '#ffffff', idle: '#d8c0ff', shell: '#8a4aff', trail: '#c8a0ff', trail2: '#4a1a9a', orb: '#ecdcff', eye: 0x1a0a2a, fire: ['#d8c0ff', '#5a1aaa'] },
};

const TYPES = {
  // 궁궐
  blue: { hp: 46, speed: 2.7, dmg: 10, range: 1.5, windup: 0.5, recover: 0.6, radius: 0.46, exp: 10, ai: 'melee', make: () => makeDokkaebi('blue'), pal: PAL.blue },
  red: { hp: 72, speed: 3.1, dmg: 15, range: 1.6, windup: 0.42, recover: 0.5, radius: 0.48, exp: 16, ai: 'melee', make: () => makeDokkaebi('red'), pal: PAL.blue },
  wisp: { hp: 28, speed: 1.9, dmg: 9, range: 7, windup: 0.6, recover: 1.6, radius: 0.35, exp: 12, ai: 'wisp', pal: PAL.blue },
  boss: { hp: 900, speed: 2.35, dmg: 24, range: 2.7, windup: 0.85, recover: 0.8, radius: 0.95, exp: 200, ai: 'boss', boss: 'dokkaebi', make: () => makeDokkaebi('boss'), pal: PAL.blue, name: '도깨비 대왕 두억시니', summon: ['red', 'blue'] },
  // 죽림
  fox: { hp: 44, speed: 4.4, dmg: 10, range: 1.5, windup: 0.34, recover: 0.5, radius: 0.42, exp: 14, ai: 'melee', lunge: true, make: () => makeFox('fox'), pal: PAL.fox },
  foxfire: { hp: 32, speed: 2.1, dmg: 10, range: 7, windup: 0.5, recover: 1.4, radius: 0.35, exp: 14, ai: 'wisp', pal: PAL.fox },
  gumiho: { hp: 1150, speed: 3.1, dmg: 22, range: 2.4, windup: 0.6, recover: 0.7, radius: 0.95, exp: 320, ai: 'boss', boss: 'gumiho', make: () => makeFox('gumiho'), pal: PAL.fox, name: '천년 구미호', summon: ['fox', 'foxfire'] },
  // 설원 폐사찰
  jiangshi: { hp: 92, speed: 3.2, dmg: 15, range: 1.5, windup: 0.45, recover: 0.6, radius: 0.45, exp: 20, ai: 'melee', hop: true, make: makeJiangshi, pal: PAL.ghost },
  ghost: { hp: 48, speed: 1.8, dmg: 12, range: 6.5, windup: 0.6, recover: 1.6, radius: 0.4, exp: 20, ai: 'wisp', teleport: true, make: makeGhost, pal: PAL.ghost },
  reaper: { hp: 1500, speed: 2.7, dmg: 26, range: 2.8, windup: 0.7, recover: 0.8, radius: 1.0, exp: 450, ai: 'boss', boss: 'reaper', make: makeReaper, pal: PAL.ghost, name: '저승사자', summon: ['ghost', 'jiangshi'] },
};

export class Enemy {
  constructor(game, type, pos, level = 1, opts = {}) {
    this.game = game;
    this.type = type;
    const T = (this.T = TYPES[type]);
    const lv = 1 + (level - 1) * 0.25;
    this.maxHp = Math.round(T.hp * lv);
    this.hp = this.maxHp;
    this.dmg = Math.round(T.dmg * (1 + (level - 1) * 0.15));
    this.radius = T.radius;
    this.isBoss = T.ai === 'boss';
    this.isWisp = T.ai === 'wisp';
    this.name = T.name;
    // 벽·소품과의 충돌 반경은 길찾기 격자와 같게 (좁은 틈에서 끼이지 않도록)
    this.moveR = this.isBoss ? NAV_R[1] : Math.min(T.radius, NAV_R[0]);
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
    this.patCd = 3;
    this.tpCd = rand(6, 9);
    this.hopPh = Math.random();
    this.summoned = 0;
    if (T.make) {
      this.rig = T.make();
      game.scene.add(this.rig.root);
    } else this.buildWisp();
    this.root = this.rig ? this.rig.root : this.wisp;
    this.root.position.copy(this.pos);
    this.root.scale.setScalar(0.01);
    const [f1, f2] = T.pal.fire;
    game.fx.colorFire(pos.x, pos.y, pos.z, this.isBoss ? 80 : 30, this.isBoss ? 1.2 : 0.5, f1, f2);
    game.fx.ring(pos, this.isBoss ? 3 : 1.4, f1, 0.5);
    this.field = !!opts.field;
    this.aggro = !this.field;
    if (!this.field) game.audio.play('spawn');
  }

  buildWisp() {
    const g = new THREE.Group();
    const P = this.T.pal;
    const coreMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(P.core) });
    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.28, 1), coreMat);
    g.add(core);
    const shell = new THREE.Mesh(new THREE.IcosahedronGeometry(0.36, 1), new THREE.MeshBasicMaterial({ color: new THREE.Color(P.shell), transparent: true, opacity: 0.45, depthWrite: false }));
    shell.userData.noOutline = true;
    g.add(shell);
    const eyeM = new THREE.MeshBasicMaterial({ color: P.eye });
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

  center() { return tmp.set(this.pos.x, this.y + (this.isBoss ? 2.0 : this.isWisp ? (this.rig ? 1.2 : 1.3) : 0.8), this.pos.z); }

  hit(dmg, dir, knock = 5, stun = 0.25) {
    if (this.dead || this.spawning) return false;
    this.hp -= dmg;
    this.flashT = 0.12;
    if (!this.isBoss || this.state === 'chase') {
      const k = this.isBoss ? knock * 0.15 : knock;
      this.vel.addScaledVector(dir, k);
      if (!this.isBoss) {
        this.hurtT = stun;
        if (this.state === 'windup' && stun >= 0.25) { this.state = 'chase'; this.attackCd = 0.6; this.clearTele(); }
      }
    }
    if (this.hp <= 0) this.die();
    return true;
  }

  // 빙결: 얼음 덩어리에 갇혀 잠시 못 움직임 (대왕은 면역)
  freeze(dur) {
    if (this.dead || this.isBoss) return;
    this.frozenT = Math.max(this.frozenT || 0, dur);
    this.hurtT = Math.max(this.hurtT, dur);
    if (this.state === 'windup' || this.state === 'strike') { this.state = 'chase'; this.attackCd = 0.8; this.clearTele(); }
    if (!this.ice) {
      const s = this.isWisp ? 0.9 : 1.15 * (this.T.radius / 0.46);
      const mat = new THREE.MeshBasicMaterial({ color: '#a8e4ff', transparent: true, opacity: 0.42, depthWrite: false });
      this.ice = new THREE.Mesh(new THREE.IcosahedronGeometry(0.75 * s, 0), mat);
      this.ice.scale.set(1, 1.35, 1);
      this.game.scene.add(this.ice);
    }
  }

  updateIce(dt) {
    if (!this.ice) return;
    this.frozenT -= dt;
    const y = this.isWisp ? this.y + 1.2 : this.y + 0.75;
    this.ice.position.set(this.pos.x, y, this.pos.z);
    if (this.frozenT <= 0 || this.dead) {
      const g = this.game;
      for (let k = 0; k < 14; k++) g.fx.add.emit({ x: this.pos.x, y: y + rand(-0.4, 0.4), z: this.pos.z, vx: rand(-3, 3), vy: rand(1, 4), vz: rand(-3, 3), g: 12, life: rand(0.3, 0.6), size: 3, endSize: 1, color: '#e8f8ff', color2: '#5aa8ff' });
      g.audio.play('block');
      g.scene.remove(this.ice);
      this.ice.geometry.dispose();
      this.ice.material.dispose();
      this.ice = null;
      this.frozenT = 0;
    }
  }

  die() {
    this.dead = true;
    this.hp = 0;
    this.deadT = 0;
    this.clearTele();
    const g = this.game;
    g.audio.play('poof');
    if (this.isWisp && !this.rig) {
      const [f1, f2] = this.T.pal.fire;
      g.fx.colorFire(this.pos.x, this.y + 1, this.pos.z, 40, 0.4, f1, f2);
      g.fx.ring(new THREE.Vector3(this.pos.x, this.y, this.pos.z), 1.5, f1, 0.4);
    }
    g.onEnemyKilled(this);
  }

  clearTele() {
    if (this.tele) { this.game.fx.removeRing(this.tele); this.tele = null; }
  }

  update(dt) {
    const g = this.game, p = g.player;
    this.updateIce(dt);
    this.st += dt;
    this.flashT = Math.max(0, this.flashT - dt);
    this.hurtT = Math.max(0, this.hurtT - dt);
    this.attackCd -= dt;
    this.leapCd -= dt;

    if (this.dead) {
      this.deadT += dt;
      if (this.isWisp && !this.rig) {
        this.root.scale.setScalar(Math.max(0.01, 1 - this.deadT * 4));
      } else {
        this.rig.animate(dt, { speed: 0, dead: true });
        this.rig.setFlash(Math.max(0, 0.8 - this.deadT * 2));
        if (this.deadT > 0.55 && !this.poofed) {
          this.poofed = true;
          const big = this.isBoss;
          const [f1, f2] = this.T.pal.fire;
          g.fx.smoke(this.pos.x, this.y + 0.3, this.pos.z, big ? 30 : 12);
          g.fx.colorFire(this.pos.x, this.y + 0.2, this.pos.z, big ? 60 : 24, big ? 1.4 : 0.6, f1, f2);
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
      if (Math.random() < 0.6) g.fx.colorFire(this.pos.x, this.pos.y, this.pos.z, 2, this.isBoss ? 1 : 0.4, ...this.T.pal.fire);
      if (this.st >= 0.7) { this.spawning = false; this.state = 'chase'; this.st = 0; this.root.scale.setScalar(1); if (!this.field && (Math.random() < 0.4 || this.isBoss)) g.audio.play(this.T.pal === PAL.blue ? 'laugh' : this.T.pal === PAL.fox ? 'howl' : 'wail'); }
      if (this.isWisp && !this.rig) this.root.position.set(this.pos.x, this.pos.y + 1.3 * k, this.pos.z);
      else this.place(dt, 0);
      return true;
    }

    const dx = p.pos.x - this.pos.x, dz = p.pos.z - this.pos.z;
    const dist = Math.hypot(dx, dz);
    const toYaw = Math.atan2(dx, dz);
    let speed = 0;
    let attackAnim = null;
    const T = this.T;

    // 필드 몬스터: 플레이어를 알아채기 전엔 제자리 근처를 어슬렁, 멀리 달아나면 포기
    if (this.field) {
      if (this.aggro && (dist > 24 || p.dead)) { this.aggro = false; this.home = this.pos.clone(); this.state = 'chase'; this.clearTele(); }
      if (!this.aggro) return this.updateIdle(dt, dist, toYaw);
    }
    if (this.isWisp) return this.updateWisp(dt, dist, toYaw);

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
      } else if (T.boss === 'dokkaebi' && this.leapCd <= 0 && dist > 4.5 && dist < 14) {
        this.state = 'leapPrep'; this.st = 0;
        this.leapTarget = p.pos.clone();
        this.tele = g.fx.ring(this.leapTarget, 3.6, '#ff4a3a', 1, 1);
      } else if (this.isBoss && T.boss !== 'dokkaebi' && this.bossPattern(dt, dist, toYaw)) {
        // 구미호·저승사자 고유 패턴 시작
      } else if (dist > T.range * 0.85 || !sameLevel) {
        let sp = T.speed * (this.isBoss && this.hp < this.maxHp * 0.4 ? 1.25 : 1);
        if (T.hop) {
          // 강시: 뛰어오른 동안만 앞으로 감
          this.hopPh = (this.hopPh + dt * 1.8) % 1;
          const air = this.hopPh < 0.62;
          this.hop = air ? Math.sin((this.hopPh / 0.62) * Math.PI) : 0;
          sp = air ? sp * 1.6 : 0;
          if (!air && !this.landed) { this.landed = true; g.fx.dust(this.pos.x, this.pos.y, this.pos.z, 3); }
          if (air) this.landed = false;
        }
        speed = this.chaseMove(dt, sp, dx, dz, dist);
        // 돌아가는 중엔 가는 방향을, 곧장 갈 땐 플레이어를 바라봄
        this.yaw = dampAngle(this.yaw, this.los ? toYaw : Math.atan2(this.moveX, this.moveZ), 8, dt);
      } else {
        this.yaw = dampAngle(this.yaw, toYaw, 8, dt);
        if (this.attackCd <= 0) {
          this.state = 'windup'; this.st = 0;
          if (this.isBoss) {
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
      if (this.isBoss && this.smashAt) {
        this.smashAt.set(this.pos.x + Math.sin(this.yaw) * 1.6, this.pos.y, this.pos.z + Math.cos(this.yaw) * 1.6);
        if (this.tele) this.tele.m.position.set(this.smashAt.x, this.smashAt.y + 0.04, this.smashAt.z);
      }
      if (this.st >= T.windup) { this.state = 'strike'; this.st = 0; g.audio.play('swing'); }
    } else if (this.state === 'strike') {
      attackAnim = { t: 0.28 + 0.34 * clamp(this.st / 0.12, 0, 1), kind: 2 };
      if (T.lunge && this.st < 0.12) {
        // 여우: 몸을 날려 물기
        g.world.move(this.pos, Math.sin(this.yaw) * 9 * dt, Math.cos(this.yaw) * 9 * dt, this.moveR);
      }
      if (!this.struck && this.st >= 0.08) {
        this.struck = true;
        if (this.isBoss) {
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
    } else if (this.state === 'cast') {
      // 구미호: 여우불 부채 / 저승사자: 검은 초승달 세 줄기
      this.yaw = dampAngle(this.yaw, toYaw, 6, dt);
      attackAnim = { t: 0.28 * clamp(this.st / 0.7, 0, 1), kind: 2 };
      if (Math.random() < 0.9) {
        const [f1, f2] = T.pal.fire;
        g.fx.add.emit({ x: this.pos.x + rand(-1.5, 1.5), y: this.y + rand(0.5, 3), z: this.pos.z + rand(-1.5, 1.5), vx: (this.pos.x - this.pos.x), vy: 0.5, life: 0.35, size: 3, endSize: 1, color: f1, color2: f2 });
      }
      if (this.st >= 0.7) {
        if (T.boss === 'gumiho') for (let k = -3; k <= 3; k++) g.spawnOrb(this, k * 0.2);
        else g.spawnDarkWaves(this);
        this.state = 'recover'; this.st = 0;
      }
    } else if (this.state === 'chargePrep') {
      // 구미호 돌진: 붉은 선으로 경고 후 일직선 질주
      attackAnim = { t: 0.2 * clamp(this.st / 0.6, 0, 1), kind: 2 };
      if (this.st >= 0.65) { this.state = 'charge'; this.st = 0; g.audio.play('dash'); this.chargeHit = false; }
    } else if (this.state === 'charge') {
      const sp = 16;
      const moved = g.world.move(this.pos, Math.sin(this.yaw) * sp * dt, Math.cos(this.yaw) * sp * dt, this.moveR);
      speed = sp;
      if (Math.random() < 0.9) g.fx.colorFire(this.pos.x, this.pos.y + 0.5, this.pos.z, 2, 0.8, ...T.pal.fire);
      if (!this.chargeHit && Math.hypot(p.pos.x - this.pos.x, p.pos.z - this.pos.z) < 1.6 + p.radius) { this.chargeHit = true; p.damage(Math.round(this.dmg * 1.1), this.pos); }
      if (this.st >= 0.55 || !moved) { this.state = 'recover'; this.st = 0; g.fx.dust(this.pos.x, this.pos.y, this.pos.z, 12); g.shake(0.3); }
    } else if (this.state === 'vanish') {
      // 저승사자: 연기 속으로 사라졌다가 플레이어 등 뒤에서 나타남
      const k = clamp(this.st / 0.5, 0, 1);
      this.root.scale.setScalar(Math.max(0.01, 1 - k));
      if (this.st >= 0.5 && !this.reappeared) {
        this.reappeared = true;
        const behind = p.yaw + Math.PI;
        const tx = p.pos.x + Math.sin(behind) * 2.6, tz = p.pos.z + Math.cos(behind) * 2.6;
        const th = g.world.heightAt(tx, tz);
        if (!g.world.isBlocked(tx, tz, this.moveR, th)) { this.pos.set(tx, th, tz); this.y = th; }
        g.fx.smoke(this.pos.x, this.y + 0.5, this.pos.z, 20);
        g.fx.colorFire(this.pos.x, this.y, this.pos.z, 40, 1, ...T.pal.fire);
        g.audio.play('blink');
      }
      if (this.st >= 0.85) {
        this.root.scale.setScalar(1);
        this.yaw = toYaw;
        this.state = 'windup'; this.st = T.windup * 0.35;
        const f = new THREE.Vector3(this.pos.x + Math.sin(this.yaw) * 1.6, this.pos.y, this.pos.z + Math.cos(this.yaw) * 1.6);
        this.tele = g.fx.ring(f, 2.6, '#c84aff', 1, 1);
        this.smashAt = f;
      }
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

  // 구미호·저승사자: 거리와 체력에 따라 고유 패턴을 고름. 시작하면 true
  bossPattern(dt, dist, toYaw) {
    const g = this.game, T = this.T;
    this.patCd -= dt;
    if (this.patCd > 0 || g.player.dead) return false;
    this.patCd = rand(3.2, 4.6) * (this.hp < this.maxHp * 0.4 ? 0.7 : 1);
    this.yaw = toYaw;
    if (T.boss === 'gumiho') {
      if (dist > 4 && Math.random() < 0.5) {
        this.state = 'chargePrep'; this.st = 0;
        // 돌진 경로 경고선
        const from = new THREE.Vector3(this.pos.x, this.y + 0.1, this.pos.z);
        const to = from.clone().add(new THREE.Vector3(Math.sin(toYaw) * 9, 0, Math.cos(toYaw) * 9));
        g.fx.streak(from, to, '#ff4a3a', 0.7, 1.6);
        g.audio.play('howl');
      } else { this.state = 'cast'; this.st = 0; g.audio.play('charge'); }
      return true;
    }
    if (T.boss === 'reaper') {
      if (dist > 3 && Math.random() < 0.45) { this.state = 'vanish'; this.st = 0; this.reappeared = false; g.fx.smoke(this.pos.x, this.y + 0.6, this.pos.z, 20); g.audio.play('wail'); }
      else { this.state = 'cast'; this.st = 0; g.audio.play('charge'); }
      return true;
    }
    return false;
  }

  updateWisp(dt, dist, toYaw) {
    const g = this.game, p = g.player;
    if (this.frozenT > 0) return true;
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
      else if (dist < 3.5) { mx = -ux * 0.6; mz = -uz * 0.6; }
      // 옆걸음은 느릿하게 (원거리 몹이 너무 정신없이 움직이지 않게)
      mx += -uz * this.strafe * 0.3; mz += ux * this.strafe * 0.3;
      if (Math.random() < dt * 0.3) this.strafe *= -1;
      if (this.attackCd <= 0 && dist < 10 && !p.dead) { this.state = 'windup'; this.st = 0; g.audio.play('orb'); }
    } else if (this.state === 'windup') {
      if (Math.random() < 0.8) g.fx.add.emit({ x: this.pos.x + rand(-0.6, 0.6), y: this.y + 1.3 + rand(-0.6, 0.6), z: this.pos.z + rand(-0.6, 0.6), vx: 0, vy: 0, vz: 0, life: 0.3, size: 2, color: this.T.pal.trail });
      if (this.st >= this.T.windup) {
        g.spawnOrb(this);
        this.state = 'chase'; this.st = 0; this.attackCd = rand(2.6, 3.6);
      }
    }
    const len = Math.hypot(mx, mz);
    // 옆걸음·뒷걸음만 할 때는 그만큼 느리게 (정규화하지 않음)
    if (len > 0.01) { const k = Math.min(1, len) / len; g.world.move(this.pos, mx * k * this.T.speed * dt, mz * k * this.T.speed * dt, this.moveR); }
    // 원귀: 가끔 사라졌다가 플레이어 옆에 나타남
    if (this.T.teleport && this.state === 'chase') {
      this.tpCd -= dt;
      if (this.tpCd <= 0 && !p.dead) {
        this.tpCd = rand(8, 12);
        const a = Math.random() * Math.PI * 2;
        const tx = p.pos.x + Math.cos(a) * 3.5, tz = p.pos.z + Math.sin(a) * 3.5;
        const th = g.world.heightAt(tx, tz);
        if (!g.world.isBlocked(tx, tz, this.moveR, th)) {
          g.fx.smoke(this.pos.x, this.y + 0.8, this.pos.z, 10);
          this.pos.set(tx, th, tz); this.y = th;
          g.fx.colorFire(tx, th + 0.5, tz, 20, 0.5, ...this.T.pal.fire);
          g.audio.play('wail');
          this.attackCd = Math.min(this.attackCd, 0.5);
        }
      }
    }
    // 둥실둥실
    const h = g.world.heightAt(this.pos.x, this.pos.z);
    this.y = lerp(this.y, h, 1 - Math.exp(-6 * dt));
    const bob = Math.sin(g.time * 3 + this.strafe) * 0.15;
    if (this.rig) {
      // 사람 모양 귀신: 리그로 애니메이션
      this.root.position.set(this.pos.x, this.y, this.pos.z);
      this.root.rotation.y = this.yaw;
      this.rig.animate(dt, { speed: len > 0.01 ? 1 : 0, attack: this.state === 'windup' ? { t: 0.28 * clamp(this.st / this.T.windup, 0, 1), kind: 2 } : null, hurt: this.hurtT > 0 ? Math.min(1, this.hurtT / 0.25) : 0 });
      this.rig.setFlash(this.flashT > 0 ? 0.9 : this.state === 'windup' ? (Math.floor(this.st * 12) % 2 ? 0.3 : 0) : 0);
      if (Math.random() < 0.4) g.fx.add.emit({ x: this.pos.x + rand(-0.3, 0.3), y: this.y + rand(0.2, 1.4), z: this.pos.z + rand(-0.3, 0.3), vy: rand(0.2, 0.6), life: 0.6, size: 2, color: this.T.pal.trail, color2: this.T.pal.trail2, alpha: 0.7 });
      return true;
    }
    this.root.position.set(this.pos.x, this.y + 1.3 + bob, this.pos.z);
    this.root.rotation.y = this.yaw;
    const pulse = this.state === 'windup' ? 1 + Math.sin(this.st * 40) * 0.12 + this.st * 0.4 : 1;
    this.root.scale.setScalar(pulse);
    const P = this.T.pal;
    this.coreMat.color.set(this.flashT > 0 ? '#ffffff' : this.state === 'windup' ? P.hi : P.idle);
    if (Math.random() < 0.7) g.fx.add.emit({ x: this.pos.x + rand(-0.15, 0.15), y: this.y + 1.45 + bob, z: this.pos.z + rand(-0.15, 0.15), vx: rand(-0.3, 0.3), vy: rand(0.8, 1.6), vz: rand(-0.3, 0.3), life: rand(0.3, 0.6), size: rand(2, 4), endSize: 1, color: P.trail, color2: P.trail2 });
    return true;
  }

  updateIdle(dt, dist, toYaw) {
    const g = this.game, p = g.player;
    if (!p.dead && ((dist < 8.5 && Math.abs(p.pos.y - this.pos.y) < 1.5) || this.hp < this.maxHp)) {
      // 알아챔: 머리 위에 느낌표
      this.aggro = true;
      this.attackCd = Math.max(this.attackCd, 0.5);
      g.fx.number(new THREE.Vector3(this.pos.x, this.y + (this.isWisp ? 2.2 : 2.0), this.pos.z), '!', 'alert');
      // 근처 무리도 함께
      for (const o of g.enemies) if (o !== this && o.field && !o.aggro && !o.dead && Math.hypot(o.pos.x - this.pos.x, o.pos.z - this.pos.z) < 6) o.aggro = true;
      return true;
    }
    if (this.vel.lengthSq() > 0.001) {
      g.world.move(this.pos, this.vel.x * dt, this.vel.z * dt, this.moveR);
      this.vel.multiplyScalar(Math.exp(-9 * dt));
    }
    if (!this.home) this.home = this.pos.clone();
    this.wanderT = (this.wanderT ?? rand(0.5, 2)) - dt;
    if (this.wanderT <= 0) {
      this.wanderT = rand(2, 5);
      const a = Math.random() * Math.PI * 2, r = Math.random() * 4;
      this.wanderTo = Math.random() < 0.35 ? null : { x: this.home.x + Math.cos(a) * r, z: this.home.z + Math.sin(a) * r };
    }
    let speed = 0;
    if (this.wanderTo) {
      const dx = this.wanderTo.x - this.pos.x, dz = this.wanderTo.z - this.pos.z;
      const l = Math.hypot(dx, dz);
      if (l > 0.3) {
        const sp = this.T.speed * 0.35;
        if (!g.world.move(this.pos, (dx / l) * sp * dt, (dz / l) * sp * dt, this.moveR)) this.wanderTo = null;
        this.yaw = dampAngle(this.yaw, Math.atan2(dx, dz), 5, dt);
        speed = sp;
      } else this.wanderTo = null;
    }
    if (this.isWisp && !this.rig) {
      const h = g.world.heightAt(this.pos.x, this.pos.z);
      this.y = lerp(this.y, h, 1 - Math.exp(-6 * dt));
      this.root.position.set(this.pos.x, this.y + 1.3 + Math.sin(g.time * 3 + this.strafe) * 0.15, this.pos.z);
      this.root.rotation.y = this.yaw;
      this.root.scale.setScalar(1);
      this.coreMat.color.set(this.flashT > 0 ? '#ffffff' : this.T.pal.idle);
    } else if (this.isWisp) {
      const h = g.world.heightAt(this.pos.x, this.pos.z);
      this.y = lerp(this.y, h, 1 - Math.exp(-6 * dt));
      this.root.position.set(this.pos.x, this.y, this.pos.z);
      this.root.rotation.y = this.yaw;
      this.rig.animate(dt, { speed: speed > 0 ? 1 : 0 });
      this.rig.setFlash(this.flashT > 0 ? 0.9 : 0);
    } else {
      if (this.T.hop) this.hop = 0;
      this.place(dt, speed);
    }
    return true;
  }

  // 추격 이동: 곧장 갈 수 있으면 직선(살짝 옆으로 돌아 들어옴), 막혀 있으면 흐름장 길찾기,
  // 그래도 제자리에 걸리면 잠깐 옆으로 비켜서 빠져나옴. 반환: 실제 이동 속도
  chaseMove(dt, sp, dx, dz, dist) {
    const w = this.game.world, p = this.game.player;
    const big = this.isBoss ? 1 : 0;
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
    r.animate(dt, { speed, hop: this.hop || 0, attack: attackAnim, hurt: this.frozenT > 0 ? 0.3 : this.hurtT > 0 ? Math.min(1, this.hurtT / 0.25) : 0 });
    // 공격 준비 중엔 붉게 깜빡임, 피격 시 흰색
    if (this.flashT > 0) r.setFlash(0.9);
    else if (this.state === 'windup' && !this.isBoss) r.setFlash(Math.floor(this.st * 14) % 2 ? 0.35 : 0);
    else if (this.state === 'windup' || this.state === 'leapPrep') r.setFlash(Math.floor(this.st * 10) % 2 ? 0.25 : 0);
    else r.setFlash(0);
  }

  dispose() {
    this.clearTele();
    if (this.ice) { this.game.scene.remove(this.ice); this.ice = null; }
    this.game.scene.remove(this.root);
  }
}

// ===================== NPC =====================
export class NPC {
  constructor(game, kind, x, z, yaw, name, lines) {
    this.game = game;
    this.kind = kind;
    this.rig = kind === 'guard' ? makeGuard()
      : kind === 'herb' ? makeLady({ robe: '#c8b890', sleeve: '#c8b890', cuff: '#5a7a3a', skirt: '#6a5a3a', pants: '#6a5a3a', hair: '#3a2a20' })
      : kind === 'hermit' ? makeMage({ robe: '#c8c8c0', sleeve: '#c8c8c0', cuff: '#4a4a5a', belt: '#4a4a5a', pants: '#5a5a62', hair: '#e8e8e8' })
      : makeLady();
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
