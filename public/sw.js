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
  "/en.search-data.min.f85af45e70782f7e726f17683490abd440bd87ebc0443e25c44d04e391082b01.json",
  "/en.search.min.e4a12dc46f9f453aeec15280189c6458ef94fe18bc724bca435b76d4d306b45b.js",
  
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
