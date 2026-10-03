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
    id: 'temple', han: '폐사찰', name: '설원 폐사찰', sub: '저승의 문', next: 'palace', prev: 'bamboo', lvl: 4,
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

export const BOSS_TYPES = new Set(['boss', 'gumiho', 'reaper']);
