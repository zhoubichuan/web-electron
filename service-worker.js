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
    "revision": "d70a8a45c7c2e1d45a958460d16ba8da"
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
    "url": "assets/js/10.c1ec4891.js",
    "revision": "49efafe9c07f700aa40420b12c8a4d4a"
  },
  {
    "url": "assets/js/11.843b7b95.js",
    "revision": "59872490ffbd544fca1b477da7069e7f"
  },
  {
    "url": "assets/js/12.b6d13600.js",
    "revision": "b7d99fbb3c6eb8167acf8325759f3939"
  },
  {
    "url": "assets/js/13.30493291.js",
    "revision": "5edda57f8f8a005450c44d6a5622ea29"
  },
  {
    "url": "assets/js/14.957dca15.js",
    "revision": "1ea6ad8e6f403920db2e0a04fd1741a7"
  },
  {
    "url": "assets/js/15.d5e5a530.js",
    "revision": "da91b30c3cec11ccc0463c8b5cbc707c"
  },
  {
    "url": "assets/js/16.94c85a4d.js",
    "revision": "31b8a2ad5a88c460d5c8ccbbd36d7bd0"
  },
  {
    "url": "assets/js/17.fd232b88.js",
    "revision": "2f8e35a9969ba960f489767289cd559f"
  },
  {
    "url": "assets/js/18.557b632c.js",
    "revision": "b2b00e1db3b100ac63a8685031d7fb34"
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
    "url": "assets/js/23.aec5cbdd.js",
    "revision": "e78ac652dabde77f4354f0d5b5d4fb07"
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
    "url": "assets/js/26.49531791.js",
    "revision": "f074f7dea8ccf167457600eddc668417"
  },
  {
    "url": "assets/js/27.84b00076.js",
    "revision": "95d4885b908fb9d4bbaa97f3a090e966"
  },
  {
    "url": "assets/js/28.5b9df0a9.js",
    "revision": "1ed9bfba4fa632cac4e699be7a889d9f"
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
    "url": "assets/js/39.4f64505c.js",
    "revision": "59e403e10ffc3ceb8efc2ee8ffb549e8"
  },
  {
    "url": "assets/js/4.507e4abc.js",
    "revision": "f9d394c60fb4eb37926025f690821d92"
  },
  {
    "url": "assets/js/40.9b7915ee.js",
    "revision": "4874655859af5dea9d9c91f1d5acbee0"
  },
  {
    "url": "assets/js/41.589d8af8.js",
    "revision": "d1cffb8aeb36f2e954e154b911b83dfc"
  },
  {
    "url": "assets/js/42.727e0e58.js",
    "revision": "af88d807db0f75466dc90e2c81090c7c"
  },
  {
    "url": "assets/js/43.517ffa46.js",
    "revision": "54697f2bc947642e2ea81cfcc6e17541"
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
    "url": "assets/js/5.9214a635.js",
    "revision": "b50bf2d36e0f6c243971987c9fbf1265"
  },
  {
    "url": "assets/js/50.b401b3b9.js",
    "revision": "313b1335d5edb1d3e8755b632ecd5a8d"
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
    "url": "assets/js/53.64affac5.js",
    "revision": "3c6c45848de648e398116f84340fadbe"
  },
  {
    "url": "assets/js/54.5c6ea87c.js",
    "revision": "9d63a618a336d46a8d3bb90a4b03563d"
  },
  {
    "url": "assets/js/55.0684d8c8.js",
    "revision": "e024748b1860b7f4c40f8404c24715cf"
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
    "url": "assets/js/59.11bae616.js",
    "revision": "e9cfc72a47efafb8fc5325f50018232a"
  },
  {
    "url": "assets/js/6.34c1b450.js",
    "revision": "34e3efdee239c6901dacb8251e84eb8f"
  },
  {
    "url": "assets/js/7.66c66dfa.js",
    "revision": "76308fda8fe8c6a5493d43717a894ee5"
  },
  {
    "url": "assets/js/8.b0032dc2.js",
    "revision": "dc5af3f4c954601a9eb8d844338f8b7b"
  },
  {
    "url": "assets/js/9.6b240365.js",
    "revision": "c052fd35c3a65cacede8a5a911c33db0"
  },
  {
    "url": "assets/js/app.ca7c3e0e.js",
    "revision": "01f7dcf026c36ece8eb72b8d1a90acfc"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "9d4bea76bb4806fecfd92de37d5e0a91"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "4bbca5d1413a7ea9bec4b9a67ada6ff4"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "3c2bc0b968935ac03d12c67a3af95b98"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "69e48664b52e48e53bb5cb1a5059dcb9"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "1ce141307c0993db2685c73e0b7c5b36"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "9d27868dfb707419a440f409e1904111"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "f33f17a3b7a1a4acbf424381d1bd36f4"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "3c69fe79f9b0516464735bec9f7e02ad"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "abb2fd1a37fe31346747bafa61bff3b9"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "902129c576314a8d21c2eb0c699d8fa5"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "b09e0265011322cc5f0f6b3396354951"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "c048cf0acec12bf1381bd4435b7778a7"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "0e7b675b5b1830c922e8d244afde07c9"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "d832eb0055a774f5412ada02e82b75ef"
  },
  {
    "url": "base/practice/1.electron.html",
    "revision": "10cd9c778109cc08e4b548053daa68c4"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "85d122c025de702c3e1667284631e977"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "2e5dbc89f82280fdffb5940e9a7d83f1"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "cb8013d3a18c6b73164ea2b750aa8949"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "5a1ecc697d70deda95a26ce4f1ced4e3"
  },
  {
    "url": "base/practice/test.html",
    "revision": "6b2b0ff836d1b3994a89c634046c3525"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "e6e4c3fa73b913022703d825fa8ad434"
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
    "revision": "cef80cb7544eea101f14f6a2cda610b2"
  },
  {
    "url": "mock/http.js",
    "revision": "ea27422d0d8f2345c95afa572a12ea35"
  },
  {
    "url": "senior/typeScript/1.index.html",
    "revision": "9429979f5fa30e68cfbb1a5c00c74a83"
  },
  {
    "url": "senior/typeScript/1.recursionAndDynamics.html",
    "revision": "714be1495043e4848423b1eda2a06e6f"
  },
  {
    "url": "senior/typeScript/10.table.html",
    "revision": "154326a82e0b9a2be937199e032ae30e"
  },
  {
    "url": "senior/typeScript/11.tree.html",
    "revision": "3ef5eaee82fa667fb02f7b15b3c3e4a6"
  },
  {
    "url": "senior/typeScript/2.extend.html",
    "revision": "014449655909f6f76c4eeb5faf5657f6"
  },
  {
    "url": "senior/typeScript/3.componentCommunication.html",
    "revision": "4f4046d79808d6fdc5e39737874d24cc"
  },
  {
    "url": "senior/typeScript/4.render.html",
    "revision": "d758a84e119acb337e4b2d7af65915d7"
  },
  {
    "url": "senior/typeScript/5.api.html",
    "revision": "f4d7c17681be24e67a7dcf3e203e7def"
  },
  {
    "url": "senior/typeScript/6.form.html",
    "revision": "fcc008ad173b0b96351a66e9180aa698"
  },
  {
    "url": "senior/typeScript/7.checkBox.html",
    "revision": "7e830b5cc27285d9166f5071b8589972"
  },
  {
    "url": "senior/typeScript/8.active.html",
    "revision": "fe4e623d3a1cbfd654415d26a59f670f"
  },
  {
    "url": "senior/typeScript/9.alert.html",
    "revision": "122768dcd595aea13aa3c85508b60d5a"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "0cc39f7e6feb0efa6b8c047521c1928c"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "43c8e2f147974de5aa77a0d2a030f113"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "26b9a720920b4c5463539166eb388918"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "8d9ec2004bf5ae2fb660429556488ed0"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "4e750a86863fc0c1530891284a402799"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "7ff88e76ab9008e4344fcb66674d6526"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "efb9e5b47f5ef8562c757a33a6396603"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "f1c39ab0abbb2c7657e08d445b90091a"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "f2baf0ed3a7a81cc0eaeab63eed58fa2"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "7139a98d1ef570b658e0157410ff32b9"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "2dd2bfe35412398870a30475a07554b6"
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
