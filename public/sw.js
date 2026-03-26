const cacheName = self.location.pathname
const pages = [

  "/posts/creating-a-new-theme/",
  "/docs/",
  "/posts/",
  "/categories/",
  "/zh/categories/",
  "/he/categories/",
  "/zh/",
  "/he/",
  "/",
  "/docs/mermaid/",
  "/showcases/",
  "/tags/",
  "/zh/tags/",
  "/he/tags/",
  "/book.min.cc2c524ed250aac81b23d1f4af87344917b325208841feca0968fe450f570575.css",
  "/en.search-data.min.b36c543d68f9fb0f1fd9665f3d5682396492c2ae18b5ff116c830814b5fc67fd.json",
  "/en.search.min.62054c381c0e025d54ff03bd68b5a85d6d9802c5eb7645abadf3ab8462443668.js",
  
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
