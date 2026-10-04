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
      sun: ['#f4f8ff', '#8ea6ff'], sunI: [2.4, 1.0], sky: ['#e8f0ff', '#5a6a9e'], ground: ['#c8d4e8', '#2a3050'],
      hemiI: [1.2, 1.0], bg: ['#b8c4d4', '#0c1020'], ambient: 'snow',
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
  id: 'sea', han: '용궁', name: '동해 용궁', sub: '바다 밑 궁전', next: 'palace', prev: 'fortress', lvl: 12,
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

MAPS.tower = {
  id: 'tower', han: '시련탑', name: '저승 시련탑', sub: '끝없는 저승의 탑', next: 'canyon', prev: 'canyon', lvl: 14,
  foe: '망자', night: ['시련', ''], summonLine: '염라대왕: "명부에 적힌 이름은 지울 수 없느니라!"',
  waves() { return []; },
  theme: {
    sun: ['#d8c8ff', '#8a6aff'], sunI: [1.8, 1.0], sky: ['#c8b8f0', '#3a2a6a'], ground: ['#2a1a3a', '#0c0612'],
    hemiI: [1.0, 1.0], bg: ['#140c1e', '#06030a'], ambient: 'soul',
  },
};

export const BOSS_TYPES = new Set(['boss', 'gumiho', 'reaper', 'imugi', 'bulgasari', 'baekho', 'dragon', 'yeomra']);
export const BOSS_NAME = { palace: '도깨비 대왕 두억시니', bamboo: '천년 구미호', temple: '저승사자', swamp: '천년 이무기', canyon: '쇠먹는 불가사리', fortress: '산군 백호', sea: '동해 용왕' };
export const WIN_LINE = { palace: '도깨비들이 달아나고 동이 튼다', bamboo: '여우들이 숲 깊이 사라진다', temple: '망자들이 저승으로 돌아간다', swamp: '늪의 물안개가 걷히고 수면이 잠잠해진다', canyon: '가마의 불이 사그라들고 쇳소리가 멎는다', fortress: '산성의 봉화가 잦아들고 단풍잎만 흩날린다', sea: '소용돌이가 잦아들고 용궁에 고요한 물빛이 돈다' };
