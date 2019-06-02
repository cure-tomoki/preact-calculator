// service worker

const VERSION = '1.0.0';
const CACHE_NAME = `calculator_v${VERSION}`;

self.addEventListener('install', e => {
  e.waitUntil((async function() {
    const cache = await caches.open(CACHE_NAME);
    return cache.addAll([
      '/',
      '/index.html',
      '/app.bundle.js',
      '/base.css'
    ]);
  })());
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
