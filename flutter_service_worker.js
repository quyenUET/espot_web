'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "5f295479eb6df8f65533f10e20a7682f",
"index.html": "3bcd2687c16b636057604af45d613d99",
"/": "3bcd2687c16b636057604af45d613d99",
"firebase-messaging-sw.js": "00c6d90db396febd110f41a847633fa1",
"main.dart.js": "53bd1c738fb6059ef9b30301cf699873",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "99f9cd18f5d93aa9961435ed90aa1d59",
"assets/AssetManifest.json": "9a8ef310194033c03140950ec8aca8fe",
"assets/NOTICES": "bd626cdc7a30de8bf0dc3084f61e0660",
"assets/FontManifest.json": "ed443bac309f0835550fca8fb74022dd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/strings/en.json": "1f2081dd880edb2a0e8a4381f7d1f69b",
"assets/assets/strings/vi.json": "79a8a51f5f60427735b072ea5e04a807",
"assets/assets/image/img_info_circle.svg": "4956cc7e3514131493da6ad87b25381b",
"assets/assets/image/img_history_order_main_account_transfer.svg": "8312869a631a8a2864dc3a46d52f68e6",
"assets/assets/image/img_history_order_main_account_withdraw.svg": "d3ab440d534b4fd5ee10c16ee3357760",
"assets/assets/image/img_notification.png": "8ba578c827d8fc5bf0efce917724de30",
"assets/assets/image/img_item_company_demo.svg": "4324ec522b478742e98259758bfb3fc0",
"assets/assets/image/img_deposit_momo.png": "bbd067c3f37ccf1b56f3e181bd959fad",
"assets/assets/image/img_onBroading_two_step_two.png": "8e33b24488b7c4ec3c5083afcc798755",
"assets/assets/image/img_support.svg": "249f838b85885dd297e749763e01adac",
"assets/assets/image/img_close_dialog.svg": "a757deac0ceb29ddf79705290ce3dd9c",
"assets/assets/image/img_detail_cost_rental.svg": "f338c7c979edd85f38e52219ee06c3cb",
"assets/assets/image/img_history_order_main_account_used_service.svg": "26101548ea3f7eb36adaf14b5ef193c7",
"assets/assets/image/img_document.svg": "3b68ffa1c7605bf2da9bf5821fe14567",
"assets/assets/image/img_onBroading_one.png": "9483fe4c8566aa4e920c8dc093e9322d",
"assets/assets/image/img_techcombank.png": "dfc01c1efa69c253f02c0651350e6c01",
"assets/assets/image/img_detail_deposit.svg": "7bdd8204ca24d50f603e69333a1c0d26",
"assets/assets/image/img_detail_empty_battery.svg": "05a7ef53afddf75fa9e831e7b0f8a581",
"assets/assets/image/img_search_map_empty_sm.svg": "2bf56be824991f0827792a487fb80086",
"assets/assets/image/img_new_member.svg": "4a627d2ae4f5c10f39ff2ade145a48c5",
"assets/assets/image/img_history_order_main_account_charge.svg": "128ecbb2cb66f380e9a54d110ebad58f",
"assets/assets/image/img_notification_blank.svg": "291c454463e611f594f565deb3300607",
"assets/assets/image/img_item_history_rental_battery_underway.svg": "ec69bb329bfdded3f1c6320015dcc34b",
"assets/assets/image/img_order_dialog_intruction_pay_battery.png": "a6991ee6b7153cb29d12f8cb1b43f4f0",
"assets/assets/image/img_verification.svg": "58911d6dbc8684619d864f42a38ceda3",
"assets/assets/image/img_order_package_rental_item_yellow.png": "01c0963fd7f18f62b64f1db3ca2443ba",
"assets/assets/image/img_logout.svg": "c1564b2bd7b9834c7b3989fec47853e6",
"assets/assets/image/img_order_item_battery.png": "885a5ce44970aa2fc77d31030deb5f95",
"assets/assets/image/img_profile.svg": "4d0f76deeb2ed9e3deae94a5dbbe1258",
"assets/assets/image/img_instruction_pay_battery.png": "28497dc95222983f049a5bbb197cd5f5",
"assets/assets/image/img_item_history_rental_battery_success.svg": "2b49c6d04b15da98ab7eaae5becaa2f2",
"assets/assets/image/img_onBroading_two_step_three.png": "3f2be970302afabddc2213f699e41747",
"assets/assets/image/img_detail_amount_battery.svg": "7babbde33d19e6572e125e1900f42d9b",
"assets/assets/image/img_order_blank.svg": "8566d47cb7c1bbab52a017e2d1f4be51",
"assets/assets/image/img_waring.svg": "fa86f2bc850ec98f6973a895d4771b42",
"assets/assets/image/img_deposit_zalopay.png": "ca9537b75a16f150f40d4c24b98c83eb",
"assets/assets/image/img_demo_svg.svg": "5d814ca5803862c8ba710b6a01c425d7",
"assets/assets/image/img_translate.svg": "dcf6cc75b88a232c63b266c01ca69e6f",
"assets/assets/image/img_thecoffee_demo.png": "fae6b63a89d09054e5198f7b3d08710d",
"assets/assets/image/img_vietcombank.png": "6b082ed372b9c4f83984a17b3cbc9e80",
"assets/assets/image/img_withdraw_popup.png": "5fca8a59e47da80b6e135de1e2acd297",
"assets/assets/image/img_profile_english.png": "d50847b58adc2abb6bbc3dd7bab0d35b",
"assets/assets/image/img_arrow_right.svg": "8f1bb795839ea539abb80a43a401f6ba",
"assets/assets/image/img_onBroading_two_step_one.png": "981368324c8b81de34338cd4c24d01d2",
"assets/assets/image/img_avatar_information.png": "9dd7f2a37ff9c28b724aead00f5888fe",
"assets/assets/image/img_profile_vietnam.png": "e2745e9ed896eb9ed034b3e2ebe3103a",
"assets/assets/image/img_item_history_rental_battery_deny.svg": "22b15fad1ab581687e3019993fc8bff5",
"assets/assets/image/img_briefcase.svg": "05892efefda535335191c2b3b9568ded",
"assets/assets/image/img_profile_person_default.png": "59d78f17ab3a8a298ae0ab23a4503068",
"assets/assets/image/img_logo_espot.png": "3022d25fabcef26774d5f62c3bdc9a99",
"assets/assets/image/img_order_package_rental_item_white.png": "1202ec49039d4a1fe5b5953f2945ea8f",
"assets/assets/icon/icon_profile_dialog_logout.svg": "cab542195dd090a79eff74639103aace",
"assets/assets/icon/icon_detail_dialog_telephone.svg": "7480becaa2aa42445f1515495b14fc6e",
"assets/assets/icon/icon_profile_google.svg": "e0735195e6f897a54f4326e87819d1d8",
"assets/assets/icon/icon_tabbar_scan.svg": "dfc1017588b35d3e03cb1120afc69fe3",
"assets/assets/icon/icon_profile_change_password.svg": "9d589523b266ce3a51cb0a5d992fb2b2",
"assets/assets/icon/icon_order_check_small.svg": "f06d113e8c0701f0c3fda8881083c9c4",
"assets/assets/icon/icon_problem.svg": "ac4b7a22459c2e28e6a07cbdb46f3cfc",
"assets/assets/icon/icon_eye_show.svg": "9b92dbc7c9b08a82df90c6c1310ccb4b",
"assets/assets/icon/icon_signup_lock.svg": "a09187e827cc206367e29aa2e4046d8b",
"assets/assets/icon/icon_signup_telephone.svg": "591b2fd4fd2074e5e9f6c645786e6c40",
"assets/assets/icon/icon_tab_map_intruction.svg": "f6600f1a7a209e2e971642d53407a36b",
"assets/assets/icon/icon_profile_checked_litte.svg": "b20e4ea1d01756ffaf4d953819476ddd",
"assets/assets/icon/icon_profile_gender.svg": "47e81a8b243f1efff00384f41a8ab1dc",
"assets/assets/icon/icon_item_unchecked.svg": "33106c5694a8a0831252c21e988c252d",
"assets/assets/icon/icon_deposit_electronic_wallet.svg": "e2dc0fc7a9763a6f35c7454d56e81a76",
"assets/assets/icon/icon_profile_close_member.svg": "7f5d98c5809b8596a42d5a62cf12d24c",
"assets/assets/icon/icon_order_dolar_small.svg": "baa7c3b445134aae3950af977bb58c86",
"assets/assets/icon/icon_profile_feedback_scanner.svg": "18d2952331fd3414dc2fb5e9dfd34738",
"assets/assets/icon/icon_problem_black.svg": "f2a4bb4e507ad34d25c034b782102f5b",
"assets/assets/icon/icon_profile_verify.svg": "cce0b8cf47962e7543910c15a898d4f6",
"assets/assets/icon/icon_sigup_dialog_checked.svg": "984730f78bee267792fb9f398c701b94",
"assets/assets/icon/icon_profile_feedback.svg": "ee3011d3977b03926a9ab98deccbeb56",
"assets/assets/icon/icon_profile_facebook.svg": "052c0d31d05a21b856330a14e38aba08",
"assets/assets/icon/icon_scan_camera.svg": "ffaf026cb189856ab0d8ecbe05d2f5f3",
"assets/assets/icon/icon_maker_zoom.svg": "a8e66ee72a06627beedab24d0ad6200a",
"assets/assets/icon/icon_tabbar_order_unchecked.svg": "5d112632c9edea02934ed9d943983636",
"assets/assets/icon/icon_order_calenda_small.svg": "7860b72e58af2df4dc4fa5c706002e91",
"assets/assets/icon/icon_profile_address.svg": "54da77236449bbba93d2d87878920760",
"assets/assets/icon/icon_deposit_transfer_bank.svg": "6b2ce7a9db483bbc88f24382a6ca7e9c",
"assets/assets/icon/icon_profile_account_identifier.svg": "0842062d9c6ec126b2ce989dafb4803e",
"assets/assets/icon/icon_profile_cooperation_company.svg": "027481fa373cc7172b50ab4ec9533f4b",
"assets/assets/icon/icon_profile_update_info.svg": "4f5bf88ee72f291ef5f6396a706f6e9f",
"assets/assets/icon/icon_profile_cooperation_user.svg": "ad1ff3d434a1094ef9fc480b14686ce5",
"assets/assets/icon/icon_eye_hidden.svg": "a4ac63f1a889506c08282778f77a8c40",
"assets/assets/icon/icon_arrow_left.svg": "3ff1c5e08f74af7bbc8960afb33a8088",
"assets/assets/icon/icon_order_code_small.svg": "ba68cf0ef3766a2202ca71a6e4c76f5e",
"assets/assets/icon/icon_profile_delete_account.svg": "bd9ffb783b95791340750588a7aa160a",
"assets/assets/icon/icon_transfer_bank.svg": "58be83d4773562f8ce1ef48892b72d8c",
"assets/assets/icon/icon_withdraw_add_account_withdraw.svg": "c696b21128de3e9d0db96d79a605d2f9",
"assets/assets/icon/icon_tabbar_profile_checked.svg": "4e40138d4423173c232f2f8376f16448",
"assets/assets/icon/icon_profile_update_info_blank.svg": "7a3763c96a7e4c01a3b61560f036242c",
"assets/assets/icon/icon_profile_not_verify.svg": "875adb870af2db763288bb10d2fb631f",
"assets/assets/icon/icon_item_checked.svg": "36d977fc3f435351633c590bbbce60ff",
"assets/assets/icon/icon_map_sent_location.svg": "358a3032dcb1c410d7fe905f003199ae",
"assets/assets/icon/icon_profile_telephone.svg": "13ba7328a979373685f7a39cd47bd9e6",
"assets/assets/icon/icon_tabbar_map_checked.svg": "8cd3eab555e65bc8d0403baedf8794f2",
"assets/assets/icon/icon_tabbar_profile_unchecked.svg": "40f1b81201060cf20fefe791926ac063",
"assets/assets/icon/icon_arrow_right.svg": "20ec322d456bc3ed257934cee0afa074",
"assets/assets/icon/icon_scan_flash.svg": "6e2fcf106447161d95a478a38dd9c7bc",
"assets/assets/icon/icon_order_refresh_small.svg": "f63df54ef5213b34d460a01546218bb2",
"assets/assets/icon/icon_search_location.svg": "b97a4a076fcfcad394514ab0572d85af",
"assets/assets/icon/icon_profile_member_main.svg": "85c59cd7d060a43d2dc614be1958745d",
"assets/assets/icon/icon_transfer_bank_litter.svg": "3a813763309a088330a18f022cc72f10",
"assets/assets/icon/icon_checkout_success.svg": "79dbe6b984174cfd0d4d1b06691b1df5",
"assets/assets/icon/icon_onbroading_arrow_left.svg": "b57b2a8c6129b8dfa37b746f290844c4",
"assets/assets/icon/icon_profile_person.svg": "ad1ff3d434a1094ef9fc480b14686ce5",
"assets/assets/icon/icon_maker.svg": "13a89bb4c79c7657332e9a6be2c31a48",
"assets/assets/icon/icon_tabbar_map_unchecked.svg": "69e0a8583648761eb0f5db4047c98995",
"assets/assets/icon/icon_tab_map_support.svg": "c4f5b3110064ea55af43289605bc7bff",
"assets/assets/icon/icon_map_support_dialog_problem.svg": "1df2f046ed31e1fb0be51695ddabf228",
"assets/assets/icon/icon_maker.png": "6cdd92a9575c37f641944d1343bf9795",
"assets/assets/icon/icon_tabbar_order_checked.svg": "9fb74f84c383c6de751c2b79050e0e9c",
"assets/assets/icon/icon_dialog_close.svg": "513e0f31cb871526cfb5a051802d75be",
"assets/assets/icon/icon_scan_flashing.svg": "6e2fcf106447161d95a478a38dd9c7bc",
"assets/assets/icon/icon_checkout_failed.svg": "1f642eba47dda7b167c09530a6e4a9d4",
"assets/assets/icon/icon_item_compass.svg": "76aaeaddf27eb8c9db3261dee443c4ab",
"assets/assets/icon/icon_maker_selected.png": "76d8a45a8ae978b2ef7c8de903eab9ae",
"assets/assets/icon/icon_profile_email.svg": "f080e3a7516d624a71b22a4479c81409",
"assets/assets/icon/icon_tabbar_notifi_checked.svg": "be817a0390450a119a917f76011c867b",
"assets/assets/icon/icon_onbroading_arrow_right.svg": "51cf797431b20b6121f0e50c85c37900",
"assets/assets/icon/icon_profile_calenda.svg": "ea612621fbe67a1cd7e0213612557903",
"assets/assets/icon/icon_search_location.png": "69a4cc6f9b62c5e53908e1419bac0242",
"assets/assets/icon/icon_scan_library.svg": "724bd2986e95f0ccf751439a572275af",
"assets/assets/icon/icon_arrow.svg": "d0c47d44339ea03d75400c1b7c1351d2",
"assets/assets/icon/icon_order_oclock_small.svg": "cf88d9ea1682f23102ee4f622497af28",
"assets/assets/icon/icon_signup_dialog_checked_error.svg": "2e24b607f6fc8e2bcd3674ff2c27ffdb",
"assets/assets/icon/icon_order_problem_small.svg": "b26e4b9b6f3786edd6136acfc508f9ea",
"assets/assets/icon/icon_signup_lock_error.svg": "4570246a36b65f31d9c26faab9fb803f",
"assets/assets/icon/icon_tabbar_notifi_unchecked.svg": "0d6f8d8a93dabcacfaa6cd921edbeb53",
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
