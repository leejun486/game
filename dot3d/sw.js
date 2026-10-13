// 오프라인 실행 (홈 화면에 설치한 웹판): 한 번 받은 파일은 저장해 두고, 인터넷이 없어도 그대로 씀
//  - index.html: 먼저 인터넷에서 새로 받고, 안 되면 저장해 둔 것
//  - 나머지(스크립트·글꼴·소리·그림): 저장해 둔 것이 있으면 그것 (주소에 ?v=해시가 붙어 새 버전은 새 주소)
//  CACHE 이름은 npm run build(tools/stamp.cjs)가 바꿔 씀 → 옛 저장분은 activate 때 지움
const CACHE = 'wolhagung-bc13c79425';
const CORE = ['./', 'index.html', 'manifest.webmanifest', 'icon.png', 'favicon.png', 'fonts/fusion-zh.woff2'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE).catch(() => {})).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith('wolhagung-') && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  const page = req.mode === 'navigate' || /\/(index\.html)?$/.test(new URL(req.url).pathname);
  if (page) {
    e.respondWith(fetch(req).then((r) => { const c = r.clone(); caches.open(CACHE).then((x) => x.put(req, c)); return r; }).catch(() => caches.match(req).then((r) => r || caches.match('index.html'))));
    return;
  }
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((r) => {
    if (r.ok && r.status === 200) { const c = r.clone(); caches.open(CACHE).then((x) => x.put(req, c)); }
    return r;
  })));
});
