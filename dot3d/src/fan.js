// 무희(부채): 바람을 부리는 원거리·제어 직업. 기본 공격(바람 칼날·회오리 부채질)과 기술 셋 (돌개바람 / 회오리 / 꽃바람)
// 게임(g)의 공용 도구(피해, 이펙트, 소리)를 빌려 씀. 날아가는 칼날·회오리·꽃바람은 g.lancerFx 목록에서 매 프레임 갱신 (lancer.js와 같은 목록)
import * as THREE from 'three';
import { rand, angleDiff } from './util.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const crit = () => Math.random() < 0.15;
const hit = (g, e, base, knock, stun) => { const c = crit(); g.damageEnemy(e, Math.round(base * rand(0.9, 1.1) * (c ? 1.8 : 1)), c, knock, stun); };
const alive = (e) => !e.dead && !e.spawning;
const add = (c, o) => new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: o, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
const drop = (g, obj) => { g.scene.remove(obj); obj.traverse((o) => { if (o.isMesh) { o.geometry.dispose(); o.material.dispose(); } }); };

// 초승달 모양 바람 칼날 (앞이 +z)
function bladeMesh(g, color, size = 1) {
  const grp = new THREE.Group();
  const arc = (r, w, c, o) => { const m = new THREE.Mesh(new THREE.RingGeometry(r - w, r, 20, 1, Math.PI * 0.18, Math.PI * 0.64), add(c, o)); m.rotation.x = -Math.PI / 2; m.rotation.z = Math.PI * 0; m.position.z = -r * 0.7; return m; };
  grp.add(arc(0.95 * size, 0.16 * size, '#ffffff', 0.85));
  grp.add(arc(1.0 * size, 0.42 * size, color, 0.4));
  g.scene.add(grp);
  return grp;
}
const fadeAll = (obj, k) => obj.traverse((o) => { if (o.isMesh) { o.userData.o0 ??= o.material.opacity; o.material.opacity = o.userData.o0 * k; } });

// 바람 칼날: 앞으로 날아가며 지나는 적을 한 번씩 벰 (꿰뚫음)
function windBlade(g, pl, o = {}) {
  const yaw = pl.yaw + (o.yawOff || 0);
  const dx = Math.sin(yaw), dz = Math.cos(yaw);
  const L = o.L || 9, speed = o.speed || 26, W = o.W || 0.8;
  const y = pl.y + 0.9;
  const start = V(pl.pos.x + dx * 0.2, y, pl.pos.z + dz * 0.2);
  const mesh = bladeMesh(g, o.color || '#9af0ff', o.size || 1);
  mesh.position.copy(start);
  mesh.rotation.y = yaw;
  const done = new Set();
  g.lancerFx.push({
    t: 0,
    update(dt) {
      this.t += dt;
      const d = Math.min(L, this.t * speed);
      const x = start.x + dx * d, z = start.z + dz * d;
      mesh.position.set(x, y, z);
      mesh.rotation.z = Math.sin(this.t * 30) * 0.08;
      if (Math.random() < 0.8) g.fx.norm.emit({ x: x + rand(-0.3, 0.3), y: y + rand(-0.2, 0.2), z: z + rand(-0.3, 0.3), vx: -dx * 2, vz: -dz * 2, wob: 1.5, drag: 2, life: 0.35, size: 2, color: o.petal && Math.random() < 0.5 ? '#ffb0d0' : '#e8fbff' });
      for (const e of g.enemies) {
        if (!alive(e) || done.has(e)) continue;
        const rx = e.pos.x - x, rz = e.pos.z - z;
        if (Math.hypot(rx, rz) < W + e.radius) { done.add(e); hit(g, e, o.dmg || 15, o.knock ?? 3, o.stun ?? 0.15); g.fx.spark(e.pos.x, y, e.pos.z, 5, '#ffffff', 4); if (o.once) { this.t = 99; break; } }
      }
      fadeAll(mesh, Math.min(1, (L - d) / 1.5 + 0.2));
      return d < L;
    },
    end() { drop(g, mesh); },
  });
  return done;
}

// 앞쪽 부채꼴(반지름 R, 반각 arc) 안의 적
function inCone(g, pl, R, arc) {
  return g.enemies.filter((e) => {
    if (!alive(e)) return false;
    const dx = e.pos.x - pl.pos.x, dz = e.pos.z - pl.pos.z, d = Math.hypot(dx, dz);
    return d <= R + e.radius && (d < 0.6 || Math.abs(angleDiff(pl.yaw, Math.atan2(dx, dz))) <= arc);
  });
}

// ---------- 기본 공격: 40·41 바람 칼날, 42 회오리 부채질(앞쪽을 크게 밀어냄) ----------
export function fanHit(g, pl, kind) {
  if (kind === 42) {
    const R = 4.2, origin = V(pl.pos.x, pl.y + 0.8, pl.pos.z);
    g.fx.slash(origin, pl.yaw, 0, { dur: 0.22, outer: R, len: 3.6, color: '#bff4ff' });
    g.fx.slash(origin, pl.yaw, 0, { dur: 0.22, inner: R - 0.4, outer: R, len: 3.6, color: '#ffffff' });
    for (let i = 0; i < 26; i++) {
      const a = pl.yaw + rand(-0.9, 0.9), sp = rand(5, 10);
      g.fx.norm.emit({ x: pl.pos.x, y: pl.y + rand(0.3, 1.3), z: pl.pos.z, vx: Math.sin(a) * sp, vy: rand(-0.5, 1), vz: Math.cos(a) * sp, wob: 2, drag: 3, life: rand(0.35, 0.6), size: 2, color: Math.random() < 0.3 ? '#ffb0d0' : '#e8fbff' });
    }
    const list = inCone(g, pl, R, 0.95);
    for (const e of list) hit(g, e, 23, 10, 0.45); // 넉넉히 밀어냄 (제어)
    if (list.length) g.shake(0.15);
    g.audio.play('gust');
  } else {
    windBlade(g, pl, { yawOff: kind === 41 ? 0.06 : -0.06, dmg: 18, L: 8.5, W: 1.0, color: kind === 41 ? '#ffd0e8' : '#9af0ff' });
    g.audio.play('fan');
  }
  // 북 치기
  for (const dr of g.world.drums) {
    const dx = dr.pos.x - pl.pos.x, dz = dr.pos.z - pl.pos.z;
    if (Math.hypot(dx, dz) < 6 && Math.abs(angleDiff(pl.yaw, Math.atan2(dx, dz))) < 0.6) g.drumHit(dr);
  }
}

// 돌개바람: 앞으로 굴러가는 바람 벽. 지나간 적을 멀리 밀고 잠깐 묶음
function gustWave(g, pl, o = {}) {
  const yaw = pl.yaw + (o.yawOff || 0);
  const dx = Math.sin(yaw), dz = Math.cos(yaw);
  const L = o.L || 8, W = o.W || 1.5, speed = o.speed || 16;
  const y = pl.y + 0.6;
  const start = V(pl.pos.x + dx * 0.5, y, pl.pos.z + dz * 0.5);
  const grp = new THREE.Group();
  for (let k = 0; k < 3; k++) {
    const m = new THREE.Mesh(new THREE.TorusGeometry(W * (0.75 + k * 0.18), 0.06 + k * 0.03, 4, 24, Math.PI), add(k === 1 ? (o.color || '#9af0ff') : '#ffffff', 0.55 - k * 0.12));
    m.position.y = -0.3 + k * 0.12;
    grp.add(m);
  }
  grp.position.copy(start);
  grp.rotation.y = yaw;
  g.scene.add(grp);
  const done = new Set();
  g.lancerFx.push({
    t: 0,
    update(dt) {
      this.t += dt;
      const d = Math.min(L, this.t * speed);
      const x = start.x + dx * d, z = start.z + dz * d;
      grp.position.set(x, y, z);
      grp.children.forEach((m, k) => { m.rotation.z = this.t * (10 + k * 4) * (k % 2 ? -1 : 1); });
      for (let i = 0; i < 3; i++) g.fx.norm.emit({ x: x + rand(-W, W) * dz, y: y + rand(-0.4, 0.8), z: z - rand(-W, W) * dx, vx: dx * rand(3, 7), vy: rand(0, 1), vz: dz * rand(3, 7), wob: 2, drag: 2.5, life: rand(0.3, 0.6), size: 2, color: o.gold ? '#ffe8a0' : '#e8fbff' });
      for (const e of g.enemies) {
        if (!alive(e)) continue;
        const rx = e.pos.x - x, rz = e.pos.z - z;
        const along = rx * dx + rz * dz, side = Math.abs(rx * dz - rz * dx);
        if (side > W + e.radius || along < -0.8 || along > 0.8) continue;
        if (!done.has(e)) { done.add(e); hit(g, e, o.dmg || 36, o.knock ?? 11, o.stun ?? 0.6); }
        // 바람 벽 앞에 선 적은 함께 밀려감 (보스는 조금만)
        if (!e.isBoss) g.world.move(e.pos, dx * speed * dt * 0.7, dz * speed * dt * 0.7, e.radius);
      }
      fadeAll(grp, Math.min(1, (L - d) / 1.2 + 0.15));
      if (d >= L && !this.end2) { this.end2 = true; o.onEnd?.(V(x, g.world.heightAt(x, z), z)); }
      return d < L;
    },
    end() { drop(g, grp); },
  });
}

// ---------- K: 돌개바람 / 삼풍 / 광풍 ----------
export function fanSkill1(g, pl) {
  const br = g.branch(pl, 1), r = g.rank(pl, 1), M = g.rankPow(pl, 1);
  g.ui.flash('#bff4ff', 0.12);
  g.audio.play('gust');
  if (br === 'a') {
    const n = r >= 3 ? 5 : 3, gold = r >= 5;
    for (let i = 0; i < n; i++) {
      const off = (i - (n - 1) / 2) * (r >= 3 ? 0.26 : 0.32);
      gustWave(g, pl, { yawOff: off, dmg: 26 * M, W: 1.0, L: 8, color: gold ? '#ffd060' : '#9af0ff', gold, onEnd: gold && i === (n - 1) / 2 ? (at) => g.boomAt(at, 2.4, Math.round(40 * M), '#ffd060') : null });
    }
  } else if (br === 'b') {
    const offs = r >= 5 ? [-0.4, 0, 0.4] : [0];
    for (const off of offs) {
      gustWave(g, pl, { yawOff: off, dmg: 62 * M, W: 2.3, L: 11, speed: 13, knock: 18, stun: 1.0, color: '#7ad8ff',
        onEnd: r >= 3 ? (at) => { // 끝에서 바람 칼날이 사방으로
          for (let k = 0; k < 8; k++) {
            const a = (k / 8) * Math.PI * 2;
            const fake = { pos: at, y: at.y - 0.3, yaw: a };
            windBlade(g, fake, { dmg: 16 * M, L: 4.5, speed: 18, W: 0.7, color: '#bff4ff' });
          }
        } : null });
    }
    g.shake(0.35);
  } else gustWave(g, pl, { dmg: 36 });
}

// 회오리: 목표 지점에 서서 적을 빨아들이며 벰
function tornado(g, at, o) {
  const grp = new THREE.Group();
  const rings = [];
  for (let k = 0; k < 6; k++) {
    const m = new THREE.Mesh(new THREE.TorusGeometry(1, 0.05 + k * 0.006, 4, 22), add(k % 2 ? (o.color || '#bff4ff') : '#ffffff', 0.5));
    m.rotation.x = Math.PI / 2;
    grp.add(m); rings.push(m);
  }
  grp.position.set(at.x, at.y, at.z);
  g.scene.add(grp);
  const R = o.R;
  g.fx.circle(at, R, o.color || '#9af0ff', o.dur, 3);
  g.lancerFx.push({
    t: 0, tick: 0,
    update(dt) {
      this.t += dt; this.tick -= dt;
      if (o.drift) { g.world.move(at, o.drift.x * dt, o.drift.z * dt, 0.4); at.y = g.world.heightAt(at.x, at.z); grp.position.set(at.x, at.y, at.z); }
      const fade = Math.min(1, this.t / 0.2) * Math.min(1, (o.dur - this.t) / 0.3);
      const big = o.big || 1;
      rings.forEach((m, k) => {
        const h = (0.2 + k * 0.55) * big;
        m.position.set(Math.sin(this.t * 8 + k) * 0.12, h, Math.cos(this.t * 8 + k) * 0.12);
        m.scale.setScalar((0.35 + k * 0.32) * big * Math.max(0.05, fade));
        m.rotation.z += dt * (9 + k * 2);
        m.material.opacity = 0.5 * fade;
      });
      if (Math.random() < 0.9) { const a = Math.random() * Math.PI * 2, rr = rand(0.3, R); g.fx.norm.emit({ x: at.x + Math.cos(a) * rr, y: at.y + rand(0, 2.5) * big, z: at.z + Math.sin(a) * rr, vx: -Math.sin(a) * 6, vy: rand(1, 3), vz: Math.cos(a) * 6, wob: 2, drag: 2, life: 0.5, size: 2, color: o.petal && Math.random() < 0.5 ? '#ffb0d0' : '#e8fbff' }); }
      for (const e of g.enemiesIn(at, R + 1.2)) {
        if (e.isBoss) continue;
        const dx = at.x - e.pos.x, dz = at.z - e.pos.z, d = Math.hypot(dx, dz) || 1;
        if (d > 0.4) g.world.move(e.pos, (dx / d) * dt * (o.pull || 4.5), (dz / d) * dt * (o.pull || 4.5), e.radius);
      }
      if (this.tick <= 0) {
        this.tick = 0.25;
        for (const e of g.enemiesIn(at, R)) hit(g, e, o.tickDmg, 0.2, o.lift ? 0.5 : 0.2);
        if (o.bolt && Math.random() < 0.5) { const e = g.enemiesIn(at, R)[0]; if (e) { g.fx.bolt(V(e.pos.x, e.pos.y, e.pos.z), 1); hit(g, e, o.tickDmg * 2.5, 1, 0.4); g.audio.play('thunder'); } }
      }
      if (this.t >= o.dur) { if (o.boom) g.boomAt(at, R + 0.6, Math.round(o.boom), o.color || '#9af0ff'); return false; }
      return true;
    },
    end() { drop(g, grp); },
  });
}

// ---------- L: 회오리 / 쌍회오리 / 용오름 ----------
export function fanSkill2(g, pl) {
  const br = g.branch(pl, 2), r = g.rank(pl, 2), M = g.rankPow(pl, 2);
  const c = g.aimPoint(pl, 5, 10);
  g.audio.play('tornado');
  if (br === 'a') {
    const n = r >= 3 ? 3 : 2;
    for (let i = 0; i < n; i++) {
      const a = pl.yaw + Math.PI / 2 + (i / n) * Math.PI * 2;
      const at = V(c.x + Math.sin(a) * 1.8, 0, c.z + Math.cos(a) * 1.8);
      at.y = g.world.heightAt(at.x, at.z);
      // 서로를 향해 천천히 모여듦
      tornado(g, at, { R: 2.1, dur: 2.8, tickDmg: 6 * M, drift: V((c.x - at.x) * 0.45, 0, (c.z - at.z) * 0.45), boom: r >= 5 ? 0 : 18 * M });
    }
    if (r >= 5) g.after(2.75, () => { g.boomAt(c, 3.6, Math.round(90 * M), '#bff4ff'); g.ui.flash('#e8fbff', 0.3); });
  } else if (br === 'b') {
    tornado(g, c, { R: r >= 3 ? 3.4 : 2.9, dur: r >= 3 ? 4 : 3.2, tickDmg: 9 * M, big: 1.6, pull: 6, lift: true, bolt: r >= 5, boom: 46 * M, color: '#7ad8ff' });
    g.shake(0.3);
  } else tornado(g, c, { R: 2.6, dur: 2.6, tickDmg: 6, boom: 24 });
}

// 꽃바람: 내 둘레를 도는 꽃잎 폭풍. 닿는 적을 베고 밖으로 밀어냄, 도는 동안 체력을 조금씩 채움
function petalStorm(g, pl, o) {
  const grp = new THREE.Group();
  const petals = [];
  const cols = ['#ffb0d0', '#ffffff', '#ffd8ea', '#bff4ff'];
  for (let i = 0; i < o.n; i++) {
    const m = new THREE.Mesh(new THREE.CircleGeometry(0.16, 6), add(cols[i % cols.length], 0.85));
    m.scale.set(1, 0.55, 1);
    grp.add(m);
    petals.push({ m, a: (i / o.n) * Math.PI * 2, h: rand(0.3, 1.8), r: rand(0.7, 1) });
  }
  g.scene.add(grp);
  g.fx.circle(V(pl.pos.x, pl.y, pl.pos.z), o.R, '#ffb0d0', 0.6, 3);
  g.lancerFx.push({
    t: 0, tick: 0, heal: 0,
    update(dt) {
      this.t += dt; this.tick -= dt;
      const fade = Math.min(1, this.t / 0.25) * Math.min(1, (o.dur - this.t) / 0.3);
      grp.position.set(pl.pos.x, pl.y, pl.pos.z);
      for (const p of petals) {
        p.a += dt * (o.spin || 4);
        const rr = o.R * p.r * (0.4 + 0.6 * Math.min(1, this.t * 3));
        p.m.position.set(Math.sin(p.a) * rr, p.h + Math.sin(this.t * 3 + p.a) * 0.15, Math.cos(p.a) * rr);
        p.m.rotation.set(this.t * 5 + p.a, p.a, 0);
        p.m.material.opacity = 0.85 * fade;
      }
      if (this.tick <= 0) {
        this.tick = 0.3;
        for (const e of g.enemiesIn(pl.pos, o.R)) {
          hit(g, e, o.tickDmg, 0, 0.15);
          if (!e.isBoss) { const dx = e.pos.x - pl.pos.x, dz = e.pos.z - pl.pos.z, d = Math.hypot(dx, dz) || 1; g.world.move(e.pos, (dx / d) * o.push, (dz / d) * o.push, e.radius); }
        }
      }
      // 체력: 초당 최대 체력의 o.heal
      this.heal += dt * pl.maxHp * o.heal;
      if (this.heal >= 1 && !pl.dead) { const n = Math.floor(this.heal); this.heal -= n; pl.hp = Math.min(pl.maxHp, pl.hp + n); }
      if (this.t >= o.dur) { if (o.boom) { g.boomAt(V(pl.pos.x, pl.y, pl.pos.z), o.R + 0.5, Math.round(o.boom), '#ffb0d0'); g.ui.flash('#ffd8ea', 0.25); } return false; }
      return !pl.dead;
    },
    end() { drop(g, grp); },
  });
}

// ---------- I: 꽃바람 / 꽃보라 / 태풍의 춤 ----------
export function fanSkill3(g, pl) {
  const br = g.branch(pl, 3), r = g.rank(pl, 3), M = g.rankPow(pl, 3);
  g.audio.play('chant');
  g.ui.flash('#ffd8ea', 0.15);
  if (br === 'a') petalStorm(g, pl, { n: 36, R: r >= 3 ? 4.6 : 4, dur: r >= 3 ? 4.5 : 3.5, tickDmg: 9 * M, push: 0.25, heal: r >= 5 ? 0.05 : 0.03, boom: r >= 5 ? 60 * M : 0 });
  else if (br === 'b') {
    petalStorm(g, pl, { n: 28, R: r >= 3 ? 3.8 : 3.2, dur: 3, tickDmg: 11 * M, push: 0.9, spin: 7, heal: 0.015, boom: r >= 5 ? 80 * M : 0 });
    pl.galeT = Math.max(pl.galeT || 0, 3); // 바람을 타고 빨라짐
  } else petalStorm(g, pl, { n: 24, R: 3.4, dur: 3, tickDmg: 8, push: 0.3, heal: 0.025 });
}
