const CACHE_NAME = 'grace-hymnal-v1';
const urlsToCache = [
    '/',
    '/all',
    '/favorites',
    '/manifest.json',
    '/icon-192.png',
    '/icon-512.png'
];

// Install service worker and cache static assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
    self.skipWaiting();
});

// Activate and clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch strategy: Network first, fallback to cache
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
            .then((response) => {
                // Clone the response before caching
                const responseClone = response.clone();
                caches.open(CACHE_NAME)
                    .then((cache) => {
                        // Only cache same-origin requests
                        if (event.request.url.startsWith(self.location.origin)) {
                            cache.put(event.request, responseClone);
                        }
                    });
                return response;
            })
            .catch(() => {
                // Fallback to cache when offline
                return caches.match(event.request)
                    .then((cachedResponse) => {
                        if (cachedResponse) {
                            return cachedResponse;
                        }
                        // For navigation requests, return the cached home page
                        if (event.request.mode === 'navigate') {
                            return caches.match('/');
                        }
                    });
            })
    );
});
