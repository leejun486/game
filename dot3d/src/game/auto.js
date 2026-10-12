// Game의 한 부분: 자동 이동 · 자동 사냥 · 길 잃은 적 구하기
//  main.js의 Game 클래스에서 떼어 낸 메서드들 (main.js가 Game.prototype에 붙임 — this는 game)
import { BOUNTIES } from '../quests.js';
import { SKILL_LEVEL } from '../entities.js';
import { V } from './shared.js';

export class AutoPart {
  // ---------- 자동 이동 · 자동 사냥 ----------
  toggleAutoMove() {
    if (this.autoMove) { this.stopAutoMove('자동 이동을 멈췄어요'); return; }
    this.startAutoMove();
  }

  startAutoMove() {
    if (this.waveActive) { this.ui.toast('싸우는 중에는 자동 이동을 할 수 없어요', 2); return; }
    const T = this.questTargets();
    const p = this.player.pos;
    if (!T.length) { this.ui.toast('지금은 갈 곳이 없어요', 2); return; }
    let best = null, bd = Infinity;
    for (const t of T) {
      if (t.hidden) continue;
      // 찾기 퀘스트: 그 지역 안에서는 직접 찾게 함
      if (t.search && this.world.regionAt(p.x, p.z).id === t.area) { this.ui.toast('여기서부터는 직접 찾아보세요 — 가까이 가면 소리가 나요', 3); return; }
      // 사냥 지역 안에 이미 있으면 알려만 줌 (이동은 이동만, 사냥은 직접 켬)
      if (t.area && this.world.regionAt(p.x, p.z).id === t.area) { this.ui.toast(this.autoHunt ? '이미 사냥터예요' : '이미 사냥터예요 — 싸우려면 자동 사냥을 켜세요', 2.6); return; }
      const d = Math.hypot(t.pos.x - p.x, t.pos.z - p.z);
      if (d < bd) { bd = d; best = t; }
    }
    this.autoMove = { pos: V(best.pos.x, 0, best.pos.z), area: best.area, search: best.search, obj: best.obj, stuck: 0, last: p.clone() };
    this.world.updateFlow(best.pos.x, best.pos.z, 0, 2, 4000);
    if (bd > 3 && !this.world.navDir(p, 0, 2)) { this.autoMove = null; this.ui.toast('길이 막혀 있어요 (닫힌 문이 있나 봐요)', 2.4); return; }
    document.getElementById('quest').classList.add('moving');
    this.ui.toast(`자동 이동: ${this.curQuest()?.title || '현상수배'}`, 1.8);
  }

  stopAutoMove(msg) {
    this.autoMove = null;
    document.getElementById('quest').classList.remove('moving');
    if (msg) this.ui.toast(msg, 1.6);
  }

  setAutoHunt(on) {
    this.autoHunt = on;
    document.getElementById('hunt-btn').classList.toggle('on', on);
    this.ui.toast(on ? '자동 사냥 켜짐 — 가까운 적을 찾아 싸워요 (H로 끄기)' : '자동 사냥 꺼짐', 2);
  }

  // 손으로 움직이면 자동 이동은 멈추고, 자동 사냥은 손을 놓을 때까지 잠시 쉼
  autoControl(inp, dt) {
    if (inp.moveLen > 0.1) { if (this.autoMove) this.stopAutoMove('자동 이동을 멈췄어요'); return inp; }
    if (this.ui.inDialog || this.player.dead) return inp;
    if (this.autoMove) return this.autoMoveStep(inp, dt);
    if (this.autoHunt) return this.autoHuntStep(inp, dt);
    return inp;
  }

  // 길찾기 흐름장을 따라 한 걸음 (가까우면 곧장)
  steerTo(inp, tx, tz, slot = 2, maxD = 4000, escape = true) {
    const p = this.player.pos;
    const dx = tx - p.x, dz = tz - p.z, d = Math.hypot(dx, dz) || 1;
    let mx = dx / d, mz = dz / d;
    this.steerNoPath = false;
    if (!(d < 7 && this.world.clearLine(p.x, p.z, tx, tz, 0.4))) {
      this.world.updateFlow(tx, tz, 0, slot, maxD);
      const nd = this.world.navDir(p, 0, slot);
      if (nd) { mx = nd.x; mz = nd.z; } else this.steerNoPath = true;
    }
    // 모서리에 걸려 1초 가까이 제자리면 0.6초 동안 비스듬히 물러나며 옆으로 비켜 감 (매번 좌우를 바꿔)
    //  escape=false: 목적지 바로 앞(자동 이동 도착 판정 중)에서는 비켜 가지 않음
    const now = this.time, W0 = this.steerWin;
    if (!W0 || now - W0.t > 0.9) {
      if (W0 && now - W0.t < 1.8 && Math.hypot(p.x - W0.x, p.z - W0.z) < 0.35 && escape) { this.steerEsc = now + 0.6; this.steerSide = -(this.steerSide || 1); }
      this.steerWin = { t: now, x: p.x, z: p.z };
    }
    if (escape && this.steerEsc > now) {
      const sd = this.steerSide, sx = -mz * sd - mx * 0.4, sz = mx * sd - mz * 0.4, l = Math.hypot(sx, sz) || 1;
      mx = sx / l; mz = sz / l;
    }
    inp.mx = mx; inp.mz = mz; inp.moveLen = 1; inp.mouseRecent = false; inp.mouseWorld = null;
    return inp;
  }

  autoMoveStep(inp, dt) {
    const A = this.autoMove, p = this.player;
    const d = Math.hypot(A.pos.x - p.pos.x, A.pos.z - p.pos.z);
    // 도착: 가까이 왔거나, 충분히 가까운데 더 다가갈 수 없을 때 (종각 안의 범종처럼 둘러싸인 것)
    const blockedNear = !A.area && d < 3.2 && A.stuck > 0.5;
    if (d < (A.area ? 3.5 : 1.9) || blockedNear) {
      this.stopAutoMove();
      if (A.search) { this.ui.toast('여기서부터는 직접 찾아보세요 — 가까이 가면 소리가 나요', 3); return inp; }
      if (A.area) { this.ui.toast(this.autoHunt ? '사냥터에 도착했어요' : '사냥터에 도착했어요 — 싸우려면 자동 사냥을 켜세요', 2.6); return inp; }
      if (A.obj) return inp; // 순서 퍼즐은 직접 고르게 (대신 두드리지 않음)
      // 도착: 퀘스트 대상(사람·석등·북)과 바로 상호작용 (옆의 다른 물건 말고)
      const Q = this.curQuest();
      const pp = p.pos;
      let it = null;
      if (!Q) { const n = this.npcs.find((x) => x.kind === 'guard'); it = { kind: 'npc', npc: n }; }
      else if (Q.type === 'talk') it = { kind: 'npc', npc: this.npcs.find((x) => x.kind === Q.npc) };
      else if (Q.type === 'wave') it = { kind: 'drum', drum: this.world.drums.find((x) => x.region === Q.region) };
      else if (Q.type === 'light') {
        let bi = -1, bd2 = 3;
        this.world.lanterns.forEach((L, i) => { const k = Math.hypot(L.x - pp.x, L.z - pp.z); if (L.region === (Q.region || 'temple') && !this.quest.lit.includes(i) && k < bd2) { bd2 = k; bi = i; } });
        if (bi >= 0) it = { kind: 'lantern', idx: bi };
      }
      if (it) { this.nearInteract = it; this.interact(); }
      // 석등은 여러 개라 남은 것이 있으면 계속
      if (Q && Q.type === 'light' && this.curQuest() === Q) this.after(0.4, () => this.startAutoMove());
      return inp;
    }
    // 오래 제자리면 포기
    A.stuck = Math.hypot(p.pos.x - A.last.x, p.pos.z - A.last.z) < dt * 0.6 ? A.stuck + dt : 0;
    A.last.copy(p.pos);
    if (A.stuck > 2.5) { this.stopAutoMove('길을 찾지 못했어요'); return inp; }
    return this.steerTo(inp, A.pos.x, A.pos.z, 2, 4000, d > 3.6);
  }

  // 지금 퀘스트(현상수배)에 필요한 몬스터 종류: 모을 물건을 떨어뜨리는 것, 아직 덜 잡은 것
  questWanted() {
    const Q = this.curQuest(), want = new Set();
    if (Q?.type === 'collect') for (const t of Q.from) want.add(t);
    if (Q?.type === 'kill') for (const [t, n] of Object.entries(Q.need)) if ((this.quest.prog?.[t] || 0) < n) want.add(t);
    const B = !Q && this.quest.bounty;
    if (B) for (const [t, n] of Object.entries(BOUNTIES[B.i].need)) if ((B.prog[t] || 0) < n) want.add(t);
    return want;
  }

  nearestEnemy(R, aggroOnly = false, only = null) {
    const p = this.player.pos;
    let best = null, bd = R;
    for (const e of this.enemies) {
      if (e.dead || e.spawning || (aggroOnly && e.field && !e.aggro) || (only && !only(e))) continue;
      const d = Math.hypot(e.pos.x - p.x, e.pos.z - p.z);
      if (e.huntSkipT > this.time) continue; // 길이 없어 잠시 포기한 적 (닫힌 문 너머 등)
      if (d < bd && Math.abs(e.pos.y - p.y) < 1.6) { bd = d; best = e; }
    }
    return best;
  }

  // 자동 사냥: 가까운 적에게 다가가 공격, 쓸 수 있는 스킬은 바로, 적이 없으면 떨어진 장비 줍기
  autoHuntStep(inp, dt) {
    const p = this.player;
    const range = { sword: 1.6, mage: 6.5, elf: 7.5, lancer: 2.6 }[p.cls];
    let t = this.validTarget(this.target) && !(this.target.huntSkipT > this.time) && Math.hypot(this.target.pos.x - p.pos.x, this.target.pos.z - p.pos.z) < 24 ? this.target : this.nearestEnemy(24) || (this.waveActive || this.tower?.active ? this.nearestEnemy(90, true) : null); // 밤 싸움·시련탑엔 멀리 남은 적도 찾아감
    // 들판에선 퀘스트에 필요한 몬스터부터 (조금 멀어도). 바로 곁에서 때리는 적이 있으면 그것부터
    if (!this.waveActive && !this.tower?.active && !(t && t.isBoss)) {
      const want = this.questWanted();
      if (want.size && !(t && want.has(t.type))) {
        const w = this.nearestEnemy(32, false, (e) => want.has(e.type));
        const close = this.nearestEnemy(3, true, (e) => !want.has(e.type));
        if (w && !close) t = w;
      }
    }
    if (!t) {
      let dr = null, dd = 14;
      for (const d of this.drops) { const k = Math.hypot(d.g.position.x - p.pos.x, d.g.position.z - p.pos.z); if (k < dd) { dd = k; dr = d; } }
      if (dr && dd > 1.2) return this.steerTo(inp, dr.g.position.x, dr.g.position.z, 2, 60);
      return inp;
    }
    this.target = t;
    const d = Math.hypot(t.pos.x - p.pos.x, t.pos.z - p.pos.z);
    const crowd = this.enemiesIn(p.pos, 5).length;
    const big = t.isBoss || t.elite || crowd >= 2;
    const lv = p.level;
    // 쓸 수 있는 기술 (기본 공격을 이어 치지 않고, 지금 동작이 끝나는 대로 기술부터)
    const ready = p.ult && p.ultCd <= 0 && big ? 'ult'
      : p.skillCd <= 0 ? 1
      : lv >= SKILL_LEVEL[2] && (p.cd2 || 0) <= 0 ? 2
      : lv >= SKILL_LEVEL[3] && (p.cd3 || 0) <= 0 ? 3 : 0;
    // 기술마다 닿는 거리: 멀리 나가는 기술(검기, 일섬, 창기, 도약, 창비)은 붙지 않고 그 거리에서 바로 씀
    const reach = ready ? ({ sword: { 1: 6, 2: 6, 3: 2 }, lancer: { 1: 6, 2: 6, 3: 9, ult: 5 } }[p.cls]?.[ready] ?? range) : range;
    if (d > Math.max(range, ready ? reach : 0)) {
      this.steerTo(inp, t.pos.x, t.pos.z, 2, 80);
      // 1초 넘게 길을 못 찾으면 그 적은 잠시 쫓지 않음
      t.noPathT = this.steerNoPath ? (t.noPathT || 0) + dt : 0;
      if (t.noPathT > 1) { t.huntSkipT = this.time + 8; t.noPathT = 0; this.target = null; }
      return inp;
    }
    // 사거리 안: 적을 바라보고 (마우스 방향 말고) 공격
    p.yaw = Math.atan2(t.pos.x - p.pos.x, t.pos.z - p.pos.z);
    inp.mouseRecent = false; inp.mouseWorld = null;
    if (ready && d <= reach) {
      if (p.attack && p.attack.t < 0.6) return inp;
      if (ready === 'ult') p.startUlt(inp);
      else if (ready === 1) p.startSkill(inp);
      else p.startExtraSkill(inp, ready);
      return inp;
    }
    if (d > range) return this.steerTo(inp, t.pos.x, t.pos.z, 2, 80);
    p.startAttack(inp);
    return inp;
  }

  // 플레이어가 갈 수 없는 곳(대숲 덤불 속 등)에 3초 넘게 갇힌 적은 가까운 갈 수 있는 곳으로 옮김
  //  밤 싸움이 마지막 한 마리 때문에 끝나지 않는 일을 막음
  rescueStranded(dt) {
    this.strandAcc = (this.strandAcc || 0) + dt;
    if (this.strandAcc < 0.5) return;
    this.strandAcc = 0;
    const W = this.world, n = W.nav, p = this.player.pos;
    if (!n || n.target[0] < 0) return;
    const D = n.dist[0];
    const stuck = (e) => { const k = W.navCell(e.pos.x, e.pos.z); return k < 0 || !(D[k] < Infinity); };
    // 싸움을 바꾸지 않도록: 밤 싸움에 남은 적이 모두 갇혔을 때(3초), 아니면 아주 오래 갇혔을 때(15초)만
    const live = this.waveActive ? this.enemies.filter((e) => !e.dead && !e.field) : [];
    const allStuck = live.length > 0 && live.every((e) => e.spawning || e.isBoss ? false : stuck(e));
    for (const e of this.enemies) {
      // 밤 싸움의 적이 멀리(22칸 넘게) 떨어진 채 6초가 지나면 (길이 끊겨 못 오거나, 쫓다 멀어짐) 가까이 데려옴 — 싸움이 끝나지 않던 문제
      if ((this.waveActive || (this.tower?.active && !this.tower.cleared)) && !e.dead && !e.spawning && !e.field && Math.hypot(e.pos.x - p.x, e.pos.z - p.z) > 22) {
        e.farT = (e.farT || 0) + 0.5;
        if (e.farT >= 6) {
          e.farT = 0;
          const w = W.randomWalkable(p.x, p.z, 7, 12);
          if (w) { this.fx.smoke(e.pos.x, e.y + 0.3, e.pos.z, 8); e.pos.x = w.x; e.pos.z = w.z; e.pos.y = e.y = W.heightAt(w.x, w.z); this.fx.smoke(e.pos.x, e.y + 0.3, e.pos.z, 8); }
        }
        continue;
      }
      e.farT = 0;
      if (e.dead || e.spawning || e.isBoss || e.field || Math.hypot(e.pos.x - p.x, e.pos.z - p.z) > 22 || !stuck(e)) { e.strandT = 0; continue; }
      e.strandT = (e.strandT || 0) + 0.5;
      if (e.strandT < (allStuck ? 3 : 15)) continue;
      e.strandT = 0;
      const ci = Math.floor((e.pos.x - n.x0) / n.cs), cj = Math.floor((e.pos.z - n.z0) / n.cs);
      let best = -1, bd = 1e9;
      for (let dj = -16; dj <= 16; dj++) for (let di = -16; di <= 16; di++) {
        const i = ci + di, j = cj + dj;
        if (i < 0 || j < 0 || i >= n.nx || j >= n.nz) continue;
        const c = j * n.nx + i, q = di * di + dj * dj;
        if (D[c] < Infinity && q < bd) { bd = q; best = c; }
      }
      if (best < 0) continue;
      this.fx.smoke(e.pos.x, e.y + 0.3, e.pos.z, 8);
      e.pos.x = n.x0 + ((best % n.nx) + 0.5) * n.cs;
      e.pos.z = n.z0 + (Math.floor(best / n.nx) + 0.5) * n.cs;
      e.pos.y = e.y = W.heightAt(e.pos.x, e.pos.z);
      this.fx.smoke(e.pos.x, e.y + 0.3, e.pos.z, 8);
    }
  }
}
