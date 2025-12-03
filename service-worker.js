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
    "revision": "104c41886b2bbca240c2702098062c8a"
  },
  {
    "url": "assets/css/0.styles.6a862e9d.css",
    "revision": "0c59c8ae164078f5377262b3415a0fa6"
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
    "url": "assets/js/10.0aa437e8.js",
    "revision": "3a96fe7bb40881a5a82aadbee66b34ad"
  },
  {
    "url": "assets/js/11.8567ba70.js",
    "revision": "cd56d77993e5f9f33d8c0498e37663fe"
  },
  {
    "url": "assets/js/12.a1230e90.js",
    "revision": "ab487c45c18babb4713ddefe466df7f2"
  },
  {
    "url": "assets/js/13.9c4a72a5.js",
    "revision": "bc47ca430388a3ef422a048b2e639f6b"
  },
  {
    "url": "assets/js/14.29b06289.js",
    "revision": "f7755a130caf529dd842090563416973"
  },
  {
    "url": "assets/js/15.70ac9dfa.js",
    "revision": "663909a2bfa9df0d0d0585c038036561"
  },
  {
    "url": "assets/js/16.c9f241dc.js",
    "revision": "4021865f243273daecbfcbd13600ea4d"
  },
  {
    "url": "assets/js/17.d835d793.js",
    "revision": "8d9e8d0a507377f5190fb698aeda6372"
  },
  {
    "url": "assets/js/18.afa923bf.js",
    "revision": "853fb98c5de8c5a1eb4a996a55bd685a"
  },
  {
    "url": "assets/js/19.b3df53ad.js",
    "revision": "ed655ec7dcc62ae28e1e0a13d82b4b70"
  },
  {
    "url": "assets/js/2.f8677342.js",
    "revision": "d20370e929e7bb5d04a9af7c9626bf8f"
  },
  {
    "url": "assets/js/20.589e5b94.js",
    "revision": "0e48e81f5e7f2c5660987877bc841657"
  },
  {
    "url": "assets/js/21.55758b90.js",
    "revision": "cdb3d8d89bc93ec78ee2559864f69426"
  },
  {
    "url": "assets/js/22.75f5a510.js",
    "revision": "d93fae66d15a84dd5580a663b5182a35"
  },
  {
    "url": "assets/js/23.7d24dd6d.js",
    "revision": "bede83cc59387ba24714736b540784a4"
  },
  {
    "url": "assets/js/24.15b240c4.js",
    "revision": "86d3686eb92b2abd22b58db4d0bea5ac"
  },
  {
    "url": "assets/js/25.f17142e1.js",
    "revision": "09ab45944a83f9702b2be0d5e969e2c7"
  },
  {
    "url": "assets/js/26.7b110f98.js",
    "revision": "95519dc940bb06ff47fd59edbadccc94"
  },
  {
    "url": "assets/js/27.715c1024.js",
    "revision": "d73c5878144f2d07284b0d92d9d03995"
  },
  {
    "url": "assets/js/28.536183e4.js",
    "revision": "743d9cc3801c5f6627fd80295e300f8c"
  },
  {
    "url": "assets/js/29.d8777f96.js",
    "revision": "41f785d74028b416dd65ba7d17a7fcb2"
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
    "url": "assets/js/32.79d60af9.js",
    "revision": "bc661b05b967773b6a6201e955debfea"
  },
  {
    "url": "assets/js/33.0dc97f4a.js",
    "revision": "3a33f217bfff86fb602c6be2b56bc4f9"
  },
  {
    "url": "assets/js/34.2bc89d91.js",
    "revision": "ed3bdd4dd112953088a4648ea07c8a3b"
  },
  {
    "url": "assets/js/35.d82100c5.js",
    "revision": "7d56358658272ac36000158937f0cfbb"
  },
  {
    "url": "assets/js/36.cf65bc29.js",
    "revision": "a833d318f891a7007b7fc3cc9edfea28"
  },
  {
    "url": "assets/js/37.15daafbe.js",
    "revision": "2ed04d579ec01f9cf2738aab69b6dae2"
  },
  {
    "url": "assets/js/38.a9fa4fe9.js",
    "revision": "7135a95061867d2d2b00043c8058e54d"
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
    "url": "assets/js/40.ef438497.js",
    "revision": "98d9a5b42c161f832cfcd92e88059c4d"
  },
  {
    "url": "assets/js/41.7e4c3b43.js",
    "revision": "59d424bf965c2cd786228c8c92667fe9"
  },
  {
    "url": "assets/js/42.63ec2c7c.js",
    "revision": "61980732e465f06ac50056764fe2bdce"
  },
  {
    "url": "assets/js/43.d38874ff.js",
    "revision": "2700adbf3f10bd9acac0ef2701fadf49"
  },
  {
    "url": "assets/js/44.080f3079.js",
    "revision": "159d0d7cfd207a3aec966ba0839b0f38"
  },
  {
    "url": "assets/js/45.75415b4f.js",
    "revision": "a7acbe48690df18c25f121dfc20a9825"
  },
  {
    "url": "assets/js/46.0756fee7.js",
    "revision": "9f06365729d0454b4b4bfdc5eb7be315"
  },
  {
    "url": "assets/js/47.c6470209.js",
    "revision": "5d324d1b3be3651519046c2cf28d9fd4"
  },
  {
    "url": "assets/js/48.62cc4e98.js",
    "revision": "2df5421820f4012698ee8a5b73b10f24"
  },
  {
    "url": "assets/js/49.6d2266ac.js",
    "revision": "cb9388e849b5918e41f1ee87f43001f2"
  },
  {
    "url": "assets/js/5.2ec98efd.js",
    "revision": "b67e97b5b10ca2b39530e2abd198326f"
  },
  {
    "url": "assets/js/50.9f86717a.js",
    "revision": "70ab8293d4bbae606ff68579f3fd6d75"
  },
  {
    "url": "assets/js/51.01d2a836.js",
    "revision": "35f05f59055e49f03f086013d8dc3c85"
  },
  {
    "url": "assets/js/52.61fb8953.js",
    "revision": "b24be455050079402283edc969abdb49"
  },
  {
    "url": "assets/js/53.222d818f.js",
    "revision": "7bb65c0bb57396399c4e1bc17a7638d7"
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
    "url": "assets/js/56.e00d9d06.js",
    "revision": "7925c731523aaa0c235f6564de4a6c53"
  },
  {
    "url": "assets/js/57.fee72b08.js",
    "revision": "10810a54b9ee5ed9f195486332a19639"
  },
  {
    "url": "assets/js/58.03585158.js",
    "revision": "0ab2e9b3970e4e1f6f6c5e26108c8aea"
  },
  {
    "url": "assets/js/59.11bae616.js",
    "revision": "e9cfc72a47efafb8fc5325f50018232a"
  },
  {
    "url": "assets/js/6.64cd4630.js",
    "revision": "c38eea6e49b6265c8ba3b685c52c7d6e"
  },
  {
    "url": "assets/js/7.0b7d0e97.js",
    "revision": "492932dfe32ce31d70e451c83ef2e881"
  },
  {
    "url": "assets/js/8.b0032dc2.js",
    "revision": "dc5af3f4c954601a9eb8d844338f8b7b"
  },
  {
    "url": "assets/js/9.e7434915.js",
    "revision": "42ce72ddf6d96d5502e914579ed1886e"
  },
  {
    "url": "assets/js/app.5f034aab.js",
    "revision": "0efaed13331b48fb822bb45248680c9b"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "7807e59e63cbb490a0d6de25c2c32c8d"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "27c21df2e16d503f3ba651bb5ceaa5c7"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "2e926f57ecb9ee824c73b1d0106c5ea0"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "5aae813f65ad388a2d10bf3ed77fad5a"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "f5f356d4d6dc5c615eea5240f9a94a5e"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "f4bdbf784da07cf8c35d59049e0135d3"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "1a3d6931acafe4d2d5c0f6861b0b8af2"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "81ef028a9665f4bcd5a81e5a4184105f"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "28de7f5b59172b5bb7ae10a7154648c9"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "ca04851aaddf07a26771ccd7486ee704"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "4ba346624549f87fea838a3ad3ac2e95"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "66a88a9189f9179f86cbcf01fba70b08"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "41531cada6907be8bf11a232718e41e0"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "fe41636bf4de7a42c6166a9d02ac2618"
  },
  {
    "url": "base/practice/1.electron.html",
    "revision": "46ce7b9b3089b67be85cf831b8992370"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "ae891c5f1eefffee4e483baf536bc94a"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "ca25372831a1c048152b93bd80628e6e"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "4134239c36be110ff805556000a05c01"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "89df9c64db345bb63187240e80790bf5"
  },
  {
    "url": "base/practice/test.html",
    "revision": "36e9b5d6016a91df2eaa7c332186fcb8"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "0ea0ae800fa78a3897d443fa21623d78"
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
    "revision": "020ad3438b9ea4a714cd65d5953acaba"
  },
  {
    "url": "mock/http.js",
    "revision": "ea27422d0d8f2345c95afa572a12ea35"
  },
  {
    "url": "senior/typeScript/1.index.html",
    "revision": "127baeea778c097637543766bd0e9199"
  },
  {
    "url": "senior/typeScript/1.recursionAndDynamics.html",
    "revision": "1d3aaad147209127d1145f1466f38e33"
  },
  {
    "url": "senior/typeScript/10.table.html",
    "revision": "e94aa219017d915a2717bdaeaf92df55"
  },
  {
    "url": "senior/typeScript/11.tree.html",
    "revision": "d7baca5c83b89631048cde72adeedeee"
  },
  {
    "url": "senior/typeScript/2.extend.html",
    "revision": "65098d287f0dd8c2390c42ec385bd40d"
  },
  {
    "url": "senior/typeScript/3.componentCommunication.html",
    "revision": "e8602eed2f5b2ed5917ad605fbb33709"
  },
  {
    "url": "senior/typeScript/4.render.html",
    "revision": "3db819d7eadd8093e0617c30f4db802c"
  },
  {
    "url": "senior/typeScript/5.api.html",
    "revision": "64fa1d563b5161049d454f5bacfeb7d8"
  },
  {
    "url": "senior/typeScript/6.form.html",
    "revision": "d7c1d69819aaba735bd2dd0897734b93"
  },
  {
    "url": "senior/typeScript/7.checkBox.html",
    "revision": "a072300658a9949550b20c5a7ba99a59"
  },
  {
    "url": "senior/typeScript/8.active.html",
    "revision": "d7ea2ac3497818d7e6c9bbd4d4fcfdb1"
  },
  {
    "url": "senior/typeScript/9.alert.html",
    "revision": "56f588ce288f337c25d744a9289c0603"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "c2282c7927414217b9ec93e9439c25a2"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "9413238280d463572c8cfde3e8841387"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "d9d8b72598db5e64295d34c35ac9123e"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "7c365edb42981540e3becc2f68f41ba9"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "120ae85ce8907121d18f35b6f79c55a5"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "9051ecc5089217b13442a2905bd21159"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "a1778a0c971781164223752f72fdde53"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "4199b3900c13b90eb8d5853c2576e2f1"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "54c99d090befefa0b17fedc4a0caeb75"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "c8241e1820dfcdd36e85236d297b9857"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "5c168b7744a062109ea993ee40070a02"
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
