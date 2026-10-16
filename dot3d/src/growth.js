// 장비 성장 사다리: 강화(+15) → 한계돌파(최대 +30) → 초월(★1~5) → 각성
//  - 한계돌파: 지금 한계까지 강화했을 때 한계를 +5 올림 (세 번까지 → +30)
//      방어구·장신구는 같은 종류·같은 등급 장비 하나(착용·잠금 아닌 것)와 엽전, 무기·갑옷은 요괴 혼석과 엽전
//  - 초월: 영웅 이상, 한계돌파 1번 이상. ★ 하나마다 능력치 +10% (요괴 혼석 ★+1개 · 도깨비 가루 10×(★+1))
//  - 각성: 전설·보스 등급이 ★5일 때 한 번. 방어구·장신구는 고유 효과가 없으면 하나 붙고, 있으면 ×1.15
//      무기·갑옷은 ×1.15
//  상태: 방어구·장신구는 그 장비의 g.lb · g.star · g.awk, 무기·갑옷은 game.ext.grow[아이템 id] (직업끼리 함께 씀)
import { item } from './items.js';
import { ENH_MAX, targetInfo } from './enhance.js'; // 서로 불러 씀 (함수 안에서만 쓰므로 괜찮음)
import { LEGEND_PERKS } from './gear.js';

export const LB_MAX = 3, STAR_MAX = 5;

export function growOf(game, t) {
  if (t.kind === 'gear') return game.gearByUid(t.uid) || {};
  return (game.ext.grow ||= {})[t.id] || {};
}
function growSet(game, t, k, v) {
  if (t.kind === 'gear') { const g = game.gearByUid(t.uid); if (g) g[k] = v; return; }
  const G = (game.ext.grow ||= {});
  (G[t.id] ||= {})[k] = v;
}
export const capOf = (s) => ENH_MAX + 5 * Math.min(LB_MAX, s?.lb || 0);
export const growMul = (s) => (1 + 0.1 * (s?.star || 0)) * (s?.awk && !s.awkPerk ? 1.15 : 1);
// 무기·갑옷 id의 성장 배율 (entities recalc)
export const itemGrowMul = (game, id) => (id ? growMul(game.ext?.grow?.[id]) : 1);

const tierOf = (game, t) => (t.kind === 'gear' ? game.gearByUid(t.uid)?.tier ?? 0 : item(t.id)?.tier ?? 0);
export const lbCoins = (lb) => 400 * (lb + 1) * (lb + 1);
export const lbSoul = (lb) => 2 + lb * 2;
export const starCost = (star) => ({ soul: star + 1, dust: 10 * (star + 1) });
export const AWK_COST = { soul: 5, bless: 2 };

// 한계돌파에 쓸 같은 종류·등급 장비 (강화 낮은 것부터)
export function lbFodder(game, g) {
  return game.gear.filter((x) => x !== g && x.kind === g.kind && x.tier === g.tier && !x.set === !g.set && !x.lock && !game.isEquippedAny(x))
    .sort((a, b) => (a.enh || 0) - (b.enh || 0) || (a.star || 0) - (b.star || 0) || a.lv - b.lv)[0] || null;
}

// 지금 할 수 있는 성장 단계와 필요한 것 { step: 'lb'|'star'|'awk'|null, need, ok, why }
export function growInfo(game, t) {
  const info = targetInfo(game, t);
  if (!info) return null;
  const s = growOf(game, t), lb = s.lb || 0, star = s.star || 0, tier = tierOf(game, t), cap = capOf(s), M = game.mats;
  const coins = game.shop?.coins ?? 0;
  const out = { lb, star, awk: !!s.awk, tier, cap, lv: info.lv, canStar: tier >= 3, canAwk: tier >= 4 };
  if (info.lv >= cap && lb < LB_MAX) {
    out.step = 'lb';
    out.need = { coins: lbCoins(lb) };
    if (t.kind === 'gear') { out.fodder = lbFodder(game, info.obj); out.need.fodder = 1; }
    else out.need.soul = lbSoul(lb);
    out.ok = coins >= out.need.coins && (t.kind === 'gear' ? !!out.fodder : (M.soul || 0) >= out.need.soul);
    out.why = !out.ok ? (coins < out.need.coins ? '엽전이 모자라요' : t.kind === 'gear' ? '같은 종류·등급 장비가 하나 더 있어야 해요 (착용·잠금 제외)' : '요괴 혼석이 모자라요') : '';
  } else if (tier >= 3 && lb >= 1 && star < STAR_MAX) {
    out.step = 'star';
    out.need = starCost(star);
    out.ok = (M.soul || 0) >= out.need.soul && (M.dust || 0) >= out.need.dust;
    out.why = out.ok ? '' : '재료가 모자라요';
  } else if (tier >= 4 && star >= STAR_MAX && !s.awk) {
    out.step = 'awk';
    out.need = { ...AWK_COST };
    out.ok = (M.soul || 0) >= out.need.soul && (M.bless || 0) >= out.need.bless;
    out.why = out.ok ? '' : '재료가 모자라요';
  } else out.step = null;
  return out;
}

// 한 단계 성장. 결과 { ok, msg }
export function doGrow(game, t) {
  const gi = growInfo(game, t);
  if (!gi || !gi.step) return { ok: false, msg: '지금은 성장할 수 없어요' };
  if (!gi.ok) return { ok: false, msg: gi.why };
  const M = game.mats;
  const pay = (k, n) => { if (n) M[k] = (M[k] || 0) - n; };
  let msg = '';
  if (gi.step === 'lb') {
    game.shop.spend(gi.need.coins);
    if (t.kind === 'gear') game.gear.splice(game.gear.indexOf(gi.fodder), 1);
    else pay('soul', gi.need.soul);
    growSet(game, t, 'lb', gi.lb + 1);
    msg = `한계돌파! 이제 +${capOf({ lb: gi.lb + 1 })}까지 강화할 수 있어요`;
  } else if (gi.step === 'star') {
    pay('soul', gi.need.soul); pay('dust', gi.need.dust);
    growSet(game, t, 'star', gi.star + 1);
    msg = `초월 ★${gi.star + 1}! 능력치 +${(gi.star + 1) * 10}%`;
  } else {
    pay('soul', gi.need.soul); pay('bless', gi.need.bless);
    growSet(game, t, 'awk', 1);
    if (t.kind === 'gear') {
      const g = game.gearByUid(t.uid);
      if (!g.perk) { g.perk = LEGEND_PERKS[Math.floor(Math.random() * LEGEND_PERKS.length)]; g.awkPerk = 1; }
    }
    msg = '각성! 숨은 힘이 깨어났어요';
  }
  game.stats.grow = (game.stats.grow || 0) + 1;
  return { ok: true, msg, step: gi.step };
}

// 이름 뒤 표시 (HTML): ◆각성 ★3
export const growTag = (s) => (s?.awk || s?.star ? `<span class="gr-tag">${s.awk ? ' ◆<i>각성</i>' : ''}${s.star ? ` ★${s.star}` : ''}</span>` : '');
