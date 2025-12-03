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
    "revision": "ef29a6f8366bacca52271dc6bf976d8d"
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
    "url": "assets/js/15.f2529708.js",
    "revision": "c70e38e1d7e79c768755d38fd337e02d"
  },
  {
    "url": "assets/js/16.c9f241dc.js",
    "revision": "4021865f243273daecbfcbd13600ea4d"
  },
  {
    "url": "assets/js/17.9bb8d844.js",
    "revision": "a630772ce079e26bef78573d77df2dd3"
  },
  {
    "url": "assets/js/18.063a1c57.js",
    "revision": "631db32faac7c172c2a3f9529c33ae5a"
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
    "url": "assets/js/21.9de98686.js",
    "revision": "be7dc26d9379e94dfc1c28cdb83e7be7"
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
    "url": "assets/js/24.85399183.js",
    "revision": "7eb45be5c543abe3952ce1b1f0b7be79"
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
    "url": "assets/js/33.7309b1b8.js",
    "revision": "b5cd2f5a13f3159991f2de9e0e9907b5"
  },
  {
    "url": "assets/js/34.077e0030.js",
    "revision": "0c396ce2ea4a861dfdd1b2578c9bc37f"
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
    "url": "assets/js/38.60541c34.js",
    "revision": "3cc8c25b835b4a5d5f667569df37ebde"
  },
  {
    "url": "assets/js/39.4f43ff1d.js",
    "revision": "1c6d60379488abd9d3e612d8628a1cad"
  },
  {
    "url": "assets/js/4.507e4abc.js",
    "revision": "f9d394c60fb4eb37926025f690821d92"
  },
  {
    "url": "assets/js/40.c545f0b5.js",
    "revision": "871b68b1d468d6667ca481f1f1783690"
  },
  {
    "url": "assets/js/41.c540384f.js",
    "revision": "8e3afac0c36b420df8da6a70bf6aa0f4"
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
    "url": "assets/js/5.853e974c.js",
    "revision": "c5a237fffd0088368a3ed5fc805582d7"
  },
  {
    "url": "assets/js/50.1e8e5d02.js",
    "revision": "c634e189cfd00fd15430ebacc49ccbc8"
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
    "url": "assets/js/54.5c6ea87c.js",
    "revision": "9d63a618a336d46a8d3bb90a4b03563d"
  },
  {
    "url": "assets/js/55.f5020e0c.js",
    "revision": "40e940bd0b2a962bcc0305471c35441d"
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
    "url": "assets/js/58.03585158.js",
    "revision": "0ab2e9b3970e4e1f6f6c5e26108c8aea"
  },
  {
    "url": "assets/js/59.11bae616.js",
    "revision": "e9cfc72a47efafb8fc5325f50018232a"
  },
  {
    "url": "assets/js/6.b123b522.js",
    "revision": "a21040456f8a41e3a38cd9ec55b31f2a"
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
    "url": "assets/js/app.631c3863.js",
    "revision": "c8fdacf2bde3bf37ef6b93be22e76e65"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "9d0fe2ab75f7be5ee6561a6dc20700af"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "24137d35bda506c30f96391a21a68c6e"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "f44e5a649a4a3e8f9ccd0cb212613419"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "b3213eaf740d4fe9a57bc195a038f7de"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "b6151de1532a37ca06a12221c9fb4f6e"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "0e5c97262ca47526e29fb2ddbb8e4aad"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "2b15fd9e803fe23a9a4f20ddb573a6f2"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "87ff118f11b752a33512ab3ddf332c1d"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "3a96794b4a98caad9b846164375056dd"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "3a1229e651d230a8179fcaa547f8e8b7"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "9a24856538ef2021ad29a3a5490675f8"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "a89607a9fb85557e8156eeb3380ec495"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "96f2c578810cfb46e47d68a8ad506237"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "d18e227942d6ba7a93decf268d4d3ff0"
  },
  {
    "url": "base/practice/1.electron.html",
    "revision": "7e100ff7adeceaff0b5da7460dc3ccf0"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "784a426f870b3cda042ee482b393ad4f"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "a05c3fd5457d1d54eb1579a7aa436403"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "6654de614dc128aa6ca4d73ef119b1eb"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "ce48a8afbbb2ecd649cfcbd3829ed674"
  },
  {
    "url": "base/practice/test.html",
    "revision": "ea44be381b935bfcda0f1a55caad9c12"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "b1ee6b1a2d50a11d470f7f0adf001616"
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
    "revision": "7d7470f099ea7bfca39a05a14a89beb6"
  },
  {
    "url": "mock/http.js",
    "revision": "ea27422d0d8f2345c95afa572a12ea35"
  },
  {
    "url": "senior/typeScript/1.index.html",
    "revision": "b7d95e8b7cf19a7b41f7c4b6baf21ac4"
  },
  {
    "url": "senior/typeScript/1.recursionAndDynamics.html",
    "revision": "c6184f0748e59247a3a6b811a7fbe169"
  },
  {
    "url": "senior/typeScript/10.table.html",
    "revision": "9b0368f39ad14921c8dc880cb92d6f8f"
  },
  {
    "url": "senior/typeScript/11.tree.html",
    "revision": "243b12639803ef785da6c2ee57a0ff6d"
  },
  {
    "url": "senior/typeScript/2.extend.html",
    "revision": "eb60e61725dc697a6b8b979f570feb99"
  },
  {
    "url": "senior/typeScript/3.componentCommunication.html",
    "revision": "382fe11d051c65dcd7b5e34fcbf9a508"
  },
  {
    "url": "senior/typeScript/4.render.html",
    "revision": "5fbe0fdd7c5f1f7a411848fb6a0fab46"
  },
  {
    "url": "senior/typeScript/5.api.html",
    "revision": "5968c83083aa68934abfe7b1afc2dc25"
  },
  {
    "url": "senior/typeScript/6.form.html",
    "revision": "d5b8697f46a233a4ea02ccbc9d260cd3"
  },
  {
    "url": "senior/typeScript/7.checkBox.html",
    "revision": "e930c1b1bdf5135afac2501c422726d9"
  },
  {
    "url": "senior/typeScript/8.active.html",
    "revision": "4de29feca490b7a549341390e6ea6bc2"
  },
  {
    "url": "senior/typeScript/9.alert.html",
    "revision": "2c0d14f23b7ed685512b1f4ce4bead32"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "6f88fda45ee640a02d8e81c52612c2a2"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "856fa5f0cace91cb96fd59b9650ac29d"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "ce8216bef4982c3719d175dc838287a9"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "9264d9b93eea4e71a4c5b85daddceefb"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "b965adaded1bfe63e4d93591e21dc05b"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "1f53c8f1b5290bdfe881384898481a2c"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "cb7982a5132e3309668f455f989ea554"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "11164c482d94a6ee81de254ef934425a"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "77092bdc0960adbb291abd4a2f1fadbe"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "959dde50246cbc9015e921749d5d3688"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "d44b01b646fc7a7a62c1ee31ce64c361"
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
