// 짧은 연출 장면: 게임 세상 안에서 카메라를 옮기고, 사람을 걷게 하고, 대사를 띄우고, 효과를 냄
//  위아래 검은 띠(#cine)를 쓰고, 그동안 조작·임무 창은 숨김. Esc / 패드 B 로 건너뛰면 finish()로 끝 상태를 맞춤
//  단계(steps):
//   { cam: [x,y,z] | 'player' | 'npc:kind', k: 카메라 거리 배율, speed: 따라가는 빠르기 }
//   { walk: 'player' | 'npc:kind', to: [x,z], speed, wait: true(도착까지 기다림) }
//   { face: 'npc:kind', at: 'player' | [x,z] }
//   { say: '이름', lines: [...] }          대화창이 닫힐 때까지 기다림
//   { wait: 초 }
//   { do: (game) => {} }                   그 자리에서 실행 (효과·소리 등)
//   { banner: ['큰 글', '작은 글', 초] }
//   { anim: (game, k, dt) => {}, dur: 초 } k는 0→1, 끝날 때까지 기다림
import * as THREE from 'three';

const V = (x, y, z) => new THREE.Vector3(x, y, z);

export class Cutscene {
  constructor(game, steps, { finish, onEnd } = {}) {
    this.game = game;
    this.steps = steps;
    this.i = -1;
    this.finish = finish;
    this.onEnd = onEnd;
    this.cam = null;
    this.k = 1;
    this.walks = [];
    this.t = 0;
    const el = document.getElementById('cine');
    el.querySelector('.cine-sub').textContent = '';
    el.querySelector('.cine-name').textContent = '';
    el.className = 'show bars';
    document.getElementById('app').classList.add('cine-on');
    let hint = el.querySelector('.cine-skip');
    if (!hint) { hint = document.createElement('div'); hint.className = 'cine-skip'; el.append(hint); }
    hint.textContent = document.body.classList.contains('pad') ? 'B: 건너뛰기' : 'Esc: 건너뛰기';
    if (game.autoMove) game.stopAutoMove();
    this.next();
  }

  actor(ref) {
    const g = this.game;
    if (ref === 'player') return g.player;
    if (typeof ref === 'string' && ref.startsWith('npc:')) return g.npcs.find((n) => n.kind === ref.slice(4));
    return ref;
  }

  next() {
    this.i++;
    this.waitT = 0;
    this.blocking = null;
    const S = this.steps[this.i];
    const g = this.game;
    if (!S) return this.end(false);
    if (S.cam !== undefined) { this.cam = S.cam; this.k = S.k ?? this.k; this.camSpeed = S.speed ?? 2.5; }
    if (S.walk) {
      const a = this.actor(S.walk);
      if (a) {
        const w = { a, to: S.to, speed: S.speed || 2.4 };
        this.walks.push(w);
        if (S.wait !== false) { this.blocking = () => !this.walks.includes(w); }
      }
    }
    if (S.face) { const a = this.actor(S.face); if (a) { const p = S.at === 'player' ? g.player.pos : V(S.at[0], 0, S.at[1]); a.faceYaw = Math.atan2(p.x - a.pos.x, p.z - a.pos.z); } }
    if (S.say) {
      this.blocking = () => !g.ui.inDialog;
      g.ui.dialog(S.say, S.lines);
    }
    if (S.wait) this.waitT = S.wait;
    if (S.do) S.do(g);
    if (S.anim) { this.anim = { fn: S.anim, dur: S.dur || 1, t: 0 }; this.blocking = () => !this.anim; }
    if (S.banner) g.ui.banner(S.banner[0], S.banner[1] || '', S.banner[2] || 2.4, S.banner[3] || 'title-banner');
    if (!this.blocking && !this.waitT) return this.next();
  }

  // 사람 걷기 (게임 시간으로)
  updateWalks(dt) {
    const g = this.game;
    for (const w of [...this.walks]) {
      const a = w.a;
      const dx = w.to[0] - a.pos.x, dz = w.to[1] - a.pos.z;
      const d = Math.hypot(dx, dz);
      w.t = (w.t || 0) + dt;
      // 도착 (플레이어는 한 프레임에 움직이는 거리가 커서 넉넉히), 너무 오래 걸리면 그만
      if (d < (a === g.player ? 0.6 : 0.25) || w.t > 8) {
        this.walks = this.walks.filter((x) => x !== w);
        if (a.walk) a.walk = null;
        continue;
      }
      const step = Math.min(d, w.speed * dt);
      if (a === g.player) {
        // 플레이어는 이동 입력으로 걷게 함 (애니메이션 그대로)
        this.playerInput = { mx: dx / d, mz: dz / d, moveLen: 1, mouseRecent: false, mouseWorld: null };
      } else {
        // NPC는 길찾기 흐름장을 따라 걸음 (나무·담에 걸리지 않게), 길이 없으면 곧장
        if (!w.flow) { g.world.updateFlow(w.to[0], w.to[1], 0, 3, 4000); w.flow = true; }
        const dir = d > 1.2 ? g.world.navDir(a.pos, 0, 3) : null;
        const mx = dir ? dir.x : dx / d, mz = dir ? dir.z : dz / d;
        g.world.move(a.pos, mx * step, mz * step, 0.3);
        a.pos.y = g.world.heightAt(a.pos.x, a.pos.z);
        a.walk = { speed: w.speed, yaw: Math.atan2(mx, mz) };
      }
    }
  }

  // 메인 루프에서 매 프레임: 플레이어 입력을 돌려줌
  update(dt) {
    const g = this.game;
    this.t += dt;
    this.playerInput = null;
    g.player.invuln = Math.max(g.player.invuln, 0.3);
    this.updateWalks(dt);
    if (this.anim) { const A = this.anim; A.t += dt; A.fn(g, Math.min(1, A.t / A.dur), dt); if (A.t >= A.dur) this.anim = null; }
    for (const n of g.npcs) if (n.faceYaw !== undefined && !n.walk) { n.baseYaw = n.faceYaw; }
    if (this.waitT > 0) { this.waitT -= dt; if (this.waitT <= 0) this.next(); }
    else if (this.blocking && this.blocking()) this.next();
    return this.playerInput || { mx: 0, mz: 0, moveLen: 0, mouseRecent: false, mouseWorld: null };
  }

  // 카메라가 볼 곳 (없으면 null → 평소처럼 플레이어)
  camTarget() {
    const c = this.cam;
    if (!c) return null;
    if (Array.isArray(c)) return V(c[0], c[1], c[2]);
    const a = this.actor(c);
    return a ? V(a.pos.x, (a.y ?? a.pos.y) + 0.8, a.pos.z - 0.6) : null;
  }

  skip() {
    if (this.ended) return;
    const ui = this.game.ui;
    for (let k = 0; k < 40 && ui.inDialog; k++) ui.advance();
    if (this.anim) { this.anim.fn(this.game, 1, 0); this.anim = null; }
    this.end(true);
  }

  end(skipped) {
    if (this.ended) return;
    this.ended = true;
    const g = this.game;
    for (const w of this.walks) if (w.a.walk) w.a.walk = null;
    for (const n of g.npcs) delete n.faceYaw;
    this.finish?.(g, skipped);
    document.getElementById('cine').className = '';
    document.getElementById('app').classList.remove('cine-on');
    g.cut = null;
    this.onEnd?.(g);
  }
}

