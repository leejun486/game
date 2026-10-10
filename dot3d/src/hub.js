// 두루마리 메뉴: 게임 중 Esc·메뉴 단추로 오른쪽에서 펼쳐지는 전체 메뉴
//  위에는 달거울(모은 조각 수만큼 차오름)과 지금 직업·지역, 아래로 갈래마다 도트 그림 칸
//  칸을 누르면 가방·기술·지도·설정 창이 열림. 설정 창에서 Esc를 누르면 다시 두루마리로
import { MAPS } from './maps.js';
import { SHARD_MAX } from './story.js';
import { tr } from './i18n.js';

// 12×12 도트 그림: 글자 하나가 한 칸 (. 은 빈칸)
const C = { K: '#1a1420', R: '#c8302c', Y: '#f0c040', O: '#e07a2a', W: '#f4ecd8', B: '#2f5aa8', G: '#3a8a5a', P: '#e8d8b0', D: '#6a4a8a', S: '#a8b4c8' };
const ICONS = {
  bag: ['....KK..KK..', '...KRRKKRRK.', '....KRRRRK..', '...KKRRRRKK.', '..KRRRYYRRRK', '.KRRRYRRYRRK', '.KRRRRYYRRRK', '.KRRRRRRRRRK', '.KRRYRRRRYRK', '.KRRRRRRRRRK', '..KRRRRRRRK.', '...KKKKKKK..'],
  skills: ['...KKKKKK...', '...KYYYYK...', '...KYRRYK...', '...KYYRYK...', '...KYRRYK...', '...KYYYYK...', '...KYRYRK...', '...KYRRRK...', '...KYYRYK...', '...KYYYYK...', '...KKKKKK...', '.....RR.....'],
  look: ['..KK....KK..', '.KBBK..KBBK.', 'KBBBBKKBBBBK', 'KBBBBWWBBBBK', 'KBBKBWWBKBBK', '.KK.KWRWK.KK', '....KBRBK...', '....KBRBK...', '....KBBBK...', '....KBBBK...', '....KKKKK...', '............'],
  map: ['............', '.KKKKKKKKKK.', '.KPPPKPPPPK.', '.KPGPKPPRPK.', '.KPGGKPRPPK.', '.KPPGKPPPPK.', '.KPPPKGGPPK.', '.KPBBKPGGPK.', '.KBBPKPPPPK.', '.KPPPKPPPPK.', '.KKKKKKKKKK.', '............'],
  daily: ['.....YY.....', '.Y...YY...Y.', '..Y......Y..', '....OOOO....', '...OYYYYO...', 'YY.OYYYYO.YY', 'YY.OYYYYO.YY', '...OYYYYO...', '....OOOO....', '..Y......Y..', '.Y...YY...Y.', '.....YY.....'],
  ach: ['..RR....RR..', '...RR..RR...', '....RRRR....', '.....RR.....', '....KKKK....', '...KYYYYK...', '..KYYWYYYK..', '..KYWYYYYK..', '..KYYYYYYK..', '...KYYYYK...', '....KKKK....', '............'],
  codex: ['............', '.KKKKKKKKK..', '.KGGGGGGGKK.', '.KGGWWWGGKP.', '.KGWRWRWGKP.', '.KGWWWWWGKP.', '.KGGWKWGGKP.', '.KGGGGGGGKP.', '.KGGGGGGGKP.', '.KKKKKKKKKP.', '..PPPPPPPPP.', '............'],
  hunt: ['S..........S', '.S........S.', '..S......S..', '...S....S...', '....S..S....', '.....SS.....', '.....SS.....', '....S..S....', '..YKS..SKY..', '..KY....YK..', '.KK......KK.', 'KK........KK'],
  move: ['............', '..KK........', '.KWWK.......', '.KWWK..KK...', '.KWWK.KWWK..', '..KK..KWWK..', '......KWWK..', '..KK...KK...', '.KWWK.......', '.KWWK..KK...', '..KK..KWWK..', '......KWWK..'],
  night: ['....YYYY....', '..YYYYKK....', '.YYYYK......', '.YYYK.......', 'YYYYK.....W.', 'YYYYK....WWW', 'YYYYK.....W.', 'YYYYK.......', '.YYYYK......', '.YYYYYK.....', '..YYYYYYKK..', '....YYYY....'],
  music: ['.....KKKKKK.', '.....KYYYYK.', '.....KYKKYK.', '.....KYK.KK.', '.....KYK....', '.....KYK....', '.....KYK....', '..KKKKYK....', '.KYYYYYK....', '.KYYYYYK....', '..KKKKK.....', '............'],
  sound: ['............', '.RRRRRRRRRR.', '.K........K.', '.K..KKKK..K.', '.K.KOOOOK.K.', '.KKOOYYOOKK.', '.K.KOOOOK.K.', '.K..KKKK..K.', '.K........K.', '.K........K.', 'KKK......KKK', '............'],
  screen: ['............', '............', '...KKKKKK...', '..KWWWWWWK..', '.KWWKBBKWWK.', 'KWWKBBKKBWWK', 'KWWKBBBBKWWK', '.KWWKBBKWWK.', '..KWWWWWWK..', '...KKKKKK...', '............', '............'],
  keys: ['............', '............', 'KKKKKKKKKKKK', 'KWWKWWKWWKWK', 'KWWKWWKWWKWK', 'KKKKKKKKKKKK', 'KWKWWKWWKWWK', 'KWKWWKWWKWWK', 'KKKKKKKKKKKK', 'KWWWWWWWWWWK', 'KKKKKKKKKKKK', '............'],
  data: ['............', '.KKKKKKKKKK.', 'KPPPPPPPPPPK', '.KPKKKKKPPK.', '.KPPPPPPPPK.', '.KPKKKKPPPK.', '.KPPPPPPRRK.', '.KPKKKPPRRK.', '.KPPPPPPPPK.', 'KPPPPPPPPPPK', '.KKKKKKKKKK.', '............'],
  title: ['.....RR.....', '...RRRRRR...', '.RRRRRRRRRR.', 'KKKKKKKKKKKK', '..R......R..', '..R.KKKK.R..', '..R.KWWK.R..', '..R.KWWK.R..', '..R.KWWK.R..', '..R.KWWK.R..', 'KKKKKKKKKKKK', '............'],
  tower: ['.....DD.....', '....DDDD....', '..DDDDDDDD..', '....KYYK....', '...DDDDDD...', '.DDDDDDDDDD.', '...KYYYYK...', '..DDDDDDDD..', 'DDDDDDDDDDDD', '..KYYKKYYK..', '..KYYKKYYK..', 'KKKKKKKKKKKK'],
};

function drawIcon(cv, name) {
  const rows = ICONS[name];
  const g = cv.getContext('2d');
  g.clearRect(0, 0, 12, 12);
  rows.forEach((r, y) => { for (let x = 0; x < 12; x++) { const c = C[r[x]]; if (c) { g.fillStyle = c; g.fillRect(x, y, 1, 1); } } });
}

export class Hub {
  constructor(game) {
    this.game = game;
    this.el = document.getElementById('hub');
    this.open = false;
    this.el.querySelector('#hub-close').addEventListener('click', () => this.toggle(false));
  }

  // 칸 목록: [갈래 이름, [[아이디, 이름, 키, 그림, 할 일]…]]
  groups() {
    const g = this.game;
    const close = (fn) => () => { this.toggle(false); fn(); };
    const pane = (p, sub) => () => { this.toggle(false); g.pzFromHub = true; g.togglePause(true); if (sub) g.records.sub = sub; g.pausePane(p); };
    const D = g.daily, dk = D?.goals?.length ? `${D.goals.filter((q) => q.done).length}/${D.goals.length}` : '';
    return [
      ['몸과 짐', [
        ['bag', '가방', 'B', 'bag', close(() => g.toggleBag(true)), !document.getElementById('bag-dot').classList.contains('hidden')],
        ['skills', '기술 수련', 'T', 'skills', close(() => g.toggleSkills(true)), !document.getElementById('evo-dot').classList.contains('hidden')],
        ['look', '외형', '', 'look', close(() => { g.toggleBag(true); g.ui.tab('look'); g.ui.renderLook?.(); })],
      ]],
      ['여정', [
        ['map', '지도 · 일지', 'V', 'map', close(() => g.minimap.toggle(true))],
        ['daily', '오늘의 목표', '', 'daily', pane('daily'), false, false, dk],
        ['ach', '업적', 'Y', 'ach', pane('records', 'ach')],
        ['codex', '요괴 도감', '', 'codex', pane('records', 'mon')],
      ]],
      ['도움', [
        ['hunt', g.autoHunt ? '자동 사냥 끄기' : '자동 사냥', 'H', 'hunt', close(() => g.setAutoHunt(!g.autoHunt)), false, g.autoHunt],
        ['move', '자동 이동', 'F', 'move', close(() => g.startAutoMove())],
        ['night', g.nightTarget > 0.5 ? '낮으로' : '밤으로', 'N', 'night', close(() => g.onKey('KeyN'))],
        ['music', g.audio.musicOn ? '음악 끄기' : '음악 켜기', 'M', 'music', () => { g.onKey('KeyM'); this.render(); }, false, g.audio.musicOn],
      ]],
      ['설정', [
        ['sound', '소리', '', 'sound', pane('sound')],
        ['screen', '화면', '', 'screen', pane('screen')],
        ['keys', '조작', '', 'keys', pane('keys')],
        ['data', '저장 파일', '', 'data', pane('data')],
        ['title', '선택 화면으로', '', 'title', () => { g.save(false); location.reload(); }],
      ]],
    ];
  }

  // 달거울: 조각 수만큼 쐐기가 차오름
  drawMirror(cv) {
    const g = this.game, n = Math.min(SHARD_MAX, g.quest.shards?.length || 0);
    const x = cv.getContext('2d'), W = cv.width, c = W / 2, r = W / 2 - 3;
    x.clearRect(0, 0, W, W);
    x.fillStyle = '#0c0a14'; x.beginPath(); x.arc(c, c, r + 2, 0, Math.PI * 2); x.fill();
    for (let i = 0; i < SHARD_MAX; i++) {
      const a0 = -Math.PI / 2 + (i / SHARD_MAX) * Math.PI * 2, a1 = a0 + (Math.PI * 2) / SHARD_MAX;
      x.beginPath(); x.moveTo(c, c); x.arc(c, c, r, a0 + 0.03, a1 - 0.03); x.closePath();
      x.fillStyle = i < n ? (i % 2 ? '#fff0c0' : '#f3dc98') : '#2a2436';
      x.fill();
    }
    x.strokeStyle = '#e2b85a'; x.lineWidth = 2; x.beginPath(); x.arc(c, c, r + 1, 0, Math.PI * 2); x.stroke();
    return n;
  }

  render() {
    const g = this.game;
    const p = g.player, R = MAPS[g.mapId] || MAPS.palace;
    const n = this.drawMirror(this.el.querySelector('#hub-mirror'));
    this.el.querySelector('#hub-who').innerHTML = `<b>${tr(p.cfg.title)} ${p.cfg.name || ''}</b> <span>Lv.${p.level}</span><br><small>${tr(R.name)} · ${tr('달거울')} ${n}/${SHARD_MAX}${g.towerBest ? ` · ${tr('시련탑')} ${g.towerBest}${tr('층')}` : ''}</small>`;
    const body = this.el.querySelector('#hub-body');
    body.innerHTML = this.groups().map(([name, tiles]) => `<section><h4><i></i>${name}<i></i></h4><div class="hub-grid">${tiles.map(([id, label, key, icon, , dot, on, sub]) =>
      `<button class="hub-tile${on ? ' on' : ''}" data-h="${id}"><canvas width="12" height="12" data-i="${icon}"></canvas><em>${label}</em>${sub ? `<small>${sub}</small>` : ''}${key ? `<span class="seal">${key}</span>` : ''}${dot ? '<i class="dot"></i>' : ''}</button>`).join('')}</div></section>`).join('');
    const acts = Object.fromEntries(this.groups().flatMap(([, t]) => t.map((x) => [x[0], x[4]])));
    for (const cv of body.querySelectorAll('canvas[data-i]')) drawIcon(cv, cv.dataset.i);
    for (const b of body.querySelectorAll('[data-h]')) b.addEventListener('click', () => { g.audio.play('talk'); acts[b.dataset.h](); });
  }

  toggle(open = !this.open) {
    const g = this.game;
    if (open && (g.state !== 'play' || g.player.dead || g.story || g.cut)) return;
    if (open) { if (g.ui.bagOpen) g.toggleBag(false); if (g.ui.skillsOpen) g.toggleSkills(false); if (g.mapOpen) g.minimap.toggle(false); if (g.autoMove) g.stopAutoMove(); }
    this.open = open;
    g.paused = open || !!g.ui.bagOpen || !!g.ui.skillsOpen || !!g.mapOpen || !!g.pauseOpen;
    if (open) this.render();
    this.el.classList.toggle('show', open);
    g.audio.play(open ? 'draw' : 'talk');
  }
}
