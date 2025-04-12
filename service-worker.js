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
    "revision": "6fd7c4ece47d374c2e162a0ca192d444"
  },
  {
    "url": "assets/css/0.styles.41d6f5eb.css",
    "revision": "9011447d420c4a276ebe99b902a39ff5"
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
    "url": "assets/js/1.99bf47a0.js",
    "revision": "df347c1536d301d851860b9ff8c2df73"
  },
  {
    "url": "assets/js/10.4d62ce43.js",
    "revision": "ec895e5ce009d5b57ee26a0ccbebec06"
  },
  {
    "url": "assets/js/100.cf2f239b.js",
    "revision": "d08df704afd760f4a5d6a7283facf955"
  },
  {
    "url": "assets/js/101.74c4dfe0.js",
    "revision": "9f0d9af3ce82155844f20921c6573457"
  },
  {
    "url": "assets/js/102.db39718d.js",
    "revision": "38dfb2218fe24797d8c18cff3e614805"
  },
  {
    "url": "assets/js/103.e6fb8ce9.js",
    "revision": "925496aced62388c978f305e4b4356b9"
  },
  {
    "url": "assets/js/104.8d35667c.js",
    "revision": "010fbbf761165a38c31ca760d9f811f5"
  },
  {
    "url": "assets/js/105.5e2bd447.js",
    "revision": "e0587af5393343a5c1e7f9b8bd3727e5"
  },
  {
    "url": "assets/js/106.292519b1.js",
    "revision": "2b62d91392cb2e119aea3667aa1ae5dd"
  },
  {
    "url": "assets/js/107.3a0e549c.js",
    "revision": "bfe42a758de91e48fa98e77a52aff964"
  },
  {
    "url": "assets/js/108.5e4519b5.js",
    "revision": "68d2c1df9859edc2c8933baf3736f275"
  },
  {
    "url": "assets/js/109.c3daad83.js",
    "revision": "f696c1410876a9b4b84a570f692b9e38"
  },
  {
    "url": "assets/js/11.875fc3e6.js",
    "revision": "b0c94f3cf762be3a12ca79a3c2cc69c1"
  },
  {
    "url": "assets/js/110.310d574c.js",
    "revision": "9820da3e7de8bdfe9054c0d258b3ad65"
  },
  {
    "url": "assets/js/111.0736834b.js",
    "revision": "9c3debef49224e3f04fe4eb6139884fb"
  },
  {
    "url": "assets/js/112.86172a7c.js",
    "revision": "642aeeff67c608895144efe57ea05266"
  },
  {
    "url": "assets/js/113.88d5570e.js",
    "revision": "4930a636e3926b18df6a5fb3e627403e"
  },
  {
    "url": "assets/js/114.92cf5388.js",
    "revision": "230a09b905a0ad4707074f31fd6d1be7"
  },
  {
    "url": "assets/js/115.6d682860.js",
    "revision": "ad4e1429e10be77bdda786a3bee71ea4"
  },
  {
    "url": "assets/js/116.cac0f083.js",
    "revision": "a8eff73221ff6ae742adf7a39a20cd12"
  },
  {
    "url": "assets/js/117.d458c73a.js",
    "revision": "0e9fb6c8d53ac6b28feac89a5cdcaa7b"
  },
  {
    "url": "assets/js/118.ea3c1a34.js",
    "revision": "c14890ee4286499cf7f4ab4465d6afe0"
  },
  {
    "url": "assets/js/119.5f2fd862.js",
    "revision": "f083ee4f71db4812b73a739637b29fe6"
  },
  {
    "url": "assets/js/12.b4d2682c.js",
    "revision": "f9585fc1b92f501bd25b858b623ba3aa"
  },
  {
    "url": "assets/js/120.087d9896.js",
    "revision": "5e955dc056f90e68a066b7985e884475"
  },
  {
    "url": "assets/js/121.5a0de244.js",
    "revision": "b4a6f21f2e651159a7f39a152c89ff3b"
  },
  {
    "url": "assets/js/122.a9c10a32.js",
    "revision": "db02a1d8363d42480a36792ed4184a12"
  },
  {
    "url": "assets/js/123.1c0e62e3.js",
    "revision": "72d71f9c0149210b498daff403e3f6fb"
  },
  {
    "url": "assets/js/124.e1608354.js",
    "revision": "da3da4f6dfb5dfe99f4c83b8030102c7"
  },
  {
    "url": "assets/js/125.1ffa7aa1.js",
    "revision": "b35d181f0bc2012a59f558ecd60ab27a"
  },
  {
    "url": "assets/js/126.7a6b11f9.js",
    "revision": "02f5103c2c5e0c1a0ee6b7b6d50938ef"
  },
  {
    "url": "assets/js/127.7e8f52ff.js",
    "revision": "bda22ef99ec4a11b3ef3e2745257079b"
  },
  {
    "url": "assets/js/128.7a303109.js",
    "revision": "157def1b5088f86e31e86b616353b9e2"
  },
  {
    "url": "assets/js/129.a37818c0.js",
    "revision": "12b185b6b0105d2f328d57a3ef75c602"
  },
  {
    "url": "assets/js/13.4cdaf2d2.js",
    "revision": "1907aff1bbd3e7ea8a873146a1fe3b66"
  },
  {
    "url": "assets/js/130.ce6fedb0.js",
    "revision": "b8c3cd79ac1ea0070012a61c10586ed2"
  },
  {
    "url": "assets/js/131.60c6c0f7.js",
    "revision": "90f55bb04c099755168b3e320bfccb72"
  },
  {
    "url": "assets/js/132.e96aa523.js",
    "revision": "72f1d4282286af94c4779b507492b614"
  },
  {
    "url": "assets/js/133.7bc3350d.js",
    "revision": "1699d6ecc2415e93e4bb65b562ea3667"
  },
  {
    "url": "assets/js/134.9fe274ca.js",
    "revision": "7293b040e0834354283422999f031954"
  },
  {
    "url": "assets/js/135.13c3ab0d.js",
    "revision": "093a8cbd9d604489ddf8a34024108e7b"
  },
  {
    "url": "assets/js/14.4c994e20.js",
    "revision": "c27ee14971e74a6ca3c497a9e8ba76df"
  },
  {
    "url": "assets/js/15.8b0d8e8a.js",
    "revision": "799f4108061a1cc869f1b680ba92edb5"
  },
  {
    "url": "assets/js/16.f6bd4cd1.js",
    "revision": "b6d7259112db46ca4628c02ab4522565"
  },
  {
    "url": "assets/js/17.0f41de74.js",
    "revision": "21d9af088d09749bf2e03b3b1de7d758"
  },
  {
    "url": "assets/js/18.e94bcad2.js",
    "revision": "62a15ceeb3cc918da2079b9a7c91d95f"
  },
  {
    "url": "assets/js/19.e8305f7c.js",
    "revision": "154b423a1bca696c9833252bd51dc2a2"
  },
  {
    "url": "assets/js/2.2b407c75.js",
    "revision": "1d372af889aa7d776f5f1f2abd89429b"
  },
  {
    "url": "assets/js/20.d4ee0efb.js",
    "revision": "5565a2cf99b4f3fb4aa6eaa86ac90f60"
  },
  {
    "url": "assets/js/21.74d78f18.js",
    "revision": "10e93ab650c2549d9d5dd2a28dc839ee"
  },
  {
    "url": "assets/js/22.6710509a.js",
    "revision": "ac1c1cc3931d989d01a4af08de6f2063"
  },
  {
    "url": "assets/js/23.9b85140c.js",
    "revision": "1d6590069f6f742521379bedc86fd207"
  },
  {
    "url": "assets/js/24.9f72a4fa.js",
    "revision": "64d9fbb18f6ca47437f7bf953ffffe71"
  },
  {
    "url": "assets/js/25.dc6bd1d0.js",
    "revision": "8710d5555d9e35ac84445800ab9f8793"
  },
  {
    "url": "assets/js/26.4d12f192.js",
    "revision": "cbb76e2034f5ac2cb85df514142da332"
  },
  {
    "url": "assets/js/27.80f81160.js",
    "revision": "c5bc657745a68fc8d15601c697cfe21c"
  },
  {
    "url": "assets/js/28.053cb50c.js",
    "revision": "b680fd5e18b69880789ee997395d31cf"
  },
  {
    "url": "assets/js/29.f46bf9dc.js",
    "revision": "d124b460939135a537f7ac17c8fb79a5"
  },
  {
    "url": "assets/js/30.d0f9211b.js",
    "revision": "2f89bfa5cdfb6a768eede8c27ecb22a9"
  },
  {
    "url": "assets/js/31.34e143c0.js",
    "revision": "ed61b7e77c2738eb3e22705099412d9f"
  },
  {
    "url": "assets/js/32.86be8cc1.js",
    "revision": "0b651ac8339dd333cebf9745d4499ada"
  },
  {
    "url": "assets/js/33.3db27cc8.js",
    "revision": "6c55007f4c2eb02c35139e07a9f37c01"
  },
  {
    "url": "assets/js/34.bf2e0791.js",
    "revision": "efbf7a01cee7c44cff03ef7f4de5f166"
  },
  {
    "url": "assets/js/35.d64e9b7c.js",
    "revision": "7a15fe11f51e78d326b0f30a1ed0dd0d"
  },
  {
    "url": "assets/js/36.84d41a4a.js",
    "revision": "037ab85f6490ae2e1fc270065d75c81b"
  },
  {
    "url": "assets/js/37.735d4d6e.js",
    "revision": "b35421e40a3de2307d1aa0b6ab21d6f3"
  },
  {
    "url": "assets/js/38.4cec12b5.js",
    "revision": "5b524265e65a6ca7b8405e54d4b138dc"
  },
  {
    "url": "assets/js/39.64f89448.js",
    "revision": "4478a3466dcda52ac34a0636e0d046d9"
  },
  {
    "url": "assets/js/40.2004b090.js",
    "revision": "1e7b2470af78a35489c74a814a1ed8ea"
  },
  {
    "url": "assets/js/41.be984fe2.js",
    "revision": "1169b44c5045d92a179ceb2b8c996057"
  },
  {
    "url": "assets/js/42.be215b4c.js",
    "revision": "d8773160a9acde4b41d859be817042de"
  },
  {
    "url": "assets/js/43.da95edb3.js",
    "revision": "7bc8585bc7ca11195f591e571df69c38"
  },
  {
    "url": "assets/js/44.9c808575.js",
    "revision": "a3abe49d0b91fda5211ca880e8daed81"
  },
  {
    "url": "assets/js/45.d0d69734.js",
    "revision": "10affb54a908ee19f110f9f07a838f5d"
  },
  {
    "url": "assets/js/46.2cf5d852.js",
    "revision": "5eed53062163dbb7489ed47a1779d7e8"
  },
  {
    "url": "assets/js/47.6de3f92c.js",
    "revision": "c9c5a0f929be39910f1d15d19073a52b"
  },
  {
    "url": "assets/js/48.9518e103.js",
    "revision": "6e4ca83c7552f2db476131c5de897baf"
  },
  {
    "url": "assets/js/49.0d5de7d1.js",
    "revision": "498cde5c347ede9a0b213ed23ca587f2"
  },
  {
    "url": "assets/js/5.1e50d71f.js",
    "revision": "694cbf3374e52b1cafb4a78305fb488b"
  },
  {
    "url": "assets/js/50.223dab5f.js",
    "revision": "d0187036d4ec0718826d662c71cefb56"
  },
  {
    "url": "assets/js/51.f16dee0c.js",
    "revision": "14784c3d431e7d7c9c8c8901bc91f578"
  },
  {
    "url": "assets/js/52.f89e2bf1.js",
    "revision": "ebbda1c7d69bcb36d421291835745059"
  },
  {
    "url": "assets/js/53.cf03e7f0.js",
    "revision": "4aef16c89447bba6ea6a44da03347f85"
  },
  {
    "url": "assets/js/54.2178cced.js",
    "revision": "fc2c9357e6bb4d19cac6cb47f187f16a"
  },
  {
    "url": "assets/js/55.49608326.js",
    "revision": "c1a4f36f8565d999a07fcd4618da0a29"
  },
  {
    "url": "assets/js/56.6247d19f.js",
    "revision": "e335f66e6e9f646190981161b618bcf7"
  },
  {
    "url": "assets/js/57.dceb3163.js",
    "revision": "871daa158a451e59586f5a220ae85b48"
  },
  {
    "url": "assets/js/58.c341f8ad.js",
    "revision": "e35d0f57cdebf0af3c9aed6018676710"
  },
  {
    "url": "assets/js/59.2ee5fb02.js",
    "revision": "1c26fa906cb4aeeb1e64522d406eed5d"
  },
  {
    "url": "assets/js/6.289b09d9.js",
    "revision": "f5230bd7de53bc59d601e9795d3942da"
  },
  {
    "url": "assets/js/60.15d1171b.js",
    "revision": "5c5781e767e58dd11c7f657f2c06b257"
  },
  {
    "url": "assets/js/61.39a030a3.js",
    "revision": "4260790c4c66d3bd5868b4b91fb96b17"
  },
  {
    "url": "assets/js/62.69510f80.js",
    "revision": "9d4b46bcf6ded9ea7306a585ac80ff59"
  },
  {
    "url": "assets/js/63.c355adb4.js",
    "revision": "1a0b85a2dcda5c862a49cb209c9204a9"
  },
  {
    "url": "assets/js/64.0af3fb9d.js",
    "revision": "998133b18fb4c292edcff34b1d6c1698"
  },
  {
    "url": "assets/js/65.c6b752b2.js",
    "revision": "d2e9d77224086009fe12b8988274530e"
  },
  {
    "url": "assets/js/66.cdfde5db.js",
    "revision": "1398950c4263ff9fda83f20e3f10ebf6"
  },
  {
    "url": "assets/js/67.f00f7cfe.js",
    "revision": "96992b86148c28ac284eec8250230e48"
  },
  {
    "url": "assets/js/68.3642d421.js",
    "revision": "54f287b6f617b6682ad0615ee501e4e3"
  },
  {
    "url": "assets/js/69.3abeb275.js",
    "revision": "e244a8a55ed6da05299a2682e0434953"
  },
  {
    "url": "assets/js/7.6f9fcd49.js",
    "revision": "ef37a17d43e2e7dd6170793100792f25"
  },
  {
    "url": "assets/js/70.022ceeec.js",
    "revision": "6226914fff8539141208df7e0f587441"
  },
  {
    "url": "assets/js/71.3e889d84.js",
    "revision": "989608a0ac3acfd5513bb04c03815be4"
  },
  {
    "url": "assets/js/72.5d882d67.js",
    "revision": "6d9e709f496f79f232222d4df78db0e1"
  },
  {
    "url": "assets/js/73.55c5e3c5.js",
    "revision": "d6474732698e32dbf82d71c240ddc19e"
  },
  {
    "url": "assets/js/74.7e4ae08d.js",
    "revision": "7a754ee099a4716f14ef29f2b23f6776"
  },
  {
    "url": "assets/js/75.902d721e.js",
    "revision": "981ccf22acf64b942be06b026989f929"
  },
  {
    "url": "assets/js/76.f1e7ac1d.js",
    "revision": "9a3abb6878ddbacda2cd6ddfc9f46f83"
  },
  {
    "url": "assets/js/77.ba42676c.js",
    "revision": "4b5eb5a202d9edbd35930c033f157a9f"
  },
  {
    "url": "assets/js/78.182cf118.js",
    "revision": "a92695cad38c2d0c6925d4a8f801e36f"
  },
  {
    "url": "assets/js/79.3154b24c.js",
    "revision": "bcf97673c619a03f2cffa6d0a638de8c"
  },
  {
    "url": "assets/js/8.6a9db5f6.js",
    "revision": "a075b0341ca8395667094ff2766c8f37"
  },
  {
    "url": "assets/js/80.2b3e0bfe.js",
    "revision": "cee925d9ab60c51a29cdcba57e596fb9"
  },
  {
    "url": "assets/js/81.4fd54b0c.js",
    "revision": "c0879514b0f733858a569af2028db90c"
  },
  {
    "url": "assets/js/82.06b1f498.js",
    "revision": "1c9badcd9b2b7d6dc30e097bc1f8376b"
  },
  {
    "url": "assets/js/83.d335a890.js",
    "revision": "1648270af3586fd6ad2a20d08c2eadeb"
  },
  {
    "url": "assets/js/84.cada6b85.js",
    "revision": "9ed58fbaec5f3fd5fa1065e0f8f26174"
  },
  {
    "url": "assets/js/85.7f95f4d9.js",
    "revision": "4718664d6541bf9f331b07244dc878b9"
  },
  {
    "url": "assets/js/86.76914c69.js",
    "revision": "e10bc7374e3902d8a1008eddda68b6de"
  },
  {
    "url": "assets/js/87.51f38031.js",
    "revision": "1091d0c24ccc6e8b844ce99e45dc971b"
  },
  {
    "url": "assets/js/88.623d99ab.js",
    "revision": "677a4107e16a7cc9a906954c3fae59a2"
  },
  {
    "url": "assets/js/89.02d1cb2c.js",
    "revision": "a671d3aa3676657e728c41a0c754ecac"
  },
  {
    "url": "assets/js/9.b1be5bd5.js",
    "revision": "776305157ef8c65843f2876e7ab70df3"
  },
  {
    "url": "assets/js/90.b652e7b4.js",
    "revision": "12832866a24a098a658ce1c2aa4e65ef"
  },
  {
    "url": "assets/js/91.031e4de3.js",
    "revision": "1e10591606dd889ef5a62603736ecd0c"
  },
  {
    "url": "assets/js/92.ac7f2f9b.js",
    "revision": "227850fdd6df6d9be6554eb50f53e5ff"
  },
  {
    "url": "assets/js/93.f71a0ec7.js",
    "revision": "e983441a5fcdd8d5566fd437282077cd"
  },
  {
    "url": "assets/js/94.724ae2a4.js",
    "revision": "42463a16469527731baeacb05df1f914"
  },
  {
    "url": "assets/js/95.cff1c710.js",
    "revision": "e39fae263998c65fe964ca9573f84fac"
  },
  {
    "url": "assets/js/96.afd7ca1a.js",
    "revision": "f5b6bb56aba4755f8e16645afce7e57a"
  },
  {
    "url": "assets/js/97.ced4b19b.js",
    "revision": "f73a9535d30791aaff3905238bba3c27"
  },
  {
    "url": "assets/js/98.7024c856.js",
    "revision": "574e0ea02474da0eb5324bfb35f00883"
  },
  {
    "url": "assets/js/99.3682c210.js",
    "revision": "d393c37247dc8fafeaf8b6aa1c5caddf"
  },
  {
    "url": "assets/js/app.f9fd8af2.js",
    "revision": "d7775a8e9d07b369323767879330d1f7"
  },
  {
    "url": "assets/js/vendors~flowchart.f4a117dd.js",
    "revision": "a9add723f54de64f29ee219d49c6eb45"
  },
  {
    "url": "categories/笔记等/index.html",
    "revision": "6cf144df7b7d55138aeb7d4a3357a454"
  },
  {
    "url": "categories/笔记等/page/2/index.html",
    "revision": "d745d7cdd4a97b50d34fed460ff4cbab"
  },
  {
    "url": "categories/电子设计等/index.html",
    "revision": "1a2fd7a9906a1bdec291f9e9feccf7d8"
  },
  {
    "url": "categories/电子设计等/page/2/index.html",
    "revision": "1594d34431ff2aa1f214e4aaf819ba78"
  },
  {
    "url": "categories/计算机技术等/index.html",
    "revision": "4e4580744e0953efd40dc7e1654a8faf"
  },
  {
    "url": "categories/计算机技术等/page/2/index.html",
    "revision": "bf976365dc3b42a7bf86c97ce07d2189"
  },
  {
    "url": "categories/算法等/index.html",
    "revision": "87382983e2f48e73ccc5bd8af32ea97d"
  },
  {
    "url": "categories/算法等/page/2/index.html",
    "revision": "c05a7b80ce9a5b30218bba7bef382996"
  },
  {
    "url": "categories/游戏设计等/index.html",
    "revision": "ad629ac512d6a5542309dd32b48968b3"
  },
  {
    "url": "categories/杂谈/index.html",
    "revision": "5ca68e84acc816b435fffecf9e760776"
  },
  {
    "url": "categories/杂谈/page/2/index.html",
    "revision": "afad583a172bebf71e8292eeb72948dc"
  },
  {
    "url": "categories/AI及机器人等/index.html",
    "revision": "f424a112c828d9f3a70628fb6c1e579c"
  },
  {
    "url": "categories/AI及机器人等/page/2/index.html",
    "revision": "48cdf80ba10615a1549b90766cd2f947"
  },
  {
    "url": "categories/AI及机器人等/page/3/index.html",
    "revision": "b438afa720e98fa31b4dba291c01a311"
  },
  {
    "url": "categories/index.html",
    "revision": "119c54ff497dcbebcf2d1686ce7d4beb"
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
    "revision": "0eb88e2c547b408002761a8c84486cab"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "c8209619f9a8260aee66ce7691c9f2ad"
  },
  {
    "url": "projects/github.html",
    "revision": "132ba604a5f9555af1362fdfa5b5b959"
  },
  {
    "url": "tag/index.html",
    "revision": "42ba9539af04de21510c583d7bd65381"
  },
  {
    "url": "tags/比赛/index.html",
    "revision": "9c8ae5193ae553a7a6779b310c9e9a76"
  },
  {
    "url": "tags/编解码器/index.html",
    "revision": "89e41942181f6d600c9b10b3156e8966"
  },
  {
    "url": "tags/操作系统os/index.html",
    "revision": "38e607e2a637e4bb566934a32bfe2eaa"
  },
  {
    "url": "tags/电子设计/index.html",
    "revision": "64a210ad0a845fae10833804da92beed"
  },
  {
    "url": "tags/机器人/index.html",
    "revision": "40aff65261eca3fe7ff1293396472c23"
  },
  {
    "url": "tags/机器学习/index.html",
    "revision": "eb0a4346c0ebb01d8e25d03b9c8e7740"
  },
  {
    "url": "tags/计算机视觉/index.html",
    "revision": "350d99315a6f245d4626a4bf8edf9ebe"
  },
  {
    "url": "tags/计算机网络/index.html",
    "revision": "8079d5e9ad00fcd9d62982fda77de36f"
  },
  {
    "url": "tags/开源写字机/index.html",
    "revision": "451e080f7354b27ee19a8c25f9de18f8"
  },
  {
    "url": "tags/量化/index.html",
    "revision": "073cc4db0c5ff18821978c3edfa36299"
  },
  {
    "url": "tags/模型部署/index.html",
    "revision": "4f1b214bc1740b954154897a833952a4"
  },
  {
    "url": "tags/模型部署及加速/index.html",
    "revision": "400d3e88436dc0b4585574c992782ae5"
  },
  {
    "url": "tags/目标检测/index.html",
    "revision": "4c3879ffc35a154dc4e6de66f232daeb"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "370ecf3f66c87c6ef1976f5f26f15527"
  },
  {
    "url": "tags/前端动画/index.html",
    "revision": "f443f962f4348b061be943d00806a7f9"
  },
  {
    "url": "tags/嵌入式/index.html",
    "revision": "18d571c933dca678e299ed45299de3af"
  },
  {
    "url": "tags/深度学习/index.html",
    "revision": "2f6c3b858360143ae2e1045b364cd506"
  },
  {
    "url": "tags/数据结构与算法/index.html",
    "revision": "cf56fd4d57c7c621b830eeb6ea8fb5f3"
  },
  {
    "url": "tags/图像处理/index.html",
    "revision": "ad84aa4e69d5712780462ad4c51ff56a"
  },
  {
    "url": "tags/图像处理/page/2/index.html",
    "revision": "7a0d858b82c92f4e74c5317ce5866e31"
  },
  {
    "url": "tags/网络协议/index.html",
    "revision": "a9b121750df31772769e6d569c642f7e"
  },
  {
    "url": "tags/文档笔记/index.html",
    "revision": "5512d1269099dd6754aa09864e425451"
  },
  {
    "url": "tags/物联网/index.html",
    "revision": "616df29d9a1f9b8f51b3ffd962e3bb8e"
  },
  {
    "url": "tags/音视频开发/index.html",
    "revision": "53166b255f8a272533096ccc1286c7f4"
  },
  {
    "url": "tags/游戏开发/index.html",
    "revision": "947c352460ea4bf210003e1bb0abfabf"
  },
  {
    "url": "tags/杂谈/index.html",
    "revision": "608d22a8d839c1470823207d1dfeed3e"
  },
  {
    "url": "tags/最优化控制/index.html",
    "revision": "b4d1b57b442f3c35a7929154eaf10396"
  },
  {
    "url": "tags/Android/index.html",
    "revision": "590b2e356397d7c45bf02b937cccd652"
  },
  {
    "url": "tags/bug/index.html",
    "revision": "456849751a958f567bc9899862616622"
  },
  {
    "url": "tags/CI/CD/index.html",
    "revision": "8e24ca9aa0bb2438030aa041de2c4d78"
  },
  {
    "url": "tags/cmake/index.html",
    "revision": "2b8f4f3f4463701ed33f030037965621"
  },
  {
    "url": "tags/CNN/index.html",
    "revision": "0a26ace4b44c0a09d2fb1cc17098fa42"
  },
  {
    "url": "tags/cpp/index.html",
    "revision": "b40fb296a1424f6e5138ec1b366d7062"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "61976dd0d5c72cf1234ca3faca83ba83"
  },
  {
    "url": "tags/FPGA/index.html",
    "revision": "983e8a3aaa0103711aff1f8842110bac"
  },
  {
    "url": "tags/GUI/index.html",
    "revision": "446f1136e5d8219d0484db3eea47051f"
  },
  {
    "url": "tags/HarmonyOS/index.html",
    "revision": "be20aadbfb31a82696cfb25fee9f9629"
  },
  {
    "url": "tags/LINUX/index.html",
    "revision": "c5e0a75d866f2abdda25138974340186"
  },
  {
    "url": "tags/live2d/index.html",
    "revision": "6d7591f448882f025b858065ce91a5a2"
  },
  {
    "url": "tags/mmpose/index.html",
    "revision": "9300b3529ddd93faeeef5bf3e8531597"
  },
  {
    "url": "tags/NLP/index.html",
    "revision": "73b230f12b0230f9026560066feb6ed8"
  },
  {
    "url": "tags/opencv/index.html",
    "revision": "e8f19581c33965ac5d23ff69a330fecf"
  },
  {
    "url": "tags/pypi/index.html",
    "revision": "917e4b4b1d722c3d4eef3cc71cb4d169"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "aa90bbb0ae1afa8adab6111e5fa04c6b"
  },
  {
    "url": "tags/RL/index.html",
    "revision": "b0e1cb4af271e458b8f2b21d14da78cd"
  },
  {
    "url": "tags/ROS/index.html",
    "revision": "26622959e75a30efa9ff715ffd25d81e"
  },
  {
    "url": "tags/slam/index.html",
    "revision": "c94dbd8dfef42f05379e82c8e8affa28"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "f2e2d2f57d8b3392f218174380899411"
  },
  {
    "url": "tags/YOLO/index.html",
    "revision": "7e1cfd9ed8203c2246c6891d539e470f"
  },
  {
    "url": "timeline/index.html",
    "revision": "340042b5204d02cb2a2251f43405af73"
  },
  {
    "url": "view/other/comment.png",
    "revision": "6878f2fce5e82c12f91eef87bde8bd2c"
  },
  {
    "url": "views/AI/2020baidustar.html",
    "revision": "d6bd73ebdd2d9758e1d19e20eeca69f9"
  },
  {
    "url": "views/AI/coder/index.html",
    "revision": "e95b70052faec06c358cc3a3f3d31c57"
  },
  {
    "url": "views/AI/detection.html",
    "revision": "099010c9a4bac61833c177b55e57e365"
  },
  {
    "url": "views/AI/ebot/ebot0.html",
    "revision": "4174a6f1b0c4bee6562311a9cb76716f"
  },
  {
    "url": "views/AI/ebot/ebot1.html",
    "revision": "50ec31660b9e825cbe207fb1f1c6079f"
  },
  {
    "url": "views/AI/guiYolov4.html",
    "revision": "3700ede675819371ded5394bcd0d6c40"
  },
  {
    "url": "views/AI/handwrite/cnn/cifar.html",
    "revision": "6e018e40604a806b851f5cb0d22ea4f1"
  },
  {
    "url": "views/AI/mmlab/mmpose/00.html",
    "revision": "1c1f9d5afff3d78ccad3b880a68dadb8"
  },
  {
    "url": "views/AI/photo.html",
    "revision": "f2e726cfe36ec03e63e3264c2340b2b3"
  },
  {
    "url": "views/AI/RL/curobo.html",
    "revision": "5f53765caa9797c90a2fd11dd5f73f3a"
  },
  {
    "url": "views/AI/RL/env.html",
    "revision": "d0dadc80e5d489a70a7d1cfa18023e57"
  },
  {
    "url": "views/AI/RL/ppo.html",
    "revision": "dc731bfbe16e8419c1e92d9111aef067"
  },
  {
    "url": "views/AI/RL/vima.html",
    "revision": "7f054da51ec54f1a7cfe1848719ef6ba"
  },
  {
    "url": "views/AI/RL/wtw.html",
    "revision": "c361c82720ae291edcb24fe605f553fb"
  },
  {
    "url": "views/AI/taac2021.html",
    "revision": "82e9b7d7123fb73a742a7db47c2a55f5"
  },
  {
    "url": "views/AI/tengine/ohosndk0.html",
    "revision": "fb8f754b58c66c4a34893b8831aefe1d"
  },
  {
    "url": "views/AI/tensorrt/env.html",
    "revision": "7f5fba107376687ec899c1a3672eefb5"
  },
  {
    "url": "views/AI/TextClassification.html",
    "revision": "a9168bad9f24f9d0818a0081da261ad1"
  },
  {
    "url": "views/AI/tf2.0.html",
    "revision": "d6b58c35e24e0fe14db37be4537de0a6"
  },
  {
    "url": "views/AI/yolo/yolov4.html",
    "revision": "b6bbca482344a2d8991077083277324d"
  },
  {
    "url": "views/AI/yolo/yolov9_ncnn.html",
    "revision": "ab9f31608b0e29ce7caea0055c5251d3"
  },
  {
    "url": "views/algorithm/datastructure/queue.html",
    "revision": "c83f8d4f424a7eecf96eb049eb5545a8"
  },
  {
    "url": "views/algorithm/datastructure/stack.html",
    "revision": "15bf7f3f4f8e6c562b06fbd04f584a2f"
  },
  {
    "url": "views/algorithm/datastructure/trie.html",
    "revision": "39cfd9437bd65a89a1e117e5132aa6c5"
  },
  {
    "url": "views/algorithm/leetcode/leetcode1.html",
    "revision": "7bec301fcd9d63a2a70377f27004995a"
  },
  {
    "url": "views/algorithm/leetcode/leetcode2.html",
    "revision": "5dfe1f56c94d5ab49fb7f626c2f72dd4"
  },
  {
    "url": "views/algorithm/opencv/clahe.html",
    "revision": "1519015195ce37b4fe564258d3e6af1c"
  },
  {
    "url": "views/algorithm/opencv/cornerdetection00.html",
    "revision": "f2e119df751581e1b0dc695b64dde8f8"
  },
  {
    "url": "views/algorithm/opencv/env.html",
    "revision": "a48cf815fbc89d0b8fe967f3d446fb81"
  },
  {
    "url": "views/algorithm/opencv/ImageProcessing.html",
    "revision": "0ac4021745c7e96f15b3fbd364dae893"
  },
  {
    "url": "views/algorithm/opencv/iqa.html",
    "revision": "7959ce1f96b7d05bc5cf207e5fb478ea"
  },
  {
    "url": "views/algorithm/opencv/otsu.html",
    "revision": "d71db4e14fbd46adfd9b0fb2b149423c"
  },
  {
    "url": "views/algorithm/opencv/retinex.html",
    "revision": "7a4aacd3ddedd667255552f1ca09dd0e"
  },
  {
    "url": "views/algorithm/ppq/day1.html",
    "revision": "2e03bbe467df036a793003efe9978c13"
  },
  {
    "url": "views/algorithm/ppq/day2.html",
    "revision": "f9fa076bfba7575e8c817fd822f8cfe7"
  },
  {
    "url": "views/algorithm/slam/aloam.html",
    "revision": "58878c03cf9b8c6bcc491f2bee6fefae"
  },
  {
    "url": "views/algorithm/slam/n0.html",
    "revision": "eae2628e599733cbb7cec7ea84d7e522"
  },
  {
    "url": "views/algorithm/slam/velyodyne.html",
    "revision": "edc8dc82a622755d4895a7184db6dc65"
  },
  {
    "url": "views/algorithm/slam/vslam_rs.html",
    "revision": "f032edebe10ac1c6fe1aace428cfe35e"
  },
  {
    "url": "views/cs/android/mina.html",
    "revision": "67d0f7aa1cae77fc3fdce0dfa88089e2"
  },
  {
    "url": "views/cs/cmake/00.html",
    "revision": "51edf84df660ea65d5d4acaafd383e11"
  },
  {
    "url": "views/cs/cplusplus/c.html",
    "revision": "33d72f2c4c90dcaa9733d5504f73861b"
  },
  {
    "url": "views/cs/ffmpeg/compile.html",
    "revision": "3e0e23d80e959734047bf01506f8c752"
  },
  {
    "url": "views/cs/ffmpeg/win_env.html",
    "revision": "53999eabbf6da23beee27c361001225b"
  },
  {
    "url": "views/cs/gtsreamer/py_gst.html",
    "revision": "35c612c585a01728ec8025e1d52005cf"
  },
  {
    "url": "views/cs/gtsreamer/qs.html",
    "revision": "4636869cbdc95bcb92a215f1475dbd28"
  },
  {
    "url": "views/cs/Imagesegmentation.html",
    "revision": "ceca55d3ff59a5d5c861e0424aadd72e"
  },
  {
    "url": "views/cs/MFCbmp.html",
    "revision": "c7536e45c44c29f6c9d67f01c765ee31"
  },
  {
    "url": "views/cs/OS/GlimmerOS.html",
    "revision": "4ff18f863cdd602fe345102b0a9f26e9"
  },
  {
    "url": "views/cs/python/note0.html",
    "revision": "4a328746759792704e59eff1dad0bf4f"
  },
  {
    "url": "views/cs/ros/env.html",
    "revision": "f6a76562d24615d6d98132a14624efb3"
  },
  {
    "url": "views/cs/ros/note00.html",
    "revision": "ac3c961538805d9e075bbc73b1ab562a"
  },
  {
    "url": "views/cs/vueblog.html",
    "revision": "26ce572e83537d0c0abfeac04d9a4090"
  },
  {
    "url": "views/ee/ARMcortex/armenv.html",
    "revision": "911ea43000cfdc4796188b9dae7995ee"
  },
  {
    "url": "views/ee/ARMcortex/nanopi0.html",
    "revision": "46ce459de8370cd7b5ea838b068a9acf"
  },
  {
    "url": "views/ee/cubli.html",
    "revision": "55815d99bd8198edc19e823628f6b9e9"
  },
  {
    "url": "views/ee/fpga/env.html",
    "revision": "8be19b274c68dd67b896b59603649c0d"
  },
  {
    "url": "views/ee/harmonyos/ohos0.html",
    "revision": "309e9582e4291b181ea63b582f11360e"
  },
  {
    "url": "views/ee/Humanoid_Robot/hector.html",
    "revision": "4f8cb9c5896f017c159a9778cf6295e4"
  },
  {
    "url": "views/ee/Humanoid_Robot/LIPM.html",
    "revision": "41f5554ca8e47a38c982cbcf0e87b57b"
  },
  {
    "url": "views/ee/Humanoid_Robot/uvc.html",
    "revision": "4e858865a6ba08cafefb72c90e8237c1"
  },
  {
    "url": "views/ee/jetson/jetson1.html",
    "revision": "ab7479429687730d538ff6586ae2af1e"
  },
  {
    "url": "views/ee/midbot.html",
    "revision": "02ffabd59b5b6090510b536a9adb6e5d"
  },
  {
    "url": "views/ee/miniBOT.html",
    "revision": "4d736695847fbe15b5f94a943a460f88"
  },
  {
    "url": "views/ee/mpc/introduction.html",
    "revision": "28a83813e09e18f6f10dd912999b1b6e"
  },
  {
    "url": "views/ee/mpc/rfmpc.html",
    "revision": "a0dbddd9d2e3f54f649d0c5453d8ed36"
  },
  {
    "url": "views/ee/mpc/trajectory_optimization.html",
    "revision": "cd23541d4c12e85ce7447be7b645496b"
  },
  {
    "url": "views/ee/quadsdk.html",
    "revision": "73287fda5366c50ff30a560a41676b67"
  },
  {
    "url": "views/ee/riscv/gdf103.html",
    "revision": "5c599bb065dc23c1e4dcba5118207c05"
  },
  {
    "url": "views/ee/smallB.html",
    "revision": "2fd742f391a0917c3bd31ed1a6a372e5"
  },
  {
    "url": "views/ee/star.html",
    "revision": "dc8f9a8feaeaf778f10c9d9756c2d0bc"
  },
  {
    "url": "views/ee/tcostiny/tcos0.html",
    "revision": "ecb3e9474229e573780b670fa351c57f"
  },
  {
    "url": "views/ee/tinyascen.html",
    "revision": "2e2c8645432827aacf1173b1e9c21b3b"
  },
  {
    "url": "views/freetalk/独立开发者之旅.html",
    "revision": "e39611338f19281a79bf09bc1a1b1a49"
  },
  {
    "url": "views/freetalk/android.html",
    "revision": "5b89e5dc3afe122bc638b70efbed156f"
  },
  {
    "url": "views/freetalk/cicd/fix.html",
    "revision": "bfb325157bc37ee32678fe1bf0888a54"
  },
  {
    "url": "views/freetalk/color.html",
    "revision": "147414be1f068bd80d1fdb2becfb6877"
  },
  {
    "url": "views/freetalk/crossapp.html",
    "revision": "0f51d7db508ffea14e0f2c014097f4ab"
  },
  {
    "url": "views/freetalk/docker00.html",
    "revision": "4e9d11373fdf780d82bcc147e93f4994"
  },
  {
    "url": "views/freetalk/Fourier.html",
    "revision": "6f45e81fd6094ed484e8c65f0c395a91"
  },
  {
    "url": "views/freetalk/ip0.html",
    "revision": "7ca7437610c3dbe63af0fb269abb616d"
  },
  {
    "url": "views/freetalk/picgo.html",
    "revision": "7af7c69f6c5e07fae8ac861e18158ac9"
  },
  {
    "url": "views/freetalk/self_improvement.html",
    "revision": "f6aa3c4713dd81e317360e8517a33706"
  },
  {
    "url": "views/freetalk/spider/github.html",
    "revision": "e0fd468ad248cf1b2aff1d8546c99fa0"
  },
  {
    "url": "views/freetalk/spider/zhihu.html",
    "revision": "7960a26240dbb40fa2112fa03b285bd3"
  },
  {
    "url": "views/freetalk/teamwork.html",
    "revision": "153f6cc9135481be1771d8b7413f1153"
  },
  {
    "url": "views/freetalk/vsc/tools.html",
    "revision": "2a5ab939738440877e6ca99150a8d1ea"
  },
  {
    "url": "views/freetalk/why.html",
    "revision": "9e9374d0d3a570b13fee4f1285ecf133"
  },
  {
    "url": "views/freetalk/wsl2/note.html",
    "revision": "c1e78be8163fc92c3c790d166803ffab"
  },
  {
    "url": "views/freetalk/wsl2/wsl.html",
    "revision": "793e65a54730fc6fbf15e2ff851b2522"
  },
  {
    "url": "views/freetalk/wsl2/wslg.html",
    "revision": "9d654e37823b4f5da237c2cc325efd40"
  },
  {
    "url": "views/game/16.html",
    "revision": "2c7d47c92d535f3002b8dadbf32c51c1"
  },
  {
    "url": "views/game/live2d/weblive2d.html",
    "revision": "7e9a8486716f5268e92fd466a1953a07"
  },
  {
    "url": "views/game/unity/AR.html",
    "revision": "b619d74c3819da8bc7111a493b5f045f"
  },
  {
    "url": "views/game/vulkan/note0.html",
    "revision": "e643dd19ceeedfddaa2e723b04166b1a"
  },
  {
    "url": "views/index.html",
    "revision": "044df4b95a65d1d5742d6b15bab065aa"
  },
  {
    "url": "views/notes/aibug00.html",
    "revision": "7cdd4e8ea5bf1f046f14d525db38bd08"
  },
  {
    "url": "views/notes/Edge.html",
    "revision": "cb9c0018535da51e16d9cd18c95282b0"
  },
  {
    "url": "views/notes/git.html",
    "revision": "e6350e2e29037e5b4aa3764573139524"
  },
  {
    "url": "views/notes/Googlebug.html",
    "revision": "c06d8577b45b9c84d3b81fc034d6e35a"
  },
  {
    "url": "views/notes/linux.html",
    "revision": "04a9b72e00b553b49cfd3e6be2ae0206"
  },
  {
    "url": "views/notes/linuxbug00.html",
    "revision": "054b77171a80935d57838d260bdcb318"
  },
  {
    "url": "views/notes/markdown.html",
    "revision": "7b86cc6c18bf205822f308bbed6558dc"
  },
  {
    "url": "views/notes/oamnote.html",
    "revision": "cf6dd9738f449bcc75c838ec0dcc35e8"
  },
  {
    "url": "views/notes/opencvbug.html",
    "revision": "e7ce75ab41a64757f544fdf3641f241d"
  },
  {
    "url": "views/notes/pycocotools.html",
    "revision": "3375828e2b326c27472c57cb5685d805"
  },
  {
    "url": "views/notes/pypi.html",
    "revision": "2cb1127117fd47a1e33b408ffd7adf4f"
  },
  {
    "url": "views/notes/Pythonbug.html",
    "revision": "cc9693a43310210228a20e0fbe9ac17b"
  },
  {
    "url": "views/notes/vim.html",
    "revision": "c4a085910c9499149e61d2898c26a567"
  },
  {
    "url": "views/notes/webbug.html",
    "revision": "7b0f749f36d77528bce45a13c3f484ea"
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
