const CACHE_NAME = 'hanhan-menu-v4';
const APP_FILES = [
  './index.html',
  './styles.css',
  './app.js',
  './manifest.webmanifest',
  './app-icon.png',
  './app-icon-192.png',
  './app-icon-180.png',
  './assets/dishes/suanla-baicai.png',
  './assets/dishes/luroufan.png',
  './assets/dishes/garlic-vermicelli-shrimp.png',
  './assets/dishes/fried-noodles.png',
  './assets/dishes/chao-mo.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_FILES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clients => {
    const kitchenClient = clients.find(client => client.url.includes('/kitchen.html'));
    if (kitchenClient) return kitchenClient.focus();
    return self.clients.openWindow('./kitchen.html');
  }));
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  if (url.pathname.endsWith('/backend-config.js')) {
    event.respondWith(fetch(event.request).then(response => {
      if (response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      }
      return response;
    }).catch(() => caches.match(event.request).then(cached => cached || Response.error())));
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request).then(response => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        }
        return response;
      }).catch(() => {
        if (event.request.mode === 'navigate') return caches.match('./index.html');
        throw new Error('Offline and resource is not cached');
      });
    })
  );
});
