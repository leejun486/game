// 수련 패스 (무료): 매주(월요일부터) 새로 시작하는 30칸. 유료 칸은 없음
//  - 점수: 주간 과제를 마치면 과제마다 정해진 점수, 적 10마리마다 1점(주에 300점까지)
//  - 60점마다 한 칸이 열리고, 칸마다 재료·엽전·달빛 구슬·꾸밈(10·20·30칸)을 받음
//  - 과제 진행은 누적 기록(stats)의 이번 주 시작 값과의 차이로 셈 (daily.js와 같은 방식)
//  - 꾸밈은 한 번 받으면 계속 가짐. 이미 가진 꾸밈 칸은 달빛 구슬 30으로 바꿔 줌
//  상태: game.ext.pass = { week, base: {과제: 시작 값}, done: {과제: 1}, got: [칸 번호] }
import { weekNo, daysLeft } from './weekly.js';
import { MATS } from './enhance.js';
import { cosOf, owns, gainBeads } from './cosmetics.js';
import { tr } from './i18n.js';

const COS_NAME = { head: '머리 장식', back: '등 장식', aura: '오라' };

export const PASS_TIERS = 30, PASS_STEP = 60, KILL_CAP = 300;
const sum = (o) => Object.values(o || {}).reduce((a, b) => a + b, 0);

export const MISSIONS = [
  { id: 'k1', text: (n) => `적 ${n} 처치`, n: 300, pts: 150, stat: (S) => S.kills || 0 },
  { id: 'k2', text: (n) => `적 ${n} 처치`, n: 1000, pts: 200, stat: (S) => S.kills || 0 },
  { id: 'b1', text: (n) => `보스 ${n}번 물리치기`, n: 5, pts: 150, stat: (S) => sum(S.bosses) },
  { id: 'b2', text: (n) => `보스 ${n}번 물리치기`, n: 12, pts: 200, stat: (S) => sum(S.bosses) },
  { id: 'daily', text: (n) => `오늘의 목표 모두 마친 날 ${n}일`, n: 3, pts: 200, stat: (S) => S.daily || 0 },
  { id: 'enh', text: (n) => `강화 ${n}번 시도`, n: 25, pts: 100, stat: (S) => S.enhTry || 0 },
  { id: 'dg', text: (n) => `시간 던전에서 ${n}분`, n: 30, pts: 150, stat: (S) => Math.floor((S.dgTime || 0) / 60) },
  { id: 'gear', text: (n) => `방어구·장신구 ${n}개 줍기`, n: 20, pts: 100, stat: (S) => S.gear || 0 },
  { id: 'pd', text: (n) => `완벽한 회피 ${n}번`, n: 30, pts: 100, stat: (S) => S.perfect || 0 },
  { id: 'bounty', text: (n) => `현상수배 ${n}번 마치기`, n: 3, pts: 100, stat: (S) => S.bounties || 0 },
  { id: 'grow', text: (n) => `한계돌파·초월·각성 ${n}번`, n: 1, pts: 100, stat: (S) => S.grow || 0 },
  { id: 'rematch', text: (n) => `보스 다시 싸우기 ${n}번`, n: 3, pts: 100, stat: (S) => S.rematch || 0 },
  { id: 'refine', text: (n) => `무기 세공 ${n}번`, n: 5, pts: 100, stat: (S) => S.refines || 0 },
  { id: 'away', text: (n) => `자리 비운 동안 수련 ${n}번 받기`, n: 2, pts: 50, stat: (S) => S.away || 0 },
];

// 칸 보상: 재료(MATS 키) · coins · beads · cos('종류:아이디')
export const REWARDS = [
  { scrollW: 1, scrollA: 1, scrollG: 1 }, { coins: 500 }, { dust: 10 }, { bless: 1 }, { beads: 20 },
  { scrollW: 2, scrollG: 1 }, { coins: 800 }, { dust: 15 }, { soul: 1 }, { cos: 'back:passScarf' },
  { scrollA: 2, scrollG: 1 }, { coins: 1000 }, { stoneR: 5 }, { bless: 1 }, { beads: 30 },
  { scrollW: 2, scrollA: 2 }, { dust: 20 }, { soul: 2 }, { stoneC: 3 }, { cos: 'head:passPin' },
  { scrollG: 3 }, { coins: 1500 }, { bless: 2 }, { dust: 25 }, { beads: 40 },
  { soul: 2 }, { stoneM: 1 }, { coins: 2000 }, { bless: 2, soul: 1 }, { cos: 'aura:passAura', beads: 50 },
];

// 이번 주 상태 (주가 바뀌면 새로)
export function passState(g) {
  const w = weekNo();
  let P = g.ext.pass;
  if (!P || P.week !== w) {
    const base = {};
    for (const M of MISSIONS) base[M.id] = M.stat(g.stats);
    base.kills = g.stats.kills || 0;
    P = g.ext.pass = { week: w, base, done: {}, got: [] };
  }
  return P;
}

export const missionProg = (g, P, M) => Math.max(0, Math.min(M.n, M.stat(g.stats) - (P.base[M.id] ?? 0)));
export const killPts = (g, P) => Math.min(KILL_CAP, Math.floor(Math.max(0, (g.stats.kills || 0) - (P.base.kills || 0)) / 10));
export const passPts = (g, P) => MISSIONS.reduce((a, M) => a + (P.done[M.id] ? M.pts : 0), 0) + killPts(g, P);
export const passTier = (g, P) => Math.min(PASS_TIERS, Math.floor(passPts(g, P) / PASS_STEP));

// 과제를 마쳤는지 살핌 → 새로 마친 과제 목록
export function checkPass(g) {
  const P = passState(g), fresh = [];
  for (const M of MISSIONS) if (!P.done[M.id] && missionProg(g, P, M) >= M.n) { P.done[M.id] = 1; fresh.push(M); }
  return fresh;
}

// 칸 받기 → 받은 것 설명 목록 (못 받으면 null)
export function claimTier(g, i) {
  const P = passState(g);
  if (i < 1 || i > passTier(g, P) || P.got.includes(i)) return null;
  const R = REWARDS[i - 1], out = [];
  for (const [k, v] of Object.entries(R)) {
    if (k === 'coins') { g.shop.gain(v); out.push(['엽전', v]); }
    else if (k === 'beads') { gainBeads(g, v); out.push(['달빛 구슬', v]); }
    else if (k === 'cos') {
      const [kind, id] = v.split(':'), x = cosOf(kind, id);
      if (owns(g, x)) { gainBeads(g, 30); out.push(['달빛 구슬', 30]); }
      else { ((g.ext.cos ||= {}).owned ||= {})[x.id] = Date.now(); out.push([x.name, 0]); }
    } else { g.mats[k] = (g.mats[k] || 0) + v; out.push([MATS[k].name, v]); }
  }
  P.got.push(i);
  g.stats.passTiers = (g.stats.passTiers || 0) + 1;
  return out;
}

// 받을 수 있는데 안 받은 칸 수
export const passReady = (g) => { const P = passState(g); let n = 0; for (let i = 1; i <= passTier(g, P); i++) if (!P.got.includes(i)) n++; return n; };

const rewardHtml = (R) => Object.entries(R).map(([k, v]) => {
  if (k === 'cos') { const [kind, id] = v.split(':'); return `<span class="ps-cos"><em>${cosOf(kind, id).name}</em><small>${COS_NAME[kind]}</small></span>`; }
  const name = k === 'coins' ? '엽전' : k === 'beads' ? '달빛 구슬' : MATS[k].name;
  const col = k === 'coins' ? '#ffd76a' : k === 'beads' ? '#cfe0ff' : MATS[k].color;
  return `<span><em style="color:${col}">${name}</em><b>×${v}</b></span>`;
}).join('');

// 일시정지 창 '수련 패스'
export function renderPass(g, el, msg = '') {
  checkPass(g); // 창을 열 때도 바로 반영
  const P = passState(g), pts = passPts(g, P), tier = passTier(g, P);
  const ready = passReady(g);
  const next = tier >= PASS_TIERS ? PASS_STEP : pts - tier * PASS_STEP;
  const cells = REWARDS.map((R, i) => {
    const n = i + 1, got = P.got.includes(n), open = n <= tier;
    return `<button class="ps-cell${got ? ' got' : open ? ' ready' : ''}${R.cos ? ' cos' : ''}" data-tier="${n}" ${open && !got ? '' : 'disabled'}><i>${n}</i><div class="ps-rw">${rewardHtml(R)}</div>${got ? '<small class="ps-st">받음</small>' : open ? '<small class="ps-st">받기</small>' : ''}</button>`;
  }).join('');
  const ms = MISSIONS.map((M) => {
    const p = missionProg(g, P, M), done = !!P.done[M.id];
    return `<div class="ps-ms${done ? ' done' : ''}"><span class="ps-mt">${M.text(M.n)}</span><span class="ps-mp"><b>${p}</b>/${M.n}</span><span class="ps-pts">+${M.pts}</span></div>`;
  }).join('');
  el.innerHTML = `<h3>수련 패스</h3>
    <div class="ps-head"><span class="ps-tier"><b>${tier}</b>/${PASS_TIERS}</span><div class="ps-bar"><i style="width:${Math.round((next / PASS_STEP) * 100)}%"></i></div><span class="ps-pt"><b>${pts}</b>${tr('점')}</span>
      <button id="ps-all" ${ready ? '' : 'disabled'}>모두 받기</button></div>
    <div class="pz-note" style="margin-top:0"><span>${PASS_STEP}점마다 한 칸</span> · <span>이번 주 남은 날 ${daysLeft()}일</span> · <span>유료 칸 없음</span></div>
    ${msg ? `<div class="enh-msg">${msg}</div>` : ''}
    <div class="ps-grid">${cells}</div>
    <h4 class="cx-h">이번 주 과제</h4>
    <div class="ps-list">${ms}<div class="ps-ms"><span class="ps-mt">적 10마리마다 1점</span><span class="ps-mp"><b>${killPts(g, P)}</b>/${KILL_CAP}</span><span class="ps-pts"></span></div></div>
    <div class="pz-note">매주 월요일에 새로 시작해요. 꾸밈은 한 번 받으면 계속 가지고, 이미 가진 꾸밈 칸은 달빛 구슬 30개로 받아요.</div>`;
  const take = (list) => {
    const got = [];
    for (const n of list) { const r = claimTier(g, n); if (r) got.push(...r); }
    if (!got.length) return;
    g.audio.play('coin'); g.records?.check?.(); g.save(false);
    if (!g.ui.bagOpen) g.ui.refreshBag?.();
    renderPass(g, el, `${tr('받았어요')}: ${got.map(([k, v]) => (v ? `${tr(k)} ×${v}` : tr(k))).join(' · ')}`);
  };
  el.querySelector('#ps-all')?.addEventListener('click', () => take(Array.from({ length: tier }, (_, i) => i + 1)));
  for (const b of el.querySelectorAll('[data-tier]')) b.addEventListener('click', () => take([+b.dataset.tier]));
}
