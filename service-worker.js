const CACHE_NAME = 'guia-aceites-v1';
const urlsToCache = [
  './',
  './index.html',
  './aceites.css',
  './aceites.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Instalar SW y cachear archivos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Activar SW
self.addEventListener('activate', event => {
  console.log('🟣 Service Worker activo');
});

// Interceptar peticiones y responder desde caché si es posible
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)
    )
  );
});
