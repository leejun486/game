// 오늘의 목표: 날마다(내 컴퓨터의 날짜 기준) 세 가지 목표가 새로 생김
//  - 날짜로 정해지는 난수로 뽑아서, 같은 날엔 다시 켜도 같은 목표
//  - 지금 갈 수 있는 곳·만난 적 있는 몬스터로만 뽑음 (못 하는 목표는 안 나옴)
//  - 하나 마칠 때마다 경험치, 셋 다 마치면 희귀 이상 장비 하나
//  - 진행은 누적 기록(stats)의 오늘 시작 값과의 차이로 셈 (연속 타격·밤 싸움·시련탑은 따로 셈)
import { tr } from './i18n.js';
import { MONSTERS } from './records.js';
import { expNeed } from './entities.js';
import { makeGear, rollGearTier } from './gear.js';

const sum = (o) => Object.values(o || {}).reduce((a, b) => a + b, 0);
const NAME = Object.fromEntries(MONSTERS.map((m) => [m.type, m.name]));

// stat: 누적 기록에서 읽는 값 (없으면 ev: 사건으로 셈)
export const GOALS = [
  { id: 'kill', text: (n) => `적 ${n} 처치`, n: [40, 60, 80], stat: (S) => S.kills },
  { id: 'type', text: (n, t) => `${NAME[t]} ${n}마리 처치`, n: [12, 16, 20], stat: (S, t) => S.killsBy?.[t] || 0, pick: (g, r) => { const ts = MONSTERS.filter((m) => !m.boss && g.stats.killsBy?.[m.type]).map((m) => m.type); return ts.length ? ts[Math.floor(r() * ts.length)] : null; } },
  { id: 'boss', text: (n) => `보스 ${n}번 물리치기`, n: [1, 1, 2], stat: (S) => sum(S.bosses), ok: (g) => sum(g.stats.bosses) > 0 },
  { id: 'perfect', text: (n) => `완벽한 회피 ${n}번`, n: [4, 6, 8], stat: (S) => S.perfect },
  { id: 'combo', text: (n) => `${n} 연속 타격`, n: [25, 35, 50], ev: 'combo', max: true },
  { id: 'gear', text: (n) => `방어구·장신구 ${n}개 줍기`, n: [3, 4, 5], stat: (S) => S.gear },
  { id: 'night', text: (n) => `밤 싸움 ${n}번 이기기`, n: [1, 1, 1], ev: 'night', ok: (g) => g.round > 0 || Object.keys(g.cleared).length > 0 },
  { id: 'tower', text: (n) => `시련탑 ${n}층 돌파`, n: [2, 3, 4], ev: 'tower', ok: (g) => (g.towerBest || 0) > 0 },
  { id: 'bounty', text: (n) => `현상수배 ${n}번 마치기`, n: [1, 1, 1], stat: (S) => S.bounties, ok: (g) => g.quest.step > 0 && !g.curQuest() },
];
const byId = Object.fromEntries(GOALS.map((G) => [G.id, G]));

export const today = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

// 날짜 글자 → 난수 (mulberry32)
function rng(seed) {
  let h = 1779033703;
  for (const c of seed) h = Math.imul(h ^ c.charCodeAt(0), 3432918353), h = (h << 13) | (h >>> 19);
  let a = h >>> 0;
  return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

export class Daily {
  constructor(game) { this.game = game; this.t = 0; }

  get D() { return this.game.daily; }

  // 날이 바뀌었으면 새 목표 (처음 시작한 기록은 튜토리얼이 끝난 뒤부터)
  roll(force = false) {
    const g = this.game, day = today();
    if (!force && g.daily?.day === day) return false;
    const r = rng(day + ':' + (g.player.cls || ''));
    const pool = GOALS.filter((G) => !G.ok || G.ok(g));
    const goals = [];
    while (goals.length < 3 && pool.length) {
      const G = pool.splice(Math.floor(r() * pool.length), 1)[0];
      const arg = G.pick ? G.pick(g, r) : null;
      if (G.pick && !arg) continue;
      const lvl = Math.min(2, Math.floor((g.player.level || 1) / 12) + (g.difficulty === 'hard' ? 1 : 0));
      goals.push({ id: G.id, arg, n: G.n[lvl], base: G.stat ? G.stat(g.stats, arg) : 0, p: 0, done: false });
    }
    g.daily = { day, goals, bonus: false };
    return true;
  }

  prog(q) {
    const G = byId[q.id];
    if (q.done) return q.n;
    return Math.min(q.n, G.stat ? G.stat(this.game.stats, q.arg) - q.base : q.p);
  }

  text(q) { return byId[q.id].text(q.n, q.arg); }

  // 사건: combo(지금 연속 수), night(밤 싸움 승리), tower(층 돌파)
  event(kind, v = 1) {
    const D = this.D;
    if (!D) return;
    for (const q of D.goals) {
      const G = byId[q.id];
      if (q.done || G.ev !== kind) continue;
      q.p = G.max ? Math.max(q.p, v) : q.p + v;
    }
    this.check();
  }

  // 퀘스트처럼 필드에 더 자주 나오게 할 몬스터 (오늘 목표의 몬스터)
  wanted() {
    const D = this.D;
    return D ? D.goals.filter((q) => q.id === 'type' && !q.done).map((q) => q.arg) : [];
  }

  check() {
    const g = this.game, D = this.D;
    if (!D || g.state !== 'play') return;
    let changed = false;
    for (const q of D.goals) {
      if (q.done || this.prog(q) < q.n) continue;
      q.done = true; changed = true;
      const exp = Math.round(expNeed(g.player.level) * 0.3);
      g.player.addExp(exp);
      g.fx.number(g.player.pos.clone().setY(g.player.y + 2.6), `+${exp} EXP`, 'exp');
      g.ui.banner('오늘의 목표 달성', this.text(q), 2.2, 'win-banner');
      g.audio.play('levelup');
    }
    if (!D.bonus && D.goals.length && D.goals.every((q) => q.done)) {
      D.bonus = true; changed = true;
      g.stats.daily = (g.stats.daily || 0) + 1;
      const lv = Math.max(1, g.player.level) + g.round;
      const gear = makeGear(lv, Math.max(2, rollGearTier(0.6, g.round + 1)));
      g.after(2.4, () => { g.ui.banner('오늘의 목표 모두 달성!', '희귀 장비 보상', 2.4, 'win-banner'); g.pickupGear(gear); });
    }
    if (changed) { g.updateQuest(); g.save(false); }
  }

  update(dt) {
    const g = this.game;
    if (g.state !== 'play' || !g.flags.tut) return;
    this.t -= dt;
    if (this.t > 0) return;
    this.t = 1;
    if (this.roll()) { g.ui.toast('새 날이 밝았어요 — 오늘의 목표가 생겼어요 (메뉴 → 오늘의 목표)', 3.2); g.updateQuest(); g.save(false); }
    this.check();
  }

  // 퀘스트 창 아래 한 줄
  line() {
    const D = this.D;
    if (!D || !D.goals.length) return '';
    const k = D.goals.filter((q) => q.done).length;
    return `☀ ${tr('오늘의 목표')} <b>${k}/${D.goals.length}</b>`;
  }

  // 메뉴 안의 탭
  render(el) {
    const g = this.game, D = this.D;
    const now = new Date(), mid = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const left = Math.max(0, mid - now), h = Math.floor(left / 3600000), m = Math.floor((left % 3600000) / 60000);
    if (!D) { el.innerHTML = `<h3>오늘의 목표</h3><div class="pz-note">튜토리얼을 마치면 날마다 목표 셋이 생겨요.</div>`; return; }
    el.innerHTML = `<h3>오늘의 목표</h3>
      <div class="dl-list">${D.goals.map((q) => {
        const p = this.prog(q);
        return `<div class="dl-row${q.done ? ' done' : ''}"><div class="dl-t">${q.done ? '✔ ' : ''}${this.text(q)}</div><div class="dl-bar"><i style="width:${(p / q.n) * 100}%"></i></div><div class="dl-n">${p}/${q.n}</div></div>`;
      }).join('')}</div>
      <div class="pz-note">목표 하나마다 경험치(지금 레벨에 필요한 양의 30%), 셋 다 마치면 희귀 이상 장비 하나.</div>
      ${D.bonus ? '<div class="pz-note"><b>오늘 보상을 모두 받았어요.</b></div>' : ''}
      <div class="pz-note"><span>새 목표까지 ${h}시간 ${m}분</span> · <span>모두 마친 날 ${g.stats.daily || 0}일</span></div>`;
  }
}
