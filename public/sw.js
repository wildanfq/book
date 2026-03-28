const cacheName = self.location.pathname
const pages = [

  "/",
  "/docs/kritik/",
  "/docs/lamaran/",
  "/docs/cv/",
  "/posts/creating-a-new-theme/",
  "/docs/",
  "/posts/",
  "/categories/",
  "/zh/categories/",
  "/he/categories/",
  "/zh/",
  "/he/",
  "/showcases/",
  "/tags/",
  "/zh/tags/",
  "/he/tags/",
  "/book.min.cc2c524ed250aac81b23d1f4af87344917b325208841feca0968fe450f570575.css",
  "/en.search-data.min.6d7b74a674abc05e924950183eeecc82377df9fc4a95c56f31f4ef55487ccba9.json",
  "/en.search.min.0fdefa312ceaafc5e88ad7147a7f25b7674cbedf4b7ee035e772372481a42f02.js",
  
];

self.addEventListener("install", function (event) {
  self.skipWaiting();

  caches.open(cacheName).then((cache) => {
    return cache.addAll(pages);
  });
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") {
    return;
  }

  /**
   * @param {Response} response
   * @returns {Promise<Response>}
   */
  function saveToCache(response) {
    if (cacheable(response)) {
      return caches
        .open(cacheName)
        .then((cache) => cache.put(request, response.clone()))
        .then(() => response);
    } else {
      return response;
    }
  }

  /**
   * @param {Error} error
   */
  function serveFromCache(error) {
    return caches.open(cacheName).then((cache) => cache.match(request.url));
  }

  /**
   * @param {Response} response
   * @returns {Boolean}
   */
  function cacheable(response) {
    return response.type === "basic" && response.ok && !response.headers.has("Content-Disposition")
  }

  event.respondWith(fetch(request).then(saveToCache).catch(serveFromCache));
});
