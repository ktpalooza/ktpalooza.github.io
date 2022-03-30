'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "dbc2cadd04789d89ba0877710eeadf23",
"index.html": "ea57303a2beabcfd9856a25aa42bce25",
"/": "ea57303a2beabcfd9856a25aa42bce25",
"main.dart.js": "0ed9b5b14e610c9da23c7612702acae8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.PNG": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "70d4dc8604e217542f95298b5414c42c",
".git/config": "1e8df44567168c459394ec1f3cf0f2c6",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/92/8aa3705e6b9c8a67fbb360e8efbd3dc2516791": "ab54a31109d847bc5e94fd2386966d31",
".git/objects/66/cdbb2da47b094791aba433ec5ba07167d0ea74": "79dc7dfe94b798f6611689cfdec9f93c",
".git/objects/57/f824b1c00dbfab54a9ad5fac24ee578c1e8fa8": "306d5102415db507827e557bcc144656",
".git/objects/03/e95964c999dc91018af4ad43ef3db019d28e4d": "f3d5316fed3a4c6d5a1fc2511888e769",
".git/objects/9b/0e83d314e11336c86807165d10c0365eeac1f6": "91eaaf8c7ec56e3d38bc531869a36610",
".git/objects/60/625e16429cf63066fe6cc4eac6c0fa9e6096e7": "cb8f6fa95db378801881468d168fc049",
".git/objects/5a/f065994f0d7d66251a57f7ff7e0d31a0889f17": "ae24177ffde5ee222274f99292d86812",
".git/objects/33/87ba8f065194935ed3a90a0db8fbaf882e3eac": "fe9c58b835cab344693ac97ae5cea0f6",
".git/objects/9c/3891b75910dff7c0093a24da82290e65f25c05": "a1dd8430d32800ca42fa6dfd307d522d",
".git/objects/a4/1b38ad189fb5b44ec8c290ebbd51c0818a3275": "d468dddb32c7cb93c6299d431f693859",
".git/objects/bb/42fefdedbe5719e36ed79c40a19f8831ba6f60": "def71cc45ae08d96da319f2b0b07cd47",
".git/objects/b3/8bae9472ef2901311f3c88f9b41cbf49004a0b": "6548bd0589e4519f3457256436de9eb6",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/65e8985bee701c0619c4c94f41d3584721cd62": "f255b8d0d81f8b1594d7e50560e9a91d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/d50a85c7744158f3da1ce119e7949ab82c5e7a": "5fc1494f1b5424339d69bee4ee7f848a",
".git/objects/cf/0bddf61b7a4012079bc7edd4130f1ce835015a": "2ff5915e3463617f7c646678e6c797d7",
".git/objects/ca/b10ae2d9adf4183f310d144f59bab73834e75e": "dd0611641c7290cf814f6669e29917c7",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/7d/bece78c52c5df9bff391f2db6f08391bb09b04": "bb591aaef6935316b10a70188d1163a7",
".git/objects/87/55b1c283afa0c3b68c8e5d0a8ed8a728e924e3": "a82a624ce893a9e2658185b0436037dd",
".git/objects/80/74e3acb8a40dcb3e1aa35ae67be4a4fcaffa99": "593ac7aefb8ab1fede555f4106baa8b2",
".git/objects/86/56f3688116b15f9e896b23428c0bb8bbfe8b13": "fad1150aaf75b42b587f56e0844d4c62",
".git/objects/86/58d931744afc9456caf250eab41fb1308a5f38": "a87f6376299d896d3247c8393489132b",
".git/objects/6b/440eeae137db56aae28eba000a18a39aaa3e24": "922e61775fee6eef2b8417ed26d0565a",
".git/objects/6e/218493620fac6fc58796d141a10aeb5e1f8da3": "44c10b152ea913fca302b0528d5ee329",
".git/objects/36/767768c76ede70383b14c91d005579b1d1a84b": "51809df576fb4d0224d273a52ad54d2f",
".git/objects/98/e8579745c9afe420cb50d573ff4e93c93929a6": "3cf726d554936e50e416bccf583caa70",
".git/objects/3f/102d51ec8df710f2989b595368083c9ebd0b6e": "b0e0dc866a5c212c4fe0e8659a312b8d",
".git/objects/99/dcc81f91a87e587736fc8c01f3429cb2871bff": "3b434ff27622b7a97ff61383bdbe3deb",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/55/27d71cd33d21fb12a6c9be1e1459c379b815ab": "a9f57fc920d188429f033b823b614751",
".git/objects/64/a0e8033ac258749c5a2119d9f0d163b581dd83": "744e2b34e709d291e2eec1df60b469cf",
".git/objects/b8/879af096f11b3404378e1ae9217f517c840747": "883f677a9763b41f4d7b088611e2e814",
".git/objects/aa/85108eaea2c39e6debb0388a1064d6eb8b5ce1": "148b8a0f1bff0a2b3ac9e4d3dc58febb",
".git/objects/db/759e0bc1d237465ddfdded0caecde910aeba8b": "691dc73b8b1f61af2e176d3a1b6b563b",
".git/objects/b0/cb9834609e002002364b404a01e0fd8f886be8": "7bc7414e6a0fc394962ee12c6527f9ff",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/cd/49362952e4b52087fe36043de644622d7bc80d": "1ee275c1992b41b59009e3eefba89d25",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e9/726d6a08070626481fe5e6c888a0d4a13b1886": "1e02d7c67333603f4156b6ad0dc455d1",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/70/82ab4899d20e842ba7ed05949537f5c796bd28": "4420d1411a429de0b71cce6b39e55e29",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/1c/93e9eef52696f3b1fd0edc0d1ec653ee8c0e0b": "df4f57b6dc507f81cb4a2eb04d1955c4",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "39c771843dcf9d5bedcfd61e2379cac7",
".git/logs/refs/heads/master": "39c771843dcf9d5bedcfd61e2379cac7",
".git/logs/refs/remotes/origin/master": "8a66a426b36d3f147282d75bd40e8dbc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "a179d03592cdfed9e8d9f22cb8015243",
".git/refs/remotes/origin/master": "a179d03592cdfed9e8d9f22cb8015243",
".git/index": "afca985ea7056528a0bf9177d8c48f9f",
".git/COMMIT_EDITMSG": "04f79732aed46d5a4f25fbe2ad61c4e7",
"assets/AssetManifest.json": "88d50aa084ef844797c675bc59a0803e",
"assets/NOTICES": "9e3e48e2a0e7296fa8af8e47c77a8f32",
"assets/FontManifest.json": "2d2853333f130bdf4b14e7608dd44c0d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/images/ktpalooza-logo.png": "02ee7833ea8f753769be40fc46c043c2",
"assets/assets/images/beep_bop.png": "bd36fb882a30ab18d4bcacdf0cb07ceb",
"assets/assets/images/background.png": "a87f9313b460abc45853526f56bc3a81",
"assets/assets/images/mario.png": "6efa4a72cfa73cd2190346934793c8ab",
"assets/assets/fonts/SourceSansPro-BlackItalic.ttf": "119307649b6b56cff60007bc0427f682",
"assets/assets/fonts/SourceSansPro-SemiBoldItalic.ttf": "9128546958b012c8991fc25bf89b1962",
"assets/assets/fonts/SourceSansPro-Regular.ttf": "47dbe5824a2d82b794ef1f52809699a5",
"assets/assets/fonts/SourceSansPro-Bold.ttf": "09ad953751e1109778ece9318df70540",
"assets/assets/fonts/SourceSansPro-LightItalic.ttf": "9e85b157c839285dbef77b21566eced0",
"assets/assets/fonts/SourceSansPro-Light.ttf": "e7208e0bdca1887f658b9ac66c988a95",
"assets/assets/fonts/SourceSansPro-Black.ttf": "6aac2bc43f7aa04f6b6fcb218b51bd6b",
"assets/assets/fonts/SourceSansPro-ExtraLight.ttf": "9abcaabad7edf02f2033933f0a96221d",
"assets/assets/fonts/SourceSansPro-BoldItalic.ttf": "6319587c04e562f16b4d37f7152ba02e",
"assets/assets/fonts/SourceSansPro-SemiBold.ttf": "c1b4f417cf21451e85a0baccbfd8edc8",
"assets/assets/fonts/SourceSansPro-ExtraLightItalic.ttf": "71bc3fb711b39e83bd24ad7f7775369e",
"assets/assets/fonts/SourceSansPro-Italic.ttf": "b556f79ff1e9821d6e27ba9b4a985842",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
