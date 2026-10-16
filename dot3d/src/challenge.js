// 보스 도전: 이미 물리친 보스와 저승 시련탑 마당에서 다시 싸움
//  - 다시 싸우기: 보스 하나. 하루 세 번까지 혼석·엽전 보상이 두둑함 (그 뒤로는 장비·경험치만)
//  - 연속 도전(보스 러시): 물리친 보스를 차례로 모두. 사이마다 체력 30% 회복, 쓰러지면 끝.
//    넘은 보스 수·걸린 시간이 기록되고, 끝나면 넘은 보스 수만큼 엽전·혼석
//  강함은 플레이어 레벨에 맞춤 (game.tower의 층수를 빌려 씀: mode가 붙은 tower)
//  기록은 game.ext: { chDay, chUsed, rushBest, rushTime }
import { today } from './shop.js';
import { weeklySet, weekState, weekNo, daysLeft, board, addFriend, myCode, fmtTime, tagName, shareRecord, saveCard } from './weekly.js';
import { CLASSES } from './classes.js';

// 보스 순서 (이야기 순서) · 이름
export const BOSS_ORDER = ['boss', 'gumiho', 'reaper', 'imugi', 'bulgasari', 'baekho', 'dragon', 'centipede', 'frostgiant', 'eodum', 'dokgak', 'jangsan', 'noegong'];
export const BOSS_NAME = { boss: '도깨비 대왕', gumiho: '천년 구미호', reaper: '저승사자', imugi: '천년 이무기', bulgasari: '불가사리', baekho: '산군 백호', dragon: '동해 용왕', centipede: '천년 왕지네', frostgiant: '동장군', eodum: '어둑시니', dokgak: '독각귀', jangsan: '장산범', noegong: '뇌공' };
const ADDS = { boss: ['red', 'blue'], gumiho: ['fox', 'foxfire'], reaper: ['ghost', 'jiangshi'], imugi: ['waterghost', 'toad'], bulgasari: ['firedok', 'stonegolem'], baekho: ['tiger', 'bandit'], dragon: ['crab', 'jelly'], centipede: ['mantis', 'bee'], frostgiant: ['wolf', 'icedok'], eodum: ['tombsoldier', 'gungnyeo'], dokgak: ['imp', 'gambler'], jangsan: ['fishman', 'mudghost'], noegong: ['thunderkid', 'shadowfairy'] };
export const DAILY_REMATCH = 3;

export const beaten = (g) => BOSS_ORDER.filter((b) => g.stats.killsBy?.[b]);
export function rematchLeft(g) {
  const E = g.ext;
  if (E.chDay !== today()) { E.chDay = today(); E.chUsed = 0; }
  return Math.max(0, DAILY_REMATCH - (E.chUsed || 0));
}
// 탑 층수로 치면 몇 층쯤인지: 레벨에 맞춘 강함
const floorFor = (g) => Math.max(3, Math.round(g.player.level * 0.75));

export function canChallenge(g) {
  if (g.state !== 'play' || g.player.dead) return '지금은 도전할 수 없어요';
  if (g.waveActive || g.stage === 2) return '싸우는 중에는 도전할 수 없어요';
  if (g.tower?.active) return '시련탑 안에서는 도전할 수 없어요';
  return '';
}

// 도전 시작: mode 'rematch'(type 하나) 또는 'rush'(물리친 보스 모두)
export function startChallenge(g, mode, type) {
  const err = canChallenge(g);
  if (err) return err;
  const wk = mode === 'weekly' ? weeklySet() : null;
  const list = mode === 'rush' ? beaten(g) : wk ? wk.bosses : [type];
  if (!list.length || (mode !== 'rematch' && beaten(g).length < 3)) return '보스를 셋 이상 물리쳐야 연속 도전을 할 수 있어요';
  const p = g.player;
  g.towerReturn = p.pos.clone();
  g.tower = { active: true, mode, list, idx: 0, floor: floorFor(g), best: 0, cleared: true, t0: g.time, rewardOk: mode === 'rematch' && rematchLeft(g) > 0 };
  if (g.tower.rewardOk) g.ext.chUsed = (g.ext.chUsed || 0) + 1;
  // 주간 경연: 규칙이 붙고(질풍·어둠·유리 몸), 시간은 첫 보스가 나올 때부터
  if (wk) { g.tower.rule = wk.rule; g.tower.week = wk.week; weekState(g).tries++; }
  g.teleport(0, g.towerZ() + 8);
  g.audio.play('portal');
  p.hp = p.maxHp;
  if (wk) g.ui.banner('주간 경연', `${wk.rule.name} — ${wk.rule.desc}`, 2.6, 'boss-banner');
  else g.ui.banner(mode === 'rush' ? '보스 연속 도전' : '보스 다시 싸우기', mode === 'rush' ? `보스 ${list.length}마리 · 쓰러지면 끝` : `${BOSS_NAME[type]}${g.tower.rewardOk ? '' : ' · 오늘 보상은 다 받았어요'}`, 2.6, 'boss-banner');
  g.after(2.4, () => spawnNext(g));
  g.updateQuest();
  return '';
}

function spawnNext(g) {
  const T = g.tower;
  if (!T?.active || !T.mode) return;
  const b = T.list[T.idx];
  T.cleared = false;
  const next = g.world.portals.find((x) => x.kind === 'next');
  if (next.mesh) next.mesh.visible = false;
  g.spawnQueue.push({ type: b, at: g.time + 0.6 });
  if (T.mode === 'weekly' && T.idx === 0) T.t0 = g.time + 0.6;
  // 연속 도전은 졸개 없이 보스만, 다시 싸우기는 졸개 둘
  if (T.mode === 'rematch') for (let i = 0; i < 2; i++) g.spawnQueue.push({ type: ADDS[b][i % 2], at: g.time + 1.8 + i * 0.4 });
  g.audio.play('gong');
  if (T.mode !== 'rematch') g.ui.banner(`${T.idx + 1} / ${T.list.length}`, `${BOSS_NAME[b]} 출현!`, 2, 'boss-banner');
  g.updateQuest();
}

// 보스(와 졸개)를 모두 쓰러뜨렸을 때 (updateTower에서 부름)
export function challengeClear(g) {
  const T = g.tower, p = g.player;
  T.cleared = true;
  const b = T.list[T.idx];
  g.dailyGoals.event('tower');
  if (T.mode === 'rematch') {
    if (T.rewardOk) {
      g.gainMats({ soul: 1 + (g.difficulty === 'hard' ? 1 : 0), [['scrollW', 'scrollA', 'scrollG'][Math.floor(Math.random() * 3)]]: 2 });
      g.shop.gain(300 + p.level * 10, p.pos.clone().add(new p.pos.constructor(0, 2.8, 0)));
    }
    g.stats.rematch = (g.stats.rematch || 0) + 1;
    g.audio.play('victory');
    g.ui.banner('격파!', `${BOSS_NAME[b]}${T.rewardOk ? ` · 오늘 남은 보상 ${rematchLeft(g)}번` : ''}`, 3, 'win-banner');
    g.after(4, () => { if (g.tower?.mode) g.leaveTower(); });
  } else {
    T.idx++;
    T.best = T.idx;
    if (T.idx < T.list.length) {
      p.hp = Math.min(p.maxHp, p.hp + Math.round(p.maxHp * 0.3));
      g.fx.number(p.pos.clone().add(new p.pos.constructor(0, 2.2, 0)), '+30%', 'heal');
      g.ui.banner(`${T.idx}/${T.list.length} 격파`, '체력 30% 회복 · 다음 보스가 온다', 2.2, 'win-banner');
      g.audio.play('victory');
      g.after(3, () => spawnNext(g));
    } else if (T.mode === 'weekly') finishWeekly(g);
    else finishRush(g, true);
  }
  g.records.check();
  g.updateQuest();
  g.save(false);
}

// 연속 도전 끝 (다 넘었거나 쓰러졌거나): 넘은 보스 수만큼 보상
export function finishRush(g, all) {
  const T = g.tower, n = T.idx;
  if (T.rushDone) return;
  T.rushDone = true;
  const secs = Math.round(g.time - T.t0);
  const E = g.ext;
  const newBest = n > (E.rushBest || 0) || (n === (E.rushBest || 0) && n > 0 && secs < (E.rushTime || 1e9));
  if (newBest) { E.rushBest = n; E.rushTime = secs; }
  if (n) {
    g.shop.gain(n * 150);
    g.gainMats({ soul: Math.floor(n / 3) + (all ? 1 : 0) });
  }
  const mm = Math.floor(secs / 60), ss = String(secs % 60).padStart(2, '0');
  const line = `보스 ${n}/${T.list.length} · ${mm}:${ss}${newBest ? ' · 최고 기록!' : ''}${n ? ` · 엽전 +${n * 150}` : ''}`;
  if (all) {
    g.audio.play('victory');
    g.ui.banner('연속 도전 완주!', line, 3.4, 'win-banner');
    g.after(4.2, () => { if (g.tower?.mode) g.leaveTower(); });
  } else g.after(0.3, () => g.ui.toast(`연속 도전 끝 — ${line}`, 4));
  g.records.check();
}

// 주간 경연 완주: 기록 갱신, 이번 주 첫 완주 보상, 기록 카드
function finishWeekly(g) {
  const T = g.tower, p = g.player, W = weekState(g);
  if (T.rushDone) return;
  T.rushDone = true;
  const ds = Math.max(1, Math.round((g.time - T.t0) * 10));
  const best = !W.best || ds < W.best;
  if (best && T.week === W.week) Object.assign(W, { best: ds, cls: p.cls, lv: p.level });
  g.stats.weekly = (g.stats.weekly || 0) + 1;
  if (!W.paid && T.week === W.week) {
    W.paid = true;
    g.gainMats({ soul: 1 });
    g.shop.gain(500 + p.level * 10);
  }
  g.audio.play('victory');
  g.ui.banner('주간 경연 완주!', `${fmtTime(ds)}${best ? ' · 최고 기록!' : ''}`, 3.4, 'win-banner');
  showWeekCard(g, ds, best);
  g.after(4.2, () => { if (g.tower?.mode) g.leaveTower(); });
}

// 기록 카드 (완주 직후): 시간 · 내 순위 · 코드 · 자랑하기 · 그림 저장
export function showWeekCard(g, ds, best) {
  const el = document.getElementById('wk-card');
  if (!el) return;
  const W = weekState(g), rows = board(g), rank = rows.findIndex((r) => r.me) + 1;
  el.innerHTML = `<div class="aw-t">주간 경연 완주!</div>
    <div class="wk-time">${fmtTime(ds)}</div>
    <div class="aw-n">${best ? '<span>최고 기록!</span>' : `<span>최고 기록</span> <b>${fmtTime(W.best)}</b>`}${rows.length > 1 ? ` · <b>${rank} / ${rows.length}</b>` : ''}</div>
    <div class="wk-code"><span>내 기록 코드</span><b>${myCode(g)}</b></div>
    <div class="wk-btns"><button class="tbtn main" data-share>자랑하기</button><button class="tbtn" data-img>그림 저장</button><button class="tbtn" data-close>닫기</button></div>
    <div class="aw-n wk-msg"></div>`;
  const msg = el.querySelector('.wk-msg');
  el.querySelector('[data-share]').onclick = async () => { const r = await shareRecord(g); if (r === 'copied') msg.textContent = '복사했어요 — 친구에게 붙여 넣어 보내세요'; else if (r === 'fail') msg.textContent = myCode(g); };
  el.querySelector('[data-img]').onclick = () => saveCard(g);
  el.querySelector('[data-close]').onclick = () => el.classList.remove('show');
  el.classList.add('show');
}

// 퀘스트 창 글
export function challengeQuest(g) {
  const T = g.tower;
  const left = g.enemies.filter((e) => !e.dead && !e.field).length + g.spawnQueue.length;
  const b = T.list[Math.min(T.idx, T.list.length - 1)];
  if (T.mode === 'weekly') return [`주간 경연 · ${Math.min(T.idx + 1, T.list.length)}/${T.list.length}`, `<b>${BOSS_NAME[b]}</b> · <span>${T.rule.name}</span><br><span>걸린 시간</span> <b>${fmtTime(Math.max(0, Math.round((g.time - T.t0) * 10)))}</b> · <span>그만두려면 남쪽 홍살문으로</span>`];
  if (T.mode === 'rush') return [`보스 연속 도전 · ${Math.min(T.idx + 1, T.list.length)}/${T.list.length}`, `<b>${BOSS_NAME[b]}</b> · 남은 적 <b>${left}</b><br>최고 기록 <b>${g.ext.rushBest || 0}</b> · 그만두려면 남쪽 홍살문으로`];
  return [`보스 다시 싸우기`, T.cleared ? '격파! 곧 돌아가요' : `<b>${BOSS_NAME[b]}</b> · 남은 적 <b>${left}</b>`];
}

// 도전 창 (일시정지 창 안)
export function renderChallenge(g, el, msg = '') {
  const B = beaten(g), left = rematchLeft(g);
  const t = g.ext.rushTime || 0;
  el.innerHTML = `<h3>보스 도전</h3>
    <div class="cx-sum">오늘 다시 싸우기 보상 <b>${left}/${DAILY_REMATCH}</b> · 연속 도전 최고 기록 <b>${g.ext.rushBest || 0}${t ? ` (${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')})` : ''}</b></div>
    ${msg ? `<div class="enh-msg shop-msg">${msg}</div>` : ''}
    ${weeklyHtml(g)}
    <div class="ch-rush"><div><b>연속 도전</b><small>물리친 보스 ${B.length}마리를 차례로 · 사이마다 체력 30% 회복 · 쓰러지면 끝 · 넘은 보스마다 엽전 150 · 셋마다 요괴 혼석</small></div><button class="pz-btn main" data-rush ${B.length >= 3 ? '' : 'disabled'}>도전</button></div>
    <h4 class="cx-h">다시 싸우기</h4>
    <div class="pz-note" style="margin-top:0">레벨에 맞춰 강해진 보스와 졸개 둘. 하루 세 번까지 요괴 혼석·주문서·엽전을 받아요 (그 뒤로는 장비·경험치만). 보스 무기도 다시 노릴 수 있어요.</div>
    <div class="cx-grid">${BOSS_ORDER.map((b) => g.stats.killsBy?.[b] ? `<div class="cx-card on"><b>${BOSS_NAME[b]}</b><small>처치 ${g.stats.killsBy[b]}</small><button class="pz-btn" data-re="${b}">싸우기</button></div>` : '<div class="cx-card lock"><b>???</b><small>아직 물리치지 못함</small></div>').join('')}</div>`;
  const go = (err) => { if (err) { g.audio.play('denied'); renderChallenge(g, el, err); } else { g.togglePause(false); } };
  el.querySelector('[data-rush]')?.addEventListener('click', () => go(startChallenge(g, 'rush')));
  el.querySelector('[data-week]')?.addEventListener('click', () => go(startChallenge(g, 'weekly')));
  el.querySelector('[data-wk-share]')?.addEventListener('click', async () => { const r = await shareRecord(g); if (r === 'copied') renderChallenge(g, el, '복사했어요 — 친구에게 붙여 넣어 보내세요'); });
  el.querySelector('[data-wk-img]')?.addEventListener('click', () => saveCard(g));
  el.querySelector('[data-wk-add]')?.addEventListener('click', () => {
    const v = el.querySelector('.wk-in').value.trim();
    if (!v) return;
    const err = addFriend(g, v);
    if (err) g.audio.play('denied'); else g.save(false);
    renderChallenge(g, el, err || '친구 기록을 더했어요');
  });
  for (const b of el.querySelectorAll('[data-re]')) b.addEventListener('click', () => go(startChallenge(g, 'rematch', b.dataset.re)));
}

// 도전 창 맨 위: 이번 주 경연 · 순위표 · 친구 코드 넣기
function weeklyHtml(g) {
  const S = weeklySet(), W = weekState(g), rows = board(g), B = beaten(g);
  const name = (r) => (r.me ? '나' : tagName(r.tag));
  return `<div class="wk-box">
    <div class="ch-rush"><div><b>주간 경연</b> <small class="wk-week">제${S.week}주 · ${daysLeft()}일 남음</small>
      <small>${S.bosses.map((b) => `<span>${BOSS_NAME[b]}</span>`).join(' · ')}<br><span class="wk-rule">${S.rule.name}</span> — <span>${S.rule.desc}</span><br><span>모두 같은 보스·규칙 · 빠를수록 높은 순위 · 이번 주 첫 완주에 요괴 혼석·엽전</span></small></div>
      <button class="pz-btn main" data-week ${B.length >= 3 ? '' : 'disabled'}>도전</button></div>
    <div class="wk-board">${rows.length ? rows.map((r, i) => `<div class="${r.me ? 'me' : ''}"><span>${i + 1}</span><span>${name(r)}</span><span><span>${CLASSES[r.cls]?.title || ''}</span> Lv.${r.lv}</span><b>${fmtTime(r.ds)}</b></div>`).join('') : '<div class="wk-empty">아직 기록이 없어요</div>'}</div>
    ${W.best ? `<div class="wk-code"><span>내 기록 코드</span><b>${myCode(g)}</b></div><div class="wk-btns"><button class="pz-btn" data-wk-share>자랑하기</button><button class="pz-btn" data-wk-img>그림 저장</button></div>` : ''}
    <div class="wk-add"><input class="wk-in" maxlength="24" placeholder="친구 기록 코드 붙여 넣기" aria-label="친구 기록 코드"><button class="pz-btn" data-wk-add>더하기</button></div>
  </div>`;
}
