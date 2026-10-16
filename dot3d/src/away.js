// 자리 비운 동안 수련 (방치 보상)
//  게임을 끄거나 앱을 내려 둔 사이에도 캐릭터가 지금 지역에서 수련한 것으로 치고, 돌아오면 한 번에 받음
//  - 10분 넘게 비웠을 때만, 최대 8시간까지 쌓임 (그 뒤로는 더 늘지 않음 → 하루 두세 번 들르면 충분)
//  - 직접 하는 것보다 훨씬 적게: 8시간이 지금 레벨 경험치의 약 3배, 엽전·주문서·장비 조금
//    (방치가 직접 하는 것보다 나으면 게임을 안 하게 되고, 너무 적으면 돌아올 이유가 안 됨)
//  - 돈으로 늘리는 방법은 없음
import { expNeed } from './entities.js';
import { makeGear, rollGearTier } from './gear.js';

export const AWAY_MIN = 10 * 60 * 1000;
export const AWAY_CAP = 8 * 60 * 60 * 1000;

// ms 동안 비웠을 때의 보상 (아직 주지 않음)
export function awayReward(g, ms) {
  if (!(ms >= AWAY_MIN)) return null;
  const t = Math.min(ms, AWAY_CAP), h = t / 3600000;
  const p = g.player, lv = p.level;
  const elv = 1 + (g.round || 0) + (g.map?.lvl || 0) + Math.floor((lv - 1) / 3); // 그 지역 몬스터 레벨 (spawnEnemy와 같은 식)
  return {
    ms: t, capped: ms > AWAY_CAP,
    exp: Math.round(expNeed(lv) * 0.4 * h),
    coins: Math.round((2 + elv * 0.6) * 40 * h),
    scrolls: Math.floor(h * 1.25),
    gear: Math.floor(h / 2.5),
    elv,
  };
}

// 보상 주기: 주문서는 세 종류 중 무작위, 장비는 그 지역 몬스터가 떨어뜨리는 것과 같은 등급 굴림
export function grantAway(g, r) {
  const p = g.player, lv0 = p.level;
  const mats = {};
  for (let i = 0; i < r.scrolls; i++) { const k = ['scrollW', 'scrollA', 'scrollG'][Math.floor(Math.random() * 3)]; mats[k] = (mats[k] || 0) + 1; }
  for (const [k, n] of Object.entries(mats)) g.mats[k] = (g.mats[k] || 0) + n;
  g.shop.gain(r.coins);
  for (let i = 0; i < r.gear; i++) g.pickupGear(makeGear(r.elv, rollGearTier(0.1, g.round || 0)));
  p.addExp(r.exp);
  g.stats.away = (g.stats.away || 0) + 1;
  if (!g.ui.bagOpen) g.ui.refreshBag?.(); // 가방이 열려 있으면 다시 그리지 않음 (창의 안내 문구가 지워짐)
  return { ...r, mats, lv0, lv1: p.level };
}
