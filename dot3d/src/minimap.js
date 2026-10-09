// 지도: 화면 구석의 작은 지도(지금 지역)와, V 키로 여는 큰 지도(모든 지역 + 퀘스트 일지)
//  지형은 길찾기 격자(막힘)와 물웅덩이로 지역마다 한 번 구워 두고, 위에 플레이어·적·NPC·목표를 그림
//  화면 위쪽이 북쪽(-z)
import { tr } from './i18n.js';
import { MAPS } from './maps.js';
import { QUESTS, BOUNTIES } from './quests.js';
// 캔버스 글꼴: 언어별 글꼴(중국어는 FusionZh)을 따름
const uiFont = () => (typeof document !== 'undefined' && getComputedStyle(document.documentElement).getPropertyValue('--font').trim()) || 'Galmuri11, monospace';

const PX = 4; // 구운 지도: 1칸(미터)당 픽셀

const hex = (h, a = 1) => {
  const n = parseInt(h.slice(1), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
};
const mixHex = (a, b, k) => {
  const A = parseInt(a.slice(1), 16), Bn = parseInt(b.slice(1), 16);
  const c = (s) => Math.round(((A >> s) & 255) * (1 - k) + ((Bn >> s) & 255) * k);
  return `rgb(${c(16)},${c(8)},${c(0)})`;
};

export class MiniMap {
  constructor(game) {
    this.game = game;
    this.cache = {};
    this.mini = document.getElementById('minimap');
    this.cv = document.getElementById('minimap-cv');
    this.ctx = this.cv.getContext('2d');
    this.full = document.getElementById('worldmap');
    this.fullCv = document.getElementById('worldmap-cv');
    this.t = 0;
    this.mini.addEventListener('click', () => this.toggle(true));
    document.getElementById('worldmap-close').addEventListener('click', () => this.toggle(false));
  }

  // 지역 하나의 지형 그림 (막힌 곳·물·바닥)
  bake(R) {
    const key = R.id + ':' + Object.values(this.game.world.gates).filter((g) => g.open).length;
    if (this.cache[key]) return this.cache[key];
    const W = this.game.world, nav = W.nav;
    const w = Math.ceil((R.x1 - R.x0) * PX), h = Math.ceil((R.z1 - R.z0) * PX);
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    const g = c.getContext('2d');
    const th = MAPS[R.id].theme;
    const floor = mixHex(th.ground[0], '#e8e0cc', 0.35), wall = mixHex(th.ground[0], '#14101a', 0.7), water = '#3a8ab0';
    g.fillStyle = floor;
    g.fillRect(0, 0, w, h);
    const step = 0.5;
    for (let z = R.z0; z < R.z1; z += step) {
      for (let x = R.x0; x < R.x1; x += step) {
        const cx = x + step / 2, cz = z + step / 2;
        let col = null;
        if (!W.inside(cx, cz, 0.2)) col = wall;
        else if (nav) { const k = W.navCell(cx, cz); if (k >= 0 && !nav.ok[0][k]) col = wall; }
        if (!col && W.inWater(cx, cz)) col = water;
        if (col) { g.fillStyle = col; g.fillRect(Math.floor((x - R.x0) * PX), Math.floor((z - R.z0) * PX), Math.ceil(step * PX), Math.ceil(step * PX)); }
      }
    }
    // 테두리
    g.strokeStyle = 'rgba(0,0,0,0.6)'; g.lineWidth = 2; g.strokeRect(1, 1, w - 2, h - 2);
    this.cache[key] = c;
    return c;
  }

  // 지역 좌표 → 그림 좌표
  draw(ctx, R, ox, oy, s, opt = {}) {
    const G = this.game, p = G.player;
    const img = this.bake(R);
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(img, ox, oy, img.width * s, img.height * s);
    const P = (x, z) => [ox + (x - R.x0) * PX * s, oy + (z - R.z0) * PX * s];
    const inR = (x, z) => x >= R.x0 && x <= R.x1 && z >= R.z0 && z <= R.z1;
    const dot = (x, z, r, fill, stroke = '#000') => { const [a, b] = P(x, z); ctx.beginPath(); ctx.arc(a, b, r, 0, Math.PI * 2); ctx.fillStyle = fill; ctx.fill(); ctx.lineWidth = 1; ctx.strokeStyle = stroke; ctx.stroke(); };
    const k = opt.big ? 1.6 : 1;
    // 북·종·풀무 같은 부르는 물건
    for (const d of G.world.drums) if (d.region === R.id) { const [a, b] = P(d.pos.x, d.pos.z); ctx.fillStyle = G.cleared[R.id] ? '#c8a050' : '#ff8a3a'; ctx.fillRect(a - 3 * k, b - 3 * k, 6 * k, 6 * k); ctx.strokeStyle = '#000'; ctx.strokeRect(a - 3 * k, b - 3 * k, 6 * k, 6 * k); }
    // 저승 문
    for (const pt of G.world.portals) if (pt.region === R.id && pt.kind === 'enter') dot(pt.x, pt.z, 4 * k, '#a070ff');
    // NPC
    for (const n of G.npcs) if (inR(n.pos.x, n.pos.z)) dot(n.pos.x, n.pos.z, 3 * k, '#ffe080');
    // 적
    for (const e of G.enemies) if (!e.dead && inR(e.pos.x, e.pos.z)) dot(e.pos.x, e.pos.z, (e.isBoss ? 5 : e.elite ? 3.5 : 2.4) * k, e.isBoss ? '#ff2a2a' : e.field && !e.aggro ? '#c86a5a' : '#ff5a4a');
    // 퀘스트 목표 (깜빡이는 금색 별)
    const pulse = 0.6 + 0.4 * Math.sin(this.t * 6);
    for (const t of G.questTargets()) {
      if (!inR(t.pos.x, t.pos.z)) continue;
      const [a, b] = P(t.pos.x, t.pos.z);
      ctx.save(); ctx.translate(a, b); ctx.fillStyle = hex('#ffd040', pulse); ctx.strokeStyle = '#000';
      ctx.beginPath();
      for (let i = 0; i < 10; i++) { const r = (i % 2 ? 2.5 : 6) * k, an = (i / 10) * Math.PI * 2 - Math.PI / 2; ctx.lineTo(Math.cos(an) * r, Math.sin(an) * r); }
      ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
    }
    // 플레이어 (바라보는 쪽 화살표)
    if (inR(p.pos.x, p.pos.z)) {
      const [a, b] = P(p.pos.x, p.pos.z);
      ctx.save(); ctx.translate(a, b); ctx.rotate(Math.PI - p.yaw);
      ctx.beginPath(); ctx.moveTo(0, -7 * k); ctx.lineTo(5 * k, 5 * k); ctx.lineTo(0, 2.5 * k); ctx.lineTo(-5 * k, 5 * k); ctx.closePath();
      ctx.fillStyle = '#ffffff'; ctx.fill(); ctx.lineWidth = 1.5; ctx.strokeStyle = '#1a1622'; ctx.stroke(); ctx.restore();
    }
  }

  update(dt) {
    const G = this.game;
    this.t += dt;
    if (G.state !== 'play') return;
    this.acc = (this.acc || 0) + dt;
    if (this.acc < 0.1) return;
    this.acc = 0;
    if (this.full.classList.contains('show')) { this.drawFull(); return; }
    const R = G.world.regionAt(G.player.pos.x, G.player.pos.z);
    const ctx = this.ctx, cw = this.cv.width, ch = this.cv.height;
    ctx.clearRect(0, 0, cw, ch);
    const img = this.bake(R);
    const s = Math.min(cw / img.width, ch / img.height);
    this.draw(ctx, R, (cw - img.width * s) / 2, (ch - img.height * s) / 2, s);
    const name = tr(MAPS[R.id].name);
    ctx.font = '11px ' + uiFont();
    ctx.textAlign = 'center'; ctx.textBaseline = 'top';
    ctx.lineWidth = 3; ctx.strokeStyle = '#000'; ctx.strokeText(name, cw / 2, 3);
    ctx.fillStyle = '#ffd76a'; ctx.fillText(name, cw / 2, 3);
    ctx.textAlign = 'left';
  }

  toggle(open = !this.full.classList.contains('show')) {
    const G = this.game;
    if (open && (G.state !== 'play' || G.story || G.pauseOpen || G.ui.inDialog || G.killCam)) return;
    if (open) { if (G.ui.bagOpen) G.toggleBag(false); if (G.ui.skillsOpen) G.toggleSkills(false); if (G.autoMove) G.stopAutoMove(); }
    G.mapOpen = open;
    this.full.classList.toggle('show', open);
    G.paused = open || !!G.ui.bagOpen || !!G.ui.skillsOpen;
    G.audio.play('talk');
    if (open) { this.drawFull(); this.fillLog(); }
  }

  // 큰 지도: 왼쪽은 지금 지역을 크게, 가운데 세로 띠는 모든 지역의 이어짐
  drawFull() {
    const G = this.game, cv = this.fullCv, ctx = cv.getContext('2d');
    ctx.clearRect(0, 0, cv.width, cv.height);
    const cur = G.world.regionAt(G.player.pos.x, G.player.pos.z);
    const img = this.bake(cur);
    const SW = 170; // 오른쪽 지역 띠 너비
    const s = Math.min((cv.width - SW - 30) / img.width, (cv.height - 20) / img.height);
    const mw = img.width * s;
    this.draw(ctx, cur, 10 + (cv.width - SW - 30 - mw) / 2, 10, s, { big: true });
    // 지역 띠
    const regs = G.world.regions.filter((r) => r.id !== 'tower');
    const x0 = cv.width - SW - 10, bw = SW, bh = (cv.height - 20) / regs.length - 6;
    ctx.font = '12px ' + uiFont();
    ctx.textBaseline = 'middle';
    regs.forEach((r, i) => {
      const y = 10 + i * (bh + 6);
      const open = this.regionOpen(r.id);
      ctx.fillStyle = r.id === cur.id ? '#5a4a2a' : open ? '#2a2632' : '#16141a';
      ctx.fillRect(x0, y, bw, bh);
      ctx.strokeStyle = r.id === cur.id ? '#ffd76a' : '#4a4456';
      ctx.lineWidth = r.id === cur.id ? 2 : 1;
      ctx.strokeRect(x0 + 0.5, y + 0.5, bw - 1, bh - 1);
      ctx.fillStyle = open ? '#f3ead6' : '#6a6476';
      ctx.fillText(open ? tr(MAPS[r.id].name) : '???', x0 + 8, y + bh / 2);
      if (G.cleared[r.id]) { ctx.fillStyle = '#ffd040'; ctx.fillText('★', x0 + bw - 18, y + bh / 2); }
      if (i < regs.length - 1) { ctx.fillStyle = '#6a6476'; ctx.fillRect(x0 + bw / 2 - 1, y + bh, 2, 6); }
    });
  }

  // 그 지역 문이 열렸는지 (궁궐은 늘, 나머지는 들어가는 길이 열린 뒤)
  regionOpen(id) {
    const G = this.game, gates = { bamboo: 'south', temple: 'temple', swamp: 'swamp', canyon: 'canyon', fortress: 'fortress', sea: 'sea', valley: 'valley', snowfield: 'snowfield', tomb: 'tomb', market: 'market', tidal: 'tidal', sky: 'sky' };
    if (id === 'palace') return true;
    const g = G.world.gates[gates[id]];
    return !g || g.open || !!G.cleared[id];
  }

  // 퀘스트 일지: 지금 할 일, 마친 단계(최근 순), 현상수배
  fillLog() {
    const G = this.game, el = document.getElementById('worldmap-log');
    const Q = G.curQuest();
    let html = `<h3>${tr('지금 할 일')}</h3>`;
    if (Q) html += `<div class="cur"><b>${G.quest.step + 1}. ${tr(Q.title)}</b><p>${tr(Q.desc)}</p>${G.progText ? G.progText(Q, G.quest.prog).replace('<br>', '') : ''}</div>`;
    else {
      const B = G.quest.bounty;
      html += `<div class="cur"><b>${tr('모든 지역 평정')}</b><p>${B ? tr(BOUNTIES[B.i].title) : tr('수문장에게 현상수배를 받자')}</p></div>`;
    }
    html += `<h3>${tr('지나온 길')} <span>${Math.min(G.quest.step, QUESTS.length)} / ${QUESTS.length}</span></h3><ol>`;
    for (let i = Math.min(G.quest.step, QUESTS.length) - 1; i >= 0; i--) html += `<li><i>${i + 1}</i>${tr(QUESTS[i].title)}</li>`;
    html += '</ol>';
    el.innerHTML = html;
  }
}
