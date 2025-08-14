'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "abb3f07bd4de8f71f2486dab30bbd8f2",
"version.json": "05fcdcfe7ba17135f077f3a16b4a0b12",
"index.html": "c8131c61f01dfee65072550b5b552ab7",
"/": "c8131c61f01dfee65072550b5b552ab7",
"main.dart.js": "d0ae636844609ab72bfe4b49c5d5d58d",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "89250b9c659cfe7b47d4188ac801b89d",
"assets/AssetManifest.json": "3bfd938dae76fdb99c68aa05a1dabe36",
"assets/NOTICES": "a7784d703ed589621748df7fcfd6fb26",
"assets/FontManifest.json": "df6aa34e52ca1d04e44ce6d6adaf5812",
"assets/AssetManifest.bin.json": "98210fcfc016d5414be5c24f500e1492",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1902c4263064386c358c34c3b3784bc2",
"assets/fonts/MaterialIcons-Regular.otf": "e18044c73328b625e126add559716d66",
"assets/assets/images/svg/ic_clock.svg": "19f0107f2f82e526719849f7b8f547b5",
"assets/assets/images/svg/ic_right_arrow.svg": "56de4bb2c705a8b1b2939491b2ee83bf",
"assets/assets/images/svg/ic_add.svg": "76a6118605471bbed4b402e3201205da",
"assets/assets/images/svg/ic_home.svg": "607edd431245561eae7353127be58551",
"assets/assets/images/svg/ic_setting.svg": "7d839267148f95c705bfda167d9ab93d",
"assets/assets/images/svg/ic_down_arrow.svg": "3b4c34cbbbc3a3adc7ca409f1c94aad9",
"assets/assets/images/svg/ic_orders.svg": "322c8e80d83cec2be3b3eac479985a50",
"assets/assets/images/svg/ic_password.svg": "1695a1a6fc2e2d8b6057fe92b1d746f2",
"assets/assets/images/svg/shopping_cart.svg": "d216e2540f5232b5a278eb361c10e38b",
"assets/assets/images/svg/ic_email.svg": "132445ccaec19cb3476229c4205e9948",
"assets/assets/images/svg/ic_scoter.svg": "5eb096afb3310a173f8889c0f30d15a9",
"assets/assets/images/svg/ic_back.svg": "6e2ccf94e8b24b9717d52729f8af8b00",
"assets/assets/images/svg/ic_eye_off.svg": "3fa61b341d90408c7c7304e2844cf1f2",
"assets/assets/images/svg/ic_dish.svg": "619c4981f9a0423f0daa9c8a79100fa5",
"assets/assets/images/svg/ic_star.svg": "51ab5c5d94886784dcba41cb2c38a6b4",
"assets/assets/images/png/ic_google.png": "96faaa83243aa6c79cbc3faeec1ab48c",
"assets/assets/images/png/ic_back_dashboard.png": "3e28545d87e17a42362b8c9d032f1db6",
"assets/assets/images/png/doctor_patient.jpg": "13c93ba573ad6f6c22aa4c26e87a19a3",
"assets/assets/images/png/ic_language_english.png": "6c926c202808103bf606e0b1c9bedac0",
"assets/assets/images/png/ic_arrow_forward.png": "8a340fe49a431fba49b8e71a38585504",
"assets/assets/images/png/ic_social.png": "d5c557b2bb52532098734cc3ef90424e",
"assets/assets/images/png/ic_language_arabic.png": "a95c5c7c4d13c3cfa3acb46c018601c7",
"assets/assets/images/png/ic_radio_unselected.png": "890dfb89bb924807e6e9c4b4c799e8f6",
"assets/assets/images/png/ic_apple.png": "2a6433733c45ef7be4e7bd8c74cb1f8a",
"assets/assets/images/png/ic_minus.png": "caefb9fe6bf780b4a12b6c9734543de3",
"assets/assets/images/png/ic_checkbox_unselected.png": "eae333f0d898add3763ac115e93016ab",
"assets/assets/images/png/ic_checkbox_selected.png": "3d9ede3b0e95f0e8595047002fe0b9b2",
"assets/assets/images/png/ic_personal_details.png": "15e822c3625f4c2943ad408c1091d42b",
"assets/assets/images/png/ic_plus.png": "7156966dc83fb0e7d4c86ad1bff2cc38",
"assets/assets/images/png/ic_delete.png": "def99d1e4c2ef9872800551c68bcef98",
"assets/assets/images/png/ic_facebook.png": "99fd4d589bf98039251335f9c9003d9e",
"assets/assets/images/png/ic_notification_settings.png": "8b10fa5cc9696e2427af191de0ea0cc8",
"assets/assets/images/png/ic_comment.png": "17831ff3cc4db8602511935488528e5d",
"assets/assets/images/png/ic_discount_shape.png": "7a3d3aa92ec425ea9c2e94314413db33",
"assets/assets/images/png/ic_saved_address.png": "ff3ff927a894d59758546d461e2f85c5",
"assets/assets/images/png/ic_loyalty_points.png": "2f5b023af0ca935c3d2266501871bde4",
"assets/assets/images/png/ic_share.png": "3a5141d2266f2833dd8ce4b47b59213a",
"assets/assets/images/png/banners/select_plan.png": "9f6d47b82be1142adba244b973f91fda",
"assets/assets/images/png/banners/webmobile.png": "aebe0df4351c9f21edcf998d6d373d00",
"assets/assets/images/png/banners/plans.png": "cf141e58cd3759a0ce38cfaccecca63e",
"assets/assets/images/png/banners/uiux.png": "a59929498ac217617551cb3165ca4b53",
"assets/assets/images/png/banners/retail.png": "75fea51de8cda14bcba0bbe24a127927",
"assets/assets/images/png/banners/wireframe.png": "0720c664fd1cde08581b27678eae5870",
"assets/assets/images/png/banners/call_page.png": "69dbf5da52a7f3ce32295f3da66af027",
"assets/assets/images/png/banners/select_driver.png": "0d9c3d8eabb418c124d059096dbdc996",
"assets/assets/images/png/banners/healthCare.png": "8b901c53b47ddb2372cb5440514c82cf",
"assets/assets/images/png/banners/dev.png": "ef247263861261690ac6958d39695e08",
"assets/assets/images/png/banners/appDevelopment.png": "ef247263861261690ac6958d39695e08",
"assets/assets/images/png/banners/dinner.png": "f33b9a2c0e0aa207f84a4b2ca826c2b2",
"assets/assets/images/png/banners/start_screen.png": "d7790fd72f6aadc72fccf586fa94f2e7",
"assets/assets/images/png/banners/sitting_plan.png": "765e9a66b4a9f347dcd2cc8b12e0c874",
"assets/assets/images/png/banners/select_user.png": "d8b106a38440175152dd97ffb48d6f36",
"assets/assets/images/png/banners/select_restaurant.png": "f287f6401bca41ca7670ece167acba1e",
"assets/assets/images/png/banners/cloud.png": "f94a7e0de7ae39beb18a4a4fc428e214",
"assets/assets/images/png/banners/dinner_menu.png": "028865b9815fe2e6f37e34dba823bc59",
"assets/assets/images/png/banners/consultant.png": "63de914403c7c7ced4791dba3f061062",
"assets/assets/images/png/banners/fitness.png": "14ee7b3239dfb56bf6ebc9f7a705230f",
"assets/assets/images/png/banners/chatting.png": "48d89209877a75aad2beabc0aef38861",
"assets/assets/images/png/banners/manufacturing.png": "29faebb9f44ccda2362149460832baba",
"assets/assets/images/png/banners/ceremoney_home.png": "261b4f4434cd8ce2aa4aa7aaff1a44bc",
"assets/assets/images/png/banners/finance.png": "e2e79167b23f112e0409a92fa8eb67e2",
"assets/assets/images/png/banners/driver_map.png": "de8c1824e2cafa62b96dc48e83d1a595",
"assets/assets/images/png/temp3.png": "5724825e0e7285d29d176a0abb8b2244",
"assets/assets/images/png/temp2.png": "ce2b909864c6ce770f7ded8da9939827",
"assets/assets/images/png/next_tech_logo.png": "7849c78ca88992b01b313a7e7f6d2606",
"assets/assets/images/png/ic_edit.png": "279d61f3de824d7daea9568ae298402f",
"assets/assets/images/png/ic_term_condition.png": "7189ebd272807d6f69bbbd8f2ba50811",
"assets/assets/images/png/temp1.png": "b2666ca2c34e003f7e9b035d26a16054",
"assets/assets/images/png/temp5.png": "2c3a5a7e2fc5210991bd509c25bf8a4e",
"assets/assets/images/png/ic_search.png": "8d986d114abb41e54e4388b1ab2b2fb1",
"assets/assets/images/png/temp4.png": "240f3a54f294fb2dbacb98b54aee39c4",
"assets/assets/images/png/temp6.png": "343bf4c90b1329846eeaaaf5c35b2dff",
"assets/assets/images/png/temp7.png": "cb62fa0c63b594a6c05cd22871e28e2e",
"assets/assets/images/png/ic_help.png": "b8f2dc1a261debf92bda0c33574640b8",
"assets/assets/images/png/ic_payment_methods.png": "94c131a1bd0f376f4c8850eae46f0234",
"assets/assets/images/png/industry.jpg": "421c4edf0ef612cf94957f3725536f74",
"assets/assets/images/png/ic_radio_selected.png": "8523ea8bbde58b1fddd9ac4f1a1c5429",
"assets/assets/fonts/Montserrat-Medium.ttf": "bdb7ba651b7bdcda6ce527b3b6705334",
"assets/assets/fonts/Montserrat-Bold.ttf": "ed86af2ed5bbaf879e9f2ec2e2eac929",
"assets/assets/fonts/Montserrat-Semibold.ttf": "cc10461cb5e0a6f2621c7179f4d6de17",
"assets/assets/fonts/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/assets/fonts/Montserrat-Italic.ttf": "cc53ad8bb1c801746c831bb7ce493f74",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
