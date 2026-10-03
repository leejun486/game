// 처음 하는 사람을 위한 안내
//  - 튜토리얼: 새로 시작하면 이동 → 공격 → 피하기 → 기술 → 자동 이동을 직접 해 보며 익힘 (건너뛸 수 있음)
//  - 도움말: 기술 수련, 첫 보스, 처음 쓰러졌을 때 등 처음 겪는 순간에 한 번씩
// 입력 장치(키보드·터치·게임패드)에 맞춰 안내 문구가 바뀌고, 바꾼 키 배치도 반영함
import { tr } from './i18n.js';
import { keyOf, keyName } from './settings.js';

// {키} 자리는 지금 키 배치의 이름, {skill}은 직업의 기술 이름
// 받침이 있으면 '을', 없으면 '를'
const eul = (w) => { const c = w.charCodeAt(w.length - 1) - 0xac00; return c >= 0 && c < 11172 && c % 28 ? '을' : '를'; };

const STEPS = [
  { id: 'move', title: '이동', goal: 5,
    key: 'WASD나 방향키로 움직여 보세요', touch: '화면 왼쪽 아래를 끌어서 움직여 보세요', pad: '왼쪽 스틱으로 움직여 보세요' },
  { id: 'atk', title: '공격', goal: 3,
    key: '{atk} 키나 마우스 왼쪽 클릭으로 공격해 보세요 (3번)', touch: '오른쪽 아래 큰 버튼으로 공격해 보세요 (3번)', pad: 'A 버튼으로 공격해 보세요 (3번)' },
  { id: 'dash', title: '피하기', goal: 1,
    key: '{dash} 키로 피해 보세요. 피하는 순간에는 맞지 않아요', touch: '피하기 버튼을 눌러 보세요. 피하는 순간에는 맞지 않아요', pad: 'B 버튼으로 피해 보세요. 피하는 순간에는 맞지 않아요' },
  { id: 'skill', title: '기술', goal: 1,
    key: '{skill} 키나 마우스 오른쪽 클릭으로 「{name}」{을} 써 보세요', touch: '「{name}」 버튼을 눌러 보세요', pad: 'X 버튼으로 「{name}」{을} 써 보세요' },
  { id: 'auto', title: '자동 이동', goal: 1,
    key: '오른쪽 위 임무 창을 누르거나 {auto} 키를 누르면 할 일이 있는 곳까지 알아서 가요', touch: '오른쪽 위 임무 창을 누르면 할 일이 있는 곳까지 알아서 가요', pad: '십자키 ↑를 누르면 할 일이 있는 곳까지 알아서 가요' },
];

const TIPS = {
  evo: { title: '기술 수련', key: '수련점이 생겼어요! {skills} 키로 기술 창을 열어 갈래를 고르면 기술이 바뀌어요', touch: '수련점이 생겼어요! 왼쪽 「기술」 버튼으로 창을 열어 갈래를 고르면 기술이 바뀌어요', pad: '수련점이 생겼어요! 십자키 ←로 기술 창을 열어 갈래를 고르면 기술이 바뀌어요' },
  boss: { title: '보스', all: '바닥에 붉은 원이 차오르면 그 자리를 피하세요. 체력이 2/3, 1/3 남으면 포효하며 공격이 바뀌어요' },
  death: { title: '다시 일어서기', all: '공격이 닿기 직전에 피하면 「완벽한 회피」! 시간이 느려지고 다음 한 방이 반드시 치명타가 돼요' },
  bag: { title: '장비', key: '장비를 주웠어요. {bag} 키로 가방을 열어 눌러서 착용하세요', touch: '장비를 주웠어요. 왼쪽 「가방」 버튼으로 열어 눌러서 착용하세요', pad: '장비를 주웠어요. Back 버튼으로 가방을 열어 착용하세요' },
  rune: { title: '각인', all: 'Ⅱ단계부터는 단계마다 각인을 하나씩 골라요. 각인은 수련점 없이 언제든 바꿀 수 있어요' },
  hunt: { title: '자동 사냥', key: '{hunt} 키로 자동 사냥을 켜면 가까운 적을 찾아 기술까지 써 가며 싸워요', touch: '「자동 사냥」 버튼을 켜면 가까운 적을 찾아 기술까지 써 가며 싸워요', pad: '십자키 ↓로 자동 사냥을 켜면 가까운 적을 찾아 기술까지 써 가며 싸워요' },
};

export class Coach {
  constructor(game) {
    this.game = game;
    this.el = document.getElementById('coach');
    this.step = -1;
    this.tipT = 0;
    document.getElementById('coach-skip').addEventListener('click', (e) => { e.stopPropagation(); this.finish(true); });
  }

  get flags() { return this.game.flags; }

  mode() {
    const b = document.body.classList;
    return b.contains('pad') ? 'pad' : b.contains('touch') ? 'touch' : 'key';
  }

  // 문구: 한국어 원문을 먼저 번역한 뒤 {자리}를 채움 (영어판도 키 이름이 그대로 들어감)
  text(def) {
    const g = this.game, m = this.mode();
    const raw = def.all || def[m] || def.key;
    const k = (a) => keyName(keyOf(g.settings, a));
    return tr(raw)
      .replace('{atk}', k('atk')).replace('{dash}', k('dash')).replace('{skill}', k('skill'))
      .replace('{auto}', k('auto')).replace('{bag}', k('bag')).replace('{skills}', k('skills')).replace('{hunt}', k('hunt'))
      .replace('{name}', tr(g.player.cfg.labels.skill)).replace('{을}', eul(g.player.cfg.labels.skill));
  }

  show(title, msg, prog, skip) {
    const el = this.el;
    el.querySelector('.c-t').textContent = title;
    el.querySelector('.c-m').textContent = msg;
    el.querySelector('.c-p').innerHTML = prog || '';
    el.classList.toggle('tut', !!skip);
    el.classList.add('show');
  }

  hide() { this.el.classList.remove('show'); }

  // ---------- 튜토리얼 ----------
  startTutorial() {
    if (this.flags.tut) return;
    this.step = 0;
    this.count = 0;
    this.watch();
    this.render();
  }

  // 지금 상태를 기억해 두고, 다음 프레임부터 바뀐 것으로 행동을 알아챔
  watch() {
    const p = this.game.player;
    this.lastPos = p.pos.clone();
    this.lastAttack = p.attack;
    this.lastDashCd = p.dashCd;
  }

  render() {
    const S = STEPS[this.step];
    const dots = STEPS.map((_, i) => `<i class="${i < this.step ? 'done' : i === this.step ? 'on' : ''}"></i>`).join('');
    const cnt = S.goal > 1 && S.id !== 'move' ? ` <b>${Math.min(this.count, S.goal)}/${S.goal}</b>` : '';
    this.show(`${tr('따라 해 보기')} · ${tr(S.title)}`, this.text(S), dots + cnt, true);
  }

  finish(skipped = false) {
    if (this.step < 0) return;
    this.step = -1;
    this.flags.tut = 1;
    this.game.save(false);
    if (skipped) { this.hide(); return; }
    this.game.audio.play('levelup');
    this.show(tr('준비 끝!'), tr('이제 임무 창의 할 일을 따라가 보세요. 막히면 메뉴(Esc) → 조작에서 다시 볼 수 있어요'), '', false);
    this.tipT = 6;
  }

  update(dt) {
    const g = this.game, p = g.player;
    if (this.tipT > 0) { this.tipT -= dt; if (this.tipT <= 0 && this.step < 0) this.hide(); }
    if (this.step < 0 || g.paused || g.state !== 'play') return;
    const S = STEPS[this.step];
    let add = 0;
    if (S.id === 'move') { add = Math.hypot(p.pos.x - this.lastPos.x, p.pos.z - this.lastPos.z); if (add > 2) add = 0; }
    else if (S.id === 'atk') add = p.attack && p.attack !== this.lastAttack && !p.attack.skill ? 1 : 0;
    else if (S.id === 'dash') add = p.dashCd > this.lastDashCd + 0.05 ? 1 : 0;
    else if (S.id === 'skill') add = p.attack && p.attack !== this.lastAttack && p.attack.skill ? 1 : 0;
    else if (S.id === 'auto') add = g.autoMove || g.waveActive || g.quest.step > 0 ? 1 : 0;
    this.watch();
    if (!add) return;
    const before = Math.floor(this.count);
    this.count += add;
    if (this.count >= S.goal) {
      g.audio.play('talk');
      this.step++;
      this.count = 0;
      if (this.step >= STEPS.length) { this.finish(); return; }
      this.render();
    } else if (Math.floor(this.count) !== before && S.id !== 'move') this.render();
  }

  // ---------- 처음 겪는 순간의 도움말 ----------
  tip(id, delay = 0) {
    if (this.flags['tip_' + id] || this.game.settings.tips === false) return;
    this.flags['tip_' + id] = 1;
    const T = TIPS[id];
    const go = () => {
      // 튜토리얼 중이면 끝난 뒤로 미룸
      if (this.step >= 0) { setTimeout(go, 1500); return; }
      this.game.audio.play('talk');
      this.show(`${tr('도움말')} · ${tr(T.title)}`, this.text(T), '', false);
      this.tipT = 7;
    };
    if (delay) setTimeout(go, delay * 1000); else go();
  }
}
