const version = "v1";

const addResourcesToCache = async (resources) => {
  const cache = await caches.open(version);
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  console.log(`${version} installing...`);
  event.waitUntil(
    addResourcesToCache([
      "/",
      "/index.php",
      "/css/app.min.css",
      "/images/400x400.svg",    
      "/images/150x150-grey.svg", 
      "/images/150x150-pink.svg", 
      "/images/150x150-light.svg", 
      "/images/440x293-light.svg", 
      "/images/440x293-dark.svg", 
      "/images/400x400-blue.svg", 
      "/images/100x100.svg", 
      "/images/400x400-dark.svg",
      "/images/950x574.svg",
      "/js/app.min.js"
    ])
  );
});

async function fetchAndCacheIfOk(event) {
  try {
    const response = await fetch(event.request);

    if (response.ok) {
      const responseClone = response.clone();
      const cache = await caches.open(version);
      await cache.put(event.request, responseClone);
    }

    return response;
  } catch (e) {
    return e;
  }
}

async function fetchWithCache(event) {
  const cache = await caches.open(version);
  const response = await cache.match(event.request);
  if (response) {

    fetchAndCacheIfOk(event);

    return response;
  } else {

    return fetchAndCacheIfOk(event);
  }
}

function handleFetch(event) {

  if (event.request.headers.get("cache-control") !== "no-cache") {

    event.respondWith(fetchWithCache(event));
  }
}

self.addEventListener("fetch", handleFetch);