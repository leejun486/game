// 외형: 능력치는 그대로, 겉모습만 바꿈 (직업마다 따로 저장: progress[cls].look)
//  - 겉옷: 가진 옷 중 하나의 모양을 입은 옷 대신 보여 줌
//  - 무기 모양: 가진 같은 직업 무기 중 하나의 모양
//  - 염색: 옷의 바탕·포인트·테두리·바지 색을 바꿈 (무늬·장식 모양은 그대로)
//  - 머리색, 방어구 색(장갑·바지·띠) 보이기/숨기기
//  특별한 염색·머리색은 업적으로 열림
import { item } from './items.js';
import { outfitLook, gearLook } from './character.js';
import { gearColor } from './gear.js';
import { cosOf, owns } from './cosmetics.js';

const P = (main, accent, trim, dark) => ({ main, accent, trim, dark });
export const DYES = [
  { id: 'ink', name: '먹빛', pal: P('#2a2a32', '#8a8a96', '#c8c8d0', '#16161c') },
  { id: 'indigo', name: '쪽빛', pal: P('#24407a', '#e0b040', '#f0e0a0', '#141c38') },
  { id: 'azalea', name: '진달래', pal: P('#c84a7a', '#ffd0e0', '#fff4f8', '#5a1a34') },
  { id: 'pollen', name: '송홧빛', pal: P('#d8b84a', '#6a4a1a', '#fff0b0', '#5a4418') },
  { id: 'jade', name: '비취', pal: P('#2a8a6a', '#e8e0c0', '#b0f0d8', '#103a2c') },
  { id: 'plain', name: '소색', pal: P('#eeeae0', '#8a2a2a', '#2a2a2a', '#5a5650') },
  { id: 'fox', name: '구미호 주홍', pal: P('#e8642a', '#fff0d8', '#ffd070', '#6a2410'), ach: 'b_gumiho' },
  { id: 'sea', name: '용궁 청옥', pal: P('#1a7a8a', '#f0c040', '#a0f0ff', '#0a2a3a'), ach: 'b_dragon' },
  { id: 'frost', name: '눈꽃', pal: P('#dff0fa', '#3a7ab8', '#ffffff', '#4a6a8a'), ach: 'b_frostgiant' },
  { id: 'dusk', name: '그믐 보라', pal: P('#2a2238', '#9a5aff', '#e0c8ff', '#120e1a'), ach: 'b_eodum' },
  { id: 'festival', name: '난장 홍색', pal: P('#c8302c', '#f0c040', '#fff0c0', '#4a1018'), ach: 'b_dokgak' },
  { id: 'tide', name: '갯벌 물빛', pal: P('#5a7a8a', '#f0e0b0', '#e8f4ff', '#2a3a44'), ach: 'b_jangsan' },
  { id: 'heaven', name: '천상 청람', pal: P('#2a3a7a', '#ffd040', '#e8f4ff', '#141c3a'), ach: 'b_noegong' },
  { id: 'netherworld', name: '저승 먹보라', pal: P('#2a1a3a', '#9a6ad8', '#d8c0ff', '#120a1a'), ach: 't10' },
  { id: 'gold', name: '금빛 전설', pal: P('#c89a2a', '#2a1a0a', '#fff0a0', '#4a3010'), ach: 'legend' },
  { id: 'moon', name: '달빛 은', pal: P('#c8d0e8', '#6a7ab0', '#ffffff', '#3a4060'), ach: 'ending' },
  { id: 'dawn', name: '새벽빛', pal: P('#f0b8a0', '#7a8ad8', '#fff0d0', '#5a4a7a'), ach: 'daily7' },
  { id: 'bloodmoon', name: '붉은 달', pal: P('#8a1020', '#1a1a1a', '#ff6a5a', '#2a0810'), ach: 'hard1' },
  // 달빛 구슬로 사는 염색 (cosmetics.js)
  { id: 'cherry', name: '벚꽃 연분홍', pal: P('#f4b8c8', '#7a3a5a', '#fff4f8', '#6a3a4a'), cost: 60 },
  { id: 'nightsky', name: '밤하늘 금수', pal: P('#141c40', '#f0c040', '#fff0b0', '#0a0e20'), cost: 60 },
  { id: 'celadon', name: '청자', pal: P('#8ac0b0', '#2a4a44', '#e8f8f0', '#3a5a54'), cost: 60 },
  { id: 'dancheong', name: '단청', pal: P('#2a7a5a', '#d8302c', '#f0c040', '#123a2a'), cost: 60 },
  { id: 'inkred', name: '흑적', pal: P('#141014', '#c8302c', '#ff8a6a', '#0a0608'), cost: 60 },
];
export const HAIRS = [
  { id: 'brown', name: '밤색', c: '#4a2a1a' },
  { id: 'auburn', name: '적갈색', c: '#7a2a1a' },
  { id: 'slate', name: '회청색', c: '#3a4a5a' },
  { id: 'silver', name: '은발', c: '#c8ccd8', ach: 'round2' },
  { id: 'white', name: '백발', c: '#f0eeea', ach: 'lv30' },
  { id: 'gold', name: '금발', c: '#d8b048', ach: 'codex' },
  { id: 'crimson', name: '홍발', c: '#b02a2a', ach: 'hard10' },
  { id: 'pink', name: '분홍 머리', c: '#f0a0c0', cost: 40 },
  { id: 'sky', name: '하늘색 머리', c: '#8ac8f0', cost: 40 },
  { id: 'violet', name: '보랏빛 머리', c: '#7a4ac8', cost: 40 },
  { id: 'teal', name: '청록 머리', c: '#2a9a9a', cost: 40 },
];
const dyeById = Object.fromEntries(DYES.map((d) => [d.id, d]));
const hairById = Object.fromEntries(HAIRS.map((h) => [h.id, h]));
export const TYPE = { sword: 'hero', mage: 'mage', elf: 'elf', lancer: 'lancer', fan: 'fan' };

// 쓸 수 있는지: 업적으로 여는 것은 업적, 구슬로 사는 것은 샀는지
export const unlocked = (game, x) => (x.ach ? !!game.stats?.ach?.[x.ach] : x.cost || x.pass ? owns(game, x) : true);

// 리그를 만들 설정 (입은 장비 + 외형)
export function rigOptions(game, cls) {
  const pr = game.progressOf(cls);
  // 사기 전에 입어 보기: game.lookTry = { cls, k, v } (외형 탭을 닫으면 지움)
  const T = game.lookTry?.cls === cls ? game.lookTry : null;
  const L = T ? { ...(pr.look || {}), [T.k]: T.v } : pr.look || {};
  const ok = (x) => x && (T && L[T.k] === x.id ? true : unlocked(game, x));
  const w0 = item(pr.weapon), o0 = item(pr.outfit);
  const w = L.weapon && game.inv.has(L.weapon) && item(L.weapon)?.cls === cls ? item(L.weapon) : w0;
  let o = L.outfit && game.inv.has(L.outfit) ? item(L.outfit) : o0;
  const dye = dyeById[L.dye];
  if (ok(dye)) o = { ...(o || {}), pal: { ...(o?.pal || {}), ...dye.pal } };
  const gl = {};
  if (!L.gearHide) for (const g of game.equippedGear(cls)) if (g.kind !== 'ring') gl[g.kind] = gearColor(g);
  const opt = { wstyle: w?.style, ...outfitLook(TYPE[cls], o), ...gearLook(gl) };
  const hair = hairById[L.hair];
  if (ok(hair)) opt.hair = hair.c;
  // 꾸밈: 머리 장식·등 장식·오라
  for (const k of ['head', 'back', 'aura']) {
    const x = L[k] && cosOf(k, L[k]);
    if (ok(x)) opt['cos' + k[0].toUpperCase() + k.slice(1)] = x;
  }
  return opt;
}
