// 시련탑 특수 규칙 층: 6층부터 보스가 없는 층에 층마다 정해진 규칙이 붙음
//  규칙 층은 보상이 더 좋음 (장비 하나 더, 경험치 1.5배)
export const RULES = {
  swift: { name: '질풍의 층', desc: '적이 훨씬 빠르다' },
  elite: { name: '정예의 층', desc: '적은 적지만 모두 정예' },
  dark: { name: '어둠의 층', desc: '내 주변만 보인다' },
  fire: { name: '불바다', desc: '발밑에 불기둥이 솟는다' },
  swarm: { name: '떼의 층', desc: '약한 적이 두 배로 몰려온다' },
  glass: { name: '유리 몸', desc: '주고받는 피해가 모두 1.6배' },
};
const ORDER = ['swift', 'elite', 'dark', 'fire', 'swarm', 'glass'];

// 층에 붙는 규칙 (같은 층은 늘 같은 규칙)
export function ruleFor(n) {
  if (n < 6 || n % 5 === 0) return null;
  // 3의 배수 층은 쉬어 가는 층, 나머지는 규칙이 차례로 돌아감
  const has = (m) => m >= 6 && m % 5 !== 0 && m % 3 !== 0;
  if (!has(n)) return null;
  let idx = 0;
  for (let m = 6; m < n; m++) if (has(m)) idx++;
  const k = ORDER[idx % ORDER.length];
  return { key: k, ...RULES[k] };
}

// 각성 보스: 탑 20층 이상 보스 층, 또는 2회차 이상 지역 보스
export function awaken(e) {
  e.awakened = true;
  e.maxHp = e.hp = Math.round(e.maxHp * 1.6);
  e.dmg = Math.round(e.dmg * 1.25);
  e.T = { ...e.T, speed: e.T.speed * 1.15, windup: e.T.windup * 0.85, recover: e.T.recover * 0.75 };
  e.sizeMul *= 1.1;
}
