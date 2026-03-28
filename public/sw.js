const cacheName = self.location.pathname
const pages = [

  "/posts/creating-a-new-theme/",
  "/docs/",
  "/posts/",
  "/categories/",
  "/zh/categories/",
  "/he/categories/",
  "/docs/cv/",
  "/zh/",
  "/he/",
  "/",
  "/docs/kritik/",
  "/showcases/",
  "/docs/lamaran/",
  "/tags/",
  "/zh/tags/",
  "/he/tags/",
  "/book.min.cc2c524ed250aac81b23d1f4af87344917b325208841feca0968fe450f570575.css",
  "/en.search-data.min.dc3525eddf698b34bf0c09313c023c12c7957ef9d8947afa46abf7bf79edd74c.json",
  "/en.search.min.78adae883ec03a1a6daef4dd61b6606d6724c747d7f7eb95c78855b99256f5f7.js",
  
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
