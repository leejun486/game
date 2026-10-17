import * as THREE from 'three';
import { PixelRenderer } from './pixel.js';
import { World } from './world.js';
import { FX } from './fx.js';
import { Audio } from './audio.js';
import { UI } from './ui.js';
import { Player, Enemy, NPC, Bird } from './entities.js';
import { shared, addRim } from './materials.js';
import { loadSave, writeSave, clearSave, exportSave, importSave, makeTransferCode, readTransferCode } from './save.js';
import { loadSettings, saveSettings, ACTIONS, keyOf, bindMap, keyName, DEFAULTS } from './settings.js';
import { CLASSES, CLASS_ORDER } from './classes.js';
import { ClassPreview } from './preview.js';
import { GFX } from './gfx.js';
import { EVOS, RUNES, branchOf, rankOf, featRank, runeOf, freePoints, rankMul, rankCd, RANK_NAME } from './evolve.js';
import { QUESTS, BOUNTIES, KILL_NAME } from './quests.js';
import { makeGear, rollGearTier, gearScore, salvageExp, BAG_MAX, GEAR_SLOTS, slotKind, rarityOf, makeSetPiece, setFor, SETS } from './gear.js';
import { item, rollDrop, bossDrop, RARITY, itemDesc, WEAPONS, OUTFITS, ULTS } from './items.js';
import { expNeed, SKILL_LEVEL, lvEq, LV_CAP } from './entities.js';
import { awayReward, grantAway } from './away.js';
import { claimAttend, showAttend } from './attend.js';
import { MAPS, BOSS_TYPES, BOSS_NAME, WIN_LINE, GRADE } from './maps.js';
import { PROLOGUE, SHARD_LINES, SHARD_MAX, ENDING, CREDITS, fillStory } from './story.js';
import { clamp, lerp, rand, angleDiff, damp } from './util.js';
import { initLang, watchDom, tr, LANG, LANGS } from './i18n.js';
import { DIFFS, DIFF_ORDER, diffOf } from './difficulty.js';
import { Daily } from './daily.js';
import { checkPass, passState, passTier, passReady } from './pass.js';
import { QuestKinds } from './questkinds.js';
import { playScene } from './scenes.js';
import { ruleFor, awaken } from './towerrules.js';
import { rigOptions } from './looks.js';
import { Coach } from './coach.js';
import { VERSION } from './version.js';
// 빌드 표시 (index.html이 붙인 ?v=해시) — 오류 화면에서 예전 파일을 쓰고 있는지 알 수 있게
const BUILD = (typeof document !== 'undefined' && document.currentScript?.src.match(/[?&]v=(\w+)/)?.[1]) || 'dev';
import { Records, newStats } from './records.js';
import { drop } from './dispose.js';
import { MiniMap } from './minimap.js';
import { padGlyph } from './glyph.js';
import { Hub } from './hub.js';
import { Codex, monStars, renderCodex } from './codex.js';
import { rollMats, MATS, MAT_ORDER } from './enhance.js';
import { DEMO, DEMO_LOCKED_GATES, DEMO_QUEST, DEMO_END_LINES } from './edition.js';
import { Shop, coinsFor, salvageCoins, salvageDust, renderShop } from './shop.js';
import { Pet } from './pet.js';
import { Requests } from './requests.js';
import { DevStats, renderDevice } from './device.js';
import { setupNative, isNativeApp } from './native.js';
import { DUNGEONS, dungeonLoot, dungeonQuest, dungeonRevive } from './dungeon.js';
import { challengeClear, finishRush, challengeQuest, renderChallenge } from './challenge.js';
import { V, DIFF_NOTE, DEMO_END } from './game/shared.js';
import { SkillsPart } from './game/skills.js';
import { BossfxPart } from './game/bossfx.js';
import { TowerPart } from './game/tower.js';
import { PausePart } from './game/pause.js';
import { ItemsPart } from './game/items.js';
import { AutoPart } from './game/auto.js';
import { QuestPart } from './game/quest.js';
import { spearHit, lancerSkill1, lancerSkill2, lancerSkill3, updateLancer, clearLancer } from './lancer.js';


// 시련탑 안에서 저장하면 협곡(저승 문 앞)에서 이어지게
function _noTower(g) { return g.tower?.active ? { mapId: 'canyon' } : {}; }

// 보스 등장 연출의 별칭 / 단계 전환 대사
const BOSS_EPITHET = { boss: '도깨비들의 왕', gumiho: '천 년을 산 여우', reaper: '명부를 든 저승의 사자', imugi: '용이 되지 못한 뱀', bulgasari: '쇠를 먹고 자라는 괴물', baekho: '산을 다스리는 범의 왕', dragon: '동해를 다스리는 용', centipede: '천 년 묵은 독의 왕', frostgiant: '겨울을 몰고 오는 장수', noegong: '하늘의 북을 치는 천둥 장수', jangsan: '사람 목소리를 흉내 내는 흰 짐승', dokgak: '밤장터를 연 외다리 도깨비', eodum: '볼수록 커지는 어둠', yeomra: '저승을 다스리는 왕' };
const BOSS_PHASE_LINE = {
  boss: ['"금 나와라, 뚝딱! 금덩이 맛 좀 봐라!"', '"이놈! 혼쭐을 내주마!" — 쉬지 않고 뛰어내린다'],
  gumiho: ['"내 아이들아, 나와라" — 분신이 나타났다', '아홉 꼬리에서 여우불이 사방으로 쏟아진다'],
  reaper: ['명부에 이름이 적히면 낙인이 따라붙는다', '사방이 어둠에 잠긴다…'],
  imugi: ['늪 곳곳에서 물기둥이 솟는다', '"용이 되지 못할 바엔!" — 꼬리를 휘두른다'],
  bulgasari: ['쇠바늘이 달아올라 지나간 자리가 불탄다', '세 번 연달아 들이받는다!'],
  baekho: ['포효가 산을 울리며 바람 발톱이 사방으로 날아간다', '세 번 연달아 덮쳐 온다!'],
  dragon: ['바다가 끓어오르며 물기둥이 솟는다', '"감히 용궁을!" — 몸을 휘감아 휘두른다'],
  centipede: ['독액이 사방으로 흩뿌려진다', '세 번 연달아 돌진하고 꼬리를 휘두른다!'],
  frostgiant: ['눈보라와 함께 얼음 구슬이 사방으로', '"겨울은 끝나지 않는다!" — 고드름이 두 번 쏟아진다'],
  noegong: ['"하늘이 노했다!" — 벼락이 다섯 번 내리친다', '북 고리가 사방으로 번개를 흩뿌린다!'],
  jangsan: ['"순덕아… 문 좀 열어라…" — 목소리가 사방에서 울린다', '흰 털을 휘날리며 세 번 연달아 덮쳐 온다!'],
  dokgak: ['"한 판 더! 이번엔 네 넋을 걸어라!" — 금덩이가 쏟아진다', '외다리로 땅을 구르며 방망이를 휘돌린다!'],
  eodum: ['"나를 보았구나…" — 어둠이 부풀어 오른다', '무덤 사이가 온통 어둠에 잠긴다…'],
  yeomra: ['"판관들아, 나와라" — 판결이 다섯 번 내려친다', '지옥의 불이 사방으로 터져 나간다'],
};

class Game {
  constructor() {
    this.pixel = new PixelRenderer(document.getElementById('stage'));
    const scene = (this.scene = new THREE.Scene());
    scene.background = new THREE.Color('#3b4a3a');
    this.time = 0;
    this.state = 'title';
    this.night = 0;
    this.nightTarget = 0;
    this.hitstop = 0;
    this.shakeAmt = 0;
    this.kills = 0;
    this.hitCombo = 0;
    this.lastHitTime = -10;
    this.alarm = 0;
    this.enemies = [];
    this.projectiles = [];
    this.timers = [];
    this.rains = [];
    this.tornados = [];
    this.storms = [];   // 뇌운
    this.fires = [];    // 폭염룡이 남긴 불길
    this.orbits = [];   // 검무 결계 칼날
    this.lancerFx = []; // 창술사: 떨어지는 창, 창 기둥, 회선창, 도약
    this.marks = [];    // 낙인섬 낙인
    this.spawnQueue = [];
    this.wave = 0;
    this.round = 0;
    this.stage = 0;
    this.waveActive = false;
    this.focus = V(0, 0, 10);
    this.lead = V();

    this.setupLights();
    this.world = new World(scene);
    this.fx = new FX(scene, this.pixel);
    this.audio = new Audio();
    this.settings = loadSettings();
    this.ui = new UI(this);
    this.applySettings();
    // 직업별 레벨·경험치·착용 장비, 공용 가방
    this.progress = {};
    this.inv = new Set(['sw0', 'mg0', 'bw0', 'sp0', 'fn0', 'ot0']);
    this.enh = {};     // 무기·갑옷 강화 단계 {아이템 id: +n}
    this.mats = {};    // 강화 재료 (주문서·혼석) 개수
    this.codexReg = {}; // 장신구 도감에 등록한 칸
    this.ext = {};     // 1.2에 더한 것: 엽전·장터·수호령·보스 도전·부탁 기록 (shop.js · pet.js · challenge.js · requests.js)
    this.gear = [];    // 방어구·장신구 (무작위 옵션이 붙은 낱개). 착용 여부는 직업별 progress.eq
    this.drops = [];
    this.target = null;
    this.paused = false;
    this.player = new Player(this);
    this.buildTargetMarker();

    // 오픈월드: 지금 서 있는 지역(싸우는 동안엔 싸움이 시작된 지역으로 고정)
    this.mapId = 'palace';
    this.map = MAPS.palace;
    this.cleared = {};
    this.regionBanner = {};
    // 퀘스트 진행: step = QUESTS 순번, prog = 이 단계 진행도, lit = 밝힌 석등, bounty = 현상수배
    this.quest = { step: 0, prog: {}, lit: [], bounty: null, shards: [], prologue: false, ended: false, qv: 5 };
    this.flames = [];
    this.fieldT = 0;
    this.themeCur = this.cloneTheme(MAPS.palace.theme);
    this.npcs = [];
    this.birds = [];
    this.createActors();
    this.buildQuestMarkers();

    this.world.buildNav();
    this.flowT = 0;
    this.setupInput();
    this.setupPause();
    this.bestCombo = 0;
    this.saveT = 15;
    this.selectedCls = 'sword';
    this.setupClassSelect();
    this.flags = {};    // 한 번만 보여 주는 것들 (튜토리얼·도움말)
    this.difficulty = DIFFS[loadSettings().diff] ? loadSettings().diff : 'normal';
    this.coach = new Coach(this);
    this.stats = newStats(); // 누적 기록 (업적·도감)
    this.records = new Records(this);
    this.codex = new Codex(this);
    this.shop = new Shop(this);
    this.pet = new Pet(this);
    this.requests = new Requests(this);
    this.dev = new DevStats(this);
    this.daily = null;  // 오늘의 목표 { day, goals, bonus }
    this.dailyGoals = new Daily(this);
    this.qk = new QuestKinds(this); // 추격·찾기·순서·호위·버티기 퀘스트
    this.applySave(loadSave());
    this.preview = new ClassPreview(this);
    this.ui.setClass(this.player.cfg);
    this.updateQuest();
    // 탭을 닫거나 숨길 때 저장
    // 앱을 내려 뒀다가 돌아오면(새로 고침 없이) 그동안의 수련 보상
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) { this.save(false); this.hiddenAt = Date.now(); return; }
      if (this.hiddenAt && this.state === 'play') this.welcomeBack(Date.now() - this.hiddenAt);
      this.hiddenAt = 0;
    });
    window.addEventListener('pagehide', () => this.save(false));
    this.last = performance.now();
    this.loop = this.loop.bind(this);
    requestAnimationFrame(this.loop);
  }

  // ---------- 조명 ----------
  setupLights() {
    const s = this.scene;
    this.hemi = new THREE.HemisphereLight('#dfe9ff', '#8a7c62', 1.15);
    s.add(this.hemi);
    const sun = (this.sun = new THREE.DirectionalLight('#fff0d6', 2.5));
    sun.castShadow = true;
    const smap = GFX.hd ? { high: 4096, mid: 2048, low: 1024 }[loadSettings().quality || 'high'] : 2048;
    sun.shadow.mapSize.set(smap, smap);
    if (GFX.hd) sun.shadow.radius = 3;
    const sc = sun.shadow.camera;
    sc.left = -30; sc.right = 30; sc.top = 30; sc.bottom = -30; sc.near = 1; sc.far = 140;
    sun.shadow.bias = -0.0006;
    sun.shadow.normalBias = 0.03;
    s.add(sun, sun.target);
    this.sunOffset = V(-16, 30, 14);
    this.points = [];
    for (let i = 0; i < 8; i++) {
      const l = new THREE.PointLight('#ffb35c', 0, 9, 1.4);
      s.add(l);
      this.points.push(l);
    }
    this.lightTimer = 0;
  }

  updateLights(dt) {
    const n = this.night;
    shared.night.value = n;
    // 림 라이트: 낮 따뜻한 흰빛 → 밤 달빛
    shared.rimColor.value.setRGB(1 - n * 0.35, 0.94 - n * 0.16, 0.85 + n * 0.15);
    shared.rimK.value = 0.32 + n * 0.3;
    this.blendTheme(dt);
    const th = this.themeCur;
    const c = (pair) => _e.copy(pair[0]).lerp(pair[1], n);
    this.sun.color.copy(c(th.sun));
    // 고화질은 하늘빛을 줄여 그림자 대비를 살림
    this.sun.intensity = lerp(th.sunI[0], th.sunI[1], n) * (GFX.hd ? 0.95 : 1);
    this.hemi.color.copy(c(th.sky));
    this.hemi.groundColor.copy(c(th.ground));
    this.hemi.intensity = lerp(th.hemiI[0], th.hemiI[1], n) * (GFX.hd ? 0.62 : 1);
    this.scene.background.copy(c(th.bg));
    this.world.setNight(n);

    // 그림자 카메라를 초점에 맞추되 섀도 텍셀 단위로 스냅 (그림자 지글거림 방지)
    const f = this.focus;
    const dir = _a.copy(this.sunOffset).normalize();
    const right = _b.crossVectors(_c.set(0, 1, 0), dir).normalize();
    const up = _c.crossVectors(dir, right).normalize();
    const texel = 60 / (GFX.hd ? 4096 : 2048);
    const rx = Math.round(f.dot(right) / texel) * texel;
    const uy = Math.round(f.dot(up) / texel) * texel;
    const dz = f.dot(dir);
    const snapped = _d.copy(right).multiplyScalar(rx).addScaledVector(up, uy).addScaledVector(dir, dz);
    this.sun.target.position.copy(snapped);
    this.sun.position.copy(snapped).add(this.sunOffset);
    this.sun.target.updateMatrixWorld();

    // 가까운 석등에 점광원 배정
    this.lightTimer -= dt;
    if (this.lightTimer <= 0) {
      this.lightTimer = 0.25;
      const L = [...this.world.lanterns].sort((a, b) => a.distanceToSquared(f) - b.distanceToSquared(f));
      const hl = f.z < 12 ? this.world.hallLightPos : null; // 정전 창호 불빛은 궁궐 안에서만
      for (let i = 0; i < 8; i++) {
        const src = hl && i >= 6 ? hl[i - 6] : L[i];
        if (src) this.points[i].position.copy(src); else this.points[i].position.set(0, -50, 0);
      }
    }
    for (let i = 0; i < 8; i++) {
      const fl = 1 + Math.sin(this.time * 9 + i * 1.7) * 0.06 + Math.sin(this.time * 23 + i) * 0.04;
      this.points[i].intensity = n * (i < 6 ? 22 : 30) * fl;
      this.points[i].distance = i < 6 ? 8 : 11;
    }
  }

  // ---------- 입력 ----------
  setupInput() {
    this.keys = new Set();
    this.input = { mx: 0, mz: 0, moveLen: 0, mouseRecent: false, mouseWorld: null };
    this.mouse = { x: 0, y: 0, t: -10 };
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Tab' || e.code === 'F2' || e.code === 'F3') e.preventDefault();
      // 설정에서 키를 바꾸는 중: 다음에 누른 키를 그 동작에 배정
      if (this.rebind) { e.preventDefault(); this.finishRebind(e.code); return; }
      if (e.repeat) { this.keys.add(e.code); return; }
      this.keys.add(e.code);
      this.setPadMode(false);
      const act = this.binds[e.code];
      this.onKey(act || e.code, e);
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('blur', () => this.keys.clear());
    const stage = document.getElementById('app');
    stage.addEventListener('mousemove', (e) => { this.mouse.x = e.clientX; this.mouse.y = e.clientY; this.mouse.t = this.time; });
    stage.addEventListener('mousedown', (e) => {
      this.mouse.x = e.clientX; this.mouse.y = e.clientY; this.mouse.t = this.time;
      // 선택 화면: 카드를 누르면 고르기만 함 (시작은 아래 버튼으로)
      if (this.state === 'title') { const c = e.target.closest && e.target.closest('.cls'); if (c && c.dataset.cls !== this.selectedCls) { this.selectClass(c.dataset.cls); this.audio.unlock(); this.audio.play('talk'); } return; }
      this.audio.unlock();
      if (this.paused) return;
    if (this.ui.inDialog) { this.ui.advance(); return; }
      if (this.state !== 'play') return;
      if (e.button === 0) this.player.startAttack(this.readInput());
      if (e.button === 2 && !this.cdCheck('skill', this.player.skillCd)) this.player.startSkill(this.readInput());
    });
    stage.addEventListener('contextmenu', (e) => e.preventDefault());
    document.getElementById('story').addEventListener('click', () => { if (this.story && !this.story.credits) this.storyNext(); });
    // 가방 버튼·창: 클릭이 공격으로 새지 않게
    for (const id of ['bag-btn', 'bag', 'evo-btn', 'skills', 'hunt-btn', 'quest', 'pause', 'menu-btn', 'map-btn', 'coach', 'minimap', 'worldmap']) {
      const el = document.getElementById(id);
      el.addEventListener('mousedown', (e) => e.stopPropagation());
      el.addEventListener('touchstart', (e) => e.stopPropagation(), { passive: true });
    }
    document.getElementById('bag-btn').addEventListener('click', () => { if (this.state === 'play') this.toggleBag(); });
    this.minimap = new MiniMap(this);
    this.hub = new Hub(this);
    document.getElementById('bag-close').addEventListener('click', () => this.toggleBag(false));
    document.querySelectorAll('.bag-tabs button').forEach((b) => b.addEventListener('click', (e) => { e.stopPropagation(); this.ui.tab(b.dataset.tab); }));
    document.getElementById('auto-equip').addEventListener('click', (e) => { e.stopPropagation(); this.autoEquip(); });
    document.getElementById('salvage-low').addEventListener('click', (e) => {
      e.stopPropagation();
      this.salvageGear(this.gear.filter((g) => g.tier <= 1).map((g) => g.uid));
    });
    document.getElementById('gear-sort').addEventListener('change', (e) => { this.ui.gearSort = e.target.value; this.ui.refreshBag(); });
    for (const b of document.querySelectorAll('#gear-filter [data-f]')) b.addEventListener('click', (e) => {
      e.stopPropagation(); this.ui.gearFilter = b.dataset.f;
      for (const x of document.querySelectorAll('#gear-filter [data-f]')) x.classList.toggle('on', x === b);
      this.ui.refreshBag();
    });
    document.getElementById('evo-btn').addEventListener('click', () => { if (this.state === 'play') this.toggleSkills(); });
    document.getElementById('hunt-btn').addEventListener('click', () => { if (this.state === 'play') this.setAutoHunt(!this.autoHunt); });
    document.getElementById('map-btn').addEventListener('click', () => { if (this.state === 'play') { this.hub.toggle(false); this.minimap.toggle(); } });
    document.getElementById('quest').addEventListener('click', () => { if (this.state === 'play') this.toggleAutoMove(); });
    document.getElementById('skills-close').addEventListener('click', () => this.toggleSkills(false));
    stage.addEventListener('wheel', (e) => { this.pixel.zoom(e.deltaY > 0 ? -1 : 1); this.saveT = Math.min(this.saveT, 2); }, { passive: true });
    this.setupTouch();
    setupNative(this); // 앱(Capacitor)일 때만: 뒤로 가기 단추·앱 내리기
  }

  setupTouch() {
    const pad = document.getElementById('touch');
    if (!('ontouchstart' in window)) return;
    pad.classList.add('on');
    document.body.classList.add('touch');
    // 대화창을 탭하면 다음 대사
    document.getElementById('dialog').addEventListener('touchstart', (e) => { e.preventDefault(); this.ui.advance(); }, { passive: false });
    document.getElementById('gameover').addEventListener('touchstart', (e) => { e.preventDefault(); if (this.state === 'dead') this.retry(); }, { passive: false });
    const stick = document.getElementById('stick');
    const knob = stick.firstElementChild;
    this.touchMove = { x: 0, z: 0 };
    let id = null, ox = 0, oy = 0;
    const area = document.getElementById('stick-area');
    area.addEventListener('touchstart', (e) => {
      if (this.state === 'title') return;
      const t = e.changedTouches[0];
      id = t.identifier; ox = t.clientX; oy = t.clientY;
      stick.style.left = ox + 'px'; stick.style.top = oy + 'px';
      stick.classList.add('show');
      e.preventDefault();
    }, { passive: false });
    area.addEventListener('touchmove', (e) => {
      for (const t of e.changedTouches) if (t.identifier === id) {
        let dx = t.clientX - ox, dy = t.clientY - oy;
        const l = Math.hypot(dx, dy), m = 50;
        if (l > m) { dx *= m / l; dy *= m / l; }
        knob.style.transform = `translate(${dx}px, ${dy}px)`;
        this.touchMove.x = dx / m; this.touchMove.z = dy / m;
      }
      e.preventDefault();
    }, { passive: false });
    const end = (e) => {
      for (const t of e.changedTouches) if (t.identifier === id) {
        id = null; this.touchMove.x = 0; this.touchMove.z = 0;
        knob.style.transform = ''; stick.classList.remove('show');
      }
    };
    area.addEventListener('touchend', end);
    area.addEventListener('touchcancel', end);
    for (const b of document.querySelectorAll('#touch [data-k]')) {
      b.addEventListener('touchstart', (e) => { e.preventDefault(); if (this.state !== 'title') this.onKey(b.dataset.k); }, { passive: false });
    }
    // 공격 단추는 누르고 있으면 계속 벰 (휴대폰에서 한 번 벨 때마다 두드리지 않아도 되게)
    const atk = document.querySelector('#touch [data-k="atk"]');
    let hold = null;
    const stopHold = () => { clearInterval(hold); hold = null; atk.classList.remove('held'); };
    atk.addEventListener('touchstart', () => { stopHold(); atk.classList.add('held'); hold = setInterval(() => { if (this.state === 'play' && !this.paused && !this.ui.inDialog) this.onKey('atk'); }, 180); }, { passive: true });
    atk.addEventListener('touchend', stopHold);
    atk.addEventListener('touchcancel', stopHold);
  }

  readInput() {
    const k = this.keys;
    let x = 0, z = 0;
    if (k.has('KeyA') || k.has('ArrowLeft')) x -= 1;
    if (k.has('KeyD') || k.has('ArrowRight')) x += 1;
    if (k.has('KeyW') || k.has('ArrowUp')) z -= 1;
    if (k.has('KeyS') || k.has('ArrowDown')) z += 1;
    if (this.touchMove && (this.touchMove.x || this.touchMove.z)) { x = this.touchMove.x; z = this.touchMove.z; }
    if (this.padMove && (this.padMove.x || this.padMove.z)) { x = this.padMove.x; z = this.padMove.z; this.mouse.t = -10; }
    const l = Math.hypot(x, z);
    const inp = this.input;
    inp.moveLen = Math.min(1, l);
    inp.mx = l > 0 ? x / Math.max(1, l) : 0;
    inp.mz = l > 0 ? z / Math.max(1, l) : 0;
    if (l > 1) { inp.mx = x / l; inp.mz = z / l; }
    inp.mouseRecent = this.time - this.mouse.t < 3;
    inp.mouseWorld = inp.mouseRecent ? this.pixel.unproject(this.mouse.x, this.mouse.y, this.player.pos.y + 0.6) : null;
    if (this.ui.inDialog || this.state !== 'play') { inp.moveLen = 0; inp.mx = inp.mz = 0; }
    return inp;
  }

  // ---------- 직업 선택 ----------
  setupClassSelect() {
    for (const card of document.querySelectorAll('#classes .cls')) {
      const C = CLASSES[card.dataset.cls];
      card.querySelector('.role').textContent = C.role;
    }
    const btn = (id, fn) => { const b = document.getElementById(id); b.addEventListener('click', (e) => { e.stopPropagation(); fn(); }); b.addEventListener('mousedown', (e) => e.stopPropagation()); };
    btn('btn-cont', () => { if (this.hasSave) this.start(); });
    btn('btn-new', () => this.newGame(false));
    document.getElementById('daily-line')?.addEventListener('click', () => { if (this.state === 'play' && !this.pauseOpen) { this.togglePause(true); this.pausePane('daily'); } });
    document.getElementById('title-diff')?.addEventListener('click', (ev) => { const b = ev.target.closest('[data-diff]'); if (b) { this.audio.unlock(); this.audio.play('talk'); this.setDifficulty(b.dataset.diff); } });
    btn('cf-yes', () => this.newGame(true));
    btn('cf-no', () => this.showConfirm(false));
    btn('away-ok', () => document.getElementById('away').classList.remove('show'));
    document.querySelector('#title .credit').textContent = `3D 액션 · Three.js · v${VERSION}${DEMO ? ' · 체험판' : ''}`;
    if (DEMO) document.querySelector('#title .logo-big').insertAdjacentHTML('beforeend', '<span class="demo-badge">체험판</span>');
    // 선택 화면의 언어 버튼: 누를 때마다 다음 언어로
    btn('btn-lang', () => { const i = LANGS.findIndex(([k]) => k === LANG); this.setLang(LANGS[(i + 1) % LANGS.length][0]); });
    document.getElementById('btn-lang').textContent = '🌐 ' + LANGS.find(([k]) => k === LANG)[1];
    document.getElementById('confirm').addEventListener('mousedown', (e) => e.stopPropagation());
    this.selectClass(this.selectedCls);
  }

  selectClass(id) {
    if (!CLASSES[id]) return;
    this.selectedCls = id;
    for (const card of document.querySelectorAll('#classes .cls')) card.classList.toggle('sel', card.dataset.cls === id);
    if (this.state === 'title' || !this.state) this.refreshTitle?.();
    // 타이틀 뒤 장면에서도 고른 직업 모습이 보이도록
    if (this.player.cls !== id) { this.player.setClass(id); this.ui.setClass(this.player.cfg); }
  }

  // 지역 색감: 지금 카메라가 있는 지역의 하늘·햇빛 색으로 천천히 바뀜
  cloneTheme(t) {
    const pair = (a) => [new THREE.Color(a[0]), new THREE.Color(a[1])];
    return { sun: pair(t.sun), sky: pair(t.sky), ground: pair(t.ground), bg: pair(t.bg), sunI: [...t.sunI], hemiI: [...t.hemiI], ambient: t.ambient };
  }

  blendTheme(dt, snap = false) {
    // 시간 던전은 시련탑 마당을 빌려 쓰되 색감은 던전마다 다른 지역의 것
    const rid = this.tower?.mode === 'dungeon' ? DUNGEONS[this.tower.dg].theme : this.world.regionAt(this.focus.x, this.focus.z).id;
    const tgt = MAPS[rid].theme;
    const cur = this.themeCur;
    const k = snap ? 1 : 1 - Math.exp(-dt * 1.4);
    for (const key of ['sun', 'sky', 'ground', 'bg']) for (let i = 0; i < 2; i++) cur[key][i].lerp(_e.set(tgt[key][i]), k);
    for (const key of ['sunI', 'hemiI']) for (let i = 0; i < 2; i++) cur[key][i] = lerp(cur[key][i], tgt[key][i], k);
    cur.ambient = tgt.ambient;
    // 지역 색감 (고화질 합성 셰이더)
    const U = this.pixel.hdMat?.uniforms, G = GRADE[rid];
    if (U && G) {
      U.gTint.value.x = lerp(U.gTint.value.x, G.tint[0], k); U.gTint.value.y = lerp(U.gTint.value.y, G.tint[1], k); U.gTint.value.z = lerp(U.gTint.value.z, G.tint[2], k);
      U.gSat.value = lerp(U.gSat.value, G.sat, k);
      U.gHaze.value.lerp(_e.set(G.haze), k);
      U.gHazeAmt.value = lerp(U.gHazeAmt.value, G.hz, k);
    }
  }

  // 궁궐의 수문장·나인·참새, 죽림 입구의 약초꾼, 폐사찰 입구의 떠돌이 도사
  createActors() {
    this.npcs = [
      new NPC(this, 'guard', -12.4, 6.4, 0.6, '수문장 박돌쇠', []),
      new NPC(this, 'lady', 19.2, 7.5, -0.9, '나인 연이', [
        '어머, 검객님. 이 궁은 밤만 되면 도깨비불이 떠다녀요.',
        '도깨비들은 장난이 심하지만, 혼쭐을 내주면 금방 달아난답니다.',
        '푸른 불덩이를 쏘는 녀석은 검으로 쳐내면 튕겨낼 수 있대요!',
        '남문 밖으로 쭉 내려가면 대숲이에요. 더 가면 눈 덮인 옛 절터가 있고요.',
        '(N 키로 낮과 밤을 바꿔 볼 수 있어요. 싸우는 중엔 안 돼요.)',
      ]),
      new NPC(this, 'herb', 4.2, 35.5, -2.4, '약초꾼 분이', [
        '어머나, 궁에서 내려오셨어요? 여기서부턴 죽림이에요.',
        '숲속엔 여우들이 어슬렁거려요. 가까이 가면 달려드니 조심하세요.',
        '숲 한가운데 서낭당 나무가 있는데, 거기 방울을 흔들면 여우 떼가 몰려온대요.',
        '그 끝엔 천년 묵은 구미호가… 아이고, 생각만 해도 무서워라.',
      ]),
      new NPC(this, 'smith', 9.5, 179.5, 2.8, '대장장이 쇠돌이', [
        '여기가 옛 대장간 터요. 불가사리란 놈이 쇠붙이란 쇠붙이는 죄다 먹어 치웠지.',
        '바닥의 분화구가 벌겋게 달아오르면 곧 터지니 얼른 비키시오.',
        '돌장승은 칼이 잘 안 먹히오. 얼리거나 기술로 몰아치시오.',
      ]),
      new NPC(this, 'captain', 9.5, 226.9, -2.6, '의병장 강호', [
        '이 산성은 임진년 난리 때 의병들이 지키던 곳이오.',
        '산적 도깨비는 몽둥이로 후려치고, 까마귀 요괴는 하늘에서 깃털 화살을 세 발씩 쏘오.',
        '범은 몸을 날려 덮치니, 몸을 낮추면 옆으로 비키시오.',
      ]),
      new NPC(this, 'envoy', -9.5, 273.1, 2.6, '용녀 해랑', [
        '여기는 동해 용왕님의 궁이에요. 뭍사람은 정말 오랜만이네요.',
        '해파리의 독 방울을 맞으면 몸이 무거워져요. 거북 장군은 등딱지가 아주 단단하고요.',
        '본전 앞 용고를 울리면 용왕님이 나오세요… 지금은 성정이 사나우시니 조심하세요.',
      ]),
      new NPC(this, 'hunter', 12.6, 328.6, -1.6, '포수 만복', [
        '이 골짜기 냇물은 원래 거울처럼 맑았소. 왕지네가 깨어나기 전까진.',
        '멧돼지는 몸을 낮추면 들이받고, 사마귀 요괴는 낫질이 빠르오. 왕벌 독 방울은 피하시오.',
        '냇가 물레방아를 돌리면 골짜기가 술렁인다오… 각오가 되거든 돌려 보시오.',
      ]),
      new NPC(this, 'ginseng', -10.8, 369.8, 2.8, '심마니 영감', [
        '심봤다! …아니, 사람이로군. 이 눈 속에서 산삼 찾다 보면 별걸 다 보오.',
        '눈늑대는 떼로 덮치고, 얼음 도깨비에게 맞으면 몸이 얼어붙소. 서리 도깨비불의 구슬도 마찬가지요.',
        '고원 한가운데 얼음 북을 울리면 동장군이 나온다는구려.',
      ]),
      new NPC(this, 'keeper', 10.2, 419.6, 2.6, '능참봉', [
        '해 떨어지기 전에 돌아가시오. 밤의 능은 산 사람이 있을 곳이 못 되오.',
        '망령 병사는 창을 길게 찌르고, 무인석은 돌칼로 땅을 내려찍소. 무인석은 칼이 잘 안 먹히니 기술로 몰아치시오.',
        '원귀 궁녀는 사라졌다 나타나며 넋불을 던지오. 혼유석 앞 향로에 향을 피우면 어둑시니가 나온다오.',
      ]),
      new NPC(this, 'peddler', -10.6, 466.2, 2.5, '보부상 덕배', [
        '쉿, 도깨비들 귀가 밝소. 밤장터에선 사람인 티를 내면 안 되오.',
        '장난꾸러기는 날래게 덮치고, 노름꾼은 엽전을 부채꼴로 던지오. 너구리는 맞으면 펑 사라졌다 엉뚱한 데서 나타나니 놀라지 마시오.',
        '장터 한가운데 난장 북을 울리면 외다리 독각귀가 판을 받으러 나온다오.',
      ]),
      new NPC(this, 'haenyeo', 10.4, 515.2, 2.6, '해녀 순덕', [
        '갯벌은 발이 푹푹 빠져요. 물웅덩이에선 걸음이 느려지고, 인면어는 오히려 빨라지니 조심하세요.',
        '농게는 큰 집게가 단단해서 칼이 덜 먹혀요. 갯귀신이 던지는 진흙에 맞으면 몸이 무거워지고요.',
        '당산나무 아래 징을 치면 장산범이 내려온대요… 목소리에 대답하면 안 돼요.',
      ]),
      new NPC(this, 'fairy', -10.4, 563, 2.6, '선녀 연화', [
        '선계에선 구름이 길을 막아요. 옥돌 길을 따라 다니세요.',
        '천둥 동자는 번개 구슬을, 학 요괴는 깃털을 부채꼴로 쏴요. 선녀 그림자는 맞으면 사라졌다 엉뚱한 데서 나타나고요.',
        '구름 제단의 천둥 북을 울리면 뇌공님이 내려오세요… 벼락이 떨어질 자리는 붉게 빛나요.',
      ]),
      new NPC(this, 'ferry', -12.5, 135.5, 2.4, '사공 영감', [
        '이 늪은 물이 얕아도 발이 푹푹 빠지오. 나무 다리를 따라 다니시오.',
        '물귀신은 물속에서 빨라지고, 두꺼비 요괴의 독침을 맞으면 몸이 무거워지오.',
        '남쪽 용왕 제단의 징을 치면 천년 묵은 이무기가 깨어난다는 전설이 있소…',
      ]),
      new NPC(this, 'hermit', -4.4, 75.4, 2.6, '떠돌이 도사 청허', [
        '허허, 대숲을 지나 여기까지 왔는가. 이곳은 버려진 옛 절터일세.',
        '눈밭엔 강시와 원귀가 떠돈다네. 강시는 뛰어오를 때 피하게.',
        '절 안쪽 종각의 범종을 울리면 망자들이 깨어나고, 저승사자가 명부를 들고 오지.',
        '자네라면 해낼 걸세. 기술을 갈고닦게나 — 수련이 쌓이면 기술이 달라진다네.',
      ]),
    ];
    this.birds = [];
    for (const [x, z] of [[-6, 6], [-5.4, 6.6], [6.5, 15], [7, 14.3], [-15, 9], [14, -0.5], [0.5, -9.5], [-6, 40], [5.5, 47], [-3, 70]]) {
      this.birds.push(new Bird(this, V(x, this.world.heightAt(x, z), z)));
    }
  }

  // 플레이어가 다른 지역으로 걸어 들어가면 이름을 띄우고 임무·색감을 바꿈 (싸우는 중엔 고정)
  updateRegion(force = false) {
    if (this.waveActive && !force) return;
    const R = this.world.regionAt(this.player.pos.x, this.player.pos.z);
    if (R.id === this.mapId && !force) return;
    this.mapId = R.id;
    this.map = MAPS[R.id];
    const logo = document.getElementById('logo');
    if (logo) logo.innerHTML = `<span class="han">${this.map.han}</span><span class="sub">${this.map.sub}</span>`;
    if (!force && this.state === 'play' && this.time - (this.regionBanner[R.id] ?? -99) > 10) {
      this.regionBanner[R.id] = this.time;
      this.ui.banner(this.map.name, this.map.sub, 2.4, 'title-banner');
    }
    this.updateQuest();
  }

  // 필드 몬스터: 죽림·폐사찰을 돌아다니면 주변에 무리가 생겨남. 멀리 떨어지면 사라짐
  updateField(dt) {
    this.fieldT -= dt;
    if (this.fieldT > 0) return;
    this.fieldT = 1.2;
    const p = this.player;
    let removed = false;
    const R = this.world.regionAt(p.pos.x, p.pos.z);
    for (const e of this.enemies) {
      if (!e.field || e.dead) continue;
      const d = Math.hypot(e.pos.x - p.pos.x, e.pos.z - p.pos.z);
      // 멀어진 것, 그리고 다른 지역에서 따라오다 경계에 걸린 것(18칸 밖)은 치움 — 남아 있으면 이 지역 몬스터가 나오지 않아 처치 퀘스트가 막힘
      // 쫓아오는데 10초 넘게 조금도 가까워지지 않고(덤불·바위에 끼임, 제자리에서 맴돔) 12칸 밖이면 치움 — 자리만 차지해 새 몬스터가 안 나옴
      if (!e.aggro || d < (e.bestD ?? 1e9) - 1) { e.bestD = d; e.stillT = 0; } else e.stillT = (e.stillT || 0) + 1.2;
      const wedged = e.aggro && e.stillT > 10 && d > 12;
      if (d > 40 || wedged || (e.homeRegion && e.homeRegion !== R.id && d > 18)) { e.dispose(); e.removed = true; removed = true; if (this.target === e) this.target = null; }
    }
    if (removed) this.enemies = this.enemies.filter((e) => !e.removed);
    if (this.state !== 'play' || p.dead || this.waveActive) return;
    const F = MAPS[R.id].field;
    if (!F) return;
    const here = () => this.enemies.filter((e) => e.field && !e.dead && (!e.homeRegion || e.homeRegion === R.id)).length;
    if (here() >= F.cap) return;
    // 퀘스트에 필요한 몬스터(모을 물건을 떨어뜨리는 종류, 아직 덜 잡은 종류)는 훨씬 자주, 그리고 가까이 나옴
    //  (예전엔 여우불처럼 드문 종류가 지역 가장자리에만 보여, 가운데 여우만 잡게 되어 퀘스트가 더뎠음)
    const qWant = this.questWanted(), want = new Set(qWant);
    for (const t of this.dailyGoals.wanted()) want.add(t);
    const W = F.types.map(([t, w]) => [t, qWant.has(t) ? w * 6 + 3 : want.has(t) ? w * 4 + 2 : w]);
    let roll = Math.random() * W.reduce((a, t) => a + t[1], 0), type = W[0][0];
    for (const [t, w] of W) { roll -= w; if (roll <= 0) { type = t; break; } }
    const at = qWant.has(type) ? this.world.randomWalkable(p.pos.x, p.pos.z, 9, 15) || this.world.randomWalkable(p.pos.x, p.pos.z, 13, 22) : this.world.randomWalkable(p.pos.x, p.pos.z, 13, 22);
    if (!at || this.world.regionAt(at.x, at.z) !== R) return;
    const n = Math.min(1 + Math.floor(Math.random() * F.pack), F.cap - here());
    const lv = 1 + MAPS[R.id].lvl + Math.floor((lvEq(p.level) - 1) / 3);
    for (let i = 0; i < n; i++) {
      const pos = (i && this.world.randomWalkable(at.x, at.z, 0.8, 2.5)) || at;
      const fe = new Enemy(this, type, pos, lv, { field: true });
      fe.homeRegion = R.id; // (home은 몬스터가 돌아다니는 중심 자리로 따로 쓰임)
      this.earlyEase(fe);
      this.enemies.push(fe);
    }
  }

  progressOf(cls) {
    if (!this.progress[cls]) this.progress[cls] = { level: 1, exp: 0, weapon: WEAPONS[cls][0].id, outfit: 'ot0' };
    return this.progress[cls];
  }

  // ---------- 자동 타겟 ----------
  buildTargetMarker() {
    const g = new THREE.Group();
    const ringMat = new THREE.MeshBasicMaterial({ color: '#ff5a3a', transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false });
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.85, 1, 24, 1), ringMat);
    ring.rotation.x = -Math.PI / 2;
    // 네 귀퉁이 꺾쇠
    const tick = new THREE.MeshBasicMaterial({ color: '#ffe0a0', transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
    const ticks = new THREE.Group();
    for (let k = 0; k < 4; k++) {
      const t = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 0.1), tick);
      const a = (k / 4) * Math.PI * 2;
      t.position.set(Math.cos(a) * 1.15, 0, Math.sin(a) * 1.15);
      t.rotation.set(-Math.PI / 2, 0, -a + Math.PI / 2);
      ticks.add(t);
    }
    const arrow = new THREE.Mesh(new THREE.ConeGeometry(0.24, 0.48, 4), new THREE.MeshBasicMaterial({ color: '#ff6a3a' }));
    arrow.rotation.x = Math.PI;
    arrow.userData.noOutline = true;
    g.add(ring, ticks, arrow);
    g.visible = false;
    this.scene.add(g);
    this.marker = { g, ring, ticks, arrow };
  }

  targetRange() { return this.player.cls === 'sword' ? 7 : this.player.cls === 'lancer' ? 8.5 : this.player.cls === 'fan' ? 10 : 12; }

  validTarget(e) {
    // removed: 지역을 옮기거나 다시 일어설 때 정리된 적 (목록에서 빠졌는데 겨냥이 남지 않게)
    if (!e || e.dead || e.spawning || e.removed) return false;
    const p = this.player.pos;
    return Math.hypot(e.pos.x - p.x, e.pos.z - p.z) < this.targetRange() + 2;
  }

  // 가장 가까운 적을 자동으로 잡음 (Tab: 다음 적으로)
  updateTarget(cycle = false) {
    const p = this.player.pos;
    const cands = this.enemies.filter((e) => !e.dead && !e.spawning)
      .map((e) => ({ e, d: Math.hypot(e.pos.x - p.x, e.pos.z - p.z) }))
      .filter((c) => c.d < this.targetRange())
      .sort((a, b) => a.d - b.d);
    if (cycle && cands.length) {
      const i = cands.findIndex((c) => c.e === this.target);
      this.target = cands[(i + 1) % cands.length].e;
      this.audio.play('talk');
      return;
    }
    if (this.validTarget(this.target)) {
      // 지금 목표보다 훨씬 가까운 적이 붙으면 바꿈
      const cur = Math.hypot(this.target.pos.x - p.x, this.target.pos.z - p.z);
      if (cands.length && cands[0].e !== this.target && cands[0].d < cur - 2.5) this.target = cands[0].e;
      return;
    }
    this.target = cands.length ? cands[0].e : null;
  }

  updateMarker(dt) {
    const M = this.marker, t = this.target;
    M.g.visible = !!t && this.state === 'play' && !document.body.classList.contains('shot'); // 스크린샷 모드에서는 숨김
    if (!M.g.visible) return;
    const r = t.isBoss ? 1.6 : t.isWisp ? 0.7 : 0.8;
    M.g.position.set(t.pos.x, t.y + 0.05, t.pos.z);
    const pulse = 1 + Math.sin(this.time * 8) * 0.06;
    M.ring.scale.setScalar(r * pulse);
    M.ticks.scale.setScalar(r * (1.05 + Math.sin(this.time * 8) * 0.1));
    M.ticks.rotation.y += dt * 1.5;
    const top = t.isBoss ? 4.4 : t.isWisp ? 2.3 : 2.2;
    M.arrow.position.set(0, top + Math.abs(Math.sin(this.time * 5)) * 0.25, 0);
  }

  // ---------- 성장 ----------
  // 레벨 상한(50)에서 넘친 경험치 → 수련 꾸러미 (꾸러미마다 주문서 2 · 도깨비 가루 5 · 엽전 250, 30%로 요괴 혼석)
  onCapBundle(n) {
    const M = this.mats;
    let soul = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < 2; j++) { const k = ['scrollW', 'scrollA', 'scrollG'][Math.floor(Math.random() * 3)]; M[k] = (M[k] || 0) + 1; }
      M.dust = (M.dust || 0) + 5;
      if (Math.random() < 0.3) { M.soul = (M.soul || 0) + 1; soul++; }
    }
    this.shop.gain(250 * n);
    this.stats.capBundle = (this.stats.capBundle || 0) + n;
    this.ui.toast(`수련 꾸러미 ×${n} — 강화 주문서 ${2 * n} · 도깨비 가루 ${5 * n} · 엽전 ${250 * n}${soul ? ` · 요괴 혼석 ${soul}` : ''}`, 3);
    if (!this.ui.bagOpen) this.ui.refreshBag?.();
  }

  onLevelUp(pl, n) {
    const p = V(pl.pos.x, pl.y, pl.pos.z);
    this.audio.play('levelup');
    this.ui.flash('#ffd060', 0.35);
    this.ui.banner('LEVEL UP', `${pl.cfg.title} ${pl.cfg.name} · Lv.${pl.level}`, 2.4, 'win-banner');
    this.fx.circle(p, 2.2, '#ffd060', 1.4, 2);
    this.fx.ring(p, 3, '#fff2c0', 0.5);
    for (let i = 0; i < 70; i++) {
      const a = Math.random() * Math.PI * 2, r = rand(0.2, 0.9);
      this.fx.add.emit({ x: p.x + Math.cos(a) * r, y: p.y + rand(0, 0.5), z: p.z + Math.sin(a) * r, vy: rand(2, 7), drag: 1, life: rand(0.6, 1.3), size: rand(2, 4), endSize: 1, color: '#fff6c0', color2: '#ffa020' });
    }
    for (const slot of [2, 3]) {
      if (pl.level - n < SKILL_LEVEL[slot] && pl.level >= SKILL_LEVEL[slot]) {
        const name = pl.cfg.labels['skill' + slot];
        setTimeout(() => this.ui.toast(`새 스킬 해금: ${name} (${slot === 2 ? 'L' : 'I'})`, 3), 900);
      }
    }
    // 수련점이 생겼으니 기술 창 버튼에 알림
    const E1 = Object.values(EVOS[pl.cls]).filter((E) => E.lv.some((lv) => pl.level - n < lv && pl.level >= lv));
    if (E1.length) { setTimeout(() => this.ui.toast(`새 수련 단계: ${E1.map((E) => E.base).join(', ')} (T 키)`, 4), 1800); this.coach.tip('evo', 3); }
    document.getElementById('evo-dot').classList.remove('hidden');
    this.ui.setClass(pl.cfg, pl);
    this.save(false);
  }

  // ---------- 가방 ----------
  toggleBag(open = !this.ui.bagOpen) {
    if (open) this.toggleSkills(false);
    this.ui.bagOpen = open;
    this.paused = open || !!this.ui.skillsOpen || !!this.mapOpen;
    this.ui.showBag(open);
    if (open) this.ui.newItem = false;
  }

  // ---------- 기술 수련 ----------
  toggleSkills(open = !this.ui.skillsOpen) {
    if (open && this.ui.bagOpen) this.toggleBag(false);
    this.ui.skillsOpen = open;
    this.paused = open || !!this.ui.bagOpen || !!this.mapOpen;
    this.ui.showSkills(open);
    if (open) document.getElementById('evo-dot').classList.add('hidden');
  }

  // 갈래 고르기: 처음이면 Ⅰ단계로 수련(수련점 1), 이미 수련했으면 단계는 그대로 두고 갈래만 바꿈
  chooseEvo(slot, b) {
    const p = this.player;
    const E = EVOS[p.cls][slot];
    if (p.level < E.lv[0]) return;
    const pr = this.progressOf(p.cls);
    const r = pr.rank?.[slot] || (pr.evo?.[slot] ? 1 : 0);
    if (!r && freePoints(pr, p.level) <= 0) { this.ui.toast('수련점이 부족해요', 1.6); this.audio.play('denied'); return; }
    if (pr.evo?.[slot] === b) return;
    pr.evo = { ...(pr.evo || {}), [slot]: b };
    pr.rank = { ...(pr.rank || {}), [slot]: Math.max(1, r) };
    this.audio.play('levelup');
    this.ui.toast(r ? `${E.base} 갈래를 ${E[b].name}(으)로 바꿈` : `${E.base} → ${E[b].name} 수련!`, 2);
    this.ui.setClass(p.cfg, p);
    this.ui.refreshSkills();
    this.save(false);
  }

  trainEvo(slot) {
    const p = this.player;
    const E = EVOS[p.cls][slot];
    const pr = this.progressOf(p.cls);
    const r = pr.rank?.[slot] || (pr.evo?.[slot] ? 1 : 0);
    if (!pr.evo?.[slot] || r >= 5 || p.level < E.lv[r] || freePoints(pr, p.level) <= 0) return;
    pr.rank = { ...(pr.rank || {}), [slot]: r + 1 };
    const nm = E[pr.evo[slot]].name;
    this.audio.play('levelup');
    this.ui.banner('수련', `${nm} ${RANK_NAME[r + 1]}단계`, 2, 'win-banner');
    this.ui.toast(`${RANK_NAME[r + 1]}단계 각인(${RUNES[r + 1].title})을 골라 보세요`, 2.4);
    if (r + 1 === 2) this.coach.tip('rune', 0.4);
    const at = V(p.pos.x, p.y, p.pos.z);
    this.fx.circle(at, 2, r + 1 === 5 ? '#ffd040' : '#bfe8ff', 1.2, 3);
    this.ui.setClass(p.cfg, p);
    this.ui.refreshSkills();
    this.save(false);
  }

  // 파생 기술 갈래와 단계 (수련 안 했거나 레벨이 모자라면 null / 0)
  branch(pl, slot) {
    return branchOf(this.progressOf(pl.cls), pl.cls, pl.level, slot);
  }

  // 기술 모양을 정하는 단계 (강화·각성 각인을 안 골랐으면 그만큼 빠짐)
  rank(pl, slot) {
    return featRank(this.progressOf(pl.cls), pl.cls, pl.level, slot);
  }

  // 수련한 단계 수에 따른 위력 배수
  rankPow(pl, slot) {
    return rankMul(rankOf(this.progressOf(pl.cls), pl.cls, pl.level, slot));
  }

  rune(pl, slot, rank) {
    return runeOf(this.progressOf(pl.cls), pl.cls, pl.level, slot, rank);
  }

  // 단계에 따른 재사용 대기 배수 (플레이어가 스킬을 쓸 때)
  skillCdMul(pl, slot) {
    const r = rankOf(this.progressOf(pl.cls), pl.cls, pl.level, slot);
    return rankCd(r) * (this.rune(pl, slot, 4) === 'swift' ? 0.7 : 1) * (1 - (pl.gear?.cdr || 0));
  }

  // 각인 고르기: 이미 수련한 단계라 수련점은 들지 않고, 언제든 바꿀 수 있음
  chooseRune(slot, rank, key) {
    const p = this.player;
    const pr = this.progressOf(p.cls);
    if (rankOf(pr, p.cls, p.level, slot) < rank || !RUNES[rank]?.opts[key]) return;
    if (runeOf(pr, p.cls, p.level, slot, rank) === key) return;
    pr.rune = { ...(pr.rune || {}), [slot]: { ...(pr.rune?.[slot] || {}), [rank]: key } };
    const E = EVOS[p.cls][slot], R = RUNES[rank].opts[key];
    this.audio.play('levelup');
    this.ui.toast(`${E[pr.evo[slot]].name} ${RANK_NAME[rank]}: ${R.name} 각인`, 1.8);
    this.ui.setClass(p.cfg, p);
    this.ui.refreshSkills();
    this.save(false);
  }

  // 각인 효과: 기술이 발동하는 순간 한 번 (메아리로 다시 나갈 때는 빼고)
  skillRunes(pl, slot, recast) {
    if (this._echoing || pl.dead) return;
    const el = this.rune(pl, slot, 2), mod = this.rune(pl, slot, 3), use = this.rune(pl, slot, 4), aw = this.rune(pl, slot, 5);
    if (!el && !mod && !use && !aw) return;
    const pow = this.rankPow(pl, slot) * (1 + lvEq(pl.level) * 0.04);
    const c = this.aimPoint(pl, 4, 9);
    if (el === 'fire') this.runeFire(c, pow);
    else if (el === 'ice') this.runeIce(c, pow);
    else if (el === 'volt') this.runeVolt(pl, pow);
    if (mod === 'echo') {
      this.after(1.2, () => {
        if (pl.dead || this.state !== 'play') return;
        this.fx.ghost(pl.rig, '#c8b0ff', 0.45);
        this.fx.ring(V(pl.pos.x, pl.y, pl.pos.z), 1.8, '#c8b0ff', 0.35);
        this._echoing = true;
        try { recast(); } finally { this._echoing = false; }
      });
    } else if (mod === 'vamp') {
      const n = this.enemiesIn(pl.pos, 6).length;
      if (n && pl.hp < pl.maxHp) {
        const h = Math.min(pl.maxHp - pl.hp, Math.round(pl.maxHp * Math.min(0.2, 0.04 * n)));
        pl.hp += h;
        for (const e of this.enemiesIn(pl.pos, 6)) { const ec = e.center(); this.fx.streak(ec.clone(), V(pl.pos.x, pl.y + 1, pl.pos.z), '#8aff9a', 0.4, 0.25); }
        this.fx.number(pl.pos.clone().add(V(0, 2.1, 0)), `+${h}`, 'heal');
      }
    }
    if (use === 'guard') { pl.guardT = 3; this.fx.ring(V(pl.pos.x, pl.y + 0.1, pl.pos.z), 1.3, '#ffe8a0', 0.5); }
    else if (use === 'gale') { pl.galeT = 3; this.fx.ring(V(pl.pos.x, pl.y + 0.1, pl.pos.z), 1.3, '#a0ffd0', 0.4); }
    if (aw === 'frenzy') {
      for (const k of ['skillCd', 'cd2', 'cd3']) if (k !== ['', 'skillCd', 'cd2', 'cd3'][slot]) pl[k] = Math.max(0, (pl[k] || 0) - 3);
      this.fx.spark(pl.pos.x, pl.y + 1.2, pl.pos.z, 12, '#ff6a8a', 5);
    }
  }

  // 화염 각인: 겨냥한 자리에 3초 동안 불길
  runeFire(c, pow) {
    const R = 2.2;
    this.fx.scorch(c, R, '#2a0a04', 3.2);
    for (let i = 0; i < 6; i++) {
      this.after(i * 0.5, () => {
        this.fx.colorFire(c.x, c.y + 0.2, c.z, 16, R * 0.8, '#ffd070', '#ff3a10');
        for (const e of this.enemiesIn(c, R)) { this.damageEnemy(e, Math.round(6 * pow), false, 0.3, 0.05); e.burnFor(2, Math.round(4 * pow)); }
      });
    }
  }

  // 서리 각인: 겨냥한 자리 주변을 잠깐 얼림
  runeIce(c, pow) {
    const R = 2.6;
    this.fx.ring(c, R, '#bfeaff', 0.45);
    for (let i = 0; i < 7; i++) { const a = (i / 7) * Math.PI * 2; this.fx.iceSpike(V(c.x + Math.cos(a) * R * 0.6, c.y, c.z + Math.sin(a) * R * 0.6), 0.8, 1.0); }
    for (const e of this.enemiesIn(c, R)) { this.damageEnemy(e, Math.round(10 * pow), false, 0.5, 0.2); e.freeze(1.2); }
    this.audio.play('block');
  }

  // 뇌전 각인: 가까운 적 셋에게 벼락
  runeVolt(pl, pow) {
    const list = this.enemiesIn(pl.pos, 8).sort((a, b) => Math.hypot(a.pos.x - pl.pos.x, a.pos.z - pl.pos.z) - Math.hypot(b.pos.x - pl.pos.x, b.pos.z - pl.pos.z)).slice(0, 3);
    list.forEach((e, i) => this.after(0.08 + i * 0.1, () => {
      if (e.dead) return;
      this.fx.bolt(V(e.pos.x, this.world.heightAt(e.pos.x, e.pos.z), e.pos.z), 0.7);
      this.damageEnemy(e, Math.round(14 * pow), false, 1.5, 0.45);
    }));
    if (list.length) this.audio.play('thunder');
  }

  equipItem(id) {
    const p = this.player;
    const it = item(id);
    if (!it || !this.inv.has(id)) return;
    if (it.kind === 'weapon' && it.cls !== p.cls) { this.ui.toast('다른 직업의 무기예요'); this.audio.play('denied'); return; }
    p.equip(id);
    this.audio.play(it.kind === 'weapon' ? 'draw' : 'coin');
    const pos = V(p.pos.x, p.y, p.pos.z);
    this.fx.ring(pos, 1.6, RARITY[it.tier].color, 0.4);
    for (let i = 0; i < 30; i++) this.fx.add.emit({ x: pos.x + rand(-0.4, 0.4), y: pos.y + rand(0, 1.6), z: pos.z + rand(-0.4, 0.4), vy: rand(0.5, 2), life: rand(0.4, 0.8), size: 2, color: '#ffffff', color2: RARITY[it.tier].color });
    this.ui.setClass(p.cfg, p);
    this.ui.refreshBag();
    this.save(false);
  }

  // ---------- 자동 저장 ----------
  applySave(d) {
    const info = document.getElementById('title-save');
    this.hasSave = !!d;
    if (!d) { if (info) info.textContent = ''; this.refreshTitle(); return; }
    this.difficulty = DIFFS[d.difficulty] ? d.difficulty : 'normal';
    this.awayFrom = d.savedAt || 0; // 마지막으로 저장한 때 → 이어하기를 누르면 그동안의 수련 보상
    this.kills = d.kills | 0;
    this.round = d.round | 0;
    this.bestCombo = d.bestCombo | 0;
    // 싸우던 중에 저장됐다면 북을 울리기 전 상태로
    this.stage = this.round > 0 ? 3 : Math.min(1, d.stage | 0);
    if (d.music === false && this.audio.musicOn) this.audio.toggleMusic();
    if (d.outline === 0) this.pixel.compMat.uniforms.outline.value = 0;
    if (typeof d.zoom === 'number' && d.zoom !== this.pixel.userZoom) { this.pixel.userZoom = d.zoom; this.pixel.resize(); }
    if (d.night) { this.nightTarget = 1; this.night = 1; }
    if (d.progress) for (const k of Object.keys(CLASSES)) if (d.progress[k]) Object.assign(this.progressOf(k), d.progress[k]);
    if (Array.isArray(d.inv)) for (const id of d.inv) if (item(id)) this.inv.add(id);
    for (const list of Object.values(WEAPONS)) this.inv.add(list[0].id); // 새로 생긴 직업의 기본 무기
    if (Array.isArray(d.gear)) this.gear = d.gear.filter((g) => g && g.uid && g.stats);
    this.enh = { ...(d.enh || {}) };
    this.mats = { ...(d.mats || {}) };
    this.codexReg = { ...(d.codexReg || {}) };
    this.ext = { ...(d.ext || {}) };
    this.codex.dirty();
    this.towerBest = d.towerBest | 0;
    if (d.cleared) this.cleared = { ...d.cleared };
    else if (d.round > 0) this.cleared = { palace: true };
    // 퀘스트: 예전 기록은 평정한 지역으로 진행 단계를 짐작
    if (d.quest && typeof d.quest.step === 'number') this.quest = { step: d.quest.step, prog: d.quest.prog || {}, lit: d.quest.lit || [], bounty: d.quest.bounty || null, shards: d.quest.shards || [], prologue: !!d.quest.prologue, ended: !!d.quest.ended, qv: d.quest.qv };
    else {
      const c = this.cleared;
      this.quest.step = c.temple ? 11 : c.bamboo ? 7 : c.palace ? 2 : (d.stage | 0) >= 1 ? 1 : 0;
    }
    // 단풍 산성·용궁이 생기기 전 기록: 협곡 다음(귀환·완료)이었으면 새 지역의 첫 단계(산길 너머)부터
    if (!this.quest.qv && this.quest.step >= 21) { this.quest.step = 21; this.quest.prog = {}; }
    // 청류 계곡·백설 고원이 생기기 전(1.1) 기록: 용궁 다음(귀환·완료)이었으면 `샘물길`부터
    if (this.quest.qv === 2 && this.quest.step >= 33) { this.quest.step = 33; this.quest.prog = {}; }
    // 지역마다 새 방식 퀘스트(added: 4)가 끼어들기 전 기록: 같은 퀘스트를 가리키게 단계 번호를 옮김 (그 사이 새 퀘스트는 건너뜀)
    //  (그때의 목록 = 1.2의 네 지역(v5)이 없는 목록)
    const v4 = QUESTS.filter((q) => !q.v5);
    if ((this.quest.qv || 0) < 4) {
      const old = v4.filter((q) => !q.added);
      const s0 = this.quest.step;
      this.quest.step = s0 >= old.length ? v4.length : v4.indexOf(old[s0]);
    }
    // 고원 너머 네 지역(1.2)이 생기기 전 기록: 귀환·완료였으면 새 지역의 첫 단계(고분 가는 길)부터
    if ((this.quest.qv || 0) < 5) {
      const first = QUESTS.findIndex((q) => q.v5);
      if (this.quest.step >= first) { this.quest.step = first; this.quest.prog = {}; }
    }
    this.quest.qv = 5;
    // 이야기가 생기기 전 기록: 이미 평정한 지역의 조각은 가진 것으로, 프롤로그는 건너뜀
    if (!d.quest?.shards) this.quest.shards = Object.keys(this.cleared).filter((k) => SHARD_LINES[k]);
    if (this.quest.step > 0 || this.round > 0) this.quest.prologue = true;
    this.playTime = d.playTime || 0;
    this.flags = d.flags || {};
    this.daily = d.daily || null;
    this.stats = { ...newStats(), ...(d.stats || {}) };
    this.stats.kills = Math.max(this.stats.kills, this.kills); // 기록이 생기기 전 퇴치 수
    if (!d.flags && (this.quest.step > 0 || this.round > 0)) this.flags.tut = 1; // 이미 해 본 사람은 튜토리얼 생략
    this.quest.lit.forEach((i) => this.world.lanterns[i] && this.addFlame(this.world.lanterns[i]));
    this.updateGates(true);
    this.qk.resume();
    // 마지막 위치에서 이어서 (예전 기록은 그 지역 입구에서)
    let at = null;
    if (Array.isArray(d.pos) && this.world.inside(d.pos[0], d.pos[1], 0.4) && !this.world.isBlocked(d.pos[0], d.pos[1], 0.4, this.world.heightAt(d.pos[0], d.pos[1]))) at = d.pos;
    else if (d.mapId && d.mapId !== 'palace') { const R = this.world.regions.find((r) => r.id === d.mapId); if (R) at = [R.spawn[0], R.spawn[2]]; }
    if (at) {
      this.player.pos.set(at[0], this.world.heightAt(at[0], at[1]), at[1]);
      this.player.y = this.player.pos.y;
      this.startPos = this.player.pos.clone();
    }
    const cls = d.cls && CLASSES[d.cls] ? d.cls : this.player.cls;
    this.player.cls = null; // 강제로 다시 만들기
    this.selectClass(cls);
    if (info) {
      const when = new Date(d.savedAt || Date.now());
      const pad = (n) => String(n).padStart(2, '0');
      info.innerHTML = `이어하기 · ${this.player.cfg.title} <b>Lv.${this.player.level}</b> · <b>${this.round + 1}회차</b> · 퇴치 <b>${this.kills}</b> · 최고 연속 <b>${this.bestCombo}</b>` + (this.quest.ended ? ' · <b>달거울 복원</b>' : '') +
        `<small>${when.getMonth() + 1}/${when.getDate()} ${pad(when.getHours())}:${pad(when.getMinutes())} 자동 저장 · Delete 키: 기록 지우기</small>`;
    }
    this.refreshTitle();
  }

  save(show = true) {
    // 선택 화면에서 한 번도 시작하지 않았으면 빈 기록을 만들지 않음
    if (this.state === 'title' && !this.hasSave) return;
    if (this.noSave) return; // 저장 파일을 불러와 새로고침하는 중엔 덮어쓰지 않음
    this.hasSave = true;
    const ok = writeSave({
      kills: this.kills,
      round: this.round,
      stage: this.stage === 2 ? (this.round > 0 ? 3 : 1) : this.stage,
      bestCombo: this.bestCombo,
      cls: this.player.cls,
      progress: this.progress,
      mapId: this.mapId,
      pos: this.tower?.active ? [this.towerReturn.x, this.towerReturn.z] : [+this.player.pos.x.toFixed(2), +this.player.pos.z.toFixed(2)],
      ..._noTower(this),
      quest: this.quest,
      cleared: this.cleared,
      towerBest: this.towerBest || 0,
      playTime: Math.round(this.playTime || 0),
      flags: this.flags,
      difficulty: this.difficulty,
      daily: this.daily,
      version: VERSION,
      stats: this.stats,
      enh: this.enh,
      mats: this.mats,
      codexReg: this.codexReg,
      ext: this.ext,
      inv: [...this.inv],
      gear: this.gear,
      music: this.audio.musicOn,
      outline: this.pixel.compMat.uniforms.outline.value,
      zoom: this.pixel.userZoom,
      night: !this.waveActive && this.nightTarget > 0.5,
    });
    if (ok && show) this.ui.saveMark();
    this.saveT = 15;
  }

  onKey(code) {
    // 스크린샷 모드: F2 화면 글자 숨기기, F3 지금 화면을 그림 파일로 저장
    if (code === 'F2') { document.body.classList.toggle('shot'); return; }
    if (code === 'F3') { this.screenshot(); return; }
    if (this.story) {
      if (code === 'Escape' || code === 'pause') this.storySkip();
      else if (['Space', 'Enter', 'KeyJ', 'KeyE', 'atk', 'act', 'dash'].includes(code)) this.storyNext();
      return;
    }
    // 연출 장면: Esc로 건너뛰기, 대사는 넘기기만
    if (this.cut) {
      if (code === 'Escape' || code === 'pause') this.cut.skip();
      else if (this.ui.inDialog && ['KeyE', 'Space', 'Enter', 'KeyJ', 'KeyZ', 'act', 'atk'].includes(code)) this.ui.advance();
      return;
    }
    if (this.state === 'title') {
      if (document.getElementById('confirm').classList.contains('show')) {
        if (code === 'Escape') this.showConfirm(false);
        else if (code === 'Enter') this.newGame(true);
        return;
      }
      if (code === 'Delete' || code === 'Backspace') {
        if (!this.hasSave) return;
        this.resetProgress();
        const info = document.getElementById('title-save');
        if (info) info.textContent = '기록을 지웠습니다. 처음부터 시작합니다.';
        return;
      }
      if (this.pauseOpen) { if (code === 'Escape' || code === 'pause') this.togglePause(false); return; }
      const i = CLASS_ORDER.indexOf(this.selectedCls);
      if (code === 'ArrowLeft' || code === 'KeyA') { this.selectClass(CLASS_ORDER[(i + CLASS_ORDER.length - 1) % CLASS_ORDER.length]); this.audio.unlock(); this.audio.play('talk'); return; }
      if (code === 'ArrowRight' || code === 'KeyD') { this.selectClass(CLASS_ORDER[(i + 1) % CLASS_ORDER.length]); this.audio.unlock(); this.audio.play('talk'); return; }
      if (/^Digit[1-5]$/.test(code) && CLASS_ORDER[+code.slice(-1) - 1]) { this.selectClass(CLASS_ORDER[+code.slice(-1) - 1]); return; }
      // Enter: 기록이 있으면 이어하기, 없으면 새로 시작
      if (code === 'Enter' || code === 'Space') { if (this.hasSave) this.start(); else this.newGame(true); }
      return;
    }
    this.audio.unlock();
    if (code === 'KeyM') { const on = this.audio.toggleMusic(); this.ui.toast(on ? '음악 켜짐' : '음악 꺼짐'); this.save(false); return; }
    if (code === 'Equal' || code === 'NumpadAdd') { this.pixel.zoom(1); return; }
    if (code === 'Minus' || code === 'NumpadSubtract') { this.pixel.zoom(-1); return; }
    if (code === 'KeyO') {
      this.pixel.compMat.uniforms.outline.value = this.pixel.compMat.uniforms.outline.value ? 0 : 1;
      this.ui.toast(this.pixel.compMat.uniforms.outline.value ? '외곽선 켜짐' : '외곽선 꺼짐');
      this.save(false);
      return;
    }
    if (this.pauseOpen) {
      if (code === 'Escape' || code === 'KeyP' || code === 'pause') { const back = this.pzFromHub; this.togglePause(false); if (back) this.hub.toggle(true); }
      return;
    }
    if (this.hub?.open) {
      if (['Escape', 'pause', 'KeyP', 'menu'].includes(code)) this.hub.toggle(false);
      else if (code === 'KeyB' || code === 'bag') { this.hub.toggle(false); this.toggleBag(true); }
      else if (code === 'KeyT' || code === 'skills') { this.hub.toggle(false); this.toggleSkills(true); }
      else if (code === 'KeyV' || code === 'map') { this.hub.toggle(false); this.minimap.toggle(true); }
      return;
    }
    if (this.paused) {
      // 가방·기술·지도 창이 열려 있는 동안
      if (this.mapOpen) { if (['KeyV', 'map', 'Escape', 'Tab', 'pause'].includes(code)) this.minimap.toggle(false); return; }
      if (code === 'KeyB' || code === 'bag') this.toggleBag();
      else if (code === 'KeyT' || code === 'skills') this.toggleSkills();
      else if (code === 'Escape' || code === 'Tab') { this.toggleBag(false); this.toggleSkills(false); }
      return;
    }
    if (this.state === 'dead') { if (code === 'KeyR' || code === 'Enter' || code === 'act') this.retry(); return; }
    if (this.ui.inDialog) {
      if (['KeyE', 'Space', 'Enter', 'KeyJ', 'KeyZ', 'act', 'atk'].includes(code)) this.ui.advance();
      return;
    }
    const inp = this.readInput();
    switch (code) {
      case 'KeyJ': case 'KeyZ': case 'atk': this.player.startAttack(inp); break;
      case 'Space': case 'ShiftLeft': case 'ShiftRight': case 'dash': if (!this.cdCheck('dash', this.player.dashCd)) this.player.startDash(inp); break;
      case 'KeyL': case 'KeyQ': case 'skill2': if (!this.lockCheck(2) && !this.cdCheck('skill2', this.player.cd2)) this.player.startExtraSkill(inp, 2); break;
      case 'KeyI': case 'KeyR': case 'skill3': if (!this.lockCheck(3) && !this.cdCheck('skill3', this.player.cd3)) this.player.startExtraSkill(inp, 3); break;
      case 'bag': this.toggleBag(); break;
      case 'KeyU': case 'ult':
        if (!this.player.ult) { this.ui.toast('고유 기술은 보스 무기를 들어야 쓸 수 있어요', 1.8); this.audio.play('denied'); break; }
        if (!this.cdCheck('ult', this.player.ultCd)) this.player.startUlt(inp);
        break;
      case 'KeyK': case 'KeyX': case 'skill': if (!this.cdCheck('skill', this.player.skillCd)) this.player.startSkill(inp); break;
      case 'KeyE': case 'Enter': case 'act': this.interact(); break;
      case 'KeyN':
        if (this.waveActive) { this.ui.toast('도깨비가 날뛰는 중엔 시간을 바꿀 수 없어요'); break; }
        this.nightTarget = this.nightTarget > 0.5 ? 0 : 1;
        this.ui.toast(this.nightTarget ? '밤이 찾아옵니다…' : '날이 밝아옵니다');
        break;
      case 'Tab': this.updateTarget(true); break;
      case 'KeyB': this.toggleBag(); break;
      case 'KeyV': case 'map': this.minimap.toggle(true); break;
      case 'KeyT': case 'skills': this.toggleSkills(); break;
      case 'KeyY': case 'records': this.togglePause(true); this.pausePane('records'); break;
      case 'KeyF': case 'auto': this.toggleAutoMove(); break;
      case 'Escape': case 'menu': this.hub.toggle(true); break;
      case 'KeyP': case 'pause': this.togglePause(true); break;
      case 'KeyH': case 'hunt': this.setAutoHunt(!this.autoHunt); break;
      case 'KeyG': this.godMode = !this.godMode; this.ui.toast(this.godMode ? '무적 (디버그)' : '무적 해제'); break;
    }
  }

  // 아직 레벨이 모자라 잠긴 스킬
  lockCheck(slot) {
    if (this.player.level >= SKILL_LEVEL[slot]) return false;
    this.ui.denied('skill' + slot);
    this.audio.play('denied');
    this.ui.toast(`${this.player.cfg.labels['skill' + slot]}: Lv.${SKILL_LEVEL[slot]}에 열립니다`, 1.6);
    return true;
  }

  // 쿨타임이면 칸을 흔들고 짧은 소리. 반환: 쿨타임 중인지
  cdCheck(key, remain) {
    if (!(remain > 0.05) || this.player.dead) return false;
    this.ui.denied(key);
    this.audio.play('denied');
    return true;
  }

  // 기록을 모두 지우고 처음 상태로 (선택 화면에서)
  resetProgress() {
    clearSave();
    this.kills = 0; this.round = 0; this.stage = 0; this.bestCombo = 0; this.playTime = 0; this.flags = {}; this.stats = newStats(); this.daily = null;
    this.progress = {}; this.inv = new Set(['sw0', 'mg0', 'bw0', 'sp0', 'fn0', 'ot0']); this.gear = []; this.enh = {}; this.mats = {}; this.codexReg = {}; this.ext = {}; this.codex.dirty();
    this.cleared = {};
    this.quest = { step: 0, prog: {}, lit: [], bounty: null, shards: [], prologue: false, ended: false, qv: 5 };
    for (const f of this.flames) this.scene.remove(f);
    this.flames = [];
    this.qk.clear();
    this.updateGates(true);
    this.player.pos.copy(this.world.spawn); this.player.y = this.player.pos.y;
    this.startPos = null;
    for (const e of this.enemies) e.dispose();
    this.enemies = [];
    this.updateRegion(true);
    this.stage = 0;
    const c0 = this.selectedCls; this.player.cls = null; this.selectClass(c0);
    this.applySave(null);
    this.updateQuest();
    this.preview.rebuild();
  }

  // 새로 시작: 기록이 있으면 먼저 확인
  newGame(confirmed = false) {
    this.audio.unlock();
    if (this.hasSave && !confirmed) { this.showConfirm(true); return; }
    this.showConfirm(false);
    if (this.hasSave) this.resetProgress();
    if (this.difficulty === 'hard') this.flags.hardRun = 1;
    this.start();
  }

  // 고화질 ↔ 도트 (재질을 다시 만들어야 해서 저장 후 새로고침)
  // ---------- 게임패드 ----------
  // 표준 배치: A 공격 · B 피하기 · X 기술1 · Y 기술2 · RB 기술3 · RT 고유 기술 · LB 대화 · LT 타겟 · Back 가방 · Start 일시정지
  pollPad() {
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    let gp = null;
    for (const p of pads) if (p && p.connected) { gp = p; break; }
    if (!gp) { if (this.padMove) this.padMove.x = this.padMove.z = 0; return; }
    if (!this.padPrev) { this.padPrev = []; this.padIdx = 0; this.ui.toast('게임패드가 연결되었어요', 2); this.setPadMode(true); }
    const dz = (v) => (Math.abs(v) < 0.22 ? 0 : (v - Math.sign(v) * 0.22) / 0.78);
    const menu = this.padMenu();
    // 창이 새로 열리면 첫 칸에 바로 테두리 (패드로 무엇을 고를지 보이게)
    if (menu !== this.padLastMenu) {
      this.padLastMenu = menu; this.padFocus = null; this.padIdx = 0;
      if (menu) requestAnimationFrame(() => {
        if (!this.padMode || this.padMenu() !== menu) return;
        const first = [...menu.querySelectorAll('button:not([disabled]), input[type=range], .it, .eqs, .evo-opt, .evo-train')].find((e) => e.offsetParent !== null);
        if (first) { for (const e of document.querySelectorAll('.pad-focus')) e.classList.remove('pad-focus'); first.classList.add('pad-focus'); this.padFocus = first; }
      });
    }
    this.padMove = menu ? { x: 0, z: 0 } : { x: dz(gp.axes[0] || 0), z: dz(gp.axes[1] || 0) };
    const pressed = gp.buttons.map((b) => b.pressed || b.value > 0.5);
    // 메뉴에서는 스틱도 십자키처럼 (한 번씩)
    const sy = gp.axes[1] || 0, sx = gp.axes[0] || 0;
    pressed[100] = sy < -0.6; pressed[101] = sy > 0.6; pressed[102] = sx < -0.6; pressed[103] = sx > 0.6;
    for (let i = 0; i < pressed.length; i++) if (pressed[i] && !this.padPrev[i]) { this.setPadMode(true); this.padButton(i, menu); }
    if (!menu && (Math.abs(this.padMove.x) > 0.3 || Math.abs(this.padMove.z) > 0.3)) this.setPadMode(true);
    this.padPrev = pressed;
  }

  // 지금 게임패드로 조작할 창
  padMenu() {
    if (this.pauseOpen) return document.getElementById('pause');
    if (this.hub?.open) return document.getElementById('hub');
    if (document.getElementById('confirm').classList.contains('show')) return document.getElementById('confirm');
    if (this.ui.bagOpen) return document.getElementById('bag');
    if (this.ui.skillsOpen) return document.getElementById('skills');
    if (this.mapOpen) return document.getElementById('worldmap');
    return null;
  }

  // 마지막으로 쓴 입력 장치에 맞춰 화면의 조작 안내를 키보드 글자 ↔ 패드 버튼 그림으로 바꿈
  setPadMode(on) {
    if (this.padMode === on) return;
    this.padMode = on;
    document.body.classList.toggle('pad', on);
    // 기술 칸의 키 표시 (처음 한 번 키보드 글자를 기억해 둠)
    const PAD = { atk: 'A', dash: 'B', skill: 'X', skill2: 'Y', skill3: 'RB', ult: 'RT' };
    for (const sk of document.querySelectorAll('#status .skills .sk')) {
      const k = sk.querySelector('.key');
      if (!k) continue;
      if (k.dataset.kb === undefined) k.dataset.kb = k.textContent;
      const slot = sk.dataset.slot || 'atk';
      k.innerHTML = on ? padGlyph(PAD[slot]) : k.dataset.kb;
    }
    const qg = document.querySelector('#quest-go span');
    if (qg) { if (qg.dataset.kb === undefined) qg.dataset.kb = qg.textContent; qg.innerHTML = on ? padGlyph('↑') : qg.dataset.kb; }
  }

  padButton(i, menu) {
    this.audio.unlock();
    if (this.story) {
      if (this.story.credits) { if (i === 0 || i === 9) this.endStory(); }
      else if (i === 0) this.storyNext();
      else if (i === 1 || i === 9) this.storySkip();
      return;
    }
    if (this.cut) { if (i === 1 || i === 9) this.cut.skip(); else if (i === 0 && this.ui.inDialog) this.ui.advance(); return; }
    const dir = { 12: -1, 100: -1, 13: 1, 101: 1, 14: -1, 102: -1, 15: 1, 103: 1 }[i];
    if (menu) {
      const SEL = 'button:not([disabled]), input[type=range], .it, .eqs, .evo-opt, .evo-train, [data-look], [data-skin]';
      const els = [...menu.querySelectorAll(SEL)].filter((e) => e.offsetParent !== null && getComputedStyle(e).visibility !== 'hidden');
      if (!els.length) { if (i === 1 || i === 9) this.onKey('Escape'); return; }
      let cur = this.padFocus && els.includes(this.padFocus) ? this.padFocus : els[Math.max(0, Math.min(els.length - 1, this.padIdx || 0))];
      const isH = i === 14 || i === 15 || i === 102 || i === 103;
      if (dir !== undefined) {
        // 슬라이더에서 좌우는 값 조절
        if (cur.type === 'range' && isH) { cur.value = +cur.value + dir * 5; cur.dispatchEvent(new Event('input')); }
        else {
          // 누른 방향에서 가장 가까운 칸으로 (격자 모양 창도 자연스럽게)
          const a = cur.getBoundingClientRect(), ax = a.left + a.width / 2, ay = a.top + a.height / 2;
          const dx = isH ? dir : 0, dy = isH ? 0 : dir;
          let best = null, bs = Infinity;
          for (const e of els) {
            if (e === cur) continue;
            const b = e.getBoundingClientRect(), vx = b.left + b.width / 2 - ax, vy = b.top + b.height / 2 - ay;
            const along = vx * dx + vy * dy;
            if (along <= 4) continue;
            const across = Math.abs(vx * dy - vy * dx);
            const score = along + across * 2.2;
            if (score < bs) { bs = score; best = e; }
          }
          if (best) { cur = best; this.audio.play('talk'); }
        }
      } else if (i === 0) { cur.click(); }
      else if (i === 4 || i === 5) {
        // LB/RB: 탭 넘기기 (가방·일시정지 메뉴)
        const tabs = [...menu.querySelectorAll('.bag-tabs button, .pz-menu button[data-p]:not([data-p=resume])')].filter((e) => e.offsetParent !== null);
        if (tabs.length) {
          const k = Math.max(0, tabs.findIndex((t) => t.classList.contains('on')));
          tabs[(k + (i === 5 ? 1 : -1) + tabs.length) % tabs.length].click();
          this.audio.play('talk');
        }
      }
      else if (i === 1 || i === 9) { if (this.pauseOpen) this.onKey('Escape'); else if (this.hub.open) this.hub.toggle(false); else if (menu.id === 'confirm') this.showConfirm(false); else this.onKey('Escape'); }
      else if (i === 8 && menu.id === 'bag') this.toggleBag(false);
      this.padFocus = cur;
      this.padIdx = els.indexOf(cur);
      requestAnimationFrame(() => {
        for (const e of document.querySelectorAll('.pad-focus')) e.classList.remove('pad-focus');
        const m2 = this.padMenu();
        if (!m2) return;
        const list = [...m2.querySelectorAll(SEL)].filter((e) => e.offsetParent !== null);
        // 다시 그려진 창이면 같은 순번 칸으로
        const el = this.padFocus && list.includes(this.padFocus) ? this.padFocus : list[Math.min(this.padIdx, list.length - 1)];
        if (el) { this.padFocus = el; el.classList.add('pad-focus'); el.scrollIntoView?.({ block: 'nearest' }); }
      });
      return;
    }
    if (this.state === 'title') {
      if (i === 0) this.onKey('Enter');
      else if (i === 2) document.getElementById('btn-new').click();
      else if (i === 3) { const k = DIFF_ORDER[(DIFF_ORDER.indexOf(this.difficulty) + 1) % DIFF_ORDER.length]; this.audio.play('talk'); this.setDifficulty(k); }
      else if (i === 9) this.togglePause(true);
      else if (i === 14 || i === 102) this.onKey('ArrowLeft');
      else if (i === 15 || i === 103) this.onKey('ArrowRight');
      return;
    }
    if (this.state === 'dead') { if (i === 0 || i === 9) this.onKey('act'); return; }
    const MAP = { 0: 'atk', 1: 'dash', 2: 'skill', 3: 'skill2', 5: 'skill3', 7: 'ult', 4: 'act', 6: 'Tab', 8: 'bag', 12: 'auto', 13: 'hunt', 14: 'skills', 15: 'map', 9: 'menu' };
    const act = MAP[i];
    if (act) this.onKey(act);
  }

  // ---------- 설정 · 일시정지 ----------
  applySettings() {
    const S = this.settings;
    this.binds = bindMap(S);
    this.audio.setVolumes(S.vol);
    document.body.classList.toggle('no-dmg', !S.numbers);
    // 접근성: 적 공격 예고 색, 글자·UI 크기, 화면 번쩍임
    if (this.fx) this.fx.warnCol = S.warn || null;
    this.ui.flashMul = S.flash ?? 1;
    document.documentElement.style.setProperty('--ui', String(S.ui || 1));
  }

  // 화질 단계: 화면 해상도·AO·MSAA(pixel.js)와 그림자 지도 크기
  applyQuality(q) {
    this.pixel.setQuality(q);
    if (!GFX.hd) return;
    const n = { high: 4096, mid: 2048, low: 1024 }[q] || 4096, sh = this.sun.shadow;
    if (sh.mapSize.x === n) return;
    sh.mapSize.set(n, n);
    sh.map?.dispose();
    sh.map = null;
  }

  // 화질 자동 조절: 플레이 중 8초 동안의 초당 프레임이 40 아래면 한 단계 낮춤 (직접 고르면 끔, 올리지는 않음)
  autoQuality(dt) {
    const S = this.settings;
    if (!GFX.hd || S.autoQ === false || S.quality === 'low' || this.state !== 'play' || this.paused || document.hidden || this.killCam) { this.fpsWin = null; return; }
    const W = (this.fpsWin ||= { t: 0, a: [], skip: 2 });
    if (W.skip > 0) { W.skip -= dt; return; } // 창을 막 닫은 직후 등은 건너뜀
    W.t += dt; W.a.push(dt);
    if (W.t < 8) return;
    // 한 번씩 튀는 끊김(지역 불러오기 등)에 휘둘리지 않게 프레임 시간의 중앙값으로 봄
    const fps = 1 / W.a.sort((x, y) => x - y)[W.a.length >> 1];
    this.fpsWin = null;
    if (fps >= 40) return;
    const q = S.quality === 'high' ? 'mid' : 'low';
    this.setSetting((s) => { s.quality = q; });
    this.applyQuality(q);
    this.ui.toast(q === 'mid' ? '화면이 버벅여 화질을 「보통」으로 낮췄어요' : '화면이 버벅여 화질을 「낮음」으로 낮췄어요', 3);
  }

  // 언어 바꾸기: 저장하고 새로고침
  setLang(v) {
    this.save(false);
    this.setSetting((s) => { s.lang = v; });
    this.noSave = true;
    location.reload();
  }

  setSetting(fn) {
    fn(this.settings);
    saveSettings(this.settings);
    this.applySettings();
  }

  showConfirm(v) { document.getElementById('confirm').classList.toggle('show', v); }

  // 선택 화면 오른쪽: 고른 캐릭터의 설명·능력치 막대·스킬·장비
  // 난이도 바꾸기: 어려움보다 낮추면 '처음부터 끝까지 어려움' 업적은 더 이상 못 받음
  setDifficulty(v) {
    if (!DIFFS[v] || v === this.difficulty) return;
    this.difficulty = v;
    if (v !== 'hard') delete this.flags.hardRun;
    this.setSetting((s) => { s.diff = v; });
    if (this.hasSave) this.save(false);
    this.renderTitleDiff();
  }

  renderTitleDiff() {
    const el = document.getElementById('title-diff');
    if (!el) return;
    el.innerHTML = `<span class="td-l"><span class="td-gp">${padGlyph('Y')}</span>난이도</span>` + DIFF_ORDER.map((k) => `<button data-diff="${k}" class="${k === this.difficulty ? 'on' : ''}">${DIFFS[k].name}</button>`).join('')
      + `<span class="td-d">${DIFF_NOTE[this.difficulty]}</span>`;
  }

  refreshTitle() {
    this.renderTitleDiff();
    const C = CLASSES[this.selectedCls];
    const pr = this.progress[C.id];
    const lv = pr?.level || 1;
    const q = (sel) => document.querySelector(sel);
    q('.cd-name').innerHTML = `${C.title}<b>${C.name}</b>` + (this.hasSave && pr ? `<em>Lv.${lv}</em>` : '');
    q('.cd-role').textContent = C.role;
    q('.cd-desc').textContent = C.desc;
    q('.cd-bars').innerHTML = Object.entries(C.bars).map(([k, v]) => `<span>${k}</span><span class="pips5">${[1, 2, 3, 4, 5].map((i) => `<i class="${i <= v ? 'on' : ''}"></i>`).join('')}</span>`).join('');
    const keys = { 1: ['K', 'skill'], 2: ['L', 'skill2'], 3: ['I', 'skill3'] };
    q('.cd-skills').innerHTML = [1, 2, 3].map((slot) => {
      const br = pr ? branchOf(pr, C.id, lv, slot) : null;
      const r = pr ? rankOf(pr, C.id, lv, slot) : 0;
      const name = br ? `${EVOS[C.id][slot][br].name} ${RANK_NAME[r]}` : C.labels[keys[slot][1]];
      return `<div><span class="k">${keys[slot][0]}</span>${name}${br ? ` <small>(${EVOS[C.id][slot].base} 파생)</small>` : ''}</div>`;
    }).join('');
    const w = item(pr?.weapon || WEAPONS[C.id][0].id), o = item(pr?.outfit || 'ot0');
    const eqN = pr?.eq ? Object.values(pr.eq).filter(Boolean).length : 0;
    q('.cd-gear').innerHTML = `무기 <span style="color:${RARITY[w.tier].color}">${w.name}</span> · 갑옷 <span style="color:${RARITY[o.tier].color}">${o.name}</span>` + (eqN ? ` · 방어구·장신구 ${eqN}개` : '');
    for (const card of document.querySelectorAll('#classes .cls')) {
      const p2 = this.progress[card.dataset.cls];
      card.querySelector('.lvb').textContent = this.hasSave && p2 ? `Lv.${p2.level}` : '';
    }
    const cont = document.getElementById('btn-cont');
    cont.disabled = !this.hasSave;
    cont.classList.toggle('main', !!this.hasSave);
    document.getElementById('btn-new').classList.toggle('main', !this.hasSave);
  }

  start() {
    this.audio.unlock();
    if (this.state !== 'title') return;
    this.showConfirm(false);
    this.state = 'play';
    if (this.player.cls !== this.selectedCls) this.player.setClass(this.selectedCls);
    this.ui.setClass(this.player.cfg);
    this.player.hp = this.player.maxHp;
    this.save(false);
    document.getElementById('title').classList.add('hide');
    this.ui.showHud(true);
    const open = () => {
      this.ui.banner('월하궁', '도깨비 야행', 2.8, 'title-banner');
      if (!this.flags.tut && this.quest.step === 0) this.after(2.6, () => this.coach.startTutorial());
    };
    const from = this.awayFrom;
    this.awayFrom = 0;
    if (!this.quest.prologue) this.playStory(PROLOGUE, { moon: true, onDone: () => { this.quest.prologue = true; this.save(false); playScene(this, 'prologue', () => { open(); setTimeout(() => this.state === 'play' && this.welcomeBack(0), 5000); }); } });
    else {
      open();
      setTimeout(() => this.state === 'play' && this.welcomeBack(from ? Date.now() - from : 0), 2500); // 지역 이름 배너가 지나간 뒤
    }
  }

  // 돌아왔을 때: 오늘 첫 접속이면 출석 보상(src/attend.js) → 닫으면 자리 비운 동안 수련 보상
  welcomeBack(awayMs) {
    const a = this.player.dead ? null : claimAttend(this);
    if (!a) { if (awayMs) this.claimAway(awayMs); return; }
    this.save(false);
    showAttend(this, a, () => { if (awayMs && this.state === 'play') this.claimAway(awayMs); });
  }

  // 자리 비운 동안 수련 (src/away.js): 10분 넘게 비웠으면 보상을 주고 카드로 보여 줌
  claimAway(ms) {
    const r = awayReward(this, ms);
    if (!r || this.player.dead) return false;
    const got = grantAway(this, r);
    const el = document.getElementById('away');
    if (!el) return true;
    const min = Math.round(got.ms / 60000), h = Math.floor(min / 60), m = min % 60;
    el.querySelector('.aw-time').innerHTML = (h ? `<b>${h}</b><span>시간</span> ` : '') + `<b>${m}</b><span>분</span>`;
    const row = (label, val) => `<div><span>${label}</span><b>${val}</b></div>`;
    el.querySelector('.aw-list').innerHTML = row('경험치', `+${got.exp.toLocaleString()}`) + (got.lv1 > got.lv0 ? row('Lv.', `${got.lv0} → ${got.lv1}`) : '') +
      row('엽전', `+${got.coins.toLocaleString()}`) + Object.entries(got.mats).map(([k, n]) => row(MATS[k].name, `×${n}`)).join('') + (got.gear ? row('방어구·장신구', `×${got.gear}`) : '');
    el.querySelector('.aw-n').textContent = got.capped ? '8시간이 꽉 찼어요 — 더 자주 들러 주세요' : '최대 8시간까지 쌓여요';
    el.classList.add('show');
    this.audio.play('levelup');
    clearTimeout(this.awayHide);
    this.awayHide = setTimeout(() => el.classList.remove('show'), 9000);
    this.save(false);
    return true;
  }

  // 지금 화면을 PNG로 저장 (그린 직후에 읽어야 해서 한 번 더 그리고 바로 꺼냄)
  screenshot() {
    this.pixel.render(this.scene);
    const cv = this.pixel.renderer.domElement;
    const d = new Date(), pad = (n) => String(n).padStart(2, '0');
    cv.toBlob((b) => {
      if (!b) return;
      const a = document.createElement('a');
      a.href = URL.createObjectURL(b);
      a.download = `wolhagung-${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}.png`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    }, 'image/png');
    this.ui.flash('#ffffff', 0.15);
    this.audio.play('talk');
  }

  // ---------- 이야기 (프롤로그·엔딩) ----------
  playStory(lines, opt = {}) {
    const el = document.getElementById('story');
    const cfg = { title: tr(this.player.cfg.title), name: tr(this.player.cfg.name) };
    this.story = { lines: lines.map((l) => fillStory(tr(l), cfg)), i: -1, opt };
    el.className = 'show';
    el.querySelector('.story-moon').classList.toggle('broken', !!opt.mend); // 엔딩은 깨진 달에서 시작해 다시 차오름
    this.paused = true;
    this.storyNext();
  }

  storyNext() {
    const S = this.story;
    if (!S || S.credits) return;
    S.i++;
    const el = document.getElementById('story');
    if (S.i >= S.lines.length) {
      if (S.opt.credits) return this.showCredits();
      return this.endStory();
    }
    const tx = el.querySelector('.story-text');
    const line = S.lines[S.i];
    const m = line.match(/^([^:]{1,6}):\s*(.*)$/);
    tx.classList.remove('in');
    // 글자가 바뀌는 동안 잠깐 어두워졌다가 다시 밝아짐
    clearTimeout(this.storyFade);
    this.storyFade = setTimeout(() => {
      tx.innerHTML = m ? `<span class="who">${m[1]}</span>${m[2]}` : line;
      tx.classList.add('in');
    }, S.i ? 260 : 60);
    if (S.opt.moon && S.i === 2) el.querySelector('.story-moon').classList.add('broken');
    if (S.opt.mend && S.i === 3) el.querySelector('.story-moon').classList.remove('broken');
    this.audio.play('talk');
  }

  storySkip() {
    const S = this.story;
    if (!S || S.credits) return;
    if (S.opt.credits) this.showCredits(); else this.endStory();
  }

  showCredits() {
    const S = this.story;
    S.credits = true;
    const el = document.getElementById('story');
    const p = this.player;
    const t = Math.round(this.playTime || 0), hh = Math.floor(t / 3600), mm = Math.floor((t % 3600) / 60);
    const stats = [['레벨', `Lv.${p.level}`], ['회차', `${this.round + 1}`], ['퇴치', `${this.kills}`], ['최고 연속', `${this.bestCombo}`], ['시련탑', `${this.towerBest || 0}층`], ['플레이 시간', hh ? `${hh}시간 ${mm}분` : `${mm}분`]];
    const box = el.querySelector('.story-credits');
    box.innerHTML = `<h2>월하궁</h2><div class="sub">도깨비 야행 · 달거울 복원</div>` +
      `<div class="stats">${stats.map(([k, v]) => `<div>${k}<b>${v}</b></div>`).join('')}</div>` +
      `<dl>${CREDITS.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>` +
      `<div class="thanks">플레이해 주셔서 고맙습니다</div><button id="story-done">계속 지키기</button>`;
    el.classList.add('credits');
    box.querySelector('#story-done').addEventListener('click', (e) => { e.stopPropagation(); this.endStory(); });
    this.audio.play('victory');
  }

  endStory() {
    const S = this.story;
    if (!S) return;
    this.story = null;
    clearTimeout(this.storyFade);
    const el = document.getElementById('story');
    el.className = '';
    el.querySelector('.story-text').classList.remove('in');
    this.paused = !!(this.ui.bagOpen || this.ui.skillsOpen || this.mapOpen);
    S.opt.onDone?.();
  }

  // 지역 보스를 처음 물리치면 달거울 조각 하나
  gainShard(id) {
    const Q = this.quest;
    if (!SHARD_LINES[id] || Q.shards.includes(id)) return;
    Q.shards.push(id);
    const n = Q.shards.length;
    this.after(4.4, () => {
      this.ui.banner('달거울 조각', `${n} / ${SHARD_MAX}`, 2.6, 'win-banner');
      this.audio.play('levelup');
      const at = V(this.player.pos.x, this.player.y, this.player.pos.z);
      this.fx.ring(at, 2.2, '#fff2c0', 0.6);
      for (let i = 0; i < 26; i++) this.fx.add.emit({ x: at.x + rand(-0.6, 0.6), y: at.y + rand(0.2, 2), z: at.z + rand(-0.6, 0.6), vy: rand(0.4, 1.6), life: rand(0.6, 1.2), size: 2.5, endSize: 1, color: '#ffffff', color2: '#f0d890' });
      const say = () => { if (this.ui.inDialog || this.story) return this.after(0.5, say); this.ui.dialog('달거울', SHARD_LINES[id]); };
      this.after(1.2, say);
    });
  }

  // 시련탑에서 염라대왕을 처음 물리치면: 마지막 조각과 엔딩
  playEnding() {
    if (this.quest.ended) return;
    this.quest.ended = true;
    if (!this.quest.shards.includes('tower')) this.quest.shards.push('tower');
    this.save(false);
    this.whenFree(() => playScene(this, 'mirror', () => this.playStory(ENDING, { moon: true, mend: true, credits: true, onDone: () => { this.ui.toast('엔딩을 봤어요! 시련탑은 계속 높아지고, 회차와 현상수배도 이어집니다', 4); this.save(false); } })));
  }

  // 대화·이야기·연출·격파 장면이 모두 끝난 뒤에 실행 (장면이 겹치지 않게)
  whenFree(fn, hold = false) {
    if (hold) this.scenePending = (this.scenePending || 0) + 1;
    const go = () => {
      if (this.ui.inDialog || this.story || this.cut || this.killCam || this.cine || this.state !== 'play') return this.after(0.5, go);
      if (hold) this.scenePending--;
      fn();
    };
    go();
  }

  // ---------- 상호작용 ----------
  findInteract() {
    const p = this.player.pos;
    let best = null, bd = 2.4;
    for (const n of this.npcs) {
      const d = Math.hypot(n.pos.x - p.x, n.pos.z - p.z);
      if (d < bd) { bd = d; best = { kind: 'npc', npc: n, label: '대화', promptPos: n.pos.clone().add(V(0, 2.1, 0)) }; }
    }
    const Q = this.curQuest();
    if (Q && Q.type === 'light') {
      this.world.lanterns.forEach((L, idx) => {
        if (L.region !== (Q.region || 'temple') || this.quest.lit.includes(idx)) return;
        const d = Math.hypot(L.x - p.x, L.z - p.z);
        if (d < 2.2 && d < bd) { bd = d; best = { kind: 'lantern', idx, label: '석등 밝히기', promptPos: L.clone().add(V(0, 1.2, 0)) }; }
      });
    }
    const qo = this.qk.findInteract(p, bd);
    if (qo) { bd = qo.d; best = qo; }
    for (const P of this.world.portals) {
      if (P.kind === 'next' && !(this.tower?.active && this.tower.cleared && !this.tower.mode)) continue;
      const d = Math.hypot(P.x - p.x, P.z - p.z);
      if (d < 2.4 && d < bd) { bd = d; best = { kind: 'portal', portal: P, label: P.kind === 'next' ? `${this.tower.floor + 1}층으로` : P.label, promptPos: V(P.x, (P.promptY || 3), P.z) }; }
    }
    for (const dr of this.world.drums) {
      const d = Math.hypot(dr.pos.x - p.x, dr.pos.z - p.z);
      if (d < (dr.reach || 2.9) && d - 0.5 < bd) { bd = d - 0.5; best = { kind: 'drum', drum: dr, label: `${dr.label || '북'} 울리기`, promptPos: dr.pos.clone().add(V(0, dr.promptY || 4.0, 0)) }; }
    }
    return best;
  }

  interact() {
    const it = this.nearInteract;
    if (!it) return;
    if (it.kind === 'npc') {
      const n = it.npc;
      const Q = this.curQuest();
      if (Q && Q.type === 'talk' && Q.npc === n.kind) {
        this.ui.dialog(n.name, Q.lines(this), () => { if (n.kind === 'guard' && this.stage === 0) this.stage = 1; this.completeStep(); });
        return;
      }
      if (n.kind === 'guard' && !Q) { this.bountyTalk(n); return; }
      if (n.kind !== 'guard' && this.requests.talk(n)) return;
      let lines = n.lines;
      if (n.kind === 'guard') lines = this.guardLines();
      else if (Q) lines = [...n.lines.slice(0, 2), `(지금 할 일: ${Q.title} — ${Q.desc.replace(/<[^>]+>/g, '')})`];
      this.ui.dialog(n.name, lines);
    } else if (it.kind === 'portal') {
      this.usePortal(it.portal);
    } else if (it.kind === 'lantern') {
      this.lightLantern(it.idx);
    } else if (it.kind === 'qobj') {
      this.player.yaw = Math.atan2(it.o.x - this.player.pos.x, it.o.z - this.player.pos.z);
      this.qk.use(it);
    } else if (it.kind === 'drum') {
      this.player.yaw = Math.atan2(it.drum.pos.x - this.player.pos.x, it.drum.pos.z - this.player.pos.z);
      this.player.startAttack({ moveLen: 0, mx: 0, mz: 0 });
      this.drumHit(it.drum, true);
    }
  }

  guardLines() {
    if (this.quest.step === 0) return [
      `어이, 거기 젊은 ${this.player.cfg.title}! 마침 잘 왔소.`,
      '해만 지면 이 궁궐 마당에 도깨비 놈들이 떼로 몰려와 난장판을 친다오.',
      '저기 저 큰 북이 보이시오? 북을 둥— 하고 울리면 숨어 있던 놈들이 죄다 튀어나올 게요.',
      '놈들을 모조리 혼쭐내 주시오! 마지막엔 도깨비 대왕이 나온다는 소문이 있으니 조심하고.',
      '(북 앞에서 E 키, 혹은 검으로 북을 베어 울리세요)',
    ];
    if (this.waveActive) return ['지금 한가하게 이야기할 때가 아니오! 도깨비들이 몰려오고 있소!'];
    const Q = this.curQuest();
    if (Q && Q.type !== 'talk') return [`${Q.title} 일은 어찌 되어 가오? ${Q.desc.replace(/<[^>]+>/g, '')}.`];
    if (this.round >= 1) return [
      `허허, 대왕까지 쫓아내다니! 벌써 ${this.kills}마리나 혼쭐을 냈구려.`,
      '북을 다시 울리면 더 사나운 놈들이 올 거요. 각오가 되었다면 언제든.',
      '참, 남문 밖으로 쭉 내려가면 대숲이오. 여우들이 들끓는다니 가 보시겠소?',
    ];
    return ['북은 저기 있소. 둥— 하고 울려 보시오!'];
  }

  updateQuest() {
    const ui = this.ui, M = this.map;
    const dl = document.getElementById('daily-line');
    if (dl) { const h = this.dailyGoals.line() + this.requests.line(); if (dl.dataset.h !== h) { dl.dataset.h = h; dl.innerHTML = h; } }
    if (this.tower?.mode === 'dungeon') { ui.setQuest(...dungeonQuest(this)); return; }
    if (this.tower?.mode) { ui.setQuest(...challengeQuest(this)); return; }
    if (this.tower?.active) {
      const T = this.tower;
      const left = this.enemies.filter((e) => !e.dead && !e.field).length + this.spawnQueue.length;
      ui.setQuest(`저승 시련탑 · ${T.floor}층`, T.cleared ? `돌파! 가운데 <b>문</b>으로 다음 층, 남쪽 <b>홍살문</b>으로 나가기<br>최고 기록 <b>${T.best}층</b>` : (T.rule ? `<b>${T.rule.name}</b> — ${T.rule.desc}<br>` : '') + `남은 적 <b>${left}</b> · 최고 기록 <b>${T.best}층</b>`);
      return;
    }
    if (this.stage === 2) {
      const left = this.enemies.filter((e) => !e.dead && !e.field).length + this.spawnQueue.length;
      ui.setQuest(`${M.night[0]} · 제 ${this.wave} 파`, `남은 ${M.foe} <b>${left}</b>`);
      return;
    }
    const Q = this.curQuest();
    const B = this.quest.bounty;
    if (Q) {
      ui.setQuest(`${this.quest.step + 1}. ${Q.title}`, Q.desc + this.progText(Q, this.quest.prog));
    } else if (B) {
      const done = this.needMet(BOUNTIES[B.i].need, B.prog);
      ui.setQuest(BOUNTIES[B.i].title, done ? '<b>수문장</b>에게 돌아가 보상을 받자' : this.progText({ type: 'kill', need: BOUNTIES[B.i].need }, B.prog));
    } else {
      ui.setQuest('모든 지역 평정', '<b>수문장</b>에게 현상수배를 받거나, 북·방울·범종을 다시 울려 <b>' + (this.round + 1) + '회차</b>에 도전하자');
    }
  }

  // ---------- 보스 연출 · 단계 ----------
  // 등장 연출: 화면 위아래 검은 띠, 카메라가 보스를 비추고 이름이 크게 뜸. 다른 적·투사체는 멈춤
  bossIntro(e) {
    if (this.cine) return;
    this.coach.tip('boss', 4);
    this.seenBoss = this.seenBoss || {};
    const first = !this.seenBoss[e.type];
    this.seenBoss[e.type] = true;
    const kind = { boss: 'drop', baekho: 'drop', frostgiant: 'drop', dokgak: 'drop', noegong: 'drop', imugi: 'rise', dragon: 'rise', centipede: 'rise', bulgasari: 'rise' }[e.type] || 'burst';
    e.entrance = { kind, dur: kind === 'drop' ? 1.25 : 1.35, water: e.type === 'imugi' || e.type === 'dragon' };
    const dur = (first ? 2.8 : 1.7) + 1.1;
    this.cine = { e, t: 0, dur };
    e.introRoar = true;
    for (const q of this.spawnQueue) q.at += dur;
    if (this.autoMove) this.stopAutoMove();
    const el = document.getElementById('cine');
    el.querySelector('.cine-sub').textContent = BOSS_EPITHET[e.type] || '';
    el.querySelector('.cine-name').textContent = e.T.name;
    el.className = 'show' + (first ? ' first' : '');
    document.getElementById('app').classList.add('cine-on');
    this.audio.play('gong');
  }

  updateCine(dt) {
    const C = this.cine;
    C.t += dt;
    this.player.invuln = Math.max(this.player.invuln, 0.4);
    if (C.t >= C.dur || C.e.dead) {
      this.cine = null;
      document.getElementById('cine').className = '';
      document.getElementById('app').classList.remove('cine-on');
    }
  }

  // 단계 전환: 포효하며 무적, 플레이어를 밀쳐내고 새 기술을 꺼냄
  bossPhase(e, n) {
    e.clearTele();
    e.state = 'roar'; e.st = 0; e.jumpY = 0; e.root.visible = true; e.root.scale.setScalar(1);
    const p = this.player;
    const at = V(e.pos.x, e.y, e.pos.z);
    this.audio.play(e.T.pal.fire[0] === '#9ff0ff' ? 'laugh' : e.T.boss === 'gumiho' ? 'howl' : 'wail');
    this.audio.play('gong');
    this.shake(0.9);
    this.ui.flash(n === 3 ? '#ff3a3a' : '#ffffff', 0.5);
    this.hitstop = Math.max(this.hitstop, 0.15);
    for (let r = 0; r < 3; r++) this.fx.ring(at, 3 + r * 2.2, n === 3 ? '#ff6a5a' : e.T.pal.fire[0], 0.4 + r * 0.15);
    const dx = p.pos.x - at.x, dz = p.pos.z - at.z, d = Math.hypot(dx, dz) || 1;
    if (d < 7) p.vel.add(V((dx / d) * 14, 0, (dz / d) * 14));
    const line = (BOSS_PHASE_LINE[e.type] || [])[n - 2];
    this.ui.banner(`${n}단계`, line || '', 2.2, 'boss-banner');
    this.ui.setBoss(e, true);
    // 단계마다 붙는 것들
    if (e.type === 'gumiho' && n === 2) {
      for (const s of [-1, 1]) {
        const x = e.pos.x + s * 3.5, z = e.pos.z;
        const pos = this.world.randomWalkable(x, z, 0, 2) || V(e.pos.x, e.y, e.pos.z);
        this.enemies.push(new Enemy(this, 'foxclone', pos, e.lvl));
      }
      this.ui.toast('구미호가 분신을 만들었다! 분신은 금방 쓰러진다', 2.4);
    }
    if (e.type === 'yeomra' && n === 2) for (let i = 0; i < 2; i++) this.spawnQueue.push({ type: i ? 'ghost' : 'jiangshi', elite: true, at: this.time + 1 + i * 0.4 });
    if (e.type === 'reaper' && n === 3) this.ui.toast('사방이 어두워진다… 저승사자의 영역이다', 2.4);
    // 어둑시니: 단계마다 몸이 부풀고, 2단계부터 어둠이 내림 (장명등을 밝혀 둔 덕에 조금 옅음)
    if (e.type === 'eodum') { e.sizeMul *= 1.14; if (n === 2) this.ui.toast('어둑시니가 부풀어 오른다! 오래 바라볼수록 커진다', 2.4); }
  }

  // 화면 어둠 (저승사자 3단계) / 붉은 테 (염라대왕 3단계): 플레이어 주변만 밝게
  updateDarkness() {
    const el = this.darkEl || (this.darkEl = document.getElementById('darkness'));
    let mode = null;
    for (const e of this.enemies) if (!e.dead && e.phase === 3) { if (e.type === 'reaper') mode = 'dark'; else if (e.type === 'yeomra' && !mode) mode = 'red'; }
    for (const e of this.enemies) if (!e.dead && e.type === 'eodum' && e.phase >= 2 && !mode) mode = 'dim';
    if (this.tower?.active && !this.tower.cleared && this.tower.rule?.key === 'dark' && !this.cut) mode = 'dark';
    if (!mode || this.state === 'title') { if (el.className) el.className = ''; return; }
    const sp = this.pixel.project(V(this.player.pos.x, this.player.y + 0.8, this.player.pos.z));
    const c = mode === 'dark' ? 'rgba(4, 2, 10, 0.88)' : mode === 'dim' ? 'rgba(8, 4, 20, 0.8)' : 'rgba(80, 0, 10, 0.55)';
    const r0 = { dark: 150, dim: 200, red: 260 }[mode], r1 = { dark: 330, dim: 420, red: 560 }[mode];
    el.className = 'on';
    el.style.background = `radial-gradient(circle at ${sp.x.toFixed(0)}px ${sp.y.toFixed(0)}px, transparent ${r0}px, ${c} ${r1}px)`;
  }

  // 염라대왕의 판결: 플레이어 자리에 붉은 벼락이 연달아 떨어짐 (2단계부터 다섯 번)
  verdict(w, n = 3) {
    const p = this.player;
    for (let i = 0; i < n; i++) this.after(i * (n > 3 ? 0.42 : 0.55), () => {
      if (w.dead) return;
      const at = V(p.pos.x + p.vel.x * 0.25, p.y, p.pos.z + p.vel.z * 0.25);
      this.fx.circle(at, 2.2, this.fx.warn('#ff3a4a'), 0.9, 3);
      this.after(0.9, () => {
        this.fx.bolt(at, 1.6);
        this.fx.ring(at, 2.4, '#ff8a9a', 0.35);
        this.audio.play('thunder');
        this.shake(0.4);
        if (Math.hypot(p.pos.x - at.x, p.pos.z - at.z) < 2.2 + p.radius) p.damage(Math.round(w.dmg * 0.8), at);
      });
    });
  }

  // ---------- 전투 ----------
  drumHit(drum, byHand = false) {
    drum.shake = 1;
    this.audio.play(drum.sound || 'drum');
    this.shake(0.35);
    this.alarm = 3;
    this.fx.ring(V(drum.pos.x, 0, drum.pos.z), 5, '#fff2c0', 0.6);
    this.fx.spark(drum.pos.x, 2.2, drum.pos.z, 14, '#fff2c0', 5);
    const Q = this.curQuest();
    const reg = drum.region || 'palace';
    // 이긴 직후(퀘스트가 넘어가기 전 몇 초) 다시 울리면 같은 싸움이 각성 보스로 다시 시작되던 문제
    if (!this.waveActive && this.time - (this.wonAt ?? -99) < 4) return;
    if (!this.waveActive && this.stage !== 2 && !this.cleared[reg] && !(Q && Q.type === 'wave' && Q.region === reg)) {
      if (this.time - (this.drumDenyT || -9) > 3) { this.drumDenyT = this.time; this.ui.toast(Q ? `아직 울릴 때가 아니다 — ${Q.title}: ${Q.desc.replace(/<[^>]+>/g, '')}` : '아직 울릴 때가 아니다', 3); }
      return;
    }
    // 이미 평정한 곳을 다시 울리는 건 E 키로만 (싸우다 실수로 회차가 오르지 않게)
    if (!byHand && this.cleared[reg] && !(Q && Q.type === 'wave' && Q.region === reg)) return;
    if (!this.waveActive && this.stage !== 2) {
      // 그 북(방울·범종)이 있는 지역의 싸움을 시작
      if (drum.region && drum.region !== this.mapId) { this.mapId = drum.region; this.map = MAPS[drum.region]; }
      this.startNight();
    }
  }

  startNight() {
    this.waveActive = true;
    this.stage = 2;
    this.wave = 0;
    this.nightTarget = 1;
    this.audio.mood = 'battle';
    const [t1, t2] = this.map.night;
    this.ui.banner(t1, this.round > 0 ? `${this.round + 1}회차 — 더 사나운 놈들이 온다` : t2, 3, 'night-banner');
    this.after(3.2, () => this.nextWave());
  }

  waveDef(n) {
    const list = [];
    for (const [t, c] of this.map.waves(n, this.round)) for (let i = 0; i < c; i++) list.push(t);
    return list;
  }

  nextWave() {
    if (this.state === 'dead') return;
    if (this.wave > 0) this.save();
    this.wave++;
    const list = this.waveDef(this.wave);
    const boss = this.wave === 3;
    const bossName = BOSS_NAME[this.mapId];
    this.ui.banner(`제${this.wave}파`, boss ? `${this.cleared[this.mapId] ? '각성 ' : ''}${bossName} 출현!` : `${this.map.foe} ${list.length}마리`, 2.4, boss ? 'boss-banner' : '');
    this.audio.play(boss ? 'drum' : 'wave');
    let delay = 0.6;
    for (const t of list) {
      this.spawnQueue.push({ type: t, at: this.time + delay });
      delay += BOSS_TYPES.has(t) ? 1.2 : rand(0.3, 0.6);
    }
    this.updateQuest();
  }

  // 처음 하는 사람 배려: 첫 회차의 궁궐·죽림에서는 적이 조금 덜 아프게 때림
  earlyEase(e) {
    if (this.round === 0 && !this.tower?.active && (this.mapId === 'palace' || this.mapId === 'bamboo')) e.dmg = Math.max(1, Math.round(e.dmg * 0.8));
  }

  spawnEnemy(type, opt = {}) {
    const p = this.player.pos;
    const isBoss = BOSS_TYPES.has(type);
    let pos = isBoss ? this.world.randomWalkable(p.x, p.z, 6, 9) : this.world.randomWalkable(p.x, p.z, 5, 10);
    if (!pos) pos = this.world.randomWalkable(p.x, p.z, 2, 14) || V(this.world.spawn.x, 0, this.world.spawn.z - 6);
    // 시련탑은 층수가 곧 강함 (회차와 무관)
    const lv = this.tower?.active ? 1 + this.tower.floor + Math.floor((lvEq(this.player.level) - 1) / 3) : 1 + this.round + this.map.lvl + Math.floor((lvEq(this.player.level) - 1) / 3);
    const e = new Enemy(this, type, pos, lv, { elite: opt.elite });
    this.earlyEase(e);
    const TR = this.tower?.active ? this.tower : null;
    if (opt.weak) e.maxHp = e.hp = Math.max(1, Math.round(e.maxHp * 0.6));
    // 시간 던전: 한 시간 내내 싸우는 곳이라 적이 약함 (피해 35%, 체력 75%, 수호자는 보스 체력의 60%)
    if (TR?.mode === 'dungeon') { e.dmg = Math.max(1, Math.round(e.dmg * 0.4)); e.maxHp = e.hp = Math.max(1, Math.round(e.maxHp * (opt.guard ? 0.8 : 0.9))); }
    if (TR?.rule?.key === 'swift') e.T = { ...e.T, speed: e.T.speed * 1.35 };
    // 각성 보스: 탑 20층부터의 보스 층, 또는 이미 평정한 지역을 다시 울려 부른 보스
    //  (회차(round)는 지역을 평정할 때마다 오르므로 첫 판에도 금방 커짐 — 그래서 '다시 싸우는 지역'으로 정함)
    const awake = isBoss && (TR ? !TR.mode && TR.floor >= 20 && TR.floor % 5 === 0 : !!this.cleared[this.mapId]);
    if (awake) awaken(e);
    if (isBoss) { e.name = TR ? (TR.mode === 'dungeon' ? `${e.T.name} · 수호자` : TR.mode ? `${e.T.name} · 도전` : `${e.T.name} · ${TR.floor}층`) : this.round > 0 ? `${e.T.name} +${this.round}` : e.T.name; if (awake) e.name = '각성 ' + e.name; this.ui.setBoss(e); this.shake(0.5); this.bossIntro(e); }
    this.enemies.push(e);
  }

  playerSwingHit(pl, kind) {
    const range = kind === 2 ? 2.45 : 2.2;
    const half = kind === 2 ? 0.95 : 1.35;
    const fxKind = kind === 3 ? 1 : kind; // 발도베기는 왼→오른 궤적
    const yaw = pl.yaw;
    const origin = V(pl.pos.x, pl.y + 0.72, pl.pos.z);
    this.fx.slash(origin, yaw, fxKind, { dur: kind === 3 ? 0.2 : 0.16, outer: range + (kind === 3 ? 0.25 : 0), len: kind === 3 ? 3.2 : 2.8, color: kind === 2 ? '#fff6d0' : kind === 3 ? '#d8f4ff' : '#a8e4ff' });
    // 칼날 궤적의 얇고 하얀 심
    this.fx.slash(origin, yaw, fxKind, { dur: kind === 3 ? 0.2 : 0.16, inner: range - 0.32, outer: range - 0.05 + (kind === 3 ? 0.25 : 0), len: kind === 3 ? 3.2 : 2.8, color: '#ffffff' });
    if (kind === 2) {
      // 내려찍기: 앞쪽 바닥 충격
      const f = V(pl.pos.x + Math.sin(yaw) * 1.4, pl.y, pl.pos.z + Math.cos(yaw) * 1.4);
      this.fx.ring(f, 1.9, '#fff2c0', 0.3);
      this.fx.dust(f.x, f.y, f.z, 10);
      for (let i = 0; i < 14; i++) this.fx.norm.emit({ x: f.x + rand(-0.4, 0.4), y: f.y + 0.1, z: f.z + rand(-0.4, 0.4), vx: rand(-2, 2), vy: rand(3, 6), vz: rand(-2, 2), g: 18, life: 0.8, size: 2, color: '#9a9284', floor: f.y });
      this.audio.play('impact');
    }
    let hitAny = false;
    for (const e of this.enemies) {
      if (e.dead || e.spawning) continue;
      const dx = e.pos.x - pl.pos.x, dz = e.pos.z - pl.pos.z;
      const d = Math.hypot(dx, dz);
      const ey = e.isWisp ? e.y + 1.3 : e.y;
      if (Math.abs(ey - pl.y) > 2.2) continue;
      if (d > range + e.radius) continue;
      if (d > 0.6 && Math.abs(angleDiff(yaw, Math.atan2(dx, dz))) > half) continue;
      const crit = Math.random() < 0.15;
      let dmg = Math.round((kind === 2 ? rand(24, 30) : kind === 3 ? rand(18, 23) : rand(13, 17)) * (crit ? 1.8 : 1)); // 발도베기는 한 방이 강함
      this.damageEnemy(e, dmg, crit, kind === 2 ? 9 : 5.5, kind === 2 ? 0.4 : 0.25);
      hitAny = true;
    }
    // 푸른 불덩이 튕겨내기
    for (const pr of this.projectiles) {
      if (pr.owner !== 'enemy' || pr.dead || pr.kind !== 'orb') continue;
      const dx = pr.pos.x - pl.pos.x, dz = pr.pos.z - pl.pos.z;
      if (Math.hypot(dx, dz) < range + 0.3 && Math.abs(angleDiff(yaw, Math.atan2(dx, dz))) < half + 0.3) {
        pr.owner = 'player';
        pr.dir.set(Math.sin(yaw), 0, Math.cos(yaw));
        pr.speed *= 1.6;
        pr.dmg = 30;
        pr.life = 1.2;
        pr.hitSet = new Set();
        this.audio.play('block');
        this.fx.spark(pr.pos.x, pr.pos.y, pr.pos.z, 10, '#bff4ff', 5);
        this.ui.toast('튕겨내기!', 0.8);
        this.hitstop = Math.max(this.hitstop, 0.06);
      }
    }
    // 북 치기
    for (const dr of this.world.drums) {
      const dx = dr.pos.x - pl.pos.x, dz = dr.pos.z - pl.pos.z;
      const d = Math.hypot(dx, dz);
      if (d < range + 1.3 && Math.abs(angleDiff(yaw, Math.atan2(dx, dz))) < half) { this.drumHit(dr); hitAny = true; }
    }
    if (hitAny) this.shake(kind === 2 ? 0.22 : 0.12);
  }

  damageEnemy(e, dmg, crit, knock, stun) {
    const pl = this.player;
    const perks = pl.perks;
    const base = dmg;
    let mul = (pl.atkMul || 1) * (pl.cfg.power || 1); // power: 직업별 위력 보정 (classes.js)
    if (perks?.has('rage') && pl.hp < pl.maxHp * 0.4) mul *= 1.35;
    if (perks?.has('verdict') && (e.isBoss || e.elite)) mul *= 1.3;
    if (perks?.has('hunter') && !e.isBoss && !e.elite) mul *= 1.25;
    if (perks?.has('frostbite') && e.frozenT > 0) mul *= 1.35;
    if (perks?.has('shadow') && e.hp > e.maxHp * 0.7) mul *= 1.3;
    const jackpot = perks?.has('jackpot') && Math.random() < 0.08;
    if (jackpot) { mul *= 3; this.fx.number(e.center().clone().add(V(0, 1.4, 0)), '대박!', 'alert'); this.fx.coins(e.pos.x, e.y + 1, e.pos.z, 8); }
    const exec = perks?.has('execute') && e.hp < e.maxHp * 0.35;
    if (exec) mul *= 1.6;
    // 장비 옵션: 치명타 확률·치명타 피해
    const G = pl.gear || {};
    // 완벽한 회피 뒤 반격: 다음 한 방은 반드시 치명타 + 40%
    if (this.counterT > this.time) { this.counterT = 0; if (!crit) { crit = true; mul *= 1.8; } mul *= 1.4; this.fx.number(e.center().clone().add(V(0, 1.2, 0)), '반격!', 'alert'); }
    if (!crit && G.crit && Math.random() < G.crit) { crit = true; mul *= 1.8; }
    if (crit && G.critDmg) mul *= 1 + G.critDmg;
    if (e.isBoss && G.boss) mul *= 1 + G.boss; // 무기 세공: 보스 피해
    if (this.tower?.active && this.tower.rule?.key === 'glass') mul *= 1.6;
    dmg = Math.max(1, Math.round(dmg * mul));
    // 돌장승 같은 단단한 적: 얼어 있지 않으면 피해가 줄고 쇳소리
    if (e.T.armor && !(e.frozenT > 0)) {
      dmg = Math.max(1, Math.round(dmg * (1 - e.T.armor)));
      if (this.time - (e.clankT || 0) > 0.25) { e.clankT = this.time; this.audio.play('block'); const cc = e.center(); this.fx.spark(cc.x, cc.y, cc.z, 8, '#ffe0a0', 5); }
    }
    const dir = V(e.pos.x - pl.pos.x, 0, e.pos.z - pl.pos.z).normalize();
    const hpBefore = e.hp;
    if (!e.hit(dmg, dir, knock, stun)) return;
    this.records.hit(Math.min(dmg, Math.max(0, hpBefore))); // 실제로 깎인 체력 (즉사 효과의 큰 수치는 빼고)
    const c = e.center().clone();
    if (perks?.size) this.weaponPerks(e, c, base, dmg, exec);
    // 장비 옵션: 흡혈
    if (G.ls && !pl.dead && pl.hp < pl.maxHp) {
      pl.lsAcc = (pl.lsAcc || 0) + dmg * G.ls;
      if (pl.lsAcc >= 1) { const h = Math.floor(pl.lsAcc); pl.lsAcc -= h; pl.hp = Math.min(pl.maxHp, pl.hp + h); }
    }
    this.fx.spark(c.x, c.y, c.z, crit ? 18 : 10, crit ? '#fff07a' : '#ffffff', crit ? 8 : 6);
    // 치명타: 별 모양 섬광과 작은 고리
    if (crit) { this.fx.cross(c, '#fff4c0', e.isBoss ? 2.2 : 1.5, 0.16); this.fx.ring(V(e.pos.x, e.y, e.pos.z), e.isBoss ? 2.2 : 1.3, '#fff07a', 0.2); }
    this.fx.number(c.clone().add(V(0, 0.5 * (e.isBoss ? 2 : 1), 0)), dmg, crit ? 'crit' : 'normal');
    this.audio.play(crit ? 'crit' : 'hit');
    this.hitstop = Math.max(this.hitstop, crit ? 0.085 : 0.05);
    this.hitCombo = this.time - this.lastHitTime < 2 ? this.hitCombo + 1 : 1;
    this.lastHitTime = this.time;
    if (this.hitCombo > this.bestCombo) this.bestCombo = this.hitCombo;
    if (this.hitCombo % 5 === 0) this.dailyGoals.event('combo', this.hitCombo);
    pl.lastCombat = this.time;
    // 보스 체력에 따른 졸개 소환
    if (e.isBoss && !e.dead) {
      const k = e.hp / e.maxHp;
      if ((k < 0.6 && e.summoned === 0) || (k < 0.3 && e.summoned === 1)) {
        e.summoned++;
        this.audio.play(e.T.boss === 'dokkaebi' ? 'laugh' : e.T.boss === 'gumiho' ? 'howl' : 'wail');
        this.ui.toast(this.map.summonLine, 2.4);
        const [s1, s2] = e.T.summon;
        for (let i = 0; i < 2 + this.round; i++) this.spawnQueue.push({ type: i === 0 ? s1 : s2, at: this.time + 0.3 + i * 0.3 });
      }
    }
  }

  // 검기: 발밑 충격파 + 칼끝 섬광 → 3겹 초승달 검기가 잔상·빛가루·바닥 서리를 남기며 날아감
  // 검객 K: 검기 / 삼연 검기 / 천열참 (단계가 오르면 줄기 수·불길·크기가 늘어남)
  skillSword1(pl) {
    this.skillRunes(pl, 1, () => this.skillSword1(pl));
    const br = this.branch(pl, 1), r = this.rank(pl, 1), M = this.rankPow(pl, 1);
    if (br === 'a') {
      const n = r >= 5 ? 7 : r >= 3 ? 5 : 3, sp = n === 3 ? 0.34 : n === 5 ? 0.26 : 0.2;
      const gold = r >= 5 ? ['#ffa020', '#ffe8a0', '#ffffff'] : undefined;
      for (let i = 0; i < n; i++) this.spawnSwordWave(pl, { yawOff: (i - (n - 1) / 2) * sp, dmgMul: 0.9 * M, scale: 0.85, quiet: i !== (n - 1) / 2, color: gold });
    } else if (br === 'b') {
      for (const off of r >= 5 ? [-0.45, 0, 0.45] : [0]) this.spawnSwordWave(pl, { yawOff: off, scale: 1.75, dmgMul: 2.0 * M, speed: 11, life: 0.9, knock: 13, stun: 0.6, color: ['#ff7a2a', '#ffd08a', '#ffffff'], burn: r >= 3, quiet: off !== 0 });
      const feet = V(pl.pos.x, pl.y, pl.pos.z);
      this.fx.ring(feet, 4.2, '#ffb060', 0.5);
      this.fx.scorch(feet.clone().add(V(Math.sin(pl.yaw) * 1.5, 0, Math.cos(pl.yaw) * 1.5)), 1.4, '#2a1a10', 2);
      this.ui.flash('#ffa040', 0.3);
      this.shake(0.45);
    } else this.spawnSwordWave(pl);
  }

  // 큰 폭발 한 번 (각성 효과에서 씀)
  boomAt(at, R, dmg, color = '#ffffff') {
    this.fx.ring(at, R, color, 0.4);
    this.fx.ring(at, R * 0.5, '#ffffff', 0.25);
    this.fx.scorch(at, R * 0.6, '#1a1420', 2);
    this.fx.spark(at.x, at.y + 0.4, at.z, 26, color, 8);
    for (let i = 0; i < 30; i++) { const a = Math.random() * Math.PI * 2, sp = rand(2, 7); this.fx.add.emit({ x: at.x, y: at.y + 0.3, z: at.z, vx: Math.cos(a) * sp, vy: rand(1, 5), vz: Math.sin(a) * sp, g: 6, drag: 2, life: rand(0.3, 0.7), size: rand(2, 4), endSize: 1, color: '#ffffff', color2: color }); }
    for (const e of this.enemiesIn(at, R)) { const crit = Math.random() < 0.2; this.damageEnemy(e, Math.round(dmg * (crit ? 1.8 : 1)), crit, 7, 0.4); }
    this.audio.play('crit');
    this.shake(0.45);
    this.hitstop = Math.max(this.hitstop, 0.06);
  }

  // 보스 장비 고유 효과 (맞힌 순간)
  weaponPerks(e, c, base, dmg, exec) {
    const pl = this.player;
    // 뇌공 무기: 천둥 — 가끔 맞은 적 머리 위로 벼락 (둘레 피해)
    if (pl.perks.has('thunderclap') && !this.inQuake && Math.random() < 0.15) {
      this.inQuake = true;
      const at = V(e.pos.x, e.y, e.pos.z);
      this.fx.bolt(at, 1.2);
      this.fx.ring(at, 2.2, '#bfe0ff', 0.3);
      this.audio.play('thunder');
      for (const o of this.enemiesIn(at, 2.2)) if (!o.dead) this.damageEnemy(o, Math.max(5, Math.round(base * 0.8)), false, 2, 0.4);
      this.inQuake = false;
    }
    // 장산범 무기: 흉내 소리 — 가끔 주변 적이 1초 동안 굳음
    if (pl.perks.has('mimic') && Math.random() < 0.12) {
      this.fx.ring(V(e.pos.x, e.y, e.pos.z), 3.5, '#ffe0c0', 0.35);
      for (const o of this.enemiesIn(e.pos, 3.5)) if (!o.isBoss && !o.dead) { o.hurtT = Math.max(o.hurtT, 1.0); if (o.state === 'windup') { o.state = 'chase'; o.clearTele(); } }
    }
    // 둔갑 너구리: 맞으면 가끔 펑 연기 속으로 사라졌다가 플레이어 옆에서 나타남
    if (e.T.blink && !e.dead && !e.blinkCd && Math.random() < 0.2) {
      e.blinkCd = true;
      this.after(1.5, () => { e.blinkCd = false; });
      this.fx.smoke(e.pos.x, e.y + 0.5, e.pos.z, 16);
      const a = Math.random() * Math.PI * 2;
      const at = this.world.randomWalkable(pl.pos.x + Math.sin(a) * 3, pl.pos.z + Math.cos(a) * 3, 0, 1.5);
      if (at) { e.pos.set(at.x, at.y || 0, at.z); e.y = at.y || 0; this.fx.smoke(at.x, (at.y || 0) + 0.5, at.z, 12); this.audio.play('blink'); }
    }
    if (exec) {
      this.fx.colorFire(c.x, c.y, c.z, 10, 0.3, '#e0c8ff', '#6a2aff');
      if (Math.random() < 0.3) this.fx.cross(c, '#c890ff', 2.2, 0.3);
    }
    if (pl.perks.has('drain') && !pl.dead) {
      pl.drainAcc = (pl.drainAcc || 0) + dmg * 0.06;
      if (pl.drainAcc >= 1 && pl.hp < pl.maxHp) {
        const h = Math.min(Math.floor(pl.drainAcc), pl.maxHp - pl.hp);
        pl.hp += h;
        pl.drainAcc -= Math.floor(pl.drainAcc);
        if (this.time - (pl.drainShown || 0) > 0.5) {
          pl.drainShown = this.time;
          this.fx.number(pl.pos.clone().add(V(0, 1.9, 0)), `+${h}`, 'heal');
        }
        this.fx.norm.emit({ x: c.x, y: c.y, z: c.z, vx: (pl.pos.x - c.x) * 2, vy: 2, vz: (pl.pos.z - c.z) * 2, drag: 1, life: 0.5, size: 3, color: '#ffb070' });
      }
    }
    if (pl.perks.has('molten') && !e.dead && Math.random() < 0.22) {
      // 쇳물: 맞은 적에 불을 붙임
      e.burnFor(3, Math.max(6, base * 0.35));
      this.fx.colorFire(c.x, c.y, c.z, 10, 0.3, '#ffd070', '#ff2a00');
    }
    if (pl.perks.has('chill') && !e.dead && !e.isBoss && Math.random() < 0.15) {
      // 찬물결: 맞은 적을 잠깐 얼림
      e.freeze(1.0);
      this.fx.colorFire(c.x, c.y, c.z, 12, 0.3, '#e8fff8', '#2affd0');
    }
    if (pl.perks.has('venom') && !e.dead && Math.random() < 0.25) {
      // 지네 독: 맞은 적이 4초 동안 독에 상함
      e.burnFor(4, Math.max(6, base * 0.3));
      this.fx.colorFire(c.x, c.y, c.z, 10, 0.3, '#e0ff8a', '#3a8a00');
    }
    if (pl.perks.has('frostbite') && !e.dead && !e.isBoss && Math.random() < 0.12) {
      e.freeze(1.0);
      this.fx.colorFire(c.x, c.y, c.z, 12, 0.3, '#ffffff', '#6ac8ff');
    }
    if (pl.perks.has('storm') && !this.inQuake && Math.random() < 0.15) {
      // 용왕 비늘: 가까운 적 셋에게 번개가 튐
      this.inQuake = true;
      let prev = c.clone();
      const near = this.enemies.filter((o) => o !== e && !o.dead && !o.spawning && Math.hypot(o.pos.x - e.pos.x, o.pos.z - e.pos.z) < 6)
        .sort((a, b) => Math.hypot(a.pos.x - e.pos.x, a.pos.z - e.pos.z) - Math.hypot(b.pos.x - e.pos.x, b.pos.z - e.pos.z)).slice(0, 3);
      for (const o of near) {
        const oc = o.center().clone();
        this.fx.arc(prev, oc, '#9ad8ff', 0.6);
        this.damageEnemy(o, Math.max(4, Math.round(base * 0.7)), false, 2, 0.3);
        prev = oc;
      }
      if (near.length) this.audio.play('thunder');
      this.inQuake = false;
    }
    if (pl.perks.has('quake') && !this.inQuake && Math.random() < 0.2) {
      // 도깨비 벼락: 맞은 적 자리에 벼락 + 주변 충격파
      this.inQuake = true;
      const at = V(e.pos.x, e.y, e.pos.z);
      this.fx.bolt(at, 0.8);
      this.fx.ring(at, 2.6, '#9ad8ff', 0.35);
      this.fx.spark(at.x, at.y + 0.5, at.z, 16, '#bfe8ff', 7);
      this.audio.play('thunder');
      for (const o of this.enemies) {
        if (o.dead || o.spawning) continue;
        if (Math.hypot(o.pos.x - at.x, o.pos.z - at.z) < 2.6) this.damageEnemy(o, Math.max(4, Math.round(base * 0.6)), false, 3, 0.25);
      }
      this.inQuake = false;
    }
  }

  onEnemyKilled(e) {
    this.kills++;
    const st0 = monStars(this.stats.killsBy?.[e.type]);
    this.records.kill(e);
    // 도감: 별이 오르면 능력치가 함께 오름
    if (e.type !== 'foxclone' && monStars(this.stats.killsBy?.[e.type]) > st0) {
      this.codex.dirty(); this.player.recalc();
      const n = monStars(this.stats.killsBy[e.type]);
      this.ui.toast(`도감 ${'★'.repeat(n)} ${e.T.name || KILL_NAME[e.type] || e.type} — 능력치가 올랐어요`, 2.2);
      this.coach.tip('codex', 3);
      if (e.isBoss) this.coach.tip('challenge', 9);
      if (e.type === 'boss') this.coach.tip('dungeon', 16);
    }
    const inDg = this.tower?.mode === 'dungeon';
    if (inDg) dungeonLoot(this, e); // 시간 던전: 그 던전의 보상만
    else if (e.type !== 'foxclone') this.gainMats(rollMats(e, this.round, this.difficulty === 'hard'), e.pos);
    if (e.type !== 'foxclone') this.shop.gain(Math.round(coinsFor(e, this.round) * this.pet.coinMul()), V(e.pos.x, e.y + (e.isBoss ? 3.4 : 1.6), e.pos.z));
    const exp = Math.round(e.T.exp * diffOf(this).exp * (1 + this.round * 0.25) * (e.elite ? 3 : 1) * (this.tower?.active ? 1 + this.tower.floor * 0.06 : 1));
    this.player.addExp(exp);
    this.fx.number(V(e.pos.x, e.y + (e.isBoss ? 4 : 2.2), e.pos.z), `+${exp} EXP`, 'exp');
    const drop = inDg ? null : rollDrop(e.type, this.round, this.player.cls);
    if (drop) this.spawnDrop(e.pos, drop);
    // 보스는 확률로 전용 장비(고유 기술 무기·옷)를 떨어뜨림
    if (e.isBoss && !inDg) {
      // 첫 보스 무기 보장: 그 직업의 보스 무기가 아직 없는데 보스를 한 번 잡고도 못 받았으면 이번엔 반드시
      //  (12%에만 맡기면 무기 없이 저승사자(폐사찰)에 닿은 판은 직업을 가리지 않고 여러 번 쓰러짐 — 자동 완주 봇)
      const cls = this.player.cls, miss = (this.stats.bossMiss ||= {});
      const hasBW = [...this.inv].some((id) => { const it = item(id); return it?.kind === 'weapon' && it.cls === cls && it.from; });
      const bd = bossDrop(e.type, cls, this.inv, this.round, !hasBW && (miss[cls] || 0) >= 1);
      if (!hasBW) miss[cls] = bd.some((id) => item(id).kind === 'weapon' && item(id).cls === cls) ? 0 : (miss[cls] || 0) + 1;
      for (const id of bd) this.spawnDrop(e.pos, id);
      if (!bd.some((id) => item(id).kind === 'weapon')) this.after(1.2, () => this.ui.toast('보스 무기는 나오지 않았어요… 다시 도전해 보세요', 2.4));
    }
    // 방어구·장신구: 일반 몬스터는 가끔, 보스는 두세 개 (등급이 높게)
    const gm = diffOf(this).gear * (this.player.perks?.has('fortune') ? 1.3 : 1);
    const gearN = inDg ? 0 : e.isBoss ? 1 + (Math.random() < 0.5 * gm ? 1 : 0) : Math.random() < (e.field ? 0.06 : 0.045) * gm ? 1 : 0;
    for (let i = 0; i < gearN; i++) {
      const strong = e.isBoss ? 0.6 : e.T.hp > 60 ? 0.12 : 0;
      const lv = Math.max(1, e.lvl || 1) + this.round;
      // 가끔은 그 지역 세트의 조각 (보스는 자주)
      const sid = setFor(e.type);
      if (sid && Math.random() < (e.isBoss ? 0.3 : 0.06)) this.spawnDrop(e.pos, makeSetPiece(sid, lv));
      else this.spawnDrop(e.pos, makeGear(lv, rollGearTier(strong, this.round)));
    }
    const pl = this.player;
    if (pl.perks?.has('soul') && !pl.dead && pl.hp < pl.maxHp) {
      const h = Math.min(Math.ceil(pl.maxHp * 0.04), pl.maxHp - pl.hp);
      pl.hp += h;
      this.fx.number(pl.pos.clone().add(V(0, 2.1, 0)), `+${h}`, 'heal');
      const c = e.center();
      for (let i = 0; i < 8; i++) this.fx.add.emit({ x: c.x + rand(-0.3, 0.3), y: c.y + rand(0, 0.5), z: c.z + rand(-0.3, 0.3), vx: (pl.pos.x - c.x) * 1.6, vy: rand(1, 2.5), vz: (pl.pos.z - c.z) * 1.6, drag: 1, life: 0.6, size: 3, color: '#e0c8ff', color2: '#6a2aff' });
    }
    // 각성 보스: 좋은 장비 하나 더
    if (e.awakened) {
      this.stats.awakened = (this.stats.awakened || 0) + 1;
      this.spawnDrop(e.pos, makeGear(Math.max(1, e.lvl || 1) + this.round, Math.max(3, rollGearTier(1, this.round))));
      this.records.check();
    }
    if (this.target === e) this.target = null;
    this.questOnKill(e);
    this.requests.onKill(e);
    this.updateQuest();
    if (e.isBoss) this.startKillCam(e);
  }

  // 보스 격파 연출: 화면 위아래 검은 띠, 카메라가 보스를 비추고 시간이 느려짐.
  //  몸 곳곳이 갈라지며 빛이 새어 나오다가, 큰 빛 폭발과 함께 '격파!'
  startKillCam(e) {
    if (this.cine) { this.cine = null; document.getElementById('cine').className = ''; }
    const at = V(e.pos.x, e.y, e.pos.z);
    this.killCam = { e, at, t: 0, dur: 2.6, crack: 0, boomed: false };
    this.hitstop = 0.18;
    this.shake(0.8);
    this.ui.flash('#ffffff', 0.45);
    this.audio.play('gong');
    if (this.autoMove) this.stopAutoMove();
    document.getElementById('app').classList.add('cine-on');
    document.getElementById('cine').className = 'show bars';
    document.body.classList.add('killcam');
    const [f1, f2] = e.T.pal.fire;
    for (let r = 0; r < 3; r++) this.fx.ring(at, 2 + r * 1.6, r ? f1 : '#ffffff', 0.35 + r * 0.12);
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      this.fx.streak(V(at.x, at.y + 0.5, at.z), V(at.x + Math.cos(a) * 0.3, at.y + 9, at.z + Math.sin(a) * 0.3), i % 2 ? f1 : '#fff8e0', 0.35, 1.2);
    }
  }

  updateKillCam(dt) {
    const K = this.killCam;
    K.t += dt;
    this.player.invuln = Math.max(this.player.invuln, 0.4);
    const e = K.e, [f1, f2] = e.T.pal.fire;
    const big = 1.6;
    // 갈라짐: 몸 곳곳에서 빛줄기와 불티
    if (!K.boomed) {
      K.crack -= dt;
      if (K.crack <= 0) {
        K.crack = 0.11;
        const x = K.at.x + rand(-big, big), y = K.at.y + rand(0.5, 3), z = K.at.z + rand(-big, big);
        const a = Math.random() * Math.PI * 2;
        this.fx.streak(V(x, y, z), V(x + Math.cos(a) * 2.2, y + rand(-0.5, 1.5), z + Math.sin(a) * 2.2), '#fff8e0', 0.18, 0.35);
        this.fx.colorFire(x, y, z, 10, 0.4, '#ffffff', f1);
        this.audio.play('hit');
      }
    }
    // 빛 폭발
    if (!K.boomed && K.t >= 1.15) {
      K.boomed = true;
      this.ui.flash('#ffffff', 0.7);
      this.shake(1.1);
      this.audio.play('burst');
      this.audio.play('thunder');
      for (let r = 0; r < 4; r++) this.fx.ring(K.at, 3 + r * 2.4, r % 2 ? f1 : '#ffffff', 0.45 + r * 0.15);
      for (let i = 0; i < 140; i++) {
        const a = Math.random() * Math.PI * 2, sp = rand(3, 13);
        this.fx.add.emit({ x: K.at.x, y: K.at.y + rand(0.5, 2.5), z: K.at.z, vx: Math.cos(a) * sp, vy: rand(1, 9), vz: Math.sin(a) * sp, g: 6, drag: 1.8, life: rand(0.6, 1.4), size: rand(2, 5), endSize: 1, color: i % 3 ? '#fff4c0' : f1, color2: f2 });
      }
      const el = document.getElementById('cine');
      el.querySelector('.cine-sub').textContent = BOSS_EPITHET[e.type] || '';
      el.querySelector('.cine-name').textContent = `${e.T.name} 격파!`;
      el.className = 'show defeat';
    }
    if (K.t >= K.dur) {
      this.killCam = null;
      document.body.classList.remove('killcam');
      document.getElementById('cine').className = '';
      document.getElementById('app').classList.remove('cine-on');
    }
  }

  checkWave() {
    if (!this.waveActive || this.wave === 0 || this.spawnQueue.length) return;
    if (this.enemies.some((e) => !e.dead && !e.field)) return;
    if (this.waveClearing) return;
    this.waveClearing = true;
    if (this.wave >= 3) {
      this.after(1.5, () => this.victory());
    } else {
      this.ui.banner('격퇴!', `제${this.wave}파 완료 · 경험치 +${20 + this.round * 10}`, 1.8);
      this.player.addExp(20 + this.round * 10);
      this.after(2.6, () => { this.waveClearing = false; this.nextWave(); });
    }
  }

  victory() {
    this.waveClearing = false;
    this.waveActive = false;
    this.round++;
    this.stage = 3;
    this.nightTarget = 0;
    this.audio.mood = 'day';
    this.audio.play('victory');
    this.player.hp = this.player.maxHp;
    this.player.invuln = Math.max(this.player.invuln || 0, 3); // 이긴 뒤 남은 공격(장판·투사체)에 쓰러지지 않게
    this.wonAt = this.time;
    const first = !this.cleared[this.mapId];
    this.cleared[this.mapId] = true;
    this.gainShard(this.mapId);
    // 몇몇 보스는 처음 물리치면 짧은 연출 (달거울 조각 이야기가 끝난 뒤)
    const SCENE = { palace: 'palaceWin', sea: 'seaWin' }[this.mapId];
    if (first && SCENE) this.after(6, () => this.whenFree(() => playScene(this, SCENE), true));
    this.dailyGoals.event('night');
    const Q = this.curQuest();
    if (Q && Q.type === 'wave' && Q.region === this.mapId) this.after(2.0, () => this.completeStep(), true);
    this.after(0.1, () => this.updateRegion(true));
    this.ui.banner('승리', WIN_LINE[this.mapId], 4, 'win-banner');

    this.updateQuest();
    this.save();
  }

  onPlayerDeath() {
    this.state = 'dead';
    this.records.death();
    if (this.autoMove) this.stopAutoMove();
    setTimeout(() => document.getElementById('gameover').classList.add('show'), 900);
  }

  retry() {
    document.getElementById('gameover').classList.remove('show');
    this.coach.tip('death', 0.6);
    this.state = 'play';
    this.player.reset();
    for (const e of this.enemies) e.dispose();
    this.enemies = [];
    this.spawnQueue = [];
    for (const pr of this.projectiles) if (pr.mesh) drop(this.scene, pr.mesh);
    this.projectiles = [];
    this.timers = this.timers.filter((t) => t.keep);
    for (const r of this.rains) this.fx.removeRing(r.tele);
    this.rains = [];
    for (const T of this.tornados) for (const ring of T.rings) this.scene.remove(ring);
    this.tornados = [];
    this.clearSkillFx();
    this.ui.setBoss(null);
    this.waveClearing = false;
    if (this.tower?.mode === 'dungeon') { dungeonRevive(this); return; } // 시간 던전: 쫓겨나지 않고 1분을 내고 그 자리에서
    if (this.tower?.active) { this.leaveTower(true); return; }
    if (this.waveActive) {
      this.wave = Math.max(0, this.wave - 1);
      // 다시 불러낼 때까지는 '파 완료'로 치지 않음 (적이 0마리라 바로 완료되어 보스가 둘 나오던 문제)
      this.waveClearing = true;
      this.after(1.2, () => { this.waveClearing = false; this.nextWave(); });
    }
  }

  shake(a) { a *= this.settings?.shake ?? 1; this.shakeAmt = Math.min(1.2, Math.max(this.shakeAmt, a)); }

  screenFlash(dur, color) { this.ui.flash(color, 0.35); }

  // ---------- 업데이트 ----------
  updateProjectiles(dt) {
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const pr = this.projectiles[i];
      // 완벽한 회피의 느린 시간·등장 연출 중엔 적 투사체도 느려짐
      const pdt = pr.owner === 'enemy' ? (this.cine ? 0 : this.slowmoT > 0 ? dt * 0.25 : dt) : dt;
      pr.life -= pdt;
      pr.pos.addScaledVector(pr.dir, pr.speed * pdt);
      if (pr.kind === 'orb') {
        pr.mesh.position.copy(pr.pos);
        const P = pr.pal || { orb: '#d8fbff', trail: '#8ff0ff', trail2: '#1a40ff' };
        pr.mesh.material.color.set(pr.owner === 'player' ? '#ffffff' : P.orb);
        if (Math.random() < 0.9) this.fx.add.emit({ x: pr.pos.x + rand(-0.1, 0.1), y: pr.pos.y + rand(-0.1, 0.1), z: pr.pos.z + rand(-0.1, 0.1), vx: rand(-0.3, 0.3), vy: rand(0.2, 0.8), vz: rand(-0.3, 0.3), life: rand(0.2, 0.45), size: 3, endSize: 1, color: P.trail, color2: P.trail2 });
        const h = this.world.heightAt(pr.pos.x, pr.pos.z);
        if (h > pr.pos.y - 0.4 || this.world.isBlocked(pr.pos.x, pr.pos.z, 0.05, h) && h > pr.pos.y - 1) pr.life = 0;
      } else if (pr.kind === 'wave') {
        this.swordWaveTrail(pr, dt);
      } else if (pr.kind === 'talisman' || pr.kind === 'arrow') {
        this.missileTrail(pr, dt);
      } else if (pr.kind === 'darkwave') {
        if (Math.random() < 0.8) this.fx.add.emit({ x: pr.pos.x + rand(-0.8, 0.8), y: pr.pos.y + rand(-0.2, 0.3), z: pr.pos.z + rand(-0.8, 0.8), vy: 0.4, life: 0.4, size: 3, endSize: 1, color: '#c8a0ff', color2: '#2a0a4a' });
      } else if (pr.kind === 'dragon') {
        this.dragonUpdate(pr, dt);
      } else if (pr.kind === 'rainArrow') {
        this.rainArrowUpdate(pr);
      }
      if (pr.owner === 'player' && (pr.kind === 'talisman' || pr.kind === 'arrow')) {
        // 부적·화살로 북을 맞혀도 울림
        for (const dr of this.world.drums) {
          if (Math.hypot(dr.pos.x - pr.pos.x, dr.pos.z - pr.pos.z) < 1.25) { this.drumHit(dr); pr.life = 0; }
        }
      }
      if (pr.owner === 'player') {
        for (const e of this.enemies) {
          if (e.dead || e.spawning || pr.hitSet.has(e)) continue;
          const d = Math.hypot(e.pos.x - pr.pos.x, e.pos.z - pr.pos.z);
          if (d < pr.radius + e.radius) {
            pr.hitSet.add(e);
            const crit = Math.random() < (pr.kind === 'arrow' ? 0.25 : 0.2);
            this.damageEnemy(e, Math.round(pr.dmg * (crit ? 1.8 : 1) * rand(0.9, 1.1)), crit, pr.knock ?? 7, pr.stun ?? 0.35);
            if (pr.kind === 'wave') {
              const c = e.center().clone();
              this.fx.cross(c, '#9fe8ff', e.isBoss ? 5.5 : 3.8);
              this.fx.ring(V(e.pos.x, e.y, e.pos.z), e.isBoss ? 3 : 1.8, '#9fe8ff', 0.3);
              this.fx.spark(c.x, c.y, c.z, 14, '#d8f6ff', 7);
              this.audio.play('skillhit');
              this.hitstop = Math.max(this.hitstop, 0.07);
            }
            if (pr.kind === 'orb') pr.life = 0;
            if (pr.kind === 'talisman') { pr.hitEnemy = e; pr.life = 0; }
            if (pr.kind === 'arrow') {
              this.audio.play('arrowhit');
              const c = e.center();
              this.fx.spark(c.x, c.y, c.z, pr.pierce ? 10 : 6, pr.pierce ? '#c8ff9a' : '#ffffff', 5);
              if (pr.pierce) {
                this.fx.cross(c.clone(), '#a8ff8a', e.isBoss ? 3.5 : 2.4, 0.25);
                for (let k = 0; k < 6; k++) this.fx.norm.emit({ x: c.x, y: c.y, z: c.z, vx: rand(-3, 3), vy: rand(1, 3), vz: rand(-3, 3), wob: 1.5, drag: 2, life: rand(0.4, 0.8), size: 2, color: Math.random() < 0.5 ? '#8ad06a' : '#d8f0a0' });
              }
              if (!pr.pierce) { pr.life = 0; pr.stuck = true; }
            }
            if (pr.life <= 0) break;
          }
        }
      } else if (pr.owner === 'enemy') {
        const p = this.player;
        if (Math.hypot(p.pos.x - pr.pos.x, p.pos.z - pr.pos.z) < pr.radius + p.radius * 0.5) {
          if (p.damage(pr.dmg, pr.pos)) { pr.life = 0; if (pr.slow) p.slowFor(pr.slow, '독에 중독되어 몸이 무겁다!'); }
        }
      }
      if (pr.life <= 0) {
        if (pr.kind === 'wave') this.swordWaveEnd(pr);
        if (pr.kind === 'darkwave') for (const a of pr.vis) a.kill = true;
        if (pr.kind === 'talisman') this.talismanBurst(pr);
        if (pr.kind === 'arrow' && pr.boom) this.boomAt(V(pr.pos.x, this.world.heightAt(pr.pos.x, pr.pos.z), pr.pos.z), 2.6, Math.round(60 * (pr.mul || 1)), '#e8ffc8');
        if (pr.mesh) {
          drop(this.scene, pr.mesh);
          if (pr.kind === 'orb') this.fx.blueFire(pr.pos.x, pr.pos.y - 0.2, pr.pos.z, 10, 0.2);
          if (pr.kind === 'arrow') this.fx.spark(pr.pos.x, pr.pos.y, pr.pos.z, 3, '#e8dcc0', 2);
        }
        this.projectiles.splice(i, 1);
      }
    }
  }

  separate() {
    const list = [this.player, ...this.enemies.filter((e) => !e.dead && !e.isWisp)];
    for (let i = 0; i < list.length; i++) for (let j = i + 1; j < list.length; j++) {
      const a = list[i], b = list[j];
      const dx = b.pos.x - a.pos.x, dz = b.pos.z - a.pos.z;
      const d = Math.hypot(dx, dz), m = a.radius + b.radius;
      if (d < m && d > 0.0001) {
        const push = (m - d) * 0.5;
        const ux = dx / d, uz = dz / d;
        const wa = a === this.player ? 0.3 : (a.isBoss ? 0.1 : 1);
        const wb = b.isBoss ? 0.1 : 1;
        this.world.move(a.pos, -ux * push * wa, -uz * push * wa, a.moveR ?? a.radius);
        this.world.move(b.pos, ux * push * wb, uz * push * wb, b.moveR ?? b.radius);
      }
    }
  }

  ambient(dt) {
    const f = this.focus;
    const n = this.night;
    const amb = this.themeCur.ambient;
    if (amb === 'snow') {
      // 설원: 밤낮없이 눈이 내림
      for (let k = 0; k < 2; k++) if (Math.random() < dt * 30) this.fx.norm.emit({ x: f.x + rand(-20, 20), y: rand(6, 10), z: f.z + rand(-18, 12), vx: rand(-0.3, 0.6), vy: -1.2, vz: rand(-0.2, 0.2), wob: 0.8, life: 8, size: Math.random() < 0.3 ? 3 : 2, color: '#ffffff', floor: 0.02, alpha: 0.95 });
      return;
    }
    if (amb === 'ember') {
      // 협곡: 바닥에서 솟아오르는 불티와 재
      if (Math.random() < dt * 16) this.fx.add.emit({ x: f.x + rand(-20, 20), y: rand(0, 1), z: f.z + rand(-16, 12), vx: rand(-0.3, 0.3), vy: rand(0.6, 1.6), vz: rand(-0.3, 0.3), wob: 0.8, life: rand(2, 4), size: 2, color: '#ffc060', color2: '#ff3a00', flicker: 0.6 });
      if (Math.random() < dt * 5) this.fx.norm.emit({ x: f.x + rand(-20, 20), y: rand(5, 8), z: f.z + rand(-16, 10), vx: rand(0.2, 0.6), vy: -0.4, vz: rand(-0.2, 0.2), wob: 1, life: 8, size: 2, color: '#6a605a', floor: 0.02, alpha: 0.8 });
    }
    if (amb === 'soul') {
      // 시련탑: 허공에서 떠오르는 넋 (보랏빛 불티)
      if (Math.random() < dt * 14) this.fx.add.emit({ x: f.x + rand(-18, 18), y: rand(-2, 0.5), z: f.z + rand(-14, 12), vx: rand(-0.2, 0.2), vy: rand(0.4, 1.0), vz: rand(-0.2, 0.2), wob: 0.6, life: rand(3, 5), size: rand(2, 3), color: '#d8c0ff', color2: '#5a1aaa', flicker: 0.5 });
    }
    if (amb === 'mist') {
      // 늪: 낮게 깔려 흐르는 물안개
      if (Math.random() < dt * 9) this.fx.norm.emit({ x: f.x + rand(-20, 20), y: rand(0.2, 1.2), z: f.z + rand(-16, 12), vx: rand(0.2, 0.6), vy: 0.02, vz: rand(-0.1, 0.1), wob: 0.3, life: rand(5, 8), size: rand(10, 16), endSize: 18, color: '#e8f4ec', alpha: 0.16 });
    }
    if (amb === 'maple' && Math.random() < dt * 9) {
      // 산성: 붉고 노란 단풍잎이 밤낮없이 흩날림
      const r = Math.random();
      this.fx.norm.emit({ x: f.x + rand(-18, 18), y: rand(4, 8), z: f.z + rand(-16, 10), vx: rand(0.3, 1.0), vy: -0.6, vz: rand(-0.2, 0.3), wob: 1.8, life: 8, size: Math.random() < 0.3 ? 3 : 2, color: r < 0.45 ? '#e04a2a' : r < 0.8 ? '#f08a2a' : '#f4c040', floor: 0.02 });
    }
    if (amb === 'summer') {
      // 계곡: 낮엔 민들레 씨앗과 나비, 밤엔 반딧불이 더 많이
      if (Math.random() < dt * 5 * (1 - n)) this.fx.norm.emit({ x: f.x + rand(-18, 18), y: rand(1, 4), z: f.z + rand(-16, 10), vx: rand(0.2, 0.6), vy: rand(-0.05, 0.15), vz: rand(-0.2, 0.2), wob: 1.4, life: 7, size: 2, color: '#fffbe8', alpha: 0.9 });
      if (Math.random() < dt * 1.5 * (1 - n)) this.fx.norm.emit({ x: f.x + rand(-14, 14), y: rand(0.6, 2), z: f.z + rand(-12, 8), vx: rand(-0.6, 0.6), vy: rand(-0.2, 0.3), vz: rand(-0.6, 0.6), wob: 3, life: 5, size: 3, color: Math.random() < 0.5 ? '#ffd040' : '#ffffff', alpha: 0.95 });
      if (Math.random() < dt * 10 * n) this.fx.add.emit({ x: f.x + rand(-18, 18), y: rand(0.3, 2), z: f.z + rand(-14, 10), vx: rand(-0.3, 0.3), vy: rand(-0.1, 0.2), vz: rand(-0.3, 0.3), wob: 0.8, life: rand(2.5, 5), size: 2, color: '#d8ff8a', flicker: 0.8 });
    }
    if (amb === 'blizzard') {
      // 고원: 바람에 비스듬히 몰아치는 눈보라
      for (let k = 0; k < 4; k++) if (Math.random() < dt * 30) this.fx.norm.emit({ x: f.x + rand(-26, 14), y: rand(3, 9), z: f.z + rand(-18, 12), vx: rand(3, 5), vy: -1.6, vz: rand(-0.4, 0.4), wob: 0.6, life: 6, size: Math.random() < 0.3 ? 3 : 2, color: '#ffffff', floor: 0.02, alpha: 0.95 });
      if (Math.random() < dt * 3) this.fx.norm.emit({ x: f.x + rand(-20, 10), y: rand(0.2, 1.5), z: f.z + rand(-14, 10), vx: rand(3, 5), vy: 0.05, vz: rand(-0.2, 0.2), wob: 0.3, life: rand(3, 5), size: rand(10, 16), endSize: 18, color: '#f4f8ff', alpha: 0.18 });
      return;
    }
    if (amb === 'bubble') {
      // 용궁: 바닥에서 떠오르는 물방울과 물속의 빛 알갱이
      if (Math.random() < dt * 12) this.fx.norm.emit({ x: f.x + rand(-20, 20), y: rand(0, 1), z: f.z + rand(-16, 12), vx: rand(-0.1, 0.1), vy: rand(0.8, 1.6), vz: rand(-0.1, 0.1), wob: 0.6, life: rand(3, 5), size: Math.random() < 0.3 ? 3 : 2, color: '#e8f8ff', alpha: 0.7 });
      if (Math.random() < dt * 6) this.fx.add.emit({ x: f.x + rand(-18, 18), y: rand(1, 5), z: f.z + rand(-14, 10), vx: rand(0.1, 0.4), vy: rand(-0.1, 0.1), vz: rand(-0.1, 0.1), wob: 0.8, life: rand(3, 5), size: 2, color: '#9ae8ff', flicker: 0.5 });
      return;
    }
    if (amb === 'leaf' && Math.random() < dt * 7 * (1 - n)) {
      this.fx.norm.emit({ x: f.x + rand(-18, 18), y: rand(4, 7), z: f.z + rand(-16, 10), vx: rand(0.2, 0.8), vy: -0.7, vz: rand(-0.2, 0.3), wob: 1.6, life: 7, size: 2, color: Math.random() < 0.5 ? '#8ad06a' : '#c8e08a', floor: 0.02 });
    }
    // 낮: 흩날리는 꽃잎 / 밤: 반딧불
    if (amb === 'petal' && Math.random() < dt * 6 * (1 - n)) {
      this.fx.norm.emit({ x: f.x + rand(-18, 18), y: rand(4, 8), z: f.z + rand(-16, 10), vx: rand(0.4, 1.0), vy: -0.6, vz: rand(-0.2, 0.3), wob: 1.2, life: 7, size: 2, color: Math.random() < 0.6 ? '#f6c8d4' : '#fff4f0', floor: 0.02, alpha: 0.95 });
    }
    if (Math.random() < dt * 14 * n) {
      this.fx.add.emit({ x: f.x + rand(-18, 18), y: rand(0.4, 2.5), z: f.z + rand(-14, 10), vx: rand(-0.3, 0.3), vy: rand(-0.1, 0.2), vz: rand(-0.3, 0.3), wob: 0.8, life: rand(2.5, 5), size: 2, color: Math.random() < 0.3 ? '#9ff0ff' : '#d8ff8a', flicker: 0.8 });
    }
  }

  // 전투 시뮬레이션 한 단계 (플레이어, 적, 길찾기, 투사체, 웨이브)
  simulate(wdt, inp) {
    this.updateTarget();
    this.player.update(wdt, inp);
    this.updateDrops(wdt);
    this.pet.update(wdt);
    this.updateRegion();
    this.updateVents(wdt);
    this.updateTower();
    this.updateField(wdt);
    this.qk.update(wdt); // 추격·찾기·순서·호위·버티기 (게임 시간으로)
    this.updateQuestMarkers(wdt);
    this.minimap.update(wdt);
    // 길찾기 흐름장 (플레이어가 다른 칸으로 옮겼을 때만 실제로 다시 계산)
    this.flowT -= wdt;
    if (this.enemies.length && this.flowT <= 0) {
      this.flowT = 0.15;
      const pp = this.player.pos;
      this.world.updateFlow(pp.x, pp.z, 0);
      if (this.enemies.some((e) => e.isBoss && !e.dead)) this.world.updateFlow(pp.x, pp.z, 1);
    }
    const ek = this.slowmoT > 0 ? 0.25 : 1;
    for (let i = this.enemies.length - 1; i >= 0; i--) {
      const e = this.enemies[i];
      const edt = this.cine && e !== this.cine.e ? 0 : wdt * ek;
      if (!e.update(edt)) { e.dispose(); this.enemies.splice(i, 1); }
    }
    this.rescueStranded(wdt);
    this.updateBurnZones(wdt);
    this.separate();
    this.updateProjectiles(wdt);
    this.updateSkills(wdt);
    if (this.timers.length) {
      const due = this.timers.filter((t) => t.at <= this.time);
      if (due.length) { this.timers = this.timers.filter((t) => t.at > this.time); for (const t of due) t.fn(); }
    }
    while (this.spawnQueue.length && this.spawnQueue[0].at <= this.time) { const q = this.spawnQueue.shift(); this.spawnEnemy(q.type, q); }
    this.spawnQueue.sort((a, b) => a.at - b.at);
    this.checkWave();
    if (this.enemies.length || this.spawnQueue.length) this.updateQuest();
  }

  // 게임 시간 기준 예약 (일시정지·지역 이동 시 함께 멈추거나 취소됨)
  //  keep: 쓰러져 다시 할 때도 지우지 않음 (승리 뒤 퀘스트 완료처럼 꼭 일어나야 하는 것)
  after(sec, fn, keep = false) { this.timers.push({ at: this.time + sec, fn, keep }); }

  // 테스트·디버그용: 렌더링 없이 시간만 진행
  stepSim(dt) {
    this.time += dt;
    shared.time.value += dt;
    this.simulate(dt, { mx: 0, mz: 0, moveLen: 0, mouseRecent: false, mouseWorld: null });
  }

  // 테스트·디버그용: 장비 하나 만들기
  // 키 아트·스토어 그림용: 다른 직업의 캐릭터 모델 (입은 장비·외형 그대로)
  heroRig(cls) { const r = CLASSES[cls].make(rigOptions(this, cls)); addRim(r.root); return r; }
  testItem(id) { return item(id); }
  testGear(kind, tier, lv = 5, set = null) { return set ? makeSetPiece(set, lv, kind) : makeGear(lv, tier, kind); }

  spawnEnemyAt(type, x, z) {
    const e = new Enemy(this, type, V(x, this.world.heightAt(x, z), z), 1 + this.round);
    this.enemies.push(e);
    return e;
  }

  // 지금 어울리는 배경음악·환경음: 보스 > 웨이브·필드 난전 > 지역(궁궐은 낮/밤)
  updateSoundScene(dt) {
    if (this.state === 'title') { this.audio.setScene('title', null); return; }
    const p = this.player;
    // 필드에서 덤벼드는 적이 셋 이상이면 전투곡 (잠깐 줄어도 몇 초는 유지)
    let aggro = 0;
    for (const e of this.enemies) if (!e.dead && !e.spawning && (!e.field || e.aggro) && Math.hypot(e.pos.x - p.pos.x, e.pos.z - p.pos.z) < 14) aggro++;
    this.combatHeat = aggro >= 3 ? 6 : Math.max(0, (this.combatHeat || 0) - dt);
    const boss = this.enemies.some((e) => e.isBoss && !e.dead);
    const id = this.mapId || 'palace';
    const night = this.night > 0.5;
    const region = id === 'palace' ? (night ? 'night' : 'palace') : id === 'tower' ? (this.tower?.active && !this.tower.cleared ? 'battle' : 'tower') : id;
    const music = boss ? 'boss' : this.waveActive || this.combatHeat > 0 ? 'battle' : region;
    const amb = id === 'palace' ? (night ? 'amb_night' : 'amb_day') : id === 'bamboo' ? (night ? 'amb_night' : 'amb_bamboo') : id === 'swamp' ? 'amb_swamp' : id === 'canyon' ? 'amb_canyon' : id === 'fortress' ? 'amb_fortress' : id === 'sea' ? 'amb_sea' : id === 'valley' ? 'amb_valley' : id === 'snowfield' ? 'amb_snowfield' : id === 'tomb' ? 'amb_tomb' : id === 'market' ? 'amb_market' : id === 'tidal' ? 'amb_tidal' : id === 'sky' ? 'amb_sky' : id === 'tower' ? 'amb_tower' : 'amb_temple';
    this.audio.setScene(music, amb);
  }

  loop(now) {
    requestAnimationFrame(this.loop);
    let dt = Math.min(0.05, (now - this.last) / 1000);
    this.last = now;
    this.pollPad();
    this.audio.update();
    this.updateSoundScene(dt);
    // 15초마다 자동 저장
    if (this.state === 'play') { this.saveT -= dt; if (this.saveT <= 0) this.save(); if (!this.paused) this.playTime = (this.playTime || 0) + dt; }
    this.coach.update(dt);
    this.records.update(dt);
    this.dailyGoals.update(dt);
    // 수련 패스: 1초마다 과제 확인
    if (this.state === 'play' && (this.passT = (this.passT || 0) + dt) > 1) {
      this.passT = 0;
      for (const M of checkPass(this)) this.ui.toast(`수련 패스 과제 완료: ${M.text(M.n)} (+${M.pts})`, 2.6);
    }
    this.autoQuality((now - this.last0) / 1000 || 0);
    this.dev.tick((now - this.last0) / 1000 || 0);
    this.last0 = now;

    // 히트스톱: 월드 시간 멈춤
    let wdt = dt;
    if (this.hitstop > 0) { this.hitstop -= dt; wdt = dt * 0.05; }
    // 보스 격파: 처음 1.2초는 시간이 4분의 1로 흐름
    if (this.killCam && !this.paused) { this.updateKillCam(dt); if (this.killCam && this.killCam.t < 1.2) wdt *= 0.25; }
    this.time += wdt;
    shared.time.value += wdt;

    this.night = damp(this.night, this.nightTarget, 1.2, dt);
    if (Math.abs(this.night - this.nightTarget) < 0.002) this.night = this.nightTarget;
    this.alarm = Math.max(0, this.alarm - dt);

    let inp = this.readInput();
    if (this.state === 'play' && !this.paused) inp = this.autoControl(inp, wdt);
    if (this.cine) { inp = { mx: 0, mz: 0, moveLen: 0, mouseRecent: false, mouseWorld: null }; this.updateCine(dt); }
    if (this.cut) inp = this.cut.update(this.paused ? 0 : wdt);
    if (this.slowmoT > 0) this.slowmoT -= dt;
    if (this.state !== 'title' && !this.paused) this.simulate(wdt, inp);
    else this.player.update(wdt, inp);
    for (const n of this.npcs) n.update(wdt);
    for (const b of this.birds) b.update(wdt);
    this.world.update(wdt, this.time);
    this.ambient(wdt);
    this.fx.update(wdt);
    shared.player.value.copy(this.player.pos);
    this.nearInteract = this.state === 'play' && !this.cut ? this.findInteract() : null;
    this.updateMarker(dt);

    // 카메라
    let target;
    if (this.state === 'title') {
      this.preview.update(dt);
      const k = (Math.sin(this.time * 0.12) * 0.5 + 0.5);
      target = V(Math.sin(this.time * 0.07) * 4, 0.5, lerp(10, -6, k));
      this.focus.copy(target);
    } else {
      const p = this.player;
      this.lead.x = damp(this.lead.x, p.vel.x * 0.28, 3, dt);
      this.lead.z = damp(this.lead.z, p.vel.z * 0.28, 3, dt);
      target = V(p.pos.x + this.lead.x, p.y + 0.6, p.pos.z + this.lead.z - 0.8);
      this.pixel.camK = damp(this.pixel.camK ?? 1, this.cine ? 0.74 : this.killCam ? 0.85 : 1, 3, dt);
      if (this.cine) { const b = this.cine.e; target = V(lerp(p.pos.x, b.pos.x, 0.85), b.y + 1.2, lerp(p.pos.z, b.pos.z, 0.85) - 0.8); }
      if (this.killCam) { const b = this.killCam.at; target = V(lerp(p.pos.x, b.x, 0.8), b.y + 1.0, lerp(p.pos.z, b.z, 0.8) - 0.6); }
      const ct = this.cut?.camTarget();
      if (ct) { target = ct; this.pixel.camK = damp(this.pixel.camK ?? 1, this.cut.k, this.cut.camSpeed || 2.5, dt); }
      this.focus.x = damp(this.focus.x, target.x, 7, dt);
      this.focus.y = damp(this.focus.y, target.y, 5, dt);
      this.focus.z = damp(this.focus.z, target.z, 7, dt);
    }
    this.shakeAmt = Math.max(0, this.shakeAmt - dt * 2.2);
    const sh = this.shakeAmt * this.shakeAmt * 0.45;
    const camFocus = this.focus.clone().add(V(rand(-sh, sh), 0, rand(-sh, sh) * 0.6));
    this.pixel.setFocus(camFocus);
    this.updateDarkness();
    this.updateLights(dt);
    this.ui.update(dt);
    this.pixel.render(this.scene);
  }
}

// 떼어 낸 부분들(src/game/*.js)의 메서드를 Game에 붙임 — 원래 한 클래스였던 것을 파일만 나눔
for (const Part of [SkillsPart, BossfxPart, TowerPart, PausePart, ItemsPart, AutoPart, QuestPart]) {
  for (const k of Object.getOwnPropertyNames(Part.prototype)) {
    if (k === 'constructor') continue;
    if (Object.prototype.hasOwnProperty.call(Game.prototype, k)) throw new Error('Game 메서드 이름이 겹침: ' + k);
    Object.defineProperty(Game.prototype, k, Object.getOwnPropertyDescriptor(Part.prototype, k));
  }
}

const _a = new THREE.Vector3(), _b = new THREE.Vector3(), _c = new THREE.Vector3(), _d = new THREE.Vector3();
const _e = new THREE.Color();
// 체험판이 끝나는 단계: 늪으로 가는 뒷문을 여는 임무(뒷문 너머)부터

window.addEventListener('DOMContentLoaded', async () => {
  initLang();
  watchDom();
  // 깃발·제목에 쓰는 명조체를 먼저 불러 둠 (캔버스에 그릴 때 글꼴이 없으면 다른 글꼴로 그려짐). 오래 걸리면 기다리지 않음
  try { await Promise.race([document.fonts.load('900 92px WolhaSerif', '령용무월하궁'), new Promise((r) => setTimeout(r, 1500))]); } catch { /* 글꼴 없이 진행 */ }
  // 홈 화면에 설치한 웹판: 한 번 받은 파일로 오프라인에서도 실행 (sw.js). 자동 테스트에서는 ?sw=1일 때만, 앱(파일이 이미 기기 안)에서는 안 씀
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol) && !isNativeApp() && (!navigator.webdriver || /[?&]sw=1/.test(location.search))) {
    try { navigator.serviceWorker.register('sw.js').catch(() => {}); } catch { /* 막힌 곳(앱 안의 미리보기 등)에서는 그냥 진행 */ }
  }
  try {
    window.game = new Game();
  } catch (err) {
    console.error(err);
    // 원인을 알 수 있게: 버전·그래픽 모드·오류가 난 곳(함수 이름 몇 개)을 함께 보여 주고, 다른 그래픽 모드로 다시 켤 수 있게
    const where = String(err.stack || '').split('\n').slice(1, 4).map((l) => l.trim().replace(/\(?https?:\/\/[^)]*\/([^/)]+)\)?/, '$1')).join(' ← ');
    const esc = (t) => String(t).replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
    document.getElementById('title').innerHTML = `<div class="err">게임을 시작할 수 없습니다.<br><small>${esc(err.message)}</small>`
      + `<br><small class="err-where">v${VERSION} (${BUILD}) · ${esc(where)}</small>`
      + `<br><button id="err-reload" class="tbtn">다시 불러오기</button></div>`;
    document.getElementById('err-reload').addEventListener('click', () => location.reload());
  }
});
