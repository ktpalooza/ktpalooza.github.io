'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "977f7f2b1ff24974259e538b02d69dcf",
"index.html": "962643375f6042fc9b69ea024943a81a",
"/": "962643375f6042fc9b69ea024943a81a",
"main.dart.js": "99dd7f5889c464d47ee318dd3ae55915",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "70d4dc8604e217542f95298b5414c42c",
"assets/AssetManifest.json": "886ad7c4eb314b0e9069d8ad04805e76",
"assets/NOTICES": "924c41dbfc7e163dab6d5c3ac31e5d64",
"assets/FontManifest.json": "1b0fc78227d455a4059e702687f1e081",
"assets/AssetManifest.bin.json": "9c149f33ad750861c36d0187c287542f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "4b390222c92819c4e0f6a92b490250c2",
"assets/fonts/MaterialIcons-Regular.otf": "c0c31f1f2f4736ff706993e28aee91c2",
"assets/assets/images/new-background.jpg": "863f8123dbb0d2002287248a16500927",
"assets/assets/images/ktpalooza-logo.png": "02ee7833ea8f753769be40fc46c043c2",
"assets/assets/images/beep_bop.PNG": "bd36fb882a30ab18d4bcacdf0cb07ceb",
"assets/assets/images/background.png": "a87f9313b460abc45853526f56bc3a81",
"assets/assets/images/mario.PNG": "6efa4a72cfa73cd2190346934793c8ab",
"assets/assets/fonts/SourceSansPro-BlackItalic.ttf": "119307649b6b56cff60007bc0427f682",
"assets/assets/fonts/SourceSansPro-SemiBoldItalic.ttf": "9128546958b012c8991fc25bf89b1962",
"assets/assets/fonts/SourceSansPro-Regular.ttf": "47dbe5824a2d82b794ef1f52809699a5",
"assets/assets/fonts/SF-Pro-Display-Bold.otf": "3dc0dbf580bc20030c09d3ad1289e444",
"assets/assets/fonts/SourceSansPro-Bold.ttf": "09ad953751e1109778ece9318df70540",
"assets/assets/fonts/SF-Pro-Display-Medium.otf": "274391e19ede3d193f3a88cf223aca57",
"assets/assets/fonts/SF-Pro-Display-Heavy.otf": "cdd118538ba804e031bf978ee38c1566",
"assets/assets/fonts/SourceSansPro-LightItalic.ttf": "9e85b157c839285dbef77b21566eced0",
"assets/assets/fonts/SourceSansPro-Light.ttf": "e7208e0bdca1887f658b9ac66c988a95",
"assets/assets/fonts/SourceSansPro-Black.ttf": "6aac2bc43f7aa04f6b6fcb218b51bd6b",
"assets/assets/fonts/SF-Pro-Display-MediumItalic.otf": "eb62afedf92bb3b8c82bf9171262c46f",
"assets/assets/fonts/SF-Pro-Display-HeavyItalic.otf": "138ff859d992654f246e28c6eb952d27",
"assets/assets/fonts/SourceSansPro-ExtraLight.ttf": "9abcaabad7edf02f2033933f0a96221d",
"assets/assets/fonts/SourceSansPro-BoldItalic.ttf": "6319587c04e562f16b4d37f7152ba02e",
"assets/assets/fonts/SourceSansPro-SemiBold.ttf": "c1b4f417cf21451e85a0baccbfd8edc8",
"assets/assets/fonts/SF-Pro-Display-BlackItalic.otf": "886bf89d0be0ca7e311d8c5f73f22e88",
"assets/assets/fonts/SF-Pro-Display-Black.otf": "dbb1a2c3c1c56f043b4288f3e5082b02",
"assets/assets/fonts/SourceSansPro-ExtraLightItalic.ttf": "71bc3fb711b39e83bd24ad7f7775369e",
"assets/assets/fonts/SourceSansPro-Italic.ttf": "b556f79ff1e9821d6e27ba9b4a985842",
"assets/assets/fonts/SF-Pro-Display-BoldItalic.otf": "ffe20e3b2296c1b18b6abefdf7c3eed5",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
