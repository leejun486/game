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
  imugi: { boss: '천년 이무기', set: '이무기' },
  bulgasari: { boss: '쇠먹는 불가사리', set: '불가사리' },
  baekho: { boss: '산군 백호', set: '백호' },
  dragon: { boss: '동해 용왕', set: '용왕' },
  yeomra: { boss: '염라대왕 (시련탑 10층마다)', set: '염라' },
};
export const PERKS = {
  quake: '도깨비 벼락: 맞힐 때 20% 확률로 주변에 벼락 충격파',
  drain: '여우구슬: 준 피해의 6%만큼 체력 회복',
  execute: '저승 심판: 체력 35% 아래인 적에게 피해 +60%',
  rage: '도깨비 뚝심: 체력이 40% 아래면 공격력 +35%',
  swift: '여우 걸음: 이동 속도 +15%, 이동기 대기시간 -30%',
  soul: '혼 거두기: 적을 쓰러뜨릴 때마다 최대 체력의 4% 회복',
  chill: '찬물결: 맞힐 때 15% 확률로 적을 1초 얼림',
  scales: '용비늘: 10초마다 한 번, 받는 공격을 비늘이 막아냄',
  molten: '쇳물: 맞힐 때 22% 확률로 적에 불을 붙임 (3초)',
  verdict: '판관: 보스·정예에게 주는 피해 +30%',
  rebirth: '환생: 쓰러지면 한 번 체력 40%로 되살아남 (3분마다)',
  ironhide: '쇠가죽: 받는 피해 -12%, 밀려나지 않고 불에 덜 탐',
  hunter: '산군의 위엄: 일반 몬스터에게 주는 피해 +25%',
  tigerhide: '백호 가죽: 받는 피해 -8%, 이동 속도 +10%',
  storm: '용왕 비늘: 맞힐 때 15% 확률로 가까운 적 셋에게 번개가 튐',
  pearl: '여의주: 3초마다 최대 체력의 2% 회복',
};

// 보스 무기 고유 기술 (U 키). 보스 무기에만 붙음
export const ULTS = {
  thunder: { name: '도깨비 천둥', short: '천둥', cd: 24, desc: '방망이로 땅을 세 번 내려쳐 점점 넓어지는 벼락 충격파. 맞은 적은 기절' },
  foxtail: { name: '아홉 꼬리 여우불', short: '여우불', cd: 24, desc: '여우불 아홉 개가 차례로 가까운 적을 꿰뚫음. 준 피해의 25%만큼 체력 회복' },
  hellfire: { name: '지옥불', short: '지옥불', cd: 28, desc: '몸 주위로 붉은 불꽃 고리가 세 겹 퍼져 나가며 닿은 적을 모두 태움. 보스에게도 큰 피해' },
  meltdown: { name: '쇳물 비', short: '쇳물비', cd: 24, desc: '앞쪽 넓은 곳에 녹은 쇳덩이 열두 개가 쏟아지고 맞은 적은 불붙음' },
  tidal: { name: '물기둥', short: '물기둥', cd: 22, desc: '가까운 적 다섯의 발밑에서 차례로 물기둥이 솟아 띄워 올림. 일반 몬스터는 잠시 얼어붙음' },
  tigerclaw: { name: '백호 발톱', short: '발톱', cd: 20, desc: '앞으로 나아가며 세 번 크게 할퀴어 맞은 적을 기절시킴' },
  dragonstorm: { name: '용왕의 폭풍', short: '폭풍', cd: 26, desc: '주위 적 여덟에게 차례로 벼락을 내리고, 마지막에 둥근 해일로 밀쳐냄' },
  judgment: { name: '명부 집행', short: '명부', cd: 26, desc: '주변 적 여섯에게 명부의 낙인. 잠시 뒤 큰 피해, 체력이 35% 아래로 떨어진 일반 몬스터는 즉사' },
};
// 보스 처치 시 전용 장비가 나올 확률 (회차마다 조금씩 오름)
export const BOSS_WEAPON_CHANCE = 0.12;
export const BOSS_OUTFIT_CHANCE = 0.22;

// 무기 모양/색 (style)은 character.js의 buildWeapon이 읽음
export const WEAPONS = {
  sword: [
    { id: 'sw0', name: '수련용 환도', tier: 0, atk: 0, style: {} },
    { id: 'sw1', name: '강철 환도', tier: 1, atk: 0.15, style: { blade: '#aeb8c4', guard: '#2a2830', wrap: '#3a2a20' } },
    { id: 'sw2', name: '청강 월광검', tier: 2, atk: 0.32, style: { blade: '#bfe4ff', edge: '#ffffff', guard: '#c8d4e0', wrap: '#2a3a6a', glow: '#3a9aff' } },
    { id: 'sw3', name: '자운 비도', tier: 3, atk: 0.5, style: { blade: '#d8c8ff', edge: '#ffffff', guard: '#8a5ad8', wrap: '#3a1a5a', glow: '#9a5aff', long: 1.12 } },
    { id: 'sw4', name: '흑룡도', tier: 4, atk: 0.75, style: { blade: '#2a2830', edge: '#ff6a3a', guard: '#e0b040', wrap: '#8a1a1a', glow: '#ff3010', long: 1.2 } },
    { id: 'swB1', name: '두억시니 참마도', tier: 5, atk: 0.85, from: 'boss', perk: 'quake', ult: 'thunder', style: { blade: '#3a4a8a', edge: '#9ad8ff', guard: '#ffd040', wrap: '#c8302c', glow: '#3ac8ff', long: 1.28 } },
    { id: 'swB2', name: '구미호 여우검', tier: 5, atk: 0.9, from: 'gumiho', perk: 'drain', ult: 'foxtail', style: { blade: '#fff4ec', edge: '#ffb070', guard: '#ff6a2a', wrap: '#f0f0f0', glow: '#ff7a2a', long: 1.22 } },
    { id: 'swB3', name: '저승 명부검', tier: 5, atk: 1.0, from: 'reaper', perk: 'execute', ult: 'judgment', style: { blade: '#14101c', edge: '#c890ff', guard: '#5a3a8a', wrap: '#1a1420', glow: '#9a4aff', long: 1.32 } },
    { id: 'swB4', name: '이무기 비늘검', tier: 5, atk: 1.12, from: 'imugi', perk: 'chill', ult: 'tidal', style: { blade: '#bfeee0', edge: '#ffffff', guard: '#2a6a6a', wrap: '#1a3a3a', glow: '#2affd0', long: 1.26 } },
    { id: 'swB5', name: '불가사리 쇠뼈검', tier: 5, atk: 1.25, from: 'bulgasari', perk: 'molten', ult: 'meltdown', style: { blade: '#3a3a40', edge: '#ffb060', guard: '#8a4a2a', wrap: '#2a1a14', glow: '#ff5a10', long: 1.34 } },
    { id: 'swB7', name: '백호 발톱검', tier: 5, atk: 1.32, from: 'baekho', perk: 'hunter', ult: 'tigerclaw', style: { blade: '#f4f4ee', edge: '#ffb060', guard: '#1a1a22', wrap: '#e08a2a', glow: '#ffb060', long: 1.3 } },
    { id: 'swB8', name: '용왕 청룡검', tier: 5, atk: 1.38, from: 'dragon', perk: 'storm', ult: 'dragonstorm', style: { blade: '#9ad8ff', edge: '#ffffff', guard: '#f0c040', wrap: '#1e4a9a', glow: '#3a9aff', long: 1.32 } },
    { id: 'swB6', name: '염라 판관검', tier: 5, atk: 1.45, from: 'yeomra', perk: 'verdict', ult: 'hellfire', style: { blade: '#2a0a10', edge: '#ff4a5a', guard: '#ffd040', wrap: '#7a0a14', glow: '#ff2030', long: 1.38 } },
  ],
  mage: [
    { id: 'mg0', name: '복숭아나무 지팡이', tier: 0, atk: 0, style: {} },
    { id: 'mg1', name: '청동 지팡이', tier: 1, atk: 0.15, style: { wood: '#3a2a1a', moon: '#b07a3a', orb: '#8affc8', orbGlow: '#2aff9a' } },
    { id: 'mg2', name: '월장석 지팡이', tier: 2, atk: 0.32, style: { wood: '#e0e0f0', moon: '#c8d4e0', orb: '#bfe8ff', orbGlow: '#4ab0ff' } },
    { id: 'mg3', name: '뇌전 지팡이', tier: 3, atk: 0.5, style: { wood: '#2a2a40', moon: '#ffe060', orb: '#fff6a0', orbGlow: '#ffd020', big: 1.3 } },
    { id: 'mg4', name: '화룡 지팡이', tier: 4, atk: 0.75, style: { wood: '#2a1414', moon: '#e0b040', orb: '#ff8a4a', orbGlow: '#ff3a00', big: 1.5 } },
    { id: 'mgB1', name: '두억시니 금방망이', tier: 5, atk: 0.85, from: 'boss', perk: 'quake', ult: 'thunder', style: { wood: '#c8302c', moon: '#ffd040', orb: '#9ad8ff', orbGlow: '#3ac8ff', big: 1.6 } },
    { id: 'mgB2', name: '여우구슬 지팡이', tier: 5, atk: 0.9, from: 'gumiho', perk: 'drain', ult: 'foxtail', style: { wood: '#f4ece4', moon: '#ff8a3a', orb: '#ffe6c8', orbGlow: '#ff7a2a', big: 1.55 } },
    { id: 'mgB3', name: '명부 지팡이', tier: 5, atk: 1.0, from: 'reaper', perk: 'execute', ult: 'judgment', style: { wood: '#14101c', moon: '#8a5ad8', orb: '#e0c8ff', orbGlow: '#9a4aff', big: 1.7 } },
    { id: 'mgB4', name: '여의주 지팡이', tier: 5, atk: 1.12, from: 'imugi', perk: 'chill', ult: 'tidal', style: { wood: '#2a4a4a', moon: '#c8e8e0', orb: '#e8fff8', orbGlow: '#2affd0', big: 1.65 } },
    { id: 'mgB5', name: '용광로 지팡이', tier: 5, atk: 1.25, from: 'bulgasari', perk: 'molten', ult: 'meltdown', style: { wood: '#3a3a40', moon: '#ff8a3a', orb: '#ffd080', orbGlow: '#ff4a00', big: 1.75 } },
    { id: 'mgB7', name: '백호 송곳니 지팡이', tier: 5, atk: 1.32, from: 'baekho', perk: 'hunter', ult: 'tigerclaw', style: { wood: '#eeeee6', moon: '#1a1a22', orb: '#ffd0a0', orbGlow: '#ff8a2a', big: 1.7 } },
    { id: 'mgB8', name: '용왕 여의봉', tier: 5, atk: 1.38, from: 'dragon', perk: 'storm', ult: 'dragonstorm', style: { wood: '#1e4a9a', moon: '#f0c040', orb: '#e8f8ff', orbGlow: '#3a9aff', big: 1.8 } },
    { id: 'mgB6', name: '명부 판관필', tier: 5, atk: 1.45, from: 'yeomra', perk: 'verdict', ult: 'hellfire', style: { wood: '#1a0a0e', moon: '#ffd040', orb: '#ff8a9a', orbGlow: '#ff2030', big: 1.8 } },
  ],
  elf: [
    { id: 'bw0', name: '버들 활', tier: 0, atk: 0, style: {} },
    { id: 'bw1', name: '물소뿔 각궁', tier: 1, atk: 0.15, style: { wood: '#3a2a2a', grip: '#c8302c', tips: '#f0ead8' } },
    { id: 'bw2', name: '바람결 활', tier: 2, atk: 0.32, style: { wood: '#5ac85a', grip: '#e8f0a0', tips: '#ffffff', glow: '#3aff6a' } },
    { id: 'bw3', name: '서리 활', tier: 3, atk: 0.5, style: { wood: '#bfe8ff', grip: '#3a6aaa', tips: '#ffffff', glow: '#4ab0ff', big: 1.15 } },
    { id: 'bw4', name: '월궁', tier: 4, atk: 0.75, style: { wood: '#f0e8ff', grip: '#e0b040', tips: '#ffe080', glow: '#ffd040', big: 1.25 } },
    { id: 'bwB1', name: '두억시니 뿔활', tier: 5, atk: 0.85, from: 'boss', perk: 'quake', ult: 'thunder', style: { wood: '#c8302c', grip: '#ffd040', tips: '#f0ead8', glow: '#3ac8ff', big: 1.3 } },
    { id: 'bwB2', name: '구미 꼬리활', tier: 5, atk: 0.9, from: 'gumiho', perk: 'drain', ult: 'foxtail', style: { wood: '#fff4ec', grip: '#ff6a2a', tips: '#ffb070', glow: '#ff7a2a', big: 1.3 } },
    { id: 'bwB3', name: '망령 활', tier: 5, atk: 1.0, from: 'reaper', perk: 'execute', ult: 'judgment', style: { wood: '#1a1420', grip: '#8a5ad8', tips: '#e0c8ff', glow: '#9a4aff', big: 1.38 } },
    { id: 'bwB4', name: '용수염 활', tier: 5, atk: 1.12, from: 'imugi', perk: 'chill', ult: 'tidal', style: { wood: '#3a6a6a', grip: '#c8c09a', tips: '#e8fff8', glow: '#2affd0', big: 1.34 } },
    { id: 'bwB5', name: '쇠심줄 활', tier: 5, atk: 1.25, from: 'bulgasari', perk: 'molten', ult: 'meltdown', style: { wood: '#3a3a40', grip: '#8a4a2a', tips: '#ffb060', glow: '#ff5a10', big: 1.4 } },
    { id: 'bwB7', name: '백호 힘줄 활', tier: 5, atk: 1.32, from: 'baekho', perk: 'hunter', ult: 'tigerclaw', style: { wood: '#eeeee6', grip: '#1a1a22', tips: '#ffb060', glow: '#ffb060', big: 1.42 } },
    { id: 'bwB8', name: '용수 청룡궁', tier: 5, atk: 1.38, from: 'dragon', perk: 'storm', ult: 'dragonstorm', style: { wood: '#1e4a9a', grip: '#f0c040', tips: '#e8f8ff', glow: '#3a9aff', big: 1.45 } },
    { id: 'bwB6', name: '업경 활', tier: 5, atk: 1.45, from: 'yeomra', perk: 'verdict', ult: 'hellfire', style: { wood: '#2a0a10', grip: '#ffd040', tips: '#ff8a9a', glow: '#ff2030', big: 1.45 } },
  ],
  lancer: [
    { id: 'sp0', name: '수련용 장창', tier: 0, atk: 0, style: {} },
    { id: 'sp1', name: '강철 장창', tier: 1, atk: 0.15, style: { head: '#b8c2ce', shaft: '#3a2a20', tassel: '#2a4a8a' } },
    { id: 'sp2', name: '청룡 언월창', tier: 2, atk: 0.32, style: { head: '#c8ecff', shaft: '#1e3a4a', tassel: '#3a9aff', ring: '#c8d4e0', glow: '#3a9aff', wings: true } },
    { id: 'sp3', name: '자운 낭아창', tier: 3, atk: 0.5, style: { head: '#e0d0ff', shaft: '#2a1a3a', tassel: '#9a5aff', glow: '#9a5aff', wings: true, long: 1.08 } },
    { id: 'sp4', name: '적룡 장창', tier: 4, atk: 0.75, style: { head: '#ffd0a0', shaft: '#2a1414', tassel: '#ff3a10', ring: '#ffd040', glow: '#ff3010', wings: true, long: 1.12, big: 1.2 } },
    { id: 'spB1', name: '두억시니 뿔창', tier: 5, atk: 0.85, from: 'boss', perk: 'quake', ult: 'thunder', style: { head: '#9ad8ff', shaft: '#c8302c', tassel: '#ffd040', ring: '#ffd040', glow: '#3ac8ff', wings: true, long: 1.15, big: 1.25 } },
    { id: 'spB2', name: '구미호 여우창', tier: 5, atk: 0.9, from: 'gumiho', perk: 'drain', ult: 'foxtail', style: { head: '#fff4ec', shaft: '#f0e8e0', tassel: '#ff7a2a', ring: '#ffb070', glow: '#ff7a2a', wings: true, long: 1.12, big: 1.2 } },
    { id: 'spB3', name: '저승 명부창', tier: 5, atk: 1.0, from: 'reaper', perk: 'execute', ult: 'judgment', style: { head: '#c890ff', shaft: '#14101c', tassel: '#5a3a8a', ring: '#8a5ad8', glow: '#9a4aff', wings: true, long: 1.18, big: 1.25 } },
    { id: 'spB4', name: '이무기 비늘창', tier: 5, atk: 1.12, from: 'imugi', perk: 'chill', ult: 'tidal', style: { head: '#bfeee0', shaft: '#1a3a3a', tassel: '#2affd0', ring: '#c8c09a', glow: '#2affd0', wings: true, long: 1.15, big: 1.25 } },
    { id: 'spB5', name: '불가사리 쇠뼈창', tier: 5, atk: 1.25, from: 'bulgasari', perk: 'molten', ult: 'meltdown', style: { head: '#ffb060', shaft: '#3a3a40', tassel: '#ff5a10', ring: '#8a4a2a', glow: '#ff5a10', wings: true, long: 1.2, big: 1.3 } },
    { id: 'spB7', name: '백호 송곳창', tier: 5, atk: 1.32, from: 'baekho', perk: 'hunter', ult: 'tigerclaw', style: { head: '#f4f4ee', shaft: '#1a1a22', tassel: '#e08a2a', ring: '#1a1a22', glow: '#ffb060', wings: true, long: 1.22, big: 1.32 } },
    { id: 'spB8', name: '용왕 삼지창', tier: 5, atk: 1.38, from: 'dragon', perk: 'storm', ult: 'dragonstorm', style: { head: '#9ad8ff', shaft: '#1e4a9a', tassel: '#f0c040', ring: '#f0c040', glow: '#3a9aff', wings: true, long: 1.25, big: 1.38 } },
    { id: 'spB6', name: '염라 판관창', tier: 5, atk: 1.45, from: 'yeomra', perk: 'verdict', ult: 'hellfire', style: { head: '#ff4a5a', shaft: '#2a0a10', tassel: '#ffd040', ring: '#ffd040', glow: '#ff2030', wings: true, long: 1.22, big: 1.35 } },
  ],
};

// 옷: 색 팔레트(main 몸통, accent 띠·깃, trim 장식, dark 바지) + 갑옷 장식
export const OUTFITS = [
  { id: 'ot0', name: '평상복', tier: 0, hp: 0, def: 0, pal: null },
  { id: 'ot1', name: '청룡 무관복', tier: 1, hp: 20, def: 0.05, pal: { main: '#2b4374', accent: '#c8302c', trim: '#e0b040', dark: '#1f2438' } },
  { id: 'ot2', name: '자운 비단옷', tier: 2, hp: 35, def: 0.08, pal: { main: '#6a3a8a', accent: '#e0b040', trim: '#f0e0a0', dark: '#2a1a3a' } },
  { id: 'ot3', name: '백호 전포', tier: 3, hp: 55, def: 0.12, pal: { main: '#eeeae2', accent: '#e08a2a', trim: '#2a2a2a', dark: '#4a4a52' }, armor: 'light' },
  { id: 'ot4', name: '흑월 갑주', tier: 4, hp: 80, def: 0.18, pal: { main: '#2a2a34', accent: '#b02a2a', trim: '#d9a83a', dark: '#18181e' }, armor: 'heavy' },
  // 무늬·장식이 있는 고운 옷 (pattern: 옷감 무늬, sleevePat: 소매 무늬, deco: 망토·띠 같은 장식)
  { id: 'ot5', name: '색동 저고리', tier: 1, hp: 18, def: 0.04, sleevePat: 'saekdong', deco: ['sash'], pal: { main: '#f4f0e4', accent: '#c8302c', trim: '#3a6ad8', dark: '#3a2a4a', decoA: '#c8302c', decoB: '#f4c43a' } },
  { id: 'ot6', name: '벚꽃 한복', tier: 2, hp: 32, def: 0.07, pattern: 'flower', deco: ['flowerPin', 'sash'], pal: { main: '#f8c8d8', accent: '#e86aa8', trim: '#fff4f8', dark: '#8a3a5a', patA: '#ffffff', patB: '#e8427a', decoA: '#ff7aa8', decoB: '#ffffff' } },
  { id: 'ot7', name: '구름학 창의', tier: 2, hp: 34, def: 0.08, pattern: 'cloud', deco: ['cape'], pal: { main: '#f4f4ee', accent: '#1a1a24', trim: '#1a1a24', dark: '#2a2a34', patA: '#9aa8c8', patB: '#1a1a24', decoA: '#22222c', decoB: '#e8e8f0' } },
  { id: 'ot8', name: '쪽빛 물결 무사복', tier: 3, hp: 50, def: 0.11, pattern: 'wave', deco: ['scarf', 'bracers'], pal: { main: '#2a3a7a', accent: '#e0b040', trim: '#e0b040', dark: '#1a2040', patA: '#6a8ae8', patB: '#e0b040', decoA: '#eee6d6', decoB: '#e0b040' } },
  { id: 'ot9', name: '홍매 궁중예복', tier: 3, hp: 52, def: 0.1, pattern: 'plum', deco: ['badge', 'crown', 'sash'], pal: { main: '#b0283a', accent: '#2a6a4a', trim: '#ffd040', dark: '#3a1a2a', patA: '#ffb0c0', patB: '#ffe080', decoA: '#2a7a5a', decoB: '#ffd040' } },
  { id: 'ot10', name: '흑매 자객복', tier: 3, hp: 45, def: 0.12, pattern: 'plum', deco: ['scarf', 'bracers'], pal: { main: '#221e28', accent: '#c8302c', trim: '#c8302c', dark: '#121016', patA: '#e8405a', patB: '#ffb0c0', decoA: '#c8302c', decoB: '#4a4450' } },
  { id: 'ot11', name: '월하 선녀옷', tier: 4, hp: 75, def: 0.16, pattern: 'star', deco: ['ribbon', 'crown', 'flowerPin'], pal: { main: '#e8e0ff', accent: '#9a7ad8', trim: '#fff6c0', dark: '#6a5aa8', patA: '#ffffff', patB: '#ffe080', decoA: '#f4e8ff', decoB: '#ffe080', decoGlow: '#5a4aa8' } },
  { id: 'ot12', name: '청룡 곤룡포', tier: 4, hp: 85, def: 0.17, pattern: 'dragon', deco: ['badge', 'cape', 'crown'], pal: { main: '#1e6a5a', accent: '#ffd040', trim: '#ffd040', dark: '#123a34', patA: '#ffd040', patB: '#ff6a3a', decoA: '#a82030', decoB: '#ffd040' } },
  { id: 'otB1', name: '두억시니 뿔갑주', tier: 5, hp: 110, def: 0.2, from: 'boss', perk: 'rage', acc: 'horns', pal: { main: '#8a2a24', accent: '#2a3a7a', trim: '#ffd040', dark: '#2a1a18' }, armor: 'heavy' },
  { id: 'otB2', name: '구미호 털옷', tier: 5, hp: 95, def: 0.16, from: 'gumiho', perk: 'swift', acc: 'fox', pal: { main: '#f4ece4', accent: '#ff7a2a', trim: '#ffb070', dark: '#c8a890' }, armor: 'light' },
  { id: 'otB4', name: '이무기 비늘갑옷', tier: 5, hp: 135, def: 0.21, from: 'imugi', perk: 'scales', pal: { main: '#2a4a5a', accent: '#3a8a8a', trim: '#c8c09a', dark: '#16222a' }, armor: 'heavy' },
  { id: 'otB5', name: '불가사리 쇠갑옷', tier: 5, hp: 160, def: 0.24, from: 'bulgasari', perk: 'ironhide', pal: { main: '#4a4448', accent: '#ff6a2a', trim: '#8a8a92', dark: '#2a2426' }, armor: 'heavy' },
  { id: 'otB6', name: '염라 곤룡포', tier: 5, hp: 180, def: 0.25, from: 'yeomra', perk: 'rebirth', deco: ['badge', 'crown'], pal: { main: '#9a1a22', accent: '#ffd040', trim: '#ffd040', dark: '#3a0a10', decoA: '#1a1a1a', decoB: '#ffd040' } },
  { id: 'otB7', name: '백호 가죽 전포', tier: 5, hp: 168, def: 0.24, from: 'baekho', perk: 'tigerhide', acc: 'fox', pal: { main: '#eeeee6', accent: '#1a1a22', trim: '#e08a2a', dark: '#3a3a42' }, armor: 'light' },
  { id: 'otB8', name: '용궁 비늘 용포', tier: 5, hp: 175, def: 0.25, from: 'dragon', perk: 'pearl', deco: ['badge', 'crown', 'cape'], pattern: 'dragon', pal: { main: '#1e4a9a', accent: '#f0c040', trim: '#f0c040', dark: '#0e1a3a', patA: '#f0c040', patB: '#9ad8ff', decoA: '#e04a2a', decoB: '#f0c040' }, armor: 'heavy' },
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
  if (!owned) return `${BOSS_SETS[it.from].boss} 처치 시 낮은 확률로 획득`;
  const u = it.ult ? `<br><em class="ult">고유 기술 [U] ${ULTS[it.ult].name}: ${ULTS[it.ult].desc} (재사용 ${ULTS[it.ult].cd}초)</em>` : '';
  return `${base}<br><em>${PERKS[it.perk]}</em>${u}`;
}

// 장착한 무기·옷의 고유 효과 목록
export function perksOf(...ids) {
  const out = new Set();
  for (const id of ids) { const it = ALL.get(id); if (it && it.perk) out.add(it.perk); }
  return out;
}

// 보스 처치 보상: 확률로만 나옴. 무기(고유 기술)와 옷을 따로 굴림
//  무기는 지금 직업용이 우선(아직 없는 것), 다 있으면 다른 직업용 → 그래도 다 있으면 지금 직업용(중복은 경험치)
export function bossDrop(type, cls, inv, round = 0) {
  if (!BOSS_SETS[type]) return [];
  const set = [...ALL.values()].filter((it) => it.from === type);
  const out = [];
  const bonus = Math.min(0.1, round * 0.02);
  if (Math.random() < BOSS_WEAPON_CHANCE + bonus) {
    const mine = set.find((it) => it.kind === 'weapon' && it.cls === cls);
    const others = set.filter((it) => it.kind === 'weapon' && it.cls !== cls && !inv.has(it.id));
    out.push((!inv.has(mine.id) || !others.length ? mine : others[Math.floor(Math.random() * others.length)]).id);
  }
  if (Math.random() < BOSS_OUTFIT_CHANCE + bonus) out.push(set.find((it) => it.kind === 'outfit').id);
  return out;
}

// 처치 보상: 적 종류·회차에 따라 등급이 오름. 무기는 지금 직업용 위주
export function rollDrop(enemyType, round, cls) {
  const chance = { blue: 0.07, red: 0.12, wisp: 0.1, fox: 0.09, foxfire: 0.1, jiangshi: 0.11, ghost: 0.11, waterghost: 0.12, toad: 0.12, firedok: 0.13, stonegolem: 0.2, bandit: 0.13, crow: 0.13, tiger: 0.15, crab: 0.14, jelly: 0.14, turtle: 0.22, baekho: 1, dragon: 1, boss: 1, gumiho: 1, reaper: 1, imugi: 1, bulgasari: 1, yeomra: 1 }[enemyType] ?? 0;
  // 일반 몹은 절반으로 (보스는 반드시)
  if (Math.random() > (chance >= 1 ? 1 : chance * 0.5)) return null;
  let tier = 1;
  const strong = { boss: 0.55, gumiho: 0.6, reaper: 0.7, imugi: 0.8, bulgasari: 0.9, yeomra: 1.1, red: 0.1, jiangshi: 0.15, ghost: 0.15, fox: 0.08, foxfire: 0.08, waterghost: 0.22, toad: 0.22, firedok: 0.3, stonegolem: 0.4, bandit: 0.38, crow: 0.38, tiger: 0.45, crab: 0.48, jelly: 0.48, turtle: 0.55, baekho: 1.0, dragon: 1.05 }[enemyType] || 0;
  const r = Math.random() + round * 0.12 + strong;
  if (r > 1.35) tier = 4; else if (r > 1.05) tier = 3; else if (r > 0.7) tier = 2;
  if (Math.random() < 0.55) {
    const all = Object.keys(WEAPONS);
    const pool = Math.random() < 0.8 ? cls : all[Math.floor(Math.random() * all.length)];
    return WEAPONS[pool][tier].id;
  }
  const pool = OUTFITS.filter((o) => o.tier === tier && !o.from);
  return pool[Math.floor(Math.random() * pool.length)].id;
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
  } else if (it.kind === 'weapon' && it.cls === 'lancer') {
    for (let i = 0; i < 12; i++) px(2 + i, 14 - i, s.shaft || '#5a3a28');
    const hd = s.head || '#d4dce6';
    px(12, 3, hd); px(13, 2, hd); px(14, 1, '#ffffff'); px(13, 3, hd); px(12, 2, hd);
    px(11, 4, s.tassel || '#c8302c'); px(10, 4, s.tassel || '#c8302c'); px(11, 5, s.tassel || '#c8302c');
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
    if (it.pattern) { g.fillStyle = p.patA || p.trim; for (const [x, y] of [[5, 5], [9, 7], [6, 10], [10, 11]]) g.fillRect(x, y, 1, 1); }
    if (it.sleevePat) { const sd = ['#e8423a', '#f4c43a', '#4aa84e', '#3a6ad8', '#e86aa8', '#f4f0e4']; for (let i = 0; i < 6; i++) { g.fillStyle = sd[i]; g.fillRect(2, 4 + i, 2, 1); g.fillRect(12, 4 + i, 2, 1); } }
    if (it.deco?.includes('cape')) { g.fillStyle = p.decoA || p.accent; g.fillRect(1, 3, 1, 11); g.fillRect(14, 3, 1, 11); }
    if (it.deco?.includes('crown') || it.deco?.includes('flowerPin')) { g.fillStyle = it.deco.includes('crown') ? '#ffd040' : (p.decoA || '#ff9ac0'); g.fillRect(6, 0, 1, 2); g.fillRect(8, 0, 1, 2); g.fillRect(10, 0, 1, 2); }
    if (it.acc === 'horns') { g.fillStyle = '#ffd040'; g.fillRect(5, 0, 1, 3); g.fillRect(10, 0, 1, 3); }
    if (it.acc === 'fox') { g.fillStyle = '#ff7a2a'; g.fillRect(12, 11, 3, 2); g.fillRect(14, 9, 1, 2); g.fillStyle = '#f4ece4'; g.fillRect(5, 1, 2, 2); g.fillRect(9, 1, 2, 2); }
    if (it.acc === 'gat') { g.fillStyle = '#0c0a10'; g.fillRect(3, 2, 10, 1); g.fillRect(6, 0, 4, 2); g.fillStyle = '#c8b0ff'; g.fillRect(4, 3, 1, 3); g.fillRect(11, 3, 1, 3); }
  }
  if (it.perk) { px(1, 1, '#ffffff'); px(2, 1, rc); px(1, 2, rc); px(14, 14, '#ffffff'); }
  g.strokeStyle = rc;
  g.strokeRect(0.5, 0.5, 15, 15);
}
