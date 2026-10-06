// 새 퀘스트 방식 (지역마다 하나씩 섞어 넣음)
//  chase : 물건을 훔쳐 달아나는 몬스터를 쫓아가 잡기 (가까이 가면 도망, 구석에 몰거나 기술로 끊기)
//  search: 지역 곳곳에 숨은 물건 찾기 (지도·화살표 없음, 가까이 가면 방울 소리와 표시)
//  order : 비석·솟대 넷을 정해진 순서(점·새가 적은 것부터)로 두드리기, 틀리면 몬스터가 깨어남
//  escort: NPC를 목적지까지 데려가기 (곁에 붙어 있어야 걷고, 가는 길에 매복)
//  hold  : 원 안에서 정해진 시간 버티기 (원 밖이면 시간이 멈춤, 몬스터가 계속 몰려옴)
// 진행(위치·순서)은 game.quest.prog 에 저장되어 이어하기에서도 그대로
import * as THREE from 'three';
import { MAPS } from './maps.js';
import { toon } from './materials.js';

export const NEW_TYPES = new Set(['chase', 'search', 'order', 'escort', 'hold']);
const V = (x, y, z) => new THREE.Vector3(x, y, z);
const DOTS = ['', '하나', '둘', '셋', '넷'];

export class QuestKinds {
  constructor(game) {
    this.game = game;
    this.objs = [];   // 장면에 올린 물건 { mesh, i }
    this.Q = null;
    this.t = 0;
  }

  get P() { return this.game.quest.prog; }
  handles(Q) { return !!Q && NEW_TYPES.has(Q.type); }
  region(id) { return this.game.world.regions.find((r) => r.id === id); }

  // 지역 안에서 걸어서 갈 수 있는 곳 하나 (서로 minGap 이상 떨어지게)
  spots(R, n, minGap, near = null, radius = 0) {
    const w = this.game.world, out = [];
    const sx = R.spawn[0], sz = R.spawn[2];
    w.updateFlow(sx, sz, 0, 3, 4000);
    const D = w.nav.dist[3];
    for (let tries = 0; tries < 600 && out.length < n; tries++) {
      let x, z;
      if (near) { const a = (out.length / n) * Math.PI * 2 + tries * 0.37; x = near[0] + Math.sin(a) * radius; z = near[1] + Math.cos(a) * radius; }
      else { x = R.x0 + 3 + Math.random() * (R.x1 - R.x0 - 6); z = R.z0 + 4 + Math.random() * (R.z1 - R.z0 - 8); }
      if (w.regionAt(x, z).id !== R.id || w.inWater(x, z)) continue;
      if (w.isBlocked(x, z, 0.7, w.heightAt(x, z))) continue;
      const c = w.navCell(x, z);
      if (c < 0 || !isFinite(D[c])) continue;
      if (Math.hypot(x - sx, z - sz) < 6 && !near) continue;
      if (out.some(([ox, oz]) => Math.hypot(ox - x, oz - z) < minGap)) continue;
      out.push([+x.toFixed(2), +z.toFixed(2)]);
    }
    return out;
  }

  // 둘레까지 트인 넓은 자리 (버티기 원): 기준점에서 가까운 순으로, 원 둘레 12곳이 모두 걸을 수 있는 곳
  openSpot(R, bx, bz, r) {
    const w = this.game.world;
    const cands = this.spots(R, 60, 1.5);
    cands.sort((a, b) => Math.hypot(a[0] - bx, a[1] - bz) - Math.hypot(b[0] - bx, b[1] - bz));
    const open = (x, z) => { for (let k = 0; k < 12; k++) { const a = (k / 12) * Math.PI * 2; for (const f of [0.5, 1]) { const px = x + Math.sin(a) * r * f, pz = z + Math.cos(a) * r * f; if (w.regionAt(px, pz).id !== R.id || w.isBlocked(px, pz, 0.4, w.heightAt(px, pz)) || Math.abs(w.heightAt(px, pz) - w.heightAt(x, z)) > 0.6) return false; } } return true; };
    return cands.find(([x, z]) => Math.hypot(x - bx, z - bz) > 4 && open(x, z)) || cands[0];
  }

  // ---------- 시작 · 이어하기 · 정리 ----------
  start(Q, resume = false) {
    this.clear();
    this.Q = Q;
    const g = this.game, P = this.P, R = this.region(Q.region);
    if (Q.type === 'search') {
      if (!P.pts) { P.pts = this.spots(R, Q.n, 9); P.got = P.pts.map(() => 0); }
      P.pts.forEach(([x, z], i) => { if (!P.got[i]) this.addObj(this.makeTrinket(Q), x, z, i, 0.9); });
    } else if (Q.type === 'order') {
      if (!P.pts) {
        const c = R.center || [R.spawn[0], R.spawn[2] + 8];
        const center = this.spots(R, 1, 1, c, 0)[0] || this.spots(R, 1, 1)[0];
        P.pts = this.spots(R, Q.n, 2.6, center, 3.6);
        if (P.pts.length < Q.n) P.pts = this.spots(R, Q.n, 4);
        // 점(새) 개수 1~n을 섞어서 배치
        const k = P.pts.map((_, i) => i + 1);
        for (let i = k.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [k[i], k[j]] = [k[j], k[i]]; }
        P.dots = k; P.next = 1;
      }
      P.pts.forEach(([x, z], i) => this.addObj(Q.prop === 'sotdae' ? this.makeSotdae(P.dots[i]) : this.makeStele(P.dots[i]), x, z, i, 0));
      this.refreshOrder();
    } else if (Q.type === 'hold') {
      if (!P.c) { const d = g.world.drums.find((x) => x.region === Q.region); P.c = this.openSpot(R, d.pos.x, d.pos.z, Q.radius || 4.5); P.t = 0; }
      this.addObj(this.makeRing(Q.radius || 4.5), P.c[0], P.c[1], 0, 0.04);
    } else if (Q.type === 'escort') {
      P.t = 0;
      const n = g.npcs.find((x) => x.kind === Q.npc);
      if (resume || !n.escortHome) { n.escortHome = n.home || n.pos.clone(); n.pos.copy(n.escortHome); }
      const d = g.world.drums.find((x) => x.region === Q.region);
      this.escort = { npc: n, dest: d.pos.clone(), total: Math.max(1, Math.hypot(d.pos.x - n.pos.x, d.pos.z - n.pos.z)), ambush: [0.3, 0.65], said: 0 };
    } else if (Q.type === 'chase') {
      this.spawnThief(Q);
    }
  }

  // 이어하기: 저장된 단계가 새 방식이면 물건을 다시 놓음
  resume() {
    const Q = this.game.curQuest();
    if (this.handles(Q)) this.start(Q, true); else this.clear();
  }

  clear() {
    const g = this.game;
    for (const o of this.objs) { g.scene.remove(o.mesh); o.mesh.traverse((m) => { if (m.isMesh) { m.geometry.dispose(); m.material.dispose(); } }); }
    this.objs = [];
    if (this.thief && !this.thief.dead) { this.thief.dispose(); this.thief.removed = true; g.enemies = g.enemies.filter((e) => e !== this.thief); }
    this.thief = null;
    if (this.escort) { this.escort.npc.walk = null; this.escort = null; }
    this.Q = null;
  }

  addObj(mesh, x, z, i, lift) {
    const g = this.game;
    mesh.position.set(x, g.world.heightAt(x, z) + lift, z);
    mesh.userData.baseY = mesh.position.y;
    g.scene.add(mesh);
    this.objs.push({ mesh, i, x, z });
  }

  // ---------- 모양 ----------
  makeTrinket(Q) {
    const col = Q.region === 'sea' ? '#f4f0ff' : '#ffcf40';
    const glow = Q.region === 'sea' ? '#9ad8ff' : '#ff7a2a';
    const grp = new THREE.Group();
    const core = Q.region === 'sea'
      ? new THREE.Mesh(new THREE.SphereGeometry(0.2, 14, 10), toon({ color: new THREE.Color(col), emissive: new THREE.Color(glow), emissiveIntensity: 0.6, roughness: 0.2 }))
      : new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.34, 0.03), toon({ color: new THREE.Color('#f2e2b0'), emissive: new THREE.Color(glow), emissiveIntensity: 0.35 }));
    grp.add(core);
    if (Q.region !== 'sea') { const mark = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.2, 0.035), toon({ color: new THREE.Color('#c8302c') })); grp.add(mark); }
    const halo = new THREE.Mesh(new THREE.SphereGeometry(0.42, 12, 8), new THREE.MeshBasicMaterial({ color: glow, transparent: true, opacity: 0.18, depthWrite: false, blending: THREE.AdditiveBlending }));
    halo.userData.noOutline = true;
    grp.add(halo);
    grp.userData.spin = true;
    return grp;
  }

  makeStele(dots) {
    const grp = new THREE.Group();
    const stone = toon({ color: new THREE.Color('#8a8a86') });
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.7, 1.3, 0.28), stone);
    body.position.y = 0.75; body.castShadow = true;
    const cap = new THREE.Mesh(new THREE.BoxGeometry(0.86, 0.16, 0.4), toon({ color: new THREE.Color('#6a6a68') }));
    cap.position.y = 1.48;
    const base = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.12, 0.5), toon({ color: new THREE.Color('#5a5a58') }));
    base.position.y = 0.06;
    grp.add(body, cap, base);
    this.addDots(grp, dots, 1.2, 0.15, '#ffe08a');
    grp.userData.glowMats = [stone];
    return grp;
  }

  makeSotdae(birds) {
    const grp = new THREE.Group();
    const wood = toon({ color: new THREE.Color('#8a6a4a') });
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 2.6, 8), wood);
    pole.position.y = 1.3; pole.castShadow = true;
    grp.add(pole);
    for (let k = 0; k < birds; k++) {
      const b = new THREE.Group();
      const body = new THREE.Mesh(new THREE.SphereGeometry(0.11, 8, 6), toon({ color: new THREE.Color('#e8dcc0') }));
      body.scale.set(0.8, 0.7, 1.4);
      const beak = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.1, 5), toon({ color: new THREE.Color('#c8302c') }));
      beak.rotation.x = Math.PI / 2; beak.position.z = 0.17;
      b.add(body, beak);
      const a = (k / birds) * Math.PI * 2;
      b.position.set(Math.sin(a) * 0.22, 2.62 + (k % 2) * 0.08, Math.cos(a) * 0.22);
      b.rotation.y = a;
      grp.add(b);
    }
    const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.5, 6), wood);
    arm.rotation.z = Math.PI / 2; arm.position.y = 2.55;
    grp.add(arm);
    grp.userData.glowMats = [wood];
    return grp;
  }

  addDots(grp, n, y, z, col) {
    const m = new THREE.MeshBasicMaterial({ color: col });
    for (let k = 0; k < n; k++) {
      const d = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), m.clone());
      d.position.set((k - (n - 1) / 2) * 0.15, y - (k % 2) * 0.05, z);
      d.userData.noOutline = true;
      grp.add(d);
    }
  }

  makeRing(r) {
    const grp = new THREE.Group();
    const ring = new THREE.Mesh(new THREE.RingGeometry(r - 0.18, r, 48), new THREE.MeshBasicMaterial({ color: '#ffb84a', transparent: true, opacity: 0.75, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }));
    ring.rotation.x = -Math.PI / 2;
    const fill = new THREE.Mesh(new THREE.CircleGeometry(r - 0.18, 48), new THREE.MeshBasicMaterial({ color: '#ff8a2a', transparent: true, opacity: 0.08, depthWrite: false, blending: THREE.AdditiveBlending }));
    fill.rotation.x = -Math.PI / 2;
    const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.6, 6, 16, 1, true), new THREE.MeshBasicMaterial({ color: '#ffb060', transparent: true, opacity: 0.16, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }));
    pillar.position.y = 3;
    for (const m of [ring, fill, pillar]) { m.userData.noOutline = true; m.renderOrder = 24; grp.add(m); }
    grp.userData.ring = ring; grp.userData.fill = fill;
    return grp;
  }

  // ---------- 도둑 (chase) ----------
  spawnThief(Q) {
    const g = this.game, p = g.player, R = this.region(Q.region);
    let at = null;
    for (let k = 0; k < 20 && !at; k++) { const c = g.world.randomWalkable(p.pos.x, p.pos.z, 8, 13); if (c && g.world.regionAt(c.x, c.z).id === R.id) at = c; }
    if (!at) { const s = this.spots(R, 1, 1)[0]; at = { x: s[0], z: s[1] }; }
    const e = g.spawnEnemyAt(Q.mob, at.x, at.z);
    e.field = true; e.aggro = false; e.flee = true; e.thief = true; e.fleeRegion = R;
    e.name = Q.thiefName;
    e.maxHp = e.hp = Math.round(e.maxHp * (Q.hpMul || 4));
    this.thief = e;
  }

  // ---------- 매 프레임 ----------
  update(dt) {
    const g = this.game, Q = g.curQuest();
    // 새 단계는 game.startStep()이 start()를 부름 (단계가 바뀐 직후~startStep 사이엔 아무것도 안 함)
    if (this.Q && this.Q !== Q) this.clear();
    if (!this.handles(Q) || g.state !== 'play' || this.Q !== Q) return;
    this.t += dt;
    const p = g.player, P = this.P;
    for (const o of this.objs) {
      const m = o.mesh;
      if (m.userData.spin) { m.rotation.y += dt * 1.8; m.position.y = m.userData.baseY + Math.sin(this.t * 2.4 + o.i) * 0.12; if (Math.random() < dt * 4) g.fx.add.emit({ x: m.position.x + (Math.random() - 0.5) * 0.5, y: m.position.y + 0.1, z: m.position.z + (Math.random() - 0.5) * 0.5, vy: 0.8, life: 0.7, size: 2, endSize: 1, color: '#fff6c0', color2: Q.region === 'sea' ? '#7ad0ff' : '#ff9a2a' }); }
    }
    if (Q.type === 'search') {
      // 가까이 가면 방울 소리 (가까울수록 자주)
      let nd = Infinity;
      for (const o of this.objs) nd = Math.min(nd, Math.hypot(o.x - p.pos.x, o.z - p.pos.z));
      this.chimeT = (this.chimeT || 0) - dt;
      if (nd < 13 && this.chimeT <= 0) { g.audio.play(Q.region === 'sea' ? 'coin' : 'talk'); this.chimeT = 0.5 + (nd / 13) * 1.6; }
    } else if (Q.type === 'chase') {
      if (!this.thief || this.thief.removed || (!this.thief.dead && !g.enemies.includes(this.thief))) { if (g.world.regionAt(p.pos.x, p.pos.z).id === Q.region && !g.waveActive) this.spawnThief(Q); }
      else if (!this.thief.dead && Math.random() < dt * 8) { const e = this.thief; g.fx.add.emit({ x: e.pos.x + (Math.random() - 0.5) * 0.6, y: e.y + 0.4 + Math.random(), z: e.pos.z + (Math.random() - 0.5) * 0.6, vy: 1, life: 0.6, size: 3, endSize: 1, color: '#fff0a0', color2: '#ffb000' }); }
    } else if (Q.type === 'hold') {
      const [cx, cz] = P.c, r = Q.radius || 4.5;
      const inside = !p.dead && Math.hypot(p.pos.x - cx, p.pos.z - cz) < r;
      const here = g.world.regionAt(p.pos.x, p.pos.z).id === Q.region && Math.hypot(p.pos.x - cx, p.pos.z - cz) < 24;
      const o = this.objs[0];
      if (o) { o.mesh.userData.ring.material.opacity = inside ? 0.85 : 0.35 + Math.sin(this.t * 6) * 0.2; o.mesh.userData.fill.material.opacity = inside ? 0.14 : 0.05; }
      if (inside) {
        const before = Math.floor(P.t);
        P.t += dt;
        if (Math.floor(P.t) !== before) g.updateQuest();
        if (P.t >= Q.time) { g.updateQuest(); g.ui.toast('잘 버텼소!', 2); this.done(); return; }
      }
      // 몬스터가 원을 향해 몰려옴
      if (here) {
        this.spawnT = (this.spawnT || 2) - dt;
        const live = g.enemies.filter((e) => e.questMob && !e.dead).length;
        if (this.spawnT <= 0 && live < 7) {
          this.spawnT = inside ? 2.6 : 4;
          const F = MAPS[Q.region].field;
          const types = Q.mobs || F.types.map(([t]) => t);
          const at = g.world.randomWalkable(cx, cz, 8, 12);
          if (at) { const e = g.spawnEnemyAt(types[Math.floor(Math.random() * types.length)], at.x, at.z); e.field = true; e.aggro = true; e.questMob = true; g.fx.colorFire(at.x, at.y || 0, at.z, 16, 0.5, ...e.T.pal.fire); }
        }
      }
    } else if (Q.type === 'escort') this.updateEscort(dt, Q);
  }

  updateEscort(dt, Q) {
    const g = this.game, E = this.escort, n = E.npc, p = g.player, P = this.P;
    const dp = Math.hypot(p.pos.x - n.pos.x, p.pos.z - n.pos.z);
    const dd = Math.hypot(E.dest.x - n.pos.x, E.dest.z - n.pos.z);
    const foes = g.enemies.some((e) => !e.dead && !e.spawning && Math.hypot(e.pos.x - n.pos.x, e.pos.z - n.pos.z) < 7 && (e.aggro || !e.field));
    P.t = Math.max(P.t || 0, Math.min(1, 1 - dd / E.total));
    if (dd < 3) { n.walk = null; this.done(); return; }
    // 매복: 길의 30%·65% 지점에서 지역 몬스터가 덮침
    for (let k = 0; k < E.ambush.length; k++) {
      if (P.t >= E.ambush[k] && !(E.done || []).includes(k)) {
        (E.done ||= []).push(k);
        const F = MAPS[Q.region].field;
        for (let j = 0; j < 3; j++) {
          const at = g.world.randomWalkable(n.pos.x, n.pos.z, 5, 8);
          if (!at) continue;
          const [t] = F.types[Math.floor(Math.random() * F.types.length)];
          const e = g.spawnEnemyAt(t, at.x, at.z); e.field = true; e.aggro = true; e.questMob = true;
        }
        g.ui.toast(Q.ambushLine || '매복이다! 지켜 드리자', 2.2);
        g.audio.play('wave');
      }
    }
    let speed = 0;
    if (dp < 6 && !foes && !p.dead) {
      g.world.updateFlow(E.dest.x, E.dest.z, 0, 3, 4000);
      const dir = g.world.navDir(n.pos, 0, 3);
      if (dir) {
        speed = 2.4;
        g.world.move(n.pos, dir.x * speed * dt, dir.z * speed * dt, 0.35);
        n.pos.y = g.world.heightAt(n.pos.x, n.pos.z);
        n.walk = { speed, yaw: Math.atan2(dir.x, dir.z) };
      }
    }
    if (!speed) {
      n.walk = null;
      E.waitT = (E.waitT || 0) + dt;
      if (dp >= 6 && E.waitT > 3) { E.waitT = -5; g.fx.number(n.pos.clone().add(V(0, 2.4, 0)), foes ? '도와주시오!' : '같이 가 주시오!', 'alert'); }
    } else E.waitT = 0;
    if (Math.floor(P.t * 10) !== E.lastPct) { E.lastPct = Math.floor(P.t * 10); g.updateQuest(); }
  }

  // ---------- 상호작용 ----------
  findInteract(p, bd) {
    const Q = this.Q;
    if (!Q || (Q.type !== 'search' && Q.type !== 'order')) return null;
    let best = null;
    for (const o of this.objs) {
      const d = Math.hypot(o.x - p.x, o.z - p.z);
      if (d < 2.2 && d < bd) {
        bd = d;
        const label = Q.type === 'search' ? `${Q.item} 줍기` : `${Q.prop === 'sotdae' ? '솟대' : '비석'} 두드리기 (${Q.prop === 'sotdae' ? '새' : '점'} ${DOTS[this.P.dots[o.i]]})`;
        best = { kind: 'qobj', o, label, promptPos: o.mesh.position.clone().add(V(0, Q.type === 'order' ? (Q.prop === 'sotdae' ? 3.1 : 1.9) : 0.8, 0)), d };
      }
    }
    return best;
  }

  use(it) {
    const g = this.game, Q = this.Q, P = this.P, o = it.o;
    if (!Q) return;
    const pos = o.mesh.position;
    if (Q.type === 'search') {
      P.got[o.i] = 1;
      g.scene.remove(o.mesh);
      this.objs = this.objs.filter((x) => x !== o);
      g.fx.colorFire(pos.x, pos.y, pos.z, 26, 0.4, '#fff6c0', Q.region === 'sea' ? '#5ac8ff' : '#ff8a2a');
      g.fx.ring(V(pos.x, g.world.heightAt(pos.x, pos.z), pos.z), 1.6, '#ffe08a', 0.35);
      g.audio.play('coin');
      const n = P.got.filter(Boolean).length;
      g.fx.number(pos.clone().add(V(0, 1, 0)), `${Q.item} ${n}/${Q.n}`, 'exp');
      if (n >= Q.n) this.done(); else { g.updateQuest(); g.save(false); }
    } else if (Q.type === 'order') {
      const k = P.dots[o.i];
      if (o.lit) return;
      if (k === P.next) {
        o.lit = true; P.next++;
        g.audio.play(P.next > Q.n ? 'bell' : 'drum');
        g.fx.ring(V(pos.x, pos.y, pos.z), 1.8, '#ffe08a', 0.4);
        g.fx.colorFire(pos.x, pos.y + 1, pos.z, 16, 0.3, '#fff6c0', '#ffc040');
        this.refreshOrder();
        if (P.next > Q.n) this.done(); else { g.updateQuest(); g.save(false); }
      } else {
        // 틀림: 처음부터, 몬스터가 깨어남
        P.next = 1;
        for (const x of this.objs) x.lit = false;
        this.refreshOrder();
        g.audio.play('denied');
        g.shake(0.3);
        g.ui.toast(Q.wrongLine || '순서가 틀렸다! 처음부터 다시', 2.4);
        const F = MAPS[Q.region].field;
        for (let j = 0; j < 2; j++) { const at = g.world.randomWalkable(pos.x, pos.z, 3, 6); if (!at) continue; const e = g.spawnEnemyAt(F.types[0][0], at.x, at.z); e.field = true; e.aggro = true; e.questMob = true; }
        g.updateQuest();
      }
    }
  }

  refreshOrder() {
    for (const o of this.objs) {
      o.lit = o.lit || (this.P.dots[o.i] < this.P.next);
      for (const m of o.mesh.userData.glowMats || []) { m.emissive = m.emissive || new THREE.Color(); m.emissive.set(o.lit ? '#ffb030' : '#000000'); m.emissiveIntensity = o.lit ? 0.45 : 0; }
    }
  }

  onKill(e) {
    if (e === this.thief) {
      const g = this.game, Q = this.Q;
      g.fx.number(e.center().clone().add(V(0, 1, 0)), `${Q.item}!`, 'exp');
      this.thief = null;
      this.done(0.9);
    }
  }

  done(delay = 0) {
    const g = this.game, Q = this.Q;
    const fin = () => { if (g.curQuest() !== Q) return; this.clear(); g.completeStep(); };
    if (delay) g.after(delay, fin); else fin();
  }

  // ---------- 안내 ----------
  progText(Q) {
    const P = this.P;
    if (Q.type === 'search') return `<br>${Q.item} <b>${(P.got || []).filter(Boolean).length}</b>/${Q.n}`;
    if (Q.type === 'order') return `<br>${Q.prop === 'sotdae' ? '솟대' : '비석'} <b>${Math.max(0, (P.next || 1) - 1)}</b>/${Q.n}`;
    if (Q.type === 'hold') return `<br>버틴 시간 <b>${Math.floor(P.t || 0)}</b>/${Q.time}초`;
    if (Q.type === 'escort') return `<br>가는 길 <b>${Math.round((P.t || 0) * 100)}</b>%`;
    return '';
  }

  targets(Q, regionCenter) {
    const g = this.game, out = [], p = g.player.pos;
    // 단계가 넘어간 뒤 새 임무가 실제로 시작되기 전(2초쯤): 지역 쪽만 가리킴 (원·물건이 아직 없음)
    if (this.Q !== Q) return Q.region ? [{ pos: regionCenter(Q.region) }] : [];
    if (Q.type === 'search') {
      // 지도에 찍지 않음: 지역만 가리키고, 아주 가까울 때만 표시
      out.push({ pos: regionCenter(Q.region), area: Q.region, search: true });
      for (const o of this.objs) if (Math.hypot(o.x - p.x, o.z - p.z) < 7) out.push({ pos: o.mesh.position.clone().add(V(0, 0.9, 0)), mark: true, hidden: true });
    } else if (Q.type === 'order') {
      for (const o of this.objs) if (!o.lit) out.push({ pos: o.mesh.position.clone().add(V(0, Q.prop === 'sotdae' ? 3.3 : 2.1, 0)), mark: true, obj: o });
    } else if (Q.type === 'hold') {
      out.push({ pos: V(this.P.c[0], g.world.heightAt(this.P.c[0], this.P.c[1]) + 3, this.P.c[1]), mark: true });
    } else if (Q.type === 'escort' && this.escort) {
      out.push({ pos: this.escort.npc.pos.clone().add(V(0, 2.5, 0)), mark: true });
    } else if (Q.type === 'chase') {
      if (this.thief && !this.thief.dead) out.push({ pos: this.thief.pos.clone().add(V(0, 2.2, 0)), mark: true });
      else out.push({ pos: regionCenter(Q.region), area: Q.region });
    }
    return out;
  }
}
