
export const resources = () => {

  window.performance.getEntriesByType("resource").forEach(function (resource) {
    console.log(resource.name);
  });
};

export const service_worker = () => {

  // list all sources used: resources(); 

  if ("serviceWorker" in navigator) {
    // Register a service worker hosted at the root of the
    // site using the default scope.
    navigator.serviceWorker.register("/worker.js").then((registration) => {
      console.log("Service worker registration succeeded:", registration);
    }, /*catch*/(error) => {
      console.error(`Service worker registration failed: ${error}`);
    });
  } else {
    console.error("Service workers are not supported.");
  }
};