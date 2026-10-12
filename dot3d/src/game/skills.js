// Game의 한 부분: 스킬·고유 기술·투사체 연출 (검기·부적·화살·번개·용·회오리·유성…)
//  main.js의 Game 클래스에서 떼어 낸 메서드들 (main.js가 Game.prototype에 붙임 — this는 game)
import * as THREE from 'three';
import { ULTS } from '../items.js';
import { rand, angleDiff } from '../util.js';
import { drop } from '../dispose.js';
import { spearHit, lancerSkill1, lancerSkill2, lancerSkill3, updateLancer, clearLancer } from '../lancer.js';
import { V } from './shared.js';

export class SkillsPart {
  spawnSwordWave(pl, o = {}) {
    const yaw = pl.yaw + (o.yawOff || 0);
    const sc = o.scale || 1;
    const dir = V(Math.sin(yaw), 0, Math.cos(yaw));
    const feet = V(pl.pos.x, pl.y, pl.pos.z);
    const pos = V(pl.pos.x, pl.y + 0.75, pl.pos.z).addScaledVector(dir, 0.6);
    const pr = { owner: 'player', kind: 'wave', pos, dir, yaw, speed: o.speed || 16, life: o.life || 0.6, dmg: Math.round(34 * (o.dmgMul || 1)), hitSet: new Set(), radius: 1.3 * sc, trailT: 0, scale: sc, knock: o.knock, stun: o.stun, cols: o.color, burn: o.burn, burnT: 0, mul: o.dmgMul || 1 };
    const follow = (a) => a.g.position.copy(pr.pos);
    const [c1, c2, c3] = o.color || ['#2f7dff', '#8fe4ff', '#ffffff'];
    const dur = pr.life;
    pr.vis = [
      this.fx.slash(pos, yaw, 0, { inner: 0.25, outer: 2.0, len: 2.4, dur, color: c1, static: true, move: follow, scale: sc }),
      this.fx.slash(pos, yaw, 0, { inner: 0.9, outer: 1.85, len: 2.2, dur, color: c2, static: true, move: follow, scale: sc }),
      this.fx.slash(pos, yaw, 0, { inner: 1.55, outer: 1.8, len: 2.0, dur, color: c3, static: true, move: follow, scale: sc }),
    ];
    this.projectiles.push(pr);
    if (o.quiet) return;
    // 시전 연출
    this.audio.play('skill');
    this.fx.ring(feet, 2.6, '#7fd8ff', 0.4);
    this.fx.ring(feet, 1.3, '#ffffff', 0.22);
    this.fx.spark(pos.x, pos.y, pos.z, 18, '#d8f6ff', 7);
    for (let i = 0; i < 24; i++) {
      const a = (i / 24) * Math.PI * 2;
      this.fx.add.emit({ x: feet.x + Math.cos(a) * 0.4, y: feet.y + 0.08, z: feet.z + Math.sin(a) * 0.4, vx: Math.cos(a) * 5, vy: rand(0.2, 1.2), vz: Math.sin(a) * 5, drag: 4, life: rand(0.25, 0.45), size: 3, endSize: 1, color: '#bff4ff', color2: '#2050ff' });
    }
    this.ui.flash('#3a8cff', 0.18);
    this.hitstop = Math.max(this.hitstop, 0.05);
    this.shake(0.22);
  }

  // 검기 비행 중 연출
  swordWaveTrail(pr, dt) {
    const fx = this.fx;
    // 천열참 Ⅲ: 갈라진 땅에 불길
    if (pr.burn) { pr.burnT -= dt; if (pr.burnT <= 0) { pr.burnT = 0.09; this.fires.push({ pos: V(pr.pos.x, this.world.heightAt(pr.pos.x, pr.pos.z), pr.pos.z), t: 0, dur: 2.6, tick: 0, mul: pr.mul * 0.6 }); } }
    pr.trailT -= dt;
    if (pr.trailT <= 0) {
      pr.trailT = 0.03;
      fx.slash(pr.pos.clone(), pr.yaw, 0, { inner: 0.6, outer: 1.95, len: 2.3, dur: 0.18, color: pr.cols ? pr.cols[0] : '#2a5cff', static: true, fadeAll: true, scale: pr.scale || 1 });
    }
    const side = V(pr.dir.z, 0, -pr.dir.x);
    for (let k = 0; k < 5; k++) {
      const a = rand(-1.1, 1.1);
      const r = rand(1.2, 1.9);
      const x = pr.pos.x + (pr.dir.x * Math.cos(a) + side.x * Math.sin(a)) * r;
      const z = pr.pos.z + (pr.dir.z * Math.cos(a) + side.z * Math.sin(a)) * r;
      fx.add.emit({ x, y: pr.pos.y + rand(-0.15, 0.25), z, vx: -pr.dir.x * rand(2, 5), vy: rand(0, 1.2), vz: -pr.dir.z * rand(2, 5), drag: 3, life: rand(0.25, 0.5), size: rand(2, 4), endSize: 1, color: '#e0faff', color2: '#2050ff' });
    }
    // 바닥에 남는 서리 자국
    const h = this.world.heightAt(pr.pos.x, pr.pos.z);
    for (let k = 0; k < 3; k++) {
      const l = rand(-1.3, 1.3);
      fx.add.emit({ x: pr.pos.x + side.x * l, y: h + 0.06, z: pr.pos.z + side.z * l, life: rand(0.5, 0.9), size: 2, color: '#7fd8ff', alpha: 0.8 });
    }
  }

  swordWaveEnd(pr) {
    const fx = this.fx;
    for (const a of pr.vis) a.kill = true;
    this.audio.play('burst');
    fx.ring(V(pr.pos.x, this.world.heightAt(pr.pos.x, pr.pos.z), pr.pos.z), 2.2, '#7fd8ff', 0.35);
    for (let i = 0; i < 36; i++) {
      const a = Math.random() * Math.PI * 2, e = rand(-0.3, 1);
      fx.add.emit({ x: pr.pos.x, y: pr.pos.y, z: pr.pos.z, vx: Math.cos(a) * rand(2, 6), vy: e * 4, vz: Math.sin(a) * rand(2, 6), g: 6, drag: 2.5, life: rand(0.3, 0.7), size: rand(2, 4), endSize: 1, color: '#e0faff', color2: '#1a40ff' });
    }
  }

  // ---------- 도사 · 요정 공격 ----------
  playerShoot(pl, kind) {
    const third = kind % 10 === 2;
    if (pl.cls === 'mage') {
      const yaws = third ? [-0.28, 0, 0.28] : [0];
      for (const o of yaws) this.spawnTalisman(pl, pl.yaw + o, third ? 15 : 19);
      this.audio.play(third ? 'talisman3' : 'talisman');
    } else {
      const yaws = third ? [-0.14, 0, 0.14] : [0];
      for (const o of yaws) this.spawnArrow(pl, pl.yaw + o, { dmg: third ? 14 : 16 });
      this.audio.play('bow');
    }
  }

  // 창술사 기본 공격 (lancer.js)
  playerSpearHit(pl, kind) { spearHit(this, pl, kind); }

  playerSkillHit(pl, a) {
    this.skillRunes(pl, 1, () => this.playerSkillHit(pl, a));
    if (pl.cls === 'lancer') { lancerSkill1(this, pl); return; }
    const br = this.branch(pl, 1), r = this.rank(pl, 1), M = this.rankPow(pl, 1);
    if (pl.cls === 'mage') {
      if (br === 'a') this.castLightning(pl, { mul: M, storm: { dur: r >= 3 ? 6 : 4.2, tick: r >= 3 ? 0.38 : 0.55, hits: r >= 5 ? 2 : 1, R: r >= 5 ? 6 : 4.6 } });
      else if (br === 'b') this.castLightning(pl, { R: 3.9, mult: 1.9, mul: M, stun: 1.3, big: true, after: r >= 3, chain: r >= 5 });
      else this.castLightning(pl);
    } else if (pl.cls === 'elf') {
      if (br === 'a') {
        // 폭풍 연사: 여러 번 연달아
        const vol = r >= 5 ? 5 : r >= 3 ? 4 : 3, n = r >= 5 ? 9 : 7;
        for (let k = 0; k < vol; k++) this.after(k * 0.16, () => { if (!pl.dead) this.windArrows(pl, { n, spread: 0.11, dmg: 17 * M, quiet: k > 0 }); });
      } else if (br === 'b') this.bigArrow(pl, { n: r >= 3 ? 3 : 1, boom: r >= 5, mul: M });
      else this.windArrows(pl);
    }
  }

  // 요정 관통 극궁: 거대한 빛의 화살 한 대
  bigArrow(pl, o = {}) {
    const offs = o.n === 3 ? [-0.22, 0, 0.22] : [0];
    for (const off of offs) {
      this.spawnArrow(pl, pl.yaw + off, { dmg: Math.round(140 * (o.mul || 1)), pierce: true, glow: true, speed: 30, life: 0.95, big: true });
      const pr = this.projectiles[this.projectiles.length - 1];
      pr.boom = o.boom; pr.mul = o.mul || 1;
    }
    const feet = V(pl.pos.x, pl.y, pl.pos.z);
    const hp = this.handPos(pl);
    this.fx.circle(feet, 2.4, '#d8ffb0', 0.8, -3);
    for (let k = 0; k < 4; k++) this.after(k * 0.05, () => this.fx.ring(hp.clone().add(V(Math.sin(pl.yaw) * k * 0.9, 0, Math.cos(pl.yaw) * k * 0.9)), 1.0 + k * 0.5, k ? '#e8ffc8' : '#ffffff', 0.3));
    this.fx.spark(hp.x, hp.y, hp.z, 24, '#f0ffd8', 8);
    this.audio.play('bowskill');
    this.audio.play('thunder');
    this.ui.flash('#c8ff9a', 0.3);
    this.shake(0.45);
    this.hitstop = Math.max(this.hitstop, 0.06);
  }

  handPos(pl, out = V()) {
    return out.set(pl.pos.x + Math.sin(pl.yaw) * 0.5, pl.y + 0.95, pl.pos.z + Math.cos(pl.yaw) * 0.5);
  }

  spawnTalisman(pl, yaw, dmg) {
    const dir = V(Math.sin(yaw), 0, Math.cos(yaw));
    const pos = this.handPos(pl);
    const g = new THREE.Group();
    const paper = new THREE.Mesh(new THREE.PlaneGeometry(0.24, 0.36), new THREE.MeshBasicMaterial({ color: '#f6d870', side: THREE.DoubleSide }));
    const ink = new THREE.Mesh(new THREE.PlaneGeometry(0.06, 0.26), new THREE.MeshBasicMaterial({ color: '#c8302c', side: THREE.DoubleSide }));
    ink.position.z = 0.002;
    paper.add(ink);
    g.add(paper);
    g.position.copy(pos);
    this.scene.add(g);
    this.projectiles.push({ owner: 'player', kind: 'talisman', pos, dir, yaw, speed: 13, life: 0.8, dmg, mesh: g, paper, radius: 0.5, hitSet: new Set(), knock: 4, stun: 0.3 });
  }

  // 불부적 폭발: 맞은 적과 주변 적에게 불길
  talismanBurst(pr) {
    const fx = this.fx;
    const p = pr.pos;
    this.audio.play('talismanhit');
    fx.ring(V(p.x, this.world.heightAt(p.x, p.z), p.z), 1.7, '#ffb050', 0.3);
    for (let i = 0; i < 26; i++) {
      const a = Math.random() * Math.PI * 2, s = rand(1.5, 4.5);
      fx.add.emit({ x: p.x, y: p.y, z: p.z, vx: Math.cos(a) * s, vy: rand(0.5, 3.5), vz: Math.sin(a) * s, g: 3, drag: 3, life: rand(0.25, 0.55), size: rand(2, 5), endSize: 1, color: '#fff2a0', color2: '#ff3a10', flicker: 0.3 });
    }
    fx.smoke(p.x, p.y - 0.2, p.z, 5);
    for (const e of this.enemies) {
      if (e.dead || e.spawning || e === pr.hitEnemy) continue;
      if (Math.hypot(e.pos.x - p.x, e.pos.z - p.z) < 1.5 + e.radius) this.damageEnemy(e, Math.round(pr.dmg * 0.6), false, 3, 0.2);
    }
  }

  spawnArrow(pl, yaw, { dmg = 16, pierce = false, glow = false, speed = 26, life = 0.55, big = false } = {}) {
    const dir = V(Math.sin(yaw), 0, Math.cos(yaw));
    const pos = this.handPos(pl);
    const g = this.makeArrowMesh(glow);
    g.position.copy(pos);
    g.rotation.y = yaw;
    if (big) g.scale.set(3, 3, 2.6);
    this.scene.add(g);
    this.projectiles.push({ owner: 'player', kind: 'arrow', pos, dir, yaw, speed, life, dmg, mesh: g, radius: big ? 1.2 : 0.4, hitSet: new Set(), pierce, glow, big, knock: big ? 10 : pierce ? 5 : 3, stun: big ? 0.6 : pierce ? 0.3 : 0.18 });
  }

  makeArrowMesh(glow) {
    const g = new THREE.Group();
    const shaftM = new THREE.MeshBasicMaterial({ color: glow ? '#c8ff9a' : '#9a7a52' });
    const shaft = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 0.78), shaftM);
    const head = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.14, 4), new THREE.MeshBasicMaterial({ color: glow ? '#ffffff' : '#d8dde4' }));
    head.rotation.x = Math.PI / 2;
    head.position.z = 0.44;
    const fl = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.02, 0.14), new THREE.MeshBasicMaterial({ color: glow ? '#8aff6a' : '#f0ece0' }));
    fl.position.z = -0.32;
    g.add(shaft, head, fl);
    return g;
  }

  // 불부적·화살이 날아가는 동안
  missileTrail(pr, dt) {
    const fx = this.fx;
    if (pr.kind === 'talisman') {
      pr.paper.rotation.z += dt * 18;
      pr.paper.rotation.y = Math.sin(this.time * 20) * 0.5;
      pr.mesh.position.copy(pr.pos);
      for (let k = 0; k < 2; k++) fx.add.emit({ x: pr.pos.x + rand(-0.1, 0.1), y: pr.pos.y + rand(-0.1, 0.1), z: pr.pos.z + rand(-0.1, 0.1), vx: -pr.dir.x * 2 + rand(-0.4, 0.4), vy: rand(0.4, 1.4), vz: -pr.dir.z * 2 + rand(-0.4, 0.4), life: rand(0.2, 0.4), size: rand(2, 4), endSize: 1, color: '#ffe080', color2: '#ff3010', flicker: 0.3 });
    } else {
      pr.mesh.position.copy(pr.pos);
      if (pr.big) {
        for (let k = 0; k < 8; k++) fx.add.emit({ x: pr.pos.x + rand(-0.3, 0.3), y: pr.pos.y + rand(-0.3, 0.3), z: pr.pos.z + rand(-0.3, 0.3), vx: -pr.dir.x * 4 + rand(-1, 1), vy: rand(-0.5, 1), vz: -pr.dir.z * 4 + rand(-1, 1), life: rand(0.3, 0.6), size: rand(3, 5), endSize: 1, color: '#ffffff', color2: '#7aff5a' });
      } else if (pr.glow) {
        for (let k = 0; k < 2; k++) fx.add.emit({ x: pr.pos.x + rand(-0.08, 0.08), y: pr.pos.y + rand(-0.08, 0.08), z: pr.pos.z + rand(-0.08, 0.08), vx: -pr.dir.x * 3, vy: rand(0, 0.6), vz: -pr.dir.z * 3, life: rand(0.2, 0.4), size: rand(2, 3), endSize: 1, color: '#e8ffc8', color2: '#3aa83a' });
      } else if (Math.random() < 0.6) {
        fx.add.emit({ x: pr.pos.x, y: pr.pos.y, z: pr.pos.z, life: 0.12, size: 2, color: '#fff8e0', alpha: 0.6 });
      }
    }
    // 벽·높은 바닥에 부딪히면 끝
    const h = this.world.heightAt(pr.pos.x, pr.pos.z);
    if (h > pr.pos.y - 0.3) pr.life = 0;
  }

  // 앞쪽 가까운 적 (없으면 n걸음 앞 지점)
  aimPoint(pl, ahead = 5, range = 11) {
    if (this.validTarget(this.target)) { const t = this.target; return V(t.pos.x, this.world.heightAt(t.pos.x, t.pos.z), t.pos.z); }
    let target = null, bd = range;
    for (const e of this.enemies) {
      if (e.dead || e.spawning) continue;
      const dx = e.pos.x - pl.pos.x, dz = e.pos.z - pl.pos.z;
      const d = Math.hypot(dx, dz);
      if (d < bd && Math.abs(angleDiff(pl.yaw, Math.atan2(dx, dz))) < 1.0) { bd = d; target = e; }
    }
    const c = target ? V(target.pos.x, 0, target.pos.z) : V(pl.pos.x + Math.sin(pl.yaw) * ahead, 0, pl.pos.z + Math.cos(pl.yaw) * ahead);
    c.y = this.world.heightAt(c.x, c.z);
    return c;
  }

  // 원 안의 살아 있는 적
  enemiesIn(c, R) {
    return this.enemies.filter((e) => !e.dead && !e.spawning && Math.hypot(e.pos.x - c.x, e.pos.z - c.z) < R + e.radius);
  }

  // 도사 낙뢰: 팔괘 마법진이 펼쳐지고 빛이 모여듦 → 번개 다발이 연달아 내리꽂히며 전기 사슬이 적들을 잇고, 바닥에 그을음
  castLightning(pl, o = {}) {
    const c = this.aimPoint(pl);
    const R = o.R || 2.9;
    this.fx.circle(c, R * 1.15, '#b89aff', 1.3, 2.2);
    this.fx.circle(V(pl.pos.x, pl.y, pl.pos.z), 1.3, '#d8c8ff', 0.7, -3);
    const tele = this.fx.ring(c, R, '#b89aff', 1, 1);
    // 빛이 원 가장자리에서 가운데로 모여듦
    for (let i = 0; i < 46; i++) {
      const a = Math.random() * Math.PI * 2, r = R * rand(0.8, 1.1);
      this.fx.add.emit({ x: c.x + Math.cos(a) * r, y: c.y + rand(0.1, 1.6), z: c.z + Math.sin(a) * r, vx: -Math.cos(a) * r / 0.42, vy: rand(-0.5, 1), vz: -Math.sin(a) * r / 0.42, life: 0.42, size: rand(2, 3), color: '#e8e0ff', color2: '#6a4aff' });
    }
    this.audio.play('charge');
    this.shake(0.12);
    this.timers.push({ at: this.time + 0.42, fn: () => {
      this.fx.removeRing(tele);
      this.fx.bolt(c, o.big ? 3.2 : 1.7);
      if (o.big) { this.fx.bolt(V(c.x + 0.4, c.y, c.z - 0.3), 1.6); this.fx.ring(c, R * 1.7, '#ffffff', 0.6); this.ui.flash('#ffffff', 0.8); this.shake(1.0); }
      if (o.storm) this.storms.push({ c: c.clone(), R: o.storm.R, t: 0, dur: o.storm.dur, every: o.storm.tick, tick: 0.3, hits: o.storm.hits, mul: o.mul || 1 });
      this.audio.play('thunder');
      this.ui.flash('#e8e0ff', 0.6);
      this.shake(0.7);
      this.hitstop = Math.max(this.hitstop, 0.09);
      this.fx.ring(c, R * 1.3, '#d8c8ff', 0.45);
      this.fx.ring(c, R * 0.6, '#ffffff', 0.25);
      this.fx.scorch(c, R * 0.75, '#1c1230', 3);
      for (let i = 0; i < 60; i++) {
        const a = Math.random() * Math.PI * 2, s = rand(2, 9);
        this.fx.add.emit({ x: c.x, y: c.y + 0.3, z: c.z, vx: Math.cos(a) * s, vy: rand(1, 7), vz: Math.sin(a) * s, g: 10, drag: 2, life: rand(0.3, 0.8), size: rand(2, 4), endSize: 1, color: '#ffffff', color2: '#7a5aff' });
      }
      // 남은 불티
      for (let i = 0; i < 30; i++) {
        const a = Math.random() * Math.PI * 2, r = rand(0.3, R);
        this.fx.add.emit({ x: c.x + Math.cos(a) * r, y: c.y + 0.06, z: c.z + Math.sin(a) * r, vy: rand(0, 0.4), life: rand(0.8, 1.6), size: 2, color: '#d8c8ff', alpha: 0.8, flicker: 0.7 });
      }
      // 피해 + 전기 사슬
      const hit = this.enemiesIn(c, R);
      let prev = V(c.x, c.y + 1.2, c.z);
      for (const e of hit) {
        const crit = Math.random() < 0.2;
        this.damageEnemy(e, Math.round(rand(44, 54) * (o.mult || 1) * (o.mul || 1) * (crit ? 1.8 : 1)), crit, o.big ? 6 : 3, o.stun || 0.7);
        const ec = e.center().clone();
        this.fx.arc(prev, ec, '#c8b0ff', 0.8);
        this.fx.spark(ec.x, ec.y, ec.z, 10, '#e8e0ff', 6);
        prev = ec;
      }
      // 천뢰 Ⅴ: 근처의 다른 적 둘에게도 하늘의 벼락
      if (o.chain) {
        const others = this.enemies.filter((e) => !e.dead && !e.spawning && !hit.includes(e) && Math.hypot(e.pos.x - c.x, e.pos.z - c.z) < 12)
          .sort((a, b) => Math.hypot(a.pos.x - c.x, a.pos.z - c.z) - Math.hypot(b.pos.x - c.x, b.pos.z - c.z)).slice(0, 2);
        others.forEach((e, k) => this.after(0.25 + k * 0.2, () => {
          if (e.dead) return;
          const at = V(e.pos.x, e.y, e.pos.z);
          this.fx.bolt(at, 2.6);
          this.fx.ring(at, 3, '#ffffff', 0.4);
          this.audio.play('thunder');
          this.shake(0.6);
          for (const v of this.enemiesIn(at, 2.6)) this.damageEnemy(v, Math.round(rand(44, 54) * 1.5 * (o.mul || 1)), true, 5, 1.0);
        }));
      }
      // 뒤따르는 번개 세 줄기
      for (let k = 1; k <= 3; k++) {
        this.timers.push({ at: this.time + k * 0.07, fn: () => {
          const p = V(c.x + rand(-2, 2), c.y, c.z + rand(-2, 2));
          this.fx.bolt(p, o.after ? 1.3 : 0.9);
          this.fx.spark(p.x, p.y + 0.2, p.z, 8, '#e8e0ff', 5);
          this.shake(0.25);
          // 천뢰 Ⅲ: 뒤따르는 번개도 피해
          if (o.after) for (const e of this.enemiesIn(p, 1.6)) this.damageEnemy(e, Math.round(22 * (o.mul || 1)), false, 2, 0.3);
        } });
      }
    } });
  }

  // 요정 바람화살: 발밑 마법진 + 소용돌이 고리 → 빛나는 관통 화살 9발
  windArrows(pl, o = {}) {
    const n = o.n || 9, sp = o.spread || 0.13;
    for (let i = 0; i < n; i++) this.spawnArrow(pl, pl.yaw + (i - (n - 1) / 2) * sp, { dmg: o.dmg || 22, pierce: true, glow: true, speed: 24, life: 0.6 });
    this.audio.play('bowskill');
    if (o.quiet) { this.fx.ring(this.handPos(pl), 1.2, '#c8ffb0', 0.22); return; }
    const feet = V(pl.pos.x, pl.y, pl.pos.z);
    this.fx.circle(feet, 2.2, '#8aff7a', 0.7, 3);
    const hp = this.handPos(pl);
    for (let k = 0; k < 3; k++) {
      this.timers.push({ at: this.time + k * 0.05, fn: () => {
        const p = hp.clone().add(V(Math.sin(pl.yaw) * k * 0.6, 0, Math.cos(pl.yaw) * k * 0.6));
        this.fx.ring(p, 0.8 + k * 0.4, k ? '#c8ffb0' : '#ffffff', 0.25);
      } });
    }
    for (let i = 0; i < 36; i++) {
      const a = pl.yaw + rand(-0.8, 0.8);
      this.fx.norm.emit({ x: feet.x, y: feet.y + rand(0.3, 1.2), z: feet.z, vx: Math.sin(a) * rand(3, 9), vy: rand(0, 1.5), vz: Math.cos(a) * rand(3, 9), drag: 2, wob: 1.5, life: rand(0.5, 1.1), size: 2, color: Math.random() < 0.5 ? '#8ad06a' : '#d8f0a0' });
    }
    // 바람이 휘감는 나선
    for (let i = 0; i < 30; i++) {
      const a = (i / 30) * Math.PI * 4, r = 0.3 + i * 0.03;
      this.fx.add.emit({ x: feet.x + Math.cos(a) * r, y: feet.y + i * 0.05, z: feet.z + Math.sin(a) * r, vx: -Math.sin(a) * 3, vy: 1, vz: Math.cos(a) * 3, life: 0.4, size: 2, color: '#e8ffd8', color2: '#3aa83a' });
    }
    this.ui.flash('#6aff7a', 0.18);
    this.shake(0.2);
  }

  // ================= 보스 무기 고유 기술 (U) =================
  castUlt(pl) {
    const U = ULTS[pl.ult];
    const feet = () => V(pl.pos.x, pl.y, pl.pos.z);
    this.ui.toast(`고유 기술 — ${U.name}!`, 1.2);
    this.audio.play('skill');
    if (pl.ult === 'thunder') {
      // 도깨비 천둥: 세 번 내려쳐 점점 넓어지는 벼락 충격파
      this.audio.play('charge');
      this.fx.circle(feet(), 6.6, '#9ad8ff', 1.4, 2.4);
      for (let i = 0; i < 3; i++) this.after(0.25 + i * 0.38, () => {
        if (pl.dead) return;
        const c = feet(), R = 3 + i * 1.7;
        this.audio.play('thunder');
        this.shake(0.5 + i * 0.25);
        this.ui.flash('#cfeaff', 0.35 + i * 0.15);
        this.hitstop = Math.max(this.hitstop, 0.07);
        this.fx.ring(c, R, '#bfe8ff', 0.45);
        this.fx.ring(c, R * 0.55, '#ffffff', 0.3);
        this.fx.scorch(c, R * 0.45, '#101830', 2.5);
        for (let k = 0; k < 3 + i * 2; k++) {
          const a = Math.random() * Math.PI * 2, r = rand(1, R);
          this.fx.bolt(V(c.x + Math.cos(a) * r, c.y, c.z + Math.sin(a) * r), 1 + i * 0.3);
        }
        for (let k = 0; k < 40; k++) {
          const a = Math.random() * Math.PI * 2, sp = rand(4, 10);
          this.fx.add.emit({ x: c.x, y: c.y + 0.3, z: c.z, vx: Math.cos(a) * sp, vy: rand(1, 5), vz: Math.sin(a) * sp, g: 10, drag: 2, life: rand(0.3, 0.7), size: rand(2, 4), endSize: 1, color: '#ffffff', color2: '#3ac8ff' });
        }
        let prev = V(c.x, c.y + 1.4, c.z);
        for (const e of this.enemiesIn(c, R)) {
          const crit = Math.random() < 0.25;
          this.damageEnemy(e, Math.round(rand(52, 62) * (1 + i * 0.25) * (crit ? 1.8 : 1)), crit, 6, 1 + i * 0.3);
          const ec = e.center().clone();
          this.fx.arc(prev, ec, '#9ad8ff', 0.8);
          prev = ec;
        }
      });
    } else if (pl.ult === 'foxtail') {
      // 아홉 꼬리 여우불: 가까운 적들을 번갈아 꿰뚫고 피해의 25% 회복
      this.audio.play('howl');
      this.fx.colorFire(pl.pos.x, pl.y + 0.8, pl.pos.z, 40, 0.8, '#ffe0a0', '#ff6a1a');
      let healed = 0;
      for (let i = 0; i < 9; i++) this.after(0.15 + i * 0.13, () => {
        if (pl.dead) return;
        const c = V(pl.pos.x, pl.y + 1.1, pl.pos.z);
        const near = this.enemies.filter((e) => !e.dead && !e.spawning && Math.hypot(e.pos.x - c.x, e.pos.z - c.z) < 10)
          .sort((a, b) => Math.hypot(a.pos.x - c.x, a.pos.z - c.z) - Math.hypot(b.pos.x - c.x, b.pos.z - c.z));
        const a = (i / 9) * Math.PI * 2 + pl.yaw;
        if (!near.length) {
          this.fx.colorFire(c.x + Math.sin(a) * 1.4, c.y, c.z + Math.cos(a) * 1.4, 10, 0.3, '#ffe0a0', '#ff6a1a');
          return;
        }
        const e = near[i % Math.min(3, near.length)];
        const ec = e.center().clone();
        // 꼬리처럼 몸 둘레에서 휘어 나가는 불줄기
        const mid = V(c.x + Math.sin(a) * 1.6, c.y + 0.4, c.z + Math.cos(a) * 1.6);
        this.fx.streak(c, mid, '#ffb070', 0.3, 0.5);
        this.fx.streak(mid, ec, '#ff8a3a', 0.35, 0.55);
        // 여우불 꼬리: 휘어 나가는 길을 따라 불티
        for (let k = 0; k <= 16; k++) {
          const t = k / 16, u = 1 - t;
          const x = u * u * c.x + 2 * u * t * mid.x + t * t * ec.x, y = u * u * c.y + 2 * u * t * mid.y + t * t * ec.y, z = u * u * c.z + 2 * u * t * mid.z + t * t * ec.z;
          this.fx.add.emit({ x, y, z, vx: rand(-0.4, 0.4), vy: rand(0.5, 1.5), vz: rand(-0.4, 0.4), life: 0.25 + t * 0.3, size: 3 + t * 2, endSize: 1, color: '#fff0b0', color2: '#ff4a10' });
        }
        this.fx.colorFire(ec.x, ec.y, ec.z, 18, 0.4, '#ffe0a0', '#ff6a1a');
        this.audio.play('hit');
        const hp0 = e.hp;
        const crit = Math.random() < 0.2;
        this.damageEnemy(e, Math.round(rand(34, 42) * (crit ? 1.8 : 1)), crit, 3, 0.3);
        const h = Math.min(pl.maxHp - pl.hp, Math.round(Math.max(0, hp0 - Math.max(0, e.hp)) * 0.25));
        if (h > 0) { pl.hp += h; healed += h; }
        if (i === 8 && healed > 0) this.fx.number(pl.pos.clone().add(V(0, 2.1, 0)), `+${healed}`, 'heal');
      });
    } else if (pl.ult === 'hellfire') {
      // 지옥불: 붉은 불꽃 고리 세 겹이 몸 주위로 퍼짐
      this.audio.play('fire');
      this.ui.flash('#ff3a2a', 0.35);
      for (let i = 0; i < 3; i++) this.after(i * 0.32, () => {
        if (pl.dead) return;
        const c = feet(), R = 3.4 + i * 2;
        this.fx.ring(c, R, '#ff4a2a', 0.5);
        this.fx.ring(c, R * 0.92, '#ffd080', 0.35);
        this.fx.scorch(c, R * 0.5, '#2a0a08', 2);
        for (let k = 0; k < 60; k++) {
          const a = (k / 60) * Math.PI * 2;
          this.fx.add.emit({ x: c.x + Math.cos(a) * R, y: c.y + 0.2, z: c.z + Math.sin(a) * R, vx: Math.cos(a) * 2, vy: rand(2, 5), vz: Math.sin(a) * 2, life: rand(0.4, 0.8), size: rand(3, 5), endSize: 1, color: '#ffd070', color2: '#ff1a00' });
        }
        this.audio.play('burst');
        this.shake(0.3 + i * 0.1);
        for (const o of this.enemiesIn(c, R)) {
          const crit = Math.random() < 0.2;
          this.damageEnemy(o, Math.round(rand(40, 48) * (o.isBoss ? 1.5 : 1) * (crit ? 1.8 : 1)), crit, 4, 0.3);
          if (!o.dead) o.burnFor(4, 12);
        }
      });
    } else if (pl.ult === 'meltdown') {
      // 쇳물 비: 앞쪽 넓은 곳에 녹은 쇳덩이가 쏟아지고 맞은 적은 불붙음
      const c = this.aimPoint(pl);
      this.audio.play('charge');
      this.fx.circle(c, 4.2, '#ff6a2a', 1.4, 2);
      for (let i = 0; i < 12; i++) this.after(0.25 + i * 0.09, () => {
        if (pl.dead) return;
        const a = Math.random() * Math.PI * 2, d = Math.sqrt(Math.random()) * 3.8;
        const at = V(c.x + Math.cos(a) * d, 0, c.z + Math.sin(a) * d);
        at.y = this.world.heightAt(at.x, at.z);
        this.fx.streak(V(at.x - 1.5, at.y + 7, at.z), V(at.x, at.y + 0.2, at.z), '#ffb060', 0.25, 0.45);
        this.fx.colorFire(at.x, at.y + 0.2, at.z, 18, 0.5, '#ffe080', '#ff2a00');
        this.fx.ring(at, 1.6, '#ff8a3a', 0.3);
        this.audio.play('impact');
        if (i % 3 === 0) this.shake(0.2);
        for (const o of this.enemiesIn(at, 1.6)) {
          const crit = Math.random() < 0.2;
          this.damageEnemy(o, Math.round(rand(40, 48) * (crit ? 1.8 : 1)), crit, 3, 0.3);
          if (!o.dead) o.burnFor(3, 10);
        }
      });
    } else if (pl.ult === 'tidal') {
      // 물기둥: 가까운 적 다섯의 발밑에서 차례로 솟구침
      const c = feet();
      const tgt = this.enemies.filter((e) => !e.dead && !e.spawning && Math.hypot(e.pos.x - c.x, e.pos.z - c.z) < 10)
        .sort((a, b) => Math.hypot(a.pos.x - c.x, a.pos.z - c.z) - Math.hypot(b.pos.x - c.x, b.pos.z - c.z)).slice(0, 5);
      this.audio.play('freeze');
      tgt.forEach((e, i) => {
        const at = V(e.pos.x, e.y, e.pos.z);
        this.fx.circle(at, 1.6, '#2affd0', 0.35 + i * 0.16, 3);
        this.after(0.3 + i * 0.16, () => {
          if (pl.dead) return;
          const h = this.world.heightAt(at.x, at.z);
          this.fx.ring(V(at.x, h, at.z), 2.2, '#bffff0', 0.4);
          for (let k = 0; k < 46; k++) {
            const a = Math.random() * Math.PI * 2, r = Math.random() * 0.8;
            this.fx.add.emit({ x: at.x + Math.cos(a) * r, y: h + rand(0, 0.5), z: at.z + Math.sin(a) * r, vx: Math.cos(a) * 0.6, vy: rand(6, 13), vz: Math.sin(a) * 0.6, g: 14, life: rand(0.5, 0.9), size: rand(3, 5), endSize: 1, color: '#e8fff8', color2: '#2a9aaa' });
          }
          this.audio.play('impact');
          this.shake(0.25);
          for (const o of this.enemiesIn(at, 1.9)) {
            const crit = Math.random() < 0.2;
            this.damageEnemy(o, Math.round(rand(66, 78) * (crit ? 1.8 : 1)), crit, 2, 0.6);
            if (!o.dead && !o.isBoss) o.freeze(1.2);
          }
        });
      });
    } else if (pl.ult === 'tigerclaw') {
      // 백호 발톱: 앞으로 세 번 크게 할퀴며 나아감. 맞은 적은 기절
      this.audio.play('howl');
      for (let i = 0; i < 3; i++) this.after(0.1 + i * 0.26, () => {
        if (pl.dead) return;
        const fx = Math.sin(pl.yaw), fz = Math.cos(pl.yaw);
        this.world.move(pl.pos, fx * 1.6, fz * 1.6, pl.radius);
        const c = V(pl.pos.x + fx * 1.8, pl.y, pl.pos.z + fz * 1.8);
        this.fx.slash(V(pl.pos.x, pl.y + 0.9, pl.pos.z), pl.yaw + (i - 1) * 0.5, 0, { inner: 0.6, outer: 3.4, len: 2.4, dur: 0.3, color: i === 1 ? '#ffffff' : '#ffb060' });
        this.fx.ring(c, 3, '#ffd0a0', 0.3);
        this.audio.play('swing3');
        this.shake(0.25 + i * 0.1);
        this.hitstop = Math.max(this.hitstop, 0.05);
        for (const o of this.enemiesIn(c, 3.2)) {
          const crit = Math.random() < 0.3;
          this.damageEnemy(o, Math.round(rand(58, 68) * (1 + i * 0.2) * (crit ? 1.8 : 1)), crit, 7, 0.6);
        }
      });
    } else if (pl.ult === 'dragonstorm') {
      // 용왕의 폭풍: 주위 적 여덟에게 차례로 벼락, 마지막엔 둥근 해일
      const c = feet();
      const tgt = this.enemies.filter((e) => !e.dead && !e.spawning && Math.hypot(e.pos.x - c.x, e.pos.z - c.z) < 11)
        .sort((a, b) => Math.hypot(a.pos.x - c.x, a.pos.z - c.z) - Math.hypot(b.pos.x - c.x, b.pos.z - c.z)).slice(0, 8);
      this.audio.play('charge');
      this.ui.flash('#9ad8ff', 0.3);
      tgt.forEach((e, i) => this.after(0.2 + i * 0.12, () => {
        if (pl.dead || e.dead) return;
        const at = V(e.pos.x, e.y, e.pos.z);
        this.fx.bolt(at, 1.1);
        this.fx.ring(at, 1.8, '#bfe8ff', 0.3);
        this.audio.play('thunder');
        const crit = Math.random() < 0.25;
        this.damageEnemy(e, Math.round(rand(62, 74) * (crit ? 1.8 : 1)), crit, 3, 0.5);
      }));
      this.after(0.3 + tgt.length * 0.12, () => {
        if (pl.dead) return;
        const f = feet();
        this.fx.ring(f, 5, '#2a9aff', 0.5);
        this.fx.ring(f, 4.4, '#e8fff8', 0.35);
        this.shake(0.4);
        for (const o of this.enemiesIn(f, 5)) this.damageEnemy(o, Math.round(rand(40, 48)), false, 8, 0.4);
      });
    } else if (pl.ult === 'venomrain') {
      // 독침 비: 앞쪽 넓은 곳에 지네 독침 열네 개가 쏟아지고 맞은 적은 독에 상함
      const c = this.aimPoint(pl);
      this.audio.play('charge');
      this.fx.circle(c, 4.4, '#aaff3a', 1.3, 2);
      for (let i = 0; i < 14; i++) this.after(0.25 + i * 0.08, () => {
        if (pl.dead) return;
        const a = Math.random() * Math.PI * 2, d = Math.sqrt(Math.random()) * 4;
        const at = V(c.x + Math.cos(a) * d, 0, c.z + Math.sin(a) * d);
        at.y = this.world.heightAt(at.x, at.z);
        this.fx.streak(V(at.x - 1.2, at.y + 7, at.z), V(at.x, at.y + 0.2, at.z), '#d8ff8a', 0.2, 0.4);
        this.fx.colorFire(at.x, at.y + 0.2, at.z, 14, 0.4, '#e0ff8a', '#3a8a00');
        this.fx.ring(at, 1.5, '#aaff3a', 0.3);
        this.audio.play('arrowhit');
        for (const o of this.enemiesIn(at, 1.5)) {
          const crit = Math.random() < 0.2;
          this.damageEnemy(o, Math.round(rand(42, 50) * (crit ? 1.8 : 1)), crit, 3, 0.3);
          if (!o.dead) o.burnFor(4, 14);
        }
      });
    } else if (pl.ult === 'blizzard') {
      // 눈보라: 몸 주위로 세 겹 얼음 고리. 일반 몬스터는 얼어붙음
      this.audio.play('freeze');
      this.ui.flash('#cfeeff', 0.3);
      for (let i = 0; i < 3; i++) this.after(i * 0.3, () => {
        if (pl.dead) return;
        const c = feet(), R = 3.6 + i * 1.8;
        this.fx.ring(c, R, '#bfeaff', 0.5);
        this.fx.ring(c, R * 0.9, '#ffffff', 0.35);
        for (let k = 0; k < 50; k++) {
          const a = (k / 50) * Math.PI * 2;
          this.fx.norm.emit({ x: c.x + Math.cos(a) * R, y: c.y + rand(0.2, 1.5), z: c.z + Math.sin(a) * R, vx: -Math.sin(a) * 4, vy: rand(0, 1), vz: Math.cos(a) * 4, life: rand(0.4, 0.8), size: rand(2, 4), color: '#ffffff' });
        }
        this.audio.play('impact');
        this.shake(0.25 + i * 0.1);
        for (const o of this.enemiesIn(c, R)) {
          const crit = Math.random() < 0.2;
          this.damageEnemy(o, Math.round(rand(46, 56) * (crit ? 1.8 : 1)), crit, 4, 0.4);
          if (!o.dead && !o.isBoss) o.freeze(1.6);
        }
      });
    } else if (pl.ult === 'skythunder') {
      // 하늘 북: 몸 둘레 북 여덟을 차례로 두드려 가까운 적에게 벼락 여덟 번
      const c = feet();
      this.audio.play('drum');
      this.ui.flash('#e8f4ff', 0.3);
      for (let i = 0; i < 8; i++) this.after(i * 0.14, () => {
        if (pl.dead) return;
        const near = this.enemiesIn(feet(), 9).filter((o) => !o.dead);
        const t = near.length ? near[Math.floor(Math.random() * near.length)] : null;
        const at = t ? V(t.pos.x, t.y, t.pos.z) : V(c.x + rand(-4, 4), c.y, c.z + rand(-4, 4));
        this.fx.bolt(at, 1.6);
        this.fx.ring(at, 2, '#bfe0ff', 0.35);
        this.audio.play('thunder');
        this.shake(0.25);
        for (const o of this.enemiesIn(at, 2)) {
          const crit = Math.random() < 0.2;
          this.damageEnemy(o, Math.round(rand(52, 62) * (crit ? 1.8 : 1)), crit, 3, 0.5);
        }
      });
    } else if (pl.ult === 'echo') {
      // 메아리: 사람 목소리가 세 겹으로 퍼지며 닿은 적을 굳힘
      this.audio.play('wail');
      this.ui.flash('#fff0e0', 0.25);
      for (let i = 0; i < 3; i++) this.after(i * 0.28, () => {
        if (pl.dead) return;
        const c = feet(), R = 3 + i * 2;
        this.fx.ring(c, R, '#fff0e0', 0.5);
        this.fx.ring(c, R * 0.92, '#ffb07a', 0.35);
        this.shake(0.2 + i * 0.1);
        for (const o of this.enemiesIn(c, R)) {
          const crit = Math.random() < 0.2;
          this.damageEnemy(o, Math.round(rand(56, 66) * (crit ? 1.8 : 1)), crit, 3, o.isBoss ? 0.3 : 1.0);
        }
      });
    } else if (pl.ult === 'goldstorm') {
      // 금 나와라 뚝딱: 가까운 적 여덟 머리 위로 금덩이가 차례로 떨어짐 (기절)
      const c = feet();
      const marks = this.enemies.filter((e) => !e.dead && !e.spawning && Math.hypot(e.pos.x - c.x, e.pos.z - c.z) < 10)
        .sort((a, b) => Math.hypot(a.pos.x - c.x, a.pos.z - c.z) - Math.hypot(b.pos.x - c.x, b.pos.z - c.z)).slice(0, 8);
      this.audio.play('laugh');
      this.ui.flash('#ffe080', 0.25);
      if (!marks.length) this.fx.coins(c.x, c.y + 1, c.z, 20);
      marks.forEach((e, i) => {
        this.fx.circle(V(e.pos.x, e.y, e.pos.z), 1.2, '#ffd040', 0.35 + i * 0.12, 3);
        this.after(0.35 + i * 0.12, () => {
          if (e.dead) return;
          this.fx.coins(e.pos.x, e.y + 0.6, e.pos.z, 12);
          this.fx.colorFire(e.pos.x, e.y + 0.3, e.pos.z, 18, 0.5, '#fff0a0', '#ffa000');
          this.fx.ring(V(e.pos.x, e.y, e.pos.z), 1.4, '#ffe080', 0.3);
          this.audio.play('coin');
          this.shake(0.15);
          const crit = Math.random() < 0.2;
          this.damageEnemy(e, Math.round(rand(80, 95) * (crit ? 1.8 : 1)), crit, 3, 0.7);
        });
      });
    } else if (pl.ult === 'eclipse') {
      // 어둠 삼키기: 앞쪽에 검은 소용돌이 → 주위 적을 끌어당긴 뒤 터뜨림 (기절)
      const f = feet(), c = V(f.x + Math.sin(pl.yaw) * 3, f.y, f.z + Math.cos(pl.yaw) * 3);
      this.audio.play('wail');
      this.ui.flash('#1a0a2a', 0.35);
      this.fx.circle(c, 3.6, '#9a5aff', 0.9, -3);
      for (let t = 0; t < 6; t++) this.after(t * 0.13, () => {
        for (const o of this.enemiesIn(c, 9)) {
          if (o.isBoss) continue;
          const dx = c.x - o.pos.x, dz = c.z - o.pos.z, d = Math.hypot(dx, dz) || 1;
          o.vel.x += (dx / d) * 6; o.vel.z += (dz / d) * 6;
        }
        for (let k = 0; k < 14; k++) {
          const a = Math.random() * Math.PI * 2, r = rand(1, 4);
          this.fx.add.emit({ x: c.x + Math.cos(a) * r, y: c.y + rand(0.2, 1.6), z: c.z + Math.sin(a) * r, vx: -Math.cos(a) * r * 2, vy: 0.4, vz: -Math.sin(a) * r * 2, life: 0.45, size: rand(2, 4), color: '#c8a0ff', color2: '#1a0a2a' });
        }
      });
      this.after(0.85, () => {
        this.audio.play('impact');
        this.shake(0.6);
        this.ui.flash('#e0c8ff', 0.35);
        for (let r = 0; r < 3; r++) this.fx.ring(c, 1.5 + r * 1.2, r ? '#9a5aff' : '#ffffff', 0.4 + r * 0.1);
        this.fx.colorFire(c.x, c.y + 0.5, c.z, 40, 1, '#e0c8ff', '#3a1a6a');
        for (const o of this.enemiesIn(c, 3.6)) {
          const crit = Math.random() < 0.25;
          this.damageEnemy(o, Math.round(rand(110, 130) * (crit ? 1.8 : 1)), crit, 5, 1.2);
        }
      });
    } else if (pl.ult === 'judgment') {
      // 명부 집행: 주변 적 여섯에게 낙인 → 1초 뒤 하늘에서 심판
      const c = feet();
      const marks = this.enemies.filter((e) => !e.dead && !e.spawning && Math.hypot(e.pos.x - c.x, e.pos.z - c.z) < 10)
        .sort((a, b) => Math.hypot(a.pos.x - c.x, a.pos.z - c.z) - Math.hypot(b.pos.x - c.x, b.pos.z - c.z)).slice(0, 6);
      this.audio.play('wail');
      this.ui.flash('#3a1a5a', 0.4);
      this.fx.circle(c, 2.2, '#c890ff', 1.1, -3);
      for (const e of marks) {
        this.fx.circle(V(e.pos.x, e.y, e.pos.z), e.isBoss ? 2.4 : 1.2, '#c890ff', 1.1, 3);
        this.fx.cross(e.center().clone().add(V(0, 0.8, 0)), '#c890ff', 1.8, 0.5);
      }
      this.after(1.0, () => {
        this.audio.play('thunder');
        this.shake(0.7);
        this.ui.flash('#e0c8ff', 0.5);
        for (const e of marks) {
          if (e.dead) continue;
          const ec = e.center().clone();
          this.fx.arc(V(ec.x, ec.y + 7, ec.z), ec, '#e0c8ff', 1.2);
          this.fx.cross(ec, '#c890ff', e.isBoss ? 5 : 3.4, 0.45);
          this.fx.ring(V(e.pos.x, e.y, e.pos.z), e.isBoss ? 3 : 1.8, '#9a4aff', 0.4);
          this.damageEnemy(e, Math.round(rand(105, 125)), true, 4, 0.8);
          // 체력이 35% 아래로 떨어진 일반 몬스터는 즉사
          if (!e.dead && !e.isBoss && e.hp < e.maxHp * 0.35) {
            this.damageEnemy(e, e.hp * 20 + 100, true, 6, 0);
            this.fx.colorFire(ec.x, ec.y, ec.z, 24, 0.5, '#e0c8ff', '#5a1aaa');
          }
        }
      });
    }
  }

  // ================= 추가 스킬 =================
  castSkill(pl, slot) {
    this.skillRunes(pl, slot, () => this.castSkill(pl, slot));
    const k = pl.cls + slot;
    const br = this.branch(pl, slot), r = this.rank(pl, slot), M = this.rankPow(pl, slot);
    if (k === 'sword2') {
      if (br === 'a') {
        // 연섬: 꿰뚫고 곧바로 돌아서며 거듭 벰 (Ⅲ 세 번, Ⅴ 네 번 + 십자 섬광)
        const n = r >= 5 ? 4 : r >= 3 ? 3 : 2;
        this.skillIssen(pl, { mult: M });
        for (let i = 1; i < n; i++) this.after(0.72 * i, () => { if (pl.dead) return; pl.yaw += Math.PI; this.skillIssen(pl, { mult: 0.9 * M, tint: '#ffd890' }); });
        if (r >= 5) this.after(0.72 * (n - 1) + 0.7, () => {
          if (pl.dead) return;
          const at = V(pl.pos.x, pl.y, pl.pos.z);
          this.fx.cross(at.clone().add(V(0, 1, 0)), '#fff2c0', 7, 0.5);
          this.ui.flash('#ffffff', 0.5);
          this.boomAt(at, 3.2, Math.round(70 * M), '#ffe8a0');
        });
      } else if (br === 'b') this.skillIssen(pl, { mark: true, mult: M, markR: r >= 3 ? 3 : 2, spread: r >= 3, twice: r >= 5, mul: M });
      else this.skillIssen(pl);
    } else if (k === 'sword3') {
      if (br === 'a') this.skillWhirl(pl, { spins: r >= 3 ? 7 : 5, R: r >= 3 ? 1.2 : 0.8, pull: true, mul: M, quake: r >= 5 });
      else { this.skillWhirl(pl, { mul: br ? M : 1 }); if (br === 'b') this.after(0.8, () => this.startBladeRing(pl, { n: r >= 5 ? 7 : r >= 3 ? 5 : 3, R: r >= 3 ? 2.4 : 2.0, dur: r >= 5 ? 8 : 5, shoot: r >= 5, mul: M })); }
    } else if (k === 'mage2') {
      if (br === 'a') {
        const n = r >= 5 ? 4 : r >= 3 ? 3 : 2;
        for (let i = 0; i < n; i++) this.skillDragon(pl, { phase: (i / n) * Math.PI * 2, dmg: (n > 2 ? 13 : 15) * M, gold: r >= 5 || i % 2 === 1 });
      } else this.skillDragon(pl, br === 'b' ? { trail: true, boom: 1.6, mul: M, hot: r >= 3, pillars: r >= 5 } : {});
    } else if (k === 'mage3') {
      if (br === 'a') this.skillFrost(pl, { shatter: true, mul: M, splash: r >= 3, renova: r >= 5 });
      else if (br === 'b') this.skillFrost(pl, r >= 5 ? { R: 8.8, freeze: 5, mult: 1.5 * M } : r >= 3 ? { R: 7.6, freeze: 4, mult: 1.25 * M } : { R: 6.4, freeze: 3.4, mult: 1.25 * M });
      else this.skillFrost(pl);
    } else if (k === 'elf2') {
      if (br === 'a') this.skillArrowRain(pl, { fire: true, mul: M, R: r >= 3 ? 3.8 : 3, dur: r >= 3 ? 2.0 : 1.4, burn: r >= 5 });
      else if (br === 'b') this.skillMeteor(pl, { n: r >= 5 ? 9 : r >= 3 ? 7 : 5, big: r >= 5, mul: M });
      else this.skillArrowRain(pl);
    } else if (k === 'lancer2') {
      lancerSkill2(this, pl);
    } else if (k === 'lancer3') {
      lancerSkill3(this, pl);
    } else if (k === 'elf3') {
      if (br === 'a') {
        const n = r >= 5 ? 4 : r >= 3 ? 3 : 2;
        for (let i = 0; i < n; i++) this.skillTornado(pl, { yawOff: (i - (n - 1) / 2) * (0.8 / Math.max(1, n - 1)) * 1.4, quiet: i > 0, dur: r >= 5 ? 4.5 : 3.2, mul: M });
      } else if (br === 'b') {
        const n = r >= 5 ? 3 : r >= 3 ? 2 : 1;
        for (let i = 0; i < n; i++) this.skillTornado(pl, { orbit: true, angOff: (i / n) * Math.PI * 2, quiet: i > 0, dur: r >= 5 ? 6 : 4.6, mul: M });
      } else this.skillTornado(pl);
    }
  }

  // 검객 일섬: 눈에 보이지 않을 만큼 빠르게 앞으로 돌진하며 지나간 자리에 빛줄기,
  // 칼을 칼집에 넣는 "착" 소리와 동시에 베인 적들이 한꺼번에 갈라짐
  skillIssen(pl, o = {}) {
    const dir = V(Math.sin(pl.yaw), 0, Math.cos(pl.yaw));
    const from = pl.pos.clone();
    this.fx.ghost(pl.rig, '#7ab8ff', 0.4, 0.34);
    this.world.move(pl.pos, dir.x * 7, dir.z * 7, pl.moveR);
    pl.vel.set(0, 0, 0);
    pl.invuln = Math.max(pl.invuln, 0.6);
    const to = pl.pos.clone();
    const y = pl.y + 0.8;
    this.fx.streak(V(from.x, y, from.z), V(to.x, y, to.z), '#ffffff', 0.55, 0.5);
    this.fx.streak(V(from.x, y, from.z), V(to.x, y, to.z), o.mark ? '#ff4a3a' : o.tint || '#7fd8ff', 0.7, 1.2);
    for (let i = 1; i < 5; i++) {
      const t = i / 5;
      const gp = from.clone().lerp(to, t);
      this.fx.add.emit({ x: gp.x, y: y, z: gp.z, vx: rand(-1, 1), vy: rand(0, 1), vz: rand(-1, 1), life: 0.4, size: 3, endSize: 1, color: '#ffffff', color2: '#7fd8ff' });
    }
    this.fx.dust(from.x, from.y, from.z, 12);
    this.fx.ring(V(to.x, pl.y, to.z), 1.6, '#ffffff', 0.25);
    this.audio.play('dash');
    this.audio.play('swing3');
    this.shake(0.2);
    // 지나간 길 가까이에 있던 적
    const seg = to.clone().sub(from);
    const L2 = seg.lengthSq() || 1;
    const victims = this.enemies.filter((e) => {
      if (e.dead || e.spawning) return false;
      const t = Math.max(0, Math.min(1, ((e.pos.x - from.x) * seg.x + (e.pos.z - from.z) * seg.z) / L2));
      const px = from.x + seg.x * t, pz = from.z + seg.z * t;
      return Math.hypot(e.pos.x - px, e.pos.z - pz) < 1.3 + e.radius;
    });
    // 곧바로 칼을 넣게 하고, 넣는 순간 베임이 터짐
    pl.sinceAttack = 5;
    this.timers.push({ at: this.time + 0.62, fn: () => {
      this.audio.play('sheathe');
      if (!victims.length) return;
      this.audio.play('crit');
      this.ui.flash('#ffffff', 0.35);
      this.shake(0.5);
      this.hitstop = Math.max(this.hitstop, 0.1);
      for (const e of victims) {
        if (e.dead) continue;
        const crit = Math.random() < 0.3;
        this.damageEnemy(e, Math.round(rand(40, 48) * (o.mult || 1) * (crit ? 1.8 : 1)), crit, 5, 0.6);
        const c = e.center().clone();
        this.fx.cross(c, o.mark ? '#ff8a6a' : '#fff6d0', e.isBoss ? 6 : 4.2, 0.45);
        this.fx.spark(c.x, c.y, c.z, 16, '#fff6d0', 8);
        if (o.mark && !e.dead) this.markEnemy(e, o);
      }
    } });
  }

  // 검객 회오리베기: 세 바퀴 돌며 주변 전체를 벰 (마지막 바퀴가 가장 셈)
  skillWhirl(pl, opt = {}) {
    const spins = opt.spins || 3;
    if (spins > 3) pl.attack && (pl.attack.dur = 0.27 * spins + 0.1);
    for (let k = 0; k < spins; k++) {
      this.timers.push({ at: this.time + k * 0.27, fn: () => {
        if (pl.dead) return;
        const last = k === spins - 1;
        const R = (last ? 2.9 : 2.5) + (opt.R || 0);
        if (opt.pull) {
          for (const e of this.enemiesIn(pl.pos, R + 2.5)) {
            const dx = pl.pos.x - e.pos.x, dz = pl.pos.z - e.pos.z, d = Math.hypot(dx, dz) || 1;
            if (d > 1.2) this.world.move(e.pos, (dx / d) * Math.min(1.1, d - 1.1) * (e.isBoss ? 0.25 : 1), (dz / d) * Math.min(1.1, d - 1.1) * (e.isBoss ? 0.25 : 1), e.moveR ?? e.radius);
          }
          for (let i = 0; i < 14; i++) { const a = Math.random() * Math.PI * 2, r = R + 1.5; this.fx.add.emit({ x: pl.pos.x + Math.cos(a) * r, y: pl.y + rand(0.2, 1.5), z: pl.pos.z + Math.sin(a) * r, vx: -Math.cos(a) * 7 - Math.sin(a) * 4, vy: 0.5, vz: -Math.sin(a) * 7 + Math.cos(a) * 4, life: 0.3, size: 2, color: '#e0f4ff', color2: '#5aa8ff' }); }
        }
        const o = V(pl.pos.x, pl.y + 0.7, pl.pos.z);
        this.fx.slash(o, pl.yaw + k * 2.1, 0, { inner: 0.4, outer: R, len: 6.25, dur: 0.24, color: last ? '#fff6d0' : '#a8e4ff' });
        this.fx.slash(o, pl.yaw + k * 2.1, 0, { inner: R - 0.3, outer: R - 0.05, len: 6.25, dur: 0.24, color: '#ffffff' });
        this.fx.ring(V(pl.pos.x, pl.y, pl.pos.z), R, last ? '#fff2c0' : '#bfe8ff', 0.3);
        for (let i = 0; i < 16; i++) {
          const a = (i / 16) * Math.PI * 2;
          this.fx.norm.emit({ x: pl.pos.x + Math.cos(a) * 0.6, y: pl.y + 0.1, z: pl.pos.z + Math.sin(a) * 0.6, vx: Math.cos(a) * 4 - Math.sin(a) * 3, vy: rand(0.3, 1), vz: Math.sin(a) * 4 + Math.cos(a) * 3, drag: 3, life: 0.5, size: 3, endSize: 1, color: '#c8bca0', alpha: 0.7 });
        }
        this.audio.play(last ? 'swing3' : 'swing');
        let any = false;
        for (const e of this.enemiesIn(pl.pos, R)) {
          const crit = Math.random() < 0.15;
          this.damageEnemy(e, Math.round((last ? rand(22, 28) : rand(13, 17)) * (opt.mul || 1) * (crit ? 1.8 : 1)), crit, last ? 8 : 2.5, 0.3);
          any = true;
        }
        if (any) this.shake(last ? 0.35 : 0.15);
        // 태풍참 Ⅴ: 마지막 바퀴에 큰 충격파
        if (last && opt.quake) { this.ui.flash('#bfe8ff', 0.4); this.boomAt(V(pl.pos.x, pl.y, pl.pos.z), R + 3.5, Math.round(60 * (opt.mul || 1)), '#bfe8ff'); }
      } });
    }
  }

  // 도사 화룡부: 부적이 불뱀이 되어 꿈틀대며 날아감. 지나가는 적을 여러 번 태우고 끝에서 폭발
  skillDragon(pl, o = {}) {
    const dir = V(Math.sin(pl.yaw), 0, Math.cos(pl.yaw));
    const base = this.handPos(pl);
    const g = new THREE.Group();
    const segs = [];
    const N = 12;
    for (let i = 0; i < N; i++) {
      const k = i / (N - 1);
      const col = new THREE.Color(o.gold ? '#ffffff' : '#fff2a0').lerp(new THREE.Color(o.gold ? '#ffb020' : o.trail ? '#c81a0a' : '#e8401a'), k);
      const s = new THREE.Mesh(new THREE.IcosahedronGeometry(0.46 * (1 - k * 0.6), 1), new THREE.MeshBasicMaterial({ color: col }));
      g.add(s);
      segs.push(s);
    }
    // 머리: 뿔과 눈
    const head = segs[0];
    for (const sx of [-1, 1]) {
      const horn = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.35, 4), new THREE.MeshBasicMaterial({ color: '#ffd040' }));
      horn.position.set(sx * 0.16, 0.22, -0.12);
      horn.rotation.x = -0.8;
      head.add(horn);
      const eye = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.07, 0.05), new THREE.MeshBasicMaterial({ color: '#2a0a0a' }));
      eye.position.set(sx * 0.13, 0.08, 0.27);
      head.add(eye);
    }
    this.scene.add(g);
    const pr = { owner: 'fx', kind: 'dragon', pos: base.clone(), base: base.clone(), dir, yaw: pl.yaw, speed: 10, life: 1.6, t: 0, dmg: (o.dmg || 20) * (o.mul || 1), mesh: g, segs, hist: [], hitAt: new Map(), phase: o.phase || 0, trail: !!o.trail, boom: o.boom || 1, trailT: 0, mul: o.mul || 1, hot: o.hot, pillars: o.pillars };
    for (let i = 0; i < N * 3; i++) pr.hist.push(base.clone());
    this.projectiles.push(pr);
    this.audio.play('fire');
    this.audio.play('cast');
    this.fx.circle(V(pl.pos.x, pl.y, pl.pos.z), 1.6, '#ffa040', 0.6, 3);
    this.fx.ring(base, 1.4, '#ffd080', 0.3);
    this.ui.flash('#ff8a30', 0.18);
    this.shake(0.2);
  }

  dragonUpdate(pr, dt) {
    pr.t += dt;
    pr.base.addScaledVector(pr.dir, pr.speed * dt);
    const side = V(pr.dir.z, 0, -pr.dir.x);
    const wave = Math.sin(pr.t * 9 + pr.phase) * 0.9;
    // 폭염룡: 지나간 자리에 불길
    if (pr.trail) { pr.trailT -= dt; if (pr.trailT <= 0) { pr.trailT = 0.12; const gy = this.world.heightAt(pr.pos.x, pr.pos.z); this.fires.push({ pos: V(pr.pos.x, gy, pr.pos.z), t: 0, dur: pr.hot ? 4 : 2.6, tick: 0, mul: pr.mul * (pr.hot ? 1.5 : 1) }); } }
    pr.pos.copy(pr.base).addScaledVector(side, wave);
    pr.pos.y = pr.base.y + Math.sin(pr.t * 6) * 0.25;
    pr.hist.unshift(pr.pos.clone());
    pr.hist.length = pr.segs.length * 3;
    pr.segs.forEach((s, i) => {
      const h = pr.hist[Math.min(pr.hist.length - 1, i * 3)];
      s.position.copy(h);
    });
    const head = pr.segs[0];
    const nxt = pr.hist[2] || pr.pos;
    head.lookAt(pr.pos.clone().add(pr.pos.clone().sub(nxt)));
    // 불꽃
    for (let k = 0; k < 4; k++) {
      const h = pr.hist[Math.floor(Math.random() * pr.hist.length)];
      this.fx.add.emit({ x: h.x + rand(-0.15, 0.15), y: h.y + rand(-0.1, 0.2), z: h.z + rand(-0.15, 0.15), vx: rand(-0.6, 0.6), vy: rand(0.8, 2), vz: rand(-0.6, 0.6), life: rand(0.25, 0.5), size: rand(2, 5), endSize: 1, color: '#fff0a0', color2: '#ff2a00', flicker: 0.3 });
    }
    // 여러 번 태우기 (같은 적은 0.35초마다)
    for (const e of this.enemies) {
      if (e.dead || e.spawning) continue;
      if (Math.hypot(e.pos.x - pr.pos.x, e.pos.z - pr.pos.z) > 0.9 + e.radius) continue;
      const last = pr.hitAt.get(e) ?? -9;
      if (this.time - last < 0.35) continue;
      pr.hitAt.set(e, this.time);
      const crit = Math.random() < 0.2;
      this.damageEnemy(e, Math.round(pr.dmg * (crit ? 1.8 : 1) * rand(0.9, 1.1)), crit, 3, 0.3);
      const c = e.center();
      for (let i = 0; i < 12; i++) this.fx.add.emit({ x: c.x, y: c.y, z: c.z, vx: rand(-3, 3), vy: rand(1, 4), vz: rand(-3, 3), drag: 2, life: rand(0.3, 0.5), size: 3, endSize: 1, color: '#ffe080', color2: '#ff3010' });
    }
    if (pr.life <= 0 && !pr.exploded) {
      pr.exploded = true;
      const p = pr.pos;
      const gy = this.world.heightAt(p.x, p.z);
      this.audio.play('fire');
      const B = pr.boom;
      this.fx.ring(V(p.x, gy, p.z), 2.4 * B, '#ffb050', 0.35);
      if (B > 1) { this.fx.ring(V(p.x, gy, p.z), 1.4 * B, '#ffffff', 0.25); this.fx.circle(V(p.x, gy, p.z), 2 * B, '#ff6a2a', 0.8, 3); this.ui.flash('#ff7a30', 0.3); }
      this.fx.scorch(V(p.x, gy, p.z), 1.6 * B, '#2a140a', 2.5);
      for (let i = 0; i < 40; i++) {
        const a = Math.random() * Math.PI * 2, s = rand(2, 6);
        this.fx.add.emit({ x: p.x, y: p.y, z: p.z, vx: Math.cos(a) * s, vy: rand(0.5, 5), vz: Math.sin(a) * s, g: 4, drag: 2.5, life: rand(0.3, 0.7), size: rand(2, 5), endSize: 1, color: '#fff2a0', color2: '#ff2a00', flicker: 0.3 });
      }
      for (const e of this.enemiesIn(p, 2.2 * B)) this.damageEnemy(e, Math.round(rand(24, 30) * B * pr.mul), false, 6, 0.35);
      // 폭염룡 Ⅴ: 불기둥 여섯
      if (pr.pillars) for (let k = 0; k < 6; k++) this.after(0.1 + k * 0.08, () => {
        const a = (k / 6) * Math.PI * 2, at = V(p.x + Math.cos(a) * 2.6, 0, p.z + Math.sin(a) * 2.6);
        at.y = this.world.heightAt(at.x, at.z);
        for (let i = 0; i < 26; i++) this.fx.add.emit({ x: at.x + rand(-0.3, 0.3), y: at.y + rand(0, 0.5), z: at.z + rand(-0.3, 0.3), vx: rand(-0.4, 0.4), vy: rand(5, 10), vz: rand(-0.4, 0.4), life: rand(0.4, 0.7), size: rand(3, 6), endSize: 1, color: '#fff0a0', color2: '#ff2a00', flicker: 0.3 });
        this.fx.ring(at, 1.3, '#ffb050', 0.3);
        for (const e of this.enemiesIn(at, 1.4)) this.damageEnemy(e, Math.round(30 * pr.mul), false, 4, 0.3);
        this.fires.push({ pos: at, t: 0, dur: 3, tick: 0, mul: pr.mul, big: true });
      });
      this.shake(0.35 * B);
    }
  }

  // 도사 빙결진: 발밑에 얼음 마법진 → 세 겹의 얼음 가시가 퍼져 나가며 적을 얼림
  skillFrost(pl, o = {}) {
    const c = o.at ? o.at.clone() : V(pl.pos.x, pl.y, pl.pos.z);
    const R = o.R || 4.6;
    const sc = R / 4.6;
    this.fx.circle(c, R, '#8ad8ff', 1.6, 1.4);
    this.fx.scorch(c, R * 0.9, '#cfefff', 2.6);
    this.audio.play('freeze');
    this.ui.flash('#8ad8ff', 0.25);
    this.shake(0.35);
    [1.4 * sc, 2.8 * sc, 4.2 * sc].forEach((r, k) => {
      this.timers.push({ at: this.time + k * 0.09, fn: () => {
        const n = Math.round(r * 5);
        for (let i = 0; i < n; i++) {
          const a = (i / n) * Math.PI * 2 + k * 0.3;
          const x = c.x + Math.cos(a) * r, z = c.z + Math.sin(a) * r;
          const h = this.world.heightAt(x, z);
          if (Math.abs(h - c.y) > 1) continue;
          this.fx.iceSpike(V(x, h, z), rand(0.8, 1.5) * (1 - k * 0.15), 1.4 - k * 0.1);
        }
        this.fx.ring(c, r + 0.3, '#d8f4ff', 0.25);
        for (let i = 0; i < 20; i++) {
          const a = Math.random() * Math.PI * 2;
          this.fx.add.emit({ x: c.x + Math.cos(a) * r, y: c.y + 0.2, z: c.z + Math.sin(a) * r, vx: Math.cos(a) * 2, vy: rand(1, 3), vz: Math.sin(a) * 2, g: 6, life: rand(0.4, 0.8), size: 2, color: '#ffffff', color2: '#7ac8ff' });
        }
        this.shake(0.15);
      } });
    });
    const frozen = [];
    for (const e of this.enemiesIn(c, R)) {
      const crit = Math.random() < 0.15;
      this.damageEnemy(e, Math.round(rand(26, 32) * (o.mult || 1) * (o.mul || 1) * (crit ? 1.8 : 1)), crit, 1, 0.2);
      e.freeze(o.freeze || 1.8);
      frozen.push(e);
    }
    // 빙폭진: 얼어붙은 적이 얼음째 부서짐 (얼음에 면역인 보스도 마법진 안이면 피해)
    if (o.shatter) this.after(1.5, () => {
      let any = false;
      for (const e of frozen) {
        if (e.dead) continue;
        any = true;
        const ec = e.center().clone();
        this.damageEnemy(e, Math.round(rand(40, 48) * (o.mul || 1)), true, 4, 0.4);
        // 빙폭진 Ⅲ: 파편이 주변까지
        if (o.splash) for (const v of this.enemiesIn(e.pos, 2.2)) if (v !== e) this.damageEnemy(v, Math.round(20 * (o.mul || 1)), false, 3, 0.2);
        this.fx.cross(ec, '#e8f8ff', e.isBoss ? 5 : 3.4, 0.4);
        for (let i = 0; i < 24; i++) { const a = Math.random() * Math.PI * 2, s = rand(2, 6); this.fx.add.emit({ x: ec.x, y: ec.y, z: ec.z, vx: Math.cos(a) * s, vy: rand(1, 5), vz: Math.sin(a) * s, g: 12, life: rand(0.4, 0.8), size: rand(2, 4), endSize: 1, color: '#ffffff', color2: '#6ac8ff' }); }
        this.fx.ring(V(e.pos.x, e.y, e.pos.z), 1.6, '#bfe8ff', 0.3);
      }
      if (any) { this.audio.play('freeze'); this.audio.play('crit'); this.shake(0.4); this.hitstop = Math.max(this.hitstop, 0.07); }
      // 빙폭진 Ⅴ: 다시 한 번 빙결진
      if (o.renova) this.after(0.35, () => this.skillFrost(pl, { at: c, mul: (o.mul || 1) * 0.8, freeze: 1.5 }));
    });
  }

  // 요정 화살비: 하늘로 쏜 화살이 조준한 곳에 비처럼 쏟아짐
  skillArrowRain(pl, o = {}) {
    const c = this.aimPoint(pl, 6);
    const R = o.R || 3;
    const col = o.fire ? '#ffb060' : '#9aff8a';
    this.fx.circle(c, R * 1.1, col, 1.7, 1.6);
    const tele = this.fx.ring(c, R, col, 1, 1);
    this.audio.play('bow');
    this.audio.play('bowskill');
    // 하늘로 솟는 화살
    for (let i = 0; i < 5; i++) this.fx.add.emit({ x: pl.pos.x + rand(-0.2, 0.2), y: pl.y + 1.4, z: pl.pos.z + rand(-0.2, 0.2), vx: rand(-0.5, 0.5), vy: 18, vz: rand(-0.5, 0.5), life: 0.4, size: 3, color: '#e8ffd8', color2: '#3aa83a' });
    this.rains.push({ c, R, t: -0.35, dur: o.dur || (o.fire ? 1.4 : 1.2), acc: 0, tele, fire: !!o.fire, mul: o.mul || 1, burn: o.burn });
  }

  // 요정 회오리 정령: 앞으로 나아가며 주변 적을 빨아들여 계속 상처를 입히는 바람 소용돌이
  skillTornado(pl, o = {}) {
    const yaw = pl.yaw + (o.yawOff || 0);
    const dir = V(Math.sin(yaw), 0, Math.cos(yaw));
    const pos = V(pl.pos.x + dir.x * 1.5, pl.y, pl.pos.z + dir.z * 1.5);
    const rings = [];
    for (let i = 0; i < 4; i++) {
      const mat = new THREE.MeshBasicMaterial({ color: i % 2 ? '#c8ffb0' : '#ffffff', transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false });
      const r = new THREE.Mesh(new THREE.TorusGeometry(1, 0.05, 4, 20), mat);
      r.rotation.x = Math.PI / 2;
      this.scene.add(r);
      rings.push(r);
    }
    this.tornados.push({ pos, dir, t: 0, dur: o.dur || (o.orbit ? 4.6 : 3.2), tick: 0, rings, orbit: o.orbit ? pl : null, ang: yaw + (o.angOff || 0), mul: o.mul || 1 });
    if (o.quiet) return;
    this.audio.play('tornado');
    this.fx.circle(pos, 2, '#9aff8a', 0.8, 4);
    this.ui.flash('#9aff8a', 0.15);
  }

  updateSkills(dt) {
    this.updateSkillFx(dt);
    updateLancer(this, dt);
    // 화살비
    for (let i = this.rains.length - 1; i >= 0; i--) {
      const r = this.rains[i];
      r.t += dt;
      if (r.t < 0) continue;
      r.acc += dt * 34;
      while (r.acc >= 1) {
        r.acc -= 1;
        const a = Math.random() * Math.PI * 2, d = Math.sqrt(Math.random()) * r.R;
        const tx = r.c.x + Math.cos(a) * d, tz = r.c.z + Math.sin(a) * d;
        const ty = this.world.heightAt(tx, tz);
        const from = V(tx + rand(-1, 1), ty + 9, tz + rand(-1, 1) - 1.5);
        const dir = V(tx, ty, tz).sub(from).normalize();
        const g = r.fire ? this.makeFireArrow() : this.makeArrowMesh(true);
        g.position.copy(from);
        g.lookAt(from.clone().add(dir));
        this.scene.add(g);
        this.projectiles.push({ owner: 'fx', kind: 'rainArrow', pos: from, dir, speed: 30, life: 1, mesh: g, groundY: ty, fire: r.fire, mul: r.mul, burn: r.burn });
      }
      if (r.t >= r.dur) { this.fx.removeRing(r.tele); this.rains.splice(i, 1); }
    }
    // 회오리 정령
    for (let i = this.tornados.length - 1; i >= 0; i--) {
      const T = this.tornados[i];
      T.t += dt;
      if (T.orbit) {
        // 태풍의 눈: 내 주위를 맴돎
        T.ang += dt * 2.3;
        const pp = T.orbit.pos, r = Math.min(2.6, 0.8 + T.t * 4);
        T.pos.set(pp.x + Math.sin(T.ang) * r, pp.y, pp.z + Math.cos(T.ang) * r);
      } else this.world.move(T.pos, T.dir.x * 3 * dt, T.dir.z * 3 * dt, 0.4);
      T.pos.y = this.world.heightAt(T.pos.x, T.pos.z);
      const fade = Math.min(1, T.t / 0.25) * Math.min(1, (T.dur - T.t) / 0.4);
      T.rings.forEach((ring, k) => {
        const h = 0.3 + k * 0.8;
        ring.position.set(T.pos.x + Math.sin(T.t * 7 + k) * 0.12, T.pos.y + h, T.pos.z + Math.cos(T.t * 7 + k) * 0.12);
        ring.scale.setScalar((0.5 + k * 0.45) * fade);
        ring.rotation.z += dt * (8 + k * 2);
        ring.material.opacity = 0.45 * fade;
      });
      // 나선으로 감도는 바람 입자와 잎사귀
      for (let k = 0; k < 10; k++) {
        const h = Math.random() * 3.2;
        const ang = T.t * 9 + h * 2.2 + Math.random() * 6.28;
        const rr = (0.25 + h * 0.4) * fade;
        this.fx.add.emit({ x: T.pos.x + Math.cos(ang) * rr, y: T.pos.y + h, z: T.pos.z + Math.sin(ang) * rr, vx: -Math.sin(ang) * 4, vy: 1.2, vz: Math.cos(ang) * 4, life: 0.25, size: 2, color: '#f0ffe8', color2: '#5ac84a', alpha: 0.9 });
      }
      if (Math.random() < 0.5) this.fx.norm.emit({ x: T.pos.x + rand(-1, 1), y: T.pos.y + rand(0.2, 2.5), z: T.pos.z + rand(-1, 1), vx: rand(-3, 3), vy: rand(1, 3), vz: rand(-3, 3), wob: 2, life: 0.8, size: 2, color: Math.random() < 0.5 ? '#8ad06a' : '#d8f0a0' });
      if (Math.random() < 0.3) this.fx.dust(T.pos.x, T.pos.y, T.pos.z, 1);
      // 빨아들이기
      for (const e of this.enemiesIn(T.pos, 3)) {
        const dx = T.pos.x - e.pos.x, dz = T.pos.z - e.pos.z, d = Math.hypot(dx, dz) || 1;
        const pull = (e.isBoss ? 0.8 : 3.4) * dt;
        if (d > 0.4) this.world.move(e.pos, (dx / d) * pull, (dz / d) * pull, e.moveR ?? e.radius);
      }
      T.tick -= dt;
      if (T.tick <= 0) {
        T.tick = 0.25;
        for (const e of this.enemiesIn(T.pos, 1.7)) {
          this.damageEnemy(e, Math.round(rand(7, 10) * (T.mul || 1)), false, 0.5, 0.25);
          const c = e.center();
          this.fx.spark(c.x, c.y, c.z, 4, '#e8ffd8', 3);
        }
      }
      if (T.t >= T.dur) {
        for (const ring of T.rings) { this.scene.remove(ring); ring.geometry.dispose(); ring.material.dispose(); }
        for (let k = 0; k < 30; k++) this.fx.norm.emit({ x: T.pos.x, y: T.pos.y + rand(0.3, 2.5), z: T.pos.z, vx: rand(-5, 5), vy: rand(0, 3), vz: rand(-5, 5), wob: 2, drag: 2, life: rand(0.6, 1.1), size: 2, color: Math.random() < 0.5 ? '#8ad06a' : '#d8f0a0' });
        this.fx.ring(T.pos, 2.2, '#c8ffb0', 0.35);
        this.tornados.splice(i, 1);
      }
    }
  }

  // ---------- 파생 기술 효과 ----------
  clearSkillFx() {
    for (const o of this.orbits) for (const b of o.blades) drop(this.scene, b);
    for (const m of this.marks) drop(this.scene, m.mesh);
    this.storms = []; this.fires = []; this.orbits = []; this.marks = [];
    clearLancer(this);
  }

  // 낙인섬: 붉은 낙인이 1초 뒤 터짐
  markEnemy(e, o = {}) {
    if (this.marks.some((m) => m.e === e)) return;
    const mesh = new THREE.Mesh(new THREE.RingGeometry(0.28, 0.4, 4), new THREE.MeshBasicMaterial({ color: '#ff3a2a', transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    mesh.userData.noOutline = true;
    this.scene.add(mesh);
    this.marks.push({ e, mesh, t: 0, dur: 1.0, R: o.markR || 2, mul: o.mul || 1, spread: o.spread && !o.child, twice: o.twice });
  }

  // 검무 결계: 빛나는 칼날 셋이 몸 주위를 돎
  startBladeRing(pl, o = {}) {
    if (pl.dead) return;
    const blades = [];
    for (let i = 0; i < (o.n || 3); i++) {
      const g = new THREE.Group();
      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.05, 1.1), new THREE.MeshBasicMaterial({ color: '#e8f8ff' }));
      const edge = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.06, 1.0), new THREE.MeshBasicMaterial({ color: '#7fd8ff' }));
      edge.position.x = 0.04;
      g.add(blade, edge);
      this.scene.add(g);
      blades.push(g);
    }
    this.orbits.push({ pl, blades, t: 0, dur: o.dur || 5, tick: 0, ang: 0, R: o.R || 2.0, mul: o.mul || 1, shoot: o.shoot, shootT: 1 });
    this.audio.play('draw');
    this.fx.ring(V(pl.pos.x, pl.y, pl.pos.z), 2.4, '#bfe8ff', 0.35);
  }

  // 요정 유성시: 거대한 화살 다섯 대가 차례로 내리꽂힘
  skillMeteor(pl, o = {}) {
    const N = o.n || 5;
    const c = this.aimPoint(pl, 6);
    this.fx.circle(c, 3.4, '#d8ffb0', 2.0, 1.2);
    const tele = this.fx.ring(c, 3.0, '#d8ffb0', 1, 1);
    this.audio.play('bow');
    this.audio.play('bowskill');
    for (let i = 0; i < 4; i++) this.fx.add.emit({ x: pl.pos.x, y: pl.y + 1.4, z: pl.pos.z, vx: rand(-0.4, 0.4), vy: 20, vz: rand(-0.4, 0.4), life: 0.4, size: 4, color: '#ffffff', color2: '#7aff5a' });
    for (let k = 0; k < N; k++) {
      this.after(0.45 + k * 0.2, () => {
        const a = Math.random() * Math.PI * 2, d = k === 0 ? 0 : rand(0.8, 2.4);
        const tx = c.x + Math.cos(a) * d, tz = c.z + Math.sin(a) * d;
        const ty = this.world.heightAt(tx, tz);
        const from = V(tx + 1.2, ty + 12, tz - 2.5);
        const dir = V(tx, ty, tz).sub(from).normalize();
        const g = this.makeArrowMesh(true);
        g.scale.set(3.2, 3.2, 3);
        g.position.copy(from);
        g.lookAt(from.clone().add(dir));
        this.scene.add(g);
        if (o.big) g.scale.set(4.2, 4.2, 3.8);
        this.projectiles.push({ owner: 'fx', kind: 'rainArrow', pos: from, dir, speed: 34, life: 1.2, mesh: g, groundY: ty, big: true, mul: o.mul || 1, huge: o.big });
        if (k === N - 1) this.after(0.4, () => this.fx.removeRing(tele));
      });
    }
  }

  makeFireArrow() {
    const g = this.makeArrowMesh(false);
    g.children[0].material.color.set('#ff8a3a');
    g.children[1].material.color.set('#fff0a0');
    return g;
  }

  updateSkillFx(dt) {
    // 뇌운: 먹구름이 주변 적에게 번개를 떨어뜨림
    for (let i = this.storms.length - 1; i >= 0; i--) {
      const S = this.storms[i];
      S.t += dt;
      for (let k = 0; k < 3; k++) {
        const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * S.R;
        this.fx.norm.emit({ x: S.c.x + Math.cos(a) * r, y: S.c.y + 5 + rand(-0.4, 0.4), z: S.c.z + Math.sin(a) * r, vx: rand(-0.3, 0.3), vz: rand(-0.3, 0.3), life: 0.6, size: rand(4, 7), endSize: 3, color: Math.random() < 0.3 ? '#4a4060' : '#2a2438', alpha: 0.85 });
      }
      if (Math.random() < dt * 8) this.fx.add.emit({ x: S.c.x + rand(-S.R, S.R) * 0.8, y: S.c.y + 4.8, z: S.c.z + rand(-S.R, S.R) * 0.8, life: 0.08, size: 6, color: '#e8e0ff' });
      S.tick -= dt;
      if (S.tick <= 0) {
        S.tick = S.every || 0.55;
        const vs = this.enemiesIn(S.c, S.R).sort(() => Math.random() - 0.5);
        for (const e of vs.slice(0, S.hits || 1)) {
          const at = V(e.pos.x, e.y, e.pos.z);
          this.fx.bolt(at, 1.0);
          this.fx.ring(at, 1.4, '#d8c8ff', 0.25);
          this.damageEnemy(e, Math.round(rand(24, 30) * (S.mul || 1)), false, 2, 0.5);
          this.audio.play('thunder');
          this.shake(0.2);
        }
      }
      if (S.t >= S.dur) this.storms.splice(i, 1);
    }
    // 불길
    for (let i = this.fires.length - 1; i >= 0; i--) {
      const F = this.fires[i];
      F.t += dt;
      const k = 1 - F.t / F.dur;
      if (Math.random() < 0.8) this.fx.add.emit({ x: F.pos.x + rand(-0.35, 0.35), y: F.pos.y + 0.05, z: F.pos.z + rand(-0.35, 0.35), vx: rand(-0.2, 0.2), vy: rand(1, 2.4) * k * (F.big ? 2.2 : 1), vz: rand(-0.2, 0.2), life: rand(0.25, 0.5), size: rand(2, 4) * (0.5 + k * 0.5), endSize: 1, color: '#ffe080', color2: '#ff2a00', flicker: 0.3 });
      F.tick -= dt;
      if (F.tick <= 0) {
        F.tick = 0.3;
        for (const e of this.enemiesIn(F.pos, F.big ? 1.3 : 0.9)) this.damageEnemy(e, Math.round(rand(5, 7) * (F.mul || 1)), false, 0.2, 0.05);
      }
      if (F.t >= F.dur) this.fires.splice(i, 1);
    }
    // 검무 결계
    for (let i = this.orbits.length - 1; i >= 0; i--) {
      const O = this.orbits[i], pl = O.pl;
      O.t += dt;
      O.ang += dt * 6.5;
      const fade = Math.min(1, O.t / 0.2) * Math.min(1, (O.dur - O.t) / 0.3);
      O.blades.forEach((b, k) => {
        const a = O.ang + (k / O.blades.length) * Math.PI * 2;
        const r = O.R * fade;
        b.position.set(pl.pos.x + Math.sin(a) * r, pl.y + 0.8 + Math.sin(O.t * 5 + k) * 0.1, pl.pos.z + Math.cos(a) * r);
        b.rotation.y = a + Math.PI / 2;
        b.scale.setScalar(Math.max(0.01, fade));
        if (Math.random() < 0.6) this.fx.add.emit({ x: b.position.x, y: b.position.y, z: b.position.z, life: 0.18, size: 3, endSize: 1, color: '#ffffff', color2: '#5ab8ff' });
      });
      O.tick -= dt;
      if (O.tick <= 0) {
        O.tick = 0.3;
        for (const e of this.enemiesIn(pl.pos, O.R + 0.7)) {
          this.damageEnemy(e, Math.round(rand(9, 12) * O.mul), false, 1.5, 0.15);
          const c = e.center();
          this.fx.spark(c.x, c.y, c.z, 5, '#e8f8ff', 4);
        }
      }
      // 검무 결계 Ⅴ: 가끔 가까운 적에게 작은 검기
      if (O.shoot && !pl.dead) {
        O.shootT -= dt;
        const t = this.enemies.find((e) => !e.dead && !e.spawning && Math.hypot(e.pos.x - pl.pos.x, e.pos.z - pl.pos.z) < 9);
        if (O.shootT <= 0 && t) {
          O.shootT = 1;
          const y0 = pl.yaw;
          pl.yaw = Math.atan2(t.pos.x - pl.pos.x, t.pos.z - pl.pos.z);
          this.spawnSwordWave(pl, { scale: 0.6, dmgMul: 0.55 * O.mul, quiet: true });
          pl.yaw = y0;
          this.audio.play('swing');
        }
      }
      if (O.t >= O.dur || pl.dead) { for (const b of O.blades) drop(this.scene, b); this.orbits.splice(i, 1); }
    }
    // 낙인
    for (let i = this.marks.length - 1; i >= 0; i--) {
      const M = this.marks[i], e = M.e;
      M.t += dt;
      const c = e.center();
      M.mesh.position.set(c.x, c.y + (e.isBoss ? 2.4 : 1.2), c.z);
      M.mesh.rotation.z += dt * 5;
      M.mesh.lookAt(this.pixel.camera.position);
      M.mesh.scale.setScalar(1 + M.t * 0.6 + Math.sin(M.t * 30) * 0.08);
      if (M.t >= M.dur || e.dead) {
        drop(this.scene, M.mesh);
        this.marks.splice(i, 1);
        if (e.dead && M.t < M.dur * 0.5) continue;
        const at = V(e.pos.x, e.y, e.pos.z);
        this.fx.ring(at, 2.2, '#ff5a3a', 0.35);
        this.fx.cross(c.clone(), '#ff6a4a', e.isBoss ? 5.5 : 4, 0.4);
        this.fx.colorFire(at.x, at.y + 0.6, at.z, 30, 0.6, '#ffd0a0', '#ff2a10');
        if (!e.dead) this.damageEnemy(e, Math.round(rand(52, 60) * M.mul), true, 6, 0.5);
        for (const o of this.enemiesIn(at, M.R)) {
          if (o === e) continue;
          this.damageEnemy(o, Math.round(rand(24, 30) * M.mul), false, 5, 0.3);
          // 낙인섬 Ⅲ: 주변 적에게 낙인이 옮겨 붙음 (한 번만)
          if (M.spread && !o.dead) this.markEnemy(o, { markR: M.R, mul: M.mul * 0.7, child: true });
        }
        // 낙인섬 Ⅴ: 한 번 더 터짐
        if (M.twice && !e.dead) this.markEnemy(e, { markR: M.R, mul: M.mul * 0.8, child: true });
        this.audio.play('crit');
        this.shake(0.35);
      }
    }
  }

  // 떨어지는 화살비 화살
  rainArrowUpdate(pr) {
    pr.mesh.position.copy(pr.pos);
    if (pr.fire && Math.random() < 0.7) this.fx.add.emit({ x: pr.pos.x, y: pr.pos.y, z: pr.pos.z, vy: 1, life: 0.2, size: 3, endSize: 1, color: '#ffe080', color2: '#ff3010' });
    if (pr.big) {
      // 유성시: 꼬리 빛 + 땅에 닿으면 폭발
      for (let k = 0; k < 6; k++) this.fx.add.emit({ x: pr.pos.x + rand(-0.3, 0.3), y: pr.pos.y + rand(0, 1), z: pr.pos.z + rand(-0.3, 0.3), vx: rand(-0.5, 0.5), vy: 2, vz: rand(-0.5, 0.5), life: rand(0.3, 0.6), size: rand(3, 5), endSize: 1, color: '#ffffff', color2: '#7aff5a' });
      if (pr.pos.y <= pr.groundY + 0.05) {
        pr.life = 0;
        const at = V(pr.pos.x, pr.groundY, pr.pos.z);
        this.fx.ring(at, 2.6, '#e8ffc8', 0.4);
        this.fx.ring(at, 1.3, '#ffffff', 0.25);
        this.fx.scorch(at, 1.4, '#1a2a12', 2.2);
        this.fx.spark(at.x, at.y + 0.3, at.z, 24, '#f0ffd8', 9);
        for (let i = 0; i < 30; i++) { const a = Math.random() * Math.PI * 2, s = rand(2, 7); this.fx.norm.emit({ x: at.x, y: at.y + 0.2, z: at.z, vx: Math.cos(a) * s, vy: rand(2, 6), vz: Math.sin(a) * s, g: 14, life: rand(0.4, 0.8), size: 3, color: '#a89878', floor: at.y }); }
        const RR = pr.huge ? 3.1 : 2.3;
        if (pr.huge) this.fx.ring(at, RR + 0.6, '#ffffff', 0.4);
        for (const e of this.enemiesIn(at, RR)) { const crit = Math.random() < 0.2; this.damageEnemy(e, Math.round(rand(40, 48) * (pr.mul || 1) * (crit ? 1.8 : 1)), crit, 7, 0.5); }
        this.audio.play('thunder');
        this.shake(0.5);
        this.hitstop = Math.max(this.hitstop, 0.05);
      }
      return;
    }
    if (pr.pos.y <= pr.groundY + 0.05) {
      pr.life = 0;
      if (pr.fire) {
        // 불화살: 떨어진 곳에서 작게 터짐
        this.fx.ring(V(pr.pos.x, pr.groundY, pr.pos.z), 1.2, '#ffb050', 0.25);
        for (let i = 0; i < 8; i++) this.fx.add.emit({ x: pr.pos.x, y: pr.groundY + 0.1, z: pr.pos.z, vx: rand(-2, 2), vy: rand(1, 3), vz: rand(-2, 2), life: rand(0.3, 0.5), size: rand(2, 4), endSize: 1, color: '#ffe080', color2: '#ff3010' });
        for (const e of this.enemiesIn(pr.pos, 1.3)) this.damageEnemy(e, Math.round(rand(6, 8) * (pr.mul || 1)), false, 0.5, 0.1);
        if (pr.burn && Math.random() < 0.25) this.fires.push({ pos: V(pr.pos.x, pr.groundY, pr.pos.z), t: 0, dur: 2.5, tick: 0, mul: pr.mul || 1 });
      }
      this.fx.dust(pr.pos.x, pr.groundY, pr.pos.z, 2);
      this.fx.add.emit({ x: pr.pos.x, y: pr.groundY + 0.1, z: pr.pos.z, life: 0.2, size: 4, endSize: 1, color: '#e8ffd8' });
      for (const e of this.enemiesIn(pr.pos, 0.8)) {
        const crit = Math.random() < 0.15;
        this.damageEnemy(e, Math.round(rand(9, 12) * (pr.mul || 1) * (crit ? 1.8 : 1)), crit, 1, 0.15);
      }
      if (Math.random() < 0.3) this.audio.play('arrowhit');
    }
  }
}
