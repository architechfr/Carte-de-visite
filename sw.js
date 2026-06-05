// Service worker — carte de visite numérique (fonctionnement hors-ligne)
const CACHE = 'carte-visite-v3';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './qrcode.min.js',
  './icon-192.png',
  './icon-512.png'
];
// Note : le logo officiel (assets/logo-cadence.svg) est mis en cache au runtime
// dès qu'il est présent — pas en précache, pour ne pas casser l'install s'il manque.

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

// Cache-first pour la coquille de l'app ; le reste passe au réseau avec repli cache
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).then(resp => {
      // Mettre en cache les requêtes same-origin réussies
      if (resp.ok && new URL(e.request.url).origin === location.origin) {
        const copy = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return resp;
    }).catch(() => cached))
  );
});
