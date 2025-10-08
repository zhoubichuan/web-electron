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
    "revision": "cef99dd940f153c3e0baeb47c6ec851f"
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
    "url": "assets/js/15.6f4c7692.js",
    "revision": "28934c1e950d06053a3426aa5d7d60a6"
  },
  {
    "url": "assets/js/16.cbdc4f85.js",
    "revision": "70b2c8d919938e367f2b10b68d66ec5f"
  },
  {
    "url": "assets/js/17.24fd02a8.js",
    "revision": "51d9d779484576d6e3ed24ca7ac7f500"
  },
  {
    "url": "assets/js/18.c04d876b.js",
    "revision": "db307e6a9456b752e0c4b81e60213393"
  },
  {
    "url": "assets/js/19.1362a753.js",
    "revision": "2d5b6cba3a368300295c91f0e576c518"
  },
  {
    "url": "assets/js/2.cda9858e.js",
    "revision": "525736ead900a2cc7b26936fda668243"
  },
  {
    "url": "assets/js/20.536f2084.js",
    "revision": "bffdb6ed496a55724a14b1e44d17f87b"
  },
  {
    "url": "assets/js/21.2d42b53e.js",
    "revision": "ea2d6bc53b25a3d5c264655d76c1e18b"
  },
  {
    "url": "assets/js/22.b86738f3.js",
    "revision": "4acc988442bfffb360d9b37627a79557"
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
    "url": "assets/js/25.b8bc0b86.js",
    "revision": "6f09930a7c6450c4d4104d26574f11aa"
  },
  {
    "url": "assets/js/26.c02433f9.js",
    "revision": "5adc10998a82693797bac8156b54942a"
  },
  {
    "url": "assets/js/27.f9e51387.js",
    "revision": "ddb0a2b4db27fc126418839063968017"
  },
  {
    "url": "assets/js/28.88400cdd.js",
    "revision": "9bf297fff3c5859114a7fb3302dba2a2"
  },
  {
    "url": "assets/js/29.3701ffe1.js",
    "revision": "f94d962f8ccc8654b76a3f1d463ada09"
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
    "url": "assets/js/37.1906d8da.js",
    "revision": "f8317aca753c29400c21ccb5e08c400f"
  },
  {
    "url": "assets/js/38.27869434.js",
    "revision": "8583fdb85e32ec426b0460de457868cf"
  },
  {
    "url": "assets/js/39.4f43ff1d.js",
    "revision": "1c6d60379488abd9d3e612d8628a1cad"
  },
  {
    "url": "assets/js/4.8f8c37bc.js",
    "revision": "187b3d5e01c5e43cecfb559d372cf8ca"
  },
  {
    "url": "assets/js/40.45ae39be.js",
    "revision": "e173ab82f64ef2f4f972966e1d631ea8"
  },
  {
    "url": "assets/js/41.67ce9b33.js",
    "revision": "c618f188b42e9317b57c16304e8156e7"
  },
  {
    "url": "assets/js/42.727e0e58.js",
    "revision": "af88d807db0f75466dc90e2c81090c7c"
  },
  {
    "url": "assets/js/43.8c428588.js",
    "revision": "f49eac034c0100e9c6a4ef81483c9351"
  },
  {
    "url": "assets/js/44.61ef2631.js",
    "revision": "ae924455c2c17c9b5f8397d90467b83d"
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
    "url": "assets/js/47.6119386b.js",
    "revision": "8d9f55b57667677e1e88d58817c26959"
  },
  {
    "url": "assets/js/48.125c47e6.js",
    "revision": "c31a4385d75a2f17c23dc32b7f0a48e4"
  },
  {
    "url": "assets/js/49.522c08da.js",
    "revision": "f6082ce1352959c0377ab58ea3627c44"
  },
  {
    "url": "assets/js/5.8bf1c3b2.js",
    "revision": "23cebb6f8c6ed8f2468760429a950bf8"
  },
  {
    "url": "assets/js/50.879ebca3.js",
    "revision": "ed8fdf3baf81ca0f1f811b9ecdfc974f"
  },
  {
    "url": "assets/js/51.a0bf09bf.js",
    "revision": "d18cdbf1409fc79e53ef5acd7d25c9ce"
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
    "url": "assets/js/56.e00d9d06.js",
    "revision": "7925c731523aaa0c235f6564de4a6c53"
  },
  {
    "url": "assets/js/57.59590b5a.js",
    "revision": "2dd09db7f5e070d98fd76b7f4bd5f0f1"
  },
  {
    "url": "assets/js/58.9d464bc9.js",
    "revision": "80b72de00dd0b95b5ebc695ee30f2dea"
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
    "url": "assets/js/app.e86b7720.js",
    "revision": "1c75e61b28acf7d8b30658b04636f868"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "afa6e48a65dacd96ae710cca60f7695e"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "b621dce6f7141f6e5d05adbd335b3b16"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "ba449c452bef55c9aea1341e270be500"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "a4669c42767dc967f16cdd482a9c12ec"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "0ed2a0bc08afd7a543be1dcfd1432903"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "185a7a272e4164509648e47a78ed2d78"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "67c1592cb0bf90546e9d524c990b250d"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "3dc31a1902b5229812d5f2fb64a08f19"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "fb85028075f93525f711d50efaabfa6b"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "44a56d4259c6596dc48b0483082abacf"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "95a471eee131f1a88663eed761005016"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "7d68a61bbba500de34fe3c681a0600ea"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "b36993b782b1eb78a155186094b4d16e"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "bd66b10fe66679d06efdb20b3fb9ef45"
  },
  {
    "url": "base/practice/1.electron.html",
    "revision": "b1507751f2924c6f20bc9d90402b82a9"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "b16f863348e60001c328549fd3d20364"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "80443fbee3a829e15eefb60c9a492af9"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "bf3894f455afaa213886e785872f9d68"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "b07accae2ece4fa93b6c8d64fa3b0287"
  },
  {
    "url": "base/practice/test.html",
    "revision": "7cfcb03d8fcbb01f3990196526c94891"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "7ff014b8afc5628d98c46cf171eb32f2"
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
    "revision": "0eed29282e89c43d0b31e4df2ace2ff9"
  },
  {
    "url": "mock/http.js",
    "revision": "ea27422d0d8f2345c95afa572a12ea35"
  },
  {
    "url": "senior/typeScript/1.index.html",
    "revision": "02a6f2eadfebf951264d08b97f41f7ba"
  },
  {
    "url": "senior/typeScript/1.recursionAndDynamics.html",
    "revision": "27ab4c6e8870ae452ae392a4c92217e8"
  },
  {
    "url": "senior/typeScript/10.table.html",
    "revision": "bc7ab56443f3699e4132165001ab09b3"
  },
  {
    "url": "senior/typeScript/11.tree.html",
    "revision": "600659d4f411ce5bee208e9851d2af42"
  },
  {
    "url": "senior/typeScript/2.extend.html",
    "revision": "bcf428945cc594330e9fc1cfb6908258"
  },
  {
    "url": "senior/typeScript/3.componentCommunication.html",
    "revision": "081765e7cd4a765f18b9d71d62d6b950"
  },
  {
    "url": "senior/typeScript/4.render.html",
    "revision": "c1b369d800cce648091fc9bc7afaab38"
  },
  {
    "url": "senior/typeScript/5.api.html",
    "revision": "60817b83f1bedbba6854a2b795b43c80"
  },
  {
    "url": "senior/typeScript/6.form.html",
    "revision": "2aa00adf47249ed3cc658d60ef388e44"
  },
  {
    "url": "senior/typeScript/7.checkBox.html",
    "revision": "bb76fcbc6e96b37ffb80896d48185c39"
  },
  {
    "url": "senior/typeScript/8.active.html",
    "revision": "b932a7ee9b98a0f0b03671cbceb0a4d1"
  },
  {
    "url": "senior/typeScript/9.alert.html",
    "revision": "9f232ee5d391cf54ede141a5be9ebaa9"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "6bc541ebf94f97d14467d601c1aa62cc"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "dccc771bf237f5b01650626403476469"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "6e014cdebed231bd97bd12ba2331587e"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "b4ade9f27c076193fdc5ab191b5e057b"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "0d6c3516d5007824b2e206511375e53f"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "93d77f3bffad4387442822fc2c0f3f82"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "320aea30cdb4c8612a086f7206ebabed"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "cbc44124603e4675d6b91e46787f19dd"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "2423ba79c8b77abba6a43507b42a1230"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "bf5c57ca894619bc043aaf486851c05a"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "2228d62818fc76717507b29ae507ea40"
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
