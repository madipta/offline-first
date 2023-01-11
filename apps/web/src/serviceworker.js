/* eslint-disable no-restricted-globals */

const STATIC = 'precache-v1';
const DYNAMIC = 'runtime';

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [
  'index.html',
  './', // Alias for index.html
];

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', (event) => {
  event.waitUntil(
    (async function () {
      const cache = await caches.open(STATIC);
      await cache.addAll(PRECACHE_URLS);
    })()
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async function () {
      const cacheNames = await caches.keys();
      const currentCaches = [STATIC, DYNAMIC];
      await Promise.all(
        cacheNames
          .filter((cacheName) => {
            return !currentCaches.includes(cacheName);
          })
          .map((cacheName) => caches.delete(cacheName))
      );
    })()
  );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method === 'POST' && req.url.includes('/graphql')) {
    graphqlHandler(event);
    return;
  }
  if (req.method === 'GET') {
    event.respondWith(
      (async function () {
        const cache = await caches.open(DYNAMIC);
        const cachedResponse = await cache.match(event.request);
        try {
          const networkResponse = await fetch(event.request);
          event.waitUntil(
            (async function () {
              await cache.put(event.request, networkResponse.clone());
            })()
          );
          return networkResponse;
        } catch (err) {
          return cachedResponse;
        }
      })()
    );
    return;
  }
});

function hash(x) {
  let h, i, l;
  for (h = 5381 | 0, i = 0, l = x.length | 0; i < l; i++) {
    h = (h << 5) + h + x.charCodeAt(i);
  }

  return h >>> 0;
}

async function graphqlHandler(e) {
  const exclude = [/mutation/, /query Identity/];
  const queryId = await e.request
    .clone()
    .json()
    .then(({ query, variables }) => {
      if (exclude.some((r) => r.test(query))) {
        return;
      }
      // Mocks a request since `caches` only works with requests.
      return `https://query_${hash(JSON.stringify({ query, variables }))}`;
    });

  if (!queryId) {
    return;
  }

  const networkResponse = fromNetwork(e.request);

  e.respondWith(
    (async () => {
      const cachedResult = queryId && (await fromCache(queryId));
      if (cachedResult) {
        return cachedResult;
      }
      return networkResponse.then((res) => res.clone());
    })()
  );

  e.waitUntil(
    (async () => {
      try {
        const res = await networkResponse.then((res) => res.clone());
        if (queryId) {
          await saveToCache(queryId, res);
        }
      } catch (err) {
        console.log(err);
      }
    })()
  );
}

async function fromCache(request) {
  const cache = await caches.open(DYNAMIC);
  const matching = await cache.match(request);

  return matching;
}

function fromNetwork(request) {
  return fetch(request);
}

async function saveToCache(request, response) {
  const cache = await caches.open(DYNAMIC);
  await cache.put(request, response);
}
