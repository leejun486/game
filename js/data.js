'use strict';
// Static game data: classes, skills, monsters, zones, items, transcend cards, quests.
const D = {};

D.TILE = 64;
D.MAP_W = 180;
D.MAP_H = 180;
D.DUNGEON_RECT = { x0: 148, y0: 4, x1: 177, y1: 32 };
D.DUNGEON_CENTER = { x: 162.5, y: 18 };
D.TOWN = { x: 90 * 64, y: 90 * 64, r: 15 * 64 };
// 아스텔라 성 (공성전, js/siege.js): outer wall rect, the gate gap in its south wall, the inner keep and its tower
D.CASTLE = { x0: 114, y0: 6, x1: 142, y1: 30, gate: [127, 129], keep: { x0: 121, y0: 9, x1: 135, y1: 18 }, tower: { x: 128, y: 13 } };

D.GRADES = [
  { name: '일반', cls: 'g0', color: '#b8b8b8' },
  { name: '고급', cls: 'g1', color: '#54c45e' },
  { name: '희귀', cls: 'g2', color: '#3f8cff' },
  { name: '영웅', cls: 'g3', color: '#e8423a' },
  { name: '전설', cls: 'g4', color: '#f3b53a' },
  { name: '신화', cls: 'g5', color: '#d77bff' }, // only from 어둠의 군주 녹스 (6장)
];

// ---------------- classes & skills ----------------
D.CLASSES = {
  knight: {
    name: '기사', sheet: 'knight', desc: '강인한 체력과 근접 전투의 달인.\n높은 방어력으로 전장을 지배한다.',
    base: { hp: 190, mp: 40, atk: 14, def: 6 }, grow: { hp: 24, mp: 3, atk: 2.3, def: 0.9 },
    range: 62, attack: 'slash', atkDelay: 0.95, weapon: 'sword', cleave: { r: 90, n: 3, mult: 0.3 },
    skills: ['k_smash', 'k_whirl', 'k_rage', 'k_doom', 'k_charge', 'k_quake', 'k_aura', 'k_judge', 'k_avatar'],
  },
  elf: {
    name: '요정', sheet: 'elf', desc: '숲의 축복을 받은 궁수.\n먼 거리에서 적을 꿰뚫는다.',
    base: { hp: 135, mp: 80, atk: 12, def: 3 }, grow: { hp: 15, mp: 6, atk: 2.1, def: 0.5 },
    range: 330, attack: 'shoot', atkDelay: 1.0, weapon: 'bow', projectile: 'arrow', volley: { r: 260, n: 3, mult: 0.5 },
    skills: ['e_triple', 'e_rain', 'e_wind', 'e_energy', 'e_frost', 'e_storm', 'e_phoenix', 'e_starfall', 'e_spirit'],
  },
  mage: {
    name: '마법사', sheet: 'mage', desc: '원소를 다루는 현자.\n강력한 광역 마법으로 적을 쓸어버린다.',
    base: { hp: 115, mp: 140, atk: 15, def: 2 }, grow: { hp: 11, mp: 11, atk: 2.5, def: 0.4 },
    range: 300, attack: 'thrust', atkDelay: 1.05, weapon: 'staff', projectile: 'bolt',
    skills: ['m_fire', 'm_ice', 'm_heal', 'm_meteor', 'm_chain', 'm_blizzard', 'm_thunder', 'm_inferno', 'm_eclipse'],
  },
};

// type: single | aoe_self | aoe_target | buff | heal | multi | pierce
D.SKILLS = {
  k_smash: { name: '강타', icon: 'sk_k_smash', mp: 6, cd: 3, mult: 2.3, type: 'single', anim: 'slash', desc: '대상에게 230% 피해, 주변 110 범위에 충격파 (80%)' },
  k_whirl: { name: '회오리 베기', icon: 'sk_k_whirl', mp: 12, cd: 4, mult: 1.5, type: 'aoe_self', radius: 200, anim: 'slash', desc: '주변 모든 적에게 150% 피해' },
  k_rage: { name: '버서커', icon: 'sk_k_rage', mp: 20, cd: 40, type: 'buff', buff: { id: 'rage', name: '버서커', atkPct: 35, atkSpd: 20, dur: 20 }, anim: 'slash', desc: '20초간 공격력 +35%, 공격속도 +20%' },
  k_doom: { name: '파멸의 일격', icon: 'sk_k_doom', mp: 25, cd: 14, mult: 5.0, type: 'single', anim: 'slash', fx: 'doom', desc: '대상에게 공격력의 500% 치명적 피해' },

  e_triple: { name: '트리플 애로우', icon: 'sk_e_triple', mp: 8, cd: 3, mult: 1.1, type: 'multi', count: 4, anim: 'shoot', desc: '화살 4발을 주변 적들에게 나눠 발사 (각 110%)' },
  e_rain: { name: '화살비', icon: 'sk_e_rain', mp: 14, cd: 4, mult: 2.0, type: 'aoe_target', radius: 190, anim: 'shoot', fx: 'rain', desc: '대상 주변에 화살비 (200% 광역)' },
  e_wind: { name: '윈드 샷', icon: 'sk_e_wind', mp: 20, cd: 40, type: 'buff', buff: { id: 'wind', name: '윈드 샷', atkSpd: 40, moveSpd: 15, dur: 20 }, anim: 'shoot', desc: '20초간 공격속도 +40%, 이동속도 +15%' },
  e_energy: { name: '에너지 볼트', icon: 'sk_e_energy', mp: 26, cd: 12, mult: 4.2, type: 'pierce', anim: 'shoot', desc: '관통하는 거대한 화살 (420%)' },

  m_fire: { name: '파이어 볼', icon: 'sk_m_fire', mp: 10, cd: 2.5, mult: 1.6, type: 'aoe_target', radius: 90, el: 'fire', anim: 'thrust', fx: 'fire', desc: '폭발하는 화염구 (160% 광역)' },
  m_ice: { name: '아이스 스피어', icon: 'sk_m_ice', mp: 16, cd: 6, mult: 2.3, type: 'single', el: 'ice', anim: 'thrust', fx: 'ice', slow: 3, desc: '230% 피해 + 3초간 둔화' },
  m_heal: { name: '힐', icon: 'sk_m_heal', mp: 22, cd: 10, type: 'heal', pct: 0.35, anim: 'thrust', desc: '최대 HP의 35% 회복' },
  k_charge: { name: '돌진 베기', icon: 'sk_k_charge', mp: 18, cd: 8, mult: 1.8, type: 'single', range: 360, anim: 'slash', unlock: 15, desc: '대상에게 돌진하여 180% 피해, 지나는 길의 적도 벤다' },
  k_quake: { name: '대지 분쇄', icon: 'sk_k_quake', mp: 26, cd: 8, mult: 2.4, type: 'aoe_self', radius: 260, anim: 'slash', unlock: 20, desc: '땅을 내리쳐 주변 적에게 240% 피해 + 2초 둔화' },
  e_frost: { name: '빙결 화살', icon: 'sk_e_frost', mp: 16, cd: 6, mult: 2.0, type: 'single', el: 'ice', anim: 'shoot', unlock: 15, desc: '200% 피해 + 3초간 둔화' },
  e_storm: { name: '폭풍의 화살', icon: 'sk_e_storm', mp: 28, cd: 8, mult: 1.0, type: 'aoe_self', radius: 350, count: 14, anim: 'shoot', unlock: 20, desc: '주변 적들에게 화살 14발을 난사 (각 100%)' },
  m_chain: { name: '체인 라이트닝', icon: 'sk_m_chain', mp: 20, cd: 5, mult: 1.45, type: 'single', el: 'lightning', anim: 'thrust', unlock: 15, desc: '145% 번개가 주변 적 3명에게 연쇄 (연쇄마다 20% 감소)' },
  m_blizzard: { name: '블리자드', icon: 'sk_m_blizzard', mp: 38, cd: 14, mult: 0.38, type: 'aoe_target', radius: 170, el: 'ice', anim: 'thrust', unlock: 30, desc: '4초간 눈보라 지대 생성 (0.5초마다 38% + 둔화)' },
  // 영웅 (grade 3) / 전설 (grade 4) skills: learned from a skill book (book: true) once the level is reached; keys Z X F
  k_aura: { name: '검기 폭풍', icon: 'sk_k_aura', mp: 30, cd: 10, mult: 1.6, type: 'aoe_self', radius: 300, anim: 'slash', unlock: 35, grade: 3, book: true, desc: '주변 300 범위에 검기를 두 번 휘몰아침 (각 160%)' },
  k_judge: { name: '천벌의 일격', icon: 'sk_k_judge', mp: 45, cd: 18, mult: 4.5, type: 'single', range: 420, anim: 'slash', unlock: 50, grade: 4, book: true, desc: '대상에게 도약해 천벌을 내림: 260 범위 450% 피해 + 2초 기절' },
  k_avatar: { name: '전쟁의 화신', icon: 'sk_k_avatar', mp: 50, cd: 60, mult: 2.0, type: 'buff', radius: 240, buff: { id: 'avatar', name: '전쟁의 화신', icon: 'sk_k_avatar', atkPct: 40, atkSpd: 25, dmgRed: 15, dur: 15 }, anim: 'slash', unlock: 65, grade: 4, book: true, desc: '15초간 공격력 +40%, 공격 속도 +25%, 받는 피해 -15. 발동 시 주변 240 범위 200% 충격파' },
  e_phoenix: { name: '불사조 화살', icon: 'sk_e_phoenix', mp: 30, cd: 9, mult: 3.0, type: 'pierce', anim: 'shoot', unlock: 35, grade: 3, book: true, desc: '불사조가 일직선으로 날아가 경로의 모든 적에게 300% 화염 피해, 지나간 길이 3초간 불탐' },
  e_starfall: { name: '별의 비', icon: 'sk_e_starfall', mp: 45, cd: 16, mult: 1.7, type: 'aoe_target', radius: 240, anim: 'shoot', unlock: 50, grade: 4, book: true, desc: '대상 지역에 별빛 화살이 세 번 쏟아짐 (각 170%, 둔화)' },
  e_spirit: { name: '정령왕의 축복', icon: 'sk_e_spirit', mp: 50, cd: 60, mult: 1.4, type: 'buff', buff: { id: 'spirit', name: '정령왕의 축복', icon: 'sk_e_spirit', atkSpd: 40, crit: 20, moveSpd: 20, dur: 15 }, anim: 'shoot', unlock: 65, grade: 4, book: true, desc: '15초간 공격 속도 +40%, 치명타 +20%, 이동 속도 +20%. 발동 시 정령 화살 12발 (각 140%)' },
  m_thunder: { name: '천둥 폭풍', icon: 'sk_m_thunder', mp: 34, cd: 10, mult: 1.8, type: 'aoe_target', radius: 320, el: 'lightning', anim: 'thrust', unlock: 35, grade: 3, book: true, desc: '대상 주변 적들에게 낙뢰 8번 (각 180%)' },
  m_inferno: { name: '지옥의 업화', icon: 'sk_m_inferno', mp: 55, cd: 18, mult: 4.0, type: 'aoe_target', radius: 280, el: 'fire', anim: 'thrust', unlock: 50, grade: 4, book: true, desc: '대상 지역이 업화로 폭발 (400%), 5초간 불바다 (틱당 30%)' },
  m_eclipse: { name: '이클립스', icon: 'sk_m_eclipse', mp: 70, cd: 24, mult: 5.5, type: 'aoe_target', radius: 320, el: 'arcane', anim: 'thrust', unlock: 65, grade: 4, book: true, desc: '검은 태양을 불러 주변 적을 끌어당긴 뒤 붕괴시킴 (550%)' },
  m_meteor: { name: '메테오 스트라이크', icon: 'sk_m_meteor', mp: 40, cd: 16, mult: 3.2, type: 'aoe_target', radius: 190, el: 'fire', anim: 'thrust', fx: 'meteor', desc: '거대한 운석 낙하 (320% 광역)' },
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
  // 화염의 용암지대 (Lv.55+): fire-tinted variants
  flame_orc: { name: '화염 오크 광전사', sheet: 'orc_flame', lv: 55, hp: 3400, atk: 96, def: 44, spd: 88, scale: 1.1, aggro: true, range: 58 },
  magma_lizard: { name: '마그마 리자드맨', sheet: 'lizardman_magma', lv: 58, hp: 3900, atk: 102, def: 47, spd: 92, scale: 1.1, aggro: true, range: 58 },
  hell_wolf: { name: '지옥 늑대인간', sheet: 'wolfman_hell', lv: 61, hp: 4300, atk: 110, def: 50, spd: 108, scale: 1.1, aggro: true, range: 56 },
  lava_troll: { name: '용암 트롤', sheet: 'troll_lava', lv: 64, hp: 5600, atk: 120, def: 55, spd: 74, scale: 1.45, aggro: true, range: 64 },
  // 녹스의 성채 (Lv.70+, 6장): shadow-tinted variants
  shadow_knight: { name: '그림자 기사', sheet: 'skeleton_void', lv: 70, hp: 6400, atk: 128, def: 60, spd: 90, scale: 1.15, aggro: true, range: 60 },
  nox_hound: { name: '녹스의 사냥개', sheet: 'wolfman_void', lv: 72, hp: 6800, atk: 134, def: 62, spd: 112, scale: 1.15, aggro: true, range: 56 },
  hollow: { name: '공허에 삼켜진 자', sheet: 'zombie_void', lv: 74, hp: 7600, atk: 140, def: 66, spd: 64, scale: 1.2, aggro: true, range: 56 },
  abyss_troll: { name: '심연의 거신', sheet: 'troll_void', lv: 77, hp: 9400, atk: 150, def: 72, spd: 76, scale: 1.55, aggro: true, range: 66 },
  nox_apostle: { name: '녹스의 사도', sheet: 'vampire_void', lv: 76, hp: 190000, atk: 250, def: 70, spd: 96, scale: 1.9, aggro: true, range: 80, boss: true, skill: 'voidNova' },
  nox: { name: '어둠의 군주 녹스', sheet: 'knight_nox', lv: 80, hp: 420000, atk: 290, def: 80, spd: 90, scale: 2.7, aggro: true, range: 100, boss: true, skill: 'nox' },
  ignis: { name: '화염 군주 이그니스', sheet: 'minotaur_ignis', lv: 70, hp: 110000, atk: 230, def: 64, spd: 86, scale: 2.4, aggro: true, range: 96, boss: true, skill: 'fireStomp' },
};
// hunting pace: heroes hit a little softer and normal monsters carry more HP, most of it at low levels
// where fights were over in two or three swings (bosses keep their HP)
D.HERO_DMG = 0.85;
D.MON_HP_MUL = (lv) => Math.max(1, 1.6 - lv * 0.018);
for (const m of Object.values(D.MONSTERS)) if (!m.boss) m.hp = Math.round(m.hp * D.MON_HP_MUL(m.lv));
// recoloured copies of loaded sheets: name -> [base sheet, canvas filter]
D.SHEET_VARIANTS = {
  wolfman_frost: ['wolfman', 'hue-rotate(185deg) saturate(0.55) brightness(1.45)'],
  skeleton_frost: ['skeleton', 'sepia(0.4) hue-rotate(160deg) saturate(2.2) brightness(1.05)'],
  troll_frost: ['troll', 'hue-rotate(150deg) saturate(1.4) brightness(1.1)'],
  troll_giant: ['troll', 'hue-rotate(175deg) saturate(1.9) brightness(1.3) contrast(1.1)'],
  orc_flame: ['orc', 'sepia(0.6) hue-rotate(-30deg) saturate(3) brightness(0.95)'],
  lizardman_magma: ['lizardman', 'sepia(0.8) hue-rotate(-25deg) saturate(3.2) brightness(0.9) contrast(1.15)'],
  wolfman_hell: ['wolfman', 'sepia(1) hue-rotate(-40deg) saturate(4) brightness(0.8) contrast(1.3)'],
  troll_lava: ['troll', 'sepia(0.7) hue-rotate(-20deg) saturate(2.6) brightness(0.85) contrast(1.2)'],
  skeleton_void: ['skeleton', 'grayscale(1) brightness(0.55) sepia(1) hue-rotate(225deg) saturate(3) contrast(1.3)'],
  wolfman_void: ['wolfman', 'grayscale(1) brightness(0.5) sepia(1) hue-rotate(235deg) saturate(4) contrast(1.4)'],
  zombie_void: ['zombie', 'hue-rotate(200deg) saturate(1.6) brightness(0.7) contrast(1.2)'],
  troll_void: ['troll', 'grayscale(0.6) sepia(0.9) hue-rotate(220deg) saturate(3) brightness(0.7) contrast(1.25)'],
  vampire_void: ['vampire', 'grayscale(1) sepia(1) hue-rotate(230deg) saturate(4) brightness(0.75) contrast(1.4)'],
  knight_nox: ['knight_dark', 'grayscale(1) brightness(0.4) sepia(1) hue-rotate(225deg) saturate(3) contrast(1.8)'],
  knight_nox2: ['knight_dark', 'grayscale(1) brightness(0.5) sepia(1) hue-rotate(245deg) saturate(5) contrast(2)'], // 녹스 2페이즈
  minotaur_ignis: ['minotaur', 'sepia(0.9) hue-rotate(-35deg) saturate(3.5) brightness(1.05) contrast(1.2)'],
};
for (const k in D.MONSTERS) {
  const m = D.MONSTERS[k];
  m.id = k;
  m.exp = Math.round(10 * Math.pow(m.lv, 1.5) * (m.boss ? 12 : 1));
  m.gold = [Math.round(m.lv * 3 * (m.boss ? 20 : 1)), Math.round(m.lv * 7 * (m.boss ? 30 : 1))];
}

D.expToNext = (lv) => Math.round(80 * Math.pow(lv, 1.8) + 20);
D.MAX_LV = 80;

// ---------------- zones ----------------
// Evaluated in order; the first match wins.
D.ZONES = [
  { id: 'town', name: '라스카노 마을', safe: true, test: (tx, ty) => Math.abs(tx - 90) <= 15 && Math.abs(ty - 90) <= 15 },
  { id: 'dungeon', name: '이클립스 균열', dungeon: true, test: (tx, ty) => tx >= 148 && tx <= 177 && ty >= 4 && ty <= 32 },
  { id: 'castle', name: '아스텔라 성', test: (tx, ty) => tx >= 111 && tx <= 145 && ty >= 3 && ty <= 40 },
  { id: 'snow', name: '서리 설원', test: (tx, ty) => tx < 52 && ty < 58 },
  { id: 'field', name: '바람의 초원', test: (tx, ty) => ty < 75 && tx >= 50 && tx <= 130 },
  { id: 'volcano', name: '화염의 용암지대', test: (tx, ty) => tx >= 128 && ty >= 118 },
  { id: 'void', name: '녹스의 성채', test: (tx, ty) => tx < 50 && ty >= 120 },
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
  { m: 'flame_orc', x: 147, y: 131, r: 8, n: 14 },
  { m: 'magma_lizard', x: 170, y: 128, r: 7, n: 14 },
  { m: 'hell_wolf', x: 142, y: 152, r: 8, n: 14 },
  { m: 'lava_troll', x: 160, y: 146, r: 7, n: 12 },
  { m: 'ignis', x: 164, y: 168, r: 3, n: 1, respawn: 480 },
  { m: 'shadow_knight', x: 40, y: 132, r: 7, n: 14 },
  { m: 'nox_hound', x: 16, y: 136, r: 7, n: 14 },
  { m: 'hollow', x: 34, y: 152, r: 6, n: 12 },
  { m: 'abyss_troll', x: 12, y: 156, r: 6, n: 12 },
  { m: 'nox_apostle', x: 44, y: 160, r: 2, n: 1, respawn: 540 },
  { m: 'nox', x: 16, y: 170, r: 2, n: 1, respawn: 900 },
];
// dense fields for area hunting: every normal spawn carries about twice the monsters over a slightly
// wider patch (bosses untouched); respawns come back quicker too (Game.scheduleRespawn)
D.SPAWN_DENSITY = 3.4;
for (const s of D.SPAWNS) if (!D.MONSTERS[s.m].boss) { s.n = Math.round(s.n * D.SPAWN_DENSITY); s.r = Math.round(s.r * 1.15); }

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
  { name: '화염의 용암지대', x: 134, y: 122, cost: 4000, lv: 'Lv.55~' },
  { name: '아스텔라 성 (공성전)', x: 128, y: 37, cost: 1500, lv: '혈맹' },
  { name: '녹스의 성채', x: 45, y: 125, cost: 6000, lv: 'Lv.70~' },
];

// ---------------- items ----------------
// kind: potion | scroll | ticket | weapon | armor | ring | buff
D.ITEMS = {
  hp_s: { name: '체력 회복제', icon: 'pot-red', kind: 'potion', heal: 70, price: 30, grade: 0, desc: 'HP를 70 회복합니다.' },
  hp_m: { name: '고급 체력 회복제', icon: 'pot-orange', kind: 'potion', heal: 250, price: 150, grade: 1, desc: 'HP를 250 회복합니다.' },
  hp_l: { name: '강력 체력 회복제', icon: 'pot-purple', kind: 'potion', heal: 700, price: 500, grade: 2, desc: 'HP를 700 회복합니다.' },
  mp_s: { name: '마나 회복제', icon: 'pot-blue', kind: 'potion', mana: 80, price: 80, grade: 0, desc: 'MP를 80 회복합니다.' },
  // buff potions: 5 minutes each; drinking the same potion again refreshes its timer, different potions stack
  haste: { name: '초록 물약', icon: 'pot-green', kind: 'buff', buff: { id: 'haste', name: '초록 물약', icon: 'pot-green', atkSpd: 25, dur: 300 }, price: 400, grade: 1, desc: '5분간 공격 속도 +25%' },
  pot_blue: { name: '파란 물약', icon: 'pot-mana', kind: 'buff', buff: { id: 'blue', name: '파란 물약', icon: 'pot-mana', mpRegen: 200, castSpd: 10, dur: 300 }, price: 400, grade: 1, desc: '5분간 MP 회복 속도 +200%, 시전 속도 +10%' },
  pot_brave: { name: '용기의 물약', icon: 'pot-brave', kind: 'buff', buff: { id: 'brave', name: '용기의 물약', icon: 'pot-brave', atkPct: 12, dur: 300 }, price: 900, grade: 2, desc: '5분간 공격력 +12%' },
  pot_wise: { name: '집중의 물약', icon: 'pot-wise', kind: 'buff', buff: { id: 'wise', name: '집중의 물약', icon: 'pot-wise', crit: 8, dur: 300 }, price: 900, grade: 2, desc: '5분간 치명타 +8%' },
  pot_iron: { name: '철벽의 물약', icon: 'pot-iron', kind: 'buff', buff: { id: 'iron', name: '철벽의 물약', icon: 'pot-iron', def: 20, dmgRed: 5, dur: 300 }, price: 900, grade: 2, desc: '5분간 방어력 +20, 받는 피해 -5' },
  pot_life: { name: '생명의 물약', icon: 'pot-life', kind: 'buff', buff: { id: 'life', name: '생명의 물약', icon: 'pot-life', hpPct: 15, dur: 300 }, price: 900, grade: 2, desc: '5분간 최대 HP +15%' },
  pot_wind: { name: '바람의 물약', icon: 'pot-wind', kind: 'buff', buff: { id: 'windpot', name: '바람의 물약', icon: 'pot-wind', moveSpd: 25, dur: 300 }, price: 400, grade: 1, desc: '5분간 이동 속도 +25%' },
  pot_exp: { name: '경험의 물약', icon: 'pot-exp', kind: 'buff', buff: { id: 'exp', name: '경험의 물약', icon: 'pot-exp', expPct: 20, dur: 300 }, price: 2000, grade: 2, desc: '5분간 획득 경험치 +20%' },
  tp_town: { name: '마을 귀환 주문서', icon: 'scroll-town', kind: 'scroll', price: 60, grade: 0, desc: '라스카노 마을로 귀환합니다.' },
  sc_weapon: { name: '무기 마법 주문서', icon: 'scroll-weapon', kind: 'enchant', target: 'weapon', price: 3000, grade: 2, desc: '무기를 강화합니다. 안전 강화 +6, 실패 시 증발할 수 있습니다.' },
  sc_armor: { name: '갑옷 마법 주문서', icon: 'scroll-armor', kind: 'enchant', target: 'armor', price: 2000, grade: 2, desc: '갑옷을 강화합니다. 안전 강화 +4, 실패 시 증발할 수 있습니다.' },
  ticket: { name: '초월 소환권', icon: 'ticket', kind: 'ticket', price: 0, grade: 3, desc: '초월 카드를 1회 소환합니다.' },

  // weapons (cls restricts use)
  w_sword1: { name: '낡은 장검', icon: 'w_sword1', kind: 'weapon', cls: 'knight', atk: 3, lv: 1, price: 200, grade: 0 },
  w_sword2: { name: '강철 롱소드', icon: 'w_sword2', kind: 'weapon', cls: 'knight', atk: 11, lv: 10, price: 6000, grade: 1 },
  w_sword3: { name: '미스릴 브로드소드', icon: 'w_sword3', kind: 'weapon', cls: 'knight', atk: 22, lv: 20, price: 40000, grade: 2 },
  w_sword4: { name: '흑요석 대검', icon: 'w_sword4', kind: 'weapon', cls: 'knight', atk: 36, lv: 30, price: 0, grade: 3 },
  w_sword5: { name: '데스나이트의 불검', icon: 'w_sword5', kind: 'weapon', cls: 'knight', atk: 55, lv: 35, price: 0, grade: 4 },
  w_bow1: { name: '낡은 단궁', icon: 'w_bow1', kind: 'weapon', cls: 'elf', atk: 3, lv: 1, price: 200, grade: 0 },
  w_bow2: { name: '요정족 장궁', icon: 'w_bow2', kind: 'weapon', cls: 'elf', atk: 10, lv: 10, price: 6000, grade: 1 },
  w_bow3: { name: '미스릴 롱보우', icon: 'w_bow3', kind: 'weapon', cls: 'elf', atk: 21, lv: 20, price: 40000, grade: 2 },
  w_bow4: { name: '흑요석 활', icon: 'w_bow4', kind: 'weapon', cls: 'elf', atk: 34, lv: 30, price: 0, grade: 3 },
  w_bow5: { name: '사이하의 활', icon: 'w_bow5', kind: 'weapon', cls: 'elf', atk: 52, lv: 35, price: 0, grade: 4 },
  w_staff1: { name: '견습생의 지팡이', icon: 'w_staff1', kind: 'weapon', cls: 'mage', atk: 3, lv: 1, price: 200, grade: 0 },
  w_staff2: { name: '마나의 지팡이', icon: 'w_staff2', kind: 'weapon', cls: 'mage', atk: 12, lv: 10, price: 6000, grade: 1 },
  w_staff3: { name: '수정 지팡이', icon: 'w_staff3', kind: 'weapon', cls: 'mage', atk: 23, lv: 20, price: 40000, grade: 2 },
  w_staff4: { name: '고대림의 마법구', icon: 'w_staff4', kind: 'weapon', cls: 'mage', atk: 37, lv: 30, price: 0, grade: 3 },
  w_staff5: { name: '바포메트의 지팡이', icon: 'w_staff5', kind: 'weapon', cls: 'mage', atk: 56, lv: 35, price: 0, grade: 4 },
  w_sword6: { name: '이그니스의 멸화검', icon: 'w_sword6', kind: 'weapon', cls: 'knight', atk: 84, lv: 55, price: 0, grade: 4 },
  w_bow6: { name: '용암심장 장궁', icon: 'w_bow6', kind: 'weapon', cls: 'elf', atk: 80, lv: 55, price: 0, grade: 4 },
  w_staff6: { name: '화염 군주의 홀', icon: 'w_staff6', kind: 'weapon', cls: 'mage', atk: 86, lv: 55, price: 0, grade: 4 },
  // ---- equipment sets: a set's weapon + armor worn together unlock its set bonus (D.SETS)
  // 희귀: 은빛 기사단 (Lv.22), 폭풍 추적자 (Lv.27)
  w_sword_r1: { name: '은빛 기사단 장검', icon: 'w_sword_r1', kind: 'weapon', cls: 'knight', atk: 26, lv: 22, price: 0, grade: 2, set: 'silver' },
  w_bow_r1: { name: '은빛 기사단 장궁', icon: 'w_bow_r1', kind: 'weapon', cls: 'elf', atk: 25, lv: 22, price: 0, grade: 2, set: 'silver' },
  w_staff_r1: { name: '은빛 기사단 지팡이', icon: 'w_staff_r1', kind: 'weapon', cls: 'mage', atk: 27, lv: 22, price: 0, grade: 2, set: 'silver' },
  w_sword_r2: { name: '폭풍 추적자의 검', icon: 'w_sword_r2', kind: 'weapon', cls: 'knight', atk: 30, lv: 27, price: 0, grade: 2, set: 'storm' },
  w_bow_r2: { name: '폭풍 추적자의 활', icon: 'w_bow_r2', kind: 'weapon', cls: 'elf', atk: 29, lv: 27, price: 0, grade: 2, set: 'storm' },
  w_staff_r2: { name: '폭풍 추적자의 지팡이', icon: 'w_staff_r2', kind: 'weapon', cls: 'mage', atk: 31, lv: 27, price: 0, grade: 2, set: 'storm' },
  // 영웅: 핏빛 군단 (Lv.36), 심연의 파수꾼 (Lv.44)
  w_sword_h1: { name: '핏빛 군단 대검', icon: 'w_sword_h1', kind: 'weapon', cls: 'knight', atk: 42, lv: 36, price: 0, grade: 3, set: 'blood' },
  w_bow_h1: { name: '핏빛 군단 장궁', icon: 'w_bow_h1', kind: 'weapon', cls: 'elf', atk: 40, lv: 36, price: 0, grade: 3, set: 'blood' },
  w_staff_h1: { name: '핏빛 군단 마력봉', icon: 'w_staff_h1', kind: 'weapon', cls: 'mage', atk: 44, lv: 36, price: 0, grade: 3, set: 'blood' },
  w_sword_h2: { name: '심연 파수꾼의 검', icon: 'w_sword_h2', kind: 'weapon', cls: 'knight', atk: 50, lv: 44, price: 0, grade: 3, set: 'abyss' },
  w_bow_h2: { name: '심연 파수꾼의 활', icon: 'w_bow_h2', kind: 'weapon', cls: 'elf', atk: 48, lv: 44, price: 0, grade: 3, set: 'abyss' },
  w_staff_h2: { name: '심연 파수꾼의 홀', icon: 'w_staff_h2', kind: 'weapon', cls: 'mage', atk: 52, lv: 44, price: 0, grade: 3, set: 'abyss' },
  // 전설: 천상의 심판 (Lv.62)
  w_sword_l1: { name: '천상의 심판검', icon: 'w_sword_l1', kind: 'weapon', cls: 'knight', atk: 96, lv: 62, price: 0, grade: 4, set: 'judge' },
  w_bow_l1: { name: '천상의 심판궁', icon: 'w_bow_l1', kind: 'weapon', cls: 'elf', atk: 92, lv: 62, price: 0, grade: 4, set: 'judge' },
  w_staff_l1: { name: '천상의 심판봉', icon: 'w_staff_l1', kind: 'weapon', cls: 'mage', atk: 100, lv: 62, price: 0, grade: 4, set: 'judge' },

  // 신화: 일식의 각성자 (Lv.75) — only 어둠의 군주 녹스 drops these
  w_sword_m1: { name: '일식의 종언검', icon: 'w_sword_m1', kind: 'weapon', cls: 'knight', atk: 128, lv: 75, price: 0, grade: 5, set: 'eclipse' },
  w_bow_m1: { name: '일식의 종언궁', icon: 'w_bow_m1', kind: 'weapon', cls: 'elf', atk: 122, lv: 75, price: 0, grade: 5, set: 'eclipse' },
  w_staff_m1: { name: '일식의 종언봉', icon: 'w_staff_m1', kind: 'weapon', cls: 'mage', atk: 132, lv: 75, price: 0, grade: 5, set: 'eclipse' },

  // skill books: read to learn a 영웅/전설 skill (fam pairs the same book across classes for drops)
  sb_k_aura: { name: '영웅 스킬북: 검기 폭풍', icon: 'sb_k_aura', kind: 'skillbook', skill: 'k_aura', cls: 'knight', fam: 'hero', lv: 35, price: 300000, grade: 3 },
  sb_e_phoenix: { name: '영웅 스킬북: 불사조 화살', icon: 'sb_e_phoenix', kind: 'skillbook', skill: 'e_phoenix', cls: 'elf', fam: 'hero', lv: 35, price: 300000, grade: 3 },
  sb_m_thunder: { name: '영웅 스킬북: 천둥 폭풍', icon: 'sb_m_thunder', kind: 'skillbook', skill: 'm_thunder', cls: 'mage', fam: 'hero', lv: 35, price: 300000, grade: 3 },
  sb_k_judge: { name: '전설 스킬북: 천벌의 일격', icon: 'sb_k_judge', kind: 'skillbook', skill: 'k_judge', cls: 'knight', fam: 'legend1', lv: 50, price: 2000000, grade: 4 },
  sb_e_starfall: { name: '전설 스킬북: 별의 비', icon: 'sb_e_starfall', kind: 'skillbook', skill: 'e_starfall', cls: 'elf', fam: 'legend1', lv: 50, price: 2000000, grade: 4 },
  sb_m_inferno: { name: '전설 스킬북: 지옥의 업화', icon: 'sb_m_inferno', kind: 'skillbook', skill: 'm_inferno', cls: 'mage', fam: 'legend1', lv: 50, price: 2000000, grade: 4 },
  sb_k_avatar: { name: '전설 스킬북: 전쟁의 화신', icon: 'sb_k_avatar', kind: 'skillbook', skill: 'k_avatar', cls: 'knight', fam: 'legend2', lv: 65, price: 4000000, grade: 4 },
  sb_e_spirit: { name: '전설 스킬북: 정령왕의 축복', icon: 'sb_e_spirit', kind: 'skillbook', skill: 'e_spirit', cls: 'elf', fam: 'legend2', lv: 65, price: 4000000, grade: 4 },
  sb_m_eclipse: { name: '전설 스킬북: 이클립스', icon: 'sb_m_eclipse', kind: 'skillbook', skill: 'm_eclipse', cls: 'mage', fam: 'legend2', lv: 65, price: 4000000, grade: 4 },

  a_1: { name: '가죽 갑옷', icon: 'a_1', kind: 'armor', def: 2, hp: 10, lv: 1, price: 300, grade: 0 },
  a_2: { name: '사슬 갑옷', icon: 'a_2', kind: 'armor', def: 6, hp: 40, lv: 10, price: 7000, grade: 1 },
  a_3: { name: '판금 갑옷', icon: 'a_3', kind: 'armor', def: 11, hp: 90, lv: 20, price: 45000, grade: 2 },
  a_4: { name: '용 비늘 갑옷', icon: 'a_4', kind: 'armor', def: 19, hp: 180, lv: 30, price: 0, grade: 3 },
  a_5: { name: '흑요석 용암 갑주', icon: 'a_5', kind: 'armor', def: 30, hp: 340, lv: 55, price: 0, grade: 4 },
  a_r1: { name: '은빛 기사단 갑옷', icon: 'a_r1', kind: 'armor', def: 13, hp: 110, lv: 22, price: 0, grade: 2, set: 'silver' },
  a_r2: { name: '폭풍 추적자의 갑옷', icon: 'a_r2', kind: 'armor', def: 15, hp: 130, lv: 27, price: 0, grade: 2, set: 'storm' },
  a_h1: { name: '핏빛 군단 갑주', icon: 'a_h1', kind: 'armor', def: 21, hp: 200, lv: 36, price: 0, grade: 3, set: 'blood' },
  a_h2: { name: '심연 파수꾼의 갑주', icon: 'a_h2', kind: 'armor', def: 25, hp: 250, lv: 44, price: 0, grade: 3, set: 'abyss' },
  a_m1: { name: '일식의 각성자 갑주', icon: 'a_m1', kind: 'armor', def: 48, hp: 600, lv: 75, price: 0, grade: 5, set: 'eclipse' },
  a_l1: { name: '천상의 심판 갑주', icon: 'a_l1', kind: 'armor', def: 36, hp: 420, lv: 62, price: 0, grade: 4, set: 'judge' },
  // accessories, one per grade
  r_r: { name: '맹공의 반지', icon: 'r_r', kind: 'ring', atk: 7, crit: 4, lv: 24, price: 0, grade: 2 },
  r_h: { name: '군주의 목걸이', icon: 'r_h', kind: 'ring', atk: 10, hp: 150, crit: 6, lv: 40, price: 0, grade: 3 },
  r_m: { name: '녹스의 인장', icon: 'r_m', kind: 'ring', atk: 24, def: 10, hp: 500, crit: 14, atkSpd: 14, lv: 75, price: 0, grade: 5 },
  r_l: { name: '심판자의 인장', icon: 'r_l', kind: 'ring', atk: 16, def: 6, hp: 300, crit: 10, atkSpd: 10, lv: 60, price: 0, grade: 4 },

  r_1: { name: '힘의 반지', icon: 'r_1', kind: 'ring', atk: 4, lv: 5, price: 5000, grade: 1 },
  r_2: { name: '체력의 반지', icon: 'r_2', kind: 'ring', hp: 120, def: 2, lv: 15, price: 20000, grade: 2 },
  r_3: { name: '순발의 목걸이', icon: 'r_3', kind: 'ring', atkSpd: 10, atk: 6, lv: 25, price: 0, grade: 3 },
};
for (const k in D.ITEMS) D.ITEMS[k].id = k;
for (const it of Object.values(D.ITEMS)) if (it.kind === 'skillbook') it.desc = `읽으면 ${D.CLASSES[it.cls].name} 스킬 「${D.SKILLS[it.skill].name}」을(를) 배웁니다. (Lv.${it.lv} 이상)\n${D.SKILLS[it.skill].desc}`;
// same-tier weapon for another class, e.g. forClass('w_bow2', 'knight') -> 'w_sword2'
D.forClass = (id, cls) => {
  const it = D.ITEMS[id];
  if (it.kind === 'skillbook' && it.cls !== cls) { const alt = Object.values(D.ITEMS).find((x) => x.kind === 'skillbook' && x.fam === it.fam && x.cls === cls); return alt ? alt.id : id; }
  if (it.kind !== 'weapon' || it.cls === cls) return id;
  const alt = id.replace(/^w_(sword|bow|staff)/, 'w_' + { knight: 'sword', elf: 'bow', mage: 'staff' }[cls]);
  return D.ITEMS[alt] ? alt : id;
};
D.isEquip = (it) => it.kind === 'weapon' || it.kind === 'armor' || it.kind === 'ring';
// gear carries the character: equipment stats are scaled up so a good weapon or armor outweighs levels,
// and enchanting grows a weapon by a share of its own attack (+9 is about 2.3x the base weapon)
D.GEAR_SCALE = { weapon: { atk: 2.4 }, armor: { def: 2, hp: 3 }, ring: { atk: 2, def: 2, hp: 2 } };
for (const it of Object.values(D.ITEMS)) { const g = D.GEAR_SCALE[it.kind]; if (g) for (const k in g) if (it[k]) it[k] = Math.round(it[k] * g[k]); }
D.enchantAtk = (def, en) => Math.round(def.atk * (en * 0.1 + Math.max(0, en - 6) * 0.12));
D.enchantDef = (en) => en * 3;
D.enchantHp = (en) => en * 40;
// drop chance multipliers by item kind (potions and town scrolls unchanged)
D.DROP_MUL = { weapon: 3.5, armor: 3.5, ring: 3.5, enchant: 2, ticket: 1.6 };
// set bonuses: the set's weapon and armor worn together
D.SETS = {
  silver: { name: '은빛 기사단', bonus: { atkPct: 8, hp: 200 } },
  storm: { name: '폭풍 추적자', bonus: { atkPct: 8, atkSpd: 12 } },
  blood: { name: '핏빛 군단', bonus: { atkPct: 12, hp: 450, crit: 4 } },
  abyss: { name: '심연의 파수꾼', bonus: { atkPct: 12, def: 25, dmgRed: 6 } },
  judge: { name: '천상의 심판', bonus: { atkPct: 18, hp: 900, crit: 8, atkSpd: 10 } },
  eclipse: { name: '일식의 각성자', bonus: { atkPct: 26, hp: 1500, crit: 12, atkSpd: 12, dmgRed: 8 } },
};
D.setBonusText = (b) => [b.atkPct && `공격력 +${b.atkPct}%`, b.hp && `최대 HP +${b.hp}`, b.def && `방어력 +${b.def}`, b.atkSpd && `공격 속도 +${b.atkSpd}%`, b.crit && `치명타 +${b.crit}%`, b.dmgRed && `받는 피해 -${b.dmgRed}`].filter(Boolean).join(', ');
D.SAFE_ENCHANT = { weapon: 6, armor: 4 };
D.enchantRate = (cur) => [0.5, 0.4, 0.33, 0.25, 0.18, 0.12, 0.08, 0.05, 0.03][Math.max(0, cur - 6)] || 0.02;

// drop tables: [itemId, chance]
D.DROPS = {
  common: [['hp_s', 0.18], ['mp_s', 0.06], ['tp_town', 0.02]],
  goblin: [['w_sword1', 0.01], ['w_bow1', 0.01], ['w_staff1', 0.01], ['a_1', 0.01]],
  wolfman: [['r_1', 0.004], ['sc_armor', 0.003]],
  boarman: [['hp_m', 0.05], ['sc_armor', 0.005], ['sc_weapon', 0.003]],
  zombie: [['hp_m', 0.08], ['w_sword2', 0.004], ['w_bow2', 0.004], ['w_staff2', 0.004], ['sc_weapon', 0.005]],
  skeleton: [['hp_m', 0.08], ['a_2', 0.004], ['sc_weapon', 0.007], ['sc_armor', 0.007], ['w_sword_r1', 0.0015], ['a_r1', 0.0015]],
  orc: [['hp_m', 0.1], ['r_2', 0.002], ['sc_weapon', 0.008], ['ticket', 0.002], ['w_sword_r1', 0.002], ['a_r1', 0.002], ['r_r', 0.0015]],
  lizardman: [['hp_l', 0.05], ['w_sword3', 0.002], ['w_bow3', 0.002], ['w_staff3', 0.002], ['sc_armor', 0.01], ['w_sword_r2', 0.002], ['a_r2', 0.002], ['r_r', 0.0015]],
  troll: [['hp_l', 0.08], ['a_3', 0.003], ['sc_weapon', 0.012], ['ticket', 0.004], ['w_sword_r2', 0.002], ['a_r2', 0.002], ['w_sword_h1', 0.0008], ['a_h1', 0.0008]],
  vampire: [['ticket', 1], ['sc_weapon', 0.8], ['sc_armor', 0.8], ['w_sword4', 0.2], ['w_bow4', 0.2], ['w_staff4', 0.2], ['r_3', 0.15], ['a_4', 0.15], ['w_sword_h1', 0.35], ['a_h1', 0.35], ['r_h', 0.2]],
  frost_wolf: [['hp_l', 0.08], ['sc_weapon', 0.012], ['sc_armor', 0.012], ['w_sword_h1', 0.001], ['a_h1', 0.001]],
  frost_skel: [['hp_l', 0.08], ['r_3', 0.002], ['sc_weapon', 0.015], ['ticket', 0.004], ['w_sword_h2', 0.0008], ['r_h', 0.0008]],
  ice_troll: [['hp_l', 0.1], ['a_4', 0.002], ['w_sword5', 0.001], ['w_bow5', 0.001], ['w_staff5', 0.001], ['ticket', 0.006], ['a_h2', 0.0008], ['w_sword_h2', 0.0006]],
  frost_giant: [['sb_k_aura', 0.2], ['sb_k_judge', 0.04], ['ticket', 1], ['ticket', 1], ['ticket', 1], ['sc_weapon', 1], ['sc_armor', 1], ['w_sword5', 0.3], ['w_bow5', 0.3], ['w_staff5', 0.3], ['a_4', 0.4], ['r_3', 0.4], ['w_sword_h2', 0.35], ['a_h2', 0.35], ['r_h', 0.3]],
  flame_orc: [['hp_l', 0.1], ['sc_weapon', 0.018], ['sc_armor', 0.018], ['w_sword_h2', 0.001]],
  magma_lizard: [['hp_l', 0.1], ['sc_weapon', 0.02], ['ticket', 0.006], ['a_4', 0.003], ['a_h2', 0.001]],
  hell_wolf: [['hp_l', 0.1], ['r_3', 0.004], ['sc_armor', 0.02], ['ticket', 0.007], ['r_h', 0.001], ['w_sword_l1', 0.00012]],
  lava_troll: [['hp_l', 0.12], ['a_5', 0.0015], ['w_sword6', 0.0008], ['w_bow6', 0.0008], ['w_staff6', 0.0008], ['ticket', 0.009], ['w_sword_l1', 0.00015], ['a_l1', 0.00015], ['r_l', 0.00012]],
  ignis: [['sb_k_judge', 0.12], ['sb_k_aura', 0.25], ['ticket', 1], ['ticket', 1], ['ticket', 1], ['ticket', 1], ['sc_weapon', 1], ['sc_weapon', 1], ['sc_armor', 1], ['w_sword6', 0.3], ['w_bow6', 0.3], ['w_staff6', 0.3], ['a_5', 0.35], ['r_3', 0.5], ['w_sword_l1', 0.25], ['a_l1', 0.25], ['r_l', 0.2]],
  shadow_knight: [['hp_l', 0.12], ['sc_weapon', 0.022], ['sc_armor', 0.022], ['a_5', 0.002], ['w_sword_l1', 0.0002], ['a_l1', 0.0002]],
  nox_hound: [['hp_l', 0.12], ['sc_weapon', 0.024], ['ticket', 0.01], ['r_h', 0.002], ['r_l', 0.00018]],
  hollow: [['hp_l', 0.14], ['sc_armor', 0.026], ['ticket', 0.01], ['w_sword6', 0.0012], ['w_bow6', 0.0012], ['w_staff6', 0.0012], ['a_l1', 0.00022]],
  abyss_troll: [['hp_l', 0.15], ['sc_weapon', 0.03], ['ticket', 0.012], ['w_sword_l1', 0.0003], ['a_l1', 0.0003], ['r_l', 0.00025]],
  nox_apostle: [['sb_k_judge', 0.15], ['sb_k_avatar', 0.06], ['ticket', 1], ['ticket', 1], ['ticket', 1], ['ticket', 1], ['ticket', 1], ['sc_weapon', 1], ['sc_weapon', 1], ['sc_armor', 1], ['sc_armor', 1], ['w_sword_l1', 0.4], ['a_l1', 0.4], ['r_l', 0.3]],
  nox: [['sb_k_avatar', 0.2], ['sb_k_judge', 0.2], ['ticket', 1], ['ticket', 1], ['ticket', 1], ['ticket', 1], ['ticket', 1], ['ticket', 1], ['sc_weapon', 1], ['sc_weapon', 1], ['sc_armor', 1], ['sc_armor', 1], ['w_sword_l1', 0.5], ['a_l1', 0.5], ['w_sword_m1', 0.18], ['a_m1', 0.18], ['r_m', 0.12]],
  minotaur: [['sb_k_aura', 0.15], ['ticket', 1], ['ticket', 1], ['sc_weapon', 1], ['w_sword5', 0.15], ['w_bow5', 0.15], ['w_staff5', 0.15], ['a_4', 0.3], ['r_3', 0.3], ['w_sword_h2', 0.3], ['a_h2', 0.3], ['r_h', 0.3]],
};

D.SHOPS = {
  general: { title: '잡화 상점', items: ['hp_s', 'hp_m', 'hp_l', 'mp_s', 'haste', 'pot_blue', 'pot_brave', 'pot_wise', 'pot_iron', 'pot_life', 'pot_wind', 'pot_exp', 'tp_town', 'sc_weapon', 'sc_armor'] },
  weapon: { title: '무기 상점', items: ['w_sword1', 'w_sword2', 'w_sword3', 'w_bow1', 'w_bow2', 'w_bow3', 'w_staff1', 'w_staff2', 'w_staff3'] },
  armor: { title: '방어구 상점', items: ['a_1', 'a_2', 'a_3', 'r_1', 'r_2'] },
  book: { title: '스킬북 상점', items: ['sb_k_aura', 'sb_e_phoenix', 'sb_m_thunder', 'sb_k_judge', 'sb_e_starfall', 'sb_m_inferno', 'sb_k_avatar', 'sb_e_spirit', 'sb_m_eclipse'] },
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
window.SPRITE_ROWS.elf_px = window.SPRITE_ROWS.elf.concat(window.SPRITE_ROWS.elf.slice(0, 20)); // + diagonal rows 21-40
// 8-direction knight from an attack sheet, 96px cells for the wide slash arcs (tools/build_knight_px.py)
window.SPRITE_ROWS.knight_px = window.SPRITE_ROWS.elf_px;
window.SPRITE_FRAME = { knight_px: 96 }; // frame size per sheet; everything else is 64
window.WALK_FRAMES = { knight_px: 6 }; // walk cycle length per sheet (cols 1..n); everything else is 8
// walk column for a step count measured in 8-frame-cycle frames, so every sheet walks at the same pace
window.walkCol = (sheet, step) => { const n = window.WALK_FRAMES[sheet] || 8; return 1 + (Math.floor(step * n / 8) % n); };
D.BAKED_WEAPON = { elf_px: 'elf_nw', knight_px: 'knight_nw' }; // sheet -> LPC body used to show weapon looks in menus
D.SYNTH_RATES = [0.30, 0.25, 0.20, 0.12];
D.cardGrowCost = (card, lv) => 1500 * lv * (card.grade + 1);
D.CARD_MAX_LV = 10;

// ---------------- quests ----------------
// type: talk(npc) | kill(monster,n) | level(n) | equipCard | enchant(n) | killAny(n)
// ---------------- story ----------------
// 대륙 아스텔라. 천 년 전 어둠의 군주 녹스는 네 개의 봉인(피·미궁·서리·화염)에 갇혔고, 봉인마다 수호자가 섰다.
// 해와 달이 겹치는 '이클립스'가 오면 봉인이 약해진다. 이번 이클립스에 네 수호자가 검은 빛에 타락했고,
// 같은 날 라스카노 마을의 제단 앞에서 기억을 잃은 '각성자'(플레이어)가 눈을 뜬다. (docs/STORY.md)
D.PROLOGUE = [
  '천 년 전, 어둠의 군주 녹스는 대륙 아스텔라를 삼키려 했다.',
  '네 명의 수호자가 피와 미궁, 서리와 화염의 봉인으로 그를 가두었다.',
  '그리고 오늘… 해와 달이 겹치는 이클립스가 찾아왔다.',
  '검은 태양 아래, 봉인을 지키던 수호자들이 하나둘 어둠에 물들어 간다.',
  '라스카노 마을의 오래된 제단 앞에서, 일식의 문양을 새긴 한 사람이 눈을 뜬다.',
  '— 이클립스: 어웨이크닝 —',
];
// intro: the four Gemini/Veo cuts (docs/STORY.md) joined into one clip with 1s crossfades, so it plays without gaps.
// cues = [start second, prologue line]; if the clip can't play the lines are shown as text instead
D.INTRO = {
  src: 'assets/intro/intro.mp4',
  cues: [[0.6, 0], [4.8, 1], [9.5, 2], [18.5, 3], [27.5, 4]],
};
// quests: ch = chapter shown in the quest list; by = who speaks; story = lines when the quest begins, end = lines when it is handed in
D.QUESTS = [
  { ch: '1장 · 각성', title: '1-1. 제단의 각성자', desc: '현자 엘로아와 대화', type: 'talk', npc: 'eloa', by: '현자 엘로아',
    story: ['정신이 드는가? 제단 앞에 쓰러져 있던 자네를 마을 사람들이 데려왔다네.', '손등의 그 문양… 일식의 인장이군. 광장의 내게 오게. 할 이야기가 있네.'],
    end: ['나는 이클립스 수호회의 마지막 현자, 엘로아.', '이클립스의 날 인장을 받고 깨어난 자를 우리는 "각성자"라 부르지. 녹스의 봉인이 무너지려 하는 지금, 자네가 필요하네.'],
    reward: { gold: 500, items: { hp_s: 20 } } },
  { ch: '1장 · 각성', title: '1-2. 초원의 이상 징후', desc: '고블린 처치', type: 'kill', m: 'goblin', n: 10, by: '현자 엘로아',
    story: ['이클립스 이후 바람의 초원 고블린들이 미쳐 날뛰고 있네. 검은 빛이 짐승들부터 물들이는 게야.', '북문으로 나가 고블린 10마리를 처치하고 힘을 되찾게.'],
    end: ['몸이 기억하는 모양이군. 칼을 쥐는 법도, 활을 당기는 법도, 주문을 외는 법도.'],
    reward: { gold: 1000, dia: 100, items: { hp_s: 20, tp_town: 3, ticket: 3 } } },
  { ch: '1장 · 각성', title: '1-3. 달빛 아래 울음', desc: '늑대인간 처치', type: 'kill', m: 'wolfman', n: 15, by: '경비병',
    story: ['밤마다 초원에서 늑대인간 울음이 들립니다. 이클립스 전에는 없던 놈들이에요.', '저것들이 마을 목책까지 오기 전에 정리해 주십시오.'],
    end: ['놈들 목덜미에 검은 반점이… 역시 이클립스의 저주였군요.'],
    reward: { gold: 2000, items: { sc_weapon: 2 } } },
  { ch: '1장 · 각성', title: '1-4. 각성자의 무기', desc: '무기를 +1 이상 강화', type: 'enchant', n: 1, by: '무기 상인 자이드',
    story: ['엘로아 님이 보냈다고? 좋은 무기도 주문서의 힘을 받아야 제 몫을 하지.', '무기 마법 주문서로 무기를 한 번 강화해 보게.'],
    end: ['봤지? 각성자의 손에서는 주문서도 더 밝게 빛나는군.'],
    reward: { gold: 3000, items: { sc_armor: 1 } } },
  { ch: '1장 · 각성', title: '1-5. 북부의 멧돼지 전사', desc: '멧돼지 전사 처치', type: 'kill', m: 'boarman', n: 20, by: '현자 엘로아',
    story: ['초원 북쪽 멧돼지 전사들이 무리를 지어 길을 막고 있네.', '봉인을 찾아가려면 먼저 저 길부터 열어야 해.'],
    end: ['길이 열렸군. 이제 자네 안의 힘이 더 깨어나길 기다리세.'],
    reward: { gold: 4000, items: { hp_m: 20, sc_armor: 2 } } },
  { ch: '1장 · 각성', title: '1-6. 깨어나는 힘', desc: '레벨 10 달성', type: 'level', n: 10, by: '현자 엘로아',
    story: ['인장이 자네의 성장에 맞춰 빛나고 있네. 조금 더 강해지게. 첫 번째 봉인은 결코 만만하지 않아.'],
    end: ['좋아. 이제 동쪽, 망자의 묘지로 가야 할 때일세.'],
    reward: { dia: 300, items: { ticket: 2 } } },
  { ch: '2장 · 피의 봉인', title: '2-1. 망자의 묘지', desc: '굶주린 좀비 처치', type: 'kill', m: 'zombie', n: 20, by: '현자 엘로아',
    story: ['동쪽 묘지에는 "피의 봉인"이 있네. 그 수호자 뱀파이어 군주가 타락하자 죽은 자들이 무덤을 박차고 나왔지.', '굶주린 좀비부터 쓸어내게.'],
    end: ['묘지의 공기가 조금 가벼워졌군. 하지만 더 깊은 곳에 뼈의 군대가 있네.'],
    reward: { gold: 6000, items: { hp_m: 30 } } },
  { ch: '2장 · 피의 봉인', title: '2-2. 뼈의 군대', desc: '해골 전사 처치', type: 'kill', m: 'skeleton', n: 25, by: '현자 엘로아',
    story: ['해골 전사들은 한때 봉인을 지키던 기사단이었네. 이제는 군주의 명령만 따르는 껍데기지.', '그들을 쉬게 해 주게.'],
    end: ['군주의 성소로 가는 길이 드러났네. 제단 위에서 그가 기다릴 걸세.'],
    reward: { gold: 8000, items: { sc_weapon: 2 } } },
  { ch: '2장 · 피의 봉인', title: '2-3. 피의 군주', desc: '뱀파이어 군주 처치', type: 'kill', m: 'vampire', n: 1, by: '현자 엘로아',
    story: ['뱀파이어 군주… 한때는 피로 맹세한 가장 충직한 수호자였지.', '그를 쓰러뜨려 피의 봉인을 되찾게. 혼자가 두렵다면 다른 모험가들과 함께 가게.'],
    end: ['군주가 쓰러지며 봉인석이 붉게 빛났다. 그의 마지막 말은 "녹스가… 깨어난다…"였다.'],
    reward: { dia: 500, items: { ticket: 5 } } },
  { ch: '2장 · 피의 봉인', title: '2-4. 첫 번째 봉인', desc: '현자 엘로아에게 보고', type: 'talk', npc: 'eloa', by: '현자 엘로아',
    story: ['피의 봉인석을 되찾았다면 곧장 광장으로 오게.'],
    end: ['해냈군! 봉인석이 다시 숨을 쉬고 있어.', '하지만 군주의 말이 마음에 걸리네… 녹스가 봉인 너머에서 수호자들을 부르고 있는 게야. 남은 봉인은 셋.'],
    reward: { dia: 300, gold: 5000 } },
  { ch: '2장 · 피의 봉인', title: '2-5. 숙련된 각성자', desc: '레벨 20 달성', type: 'level', n: 20, by: '현자 엘로아',
    story: ['다음은 남쪽 오크 요새 너머의 "미궁의 봉인"일세. 레벨 20은 되어야 그곳에서 버틸 수 있네.'],
    end: ['준비가 됐군. 남문으로 가게.'],
    reward: { dia: 300, gold: 10000 } },
  { ch: '3장 · 미궁의 봉인', title: '3-1. 오크 요새 공략', desc: '오크 전사 처치', type: 'kill', m: 'orc', n: 30, by: '경비병',
    story: ['오크들이 미궁 입구에 요새를 세웠습니다. 누군가 저들에게 검은 빛을 나눠주고 있어요.', '요새를 뚫어 주십시오.'],
    end: ['오크 대장이 품고 있던 건… 검은 태양이 새겨진 부적이었습니다.'],
    reward: { gold: 12000, items: { hp_l: 20 } } },
  { ch: '3장 · 미궁의 봉인', title: '3-2. 늪지의 사냥꾼', desc: '리자드맨 처치', type: 'kill', m: 'lizardman', n: 30, by: '현자 엘로아',
    story: ['미궁 서쪽 늪지의 리자드맨들이 봉인석 조각을 삼켜 버렸네.', '조각을 되찾아 오게.'],
    end: ['조각이 모였군. 이것이 있어야 미궁의 문이 열리네.'],
    reward: { gold: 15000, items: { sc_weapon: 3 } } },
  { ch: '3장 · 미궁의 봉인', title: '3-3. 뒤틀린 기운', desc: '흉포한 트롤 처치', type: 'kill', m: 'troll', n: 140, by: '현자 엘로아',
    story: ['미궁을 지키던 트롤들이 검은 빛에 완전히 뒤틀렸네. 수가 너무 많아.', '끈기가 필요한 싸움이 될 걸세.'],
    end: ['트롤들의 포효가 멎었다. 미궁 깊은 곳에서 거대한 발굽 소리가 울린다.'],
    reward: { dia: 800, items: { ticket: 5 } } },
  { ch: '3장 · 미궁의 봉인', title: '3-4. 미궁의 왕', desc: '미노타우르스 킹 처치', type: 'kill', m: 'minotaur', n: 1, by: '현자 엘로아',
    story: ['미노타우르스 킹은 미궁 그 자체를 지키는 수호자였네. 길을 잃은 자를 인도하던 왕이 이제는 모두를 삼키고 있어.'],
    end: ['왕의 도끼가 부러지며 두 번째 봉인석이 되살아났다.'],
    reward: { dia: 1500, items: { ticket: 10 } } },
  { ch: '3장 · 미궁의 봉인', title: '3-5. 두 번째 봉인', desc: '현자 엘로아에게 보고', type: 'talk', npc: 'eloa', by: '현자 엘로아',
    story: ['미궁의 봉인석을 가지고 돌아오게.'],
    end: ['두 번째 봉인도 되찾았군. 그런데… 북서쪽 하늘이 얼어붙고 있네.', '서리 거인 요툰이 깨어났어. 그는 네 수호자 중 가장 오래 버텼지만, 결국 녹스의 목소리에 굴복한 게야.'],
    reward: { dia: 500, gold: 20000 } },
  { ch: '4장 · 서리의 봉인', title: '4-1. 서리 설원 개척', desc: '서리 늑대인간 처치', type: 'kill', m: 'frost_wolf', n: 40, by: '현자 엘로아',
    story: ['서리 설원은 영원히 얼지 않던 땅이었네. 요툰의 분노가 모든 걸 얼려 버렸지.', '설원 입구의 서리 늑대인간부터 몰아내게.'],
    end: ['눈보라 사이로 얼어붙은 망자들의 행렬이 보인다.'],
    reward: { gold: 30000, items: { hp_l: 30, sc_weapon: 3 } } },
  { ch: '4장 · 서리의 봉인', title: '4-2. 얼음 무덤', desc: '얼어붙은 망자 처치', type: 'kill', m: 'frost_skel', n: 50, by: '현자 엘로아',
    story: ['설원에서 얼어 죽은 자들까지 일어섰다니… 요툰의 한기가 영혼까지 붙잡고 있는 게야.'],
    end: ['망자들이 눈처럼 흩어졌다. 빙하 너머에서 트롤들이 길을 막는다.'],
    reward: { gold: 40000, items: { sc_armor: 4 } } },
  { ch: '4장 · 서리의 봉인', title: '4-3. 빙하의 파수꾼', desc: '빙하 트롤 처치', type: 'kill', m: 'ice_troll', n: 60, by: '현자 엘로아',
    story: ['빙하 트롤은 거인의 제단을 지키는 파수꾼일세. 그들을 넘어야 요툰에게 닿을 수 있네.'],
    end: ['제단으로 가는 얼음길이 열렸다. 땅이 거인의 숨결에 떨린다.'],
    reward: { dia: 1000, items: { ticket: 5 } } },
  { ch: '4장 · 서리의 봉인', title: '4-4. 거인의 몰락', desc: '서리 거인 요툰 처치', type: 'kill', m: 'frost_giant', n: 1, by: '현자 엘로아',
    story: ['요툰의 발구르기를 조심하게. 바닥의 푸른 원이 보이면 즉시 피하게.', '그를 쓰러뜨려 서리의 봉인을 되살리게.'],
    end: ['거인이 무너지며 속삭였다. "화염의 형제가… 이미 문을 열었다…"'],
    reward: { dia: 3000, items: { ticket: 15 } } },
  { ch: '4장 · 서리의 봉인', title: '4-5. 세 번째 봉인', desc: '현자 엘로아에게 보고', type: 'talk', npc: 'eloa', by: '현자 엘로아',
    story: ['서리의 봉인석을 가지고 돌아오게. 서둘러야 하네.'],
    end: ['세 개의 봉인이 돌아왔네. 하지만 요툰의 말대로라면 늦었을지도 몰라.', '남동쪽 용암지대. 화염 군주 이그니스는 스스로 봉인을 불태워 녹스에게 길을 열어 주고 있네. 마지막 싸움일세, 각성자.'],
    reward: { dia: 800, gold: 40000 } },
  { ch: '5장 · 화염의 봉인', title: '5-1. 불타는 대지', desc: '화염 오크 광전사 처치', type: 'kill', m: 'flame_orc', n: 60, by: '현자 엘로아',
    story: ['용암지대의 오크들은 이그니스의 불꽃을 받아 광전사가 되었네. 재의 길을 따라 내려가게.'],
    end: ['광전사들의 불꽃이 꺼지자 용암 늪에서 무언가 기어 나온다.'],
    reward: { gold: 60000, items: { hp_l: 40, sc_weapon: 4 } } },
  { ch: '5장 · 화염의 봉인', title: '5-2. 마그마 늪', desc: '마그마 리자드맨 처치', type: 'kill', m: 'magma_lizard', n: 70, by: '현자 엘로아',
    story: ['마그마 리자드맨들이 불타는 봉인석 파편을 지키고 있네. 파편을 모아야 이그니스의 제단에 닿을 수 있어.'],
    end: ['파편이 손 안에서 뜨겁게 맥동한다. 멀리서 사냥개의 울음이 들린다.'],
    reward: { gold: 80000, items: { sc_armor: 5 } } },
  { ch: '5장 · 화염의 봉인', title: '5-3. 지옥의 사냥개', desc: '지옥 늑대인간 처치', type: 'kill', m: 'hell_wolf', n: 80, by: '현자 엘로아',
    story: ['지옥 늑대인간… 봉인 너머, 녹스의 땅에서 넘어온 짐승들일세. 문이 이미 열리고 있다는 증거지.'],
    end: ['사냥개들이 사라진 자리에 검은 균열이 남았다.'],
    reward: { dia: 1500, items: { ticket: 6 } } },
  { ch: '5장 · 화염의 봉인', title: '5-4. 용암의 거인들', desc: '용암 트롤 처치', type: 'kill', m: 'lava_troll', n: 90, by: '현자 엘로아',
    story: ['용암 트롤들이 이그니스의 제단을 둘러싸고 있네. 저들을 뚫으면 군주와 마주하게 될 걸세.'],
    end: ['불타는 제단 위, 거대한 불꽃이 몸을 일으킨다.'],
    reward: { dia: 2000, items: { ticket: 8, sc_weapon: 5 } } },
  { ch: '5장 · 화염의 봉인', title: '5-5. 화염 군주', desc: '화염 군주 이그니스 처치', type: 'kill', m: 'ignis', n: 1, by: '현자 엘로아',
    story: ['이그니스는 네 수호자 중 가장 강했고, 가장 먼저 무너졌네.', '그가 지옥 늑대를 부르면 서둘러 끝내게. 이 싸움에 아스텔라의 운명이 걸렸네.'],
    end: ['이그니스의 불꽃이 잦아들며 마지막 봉인석이 식어 간다.', '"각성자여… 너의 인장은… 녹스가 남긴 것이다…"'],
    reward: { dia: 5000, items: { ticket: 20 } } },
  { ch: '5장 · 화염의 봉인', title: '5-6. 일식의 진실', desc: '현자 엘로아에게 보고', type: 'talk', npc: 'eloa', by: '현자 엘로아',
    story: ['네 번째 봉인석을 가지고 돌아오게. 그리고… 이그니스가 남긴 말을 들려주게.'],
    end: ['…그랬군. 일식의 인장은 녹스가 자신의 그릇을 찾으려 뿌린 씨앗이었어.', '하지만 자네는 그 힘으로 네 봉인을 되살렸네. 인장의 주인이 누구든, 자네의 선택이 자네를 만드는 걸세.', '봉인은 되살아났지만 이클립스 균열은 아직 열려 있네. 녹스의 그림자가 스며드는 그곳을… 매일 막아 주게.'],
    reward: { dia: 5000, items: { ticket: 20 } } },
  // 6장: the seals hold, but Nox reaches through the sigil itself — the citadel beyond the south-west rune path
  { ch: '6장 · 녹스의 그림자', title: '6-1. 인장의 부름', desc: '현자 엘로아와 대화', type: 'talk', npc: 'eloa', by: '현자 엘로아',
    story: ['각성자여, 손등의 인장이 밤마다 타오른다고 했지? 광장으로 오게. 수호회의 마지막 기록을 찾았네.'],
    end: ['기록에 따르면 녹스는 봉인 너머에 성채를 쌓았네. 네 봉인이 되살아나자, 녹스는 인장을 통해 이 땅에 직접 손을 뻗고 있어.', '서쪽 문을 나가 남서쪽 룬의 길을 따라가게. 그 끝에 녹스의 성채가 열려 있네. 카심에게 부탁하면 입구까지 보내 줄 걸세.'],
    reward: { gold: 100000, items: { hp_l: 60 } } },
  { ch: '6장 · 녹스의 그림자', title: '6-2. 그림자 기사단', desc: '그림자 기사 처치', type: 'kill', m: 'shadow_knight', n: 80, by: '현자 엘로아',
    story: ['성채 입구는 그림자 기사들이 지키고 있네. 천 년 전 녹스를 따랐던 기사들의 망령이지.'],
    end: ['쓰러진 기사의 투구 아래에서 속삭임이 새어 나온다. "그릇이… 왔다…"'],
    reward: { gold: 120000, items: { sc_weapon: 6, sc_armor: 6 } } },
  { ch: '6장 · 녹스의 그림자', title: '6-3. 녹스의 사냥개', desc: '녹스의 사냥개 처치', type: 'kill', m: 'nox_hound', n: 90, by: '현자 엘로아',
    story: ['인장의 냄새를 맡은 사냥개들이 몰려오고 있네. 녹스는 자네를 찾고 있어.'],
    end: ['사냥개들의 울음이 멎자, 인장이 차갑게 식는다. 무언가 자네를 지켜보고 있다.'],
    reward: { dia: 2500, items: { ticket: 10 } } },
  { ch: '6장 · 녹스의 그림자', title: '6-4. 공허에 삼켜진 자들', desc: '공허에 삼켜진 자 처치', type: 'kill', m: 'hollow', n: 90, by: '현자 엘로아',
    story: ['저들은… 인장을 받았지만 녹스에게 삼켜진 옛 각성자들일세. 자네가 걸을 수도 있었던 길이지.', '그들을 쉬게 해 주게.'],
    end: ['마지막 한 명이 쓰러지며 중얼거린다. "너는… 우리와 다른 길을… 골라라…"'],
    reward: { gold: 150000, items: { sc_weapon: 6, hp_l: 60 } } },
  { ch: '6장 · 녹스의 그림자', title: '6-5. 심연의 거신', desc: '심연의 거신 처치', type: 'kill', m: 'abyss_troll', n: 100, by: '현자 엘로아',
    story: ['성채의 심장부는 심연의 거신들이 떠받치고 있네. 저들을 무너뜨리면 사도의 제단이 드러날 걸세.'],
    end: ['거신들이 무너지자 보랏빛 제단 위로 긴 그림자가 일어선다.'],
    reward: { dia: 3000, items: { ticket: 12, sc_armor: 8 } } },
  { ch: '6장 · 녹스의 그림자', title: '6-6. 녹스의 사도', desc: '녹스의 사도 처치', type: 'kill', m: 'nox_apostle', n: 1, by: '현자 엘로아',
    story: ['녹스의 사도는 군주의 목소리를 대신 전하는 자일세. 저것이 그림자 기사들을 다시 불러내면, 흩어지기 전에 끝내게.'],
    end: ['"어리석은 그릇이여… 군주께서 직접… 너를 맞이하시리라…"', '사도가 재가 되어 흩어지고, 성채 가장 깊은 곳의 문이 열린다.'],
    reward: { dia: 5000, items: { ticket: 20 } } },
  { ch: '6장 · 녹스의 그림자', title: '6-7. 어둠의 군주', desc: '어둠의 군주 녹스 처치', type: 'kill', m: 'nox', n: 1, by: '현자 엘로아',
    story: ['마침내 녹스일세. 천 년 전 네 수호자가 목숨을 걸고 가둔 어둠의 군주.', '체력이 절반이 되면 진짜 모습을 드러낼 걸세. 그때부터는 하늘에서 어둠이 쏟아지니, 보랏빛 원을 피하게. 부디… 살아서 돌아오게.'],
    end: ['"…그릇이… 나를 거부하는가…"', '녹스의 형체가 보랏빛 연기로 부서지고, 검은 태양이 처음으로 흔들린다.'],
    reward: { dia: 10000, items: { ticket: 30 } } },
  { ch: '6장 · 녹스의 그림자', title: '6-8. 각성자의 선택', desc: '현자 엘로아에게 보고', type: 'talk', npc: 'eloa', by: '현자 엘로아', ending: true,
    story: ['돌아왔군! 하늘을 보게, 검은 태양이 갈라지고 있어. 광장으로 오게. 마지막으로 할 이야기가 있네.'],
    end: ['녹스는 쓰러졌지만, 그 힘은 아직 자네의 인장 속에 남아 있네.', '인장을 받아들여 그 힘을 다스릴 수도, 인장을 봉인하고 평범한 빛으로 살아갈 수도 있지.', '어느 쪽이든 자네의 선택일세, 각성자.'],
    reward: { dia: 10000, gold: 500000, items: { ticket: 30 } } },
];
// 6-8: the awakened one's choice. Each path gives a permanent title bonus (Player.recalc) and its own epilogue line
D.ENDINGS = {
  dark: { title: '일식의 군주', pick: '인장을 받아들여 녹스의 힘을 다스린다', bonus: { atkPct: 6, crit: 4 },
    line: '각성자는 인장을 받아들여, 녹스의 힘을 스스로 다스리는 일식의 군주가 되었다.',
    after: ['…그 길을 택했군. 녹스의 힘은 자네를 끝없이 시험할 걸세.', '하지만 자네라면 그 어둠마저 다스리리라 믿네. 일식의 군주여, 아스텔라를 부탁하네.'] },
  light: { title: '빛의 수호자', pick: '인장을 봉인하고 빛의 수호자가 된다', bonus: { hp: 1200, def: 20, dmgRed: 4 },
    line: '각성자는 인장을 봉인하고, 빛의 수호자로서 아스텔라를 지키기로 했다.',
    after: ['인장의 빛이 잔잔해졌군. 이제 그것은 녹스의 씨앗이 아니라, 자네의 맹세일세.', '빛의 수호자여, 수호회는 오늘부터 자네의 이름으로 다시 시작하네.'] },
};
// ending film (docs/STORY.md): same timing as the intro; line 3 follows the player's choice
D.EPILOGUE = [
  '녹스가 쓰러진 날, 검은 태양이 처음으로 흔들렸다.',
  '네 봉인의 빛이 다시 하나로 모여, 균열 너머의 어둠을 밀어냈다.',
  '각성자의 손등에서 일식의 인장이 마지막으로 타올랐다.',
  '', // D.ENDINGS[choice].line
  '그리고 라스카노의 광장에는, 다시 아침이 찾아왔다.',
  '— 이클립스: 어웨이크닝 · 완 —',
];
D.OUTRO = { src: 'assets/intro/ending.mp4', cues: [[0.6, 0], [4.8, 1], [9.5, 2], [18.5, 3], [27.5, 4]] };
// saves before the story rewrite (quest version 2) point at the old list: map them onto the new one
D.QUEST_V2_TO_V3 = (i) => (i <= 8 ? i : i <= 13 ? i + 1 : i <= 17 ? i + 2 : i + 3);
D.DAILY_QUEST = { title: '일일 토벌', desc: '아무 몬스터 처치', type: 'killAny', n: 100, reward: { dia: 100, gold: 5000 } };

// ---------------- town NPCs (tile offsets from town center) ----------------
D.NPCS = [
  { id: 'eloa', name: '현자 엘로아', title: '이클립스 수호회', sheet: 'npc_sage', dx: 3, dy: -3, dir: 2, talk: '봉인석의 빛이 약해지고 있네… 각성자여, 퀘스트 창에서 지금 해야 할 일을 확인하게.' },
  { id: 'nova', name: '잡화 상인 노바', title: '잡화 상인', sheet: 'npc_merchant', dx: 9, dy: 1, dir: 1, shop: 'general', talk: '이클립스 이후로 물약이 불티나게 팔린다네. 각성자라면 넉넉히 챙겨가게!' },
  { id: 'zaid', name: '무기 상인 자이드', title: '무기 상인', sheet: 'npc_guard', dx: 10, dy: 5, dir: 1, shop: 'weapon', talk: '좋은 무기가 곧 생명이지. 둘러보게나.' },
  { id: 'levin', name: '모험 상인 레빈', title: '방어구 상인', sheet: 'npc_merchant', dx: 9, dy: -4, dir: 1, shop: 'armor', talk: '튼튼한 갑옷 없이 묘지에 가는 건 자살 행위라네.' },
  { id: 'kasim', name: '순간이동사 카심', title: '순간이동', sheet: 'npc_sage', dx: -2, dy: -6, dir: 2, teleport: true, talk: '어디로 보내줄까? 비용은 거리에 따라 다르다네.' },
  { id: 'damon', name: '초월 관리인 테이먼', title: '초월', sheet: 'npc_woman', dx: -9, dy: -3, dir: 3, transcend: true, talk: '영웅들의 영혼이 깃든 카드... 그 힘을 빌려 초월해 보세요.' },
  { id: 'guard1', name: '경비병', sheet: 'npc_guard', dx: -1.5, dy: -15.5, dir: 2, talk: '북쪽은 바람의 초원이다. 고블린부터 상대하도록.' },
  { id: 'guard2', name: '경비병', sheet: 'npc_guard', dx: 15.5, dy: -1.5, dir: 1, talk: '동쪽은 망자의 묘지... 밤이 되면 뱀파이어가 나타난다더군.' },
  { id: 'guard3', name: '경비병', sheet: 'npc_guard', dx: 1.5, dy: 15.5, dir: 2, talk: '남쪽 오크 요새는 레벨 20 이상만 가도록.' },
  { id: 'guard4', name: '경비병', sheet: 'npc_guard', dx: -15.5, dy: 1.5, dir: 3, talk: '서쪽은 고요한 숲이다. 북서쪽 끝 서리 설원에는 거인이 잠들어 있다더군. 남동쪽 끝 용암지대에는 화염 군주가, 남서쪽 룬의 길 끝에는 녹스의 성채가 있다더군.' },
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
