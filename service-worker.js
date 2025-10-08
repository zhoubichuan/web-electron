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
    "revision": "ecbfff226f66aca08b27ed60b72c074b"
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
    "url": "assets/js/16.a7fc1bb7.js",
    "revision": "75a198f21d28b2be777c5655410c0f67"
  },
  {
    "url": "assets/js/17.644d2d64.js",
    "revision": "515d6f843a7071a70cd3c484451f9ff1"
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
    "url": "assets/js/20.48652201.js",
    "revision": "ed1109c951e4e2921f16fe0ea58e5309"
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
    "url": "assets/js/24.1fc95c51.js",
    "revision": "93074de18ffa6dfab1aa237bab7319be"
  },
  {
    "url": "assets/js/25.b9a911c6.js",
    "revision": "9a0091929a0a5f3989c6f0a915d2e49d"
  },
  {
    "url": "assets/js/26.c02433f9.js",
    "revision": "5adc10998a82693797bac8156b54942a"
  },
  {
    "url": "assets/js/27.4657b6fd.js",
    "revision": "9d5156b8bce4132f448ea08df4225315"
  },
  {
    "url": "assets/js/28.88400cdd.js",
    "revision": "9bf297fff3c5859114a7fb3302dba2a2"
  },
  {
    "url": "assets/js/29.6a40ea8c.js",
    "revision": "4428339a5f3417769b3ffe9f35a5bbb9"
  },
  {
    "url": "assets/js/3.4338f325.js",
    "revision": "9eae0cf34019c29bd2ca7857e546654b"
  },
  {
    "url": "assets/js/30.13ec157c.js",
    "revision": "78896c86a05cab5380757e31d4755950"
  },
  {
    "url": "assets/js/31.2a877556.js",
    "revision": "89e31c123f56b82d732b713cc93e4d15"
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
    "url": "assets/js/35.3a00610e.js",
    "revision": "f3827cde079264ddb7fb1fa8882fd663"
  },
  {
    "url": "assets/js/36.28b649b4.js",
    "revision": "5f7c876f2f69ce798c202e57e1f27922"
  },
  {
    "url": "assets/js/37.b26a76d8.js",
    "revision": "74e8df063cee426ffa226fe030800dfe"
  },
  {
    "url": "assets/js/38.82fec79c.js",
    "revision": "447b28733fcb469a8ebc44cb6d88c84a"
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
    "url": "assets/js/42.5afbcbfd.js",
    "revision": "b65260d6dc0f52b4f1c1a02a0ed1ad6f"
  },
  {
    "url": "assets/js/43.2f16e092.js",
    "revision": "61afdcc647843d567be348ffe21f56a5"
  },
  {
    "url": "assets/js/44.61ef2631.js",
    "revision": "ae924455c2c17c9b5f8397d90467b83d"
  },
  {
    "url": "assets/js/45.b7d1c0f6.js",
    "revision": "aac7499d1d4fb85c4c631022a0c1c5ff"
  },
  {
    "url": "assets/js/46.3c2a521f.js",
    "revision": "040813cc66c0c507250a39cd00d5f827"
  },
  {
    "url": "assets/js/47.6119386b.js",
    "revision": "8d9f55b57667677e1e88d58817c26959"
  },
  {
    "url": "assets/js/48.62cc4e98.js",
    "revision": "2df5421820f4012698ee8a5b73b10f24"
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
    "url": "assets/js/50.9f86717a.js",
    "revision": "70ab8293d4bbae606ff68579f3fd6d75"
  },
  {
    "url": "assets/js/51.a0bf09bf.js",
    "revision": "d18cdbf1409fc79e53ef5acd7d25c9ce"
  },
  {
    "url": "assets/js/52.312e9bcf.js",
    "revision": "3935213f29d8652987039e813984b177"
  },
  {
    "url": "assets/js/53.4d797d53.js",
    "revision": "95ab89dc4a82e95f93cd3d2579070d3e"
  },
  {
    "url": "assets/js/54.5c6ea87c.js",
    "revision": "9d63a618a336d46a8d3bb90a4b03563d"
  },
  {
    "url": "assets/js/55.e2859f57.js",
    "revision": "f349f0306c6cafcfc142f94133c2aba3"
  },
  {
    "url": "assets/js/56.e9a898a4.js",
    "revision": "e04bb02a6a80c6c9724aaefb218fb632"
  },
  {
    "url": "assets/js/57.d318b2f5.js",
    "revision": "d78447202bbd3edb828efe131eb005ec"
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
    "url": "assets/js/app.5738cf66.js",
    "revision": "42bda6c3b77995e8007312720f9a0392"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "6ab51564b25f515bc68653219ece2116"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "51f1e7e0845ad1f2b4773ff22e7bea97"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "a6d9e1de9736bcc63235a3c5e4e04174"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "1abe5e56d410ff595580a26e07fb2ffc"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "a741c8cb20cdf4fb4cec96f1ebaf15df"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "512ac69d2cd2dc9168c8737d4a1138dd"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "16ae282e428c2bd10127f883baac1a5a"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "7fd37685f42c29c134068ef3f03844ff"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "759b14d8f25910081cde1b768fe08531"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "bb7566293eab817f31a86d33c45fcd91"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "1f94f1a7b5aa0fc34eac2c7bca128195"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "995fe7813ba7b067a67fd3ecdd6882f6"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "a3f8489d5f251bb5e09425a8a3c24132"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "f74f36c48b05c980481e0b5cc83b7829"
  },
  {
    "url": "base/practice/1.electron.html",
    "revision": "cafa1aa958df3c6cb221eaeb55f42747"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "36f1b45c4871ae7e0d4b0c056dbf964e"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "06de0045c47e0271e15f93ef9c400968"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "1d08bb2a8a0d676200783dee9bb9b5c6"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "4a3256b148f8da7b43b51cb251a6efbe"
  },
  {
    "url": "base/practice/test.html",
    "revision": "e243a7ec9232fffe00c7fabe56a23ade"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "7020955f494edebc523cf7f449b1f9af"
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
    "revision": "fa6612915cc831c238bab18a77a52318"
  },
  {
    "url": "mock/http.js",
    "revision": "ea27422d0d8f2345c95afa572a12ea35"
  },
  {
    "url": "senior/typeScript/1.index.html",
    "revision": "dfe4e918d8d94a469348502a3177397a"
  },
  {
    "url": "senior/typeScript/1.recursionAndDynamics.html",
    "revision": "8a2cad546da4abbe7c2428082f3287d4"
  },
  {
    "url": "senior/typeScript/10.table.html",
    "revision": "2772e97d3fd59e658b41e7d60bc28a2f"
  },
  {
    "url": "senior/typeScript/11.tree.html",
    "revision": "e7ab2daae8928fa755db1f88ea248f6b"
  },
  {
    "url": "senior/typeScript/2.extend.html",
    "revision": "0257399ebd5568ca42c89ac1fdfff507"
  },
  {
    "url": "senior/typeScript/3.componentCommunication.html",
    "revision": "71e7ad116168f134d0d1987c6c5f457b"
  },
  {
    "url": "senior/typeScript/4.render.html",
    "revision": "a97b0b9912f87515df4a9810825a1a0d"
  },
  {
    "url": "senior/typeScript/5.api.html",
    "revision": "ad1eedfd5276d8ebd6c2311f4eea9dd1"
  },
  {
    "url": "senior/typeScript/6.form.html",
    "revision": "30e48ee0f58194f8c3ded0aa14db6ef5"
  },
  {
    "url": "senior/typeScript/7.checkBox.html",
    "revision": "b66a76c6308b643b68725feaed645d1d"
  },
  {
    "url": "senior/typeScript/8.active.html",
    "revision": "5c6732f4d85050f6ba0db3a195a2e43a"
  },
  {
    "url": "senior/typeScript/9.alert.html",
    "revision": "d74a8d8f3b77f3fcc8e683de43891093"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "0b2ced3b8803b472df61612d13ddec55"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "f34ce86ef63b67d91c1b42d7ea0c9542"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "5251ba73e260b0deff8b420cb834558e"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "53c1649ddd5d3054edd883b38fc6f29c"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "4eb462bb81a39282cf7a9cf43ae4efe9"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "ade527d419ab309033e54cc07fdde03e"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "15802a37b6cbb431dea7d271a90f53f0"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "5a93a58ddca3f1f4aeff26df5a5f8e73"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "401f4b83f7065f0bd9099047b2970ee1"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "a73e69cc18824b48af0648c018bc9a3f"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "dcad18652f30879f48b1d66797931ba2"
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
