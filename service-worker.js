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
    "revision": "720eff72bd73a30dd2f9d2d773d8196d"
  },
  {
    "url": "assets/css/0.styles.5623a4ee.css",
    "revision": "88a42662f99c07aa7535e16d68d39c77"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.25a67af1.js",
    "revision": "3d2d5e3daf4186cadacc4bba382a4e1e"
  },
  {
    "url": "assets/js/10.fb919f93.js",
    "revision": "51597a7f287109a4c829abff17278bbf"
  },
  {
    "url": "assets/js/11.52cf10e0.js",
    "revision": "f4538393d1d614ce205976df666b6f27"
  },
  {
    "url": "assets/js/12.ae115e72.js",
    "revision": "286d14664b37b6c045b001e4a9c38a88"
  },
  {
    "url": "assets/js/13.a9f17132.js",
    "revision": "4eb3ff7fe3b03d750a7f24ec371d0f4d"
  },
  {
    "url": "assets/js/14.0467a0cb.js",
    "revision": "4f7992e3ce4556af3442b358f4a3b43d"
  },
  {
    "url": "assets/js/15.1ffe0529.js",
    "revision": "bad78b69dfad519e08e4d475741fe7b6"
  },
  {
    "url": "assets/js/16.fb40166e.js",
    "revision": "55a30ba4f461675c372034b6f00a79a9"
  },
  {
    "url": "assets/js/17.24c17daa.js",
    "revision": "87cb663af29f796b79b01413c25136c4"
  },
  {
    "url": "assets/js/18.e778f005.js",
    "revision": "a5dabee723dcffba517f37fad466eebb"
  },
  {
    "url": "assets/js/19.caf246d2.js",
    "revision": "99874c36ae0ac4a0b25b64fca385fa40"
  },
  {
    "url": "assets/js/2.d6f3f833.js",
    "revision": "8876a614819320c0f4900a29a521b8c3"
  },
  {
    "url": "assets/js/20.0156e043.js",
    "revision": "acfc0da18fe6cde498ea7cb7a44031cd"
  },
  {
    "url": "assets/js/21.99ce1862.js",
    "revision": "5a7d4136602b21ec268f78f578881e94"
  },
  {
    "url": "assets/js/22.0b868ac0.js",
    "revision": "af28750ba184966ab9c2ff6164f196f8"
  },
  {
    "url": "assets/js/23.b70fef75.js",
    "revision": "68513c8d6ce5f8bdc469d4a5c988bdbd"
  },
  {
    "url": "assets/js/24.f95cd407.js",
    "revision": "86298f8b08917ca7abe392f7da633e05"
  },
  {
    "url": "assets/js/25.87c2fd2c.js",
    "revision": "e5bb8e42bddaf293fc9aaebb93e316fe"
  },
  {
    "url": "assets/js/26.a24f3be2.js",
    "revision": "546599663c42fd2d03f14a97dd43accd"
  },
  {
    "url": "assets/js/27.3fa2cea1.js",
    "revision": "aee03b76740ec6a27ca59efac7871159"
  },
  {
    "url": "assets/js/28.0634cf62.js",
    "revision": "7fc431561f80b9bf26755473b27c4126"
  },
  {
    "url": "assets/js/29.a2b0175c.js",
    "revision": "48e3b0696e122fda4640d9ea61581ab3"
  },
  {
    "url": "assets/js/3.e590bb49.js",
    "revision": "45524cf88c3df7507edac7e0e9cc51f5"
  },
  {
    "url": "assets/js/30.0f146738.js",
    "revision": "6b537f8574e625ac6c1ceb6a92d809eb"
  },
  {
    "url": "assets/js/31.63c76bdf.js",
    "revision": "f921b785ed98f6361ff2ad9ec891bcb8"
  },
  {
    "url": "assets/js/32.d40f1d97.js",
    "revision": "1d468fd0e486edc12aad945e6469da2b"
  },
  {
    "url": "assets/js/33.e58a1342.js",
    "revision": "d5904691c36e6e3671b6372e1e496c19"
  },
  {
    "url": "assets/js/34.30a0a3b1.js",
    "revision": "7d7e9097c4c02236e4e3463faa745c42"
  },
  {
    "url": "assets/js/35.3be83656.js",
    "revision": "ae665880edf9992dab7673956c10579f"
  },
  {
    "url": "assets/js/36.009a247b.js",
    "revision": "fb44bafa08a4f3c0d2a9e3ee4f4f7d5d"
  },
  {
    "url": "assets/js/37.c00712d1.js",
    "revision": "553bb34bbf982b8863752bfe95c9bd59"
  },
  {
    "url": "assets/js/38.4c7593c5.js",
    "revision": "6ad203536cfb717a45a3e7a706e973f5"
  },
  {
    "url": "assets/js/39.e51b23e3.js",
    "revision": "60767e5cb3c43337b278649ff4ebf0ff"
  },
  {
    "url": "assets/js/4.3f9d2a85.js",
    "revision": "0e8ebdb4235c69b1926fbe379c615217"
  },
  {
    "url": "assets/js/40.cf5f5731.js",
    "revision": "59fd87e2c28de9374b815c4416285863"
  },
  {
    "url": "assets/js/41.c876baff.js",
    "revision": "99e7d76e5e70d730bb852e39416cf62c"
  },
  {
    "url": "assets/js/42.03413c6b.js",
    "revision": "7fbff33cc90906cdc2ced33b78c6faa0"
  },
  {
    "url": "assets/js/43.84ea0430.js",
    "revision": "d93fc5703f5b15b4ba88a96fb4434887"
  },
  {
    "url": "assets/js/44.8ef171e2.js",
    "revision": "0f9a06a46b428b8d5463c54f44a32c7e"
  },
  {
    "url": "assets/js/45.91bf4574.js",
    "revision": "c824771690dc684f745c5a08fc2bdc40"
  },
  {
    "url": "assets/js/46.8a012360.js",
    "revision": "b2d45ad23eb91dc87c96b7c138d0158a"
  },
  {
    "url": "assets/js/47.978a2a84.js",
    "revision": "db8a88818e0a044cda99f5f657f9ae11"
  },
  {
    "url": "assets/js/48.a91aabbc.js",
    "revision": "8a0f275e2b1ade1e350f642c43007a19"
  },
  {
    "url": "assets/js/49.d4abd079.js",
    "revision": "ff8781dcb935c27844e6cfb4761b8560"
  },
  {
    "url": "assets/js/5.c7cb9d27.js",
    "revision": "6946fde7b533853614c9ec664b168044"
  },
  {
    "url": "assets/js/50.13ac3a08.js",
    "revision": "70dfe0ffd802156b90fb0dad65180091"
  },
  {
    "url": "assets/js/51.2bf15432.js",
    "revision": "2981d1090f35a03c9defaacf53954367"
  },
  {
    "url": "assets/js/52.16d85764.js",
    "revision": "cc31a64e4433bfa57f0f0371527605d0"
  },
  {
    "url": "assets/js/53.078aef56.js",
    "revision": "08883aa7435598452e5932542179d1e4"
  },
  {
    "url": "assets/js/54.a7669cea.js",
    "revision": "c6b3e5b7773d4bf1b257de1e0eb5ec40"
  },
  {
    "url": "assets/js/55.97ae11ad.js",
    "revision": "28fc5a5ae93bc0d05a0b972e31694a4f"
  },
  {
    "url": "assets/js/56.bc206002.js",
    "revision": "fe8f65f94e60bd40f798f0cef04ad86d"
  },
  {
    "url": "assets/js/57.8c30c115.js",
    "revision": "3e1f0ae0605bb4ab8c2fede7d2a13431"
  },
  {
    "url": "assets/js/58.34c8f1a3.js",
    "revision": "102035fc4e67d9e20c58e298df53e8c2"
  },
  {
    "url": "assets/js/59.e045d6c6.js",
    "revision": "88e4daf211592481b1cf4028d995f91c"
  },
  {
    "url": "assets/js/6.0be4e157.js",
    "revision": "40e71cdc62c687fddbd23b61a8b52437"
  },
  {
    "url": "assets/js/60.98d657bb.js",
    "revision": "e5af7506acc531aaa98a59929766bc9c"
  },
  {
    "url": "assets/js/61.86251f78.js",
    "revision": "f37b8e7a9e551468be03cc19ed2c1900"
  },
  {
    "url": "assets/js/62.175be8fa.js",
    "revision": "892db9c2e060becc66f55b984ecc0ca7"
  },
  {
    "url": "assets/js/63.aa2550cf.js",
    "revision": "5cec907f29eb83fe5ca23303a92570d6"
  },
  {
    "url": "assets/js/64.f799979d.js",
    "revision": "02a7be1f9a6ea3db9210e6c6148ce991"
  },
  {
    "url": "assets/js/65.8aa0fd8f.js",
    "revision": "645f69ed33f8378dfb718c46a40edb4b"
  },
  {
    "url": "assets/js/66.caca2551.js",
    "revision": "047ba2553dac6790fe5ddf13da7c62e1"
  },
  {
    "url": "assets/js/67.0e6820d5.js",
    "revision": "46df62a63a6cf44b3a498888aa10548e"
  },
  {
    "url": "assets/js/68.0b60d082.js",
    "revision": "9a207e694ae5aed9897a8f62adaa4ce2"
  },
  {
    "url": "assets/js/7.94bf6868.js",
    "revision": "9050b93df1abc13e95170de10d31a3f3"
  },
  {
    "url": "assets/js/app.51798dee.js",
    "revision": "cae672fcffa9f3b40e08c0c738b1be61"
  },
  {
    "url": "assets/js/vendors~docsearch.d3844009.js",
    "revision": "35736f6febdf8d4b98599806c297b51c"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "1b6f8a8c2471453243d4b284adf6c9c0"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "c49c94dbcd04d8a2c64599c03f3a4849"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "760f0e2c206c5c68a06a5c02ca3592b1"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "d0e52026a87043e4f0a0a19e2e1fb222"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "440dca1cad2c12dbcaaf7065b468b769"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "fa491088692730060e2f0ba8a12e912c"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "1063a0fe458d5078eed60e3f11247512"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "4e6b36d426a72006e1aa5e619ee1b2f2"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "c806d5c96c0ec7213bfa5b9c6e6f861f"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "8dad99187690d2660ab910ab9037efce"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "3fe80781e6714ea74005e2c8036a07d3"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "dc5420d5c7d0157cd4e25b3fe63b2339"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "8aad8b4d840cfdc2993f829864bc4315"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "4b50ffb0914cc29aca1927a3756a9a5a"
  },
  {
    "url": "base/practice/1.electron.html",
    "revision": "9a7c9803839e449ebd4df6851fba5521"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "5ff67fc0c240830a5d0e7d1bb89075cc"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "2965b214b243f8587f51c2add3a1e69f"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "651f8ddbd972daf7c5797acd57548d6d"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "6f309a2d867d6066374d1063e5e98b9b"
  },
  {
    "url": "base/practice/test.html",
    "revision": "3136e718f83b370a4e9fb5824838b34f"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "2e9992e932d9afb785fc32774fa57096"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "index.html",
    "revision": "8a608f991c23da305dec8bb6c08f057e"
  },
  {
    "url": "senior/typeScript/1.index.html",
    "revision": "e6d6586886986aeb5a49a79f9a4f3058"
  },
  {
    "url": "senior/typeScript/1.recursionAndDynamics.html",
    "revision": "0be2932ddaf389f38e80caaeadc39d0f"
  },
  {
    "url": "senior/typeScript/10.table.html",
    "revision": "1e8be2dbaf3332ce9f340ae1396a5bce"
  },
  {
    "url": "senior/typeScript/11.tree.html",
    "revision": "80bd825d4a57bed90dc19dcd1ed7e5e8"
  },
  {
    "url": "senior/typeScript/2.extend.html",
    "revision": "1d080e74e3b3e092c489d9ea04312429"
  },
  {
    "url": "senior/typeScript/3.componentCommunication.html",
    "revision": "f962916062704a62881fb9e638cd0295"
  },
  {
    "url": "senior/typeScript/4.render.html",
    "revision": "fa1533a89ed87be1304e3bd5c9e2f080"
  },
  {
    "url": "senior/typeScript/5.api.html",
    "revision": "28aa8387c9b05f41a54fb727f2080c40"
  },
  {
    "url": "senior/typeScript/6.form.html",
    "revision": "32bee0c73ce046996b74f45cf79c10bb"
  },
  {
    "url": "senior/typeScript/7.checkBox.html",
    "revision": "60b5bc6b89af373d9f4894d4b03f646b"
  },
  {
    "url": "senior/typeScript/8.active.html",
    "revision": "7a9f0bec3d4d61bf03448dba3788840d"
  },
  {
    "url": "senior/typeScript/9.alert.html",
    "revision": "747c6265ae755a823e6d85b1869be9d8"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "66afae7999d9a42e03d3aed26f5ecbc3"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "1023ac4fc25f661984895b7af51d7f02"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "c3640ad2c5018f19aea64fe00374a92d"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "9cb27ba71ad021f9d56e67a5a2a2b823"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "7730961037b0113b6808750af755b379"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "a312aae33020fb2e2f2ad91dab7d655a"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "f6d8b18c8bb24cbcd4ce1ceb246f8c70"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "34a7b6848ae2723f24e510b07fa68f8b"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "f29df7857e54c8367d8dee0373a49d32"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "2cd18d1cc2ce5312f8df6b208b291660"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "720fbda4b4ca47a7a218945061b406ad"
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
