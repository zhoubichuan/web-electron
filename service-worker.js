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
    "revision": "02a6191fd71b719a98db77e9d50cddc4"
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
    "url": "assets/js/10.bce6d2e1.js",
    "revision": "bf343b58c9a5417388f628de342e0c26"
  },
  {
    "url": "assets/js/11.e594d825.js",
    "revision": "c1ecb6200cd6978ff20d32a5f267cff8"
  },
  {
    "url": "assets/js/12.43bd8e69.js",
    "revision": "9fb2b0bc89fc3a965a39c521f338c6a3"
  },
  {
    "url": "assets/js/13.b4a12f1f.js",
    "revision": "d4b65118b293ed57da5777cbcc07938d"
  },
  {
    "url": "assets/js/14.ae6290b8.js",
    "revision": "48f2a485ef9433e80a4876ae76c7fbf5"
  },
  {
    "url": "assets/js/15.83f911e5.js",
    "revision": "6b5922048f8b2eb6529fb99aa4fdd3d1"
  },
  {
    "url": "assets/js/16.6dfe7a34.js",
    "revision": "4bf117ee80918ad26b36ad3674a9d6a5"
  },
  {
    "url": "assets/js/17.9bb8d844.js",
    "revision": "a630772ce079e26bef78573d77df2dd3"
  },
  {
    "url": "assets/js/18.6023db2a.js",
    "revision": "ea848d3dbd3618be2dfb70b75048983e"
  },
  {
    "url": "assets/js/19.de07e4df.js",
    "revision": "dd89cfbd2c271de4b6581069e4ce094b"
  },
  {
    "url": "assets/js/2.f8677342.js",
    "revision": "d20370e929e7bb5d04a9af7c9626bf8f"
  },
  {
    "url": "assets/js/20.871ed78e.js",
    "revision": "e02217a26b9114f36c97415f11999579"
  },
  {
    "url": "assets/js/21.002c8875.js",
    "revision": "3ab402763a0a021dd63c0bfa6f9f40f9"
  },
  {
    "url": "assets/js/22.75f5a510.js",
    "revision": "d93fae66d15a84dd5580a663b5182a35"
  },
  {
    "url": "assets/js/23.1a61c5cf.js",
    "revision": "7224fd4b8f4ecea44b6c3ded437db18c"
  },
  {
    "url": "assets/js/24.85399183.js",
    "revision": "7eb45be5c543abe3952ce1b1f0b7be79"
  },
  {
    "url": "assets/js/25.f17142e1.js",
    "revision": "09ab45944a83f9702b2be0d5e969e2c7"
  },
  {
    "url": "assets/js/26.409dbaf7.js",
    "revision": "dfc8395edcbd71ca4403324d927068a1"
  },
  {
    "url": "assets/js/27.c1e5dfdf.js",
    "revision": "daa20de8957478d533c4cccd9f0c9358"
  },
  {
    "url": "assets/js/28.29227396.js",
    "revision": "7d57472b1c154e178facfde47361bd69"
  },
  {
    "url": "assets/js/29.9a56c7f8.js",
    "revision": "655d544989651f91cb0b47f5752d2083"
  },
  {
    "url": "assets/js/3.ccea25f2.js",
    "revision": "de7a0093c6a4481b35d9950d6ace4a9b"
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
    "url": "assets/js/34.077e0030.js",
    "revision": "0c396ce2ea4a861dfdd1b2578c9bc37f"
  },
  {
    "url": "assets/js/35.b4c92a7c.js",
    "revision": "8cd7c057db9d81327355310f1a0bb30c"
  },
  {
    "url": "assets/js/36.5237cbb2.js",
    "revision": "24a5433bb2f6dd168a9fbc7a2a35704e"
  },
  {
    "url": "assets/js/37.15daafbe.js",
    "revision": "2ed04d579ec01f9cf2738aab69b6dae2"
  },
  {
    "url": "assets/js/38.1b50da8e.js",
    "revision": "b51a9b9525ea8b636588fb915313351a"
  },
  {
    "url": "assets/js/39.51ecdd48.js",
    "revision": "407ccbb5e9aaee12cef3b33d554992a8"
  },
  {
    "url": "assets/js/4.507e4abc.js",
    "revision": "f9d394c60fb4eb37926025f690821d92"
  },
  {
    "url": "assets/js/40.7d0c37fa.js",
    "revision": "b736a0a80c0eb9dcfaaac38d78416b81"
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
    "url": "assets/js/43.b3c281b4.js",
    "revision": "f26c70bf53f0a34852344d211a9a6c75"
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
    "url": "assets/js/48.18a34f32.js",
    "revision": "98fee858b29ebc152acc2d8a56de18fc"
  },
  {
    "url": "assets/js/49.27617d4a.js",
    "revision": "db76d0fde327061ac17b04b2807349a4"
  },
  {
    "url": "assets/js/5.267862dd.js",
    "revision": "de9b40cfc64380b523688c77b6b7691c"
  },
  {
    "url": "assets/js/50.1e8e5d02.js",
    "revision": "c634e189cfd00fd15430ebacc49ccbc8"
  },
  {
    "url": "assets/js/51.202567d1.js",
    "revision": "a32afc8fbe304ce8e7f1bde24e82c87b"
  },
  {
    "url": "assets/js/52.61fb8953.js",
    "revision": "b24be455050079402283edc969abdb49"
  },
  {
    "url": "assets/js/53.101a4d47.js",
    "revision": "eeca63028ae50bfae69c05fc30914595"
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
    "url": "assets/js/56.95273043.js",
    "revision": "d467731e6412bfc51eeec557fc279794"
  },
  {
    "url": "assets/js/57.d318b2f5.js",
    "revision": "d78447202bbd3edb828efe131eb005ec"
  },
  {
    "url": "assets/js/58.8e892d63.js",
    "revision": "a961372222852fb766e42aa51683297c"
  },
  {
    "url": "assets/js/59.11bae616.js",
    "revision": "e9cfc72a47efafb8fc5325f50018232a"
  },
  {
    "url": "assets/js/6.45fb5511.js",
    "revision": "06895bbdf5688937673e59fd3544ea83"
  },
  {
    "url": "assets/js/7.31dbf647.js",
    "revision": "1a7fb165134b6c5f6b5fe88752afdb80"
  },
  {
    "url": "assets/js/8.b0032dc2.js",
    "revision": "dc5af3f4c954601a9eb8d844338f8b7b"
  },
  {
    "url": "assets/js/9.15bfd4d7.js",
    "revision": "607a51e47a4c8c8f53c4ebbfd03ef0d4"
  },
  {
    "url": "assets/js/app.e745e9dc.js",
    "revision": "c3f6646e7ab140b22a8b3ab2f768f473"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "cbfdd851a772f82874c453f166e4e13f"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "ee889e908ffb8b741986bf16b397ecd3"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "fc14e7d5854a4331b3f04070e427af62"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "375f457dcd0e3cb37633bed639a33beb"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "7777e3049214d10f12b7f9d8320b7a8e"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "ed2cece0cfa0b93d3f139345049d3349"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "fe002cc5ba6e205e34a8af2193df8585"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "7adeacf7c78f8e834fdf5af3c27c69f4"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "9f346a1b0ee2306160805984410842c7"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "6d8a6a1f7b07e84d31d88cf254b6d829"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "9ca6261ebdc6af303fb9efedbf14ed3d"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "3f1ecfe7755148ebf9bb471eb31b4c39"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "f3d5fab5db7375e31b2f85770ca83032"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "8620b3b9c7141846a24f52c45dbe90ae"
  },
  {
    "url": "base/practice/1.electron.html",
    "revision": "532f078a52f83f8b859ab94894e4a4b5"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "191d9704ecfa98d37d6e73095eccc970"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "9c65e855a4cb2a8fe4119e23d7f38b7c"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "00a2c9ee648a5d4f457edc71d3bc964f"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "9b61201ff760d986881c378eaa64f690"
  },
  {
    "url": "base/practice/test.html",
    "revision": "a2f9d33b4b8c6569dab133ce327ab4a0"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "61096cc3df377c7f43cf820c9fdf1e74"
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
    "revision": "9c7ac43b87019bf2e1d123e455cd399b"
  },
  {
    "url": "mock/http.js",
    "revision": "ea27422d0d8f2345c95afa572a12ea35"
  },
  {
    "url": "senior/typeScript/1.index.html",
    "revision": "fda79416bbda05874f7a6a5980debf87"
  },
  {
    "url": "senior/typeScript/1.recursionAndDynamics.html",
    "revision": "e2a188f1716bddb24c3b2dc82e6ccf95"
  },
  {
    "url": "senior/typeScript/10.table.html",
    "revision": "1ad427e91ba98d011c41524e4c1711bb"
  },
  {
    "url": "senior/typeScript/11.tree.html",
    "revision": "d6aa7e7eaa809458e83c36eb9675468c"
  },
  {
    "url": "senior/typeScript/2.extend.html",
    "revision": "97ae1b88a7de6d41bf0dd45b63044cf5"
  },
  {
    "url": "senior/typeScript/3.componentCommunication.html",
    "revision": "e3bed395df0d621ddffed476d0ada490"
  },
  {
    "url": "senior/typeScript/4.render.html",
    "revision": "65387727afe2d2fb8d0bea4c6ac2504a"
  },
  {
    "url": "senior/typeScript/5.api.html",
    "revision": "77ec39e0847ea104b1b291de4957f0c7"
  },
  {
    "url": "senior/typeScript/6.form.html",
    "revision": "9e0f0700d0a97a93c971c4db4e704086"
  },
  {
    "url": "senior/typeScript/7.checkBox.html",
    "revision": "029e58a319582e35e414977b781f00ff"
  },
  {
    "url": "senior/typeScript/8.active.html",
    "revision": "6007bbfc13f558e3c1b5d739e3cdf4fe"
  },
  {
    "url": "senior/typeScript/9.alert.html",
    "revision": "a842304651d4472767de810e97f9c9be"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "624f34833b05885d00fadbc0c1775fd4"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "12d31ec74c5152ffe2b1a050553a97ba"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "6026f4fac55f16c7e929a5e06903ec48"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "e694310f74d7cbdfb93f504829ee1cae"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "7b14eb11355f15a658d4279f4298607d"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "f5488f9944c73d9f91feffc9f9811dc9"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "33ed263a07fa94a449df2069c8f0dfa3"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "ca49975bd8735ca66af8ef9101a1482c"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "2dda5bbc07b31b54410261fd56907634"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "351d8be2f55c9510c160b4383c1e47f2"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "9feeecca2eb45408c0f3ec01135145ac"
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
