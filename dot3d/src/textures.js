// 모든 텍스처는 캔버스에서 절차적으로 그린 도트 텍스처 (1 유닛 = 16 텍셀 기준)
import * as THREE from 'three';
import { mulberry32 } from './util.js';

export const TEXELS_PER_UNIT = 16;

function painter(w, h) {
  const data = new Uint8ClampedArray(w * h * 4);
  const wrap = (v, m) => ((v % m) + m) % m;
  return {
    w, h, data,
    set(x, y, c, a = 255) {
      x = wrap(Math.round(x), w); y = wrap(Math.round(y), h);
      const i = (y * w + x) * 4;
      data[i] = c[0]; data[i + 1] = c[1]; data[i + 2] = c[2]; data[i + 3] = a;
    },
    get(x, y) {
      x = wrap(Math.round(x), w); y = wrap(Math.round(y), h);
      const i = (y * w + x) * 4;
      return [data[i], data[i + 1], data[i + 2]];
    },
    rect(x, y, rw, rh, c) {
      for (let i = 0; i < rw; i++) for (let j = 0; j < rh; j++) this.set(x + i, y + j, c);
    },
  };
}

function toTexture(p, { repeat = true, linear = false } = {}) {
  const c = document.createElement('canvas');
  c.width = p.w; c.height = p.h;
  c.getContext('2d').putImageData(new ImageData(p.data, p.w, p.h), 0, 0);
  return canvasToTexture(c, { repeat, linear });
}

function canvasToTexture(c, { repeat = true, linear = false } = {}) {
  const t = new THREE.CanvasTexture(c);
  t.magFilter = linear ? THREE.LinearFilter : THREE.NearestFilter;
  t.minFilter = linear ? THREE.LinearFilter : THREE.NearestFilter;
  t.generateMipmaps = false;
  t.colorSpace = linear ? THREE.NoColorSpace : THREE.SRGBColorSpace;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

const mul = (c, f) => [c[0] * f, c[1] * f, c[2] * f];
const add = (c, v) => [c[0] + v, c[1] + v, c[2] + v];
const mix = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];

const cache = new Map();
function cached(key, fn) {
  if (!cache.has(key)) cache.set(key, fn());
  return cache.get(key);
}

// 불규칙한 박석 바닥: 타일링되는 보로노이 셀 (둥근 사각 거리) (64x64 = 4x4 유닛)
export function stoneFloorTex(seed = 7, base = [176, 168, 148], cells = 15) {
  return cached('floor' + seed + base + cells, () => {
    const N = 64;
    const p = painter(N, N);
    const R = mulberry32(seed);
    const pts = [];
    // 지터 격자로 고르게 분포
    const g = Math.round(Math.sqrt(cells));
    for (let i = 0; i < g; i++) for (let j = 0; j < g; j++) {
      const v = (R() - 0.5) * 30, warm = (R() - 0.5) * 12;
      pts.push({
        x: ((i + 0.2 + R() * 0.6) / g) * N, y: ((j + 0.2 + R() * 0.6) / g) * N,
        sx: 0.75 + R() * 0.6, sy: 0.75 + R() * 0.6,
        c: [base[0] + v + warm, base[1] + v, base[2] + v - warm],
        moss: R() < 0.15,
      });
    }
    const dist = (a, x, y) => {
      let dx = Math.abs(x - a.x), dy = Math.abs(y - a.y);
      dx = Math.min(dx, N - dx) * a.sx; dy = Math.min(dy, N - dy) * a.sy;
      return Math.max(dx, dy) * 0.75 + (dx + dy) * 0.25;
    };
    const near = (x, y) => {
      let b = null, d1 = 1e9, d2 = 1e9;
      for (const a of pts) {
        const d = dist(a, x, y);
        if (d < d1) { d2 = d1; d1 = d; b = a; } else if (d < d2) d2 = d;
      }
      return { b, gap: d2 - d1 };
    };
    for (let x = 0; x < N; x++) for (let y = 0; y < N; y++) {
      const { b, gap } = near(x, y);
      let c = b.c;
      const n = R();
      if (n < 0.07) c = add(c, -12); else if (n < 0.12) c = add(c, 8);
      if (gap < 1.1) {
        c = mul(b.c, 0.66);
        if (b.moss && R() < 0.5) c = [112, 124, 86];
      } else if (gap < 2.2) {
        // 위/왼쪽 가장자리는 밝게, 아래/오른쪽은 어둡게 (입체감)
        const up = near(x, y - 2).b !== b || near(x - 2, y).b !== b;
        c = up ? add(b.c, 12) : mul(b.c, 0.88);
      }
      p.set(x, y, c);
    }
    return toTexture(p);
  });
}

// 어도: 큰 정사각 판석
export function pathStoneTex() {
  return cached('path', () => {
    const p = painter(64, 64);
    const R = mulberry32(31);
    const base = [158, 156, 148];
    for (let row = 0; row < 4; row++) {
      const off = row % 2 ? 8 : 0;
      for (let col = 0; col < 4; col++) {
        const v = (R() - 0.5) * 20;
        const c = add(base, v);
        for (let i = 0; i < 16; i++) for (let j = 0; j < 16; j++) {
          let k = c;
          const n = R();
          if (n < 0.06) k = add(c, -12); else if (n < 0.1) k = add(c, 8);
          if (i === 15 || j === 15) k = mul(c, 0.7);
          else if (i === 0 || j === 0) k = add(c, 10);
          p.set(col * 16 + i + off, row * 16 + j, k);
        }
      }
    }
    return toTexture(p);
  });
}

// 석축 벽면 (32x32 = 2x2 유닛)
export function stoneBlockTex(base = [168, 160, 142]) {
  return cached('block' + base, () => {
    const p = painter(32, 32);
    const R = mulberry32(5);
    for (let row = 0; row < 4; row++) {
      const off = row % 2 ? 8 : 0;
      for (let col = 0; col < 2; col++) {
        const c = add(base, (R() - 0.5) * 22);
        for (let i = 0; i < 16; i++) for (let j = 0; j < 8; j++) {
          let k = c;
          if (R() < 0.08) k = add(c, -10);
          if (i === 15 || j === 7) k = mul(c, 0.55);
          else if (j === 0) k = add(c, 16);
          p.set(col * 16 + i + off, row * 8 + j, k);
        }
      }
    }
    return toTexture(p);
  });
}

export function grassTex(base = [92, 132, 64]) {
  return cached('grass' + base, () => {
    const p = painter(32, 32);
    const R = mulberry32(11);
    for (let i = 0; i < 32; i++) for (let j = 0; j < 32; j++) {
      const n = R();
      let c = add(base, (R() - 0.5) * 14);
      if (n < 0.12) c = mul(base, 0.78); else if (n < 0.2) c = mul(base, 1.14);
      p.set(i, j, c);
    }
    for (let k = 0; k < 7; k++) {
      const x = Math.floor(R() * 32), y = Math.floor(R() * 32);
      const fc = R() < 0.5 ? [236, 230, 200] : [232, 200, 92];
      p.set(x, y, fc);
    }
    return toTexture(p);
  });
}

export function dirtTex() {
  return cached('dirt', () => {
    const p = painter(32, 32);
    const R = mulberry32(13);
    const base = [96, 104, 70];
    for (let i = 0; i < 32; i++) for (let j = 0; j < 32; j++) {
      const n = R();
      let c = add(base, (R() - 0.5) * 12);
      if (n < 0.15) c = [88, 86, 66]; else if (n < 0.22) c = mul(base, 1.15);
      p.set(i, j, c);
    }
    return toTexture(p);
  });
}

// 붉은 단청 기둥/목재
export function woodTex(base = [150, 44, 34]) {
  return cached('wood' + base, () => {
    const p = painter(16, 16);
    const R = mulberry32(17);
    for (let i = 0; i < 16; i++) {
      const lineV = (R() - 0.5) * 16;
      for (let j = 0; j < 16; j++) {
        let c = add(base, lineV + (R() - 0.5) * 6);
        if (i % 5 === 0 && R() < 0.6) c = mul(base, 0.84);
        p.set(i, j, c);
      }
    }
    return toTexture(p);
  });
}

export function darkWoodTex() { return woodTex([92, 60, 40]); }

// 기와 (세로 골)
export function roofTileTex(base = [84, 90, 98]) {
  return cached('roof' + base, () => {
    const p = painter(32, 32);
    const R = mulberry32(19);
    for (let i = 0; i < 32; i++) for (let j = 0; j < 32; j++) {
      const ci = i % 4;
      let c;
      if (ci === 0) c = mul(base, 0.62);           // 골
      else if (ci === 1) c = mul(base, 1.0);
      else if (ci === 2) c = mul(base, 1.22);      // 수키와 하이라이트
      else c = mul(base, 1.06);
      if (j % 8 === 7) c = mul(c, 0.78);           // 기와 끝 단
      else if (j % 8 === 0 && ci !== 0) c = mul(c, 1.08);
      c = add(c, (R() - 0.5) * 6);
      p.set(i, j, c);
    }
    return toTexture(p);
  });
}

// 단청 띠 (64x16): 녹청 바탕에 꽃 무늬
export function dancheongTex() {
  return cached('dancheong', () => {
    const p = painter(64, 16);
    const G = [46, 122, 98], G2 = [34, 92, 76], B = [44, 82, 150], Rr = [176, 52, 44], W = [236, 228, 206], Y = [226, 182, 64];
    for (let i = 0; i < 64; i++) for (let j = 0; j < 16; j++) {
      let c = G;
      if (j === 0 || j === 15) c = Rr;
      else if (j === 1 || j === 14) c = W;
      else if (j === 2 || j === 13) c = G2;
      p.set(i, j, c);
    }
    for (let k = 0; k < 4; k++) {
      const cx = k * 16 + 8, cy = 8;
      for (let dx = -5; dx <= 5; dx++) for (let dy = -4; dy <= 4; dy++) {
        const d = Math.abs(dx) / 5 + Math.abs(dy) / 4;
        if (d <= 1) p.set(cx + dx, cy + dy, d > 0.75 ? W : d > 0.5 ? B : d > 0.25 ? Rr : Y);
      }
      for (let dy = 3; dy <= 12; dy++) { p.set(k * 16, dy, W); p.set(k * 16 + 1, dy, B); }
    }
    return toTexture(p);
  });
}

// 창호 (격자문). glow=true 이면 창호지 부분만 흰색인 발광 마스크
export function latticeTex(glow = false) {
  return cached('lattice' + glow, () => {
    const p = painter(32, 48);
    const frame = glow ? [0, 0, 0] : [44, 104, 84];
    const frameDark = glow ? [0, 0, 0] : [30, 70, 58];
    const paper = glow ? [255, 214, 150] : [226, 216, 186];
    const paperShade = glow ? [220, 170, 110] : [204, 192, 160];
    for (let i = 0; i < 32; i++) for (let j = 0; j < 48; j++) {
      let c = paper;
      if (j > 36) c = glow ? [0, 0, 0] : [120, 60, 44]; // 아래 궁판
      if (j === 36) c = frameDark;
      const gi = i % 5, gj = j % 6;
      if (j < 36 && (gi === 0 || gj === 0)) c = frame;
      if (j < 36 && gi === 4) c = mix(c, paperShade, glow ? 0.3 : 0.5);
      if (i < 2 || i > 29 || j < 2 || j > 45) c = frameDark;
      p.set(i, j, c);
    }
    return toTexture(p, { repeat: false });
  });
}

// 흰 회벽 + 붉은 테 (행각 뒷벽)
export function plasterTex() {
  return cached('plaster', () => {
    const p = painter(32, 32);
    const R = mulberry32(23);
    for (let i = 0; i < 32; i++) for (let j = 0; j < 32; j++) {
      let c = add([226, 220, 204], (R() - 0.5) * 8);
      if (j > 24) c = add([150, 140, 124], (R() - 0.5) * 12);
      if (j === 24 || j === 2 || i === 0 || i === 31) c = [156, 52, 40];
      p.set(i, j, c);
    }
    return toTexture(p);
  });
}

// 깃발 무늬
export function bannerTex(kind) {
  return cached('banner' + kind, () => {
    const W = 32, H = 40;
    const c = document.createElement('canvas');
    c.width = W; c.height = H;
    const g = c.getContext('2d');
    let bg, border, glyphCol, glyph, inner;
    if (kind === 'red') { bg = '#b8302a'; border = '#e8b030'; glyphCol = '#f0c040'; glyph = '令'; inner = '#7a1c18'; }
    else if (kind === 'white') { bg = '#ece6d4'; border = '#e0a828'; glyphCol = '#1a1a1a'; glyph = '龍'; inner = '#ece6d4'; }
    else { bg = '#23305e'; border = '#c8342c'; glyphCol = '#e8e0d0'; glyph = '武'; inner = '#23305e'; }
    g.fillStyle = border; g.fillRect(0, 0, W, H);
    g.fillStyle = bg; g.fillRect(3, 3, W - 6, H - 6);
    if (kind === 'white') {
      // 불꽃 테두리
      g.fillStyle = '#c03028';
      for (let y = 0; y < H; y += 4) { g.fillRect(W - 3, y, 3, 2); g.fillRect(0, y + 2, 2, 2); }
      for (let x = 0; x < W; x += 4) { g.fillRect(x, H - 3, 2, 3); }
    } else if (kind === 'red') {
      g.fillStyle = inner; g.fillRect(6, 6, W - 12, H - 12);
      g.fillStyle = border;
      g.fillRect(6, 6, W - 12, 1); g.fillRect(6, H - 7, W - 12, 1); g.fillRect(6, 6, 1, H - 12); g.fillRect(W - 7, 6, 1, H - 12);
    }
    g.fillStyle = glyphCol;
    g.font = `bold 20px "Noto Serif CJK KR","Noto Sans CJK KR","Malgun Gothic","Apple SD Gothic Neo",serif`;
    g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText(glyph, W / 2, H / 2 + 1);
    snapToPalette(g, W, H, [bg, border, glyphCol, inner, '#c03028']);
    return canvasToTexture(c, { repeat: false });
  });
}

// 안티앨리어싱된 픽셀을 팔레트의 가장 가까운 색으로 스냅해서 도트 느낌 유지
function snapToPalette(g, W, H, palette) {
  const pal = palette.map((h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)]);
  const img = g.getImageData(0, 0, W, H);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    let best = pal[0], bd = 1e9;
    for (const c of pal) {
      const dd = (d[i] - c[0]) ** 2 + (d[i + 1] - c[1]) ** 2 + (d[i + 2] - c[2]) ** 2;
      if (dd < bd) { bd = dd; best = c; }
    }
    d[i] = best[0]; d[i + 1] = best[1]; d[i + 2] = best[2]; d[i + 3] = 255;
  }
  g.putImageData(img, 0, 0);
}

// 큰 북 몸통: 청색 바탕의 용·구름 무늬
export function drumSideTex() {
  return cached('drumside', () => {
    const p = painter(64, 32);
    const R = mulberry32(29);
    const base = [40, 92, 150];
    for (let i = 0; i < 64; i++) for (let j = 0; j < 32; j++) {
      let c = add(base, (R() - 0.5) * 8);
      const s = Math.sin(i * 0.4 + Math.sin(j * 0.35) * 2.2) + Math.sin(j * 0.5 + i * 0.12);
      if (s > 1.35) c = [196, 62, 50];
      else if (s > 1.1) c = [236, 220, 180];
      else if (s < -1.45) c = [70, 150, 110];
      if (j < 3 || j > 28) c = [180, 48, 40];
      if (j === 3 || j === 28) c = [226, 186, 70];
      p.set(i, j, c);
    }
    return toTexture(p);
  });
}

// 북 가죽면: 삼태극
export function drumFaceTex() {
  return cached('drumface', () => {
    const p = painter(32, 32);
    const cols = [[196, 52, 44], [40, 80, 160], [228, 186, 60]];
    for (let i = 0; i < 32; i++) for (let j = 0; j < 32; j++) {
      const x = i - 15.5, y = j - 15.5;
      const r = Math.hypot(x, y);
      let c = [222, 206, 170];
      if (r > 14.5) c = [120, 70, 40];
      else if (r > 13.5) c = [226, 186, 70];
      else if (r < 8) {
        const a = Math.atan2(y, x) + r * 0.22;
        const k = Math.floor(((a / (Math.PI * 2)) % 1 + 1) % 1 * 3);
        c = cols[k];
      }
      p.set(i, j, c);
    }
    return toTexture(p, { repeat: false });
  });
}

// 박석 위 조각 문양 (보상 문양, 64x64)
export function medallionTex() {
  return cached('medallion', () => {
    const p = painter(64, 64);
    const R = mulberry32(37);
    const base = [170, 164, 148];
    for (let i = 0; i < 64; i++) for (let j = 0; j < 64; j++) {
      const x = i - 31.5, y = j - 31.5;
      let c = add(base, (R() - 0.5) * 10);
      const dm = Math.abs(x) + Math.abs(y);
      const sq = Math.max(Math.abs(x), Math.abs(y));
      const r = Math.hypot(x, y);
      const ang = Math.atan2(y, x);
      const engr = mul(base, 0.68), high = add(base, 18);
      if (sq > 30) c = engr;
      else if (sq > 29) c = high;
      if (Math.abs(dm - 29) < 0.8) c = engr;
      if (Math.abs(dm - 27) < 0.8) c = high;
      // 연꽃 꽃잎
      const petal = 9 + 5 * Math.abs(Math.cos(ang * 4));
      if (Math.abs(r - petal) < 0.8) c = engr;
      if (r < petal - 0.8 && r > petal - 2) c = high;
      if (r < 4) c = Math.abs(r - 3) < 0.8 ? engr : add(base, 8);
      if (Math.abs(r - 19) < 0.7 && Math.abs(Math.sin(ang * 8)) > 0.4) c = engr;
      p.set(i, j, c);
    }
    return toTexture(p, { repeat: false });
  });
}

// 답도 (계단 가운데 봉황 조각 판)
export function stairCarvingTex() {
  return cached('carving', () => {
    const p = painter(16, 32);
    const base = [178, 170, 152];
    for (let i = 0; i < 16; i++) for (let j = 0; j < 32; j++) {
      let c = base;
      if (i === 0 || i === 15 || j === 0 || j === 31) c = mul(base, 0.65);
      else if (i === 1 || j === 1) c = add(base, 16);
      const x = i - 7.5, y = j - 15.5;
      const s = Math.sin(x * 0.9) * 3 + Math.cos(y * 0.5) * 2;
      if (Math.abs(x) < 5 && Math.abs(y) < 12 && Math.abs(s) < 0.6) c = mul(base, 0.7);
      p.set(i, j, c);
    }
    return toTexture(p, { repeat: false });
  });
}

export function barkTex() {
  return cached('bark', () => {
    const p = painter(16, 16);
    const R = mulberry32(41);
    for (let i = 0; i < 16; i++) for (let j = 0; j < 16; j++) {
      let c = add([104, 78, 62], (R() - 0.5) * 16);
      if ((j + Math.floor(i / 4) * 3) % 5 === 0) c = [70, 52, 42];
      if (R() < 0.08) c = [132, 102, 80];
      p.set(i, j, c);
    }
    return toTexture(p);
  });
}

export function tigerTex() {
  return cached('tiger', () => {
    const p = painter(16, 16);
    for (let i = 0; i < 16; i++) for (let j = 0; j < 16; j++) {
      let c = [226, 142, 48];
      if (Math.sin(i * 1.1 + Math.sin(j * 0.7) * 1.5) > 0.55) c = [40, 28, 24];
      p.set(i, j, c);
    }
    return toTexture(p);
  });
}

// 구름 그림자용 타일링 노이즈 (선형 필터)
export function cloudNoiseTex() {
  return cached('cloud', () => {
    const N = 128;
    const p = painter(N, N);
    const R = mulberry32(53);
    const octaves = [[4, 0.5], [8, 0.27], [16, 0.15], [32, 0.08]];
    const grids = octaves.map(([n]) => Array.from({ length: n * n }, () => R()));
    const sm = (t) => t * t * (3 - 2 * t);
    for (let x = 0; x < N; x++) for (let y = 0; y < N; y++) {
      let v = 0;
      octaves.forEach(([n, amp], o) => {
        const fx = (x / N) * n, fy = (y / N) * n;
        const x0 = Math.floor(fx), y0 = Math.floor(fy);
        const tx = sm(fx - x0), ty = sm(fy - y0);
        const g = grids[o];
        const at = (a, b) => g[((b % n) * n) + (a % n)];
        const a = at(x0, y0) + (at(x0 + 1, y0) - at(x0, y0)) * tx;
        const b = at(x0, y0 + 1) + (at(x0 + 1, y0 + 1) - at(x0, y0 + 1)) * tx;
        v += (a + (b - a) * ty) * amp;
      });
      const k = Math.max(0, Math.min(255, v * 255));
      p.set(x, y, [k, k, k]);
    }
    return toTexture(p, { linear: true });
  });
}

// 대나무 줄기: 초록 바탕에 마디 띠 (16x32)
export function bambooTex() {
  return cached('bamboo', () => {
    const p = painter(16, 32);
    const R = mulberry32(61);
    for (let i = 0; i < 16; i++) for (let j = 0; j < 32; j++) {
      const stripe = i % 8;
      let c = stripe < 2 ? [92, 140, 66] : stripe < 5 ? [120, 168, 78] : [104, 152, 70];
      c = add(c, (R() - 0.5) * 8);
      if (j % 16 === 0) c = [186, 196, 120];
      else if (j % 16 === 1 || j % 16 === 15) c = [70, 104, 50];
      p.set(i, j, c);
    }
    return toTexture(p);
  });
}

// 눈 덮인 땅
export function snowTex() {
  return cached('snow', () => {
    const p = painter(32, 32);
    const R = mulberry32(67);
    for (let i = 0; i < 32; i++) for (let j = 0; j < 32; j++) {
      let c = add([226, 234, 244], (R() - 0.5) * 8);
      const n = R();
      if (n < 0.08) c = [196, 210, 232];
      else if (n < 0.11) c = [250, 252, 255];
      p.set(i, j, c);
    }
    // 바람에 쓸린 눈결
    for (let k = 0; k < 6; k++) {
      const y = Math.floor(R() * 32), x0 = Math.floor(R() * 32);
      for (let i = 0; i < 8; i++) p.set(x0 + i, y + (i > 4 ? 1 : 0), [204, 216, 236]);
    }
    return toTexture(p);
  });
}

// 숲 흙길 (낙엽 섞임)
export function forestPathTex() {
  return cached('fpath', () => {
    const p = painter(32, 32);
    const R = mulberry32(71);
    for (let i = 0; i < 32; i++) for (let j = 0; j < 32; j++) {
      let c = add([138, 112, 82], (R() - 0.5) * 14);
      const n = R();
      if (n < 0.06) c = [176, 120, 60];
      else if (n < 0.1) c = [110, 88, 64];
      else if (n < 0.13) c = [150, 160, 90];
      p.set(i, j, c);
    }
    return toTexture(p);
  });
}

// 숲 바닥 풀 (어두운 초록 + 이끼)
export function forestGrassTex() { return grassTex([70, 112, 58]); }
