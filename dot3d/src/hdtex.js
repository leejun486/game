// 고화질 모드 전용 텍스처: 캔버스에 그린 색(map) + 높이에서 만든 노멀맵(normalMap)
// UV는 월드 크기 기준(기존과 같음)이라 해상도만 높아짐. 모두 이음매 없이 반복됨
import * as THREE from 'three';
import { mulberry32 } from './util.js';

const cache = new Map();
const cached = (k, fn) => (cache.has(k) ? cache.get(k) : (cache.set(k, fn()), cache.get(k)));

function canvas(n, m = n) {
  const c = document.createElement('canvas');
  c.width = n; c.height = m;
  return [c, c.getContext('2d')];
}

function tex(c, color = true) {
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 8;
  t.colorSpace = color ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  return t;
}

// 높이 캔버스(밝을수록 높음) → 노멀맵
function normalFrom(hc, strength = 2.2) {
  const W = hc.width, H = hc.height;
  const src = hc.getContext('2d').getImageData(0, 0, W, H).data;
  const [c, g] = canvas(W, H);
  const img = g.createImageData(W, H);
  const h = (x, y) => src[(((y + H) % H) * W + ((x + W) % W)) * 4] / 255;
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const dx = (h(x + 1, y) - h(x - 1, y)) * strength;
    const dy = (h(x, y + 1) - h(x, y - 1)) * strength;
    const l = Math.hypot(dx, dy, 1);
    const i = (y * W + x) * 4;
    img.data[i] = ((-dx / l) * 0.5 + 0.5) * 255;
    img.data[i + 1] = ((dy / l) * 0.5 + 0.5) * 255;
    img.data[i + 2] = (1 / l) * 255;
    img.data[i + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  return tex(c, false);
}

const rgb = (c, k = 1, add = 0) => `rgb(${Math.round(c[0] * k + add)},${Math.round(c[1] * k + add)},${Math.round(c[2] * k + add)})`;

// 잔돌기 노이즈 (색 캔버스와 높이 캔버스에 함께)
function speckle(g, hg, W, H, R, n, alpha = 0.08) {
  for (let i = 0; i < n; i++) {
    const x = R() * W, y = R() * H, r = 0.5 + R() * 1.6;
    const v = R() < 0.5 ? 0 : 255;
    g.fillStyle = `rgba(${v},${v},${v},${alpha * (0.4 + R())})`;
    g.fillRect(x, y, r, r);
    if (hg) { hg.fillStyle = `rgba(${v},${v},${v},${0.18 * R()})`; hg.fillRect(x, y, r, r); }
  }
}

// 둥근 모서리 다각형 경로
function roundPoly(g, pts, rad) {
  const n = pts.length;
  g.beginPath();
  for (let i = 0; i < n; i++) {
    const a = pts[(i + n - 1) % n], b = pts[i], c = pts[(i + 1) % n];
    const l1 = Math.hypot(a[0] - b[0], a[1] - b[1]), l2 = Math.hypot(c[0] - b[0], c[1] - b[1]);
    const r = Math.min(rad, l1 / 2, l2 / 2);
    const p1 = [b[0] + ((a[0] - b[0]) / l1) * r, b[1] + ((a[1] - b[1]) / l1) * r];
    const p2 = [b[0] + ((c[0] - b[0]) / l2) * r, b[1] + ((c[1] - b[1]) / l2) * r];
    if (i === 0) g.moveTo(p1[0], p1[1]); else g.lineTo(p1[0], p1[1]);
    g.quadraticCurveTo(b[0], b[1], p2[0], p2[1]);
  }
  g.closePath();
}

// 돌판 깔기: rows 행, 각 행을 무작위 폭으로 나누고 모서리를 흔들어 불규칙한 박석.
// 이음매 없이 반복되도록 가장자리를 넘는 돌은 반대편에도 그림
function paveStones({ N, seed, base, rows, minW, maxW, jitter, grout, round, wear, moss = 0, shade = 1, split = 0, cool = 0, vari = 34 }) {
  const R = mulberry32(seed);
  const [c, g] = canvas(N);
  const [hc, hg] = canvas(N);
  g.fillStyle = rgb(base, 0.42); g.fillRect(0, 0, N, N);       // 줄눈
  hg.fillStyle = '#202020'; hg.fillRect(0, 0, N, N);
  const rowH = [];
  let left = N;
  for (let i = 0; i < rows; i++) { const h = i === rows - 1 ? left : Math.round((N / rows) * (0.75 + R() * 0.5)); rowH.push(Math.min(h, left)); left -= rowH[i]; }
  let y = 0;
  const stones = [];
  for (let r = 0; r < rows; r++) {
    const h = rowH[r];
    let x = R() * maxW;
    const x0 = x;
    while (x < x0 + N) {
      let w = minW + R() * (maxW - minW);
      if (x + w > x0 + N - minW * 0.6) w = x0 + N - x;
      const j = () => (R() - 0.5) * jitter;
      const mk = (yy, hh) => stones.push({ pts: [[x + j(), yy + j()], [x + w + j(), yy + j()], [x + w + j(), yy + hh + j()], [x + j(), yy + hh + j()]], v: (R() - 0.5), warm: (R() - 0.5) + (R() < cool ? -1.4 : 0), moss: R() < moss });
      // 가끔 한 칸을 위아래로 나눠 줄이 반듯해 보이지 않게
      if (R() < split) { const k = h * (0.35 + R() * 0.3); mk(y, k); mk(y + k, h - k); } else mk(y, h);
      x += w;
    }
    y += h;
  }
  const inset = (pts, d) => { const cx = pts.reduce((a, p) => a + p[0], 0) / 4, cy = pts.reduce((a, p) => a + p[1], 0) / 4; return pts.map(([px, py]) => { const l = Math.hypot(px - cx, py - cy); return [px + ((cx - px) / l) * d, py + ((cy - py) / l) * d]; }); };
  for (const s of stones) {
    for (const ox of [-N, 0, N]) for (const oy of [-N, 0, N]) {
      const pts = inset(s.pts.map(([px, py]) => [px + ox, py + oy]), grout);
      const minx = Math.min(...pts.map((p) => p[0])), maxx = Math.max(...pts.map((p) => p[0]));
      const miny = Math.min(...pts.map((p) => p[1])), maxy = Math.max(...pts.map((p) => p[1]));
      if (maxx < 0 || minx > N || maxy < 0 || miny > N) continue;
      const col = [base[0] + s.v * vari + s.warm * 10, base[1] + s.v * vari, base[2] + s.v * vari - s.warm * 10];
      // 색: 바탕 + 대각선 그라데이션(위 밝고 아래 어둡게) + 얼룩
      g.save();
      roundPoly(g, pts, round);
      g.clip();
      const gr = g.createLinearGradient(minx, miny, maxx, maxy);
      gr.addColorStop(0, rgb(col, 1.06 * shade)); gr.addColorStop(1, rgb(col, 0.9 * shade));
      g.fillStyle = gr; g.fillRect(minx - 2, miny - 2, maxx - minx + 4, maxy - miny + 4);
      for (let k = 0; k < 3; k++) {
        const bx = minx + R() * (maxx - minx), by = miny + R() * (maxy - miny), br = (maxx - minx) * (0.2 + R() * 0.35);
        const rg = g.createRadialGradient(bx, by, 0, bx, by, br);
        const dk = R() < 0.5;
        rg.addColorStop(0, dk ? 'rgba(60,50,40,0.13)' : 'rgba(255,250,235,0.12)'); rg.addColorStop(1, 'rgba(0,0,0,0)');
        g.fillStyle = rg; g.fillRect(bx - br, by - br, br * 2, br * 2);
      }
      if (s.moss) { g.fillStyle = 'rgba(96,120,60,0.25)'; g.fillRect(minx, maxy - 4, maxx - minx, 4); }
      g.restore();
      // 닳은 모서리: 안쪽 밝은 테
      g.save(); roundPoly(g, pts, round); g.lineWidth = wear; g.strokeStyle = 'rgba(255,250,235,0.16)'; g.stroke(); g.restore();
      // 높이: 가운데 볼록, 가장자리로 내려감
      hg.save(); roundPoly(hg, pts, round); hg.clip();
      hg.fillStyle = '#a8a8a8'; hg.fillRect(minx - 2, miny - 2, maxx - minx + 4, maxy - miny + 4);
      hg.restore();
      hg.save(); roundPoly(hg, inset(pts, wear * 0.8), round * 1.4); hg.fillStyle = '#c8c8c8'; hg.fill(); hg.restore();
    }
  }
  speckle(g, hg, N, N, R, N * N * 0.04);
  // 높이 맵을 살짝 흐리게 → 부드러운 경사
  const hb = canvas(N);
  hb[1].filter = `blur(${Math.max(1, N / 256)}px)`;
  hb[1].drawImage(hc, 0, 0);
  return { map: tex(c), normalMap: normalFrom(hb[0], 3.2) };
}

// 마당 박석: 4×4 유닛 (기존 텍스처와 같은 크기)
export function hdFloor() {
  return cached('floor', () => paveStones({ N: 512, seed: 7, base: [166, 162, 152], rows: 3, minW: 110, maxW: 240, jitter: 26, grout: 3, round: 14, wear: 6, moss: 0.08, split: 0.45, cool: 0.15, vari: 40 }));
}
// 월대 윗면: 조금 밝고 작은 판석
export function hdSlab() {
  return cached('slab', () => paveStones({ N: 512, seed: 9, base: [190, 182, 164], rows: 7, minW: 56, maxW: 110, jitter: 6, grout: 1.8, round: 6, wear: 4 }));
}
// 어도: 반듯한 큰 판석 (엇갈림)
export function hdPath() {
  return cached('path', () => paveStones({ N: 512, seed: 31, base: [160, 158, 150], rows: 4, minW: 120, maxW: 130, jitter: 2, grout: 2, round: 4, wear: 4 }));
}
// 석축·담장 돌: 가로로 긴 마름돌
export function hdBlock(base = [168, 160, 142]) {
  return cached('block' + base, () => paveStones({ N: 512, seed: 13 + base[0], base, rows: 6, minW: 110, maxW: 190, jitter: 5, grout: 3, round: 7, wear: 5, shade: 0.97 }));
}

// 풀밭: 짙고 옅은 풀잎 결 + 들꽃 몇 송이
export function hdGrass(base = [92, 132, 64]) {
  return cached('grass' + base, () => {
    const N = 256, R = mulberry32(5 + base[0]);
    const [c, g] = canvas(N);
    g.fillStyle = rgb(base); g.fillRect(0, 0, N, N);
    for (let i = 0; i < 40; i++) {
      const x = R() * N, y = R() * N, r = 20 + R() * 50;
      const rg = g.createRadialGradient(x, y, 0, x, y, r);
      rg.addColorStop(0, R() < 0.5 ? 'rgba(170,190,90,0.18)' : 'rgba(30,60,30,0.18)'); rg.addColorStop(1, 'rgba(0,0,0,0)');
      for (const ox of [-N, 0, N]) for (const oy of [-N, 0, N]) { g.fillStyle = rg; g.save(); g.translate(ox, oy); g.fillRect(x - r, y - r, r * 2, r * 2); g.restore(); }
    }
    for (let i = 0; i < 5200; i++) {
      const x = R() * N, y = R() * N, l = 3 + R() * 6, a = -Math.PI / 2 + (R() - 0.5) * 0.9;
      const k = 0.7 + R() * 0.6;
      g.strokeStyle = rgb(base, k, R() < 0.2 ? 30 : 0);
      g.lineWidth = 1;
      g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); g.stroke();
    }
    for (let i = 0; i < 14; i++) { g.fillStyle = R() < 0.5 ? '#f4efd8' : '#f0c850'; g.fillRect(R() * N, R() * N, 2, 2); }
    return { map: tex(c) };
  });
}

// 흙: 갈색 바탕 + 자갈
export function hdDirt(base = [138, 118, 88]) {
  return cached('dirt' + base, () => {
    const N = 256, R = mulberry32(21);
    const [c, g] = canvas(N);
    const [hc, hg] = canvas(N);
    g.fillStyle = rgb(base); g.fillRect(0, 0, N, N);
    hg.fillStyle = '#808080'; hg.fillRect(0, 0, N, N);
    for (let i = 0; i < 60; i++) {
      const x = R() * N, y = R() * N, r = 10 + R() * 30;
      const rg = g.createRadialGradient(x, y, 0, x, y, r);
      rg.addColorStop(0, R() < 0.5 ? 'rgba(90,70,50,0.2)' : 'rgba(200,180,140,0.16)'); rg.addColorStop(1, 'rgba(0,0,0,0)');
      g.fillStyle = rg; g.fillRect(x - r, y - r, r * 2, r * 2);
    }
    for (let i = 0; i < 260; i++) {
      const x = R() * N, y = R() * N, r = 1 + R() * 2.5;
      g.fillStyle = rgb(base, 0.8 + R() * 0.5); g.beginPath(); g.arc(x, y, r, 0, 7); g.fill();
      hg.fillStyle = '#c0c0c0'; hg.beginPath(); hg.arc(x, y, r, 0, 7); hg.fill();
    }
    speckle(g, hg, N, N, R, 3000);
    return { map: tex(c), normalMap: normalFrom(hc, 2) };
  });
}

// 기와: 세로 골(수키와) 줄과 가로 단, 끝에 그늘
export function hdRoof(base = [84, 90, 98]) {
  return cached('roof' + base, () => {
    const N = 256, R = mulberry32(3);
    const [c, g] = canvas(N);
    const [hc, hg] = canvas(N);
    const cols = 8, rows = 8, cw = N / cols, rh = N / rows;
    for (let i = 0; i < cols; i++) {
      // 둥근 기와 골: 가운데 밝고 양옆 어둡게
      const gr = g.createLinearGradient(i * cw, 0, (i + 1) * cw, 0);
      gr.addColorStop(0, rgb(base, 0.62)); gr.addColorStop(0.35, rgb(base, 1.08)); gr.addColorStop(0.6, rgb(base, 1.0)); gr.addColorStop(1, rgb(base, 0.58));
      g.fillStyle = gr; g.fillRect(i * cw, 0, cw, N);
      const hgr = hg.createLinearGradient(i * cw, 0, (i + 1) * cw, 0);
      hgr.addColorStop(0, '#303030'); hgr.addColorStop(0.45, '#e0e0e0'); hgr.addColorStop(1, '#303030');
      hg.fillStyle = hgr; hg.fillRect(i * cw, 0, cw, N);
    }
    for (let j = 0; j < rows; j++) {
      const y = j * rh;
      const gr = g.createLinearGradient(0, y, 0, y + rh);
      gr.addColorStop(0, 'rgba(255,255,255,0.08)'); gr.addColorStop(0.85, 'rgba(0,0,0,0)'); gr.addColorStop(1, 'rgba(0,0,0,0.35)');
      g.fillStyle = gr; g.fillRect(0, y, N, rh);
      hg.fillStyle = 'rgba(0,0,0,0.35)'; hg.fillRect(0, y + rh - 3, N, 3);
    }
    for (let i = 0; i < 30; i++) { g.fillStyle = `rgba(${R() < 0.5 ? '140,150,110' : '40,40,48'},0.2)`; g.fillRect(R() * N, R() * N, 6 + R() * 14, 4 + R() * 10); }
    speckle(g, null, N, N, R, 2500, 0.05);
    return { map: tex(c), normalMap: normalFrom(hc, 2.5) };
  });
}

// 붉게 칠한 나무: 결이 비치는 칠
export function hdWood(base = [150, 44, 34]) {
  return cached('wood' + base, () => {
    const N = 256, R = mulberry32(base[0]);
    const [c, g] = canvas(N);
    g.fillStyle = rgb(base); g.fillRect(0, 0, N, N);
    for (let i = 0; i < 90; i++) {
      const y = R() * N, w = 1 + R() * 3;
      g.fillStyle = `rgba(${R() < 0.5 ? '0,0,0' : '255,230,200'},${0.05 + R() * 0.07})`;
      g.beginPath();
      g.moveTo(0, y);
      for (let x = 0; x <= N; x += 16) g.lineTo(x, y + Math.sin(x * 0.05 + i) * 2);
      g.lineTo(N, y + w); g.lineTo(0, y + w); g.fill();
    }
    speckle(g, null, N, N, R, 1500, 0.05);
    return { map: tex(c) };
  });
}

// 회벽: 흰 바탕에 은은한 얼룩
export function hdPlaster() {
  return cached('plaster', () => {
    const N = 256, R = mulberry32(44);
    const [c, g] = canvas(N);
    g.fillStyle = '#e8e0cc'; g.fillRect(0, 0, N, N);
    for (let i = 0; i < 50; i++) {
      const x = R() * N, y = R() * N, r = 10 + R() * 40;
      const rg = g.createRadialGradient(x, y, 0, x, y, r);
      rg.addColorStop(0, R() < 0.6 ? 'rgba(150,130,100,0.1)' : 'rgba(255,255,255,0.15)'); rg.addColorStop(1, 'rgba(0,0,0,0)');
      g.fillStyle = rg; g.fillRect(x - r, y - r, r * 2, r * 2);
    }
    speckle(g, null, N, N, R, 2000, 0.04);
    return { map: tex(c) };
  });
}

// 솔잎 뭉치: 짙은 초록 바탕에 바깥으로 뻗는 솔잎 결 (분재 소나무의 납작한 잎층)
export function hdNeedle(base = [52, 92, 54], snowy = false) {
  return cached('needle' + base + snowy, () => {
    const N = 256, R = mulberry32(77);
    const [c, g] = canvas(N);
    const [hc, hg] = canvas(N);
    g.fillStyle = rgb(base, 0.7); g.fillRect(0, 0, N, N);
    hg.fillStyle = '#606060'; hg.fillRect(0, 0, N, N);
    for (let i = 0; i < 2600; i++) {
      const x = R() * N, y = R() * N, a = R() * Math.PI * 2, l = 5 + R() * 9;
      const k = 0.75 + R() * 0.7;
      g.strokeStyle = snowy && R() < 0.35 ? 'rgba(240,246,252,0.9)' : rgb(base, k, R() < 0.15 ? 25 : 0);
      g.lineWidth = 1.2;
      g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); g.stroke();
      hg.strokeStyle = `rgba(255,255,255,${0.3 * R()})`;
      hg.beginPath(); hg.moveTo(x, y); hg.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); hg.stroke();
    }
    return { map: tex(c), normalMap: normalFrom(hc, 1.6) };
  });
}

// 나무껍질: 세로로 갈라진 결
export function hdBark() {
  return cached('bark', () => {
    const N = 256, R = mulberry32(12);
    const [c, g] = canvas(N);
    const [hc, hg] = canvas(N);
    g.fillStyle = '#6a4a36'; g.fillRect(0, 0, N, N);
    hg.fillStyle = '#909090'; hg.fillRect(0, 0, N, N);
    for (let i = 0; i < 140; i++) {
      const x = R() * N, w = 2 + R() * 6, k = R();
      g.fillStyle = k < 0.5 ? 'rgba(30,20,14,0.35)' : 'rgba(150,120,96,0.25)';
      hg.fillStyle = k < 0.5 ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.3)';
      for (const ox of [-N, 0, N]) { g.fillRect(x + ox, 0, w, N); hg.fillRect(x + ox, 0, w, N); }
    }
    for (let i = 0; i < 400; i++) { g.fillStyle = `rgba(0,0,0,${0.15 * R()})`; g.fillRect(R() * N, R() * N, 3 + R() * 10, 2); }
    return { map: tex(c), normalMap: normalFrom(hc, 2.4) };
  });
}

// 깃발: 테두리 무늬(불꽃 테 또는 금색 띠) + 가운데 큰 붓글씨
export function hdBanner(kind) {
  return cached('banner' + kind, () => {
    const W = 160, H = 200;
    const [c, g] = canvas(W, H);
    const S = {
      red: { bg: '#b02a24', border: '#e8b030', ink: '#f6cc48', glyph: '령', inner: '#7a1a16' },
      white: { bg: '#f0ead8', border: '#d8a028', ink: '#1a1a1a', glyph: '용', inner: '#f0ead8', flame: '#c0302a' },
      navy: { bg: '#22305e', border: '#c8342c', ink: '#efe6d2', glyph: '무', inner: '#22305e' },
    }[kind] || {};
    g.fillStyle = S.border; g.fillRect(0, 0, W, H);
    g.fillStyle = S.bg; g.fillRect(12, 12, W - 24, H - 24);
    if (S.flame) {
      // 불꽃 테: 바깥 두 변에 물결 무늬
      g.fillStyle = S.flame;
      for (let y = 0; y < H; y += 16) { g.beginPath(); g.moveTo(W, y); g.quadraticCurveTo(W - 22, y + 8, W, y + 16); g.fill(); }
      for (let x = 0; x < W; x += 16) { g.beginPath(); g.moveTo(x, H); g.quadraticCurveTo(x + 8, H - 22, x + 16, H); g.fill(); }
    } else {
      g.strokeStyle = S.border; g.lineWidth = 3; g.strokeRect(24, 24, W - 48, H - 48);
      g.fillStyle = S.inner; g.fillRect(27, 27, W - 54, H - 54);
      // 모서리 장식
      g.fillStyle = S.border;
      for (const [x, y] of [[24, 24], [W - 24, 24], [24, H - 24], [W - 24, H - 24]]) { g.beginPath(); g.arc(x, y, 7, 0, 7); g.fill(); }
    }
    g.fillStyle = S.ink;
    g.font = `900 92px "WolhaSerif","Noto Serif KR","Noto Serif CJK KR","Batang",serif`;
    g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText(S.glyph, W / 2, H / 2 + 4);
    // 천 결
    const R = mulberry32(9);
    for (let i = 0; i < 900; i++) { g.fillStyle = `rgba(${R() < 0.5 ? 0 : 255},${R() < 0.5 ? 0 : 255},${R() < 0.5 ? 0 : 255},0.03)`; g.fillRect(R() * W, R() * H, 1, 3); }
    const t = tex(c);
    t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
    return { map: t };
  });
}

// 바닥 문양: 마름모 테두리 안에 연꽃 (돋을새김 → 노멀맵)
export function hdMedallion() {
  return cached('medal', () => {
    const N = 512;
    const [c, g] = canvas(N);
    const [hc, hg] = canvas(N);
    g.fillStyle = '#b4ac98'; g.fillRect(0, 0, N, N);
    hg.fillStyle = '#808080'; hg.fillRect(0, 0, N, N);
    const both = (fn) => { fn(g, true); fn(hg, false); };
    // 바깥 테두리
    both((x, col) => { x.lineWidth = 14; x.strokeStyle = col ? '#9a927e' : '#c0c0c0'; x.strokeRect(14, 14, N - 28, N - 28); });
    // 마름모 두 겹
    for (const [r, w] of [[220, 12], [190, 6]]) both((x, col) => {
      x.lineWidth = w; x.strokeStyle = col ? '#968e7a' : '#d0d0d0';
      x.beginPath(); x.moveTo(N / 2, N / 2 - r); x.lineTo(N / 2 + r, N / 2); x.lineTo(N / 2, N / 2 + r); x.lineTo(N / 2 - r, N / 2); x.closePath(); x.stroke();
    });
    // 연꽃잎 여덟 장
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      both((x, col) => {
        x.save(); x.translate(N / 2, N / 2); x.rotate(a);
        x.beginPath(); x.moveTo(0, -28); x.bezierCurveTo(40, -70, 30, -130, 0, -150); x.bezierCurveTo(-30, -130, -40, -70, 0, -28);
        if (col) { x.fillStyle = '#a69e8a'; x.fill(); x.lineWidth = 3; x.strokeStyle = '#8a8270'; x.stroke(); }
        else { x.fillStyle = '#d8d8d8'; x.fill(); x.lineWidth = 4; x.strokeStyle = '#606060'; x.stroke(); }
        x.restore();
      });
    }
    both((x, col) => { x.beginPath(); x.arc(N / 2, N / 2, 32, 0, 7); x.fillStyle = col ? '#a49c88' : '#e8e8e8'; x.fill(); });
    // 모서리 구름 소용돌이
    for (const [cx, cy] of [[70, 70], [N - 70, 70], [70, N - 70], [N - 70, N - 70]]) both((x, col) => {
      x.lineWidth = 6; x.strokeStyle = col ? '#968e7a' : '#d0d0d0';
      x.beginPath(); for (let t = 0; t < 14; t += 0.2) { const r = 4 + t * 2.4; x.lineTo(cx + Math.cos(t) * r, cy + Math.sin(t) * r); } x.stroke();
    });
    const R = mulberry32(3);
    speckle(g, hg, N, N, R, 12000, 0.06);
    const hb = canvas(N); hb[1].filter = 'blur(2px)'; hb[1].drawImage(hc, 0, 0);
    const t = tex(c);
    return { map: t, normalMap: normalFrom(hb[0], 3) };
  });
}

// 눈밭: 밝은 흰 바탕 + 아주 완만한 굴곡과 반짝임 (넓게 깔아도 무늬가 안 보이게)
export function hdSnow() {
  return cached('snow', () => {
    const N = 512, R = mulberry32(8);
    const [c, g] = canvas(N);
    const [hc, hg] = canvas(N);
    g.fillStyle = '#eef3f9'; g.fillRect(0, 0, N, N);
    hg.fillStyle = '#808080'; hg.fillRect(0, 0, N, N);
    for (let i = 0; i < 26; i++) {
      const x = R() * N, y = R() * N, r = 60 + R() * 120;
      for (const [cx, cg] of [[g, true], [hg, false]]) {
        const rg = cx.createRadialGradient(x, y, 0, x, y, r);
        rg.addColorStop(0, cg ? (R() < 0.6 ? 'rgba(255,255,255,0.35)' : 'rgba(190,205,230,0.14)') : (R() < 0.5 ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)'));
        rg.addColorStop(1, 'rgba(0,0,0,0)');
        for (const ox of [-N, 0, N]) for (const oy of [-N, 0, N]) { cx.fillStyle = rg; cx.save(); cx.translate(ox, oy); cx.fillRect(x - r, y - r, r * 2, r * 2); cx.restore(); }
      }
    }
    for (let i = 0; i < 2500; i++) { g.fillStyle = `rgba(255,255,255,${0.6 * R()})`; g.fillRect(R() * N, R() * N, 1, 1); }
    for (let i = 0; i < 600; i++) { g.fillStyle = `rgba(150,170,200,${0.12 * R()})`; g.fillRect(R() * N, R() * N, 2, 1); }
    const hb = canvas(N); hb[1].filter = 'blur(6px)'; hb[1].drawImage(hc, 0, 0);
    return { map: tex(c), normalMap: normalFrom(hb[0], 0.9) };
  });
}

// 단청 띠 (창방·평방): 녹청 바탕 + 양끝 머리초(연꽃·석류 문양) + 가는 색띠. 가로 4유닛 × 띠 높이 하나
export function hdDancheong() {
  return cached('dancheong', () => {
    const W = 1024, H = 128, R = mulberry32(2);
    const [c, g] = canvas(W, H);
    const col = { g: '#2e7a62', g2: '#225c4a', b: '#2c5296', r: '#b0342c', w: '#ece4ce', y: '#e2b640', o: '#d8742a', k: '#1e2a28' };
    g.fillStyle = col.g; g.fillRect(0, 0, W, H);
    // 위아래 테두리 띠 (빨강·흰·녹)
    for (const [y, h, k] of [[0, 8, 'r'], [8, 4, 'w'], [12, 6, 'g2'], [H - 8, 8, 'r'], [H - 12, 4, 'w'], [H - 18, 6, 'g2']]) { g.fillStyle = col[k]; g.fillRect(0, y, W, h); }
    // 머리초: 한 칸(256px = 1유닛)마다 가운데 연꽃, 양옆 겹 휘(파도) 무늬
    for (let k = 0; k < 4; k++) {
      const cx = k * 256 + 128, cy = H / 2;
      for (const [rx, ry, kk] of [[86, 40, 'w'], [76, 34, 'b'], [62, 28, 'w'], [52, 23, 'r'], [38, 17, 'y'], [22, 10, 'o'], [10, 5, 'w']]) {
        g.fillStyle = col[kk]; g.beginPath(); g.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2); g.fill();
      }
      // 연꽃잎 8장
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        g.save(); g.translate(cx, cy); g.scale(1, 0.46); g.rotate(a);
        g.fillStyle = i % 2 ? col.r : col.b;
        g.beginPath(); g.moveTo(0, -24); g.quadraticCurveTo(14, -48, 0, -64); g.quadraticCurveTo(-14, -48, 0, -24); g.fill();
        g.restore();
      }
      // 휘: 양옆으로 겹친 물결 띠
      for (const s of [-1, 1]) for (let j = 0; j < 4; j++) {
        const x = cx + s * (96 + j * 9);
        g.strokeStyle = [col.w, col.b, col.w, col.r][j]; g.lineWidth = 5;
        g.beginPath(); g.moveTo(x, 20); g.quadraticCurveTo(x + s * 10, cy, x, H - 20); g.stroke();
      }
    }
    for (let i = 0; i < 1500; i++) { g.fillStyle = `rgba(0,0,0,${0.05 * R()})`; g.fillRect(R() * W, R() * H, 2, 2); }
    return { map: tex(c) };
  });
}

// 처마 밑: 나란한 서까래(녹청)와 끝의 붉은·흰 마구리
export function hdRafter() {
  return cached('rafter', () => {
    const N = 256;
    const [c, g] = canvas(N);
    const [hc, hg] = canvas(N);
    g.fillStyle = '#1e3a30'; g.fillRect(0, 0, N, N);
    hg.fillStyle = '#303030'; hg.fillRect(0, 0, N, N);
    const n = 8, w = N / n;
    for (let i = 0; i < n; i++) {
      const x = i * w + w * 0.15, ww = w * 0.7;
      const gr = g.createLinearGradient(x, 0, x + ww, 0);
      gr.addColorStop(0, '#2a6a52'); gr.addColorStop(0.5, '#3a8a6a'); gr.addColorStop(1, '#245a46');
      g.fillStyle = gr; g.fillRect(x, 0, ww, N);
      g.fillStyle = '#e8dcc0'; g.fillRect(x, N * 0.48, ww, 6);
      g.fillStyle = '#b03028'; g.fillRect(x, N * 0.48 + 6, ww, 6);
      const hgr = hg.createLinearGradient(x, 0, x + ww, 0);
      hgr.addColorStop(0, '#606060'); hgr.addColorStop(0.5, '#f0f0f0'); hgr.addColorStop(1, '#606060');
      hg.fillStyle = hgr; hg.fillRect(x, 0, ww, N);
    }
    return { map: tex(c), normalMap: normalFrom(hc, 2) };
  });
}

// 꽃살문: 녹청 문틀, 비스듬히 엇갈린 살 사이 꽃 매듭, 창호지, 아래 궁판. glow면 창호지만 흰 발광 마스크
export function hdLattice(glow = false) {
  return cached('lattice' + glow, () => {
    const W = 256, H = 384;
    const [c, g] = canvas(W, H);
    const frame = glow ? '#000' : '#2c6854', frameD = glow ? '#000' : '#1e4a3c';
    g.fillStyle = glow ? '#ffd8a0' : '#e4d8b8'; g.fillRect(0, 0, W, H);
    // 창호지 은은한 얼룩
    if (!glow) for (let i = 0; i < 30; i++) { g.fillStyle = 'rgba(160,140,100,0.06)'; g.beginPath(); g.arc(Math.random() * W, Math.random() * H * 0.72, 10 + Math.random() * 20, 0, 7); g.fill(); }
    const top = H * 0.74;
    g.save(); g.beginPath(); g.rect(14, 14, W - 28, top - 20); g.clip();
    g.strokeStyle = glow ? frame : '#3a7a62'; g.lineWidth = 4;
    for (let k = -H; k < W + H; k += 34) {
      g.beginPath(); g.moveTo(k, 0); g.lineTo(k + H, H); g.stroke();
      g.beginPath(); g.moveTo(k, 0); g.lineTo(k - H, H); g.stroke();
    }
    // 살이 만나는 곳마다 꽃
    if (!glow) for (let y = 0; y < top; y += 17) for (let x = (y / 17) % 2 ? 17 : 0; x < W; x += 34) {
      g.fillStyle = '#d0a040'; g.beginPath(); g.arc(x, y, 5, 0, 7); g.fill();
      g.fillStyle = '#b03a2c'; g.beginPath(); g.arc(x, y, 2.2, 0, 7); g.fill();
    }
    g.restore();
    // 문틀과 궁판
    g.fillStyle = frameD;
    g.fillRect(0, 0, W, 14); g.fillRect(0, 0, 14, H); g.fillRect(W - 14, 0, 14, H); g.fillRect(0, top - 6, W, 12); g.fillRect(0, H - 14, W, 14);
    g.fillStyle = glow ? '#000' : '#7a3a2a'; g.fillRect(14, top + 6, W - 28, H - top - 20);
    if (!glow) { g.strokeStyle = '#c8963a'; g.lineWidth = 3; g.strokeRect(30, top + 20, W - 60, H - top - 48); }
    const t = tex(c);
    t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
    return { map: t };
  });
}

// 답도(계단 가운데 돌판): 구름 속 봉황 대신 겹구름 돋을새김
export function hdCarving() {
  return cached('carving', () => {
    const W = 256, H = 512, R = mulberry32(4);
    const [c, g] = canvas(W, H);
    const [hc, hg] = canvas(W, H);
    g.fillStyle = '#bab29e'; g.fillRect(0, 0, W, H);
    hg.fillStyle = '#707070'; hg.fillRect(0, 0, W, H);
    for (const [x, col] of [[g, '#a49c88'], [hg, '#c0c0c0']]) { x.lineWidth = 12; x.strokeStyle = col; x.strokeRect(10, 10, W - 20, H - 20); }
    for (let i = 0; i < 7; i++) {
      const cx = 60 + R() * 136, cy = 50 + i * 66 + R() * 10;
      for (const [x, col, lw] of [[g, '#968e7a', 7], [hg, '#e0e0e0', 9]]) {
        x.lineWidth = lw; x.strokeStyle = col; x.beginPath();
        for (let t = 0; t < 10; t += 0.2) { const r = 3 + t * 3.2; x.lineTo(cx + Math.cos(t) * r, cy + Math.sin(t) * r * 0.8); }
        x.stroke();
        x.beginPath(); x.moveTo(cx - 60, cy + 26); x.bezierCurveTo(cx - 20, cy + 6, cx + 20, cy + 46, cx + 70, cy + 22); x.stroke();
      }
    }
    speckle(g, hg, W, H, R, 6000, 0.05);
    const hb = canvas(W, H); hb[1].filter = 'blur(2px)'; hb[1].drawImage(hc, 0, 0);
    const t = tex(c);
    return { map: t, normalMap: normalFrom(hb[0], 3) };
  });
}

// 옷감 결: 가는 날실·씨실이 엇갈린 평직 + 살짝 주름 (노멀맵만)
export function hdFabric() {
  return cached('fabric', () => {
    const N = 256;
    const [h, g] = canvas(N);
    const img = g.createImageData(N, N);
    const R = mulberry32(77);
    const wob = Array.from({ length: N }, () => R());
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
      const cx = Math.floor(x / 4), cy = Math.floor(y / 4);
      const over = (cx + cy) % 2 === 0;
      const fx = (x % 4) / 4, fy = (y % 4) / 4;
      // 실 한 가닥의 둥근 단면
      const v = over ? Math.sin(fy * Math.PI) : Math.sin(fx * Math.PI);
      const fold = 0.5 + 0.5 * Math.sin((y / N) * Math.PI * 4 + wob[x] * 0.6);
      const k = Math.round((0.35 + 0.45 * v * (0.85 + 0.15 * wob[(x * 7 + y) % N]) + 0.2 * fold) * 255);
      const i = (y * N + x) * 4;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = k; img.data[i + 3] = 255;
    }
    g.putImageData(img, 0, 0);
    const n = tex(normalFrom(h, 1.6), false);
    n.repeat.set(3, 3);
    return n;
  });
}
