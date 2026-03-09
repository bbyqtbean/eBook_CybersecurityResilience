/* ============================================
   Service Worker — Offline Caching
   ============================================ */

const CACHE_NAME = 'deep-dive-v13';
const ASSETS = [
    './',
    './index.html',
    './css/style.css',
    './js/content.js',
    './js/bookmarks.js',
    './js/highlights.js',
    './js/app.js',
    './manifest.json'
];

// Install: cache core assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
            .then(() => self.skipWaiting())
    );
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        ).then(() => self.clients.claim())
    );
});

// Fetch: cache-first for assets, network-first for others
self.addEventListener('fetch', (event) => {
    // Skip non-GET requests and Google Forms submissions
    if (event.request.method !== 'GET') return;
    if (event.request.url.includes('google.com/forms')) return;

    // Skip media files — browser needs native Range request support for streaming
    const url = event.request.url;
    if (url.endsWith('.mp4') || url.endsWith('.m4a') || url.endsWith('.webm') || url.endsWith('.ogg')) return;

    event.respondWith(
        caches.match(event.request).then(cached => {
            if (cached) return cached;
            return fetch(event.request).then(response => {
                // Cache successful responses
                if (response.ok) {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                }
                return response;
            }).catch(() => {
                // Offline fallback
                if (event.request.mode === 'navigate') {
                    return caches.match('/index.html');
                }
            });
        })
    );
});
