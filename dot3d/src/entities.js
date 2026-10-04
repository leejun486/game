import * as THREE from 'three';
import { disposeTree, drop } from './dispose.js';
import { Rig, makeDokkaebi, makeGuard, makeLady, makeMage, makeFox, makeJiangshi, makeGhost, makeReaper, makeWaterGhost, makeToad, makeImugi, makeStoneGolem, makeBulgasari, makeYeomra, makeDragon, makeCentipede, makeFrostGiant } from './character.js';
import { makeCrow, makeCrab, makeJelly, makeTurtle, makeBee, makeMantis, makeBeast } from './rigs2.js';
import { CLASSES } from './classes.js';
import { outfitLook, gearLook } from './character.js';
import { sumStats, gearColor, setBonuses } from './gear.js';
import { item, WEAPONS, perksOf, ULTS } from './items.js';

// 스킬 해금 레벨
export const SKILL_LEVEL = { 2: 3, 3: 5 };
// 레벨이 오를수록 가파르게 (Lv.10 약 1.7배, Lv.20 약 2.2배 — 플레이 시간에 맞춤)
export const expNeed = (lv) => Math.round(50 + lv * 40 + lv * lv * 1.4);
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
    this.cd2 = 0; this.cd3 = 0; this.ultCd = 0;
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
    const type = { sword: 'hero', mage: 'mage', elf: 'elf', lancer: 'lancer' }[this.cls];
    const old = this.rig;
    const gl = {};
    for (const g of this.game.equippedGear(this.cls)) if (g.kind !== 'ring') gl[g.kind] = gearColor(g);
    this.rig = this.cfg.make({ wstyle: w?.style, ...outfitLook(type, o), ...gearLook(gl) });
    if (old) {
      this.game.scene.remove(old.root);
      disposeTree(old.root);
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
    // 방어구·장신구 옵션 합계
    const gs = (this.gear = sumStats(this.game.equippedGear(this.cls)));
    this.maxHp = Math.round(this.cfg.hp + (this.level - 1) * 12 + (o?.hp || 0) + (gs.hp || 0));
    this.atkMul = (1 + (this.level - 1) * 0.08) * (1 + (w?.atk || 0)) * (1 + (gs.atk || 0));
    this.def = Math.min(0.7, 1 - (1 - (o?.def || 0)) * (1 - (gs.def || 0)));
    this.perks = perksOf(pr.weapon, pr.outfit);
    // 보스 무기 고유 기술
    this.ult = w?.ult || null;
    this.ultMax = this.ult ? ULTS[this.ult].cd : 0;
    for (const g of this.game.equippedGear(this.cls)) if (g.perk) this.perks.add(g.perk);
    // 세트 4개 효과의 고유 능력
    for (const k of setBonuses(this.game.equippedGear(this.cls)).perks) this.perks.add(k);
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
    this.exp += Math.round(n * (1 + (this.gear?.exp || 0)));
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

  aimYaw(input, range = this.cls === 'sword' ? 3.6 : this.cls === 'lancer' ? 5 : 11) {
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
    if (this.cls === 'lancer') {
      // 창술사: 찌르기 → 찌르기 → 휘둘러 베기
      const kind = [30, 31, 32][this.combo % 3];
      this.combo++;
      this.yaw = this.aimYaw(input);
      this.attack = { t: 0, kind, dur: kind === 32 ? 0.46 : 0.34, hit: false, hitAt: kind === 32 ? 0.45 : 0.42 };
      this.game.audio.play(kind === 32 ? 'swing3' : 'thrust');
      this.lastCombat = this.game.time;
      this.sinceAttack = 0;
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
    this.dashAt = this.game.time; this.dodged = false;
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
    this.dashAt = g.time; this.dodged = false;
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
      lancer: { 2: { kind: 34, dur: 0.85, hitAt: 0.12 }, 3: { kind: 35, dur: 0.6, hitAt: 0.45 } },
    }[this.cls][slot];
    if (this.cls === 'sword' && this.rig.sheathed) this.drawCut();
    this.attack = { t: 0, kind: T.kind, dur: T.dur, hit: false, hitAt: T.hitAt, skill: true, slot };
    if (this.cls === 'mage') g.audio.play('chant');
    else if (this.cls === 'elf') g.audio.play('bowdraw');
    this.sinceAttack = 0;
    this.lastCombat = g.time;
  }

  // 보스 무기 고유 기술 (U): 3번 스킬 동작을 빌려 쓰고 효과는 game.castUlt
  startUlt(input) {
    if (this.dead || !this.ult || this.ultCd > 0 || this.dashT > 0) return false;
    if (this.attack && this.attack.t < 0.6) return false;
    if (!this.game.enemies.some((e) => !e.dead && !e.spawning && Math.hypot(e.pos.x - this.pos.x, e.pos.z - this.pos.z) < 10)) {
      this.game.ui.toast('주변에 적이 없어요', 1.2);
      return false;
    }
    this.ultCd = this.ultMax * (1 - Math.min(0.4, this.gear?.cdr || 0));
    this.yaw = this.aimYaw(input);
    this.combo = 0;
    this.buffered = false;
    const kind = { sword: 5, mage: 14, elf: 24, lancer: 35 }[this.cls];
    if (this.cls === 'sword' && this.rig.sheathed) this.drawCut();
    this.attack = { t: 0, kind, dur: 0.7, hit: true, skill: true };
    this.sinceAttack = 0;
    this.lastCombat = this.game.time;
    this.game.castUlt(this);
    return true;
  }

  startSkill(input) {
    if (this.dead || this.skillCd > 0 || this.dashT > 0) return;
    if (this.cls === 'lancer') {
      this.skillCd = this.skillMax * this.game.skillCdMul(this, 1);
      this.yaw = this.aimYaw(input);
      this.combo = 0;
      this.attack = { t: 0, kind: 33, dur: 0.5, hit: false, hitAt: 0.42, skill: true };
      this.lastCombat = this.game.time;
      this.sinceAttack = 0;
      return;
    }
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

  // 불붙음 (화염 도깨비, 용암 분화구): 0.5초마다 작은 피해
  burnFor(t) {
    if (this.dead) return;
    if (this.perks?.has('ironhide')) t *= 0.4;
    this.burnT = Math.max(this.burnT || 0, t);
  }

  // 느려짐 (물귀신에게 붙잡힘, 두꺼비 독)
  slowFor(t, msg) {
    if (this.dead) return;
    if (this.perks?.has('carapace')) t *= 0.5;
    if (!(this.slowT > 0.3) && msg) this.game.ui.toast(msg, 1.2);
    this.slowT = Math.max(this.slowT || 0, t);
  }

  damage(dmg, from) {
    if (this.invuln > 0 || this.dead || this.game.godMode) {
      // 완벽한 회피: 피하기 직후(0.35초 안) 공격을 흘려보내면 시간이 느려지고 반격 기회
      if (this.invuln > 0 && !this.dead && !this.dodged && this.game.time - (this.dashAt ?? -9) < 0.35) { this.dodged = true; this.game.perfectDodge(from); }
      return false;
    }
    // 용비늘: 10초마다 한 번 공격을 막음
    if (this.perks?.has('scales') && this.game.time - (this.scaleT ?? -99) > 10) {
      this.scaleT = this.game.time;
      this.invuln = 0.5;
      const g = this.game;
      g.fx.ring(new THREE.Vector3(this.pos.x, this.pos.y, this.pos.z), 1.4, '#2affd0', 0.35);
      g.fx.spark(this.pos.x, this.pos.y + 1, this.pos.z, 14, '#bffff0', 5);
      g.audio.play('block');
      g.fx.number(this.pos.clone().add(new THREE.Vector3(0, 1.9, 0)), '비늘 막기!', 'alert');
      return false;
    }
    dmg = Math.max(1, Math.round(dmg * (1 - (this.def || 0)) * (this.perks?.has('ironhide') ? 0.88 : 1) * (this.perks?.has('tigerhide') ? 0.92 : 1) * (this.perks?.has('carapace') ? 0.9 : 1) * (this.perks?.has('winterheart') ? 0.94 : 1) * (this.guardT > 0 ? 0.6 : 1)));
    this.hp -= dmg;
    // 동장군 옷: 맞으면 20% 확률로 주변 적을 얼림
    if (this.perks?.has('winterheart') && Math.random() < 0.2) {
      const g0 = this.game;
      g0.fx.ring(new THREE.Vector3(this.pos.x, this.pos.y, this.pos.z), 3, '#bfeaff', 0.35);
      for (const e of g0.enemies) if (!e.dead && !e.isBoss && Math.hypot(e.pos.x - this.pos.x, e.pos.z - this.pos.z) < 3) e.freeze(1.2);
    }
    this.invuln = 0.7;
    this.blinkT = 0.7;
    this.hurtT = 0.3;
    this.lastCombat = this.game.time;
    const g = this.game;
    g.fx.number(this.pos.clone().add(new THREE.Vector3(0, 1.7, 0)), dmg, 'player');
    g.audio.play('hurt');
    g.shake(0.25);
    g.screenFlash(0.25, '#ff3030');
    if (from && !this.perks?.has('ironhide')) {
      tmp.subVectors(this.pos, from).setY(0).normalize();
      this.vel.addScaledVector(tmp, 7);
    }
    if (this.hp <= 0 && !this.tryRebirth()) {
      this.hp = 0;
      this.dead = true;
      g.onPlayerDeath();
    }
    return true;
  }

  // 환생(염라 곤룡포): 쓰러질 피해를 받으면 3분에 한 번 체력 40%로 버팀
  tryRebirth() {
    const g = this.game;
    if (!this.perks?.has('rebirth') || g.time - (this.rebirthT ?? -999) < 180) return false;
    this.rebirthT = g.time;
    this.hp = Math.round(this.maxHp * 0.4);
    this.invuln = 2;
    this.burnT = 0;
    g.fx.ring(new THREE.Vector3(this.pos.x, this.pos.y, this.pos.z), 3, '#ff4a5a', 0.6);
    g.fx.colorFire(this.pos.x, this.pos.y + 0.5, this.pos.z, 50, 0.8, '#ffd0d0', '#c8102a');
    g.audio.play('levelup');
    g.ui.banner('환생', '염라의 곤룡포가 목숨을 지켰다', 2, 'win-banner');
    return true;
  }

  update(dt, input) {
    const g = this.game;
    this.dashCd = Math.max(0, this.dashCd - dt);
    this.skillCd = Math.max(0, this.skillCd - dt);
    this.cd2 = Math.max(0, (this.cd2 || 0) - dt);
    this.cd3 = Math.max(0, (this.cd3 || 0) - dt);
    this.ultCd = Math.max(0, (this.ultCd || 0) - dt);
    if (this.burnT > 0 && !this.dead) {
      this.burnT -= dt;
      this.burnAcc = (this.burnAcc || 0) + dt;
      if (Math.random() < dt * 14) g.fx.add.emit({ x: this.pos.x + rand(-0.3, 0.3), y: this.pos.y + rand(0.2, 1.3), z: this.pos.z + rand(-0.3, 0.3), vy: rand(1, 2), life: 0.4, size: 3, endSize: 1, color: '#ffd070', color2: '#ff2a00' });
      if (this.burnAcc >= 0.5) {
        this.burnAcc -= 0.5;
        const d = Math.max(1, Math.round(this.maxHp * 0.012));
        this.hp -= d;
        g.fx.number(this.pos.clone().add(new THREE.Vector3(0, 1.8, 0)), d, 'player');
        if (this.hp <= 0 && !this.tryRebirth()) { this.hp = 0; this.dead = true; g.onPlayerDeath(); }
      }
    }
    // 용궁 옷: 3초마다 최대 체력의 2% 회복
    if (this.perks?.has('pearl') && !this.dead && this.hp < this.maxHp) {
      this.pearlAcc = (this.pearlAcc || 0) + dt;
      if (this.pearlAcc >= 3) { this.pearlAcc = 0; this.hp = Math.min(this.maxHp, this.hp + Math.max(1, Math.round(this.maxHp * 0.02))); }
    }
    if (this.slowT > 0) {
      this.slowT -= dt;
      if (Math.random() < dt * 12) g.fx.add.emit({ x: this.pos.x + rand(-0.35, 0.35), y: this.pos.y + rand(0.1, 1.2), z: this.pos.z + rand(-0.35, 0.35), vy: -0.6, life: 0.5, size: 2, color: '#8af0c8', color2: '#1a5a4a' });
    }
    this.invuln = Math.max(0, this.invuln - dt);
    this.hurtT = Math.max(0, this.hurtT - dt);
    this.comboTimer -= dt;
    // 각인: 호신(피해 감소)·질풍(빠른 걸음)
    if (this.guardT > 0) this.guardT -= dt;
    if (this.galeT > 0) { this.galeT -= dt; if (Math.random() < dt * 14) g.fx.add.emit({ x: this.pos.x + rand(-0.3, 0.3), y: this.pos.y + 0.15, z: this.pos.z + rand(-0.3, 0.3), vy: 0.6, life: 0.35, size: 2, color: '#d0ffe8', color2: '#3ac890' }); }

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
        const slow = this.attack ? (this.attack.kind === 5 ? 0.7 : this.attack.skill ? (this.cls === 'sword' || this.cls === 'lancer' ? 0.1 : 0.25) : this.cls === 'sword' || this.cls === 'lancer' ? 0.22 : 0.45) : 1;
        // 얕은 물·붙잡힘·독: 걸음이 느려짐
        const wet = g.world.wet.length && g.world.inWater(this.pos.x, this.pos.z);
        const sp = 4.6 * slow * (this.perks?.has('swift') ? 1.15 : 1) * (this.perks?.has('tigerhide') ? 1.1 : 1) * (1 + (this.gear?.spd || 0)) * (wet ? 0.62 : 1) * (this.slowT > 0 ? 0.55 : 1) * (this.galeT > 0 ? 1.4 : 1);
        if (wet && input.moveLen > 0.1 && Math.random() < dt * 14) g.fx.add.emit({ x: this.pos.x + rand(-0.3, 0.3), y: this.pos.y + 0.08, z: this.pos.z + rand(-0.3, 0.3), vx: rand(-1, 1), vy: rand(1, 2.2), vz: rand(-1, 1), g: 10, life: 0.35, size: 2, color: '#d8fff4', color2: '#4a9a9a' });
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
        if (this.attack && !this.attack.skill && (this.cls === 'sword' || this.cls === 'lancer')) {
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
          else if (this.cls === 'lancer') g.playerSpearHit(this, a.kind);
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
    // 장비 옵션: 초당 체력 회복 (싸우는 중에도)
    if (!this.dead && this.gear?.regen && this.hp < this.maxHp) this.hp = Math.min(this.maxHp, this.hp + dt * this.gear.regen);

    // 리그
    const r = this.rig;
    r.root.position.set(this.pos.x, this.y + (this.hopH || 0), this.pos.z); // hopH: 낙화창 도약 높이
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
  hell: { core: '#ffd8d8', hi: '#ffffff', idle: '#ff9a9a', shell: '#c8102a', trail: '#ff6a6a', trail2: '#5a0010', orb: '#ffc8c8', eye: 0x2a0000, fire: ['#ff9a8a', '#7a0018'] },
  fire: { core: '#fff0c0', hi: '#ffffff', idle: '#ffc070', shell: '#ff5a1a', trail: '#ffa040', trail2: '#c82000', orb: '#ffd8a0', eye: 0x2a0800, fire: ['#ffd070', '#ff2a00'] },
  autumn: { core: '#ffe0b0', hi: '#ffffff', idle: '#ffb070', shell: '#c8461a', trail: '#ff9a4a', trail2: '#8a1a0a', orb: '#ffd0a0', eye: 0x2a0a00, fire: ['#ffb060', '#c82a0a'] },
  sea: { core: '#d0f0ff', hi: '#ffffff', idle: '#9ad8ff', shell: '#2a6aff', trail: '#8ac8ff', trail2: '#1a3aaa', orb: '#c8e8ff', eye: 0x061a3a, fire: ['#a8e0ff', '#2a5aff'] },
  summer: { core: '#f0ffc0', hi: '#ffffff', idle: '#d8f07a', shell: '#6ab02a', trail: '#c8f06a', trail2: '#3a7a1a', orb: '#e8ffa0', eye: 0x1a2a00, fire: ['#e0ff8a', '#4a9a1a'] },
  ice: { core: '#f0fbff', hi: '#ffffff', idle: '#bfeaff', shell: '#6ac8ff', trail: '#d8f4ff', trail2: '#3a8ad8', orb: '#e8f8ff', eye: 0x0a2a4a, fire: ['#e8f8ff', '#4aa8ff'] },
  water: { core: '#c8fff0', hi: '#ffffff', idle: '#9af0d8', shell: '#2a9a8a', trail: '#8ae8d0', trail2: '#1a5a6a', orb: '#b8ffd8', eye: 0x062a20, fire: ['#a8ffe0', '#1a7a8a'] },
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
  foxclone: { hp: 70, speed: 2.4, dmg: 12, range: 7, windup: 0.6, recover: 1.5, radius: 0.6, exp: 4, ai: 'wisp', make: () => makeFox('clone'), pal: PAL.fox },
  // 물안개 늪: 물귀신은 물속에서 빨라지고 붙잡아 느리게 함, 두꺼비는 독침(맞으면 느려짐)
  waterghost: { hp: 110, speed: 2.9, dmg: 16, range: 1.5, windup: 0.5, recover: 0.6, radius: 0.42, exp: 26, ai: 'melee', aquatic: true, grab: true, make: makeWaterGhost, pal: PAL.water },
  toad: { hp: 120, speed: 1.6, dmg: 14, range: 7, windup: 0.7, recover: 1.6, radius: 0.55, exp: 26, ai: 'wisp', poison: true, make: makeToad, pal: PAL.water },
  imugi: { hp: 2100, speed: 2.6, dmg: 30, range: 3.0, windup: 0.75, recover: 0.8, radius: 1.1, exp: 650, ai: 'boss', boss: 'imugi', aquatic: true, make: makeImugi, pal: PAL.water, name: '천년 이무기', summon: ['waterghost', 'toad'] },
  // 불가사리 협곡: 화염 도깨비는 맞으면 불이 붙음, 돌장승은 단단해서(얼면 약해짐) 주먹으로 땅을 내려침
  firedok: { hp: 130, speed: 3.3, dmg: 17, range: 1.6, windup: 0.42, recover: 0.5, radius: 0.48, exp: 32, ai: 'melee', burn: true, make: () => makeDokkaebi('fire'), pal: PAL.fire },
  stonegolem: { hp: 330, speed: 1.7, dmg: 26, range: 1.9, windup: 0.9, recover: 1.0, radius: 0.62, exp: 48, ai: 'melee', armor: 0.5, slam: 1.9, make: makeStoneGolem, pal: PAL.fire },
  bulgasari: { hp: 2900, speed: 2.5, dmg: 33, range: 3.1, windup: 0.8, recover: 0.8, radius: 1.2, exp: 900, ai: 'boss', boss: 'bulgasari', leap: true, make: makeBulgasari, pal: PAL.fire, name: '쇠먹는 불가사리', summon: ['firedok', 'stonegolem'] },
  // 단풍 산성: 산적 도깨비, 까마귀 요괴(깃털 세 발을 부채꼴로), 범(몸을 날려 덮침)
  bandit: { hp: 150, speed: 3.3, dmg: 19, range: 1.6, windup: 0.42, recover: 0.5, radius: 0.5, exp: 36, ai: 'melee', make: () => makeDokkaebi('bandit'), pal: PAL.autumn },
  crow: { hp: 72, speed: 2.6, dmg: 15, range: 7.5, windup: 0.5, recover: 1.4, radius: 0.4, exp: 34, ai: 'wisp', volley: 3, make: makeCrow, pal: PAL.autumn },
  tiger: { hp: 200, speed: 4.6, dmg: 22, range: 1.7, windup: 0.38, recover: 0.55, radius: 0.55, exp: 46, ai: 'melee', lunge: true, make: () => makeBeast('tiger'), pal: PAL.autumn },
  baekho: { hp: 3600, speed: 3.0, dmg: 36, range: 2.8, windup: 0.65, recover: 0.7, radius: 1.15, exp: 1150, ai: 'boss', boss: 'baekho', leap: true, make: () => makeBeast('baekho'), pal: PAL.autumn, name: '산군 백호', summon: ['tiger', 'bandit'] },
  // 용궁: 꽃게 병사(단단함), 해파리(독 방울 — 맞으면 느려짐), 거북 장군(아주 단단, 내려찍기)
  crab: { hp: 210, speed: 3.0, dmg: 21, range: 1.7, windup: 0.45, recover: 0.55, radius: 0.55, exp: 44, ai: 'melee', armor: 0.3, make: makeCrab, pal: PAL.sea },
  jelly: { hp: 110, speed: 1.7, dmg: 18, range: 7, windup: 0.6, recover: 1.5, radius: 0.42, exp: 42, ai: 'wisp', poison: true, make: makeJelly, pal: PAL.sea },
  turtle: { hp: 460, speed: 1.6, dmg: 30, range: 2.0, windup: 0.85, recover: 1.0, radius: 0.7, exp: 64, ai: 'melee', armor: 0.5, slam: 2.2, make: makeTurtle, pal: PAL.sea },
  dragon: { hp: 4400, speed: 2.7, dmg: 37, range: 3.1, windup: 0.75, recover: 0.8, radius: 1.2, exp: 1500, ai: 'boss', boss: 'dragon', aquatic: true, make: makeDragon, pal: PAL.sea, name: '동해 용왕', summon: ['crab', 'jelly'] },
  // 청류 계곡: 멧돼지(덮치는 돌진), 사마귀 요괴(빠른 낫질), 왕벌 요괴(독침 — 맞으면 느려짐)
  boar: { hp: 260, speed: 4.2, dmg: 25, range: 1.7, windup: 0.45, recover: 0.6, radius: 0.6, exp: 54, ai: 'melee', lunge: true, make: () => makeBeast('boar'), pal: PAL.summer },
  mantis: { hp: 190, speed: 3.6, dmg: 27, range: 1.9, windup: 0.36, recover: 0.5, radius: 0.5, exp: 52, ai: 'melee', make: makeMantis, pal: PAL.summer },
  bee: { hp: 110, speed: 3.0, dmg: 20, range: 7, windup: 0.45, recover: 1.2, radius: 0.38, exp: 48, ai: 'wisp', poison: true, make: makeBee, pal: PAL.summer },
  centipede: { hp: 5000, speed: 3.0, dmg: 40, range: 3.0, windup: 0.7, recover: 0.75, radius: 1.15, exp: 1800, ai: 'boss', boss: 'centipede', make: makeCentipede, pal: PAL.summer, name: '천년 왕지네', summon: ['mantis', 'bee'] },
  // 백설 고원: 눈늑대(덮침), 얼음 도깨비(맞으면 몸이 얼어 느려짐), 서리 도깨비불(얼음 구슬)
  wolf: { hp: 260, speed: 4.8, dmg: 27, range: 1.6, windup: 0.34, recover: 0.5, radius: 0.5, exp: 58, ai: 'melee', lunge: true, make: () => makeBeast('wolf'), pal: PAL.ice },
  icedok: { hp: 330, speed: 3.0, dmg: 30, range: 1.7, windup: 0.5, recover: 0.6, radius: 0.55, exp: 62, ai: 'melee', frost: true, make: () => makeDokkaebi('ice'), pal: PAL.ice },
  icewisp: { hp: 140, speed: 2.2, dmg: 24, range: 7, windup: 0.55, recover: 1.4, radius: 0.38, exp: 56, ai: 'wisp', poison: true, pal: PAL.ice },
  frostgiant: { hp: 6000, speed: 2.4, dmg: 45, range: 3.3, windup: 0.9, recover: 0.85, radius: 1.4, exp: 2200, ai: 'boss', boss: 'frost', leap: true, make: makeFrostGiant, pal: PAL.ice, name: '서리 거인 동장군', summon: ['wolf', 'icedok'] },
  // 시련탑 10층마다: 염라대왕
  yeomra: { hp: 4200, speed: 2.5, dmg: 36, range: 3.2, windup: 0.8, recover: 0.8, radius: 1.2, exp: 1500, ai: 'boss', boss: 'yeomra', make: makeYeomra, pal: PAL.hell, name: '염라대왕', summon: ['jiangshi', 'ghost'] },
  reaper: { hp: 1500, speed: 2.7, dmg: 26, range: 2.8, windup: 0.7, recover: 0.8, radius: 1.0, exp: 450, ai: 'boss', boss: 'reaper', make: makeReaper, pal: PAL.ghost, name: '저승사자', summon: ['ghost', 'jiangshi'] },
};

export class Enemy {
  constructor(game, type, pos, level = 1, opts = {}) {
    this.game = game;
    this.type = type;
    this.lvl = level;
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
    this.phase = 1;
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
    // 정예: 더 크고 단단하고 아픔, 금빛 기운
    this.sizeMul = 1;
    if (opts.elite) {
      this.elite = true;
      this.maxHp = this.hp = Math.round(this.maxHp * 2.6);
      this.dmg = Math.round(this.dmg * 1.4);
      this.sizeMul = 1.25;
      this.name = '정예';
    }
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
    if (this.dead || this.spawning || this.state === 'submerged' || this.state === 'roar') return false;
    this.hp -= dmg;
    // 보스 단계: 체력 66%·33% 아래로 떨어지면 포효하며 다음 단계로
    if (this.isBoss && this.hp > 0) {
      const ph = this.hp < this.maxHp * 0.33 ? 3 : this.hp < this.maxHp * 0.66 ? 2 : 1;
      if (ph > this.phase) { this.phase = ph; this.game.bossPhase(this, ph); }
    }
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

  burnFor(dur, dps) {
    if (this.dead) return;
    this.burnT = Math.max(this.burnT || 0, dur);
    this.burnDps = Math.max(this.burnDps || 0, dps);
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
    // 불붙음: 0.5초마다 피해
    if (this.burnT > 0 && !this.dead && !this.spawning) {
      this.burnT -= dt;
      this.burnAcc = (this.burnAcc || 0) + dt;
      if (Math.random() < dt * 10) g.fx.add.emit({ x: this.pos.x + rand(-0.3, 0.3), y: this.y + rand(0.3, 1.2), z: this.pos.z + rand(-0.3, 0.3), vy: rand(1, 2), life: 0.4, size: 3, endSize: 1, color: '#ffd070', color2: '#ff2a00' });
      if (this.burnAcc >= 0.5) {
        this.burnAcc -= 0.5;
        const d = Math.max(1, Math.round(this.burnDps * 0.5));
        this.hp -= d;
        g.fx.number(this.center().clone().add(new THREE.Vector3(0, 0.6, 0)), d, 'burn');
        if (this.hp <= 0) { this.die(); return true; }
      }
    }
    if (this.isBoss && this.phase > 1 && !this.dead && Math.random() < dt * (this.phase === 3 ? 30 : 14)) { const c = this.phase === 3 ? ['#ff8a6a', '#c80a1a'] : this.T.pal.fire; g.fx.add.emit({ x: this.pos.x + rand(-1, 1), y: this.y + rand(0.3, 3), z: this.pos.z + rand(-1, 1), vy: rand(1, 2.5), life: 0.6, size: rand(3, 4), endSize: 1, color: c[0], color2: c[1] }); }
    if (this.elite && !this.dead && Math.random() < dt * 8) g.fx.add.emit({ x: this.pos.x + rand(-0.5, 0.5), y: this.y + rand(0.2, 1.6), z: this.pos.z + rand(-0.5, 0.5), vy: rand(0.6, 1.4), life: 0.6, size: 3, endSize: 1, color: '#fff0a0', color2: '#ffb000' });
    // 불가사리: 체력이 줄수록 쇠바늘이 달아오름
    if (this.T.boss === 'bulgasari' && this.rig.setHeat) this.rig.setHeat(clamp((0.6 - this.hp / this.maxHp) / 0.4, 0, 1));

    if (this.dead) {
      this.deadT += dt;
      if (this.isWisp && !this.rig) {
        this.root.scale.setScalar(Math.max(0.01, 1 - this.deadT * 4));
      } else {
        this.rig.animate(dt, { speed: 0, dead: true });
        // 쓰러지는 동안 하얗게 바래며 몸이 살짝 작아짐
        this.rig.setFlash(Math.min(1, 0.4 + this.deadT * 1.4));
        if (!this.isBoss) this.root.scale.setScalar(this.sizeMul * Math.max(0.6, 1 - Math.max(0, this.deadT - 0.25) * 0.8));
        if (this.deadT > 0.55 && !this.poofed) {
          this.poofed = true;
          const big = this.isBoss;
          const [f1, f2] = this.T.pal.fire;
          g.fx.smoke(this.pos.x, this.y + 0.3, this.pos.z, big ? 30 : 12);
          g.fx.colorFire(this.pos.x, this.y + 0.2, this.pos.z, big ? 60 : 24, big ? 1.4 : 0.6, f1, f2);
          g.fx.coins(this.pos.x, this.y, this.pos.z, big ? 30 : 6);
          // 넋: 빛 알갱이 몇 개가 위로 흩어져 오름
          for (let k = 0; k < (big ? 30 : 8); k++) g.fx.add.emit({ x: this.pos.x + rand(-0.4, 0.4), y: this.y + rand(0.3, 1.2), z: this.pos.z + rand(-0.4, 0.4), vx: rand(-0.6, 0.6), vy: rand(1.5, 3.5), vz: rand(-0.6, 0.6), wob: 1, life: rand(0.6, 1.1), size: 2.5, endSize: 1, color: '#ffffff', color2: f1 });
          g.audio.play('coin');
          this.root.visible = false;
        }
      }
      return this.deadT < 1.2;
    }

    // 등장
    if (this.spawning) {
      const k = smooth(clamp(this.st / 0.7, 0, 1));
      this.root.scale.setScalar(Math.max(0.01, k) * this.sizeMul);
      if (Math.random() < 0.6) g.fx.colorFire(this.pos.x, this.pos.y, this.pos.z, 2, this.isBoss ? 1 : 0.4, ...this.T.pal.fire);
      if (this.st >= 0.7) { this.spawning = false; this.state = this.introRoar ? 'roar' : 'chase'; this.st = 0; this.root.scale.setScalar(this.sizeMul); if (!this.field && (Math.random() < 0.4 || this.isBoss)) g.audio.play(this.T.pal === PAL.blue ? 'laugh' : this.T.pal === PAL.fox || this.T.pal === PAL.autumn ? 'howl' : 'wail'); }
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
      } else if ((T.boss === 'dokkaebi' || T.leap) && this.leapCd <= 0 && dist > (this.phase === 3 ? 1.5 : 4.5) && dist < 14) {
        this.state = 'leapPrep'; this.st = 0;
        this.leapTarget = p.pos.clone();
        this.tele = g.fx.ring(this.leapTarget, 3.6, '#ff4a3a', 1, 1);
      } else if (this.isBoss && this.bossPattern(dt, dist, toYaw)) {
        // 보스 고유 패턴 시작
        // 구미호·저승사자 고유 패턴 시작
      } else if (dist > T.range * 0.85 || !sameLevel) {
        let sp = T.speed * (this.isBoss ? 1 + 0.14 * (this.phase - 1) : 1) * this.waterMul();
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
        } else if (T.slam) {
          // 돌장승: 앞쪽 땅을 내려쳐 둥근 충격파
          g.bossSlam(this, new THREE.Vector3(this.pos.x + Math.sin(this.yaw) * 1.1, this.pos.y, this.pos.z + Math.cos(this.yaw) * 1.1), T.slam, this.dmg);
        } else {
          const fx = Math.sin(this.yaw), fz = Math.cos(this.yaw);
          const hx = this.pos.x + fx * 0.9, hz = this.pos.z + fz * 0.9;
          g.fx.dust(hx, this.pos.y, hz, 5);
          if (Math.hypot(p.pos.x - hx, p.pos.z - hz) < 1.05 + p.radius && Math.abs(p.pos.y - this.pos.y) < 1) {
            if (p.damage(this.dmg, this.pos)) { if (T.grab) p.slowFor(1.6, '물귀신에게 붙잡혔다!'); if (T.burn) p.burnFor(3); if (T.frost) p.slowFor(1.4, '몸이 얼어붙는다!'); }
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
        if (T.boss === 'dokkaebi') g.goldRain(this);
        else if (T.boss === 'gumiho') { for (let k = -3; k <= 3; k++) g.spawnOrb(this, k * 0.2); if (this.phase === 3) g.orbRing(this, 16, 0.3); }
        else if (T.boss === 'imugi') { for (let k = -4; k <= 4; k++) g.spawnOrb(this, k * 0.16, { slow: 1.2 }); if (this.phase >= 2) g.geysers(this); }
        else if (T.boss === 'bulgasari') { g.ironRain(this); if (this.phase === 3) g.after(0.7, () => { if (!this.dead) g.ironRain(this); }); }
        else if (T.boss === 'centipede') { for (let k = -3; k <= 3; k++) g.spawnOrb(this, k * 0.2, { slow: 1.2 }); if (this.phase >= 2) g.orbRing(this, 12, 0.25); }
        else if (T.boss === 'frost') { g.iceRain(this); if (this.phase >= 2) g.orbRing(this, 14, 0); if (this.phase === 3) g.after(0.8, () => { if (!this.dead) g.iceRain(this); }); }
        else if (T.boss === 'baekho') { for (let k = -2; k <= 2; k++) g.spawnOrb(this, k * 0.22); if (this.phase >= 2) g.orbRing(this, this.phase === 3 ? 16 : 12, 0.2); }
        else if (T.boss === 'dragon') {
          if (this.castKind === 'storm') g.verdict(this, this.phase >= 2 ? 5 : 3);
          else { for (let k = -4; k <= 4; k++) g.spawnOrb(this, k * 0.16, { slow: 1.2 }); if (this.phase >= 2) g.geysers(this); }
          if (this.phase === 3) g.orbRing(this, 16, 0.1);
        }
        else if (T.boss === 'yeomra') { if (this.castKind === 'verdict') g.verdict(this, this.phase >= 2 ? 5 : 3); else g.spawnDarkWaves(this); if (this.phase === 3) g.orbRing(this, 20, 0); }
        else { g.spawnDarkWaves(this); if (this.phase >= 2) g.markChase(this); if (this.phase === 3) g.after(0.5, () => { if (!this.dead) g.spawnDarkWaves(this); }); }
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
      if (T.boss === 'bulgasari' && this.phase >= 2 && Math.random() < dt * 12) g.addBurnZone(this.pos.x, this.pos.z, 1.0, 4);
      if (this.st >= 0.55 || !moved) {
        this.state = 'recover'; this.st = 0; g.fx.dust(this.pos.x, this.pos.y, this.pos.z, 12); g.shake(0.3);
        // 불가사리 3단계: 세 번 연달아 들이받음
        if ((T.boss === 'bulgasari' || T.boss === 'baekho' || T.boss === 'centipede') && this.phase === 3) {
          this.chargeLeft = (this.chargeLeft ?? 3) - 1;
          if (this.chargeLeft > 0) {
            this.state = 'chargePrep'; this.st = 0.25;
            this.yaw = toYaw;
            const from = new THREE.Vector3(this.pos.x, this.y + 0.1, this.pos.z);
            g.fx.streak(from, from.clone().add(new THREE.Vector3(Math.sin(toYaw) * 9, 0, Math.cos(toYaw) * 9)), '#ff6a2a', 0.5, 2.2);
          } else this.chargeLeft = undefined;
        }
      }
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
    } else if (this.state === 'roar') {
      // 단계 전환: 몸을 크게 젖히며 포효 (이 동안은 무적)
      attackAnim = { t: 0.28 * clamp(this.st / 0.4, 0, 1), kind: 2 };
      this.yaw = dampAngle(this.yaw, toYaw, 4, dt);
      if (this.st >= 1.3 && !g.cine) { this.state = 'chase'; this.st = 0; this.introRoar = false; this.patCd = 0.6; this.attackCd = 0.5; }
    } else if (this.state === 'spin') {
      // 이무기: 꼬리를 크게 휘둘러 주위를 쓸어버림
      if (this.tele) this.tele.mat.uniforms.uProg.value = this.st / 1.0;
      this.yaw += dt * (this.st < 1 ? 1.5 : 14);
      if (this.st >= 1.0 && !this.struck) {
        this.struck = true;
        this.clearTele();
        g.bossSlam(this, new THREE.Vector3(this.pos.x, this.y, this.pos.z), 5, Math.round(this.dmg * 1.1), true);
      }
      if (this.st >= 1.45) { this.state = 'recover'; this.st = 0; this.struck = false; }
    } else if (this.state === 'dive') {
      // 이무기: 물보라를 일으키며 땅(물) 속으로
      const k = clamp(this.st / 0.6, 0, 1);
      this.jumpY = -k * 3.5;
      if (Math.random() < 0.8) g.fx.add.emit({ x: this.pos.x + rand(-1.5, 1.5), y: this.y + 0.2, z: this.pos.z + rand(-1.5, 1.5), vx: rand(-2, 2), vy: rand(3, 6), vz: rand(-2, 2), g: 14, life: 0.6, size: 3, color: '#c8fff0', color2: '#2a8a9a' });
      if (k >= 1) {
        this.state = 'submerged'; this.st = 0;
        this.root.visible = false;
        this.emergeAt = p.pos.clone();
        this.tele = g.fx.ring(this.emergeAt, 3.4, '#2affd0', 1, 1);
      }
    } else if (this.state === 'submerged') {
      // 물밑에서 플레이어를 쫓다가 멈춰 솟구칠 자리를 정함
      if (this.st < 0.6) this.emergeAt.lerp(p.pos, Math.min(1, dt * 4));
      if (this.tele) { this.tele.m.position.set(this.emergeAt.x, g.world.heightAt(this.emergeAt.x, this.emergeAt.z) + 0.04, this.emergeAt.z); this.tele.mat.uniforms.uProg.value = this.st / 1.1; }
      if (Math.random() < 0.7) g.fx.add.emit({ x: this.emergeAt.x + rand(-2, 2), y: 0.1, z: this.emergeAt.z + rand(-2, 2), vy: rand(0.5, 1.5), life: 0.5, size: 2, color: '#a8ffe0' });
      if (this.st >= 1.1) {
        const h = g.world.heightAt(this.emergeAt.x, this.emergeAt.z);
        if (!g.world.isBlocked(this.emergeAt.x, this.emergeAt.z, this.moveR * 0.7, h)) { this.pos.set(this.emergeAt.x, h, this.emergeAt.z); this.y = h; }
        this.root.visible = true;
        this.jumpY = 0;
        this.clearTele();
        this.yaw = toYaw;
        this.rig.trail = [];
        g.bossSlam(this, this.pos.clone(), 3.4, Math.round(this.dmg * 1.15), true);
        for (let i = 0; i < 50; i++) g.fx.add.emit({ x: this.pos.x + rand(-1, 1), y: this.y + 0.3, z: this.pos.z + rand(-1, 1), vx: rand(-4, 4), vy: rand(5, 11), vz: rand(-4, 4), g: 16, life: rand(0.6, 1.1), size: rand(3, 5), endSize: 1, color: '#e8fff8', color2: '#2a9aaa' });
        this.state = 'recover'; this.st = 0;
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
        this.leapCd = rand(6, 9) * (this.phase === 2 ? 0.8 : 1);
        // 3단계: 쉬지 않고 세 번 연달아 뛰어내림
        if (this.phase === 3) {
          this.leapLeft = (this.leapLeft ?? 3) - 1;
          if (this.leapLeft > 0 && !g.player.dead) {
            this.state = 'leapPrep'; this.st = 0.3;
            this.leapTarget = g.player.pos.clone();
            this.tele = g.fx.ring(this.leapTarget, 3.6, '#ff4a3a', 1, 1);
          } else { this.leapLeft = undefined; this.leapCd = rand(4, 6); }
        }
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
    this.patCd = rand(3.2, 4.6) * (this.phase === 3 ? 0.6 : this.phase === 2 ? 0.8 : 1);
    if (T.boss === 'dokkaebi') {
      // 두억시니 2단계부터: "금 나와라 뚝딱!" 금덩이를 뿌려 터뜨림
      if (this.phase < 2 || Math.random() < 0.4) { this.patCd *= 0.5; return false; }
      this.yaw = toYaw;
      this.state = 'cast'; this.st = 0; g.audio.play('laugh');
      return true;
    }
    this.yaw = toYaw;
    // 이무기 3단계: 꼬리 휘두르기 (주위 큰 원)
    if ((T.boss === 'imugi' || T.boss === 'dragon' || T.boss === 'centipede') && this.phase === 3 && dist < 5 && Math.random() < 0.45) {
      this.state = 'spin'; this.st = 0;
      this.tele = g.fx.ring(new THREE.Vector3(this.pos.x, this.y, this.pos.z), 5, '#2affd0', 1, 1);
      g.audio.play('charge');
      return true;
    }
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
    if (T.boss === 'yeomra') {
      // 사라졌다 등 뒤에서 / 판결(연달아 떨어지는 붉은 벼락) / 검은 초승달
      const r = Math.random();
      if (dist > 3 && r < 0.3) { this.state = 'vanish'; this.st = 0; this.reappeared = false; g.fx.smoke(this.pos.x, this.y + 0.6, this.pos.z, 20); g.audio.play('wail'); }
      else { this.state = 'cast'; this.st = 0; this.castKind = r < 0.65 ? 'verdict' : 'waves'; g.audio.play('charge'); }
      return true;
    }
    if (T.boss === 'bulgasari') {
      // 들이받기 / 쇳조각 비 (돌진 경로·떨어질 자리를 미리 보여줌)
      if (dist > 4 && Math.random() < 0.45) {
        this.state = 'chargePrep'; this.st = 0;
        const from = new THREE.Vector3(this.pos.x, this.y + 0.1, this.pos.z);
        const to = from.clone().add(new THREE.Vector3(Math.sin(toYaw) * 9, 0, Math.cos(toYaw) * 9));
        g.fx.streak(from, to, '#ff6a2a', 0.7, 2.2);
        g.audio.play('slam');
      } else { this.state = 'cast'; this.st = 0; g.audio.play('charge'); }
      return true;
    }
    if (T.boss === 'baekho') {
      // 백호: 산을 가르는 돌진(3단계는 세 번) / 바람 발톱 부채 (2단계부터 사방으로 포효)
      if (dist > 4 && Math.random() < 0.45) {
        this.state = 'chargePrep'; this.st = 0;
        const from = new THREE.Vector3(this.pos.x, this.y + 0.1, this.pos.z);
        const to = from.clone().add(new THREE.Vector3(Math.sin(toYaw) * 9, 0, Math.cos(toYaw) * 9));
        g.fx.streak(from, to, '#ff8a3a', 0.7, 1.8);
        g.audio.play('howl');
      } else { this.state = 'cast'; this.st = 0; g.audio.play('charge'); }
      return true;
    }
    if (T.boss === 'centipede') {
      // 왕지네: 경고선 돌진(3단계는 세 번) / 독액 부채
      if (dist > 4 && Math.random() < 0.45) {
        this.state = 'chargePrep'; this.st = 0;
        const from = new THREE.Vector3(this.pos.x, this.y + 0.1, this.pos.z);
        g.fx.streak(from, from.clone().add(new THREE.Vector3(Math.sin(toYaw) * 9, 0, Math.cos(toYaw) * 9)), '#aaff3a', 0.7, 1.8);
        g.audio.play('charge');
      } else { this.state = 'cast'; this.st = 0; g.audio.play('charge'); }
      return true;
    }
    if (T.boss === 'frost') {
      // 동장군: 고드름 비(푸른 원) — 도약은 leap으로 따로
      this.state = 'cast'; this.st = 0; g.audio.play('freeze');
      return true;
    }
    if (T.boss === 'dragon') {
      // 용왕: 물속으로 잠겼다가 발밑에서 / 벼락 폭풍 / 물줄기 부채
      const r = Math.random();
      if (r < (dist > 3.5 ? 0.4 : 0.25)) { this.state = 'dive'; this.st = 0; g.audio.play('dash'); }
      else { this.state = 'cast'; this.st = 0; this.castKind = r < 0.65 ? 'storm' : 'tide'; g.audio.play('charge'); }
      return true;
    }
    if (T.boss === 'imugi') {
      // 물속으로 잠겼다가 플레이어 발밑에서 솟구침 / 물줄기 부채
      if (Math.random() < (dist > 3.5 ? 0.55 : 0.35)) { this.state = 'dive'; this.st = 0; g.audio.play('dash'); }
      else { this.state = 'cast'; this.st = 0; g.audio.play('charge'); }
      return true;
    }
    if (T.boss === 'reaper') {
      if (dist > 3 && Math.random() < (this.phase === 3 ? 0.65 : 0.45)) { this.state = 'vanish'; this.st = 0; this.reappeared = false; g.fx.smoke(this.pos.x, this.y + 0.6, this.pos.z, 20); g.audio.play('wail'); }
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
        if (this.T.volley) for (let k = 0; k < this.T.volley; k++) g.spawnOrb(this, (k - (this.T.volley - 1) / 2) * 0.25);
        else g.spawnOrb(this);
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
    this.root.scale.setScalar(pulse * this.sizeMul);
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
      this.root.scale.setScalar(this.sizeMul);
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

  // 얕은 물: 물에 사는 것들은 빨라지고 나머지는 느려짐
  waterMul() {
    if (!this.game.world.wet.length || !this.game.world.inWater(this.pos.x, this.pos.z)) return 1;
    return this.T.aquatic ? 1.3 : this.isBoss ? 0.85 : 0.7;
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
    this.removed = true;
    this.clearTele();
    if (this.ice) { drop(this.game.scene, this.ice); this.ice = null; }
    drop(this.game.scene, this.root);
  }
}

// ===================== NPC =====================
export class NPC {
  constructor(game, kind, x, z, yaw, name, lines) {
    this.game = game;
    this.kind = kind;
    this.rig = kind === 'guard' ? makeGuard()
      : kind === 'smith' ? new Rig({ type: 'guard', scale: 1.18, skin: '#c89070', robe: '#5a4030', sleeve: '#c89070', cuff: '#3a2a20', belt: '#2a2020', collar: '#3a2a20', pants: '#3a3030', hair: '#2a2220', weapon: 'club' })
      : kind === 'ferry' ? new Rig({ type: 'guard', scale: 1.08, skin: '#d8b090', robe: '#8a7a5a', sleeve: '#8a7a5a', cuff: '#5a4a3a', belt: '#5a4a3a', collar: '#e8e0cc', pants: '#4a4038', hair: '#dcd8d0', weapon: 'spear' })
      : kind === 'captain' ? new Rig({ type: 'guard', scale: 1.12, skin: '#d8a880', robe: '#8a2a24', sleeve: '#8a2a24', cuff: '#2a2a30', belt: '#e0b040', collar: '#2a2a30', pants: '#2a2a30', hair: '#1a1410', weapon: 'spear' })
      : kind === 'envoy' ? makeLady({ robe: '#3a8aa8', sleeve: '#3a8aa8', cuff: '#f0c040', skirt: '#1e4a7a', pants: '#1e4a7a', hair: '#1a2a3a' })
      : kind === 'hunter' ? new Rig({ type: 'guard', scale: 1.1, skin: '#c89070', robe: '#6a5a3a', sleeve: '#6a5a3a', cuff: '#3a2a1a', belt: '#c8302c', collar: '#3a2a1a', pants: '#4a4030', hair: '#1a1410', weapon: 'spear' })
      : kind === 'ginseng' ? makeMage({ robe: '#8a7a6a', sleeve: '#8a7a6a', cuff: '#4a3a2a', belt: '#4a3a2a', pants: '#5a4a3a', hair: '#f0ece4' })
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
