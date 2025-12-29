const CACHE_NAME = 'grace-hymnal-v2';

// Pre-cache essential app shell
const APP_SHELL = [
    '/',
    '/all',
    '/favorites',
    '/manifest.json',
    '/icon-192.png',
    '/icon-512.png'
];

// Generate all hymn page URLs (1-75)
const HYMN_PAGES = Array.from({ length: 75 }, (_, i) => `/hymn/${i + 1}`);

// Generate all category page URLs (1-8)
const CATEGORY_PAGES = Array.from({ length: 8 }, (_, i) => `/category/${i + 1}`);

// Combine all URLs to pre-cache
const urlsToCache = [...APP_SHELL, ...HYMN_PAGES, ...CATEGORY_PAGES];

// Install service worker and cache all assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Pre-caching app shell and hymn pages...');
                return cache.addAll(urlsToCache);
            })
            .then(() => {
                console.log('All pages pre-cached successfully!');
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
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch strategy: Cache First for app pages, Network First for API/dynamic
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Only handle same-origin requests
    if (!url.origin.includes(self.location.origin)) {
        return;
    }

    // For navigation requests (HTML pages) - use Cache First
    if (event.request.mode === 'navigate') {
        event.respondWith(
            caches.match(event.request)
                .then((cachedResponse) => {
                    if (cachedResponse) {
                        // Return cached version immediately, update cache in background
                        fetch(event.request)
                            .then((response) => {
                                caches.open(CACHE_NAME)
                                    .then((cache) => cache.put(event.request, response));
                            })
                            .catch(() => { }); // Ignore network errors for background update
                        return cachedResponse;
                    }
                    // If not cached, fetch from network and cache
                    return fetch(event.request)
                        .then((response) => {
                            const responseClone = response.clone();
                            caches.open(CACHE_NAME)
                                .then((cache) => cache.put(event.request, responseClone));
                            return response;
                        });
                })
                .catch(() => {
                    // Fallback to home page if completely offline and page not cached
                    return caches.match('/');
                })
        );
        return;
    }

    // For static assets (JS, CSS, images) - use Cache First
    if (event.request.destination === 'script' ||
        event.request.destination === 'style' ||
        event.request.destination === 'image' ||
        event.request.destination === 'font') {
        event.respondWith(
            caches.match(event.request)
                .then((cachedResponse) => {
                    if (cachedResponse) {
                        return cachedResponse;
                    }
                    return fetch(event.request)
                        .then((response) => {
                            const responseClone = response.clone();
                            caches.open(CACHE_NAME)
                                .then((cache) => cache.put(event.request, responseClone));
                            return response;
                        });
                })
        );
        return;
    }

    // For other requests - use Network First
    event.respondWith(
        fetch(event.request)
            .then((response) => {
                const responseClone = response.clone();
                caches.open(CACHE_NAME)
                    .then((cache) => cache.put(event.request, responseClone));
                return response;
            })
            .catch(() => {
                return caches.match(event.request);
            })
    );
});
