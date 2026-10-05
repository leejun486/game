// 고인 물(연못·늪 웅덩이) 셰이더: 원판(CircleGeometry, uv 0~1) 위에 그림
//  - 가운데는 깊고 가장자리는 얕은 색
//  - 하늘빛이 길게 비치며 천천히 흐름 (가짜 반사)
//  - 이따금 동심원 물결이 퍼짐 (월드 격자 칸마다 다른 때에)
//  - 햇빛이 반짝이는 점, 물가에 일렁이는 거품 띠
//  - 밤에는 어두워지고 달빛만 조금
import * as THREE from 'three';
import { shared } from './materials.js';

export function pondMaterial(W, { deep = '#1e3a36', shallow = '#3e6a58', sky = '#a8d0c8', foam = '#dfeee6' } = {}) {
  const C = (h) => new THREE.Color(h);
  const mat = new THREE.ShaderMaterial({
    uniforms: { uTime: shared.time, uNight: { value: 0 }, uDeep: { value: C(deep) }, uShallow: { value: C(shallow) }, uSky: { value: C(sky) }, uFoam: { value: C(foam) } },
    vertexShader: `
      varying vec2 vUv; varying vec3 vW;
      void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: `
      uniform float uTime; uniform float uNight;
      uniform vec3 uDeep; uniform vec3 uShallow; uniform vec3 uSky; uniform vec3 uFoam;
      varying vec2 vUv; varying vec3 vW;
      vec3 lin(vec3 c){ return pow(c, vec3(2.2)); }
      float h2(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float n2(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(h2(i), h2(i + vec2(1.0, 0.0)), u.x), mix(h2(i + vec2(0.0, 1.0)), h2(i + vec2(1.0, 1.0)), u.x), u.y); }
      void main(){
        float t = uTime;
        float r = length(vUv - 0.5) * 2.0;
        // 깊이: 가운데 깊고 가장자리 얕음, 바닥의 얼룩
        vec3 c = mix(uDeep, uShallow, smoothstep(0.45, 1.0, r));
        c *= 0.9 + 0.2 * n2(vW.xz * 0.7);
        // 하늘 반사: 가로로 길게 늘인 노이즈가 천천히 흐름
        float refl = n2(vec2(vW.x * 0.45 + t * 0.04, vW.z * 1.7 - t * 0.02));
        refl = smoothstep(0.45, 0.85, refl);
        c = mix(c, uSky, 0.18 + refl * 0.32);
        // 잔물결 무늬
        float rip = sin(vW.x * 5.0 + t * 1.4 + n2(vW.xz * 1.3) * 4.0) * sin(vW.z * 4.3 - t * 1.1);
        c += (uSky - c) * smoothstep(0.75, 1.0, rip) * 0.25;
        // 동심원 물결: 2.5m 칸마다 하나, 칸마다 다른 때에 퍼짐
        vec2 cell = floor(vW.xz / 2.5);
        float ph = h2(cell);
        vec2 ctr = (cell + 0.25 + 0.5 * vec2(h2(cell + 3.1), h2(cell + 7.7))) * 2.5;
        float age = fract(t * 0.22 + ph);
        float ringR = age * 1.3;
        float ring = smoothstep(0.07, 0.0, abs(length(vW.xz - ctr) - ringR)) * (1.0 - age) * step(0.35, h2(cell + floor(t * 0.22 + ph)));
        c = mix(c, uFoam, ring * 0.45);
        // 반짝임: 아주 작은 점이 깜빡임 (낮에만)
        float g = h2(floor(vW.xz * 14.0) + floor(t * 3.0));
        c += vec3(1.0, 0.97, 0.85) * step(0.994, g) * step(0.5, refl) * (1.0 - uNight) * 0.9;
        // 물가 거품 띠 (흔들림)
        float wob = 0.03 * sin(atan(vUv.y - 0.5, vUv.x - 0.5) * 9.0 + t * 1.7) + 0.02 * sin(t * 2.3 + r * 20.0);
        float foam = smoothstep(0.9 + wob, 0.97 + wob, r);
        c = mix(c, uFoam, foam * 0.55);
        c = lin(c);
        // 밤: 어둡게, 달빛 반사만 조금
        c *= mix(1.0, 0.32, uNight);
        c += lin(vec3(0.55, 0.65, 0.9)) * refl * 0.06 * uNight;
        gl_FragColor = vec4(c, 1.0);
      }`,
  });
  W.nightUniforms.push(mat.uniforms.uNight);
  return mat;
}
