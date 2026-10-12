// 부탁: 지역마다 NPC가 주는 작은 일 (메인 퀘스트와 따로, 한 번에 하나씩)
//  그 지역 보스를 물리치면 NPC가 부탁을 꺼냄 (머리 위 푸른 느낌표). 한 사람에게 둘씩, 차례로
//  종류: kill(몬스터 몇 마리) · collect(몬스터가 가끔 떨어뜨리는 물건 몇 개, 바로 주머니로)
//  상태는 game.ext.req = { cur: 부탁 id, prog: {}, done: [id…] }
import { KILL_NAME } from './quests.js';

const R = (id, npc, boss, title, ask, need, done, reward) => ({ id, npc, boss, title, ask, need, done, reward });
export const REQUESTS = [
  R('lady1', 'lady', 'boss', '잃어버린 노리개', ['저어… 도깨비들이 마당을 휘젓는 통에 마마께 받은 노리개를 잃어버렸어요.', '꼬마 도깨비들이 반짝이는 걸 좋아해서 주워 갔을 거예요. 찾아 주실 수 있나요?'],
    { collect: { name: '노리개 구슬', n: 5, from: ['blue', 'red'], rate: 0.35 } }, ['어머, 구슬이 다 있네요! 이제 다시 꿰면 되겠어요.', '고마운 마음으로 이걸 드릴게요.'], { coins: 200, mats: { scrollA: 2 } }),
  R('lady2', 'lady', 'boss', '밤마다 우는 도깨비불', ['요즘 밤마다 처소 앞에 도깨비불이 떠서 잠을 못 자요.', '도깨비불을 열 개쯤 꺼 주시면 한숨 돌릴 것 같아요.'],
    { kill: { wisp: 10 } }, ['조용해졌어요! 오랜만에 푹 자겠네요.'], { coins: 300, mats: { bless: 1 } }),
  R('herb1', 'herb', 'gumiho', '여우 꼬리털', ['약에 쓸 여우 꼬리털이 필요한데, 대숲에 들어가기가 무서워서요.', '여우를 잡으면 가끔 털이 빠져요. 여섯 줌만 모아 주세요.'],
    { collect: { name: '여우 꼬리털', n: 6, from: ['fox', 'foxfire'], rate: 0.4 } }, ['이 정도면 고약을 넉넉히 달이겠어요!'], { coins: 260, mats: { scrollG: 2 } }),
  R('herb2', 'herb', 'gumiho', '여우불 잡기', ['여우불이 약초밭을 태우고 다녀요. 열둘만 꺼 주세요.'],
    { kill: { foxfire: 12 } }, ['밭이 무사해요! 이 귀한 걸 드릴게요.'], { coins: 360, mats: { soul: 1 } }),
  R('hermit1', 'hermit', 'reaper', '강시의 부적', ['강시 이마의 부적을 모아 오면 내가 좋은 데 쓰겠네.', '부적은 쉽게 떨어지지 않으니 여덟 장이면 충분하네.'],
    { collect: { name: '강시 부적', n: 8, from: ['jiangshi'], rate: 0.35 } }, ['허허, 이걸로 사찰의 원귀를 달래 주겠네.'], { coins: 320, mats: { scrollW: 2 } }),
  R('hermit2', 'hermit', 'reaper', '원귀 달래기', ['폐사찰에 아직 원귀가 남아 있다네. 열다섯을 저승으로 보내 주게.'],
    { kill: { ghost: 15 } }, ['고생했네. 저승사자도 한시름 놓겠구먼.'], { coins: 420, mats: { bless: 1 } }),
  R('ferry1', 'ferry', 'imugi', '물귀신 쫓기', ['늪에 물귀신이 들끓어서 나룻배를 못 띄우겠소.', '열둘만 쫓아 주시오.'],
    { kill: { waterghost: 12 } }, ['이제 배를 띄우겠구려! 고맙소.'], { coins: 380, mats: { scrollA: 2 } }),
  R('ferry2', 'ferry', 'imugi', '두꺼비 기름', ['두꺼비 요괴 기름을 바르면 배가 새지 않는다오. 다섯 병 부탁하오.'],
    { collect: { name: '두꺼비 기름', n: 5, from: ['toad'], rate: 0.35 } }, ['배가 반들반들하구려!'], { coins: 440, mats: { soul: 1 } }),
  R('smith1', 'smith', 'bulgasari', '불씨 모으기', ['화염 도깨비의 불씨가 있으면 쇠를 더 단단히 벼릴 수 있지.', '여섯 개만 가져와 주게.'],
    { collect: { name: '도깨비 불씨', n: 6, from: ['firedok'], rate: 0.35 } }, ['좋아, 이 불이면 명검도 만들겠어!'], { coins: 420, mats: { scrollW: 3 } }),
  R('smith2', 'smith', 'bulgasari', '돌장승 부수기', ['협곡의 돌장승이 길을 막고 있네. 열 개만 부숴 주게.'],
    { kill: { stonegolem: 10 } }, ['길이 뚫렸구먼! 돌가루는 내가 쓰지.'], { coins: 500, mats: { bless: 1, scrollW: 1 } }),
  R('captain1', 'captain', 'baekho', '산적 소탕', ['산성 둘레에 산적 도깨비가 또 모였소. 열다섯을 쫓아내 주시오.'],
    { kill: { bandit: 15 } }, ['의병들이 한숨 돌리겠소!'], { coins: 480, mats: { scrollA: 3 } }),
  R('captain2', 'captain', 'baekho', '까마귀 깃털', ['화살 깃으로 쓸 까마귀 요괴 깃털이 모자라오. 여덟 개만.'],
    { collect: { name: '까마귀 깃털', n: 8, from: ['crow'], rate: 0.4 } }, ['이 깃이면 백발백중이오!'], { coins: 560, mats: { soul: 1 } }),
  R('envoy1', 'envoy', 'dragon', '흩어진 진주', ['꽃게 병사들이 용궁 진주를 들고 달아났어요. 여섯 알을 찾아 주세요.'],
    { collect: { name: '용궁 진주', n: 6, from: ['crab', 'turtle'], rate: 0.35 } }, ['진주가 돌아왔어요! 용왕님도 기뻐하실 거예요.'], { coins: 560, mats: { scrollG: 3 } }),
  R('envoy2', 'envoy', 'dragon', '해파리 걷어내기', ['해파리 떼가 산호밭을 덮었어요. 열다섯만 걷어 주세요.'],
    { kill: { jelly: 15 } }, ['산호가 다시 숨을 쉬네요.'], { coins: 620, mats: { bless: 1 } }),
  R('hunter1', 'hunter', 'centipede', '멧돼지 사냥', ['멧돼지가 밭을 갈아엎는다오. 열 마리만 잡아 주시오.'],
    { kill: { boar: 10 } }, ['고기는 마을에 나누겠소!'], { coins: 600, mats: { scrollW: 2, scrollA: 1 } }),
  R('hunter2', 'hunter', 'centipede', '왕벌 꿀', ['왕벌 요괴 벌집에서 꿀을 좀 얻어 와 주시오. 다섯 단지.'],
    { collect: { name: '왕벌 꿀', n: 5, from: ['bee'], rate: 0.35 } }, ['달다 달아! 고생했소.'], { coins: 660, mats: { soul: 1 } }),
  R('ginseng1', 'ginseng', 'frostgiant', '눈늑대 쫓기', ['눈늑대가 심밭을 파헤친다네. 열둘만 쫓아 주게.'],
    { kill: { wolf: 12 } }, ['허허, 산삼이 무사하네!'], { coins: 660, mats: { scrollG: 2, scrollA: 1 } }),
  R('ginseng2', 'ginseng', 'frostgiant', '서리 결정', ['얼음 도깨비 몸에서 나오는 서리 결정이 약이 된다네. 여섯 개만.'],
    { collect: { name: '서리 결정', n: 6, from: ['icedok', 'icewisp'], rate: 0.35 } }, ['이걸로 열병을 다스리겠구먼.'], { coins: 720, mats: { bless: 1, soul: 1 } }),
  R('keeper1', 'keeper', 'eodum', '꺼진 장명등 기름', ['장명등 기름이 다 떨어졌소. 망령 병사들이 기름 단지를 들고 다닌다오. 여섯 개.'],
    { collect: { name: '등잔 기름', n: 6, from: ['tombsoldier'], rate: 0.35 } }, ['이제 능 앞이 밝겠소.'], { coins: 720, mats: { scrollW: 2, scrollG: 1 } }),
  R('keeper2', 'keeper', 'eodum', '궁녀의 넋', ['원귀 궁녀들이 아직 능을 떠돈다오. 열둘만 달래 주시오.'],
    { kill: { gungnyeo: 12 } }, ['이제 편히 잠들겠구려.'], { coins: 780, mats: { soul: 1 } }),
  R('peddler1', 'peddler', 'dokgak', '빼앗긴 엽전', ['노름꾼 도깨비한테 엽전 꾸러미를 털렸소! 여덟 꾸러미만 되찾아 주시오.'],
    { collect: { name: '엽전 꾸러미', n: 8, from: ['gambler', 'imp'], rate: 0.4 } }, ['살았소! 장사 밑천이 돌아왔구려.'], { coins: 1000, mats: { scrollA: 2 } }),
  R('peddler2', 'peddler', 'dokgak', '너구리 장난', ['둔갑 너구리가 물건을 바꿔치기한다오. 열 마리만 혼내 주시오.'],
    { kill: { tanuki: 10 } }, ['이제 장사할 맛이 나겠소!'], { coins: 820, mats: { bless: 1 } }),
  R('haenyeo1', 'haenyeo', 'jangsan', '농게 잡기', ['농게가 그물을 다 찢어 놔요. 열다섯만 잡아 주세요.'],
    { kill: { fiddler: 15 } }, ['오늘 저녁은 게장이네요!'], { coins: 820, mats: { scrollW: 2, scrollA: 1 } }),
  R('haenyeo2', 'haenyeo', 'jangsan', '테왁 조각', ['갯귀신이 테왁을 부숴서 조각이 흩어졌어요. 여섯 개만 모아 주세요.'],
    { collect: { name: '테왁 조각', n: 6, from: ['mudghost', 'fishman'], rate: 0.35 } }, ['다시 엮으면 쓸 만하겠어요.'], { coins: 880, mats: { soul: 1 } }),
  R('fairy1', 'fairy', 'noegong', '천둥 동자 길들이기', ['천둥 동자들이 구름을 흩뜨려요. 열다섯만 얌전하게 해 주세요.'],
    { kill: { thunderkid: 15 } }, ['구름이 다시 모였어요. 고마워요.'], { coins: 900, mats: { scrollG: 3 } }),
  R('fairy2', 'fairy', 'noegong', '학 깃털 날개옷', ['날개옷을 고치려면 학 요괴 깃털이 필요해요. 여덟 개만요.'],
    { collect: { name: '학 깃털', n: 8, from: ['crane', 'shadowfairy'], rate: 0.4 } }, ['날개옷이 다시 빛나요!'], { coins: 1000, mats: { bless: 1, soul: 1 } }),
];
const BY_ID = Object.fromEntries(REQUESTS.map((q) => [q.id, q]));

export class Requests {
  constructor(game) { this.game = game; }
  get st() { return (this.game.ext.req ||= { cur: null, prog: {}, done: [] }); }
  get cur() { return BY_ID[this.st.cur] || null; }

  // 이 NPC가 지금 꺼낼 부탁 (보스를 물리쳤고, 앞의 것을 마쳤고, 다른 부탁을 하는 중이 아니면)
  offerOf(kind) {
    const S = this.st, g = this.game;
    if (S.cur) return null;
    return REQUESTS.find((q) => q.npc === kind && !S.done.includes(q.id) && g.stats.killsBy?.[q.boss]) || null;
  }
  met() {
    const q = this.cur;
    if (!q) return false;
    const P = this.st.prog;
    if (q.need.kill) return Object.entries(q.need.kill).every(([t, n]) => (P[t] || 0) >= n);
    return (P.items || 0) >= q.need.collect.n;
  }
  // 푸른 느낌표를 띄울 NPC: 줄 부탁이 있거나, 다 해 온 부탁을 받을 사람
  markNpcs() {
    const g = this.game, out = [];
    for (const n of g.npcs) if (n.kind !== 'guard' && (this.offerOf(n.kind) || (this.cur?.npc === n.kind && this.met()))) out.push(n);
    return out;
  }

  // NPC와 말할 때: 부탁 일이면 처리하고 true
  talk(n) {
    const g = this.game, S = this.st, q = this.cur;
    if (q && q.npc === n.kind) {
      if (this.met()) {
        g.ui.dialog(n.name, q.done, () => this.finish());
      } else g.ui.dialog(n.name, [`${q.title} 일은 어찌 되었나요? (${this.progText()})`]);
      return true;
    }
    const o = this.offerOf(n.kind);
    if (!o) return false;
    g.ui.dialog(n.name, [...o.ask, `(부탁 받기: ${o.title} — ${this.needText(o)})`], () => {
      S.cur = o.id; S.prog = {};
      g.ui.banner('부탁', o.title, 2, '');
      g.audio.play('talk');
      g.updateQuest(); g.save(false);
    });
    return true;
  }

  finish() {
    const g = this.game, S = this.st, q = this.cur;
    if (!q) return;
    S.done.push(q.id); S.cur = null; S.prog = {};
    const r = q.reward;
    if (r.coins) g.shop.gain(r.coins, g.player.pos.clone().add(new g.player.pos.constructor(0, 2.8, 0)));
    if (r.mats) g.gainMats(r.mats);
    g.player.addExp(200 + S.done.length * 40);
    g.stats.requests = S.done.length;
    g.ui.banner('부탁 완료', q.title, 2.2, 'win-banner');
    g.audio.play('victory');
    g.records.check();
    g.updateQuest(); g.save(false);
  }

  // 처치할 때마다 (onEnemyKilled → questOnKill 뒤)
  onKill(e) {
    const q = this.cur, g = this.game;
    if (!q || this.met()) return;
    const P = this.st.prog;
    if (q.need.kill?.[e.type]) P[e.type] = (P[e.type] || 0) + 1;
    else if (q.need.collect?.from.includes(e.type) && Math.random() < q.need.collect.rate) {
      P.items = (P.items || 0) + 1;
      g.fx.number(new e.pos.constructor(e.pos.x, e.y + 2.6, e.pos.z), `${q.need.collect.name} +1`, 'alert');
      g.audio.play('coin');
    } else return;
    if (this.met()) g.ui.toast(`부탁 「${q.title}」 — 다 모았어요! 돌아가서 알려 주세요`, 3);
    g.updateQuest();
  }

  needText(q) {
    if (q.need.kill) return Object.entries(q.need.kill).map(([t, n]) => `${KILL_NAME[t] || t} ${n}마리`).join(', ');
    return `${q.need.collect.name} ${q.need.collect.n}개`;
  }
  progText() {
    const q = this.cur, P = this.st.prog;
    if (!q) return '';
    if (q.need.kill) return Object.entries(q.need.kill).map(([t, n]) => `${KILL_NAME[t] || t} ${Math.min(n, P[t] || 0)}/${n}`).join(', ');
    return `${q.need.collect.name} ${Math.min(q.need.collect.n, P.items || 0)}/${q.need.collect.n}`;
  }
  // 퀘스트 창 아래 한 줄
  line() {
    const q = this.cur;
    if (!q) return '';
    const n = this.game.npcs.find((x) => x.kind === q.npc);
    return `<span class="req-l">부탁 · ${q.title} — ${this.met() ? `${n?.name || ''}에게 돌아가기` : this.progText()}</span>`;
  }
}
