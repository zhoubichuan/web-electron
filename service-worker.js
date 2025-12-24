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
    "revision": "5ae43e99b1bf55a3b4b4b4f9955bfd89"
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
    "url": "assets/js/10.94391faa.js",
    "revision": "06469ffcc0e5517c7bc36a7fb813824a"
  },
  {
    "url": "assets/js/11.c61c2e5d.js",
    "revision": "ad8e2e4b402c56f8314110f48269c753"
  },
  {
    "url": "assets/js/12.d74fce33.js",
    "revision": "708fc0aed1a1625ce87ca340b1fc54af"
  },
  {
    "url": "assets/js/13.4f5bb163.js",
    "revision": "fd2b656fef2a2b18ef640e34db56be18"
  },
  {
    "url": "assets/js/14.5dee7d33.js",
    "revision": "c704c3a9ac0f92319364c218f87ad980"
  },
  {
    "url": "assets/js/15.6f0a0684.js",
    "revision": "134482e7098680845b9089db38974b30"
  },
  {
    "url": "assets/js/16.67a2c0d6.js",
    "revision": "321d54c876173766265028724085c32a"
  },
  {
    "url": "assets/js/17.918b6fae.js",
    "revision": "b9b159a958733ab6ff7a3664c1600e44"
  },
  {
    "url": "assets/js/18.b8675f14.js",
    "revision": "df056af199230acb5966a530de90205b"
  },
  {
    "url": "assets/js/19.dce5ea5f.js",
    "revision": "4f46bb79f93fea4171f3f2c2da6a4602"
  },
  {
    "url": "assets/js/2.f8677342.js",
    "revision": "d20370e929e7bb5d04a9af7c9626bf8f"
  },
  {
    "url": "assets/js/20.04c276c5.js",
    "revision": "4d9245b19f97fa85b50f566200c5901c"
  },
  {
    "url": "assets/js/21.6ff4f8f2.js",
    "revision": "3dd7847dfea52f02a83ad1986fcaefb1"
  },
  {
    "url": "assets/js/22.1db85071.js",
    "revision": "b96aeffcc51d67263796d55a291f6dda"
  },
  {
    "url": "assets/js/23.0f977934.js",
    "revision": "dbbfc0ff8541751af20d9964a4a0d312"
  },
  {
    "url": "assets/js/24.2a91d310.js",
    "revision": "c175efb623170e0cc8e799290dcf43ee"
  },
  {
    "url": "assets/js/25.4a7e9d65.js",
    "revision": "9dfced8e0f670935988d07976630d9a5"
  },
  {
    "url": "assets/js/26.a342f3e1.js",
    "revision": "508372dfe77d95abeea5db27633b6c2a"
  },
  {
    "url": "assets/js/27.fad40f2e.js",
    "revision": "81a904b10b30d85020f903cbdd96aecc"
  },
  {
    "url": "assets/js/28.94d04496.js",
    "revision": "750e2234e49758e3344188f7ff811965"
  },
  {
    "url": "assets/js/29.7cc9c642.js",
    "revision": "8438a41589effafb1ce59a213957eef7"
  },
  {
    "url": "assets/js/3.ccea25f2.js",
    "revision": "de7a0093c6a4481b35d9950d6ace4a9b"
  },
  {
    "url": "assets/js/30.94bdfc9b.js",
    "revision": "b1c12c3a0fbb5b8adf2481111a689c11"
  },
  {
    "url": "assets/js/31.61f1c559.js",
    "revision": "c3210619c82cb9bf3da7d8cdfa2c3295"
  },
  {
    "url": "assets/js/32.ccd3202f.js",
    "revision": "e24091d8d328b77cfa2ca84ca207632d"
  },
  {
    "url": "assets/js/33.18232df5.js",
    "revision": "02674b442460132e129a7418af4fe834"
  },
  {
    "url": "assets/js/34.a30c2ad0.js",
    "revision": "ed3bdd4dd112953088a4648ea07c8a3b"
  },
  {
    "url": "assets/js/35.9ff8478d.js",
    "revision": "8cbe184f50458c03484b6b7bd7969d98"
  },
  {
    "url": "assets/js/36.903c0efa.js",
    "revision": "b15d1d89477e124d22d9f9c74d068dcd"
  },
  {
    "url": "assets/js/37.284d4a6c.js",
    "revision": "f8317aca753c29400c21ccb5e08c400f"
  },
  {
    "url": "assets/js/38.7aba4a8e.js",
    "revision": "3cc8c25b835b4a5d5f667569df37ebde"
  },
  {
    "url": "assets/js/39.afe157bc.js",
    "revision": "59e403e10ffc3ceb8efc2ee8ffb549e8"
  },
  {
    "url": "assets/js/4.9e83f765.js",
    "revision": "46bedde2d7ecdbd1561eabace16f7aec"
  },
  {
    "url": "assets/js/40.7aeb3593.js",
    "revision": "b736a0a80c0eb9dcfaaac38d78416b81"
  },
  {
    "url": "assets/js/41.bb2cfd19.js",
    "revision": "8e3afac0c36b420df8da6a70bf6aa0f4"
  },
  {
    "url": "assets/js/42.7bfdffab.js",
    "revision": "fd064611bc57112b043e44e9cfb22812"
  },
  {
    "url": "assets/js/43.ac97ac77.js",
    "revision": "f26c70bf53f0a34852344d211a9a6c75"
  },
  {
    "url": "assets/js/44.ec18de63.js",
    "revision": "159d0d7cfd207a3aec966ba0839b0f38"
  },
  {
    "url": "assets/js/45.0bfb6278.js",
    "revision": "ab7e60482ab9fbfa10c28d3281e7ba90"
  },
  {
    "url": "assets/js/46.2ea46c98.js",
    "revision": "e2f8ee30e1e657333d518979bd6e08c9"
  },
  {
    "url": "assets/js/47.4ef9f7d4.js",
    "revision": "de8ad59b9a1586b58e355c868d8afffa"
  },
  {
    "url": "assets/js/48.6c27f52b.js",
    "revision": "2df5421820f4012698ee8a5b73b10f24"
  },
  {
    "url": "assets/js/49.6a89520c.js",
    "revision": "db76d0fde327061ac17b04b2807349a4"
  },
  {
    "url": "assets/js/5.f6c589c3.js",
    "revision": "33e9b48bbb151c1f65be55241b040df9"
  },
  {
    "url": "assets/js/50.765b050a.js",
    "revision": "313b1335d5edb1d3e8755b632ecd5a8d"
  },
  {
    "url": "assets/js/51.2ba544d8.js",
    "revision": "a32afc8fbe304ce8e7f1bde24e82c87b"
  },
  {
    "url": "assets/js/52.73ef4b81.js",
    "revision": "b24be455050079402283edc969abdb49"
  },
  {
    "url": "assets/js/53.c1805d65.js",
    "revision": "3c6c45848de648e398116f84340fadbe"
  },
  {
    "url": "assets/js/54.f3fca0b1.js",
    "revision": "2ba9ceebf1a0ade5a5b6898d9e2ccc77"
  },
  {
    "url": "assets/js/55.cb05dc2c.js",
    "revision": "1c1793ee30f1a0c819b4652e3db763d8"
  },
  {
    "url": "assets/js/56.a544b3ec.js",
    "revision": "d467731e6412bfc51eeec557fc279794"
  },
  {
    "url": "assets/js/57.42ec1d6d.js",
    "revision": "98b84db5d4b3b1f2302e7c9800910152"
  },
  {
    "url": "assets/js/58.3ea84bb6.js",
    "revision": "1625a2b36218a6af63e6254e6514d158"
  },
  {
    "url": "assets/js/59.e6a91432.js",
    "revision": "d15d7ff5a462cfb01cfdb79102a9d869"
  },
  {
    "url": "assets/js/6.dbb80d87.js",
    "revision": "a8f983a3ff5e39dfe23be7c2400a36e8"
  },
  {
    "url": "assets/js/60.cfbf0dd3.js",
    "revision": "308615ad372da49a7d87ad51cf60e44e"
  },
  {
    "url": "assets/js/7.6c4b557d.js",
    "revision": "19d0f7c45ab60c9e79328d48337f098c"
  },
  {
    "url": "assets/js/8.b0032dc2.js",
    "revision": "dc5af3f4c954601a9eb8d844338f8b7b"
  },
  {
    "url": "assets/js/9.652a7a96.js",
    "revision": "a921ef2e1c227ffdb1e17c29f673e147"
  },
  {
    "url": "assets/js/app.a0f35e93.js",
    "revision": "8c3be072f171cce3ceb880608e43d592"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "6398ebaecc096b8f8f6f278e0a094ad6"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "16d4767f35e79117496b9c1a0936015f"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "7ef92ea18d2f975ed603306cd7793f30"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "29185173b32c8f25f2f1c6bdf7f16db4"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "962f3b4ce2d97b72b728734df0618444"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "bb223dc3c9e5ecfac2cf97c8618af73a"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "05b93021605ed9b4b2dab83c71235319"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "0130cd8f837b524de45ef95ea5521787"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "48e0f00d7a6666dc513d417999098141"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "8e18a1fde4af735f97421f635ed335bb"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "037120a3687cb7b96749111a47ab6be7"
  },
  {
    "url": "base/build/6.api.html",
    "revision": "9c133ecab9deca59df7dfa4aed1b06fc"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "7abc861304913072115e30788509854d"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "faf9b74f613c12bf2af0fa13e89ae5bb"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "b9376943158d37fd02c64fcb660e9704"
  },
  {
    "url": "base/practice/1.electron.html",
    "revision": "94bee72305d4178ee75123cfcae39bde"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "6a07d841048b27c89383746f6b388e73"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "40c45479472a134ef79b4aa4b087c83a"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "b40ceeb12c2510b87a319dbc60e66125"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "938f666ee5e9590027f1f6d2894ea00d"
  },
  {
    "url": "base/practice/test.html",
    "revision": "1340ad90d788c1b7736be6652c7703c9"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "9e4f9a8b9416a891dddef874b588eab0"
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
    "revision": "aa80e332d08e45f5aec347a1870d07d1"
  },
  {
    "url": "mock/http.js",
    "revision": "ea27422d0d8f2345c95afa572a12ea35"
  },
  {
    "url": "senior/typeScript/1.index.html",
    "revision": "ecd2d64fee17456fb76c3d834326f172"
  },
  {
    "url": "senior/typeScript/1.recursionAndDynamics.html",
    "revision": "0647b33fad5b6cb5b0ffd26cd7bcc382"
  },
  {
    "url": "senior/typeScript/10.table.html",
    "revision": "b2e86605b672a69843503ad2b01a2aa8"
  },
  {
    "url": "senior/typeScript/11.tree.html",
    "revision": "763e6c454267376462ba5d857f759024"
  },
  {
    "url": "senior/typeScript/2.extend.html",
    "revision": "57e5673e1ad7baa0d4e3604b680649b0"
  },
  {
    "url": "senior/typeScript/3.componentCommunication.html",
    "revision": "4d902590e180698241b2f26568f13584"
  },
  {
    "url": "senior/typeScript/4.render.html",
    "revision": "686dd29680365d6596dafe295685a287"
  },
  {
    "url": "senior/typeScript/5.api.html",
    "revision": "63053ba24845e0347931d924fa40d8a5"
  },
  {
    "url": "senior/typeScript/6.form.html",
    "revision": "f4ca4631c95f58b1e1c57f16cf16b3cd"
  },
  {
    "url": "senior/typeScript/7.checkBox.html",
    "revision": "081a2110e87b88cd51fb43965111a8ef"
  },
  {
    "url": "senior/typeScript/8.active.html",
    "revision": "5046bf77aeb3a8f71baa3cce787370a9"
  },
  {
    "url": "senior/typeScript/9.alert.html",
    "revision": "99ff052c2249884a690045e7f7bdc614"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "83c9682deed260fa967a33b52f269255"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "48103b4b2a2ff2d2e2159f15e9a7a3cc"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "aa21aa4853b586012fdf4ab346845e70"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "330e6ead2caca7711c8e7e0fdb22078a"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "9554e9a419b0002a5530a831c69a4c2b"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "9c58e29c11b960309f16f18e27b5d44b"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "96b8f89e6c8bb32f98e091a0d21ebb09"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "054316c32c42f7db5c1fd31d732b03ee"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "0b06be4658edcc83fc0c18bd3825734f"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "f71e2defccefbae303324e44e574fe5f"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "da275ee67a0593bd036f02c48d0cf5df"
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
