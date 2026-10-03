// 장면에서 뺀 물체의 GPU 자원(지오메트리·재질·그 물체만 쓰는 텍스처) 해제
// 오래 플레이해도 메모리가 쌓이지 않게. 여럿이 함께 쓰는 캐시 텍스처는 건드리지 않음 (userData.owned 표시가 있는 것만 해제)
const MAPS = ['map', 'normalMap', 'emissiveMap', 'alphaMap', 'roughnessMap'];

export function disposeTree(root) {
  if (!root) return;
  root.traverse((o) => {
    if (o.isSkinnedMesh) o.skeleton?.dispose(); // 뼈대마다 GPU 텍스처가 하나씩 있음
    if (o.geometry && !o.geometry.userData?.shared) o.geometry.dispose();
    const mats = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
    for (const m of mats) {
      if (m.userData?.shared) continue;
      for (const k of MAPS) if (m[k]?.userData?.owned) m[k].dispose();
      m.dispose();
    }
  });
}

// 장면에서 빼고 해제
export function drop(scene, obj) {
  if (!obj) return;
  scene.remove(obj);
  disposeTree(obj);
}

// 잔상처럼 지오메트리·재질을 원본과 함께 쓰는 복제본: 뼈대만 해제
export function disposeSkeletons(root) {
  root?.traverse((o) => { if (o.isSkinnedMesh) o.skeleton?.dispose(); });
}
