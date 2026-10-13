// 그림 스타일 (시안 비교용): 주소 ?style=… 또는 localStorage 'dot3d-style'
//  hd       — 지금 (부드러운 3D 음영 · AO · 필믹 색)
//  anime    — 셀 애니: 빛/그늘 두 단계, 진한 잉크 외곽선, 맑고 진한 색
//  story    — 동화 수채화: 세 단계 부드러운 음영, 갈색 연필 선, 종이 결, 파스텔
//  pastel   — 파스텔 캐주얼: 거의 평면 음영, 굵은 보라 외곽선, 밝고 귀여운 색
import * as THREE from 'three';

export const STYLES = ['hd', 'anime', 'story', 'pastel'];
export const STYLE = (() => {
  try {
    const q = new URLSearchParams(location.search).get('style');
    const s = q || localStorage.getItem('dot3d-style');
    return STYLES.includes(s) ? s : 'hd';
  } catch { return 'hd'; }
})();
export const STYLE_ID = STYLES.indexOf(STYLE);

// 셀 음영: 모든 MeshStandardMaterial의 직사광(빛 방향·그림자)을 계단으로 끊음
if (STYLE !== 'hd') {
  const band = {
    anime: 'mix(0.42, 1.0, smoothstep(0.16, 0.22, x))',
    story: 'mix(0.5, 1.0, smoothstep(0.05, 0.35, x) * 0.5 + smoothstep(0.45, 0.6, x) * 0.5)',
    pastel: 'mix(0.72, 1.0, smoothstep(0.12, 0.2, x))',
  }[STYLE];
  const C = THREE.ShaderChunk;
  const fn = `float celBand(float x) { return ${band}; }\n`;
  C.lights_physical_pars_fragment = fn + C.lights_physical_pars_fragment.replace(
    'float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\n\tvec3 irradiance = dotNL * directLight.color;',
    'float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\n\tvec3 irradiance = celBand( dotNL ) * directLight.color;');
  // 그림자 가장자리도 또렷하게
  C.lights_fragment_begin = C.lights_fragment_begin.replace(
    'directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;',
    'directLight.color *= ( directLight.visible && receiveShadow ) ? smoothstep( 0.35, 0.65, getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) ) : 1.0;');
}
