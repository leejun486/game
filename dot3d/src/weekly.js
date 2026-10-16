// 주간 경연: 매주 모두에게 같은 보스 셋 + 같은 규칙. 서버 없이 친구와 겨루기
//  - 주차 번호로 보스·규칙을 정함 → 같은 주에는 누구나 같은 도전
//  - 다 깨면 걸린 시간으로 '기록 코드'를 만듦. 친구가 그 코드를 자기 게임에 붙여 넣으면 순위가 나옴
//    (코드 안에 주차·시간·직업·레벨·저장마다 정해진 표식이 들어 있고, 검사값으로 오타·장난을 거름)
//  - 자랑하기(공유·복사)와 기록 카드 그림 저장
//  기록은 game.ext.wk = { week, best(0.1초), cls, lv, tries, paid, friends: [code] }, game.ext.tag(표식)
import { BOSS_ORDER, BOSS_NAME } from './challenge.js';
import { RULES } from './towerrules.js';
import { CLASSES, CLASS_ORDER } from './classes.js';
import { LANG, tr } from './i18n.js';

const WEEK0 = Date.UTC(2026, 0, 5); // 2026-01-05 월요일 = 1주차
const WEEK_MS = 7 * 24 * 3600 * 1000;
export const weekNo = (t = Date.now()) => Math.max(1, Math.floor((t - WEEK0) / WEEK_MS) + 1);
// 이번 주가 끝나기까지 남은 날
export const daysLeft = (t = Date.now()) => Math.ceil((WEEK0 + weekNo(t) * WEEK_MS - t) / 86400000);

// 주차로 정해지는 난수 (같은 주는 늘 같음)
function rng(seed) {
  let a = seed >>> 0;
  return () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
// 보스에 붙여도 되는 규칙만 (졸개가 필요한 정예·떼, 층에서만 도는 불바다는 뺌)
const WEEK_RULES = ['swift', 'dark', 'glass'];
export function weeklySet(w = weekNo()) {
  const r = rng(w * 7919 + 13), pool = [...BOSS_ORDER], bosses = [];
  while (bosses.length < 3) bosses.push(pool.splice(Math.floor(r() * pool.length), 1)[0]);
  const key = WEEK_RULES[Math.floor(r() * WEEK_RULES.length)];
  return { week: w, bosses, rule: { key, ...RULES[key] } };
}

// 이번 주 기록 (주가 바뀌면 새로)
export function weekState(g) {
  const w = weekNo();
  if (!g.ext.wk || g.ext.wk.week !== w) g.ext.wk = { week: w, best: 0, tries: 0, paid: false, friends: [] };
  if (!g.ext.tag) g.ext.tag = 1 + Math.floor(Math.random() * 0xfffff);
  return g.ext.wk;
}

// ---------- 기록 코드 ----------
//  주차 12비트 · 시간(0.1초) 17비트 · 직업 2 · 레벨 7 · 표식 20 · 검사값 8 = 66비트 → 32진수 14글자
const ABC = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ'; // 헷갈리는 0·1·I·O는 뺌
const FIELDS = [['week', 12], ['ds', 17], ['cls', 2], ['lv', 7], ['tag', 20]];
function check8(v) {
  let h = 0x9e37;
  for (const [k] of FIELDS) { h = Math.imul(h ^ v[k], 0x45d9f3b) >>> 0; h ^= h >>> 13; }
  return (h ^ (h >>> 8) ^ (h >>> 16)) & 255;
}
export function encodeRecord(v) {
  let n = 0n;
  for (const [k, b] of FIELDS) n = (n << BigInt(b)) | BigInt(Math.max(0, Math.min((1 << b) - 1, v[k] | 0)));
  n = (n << 8n) | BigInt(check8(v));
  let s = '';
  for (let i = 0; i < 14; i++) { s = ABC[Number(n & 31n)] + s; n >>= 5n; }
  return `${s.slice(0, 5)}-${s.slice(5, 10)}-${s.slice(10)}`;
}
export function decodeRecord(code) {
  const s = String(code || '').toUpperCase().replace(/[^0-9A-Z]/g, '').replace(/^WH/, '');
  if (s.length !== 14) return null;
  let n = 0n;
  for (const c of s) { const i = ABC.indexOf(c); if (i < 0) return null; n = (n << 5n) | BigInt(i); }
  const sum = Number(n & 255n);
  n >>= 8n;
  const v = {};
  for (const [k, b] of [...FIELDS].reverse()) { v[k] = Number(n & BigInt((1 << b) - 1)); n >>= BigInt(b); }
  if (n !== 0n || check8(v) !== sum || !v.ds || !v.lv) return null;
  return { ...v, cls: CLASS_ORDER[v.cls], code: encodeRecord(v) };
}
export const myCode = (g) => {
  const W = weekState(g);
  return W.best ? encodeRecord({ week: W.week, ds: W.best, cls: CLASS_ORDER.indexOf(W.cls), lv: W.lv, tag: g.ext.tag }) : '';
};

// 친구 코드 더하기: 이번 주 것만, 내 것·같은 사람(표식)은 더 좋은 기록 하나만
export function addFriend(g, code) {
  const W = weekState(g), r = decodeRecord(code);
  if (!r) return '코드가 맞지 않아요';
  if (r.week !== W.week) return '이번 주 기록이 아니에요';
  if (r.tag === g.ext.tag) return '내 기록이에요';
  const list = W.friends.map(decodeRecord).filter(Boolean).filter((x) => x.tag !== r.tag || x.ds < r.ds);
  if (list.some((x) => x.tag === r.tag)) return '이미 더 좋은 기록이 있어요';
  list.push(r);
  W.friends = list.slice(-20).map((x) => x.code);
  return '';
}

// 순위표: 나 + 친구들, 빠른 순
export function board(g) {
  const W = weekState(g);
  const rows = W.friends.map(decodeRecord).filter(Boolean).map((x) => ({ ...x, me: false }));
  if (W.best) rows.push({ ds: W.best, cls: W.cls, lv: W.lv, tag: g.ext.tag, me: true });
  return rows.sort((a, b) => a.ds - b.ds);
}

export const fmtTime = (ds) => `${Math.floor(ds / 600)}:${String(Math.floor(ds / 10) % 60).padStart(2, '0')}.${ds % 10}`;
export const tagName = (tag) => '#' + tag.toString(36).toUpperCase().padStart(4, '0').slice(-4);

// ---------- 자랑하기 ----------
const SHARE = {
  ko: (w, c, lv, t, code) => `월하궁 주간 경연 제${w}주 · ${c} Lv.${lv} · ${t}\n내 기록 코드: ${code}\n게임의 보스 도전 → 주간 경연에 붙여 넣으면 순위가 나와요. 이길 수 있어?`,
  en: (w, c, lv, t, code) => `Wolhagung Weekly Trial #${w} · ${c} Lv.${lv} · ${t}\nMy record code: ${code}\nPaste it in Boss Challenge → Weekly Trial to compare. Can you beat it?`,
  ja: (w, c, lv, t, code) => `月下宮 週間試練 第${w}週 · ${c} Lv.${lv} · ${t}\n記録コード: ${code}\nボス挑戦 → 週間試練に貼り付けると順位が出ます。勝てるかな?`,
  zh: (w, c, lv, t, code) => `月下宫 每周试炼 第${w}周 · ${c} Lv.${lv} · ${t}\n我的记录码:${code}\n在 首领挑战 → 每周试炼 中粘贴即可比较排名。你能赢吗?`,
};
export function shareText(g) {
  const W = weekState(g);
  return (SHARE[LANG] || SHARE.ko)(W.week, tr(CLASSES[W.cls].title), W.lv, fmtTime(W.best), myCode(g));
}
// 공유 창이 있으면(휴대폰) 그것으로, 없으면 복사
export async function shareRecord(g) {
  const text = shareText(g);
  try {
    if (navigator.share) { await navigator.share({ text }); return 'shared'; }
  } catch (e) { if (e?.name === 'AbortError') return 'cancel'; }
  try { await navigator.clipboard.writeText(text); return 'copied'; } catch { return 'fail'; }
}

// 기록 카드 그림 (정사각형 PNG)
export function drawCard(g, cv) {
  const W = weekState(g), S = weeklySet(W.week);
  const n = 1080;
  cv.width = cv.height = n;
  const c = cv.getContext('2d');
  const font = LANG === 'ja' ? 'WolhaUIJP' : LANG === 'zh' ? 'WolhaUISC' : 'WolhaUI';
  const F = (px) => `${px}px ${font}, sans-serif`;
  const bg = c.createLinearGradient(0, 0, 0, n);
  bg.addColorStop(0, '#1b1530'); bg.addColorStop(1, '#3a1f2e');
  c.fillStyle = bg; c.fillRect(0, 0, n, n);
  // 달
  c.fillStyle = 'rgba(255, 236, 190, 0.9)'; c.beginPath(); c.arc(n - 170, 170, 90, 0, Math.PI * 2); c.fill();
  c.fillStyle = '#1d1630'; c.beginPath(); c.arc(n - 135, 150, 82, 0, Math.PI * 2); c.fill();
  c.textAlign = 'center';
  c.fillStyle = '#ffd77a'; c.font = F(54);
  c.fillText(`${tr('월하궁')} · ${tr('주간 경연')}`, n / 2, 150);
  c.fillStyle = '#c8bea8'; c.font = F(40);
  c.fillText(LANG === 'en' ? `Week ${W.week}` : LANG === 'ko' ? `제${W.week}주` : LANG === 'ja' ? `第${W.week}週` : `第${W.week}周`, n / 2, 215);
  c.fillStyle = '#fff6e2'; c.font = F(200);
  c.fillText(fmtTime(W.best), n / 2, 470);
  c.fillStyle = '#9ff0b0'; c.font = F(56);
  c.fillText(`${tr(CLASSES[W.cls].title)} Lv.${W.lv}`, n / 2, 560);
  c.fillStyle = '#e8dcc0'; c.font = F(42);
  c.fillText(S.bosses.map((b) => tr(BOSS_NAME[b])).join(' · '), n / 2, 660);
  c.fillStyle = '#ff9a7a';
  c.fillText(`${tr(S.rule.name)} — ${tr(S.rule.desc)}`, n / 2, 725);
  c.fillStyle = 'rgba(255,255,255,0.08)'; c.fillRect(140, 800, n - 280, 130);
  c.fillStyle = '#ffd77a'; c.font = F(64);
  c.fillText(myCode(g), n / 2, 888);
  c.fillStyle = '#a89eb4'; c.font = F(32);
  c.fillText(tr('이 코드를 친구에게 보내 기록을 겨뤄 보세요'), n / 2, 990);
  return cv;
}
export function saveCard(g) {
  const cv = drawCard(g, document.createElement('canvas'));
  cv.toBlob((b) => {
    if (!b) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(b);
    a.download = `wolhagung-week${weekState(g).week}.png`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  });
}
