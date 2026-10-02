import * as THREE from 'three';

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

export function toon(opts = {}) {
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
