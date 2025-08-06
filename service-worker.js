const CACHE_NAME = "aceites-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/style.css",
  "/aceites.js",
  "/icon-192.png",
  "/icon-512.png"
  // Agrega aquí más archivos si quieres que estén disponibles offline
];

// INSTALACIÓN
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// ACTIVACIÓN
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
});

// FETCH (intercepta y responde con caché si hay)
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
