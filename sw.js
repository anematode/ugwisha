const CACHE_NAME = 'ugwisha-sw-v1558833138490';
const BACKGROUND_CACHE_NAME = 'ugwisha-backgrounds'; // don't change this
const EXTENSIONS_CACHE_NAME = 'ugwisha-extensions'; // don't change this either
const urlsToCache = [
  './',
  './manifest.json',
  './css/ugwisha.css',
  './ugwisha.js',
  './js/gunn.js',
  './images/material-check_box.svg',
  './images/material-keyboard_arrow_left.svg',
  './images/material-keyboard_arrow_right.svg',
  './images/material-keyboard_arrow_up.svg',
  './images/material-apps.svg',
  './images/logo-192.png',
  './images/logo-512.png',
  './images/logo-ios.png',
  './images/logo-paly-192.png',
  './images/logo-paly-512.png',
  './images/logo-paly-ios.png',
  './images/sheep/left-sheep-curious.svg',
  './images/sheep/left-sheep-running-sad-D.svg',
  './images/sheep/left-sheep-standing-blowing-caterpillars.svg',
  './images/sheep/right-sheep-D-mouth.svg',
  './images/sheep/right-sheep-fishing.svg',
  './images/sheep/right-sheep-hot-air-balloon.svg',
  './images/sheep/right-sheep-sleeping.svg',
  './images/sheep/standing-sheep-arms-out.svg',
  './images/sheep/standing-sheep-classy.svg',
  './images/sheep/standing-sheep-doing-ballet.svg',
  './images/sheep/standing-sheep-flowers.svg',
  './images/sheep/standing-sheep-hungry.svg',
  './images/sheep/two-sheep-ice-cream.svg',
  './images/sheep/two-sheep-stack.svg',
  'https://fonts.googleapis.com/css?family=Roboto+Condensed',
  'https://fonts.gstatic.com/s/robotocondensed/v16/ieVl2ZhZI2eCN5jzbjEETS9weq8-19K7DQ.woff2'
];

function send(data) {
  self.clients.matchAll().then(clients => clients.forEach(c => c.postMessage(data)));
}

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)).then(() => self.skipWaiting()));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request, {ignoreSearch: true}).then(response => response || fetch(e.request)));
  caches.open(EXTENSIONS_CACHE_NAME) // update cache if it's in the extension cache
    .then(cache => cache.match(e.request)
      .then(response => response && cache.add(e.request)));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(names => Promise.all(names.map(cache => CACHE_NAME !== cache && BACKGROUND_CACHE_NAME !== cache && EXTENSIONS_CACHE_NAME !== cache ? caches.delete(cache) : undefined))).then(() => self.clients.claim()));
});
