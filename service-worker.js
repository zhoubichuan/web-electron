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
    "revision": "6661708560614bf0b0eaf37c7d22a01c"
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
    "url": "assets/js/10.bb6278c1.js",
    "revision": "ce947ba37f22b3a0f6f69c21dfdbec78"
  },
  {
    "url": "assets/js/11.505e57eb.js",
    "revision": "2829a8085bb051c203ccde7d0d18c6f7"
  },
  {
    "url": "assets/js/12.02739ace.js",
    "revision": "4172125f9c41f2d23a3c56b674280a4e"
  },
  {
    "url": "assets/js/13.85135108.js",
    "revision": "c51303b4202c8dd732de9c6ad62bdfd9"
  },
  {
    "url": "assets/js/14.ae6290b8.js",
    "revision": "48f2a485ef9433e80a4876ae76c7fbf5"
  },
  {
    "url": "assets/js/15.3313c522.js",
    "revision": "dde85186063c55cbe77ad2639c442907"
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
    "url": "assets/js/18.063a1c57.js",
    "revision": "631db32faac7c172c2a3f9529c33ae5a"
  },
  {
    "url": "assets/js/19.45d9f046.js",
    "revision": "b215582232daf5dfa318de2f5bf1fb0f"
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
    "url": "assets/js/21.4b13e283.js",
    "revision": "a16d255075f39f76881f278b483a9d1a"
  },
  {
    "url": "assets/js/22.31a9ad50.js",
    "revision": "123262331ce9b703519511ba8f7c6565"
  },
  {
    "url": "assets/js/23.1a61c5cf.js",
    "revision": "7224fd4b8f4ecea44b6c3ded437db18c"
  },
  {
    "url": "assets/js/24.ec253978.js",
    "revision": "04d8ce5454fe2b8c598351292521930e"
  },
  {
    "url": "assets/js/25.86615499.js",
    "revision": "ddf3fd4943e4ccd15d603586445dc35c"
  },
  {
    "url": "assets/js/26.409dbaf7.js",
    "revision": "dfc8395edcbd71ca4403324d927068a1"
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
    "url": "assets/js/35.3a00610e.js",
    "revision": "f3827cde079264ddb7fb1fa8882fd663"
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
    "url": "assets/js/38.27869434.js",
    "revision": "8583fdb85e32ec426b0460de457868cf"
  },
  {
    "url": "assets/js/39.4f64505c.js",
    "revision": "59e403e10ffc3ceb8efc2ee8ffb549e8"
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
    "url": "assets/js/49.6d2266ac.js",
    "revision": "cb9388e849b5918e41f1ee87f43001f2"
  },
  {
    "url": "assets/js/5.08f7afce.js",
    "revision": "6a04173ee11d1eb89567ef2aa82e940a"
  },
  {
    "url": "assets/js/50.1e8e5d02.js",
    "revision": "c634e189cfd00fd15430ebacc49ccbc8"
  },
  {
    "url": "assets/js/51.77b3e5bb.js",
    "revision": "188b434b804d1e22b1f5b6b65d5bf952"
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
    "url": "assets/js/54.5c6ea87c.js",
    "revision": "9d63a618a336d46a8d3bb90a4b03563d"
  },
  {
    "url": "assets/js/55.e6bd6667.js",
    "revision": "4137049b0484ccc967abb6ea932a7d13"
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
    "url": "assets/js/58.03585158.js",
    "revision": "0ab2e9b3970e4e1f6f6c5e26108c8aea"
  },
  {
    "url": "assets/js/59.11bae616.js",
    "revision": "e9cfc72a47efafb8fc5325f50018232a"
  },
  {
    "url": "assets/js/6.baa21128.js",
    "revision": "f227201216619d837094f48c842d4ae7"
  },
  {
    "url": "assets/js/7.fc985021.js",
    "revision": "6d4b1aa596e774835c9158fc0f36319b"
  },
  {
    "url": "assets/js/8.b0032dc2.js",
    "revision": "dc5af3f4c954601a9eb8d844338f8b7b"
  },
  {
    "url": "assets/js/9.ee9b570e.js",
    "revision": "e4665acf4e89967d45b0892a4c6ccd3d"
  },
  {
    "url": "assets/js/app.7db5c6ba.js",
    "revision": "e325f5104b5d719ec9bf77b0cc30fd2d"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "70a4d85e54e15c0bc3d0f3d0ca02b8a2"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "46ad4c4c2099c6bc6c4d8a5a83876a90"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "fe084fd53531f4661688451e487f1f4f"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "f3f4ffe4f56670db5c360e303c6f1fe6"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "825884d8021dcb307044bf435246092b"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "4d2b16440eb856a003b443c953aa181b"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "aea22bab99fdb7570cc06298ccfc0b0c"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "99678124da7a738d641bf1cf6660b668"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "5fddad800ef0d19035e6f68b55cfc25c"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "c116a0d4fcdfe06e9f13d3c5eb86cee7"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "fbd30c74fa495cdbafb9e7f3065681ab"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "3bb7bb7e9a2a2ee7ab8f64569acca805"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "adcf93ba61859a2da7aefa6275b7b708"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "755ce89492f7cddec24b8828ee639498"
  },
  {
    "url": "base/practice/1.electron.html",
    "revision": "5e8fdf64341fefa675e62ba7b0ee12cd"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "dd40eaa6a2b0d3c969016dcee9042bc9"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "7d7b0c61619e18d975be95e5110ca4a7"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "8ee397dd004088af64ef285532817177"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "9ccc52cd07731b4e6feca6d9e833839f"
  },
  {
    "url": "base/practice/test.html",
    "revision": "08ebf9abbb9c75ce2efbbf30f53aa60d"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "6bfeb11674763a845d6f547a5d264938"
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
    "revision": "4ca1d3b385f2983921f33c86f99098d3"
  },
  {
    "url": "mock/http.js",
    "revision": "ea27422d0d8f2345c95afa572a12ea35"
  },
  {
    "url": "senior/typeScript/1.index.html",
    "revision": "20f58dd0d4659be706f7ed5c4b5ae1de"
  },
  {
    "url": "senior/typeScript/1.recursionAndDynamics.html",
    "revision": "7a6f5d75d734883d3b0fcea39e56f8fb"
  },
  {
    "url": "senior/typeScript/10.table.html",
    "revision": "8fb3649fe52b2a6af5ba43cedc37bc73"
  },
  {
    "url": "senior/typeScript/11.tree.html",
    "revision": "593373ea4d8b692b919fb5afeda00af4"
  },
  {
    "url": "senior/typeScript/2.extend.html",
    "revision": "18870b689d9d2f5f6b8568c4aa121957"
  },
  {
    "url": "senior/typeScript/3.componentCommunication.html",
    "revision": "0275288e78789e427dd52650c7f2bd4b"
  },
  {
    "url": "senior/typeScript/4.render.html",
    "revision": "8c4745fd16c905fafbdeb32e2a50a789"
  },
  {
    "url": "senior/typeScript/5.api.html",
    "revision": "f96d5b6076c378bbdadc35093733af44"
  },
  {
    "url": "senior/typeScript/6.form.html",
    "revision": "329731ea8068f4b2bcc4055d406ac2bc"
  },
  {
    "url": "senior/typeScript/7.checkBox.html",
    "revision": "d3e5486dbf802975beddd3d8e4b1af9d"
  },
  {
    "url": "senior/typeScript/8.active.html",
    "revision": "6cc89a7fe5bd2c4905e6a00179f4ff0a"
  },
  {
    "url": "senior/typeScript/9.alert.html",
    "revision": "4c3f18cf27aebcabd4ba11ca01bc5749"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "d460e004fff647706c73ea8a5482edce"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "9535211d0558525b493b928db730db5a"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "e07b93d3b1506d2bfe0eb276dfbe1fe4"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "82efdcea3c86d59fa94b1fc5865b98e3"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "74503b1f2f768cc208258f8b7e98e1c8"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "7e18f43926b2fdd9d1defb436bdcbe3b"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "7b8f6d794d748c612e902662fe596145"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "7ee5f3dde55e81afe33be230defde929"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "876a6eb312b57521c145e85ce5acad81"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "0568c19db01c3dabf8e7900b84293b98"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "d4ebf9b24d52af0c3666f2a9c51565a6"
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
