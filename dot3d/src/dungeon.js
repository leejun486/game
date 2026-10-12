// 시간 던전: 하루에 던전마다 60분. 안에 있는 동안만 시간이 줄고(메뉴·가방을 연 동안은 멈춤), 날이 바뀌면 다시 60분
//  - 잠든 서고: 저승 명부를 지키던 혼령의 서고. 강화 주문서가 쏟아짐 (저승사자를 물리치면 열림)
//  - 도깨비 곳간: 도깨비들이 모아 둔 보물 곳간. 방어구·장신구·무기·갑옷이 나옴 (도깨비 대왕을 물리치면 열림)
//  - 달빛 광맥: 달빛이 굳은 돌이 박힌 광맥. 무기 세공석이 나옴 (불가사리를 물리치면 열림)
//  시련탑 마당을 빌려 쓰고(game.tower.mode = 'dungeon'), 색감은 던전마다 다른 지역의 것
//  적은 끊이지 않게 계속 나오고(레벨에 맞춤, 정예 섞임), 4분마다 수호자(보스)가 나옴
//  기록은 game.ext.dg = { day, used: {던전: 쓴 초}, total }
import { today } from './shop.js';
import { makeGear, rollGearTier, makeSetPiece, SETS } from './gear.js';
import { rollDrop, item } from './items.js';
import { canChallenge } from './challenge.js';
import { MATS } from './enhance.js';

export const DAILY_SEC = 3600;
export const DUNGEONS = {
  scroll: {
    name: '잠든 서고', sub: '명부를 지키던 혼령의 서고', unlock: 'reaper', unlockName: '저승사자',
    loot: '강화 주문서 (무기·갑옷·장신구), 축복받은 주문서, 수호자에게서 요괴 혼석',
    pool: ['ghost', 'jiangshi', 'wisp', 'gungnyeo', 'shadowfairy', 'foxfire'], guard: 'reaper', theme: 'tomb', color: '#a8b8ff',
  },
  gear: {
    name: '도깨비 곳간', sub: '도깨비들이 숨겨 둔 보물 곳간', unlock: 'boss', unlockName: '도깨비 대왕',
    loot: '방어구·장신구(높은 등급이 잘 나옴), 세트 조각, 무기·갑옷',
    pool: ['blue', 'red', 'imp', 'gambler', 'tanuki', 'bandit'], guard: 'dokgak', theme: 'market', color: '#ffd76a',
  },
  stone: {
    name: '달빛 광맥', sub: '달빛이 굳어 박힌 돌의 굴', unlock: 'bulgasari', unlockName: '불가사리',
    loot: '거친·맑은·달빛 세공석 (무기 옵션 새기기)',
    pool: ['stonegolem', 'icedok', 'muinseok', 'firedok', 'crab', 'icewisp'], guard: 'bulgasari', theme: 'snowfield', color: '#bfe8ff',
  },
};
export const DG_ORDER = ['scroll', 'gear', 'stone'];
const GUARD_EVERY = 240; // 수호자 간격 (초)
const KEEP = 9;          // 늘 이만큼은 살아 있게

export function dgState(g) {
  const E = (g.ext.dg ||= { day: null, used: {}, total: 0 });
  if (E.day !== today()) { E.day = today(); E.used = {}; }
  return E;
}
export const dgLeft = (g, id) => Math.max(0, DAILY_SEC - (dgState(g).used[id] || 0));
export const dgOpen = (g, id) => !!g.stats.killsBy?.[DUNGEONS[id].unlock];
const mmss = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

export function startDungeon(g, id) {
  const D = DUNGEONS[id];
  if (!D) return '없는 던전이에요';
  if (!dgOpen(g, id)) return `${D.unlockName}를 물리치면 열려요`;
  const err = canChallenge(g);
  if (err) return err.replace('도전할', '들어갈');
  if (dgLeft(g, id) <= 0) return '오늘 시간을 다 썼어요 (내일 다시 60분)';
  const p = g.player;
  g.towerReturn = p.pos.clone();
  g.tower = { active: true, mode: 'dungeon', dg: id, floor: Math.max(3, Math.round(p.level * 0.75)), best: 0, cleared: false, lastT: g.time, kills: 0, loot: {}, guardAt: g.time + GUARD_EVERY, spawnAt: g.time + 2 };
  g.teleport(0, g.towerZ() + 8);
  g.audio.play('portal');
  p.hp = p.maxHp;
  const logo = document.getElementById('logo');
  if (logo) logo.innerHTML = `<span class="han">${D.name}</span><span class="sub">${D.sub}</span>`;
  g.ui.banner(D.name, `오늘 남은 시간 ${mmss(dgLeft(g, id))}`, 2.6, 'title-banner');
  g.stats.dungeons = (g.stats.dungeons || 0) + 1;
  g.updateQuest();
  return '';
}

// 매 프레임 (updateTower에서): 시간 줄이기 · 적 채우기 · 수호자
export function updateDungeon(g) {
  const T = g.tower, D = DUNGEONS[T.dg];
  const dt = Math.max(0, Math.min(0.25, g.time - T.lastT));
  T.lastT = g.time;
  if (T.ending || g.player.dead) return;
  const E = dgState(g);
  E.used[T.dg] = (E.used[T.dg] || 0) + dt;
  E.total = (E.total || 0) + dt;
  g.stats.dgTime = (g.stats.dgTime || 0) + dt;
  if (E.used[T.dg] >= DAILY_SEC) {
    T.ending = true;
    g.ui.banner('시간 끝', `${D.name} — 오늘의 60분을 다 썼어요`, 3, 'win-banner');
    g.audio.play('victory');
    g.after(3.2, () => { if (g.tower?.mode === 'dungeon') g.leaveTower(); });
    return;
  }
  const alive = g.enemies.filter((e) => !e.dead && !e.field).length + g.spawnQueue.length;
  if (g.time > T.spawnAt && alive < KEEP) {
    T.spawnAt = g.time + 0.5;
    const n = Math.min(3, KEEP - alive);
    for (let i = 0; i < n; i++) g.spawnQueue.push({ type: D.pool[Math.floor(Math.random() * D.pool.length)], elite: Math.random() < 0.15, at: g.time + 0.3 + i * 0.35 });
  }
  if (g.time > T.guardAt) {
    T.guardAt = g.time + GUARD_EVERY;
    g.spawnQueue.push({ type: D.guard, at: g.time + 0.8, guard: true });
    g.audio.play('gong');
    g.ui.toast(`수호자가 나타났다 — ${D.name}`, 2.4);
  }
  if (Math.floor(E.used[T.dg]) % 5 === 0) g.updateQuest();
}

// 처치 보상 (던전에서는 보통의 주문서·장비 떨어짐 대신 이것)
export function dungeonLoot(g, e) {
  const T = g.tower, id = T.dg, lv = Math.max(1, e.lvl || 1) + g.round;
  T.kills++;
  const add = (k, n = 1) => { T.loot[k] = (T.loot[k] || 0) + n; };
  const r = Math.random;
  const scroll = () => ['scrollW', 'scrollA', 'scrollG'][Math.floor(r() * 3)];
  if (id === 'scroll') {
    const m = {};
    const give = (k, n = 1) => { m[k] = (m[k] || 0) + n; add(k, n); };
    if (e.isBoss) { for (let i = 0; i < 4 + (r() < 0.5 ? 1 : 0); i++) give(scroll()); if (r() < 0.5) give('bless'); if (r() < 0.3) give('soul'); }
    else if (e.elite) { give(scroll()); if (r() < 0.5) give(scroll()); if (r() < 0.08) give('bless'); }
    else { if (r() < 0.16) give(scroll()); if (r() < 0.005) give('bless'); }
    g.gainMats(m, e.pos);
  } else if (id === 'gear') {
    const drops = [];
    if (e.isBoss) {
      for (let i = 0; i < 3; i++) drops.push(makeGear(lv, rollGearTier(0.8, g.round)));
      if (r() < 0.5) { const sets = Object.keys(SETS); drops.push(makeSetPiece(sets[Math.floor(r() * sets.length)], lv)); }
      if (r() < 0.35) { const it = rollDrop('boss', g.round, g.player.cls); if (it) drops.push(it); }
    } else if (e.elite) drops.push(makeGear(lv, rollGearTier(0.5, g.round)));
    else {
      if (r() < 0.15) drops.push(makeGear(lv, rollGearTier(0.25, g.round)));
      if (r() < 0.01) { const it = rollDrop(e.type, g.round, g.player.cls); if (it) drops.push(it); }
    }
    for (const d of drops) { g.spawnDrop(e.pos, d); add(typeof d === 'object' ? 'gearN' : 'itemN'); }
  } else {
    const m = {};
    const give = (k, n = 1) => { m[k] = (m[k] || 0) + n; add(k, n); };
    if (e.isBoss) { give('stoneR', 3); give('stoneC', 2); if (r() < 0.25) give('stoneM'); }
    else if (e.elite) { give('stoneR'); if (r() < 0.3) give('stoneC'); if (r() < 0.03) give('stoneM'); }
    else { if (r() < 0.12) give('stoneR'); if (r() < 0.03) give('stoneC'); if (r() < 0.004) give('stoneM'); }
    g.gainMats(m, e.pos);
  }
}

// 얻은 것 한 줄
export function lootLine(T) {
  const L = T.loot, parts = [];
  for (const k of Object.keys(L)) {
    if (k === 'gearN') parts.push(`장비 ${L[k]}`);
    else if (k === 'itemN') parts.push(`무기·갑옷 ${L[k]}`);
    else parts.push(`${MATS[k]?.name || k} ${L[k]}`);
  }
  return parts.join(' · ') || '아직 없음';
}

export function dungeonQuest(g) {
  const T = g.tower, D = DUNGEONS[T.dg];
  return [`${D.name} · 남은 시간 ${mmss(dgLeft(g, T.dg))}`, `처치 <b>${T.kills}</b> · 다음 수호자 ${mmss(Math.max(0, T.guardAt - g.time))}<br>얻은 것: ${lootLine(T)}<br>남쪽 홍살문으로 나가면 시간이 멈춰요`];
}

// 시간 던전 창 (일시정지 창 안)
export function renderDungeons(g, el, msg = '') {
  el.innerHTML = `<h3>시간 던전</h3>
    <div class="cx-sum">던전마다 <b>하루 60분</b>. 안에 있는 동안만 시간이 줄고, 나왔다가 다시 들어가도 남은 시간에서 이어져요. 적은 끊이지 않고 나오고 4분마다 수호자가 나와요. 날이 바뀌면 다시 60분.</div>
    ${msg ? `<div class="enh-msg shop-msg">${msg}</div>` : ''}
    <div class="dg-list">${DG_ORDER.map((id) => {
      const D = DUNGEONS[id], open = dgOpen(g, id), left = dgLeft(g, id);
      return `<div class="dg-card${open ? '' : ' lock'}" style="--dg:${D.color}"><div class="dg-t"><b>${D.name}</b><small>${D.sub}</small></div>
        <div class="dg-loot">나오는 것: ${D.loot}</div>
        <div class="dg-bar"><i style="width:${(left / DAILY_SEC) * 100}%"></i><span>오늘 남은 시간 ${mmss(left)}</span></div>
        ${open ? `<button class="pz-btn main" data-dg="${id}" ${left > 0 ? '' : 'disabled'}>${left > 0 ? '들어가기' : '내일 다시'}</button>` : `<small class="how">${D.unlockName}를 물리치면 열려요</small>`}</div>`;
    }).join('')}</div>`;
  for (const b of el.querySelectorAll('[data-dg]')) b.addEventListener('click', () => {
    const err = startDungeon(g, b.dataset.dg);
    if (err) { g.audio.play('denied'); renderDungeons(g, el, err); } else g.togglePause(false);
  });
}
