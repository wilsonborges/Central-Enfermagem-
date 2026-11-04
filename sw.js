const CACHE = 'central-enfermagem-v0-38';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon.svg', './logo-enfermeiro-direto.svg'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== self.location.origin || !url.pathname.startsWith(new URL(self.registration.scope).pathname)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    if (req.mode === 'navigate') {
      try { const response = await fetch(req); if (response.ok) cache.put('./index.html', response.clone()); return response; }
      catch { return await cache.match('./index.html') || await cache.match('./'); }
    }
    const saved = await cache.match(req);
    if (saved) return saved;
    const response = await fetch(req);
    if (response.ok) cache.put(req, response.clone());
    return response;
  })());
});
