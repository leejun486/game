// 기록: 누적 통계, 업적, 몬스터 도감, 장비 도감
// 통계는 game.stats에 모여 저장되고, 업적은 1초마다(그리고 큰 일이 있을 때) 조건을 확인해 달성 알림을 띄움
import { tr } from './i18n.js';
import { WEAPONS, OUTFITS, RARITY } from './items.js';
import { SETS, setBonuses } from './gear.js';
import { CLASSES, CLASS_ORDER } from './classes.js';

export const MONSTERS = [
  { type: 'blue', name: '꼬마 도깨비', region: '월하궁', desc: '방망이를 휘두르며 장난치는 도깨비. 혼쭐을 내면 금방 달아난다.' },
  { type: 'red', name: '붉은 도깨비', region: '월하궁', desc: '힘이 세고 성질이 급한 도깨비. 크게 내려치기 전에 몸을 움츠린다.' },
  { type: 'wisp', name: '도깨비불', region: '월하궁', desc: '떠다니며 푸른 불덩이를 쏜다. 칼로 쳐내면 되돌려 보낼 수 있다.' },
  { type: 'boss', name: '도깨비 대왕 두억시니', region: '월하궁', desc: '도깨비들의 왕. 금방망이를 두드리면 하늘에서 금덩이가 쏟아진다.', boss: true },
  { type: 'fox', name: '여우', region: '죽림', desc: '대숲을 어슬렁거리다 가까이 오면 달려든다.' },
  { type: 'foxfire', name: '여우불', region: '죽림', desc: '주황빛 불덩이. 쓰러뜨리면 여우구슬을 떨어뜨리기도 한다.' },
  { type: 'gumiho', name: '천년 구미호', region: '죽림', desc: '천 년을 산 여우. 분신을 부르고 아홉 꼬리에서 여우불을 쏟아낸다.', boss: true },
  { type: 'jiangshi', name: '강시', region: '폐사찰', desc: '두 팔을 뻗고 깡충깡충 뛰어오르는 망자. 뛰어오를 때 피하라.' },
  { type: 'ghost', name: '원귀', region: '폐사찰', desc: '한을 품고 떠도는 넋. 소매를 늘어뜨리고 둥둥 떠다닌다.' },
  { type: 'reaper', name: '저승사자', region: '폐사찰', desc: '명부를 든 저승의 사자. 이름이 적히면 낙인이 따라붙는다.', boss: true },
  { type: 'waterghost', name: '물귀신', region: '물안개 늪', desc: '물속에서 빨라지고 발목을 잡아끈다. 뭍에서 상대하라.' },
  { type: 'toad', name: '두꺼비 요괴', region: '물안개 늪', desc: '독을 뱉는 커다란 두꺼비. 독에 맞으면 몸이 무거워진다.' },
  { type: 'imugi', name: '천년 이무기', region: '물안개 늪', desc: '용이 되지 못한 뱀. 물속에 숨었다가 발밑에서 솟구친다.', boss: true },
  { type: 'firedok', name: '화염 도깨비', region: '불가사리 협곡', desc: '가마의 불이 도깨비가 된 것. 맞으면 몸에 불이 붙는다.' },
  { type: 'stonegolem', name: '돌장승', region: '불가사리 협곡', desc: '걸어 다니는 장승. 칼이 잘 안 먹히니 얼리거나 기술로 몰아쳐라.' },
  { type: 'bulgasari', name: '쇠먹는 불가사리', region: '불가사리 협곡', desc: '쇠를 먹고 자라는 괴물. 다칠수록 몸이 달아올라 사나워진다.', boss: true },
  { type: 'bandit', name: '산적 도깨비', region: '단풍 산성', desc: '산성을 차지한 도깨비 산적. 몽둥이로 거칠게 후려친다.' },
  { type: 'crow', name: '까마귀 요괴', region: '단풍 산성', desc: '붉은 눈의 큰 까마귀. 하늘에서 깃털 화살을 세 발씩 부채꼴로 쏜다.' },
  { type: 'tiger', name: '범', region: '단풍 산성', desc: '산을 누비는 범. 몸을 낮췄다가 날아 덮친다. 발톱은 봉화의 땔감이 된다.' },
  { type: 'baekho', name: '산군 백호', region: '단풍 산성', desc: '산을 다스리는 흰 범의 왕. 산을 가르며 돌진하고, 다칠수록 쉬지 않고 덮친다.', boss: true },
  { type: 'crab', name: '꽃게 병사', region: '용궁', desc: '용궁의 경비병. 등딱지가 단단해 칼이 덜 먹힌다.' },
  { type: 'jelly', name: '해파리', region: '용궁', desc: '물속을 둥둥 떠다니며 독 방울을 쏜다. 맞으면 몸이 무거워진다.' },
  { type: 'turtle', name: '거북 장군', region: '용궁', desc: '투구를 쓴 거북 경비대장. 아주 단단하고, 등딱지로 내려찍는다.' },
  { type: 'dragon', name: '동해 용왕', region: '용궁', desc: '동해를 다스리는 용. 물속으로 숨었다가 솟구치고, 벼락과 해일을 부른다.', boss: true },
  { type: 'yeomra', name: '염라대왕', region: '저승 시련탑', desc: '저승을 다스리는 왕. 판관들을 불러 다섯 번 판결을 내린다.', boss: true },
];

const bossK = (S, t) => S.bosses?.[t] || 0;
const maxLv = (g) => Math.max(...CLASS_ORDER.map((c) => g.progressOf(c).level || 1), g.player.level);

// 업적: test(game, stats) → 참이면 달성. prog: [지금, 목표] (진행 막대)
export const ACHIEVEMENTS = [
  { id: 'first', name: '첫걸음', desc: '적을 처음 쓰러뜨리기', test: (g, S) => S.kills >= 1 },
  { id: 'tut', name: '배움의 길', desc: '튜토리얼 마치기', test: (g) => g.flags.tut === 1 },
  { id: 'k100', name: '도깨비 사냥꾼', desc: '적 100 처치', prog: (g, S) => [S.kills, 100] },
  { id: 'k1000', name: '백귀야행을 끝낸 자', desc: '적 1000 처치', prog: (g, S) => [S.kills, 1000] },
  { id: 'b_boss', name: '대왕의 방망이', desc: '도깨비 대왕 두억시니 물리치기', test: (g, S) => bossK(S, 'boss') > 0 },
  { id: 'b_gumiho', name: '여우 사냥', desc: '천년 구미호 물리치기', test: (g, S) => bossK(S, 'gumiho') > 0 },
  { id: 'b_reaper', name: '명부를 찢다', desc: '저승사자 물리치기', test: (g, S) => bossK(S, 'reaper') > 0 },
  { id: 'b_imugi', name: '승천을 막다', desc: '천년 이무기 물리치기', test: (g, S) => bossK(S, 'imugi') > 0 },
  { id: 'b_bulgasari', name: '쇠를 녹이다', desc: '쇠먹는 불가사리 물리치기', test: (g, S) => bossK(S, 'bulgasari') > 0 },
  { id: 'b_baekho', name: '산군을 꺾다', desc: '산군 백호 물리치기', test: (g, S) => bossK(S, 'baekho') > 0 },
  { id: 'b_dragon', name: '용궁의 평화', desc: '동해 용왕 물리치기', test: (g, S) => bossK(S, 'dragon') > 0 },
  { id: 'b_yeomra', name: '저승의 판결', desc: '염라대왕 물리치기', test: (g, S) => bossK(S, 'yeomra') > 0 },
  { id: 'main', name: '평안해진 땅', desc: '메인 퀘스트 모두 마치기', test: (g) => g.quest.step > 0 && !g.curQuest() },
  { id: 'ending', name: '달거울 복원', desc: '엔딩 보기', test: (g) => !!g.quest.ended },
  { id: 'round2', name: '다시 찾아온 밤', desc: '두 번째 회차 시작', test: (g) => g.round >= 1 },
  { id: 'round5', name: '끝나지 않는 야행', desc: '다섯 번째 회차 시작', prog: (g) => [g.round + 1, 5] },
  { id: 't5', name: '탑의 문턱', desc: '시련탑 5층 돌파', prog: (g) => [g.towerBest || 0, 5] },
  { id: 't10', name: '염라의 방', desc: '시련탑 10층 돌파', prog: (g) => [g.towerBest || 0, 10] },
  { id: 't20', name: '저승 깊은 곳', desc: '시련탑 20층 돌파', prog: (g) => [g.towerBest || 0, 20] },
  { id: 't30', name: '끝없는 탑', desc: '시련탑 30층 돌파', prog: (g) => [g.towerBest || 0, 30] },
  { id: 'lv10', name: '숙련', desc: '한 직업 Lv.10', prog: (g) => [maxLv(g), 10] },
  { id: 'lv20', name: '고수', desc: '한 직업 Lv.20', prog: (g) => [maxLv(g), 20] },
  { id: 'lv30', name: '달인', desc: '한 직업 Lv.30', prog: (g) => [maxLv(g), 30] },
  { id: 'all4', name: '네 갈래의 길', desc: '네 직업 모두 Lv.10', prog: (g) => [CLASS_ORDER.filter((c) => (g.progressOf(c).level || 1) >= 10).length, 4] },
  { id: 'c50', name: '흐르는 칼끝', desc: '50 연속 타격', prog: (g) => [g.bestCombo, 50] },
  { id: 'c150', name: '멈추지 않는 손', desc: '150 연속 타격', prog: (g) => [g.bestCombo, 150] },
  { id: 'pd1', name: '종이 한 장 차이', desc: '완벽한 회피 성공', test: (g, S) => S.perfect >= 1 },
  { id: 'pd50', name: '바람 같은 몸놀림', desc: '완벽한 회피 50번', prog: (g, S) => [S.perfect, 50] },
  { id: 'hit500', name: '일격필살', desc: '한 방에 500 피해', prog: (g, S) => [S.maxHit, 500] },
  { id: 'legend', name: '전설을 손에', desc: '전설 등급 방어구·장신구 줍기', test: (g, S) => (S.gearTier?.[4] || 0) > 0 },
  { id: 'bossw', name: '보스의 유물', desc: '보스 무기 얻기', test: (g) => [...g.inv].some((id) => /^(sw|mg|bw|sp)B/.test(id)) },
  { id: 'set4', name: '한 벌 차림', desc: '세트 장비 네 부위 모두 착용', test: (g) => CLASS_ORDER.some((c) => Object.values(setBonuses(g.equippedGear(c)).cnt).some((n) => n >= 4)) },
  { id: 'awaken', name: '각성', desc: '기술 하나를 Ⅴ단계까지 수련', test: (g) => CLASS_ORDER.some((c) => Object.values(g.progressOf(c).rank || {}).some((r) => r >= 5)) },
  { id: 'gear100', name: '보따리 장수', desc: '방어구·장신구 100개 줍기', prog: (g, S) => [S.gear || 0, 100] },
  { id: 'bounty10', name: '현상금 사냥꾼', desc: '현상수배 10번 마치기', prog: (g, S) => [S.bounties || 0, 10] },
  { id: 'fall10', name: '칠전팔기', desc: '10번 쓰러지고도 다시 일어서기', prog: (g, S) => [S.deaths || 0, 10] },
  { id: 'codex', name: '요괴 도감', desc: '몬스터 도감 완성', prog: (g, S) => [MONSTERS.filter((m) => S.killsBy?.[m.type]).length, MONSTERS.length] },
];

export function newStats() {
  return { kills: 0, killsBy: {}, bosses: {}, perfect: 0, maxHit: 0, deaths: 0, gear: 0, gearTier: {}, bounties: 0, found: {}, ach: {} };
}

export class Records {
  constructor(game) {
    this.game = game;
    this.t = 0;
    this.pop = document.getElementById('ach-pop');
    this.queue = [];
    this.popT = 0;
  }

  get S() { return this.game.stats; }

  // ---------- 사건 ----------
  kill(e) {
    const S = this.S;
    S.kills++;
    if (e.type === 'foxclone') return;
    S.killsBy[e.type] = (S.killsBy[e.type] || 0) + 1;
    if (e.isBoss) { S.bosses[e.type] = (S.bosses[e.type] || 0) + 1; this.check(); }
  }

  hit(dmg) { if (dmg > this.S.maxHit) this.S.maxHit = dmg; }
  item(id) { this.S.found[id] = 1; }
  gear(g) { this.S.gear++; this.S.gearTier[g.tier] = (this.S.gearTier[g.tier] || 0) + 1; if (g.set) this.S.found['set:' + g.set + ':' + g.kind] = 1; }
  perfect() { this.S.perfect++; }
  death() { this.S.deaths++; }
  bounty() { this.S.bounties++; }

  // ---------- 업적 ----------
  done(A) {
    const g = this.game, S = this.S;
    if (A.test) return !!A.test(g, S);
    const [a, b] = A.prog(g, S);
    return a >= b;
  }

  check() {
    const S = this.S;
    for (const A of ACHIEVEMENTS) {
      if (S.ach[A.id]) continue;
      let ok = false;
      try { ok = this.done(A); } catch { ok = false; }
      if (!ok) continue;
      S.ach[A.id] = Date.now();
      this.queue.push(A);
    }
  }

  update(dt) {
    const g = this.game;
    if (g.state !== 'play') return;
    this.t -= dt;
    if (this.t <= 0) { this.t = 1; this.check(); }
    if (this.popT > 0) { this.popT -= dt; if (this.popT <= 0) this.pop.classList.remove('show'); return; }
    const A = this.queue.shift();
    if (!A) return;
    this.pop.innerHTML = `<small>${tr('업적 달성')}</small><b>${tr(A.name)}</b><span>${tr(A.desc)}</span>`;
    this.pop.classList.add('show');
    this.popT = 3.4;
    g.audio.play('levelup');
    g.save(false);
  }

  // ---------- 기록 창 (메뉴 안의 탭) ----------
  render(el, sub = this.sub || 'ach') {
    this.sub = sub;
    const g = this.game, S = this.S;
    const nA = ACHIEVEMENTS.filter((A) => S.ach[A.id]).length;
    const nM = MONSTERS.filter((m) => S.killsBy[m.type]).length;
    const allItems = [...Object.values(WEAPONS).flat(), ...OUTFITS];
    const has = (id) => g.inv.has(id) || S.found[id];
    const nI = allItems.filter((it) => has(it.id)).length;
    const tabs = [['ach', `업적 ${nA}/${ACHIEVEMENTS.length}`], ['mon', `몬스터 ${nM}/${MONSTERS.length}`], ['item', `장비 ${nI}/${allItems.length}`], ['stat', '통계']];
    let body = '';
    if (sub === 'ach') {
      body = ACHIEVEMENTS.map((A) => {
        const got = !!S.ach[A.id];
        let bar = '';
        if (!got && A.prog) { const [a, b] = A.prog(g, S); bar = `<i class="rbar"><i style="width:${Math.min(100, (a / b) * 100).toFixed(0)}%"></i></i><em>${Math.min(a, b)}/${b}</em>`; }
        return `<div class="rec-a${got ? ' got' : ''}"><b>${got ? '★' : '☆'} ${A.name}</b><span>${A.desc}</span>${bar}</div>`;
      }).join('');
    } else if (sub === 'mon') {
      body = MONSTERS.map((m) => {
        const n = S.killsBy[m.type] || 0;
        if (!n) return `<div class="rec-m unk"><b>???</b><span>${m.region}</span></div>`;
        return `<div class="rec-m${m.boss ? ' boss' : ''}"><b>${m.name}</b><em>${m.region} · 처치 ${n}</em><span>${m.desc}</span></div>`;
      }).join('');
    } else if (sub === 'item') {
      const row = (list) => list.map((it) => {
        const ok = has(it.id);
        return `<div class="rec-i${ok ? '' : ' unk'}" style="--rc:${RARITY[it.tier].color}">${ok ? it.name : '???'}</div>`;
      }).join('');
      body = CLASS_ORDER.map((c) => `<h4>${CLASSES[c].title}</h4><div class="rec-grid">${row(WEAPONS[c])}</div>`).join('') +
        `<h4>옷</h4><div class="rec-grid">${row(OUTFITS)}</div>` +
        `<h4>세트</h4><div class="rec-grid">${Object.entries(SETS).map(([sid, St]) => { const n = ['gloves', 'legs', 'belt', 'ring'].filter((k) => S.found['set:' + sid + ':' + k]).length; return `<div class="rec-i${n ? '' : ' unk'}" style="--rc:${St.color}">${n ? St.name : '???'} ${n}/4</div>`; }).join('')}</div>`;
    } else {
      const t = Math.round(g.playTime || 0), hh = Math.floor(t / 3600), mm = Math.floor((t % 3600) / 60);
      const bossN = Object.values(S.bosses).reduce((a, b) => a + b, 0);
      const rows = [
        ['플레이 시간', hh ? `${hh}시간 ${mm}분` : `${mm}분`], ['퇴치', S.kills], ['보스 처치', bossN], ['최고 연속', g.bestCombo],
        ['완벽한 회피', S.perfect], ['쓰러짐', S.deaths], ['최대 한 방', S.maxHit], ['주운 방어구·장신구', S.gear],
        ['전설 장비', S.gearTier[4] || 0], ['현상수배', S.bounties], ['회차', g.round + 1], ['시련탑', `${g.towerBest || 0}층`],
        ...CLASS_ORDER.map((c) => [`${CLASSES[c].title}`, `Lv.${g.progressOf(c).level || 1}`]),
      ];
      body = `<div class="rec-stats">${rows.map(([k, v]) => `<div><span>${k}</span><b>${v}</b></div>`).join('')}</div>`;
    }
    el.innerHTML = `<h3>기록</h3><div class="rec-tabs">${tabs.map(([k, n]) => `<button data-r="${k}" class="${k === sub ? 'on' : ''}">${n}</button>`).join('')}</div><div class="rec-body">${body}</div>`;
    for (const b of el.querySelectorAll('[data-r]')) b.addEventListener('click', () => this.render(el, b.dataset.r));
  }
}
