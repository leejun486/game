// 출석 보상: 하루 한 번 처음 들어올 때 받는 7일 꾸러미
//  - '누적' 출석: 하루 빠져도 처음으로 돌아가지 않음 (연속 출석을 끊으면 오히려 그만두게 됨)
//  - 7일째마다 달빛 구슬 30 (꾸미기 돈) → 돈을 안 써도 꾸밈을 하나씩 살 수 있음
//  - 7일이 지나면 다시 1일부터 (같은 꾸러미)
//  기록은 game.ext.att = { n: 받은 날 수, day: 마지막으로 받은 날 }
import { today } from './shop.js';
import { MATS } from './enhance.js';
import { gainBeads } from './cosmetics.js';

export const ATTEND = [
  { coins: 300 },
  { scroll: 3 },
  { dust: 10 },
  { bless: 1 },
  { soul: 1 },
  { coins: 800, scroll: 2 },
  { beads: 30 },
];

// 칸에 쓰는 이름·수
export function rewardLines(r) {
  const out = [];
  if (r.coins) out.push(['엽전', r.coins]);
  if (r.scroll) out.push(['강화 주문서', r.scroll]);
  if (r.dust) out.push([MATS.dust.name, r.dust]);
  if (r.bless) out.push([MATS.bless.name, r.bless]);
  if (r.soul) out.push([MATS.soul.name, r.soul]);
  if (r.beads) out.push(['달빛 구슬', r.beads]);
  return out;
}

export const attendState = (g) => (g.ext.att ||= { n: 0, day: '' });
export const canAttend = (g) => attendState(g).day !== today();

// 오늘 것 받기 (이미 받았으면 null)
export function claimAttend(g) {
  const A = attendState(g);
  if (A.day === today()) return null;
  const idx = A.n % ATTEND.length, r = ATTEND[idx];
  const mats = {};
  for (let i = 0; i < (r.scroll || 0); i++) { const k = ['scrollW', 'scrollA', 'scrollG'][Math.floor(Math.random() * 3)]; mats[k] = (mats[k] || 0) + 1; }
  for (const k of ['dust', 'bless', 'soul']) if (r[k]) mats[k] = r[k];
  for (const [k, n] of Object.entries(mats)) g.mats[k] = (g.mats[k] || 0) + n;
  if (r.coins) g.shop.gain(r.coins);
  if (r.beads) gainBeads(g, r.beads);
  A.n++;
  A.day = today();
  g.ui.refreshBag?.();
  return { idx, n: A.n };
}

// 7칸 (받은 칸 ✔, 오늘 칸 반짝)
export function attendHtml(g, justIdx = -1) {
  const A = attendState(g), cur = A.n % ATTEND.length, last = A.n ? (A.n - 1) % ATTEND.length : -1;
  const fresh = canAttend(g) && cur === 0; // 7일을 다 채웠으면 새 묶음
  return `<div class="at-grid">${ATTEND.map((r, i) => {
    const got = !fresh && i <= last;
    const cls = i === justIdx ? 'now' : got ? 'got' : canAttend(g) && i === cur ? 'next' : '';
    return `<div class="at-c ${cls}${i === 6 ? ' big' : ''}"><small>${i + 1}일차</small>${rewardLines(r).map(([k, n]) => `<span>${k}</span><b>×${n}</b>`).join('')}${got ? '<em>✔</em>' : ''}</div>`;
  }).join('')}</div>`;
}

// 받은 뒤 카드
export function showAttend(g, res, onClose) {
  const el = document.getElementById('att-card');
  if (!el) { onClose?.(); return; }
  el.innerHTML = `<div class="aw-t">출석 보상</div><div class="aw-n">누적 출석 ${res.n}일</div>${attendHtml(g, res.idx)}<div class="aw-n">하루 빠져도 처음으로 돌아가지 않아요 · 7일차마다 달빛 구슬</div><button class="tbtn main" data-close>확인</button>`;
  el.classList.add('show');
  g.audio.play('coin');
  let done = false;
  const close = () => { if (done) return; done = true; el.classList.remove('show'); clearTimeout(t); onClose?.(); };
  const t = setTimeout(close, 8000);
  el.querySelector('[data-close]').onclick = close;
}
