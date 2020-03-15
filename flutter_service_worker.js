'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "0016e9947e316e5d7fd68dfda4bc0b66",
"/main.dart.js": "155a5547f29185651ab8156523203f17",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "2194e4a7eccf4d8c44a4dc5c96276bd0",
"/assets/LICENSE": "698defe9a40351619436cf72d435450e",
"/assets/AssetManifest.json": "26213430e6bb43683f5cbc698fc2b642",
"/assets/FontManifest.json": "8b7078afacca3c702a532dc0e16aff50",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"/assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"/assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"/assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"/assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"/assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"/assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"/assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"/assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"/assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"/assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"/assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"/assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"/assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"/assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"/assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0ea892e09437fcaa050b2b15c53173b7",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "d51b09f7b8345b41dd3b2201f653c62b",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "51d23d1c30deda6f34673e0d5600fd38",
"/assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"/assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"/assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"/assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"/assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"/assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"/assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"/assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"/assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"/assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"/assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"/assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"/assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"/assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"/assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/imgs/lines.png": "865f90a49ed5625ab3f24c2ced0b6490",
"/assets/assets/imgs/lines.jpg": "764e2cfd8816524a153c66540cd59c68",
"/assets/assets/imgs/customers_icon.png": "830c1b87b53a5fd04fa1013388b37672",
"/assets/assets/imgs/profile_icon.png": "93649dd6a521b2e3399d279a4491333d",
"/assets/assets/imgs/flutter.png": "71f72098bdc20191d5b4f78d4e2cc086",
"/assets/assets/imgs/67.png": "efef0160994d76356d8a8a537d33f1a6",
"/assets/assets/imgs/energy.png": "2d9d5d59495d498b5f5badb8e24eb442",
"/assets/assets/imgs/gasoilY.png": "59d42de507bd05e68360929ed9cf35f6",
"/assets/assets/imgs/NativeScript.png": "aa621eadfcdeb82d34f23fcf8a464189",
"/assets/assets/imgs/tank%25202.png": "a940f8d534b76bc2669df904ff894715",
"/assets/assets/imgs/co2.png": "6a0bdda308cc6e966c7c63ad5bcb417e",
"/assets/assets/imgs/logoBlan.png": "282d463156bcd1bd65eaf8a9ee126128",
"/assets/assets/imgs/user.png": "c377377f46541da3e24f8ff2a9e59c97",
"/assets/assets/imgs/react-native.png": "fa512f0de432079e92dfea909a511151",
"/assets/assets/imgs/vlow.png": "db7c8c87693a57f1f71923982f607473",
"/assets/assets/imgs/fine.png": "ed57146bb23ba7d457530b3cd20cee9a",
"/assets/assets/imgs/ionic.png": "46575e8f0d1c3e3aa2cba3b3b3188768",
"/assets/assets/imgs/tank_blue.png": "8b6169c70de8601332ae7d2096cd63c1",
"/assets/assets/imgs/fill.png": "1ee7a31593b3ad2993964d63902d2113",
"/assets/assets/imgs/logo.png": "c034b6f78eb4d4159c2b8e8c3a16f87e",
"/assets/assets/imgs/logout_icon.png": "898636c6eeb82109cc06a7a2cb035607",
"/assets/assets/imgs/petrolB.png": "cc8802fc6ae555a2a04823e5735cfe2d",
"/assets/assets/imgs/schemes_icon.png": "6e7bfa5a748eeff79eebb2eb8e1245c8",
"/assets/assets/imgs/Drop-icon.png": "5d2d3e01c8b798c67dd26bea8adf9d4e",
"/assets/assets/imgs/corona.png": "bdc9d1a63161413a8db67902dc895bc8",
"/assets/assets/imgs/tank-red.png": "15b2716ee55ed532e96392a982ddfcf2",
"/assets/assets/imgs/kotlin-native.png": "8496c380eeaafa53747688986febdc9e",
"/assets/assets/imgs/mid.png": "7f09327bb2af1dcffc651b6f3e369dd2",
"/assets/assets/imgs/7.png": "e907fd019d5febd528500df7883baf7b",
"/assets/assets/imgs/83.png": "61580cae40dcecec8358e37783334ff5",
"/assets/assets/imgs/low.png": "b77a575ba9beb90479b8be9c2407907b",
"/assets/assets/imgs/Car-Oil-2-512.png": "e8b33f16eadc32683e2a8a55ad1763a5",
"/assets/assets/imgs/red.png": "ba03f0e2012439cff65983c52f384e64",
"/assets/assets/imgs/black_tank.png": "8cb65d36b98ed2fad4a2c7406a3ef598",
"/assets/assets/imgs/img.jpeg": "759e91163a7f98877fd43fa9be9ceffc",
"/assets/assets/imgs/tank.png": "2b9e33b5c38156087af989ff8c7dc2f6",
"/assets/assets/fonts/MaxwellBold.ttf": "4212211d8b582642b1dcb8f3ff50bfdf",
"/assets/assets/fonts/MaxwellRegular.ttf": "3601126024029bed40ced9d0c85f98ca",
"/assets/assets/fonts/CustomIcons.ttf": "d8db86e60565b2f121e9e48c6d96998a",
"/assets/assets/flare/starsRace.flr": "5c6952f7bbb889679854c11ffffa275d"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
