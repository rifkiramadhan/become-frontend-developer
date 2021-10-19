var CACHE_NAME = 'shayna-cache-v1';
var urlsToCache = [
    '/',
    '/index.html',
    '/page.html'
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});