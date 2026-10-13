// 달빛 구슬 결제
// 실제 결제는 앱 스토어(구글 플레이 결제)를 통해서만 함. 게임은 결제 정보를 보지도 저장하지도 않음.
// 앱 쪽 결제 연결은 아직 없음 → window.dot3dBilling이 있으면 그것을 쓰고, 없으면 "출시 때 열려요"를 알림
//  dot3dBilling.buy(productId) → Promise<{ ok: true } | { ok: false, msg }>
//  (연결 방법은 APP.md '인앱 결제' 참고. 상품 id는 아래 PACKS의 id를 그대로 스토어에 등록)
import { gainBeads } from './cosmetics.js';

export const PACKS = [
  { id: 'beads_60', beads: 60, bonus: 0, krw: 1200 },
  { id: 'beads_300', beads: 300, bonus: 30, krw: 5900 },
  { id: 'beads_600', beads: 600, bonus: 80, krw: 11000 },
  { id: 'beads_1200', beads: 1200, bonus: 200, krw: 22000 },
  { id: 'beads_3000', beads: 3000, bonus: 600, krw: 55000 },
];

export const billingReady = () => typeof window !== 'undefined' && !!window.dot3dBilling?.buy;

// 꾸러미 사기 → '' (성공) 또는 막힌 까닭
export async function buyPack(g, id) {
  const P = PACKS.find((x) => x.id === id);
  if (!P) return '없는 꾸러미예요';
  if (!billingReady()) return '결제는 앱이 스토어에 나오면 열려요. 지금은 업적을 달성해 구슬을 모을 수 있어요';
  let r;
  try { r = await window.dot3dBilling.buy(P.id); } catch { r = { ok: false }; }
  if (!r?.ok) return r?.msg || '결제가 끝나지 않았어요';
  gainBeads(g, P.beads + P.bonus);
  g.stats.packs = (g.stats.packs || 0) + 1;
  g.save(false);
  return '';
}
