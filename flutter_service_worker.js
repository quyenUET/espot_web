'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "5f295479eb6df8f65533f10e20a7682f",
"index.html": "265dfe260e243f0b63c75552f7f81575",
"/": "265dfe260e243f0b63c75552f7f81575",
"firebase-messaging-sw.js": "00c6d90db396febd110f41a847633fa1",
"main.dart.js": "9cef93d2119bf1e8ff95b63df5e9e62f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "99f9cd18f5d93aa9961435ed90aa1d59",
"assets/AssetManifest.json": "9be375dfc80e665ae4ee0d824ee7dcf0",
"assets/NOTICES": "958e351a7dfa6b8bcc14d826b5aa2112",
"assets/FontManifest.json": "ed443bac309f0835550fca8fb74022dd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/strings/en.json": "8e08a81e7c4c4bec41bffc9256147bad",
"assets/assets/strings/vi.json": "2873018a44f3b639e6942dc6e8b89303",
"assets/assets/image/img_item_history_rental_battery_underway.png": "f8e26d7d8a88d66f9cc40ccc0d6c1cee",
"assets/assets/image/img_history_order_main_account_charge.png": "4ba18bdd856a3ce11c9e5982f59dfadb",
"assets/assets/image/img_notification.png": "8ba578c827d8fc5bf0efce917724de30",
"assets/assets/image/img_notification_blank.png": "c7c0d21cd888c02198bbe8dece1eaf76",
"assets/assets/image/img_search_map_empty_sm.png": "302e32ba71b4e128464aad15f9578350",
"assets/assets/image/img_detail_empty_battery.png": "b561160d8c4fe8e6abc1ed1318fa87af",
"assets/assets/image/img_new_member.png": "5dc6b1e9c97584a3cfc09d2cc47470ed",
"assets/assets/image/img_detail_deposit.png": "119f6de6bcfa8289854805dfe2f8cf00",
"assets/assets/image/img_deposit_momo.png": "bbd067c3f37ccf1b56f3e181bd959fad",
"assets/assets/image/img_onBroading_two_step_two.png": "8e33b24488b7c4ec3c5083afcc798755",
"assets/assets/image/img_document.png": "3c28558abcb01f9163ee20b7f45ee704",
"assets/assets/image/img_history_order_main_account_used_service.png": "e3c4642ffb65bd5a591bc4d462fd00bf",
"assets/assets/image/img_detail_cost_rental.png": "c599cd1f6396d2e3ef1471cf4477b55c",
"assets/assets/image/img_close_dialog.png": "91829ad4e162ae2f4e932b9440c28f89",
"assets/assets/image/img_support.png": "50abef22db5b3040ecccef666a3e4bc1",
"assets/assets/image/img_onBroading_one.png": "9483fe4c8566aa4e920c8dc093e9322d",
"assets/assets/image/img_techcombank.png": "dfc01c1efa69c253f02c0651350e6c01",
"assets/assets/image/img_item_company_demo.png": "4a68f6ce27a45d3b3ba23499016ed901",
"assets/assets/image/img_history_order_main_account_withdraw.png": "2b1fa58f8a7e8fc1448ec9f39c902720",
"assets/assets/image/img_history_order_main_account_transfer.png": "6a2f26823078ce93beb6cd015a12a298",
"assets/assets/image/img_order_dialog_intruction_pay_battery.png": "a6991ee6b7153cb29d12f8cb1b43f4f0",
"assets/assets/image/img_info_circle.png": "aa3ce8a4be4ce9da9cae3e6f672e0dda",
"assets/assets/image/img_order_package_rental_item_yellow.png": "01c0963fd7f18f62b64f1db3ca2443ba",
"assets/assets/image/img_order_item_battery.png": "885a5ce44970aa2fc77d31030deb5f95",
"assets/assets/image/img_instruction_pay_battery.png": "28497dc95222983f049a5bbb197cd5f5",
"assets/assets/image/img_briefcase.png": "40f1499099ddb40510c3361a84d6c044",
"assets/assets/image/img_item_history_rental_battery_deny.png": "c9e05c24b13b456324bc421ecbbbc022",
"assets/assets/image/img_arrow_right.png": "d0ea3c3675cce8b679954b71879306eb",
"assets/assets/image/img_onBroading_two_step_three.png": "3f2be970302afabddc2213f699e41747",
"assets/assets/image/img_translate.png": "f770fba9dadf108a30a0b922253fdc70",
"assets/assets/image/img_order_blank.svg": "8566d47cb7c1bbab52a017e2d1f4be51",
"assets/assets/image/img_detail_freetime_battery.png": "18615c60b7eb29d3f96b8b20d037c0ca",
"assets/assets/image/img_deposit_zalopay.png": "ca9537b75a16f150f40d4c24b98c83eb",
"assets/assets/image/img_waring.png": "c728f7352e7f76a4a80cdacaa28eed0e",
"assets/assets/image/img_demo_svg.svg": "5d814ca5803862c8ba710b6a01c425d7",
"assets/assets/image/img_order_blank.png": "fd6a8052d72b52cddc4ef1b1a835f726",
"assets/assets/image/img_translate.svg": "dcf6cc75b88a232c63b266c01ca69e6f",
"assets/assets/image/img_thecoffee_demo.png": "fae6b63a89d09054e5198f7b3d08710d",
"assets/assets/image/img_vietcombank.png": "6b082ed372b9c4f83984a17b3cbc9e80",
"assets/assets/image/img_withdraw_popup.png": "5fca8a59e47da80b6e135de1e2acd297",
"assets/assets/image/img_detail_amount_battery.png": "4d42a624d5b822135d0b36c5b44fede3",
"assets/assets/image/img_profile_english.png": "d50847b58adc2abb6bbc3dd7bab0d35b",
"assets/assets/image/img_onBroading_two_step_one.png": "981368324c8b81de34338cd4c24d01d2",
"assets/assets/image/img_item_history_rental_battery_success.png": "dc6aeec218387b5f7700b50390fbb70b",
"assets/assets/image/img_avatar_information.png": "9dd7f2a37ff9c28b724aead00f5888fe",
"assets/assets/image/img_profile_vietnam.png": "e2745e9ed896eb9ed034b3e2ebe3103a",
"assets/assets/image/img_profile.png": "9f34786c6a62b150e3690cf4ed11746f",
"assets/assets/image/img_profile_person_default.png": "59d78f17ab3a8a298ae0ab23a4503068",
"assets/assets/image/img_logout.png": "6c8bc16992f4f03514861921b31cc7a9",
"assets/assets/image/img_logo_espot.png": "3022d25fabcef26774d5f62c3bdc9a99",
"assets/assets/image/img_order_package_rental_item_white.png": "1202ec49039d4a1fe5b5953f2945ea8f",
"assets/assets/image/img_verification.png": "21014f6498c99be58599e365dc086b71",
"assets/assets/icon/icon_profile_not_verify.png": "ba50d4e561b039fa99362f3ecc3f335a",
"assets/assets/icon/icon_item_checked.png": "a95e46c790c6f98ddaac720d6c1e72b8",
"assets/assets/icon/icon_map_sent_location.png": "09fc7aa3f073ebc6624e69d2bbed392c",
"assets/assets/icon/ic_current_location.png": "9e9fbcada8883b648dc09cda21826716",
"assets/assets/icon/icon_tabbar_profile_checked.png": "324c43e66d84032d2fa87797a244eb02",
"assets/assets/icon/icon_profile_update_info_blank.png": "b28cadffc767f9555e6d460451eebb8c",
"assets/assets/icon/icon_withdraw_add_account_withdraw.png": "e451f20297e0ad9ebdfc42e73ef6ce1a",
"assets/assets/icon/icon_transfer_bank.png": "053abb5e51b8a8fb3fcc2ce8766f6a0d",
"assets/assets/icon/icon_profile_delete_account.png": "35f8e2ef05ba5b322aeb90fc7c85c9e0",
"assets/assets/icon/icon_order_code_small.png": "ba2456957337621d3dd2e37b722d0386",
"assets/assets/icon/icon_arrow_left.png": "2240dfe451c4a99809887a9be2421cf0",
"assets/assets/icon/icon_eye_hidden.png": "c5d1f48f5c219112707438aec3936382",
"assets/assets/icon/icon_profile_account_identifier.png": "70ac56e9af03aaa02194078a1ad29e62",
"assets/assets/icon/icon_deposit_transfer_bank.png": "9602840521204c5a082305e2aec1cb94",
"assets/assets/icon/icon_profile_cooperation_user.png": "9f34786c6a62b150e3690cf4ed11746f",
"assets/assets/icon/icon_profile_update_info.png": "09e764342d29b3dd21f3e06f3de26787",
"assets/assets/icon/icon_profile_cooperation_company.png": "40f1499099ddb40510c3361a84d6c044",
"assets/assets/icon/icon_profile_address.png": "98918ce727f871fec94297383e65fd6a",
"assets/assets/icon/icon_tabbar_order_unchecked.png": "27d031f0cd9411b9e10ceed3c58f523e",
"assets/assets/icon/icon_order_calenda_small.png": "c22bc460a0905b22a2b4d7875eb043e1",
"assets/assets/icon/icon_maker_zoom.png": "9ed14e0941a8a0637874e3d73c2e7d0e",
"assets/assets/icon/icon_profile_feedback.png": "2684e38cd5bcd12b9bc23eea8982aa20",
"assets/assets/icon/icon_sigup_dialog_checked.png": "320b3ce24f123d345a4bda53294be037",
"assets/assets/icon/icon_scan_camera.png": "4e44e98a12f0aa7e5533ddc46c6bf838",
"assets/assets/icon/icon_profile_facebook.png": "0b5fb725239e35d975bcadee8c810088",
"assets/assets/icon/icon_profile_verify.png": "21014f6498c99be58599e365dc086b71",
"assets/assets/icon/icon_problem_black.png": "999ba925aef7150de77c090bf7e22593",
"assets/assets/icon/icon_profile_feedback_scanner.png": "3f9296adc2dc3b4d3cac3eff0fd8d5fa",
"assets/assets/icon/icon_order_dolar_small.png": "d3ad64dfd74e3e6abe50af5a2e29cf91",
"assets/assets/icon/icon_item_unchecked.png": "a1b4239b6e118d849077d844268dcb32",
"assets/assets/icon/icon_profile_member_new.png": "5dc6b1e9c97584a3cfc09d2cc47470ed",
"assets/assets/icon/icon_profile_close_member.png": "4902754415391c9c63d228bcd781226b",
"assets/assets/icon/icon_deposit_electronic_wallet.png": "ce0de01ca61f0e7fa7989a8089487c35",
"assets/assets/icon/icon_profile_checked_litte.png": "bd112069a33a5224a541d42cdfa3bf84",
"assets/assets/icon/icon_tab_map_intruction.png": "f2993c14343e85c57090c5b8a0bd9e4f",
"assets/assets/icon/icon_profile_gender.png": "9f50557094f2a2bd6daf406cae3c43ab",
"assets/assets/icon/icon_signup_telephone.png": "f38e8f96bfa5458cecb2f20c60bea03c",
"assets/assets/icon/icon_signup_lock.png": "f5d9668677aa8700a7113bfb5ea8ad39",
"assets/assets/icon/icon_problem.png": "cec598bc4c8e14aa4b8d0896f2e3cb5b",
"assets/assets/icon/icon_order_check_small.png": "d0a6376897463567e7ff74a988e562b2",
"assets/assets/icon/icon_profile_change_password.png": "54bcd71092ffbc149274c0f2dce14ea9",
"assets/assets/icon/icon_eye_show.png": "591e317ea6d31154374f87f7da599338",
"assets/assets/icon/icon_tabbar_scan.png": "6a9b41e87c9f5116fdc148e56b05d24a",
"assets/assets/icon/icon_profile_google.png": "91fc207ff4d19b9b6418f9873b111a73",
"assets/assets/icon/icon_detail_dialog_telephone.png": "f4bc16cfd3da3d8e89b77ddf477dcf67",
"assets/assets/icon/icon_profile_dialog_logout.png": "6c8bc16992f4f03514861921b31cc7a9",
"assets/assets/icon/icon_onbroading_arrow_right.svg.png": "d18717d745644cf897a074cf82650620",
"assets/assets/icon/icon_signup_lock_error.png": "3e8b4460bf4869bc094f26299e93f02a",
"assets/assets/icon/icon_tabbar_notifi_unchecked.png": "e4ed368b7cbabe23466c87a8308c8b62",
"assets/assets/icon/icon_order_oclock_small.png": "ed83aa5ad9ff106f381be4db6936a7b2",
"assets/assets/icon/icon_signup_dialog_checked_error.png": "c9c27fbbb0020f8991a13cb533704291",
"assets/assets/icon/icon_order_problem_small.png": "aa3ce8a4be4ce9da9cae3e6f672e0dda",
"assets/assets/icon/icon_arrow.png": "c2c5a29b5e801884b6215d679d6314b5",
"assets/assets/icon/icon_scan_library.png": "6a6cf13fe2ba6923b6ad9447919e91e4",
"assets/assets/icon/icon_onbroading_arrow_right.png": "d18717d745644cf897a074cf82650620",
"assets/assets/icon/icon_profile_calenda.png": "2972fa63b729e54f6753594c679595e4",
"assets/assets/icon/icon_tabbar_order_surplus_voucher.png": "1469cae9b65877ac132d0afc77ac864b",
"assets/assets/icon/icon_tabbar_notifi_checked.png": "17bfb6ccebf1f94b36925a3c672a964c",
"assets/assets/icon/icon_profile_email.png": "0b44d70cfdc059b588d6575308819661",
"assets/assets/icon/icon_item_compass.png": "dd6e6d588a829af3b0d877a5985e8d14",
"assets/assets/icon/icon_checkout_failed.png": "4087a7660f7d0470c2048071ce509c09",
"assets/assets/icon/icon_dialog_close.png": "ae6861895b6044230957b7df935a40ae",
"assets/assets/icon/icon_tabbar_order_checked.png": "742291003f700d71cdbc8eab947d74ec",
"assets/assets/icon/icon_map_support_dialog_problem.png": "c728f7352e7f76a4a80cdacaa28eed0e",
"assets/assets/icon/icon_tab_map_support.png": "b70bd5b85cae3c6b5013371d86e1f85f",
"assets/assets/icon/icon_tabbar_map_unchecked.png": "5970cbbcb2dd2678a59cfa660b2da92d",
"assets/assets/icon/icon_maker.png": "6cc3ab1592f3597a110f489c7a11e0a6",
"assets/assets/icon/icon_profile_person.png": "9f34786c6a62b150e3690cf4ed11746f",
"assets/assets/icon/icon_onbroading_arrow_left.png": "f1359150931412eabcb53b07f062c7ff",
"assets/assets/icon/icon_checkout_success.png": "e2a0c5ae4f86cd68f5452044bd619b6e",
"assets/assets/icon/icon_maker_selected.png": "a83a023f43e863f78d463830e860424d",
"assets/assets/icon/icon_profile_member_main.png": "ec3f12bd1599e5922be46c5d126dff98",
"assets/assets/icon/icon_transfer_bank_litter.png": "c38b725cfdcee574d31c8be9d2e8b21f",
"assets/assets/icon/icon_order_refresh_small.png": "9125b8aa56326bc5b1361aecc8ab5c73",
"assets/assets/icon/icon_search_location.png": "69a4cc6f9b62c5e53908e1419bac0242",
"assets/assets/icon/icon_scan_flash.png": "8d5ec22956d7dfb9033fabb5d7326630",
"assets/assets/icon/icon_arrow_right.png": "0b9a0358eec5150974d47baded043807",
"assets/assets/icon/icon_tabbar_profile_unchecked.png": "fb5327ba4f1d3cf17b3b4db4b164a196",
"assets/assets/icon/icon_tabbar_map_checked.png": "ba65094162a33bbd399abcb59eb6bf1d",
"assets/assets/icon/icon_profile_telephone.png": "5f1128a785b61ab3d2f84a6b470e60ea",
"assets/assets/fonts/svn_gotham_regular.ttf": "92f72485aa0eb37eeaba4dae908ee635",
"assets/assets/fonts/svn_gotham_ultra_italic.ttf": "4862918ab482eca36ac0f560a3abbd36",
"assets/assets/fonts/svn_gotham_book.ttf": "dadb1c8f00b62549d945f3dd83beb0b2",
"assets/assets/fonts/svn_gotham_bold.ttf": "efe9c3968312e35b1a6047387c5a853b",
"assets/assets/fonts/svn_gotham_black_italic.ttf": "b71bf7b41053ccbce4355af2771de89d",
"assets/assets/fonts/svn_gotham_thin.ttf": "9e64c4ffd1ffa6cfe7f17b2a63ac1ec9",
"assets/assets/fonts/svn_gotham_black.ttf": "d700ed13e542bf1d05e0ce94cb9e76d6",
"assets/assets/fonts/svn_gotham_thin_italic.ttf": "b252524a5fbe67cdf8ce41fe31d1ed65",
"assets/assets/fonts/svn_gotham_ultra.ttf": "96248acef869d72258a0468816f4abe6",
"assets/assets/fonts/svn_gotham_book_italic.ttf": "8675b45580f03777e32cbae2e95d8301",
"assets/assets/fonts/svn_gotham_xlight_italic.ttf": "c07589212d535890103888cceb76fc93",
"assets/assets/fonts/svn_gotham_bold_italic.ttf": "cc15f53561532239d5d3f00bc951c035",
"assets/assets/fonts/svn_gotham_xlight.ttf": "3fbef667c8bfeae241910ca0907fc3bd",
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
