const version = 1;
const cacheName = `sliders-v${version}`;

const resources = [
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

const installResources = async (resources) => {

  const cache = await caches.open(cacheName);
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {

  console.log("Service worker is installed");
  
  self.skipWaiting();

  event.waitUntil(installResources(resources));
});

const stale = async (req) => {

  try {

    const cache = await caches.open(cacheName);

    if (cache) {

      const match = await cache.match(req);

      if (match) {

        const res = await fetch(req);

        if (res) {

          await cache.put(req, res.clone());
        }

        return  match || res;
      }
    }

  } catch (error) {

    console.log(error);

    const cache = await caches.match(req);
      
    if (cache) {

      return cache;
    }

    return new Response("Network error happened", {
      status: 408,
      headers: { "Content-Type": "text/plain" },
    });
  }
};

self.addEventListener("fetch", (event) => {

  console.log("Fetching via Service worker");

  event.respondWith(stale(event.request));
});