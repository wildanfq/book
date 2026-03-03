const cacheName = self.location.pathname
const pages = [

  "/docs/example/",
  "/docs/example/table-of-contents/with-toc/",
  "/docs/example/table-of-contents/without-toc/",
  "/posts/creating-a-new-theme/",
  "/posts/migrate-from-jekyll/",
  "/docs/example/table-of-contents/",
  "/docs/example/collapsed/",
  "/posts/goisforlovers/",
  "/categories/",
  "/categories/Development/",
  "/tags/development/",
  "/posts/hugoisforlovers/",
  "/tags/go/",
  "/categories/golang/",
  "/tags/golang/",
  "/tags/hugo/",
  "/tags/",
  "/tags/templates/",
  "/tags/themes/",
  "/docs/example/collapsed/3rd-level/4th-level/",
  "/docs/example/collapsed/3rd-level/",
  "/docs/example/hidden/",
  "/docs/shortcodes/",
  "/docs/shortcodes/buttons/",
  "/docs/shortcodes/columns/",
  "/docs/shortcodes/details/",
  "/docs/shortcodes/experimental/",
  "/docs/shortcodes/experimental/asciinema/",
  "/docs/shortcodes/experimental/badges/",
  "/docs/shortcodes/experimental/cards/",
  "/docs/shortcodes/experimental/images/",
  "/docs/shortcodes/hints/",
  "/docs/shortcodes/mermaid/",
  "/docs/shortcodes/section/",
  "/docs/shortcodes/section/first-page/",
  "/docs/shortcodes/section/second-page/",
  "/docs/shortcodes/steps/",
  "/docs/shortcodes/tabs/",
  "/posts/",
  "/zh/categories/",
  "/he/categories/",
  "/",
  "/docs/",
  "/zh/",
  "/he/",
  "/docs/shortcodes/katex/",
  "/showcases/",
  "/zh/tags/",
  "/he/tags/",
  "/book.min.cc2c524ed250aac81b23d1f4af87344917b325208841feca0968fe450f570575.css",
  "/en.search-data.min.120fab293d20786bcef83aaaf80e265c8263afadd381a491af4786a8141901a4.json",
  "/en.search.min.5e47101278e50feb7a7fcdb01233302307e1b549fbf7d94bc40e2b8fbe5abe4b.js",
  
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
