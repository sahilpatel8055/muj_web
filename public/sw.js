// Service Worker for caching and offline functionality
const CACHE_NAME = 'online-manipal-v1';
const urlsToCache = [
  '/',
  '/src/assets/muj_logo-removebg-preview.png',
  '/src/assets/fevicon.png',
  '/src/assets/hero-student.jpg',
  '/src/assets/ChatGPT_Image_Aug_22__2025__02_36_01_PM-removebg-preview.png',
  '/manifest.json'
];

// Install event - cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});