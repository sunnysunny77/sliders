const version = 1;
const cacheName = `sliders-v${version}`;

const cacheAssets = [
  "./",
  "./index.php",
  "./favicon.ico",
  "./manifest.json",
  "./css/app.min.css",
  "./js/app.min.js",
  "./js/preload.js",
  "./font/Poppins-Black.ttf",
  "./font/Poppins-Bold.ttf",
  "./font/Poppins-ExtraBold.ttf",
  "./font/Poppins-ExtraLight.ttf",
  "./font/Poppins-Light.ttf",
  "./font/Poppins-Medium.ttf",
  "./font/Poppins-Regular.ttf",
  "./font/Poppins-SemiBold.ttf",
  "./font/Poppins-Thin.ttf",
  "./webfonts/fa-regular-400.woff2",
  "./webfonts/fa-brands-400.woff2",
  "./webfonts/fa-solid-900.woff2",
  "./images/pwa-logo-small.webp",
  "./images/pwa-logo.webp",
  "./images/100x100.svg",
  "./images/150x150-grey.svg",
  "./images/150x150-light.svg",
  "./images/150x150-pink.svg",
  "./images/400x400-blue.svg",
  "./images/400x400-dark.svg",
  "./images/400x400.svg",
  "./images/660x445-dark.svg",
  "./images/660x445-light.svg",
  "./images/950x574.svg"
];

self.addEventListener("install", (event) => {

  console.log("Service worker is installed");

  event.waitUntil(caches.open(cacheName).then((cache) => {

    console.log("Caching assets");
    cache.addAll(cacheAssets);
  }).then(() => {

    self.skipWaiting();
  }));
});

self.addEventListener("fetch", event => {

  console.log("Fetching via Service worker");
  
  event.respondWith(caches.match(event.request).then(cachedResponse => {

    const networkUpdate = fetch(event.request).then(networkResponse => {

      caches.open(cacheName).then(cache => cache.put(event.request, networkResponse));
      return networkResponse.clone();
    }).catch(() => {

      return false;
    });

    return cachedResponse || networkUpdate;
  }));
});