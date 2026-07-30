// public/sw.js
const CACHE_NAME = "fixmend-v1";

// ✅ ان URLs کو Cache کریں
const urlsToCache = [
  "/",
  "/devices",
  "/videos",
  "/unlock",
  "/blog",
  "/about",
  "/contact",
  "/pricing",
  "/download",
  "/offline",
];

// ✅ Install Event – Cache میں Save کریں
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("🔧 Cache opened");
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// ✅ Activate Event – پرانے Cache کو صاف کریں
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("🗑️ Removing old cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// ✅ Fetch Event – پہلے Cache سے دیں، ورنہ Network سے لائیں
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache میں ہے تو واپس کریں
      if (response) {
        return response;
      }

      // Cache میں نہیں تو Network سے لائیں
      return fetch(event.request)
        .then((response) => {
          // اگر response درست ہے تو Cache میں Save کریں
          if (response && response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          // اگر Network بھی نہیں چل رہا تو Offline Page دکھائیں
          return caches.match("/offline");
        });
    })
  );
});