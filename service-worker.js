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
    "revision": "efc6644975675f87f99ccbf32e297ef8"
  },
  {
    "url": "assets/css/0.styles.187181a4.css",
    "revision": "bb0b8d018449700b0afd8128fa1f5cee"
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
    "url": "assets/js/100.a21e38f4.js",
    "revision": "a6fa2367487498b6aa038e09eb0e12a1"
  },
  {
    "url": "assets/js/101.cc82c349.js",
    "revision": "3767dd56afee1f5f245bf9e770e53c53"
  },
  {
    "url": "assets/js/102.d2802402.js",
    "revision": "29729b01b153e05567b7bdeab37a3874"
  },
  {
    "url": "assets/js/103.55c3fa7f.js",
    "revision": "a23cbf8ebb371e391b07dce94443c086"
  },
  {
    "url": "assets/js/104.e96d3e46.js",
    "revision": "20965dea417c1059548514e80322844a"
  },
  {
    "url": "assets/js/105.17738f80.js",
    "revision": "9bec5272c1e6944207b119d265593fee"
  },
  {
    "url": "assets/js/106.1fe014c5.js",
    "revision": "7b2f70cc009325a30e596ab5819997fd"
  },
  {
    "url": "assets/js/107.769d9f3b.js",
    "revision": "14c1f9b4373b6cafd3c5bb06188b7db4"
  },
  {
    "url": "assets/js/108.b7cf5a0d.js",
    "revision": "63e9ec87d974dd167b2e23cb80222d4b"
  },
  {
    "url": "assets/js/109.ab378e67.js",
    "revision": "d2332ab7dfea318097183fc387ba2ce6"
  },
  {
    "url": "assets/js/11.875fc3e6.js",
    "revision": "b0c94f3cf762be3a12ca79a3c2cc69c1"
  },
  {
    "url": "assets/js/110.f1d09722.js",
    "revision": "b7b702d790c7c9745f95b439b4384341"
  },
  {
    "url": "assets/js/111.e41a2231.js",
    "revision": "d63ee19b47f5acfd1b2bd266dba5e512"
  },
  {
    "url": "assets/js/112.eee720b6.js",
    "revision": "d7734880debb914ad8fc7ff523cf551d"
  },
  {
    "url": "assets/js/113.eb13136a.js",
    "revision": "a4a81ff767dd64ed54c3aafd910817d5"
  },
  {
    "url": "assets/js/114.7ad190d3.js",
    "revision": "410b998df7d5a85b5a27dfdda65c198f"
  },
  {
    "url": "assets/js/115.e5dbc73c.js",
    "revision": "5042329d75ef6e5237684cd74df28a33"
  },
  {
    "url": "assets/js/116.629d0405.js",
    "revision": "8727d4607869251ec802d9f316367e37"
  },
  {
    "url": "assets/js/117.61986451.js",
    "revision": "fae8e557fa6a610ed4a983bca7a46222"
  },
  {
    "url": "assets/js/118.19481f76.js",
    "revision": "622a4e8e82e362e4edab7292266d100b"
  },
  {
    "url": "assets/js/119.2dbf9723.js",
    "revision": "f8982115bd46c0fef754caa34f8120c1"
  },
  {
    "url": "assets/js/12.b4d2682c.js",
    "revision": "f9585fc1b92f501bd25b858b623ba3aa"
  },
  {
    "url": "assets/js/120.dd097052.js",
    "revision": "5882d805f453cbafdf20264751b50331"
  },
  {
    "url": "assets/js/121.a8bd124a.js",
    "revision": "15aba1799a7d80e01d30ca41c7acbd60"
  },
  {
    "url": "assets/js/122.7042448b.js",
    "revision": "e37a58592378b1ffd10de1247f5abd7b"
  },
  {
    "url": "assets/js/123.e6bdb07a.js",
    "revision": "9d67cbd78a1a8a39405a44c8e435f312"
  },
  {
    "url": "assets/js/124.95b2be55.js",
    "revision": "18c6b37c1abcbbbbabb45e3b3042535c"
  },
  {
    "url": "assets/js/125.19e88134.js",
    "revision": "b8e2a6f5ef07706048c8db139bb193c8"
  },
  {
    "url": "assets/js/126.bc72f3cb.js",
    "revision": "4e23061e4018997b0bbce52298cd905b"
  },
  {
    "url": "assets/js/127.2fe6e665.js",
    "revision": "7ed704d12f9fe4cbc864f7de2326848e"
  },
  {
    "url": "assets/js/128.f6b6cf75.js",
    "revision": "c0339af837641aba2099b1b893d64abb"
  },
  {
    "url": "assets/js/129.91ef88d3.js",
    "revision": "d83d1b03935e60d9e182c228f847ee01"
  },
  {
    "url": "assets/js/13.4cdaf2d2.js",
    "revision": "1907aff1bbd3e7ea8a873146a1fe3b66"
  },
  {
    "url": "assets/js/130.cad96882.js",
    "revision": "9c798a4cea7fd80b9e8948ebd5939e80"
  },
  {
    "url": "assets/js/131.89c34c4e.js",
    "revision": "4ef8ceb25940b1ba00e206a0670afe21"
  },
  {
    "url": "assets/js/132.7193205f.js",
    "revision": "2ed25237f9a2c04e4820d4f8b9c22542"
  },
  {
    "url": "assets/js/14.4c994e20.js",
    "revision": "c27ee14971e74a6ca3c497a9e8ba76df"
  },
  {
    "url": "assets/js/15.13c09689.js",
    "revision": "b331795c0deae4a097795def725a7ec9"
  },
  {
    "url": "assets/js/16.84504fd3.js",
    "revision": "3ab6b86f78a7c784f5cb858ee0fbbd7f"
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
    "url": "assets/js/19.e044aa35.js",
    "revision": "a86723339e99454a84d5120dbad1b788"
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
    "url": "assets/js/23.1528f4e7.js",
    "revision": "4a47d22b440db6e9e945d87f616a56cf"
  },
  {
    "url": "assets/js/24.9f72a4fa.js",
    "revision": "64d9fbb18f6ca47437f7bf953ffffe71"
  },
  {
    "url": "assets/js/25.cd39792f.js",
    "revision": "dde49ac5bcf19278bb682b597d227a23"
  },
  {
    "url": "assets/js/26.ccdd9dad.js",
    "revision": "dd5204c508d6e207226e1c630ce70be5"
  },
  {
    "url": "assets/js/27.2fd83346.js",
    "revision": "8e84fc712e44ea6c4202e45006eecd76"
  },
  {
    "url": "assets/js/28.11dfa14a.js",
    "revision": "4956845a2aca00e17c1a0b1d219d8039"
  },
  {
    "url": "assets/js/29.b848c837.js",
    "revision": "b9cb6a391bdb24767cb3ed4da35381a0"
  },
  {
    "url": "assets/js/30.4580c38c.js",
    "revision": "dcb7109d0be5578abd0a8736f20065c7"
  },
  {
    "url": "assets/js/31.313b107c.js",
    "revision": "a5f26b1df7bffe6f1d20a8b976936158"
  },
  {
    "url": "assets/js/32.8896423c.js",
    "revision": "84398ba4eaaf1545c9cbd97a9825d57a"
  },
  {
    "url": "assets/js/33.3db27cc8.js",
    "revision": "6c55007f4c2eb02c35139e07a9f37c01"
  },
  {
    "url": "assets/js/34.4343bfb6.js",
    "revision": "caa36daae2e76e127dfd56f64e695adb"
  },
  {
    "url": "assets/js/35.ec001e11.js",
    "revision": "596f72b857913b4796b2472e02b418ea"
  },
  {
    "url": "assets/js/36.2a781a4a.js",
    "revision": "bf2b79de911d83e76f63ff6deb1d2995"
  },
  {
    "url": "assets/js/37.850523a9.js",
    "revision": "f6e9a77c78fdf495a8ba10b89eea53ef"
  },
  {
    "url": "assets/js/38.f0d101d7.js",
    "revision": "6ad86e23dfdda7d4c3f69ec54e3d0938"
  },
  {
    "url": "assets/js/39.46df3e69.js",
    "revision": "1090c47d0235e3e5e340acbbb4b28ef6"
  },
  {
    "url": "assets/js/40.56a27825.js",
    "revision": "3eda70e84cdb3de20417a6fab8d85d03"
  },
  {
    "url": "assets/js/41.f20d966e.js",
    "revision": "f8db9deb652d2de07837cdb16ec0a8cc"
  },
  {
    "url": "assets/js/42.b24ff9a5.js",
    "revision": "5fa62527bfc07f4d506b9abc924c668a"
  },
  {
    "url": "assets/js/43.fee3f77e.js",
    "revision": "bcd75c6cd288e5edca17e271e505b4ce"
  },
  {
    "url": "assets/js/44.82f8a04e.js",
    "revision": "e81bc35d3a82212a1e74cb7326f6f98d"
  },
  {
    "url": "assets/js/45.2ce254b2.js",
    "revision": "265049c3dfc85b7f7235c16d3dc07b7c"
  },
  {
    "url": "assets/js/46.a5d3c0ca.js",
    "revision": "af4ab9bac5a507c64419207c113f718f"
  },
  {
    "url": "assets/js/47.1d3adbcf.js",
    "revision": "09ce8a32c970bffc31f0c8d44e44c800"
  },
  {
    "url": "assets/js/48.937d7aa3.js",
    "revision": "b426567b18d7f80e4f31e7b0c92fc5b2"
  },
  {
    "url": "assets/js/49.e6a32220.js",
    "revision": "88625576a5b66a13328b378f9a0b7023"
  },
  {
    "url": "assets/js/5.1e50d71f.js",
    "revision": "694cbf3374e52b1cafb4a78305fb488b"
  },
  {
    "url": "assets/js/50.8e6c94a0.js",
    "revision": "16808560a818333bafdbf2efa799bedb"
  },
  {
    "url": "assets/js/51.cc7dbfa1.js",
    "revision": "24ff02db5a35a0fd3a70746274945b9f"
  },
  {
    "url": "assets/js/52.64e0762d.js",
    "revision": "4228bdd0cdaa5d39767562adde01e6e1"
  },
  {
    "url": "assets/js/53.d5929aa0.js",
    "revision": "e27d0dff3966d8709f14bb19e86c2aea"
  },
  {
    "url": "assets/js/54.72e42e3d.js",
    "revision": "b8a1a630adf9ae59184cfe6bc5c61c2b"
  },
  {
    "url": "assets/js/55.8d494529.js",
    "revision": "9d10c7d63115fdfec8d0008dd21000d9"
  },
  {
    "url": "assets/js/56.7b0c0a8f.js",
    "revision": "2706050a20dd36ae5d1e485963d73faa"
  },
  {
    "url": "assets/js/57.9f50afac.js",
    "revision": "2faa040cb334a9e2ba95ffbad608568c"
  },
  {
    "url": "assets/js/58.88638f3e.js",
    "revision": "701d87f64dadf80e35c89af0fa4cee31"
  },
  {
    "url": "assets/js/59.6ced2410.js",
    "revision": "f47af0b4c570aa653f643e5506d60e1b"
  },
  {
    "url": "assets/js/6.289b09d9.js",
    "revision": "f5230bd7de53bc59d601e9795d3942da"
  },
  {
    "url": "assets/js/60.742c340c.js",
    "revision": "a7b82d064045fba1dad892f70504e724"
  },
  {
    "url": "assets/js/61.c602fb29.js",
    "revision": "b61713f2ce04014fb662dcb2da9e33f3"
  },
  {
    "url": "assets/js/62.5e122b5b.js",
    "revision": "2d2468e882b3c4ceb03c77057d754fad"
  },
  {
    "url": "assets/js/63.70541da3.js",
    "revision": "506c1576271d398d51ddd7e1756a44dc"
  },
  {
    "url": "assets/js/64.d2c95ab1.js",
    "revision": "3b6bee85e87e612c2eb39939001a5290"
  },
  {
    "url": "assets/js/65.d93b05bf.js",
    "revision": "2019859bd7f5c46dcf67578c52151988"
  },
  {
    "url": "assets/js/66.98936791.js",
    "revision": "4abacff50116a230a8b6060368d9ad6b"
  },
  {
    "url": "assets/js/67.dc932acc.js",
    "revision": "7f33d470c821703ecbeb1cab679099c5"
  },
  {
    "url": "assets/js/68.f1ef6e84.js",
    "revision": "51978b2d8728081f3c533d71a37a465e"
  },
  {
    "url": "assets/js/69.06f47b5a.js",
    "revision": "0f3a2f760af40d4b3a5f282589d68e33"
  },
  {
    "url": "assets/js/7.6f9fcd49.js",
    "revision": "ef37a17d43e2e7dd6170793100792f25"
  },
  {
    "url": "assets/js/70.ed75018b.js",
    "revision": "cbe06f588b1d7250e62539f1b8a1170b"
  },
  {
    "url": "assets/js/71.9b58e370.js",
    "revision": "f93d363906bddc615031df7072c998a4"
  },
  {
    "url": "assets/js/72.abdc0200.js",
    "revision": "94119eef344fe8bf1742a15ee32fd05c"
  },
  {
    "url": "assets/js/73.6c582d9b.js",
    "revision": "e4c3572c70825405e04b5350afe750e9"
  },
  {
    "url": "assets/js/74.b5f8c490.js",
    "revision": "ed823cf19048d2fe31c0776f8fb84368"
  },
  {
    "url": "assets/js/75.d538e8dc.js",
    "revision": "6e3f8febc947d40d8dc54bfa5f8dc064"
  },
  {
    "url": "assets/js/76.796c2a20.js",
    "revision": "52db038402bba320f8e995034b4d4d6a"
  },
  {
    "url": "assets/js/77.71057c9e.js",
    "revision": "1c38f0e5c25c99da19c80c5e590468fd"
  },
  {
    "url": "assets/js/78.00abdea6.js",
    "revision": "161fea73b44ddd5328af0fc64081856e"
  },
  {
    "url": "assets/js/79.c597519c.js",
    "revision": "979a693761f56f8104d35d733a416ec9"
  },
  {
    "url": "assets/js/8.6a9db5f6.js",
    "revision": "a075b0341ca8395667094ff2766c8f37"
  },
  {
    "url": "assets/js/80.f24a0c0d.js",
    "revision": "665f3d2abebb0101044a849336f64491"
  },
  {
    "url": "assets/js/81.ce96f698.js",
    "revision": "8ef9f3008676a32b242227505bbef498"
  },
  {
    "url": "assets/js/82.b2c09684.js",
    "revision": "c3b0f5c3a8ba9708ae1e4d5eb44dd1e9"
  },
  {
    "url": "assets/js/83.415a612a.js",
    "revision": "ce7fe960cb5996bf1f911966c28f6329"
  },
  {
    "url": "assets/js/84.5a060cc5.js",
    "revision": "53070f7efd25d86269c904131a9609c3"
  },
  {
    "url": "assets/js/85.343a6330.js",
    "revision": "ac44eac084e1da3d03bee1a8ae9a7bf4"
  },
  {
    "url": "assets/js/86.eab87bae.js",
    "revision": "10a01ec92fa8a620382d2bb21ec31149"
  },
  {
    "url": "assets/js/87.35af2d82.js",
    "revision": "a3e292a69d751a800764355ca7aa4b2a"
  },
  {
    "url": "assets/js/88.bab7aefe.js",
    "revision": "62783b585c2afccd78690fddc69a5412"
  },
  {
    "url": "assets/js/89.e96ecd44.js",
    "revision": "f403e3cf90374cc949e3adb3e1afe9f9"
  },
  {
    "url": "assets/js/9.b1be5bd5.js",
    "revision": "776305157ef8c65843f2876e7ab70df3"
  },
  {
    "url": "assets/js/90.a10b58d4.js",
    "revision": "607ddb8f812c4b21c3a995013f087e6b"
  },
  {
    "url": "assets/js/91.176fb0a2.js",
    "revision": "431b698996b8936e750ecb47540a7da5"
  },
  {
    "url": "assets/js/92.ae7392ba.js",
    "revision": "82987512ac710b3d11e74a738e69d912"
  },
  {
    "url": "assets/js/93.9dd8e9ea.js",
    "revision": "3c131e860160959cf0c9c53b47e4a9f8"
  },
  {
    "url": "assets/js/94.c9313567.js",
    "revision": "d786fb7debe1906e5896d5b9104c20ca"
  },
  {
    "url": "assets/js/95.c30c0254.js",
    "revision": "34798ce25bb9302f811c0fc4487d9c73"
  },
  {
    "url": "assets/js/96.f00ebdc3.js",
    "revision": "5d274163774e92e2d72e817b62fddf88"
  },
  {
    "url": "assets/js/97.2e9b44af.js",
    "revision": "3d95bcbec2fdf286b70a17d44336247e"
  },
  {
    "url": "assets/js/98.325435b0.js",
    "revision": "b4202ed99a93019e993072f2c5fbda08"
  },
  {
    "url": "assets/js/99.1e13974f.js",
    "revision": "5a5917f483d7521f9291eda651343070"
  },
  {
    "url": "assets/js/app.da21edc6.js",
    "revision": "547ebbc86b4bb1f6250191311ed0da3a"
  },
  {
    "url": "assets/js/vendors~flowchart.f4a117dd.js",
    "revision": "a9add723f54de64f29ee219d49c6eb45"
  },
  {
    "url": "categories/笔记等/index.html",
    "revision": "ac577db73dafe4fda5cca347f426cdf5"
  },
  {
    "url": "categories/笔记等/page/2/index.html",
    "revision": "e18a8e6c62df6e33d33e9b9b0ddcc545"
  },
  {
    "url": "categories/电子设计等/index.html",
    "revision": "dce3512349763871d5a038f1e171a3eb"
  },
  {
    "url": "categories/电子设计等/page/2/index.html",
    "revision": "332e409c09f0422cb8003b5f9c8eb595"
  },
  {
    "url": "categories/计算机技术等/index.html",
    "revision": "3dc09cc5d6fdcaccdc87eefafa094b01"
  },
  {
    "url": "categories/计算机技术等/page/2/index.html",
    "revision": "19cc599e3c335d35bcf90c88ccb5c56a"
  },
  {
    "url": "categories/算法等/index.html",
    "revision": "a781ea64904a3725a1cf930c19fb8b04"
  },
  {
    "url": "categories/算法等/page/2/index.html",
    "revision": "5832e5582385ebe59d90aaeb7d79f9ac"
  },
  {
    "url": "categories/游戏设计等/index.html",
    "revision": "281510b6761f95f1ae3caa7c92fe5f86"
  },
  {
    "url": "categories/杂谈/index.html",
    "revision": "e1efc13c8c845cbff539cb2b14405d86"
  },
  {
    "url": "categories/杂谈/page/2/index.html",
    "revision": "09a7d60988713cfaa99408d2c9b0f55b"
  },
  {
    "url": "categories/AI及机器人等/index.html",
    "revision": "658ae35186697871d0e0a84786088a09"
  },
  {
    "url": "categories/AI及机器人等/page/2/index.html",
    "revision": "625a6bd84bf515e9f6cca45ef4dba66b"
  },
  {
    "url": "categories/index.html",
    "revision": "ba8114d08a8fc630ddba7e169040ef75"
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
    "revision": "be890b7605f554fc2487b42a6304c6e3"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "c8209619f9a8260aee66ce7691c9f2ad"
  },
  {
    "url": "projects/github.html",
    "revision": "cb58c5a6e3780883a4921e7843bc0b24"
  },
  {
    "url": "tag/index.html",
    "revision": "a1ccb7e428e596be10350cbb375dc650"
  },
  {
    "url": "tags/比赛/index.html",
    "revision": "c4d3678577c0cdeafcea9fc8e7588991"
  },
  {
    "url": "tags/编解码器/index.html",
    "revision": "84b3bc0f2af0edd81d3638c627828905"
  },
  {
    "url": "tags/操作系统os/index.html",
    "revision": "3392627bab3bd8beda8f3c87d3df087a"
  },
  {
    "url": "tags/电子设计/index.html",
    "revision": "7282e6043e6a68d61a6b956820e4c2d6"
  },
  {
    "url": "tags/机器人/index.html",
    "revision": "92d5fc1aeb307aaab64ca7f0fd8b9c78"
  },
  {
    "url": "tags/机器学习/index.html",
    "revision": "65179dec22cc8ce9423cba7604df2c3c"
  },
  {
    "url": "tags/计算机视觉/index.html",
    "revision": "e2a00bac222ae9cc6ac99a42fd2cc86f"
  },
  {
    "url": "tags/计算机网络/index.html",
    "revision": "eb32f1f84d814680a6ad991a74fb7169"
  },
  {
    "url": "tags/开源写字机/index.html",
    "revision": "d8735e2f94b4402798817a508b232ed3"
  },
  {
    "url": "tags/量化/index.html",
    "revision": "e428d733599eee6c22554f108ef9d30b"
  },
  {
    "url": "tags/模型部署/index.html",
    "revision": "22e8e62d4f80ab86917f999df4049a78"
  },
  {
    "url": "tags/模型部署及加速/index.html",
    "revision": "1f3b2008789305fe89e27186dab6014d"
  },
  {
    "url": "tags/目标检测/index.html",
    "revision": "995e828e11032470b49b578ad0285a4d"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "b7a8e2d6cc9a649dcdd28f5bf8ae5bab"
  },
  {
    "url": "tags/前端动画/index.html",
    "revision": "f4fc0356e7faee48e1b07c4c3aa5bd89"
  },
  {
    "url": "tags/嵌入式/index.html",
    "revision": "75c800665220af514598779586e8f25f"
  },
  {
    "url": "tags/深度学习/index.html",
    "revision": "486b6cb3bf58e3cfd45d95b0228b9650"
  },
  {
    "url": "tags/数据结构与算法/index.html",
    "revision": "f32b4082ab7b636092da49e8f3ebd197"
  },
  {
    "url": "tags/图像处理/index.html",
    "revision": "381645520194565e3975111c380d5364"
  },
  {
    "url": "tags/图像处理/page/2/index.html",
    "revision": "e8cf9a52d1e6f67c6ced694e1d9a5b9f"
  },
  {
    "url": "tags/网络协议/index.html",
    "revision": "2c076f099305e3a13b8df2a3a1ecfe8c"
  },
  {
    "url": "tags/文档笔记/index.html",
    "revision": "14a9d3762a86d367dc4cbb5f22bc4d6a"
  },
  {
    "url": "tags/物联网/index.html",
    "revision": "c2f8f5032c836e6750c4f822fd1ec99f"
  },
  {
    "url": "tags/音视频开发/index.html",
    "revision": "d82191206ab6308a864342b260ad5ee7"
  },
  {
    "url": "tags/游戏开发/index.html",
    "revision": "b5beb2f0c0399059bc9b9bb49c0b323b"
  },
  {
    "url": "tags/杂谈/index.html",
    "revision": "c92f82870705fa21daa1f07f8d9e2edd"
  },
  {
    "url": "tags/最优化控制/index.html",
    "revision": "b6ae5939c4bb80678a613e3efdc1b756"
  },
  {
    "url": "tags/Android/index.html",
    "revision": "cbb7a322e5da5b2e07d931bbdb4be9ad"
  },
  {
    "url": "tags/bug/index.html",
    "revision": "d9367b6504bd5caf9d212bfae9e52a69"
  },
  {
    "url": "tags/CI/CD/index.html",
    "revision": "7502aa20545151fa2e07e18a4bdb2914"
  },
  {
    "url": "tags/cmake/index.html",
    "revision": "74b0c40ed64d25b34c1e0bde3be0128b"
  },
  {
    "url": "tags/CNN/index.html",
    "revision": "846802f0f79c7e6df39d50f79313f93e"
  },
  {
    "url": "tags/cpp/index.html",
    "revision": "0a04ea4304235b3056789c0f4592c8d6"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "78dff935e7bec412e6d4e4b5e5996c63"
  },
  {
    "url": "tags/FPGA/index.html",
    "revision": "7caeba8f181166d7450b4fe54d87e9a5"
  },
  {
    "url": "tags/GUI/index.html",
    "revision": "ac2154daf09c4e708ea59ece0b72f337"
  },
  {
    "url": "tags/HarmonyOS/index.html",
    "revision": "5bc9c0048b093131f18e5a9ccffc9c1a"
  },
  {
    "url": "tags/LINUX/index.html",
    "revision": "15b0ec8dddf5b96c333fc5299800d332"
  },
  {
    "url": "tags/live2d/index.html",
    "revision": "0d7ba0109ec8ed9abf92a24e64c3d5c6"
  },
  {
    "url": "tags/mmpose/index.html",
    "revision": "74375895a6da9783b300b5bf2c9404c7"
  },
  {
    "url": "tags/NLP/index.html",
    "revision": "1bdc0b64d00870db83974785a96fb659"
  },
  {
    "url": "tags/opencv/index.html",
    "revision": "ff338a6ae3ed4eede2913527c75dec5b"
  },
  {
    "url": "tags/pypi/index.html",
    "revision": "7d85ba52890bb5e0728576e0723cea93"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "a2f45fc6122ec1c9bc236998891d4a09"
  },
  {
    "url": "tags/RL/index.html",
    "revision": "9756a407663b5e0784502948640ece94"
  },
  {
    "url": "tags/ROS/index.html",
    "revision": "c1ad80fb5ba1410e54e308bd91d467b1"
  },
  {
    "url": "tags/slam/index.html",
    "revision": "42f2b1eece7bdfd412e6c363e9497ec0"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "ca8432684420464339219f8690104b48"
  },
  {
    "url": "timeline/index.html",
    "revision": "eadc3daf815fa22d488d17f87bfe9cf5"
  },
  {
    "url": "view/other/comment.png",
    "revision": "6878f2fce5e82c12f91eef87bde8bd2c"
  },
  {
    "url": "views/AI/2020baidustar.html",
    "revision": "e19356635164db615550fdbe95de9558"
  },
  {
    "url": "views/AI/coder/index.html",
    "revision": "dbf22803c6553b97676bb7014c0324a1"
  },
  {
    "url": "views/AI/detection.html",
    "revision": "f312512e8724facaaeb3abd84911557e"
  },
  {
    "url": "views/AI/guiYolov4.html",
    "revision": "c355e28fb022c52ea9afb2925884fdde"
  },
  {
    "url": "views/AI/handwrite/cnn/cifar.html",
    "revision": "d6e1e340eccb8f72609d7fcfb593288b"
  },
  {
    "url": "views/AI/mmlab/mmpose/00.html",
    "revision": "c2c969c3ce0062aad4944969dc82129b"
  },
  {
    "url": "views/AI/photo.html",
    "revision": "9961b1f96fe2f17128e15c1bbbca20a3"
  },
  {
    "url": "views/AI/RL/curobo.html",
    "revision": "bdc8bebd072110eb1df8f3d3467ab12c"
  },
  {
    "url": "views/AI/RL/env.html",
    "revision": "4972081ffab33e527f89ee7f432c9e91"
  },
  {
    "url": "views/AI/RL/ppo.html",
    "revision": "845c42193d7b23603a8bc00a1f159ecd"
  },
  {
    "url": "views/AI/RL/vima.html",
    "revision": "535678541030422a2892614f3469694e"
  },
  {
    "url": "views/AI/RL/wtw.html",
    "revision": "a2a152bec841d20acd7d02111781b4a7"
  },
  {
    "url": "views/AI/taac2021.html",
    "revision": "0eec709e793b4f10e63edf9cb7883b57"
  },
  {
    "url": "views/AI/tengine/ohosndk0.html",
    "revision": "cb99567227b383a4f6be935c55f5a1ee"
  },
  {
    "url": "views/AI/tensorrt/env.html",
    "revision": "0aa2ad5491ec5dd0e493c9eded5fdf2c"
  },
  {
    "url": "views/AI/TextClassification.html",
    "revision": "4082fa747ecca216a0cabc72d8573d25"
  },
  {
    "url": "views/AI/tf2.0.html",
    "revision": "d8dfadbd00714a891d09adf44dad837a"
  },
  {
    "url": "views/AI/yolo/yolov4.html",
    "revision": "49b5c6553bf3b8d8c064fdb5852396fe"
  },
  {
    "url": "views/AI/yolo/yolov9_ncnn.html",
    "revision": "ea5c4b51d269902c3ff71c371a39d5e8"
  },
  {
    "url": "views/algorithm/datastructure/queue.html",
    "revision": "dc4a31a34d2cc92b9260afbede85ba0d"
  },
  {
    "url": "views/algorithm/datastructure/stack.html",
    "revision": "d359772b82faf42b083a1f00d8866fc3"
  },
  {
    "url": "views/algorithm/datastructure/trie.html",
    "revision": "f5981d69bda4b401cb6383816d0d41c4"
  },
  {
    "url": "views/algorithm/leetcode/leetcode1.html",
    "revision": "0a7df8a9f03b6756f398bec941adf502"
  },
  {
    "url": "views/algorithm/leetcode/leetcode2.html",
    "revision": "ec70f4e89bbb059c753af2503f73ceeb"
  },
  {
    "url": "views/algorithm/opencv/clahe.html",
    "revision": "83a477e9303c07236bc77a492f47c6d9"
  },
  {
    "url": "views/algorithm/opencv/cornerdetection00.html",
    "revision": "746451f75e7ead1292c34ee36dbc4301"
  },
  {
    "url": "views/algorithm/opencv/env.html",
    "revision": "4edc974f714d62dd35c676d6ee641c64"
  },
  {
    "url": "views/algorithm/opencv/ImageProcessing.html",
    "revision": "9683c8bce21442d2c013dbb70bdd600f"
  },
  {
    "url": "views/algorithm/opencv/iqa.html",
    "revision": "dc154d179d12e8ed122c6056a7f42dd9"
  },
  {
    "url": "views/algorithm/opencv/otsu.html",
    "revision": "5ac6f1d0a23f464af6337c3586c45fa8"
  },
  {
    "url": "views/algorithm/opencv/retinex.html",
    "revision": "87a181225510560ba57dccdc3b76e714"
  },
  {
    "url": "views/algorithm/ppq/day1.html",
    "revision": "d70b227583a2b5ec28ddc46487e3766b"
  },
  {
    "url": "views/algorithm/ppq/day2.html",
    "revision": "5e6bc15923b36a989276014d50daf4d6"
  },
  {
    "url": "views/algorithm/slam/aloam.html",
    "revision": "f631b80fb0a5b23e20dd69db5e7996f2"
  },
  {
    "url": "views/algorithm/slam/n0.html",
    "revision": "9f0d6db2f8cb0dbca511ffeb5283ed61"
  },
  {
    "url": "views/algorithm/slam/velyodyne.html",
    "revision": "a8a2e6ee0fbac2abbcc9cb8bc26a5b0e"
  },
  {
    "url": "views/algorithm/slam/vslam_rs.html",
    "revision": "ff89649755d7496bc794b238bff84287"
  },
  {
    "url": "views/cs/android/mina.html",
    "revision": "cb4b690267599d9c746ce6f789ff3908"
  },
  {
    "url": "views/cs/cmake/00.html",
    "revision": "ff77a179a734bd6a1926cd890bc442e1"
  },
  {
    "url": "views/cs/cplusplus/c.html",
    "revision": "e8a9b163f9521c8bfa59686c964d1877"
  },
  {
    "url": "views/cs/ffmpeg/compile.html",
    "revision": "be1b2f105c9263cc6f72bcf86e5d2a51"
  },
  {
    "url": "views/cs/ffmpeg/win_env.html",
    "revision": "a99684172b7098ff72433cd3eed2405e"
  },
  {
    "url": "views/cs/gtsreamer/py_gst.html",
    "revision": "1fd0c3771206bd448a0ee152864db1be"
  },
  {
    "url": "views/cs/gtsreamer/qs.html",
    "revision": "00bf46449996bdf87afaecf1ac8502d0"
  },
  {
    "url": "views/cs/Imagesegmentation.html",
    "revision": "5d5ae3904571751ae1479145cabc3b27"
  },
  {
    "url": "views/cs/MFCbmp.html",
    "revision": "9a7d1c09298cc206c4cbb5c9dc068b81"
  },
  {
    "url": "views/cs/OS/GlimmerOS.html",
    "revision": "8c7e335f9e5f87f07bcdc43c96ab815c"
  },
  {
    "url": "views/cs/python/note0.html",
    "revision": "c2f4ae9c1b490f5499b704d26e219d2f"
  },
  {
    "url": "views/cs/ros/env.html",
    "revision": "00c62843faaaa0421d262f83dfd65510"
  },
  {
    "url": "views/cs/ros/note00.html",
    "revision": "ffb332057d1e7356df520389ad8ad243"
  },
  {
    "url": "views/cs/vueblog.html",
    "revision": "cac5d1f0cb1e81fd8f92bf32d2b06491"
  },
  {
    "url": "views/ee/ARMcortex/armenv.html",
    "revision": "2bcba360e17d18c753ab1e0c369b60e7"
  },
  {
    "url": "views/ee/ARMcortex/nanopi0.html",
    "revision": "2d59d05b00b96c9fc392ff10b0ff09d3"
  },
  {
    "url": "views/ee/cubli.html",
    "revision": "ac098537ba1933c8f9181c714802a0b8"
  },
  {
    "url": "views/ee/fpga/env.html",
    "revision": "ec9fa708433b633ae214a14ed47848ec"
  },
  {
    "url": "views/ee/harmonyos/ohos0.html",
    "revision": "49e680debc6fe6a747454e7e478c96dc"
  },
  {
    "url": "views/ee/Humanoid_Robot/hector.html",
    "revision": "772fb1ac923c4b028374c126580c69ab"
  },
  {
    "url": "views/ee/Humanoid_Robot/LIPM.html",
    "revision": "f1ffcab25deccf5b4ad3db0c4755febb"
  },
  {
    "url": "views/ee/Humanoid_Robot/uvc.html",
    "revision": "a90fec6c0f1aec7bc8a893631f843eb1"
  },
  {
    "url": "views/ee/jetson/jetson1.html",
    "revision": "9d6a9fbb04b24be9cc15f358d008b764"
  },
  {
    "url": "views/ee/midbot.html",
    "revision": "9f9e86314bce007adecf959291a6f57a"
  },
  {
    "url": "views/ee/miniBOT.html",
    "revision": "acbd0e94fc99ac05317b420a0d55a965"
  },
  {
    "url": "views/ee/mpc/introduction.html",
    "revision": "5a29c11d1ac9fd7fc8f1a603f7c5ec8c"
  },
  {
    "url": "views/ee/mpc/rfmpc.html",
    "revision": "3c3a7ba46f65a4eedcee769ae87252d1"
  },
  {
    "url": "views/ee/mpc/trajectory_optimization.html",
    "revision": "4e3a9fa6aefd906249ecc74b710d6484"
  },
  {
    "url": "views/ee/quadsdk.html",
    "revision": "38d73b0ae50b8dac5031b425d410c45d"
  },
  {
    "url": "views/ee/riscv/gdf103.html",
    "revision": "b52b8a1e2a8491627605b52619dbf23c"
  },
  {
    "url": "views/ee/smallB.html",
    "revision": "4c77e8027c18dea62bc5aade15b3d79f"
  },
  {
    "url": "views/ee/star.html",
    "revision": "9edc4f6f6dfc529a052bd04cf07ed173"
  },
  {
    "url": "views/ee/tcostiny/tcos0.html",
    "revision": "4d6a26499668dc65bb641043d2377efc"
  },
  {
    "url": "views/ee/tinyascen.html",
    "revision": "c762a7832cbc227aa4e3c6c2b992436b"
  },
  {
    "url": "views/freetalk/android.html",
    "revision": "0fac38a13497d98f91d41ac089a94c2b"
  },
  {
    "url": "views/freetalk/cicd/fix.html",
    "revision": "b706431001517f3b92931e4724ec8295"
  },
  {
    "url": "views/freetalk/color.html",
    "revision": "82602133da326689afc85b09effad01f"
  },
  {
    "url": "views/freetalk/crossapp.html",
    "revision": "4562964b9f8fa044b4221ff4132ac036"
  },
  {
    "url": "views/freetalk/docker00.html",
    "revision": "ec8ffd955125931e105979ae8c91ed42"
  },
  {
    "url": "views/freetalk/Fourier.html",
    "revision": "ef3859772edb148a0af1a3d8a397be84"
  },
  {
    "url": "views/freetalk/ip0.html",
    "revision": "9bdec78c7593e4d8b8dce072153dec13"
  },
  {
    "url": "views/freetalk/picgo.html",
    "revision": "e80a08be703748c8984b0562e8e684a6"
  },
  {
    "url": "views/freetalk/self_improvement.html",
    "revision": "b37a83950894ffb711547cf5bda2d4cf"
  },
  {
    "url": "views/freetalk/spider/github.html",
    "revision": "2de72f7dfdeed8d7e2854a5fc6eace72"
  },
  {
    "url": "views/freetalk/spider/zhihu.html",
    "revision": "ae5ef36ec83d8a1444d8d7ff2bb66b5c"
  },
  {
    "url": "views/freetalk/teamwork.html",
    "revision": "e9dc4a43f4edbc04cdde50c7c4493847"
  },
  {
    "url": "views/freetalk/vsc/tools.html",
    "revision": "415a4f39ff1168c7a82ac3f0027196a0"
  },
  {
    "url": "views/freetalk/why.html",
    "revision": "14fd507867a5ef81d8d585b4e01781d6"
  },
  {
    "url": "views/freetalk/wsl2/note.html",
    "revision": "3a29b5fa3c830ed6896e22c0454dac27"
  },
  {
    "url": "views/freetalk/wsl2/wsl.html",
    "revision": "4592c8487b4744d00f08bf22da208bb4"
  },
  {
    "url": "views/freetalk/wsl2/wslg.html",
    "revision": "f80eafd5337c635852afc945d416bbea"
  },
  {
    "url": "views/game/16.html",
    "revision": "fc3ddaefeb4e5fa8e6489e5b4c9d9893"
  },
  {
    "url": "views/game/live2d/weblive2d.html",
    "revision": "37f5bc302fe51ba8fc8399f904678b24"
  },
  {
    "url": "views/game/unity/AR.html",
    "revision": "ff5f010d90d7a10ab1118fe0493f1a34"
  },
  {
    "url": "views/game/vulkan/note0.html",
    "revision": "52ec7c03261b8edd060c7f03e7468dab"
  },
  {
    "url": "views/index.html",
    "revision": "193cdebb6320de1b985e72fceb29959e"
  },
  {
    "url": "views/notes/aibug00.html",
    "revision": "8f38275fcd3801429e407aff34951fcc"
  },
  {
    "url": "views/notes/Edge.html",
    "revision": "97628879a9be8454246ea701d1041b5f"
  },
  {
    "url": "views/notes/git.html",
    "revision": "c852fff7e8e54decd7ffc585fe307837"
  },
  {
    "url": "views/notes/Googlebug.html",
    "revision": "8aff8453d76d9de899360d0ad07b4e64"
  },
  {
    "url": "views/notes/linux.html",
    "revision": "f83e770807fc8220f10a27a034dc30f5"
  },
  {
    "url": "views/notes/linuxbug00.html",
    "revision": "796e61aefc572a319bfd2dc2de39858d"
  },
  {
    "url": "views/notes/markdown.html",
    "revision": "38a00fa961aa999ebc7aecd5ba7a4f40"
  },
  {
    "url": "views/notes/oamnote.html",
    "revision": "5957f621948f5ca905719bf000ac6772"
  },
  {
    "url": "views/notes/opencvbug.html",
    "revision": "7998465a1e179e37b0bf49e0952b4359"
  },
  {
    "url": "views/notes/pycocotools.html",
    "revision": "45d9a5796897374598d0d5f0c7225741"
  },
  {
    "url": "views/notes/pypi.html",
    "revision": "ff2a4e172a71493c1344cbf7a5a391aa"
  },
  {
    "url": "views/notes/Pythonbug.html",
    "revision": "c6810463bd465158e8620a05ae046355"
  },
  {
    "url": "views/notes/vim.html",
    "revision": "ed8034562f00ac593a92b0fd62ef5636"
  },
  {
    "url": "views/notes/webbug.html",
    "revision": "e7b9c0e15458726f5b3220da88b5d5d5"
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
