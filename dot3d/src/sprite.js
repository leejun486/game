import * as THREE from 'three';

// 2D 그림 캐릭터 (스프라이트): 3D 배경 위에 그림 한 장을 세워서 보여 줌
//  - 카메라가 돌지 않으므로(늘 같은 각도로 내려다봄) 그림 판을 세워 두기만 하면 됨
//  - 방향 8개는 그림을 바꿔서 (위 줄 a1~a8 = 아래·오른아래·오른쪽·오른위·위·왼위·왼쪽·왼아래)
//  - 3D 몸(리그)은 그대로 두고 화면에서만 숨김 → 칼 위치·칼빛 궤적·그림자·충돌은 예전처럼 리그가 맡음
//    숨김: 리그를 1번 층(layer)에 두면 카메라엔 안 보이고, 해 그림자 카메라는 1번 층도 봐서 그림자는 남음
//  - 그림은 sprites/<이름>.webp + .json (tools/sprites/cut_sheet.py 가 시트 한 장에서 만듦)

// 직업별 그림. 없으면 예전처럼 3D 캐릭터
export const SPRITES = {
  sword: {
    src: 'sprites/knight',
    height: 1.85, // 발끝~머리 꼭대기 (a1 기준, 게임 단위)
    bodyPx: 217, // a1 그림에서 발끝~머리 꼭대기 픽셀 (묶음 그림 기준)
    idle: ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8'],
    // 달리기: 방향마다 번갈아 보여 줄 그림 [이름, 좌우 뒤집기]
    run: [
      [['b4', 0], ['b5', 0]], // 아래
      [['b2', 0], ['b3', 0]], // 오른아래
      [['b6', 1], ['b8', 1]], // 오른쪽
      [['b7', 1], ['a4', 0]], // 오른위
      [['a5', 0], ['a5', 0]], // 위
      [['b7', 0], ['a6', 0]], // 왼위
      [['b6', 0], ['b8', 0]], // 왼쪽
      [['b2', 1], ['b3', 1]], // 왼아래
    ],
  },
};

export const LAYER_HIDDEN = 1;
const cache = new Map();

// 그림과 자리표를 한 번만 불러옴
export function loadSheet(src) {
  if (cache.has(src)) return cache.get(src);
  const e = { tex: null, meta: null, img: null, ready: false };
  e.promise = Promise.all([
    fetch(src + '.json').then((r) => r.json()),
    new Promise((res, rej) => { const im = new Image(); im.onload = () => res(im); im.onerror = rej; im.src = src + '.webp'; }),
  ]).then(([meta, img]) => {
    const t = new THREE.Texture(img);
    t.colorSpace = THREE.SRGBColorSpace;
    t.generateMipmaps = false; // 밉맵을 쓰면 흐릿하게 번져 보임
    t.minFilter = THREE.LinearFilter;
    t.magFilter = THREE.LinearFilter;
    t.needsUpdate = true;
    Object.assign(e, { tex: t, meta, img, ready: true });
    return e;
  }).catch(() => { e.failed = true; return e; });
  cache.set(src, e);
  return e;
}

// 리그를 화면에서 숨김 (그림자만 남김). 꾸밈 오라·칼빛 궤적처럼 그림 위에 보여야 할 것은 그대로
export function hideRig(rig) {
  const keep = new Set();
  if (rig.aura?.g) rig.aura.g.traverse((o) => keep.add(o));
  rig.root.traverse((o) => { if (!keep.has(o)) o.layers.set(LAYER_HIDDEN); });
}

const dir8 = (yaw) => ((Math.round(yaw / (Math.PI / 4)) % 8) + 8) % 8;
const smooth01 = (x) => x * x * (3 - 2 * x);

export class SpriteBody {
  constructor(scene, def) {
    this.def = def;
    this.sheet = loadSheet(def.src);
    this.group = new THREE.Group(); // 발밑, 카메라 쪽으로 기울임
    const geo = new THREE.PlaneGeometry(1, 1);
    geo.translate(0, 0.5, 0);
    this.mat = new THREE.MeshBasicMaterial({ transparent: false, alphaTest: 0.45, side: THREE.DoubleSide, toneMapped: false });
    this.mesh = new THREE.Mesh(geo, this.mat);
    this.mesh.userData.noOutline = true; // 그림이 외곽선을 가지고 있음 (3D 잉크 선은 안 그음)
    this.mesh.renderOrder = 2;
    this.mesh.visible = false;
    this.group.add(this.mesh);
    scene.add(this.group);
    this.dir = 0;
    this.t = 0;
    this.runT = 0;
    this.frame = null;
    this.tint = new THREE.Color(1, 1, 1);
  }

  dispose() {
    this.group.removeFromParent();
    this.mesh.geometry.dispose();
    this.mat.dispose();
  }

  // 그림 한 칸을 판에 붙임 (자리표: x, y, 폭, 높이, 발 x, 발 y)
  setFrame(name, flip) {
    const key = name + (flip ? '-' : '+');
    if (this.frame === key) return;
    const e = this.sheet, f = e.meta.frames[name];
    if (!f) return;
    this.frame = key;
    if (this.mat.map !== e.tex) { this.mat.map = e.tex; this.mat.needsUpdate = true; }
    const [x, y, w, h, ax, ay] = f, W = e.meta.w, H = e.meta.h;
    const uv = this.mesh.geometry.attributes.uv;
    let u0 = x / W, u1 = (x + w) / W;
    if (flip) [u0, u1] = [u1, u0];
    const v1 = 1 - y / H, v0 = 1 - (y + h) / H;
    uv.setXY(0, u0, v1); uv.setXY(1, u1, v1); uv.setXY(2, u0, v0); uv.setXY(3, u1, v0);
    uv.needsUpdate = true;
    const k = this.def.height / this.def.bodyPx;
    this.mesh.scale.set(w * k, h * k, 1);
    // 발 기준점이 그룹 원점에 오도록
    const fx = flip ? w - ax : ax;
    this.mesh.position.set((w / 2 - fx) * k, -(h - ay) * k, 0);
  }

  // p: { pos, yaw, speed, attack:{t,kind}|null, dash, hurt(0~1), dead, visible, flash, night, pitch }
  update(dt, p) {
    const e = this.sheet;
    if (!e.ready) { this.mesh.visible = false; return; }
    this.mesh.visible = true;
    this.t += dt;
    const g = this.group;
    // 방향: 경계에서 떨리지 않게 조금 넘어가야 바뀜
    const want = dir8(p.yaw);
    if (want !== this.dir) {
      const centre = this.dir * Math.PI / 4;
      const d = Math.atan2(Math.sin(p.yaw - centre), Math.cos(p.yaw - centre));
      if (Math.abs(d) > Math.PI / 8 + 0.08 || p.attack) this.dir = want;
    }
    const D = this.def, d = this.dir;
    const fwdX = Math.sin(p.yaw), fwdZ = Math.cos(p.yaw);
    let name = D.idle[d], flip = 0, lift = 0, sx = 1, sy = 1, lean = 0, push = 0, tilt = -p.pitch * 0.35;
    if (p.dead) {
      // 쓰러짐: 판을 뒤로 눕힘
      this.deadT = Math.min(1, (this.deadT || 0) + dt * 2.2);
      tilt = -p.pitch * 0.35 - smooth01(this.deadT) * (Math.PI / 2 - p.pitch * 0.35);
    } else {
      this.deadT = 0;
      if (p.attack) {
        // 공격: 칼을 어깨에 올린 그림(준비) → 서 있는 그림으로 내려치며 앞으로 내딛음
        const t = p.attack.t;
        if (t < 0.32) {
          [name, flip] = D.run[d][0];
          sy = 1 + 0.04 * smooth01(t / 0.32); sx = 1 - 0.03 * smooth01(t / 0.32);
          push = -0.06 * smooth01(t / 0.32);
        } else {
          const k = Math.min(1, (t - 0.32) / 0.2), r = Math.max(0, (t - 0.6) / 0.4);
          push = 0.22 * smooth01(k) * (1 - r);
          sx = 1 + 0.06 * (1 - k); sy = 1 - 0.05 * (1 - k);
        }
      } else if (p.dash) {
        [name, flip] = D.run[d][1];
        lean = 0.12;
      } else if (p.speed > 0.05) {
        // 달리기: 두 그림을 번갈아, 걸음마다 살짝 튐
        this.runT += dt * (5 + 4 * Math.min(1, p.speed));
        const step = Math.floor(this.runT) % 2;
        [name, flip] = D.run[d][step];
        const ph = this.runT % 1;
        lift = Math.sin(ph * Math.PI) * 0.06;
        sy = 1 - 0.04 * Math.cos(ph * Math.PI * 2) * 0.5;
      } else {
        // 숨쉬기
        sy = 1 + Math.sin(this.t * 2.4) * 0.012;
      }
      if (p.hurt > 0) { lean = -0.18 * p.hurt; sx *= 1 + 0.05 * p.hurt; }
    }
    this.setFrame(name, flip);
    g.position.set(p.pos.x + fwdX * push, p.pos.y + lift, p.pos.z + fwdZ * push);
    g.rotation.set(tilt, 0, lean * (fwdX >= 0 ? -1 : 1));
    g.scale.set(sx, sy, 1);
    g.visible = p.visible;
    // 밤엔 푸르고 어둡게, 맞으면 하얗게 번쩍
    const n = p.night || 0, fl = p.flash || 0;
    this.tint.setRGB(1 - 0.36 * n, 1 - 0.3 * n, 1 - 0.08 * n).multiplyScalar(1 + fl * 1.6);
    this.mat.color.copy(this.tint);
  }
}

// 2D 캔버스에 그림 한 칸을 그림 (직업 카드·초상화). 아직 안 불러왔으면 false
export function drawFrame(ctx, def, name, dx, dy, scale, flip = false) {
  const e = loadSheet(def.src);
  const f = e.ready && e.meta.frames[name];
  if (!f) return false;
  const [x, y, w, h, ax, ay] = f;
  ctx.save();
  ctx.translate(dx, dy);
  if (flip) ctx.scale(-1, 1);
  ctx.drawImage(e.img, x, y, w, h, -ax * scale, -ay * scale, w * scale, h * scale);
  ctx.restore();
  return true;
}
