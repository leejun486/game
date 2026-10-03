// 창술사: 기본 공격(찌르기·휘둘러 베기)과 기술 셋 (용아창 / 낙화창 / 천창우), 파생 갈래와 각성
// 게임(g)의 공용 도구(피해, 이펙트, 소리)를 빌려 씀. 떨어지는 창·기둥·회선창처럼 시간이 걸리는 것은 g.lancerFx 목록에서 매 프레임 갱신
import * as THREE from 'three';
import { rand, angleDiff } from './util.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

// 선분(앞으로 L, 폭 W) 안의 적
function enemiesInLine(g, from, yaw, L, W) {
  const dx = Math.sin(yaw), dz = Math.cos(yaw);
  return g.enemies.filter((e) => {
    if (e.dead || e.spawning) return false;
    const rx = e.pos.x - from.x, rz = e.pos.z - from.z;
    const t = rx * dx + rz * dz;
    if (t < -0.3 || t > L + e.radius) return false;
    return Math.abs(rx * dz - rz * dx) < W + e.radius;
  });
}

const crit = () => Math.random() < 0.15;
const hitAll = (g, list, base, knock, stun) => {
  for (const e of list) { const c = crit(); g.damageEnemy(e, Math.round(base * rand(0.9, 1.1) * (c ? 1.8 : 1)), c, knock, stun); }
  return list.length;
};

// 빛나는 창 한 자루 (떨어지는 창, 기둥, 회선창에 씀). 창끝이 로컬 -y
function spiritSpear(g, color = '#bfe8ff', len = 1.8, big = 1) {
  const grp = new THREE.Group();
  const add = (c, o) => new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: o, blending: THREE.AdditiveBlending, depthWrite: false });
  grp.add(new THREE.Mesh(new THREE.CylinderGeometry(0.035 * big, 0.035 * big, len, 6), add('#ffffff', 0.9)));
  const glow = new THREE.Mesh(new THREE.CylinderGeometry(0.09 * big, 0.09 * big, len, 6), add(color, 0.35));
  grp.add(glow);
  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.11 * big, 0.45 * big, 4), add('#ffffff', 0.95));
  tip.position.y = -len / 2 - 0.2 * big;
  tip.rotation.x = Math.PI;
  grp.add(tip);
  const tipGlow = new THREE.Mesh(new THREE.ConeGeometry(0.2 * big, 0.6 * big, 4), add(color, 0.4));
  tipGlow.position.copy(tip.position); tipGlow.rotation.x = Math.PI;
  grp.add(tipGlow);
  g.scene.add(grp);
  grp.userData.mats = grp.children.map((m) => m.material);
  grp.userData.base = grp.userData.mats.map((m) => m.opacity);
  return grp;
}
const fade = (grp, k) => grp.userData.mats.forEach((m, i) => { m.opacity = grp.userData.base[i] * k; });
const drop = (g, grp) => { g.scene.remove(grp); grp.traverse((o) => { if (o.isMesh) { o.geometry.dispose(); o.material.dispose(); } }); };

// 창기: 앞쪽으로 길게 꿰뚫는 빛줄기 (선 위 적 모두 피해)
function spearBeam(g, pl, o = {}) {
  const yaw = pl.yaw + (o.yawOff || 0);
  const L = o.L || 6.5, W = o.W || 0.7;
  const from = V(pl.pos.x, pl.y, pl.pos.z);
  const y = pl.y + 0.85;
  const to = V(from.x + Math.sin(yaw) * L, y, from.z + Math.cos(yaw) * L);
  const c1 = o.color || '#7fd8ff';
  g.fx.streak(V(from.x, y, from.z), to, '#ffffff', 0.35, W * 0.6);
  g.fx.streak(V(from.x, y, from.z), to, c1, 0.5, W * 1.8);
  for (let i = 0; i < 16; i++) {
    const k = i / 15;
    g.fx.add.emit({ x: from.x + (to.x - from.x) * k, y: y + rand(-0.2, 0.2), z: from.z + (to.z - from.z) * k, vx: Math.sin(yaw) * rand(2, 6), vy: rand(0, 1.5), vz: Math.cos(yaw) * rand(2, 6), drag: 3, life: rand(0.25, 0.5), size: 3, endSize: 1, color: '#ffffff', color2: c1 });
  }
  const n = hitAll(g, enemiesInLine(g, from, yaw, L, W), o.dmg || 40, o.knock ?? 6, o.stun ?? 0.3);
  if (!o.quiet) { g.audio.play('spearbeam'); g.fx.ring(from, 1.6, c1, 0.3); g.shake(0.2); }
  if (n) g.hitstop = Math.max(g.hitstop, 0.04);
  return to;
}

// ---------- 기본 공격 ----------
export function spearHit(g, pl, kind) {
  const yaw = pl.yaw;
  const origin = V(pl.pos.x, pl.y + 0.8, pl.pos.z);
  let hitAny = 0;
  if (kind === 32) {
    // 휘둘러 베기: 넓은 반원
    const R = 2.7;
    g.fx.slash(origin, yaw, 0, { dur: 0.18, outer: R, len: 3.4, color: '#ffcfa0' });
    g.fx.slash(origin, yaw, 0, { dur: 0.18, inner: R - 0.3, outer: R, len: 3.4, color: '#ffffff' });
    for (const e of g.enemies) {
      if (e.dead || e.spawning) continue;
      const dx = e.pos.x - pl.pos.x, dz = e.pos.z - pl.pos.z, d = Math.hypot(dx, dz);
      if (d > R + e.radius || (d > 0.6 && Math.abs(angleDiff(yaw, Math.atan2(dx, dz))) > 1.6)) continue;
      const c = crit();
      g.damageEnemy(e, Math.round(rand(22, 27) * (c ? 1.8 : 1)), c, 8, 0.35);
      hitAny++;
    }
  } else {
    // 찌르기: 앞으로 길게 꿰뚫음 (뒤에 선 적까지)
    const L = 3.1;
    const to = V(origin.x + Math.sin(yaw) * L, origin.y, origin.z + Math.cos(yaw) * L);
    g.fx.streak(origin, to, '#ffffff', 0.14, 0.18);
    g.fx.streak(origin, to, kind === 31 ? '#ffd8a0' : '#a8e4ff', 0.2, 0.5);
    g.fx.spark(to.x, to.y, to.z, 6, '#ffffff', 4);
    for (const e of enemiesInLine(g, V(pl.pos.x, pl.y, pl.pos.z), yaw, L, 0.55)) {
      const c = crit();
      g.damageEnemy(e, Math.round(rand(15, 19) * (c ? 1.8 : 1)), c, 4.5, 0.22);
      hitAny++;
    }
  }
  // 북 치기
  for (const dr of g.world.drums) {
    const dx = dr.pos.x - pl.pos.x, dz = dr.pos.z - pl.pos.z;
    if (Math.hypot(dx, dz) < 3.4 && Math.abs(angleDiff(yaw, Math.atan2(dx, dz))) < 1.2) { g.drumHit(dr); hitAny++; }
  }
  if (hitAny) g.shake(kind === 32 ? 0.2 : 0.1);
}

// ---------- K: 용아창 / 연환창 / 파천창 ----------
export function lancerSkill1(g, pl) {
  const br = g.branch(pl, 1), r = g.rank(pl, 1), M = g.rankPow(pl, 1);
  g.ui.flash('#7fd8ff', 0.15);
  if (br === 'a') {
    const n = r >= 5 ? 5 : r >= 3 ? 4 : 3;
    const gold = r >= 5;
    for (let i = 0; i < n; i++) {
      g.after(i * 0.11, () => {
        if (pl.dead) return;
        const off = (i % 2 ? 1 : -1) * Math.ceil(i / 2) * 0.09;
        const end = spearBeam(g, pl, { yawOff: off, L: 6.5, W: 0.6, dmg: 30 * M, knock: 3, stun: 0.2, color: gold ? '#ffd060' : '#7fd8ff', quiet: i > 0 });
        if (i > 0) g.audio.play('thrust');
        if (gold) g.after(0.15, () => g.boomAt(V(end.x, g.world.heightAt(end.x, end.z), end.z), 1.6, Math.round(26 * M), '#ffd060'));
      });
    }
  } else if (br === 'b') {
    const offs = r >= 5 ? [-0.35, 0, 0.35] : [0];
    for (const off of offs) {
      const end = spearBeam(g, pl, { yawOff: off, L: 10, W: 1.35, dmg: 72 * M, knock: 12, stun: 0.7, color: '#ff9a5a', quiet: off !== 0 });
      if (r >= 3) {
        // 지나간 자리에 벼락 셋
        for (let k = 1; k <= 3; k++) g.after(0.2 + k * 0.12, () => {
          const t = k / 3.2;
          const at = V(pl.pos.x + (end.x - pl.pos.x) * t, 0, pl.pos.z + (end.z - pl.pos.z) * t);
          at.y = g.world.heightAt(at.x, at.z);
          g.fx.bolt(at, 1.2);
          hitAll(g, g.enemiesIn(at, 1.6), 24 * M, 2, 0.5);
          if (k === 1) g.audio.play('thunder');
        });
      }
    }
    g.shake(0.45);
    g.ui.flash('#ffb070', 0.25);
  } else spearBeam(g, pl, { dmg: 40, L: 6.5 });
}

// ---------- L: 낙화창 / 연화낙 / 창룡출해 ----------
// 목표 지점으로 뛰어올라(무적) 내려찍음
function leap(g, pl, to, dur, onLand) {
  const from = pl.pos.clone();
  const D = V(to.x - from.x, 0, to.z - from.z);
  pl.yaw = Math.atan2(D.x, D.z);
  pl.invuln = Math.max(pl.invuln, dur + 0.15);
  g.fx.dust(from.x, pl.y, from.z, 10);
  g.audio.play('leap');
  let moved = 0;
  g.lancerFx.push({
    t: 0,
    update(dt) {
      this.t += dt;
      const k = Math.min(1, this.t / dur);
      const want = k - moved;
      if (want > 0) { g.world.move(pl.pos, D.x * want, D.z * want, pl.moveR); moved = k; }
      pl.hopH = Math.sin(k * Math.PI) * 1.7;
      pl.vel.set(0, 0, 0);
      if (Math.random() < 0.7) g.fx.add.emit({ x: pl.pos.x, y: pl.y + pl.hopH + 0.8, z: pl.pos.z, life: 0.3, size: 3, endSize: 1, color: '#ffe0f0', color2: '#ff7aa8' });
      if (k >= 1) { pl.hopH = 0; if (!pl.dead) onLand(V(pl.pos.x, pl.y, pl.pos.z)); return false; }
      return true;
    },
    end() { pl.hopH = 0; },
  });
}

function slam(g, at, R, dmg, color = '#ffc8e0') {
  g.fx.ring(at, R, color, 0.4);
  g.fx.ring(at, R * 0.5, '#ffffff', 0.25);
  g.fx.scorch(at, R * 0.55, '#1a1420', 2);
  g.fx.dust(at.x, at.y, at.z, 16);
  for (let i = 0; i < 26; i++) { const a = (i / 26) * Math.PI * 2, sp = rand(3, 7); g.fx.add.emit({ x: at.x, y: at.y + 0.2, z: at.z, vx: Math.cos(a) * sp, vy: rand(1, 4), vz: Math.sin(a) * sp, g: 8, drag: 2, life: rand(0.35, 0.7), size: 3, endSize: 1, color: '#ffffff', color2: color }); }
  hitAll(g, g.enemiesIn(at, R), dmg, 7, 0.8);
  g.audio.play('spearslam');
  g.shake(0.4);
  g.hitstop = Math.max(g.hitstop, 0.06);
}

// 꽃잎 충격파
function petals(g, at, R, dmg) {
  g.fx.ring(at, R, '#ff9ac0', 0.45, 1);
  for (let i = 0; i < 30; i++) { const a = Math.random() * Math.PI * 2, sp = rand(2, 5); g.fx.norm.emit({ x: at.x, y: at.y + 0.4, z: at.z, vx: Math.cos(a) * sp, vy: rand(0.5, 2.5), vz: Math.sin(a) * sp, wob: 2, drag: 1.5, life: rand(0.6, 1.1), size: 2, color: Math.random() < 0.5 ? '#ffb0d0' : '#ffffff' }); }
  hitAll(g, g.enemiesIn(at, R), dmg, 4, 0.3);
}

// 창 기둥: 적을 빨아들이다 터짐
function pillar(g, at, o) {
  const sp = spiritSpear(g, '#5ad8ff', 2.4, 1.4);
  sp.position.set(at.x, at.y + 1.0, at.z);
  g.fx.circle(at, o.R, '#5ad8ff', o.dur, 3);
  g.lancerFx.push({
    t: 0, tick: 0,
    update(dt) {
      this.t += dt; this.tick -= dt;
      sp.rotation.y += dt * 6;
      for (const e of g.enemiesIn(at, o.R)) {
        if (e.isBoss) continue;
        const dx = at.x - e.pos.x, dz = at.z - e.pos.z, d = Math.hypot(dx, dz) || 1;
        if (d > 0.5) g.world.move(e.pos, (dx / d) * dt * 4.2, (dz / d) * dt * 4.2, e.radius);
      }
      if (this.tick <= 0) {
        this.tick = 0.25;
        hitAll(g, g.enemiesIn(at, o.R * 0.6), o.tickDmg, 0.2, 0.15);
        g.fx.add.emit({ x: at.x + rand(-o.R, o.R) * 0.7, y: at.y + 0.1, z: at.z + rand(-o.R, o.R) * 0.7, vy: rand(1, 3), life: 0.5, size: 3, endSize: 1, color: '#bff4ff', color2: '#2a8aff' });
      }
      if (this.t >= o.dur) { g.boomAt(at, 2.8, Math.round(o.boom), '#7fd8ff'); return false; }
      return true;
    },
    end() { drop(g, sp); },
  });
}

export function lancerSkill2(g, pl) {
  const br = g.branch(pl, 2), r = g.rank(pl, 2), M = g.rankPow(pl, 2);
  const c = g.aimPoint(pl, 4, 8);
  // 너무 멀면 6칸까지만
  const dx = c.x - pl.pos.x, dz = c.z - pl.pos.z, d = Math.hypot(dx, dz);
  const to = d > 6 ? V(pl.pos.x + (dx / d) * 6, 0, pl.pos.z + (dz / d) * 6) : c;
  leap(g, pl, to, 0.36, (at) => {
    slam(g, at, 2.5, 55 * M);
    if (br === 'a') {
      const R = r >= 3 ? 4 : 3.2;
      g.after(0.3, () => petals(g, at, R, 26 * M));
      if (r >= 3) g.after(0.6, () => petals(g, at, R * 1.2, 20 * M));
      if (r >= 5) {
        // 주변 적 둘에게 연달아 뛰어듦
        let hops = 2, last = at;
        const next = () => {
          if (hops-- <= 0 || pl.dead) return;
          const tgt = g.enemies.filter((e) => !e.dead && !e.spawning && Math.hypot(e.pos.x - last.x, e.pos.z - last.z) > 1.2 && Math.hypot(e.pos.x - pl.pos.x, e.pos.z - pl.pos.z) < 8)
            .sort((a, b) => Math.hypot(a.pos.x - pl.pos.x, a.pos.z - pl.pos.z) - Math.hypot(b.pos.x - pl.pos.x, b.pos.z - pl.pos.z))[0];
          if (!tgt) return;
          leap(g, pl, V(tgt.pos.x, 0, tgt.pos.z), 0.3, (a2) => { last = a2; slam(g, a2, 2.3, 44 * M); petals(g, a2, 3, 20 * M); g.after(0.15, next); });
        };
        g.after(0.75, next);
      }
    } else if (br === 'b') {
      const o = { R: r >= 3 ? 5 : 4, dur: r >= 3 ? 3.2 : 2.4, tickDmg: 5 * M, boom: 40 * M };
      pillar(g, at, o);
      if (r >= 5) for (const s of [-1, 1]) {
        const a = pl.yaw + s * Math.PI / 2;
        const p2 = V(at.x + Math.sin(a) * 2.6, 0, at.z + Math.cos(a) * 2.6);
        p2.y = g.world.heightAt(p2.x, p2.z);
        pillar(g, p2, { ...o, R: o.R * 0.8 });
      }
      g.audio.play('tornado');
    }
  });
}

// ---------- I: 천창우 / 만창진 / 회선창 ----------
function fallingSpear(g, at, delay, o) {
  g.after(delay, () => {
    const sp = spiritSpear(g, o.color, 1.8, o.big || 1);
    const ring = g.fx.ring(at, o.R, o.color, 0.25, 1);
    let y = 7;
    sp.position.set(at.x, at.y + y, at.z);
    g.lancerFx.push({
      t: 0, landed: false,
      update(dt) {
        this.t += dt;
        if (!this.landed) {
          y = Math.max(0.7 * (o.big || 1), y - dt * 32);
          sp.position.y = at.y + y;
          if (y <= 0.7 * (o.big || 1) + 1e-3) {
            this.landed = true; this.t = 0;
            g.fx.dust(at.x, at.y, at.z, 6);
            g.fx.spark(at.x, at.y + 0.3, at.z, 8, '#ffffff', 5);
            hitAll(g, g.enemiesIn(at, o.R), o.dmg, 3, 0.3);
            if (o.big) { g.boomAt(at, o.R, Math.round(o.dmg * 0.5), o.color); g.ui.flash(o.color, 0.25); } else g.audio.play('spearfall');
          }
          return true;
        }
        fade(sp, 1 - this.t / 0.6);
        return this.t < 0.6;
      },
      end() { drop(g, sp); },
    });
    void ring;
  });
}

function spearRain(g, pl, o) {
  const c = g.aimPoint(pl, 6, 11);
  g.fx.circle(c, o.R, o.color, 1.4, 2);
  g.audio.play('chant');
  for (let i = 0; i < o.n; i++) {
    const a = Math.random() * Math.PI * 2, rr = Math.sqrt(Math.random()) * o.R;
    const at = V(c.x + Math.cos(a) * rr, 0, c.z + Math.sin(a) * rr);
    at.y = g.world.heightAt(at.x, at.z);
    fallingSpear(g, at, 0.25 + (i / o.n) * o.span, { R: 1.15, dmg: o.dmg, color: o.color });
  }
  if (o.finale) fallingSpear(g, V(c.x, c.y, c.z), 0.35 + o.span, { R: 3.2, dmg: o.finale, color: '#ffd060', big: 2.6 });
}

// 회선창: 던진 창이 그 자리에서 맴돌며 벰
function whirlSpear(g, pl, o) {
  const c = g.aimPoint(pl, 5, 10);
  const spears = [];
  for (let i = 0; i < o.n; i++) {
    const sp = spiritSpear(g, '#ffb070', 1.9, 1.1);
    sp.rotation.z = Math.PI / 2;
    spears.push(sp);
  }
  const start = V(pl.pos.x, pl.y + 1, pl.pos.z);
  g.audio.play('spinspear');
  g.lancerFx.push({
    t: 0, tick: 0, ang: 0,
    update(dt) {
      this.t += dt; this.tick -= dt; this.ang += dt * 14;
      if (this.t - (this.snd ?? 0) > 0.8) { this.snd = this.t; g.audio.play('spinspear'); }
      const fly = Math.min(1, this.t / 0.25);
      const cx = start.x + (c.x - start.x) * fly, cz = start.z + (c.z - start.z) * fly, cy = c.y + 0.9;
      spears.forEach((sp, i) => {
        const a = this.ang + (i / o.n) * Math.PI * 2;
        const off = o.n > 1 ? 1.0 : 0;
        sp.position.set(cx + Math.cos(a) * off, cy, cz + Math.sin(a) * off);
        sp.rotation.set(0, -a, Math.PI / 2);
      });
      if (fly >= 1 && this.tick <= 0) {
        this.tick = 0.2;
        const at = V(c.x, c.y, c.z);
        hitAll(g, g.enemiesIn(at, o.R), o.dmg, 0.6, 0.2);
        g.fx.slash(V(c.x, c.y + 0.9, c.z), this.ang, 0, { dur: 0.15, outer: o.R, len: 6.2, color: '#ffcfa0' });
      }
      if (this.t >= o.dur) {
        if (o.boom) g.boomAt(V(c.x, c.y, c.z), 3, Math.round(o.boom), '#ff9a5a');
        return false;
      }
      return true;
    },
    end() { spears.forEach((sp) => drop(g, sp)); },
  });
}

export function lancerSkill3(g, pl) {
  const br = g.branch(pl, 3), r = g.rank(pl, 3), M = g.rankPow(pl, 3);
  if (br === 'a') spearRain(g, pl, { n: r >= 5 ? 22 : r >= 3 ? 16 : 12, R: 3.6, span: 1.3, dmg: 22 * M, color: '#9ad8ff', finale: r >= 5 ? 90 * M : 0 });
  else if (br === 'b') whirlSpear(g, pl, { n: r >= 3 ? 2 : 1, R: r >= 3 ? 2.4 : 2.0, dur: r >= 3 ? 3 : 2.2, dmg: 10 * M, boom: r >= 5 ? 70 * M : 0 });
  else spearRain(g, pl, { n: 8, R: 2.6, span: 1.0, dmg: 22, color: '#bfe8ff' });
}

export function updateLancer(g, dt) {
  const L = g.lancerFx;
  if (!L.length) return;
  for (let i = L.length - 1; i >= 0; i--) {
    const f = L[i];
    if (!f.update(dt)) { f.end?.(); L.splice(i, 1); }
  }
}

export function clearLancer(g) {
  for (const f of g.lancerFx) f.end?.();
  g.lancerFx.length = 0;
  g.player.hopH = 0;
}
