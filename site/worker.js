const version = 1;
const cacheName = `sliders-v${version}`;

const cacheAssets = [
  "./",
  "./index.php",
  "./css/app.min.css",
  "./js/app.min.js",
];

self.addEventListener("install", (event) => {
  console.log("Service worker is installed");

  event.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        console.log("Caching assets");
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});


self.addEventListener("fetch", (event) => {
  console.log("Fetching via Service worker");

  event.respondWith(caches.open(cacheName).then((cache) => {
    return cache.match(event.request).then((cachedResponse) => {
      const fetchedResponse = fetch(event.request).then((networkResponse) => {
        cache.put(event.request, networkResponse.clone());

        return networkResponse;
      });

      return cachedResponse || fetchedResponse;
    });
  }));
});