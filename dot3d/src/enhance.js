// 강화: 무기·갑옷·방어구/장신구(장갑·각반·허리띠·반지)를 주문서로 +1씩 올림 (최대 +15)
//  - 주문서는 종류마다 따로 (무기 / 갑옷 / 장신구). 몬스터가 가끔, 보스가 여럿 떨어뜨림
//  - 성공 확률은 단계가 오를수록 낮아짐. +6부터는 실패하면 한 단계 떨어짐 (장비가 사라지지는 않음)
//  - 축복받은 주문서를 함께 쓰면 실패해도 떨어지지 않음
//  - +10 → +11부터는 보스만 떨어뜨리는 '요괴 혼석'이 더 필요 (+10→11: 1개 … +14→15: 5개)
//  무기·갑옷 강화 단계는 game.enh[아이템 id] (직업끼리 함께 씀), 방어구·장신구는 그 장비의 g.enh
import { item } from './items.js';

export const ENH_MAX = 15;
export const MATS = {
  scrollW: { name: '무기 강화 주문서', color: '#ff8a5a', icon: ['#f4e4c0', '#c8302c'] },
  scrollA: { name: '갑옷 강화 주문서', color: '#6ab0ff', icon: ['#f4e4c0', '#2f5aa8'] },
  scrollG: { name: '장신구 강화 주문서', color: '#6ad08a', icon: ['#f4e4c0', '#3a8a5a'] },
  bless: { name: '축복받은 주문서', color: '#ffd76a', icon: ['#fff4c8', '#e0a020'] },
  soul: { name: '요괴 혼석', color: '#c890ff', icon: ['#e0c8ff', '#6a2aaa'] },
};
export const MAT_ORDER = ['scrollW', 'scrollA', 'scrollG', 'bless', 'soul'];

// lv → lv+1 성공 확률
const RATE = [1, 1, 1, 0.95, 0.9, 0.8, 0.7, 0.6, 0.5, 0.45, 0.4, 0.35, 0.3, 0.25, 0.2];
export const rateOf = (lv) => RATE[lv] ?? 0;
// lv → lv+1에 드는 요괴 혼석
export const soulCost = (lv) => (lv >= 10 ? lv - 9 : 0);
export const dropsOnFail = (lv) => lv >= 6;

// 강화 단계에 따른 효과
export const weaponBonus = (lv) => lv * 0.035 + Math.max(0, lv - 9) * 0.03; // 무기 공격력에 더함
export const outfitHp = (lv) => lv * 8 + Math.max(0, lv - 9) * 10;
export const outfitDef = (lv) => lv * 0.004;
export const gearMul = (lv) => 1 + lv * 0.05 + Math.max(0, lv - 9) * 0.04; // 장신구 옵션 배율

// 무엇을 강화하는지: { kind: 'weapon'|'outfit'|'gear', id|uid }
export function targetInfo(game, t) {
  if (t.kind === 'gear') {
    const g = game.gearByUid(t.uid);
    return g ? { name: g.name, lv: g.enh || 0, mat: 'scrollG', obj: g } : null;
  }
  const it = item(t.id);
  if (!it || !game.inv.has(t.id)) return null;
  return { name: it.name, lv: game.enh[t.id] || 0, mat: it.kind === 'weapon' ? 'scrollW' : 'scrollA', obj: it };
}

export const enhName = (name, lv) => (lv ? `+${lv} ${name}` : name);

// 한 번 강화. 결과 { ok, lv, from, msg } (재료가 모자라면 ok=null)
export function tryEnhance(game, t, useBless = false) {
  const info = targetInfo(game, t);
  if (!info) return { ok: null, msg: '강화할 장비가 없어요' };
  const lv = info.lv, M = game.mats;
  if (lv >= ENH_MAX) return { ok: null, msg: '더 강화할 수 없어요 (+15)' };
  if ((M[info.mat] || 0) < 1) return { ok: null, msg: `${MATS[info.mat].name}가 모자라요` };
  const soul = soulCost(lv);
  if ((M.soul || 0) < soul) return { ok: null, msg: `요괴 혼석이 ${soul}개 필요해요 (보스가 떨어뜨려요)` };
  if (useBless && (M.bless || 0) < 1) useBless = false;
  M[info.mat]--;
  M.soul = (M.soul || 0) - soul;
  if (useBless) M.bless--;
  const ok = Math.random() < rateOf(lv);
  let to = lv;
  if (ok) to = lv + 1;
  else if (dropsOnFail(lv) && !useBless) to = lv - 1;
  if (t.kind === 'gear') info.obj.enh = to; else if (to) game.enh[t.id] = to; else delete game.enh[t.id];
  game.stats.enhTry = (game.stats.enhTry || 0) + 1;
  if (ok) game.stats.enhBest = Math.max(game.stats.enhBest || 0, to);
  return { ok, lv: to, from: lv, blessed: useBless };
}

// 처치 보상: 주문서·혼석 (몬스터는 가끔, 보스는 여럿)
export function rollMats(e, round = 0, hard = false) {
  const out = {};
  const add = (k, n = 1) => { out[k] = (out[k] || 0) + n; };
  const pick = () => ['scrollW', 'scrollA', 'scrollG'][Math.floor(Math.random() * 3)];
  if (e.isBoss) {
    for (let i = 0; i < 2 + (Math.random() < 0.5 ? 1 : 0); i++) add(pick());
    add('soul', 1 + (e.awakened ? 1 : 0) + (hard && Math.random() < 0.5 ? 1 : 0) + (round >= 3 && Math.random() < 0.3 ? 1 : 0));
    if (Math.random() < 0.18) add('bless');
  } else {
    const k = (e.elite ? 4 : 1) * (e.field ? 1.2 : 1);
    if (Math.random() < 0.035 * k) add(pick());
    if (Math.random() < 0.003 * k) add('bless');
  }
  return out;
}
