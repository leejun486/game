import * as THREE from 'three';
import { CLASSES } from './classes.js';
import { item } from './items.js';
import { outfitLook, gearLook } from './character.js';
import { gearColor } from './gear.js';

// 직업 선택 카드의 전신 미리보기.
// 게임과 같은 리그(착용 장비 포함)를 작은 렌더 타깃에 그린 뒤 픽셀을 읽어
// 카드의 2D 캔버스에 외곽선을 둘러 찍음. WebGL 컨텍스트를 하나 더 만들지 않음.
const W = 48, H = 72;
const TYPE = { sword: 'hero', mage: 'mage', elf: 'elf' };

// 선형 → sRGB (렌더 타깃은 선형 색으로 남음)
const SRGB = new Uint8ClampedArray(256);
for (let i = 0; i < 256; i++) {
  const c = i / 255;
  SRGB[i] = Math.round(255 * (c <= 0.0031308 ? c * 12.92 : 1.055 * Math.pow(c, 1 / 2.4) - 0.055));
}

export class ClassPreview {
  constructor(game) {
    this.game = game;
    this.renderer = game.pixel.renderer;
    this.target = new THREE.WebGLRenderTarget(W, H, { magFilter: THREE.NearestFilter, minFilter: THREE.NearestFilter });
    this.buf = new Uint8Array(W * H * 4);
    this.scene = new THREE.Scene();
    // 카드는 정면에서 살짝 내려다보는 정사영
    const cam = (this.camera = new THREE.OrthographicCamera(-0.78, 0.78, 1.17, -1.17, 0.1, 20));
    cam.position.set(0, 1.02 + 6 * 0.18, 6);
    cam.lookAt(0, 1.02, 0);
    const sun = new THREE.DirectionalLight('#fff0d6', 2.6);
    sun.position.set(2, 4, 3);
    this.scene.add(sun, new THREE.HemisphereLight('#dfe9ff', '#5a4a3a', 1.2));
    const rim = new THREE.DirectionalLight('#8ab0ff', 1.2);
    rim.position.set(-3, 2, -3);
    this.scene.add(rim);
    this.cards = [...document.querySelectorAll('#classes .cls')].map((el) => {
      const cv = el.querySelector('canvas');
      cv.width = W; cv.height = H;
      cv.classList.add('full');
      return { el, cls: el.dataset.cls, ctx: cv.getContext('2d'), img: cv.getContext('2d').createImageData(W, H), rig: null, yaw: 0.5, t: Math.random() * 5 };
    });
    this.rebuild();
  }

  // 착용 장비가 바뀌었을 수 있으니 리그를 새로 만듦 (불러오기·기록 삭제 뒤)
  rebuild() {
    for (const c of this.cards) {
      if (c.rig) this.scene.remove(c.rig.root);
      const pr = this.game.progressOf(c.cls);
      const w = item(pr.weapon), o = item(pr.outfit);
      const gl = {};
      for (const g of this.game.equippedGear(c.cls)) if (g.kind !== 'ring') gl[g.kind] = gearColor(g);
      c.rig = CLASSES[c.cls].make({ wstyle: w?.style, ...outfitLook(TYPE[c.cls], o), ...gearLook(gl) });
      c.rig.root.visible = false;
      this.scene.add(c.rig.root);
    }
  }

  update(dt) {
    const r = this.renderer;
    const prevTarget = r.getRenderTarget();
    const prevClear = r.getClearColor(new THREE.Color());
    const prevAlpha = r.getClearAlpha();
    r.setClearColor(0x000000, 0);
    for (const c of this.cards) {
      const sel = c.el.classList.contains('sel');
      c.t += dt;
      // 고른 카드는 천천히 한 바퀴, 나머지는 비스듬히 서서 숨쉬기
      c.yaw = sel ? c.yaw + dt * 0.9 : c.yaw + (0.5 - c.yaw) * Math.min(1, dt * 3);
      const rig = c.rig;
      rig.root.visible = true;
      rig.root.rotation.y = c.yaw;
      // 고른 카드는 이따금 공격 동작
      const cyc = c.t % 4;
      const attack = sel && cyc > 3 ? { t: (cyc - 3), kind: c.cls === 'sword' ? 0 : c.cls === 'mage' ? 10 : 20 } : null;
      rig.animate(dt, { speed: 0, attack, sheathing: 0, dash: false, hurt: 0, dead: false });
      r.setRenderTarget(this.target);
      r.clear();
      r.render(this.scene, this.camera);
      r.readRenderTargetPixels(this.target, 0, 0, W, H, this.buf);
      rig.root.visible = false;
      this.blit(c, sel);
      // 고른 캐릭터는 오른쪽 큰 그림에도
      if (sel) { this.bigCtx ||= document.getElementById('cls-big')?.getContext('2d'); this.bigCtx?.putImageData(c.img, 0, 0); }
    }
    r.setRenderTarget(prevTarget);
    r.setClearColor(prevClear, prevAlpha);
  }

  // 위아래 뒤집어 복사 + 1픽셀 외곽선
  blit(c, sel) {
    const src = this.buf, d = c.img.data;
    const a = (x, y) => (x < 0 || y < 0 || x >= W || y >= H ? 0 : src[((H - 1 - y) * W + x) * 4 + 3]);
    const line = sel ? [26, 18, 10] : [10, 8, 16];
    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        const o = (y * W + x) * 4;
        const s = ((H - 1 - y) * W + x) * 4;
        if (src[s + 3] > 0) {
          d[o] = SRGB[src[s]]; d[o + 1] = SRGB[src[s + 1]]; d[o + 2] = SRGB[src[s + 2]]; d[o + 3] = 255;
        } else if (a(x - 1, y) || a(x + 1, y) || a(x, y - 1) || a(x, y + 1)) {
          d[o] = line[0]; d[o + 1] = line[1]; d[o + 2] = line[2]; d[o + 3] = 255;
        } else d[o + 3] = 0;
      }
    }
    c.ctx.putImageData(c.img, 0, 0);
  }
}
