// sw.js
self.addEventListener('install', function (e) {
  e.waitUntil(
      caches.open('v1').then(cache => {
          return cache.addAll([
              '/index.js',
              '/index.html',
              'manifest.json',
              '/'
          ]);
      })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
      caches.match(event.request)
      .then(function (response) {
          if (response) {
              return response;
          }

          var fetchRequest = event.request.clone();

          return fetch(fetchRequest).then(
              function (response) {
                  if (!response || response.status !== 200 || response.type !== 'basic') {
                      return response;
                  }

                  var responseToCache = response.clone();

                  caches.open('v1')
                      .then(function (cache) {
                          cache.put(event.request, responseToCache);
                      });

                  return response;
              }
          );
      })
  );
});
self.addEventListener('fetch', function (event) {
  event.respondWith(
      caches.match(event.request)
      .then(function (response) {

          if (response) {
              return response;
          }

          var fetchRequest = event.request.clone();

          return fetch(fetchRequest).then(
              function (response) {

                  if (!response || response.status !== 200 || response.type !== 'basic') {
                      return response;
                  }

                  var responseToCache = response.clone();

                  caches.open('v1')
                      .then(function (cache) {
                          cache.put(event.request, responseToCache);
                      });

                  return response;
              }
          );
      })
  );
});
