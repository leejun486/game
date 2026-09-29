'use strict';
// Static game data: classes, skills, monsters, zones, items, transcend cards, quests.
const D = {};

D.TILE = 64;
D.MAP_W = 180;
D.MAP_H = 180;
D.DUNGEON_RECT = { x0: 148, y0: 4, x1: 177, y1: 32 };
D.DUNGEON_CENTER = { x: 162.5, y: 18 };
D.TOWN = { x: 90 * 64, y: 90 * 64, r: 15 * 64 };

D.GRADES = [
  { name: '일반', cls: 'g0', color: '#b8b8b8' },
  { name: '고급', cls: 'g1', color: '#54c45e' },
  { name: '희귀', cls: 'g2', color: '#3f8cff' },
  { name: '영웅', cls: 'g3', color: '#e8423a' },
  { name: '전설', cls: 'g4', color: '#f3b53a' },
];

// ---------------- classes & skills ----------------
D.CLASSES = {
  knight: {
    name: '기사', sheet: 'knight', desc: '강인한 체력과 근접 전투의 달인.\n높은 방어력으로 전장을 지배한다.',
    base: { hp: 190, mp: 40, atk: 14, def: 6 }, grow: { hp: 24, mp: 3, atk: 2.3, def: 0.9 },
    range: 62, attack: 'slash', atkDelay: 0.95, weapon: 'sword',
    skills: ['k_smash', 'k_whirl', 'k_rage', 'k_doom', 'k_charge', 'k_quake'],
  },
  elf: {
    name: '요정', sheet: 'elf_px', desc: '숲의 축복을 받은 궁수.\n먼 거리에서 적을 꿰뚫는다.',
    base: { hp: 135, mp: 80, atk: 12, def: 3 }, grow: { hp: 15, mp: 6, atk: 2.1, def: 0.5 },
    range: 330, attack: 'shoot', atkDelay: 1.0, weapon: 'bow', projectile: 'arrow',
    skills: ['e_triple', 'e_rain', 'e_wind', 'e_energy', 'e_frost', 'e_storm'],
  },
  mage: {
    name: '마법사', sheet: 'mage', desc: '원소를 다루는 현자.\n강력한 광역 마법으로 적을 쓸어버린다.',
    base: { hp: 115, mp: 140, atk: 15, def: 2 }, grow: { hp: 11, mp: 11, atk: 2.5, def: 0.4 },
    range: 300, attack: 'thrust', atkDelay: 1.05, weapon: 'staff', projectile: 'bolt',
    skills: ['m_fire', 'm_ice', 'm_heal', 'm_meteor', 'm_chain', 'm_blizzard'],
  },
};

// type: single | aoe_self | aoe_target | buff | heal | multi | pierce
D.SKILLS = {
  k_smash: { name: '강타', icon: 'slash', mp: 6, cd: 3, mult: 2.3, type: 'single', anim: 'slash', desc: '대상에게 공격력의 230% 피해' },
  k_whirl: { name: '회오리 베기', icon: 'whirl', mp: 14, cd: 7, mult: 1.6, type: 'aoe_self', radius: 150, anim: 'slash', desc: '주변 모든 적에게 160% 피해' },
  k_rage: { name: '버서커', icon: 'aura', mp: 20, cd: 40, type: 'buff', buff: { id: 'rage', name: '버서커', atkPct: 35, atkSpd: 20, dur: 20 }, anim: 'slash', desc: '20초간 공격력 +35%, 공격속도 +20%' },
  k_doom: { name: '파멸의 일격', icon: 'meteor', mp: 25, cd: 14, mult: 5.0, type: 'single', anim: 'slash', fx: 'doom', desc: '대상에게 공격력의 500% 치명적 피해' },

  e_triple: { name: '트리플 애로우', icon: 'arrow', mp: 8, cd: 3, mult: 1.1, type: 'multi', count: 3, anim: 'shoot', desc: '화살 3발을 연속으로 발사 (각 110%)' },
  e_rain: { name: '화살비', icon: 'arrow-rain', mp: 18, cd: 8, mult: 1.5, type: 'aoe_target', radius: 140, anim: 'shoot', fx: 'rain', desc: '대상 주변에 화살비 (150% 광역)' },
  e_wind: { name: '윈드 샷', icon: 'sprint', mp: 20, cd: 40, type: 'buff', buff: { id: 'wind', name: '윈드 샷', atkSpd: 40, moveSpd: 15, dur: 20 }, anim: 'shoot', desc: '20초간 공격속도 +40%, 이동속도 +15%' },
  e_energy: { name: '에너지 볼트', icon: 'energy-arrow', mp: 26, cd: 12, mult: 4.2, type: 'pierce', anim: 'shoot', desc: '관통하는 거대한 화살 (420%)' },

  m_fire: { name: '파이어 볼', icon: 'fireball', mp: 10, cd: 2.5, mult: 1.9, type: 'aoe_target', radius: 90, el: 'fire', anim: 'thrust', fx: 'fire', desc: '폭발하는 화염구 (190% 광역)' },
  m_ice: { name: '아이스 스피어', icon: 'icebolt', mp: 16, cd: 6, mult: 2.6, type: 'single', el: 'ice', anim: 'thrust', fx: 'ice', slow: 3, desc: '260% 피해 + 3초간 둔화' },
  m_heal: { name: '힐', icon: 'heal', mp: 22, cd: 10, type: 'heal', pct: 0.35, anim: 'thrust', desc: '최대 HP의 35% 회복' },
  k_charge: { name: '돌진 베기', icon: 'blade', mp: 18, cd: 8, mult: 1.8, type: 'single', range: 360, anim: 'slash', unlock: 15, desc: '대상에게 순식간에 돌진하여 180% 피해' },
  k_quake: { name: '대지 분쇄', icon: 'craft', mp: 30, cd: 12, mult: 2.2, type: 'aoe_self', radius: 190, anim: 'slash', unlock: 30, desc: '땅을 내리쳐 주변 적에게 220% 피해 + 2초 둔화' },
  e_frost: { name: '빙결 화살', icon: 'frozen-orb', mp: 16, cd: 6, mult: 2.0, type: 'single', el: 'ice', anim: 'shoot', unlock: 15, desc: '200% 피해 + 3초간 둔화' },
  e_storm: { name: '폭풍의 화살', icon: 'heavy-arrow', mp: 32, cd: 12, mult: 0.8, type: 'aoe_self', radius: 350, count: 8, anim: 'shoot', unlock: 30, desc: '주변 적들에게 화살 8발을 난사 (각 80%)' },
  m_chain: { name: '체인 라이트닝', icon: 'lightning', mp: 20, cd: 5, mult: 1.7, type: 'single', el: 'lightning', anim: 'thrust', unlock: 15, desc: '170% 번개가 주변 적 3명에게 연쇄 (연쇄마다 20% 감소)' },
  m_blizzard: { name: '블리자드', icon: 'lightning2', mp: 38, cd: 14, mult: 0.45, type: 'aoe_target', radius: 170, el: 'ice', anim: 'thrust', unlock: 30, desc: '4초간 눈보라 지대 생성 (0.5초마다 45% + 둔화)' },
  m_meteor: { name: '메테오 스트라이크', icon: 'meteor', mp: 40, cd: 16, mult: 3.8, type: 'aoe_target', radius: 190, el: 'fire', anim: 'thrust', fx: 'meteor', desc: '거대한 운석 낙하 (380% 광역)' },
};

// ---------------- monsters ----------------
D.MONSTERS = {
  goblin: { name: '고블린', sheet: 'goblin', lv: 2, hp: 55, atk: 7, def: 1, spd: 70, scale: 0.85, aggro: false, range: 50 },
  wolfman: { name: '늑대인간', sheet: 'wolfman', lv: 5, hp: 110, atk: 12, def: 3, spd: 90, scale: 1.0, aggro: true, range: 52 },
  boarman: { name: '멧돼지 전사', sheet: 'boarman', lv: 8, hp: 190, atk: 17, def: 5, spd: 80, scale: 1.05, aggro: false, range: 52 },
  zombie: { name: '굶주린 좀비', sheet: 'zombie', lv: 12, hp: 300, atk: 24, def: 8, spd: 50, scale: 1.0, aggro: true, range: 50 },
  skeleton: { name: '해골 전사', sheet: 'skeleton', lv: 15, hp: 380, atk: 30, def: 11, spd: 85, scale: 1.0, aggro: true, range: 56 },
  vampire: { name: '뱀파이어 군주', sheet: 'vampire', lv: 24, hp: 5200, atk: 55, def: 20, spd: 95, scale: 1.45, aggro: true, range: 64, boss: true },
  orc: { name: '오크 전사', sheet: 'orc', lv: 20, hp: 560, atk: 40, def: 15, spd: 80, scale: 1.05, aggro: true, range: 56 },
  lizardman: { name: '리자드맨', sheet: 'lizardman', lv: 25, hp: 760, atk: 50, def: 19, spd: 88, scale: 1.05, aggro: true, range: 56 },
  troll: { name: '흉포한 트롤', sheet: 'troll', lv: 30, hp: 1200, atk: 64, def: 24, spd: 70, scale: 1.25, aggro: true, range: 60 },
  minotaur: { name: '미노타우르스 킹', sheet: 'minotaur', lv: 38, hp: 16000, atk: 105, def: 34, spd: 90, scale: 1.7, aggro: true, range: 76, boss: true },
  // 서리 설원 (Lv.40+): frost-tinted variants of the LPC sheets (D.SHEET_VARIANTS)
  frost_wolf: { name: '서리 늑대인간', sheet: 'wolfman_frost', lv: 40, hp: 1600, atk: 80, def: 29, spd: 100, scale: 1.05, aggro: true, range: 54 },
  frost_skel: { name: '얼어붙은 망자', sheet: 'skeleton_frost', lv: 43, hp: 1900, atk: 88, def: 32, spd: 85, scale: 1.05, aggro: true, range: 58 },
  ice_troll: { name: '빙하 트롤', sheet: 'troll_frost', lv: 46, hp: 2600, atk: 96, def: 36, spd: 72, scale: 1.35, aggro: true, range: 62 },
  frost_giant: { name: '서리 거인 요툰', sheet: 'troll_giant', lv: 52, hp: 48000, atk: 150, def: 46, spd: 80, scale: 2.3, aggro: true, range: 92, boss: true, skill: 'frostStomp' },
};
// recoloured copies of loaded sheets: name -> [base sheet, canvas filter]
D.SHEET_VARIANTS = {
  wolfman_frost: ['wolfman', 'hue-rotate(185deg) saturate(0.55) brightness(1.45)'],
  skeleton_frost: ['skeleton', 'sepia(0.4) hue-rotate(160deg) saturate(2.2) brightness(1.05)'],
  troll_frost: ['troll', 'hue-rotate(150deg) saturate(1.4) brightness(1.1)'],
  troll_giant: ['troll', 'hue-rotate(175deg) saturate(1.9) brightness(1.3) contrast(1.1)'],
};
for (const k in D.MONSTERS) {
  const m = D.MONSTERS[k];
  m.id = k;
  m.exp = Math.round(10 * Math.pow(m.lv, 1.5) * (m.boss ? 12 : 1));
  m.gold = [Math.round(m.lv * 3 * (m.boss ? 20 : 1)), Math.round(m.lv * 7 * (m.boss ? 30 : 1))];
}

D.expToNext = (lv) => Math.round(80 * Math.pow(lv, 1.8) + 20);
D.MAX_LV = 60;

// ---------------- zones ----------------
// Evaluated in order; the first match wins.
D.ZONES = [
  { id: 'town', name: '라스카노 마을', safe: true, test: (tx, ty) => Math.abs(tx - 90) <= 15 && Math.abs(ty - 90) <= 15 },
  { id: 'dungeon', name: '이클립스 균열', dungeon: true, test: (tx, ty) => tx >= 148 && tx <= 177 && ty >= 4 && ty <= 32 },
  { id: 'snow', name: '서리 설원', test: (tx, ty) => tx < 52 && ty < 58 },
  { id: 'field', name: '바람의 초원', test: (tx, ty) => ty < 75 && tx >= 50 && tx <= 130 },
  { id: 'grave', name: '망자의 묘지', test: (tx, ty) => tx > 105 },
  { id: 'orc', name: '오크 요새', test: (tx, ty) => ty > 105 },
  { id: 'forest', name: '고요한 숲', test: () => true },
];

// spawn areas (tile coords)
D.SPAWNS = [
  { m: 'goblin', x: 90, y: 64, r: 10, n: 14 },
  { m: 'goblin', x: 68, y: 72, r: 6, n: 6 },
  { m: 'wolfman', x: 88, y: 44, r: 11, n: 14 },
  { m: 'wolfman', x: 60, y: 92, r: 8, n: 8 },
  { m: 'boarman', x: 95, y: 20, r: 12, n: 14 },
  { m: 'boarman', x: 38, y: 70, r: 10, n: 8 },
  { m: 'zombie', x: 124, y: 88, r: 9, n: 14 },
  { m: 'skeleton', x: 145, y: 80, r: 11, n: 16 },
  { m: 'vampire', x: 165, y: 86, r: 3, n: 1, respawn: 180 },
  { m: 'orc', x: 88, y: 124, r: 10, n: 14 },
  { m: 'lizardman', x: 62, y: 140, r: 10, n: 12 },
  { m: 'troll', x: 100, y: 150, r: 11, n: 12 },
  { m: 'minotaur', x: 90, y: 168, r: 3, n: 1, respawn: 300 },
  { m: 'frost_wolf', x: 40, y: 48, r: 8, n: 14 },
  { m: 'frost_skel', x: 16, y: 22, r: 8, n: 14 },
  { m: 'ice_troll', x: 40, y: 18, r: 8, n: 12 },
  { m: 'frost_giant', x: 22, y: 8, r: 3, n: 1, respawn: 420 },
];

// teleport destinations (tile coords)
D.TELEPORTS = [
  { name: '라스카노 마을', x: 90, y: 93, cost: 0, lv: '안전' },
  { name: '바람의 초원 (고블린)', x: 90, y: 70, cost: 100, lv: 'Lv.1~' },
  { name: '바람의 초원 (늑대인간)', x: 88, y: 50, cost: 200, lv: 'Lv.5~' },
  { name: '바람의 초원 북부 (멧돼지)', x: 95, y: 27, cost: 300, lv: 'Lv.8~' },
  { name: '망자의 묘지 입구', x: 118, y: 90, cost: 500, lv: 'Lv.12~' },
  { name: '망자의 묘지 깊은 곳', x: 140, y: 84, cost: 700, lv: 'Lv.15~' },
  { name: '오크 요새 입구', x: 90, y: 116, cost: 900, lv: 'Lv.20~' },
  { name: '리자드맨 늪지', x: 66, y: 136, cost: 1200, lv: 'Lv.25~' },
  { name: '트롤 서식지', x: 100, y: 144, cost: 1500, lv: 'Lv.30~' },
  { name: '서리 설원', x: 46, y: 54, cost: 2500, lv: 'Lv.40~' },
];

// ---------------- items ----------------
// kind: potion | scroll | ticket | weapon | armor | ring | buff
D.ITEMS = {
  hp_s: { name: '체력 회복제', icon: 'pot-red', kind: 'potion', heal: 70, price: 30, grade: 0, desc: 'HP를 70 회복합니다.' },
  hp_m: { name: '고급 체력 회복제', icon: 'pot-orange', kind: 'potion', heal: 250, price: 150, grade: 1, desc: 'HP를 250 회복합니다.' },
  hp_l: { name: '강력 체력 회복제', icon: 'pot-purple', kind: 'potion', heal: 700, price: 500, grade: 2, desc: 'HP를 700 회복합니다.' },
  mp_s: { name: '마나 회복제', icon: 'pot-blue', kind: 'potion', mana: 80, price: 80, grade: 0, desc: 'MP를 80 회복합니다.' },
  haste: { name: '속도 향상 물약', icon: 'pot-green', kind: 'buff', buff: { id: 'haste', name: '가속', atkSpd: 15, moveSpd: 20, dur: 300 }, price: 400, grade: 1, desc: '300초간 공격속도 +15%, 이동속도 +20%' },
  tp_town: { name: '마을 귀환 주문서', icon: 'scroll-town', kind: 'scroll', price: 60, grade: 0, desc: '라스카노 마을로 귀환합니다.' },
  sc_weapon: { name: '무기 마법 주문서', icon: 'scroll-weapon', kind: 'enchant', target: 'weapon', price: 3000, grade: 2, desc: '무기를 강화합니다. 안전 강화 +6, 실패 시 증발할 수 있습니다.' },
  sc_armor: { name: '갑옷 마법 주문서', icon: 'scroll-armor', kind: 'enchant', target: 'armor', price: 2000, grade: 2, desc: '갑옷을 강화합니다. 안전 강화 +4, 실패 시 증발할 수 있습니다.' },
  ticket: { name: '초월 소환권', icon: 'ticket', kind: 'ticket', price: 0, grade: 3, desc: '초월 카드를 1회 소환합니다.' },

  // weapons (cls restricts use)
  w_sword1: { name: '낡은 장검', icon: 'sword', kind: 'weapon', cls: 'knight', atk: 3, lv: 1, price: 200, grade: 0 },
  w_sword2: { name: '강철 롱소드', icon: 'sword', kind: 'weapon', cls: 'knight', atk: 11, lv: 10, price: 6000, grade: 1 },
  w_sword3: { name: '미스릴 브로드소드', icon: 'sword2', kind: 'weapon', cls: 'knight', atk: 22, lv: 20, price: 40000, grade: 2 },
  w_sword4: { name: '흑요석 대검', icon: 'sword2', kind: 'weapon', cls: 'knight', atk: 36, lv: 30, price: 0, grade: 3 },
  w_sword5: { name: '데스나이트의 불검', icon: 'sword3', kind: 'weapon', cls: 'knight', atk: 55, lv: 35, price: 0, grade: 4 },
  w_bow1: { name: '낡은 단궁', icon: 'bow', kind: 'weapon', cls: 'elf', atk: 3, lv: 1, price: 200, grade: 0 },
  w_bow2: { name: '요정족 장궁', icon: 'bow', kind: 'weapon', cls: 'elf', atk: 10, lv: 10, price: 6000, grade: 1 },
  w_bow3: { name: '미스릴 롱보우', icon: 'bow2', kind: 'weapon', cls: 'elf', atk: 21, lv: 20, price: 40000, grade: 2 },
  w_bow4: { name: '흑요석 활', icon: 'bow2', kind: 'weapon', cls: 'elf', atk: 34, lv: 30, price: 0, grade: 3 },
  w_bow5: { name: '사이하의 활', icon: 'bow3', kind: 'weapon', cls: 'elf', atk: 52, lv: 35, price: 0, grade: 4 },
  w_staff1: { name: '견습생의 지팡이', icon: 'staff', kind: 'weapon', cls: 'mage', atk: 3, lv: 1, price: 200, grade: 0 },
  w_staff2: { name: '마나의 지팡이', icon: 'staff', kind: 'weapon', cls: 'mage', atk: 12, lv: 10, price: 6000, grade: 1 },
  w_staff3: { name: '수정 지팡이', icon: 'staff2', kind: 'weapon', cls: 'mage', atk: 23, lv: 20, price: 40000, grade: 2 },
  w_staff4: { name: '고대림의 마법구', icon: 'staff2', kind: 'weapon', cls: 'mage', atk: 37, lv: 30, price: 0, grade: 3 },
  w_staff5: { name: '바포메트의 지팡이', icon: 'staff3', kind: 'weapon', cls: 'mage', atk: 56, lv: 35, price: 0, grade: 4 },

  a_1: { name: '가죽 갑옷', icon: 'armor1', kind: 'armor', def: 2, hp: 10, lv: 1, price: 300, grade: 0 },
  a_2: { name: '사슬 갑옷', icon: 'armor2', kind: 'armor', def: 6, hp: 40, lv: 10, price: 7000, grade: 1 },
  a_3: { name: '판금 갑옷', icon: 'armor3', kind: 'armor', def: 11, hp: 90, lv: 20, price: 45000, grade: 2 },
  a_4: { name: '용 비늘 갑옷', icon: 'armor4', kind: 'armor', def: 19, hp: 180, lv: 30, price: 0, grade: 3 },

  r_1: { name: '힘의 반지', icon: 'ring1', kind: 'ring', atk: 4, lv: 5, price: 5000, grade: 1 },
  r_2: { name: '체력의 반지', icon: 'ring2', kind: 'ring', hp: 120, def: 2, lv: 15, price: 20000, grade: 2 },
  r_3: { name: '순발의 목걸이', icon: 'ring3', kind: 'ring', atkSpd: 10, atk: 6, lv: 25, price: 0, grade: 3 },
};
for (const k in D.ITEMS) D.ITEMS[k].id = k;
// same-tier weapon for another class, e.g. forClass('w_bow2', 'knight') -> 'w_sword2'
D.forClass = (id, cls) => {
  const it = D.ITEMS[id];
  if (it.kind !== 'weapon' || it.cls === cls) return id;
  const alt = id.replace(/^w_(sword|bow|staff)/, 'w_' + { knight: 'sword', elf: 'bow', mage: 'staff' }[cls]);
  return D.ITEMS[alt] ? alt : id;
};
D.isEquip = (it) => it.kind === 'weapon' || it.kind === 'armor' || it.kind === 'ring';
D.SAFE_ENCHANT = { weapon: 6, armor: 4 };
D.enchantRate = (cur) => [0.5, 0.4, 0.33, 0.25, 0.18, 0.12, 0.08, 0.05, 0.03][Math.max(0, cur - 6)] || 0.02;

// drop tables: [itemId, chance]
D.DROPS = {
  common: [['hp_s', 0.18], ['mp_s', 0.06], ['tp_town', 0.02]],
  goblin: [['w_sword1', 0.01], ['w_bow1', 0.01], ['w_staff1', 0.01], ['a_1', 0.01]],
  wolfman: [['r_1', 0.004], ['sc_armor', 0.003]],
  boarman: [['hp_m', 0.05], ['sc_armor', 0.005], ['sc_weapon', 0.003]],
  zombie: [['hp_m', 0.08], ['w_sword2', 0.004], ['w_bow2', 0.004], ['w_staff2', 0.004], ['sc_weapon', 0.005]],
  skeleton: [['hp_m', 0.08], ['a_2', 0.004], ['sc_weapon', 0.007], ['sc_armor', 0.007]],
  orc: [['hp_m', 0.1], ['r_2', 0.002], ['sc_weapon', 0.008], ['ticket', 0.002]],
  lizardman: [['hp_l', 0.05], ['w_sword3', 0.002], ['w_bow3', 0.002], ['w_staff3', 0.002], ['sc_armor', 0.01]],
  troll: [['hp_l', 0.08], ['a_3', 0.003], ['sc_weapon', 0.012], ['ticket', 0.004]],
  vampire: [['ticket', 1], ['sc_weapon', 0.8], ['sc_armor', 0.8], ['w_sword4', 0.2], ['w_bow4', 0.2], ['w_staff4', 0.2], ['r_3', 0.15], ['a_4', 0.15]],
  frost_wolf: [['hp_l', 0.08], ['sc_weapon', 0.012], ['sc_armor', 0.012]],
  frost_skel: [['hp_l', 0.08], ['r_3', 0.002], ['sc_weapon', 0.015], ['ticket', 0.004]],
  ice_troll: [['hp_l', 0.1], ['a_4', 0.002], ['w_sword5', 0.001], ['w_bow5', 0.001], ['w_staff5', 0.001], ['ticket', 0.006]],
  frost_giant: [['ticket', 1], ['ticket', 1], ['ticket', 1], ['sc_weapon', 1], ['sc_armor', 1], ['w_sword5', 0.3], ['w_bow5', 0.3], ['w_staff5', 0.3], ['a_4', 0.4], ['r_3', 0.4]],
  minotaur: [['ticket', 1], ['ticket', 1], ['sc_weapon', 1], ['w_sword5', 0.15], ['w_bow5', 0.15], ['w_staff5', 0.15], ['a_4', 0.3], ['r_3', 0.3]],
};

D.SHOPS = {
  general: { title: '잡화 상점', items: ['hp_s', 'hp_m', 'hp_l', 'mp_s', 'haste', 'tp_town', 'sc_weapon', 'sc_armor'] },
  weapon: { title: '무기 상점', items: ['w_sword1', 'w_sword2', 'w_sword3', 'w_bow1', 'w_bow2', 'w_bow3', 'w_staff1', 'w_staff2', 'w_staff3'] },
  armor: { title: '방어구 상점', items: ['a_1', 'a_2', 'a_3', 'r_1', 'r_2'] },
};

// ---------------- transcend (초월) cards ----------------
// style → which stats scale with grade
D.CARD_STYLE = {
  war: ['atkSpd', 'atk', 'eva'],
  cast: ['castSpd', 'def', 'dmgRed'],
  tank: ['def', 'hp', 'dmgRed'],
  swift: ['moveSpd', 'atkSpd', 'eva'],
  hybrid: ['atkSpd', 'castSpd', 'atk', 'def'],
};
D.CARD_STAT_BY_GRADE = {
  atkSpd: [6, 12, 20, 30, 42], castSpd: [6, 12, 20, 30, 42], atk: [2, 5, 10, 18, 30], def: [1, 3, 6, 10, 16],
  eva: [10, 25, 50, 90, 140], dmgRed: [1, 2, 4, 8, 12], moveSpd: [5, 9, 13, 18, 24], hp: [20, 60, 120, 220, 380],
};
D.STAT_NAMES = {
  atkSpd: ['공격 속도', '%'], castSpd: ['시전 속도', '%'], atk: ['공격력', ''], def: ['방어력', ''], eva: ['회피', ''],
  dmgRed: ['피해 감소', ''], expPct: ['획득 경험치', '%'], moveSpd: ['이동 속도', '%'], hp: ['최대 HP', ''], mp: ['최대 MP', ''], crit: ['치명타', '%'],
};
D.CARDS = [
  { id: 'c_leonic', name: '황금 기사 레오닉', sheet: 'knight_gold', grade: 4, style: 'war' },
  { id: 'c_dracul', name: '뱀파이어 군주 드라큘', sheet: 'vampire', grade: 4, style: 'hybrid' },
  { id: 'c_minos', name: '미궁의 왕 미노스', sheet: 'minotaur', grade: 4, style: 'tank' },
  { id: 'c_seranis', name: '냉철한 전술가 세라니스', sheet: 'mage', grade: 3, style: 'hybrid' },
  { id: 'c_kain', name: '암흑 기사 카인', sheet: 'knight_dark', grade: 3, style: 'war' },
  { id: 'c_elena', name: '빛의 성녀 엘레나', sheet: 'mage_white', grade: 3, style: 'cast' },
  { id: 'c_rien', name: '붉은 궁수 리엔', sheet: 'elf_red', grade: 2, style: 'swift' },
  { id: 'c_silva', name: '숲의 수호자 실바', sheet: 'elf', grade: 2, style: 'swift' },
  { id: 'c_arcane', name: '대현자 아르케인', sheet: 'npc_sage', grade: 2, style: 'cast' },
  { id: 'c_troll', name: '동굴 트롤', sheet: 'troll', grade: 2, style: 'tank' },
  { id: 'c_lizard', name: '리자드맨 투사', sheet: 'lizardman', grade: 2, style: 'war' },
  { id: 'c_guard', name: '왕실 근위병', sheet: 'npc_guard', grade: 1, style: 'tank' },
  { id: 'c_orc', name: '오크 전사', sheet: 'orc', grade: 1, style: 'war' },
  { id: 'c_skel', name: '해골 전사', sheet: 'skeleton', grade: 1, style: 'war' },
  { id: 'c_boar', name: '멧돼지 전사', sheet: 'boarman', grade: 1, style: 'tank' },
  { id: 'c_wolf', name: '늑대인간', sheet: 'wolfman', grade: 1, style: 'swift' },
  { id: 'c_goblin', name: '고블린', sheet: 'goblin', grade: 0, style: 'swift' },
  { id: 'c_zombie', name: '좀비', sheet: 'zombie', grade: 0, style: 'tank' },
  { id: 'c_trader', name: '떠돌이 상인', sheet: 'npc_merchant', grade: 0, style: 'cast' },
  { id: 'c_maid', name: '마을 처녀', sheet: 'npc_woman', grade: 0, style: 'swift' },
  { id: 'c_squire', name: '견습 기사', sheet: 'knight', grade: 0, style: 'war' },
];
D.CARD_BY_ID = {};
for (const c of D.CARDS) D.CARD_BY_ID[c.id] = c;
D.cardStats = (card, lv = 1) => {
  const out = {};
  for (const s of D.CARD_STYLE[card.style]) out[s] = Math.round(D.CARD_STAT_BY_GRADE[s][card.grade] * (1 + 0.12 * (lv - 1)));
  out.moveSpd = (out.moveSpd || 0) + [2, 4, 6, 8, 10][card.grade];
  return out;
};
D.COLLECT_BONUS = [{ hp: 5 }, { atk: 1 }, { def: 1, hp: 10 }, { atk: 2, dmgRed: 1 }, { atk: 3, def: 2, dmgRed: 2 }];
D.SUMMON_RATES = [0.60, 0.28, 0.095, 0.022, 0.003];
// PixelLab elf: LPC-layout sheet with the bow drawn into the art (tools/build_elf_px.py)
window.SPRITE_ROWS.elf_px = window.SPRITE_ROWS.elf;
D.BAKED_WEAPON = { elf_px: 'elf_nw' }; // sheet -> LPC body used to show weapon looks in menus
D.SYNTH_RATES = [0.30, 0.25, 0.20, 0.12];
D.cardGrowCost = (card, lv) => 1500 * lv * (card.grade + 1);
D.CARD_MAX_LV = 10;

// ---------------- quests ----------------
// type: talk(npc) | kill(monster,n) | level(n) | equipCard | enchant(n) | killAny(n)
D.QUESTS = [
  { title: '1. 모험의 시작', desc: '잡화 상인 노바와 대화', type: 'talk', npc: 'nova', reward: { gold: 500, items: { hp_s: 20 } } },
  { title: '2. 초원의 위협', desc: '고블린 처치', type: 'kill', m: 'goblin', n: 10, reward: { gold: 1000, dia: 100, items: { hp_s: 20, tp_town: 3, ticket: 3 } } },
  { title: '3. 늑대 사냥', desc: '늑대인간 처치', type: 'kill', m: 'wolfman', n: 15, reward: { gold: 2000, items: { sc_weapon: 2 } } },
  { title: '4. 강화의 길', desc: '무기를 +1 이상 강화', type: 'enchant', n: 1, reward: { gold: 3000, items: { sc_armor: 1 } } },
  { title: '5. 북부의 멧돼지', desc: '멧돼지 전사 처치', type: 'kill', m: 'boarman', n: 20, reward: { gold: 4000, items: { hp_m: 20, sc_armor: 2 } } },
  { title: '6. 성장하는 영웅', desc: '레벨 10 달성', type: 'level', n: 10, reward: { dia: 300, items: { ticket: 2 } } },
  { title: '7. 망자의 묘지', desc: '굶주린 좀비 처치', type: 'kill', m: 'zombie', n: 20, reward: { gold: 6000, items: { hp_m: 30 } } },
  { title: '8. 뼈의 군대', desc: '해골 전사 처치', type: 'kill', m: 'skeleton', n: 25, reward: { gold: 8000, items: { sc_weapon: 2 } } },
  { title: '9. 피의 군주', desc: '뱀파이어 군주 처치', type: 'kill', m: 'vampire', n: 1, reward: { dia: 500, items: { ticket: 5 } } },
  { title: '10. 숙련된 모험가', desc: '레벨 20 달성', type: 'level', n: 20, reward: { dia: 300, gold: 10000 } },
  { title: '11. 오크 요새 공략', desc: '오크 전사 처치', type: 'kill', m: 'orc', n: 30, reward: { gold: 12000, items: { hp_l: 20 } } },
  { title: '12. 늪지의 사냥꾼', desc: '리자드맨 처치', type: 'kill', m: 'lizardman', n: 30, reward: { gold: 15000, items: { sc_weapon: 3 } } },
  { title: '13. 뒤틀린 기운', desc: '흉포한 트롤 처치', type: 'kill', m: 'troll', n: 140, reward: { dia: 800, items: { ticket: 5 } } },
  { title: '14. 미궁의 왕', desc: '미노타우르스 킹 처치', type: 'kill', m: 'minotaur', n: 1, reward: { dia: 1500, items: { ticket: 10 } } },
  { title: '15. 서리 설원 개척', desc: '서리 늑대인간 처치', type: 'kill', m: 'frost_wolf', n: 40, reward: { gold: 30000, items: { hp_l: 30, sc_weapon: 3 } } },
  { title: '16. 얼음 무덤', desc: '얼어붙은 망자 처치', type: 'kill', m: 'frost_skel', n: 50, reward: { gold: 40000, items: { sc_armor: 4 } } },
  { title: '17. 빙하의 파수꾼', desc: '빙하 트롤 처치', type: 'kill', m: 'ice_troll', n: 60, reward: { dia: 1000, items: { ticket: 5 } } },
  { title: '18. 거인의 몰락', desc: '서리 거인 요툰 처치', type: 'kill', m: 'frost_giant', n: 1, reward: { dia: 3000, items: { ticket: 15 } } },
];
D.DAILY_QUEST = { title: '일일 토벌', desc: '아무 몬스터 처치', type: 'killAny', n: 100, reward: { dia: 100, gold: 5000 } };

// ---------------- town NPCs (tile offsets from town center) ----------------
D.NPCS = [
  { id: 'nova', name: '잡화 상인 노바', title: '잡화 상인', sheet: 'npc_merchant', dx: 9, dy: 1, dir: 1, shop: 'general', talk: '어서 오게, 모험가! 물약과 주문서는 넉넉히 챙겨두는 게 좋아.' },
  { id: 'zaid', name: '무기 상인 자이드', title: '무기 상인', sheet: 'npc_guard', dx: 10, dy: 5, dir: 1, shop: 'weapon', talk: '좋은 무기가 곧 생명이지. 둘러보게나.' },
  { id: 'levin', name: '모험 상인 레빈', title: '방어구 상인', sheet: 'npc_merchant', dx: 9, dy: -4, dir: 1, shop: 'armor', talk: '튼튼한 갑옷 없이 묘지에 가는 건 자살 행위라네.' },
  { id: 'kasim', name: '순간이동사 카심', title: '순간이동', sheet: 'npc_sage', dx: -2, dy: -6, dir: 2, teleport: true, talk: '어디로 보내줄까? 비용은 거리에 따라 다르다네.' },
  { id: 'damon', name: '초월 관리인 테이먼', title: '초월', sheet: 'npc_woman', dx: -9, dy: -3, dir: 3, transcend: true, talk: '영웅들의 영혼이 깃든 카드... 그 힘을 빌려 초월해 보세요.' },
  { id: 'guard1', name: '경비병', sheet: 'npc_guard', dx: -1.5, dy: -15.5, dir: 2, talk: '북쪽은 바람의 초원이다. 고블린부터 상대하도록.' },
  { id: 'guard2', name: '경비병', sheet: 'npc_guard', dx: 15.5, dy: -1.5, dir: 1, talk: '동쪽은 망자의 묘지... 밤이 되면 뱀파이어가 나타난다더군.' },
  { id: 'guard3', name: '경비병', sheet: 'npc_guard', dx: 1.5, dy: 15.5, dir: 2, talk: '남쪽 오크 요새는 레벨 20 이상만 가도록.' },
  { id: 'guard4', name: '경비병', sheet: 'npc_guard', dx: -15.5, dy: 1.5, dir: 3, talk: '서쪽은 고요한 숲이다. 북서쪽 끝 서리 설원에는 거인이 잠들어 있다더군.' },
];

// ---------------- other players (bots) ----------------
D.BOT_NAMES = ['데반남작', '아르네', '고래29', '순대II', '호오잇23', '태퀴나5', '제로원', '전설무기떴다', '전솔이다', 'asdasdl2345a',
  '처리러너', '콤보왕', '붉은달', '사막여우', '린드비오르', '발라카스', '파푸리온', '안타킬러', '쿠만쵸', '기란촌놈', '말하는섬',
  '오렌영웅', '흑장미', '달빛검사', 'Kaiser', '글루디오', '하이네', 'ㅇㅅㅇ', '무과금전사', '핑크요정'];
D.GUILDS = ['용맹', '붉은매', '천상', '흑기사단', '바람', '', '', ''];
D.BOT_SHEETS = [
  { sheet: 'knight', cls: 'knight' }, { sheet: 'knight_gold', cls: 'knight' }, { sheet: 'knight_dark', cls: 'knight' },
  { sheet: 'elf', cls: 'elf' }, { sheet: 'elf_red', cls: 'elf' }, { sheet: 'mage', cls: 'mage' }, { sheet: 'mage_white', cls: 'mage' },
];
D.BOT_CHAT = ['파티 구해요~ 묘지 가실분', '오크 요새 트롤 자리 있나요?', '강화 +7 떴다!!', 'ㅊㅋㅊㅋ', '미노 몇시 젠이에요?',
  '세라니스 뽑았다 ㄷㄷ', '물약 싸게 팝니다 귓주세요', '혈맹원 모집합니다 (매일 보스레이드)', '렉 왜이럼', 'ㅋㅋㅋㅋㅋ',
  '뱀파 잡으러 가실분?', '초월 11연차 망했어요ㅠㅠ', '무기 +9 증발... 접습니다', '안녕하세요~', '자동사냥 최고', '전설 카드 어떻게 뽑음?',
  '고블린 자리 비었나요', '레벨 30 달성!', '오늘 드랍 운 좋네', 'ㄱㄱ'];
