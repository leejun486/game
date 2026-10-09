// 지역 설정: 이름, 남쪽으로 이어지는 다음 지역, 웨이브 구성, 필드 몬스터, 조명 색
export const MAPS = {
  palace: {
    id: 'palace', han: '월하궁', name: '월하궁', sub: '도깨비 야행', next: 'bamboo', prev: null, lvl: 0,
    foe: '도깨비', night: ['도깨비 야행', '북소리에 도깨비들이 깨어난다…'],
    summonLine: '두억시니: "얘들아, 나와라 뚝딱!"',
    waves(n, r) {
      if (n === 1) return [['blue', 4 + r], ['red', r]];
      if (n === 2) return [['blue', 3 + r], ['red', 2 + r], ['wisp', 2 + Math.floor(r / 2)]];
      return [['boss', 1], ['red', 2 + r], ['wisp', r]];
    },
    theme: {
      sun: ['#fff0d6', '#8ea6ff'], sunI: [2.5, 0.9], sky: ['#dfe9ff', '#55669e'], ground: ['#8a7c62', '#262438'],
      hemiI: [1.15, 0.95], bg: ['#3b4a3a', '#0e1220'], ambient: 'petal',
    },
  },
  bamboo: {
    id: 'bamboo', han: '죽림', name: '죽림', sub: '여우 울음', next: 'temple', prev: 'palace', lvl: 2,
    foe: '여우', night: ['여우 울음', '방울 소리에 여우들이 몰려온다…'],
    summonLine: '구미호: "아가들아, 저 사람의 간을 빼 오너라!"',
    // 필드 몬스터: 동시에 최대 cap마리, 한 무리 최대 pack마리, [종류, 비중]
    field: { cap: 6, pack: 3, types: [['fox', 3], ['foxfire', 1]] },
    waves(n, r) {
      if (n === 1) return [['fox', 4 + r], ['foxfire', r]];
      if (n === 2) return [['fox', 3 + r], ['foxfire', 2 + r]];
      return [['gumiho', 1], ['fox', 2 + r], ['foxfire', 1 + Math.floor(r / 2)]];
    },
    theme: {
      sun: ['#ffd8a0', '#7ab0b0'], sunI: [2.2, 0.8], sky: ['#d8ecc8', '#3a5e58'], ground: ['#5a6a3a', '#1a2420'],
      hemiI: [1.1, 0.95], bg: ['#2e3e26', '#08120e'], ambient: 'leaf',
    },
  },
  temple: {
    id: 'temple', han: '폐사찰', name: '설원 폐사찰', sub: '저승의 문', next: 'swamp', prev: 'bamboo', lvl: 4,
    foe: '망자', night: ['저승의 문', '범종 소리에 망자들이 깨어난다…'],
    summonLine: '저승사자: "명부에 이름이 오른 자들아, 일어나라…"',
    field: { cap: 6, pack: 3, types: [['jiangshi', 2], ['ghost', 1]] },
    waves(n, r) {
      if (n === 1) return [['jiangshi', 4 + r]];
      if (n === 2) return [['jiangshi', 2 + r], ['ghost', 3 + r]];
      return [['reaper', 1], ['ghost', 2 + r], ['jiangshi', 1 + r]];
    },
    theme: {
      sun: ['#f4f8ff', '#8ea6ff'], sunI: [1.9, 1.0], sky: ['#d8e2f4', '#5a6a9e'], ground: ['#9aa8c0', '#2a3050'],
      hemiI: [0.95, 1.0], bg: ['#b8c4d4', '#0c1020'], ambient: 'snow',
    },
  },
};

MAPS.swamp = {
  id: 'swamp', han: '물안개 늪', name: '물안개 늪', sub: '이무기의 잠', next: 'canyon', prev: 'temple', lvl: 6,
  foe: '물귀신', night: ['이무기의 잠', '징 소리에 늪이 끓어오른다…'],
  summonLine: '이무기: "용이 되려던 천 년을… 감히 방해하느냐!"',
  field: { cap: 6, pack: 3, types: [['waterghost', 3], ['toad', 2]] },
  waves(n, r) {
    if (n === 1) return [['waterghost', 4 + r], ['toad', 1 + Math.floor(r / 2)]];
    if (n === 2) return [['waterghost', 3 + r], ['toad', 2 + r]];
    return [['imugi', 1], ['waterghost', 2 + r], ['toad', 1 + Math.floor(r / 2)]];
  },
  theme: {
    sun: ['#e4ecc8', '#6a9a8a'], sunI: [2.0, 0.85], sky: ['#d4e4c8', '#2a4a48'], ground: ['#4a5a3a', '#141e1c'],
    hemiI: [1.05, 0.95], bg: ['#2a3626', '#060e0c'], ambient: 'mist',
  },
};

MAPS.canyon = {
  id: 'canyon', han: '불가사리 협곡', name: '불가사리 협곡', sub: '쇠를 먹는 괴물', next: 'fortress', prev: 'swamp', lvl: 8,
  foe: '화염 도깨비', night: ['풀무질', '꺼진 가마에 다시 불이 붙는다…'],
  summonLine: '불가사리: "크르릉… 쇠! 쇠를 내놓아라!"',
  field: { cap: 6, pack: 3, types: [['firedok', 3], ['stonegolem', 1]] },
  waves(n, r) {
    if (n === 1) return [['firedok', 4 + r], ['stonegolem', 1]];
    if (n === 2) return [['firedok', 3 + r], ['stonegolem', 2 + Math.floor(r / 2)]];
    return [['bulgasari', 1], ['firedok', 2 + r], ['stonegolem', 1 + Math.floor(r / 2)]];
  },
  theme: {
    sun: ['#ffd0a0', '#c86a4a'], sunI: [2.1, 0.9], sky: ['#e8c8b0', '#4a2a2a'], ground: ['#5a4038', '#1a0e0c'],
    hemiI: [1.0, 0.9], bg: ['#3a2622', '#120808'], ambient: 'ember',
  },
};

MAPS.fortress = {
  id: 'fortress', han: '단풍 산성', name: '단풍 산성', sub: '산군의 포효', next: 'sea', prev: 'canyon', lvl: 10,
  foe: '산적 도깨비', night: ['봉화', '봉화가 오르자 산이 울린다…'],
  summonLine: '산군 백호: "어흥— 이 산의 주인이 누구인지 잊었느냐!"',
  field: { cap: 6, pack: 3, types: [['bandit', 3], ['crow', 2], ['tiger', 2]] },
  waves(n, r) {
    if (n === 1) return [['bandit', 4 + r], ['crow', 1 + Math.floor(r / 2)]];
    if (n === 2) return [['bandit', 3 + r], ['tiger', 2 + Math.floor(r / 2)], ['crow', 1]];
    return [['baekho', 1], ['tiger', 1 + r], ['bandit', 2 + r]];
  },
  theme: {
    sun: ['#ffd8a8', '#a87a6a'], sunI: [2.3, 0.85], sky: ['#f4dcc0', '#4a3a4a'], ground: ['#8a6a3a', '#1e1614'],
    hemiI: [1.1, 0.95], bg: ['#5a3a26', '#120c0a'], ambient: 'maple',
  },
};

MAPS.sea = {
  id: 'sea', han: '용궁', name: '동해 용궁', sub: '바다 밑 궁전', next: 'valley', prev: 'fortress', lvl: 12,
  foe: '꽃게 병사', night: ['용고', '용고 소리에 바닷물이 소용돌이친다…'],
  summonLine: '동해 용왕: "뭍의 것이 감히 용궁의 북을 울리느냐!"',
  field: { cap: 6, pack: 3, types: [['crab', 3], ['jelly', 2], ['turtle', 1]] },
  waves(n, r) {
    if (n === 1) return [['crab', 4 + r], ['jelly', 1 + Math.floor(r / 2)]];
    if (n === 2) return [['crab', 3 + r], ['turtle', 1 + Math.floor(r / 2)], ['jelly', 2]];
    return [['dragon', 1], ['crab', 2 + r], ['jelly', 1 + Math.floor(r / 2)]];
  },
  theme: {
    sun: ['#c8f0ff', '#4a7aff'], sunI: [1.9, 0.9], sky: ['#a8e0f0', '#1a2a5a'], ground: ['#4a7a8a', '#0a1428'],
    hemiI: [1.15, 1.0], bg: ['#2a6a8a', '#04081a'], ambient: 'bubble',
  },
};

MAPS.valley = {
  id: 'valley', han: '청류 계곡', name: '청류 계곡', sub: '여름 물소리', next: 'snowfield', prev: 'sea', lvl: 14,
  foe: '멧돼지', night: ['물레방아', '물레방아가 돌자 골짜기가 술렁인다…'],
  summonLine: '천년 왕지네: "스스스… 이 골짜기의 물은 모두 내 것이다…"',
  field: { cap: 6, pack: 3, types: [['boar', 3], ['mantis', 2], ['bee', 2]] },
  waves(n, r) {
    if (n === 1) return [['boar', 3 + r], ['bee', 2 + Math.floor(r / 2)]];
    if (n === 2) return [['mantis', 3 + r], ['boar', 2], ['bee', 1 + Math.floor(r / 2)]];
    return [['centipede', 1], ['mantis', 1 + r], ['bee', 2 + Math.floor(r / 2)]];
  },
  theme: {
    sun: ['#fff4c8', '#7aa0c8'], sunI: [2.6, 0.85], sky: ['#d8f4c8', '#2a4a4a'], ground: ['#5a8a3a', '#141e14'],
    hemiI: [1.2, 0.95], bg: ['#4a7a3a', '#081208'], ambient: 'summer',
  },
};

MAPS.snowfield = {
  id: 'snowfield', han: '백설 고원', name: '백설 고원', sub: '겨울 장수의 땅', next: 'tomb', prev: 'valley', lvl: 16,
  foe: '눈늑대', night: ['얼음 북', '북소리에 눈보라가 몰아친다…'],
  summonLine: '동장군: "봄은 오지 않는다. 이 땅은 영원히 겨울이니라!"',
  field: { cap: 6, pack: 3, types: [['wolf', 3], ['icedok', 2], ['icewisp', 2]] },
  waves(n, r) {
    if (n === 1) return [['wolf', 4 + r], ['icewisp', 1 + Math.floor(r / 2)]];
    if (n === 2) return [['icedok', 3 + r], ['wolf', 2], ['icewisp', 2]];
    return [['frostgiant', 1], ['wolf', 2 + r], ['icedok', 1 + Math.floor(r / 2)]];
  },
  theme: {
    sun: ['#f8fbff', '#9ab0ff'], sunI: [1.9, 1.0], sky: ['#dce6f4', '#4a5a8a'], ground: ['#98a6be', '#2a3050'],
    hemiI: [0.92, 1.0], bg: ['#c8d8e8', '#0a1020'], ambient: 'blizzard',
  },
};

MAPS.tomb = {
  id: 'tomb', han: '왕릉 고분', name: '왕릉 고분', sub: '어둠이 자라는 무덤', next: 'market', prev: 'snowfield', lvl: 18,
  foe: '망령 병사', night: ['향불', '향이 피어오르자 무덤 사이로 어둠이 번진다…'],
  summonLine: '어둑시니: "나를 보았느냐… 볼수록 나는 커진다…"',
  field: { cap: 6, pack: 3, types: [['tombsoldier', 3], ['muinseok', 1], ['gungnyeo', 2]] },
  waves(n, r) {
    if (n === 1) return [['tombsoldier', 4 + r], ['gungnyeo', 1 + Math.floor(r / 2)]];
    if (n === 2) return [['tombsoldier', 2 + r], ['muinseok', 1 + Math.floor(r / 2)], ['gungnyeo', 2]];
    return [['eodum', 1], ['tombsoldier', 2 + r], ['gungnyeo', 1 + Math.floor(r / 2)]];
  },
  theme: {
    sun: ['#ffc8a0', '#8a7aff'], sunI: [1.8, 0.95], sky: ['#e8c8c0', '#3a2a5a'], ground: ['#6a6448', '#1a1626'],
    hemiI: [1.0, 0.95], bg: ['#5a4a5a', '#0a0814'], ambient: 'soul',
  },
};

MAPS.market = {
  id: 'market', han: '밤장터', name: '도깨비 밤장터', sub: '넋을 거는 난장', next: 'tidal', prev: 'tomb', lvl: 20,
  foe: '장난꾸러기 도깨비', night: ['난장', '북소리에 장터의 등롱이 일제히 켜진다…'],
  summonLine: '독각귀: "어서 옵쇼! 오늘 밤 판돈은 네 넋이다!"',
  field: { cap: 6, pack: 3, types: [['imp', 3], ['gambler', 2], ['tanuki', 2]] },
  waves(n, r) {
    if (n === 1) return [['imp', 4 + r], ['gambler', 1 + Math.floor(r / 2)]];
    if (n === 2) return [['tanuki', 3 + r], ['imp', 2], ['gambler', 2]];
    return [['dokgak', 1], ['imp', 2 + r], ['gambler', 1 + Math.floor(r / 2)]];
  },
  theme: {
    sun: ['#ffd8a8', '#ff9a6a'], sunI: [2.0, 1.0], sky: ['#f0d0b8', '#4a2a4a'], ground: ['#7a6046', '#1e1420'],
    hemiI: [1.05, 1.0], bg: ['#5a3a3a', '#0e0810'], ambient: 'ember',
  },
};

MAPS.tidal = {
  id: 'tidal', han: '갯마을', name: '남해 갯벌 마을', sub: '사람 목소리를 흉내 내는 것', next: 'sky', prev: 'market', lvl: 22,
  foe: '농게', night: ['물때', '징 소리에 물이 빠지고 갯벌이 드러난다…'],
  summonLine: '장산범: "순덕아… 순덕아… 나 좀 들여보내 다오…"',
  field: { cap: 6, pack: 3, types: [['fiddler', 3], ['fishman', 2], ['mudghost', 2]] },
  waves(n, r) {
    if (n === 1) return [['fiddler', 3 + r], ['fishman', 2 + Math.floor(r / 2)]];
    if (n === 2) return [['fishman', 3 + r], ['mudghost', 2], ['fiddler', 1]];
    return [['jangsan', 1], ['fishman', 2 + r], ['mudghost', 1 + Math.floor(r / 2)]];
  },
  theme: {
    sun: ['#fff0d8', '#7a9ad8'], sunI: [2.4, 0.9], sky: ['#d8ecf4', '#2a3a5a'], ground: ['#8a7a62', '#141a22'],
    hemiI: [1.15, 0.95], bg: ['#7a9aa8', '#060c14'], ambient: 'mist',
  },
};

MAPS.sky = {
  id: 'sky', han: '천상 선계', name: '천상 선계', sub: '구름 위의 천둥', next: 'palace', prev: 'tidal', lvl: 24,
  foe: '천둥 동자', night: ['천둥', '북소리에 구름이 갈라지고 번개가 친다…'],
  summonLine: '뇌공: "하늘의 북을 함부로 울린 자, 벼락을 받아라!"',
  field: { cap: 6, pack: 3, types: [['thunderkid', 2], ['crane', 2], ['shadowfairy', 3]] },
  waves(n, r) {
    if (n === 1) return [['shadowfairy', 3 + r], ['thunderkid', 2 + Math.floor(r / 2)]];
    if (n === 2) return [['crane', 3 + r], ['shadowfairy', 2], ['thunderkid', 1]];
    return [['noegong', 1], ['shadowfairy', 2 + r], ['crane', 1 + Math.floor(r / 2)]];
  },
  theme: {
    sun: ['#fffaf0', '#b0a8ff'], sunI: [2.3, 1.0], sky: ['#e8f0ff', '#4a4a8a'], ground: ['#d8dcf0', '#2a2a4a'],
    hemiI: [1.15, 1.0], bg: ['#c8d8f8', '#10102a'], ambient: 'petal',
  },
};

MAPS.tower = {
  id: 'tower', han: '시련탑', name: '저승 시련탑', sub: '끝없는 저승의 탑', next: 'canyon', prev: 'canyon', lvl: 18,
  foe: '망자', night: ['시련', ''], summonLine: '염라대왕: "명부에 적힌 이름은 지울 수 없느니라!"',
  waves() { return []; },
  theme: {
    sun: ['#d8c8ff', '#8a6aff'], sunI: [1.8, 1.0], sky: ['#c8b8f0', '#3a2a6a'], ground: ['#2a1a3a', '#0c0612'],
    hemiI: [1.0, 1.0], bg: ['#140c1e', '#06030a'], ambient: 'soul',
  },
};

export const BOSS_TYPES = new Set(['boss', 'gumiho', 'reaper', 'imugi', 'bulgasari', 'baekho', 'dragon', 'centipede', 'frostgiant', 'eodum', 'dokgak', 'jangsan', 'noegong', 'yeomra']);
export const BOSS_NAME = { palace: '도깨비 대왕 두억시니', bamboo: '천년 구미호', temple: '저승사자', swamp: '천년 이무기', canyon: '쇠먹는 불가사리', fortress: '산군 백호', sea: '동해 용왕', valley: '천년 왕지네', snowfield: '서리 거인 동장군', tomb: '어둑시니', market: '외다리 독각귀', tidal: '장산범', sky: '천둥 장수 뇌공' };
export const WIN_LINE = { palace: '도깨비들이 달아나고 동이 튼다', bamboo: '여우들이 숲 깊이 사라진다', temple: '망자들이 저승으로 돌아간다', swamp: '늪의 물안개가 걷히고 수면이 잠잠해진다', canyon: '가마의 불이 사그라들고 쇳소리가 멎는다', fortress: '산성의 봉화가 잦아들고 단풍잎만 흩날린다', sea: '소용돌이가 잦아들고 용궁에 고요한 물빛이 돈다', valley: '물레방아가 다시 천천히 돌고 시냇물 소리만 남는다', snowfield: '눈보라가 그치고 고원 위로 햇살이 쏟아진다', tomb: '어둠이 걷히고 무덤 위로 새벽 별이 돋는다', market: '등롱이 하나둘 꺼지고 장터에 빈 멍석만 남는다', tidal: '물이 다시 차오르고 갯마을에 파도 소리만 남는다', sky: '천둥이 멎고 구름 사이로 달빛이 흘러내린다' };

// 지역 색감 (고화질): tint 색 곱, sat 채도, haze 화면 위쪽(먼 곳)에 끼는 대기 색과 양
export const GRADE = {
  palace: { tint: [1.04, 1.0, 0.94], sat: 1.04, haze: '#ffe8c8', hz: 0.10 },
  bamboo: { tint: [0.96, 1.04, 0.95], sat: 1.0, haze: '#cfe8c8', hz: 0.16 },
  temple: { tint: [0.96, 0.98, 1.05], sat: 0.92, haze: '#d8e0ec', hz: 0.12 },
  swamp: { tint: [0.98, 1.03, 0.93], sat: 0.92, haze: '#a8b890', hz: 0.15 },
  canyon: { tint: [1.06, 0.97, 0.9], sat: 1.05, haze: '#ff9a60', hz: 0.14 },
  fortress: { tint: [1.08, 0.98, 0.88], sat: 1.12, haze: '#f4c890', hz: 0.14 },
  sea: { tint: [0.95, 1.01, 1.06], sat: 1.04, haze: '#90d4ea', hz: 0.14 },
  valley: { tint: [1.02, 1.04, 0.95], sat: 1.14, haze: '#eaf8ff', hz: 0.12 },
  snowfield: { tint: [0.92, 0.97, 1.08], sat: 0.95, haze: '#dce6f6', hz: 0.12 },
  tomb: { tint: [1.02, 0.95, 1.04], sat: 0.9, haze: '#b89ab8', hz: 0.16 },
  market: { tint: [1.06, 0.98, 0.94], sat: 1.08, haze: '#ffb080', hz: 0.13 },
  tidal: { tint: [0.98, 1.0, 1.04], sat: 1.0, haze: '#c8e0ec', hz: 0.15 },
  sky: { tint: [1.0, 0.99, 1.05], sat: 1.02, haze: '#f0f0ff', hz: 0.18 },
  tower: { tint: [0.98, 0.9, 1.1], sat: 0.92, haze: '#4a2a62', hz: 0.2 },
};
