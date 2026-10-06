// 난이도: 몬스터 체력·받는 피해·경험치·장비 드롭 배율
// 저장 파일마다 따로 가지고, 일시정지 메뉴에서 언제든 바꿀 수 있음
//  dmg·bossHp·bossDmg는 [첫 지역, 마지막 지역] — 남쪽 지역으로 갈수록 세짐 (시련탑은 마지막 지역 값)
//  처음 값으로 다 같이 세게 하면 첫 지역에서만 많이 쓰러지고 뒤는 여전히 쉬웠음 (자동 완주 봇으로 맞춤 — tools/playthrough.cjs)
export const DIFFS = {
  easy: { name: '쉬움', hp: 0.75, dmg: [0.55, 0.7], bossHp: [1, 1.6], bossDmg: [1, 1.2], exp: 1, gear: 1 },
  normal: { name: '보통', hp: 1, dmg: [1, 1.9], bossHp: [1.3, 3.4], bossDmg: [1, 2.3], exp: 1, gear: 1 },
  hard: { name: '어려움', hp: 1.35, dmg: [1.45, 2.6], bossHp: [1.7, 4.2], bossDmg: [1.3, 2.8], exp: 1.25, gear: 1.4 },
};
export const DIFF_ORDER = ['easy', 'normal', 'hard'];
const raw = (g) => DIFFS[g?.difficulty] || DIFFS.normal;
// 지금 지역의 진행도 0(월하궁) ~ 1(백설 고원·시련탑). 제곱근: 가운데 지역에서 빨리 오름 (플레이어가 중반에 가장 빨리 강해짐)
const depth = (g) => (g?.tower?.active ? 1 : Math.sqrt(Math.min(1, Math.max(0, (g?.map?.lvl || 0) / 16))));
const at = (v, k) => (Array.isArray(v) ? v[0] + (v[1] - v[0]) * k : v);
export const diffOf = (g) => {
  const D = raw(g), k = depth(g);
  return { ...D, dmg: at(D.dmg, k), bossHp: at(D.bossHp, k), bossDmg: at(D.bossDmg, k) };
};
