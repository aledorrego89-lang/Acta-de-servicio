self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('actas-bvcd').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/logo.png',
        '/manifest.json'
      ]);
    })
  );
});
