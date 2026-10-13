// 그림 스타일 (시안 비교용): 주소 ?style=… 또는 localStorage 'dot3d-style'
//  anime    — 기본. 셀 애니: 빛/그늘 두 단계, 진한 잉크 외곽선, 맑고 진한 색, 3D 질감 없앰
//  hd       — 예전 (부드러운 3D 음영 · AO · 필믹 색 · 울퉁불퉁한 질감)
//  story    — 동화 수채화: 세 단계 부드러운 음영, 갈색 연필 선, 종이 결, 파스텔
//  pastel   — 파스텔 캐주얼: 거의 평면 음영, 굵은 보라 외곽선, 밝고 귀여운 색
import * as THREE from 'three';

export const STYLES = ['hd', 'anime', 'story', 'pastel'];
export const STYLE = (() => {
  try {
    const q = new URLSearchParams(location.search).get('style');
    const s = q || localStorage.getItem('dot3d-style');
    return STYLES.includes(s) ? s : 'anime';
  } catch { return 'anime'; }
})();
export const STYLE_ID = STYLES.indexOf(STYLE);

// 셀 음영: 모든 MeshStandardMaterial의 직사광(빛 방향·그림자)을 계단으로 끊음
if (STYLE !== 'hd') {
  const band = {
    anime: 'mix(0.6, 1.0, smoothstep(0.0, 0.06, x))',
    story: 'mix(0.42, 1.0, smoothstep(0.05, 0.35, x) * 0.5 + smoothstep(0.45, 0.6, x) * 0.5)',
    pastel: 'mix(0.55, 1.0, smoothstep(0.12, 0.2, x))',
  }[STYLE];
  const C = THREE.ShaderChunk;
  const fn = `float celBand(float x) { return ${band}; }\n`;
  C.lights_physical_pars_fragment = fn + C.lights_physical_pars_fragment.replace(
    'float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\n\tvec3 irradiance = dotNL * directLight.color;',
    'float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\n\tvec3 irradiance = celBand( dotNL ) * directLight.color;');
  // 3D 질감 없애기: 텍스처의 잔결(돌 틈·흙 알갱이·풀 결)은 흐린 단계(밉맵)와 섞어 평평한 붓칠처럼,
  // 울퉁불퉁한 노멀맵·범프맵은 끔, 하늘/땅 빛은 면 방향과 상관없이 고르게 (각진 면이 덜 보이게)
  C.map_fragment = C.map_fragment.replace(
    'vec4 sampledDiffuseColor = texture2D( map, vMapUv );',
    'vec4 sampledDiffuseColor = texture2D( map, vMapUv );\n\tsampledDiffuseColor.rgb = mix( texture2D( map, vMapUv, 3.0 ).rgb, sampledDiffuseColor.rgb, 0.3 );');
  C.normal_fragment_maps = '';
  C.lights_pars_begin = C.lights_pars_begin.replace('float hemiDiffuseWeight = 0.5 * dotNL + 0.5;', 'float hemiDiffuseWeight = 0.62 + dotNL * 0.08;');
  // 그림자 가장자리도 또렷하게
  C.lights_fragment_begin = C.lights_fragment_begin.replace(
    'directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;',
    'directLight.color *= ( directLight.visible && receiveShadow ) ? smoothstep( 0.35, 0.65, getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) ) : 1.0;');
}

// 각진 면 없애기: 같은 자리 꼭짓점의 면 법선을 평균 → 둥글고 말랑하게 보임 (예전 스타일은 면마다 각지게)
export const SOFT = STYLE !== 'hd';
export function softNormals(g) {
  g.computeVertexNormals();
  if (!SOFT) return g;
  const P = g.attributes.position, N = g.attributes.normal, acc = new Map();
  const key = (i) => `${P.getX(i).toFixed(3)},${P.getY(i).toFixed(3)},${P.getZ(i).toFixed(3)}`;
  for (let i = 0; i < P.count; i++) {
    const k = key(i), a = acc.get(k) || [0, 0, 0];
    a[0] += N.getX(i); a[1] += N.getY(i); a[2] += N.getZ(i); acc.set(k, a);
  }
  for (let i = 0; i < P.count; i++) {
    const [x, y, z] = acc.get(key(i)), l = Math.hypot(x, y, z) || 1;
    N.setXYZ(i, x / l, y / l, z / l);
  }
  N.needsUpdate = true;
  return g;
}
const POLY = /Icosahedron|Dodecahedron|Octahedron|Tetrahedron/;
export const isPoly = (geo) => SOFT && POLY.test(geo.type || '');
