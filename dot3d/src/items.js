// 장비 아이템: 무기(직업 전용)와 옷(모든 직업 공용). 착용하면 캐릭터 모습이 바뀜
export const RARITY = [
  { name: '일반', color: '#d8d0c0' },
  { name: '고급', color: '#6ad06a' },
  { name: '희귀', color: '#5ab0ff' },
  { name: '영웅', color: '#c87aff' },
  { name: '전설', color: '#ffc040' },
  { name: '보스', color: '#ff5a4a' },
];

// 보스 전용 장비: 그 보스를 쓰러뜨려야만 나옴. 무기·옷마다 고유 효과(perk)가 있고,
// 옷은 머리나 몸에 보스를 닮은 장식(acc)이 붙음
export const BOSS_SETS = {
  boss: { boss: '두억시니', set: '두억시니' },
  gumiho: { boss: '천년 구미호', set: '구미호' },
  reaper: { boss: '저승사자', set: '저승' },
};
export const PERKS = {
  quake: '도깨비 벼락: 맞힐 때 20% 확률로 주변에 벼락 충격파',
  drain: '여우구슬: 준 피해의 6%만큼 체력 회복',
  execute: '저승 심판: 체력 35% 아래인 적에게 피해 +60%',
  rage: '도깨비 뚝심: 체력이 40% 아래면 공격력 +35%',
  swift: '여우 걸음: 이동 속도 +15%, 이동기 대기시간 -30%',
  soul: '혼 거두기: 적을 쓰러뜨릴 때마다 최대 체력의 4% 회복',
};

// 무기 모양/색 (style)은 character.js의 buildWeapon이 읽음
export const WEAPONS = {
  sword: [
    { id: 'sw0', name: '수련용 환도', tier: 0, atk: 0, style: {} },
    { id: 'sw1', name: '강철 환도', tier: 1, atk: 0.15, style: { blade: '#aeb8c4', guard: '#2a2830', wrap: '#3a2a20' } },
    { id: 'sw2', name: '청강 월광검', tier: 2, atk: 0.32, style: { blade: '#bfe4ff', edge: '#ffffff', guard: '#c8d4e0', wrap: '#2a3a6a', glow: '#3a9aff' } },
    { id: 'sw3', name: '자운 비도', tier: 3, atk: 0.5, style: { blade: '#d8c8ff', edge: '#ffffff', guard: '#8a5ad8', wrap: '#3a1a5a', glow: '#9a5aff', long: 1.12 } },
    { id: 'sw4', name: '흑룡도', tier: 4, atk: 0.75, style: { blade: '#2a2830', edge: '#ff6a3a', guard: '#e0b040', wrap: '#8a1a1a', glow: '#ff3010', long: 1.2 } },
    { id: 'swB1', name: '두억시니 참마도', tier: 5, atk: 0.85, from: 'boss', perk: 'quake', style: { blade: '#3a4a8a', edge: '#9ad8ff', guard: '#ffd040', wrap: '#c8302c', glow: '#3ac8ff', long: 1.28 } },
    { id: 'swB2', name: '구미호 여우검', tier: 5, atk: 0.9, from: 'gumiho', perk: 'drain', style: { blade: '#fff4ec', edge: '#ffb070', guard: '#ff6a2a', wrap: '#f0f0f0', glow: '#ff7a2a', long: 1.22 } },
    { id: 'swB3', name: '저승 명부검', tier: 5, atk: 1.0, from: 'reaper', perk: 'execute', style: { blade: '#14101c', edge: '#c890ff', guard: '#5a3a8a', wrap: '#1a1420', glow: '#9a4aff', long: 1.32 } },
  ],
  mage: [
    { id: 'mg0', name: '복숭아나무 지팡이', tier: 0, atk: 0, style: {} },
    { id: 'mg1', name: '청동 지팡이', tier: 1, atk: 0.15, style: { wood: '#3a2a1a', moon: '#b07a3a', orb: '#8affc8', orbGlow: '#2aff9a' } },
    { id: 'mg2', name: '월장석 지팡이', tier: 2, atk: 0.32, style: { wood: '#e0e0f0', moon: '#c8d4e0', orb: '#bfe8ff', orbGlow: '#4ab0ff' } },
    { id: 'mg3', name: '뇌전 지팡이', tier: 3, atk: 0.5, style: { wood: '#2a2a40', moon: '#ffe060', orb: '#fff6a0', orbGlow: '#ffd020', big: 1.3 } },
    { id: 'mg4', name: '화룡 지팡이', tier: 4, atk: 0.75, style: { wood: '#2a1414', moon: '#e0b040', orb: '#ff8a4a', orbGlow: '#ff3a00', big: 1.5 } },
    { id: 'mgB1', name: '두억시니 금방망이', tier: 5, atk: 0.85, from: 'boss', perk: 'quake', style: { wood: '#c8302c', moon: '#ffd040', orb: '#9ad8ff', orbGlow: '#3ac8ff', big: 1.6 } },
    { id: 'mgB2', name: '여우구슬 지팡이', tier: 5, atk: 0.9, from: 'gumiho', perk: 'drain', style: { wood: '#f4ece4', moon: '#ff8a3a', orb: '#ffe6c8', orbGlow: '#ff7a2a', big: 1.55 } },
    { id: 'mgB3', name: '명부 지팡이', tier: 5, atk: 1.0, from: 'reaper', perk: 'execute', style: { wood: '#14101c', moon: '#8a5ad8', orb: '#e0c8ff', orbGlow: '#9a4aff', big: 1.7 } },
  ],
  elf: [
    { id: 'bw0', name: '버들 활', tier: 0, atk: 0, style: {} },
    { id: 'bw1', name: '물소뿔 각궁', tier: 1, atk: 0.15, style: { wood: '#3a2a2a', grip: '#c8302c', tips: '#f0ead8' } },
    { id: 'bw2', name: '바람결 활', tier: 2, atk: 0.32, style: { wood: '#5ac85a', grip: '#e8f0a0', tips: '#ffffff', glow: '#3aff6a' } },
    { id: 'bw3', name: '서리 활', tier: 3, atk: 0.5, style: { wood: '#bfe8ff', grip: '#3a6aaa', tips: '#ffffff', glow: '#4ab0ff', big: 1.15 } },
    { id: 'bw4', name: '월궁', tier: 4, atk: 0.75, style: { wood: '#f0e8ff', grip: '#e0b040', tips: '#ffe080', glow: '#ffd040', big: 1.25 } },
    { id: 'bwB1', name: '두억시니 뿔활', tier: 5, atk: 0.85, from: 'boss', perk: 'quake', style: { wood: '#c8302c', grip: '#ffd040', tips: '#f0ead8', glow: '#3ac8ff', big: 1.3 } },
    { id: 'bwB2', name: '구미 꼬리활', tier: 5, atk: 0.9, from: 'gumiho', perk: 'drain', style: { wood: '#fff4ec', grip: '#ff6a2a', tips: '#ffb070', glow: '#ff7a2a', big: 1.3 } },
    { id: 'bwB3', name: '망령 활', tier: 5, atk: 1.0, from: 'reaper', perk: 'execute', style: { wood: '#1a1420', grip: '#8a5ad8', tips: '#e0c8ff', glow: '#9a4aff', big: 1.38 } },
  ],
};

// 옷: 색 팔레트(main 몸통, accent 띠·깃, trim 장식, dark 바지) + 갑옷 장식
export const OUTFITS = [
  { id: 'ot0', name: '평상복', tier: 0, hp: 0, def: 0, pal: null },
  { id: 'ot1', name: '청룡 무관복', tier: 1, hp: 20, def: 0.05, pal: { main: '#2b4374', accent: '#c8302c', trim: '#e0b040', dark: '#1f2438' } },
  { id: 'ot2', name: '자운 비단옷', tier: 2, hp: 35, def: 0.08, pal: { main: '#6a3a8a', accent: '#e0b040', trim: '#f0e0a0', dark: '#2a1a3a' } },
  { id: 'ot3', name: '백호 전포', tier: 3, hp: 55, def: 0.12, pal: { main: '#eeeae2', accent: '#e08a2a', trim: '#2a2a2a', dark: '#4a4a52' }, armor: 'light' },
  { id: 'ot4', name: '흑월 갑주', tier: 4, hp: 80, def: 0.18, pal: { main: '#2a2a34', accent: '#b02a2a', trim: '#d9a83a', dark: '#18181e' }, armor: 'heavy' },
  { id: 'otB1', name: '두억시니 뿔갑주', tier: 5, hp: 110, def: 0.2, from: 'boss', perk: 'rage', acc: 'horns', pal: { main: '#8a2a24', accent: '#2a3a7a', trim: '#ffd040', dark: '#2a1a18' }, armor: 'heavy' },
  { id: 'otB2', name: '구미호 털옷', tier: 5, hp: 95, def: 0.16, from: 'gumiho', perk: 'swift', acc: 'fox', pal: { main: '#f4ece4', accent: '#ff7a2a', trim: '#ffb070', dark: '#c8a890' }, armor: 'light' },
  { id: 'otB3', name: '저승사자 도포', tier: 5, hp: 120, def: 0.22, from: 'reaper', perk: 'soul', acc: 'gat', pal: { main: '#18141e', accent: '#5a3a8a', trim: '#c8b0ff', dark: '#0c0a10' } },
];

const ALL = new Map();
for (const cls of Object.keys(WEAPONS)) for (const w of WEAPONS[cls]) ALL.set(w.id, { ...w, kind: 'weapon', cls });
for (const o of OUTFITS) ALL.set(o.id, { ...o, kind: 'outfit' });

export function item(id) { return ALL.get(id); }

export function itemDesc(it, owned = true) {
  if (!it) return '';
  const base = it.kind === 'weapon' ? `공격력 +${Math.round(it.atk * 100)}%` : `체력 +${it.hp} · 받는 피해 -${Math.round(it.def * 100)}%`;
  if (!it.perk) return base;
  if (!owned) return `${BOSS_SETS[it.from].boss} 처치 시 획득`;
  return `${base}<br><em>${PERKS[it.perk]}</em>`;
}

// 장착한 무기·옷의 고유 효과 목록
export function perksOf(...ids) {
  const out = new Set();
  for (const id of ids) { const it = ALL.get(id); if (it && it.perk) out.add(it.perk); }
  return out;
}

// 보스 처치 보상: 그 보스 전용 장비 중 아직 없는 것 (내 직업 무기 → 옷 → 다른 직업 무기 순)
export function bossDrop(type, cls, inv) {
  if (!BOSS_SETS[type]) return null;
  const set = [...ALL.values()].filter((it) => it.from === type);
  const order = [
    ...set.filter((it) => it.kind === 'weapon' && it.cls === cls),
    ...set.filter((it) => it.kind === 'outfit'),
    ...set.filter((it) => it.kind === 'weapon' && it.cls !== cls),
  ];
  const fresh = order.find((it) => !inv.has(it.id));
  return (fresh || order[Math.floor(Math.random() * 2)]).id;
}

// 처치 보상: 적 종류·회차에 따라 등급이 오름. 무기는 지금 직업용 위주
export function rollDrop(enemyType, round, cls) {
  const chance = { blue: 0.07, red: 0.12, wisp: 0.1, fox: 0.09, foxfire: 0.1, jiangshi: 0.11, ghost: 0.11, boss: 1, gumiho: 1, reaper: 1 }[enemyType] ?? 0;
  if (Math.random() > chance) return null;
  let tier = 1;
  const strong = { boss: 0.55, gumiho: 0.6, reaper: 0.7, red: 0.1, jiangshi: 0.15, ghost: 0.15, fox: 0.08, foxfire: 0.08 }[enemyType] || 0;
  const r = Math.random() + round * 0.12 + strong;
  if (r > 1.35) tier = 4; else if (r > 1.05) tier = 3; else if (r > 0.7) tier = 2;
  if (Math.random() < 0.55) {
    const pool = Math.random() < 0.8 ? cls : ['sword', 'mage', 'elf'][Math.floor(Math.random() * 3)];
    return WEAPONS[pool][tier].id;
  }
  return OUTFITS[tier].id;
}

// 작은 도트 아이콘 (16x16)
export function drawItemIcon(cv, id) {
  const it = item(id);
  const g = cv.getContext('2d');
  g.clearRect(0, 0, 16, 16);
  if (!it) return;
  const rc = RARITY[it.tier].color;
  g.fillStyle = '#14101c';
  g.fillRect(0, 0, 16, 16);
  g.fillStyle = rc;
  g.globalAlpha = 0.25;
  g.fillRect(0, 0, 16, 16);
  g.globalAlpha = 1;
  const px = (x, y, c) => { g.fillStyle = c; g.fillRect(x, y, 1, 1); };
  const s = it.style || {};
  if (it.kind === 'weapon' && it.cls === 'sword') {
    const blade = s.blade || '#c9d4e0';
    for (let i = 0; i < 9; i++) { px(4 + i, 11 - i, blade); px(5 + i, 11 - i, s.edge || '#ffffff'); }
    px(3, 12, s.guard || '#d9a83a'); px(4, 13, s.guard || '#d9a83a'); px(2, 11, s.guard || '#d9a83a'); px(5, 12, s.guard || '#d9a83a');
    px(2, 13, s.wrap || '#1c1824'); px(1, 14, s.wrap || '#1c1824');
  } else if (it.kind === 'weapon' && it.cls === 'mage') {
    for (let i = 0; i < 11; i++) px(3 + i * 0.8, 14 - i, s.wood || '#5a3e2a');
    g.fillStyle = s.moon || '#e0b040'; g.fillRect(10, 2, 4, 1); g.fillRect(13, 3, 1, 2);
    g.fillStyle = s.orb || '#b8a8ff'; g.fillRect(11, 3, 2, 2);
  } else if (it.kind === 'weapon') {
    const w = s.wood || '#8a5a32';
    for (let i = 0; i < 12; i++) { const x = 9 - Math.round(Math.sin((i / 11) * Math.PI) * 5); px(x, 2 + i, w); }
    for (let i = 0; i < 12; i++) px(10, 2 + i, '#f0ece0');
    px(4, 7, s.grip || '#3a7a3a'); px(4, 8, s.grip || '#3a7a3a');
  } else {
    const p = it.pal || { main: '#eeeae0', accent: '#2e4f8f', trim: '#2e4f8f', dark: '#3a3f5a' };
    g.fillStyle = p.main; g.fillRect(4, 3, 8, 10); g.fillRect(2, 4, 2, 6); g.fillRect(12, 4, 2, 6);
    g.fillStyle = p.accent; g.fillRect(4, 8, 8, 1); g.fillRect(7, 3, 2, 5);
    g.fillStyle = p.trim; g.fillRect(2, 9, 2, 1); g.fillRect(12, 9, 2, 1);
    if (it.armor) { g.fillStyle = p.trim; g.fillRect(3, 3, 3, 2); g.fillRect(10, 3, 3, 2); }
    if (it.acc === 'horns') { g.fillStyle = '#ffd040'; g.fillRect(5, 0, 1, 3); g.fillRect(10, 0, 1, 3); }
    if (it.acc === 'fox') { g.fillStyle = '#ff7a2a'; g.fillRect(12, 11, 3, 2); g.fillRect(14, 9, 1, 2); g.fillStyle = '#f4ece4'; g.fillRect(5, 1, 2, 2); g.fillRect(9, 1, 2, 2); }
    if (it.acc === 'gat') { g.fillStyle = '#0c0a10'; g.fillRect(3, 2, 10, 1); g.fillRect(6, 0, 4, 2); g.fillStyle = '#c8b0ff'; g.fillRect(4, 3, 1, 3); g.fillRect(11, 3, 1, 3); }
  }
  if (it.perk) { px(1, 1, '#ffffff'); px(2, 1, rc); px(1, 2, rc); px(14, 14, '#ffffff'); }
  g.strokeStyle = rc;
  g.strokeRect(0.5, 0.5, 15, 15);
}
