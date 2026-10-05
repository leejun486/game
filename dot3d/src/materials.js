import * as THREE from 'three';
import { GFX } from './gfx.js';

// 모든 셰이더가 공유하는 유니폼
export const shared = {
  time: { value: 0 },
  player: { value: new THREE.Vector3(0, -100, 0) },
  night: { value: 0 },
};

let gradient = null;
export function gradientMap() {
  if (!gradient) {
    // 4단계 툰 셰이딩
    const d = new Uint8Array([78, 78, 78, 255, 150, 150, 150, 255, 212, 212, 212, 255, 255, 255, 255, 255]);
    gradient = new THREE.DataTexture(d, 4, 1, THREE.RGBAFormat);
    gradient.magFilter = gradient.minFilter = THREE.NearestFilter;
    gradient.needsUpdate = true;
  }
  return gradient;
}

// 고화질 모드: 부드러운 물리 기반 음영 / 도트 모드: 4단계 툰 음영
export function toon(opts = {}) {
  if (GFX.hd) return new THREE.MeshStandardMaterial({ roughness: 0.86, metalness: 0, ...opts });
  return new THREE.MeshToonMaterial({ gradientMap: gradientMap(), ...opts });
}

// 정점 애니메이션을 셰이더에 주입.
//  local: begin_vertex 직후 (transformed 수정, 로컬 공간)
//  world: 월드 좌표 wPos 수정 (인스턴싱 포함)
function inject(material, { local = '', world = '' }, key) {
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = shared.time;
    shader.uniforms.uPlayer = shared.player;
    let vs = 'uniform float uTime;\nuniform vec3 uPlayer;\n' + shader.vertexShader;
    if (local) vs = vs.replace('#include <begin_vertex>', '#include <begin_vertex>\n' + local);
    if (world) {
      vs = vs.replace('#include <project_vertex>', `
        vec4 mvPosition = vec4( transformed, 1.0 );
        #ifdef USE_INSTANCING
          mvPosition = instanceMatrix * mvPosition;
        #endif
        vec4 wPos = modelMatrix * mvPosition;
        ${world}
        mvPosition = viewMatrix * wPos;
        gl_Position = projectionMatrix * mvPosition;`);
    }
    shader.vertexShader = vs;
  };
  material.customProgramCacheKey = () => key;
}

const normalCache = new Map();
// 메시에 정점 애니메이션 적용: 컬러/그림자/노멀 패스 모두 같은 변형을 쓰도록
export function animateMesh(mesh, anim, { shadow = true } = {}) {
  const key = 'anim:' + (anim.local || '') + '|' + (anim.world || '');
  inject(mesh.material, anim, key);
  if (shadow) {
    const depth = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking });
    inject(depth, anim, key + ':depth');
    mesh.customDepthMaterial = depth;
  }
  const side = mesh.material.side;
  const nk = key + side;
  if (!normalCache.has(nk)) {
    const nm = new THREE.MeshNormalMaterial({ side });
    inject(nm, anim, key + ':normal');
    normalCache.set(nk, nm);
  }
  mesh.userData.nmat = normalCache.get(nk);
  return mesh;
}

export const ANIM = {
  // 깃발: 깃대(로컬 x = -0.5)에서 멀어질수록 크게 펄럭임
  flag: {
    local: `
      float k = clamp(position.x + 0.5, 0.0, 1.0);
      float ph = uTime * 3.2 - position.x * 4.5 + position.y * 1.3 + modelMatrix[3].x * 0.7;
      transformed.z += sin(ph) * 0.14 * k;
      transformed.y += sin(ph * 0.7) * 0.03 * k;`,
  },
  // 소나무 잎뭉치: 천천히 흔들림
  foliage: {
    world: `
      float sw = sin(uTime * 1.1 + wPos.x * 0.35 + wPos.z * 0.25);
      wPos.x += sw * 0.035 * max(0.0, wPos.y - 1.0) * 0.4;
      wPos.z += cos(uTime * 0.9 + wPos.x * 0.3) * 0.02 * max(0.0, wPos.y - 1.0) * 0.4;`,
  },
  // 풀잎: 바람 + 플레이어가 밟으면 눕기
  grass: {
    world: `
      float h = position.y;
      float w = sin(uTime * 2.1 + wPos.x * 0.55 + wPos.z * 0.35) * 0.5 + sin(uTime * 3.7 + wPos.x * 1.3) * 0.2 + 0.35;
      wPos.x += w * h * 0.45;
      wPos.z += w * h * 0.15;
      vec2 dp = wPos.xz - uPlayer.xz;
      float dl = length(dp) + 0.0001;
      float push = max(0.0, 0.85 - dl) * step(abs(wPos.y - uPlayer.y), 1.2);
      wPos.xz += dp / dl * push * h * 1.6;
      wPos.y -= push * h * 0.5;`,
  },
};

// 길·흙 바닥의 가장자리를 월드 좌표 노이즈로 들쭉날쭉하게 깎아 잔디와 자연스럽게 섞이게 함
//  기하에 aEdge(가장자리까지 거리, 월드 단위) 속성이 있어야 함 (worlds2.js의 pathStrip·disc)
//  가장자리 근처는 살짝 어둡게 (젖은 흙·풀에 덮인 느낌)
const softCache = new Map();
export function softEdge(material) {
  if (softCache.has(material)) return softCache.get(material);
  const m = material.clone();
  m.onBeforeCompile = (shader) => {
    shader.vertexShader = 'attribute float aEdge;\nvarying float vEdge;\nvarying vec2 vWXZ;\n' + shader.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
      vEdge = aEdge;
      vWXZ = (modelMatrix * vec4(transformed, 1.0)).xz;`);
    shader.fragmentShader = `varying float vEdge;
varying vec2 vWXZ;
float seH(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float seN(vec2 p) { vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(seH(i), seH(i + vec2(1.0, 0.0)), u.x), mix(seH(i + vec2(0.0, 1.0)), seH(i + vec2(1.0, 1.0)), u.x), u.y); }
` + shader.fragmentShader
      .replace('#include <clipping_planes_fragment>', `#include <clipping_planes_fragment>
      float seNoise = seN(vWXZ * 0.8) * 0.6 + seN(vWXZ * 2.9) * 0.3 + seN(vWXZ * 9.0) * 0.1;
      float seThr = 0.05 + seNoise * 0.85;
      if (vEdge < seThr) discard;`)
      .replace('#include <map_fragment>', `#include <map_fragment>
      diffuseColor.rgb *= mix(0.82, 1.0, smoothstep(seThr, seThr + 0.55, vEdge));`);
  };
  m.customProgramCacheKey = () => 'softEdge';
  softCache.set(material, m);
  return m;
}

// 테두리 빛(림 라이트): 캐릭터·몬스터·NPC가 배경에서 묻히지 않게 윤곽에 은은한 빛
//  낮엔 따뜻한 흰빛, 밤엔 달빛(푸른빛)으로 조금 더 세게 — main.js가 shared.rim*을 밤낮에 맞춰 바꿈
//  고화질(MeshStandardMaterial)만. 도트 모드는 외곽선이 그 역할을 함
shared.rimColor = { value: new THREE.Color('#fff0d8') };
shared.rimK = { value: 0.35 };
export function addRim(root) {
  if (!GFX.hd) return;
  root.traverse((o) => {
    if (!o.isMesh) return;
    for (const m of Array.isArray(o.material) ? o.material : [o.material]) {
      if (!m || !m.isMeshStandardMaterial || m.userData.rim) continue;
      m.userData.rim = true;
      const prev = m.onBeforeCompile, prevKey = m.customProgramCacheKey?.bind(m);
      m.onBeforeCompile = (shader, r) => {
        prev?.call(m, shader, r);
        shader.uniforms.uRimColor = shared.rimColor;
        shader.uniforms.uRimK = shared.rimK;
        shader.fragmentShader = 'uniform vec3 uRimColor;\nuniform float uRimK;\n' + shader.fragmentShader.replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
          float rimF = 1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0);
          totalEmissiveRadiance += uRimColor * (pow(rimF, 2.6) * uRimK);`);
      };
      m.customProgramCacheKey = () => (prevKey ? prevKey() : '') + '|rim';
      m.needsUpdate = true;
    }
  });
}
