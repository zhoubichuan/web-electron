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
    "revision": "3725ff4ac80aea90b2bc729f7c890ed4"
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
    "url": "assets/js/10.60aeca19.js",
    "revision": "6765e81722235a2da8f3a4b243d7ca66"
  },
  {
    "url": "assets/js/11.cddf88b1.js",
    "revision": "5129618a66ede8c8e9211eb52e08b874"
  },
  {
    "url": "assets/js/12.e70aa90a.js",
    "revision": "e04c51f26859af7473aea81f5bc8d36d"
  },
  {
    "url": "assets/js/13.5909f8c4.js",
    "revision": "5a25aa55b80d0beebffb332da0544880"
  },
  {
    "url": "assets/js/14.17ed3262.js",
    "revision": "b668b18d17fe5087ef858ec30a6d998c"
  },
  {
    "url": "assets/js/15.61f40d6e.js",
    "revision": "ccb4957d360a8b1d877d532626b4a5d3"
  },
  {
    "url": "assets/js/16.7f891376.js",
    "revision": "78b243828495720dff5de6e6c295dc43"
  },
  {
    "url": "assets/js/17.644d2d64.js",
    "revision": "515d6f843a7071a70cd3c484451f9ff1"
  },
  {
    "url": "assets/js/18.bd14ec05.js",
    "revision": "af996fefb68ded6ec62e965722e00b38"
  },
  {
    "url": "assets/js/19.ffa0d63e.js",
    "revision": "492918c7ea3f456a6b81741decdfede3"
  },
  {
    "url": "assets/js/2.f8677342.js",
    "revision": "d20370e929e7bb5d04a9af7c9626bf8f"
  },
  {
    "url": "assets/js/20.21cdb882.js",
    "revision": "522503322a65d2f4cc92585fb147d857"
  },
  {
    "url": "assets/js/21.3527f3a0.js",
    "revision": "d700279c502278cd814277634abb4ce5"
  },
  {
    "url": "assets/js/22.9caabbff.js",
    "revision": "ce838cd2196c8e55b746a158d2045252"
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
    "url": "assets/js/25.c6b80280.js",
    "revision": "82ee7c6e93127042ed6a36976eb4769e"
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
    "url": "assets/js/28.b6082350.js",
    "revision": "086f92b984e2664bb8fc915e1c6e13c4"
  },
  {
    "url": "assets/js/29.bd8d7f4b.js",
    "revision": "a0af8cdda1a5d5b1819443330f7ab6f1"
  },
  {
    "url": "assets/js/3.ccea25f2.js",
    "revision": "de7a0093c6a4481b35d9950d6ace4a9b"
  },
  {
    "url": "assets/js/30.dfcf40c9.js",
    "revision": "b1c12c3a0fbb5b8adf2481111a689c11"
  },
  {
    "url": "assets/js/31.66245f5c.js",
    "revision": "6cb9cc770734959cde7c3c120d37bc23"
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
    "url": "assets/js/36.28b649b4.js",
    "revision": "5f7c876f2f69ce798c202e57e1f27922"
  },
  {
    "url": "assets/js/37.1906d8da.js",
    "revision": "f8317aca753c29400c21ccb5e08c400f"
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
    "url": "assets/js/40.7d0c37fa.js",
    "revision": "b736a0a80c0eb9dcfaaac38d78416b81"
  },
  {
    "url": "assets/js/41.c540384f.js",
    "revision": "8e3afac0c36b420df8da6a70bf6aa0f4"
  },
  {
    "url": "assets/js/42.f463f18f.js",
    "revision": "fd064611bc57112b043e44e9cfb22812"
  },
  {
    "url": "assets/js/43.8c428588.js",
    "revision": "f49eac034c0100e9c6a4ef81483c9351"
  },
  {
    "url": "assets/js/44.b7238c45.js",
    "revision": "5a9d064a0d9405beacb43b7c8b9e579b"
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
    "url": "assets/js/47.91b28192.js",
    "revision": "8b969a4d8c6cb9b2d539407176754a94"
  },
  {
    "url": "assets/js/48.9fe4a721.js",
    "revision": "87e04a94978cbb63a04c71bd6a4b08a8"
  },
  {
    "url": "assets/js/49.0246a666.js",
    "revision": "a2289da36743cb05bba8610d2a560fd6"
  },
  {
    "url": "assets/js/5.ba06dd3d.js",
    "revision": "9014ca51330498ce29a43ed94b135763"
  },
  {
    "url": "assets/js/50.b401b3b9.js",
    "revision": "313b1335d5edb1d3e8755b632ecd5a8d"
  },
  {
    "url": "assets/js/51.9743f216.js",
    "revision": "a4f5b1ea50b002376645931b6f480bd3"
  },
  {
    "url": "assets/js/52.845e0f4b.js",
    "revision": "fd340910e384ee0c3de3a232c5c238d2"
  },
  {
    "url": "assets/js/53.64affac5.js",
    "revision": "3c6c45848de648e398116f84340fadbe"
  },
  {
    "url": "assets/js/54.f6352fa4.js",
    "revision": "d29d1845ab506ec18e34e84086fa9ebc"
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
    "url": "assets/js/58.03585158.js",
    "revision": "0ab2e9b3970e4e1f6f6c5e26108c8aea"
  },
  {
    "url": "assets/js/59.11bae616.js",
    "revision": "e9cfc72a47efafb8fc5325f50018232a"
  },
  {
    "url": "assets/js/6.f793afef.js",
    "revision": "d743c54cb5e92ada8d602fa8dd894b8e"
  },
  {
    "url": "assets/js/7.a27279f4.js",
    "revision": "498a6868170399591d02705d6160fc59"
  },
  {
    "url": "assets/js/8.b0032dc2.js",
    "revision": "dc5af3f4c954601a9eb8d844338f8b7b"
  },
  {
    "url": "assets/js/9.c6d2267b.js",
    "revision": "a16891a7be14fd57bfdea22d30dcb90d"
  },
  {
    "url": "assets/js/app.d220240f.js",
    "revision": "a133c81c5a0b126298cce09bb26f1b1d"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "046053d498bbcc4801a3c9f0cdd5d704"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "70deaa249f740a98b379129b4ac0e6ca"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "cd1090309bd889a14183adfdac646326"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "10c4db041e1bc58985c1e44fc2ecdab0"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "9e8a6b1df7ee6aa69e9882e22c1ed49f"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "474ab20a5c08ae2d9ccf5ee594104b68"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "ce8648f9519bd6ac35ac5e1246430c7f"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "e110c13a2e448300774de292cddfb813"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "70f9a36d255f2bf71e3074ee0da22d07"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "e959694f794c568bb76a3f49296e087d"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "0925060524319950d5c236ea9c35295c"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "ab085729d45682863683c76209b0831f"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "7a17e064fb60c7b880241b6c8f70bd1a"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "81ad593485def9b1dfa57d54c5376f59"
  },
  {
    "url": "base/practice/1.electron.html",
    "revision": "936262f240c4b05f668dd612af7640f3"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "93048180f302604b2ed0554149edc1a2"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "8a4080f996a8a048ce33d469b890d967"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "e097ba0df945ccea8158767e70f12647"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "7834d63eae0557add6f1b7481ef276bf"
  },
  {
    "url": "base/practice/test.html",
    "revision": "8f0cb15337eaab97f7e916bab55600af"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "afa32a63531613cd889331535a01967f"
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
    "revision": "9404eec7384d7c502b5222736d4f1e05"
  },
  {
    "url": "mock/http.js",
    "revision": "ea27422d0d8f2345c95afa572a12ea35"
  },
  {
    "url": "senior/typeScript/1.index.html",
    "revision": "c86d5cc02375282ea0d975965849609e"
  },
  {
    "url": "senior/typeScript/1.recursionAndDynamics.html",
    "revision": "6cc2268e1b157ab6c9c7e7ab6d6966b6"
  },
  {
    "url": "senior/typeScript/10.table.html",
    "revision": "a616b2a475e1a1cdc362b19e691ec3da"
  },
  {
    "url": "senior/typeScript/11.tree.html",
    "revision": "1ddac97725ae37be325ee15c44b09b7f"
  },
  {
    "url": "senior/typeScript/2.extend.html",
    "revision": "c2d087743accac0e60ffb9449590913b"
  },
  {
    "url": "senior/typeScript/3.componentCommunication.html",
    "revision": "afbf86b98836d74e1a8aa95542e04414"
  },
  {
    "url": "senior/typeScript/4.render.html",
    "revision": "c3cc9f66100bb05ba870e38fa3273570"
  },
  {
    "url": "senior/typeScript/5.api.html",
    "revision": "369bb9c044be2080bfb867da4255d44b"
  },
  {
    "url": "senior/typeScript/6.form.html",
    "revision": "4f4f100679c181a5f7a682d217514b77"
  },
  {
    "url": "senior/typeScript/7.checkBox.html",
    "revision": "46ffe4b08df643a8c9fb48fc483a08d4"
  },
  {
    "url": "senior/typeScript/8.active.html",
    "revision": "a1348532f2cf21df83d154cc0c1d1805"
  },
  {
    "url": "senior/typeScript/9.alert.html",
    "revision": "bb94b520a7888db451bc6801b70e8299"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "2855bb801780d84d68f46a75c38d9acc"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "56795fe1145ee90de3b3509996cd6748"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "cb236937da141f7576938e2e54561db5"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "da8c2d2873214ff503aa8292e32e6f33"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "33a0b94abae0d59a93e2296a6b2b26b9"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "bc74439202126815533f0fcb57d4bc3e"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "4ddaf473f70510a464f21568aa39c970"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "e2830c0525d1b45aaea791bca09e0b98"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "2e896e7e7c856dd1a6780757dffdfa2a"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "3eda5dc9d95863aae263e42b62bf1de4"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "3133c7d448ffe0d176aff64cdb2c5292"
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
