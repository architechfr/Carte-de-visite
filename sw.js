// Service worker — carte de visite numérique (fonctionnement hors-ligne)
const CACHE = 'carte-visite-v7';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './qrcode.min.js',
  './icon-192.png',
  './icon-512.png'
];
// Les polices Google (modèles) sont mises en cache au premier affichage.
const FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com'];

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

// Stratégie :
//  · HTML / navigation  → RÉSEAU D'ABORD (évite tout rendu « rogné » avec une
//    coquille en cache obsolète), repli cache si hors-ligne.
//  · autres ressources  → cache d'abord, repli réseau (rapide + hors-ligne).
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const req = e.request;
  const isHTML = req.mode === 'navigate' ||
    (req.headers.get('accept') || '').includes('text/html');

  if (isHTML) {
    e.respondWith(
      fetch(req).then(resp => {
        if (resp && resp.ok) { const copy = resp.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
        return resp;
      }).catch(() => caches.match(req).then(c => c || caches.match('./index.html')))
    );
    return;
  }

  e.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(resp => {
      const u = new URL(req.url);
      if (resp.ok && (u.origin === location.origin || FONT_HOSTS.includes(u.hostname))) {
        const copy = resp.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
      }
      return resp;
    }).catch(() => cached))
  );
});
