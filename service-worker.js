/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7488751feba60a90181710d1a5833d97"
  },
  {
    "url": "assets/css/0.styles.5724ae18.css",
    "revision": "3c4759f2b3543d6a898a826bd0f0dbc0"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a4d80907.js",
    "revision": "ba4facbd091e08c7b8102d627addd66d"
  },
  {
    "url": "assets/js/11.64cc19b8.js",
    "revision": "c7a34cc973798db77b979d4dcfd706d0"
  },
  {
    "url": "assets/js/12.5880b181.js",
    "revision": "816644d82f67963f8c9e2874b8e63fa4"
  },
  {
    "url": "assets/js/13.24db79a1.js",
    "revision": "8b8faf4e8ebba4dca32453761c29faf6"
  },
  {
    "url": "assets/js/14.ed0ed3b7.js",
    "revision": "643d6df1e85c25b4f81725ee19c70f39"
  },
  {
    "url": "assets/js/15.0ae6b66d.js",
    "revision": "f0bd393b8eab1d1ee841e214ebac3f74"
  },
  {
    "url": "assets/js/16.4d4bc87c.js",
    "revision": "873492ed23cad2d655716bf522c5e6ff"
  },
  {
    "url": "assets/js/17.09270ec3.js",
    "revision": "8e1291603abc7a327e3e3bf91a1a752b"
  },
  {
    "url": "assets/js/18.d49c9791.js",
    "revision": "27cbbf750e6045fa1713733a1446c6d5"
  },
  {
    "url": "assets/js/19.16f4cc68.js",
    "revision": "7773bd81d9287caf4a1e9c36a76c438c"
  },
  {
    "url": "assets/js/2.cda9858e.js",
    "revision": "525736ead900a2cc7b26936fda668243"
  },
  {
    "url": "assets/js/20.48652201.js",
    "revision": "ed1109c951e4e2921f16fe0ea58e5309"
  },
  {
    "url": "assets/js/21.5d94cb4b.js",
    "revision": "c5bd715ae2765710b146e2a5219b3280"
  },
  {
    "url": "assets/js/22.dd4d3112.js",
    "revision": "003ce86c9fea1dd6ccb7dc710487ff9b"
  },
  {
    "url": "assets/js/23.736c5189.js",
    "revision": "b69a17d51874f878159398b95366c7a6"
  },
  {
    "url": "assets/js/24.c1d3f024.js",
    "revision": "8601e86e0f659205cbf325ef0b55bcfe"
  },
  {
    "url": "assets/js/25.509fb22a.js",
    "revision": "8c0667a1966ff25ab2cc6bc53237af67"
  },
  {
    "url": "assets/js/26.2209ffb1.js",
    "revision": "fa916d4027367b66d2486c08d990c8c0"
  },
  {
    "url": "assets/js/27.4657b6fd.js",
    "revision": "9d5156b8bce4132f448ea08df4225315"
  },
  {
    "url": "assets/js/28.b6082350.js",
    "revision": "086f92b984e2664bb8fc915e1c6e13c4"
  },
  {
    "url": "assets/js/29.e8b43c77.js",
    "revision": "d54bc5a0da287f39a3a8f7078ffd6d98"
  },
  {
    "url": "assets/js/3.4338f325.js",
    "revision": "9eae0cf34019c29bd2ca7857e546654b"
  },
  {
    "url": "assets/js/30.8a9ed268.js",
    "revision": "5830a7507aef299dec047fdc208bf857"
  },
  {
    "url": "assets/js/31.f749bd55.js",
    "revision": "7a15824d7bdc2a39ee1c99e856b541aa"
  },
  {
    "url": "assets/js/32.2849b161.js",
    "revision": "1d6d3a00630ac997f742a17c39ebf8b4"
  },
  {
    "url": "assets/js/33.707ec0e3.js",
    "revision": "4dc124e8ebdc897a527f73e2696fdd63"
  },
  {
    "url": "assets/js/34.2bc89d91.js",
    "revision": "ed3bdd4dd112953088a4648ea07c8a3b"
  },
  {
    "url": "assets/js/35.6d7c9313.js",
    "revision": "8cbe184f50458c03484b6b7bd7969d98"
  },
  {
    "url": "assets/js/36.5237cbb2.js",
    "revision": "24a5433bb2f6dd168a9fbc7a2a35704e"
  },
  {
    "url": "assets/js/37.95ccda4a.js",
    "revision": "2dcb9d57a40576d2e11002dc3a3f62d9"
  },
  {
    "url": "assets/js/38.d803c38e.js",
    "revision": "1172eb75b6f5e4db45f15e695c41f360"
  },
  {
    "url": "assets/js/39.af5f6e82.js",
    "revision": "459979b8ecd39acef48b1823b222ac99"
  },
  {
    "url": "assets/js/4.8f8c37bc.js",
    "revision": "187b3d5e01c5e43cecfb559d372cf8ca"
  },
  {
    "url": "assets/js/40.ef438497.js",
    "revision": "98d9a5b42c161f832cfcd92e88059c4d"
  },
  {
    "url": "assets/js/41.67ce9b33.js",
    "revision": "c618f188b42e9317b57c16304e8156e7"
  },
  {
    "url": "assets/js/42.f463f18f.js",
    "revision": "fd064611bc57112b043e44e9cfb22812"
  },
  {
    "url": "assets/js/43.7feee419.js",
    "revision": "830ccae2882093260ad813d45a17ac4e"
  },
  {
    "url": "assets/js/44.080f3079.js",
    "revision": "159d0d7cfd207a3aec966ba0839b0f38"
  },
  {
    "url": "assets/js/45.ef07ae8c.js",
    "revision": "ab7e60482ab9fbfa10c28d3281e7ba90"
  },
  {
    "url": "assets/js/46.ba7ec708.js",
    "revision": "e2f8ee30e1e657333d518979bd6e08c9"
  },
  {
    "url": "assets/js/47.91b28192.js",
    "revision": "8b969a4d8c6cb9b2d539407176754a94"
  },
  {
    "url": "assets/js/48.6d2dee28.js",
    "revision": "5b94f252409eb1bb46c43a98d8640564"
  },
  {
    "url": "assets/js/49.27617d4a.js",
    "revision": "db76d0fde327061ac17b04b2807349a4"
  },
  {
    "url": "assets/js/5.8bf1c3b2.js",
    "revision": "23cebb6f8c6ed8f2468760429a950bf8"
  },
  {
    "url": "assets/js/50.b401b3b9.js",
    "revision": "313b1335d5edb1d3e8755b632ecd5a8d"
  },
  {
    "url": "assets/js/51.01d2a836.js",
    "revision": "35f05f59055e49f03f086013d8dc3c85"
  },
  {
    "url": "assets/js/52.845e0f4b.js",
    "revision": "fd340910e384ee0c3de3a232c5c238d2"
  },
  {
    "url": "assets/js/53.4d797d53.js",
    "revision": "95ab89dc4a82e95f93cd3d2579070d3e"
  },
  {
    "url": "assets/js/54.8c214bcd.js",
    "revision": "e947525ba81a6f399c74abd5a10d9092"
  },
  {
    "url": "assets/js/55.c98e1643.js",
    "revision": "1c1793ee30f1a0c819b4652e3db763d8"
  },
  {
    "url": "assets/js/56.e9a898a4.js",
    "revision": "e04bb02a6a80c6c9724aaefb218fb632"
  },
  {
    "url": "assets/js/57.fee72b08.js",
    "revision": "10810a54b9ee5ed9f195486332a19639"
  },
  {
    "url": "assets/js/58.1e56ce88.js",
    "revision": "16d7cecb79647f4936cdff655097f2c3"
  },
  {
    "url": "assets/js/59.6a59cfbc.js",
    "revision": "a2e8320d0435fe20f5220b8977de6da5"
  },
  {
    "url": "assets/js/6.0a2b057b.js",
    "revision": "65ba9874bd8872ce2b17c816804195a1"
  },
  {
    "url": "assets/js/7.048a7fb7.js",
    "revision": "93bfccbe29a6773ebd18a1a7b9c4e59b"
  },
  {
    "url": "assets/js/8.e6ee1f2e.js",
    "revision": "d3166e901d7e683fba72924b0a57132f"
  },
  {
    "url": "assets/js/9.e166a955.js",
    "revision": "6524e23d4447d178a3546f658d42e55f"
  },
  {
    "url": "assets/js/app.460a30bd.js",
    "revision": "9f1f274810281c932109346359cb952b"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "16a567b75c298a95a2171bfa1c5fa7dc"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "e2c1ad1345745dd7cda19f31165ff4af"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "de93d96ad2931e1394cca7e30854b05a"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "52f84967ba2bc49e5afaec6fc8758759"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "f223e320675262462a759147ce67d36b"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "5a5c69dd6f85a8d9ba25b28bf9454853"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "4a02f4848e2e7068a73e303144478e8f"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "b99fd7e1153336c0a5b8fcd137fe7a19"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "97b83cf84ab92605ca774e134125055b"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "43e6bd05d03e11c1af9560b879f648b2"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "a9215b086d68249b0d8a6f4867990400"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "86725d9e5339271ec65d918328a249f7"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "a31eb3ebcf0c1e09771b7abd641b103b"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "56ee8be001030ce274a4a39ab4a15e67"
  },
  {
    "url": "base/practice/1.electron.html",
    "revision": "d4b9dd81fb098bfbb97c140554cead46"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "abd341f6793e1dabe0bf37da7dd25bc3"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "53abf32552f7a12096002be93a699939"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "df80b2ae9c7784a81b30d614e4cb8d38"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "59f7df896ba53be11d89be36c95b522d"
  },
  {
    "url": "base/practice/test.html",
    "revision": "0abc8b93b3369bee0815fe48d1111817"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "b18651ce52d5d03bb2b4e33d3efcd73d"
  },
  {
    "url": "dll/vendor.dll.js",
    "revision": "aefc723fb23a2eafef9213b2dd5a33f5"
  },
  {
    "url": "home.png",
    "revision": "15233f5abadd12afe193fa40eea709fa"
  },
  {
    "url": "index.html",
    "revision": "ee0fbe882a05eb12769afbec9e767a70"
  },
  {
    "url": "mock/http.js",
    "revision": "ea27422d0d8f2345c95afa572a12ea35"
  },
  {
    "url": "senior/typeScript/1.index.html",
    "revision": "f3f33c66d514793c32ac1451edc906fe"
  },
  {
    "url": "senior/typeScript/1.recursionAndDynamics.html",
    "revision": "79ac619d94f315765512658f362de999"
  },
  {
    "url": "senior/typeScript/10.table.html",
    "revision": "d851cac5f120aaeccff77c5230af7aec"
  },
  {
    "url": "senior/typeScript/11.tree.html",
    "revision": "2249e013cb7b7f4464ac41bc8ac6b582"
  },
  {
    "url": "senior/typeScript/2.extend.html",
    "revision": "ff8ba12db2c56429d92ff91cec8a15f7"
  },
  {
    "url": "senior/typeScript/3.componentCommunication.html",
    "revision": "9fcfe86365434a6039c4d8618cc4b24b"
  },
  {
    "url": "senior/typeScript/4.render.html",
    "revision": "e9f35ef8eaf1c175fd70509751356a52"
  },
  {
    "url": "senior/typeScript/5.api.html",
    "revision": "d51fda135de1bd394523c96fa5a9d502"
  },
  {
    "url": "senior/typeScript/6.form.html",
    "revision": "06ab95d9247315079d4b0957aec1e1ae"
  },
  {
    "url": "senior/typeScript/7.checkBox.html",
    "revision": "cb9c1e8087d17688b0b519f26d5abe72"
  },
  {
    "url": "senior/typeScript/8.active.html",
    "revision": "3887f33c55ffaca41fcae8933b468b4a"
  },
  {
    "url": "senior/typeScript/9.alert.html",
    "revision": "8357c330f45bf78dc9d0f97a31dd6b67"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "da90bd7162753b5f041b453ca3a6c5ef"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "205cdf85949592a7c3d2d3612290653a"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "1006e3283d7eec612bdd58d6e487718b"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "065cb8886b38f2b6aa5b0fe3a7426e70"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "ec1660118d4feea0d3dfa17396dc4254"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "4018d2edcd82a4f0480a645144d60cef"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "5afef0724be60b09d3624bf8b974f120"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "f716c60c857cabf3e9d00919ca75c99e"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "e0b33be13deca8025dd105385632516d"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "4fc51016ad08166e93f909874ec94bac"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "5aa4473c530e2394217c63f2518e9d8f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
