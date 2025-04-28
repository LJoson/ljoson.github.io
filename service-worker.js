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
    "url": "about/aboutme.html",
    "revision": "4c9c0c502c5c8cce477b8bf2d8a0330f"
  },
  {
    "url": "assets/css/0.styles.7c2ddbea.css",
    "revision": "1fd6a6629ca9fb646f58549d57e3b859"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.64e93583.svg",
    "revision": "64e93583d169a901a7d3a20a21707202"
  },
  {
    "url": "assets/img/iconfont.b555cd18.svg",
    "revision": "b555cd1856984a1bbcc86791b54db341"
  },
  {
    "url": "assets/img/loading.9111579b.svg",
    "revision": "9111579b51f5dedc91eec1a9b4228a9f"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/1.ad2741e3.js",
    "revision": "b74caa66290041d440b6216c6bef0642"
  },
  {
    "url": "assets/js/10.061af50f.js",
    "revision": "acfcd535c0e746dc0f55091c53ea64ba"
  },
  {
    "url": "assets/js/100.85317b0d.js",
    "revision": "d0801f5c528843a77f533d2715cd39d6"
  },
  {
    "url": "assets/js/101.8b7e5f17.js",
    "revision": "974cd4af079fbdb0bd9791b5896662aa"
  },
  {
    "url": "assets/js/102.724e3dd3.js",
    "revision": "bf839ac14834fb9f653900d34eee4350"
  },
  {
    "url": "assets/js/103.bfb1dc09.js",
    "revision": "a4f95a0116290ecce2a37a9221378aed"
  },
  {
    "url": "assets/js/104.bc172956.js",
    "revision": "3ea0736a9983166c31a5bca11c60ff11"
  },
  {
    "url": "assets/js/105.dd66d16a.js",
    "revision": "b74670d62af33b00d13707fdb46fae60"
  },
  {
    "url": "assets/js/106.934eb59f.js",
    "revision": "38a7941755277a85ef59847536f8e741"
  },
  {
    "url": "assets/js/107.6f0b24bd.js",
    "revision": "5c492ae5c9b10d09845711cdbbe2c8b2"
  },
  {
    "url": "assets/js/108.1e5abf7c.js",
    "revision": "2a96b6ee33b6c81f5583b8eeebebc454"
  },
  {
    "url": "assets/js/109.0b133847.js",
    "revision": "14ea5de42c91089fe51b33379038becb"
  },
  {
    "url": "assets/js/11.c1bf9f21.js",
    "revision": "f172a575c28ac0881ee8dc86d2c65717"
  },
  {
    "url": "assets/js/110.4452fac4.js",
    "revision": "5b54d5e8c85cc59c22cc16bce6371afd"
  },
  {
    "url": "assets/js/111.8dbe7cfe.js",
    "revision": "3ae652ea2146133d640594fb81de1f30"
  },
  {
    "url": "assets/js/112.a2640d20.js",
    "revision": "7c988339e62635660052732171291244"
  },
  {
    "url": "assets/js/113.1776625c.js",
    "revision": "d4f46088bed481bad863ca1dbf4abe5c"
  },
  {
    "url": "assets/js/114.b2f2dd05.js",
    "revision": "ebfb6cfae64086d670f58d6690994b5e"
  },
  {
    "url": "assets/js/115.4c5e3507.js",
    "revision": "36ede56de6731bf0344f5b5100f26b8c"
  },
  {
    "url": "assets/js/116.55246e31.js",
    "revision": "c875bf191f092c72c1e11a3e48dc1153"
  },
  {
    "url": "assets/js/117.73fbc87f.js",
    "revision": "9c1bd290ff19269458285750c5bacc27"
  },
  {
    "url": "assets/js/118.64a28e52.js",
    "revision": "75cb27795e1634c9bdc5fae834f66b53"
  },
  {
    "url": "assets/js/119.eb809170.js",
    "revision": "9eb4266dc663e84259b5060ef31c887e"
  },
  {
    "url": "assets/js/12.50fe0adf.js",
    "revision": "6b5bb7759d3a31a121a90557fe11b3ea"
  },
  {
    "url": "assets/js/120.103458ff.js",
    "revision": "c2b343fa64499555c6923abd7439da71"
  },
  {
    "url": "assets/js/121.ce43023f.js",
    "revision": "d7158b4127d74ecd96fd6feff21f3cd2"
  },
  {
    "url": "assets/js/122.9ccdb852.js",
    "revision": "a33f010c36a3e87f14343dc20a62f942"
  },
  {
    "url": "assets/js/123.61815387.js",
    "revision": "93e63d58a374547cb69774e072f811c4"
  },
  {
    "url": "assets/js/124.08e66733.js",
    "revision": "3d07bce4043bcad8c8841af3e77c9413"
  },
  {
    "url": "assets/js/125.8057f00b.js",
    "revision": "584a997b813c066d291771a9157b8dea"
  },
  {
    "url": "assets/js/126.31a70f61.js",
    "revision": "47d9c0a394ec2e2ef8a6ce0cd0651a9a"
  },
  {
    "url": "assets/js/127.3b67b02c.js",
    "revision": "37c5cff5309d10c45d4f4a29eabfd08b"
  },
  {
    "url": "assets/js/128.b577a571.js",
    "revision": "c80dedc9fd113352277c779f5f4e89de"
  },
  {
    "url": "assets/js/129.9d910324.js",
    "revision": "b672c15a4003754224119dfe33f032da"
  },
  {
    "url": "assets/js/13.a866e204.js",
    "revision": "df796a1ea05ad844ed3101facaf08165"
  },
  {
    "url": "assets/js/130.8aca0d81.js",
    "revision": "04d6520710e7821fde825bf985a1514d"
  },
  {
    "url": "assets/js/131.ea811b09.js",
    "revision": "2fc4b1186a2be474515f7489d676afae"
  },
  {
    "url": "assets/js/132.76bfb2dc.js",
    "revision": "90d214d5366b89d29aeb5df7875605de"
  },
  {
    "url": "assets/js/133.a2c35376.js",
    "revision": "e7832c385a3fe02fa26ec01e2fa3b1e0"
  },
  {
    "url": "assets/js/134.06ae0a00.js",
    "revision": "267fd4c9eda39775b0a582acc4617406"
  },
  {
    "url": "assets/js/14.78f9cc08.js",
    "revision": "26cc55331929fe4d65a12fd2856d4fb3"
  },
  {
    "url": "assets/js/15.d4060631.js",
    "revision": "692bd569d60a4c55415cb1e74cccb57e"
  },
  {
    "url": "assets/js/16.3434d0b6.js",
    "revision": "dd4f4f60cf2d1bce3fd03eb4a8491a86"
  },
  {
    "url": "assets/js/17.eda8d321.js",
    "revision": "885481caa4952dc6e3c91fa98c17fe1c"
  },
  {
    "url": "assets/js/18.bdd63861.js",
    "revision": "f9013376940dbf949e65bde1c967deed"
  },
  {
    "url": "assets/js/19.fbd1cf33.js",
    "revision": "f0ebf66e6e95f8da3bf1d19fc0f5922b"
  },
  {
    "url": "assets/js/2.b0f5b6a6.js",
    "revision": "20aa469d9994fdd460cbbecfb885a2d9"
  },
  {
    "url": "assets/js/20.a8dae886.js",
    "revision": "8cc540d1823563697aa50f03309fe4b9"
  },
  {
    "url": "assets/js/21.b6f04af7.js",
    "revision": "a56dfe4b98f3dcaf52bcf18ec9183f65"
  },
  {
    "url": "assets/js/22.f7430b65.js",
    "revision": "add54754e56116c0bec859febd4a41b3"
  },
  {
    "url": "assets/js/23.9ac373d9.js",
    "revision": "67f20802fdf68b9646ca2453c5a66425"
  },
  {
    "url": "assets/js/24.e22a443a.js",
    "revision": "212b38acc9dd22b1190751367f443ad9"
  },
  {
    "url": "assets/js/25.36f2adb4.js",
    "revision": "49ce4d27bae6495445b879f1b21bf985"
  },
  {
    "url": "assets/js/26.5c85b2c3.js",
    "revision": "ed803a4ae2d888e3e55daac30fa8ef11"
  },
  {
    "url": "assets/js/27.51c2e282.js",
    "revision": "118c432e348bc3c4831cae783cee2991"
  },
  {
    "url": "assets/js/28.3b5555cb.js",
    "revision": "5b859229f592a8a099f2aa64b59a3f71"
  },
  {
    "url": "assets/js/29.f290854b.js",
    "revision": "d0ec418496be2836bfecbf9283dc2ecb"
  },
  {
    "url": "assets/js/30.6495d68c.js",
    "revision": "b0a75c44da9b0a3892cbfc635a993843"
  },
  {
    "url": "assets/js/31.d2291244.js",
    "revision": "ddfae9a9f462d9938b935ef90c87469b"
  },
  {
    "url": "assets/js/32.67cb6a0b.js",
    "revision": "710d7783a3234345fb8d38d120dfbdbe"
  },
  {
    "url": "assets/js/33.ebac8658.js",
    "revision": "07bd1861edee4db5b3ade37ba11e9bce"
  },
  {
    "url": "assets/js/34.b4056456.js",
    "revision": "93904160040d894e85f87d073c7d2ca6"
  },
  {
    "url": "assets/js/35.2d35ec45.js",
    "revision": "c91fec31816ecddc0470ebb99dd8a103"
  },
  {
    "url": "assets/js/36.6da1ac84.js",
    "revision": "10f97ce12577fa0e5eb89b28d42cbbef"
  },
  {
    "url": "assets/js/37.8d970d48.js",
    "revision": "484c970c936d9e54e6d72fb2024aadbb"
  },
  {
    "url": "assets/js/38.94dfd07f.js",
    "revision": "5e47eb7e38f3ea0fefae226925d4f181"
  },
  {
    "url": "assets/js/39.b0e22253.js",
    "revision": "fa4014d5869c8b491a187418521f9fe2"
  },
  {
    "url": "assets/js/40.a0e6dc1e.js",
    "revision": "bdfe6f1360286fe3bef36f444595b882"
  },
  {
    "url": "assets/js/41.67345a28.js",
    "revision": "d2ea93b977026bbc9a5004abe34ade10"
  },
  {
    "url": "assets/js/42.bae9c869.js",
    "revision": "3575991d3064d1ebce6c62d1b2fb6072"
  },
  {
    "url": "assets/js/43.d62be483.js",
    "revision": "132b1c5b728165ab04b36a71573dfe3b"
  },
  {
    "url": "assets/js/44.2efe511e.js",
    "revision": "19806113212abb42f0a36aa32af7442f"
  },
  {
    "url": "assets/js/45.e44be0c9.js",
    "revision": "6bb8d2b5cfe188c70f17328dfe2f521e"
  },
  {
    "url": "assets/js/46.429897b0.js",
    "revision": "e83d6099226375cfecfb35b471f32bf1"
  },
  {
    "url": "assets/js/47.026450f6.js",
    "revision": "06db0df781445efa53ab8d297b77091a"
  },
  {
    "url": "assets/js/48.1b6ac3b2.js",
    "revision": "379bf38698a55b09a1647722d0de404c"
  },
  {
    "url": "assets/js/49.0d5de7d1.js",
    "revision": "498cde5c347ede9a0b213ed23ca587f2"
  },
  {
    "url": "assets/js/5.882ae477.js",
    "revision": "658018412c83eb35f053a597ae2a421d"
  },
  {
    "url": "assets/js/50.bcaa0633.js",
    "revision": "32b344d2047419157bdd09e9a63ad6c2"
  },
  {
    "url": "assets/js/51.bbe1f24b.js",
    "revision": "a4e279e34eee64ec49d8e3caeab5d622"
  },
  {
    "url": "assets/js/52.4d4d4941.js",
    "revision": "50e0df76f577a1271c67594b92e0be3a"
  },
  {
    "url": "assets/js/53.b3074dbb.js",
    "revision": "db4fdd2a5802d574ab543f2045a54db3"
  },
  {
    "url": "assets/js/54.7b51af21.js",
    "revision": "cc36316c91aba9bfe7757fc36d45083d"
  },
  {
    "url": "assets/js/55.4880a3a5.js",
    "revision": "c2d36c0ae9d6576f1b1f6894c79260c3"
  },
  {
    "url": "assets/js/56.0fbaa129.js",
    "revision": "40d6c1638fe686a1a342b1f0d351f384"
  },
  {
    "url": "assets/js/57.fa32ec0f.js",
    "revision": "d1895827d13b6a3feed3a6438f47ead9"
  },
  {
    "url": "assets/js/58.3ab779c1.js",
    "revision": "b3452721116bf1740cbc8caa390c6003"
  },
  {
    "url": "assets/js/59.f7416e71.js",
    "revision": "e60dbb2a4d60e280a48f17a7a1e8d2cc"
  },
  {
    "url": "assets/js/6.cfda4e49.js",
    "revision": "ad7fe80da1c0cc1c54defd23d661baa5"
  },
  {
    "url": "assets/js/60.f997e769.js",
    "revision": "d11bca773d8aeee38ece529a4b844655"
  },
  {
    "url": "assets/js/61.b6ce2d29.js",
    "revision": "4969010eb661d21a13ef7d3616c91ae8"
  },
  {
    "url": "assets/js/62.484e896b.js",
    "revision": "22545ab1afc8eab4ed53def3b19d5363"
  },
  {
    "url": "assets/js/63.7436e7b5.js",
    "revision": "64b515f8f75f96874c002cdb48f11827"
  },
  {
    "url": "assets/js/64.0af3fb9d.js",
    "revision": "998133b18fb4c292edcff34b1d6c1698"
  },
  {
    "url": "assets/js/65.cc6b1063.js",
    "revision": "e99af1712c821579e5c43e997f7e7678"
  },
  {
    "url": "assets/js/66.b226aae4.js",
    "revision": "9541fc27e7607cc3a480bb8e097e77f1"
  },
  {
    "url": "assets/js/67.23fa8790.js",
    "revision": "ba4da7faa347583934de2e8e82b4b29e"
  },
  {
    "url": "assets/js/68.fb8897ef.js",
    "revision": "326542b7070ad548511ef2cefcee096c"
  },
  {
    "url": "assets/js/69.ca44c95b.js",
    "revision": "b8f690682f57115c929421c1a7368e8b"
  },
  {
    "url": "assets/js/7.4ce0026c.js",
    "revision": "84d4b0d34922b79b6fa8347204e1fca2"
  },
  {
    "url": "assets/js/70.dc65b621.js",
    "revision": "dc142cb439bc82fe38a82ffe288aece5"
  },
  {
    "url": "assets/js/71.627c41f8.js",
    "revision": "61f59ea026eebb0f20222a162ce34cc6"
  },
  {
    "url": "assets/js/72.30703fc7.js",
    "revision": "fab6dd3d0b7f38287c6d0fdc28559331"
  },
  {
    "url": "assets/js/73.48afc079.js",
    "revision": "d1ca3c9fa01feb071f9bb659f0c3823d"
  },
  {
    "url": "assets/js/74.1181783d.js",
    "revision": "9bcd7f6d4df3881cee20e07c7cc047f4"
  },
  {
    "url": "assets/js/75.c70d8736.js",
    "revision": "029db0162ea30efbb9b72cd69fcf316b"
  },
  {
    "url": "assets/js/76.a2c7c0b4.js",
    "revision": "09ea38dfd115ecb43d07c375255d8799"
  },
  {
    "url": "assets/js/77.ba42676c.js",
    "revision": "4b5eb5a202d9edbd35930c033f157a9f"
  },
  {
    "url": "assets/js/78.1bdfbac5.js",
    "revision": "acb65afd2076700322b436003edc5523"
  },
  {
    "url": "assets/js/79.5343f801.js",
    "revision": "04e8753c8c6799d799f6aa8fc623961e"
  },
  {
    "url": "assets/js/8.94e9fcf2.js",
    "revision": "e55e46e7fd9602fcd2ae119ba4928a87"
  },
  {
    "url": "assets/js/80.aaff9fb9.js",
    "revision": "d72dee3f9ab0b2ed5101bc66550620be"
  },
  {
    "url": "assets/js/81.7855e1f9.js",
    "revision": "ae226f9c44e7e7dfa90f6a01d8229e20"
  },
  {
    "url": "assets/js/82.a522f853.js",
    "revision": "e12b994324aaf1b474b4df171c5bbbd8"
  },
  {
    "url": "assets/js/83.d417cbce.js",
    "revision": "045f7ecb422569a67f74d26c8e820399"
  },
  {
    "url": "assets/js/84.aa477229.js",
    "revision": "fc798b744607da96517cce7155db81e1"
  },
  {
    "url": "assets/js/85.737ceb08.js",
    "revision": "7f50251b52d4b9608cf98c4a49d19931"
  },
  {
    "url": "assets/js/86.76914c69.js",
    "revision": "e10bc7374e3902d8a1008eddda68b6de"
  },
  {
    "url": "assets/js/87.ca65d02a.js",
    "revision": "89d961ae42e97ea4c0e49865f8bb2467"
  },
  {
    "url": "assets/js/88.ecd6fbe0.js",
    "revision": "ed702b4ba13c59f0dda870b2064a498a"
  },
  {
    "url": "assets/js/89.8321befc.js",
    "revision": "78b4434b067413ffe21f598530d6714e"
  },
  {
    "url": "assets/js/9.8972d482.js",
    "revision": "908139325fc1eb1f198b57bb67556db3"
  },
  {
    "url": "assets/js/90.3130a41f.js",
    "revision": "94473833338f88d8d3b6609e9d507faa"
  },
  {
    "url": "assets/js/91.662fea10.js",
    "revision": "0b3774a3377ec5677c85512cbd8053cc"
  },
  {
    "url": "assets/js/92.afebfc2f.js",
    "revision": "983bddd9b7b77d242d61aa936f80b5c6"
  },
  {
    "url": "assets/js/93.93c4872e.js",
    "revision": "de9e69a14584bbda5f5b8c6abfc523bc"
  },
  {
    "url": "assets/js/94.1ef96f22.js",
    "revision": "1fe8a676b6639cd6708fe4679e83efc2"
  },
  {
    "url": "assets/js/95.76a35ecf.js",
    "revision": "a009dc96ba3c77ba830fc06da90a06c5"
  },
  {
    "url": "assets/js/96.afd7ca1a.js",
    "revision": "f5b6bb56aba4755f8e16645afce7e57a"
  },
  {
    "url": "assets/js/97.e5ffb86e.js",
    "revision": "594159f576c7f86e4597673a1dae1be4"
  },
  {
    "url": "assets/js/98.7bb55507.js",
    "revision": "d8244f9e8e9b426b50ceef21e61ec9f4"
  },
  {
    "url": "assets/js/99.4ded3fca.js",
    "revision": "2712e7f901f6b8e752551fe8ad453145"
  },
  {
    "url": "assets/js/app.c1719760.js",
    "revision": "c31dcb32161a3031a3c011acff7db23b"
  },
  {
    "url": "assets/js/vendors~flowchart.b04affb9.js",
    "revision": "cf81ce7c0660dc075e39542ed187aa0b"
  },
  {
    "url": "categories/笔记等/index.html",
    "revision": "35219d1e7ee61c0ab61ef0033ee5d884"
  },
  {
    "url": "categories/笔记等/page/2/index.html",
    "revision": "9ca7ad2d0edf1adf208a218b91c5e03a"
  },
  {
    "url": "categories/电子设计等/index.html",
    "revision": "b25a586f85d25f53f8580a731f98675c"
  },
  {
    "url": "categories/电子设计等/page/2/index.html",
    "revision": "f70863e3da7af18dba44738ef9a4c5f8"
  },
  {
    "url": "categories/计算机技术等/index.html",
    "revision": "c75a61a9dbc3dbba3ac6b7d89a82c561"
  },
  {
    "url": "categories/计算机技术等/page/2/index.html",
    "revision": "2b25ba9e5763744d22800f5dfa1a1401"
  },
  {
    "url": "categories/算法等/index.html",
    "revision": "2164a287acf8ca040ec1b9776ffafa76"
  },
  {
    "url": "categories/算法等/page/2/index.html",
    "revision": "278245a516b0cbd21adc20a429530736"
  },
  {
    "url": "categories/游戏设计等/index.html",
    "revision": "0406652675dcac6f3b32cfe1e833d091"
  },
  {
    "url": "categories/杂谈/index.html",
    "revision": "b469093a4e542ddfa4e7950fbb185e37"
  },
  {
    "url": "categories/杂谈/page/2/index.html",
    "revision": "1a0ad6c22498abe010ad460800ca910f"
  },
  {
    "url": "categories/AI及机器人等/index.html",
    "revision": "2aaba1b03fe4a22129b39152eab31153"
  },
  {
    "url": "categories/AI及机器人等/page/2/index.html",
    "revision": "ab9baea00bc8bb4e1859ba961324ec7c"
  },
  {
    "url": "categories/AI及机器人等/page/3/index.html",
    "revision": "c9e2204cfc674addc4a2871d8113dd67"
  },
  {
    "url": "categories/index.html",
    "revision": "67801d8299183f669f6c465b250fcdbd"
  },
  {
    "url": "iconfont/iconfont.css",
    "revision": "e4f97a8e278e3c3bd356937e5018890c"
  },
  {
    "url": "iconfont/iconfont.eot",
    "revision": "0fe2ea06e44b4c5586cd81edfb62fa67"
  },
  {
    "url": "iconfont/iconfont.svg",
    "revision": "64e93583d169a901a7d3a20a21707202"
  },
  {
    "url": "iconfont/iconfont.ttf",
    "revision": "b2bb6a1eda818d2a9d922d41de55eeb1"
  },
  {
    "url": "iconfont/iconfont.woff",
    "revision": "3779cf87ccaf621f668c84335713d7dc"
  },
  {
    "url": "iconfont/iconfont.woff2",
    "revision": "66dad00c26f513668475f73f4baa29aa"
  },
  {
    "url": "img/AI/2020baidustar/1.png",
    "revision": "78dcb8491d5d5aa41589b0c9d2a5f6ad"
  },
  {
    "url": "img/AI/2020baidustar/2.png",
    "revision": "2728e19da34296751237bd1fd23f9d97"
  },
  {
    "url": "img/AI/2020baidustar/3.png",
    "revision": "3d62c839ce9dd179923bb5ed4fb0929b"
  },
  {
    "url": "img/AI/2020baidustar/4.png",
    "revision": "3aaafd78bbd1a56ef46f01a7008caa8d"
  },
  {
    "url": "img/AI/2020baidustar/5.png",
    "revision": "af302baf88185c016a8b20887316aa5b"
  },
  {
    "url": "img/AI/2020baidustar/6.png",
    "revision": "cea38cb805946935023f9c1229393112"
  },
  {
    "url": "img/AI/2020baidustar/7.png",
    "revision": "89d14a9ecce651b2b494b244de2383e9"
  },
  {
    "url": "img/AI/ebot0/01a7c3670452482cb40c71e7322a53ae.jpeg",
    "revision": "0de70c432709f892cdfb3537d8a44e71"
  },
  {
    "url": "img/AI/ebot0/35e8faa7756b4301bd69061f7956e4bf.jpeg",
    "revision": "55d43df196d6f1865e549ea58d1c2f1a"
  },
  {
    "url": "img/AI/ebot0/5ecdd9d4fa4a4208b4baa9f42d2f10a3.jpeg",
    "revision": "c469cad7bfc0e9fc99ca4ecd290f8e03"
  },
  {
    "url": "img/AI/ebot0/a2583928ec0f43a9a4df67812396e714.jpeg",
    "revision": "433223d438ce7f0ca982c2039ff8f2b2"
  },
  {
    "url": "img/AI/ebot0/a67e7cb7fa5e4590a05fedbdbca4e1db.jpeg",
    "revision": "5b3621507a2d5356a2ff3f3902696566"
  },
  {
    "url": "img/AI/ebot0/a83aa8a4fcb84181a1cbe98763a05e98.jpeg",
    "revision": "c0c888a74d4feae7972e8daf30f4cd1e"
  },
  {
    "url": "img/AI/ebot0/ee759e7ac1c54f95901803e056bdf9be.jpeg",
    "revision": "5d7f3ca3940a4b0b3bffe830270bca66"
  },
  {
    "url": "img/algorithm/clahe/1.png",
    "revision": "af69392c9600a6a76f3e68536bcf2c36"
  },
  {
    "url": "img/algorithm/clahe/10.png",
    "revision": "bd4e37c0ee4cf5cec070152e78a3fbc0"
  },
  {
    "url": "img/algorithm/clahe/11.png",
    "revision": "43a7f6eeb3fa54378d722791244c052b"
  },
  {
    "url": "img/algorithm/clahe/12.png",
    "revision": "eeb07bb1c1c3a53f6249975d77cb77bf"
  },
  {
    "url": "img/algorithm/clahe/13.png",
    "revision": "3de4bb13fe808960cdcd5211e2b86af5"
  },
  {
    "url": "img/algorithm/clahe/2.png",
    "revision": "6edbbdb7bba049db5150c9ad7e480678"
  },
  {
    "url": "img/algorithm/clahe/3.png",
    "revision": "cbad0d856725a22d0cc8a214d16c186e"
  },
  {
    "url": "img/algorithm/clahe/4.png",
    "revision": "576bcbdac4be4b9368188280cfbd5473"
  },
  {
    "url": "img/algorithm/clahe/5.png",
    "revision": "60bbd159d39f8687c68b3ab0a1e08ba3"
  },
  {
    "url": "img/algorithm/clahe/6.png",
    "revision": "2f96b1ca2914c6150e022a134af637d6"
  },
  {
    "url": "img/algorithm/clahe/7.png",
    "revision": "26d35876fa8a09a8254412b48812ed07"
  },
  {
    "url": "img/algorithm/clahe/8.png",
    "revision": "d489914bf957a3ac62f4ff3c4b0acb3a"
  },
  {
    "url": "img/algorithm/clahe/9.png",
    "revision": "e34df34d9f3ac91672c9153df39c5dc0"
  },
  {
    "url": "img/algorithm/image.png",
    "revision": "a1c80bc4d2b03d5717b258c3ebf1b240"
  },
  {
    "url": "img/algorithm/kittle/1.png",
    "revision": "8f21f7cfb058b76eeb5ac53d3d8dd9de"
  },
  {
    "url": "img/algorithm/kittle/2.png",
    "revision": "5e5acd5766d0621f84fa41aea434d555"
  },
  {
    "url": "img/algorithm/kittle/3.png",
    "revision": "fe413947f5bdc0f551fa22a1b787d1ff"
  },
  {
    "url": "img/algorithm/kittle/4.png",
    "revision": "7eea798d5e5d1757ed27e4b27e09b0e2"
  },
  {
    "url": "img/algorithm/kittle/5.png",
    "revision": "d2b0a0678d9639d401f57cf8a82360df"
  },
  {
    "url": "img/algorithm/kittle/grad.jpg",
    "revision": "584ebb5234f299bfcea0424e238fa931"
  },
  {
    "url": "img/algorithm/retinex/1.png",
    "revision": "93cde94cc1ee2ec4befe4c51232f99bf"
  },
  {
    "url": "img/algorithm/retinex/2.jpg",
    "revision": "0a76449f707486beec077562322affdb"
  },
  {
    "url": "img/algorithm/retinex/3.jpg",
    "revision": "d8fbb15737e1072dfea9c5b81457e84f"
  },
  {
    "url": "img/algorithm/retinex/4.jpg",
    "revision": "225eca9c3f1dab67f82d892a80d8e121"
  },
  {
    "url": "img/algorithm/retinex/5.jpg",
    "revision": "ce887c4f0edaa5682f01ecfc25b06d6b"
  },
  {
    "url": "img/algorithm/retinex/6.jpg",
    "revision": "b8868f8e3f2a4db85f39e35dc2b5f192"
  },
  {
    "url": "img/freetalk/1/2.jpg",
    "revision": "b036dd0d94d7c4718bec84659aeb2fe7"
  },
  {
    "url": "img/projects/midbot/1.jpg",
    "revision": "fbd2c7eb9ab0d2854f163e630a9b7d79"
  },
  {
    "url": "index.html",
    "revision": "ee8b105a895808fbe4c7194631851c3a"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "c8209619f9a8260aee66ce7691c9f2ad"
  },
  {
    "url": "projects/github.html",
    "revision": "24d5507e391815701a1b6723f0262cf2"
  },
  {
    "url": "tag/index.html",
    "revision": "1e271b568b8ade8f7ab2f485300cba64"
  },
  {
    "url": "tags/比赛/index.html",
    "revision": "54191c71ff16f7b82f3382f6483219df"
  },
  {
    "url": "tags/编解码器/index.html",
    "revision": "512076c7868d6aada35b19257f8bed46"
  },
  {
    "url": "tags/操作系统os/index.html",
    "revision": "2255171f6b9a9086948d3de06e342804"
  },
  {
    "url": "tags/电子设计/index.html",
    "revision": "ed71f6aa34c19c9fa0b0dcf04c6c82c2"
  },
  {
    "url": "tags/机器人/index.html",
    "revision": "66d9b15d367bc5b1838bcbe514e8e12d"
  },
  {
    "url": "tags/机器学习/index.html",
    "revision": "5f3bb2f342259bddd535d1e463cee9f1"
  },
  {
    "url": "tags/计算机视觉/index.html",
    "revision": "10217c7307ae8c7f187e7df29637617a"
  },
  {
    "url": "tags/计算机网络/index.html",
    "revision": "6c1ce26ff316f938561279e8e96a4b1c"
  },
  {
    "url": "tags/开源写字机/index.html",
    "revision": "ceb3db24aeceefd96cffaa54b7d55b6b"
  },
  {
    "url": "tags/量化/index.html",
    "revision": "7ae38e611034e58ff2530a46c1a64a47"
  },
  {
    "url": "tags/模型部署/index.html",
    "revision": "c8c922a9a397594894fefd0cc7940ec2"
  },
  {
    "url": "tags/模型部署及加速/index.html",
    "revision": "6da5e55d637ec460cadd33c7b13e0a8e"
  },
  {
    "url": "tags/目标检测/index.html",
    "revision": "aa20b68a973f98d15307853c71c33389"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "1783ec31933a39be9d8b9e3201c61734"
  },
  {
    "url": "tags/前端动画/index.html",
    "revision": "e9c8e39b27659c6b2a1f1f7ff9695bbf"
  },
  {
    "url": "tags/嵌入式/index.html",
    "revision": "d69eb5fa9d8aea44bcf2832df21714eb"
  },
  {
    "url": "tags/深度学习/index.html",
    "revision": "8cfe2635402721338cb0912ab3c67daf"
  },
  {
    "url": "tags/数据结构与算法/index.html",
    "revision": "b2db5eac7049e32d10cc839c58ff24f7"
  },
  {
    "url": "tags/图像处理/index.html",
    "revision": "045ce20b1fc4c1ee07e41b2f608fc3ec"
  },
  {
    "url": "tags/图像处理/page/2/index.html",
    "revision": "b61611f14b528977bc9901656a041e4e"
  },
  {
    "url": "tags/网络协议/index.html",
    "revision": "db456999b05368a4af8ee5ef4f37a814"
  },
  {
    "url": "tags/文档笔记/index.html",
    "revision": "9d69e62075ca7feac1c9565b914052d8"
  },
  {
    "url": "tags/物联网/index.html",
    "revision": "12158b5b933882f5e641c79be0818f7c"
  },
  {
    "url": "tags/音视频开发/index.html",
    "revision": "d246e1df046bf651a3b6a19fee46a678"
  },
  {
    "url": "tags/游戏开发/index.html",
    "revision": "6f9852cb6aec10a29bb65f7ac39119b8"
  },
  {
    "url": "tags/杂谈/index.html",
    "revision": "8832b9ba135a1b741b4bb4303edbb7b6"
  },
  {
    "url": "tags/姿态估计/index.html",
    "revision": "a4d15f145e81d14d8fe2c252be44b8aa"
  },
  {
    "url": "tags/最优化控制/index.html",
    "revision": "2fdbda1ac65098f442736127fc743847"
  },
  {
    "url": "tags/Android/index.html",
    "revision": "b80528515e6bf15e7848cc190ac1a3b8"
  },
  {
    "url": "tags/bug/index.html",
    "revision": "d9b5f8605960802d2ec88a5c06b73988"
  },
  {
    "url": "tags/CI/CD/index.html",
    "revision": "1f767fb7b34fbf9c4cdb9bdfb511e05a"
  },
  {
    "url": "tags/cmake/index.html",
    "revision": "148706aca78e3a4e5e1d391affe86787"
  },
  {
    "url": "tags/CNN/index.html",
    "revision": "d6d7325640e872247c846e2db73f5fb1"
  },
  {
    "url": "tags/cpp/index.html",
    "revision": "69da3dbb2dcea2a9ac87e2a3f55b6851"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "d908216ecfa7057d903805ae47072971"
  },
  {
    "url": "tags/FPGA/index.html",
    "revision": "e367959de8192c4e0802c8a39934a1c6"
  },
  {
    "url": "tags/GUI/index.html",
    "revision": "2ad74bf25467fc14a9250bff966ab4a7"
  },
  {
    "url": "tags/HarmonyOS/index.html",
    "revision": "32261b0e16c3c452a547465f8828a4b6"
  },
  {
    "url": "tags/LINUX/index.html",
    "revision": "e41a73bad462f649e2cde53657237969"
  },
  {
    "url": "tags/live2d/index.html",
    "revision": "68e37af0fe789437fed238b7bfdf7707"
  },
  {
    "url": "tags/mmpose/index.html",
    "revision": "6644c638be924424708d20a6a2bd40e6"
  },
  {
    "url": "tags/NLP/index.html",
    "revision": "d256a7e4e8c50fdb349d84d25f41187f"
  },
  {
    "url": "tags/opencv/index.html",
    "revision": "9e06a4c3067e9fe75cea34e69500ee05"
  },
  {
    "url": "tags/pypi/index.html",
    "revision": "f1f85eb9740db499856224ed128d616f"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "b9abcf9165f8055efa123a2c028ea960"
  },
  {
    "url": "tags/RL/index.html",
    "revision": "f25ab2d719f076c1cf93a8b4c7f80be4"
  },
  {
    "url": "tags/ROS/index.html",
    "revision": "d4be1bf71c7829dd11d4828ef0e4f448"
  },
  {
    "url": "tags/slam/index.html",
    "revision": "9a20c31bd83139e4def67d55ab64f6c3"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "2d6ef1ec18e89b7c826e0dd2c220b1a1"
  },
  {
    "url": "tags/YOLO/index.html",
    "revision": "4892377838b93792fce70f3d12369959"
  },
  {
    "url": "timeline/index.html",
    "revision": "9ba088ba79df02716098d00753d369ba"
  },
  {
    "url": "view/other/comment.png",
    "revision": "6878f2fce5e82c12f91eef87bde8bd2c"
  },
  {
    "url": "views/AI/2020baidustar.html",
    "revision": "a12800c95774cc87e32499cac66b6084"
  },
  {
    "url": "views/AI/coder/index.html",
    "revision": "7d9fec2bbed388860dd9cc35641898b4"
  },
  {
    "url": "views/AI/detection.html",
    "revision": "4317e2fc134f44a7d51341572a76371f"
  },
  {
    "url": "views/AI/ebot/ebot0.html",
    "revision": "0f95b7e2d9459ff51bbb5499800737d8"
  },
  {
    "url": "views/AI/ebot/ebot1.html",
    "revision": "6124f2a3c7b660ce9d981bc32dee7820"
  },
  {
    "url": "views/AI/guiYolov4.html",
    "revision": "a9eaebeaa92677dab603cedc2a4f825e"
  },
  {
    "url": "views/AI/handwrite/cnn/cifar.html",
    "revision": "a687041615a0fce09aca46c940dd21f8"
  },
  {
    "url": "views/AI/mmlab/mmpose/00.html",
    "revision": "c24a322274906869b4585e74e0751328"
  },
  {
    "url": "views/AI/photo.html",
    "revision": "7aa4d40f5eb12799acc7ee1fd369291c"
  },
  {
    "url": "views/AI/RL/curobo.html",
    "revision": "4aae4d68f0f3f71ddd7a434a876219d2"
  },
  {
    "url": "views/AI/RL/env.html",
    "revision": "7133ab0460f8ccf34f6a6cee68e1f276"
  },
  {
    "url": "views/AI/RL/ppo.html",
    "revision": "78f4803ea02588e1e5e6c69309d1e8ec"
  },
  {
    "url": "views/AI/RL/vima.html",
    "revision": "804510d8e821e365357f42b20437d589"
  },
  {
    "url": "views/AI/RL/wtw.html",
    "revision": "d7a703c8d8f63028d2112a1731f15a62"
  },
  {
    "url": "views/AI/taac2021.html",
    "revision": "1e276b5523f7e7c7429b93b64fb6109a"
  },
  {
    "url": "views/AI/tengine/ohosndk0.html",
    "revision": "ca41a17d2cd10177f63d18872398f1c3"
  },
  {
    "url": "views/AI/tensorrt/env.html",
    "revision": "9dc03bc7ba9d2d20282b2340f06475df"
  },
  {
    "url": "views/AI/TextClassification.html",
    "revision": "3235f410fac33e02189bbe99acebb722"
  },
  {
    "url": "views/AI/tf2.0.html",
    "revision": "91547c3956932c7df594f77f7a1a3efa"
  },
  {
    "url": "views/AI/yolo/yolov4.html",
    "revision": "e8a5a3c21af56fca304bd0f4db948eb3"
  },
  {
    "url": "views/AI/yolo/yolov9_ncnn.html",
    "revision": "37016a873fc8c9f9c301c9a09bfc9020"
  },
  {
    "url": "views/algorithm/datastructure/queue.html",
    "revision": "905abab0310ec6a70c2c04c47a553ee8"
  },
  {
    "url": "views/algorithm/datastructure/stack.html",
    "revision": "58dd2581f8c1d201e9bcd2e92e994c26"
  },
  {
    "url": "views/algorithm/datastructure/trie.html",
    "revision": "919a3b5ef7c1c6feaa99494e3c63c5a4"
  },
  {
    "url": "views/algorithm/leetcode/leetcode1.html",
    "revision": "b17a4ae38ea55e54663b18ff33dc4b56"
  },
  {
    "url": "views/algorithm/leetcode/leetcode2.html",
    "revision": "47580f1c248ea0f4648ed92e4cf5efbb"
  },
  {
    "url": "views/algorithm/opencv/clahe.html",
    "revision": "b76b3bfd452c1777ea1b6c00f5200021"
  },
  {
    "url": "views/algorithm/opencv/cornerdetection00.html",
    "revision": "e18d21fb53fd142e793261e5f920c9ad"
  },
  {
    "url": "views/algorithm/opencv/env.html",
    "revision": "5ec5125147887ec72ba53aa0eea42f12"
  },
  {
    "url": "views/algorithm/opencv/ImageProcessing.html",
    "revision": "4d2113375c6c1b5cb48e98c2a348434b"
  },
  {
    "url": "views/algorithm/opencv/iqa.html",
    "revision": "ee8074cba322295ce93e74d9702a48ae"
  },
  {
    "url": "views/algorithm/opencv/otsu.html",
    "revision": "470d54ea6394424480fe76812326cf7e"
  },
  {
    "url": "views/algorithm/opencv/retinex.html",
    "revision": "c0f7c4c40f00c7366a3f048b9fca0edf"
  },
  {
    "url": "views/algorithm/ppq/day1.html",
    "revision": "1a083f85639963ee222b1bd80b68fbd1"
  },
  {
    "url": "views/algorithm/ppq/day2.html",
    "revision": "db581181d525170cd4ef46a89b622e12"
  },
  {
    "url": "views/algorithm/slam/aloam.html",
    "revision": "98a19d337f9a3f96f0b182864454c241"
  },
  {
    "url": "views/algorithm/slam/n0.html",
    "revision": "65ba6d354c8ea32bbc025d05eb4572ac"
  },
  {
    "url": "views/algorithm/slam/velyodyne.html",
    "revision": "1a9cee5d9d1d81fedaa73e4227cdaa8e"
  },
  {
    "url": "views/algorithm/slam/vslam_rs.html",
    "revision": "a88237232ef3697848f218cd13378b1a"
  },
  {
    "url": "views/cs/android/mina.html",
    "revision": "35e4654a00777e657e319273abab717a"
  },
  {
    "url": "views/cs/cmake/00.html",
    "revision": "a1f4a4fc2723a5e82d866b65e8d804f1"
  },
  {
    "url": "views/cs/cplusplus/c.html",
    "revision": "c517250ccb371ea7927b0c6b9ee92609"
  },
  {
    "url": "views/cs/ffmpeg/compile.html",
    "revision": "1c880ef540d86ef7aed4ce6abb0d2e1a"
  },
  {
    "url": "views/cs/ffmpeg/win_env.html",
    "revision": "e4196a437ff336f90f9cfba67c350f84"
  },
  {
    "url": "views/cs/gtsreamer/py_gst.html",
    "revision": "81e889ca78b7bb5b4d11c322c59b8625"
  },
  {
    "url": "views/cs/gtsreamer/qs.html",
    "revision": "f99276d582442a23f038f4f29b7d9fec"
  },
  {
    "url": "views/cs/Imagesegmentation.html",
    "revision": "01c8814d0002ee3593c1ade0d6e317cb"
  },
  {
    "url": "views/cs/MFCbmp.html",
    "revision": "2fc03780aa0755736f01fdaddcef9052"
  },
  {
    "url": "views/cs/OS/GlimmerOS.html",
    "revision": "2be659e3743d4b5ba61dabe6e829bc2e"
  },
  {
    "url": "views/cs/python/note0.html",
    "revision": "99bcd16dcf2c5e0a65e748d1c4db357b"
  },
  {
    "url": "views/cs/ros/env.html",
    "revision": "a9188618bc0abff4b487bf75c54af7a5"
  },
  {
    "url": "views/cs/ros/note00.html",
    "revision": "6d9901a7fcf7d495a064309c3a822b25"
  },
  {
    "url": "views/cs/vueblog.html",
    "revision": "2ecda1ff74120a477cd835b54dff9035"
  },
  {
    "url": "views/ee/ARMcortex/armenv.html",
    "revision": "40fbc016a2d0a0c71b8d6ee57c3b400e"
  },
  {
    "url": "views/ee/ARMcortex/nanopi0.html",
    "revision": "357dbc6afddccee5923cfbb75147b3f0"
  },
  {
    "url": "views/ee/cubli.html",
    "revision": "943eb25a5c774b7ed64f2f578bae489b"
  },
  {
    "url": "views/ee/fpga/env.html",
    "revision": "e02a8f42b7dab99e5a1edec79f658b7f"
  },
  {
    "url": "views/ee/harmonyos/ohos0.html",
    "revision": "47c47c50c7f7c10baa97d36b615d43fb"
  },
  {
    "url": "views/ee/Humanoid_Robot/hector.html",
    "revision": "b65c9a5afd35d9480fbc047308626b24"
  },
  {
    "url": "views/ee/Humanoid_Robot/LIPM.html",
    "revision": "114c4cd236eea8bca49ee515959faa06"
  },
  {
    "url": "views/ee/Humanoid_Robot/uvc.html",
    "revision": "d21f5dec9830f43409e2cef8256ff691"
  },
  {
    "url": "views/ee/jetson/jetson1.html",
    "revision": "57c5e90a9aced694522929ceebc13e2a"
  },
  {
    "url": "views/ee/midbot.html",
    "revision": "52fa02d65e08884f45602562bb13273f"
  },
  {
    "url": "views/ee/miniBOT.html",
    "revision": "6178cf6c147ec570603c082f366054f8"
  },
  {
    "url": "views/ee/mpc/introduction.html",
    "revision": "3e4b59d411ad82add9df36647f3f4b0f"
  },
  {
    "url": "views/ee/mpc/rfmpc.html",
    "revision": "44012f5e31f3682f335dd142a3134c93"
  },
  {
    "url": "views/ee/mpc/trajectory_optimization.html",
    "revision": "abf7c9cd010079043e274fa8c4edda26"
  },
  {
    "url": "views/ee/quadsdk.html",
    "revision": "f86d28cd669d049e95c436d6121f8b39"
  },
  {
    "url": "views/ee/riscv/gdf103.html",
    "revision": "a3ab7f27251a04eaca6dd2d6df776bf5"
  },
  {
    "url": "views/ee/smallB.html",
    "revision": "a3337ebd7410436f3a69ccda8dfaaf47"
  },
  {
    "url": "views/ee/star.html",
    "revision": "bcc7364517fa4f0dcda73bec8993d5a3"
  },
  {
    "url": "views/ee/tcostiny/tcos0.html",
    "revision": "7a736836194816115b4def756a2f3713"
  },
  {
    "url": "views/ee/tinyascen.html",
    "revision": "8d7a6cff6b88fd1aa357eb2f91883025"
  },
  {
    "url": "views/freetalk/android.html",
    "revision": "c28f8899b5ef0c3129939119364e4d07"
  },
  {
    "url": "views/freetalk/cicd/fix.html",
    "revision": "9bb1838dfcd6503211fd1d537e2d5231"
  },
  {
    "url": "views/freetalk/color.html",
    "revision": "bfe010c2f3a3bed3ddac664b0a68b0ff"
  },
  {
    "url": "views/freetalk/crossapp.html",
    "revision": "c8e717dd066feda6b52568ccf6336c06"
  },
  {
    "url": "views/freetalk/docker00.html",
    "revision": "8c460c5309cc4bb4bfcb478d767b50dd"
  },
  {
    "url": "views/freetalk/Fourier.html",
    "revision": "ad5067e9232fc58ad8d19a74a3a4f77b"
  },
  {
    "url": "views/freetalk/ip0.html",
    "revision": "187ca9cf081e064c8b3ed2a6150b32f1"
  },
  {
    "url": "views/freetalk/picgo.html",
    "revision": "8c485df393522b97cfc80f82f2ceef46"
  },
  {
    "url": "views/freetalk/self_improvement.html",
    "revision": "2acd611a293a5762b1d24ab2964a6c14"
  },
  {
    "url": "views/freetalk/spider/github.html",
    "revision": "16f4f04656badcb9276cc5717b96413f"
  },
  {
    "url": "views/freetalk/spider/zhihu.html",
    "revision": "979c4e5575dbf9c048b9b3ada05e214d"
  },
  {
    "url": "views/freetalk/teamwork.html",
    "revision": "7841f969e96919d50f901d47fa06ebc4"
  },
  {
    "url": "views/freetalk/vsc/tools.html",
    "revision": "f31a2525083d44a427dbc586c18d251d"
  },
  {
    "url": "views/freetalk/why.html",
    "revision": "32b72b522a372ca96b5166b48722b832"
  },
  {
    "url": "views/freetalk/wsl2/note.html",
    "revision": "251408fcb5e5f455390c911fc28e8546"
  },
  {
    "url": "views/freetalk/wsl2/wsl.html",
    "revision": "a3ba6f8898a5c660f109d499fd8d3d72"
  },
  {
    "url": "views/freetalk/wsl2/wslg.html",
    "revision": "935ae9bf3f8352abde4c95dbda37c509"
  },
  {
    "url": "views/game/16.html",
    "revision": "e72bba24fb6f79d7436545f8707823ca"
  },
  {
    "url": "views/game/live2d/weblive2d.html",
    "revision": "783fc7aa34af157c3c8514f945bdc80e"
  },
  {
    "url": "views/game/unity/AR.html",
    "revision": "fd85108889c014708ce0a6f9abab4ae7"
  },
  {
    "url": "views/game/vulkan/note0.html",
    "revision": "bc41004ae5766ce73c06fba71f5a219a"
  },
  {
    "url": "views/index.html",
    "revision": "77ceebc7f901edf154d9b97b8d414d32"
  },
  {
    "url": "views/notes/aibug00.html",
    "revision": "000fc25c68c22769056fe357950b00cf"
  },
  {
    "url": "views/notes/Edge.html",
    "revision": "e42215931ead3279304fcf8c8f4036c6"
  },
  {
    "url": "views/notes/git.html",
    "revision": "61eb8acbe9ea3d2f403ab08fb315bc04"
  },
  {
    "url": "views/notes/Googlebug.html",
    "revision": "93af7b79a393222da19e5d822d52200b"
  },
  {
    "url": "views/notes/linux.html",
    "revision": "7e6db8081f5b00120a5080f249decd56"
  },
  {
    "url": "views/notes/linuxbug00.html",
    "revision": "4da8e7d21d4a691ef3df352a3b6b4996"
  },
  {
    "url": "views/notes/markdown.html",
    "revision": "fd2491a137a9074a0b35b6ceed40ad95"
  },
  {
    "url": "views/notes/oamnote.html",
    "revision": "a3960ee238688e8f20586cd804449250"
  },
  {
    "url": "views/notes/opencvbug.html",
    "revision": "7cdaa703e2e24c467f05d842450c3649"
  },
  {
    "url": "views/notes/pycocotools.html",
    "revision": "9d144c19e9580526c191a4a08a29b032"
  },
  {
    "url": "views/notes/pypi.html",
    "revision": "c2fd0e0eb12a5ced1e59c93d9ba3d0b7"
  },
  {
    "url": "views/notes/Pythonbug.html",
    "revision": "ac674a35c21fcaae750784a6e947af5f"
  },
  {
    "url": "views/notes/vim.html",
    "revision": "6a79c8681c0f735b00de883d5380d1d5"
  },
  {
    "url": "views/notes/webbug.html",
    "revision": "4b652c7622a50a5b03f656a9ea067b01"
  },
  {
    "url": "vuepress/Headimage.jpg",
    "revision": "45d67f880eb19be09aabb3161cb0dee3"
  },
  {
    "url": "vuepress/image.png",
    "revision": "6bc165218f8ede7e3846020dc1440f36"
  },
  {
    "url": "vuepress/topic.jpg",
    "revision": "ce4e939000f1f191bf50fe51f913af66"
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
