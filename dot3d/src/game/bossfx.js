// Game의 한 부분: 보스 패턴 도우미 (바닥 경고·불바다·구슬·소환) · 완벽한 회피
//  main.js의 Game 클래스에서 떼어 낸 메서드들 (main.js가 Game.prototype에 붙임 — this는 game)
import * as THREE from 'three';
import { rand } from '../util.js';
import { V } from './shared.js';

export class BossfxPart {
  // 위험 지대: 예고 원을 보여 준 뒤 터짐 (여러 보스가 함께 씀)
  hazards(spots, { r = 1.4, delay = 1.0, color = '#ff6a2a', dmg = 20, step = 0.08, onHit, boom } = {}) {
    const p = this.player;
    spots.forEach((at, i) => {
      this.fx.circle(at, r, this.fx.warn(color), delay + i * step, 3);
      this.after(delay + i * step, () => {
        boom ? boom(at) : (this.fx.spark(at.x, at.y + 0.3, at.z, 14, color, 6), this.fx.ring(at, r, color, 0.3));
        this.audio.play('impact');
        if (!p.dead && Math.hypot(p.pos.x - at.x, p.pos.z - at.z) < r + p.radius && p.damage(dmg, at) && onHit) onHit();
      });
    });
  }

  aroundPlayer(n, rMin, rMax, includeSelf = true) {
    const p = this.player, out = includeSelf ? [V(p.pos.x, p.y, p.pos.z)] : [];
    while (out.length < n) {
      const a = Math.random() * Math.PI * 2, d = rand(rMin, rMax);
      const x = p.pos.x + Math.cos(a) * d, z = p.pos.z + Math.sin(a) * d;
      out.push(V(x, this.world.heightAt(x, z), z));
    }
    return out;
  }

  // 두억시니: "금 나와라 뚝딱!" 금덩이가 쏟아져 터짐
  goldRain(w) {
    this.hazards(this.aroundPlayer(w.phase === 3 ? 9 : 6, 1.5, 5), {
      r: 1.5, delay: 1.0, color: '#ffd040', dmg: Math.round(w.dmg * 0.7),
      boom: (at) => { this.fx.coins(at.x, at.y + 0.5, at.z, 10); this.fx.colorFire(at.x, at.y + 0.2, at.z, 20, 0.6, '#fff0a0', '#ffa000'); this.fx.ring(at, 1.6, '#ffe080', 0.3); },
    });
  }

  // 사방으로 퍼지는 구슬 고리
  orbRing(w, n, rot = 0) {
    for (let i = 0; i < n; i++) this.spawnOrb(w, rot + (i / n) * Math.PI * 2);
  }

  // 이무기 2단계: 주위에서 물기둥이 솟음 (맞으면 느려짐)
  geysers(w) {
    const p = this.player;
    this.hazards(this.aroundPlayer(5, 2, 6), {
      r: 1.3, delay: 1.1, color: '#2affd0', dmg: Math.round(w.dmg * 0.6), step: 0.12, onHit: () => p.slowFor(1.4, '물기둥에 휩쓸렸다!'),
      boom: (at) => { for (let k = 0; k < 30; k++) this.fx.add.emit({ x: at.x + rand(-0.5, 0.5), y: at.y + 0.2, z: at.z + rand(-0.5, 0.5), vx: rand(-0.6, 0.6), vy: rand(6, 11), vz: rand(-0.6, 0.6), g: 14, life: 0.8, size: rand(3, 5), endSize: 1, color: '#e8fff8', color2: '#2a9aaa' }); },
    });
  }

  // 저승사자 2단계: 명부 낙인이 플레이어를 쫓아 네 번 찍힘
  markChase(w) {
    const p = this.player;
    for (let i = 0; i < 4; i++) this.after(0.3 + i * 0.45, () => {
      if (w.dead) return;
      this.hazards([V(p.pos.x, p.y, p.pos.z)], { r: 1.6, delay: 0.75, color: '#c84aff', dmg: Math.round(w.dmg * 0.6),
        boom: (at) => { this.fx.cross(V(at.x, at.y + 1, at.z), '#c890ff', 3, 0.35); this.fx.colorFire(at.x, at.y + 0.2, at.z, 18, 0.5, '#e0c8ff', '#4a0a8a'); } });
    });
  }

  // 불타는 땅 (불가사리 2단계 돌진 자국): 밟으면 불이 붙음
  addBurnZone(x, z, r, t) {
    this.burnZones = this.burnZones || [];
    if (this.burnZones.length > 40) this.burnZones.shift();
    this.burnZones.push({ x, z, r, t });
    this.fx.scorch(V(x, this.world.heightAt(x, z), z), r, '#2a0a04', t);
  }

  updateBurnZones(dt) {
    if (!this.burnZones?.length) return;
    const p = this.player;
    for (const b of this.burnZones) {
      b.t -= dt;
      if (Math.random() < dt * 6) this.fx.add.emit({ x: b.x + rand(-b.r, b.r) * 0.7, y: 0.1, z: b.z + rand(-b.r, b.r) * 0.7, vy: rand(1, 2), life: 0.5, size: 3, endSize: 1, color: '#ffc060', color2: '#ff2a00' });
      if (!p.dead && p.dashT <= 0 && Math.hypot(p.pos.x - b.x, p.pos.z - b.z) < b.r) p.burnFor(1.5);
    }
    this.burnZones = this.burnZones.filter((b) => b.t > 0);
  }

  // 완벽한 회피: 시간이 느려지고, 쿨타임이 줄고, 다음 한 방이 반격(확정 치명타)
  perfectDodge(from) {
    if (this.time - (this.lastDodge || -9) < 1.2) return;
    this.lastDodge = this.time;
    this.records.perfect();
    const p = this.player;
    this.slowmoT = 0.9;
    this.counterT = this.time + 2.5;
    p.dashCd = 0;
    p.skillCd = Math.max(0, p.skillCd - 1.5);
    p.cd2 = Math.max(0, (p.cd2 || 0) - 1.5);
    p.cd3 = Math.max(0, (p.cd3 || 0) - 1.5);
    p.ultCd = Math.max(0, (p.ultCd || 0) - 3);
    this.fx.ghost(p.rig, '#9ff0ff', 0.5);
    this.fx.ring(V(p.pos.x, p.y, p.pos.z), 2.4, '#bff4ff', 0.4);
    this.fx.number(p.pos.clone().add(V(0, 2.2, 0)), '완벽한 회피!', 'alert');
    this.ui.flash('#8ad8ff', 0.3);
    this.audio.play('blink');
    this.audio.play('skillhit');
  }

  // 적이 쏘는 구슬 (도깨비불·여우불·원귀의 저주 구슬). off: 조준 각도 비틀기
  spawnOrb(w, off = 0, opt = {}) {
    const p = this.player;
    const P = w.T.pal;
    const pos = V(w.pos.x, w.y + (w.isBoss ? 2 : w.rig ? 1.1 : 1.3), w.pos.z);
    const target = V(p.pos.x + p.vel.x * 0.3, p.y + 0.7, p.pos.z + p.vel.z * 0.3);
    const dir = target.sub(pos).setY(0).normalize();
    if (off) dir.applyAxisAngle(V(0, 1, 0), off);
    const mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(w.isBoss ? 0.28 : 0.2, 1), new THREE.MeshBasicMaterial({ color: P.orb }));
    mesh.position.copy(pos);
    this.scene.add(mesh);
    this.projectiles.push({ owner: 'enemy', kind: 'orb', pos, dir, speed: w.isBoss ? 7.5 : 5.5, life: 3.6, dmg: w.isBoss ? Math.round(w.dmg * 0.6) : w.dmg, mesh, radius: 0.45, hitSet: new Set(), y: pos.y, pal: P, slow: opt.slow || (w.T.poison ? 1.6 : 0) });
  }

  // 저승사자의 검은 초승달: 플레이어 쪽으로 세 줄기
  spawnDarkWaves(w) {
    const p = this.player;
    const base = Math.atan2(p.pos.x - w.pos.x, p.pos.z - w.pos.z);
    for (const off of [-0.35, 0, 0.35]) {
      const yaw = base + off;
      const dir = V(Math.sin(yaw), 0, Math.cos(yaw));
      const pos = V(w.pos.x, w.y + 0.8, w.pos.z).addScaledVector(dir, 1.2);
      const pr = { owner: 'enemy', kind: 'darkwave', pos, dir, speed: 9, life: 1.3, dmg: Math.round(w.dmg * 0.8), radius: 1.0, hitSet: new Set() };
      pr.vis = [
        this.fx.slash(pos, yaw, 0, { inner: 0.3, outer: 1.6, len: 2.2, dur: 1.3, color: '#6a1aaa', static: true, move: (a) => a.g.position.copy(pr.pos) }),
        this.fx.slash(pos, yaw, 0, { inner: 1.25, outer: 1.55, len: 2.0, dur: 1.3, color: '#e0c8ff', static: true, move: (a) => a.g.position.copy(pr.pos) }),
      ];
      this.projectiles.push(pr);
    }
    this.audio.play('swing3');
    this.shake(0.2);
  }


  // 불가사리: 삼켰던 쇳조각을 뿜어 하늘에서 떨어뜨림 (떨어질 자리를 붉은 원으로 예고)
  // 동장군: 고드름이 플레이어 주위로 떨어짐 (맞으면 느려짐)
  iceRain(w) {
    const p = this.player;
    const spots = [V(p.pos.x, p.y, p.pos.z)];
    for (let i = 0; i < 7; i++) {
      const a = Math.random() * Math.PI * 2, d = rand(1.8, 5.5);
      const x = p.pos.x + Math.cos(a) * d, z = p.pos.z + Math.sin(a) * d;
      spots.push(V(x, this.world.heightAt(x, z), z));
    }
    spots.forEach((at, i) => {
      this.fx.circle(at, 1.3, this.fx.warn('#8ad8ff'), 1.0 + i * 0.07, 3);
      this.after(1.0 + i * 0.07, () => {
        this.fx.streak(V(at.x, at.y + 7, at.z), V(at.x, at.y + 0.2, at.z), '#e8f8ff', 0.25, 0.3);
        this.fx.spark(at.x, at.y + 0.3, at.z, 16, '#e8f8ff', 7);
        this.fx.ring(at, 1.4, '#8ad8ff', 0.3);
        this.audio.play('freeze');
        if (Math.hypot(p.pos.x - at.x, p.pos.z - at.z) < 1.3 + p.radius && p.damage(Math.round(w.dmg * 0.7), at)) p.slowFor(1.4, '몸이 얼어붙는다!');
      });
    });
  }

  ironRain(w) {
    const p = this.player;
    const spots = [V(p.pos.x, p.y, p.pos.z)];
    for (let i = 0; i < 6; i++) {
      const a = Math.random() * Math.PI * 2, d = rand(1.8, 5);
      const x = p.pos.x + Math.cos(a) * d, z = p.pos.z + Math.sin(a) * d;
      spots.push(V(x, this.world.heightAt(x, z), z));
    }
    spots.forEach((at, i) => {
      this.fx.circle(at, 1.3, this.fx.warn('#ff6a2a'), 1.0 + i * 0.08, 3);
      this.after(1.0 + i * 0.08, () => {
        this.fx.streak(V(at.x, at.y + 7, at.z), V(at.x, at.y + 0.2, at.z), '#ffb060', 0.25, 0.3);
        this.fx.spark(at.x, at.y + 0.3, at.z, 16, '#ffd090', 7);
        this.fx.ring(at, 1.4, '#ff8a3a', 0.3);
        this.fx.dust(at.x, at.y, at.z, 6);
        this.audio.play('impact');
        if (Math.hypot(p.pos.x - at.x, p.pos.z - at.z) < 1.3 + p.radius) p.damage(Math.round(w.dmg * 0.75), at);
      });
    });
  }

  // 협곡 용암 분화구: 몇 초마다 붉게 달아올랐다가 불기둥을 뿜음 (플레이어·적 모두 다침)
  updateVents(dt) {
    const p = this.player;
    if (this.mapId !== 'canyon' || !this.world.vents.length) return;
    for (const v of this.world.vents) {
      if (v.t === undefined) { v.t = Math.random() * 6; v.period = rand(6, 9); }
      v.t += dt;
      const warn = v.period - 1.3;
      if (v.t >= warn && !v.warned) {
        v.warned = true;
        if (Math.hypot(v.x - p.pos.x, v.z - p.pos.z) < 22) this.fx.circle(V(v.x, 0, v.z), 1.9, this.fx.warn('#ff4a1a'), 1.3, 4);
      }
      v.mat.emissiveIntensity = v.t >= warn ? 0.6 + (v.t - warn) * 2.4 : 0.4 + Math.sin(this.time * 2 + v.x) * 0.1;
      if (v.t >= v.period) {
        v.t = 0; v.warned = false; v.period = rand(6, 9);
        if (Math.hypot(v.x - p.pos.x, v.z - p.pos.z) > 26) continue;
        for (let i = 0; i < 40; i++) this.fx.add.emit({ x: v.x + rand(-0.4, 0.4), y: 0.2, z: v.z + rand(-0.4, 0.4), vx: rand(-1.2, 1.2), vy: rand(6, 12), vz: rand(-1.2, 1.2), g: 12, life: rand(0.6, 1.1), size: rand(3, 5), endSize: 1, color: '#ffe080', color2: '#ff2a00' });
        this.fx.ring(V(v.x, 0, v.z), 2, '#ff8a3a', 0.4);
        if (Math.hypot(v.x - p.pos.x, v.z - p.pos.z) < 12) { this.audio.play('fire'); this.shake(0.15); }
        if (Math.hypot(v.x - p.pos.x, v.z - p.pos.z) < 1.8 + p.radius && !p.dead) { if (p.damage(18 + this.round * 3, V(v.x, 0, v.z))) p.burnFor(2.5); }
        for (const e of this.enemies) {
          if (e.dead || e.spawning || e.isBoss) continue;
          if (Math.hypot(e.pos.x - v.x, e.pos.z - v.z) < 1.9) { e.hit(40, V(e.pos.x - v.x, 0, e.pos.z - v.z).normalize(), 6, 0.4); e.burnFor(2, 8); this.fx.number(e.center().clone().add(V(0, 0.5, 0)), 40, 'burn'); }
        }
      }
    }
  }

  bossSlam(boss, at, radius, dmg, big = false) {
    this.audio.play('slam');
    this.shake(big ? 0.9 : 0.6);
    this.alarm = 2;
    this.fx.ring(at, radius * 1.15, '#ffd6a0', 0.45);
    this.fx.ring(at, radius * 0.7, '#ffffff', 0.3);
    for (let i = 0; i < 40; i++) {
      const a = (i / 40) * Math.PI * 2;
      this.fx.norm.emit({ x: at.x + Math.cos(a) * radius * 0.6, y: at.y + 0.1, z: at.z + Math.sin(a) * radius * 0.6, vx: Math.cos(a) * 4, vy: rand(1, 3), vz: Math.sin(a) * 4, g: 6, drag: 3, life: rand(0.4, 0.8), size: 4, endSize: 1, color: '#c8bca0' });
    }
    for (let i = 0; i < 18; i++) this.fx.norm.emit({ x: at.x + rand(-1, 1), y: at.y + 0.2, z: at.z + rand(-1, 1), vx: rand(-3, 3), vy: rand(4, 8), vz: rand(-3, 3), g: 20, life: 1, size: 3, color: '#8a8478', floor: at.y });
    const p = this.player;
    if (Math.hypot(p.pos.x - at.x, p.pos.z - at.z) < radius + p.radius && Math.abs(p.pos.y - at.y) < 1.2) p.damage(dmg, at);
  }
}
