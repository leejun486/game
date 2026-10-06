// 난이도: 몬스터 체력·받는 피해·경험치·장비 드롭 배율
// 저장 파일마다 따로 가지고, 일시정지 메뉴에서 언제든 바꿀 수 있음
export const DIFFS = {
  easy: { name: '쉬움', hp: 0.75, dmg: 0.55, exp: 1, gear: 1 },
  normal: { name: '보통', hp: 1, dmg: 1, exp: 1, gear: 1 },
  hard: { name: '어려움', hp: 1.35, dmg: 1.45, exp: 1.25, gear: 1.4 },
};
export const DIFF_ORDER = ['easy', 'normal', 'hard'];
export const diffOf = (g) => DIFFS[g?.difficulty] || DIFFS.normal;
