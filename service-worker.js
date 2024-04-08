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
    "revision": "e50436cc6112789500a6099def86b056"
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
    "url": "assets/js/100.36897d52.js",
    "revision": "6a609aefb571eb436c0373e3b1dac30f"
  },
  {
    "url": "assets/js/101.01e98b3e.js",
    "revision": "6e03e103a12988fb40251f3f106d92ed"
  },
  {
    "url": "assets/js/102.cabce885.js",
    "revision": "55f1103bff1f97862e12c0447c06e201"
  },
  {
    "url": "assets/js/103.b692e4f1.js",
    "revision": "79eb75e2b5ec8d0b077908816793eeb9"
  },
  {
    "url": "assets/js/104.3b9b20ea.js",
    "revision": "49f030da8a12e4a2ff11150028c4ff95"
  },
  {
    "url": "assets/js/105.bf597bcb.js",
    "revision": "61b512e8ba3cf5139cb29b8814af2db2"
  },
  {
    "url": "assets/js/106.214c0831.js",
    "revision": "c0f1dc3ffc0cb55b9388108fb74b72e3"
  },
  {
    "url": "assets/js/107.28783c26.js",
    "revision": "d972f78109e0a858ca3499c1c82d06c8"
  },
  {
    "url": "assets/js/108.cc6bc860.js",
    "revision": "2360ce469f1eb82d7b5e4f20d8e35ae4"
  },
  {
    "url": "assets/js/109.7be0f0c4.js",
    "revision": "c2d7194b164278a5223cfae3dcc705c4"
  },
  {
    "url": "assets/js/11.875fc3e6.js",
    "revision": "b0c94f3cf762be3a12ca79a3c2cc69c1"
  },
  {
    "url": "assets/js/110.45535548.js",
    "revision": "26d0aed93b117f44e9de4cefe31684a6"
  },
  {
    "url": "assets/js/111.9dd1d39d.js",
    "revision": "98dfd6f6bfda3cc8dfc06658eceb6c94"
  },
  {
    "url": "assets/js/112.912b455f.js",
    "revision": "0dcbe929e1275a39cb41b3d9f05519ed"
  },
  {
    "url": "assets/js/113.1c0b46e6.js",
    "revision": "8038c0b8c439a50d6b354b2746855c73"
  },
  {
    "url": "assets/js/114.937a774e.js",
    "revision": "8a5c28f41e6c68e12f1d95510f7f5a8d"
  },
  {
    "url": "assets/js/115.f30d8573.js",
    "revision": "5161f063f954ec1a9ef327424738d72b"
  },
  {
    "url": "assets/js/116.a1710e0a.js",
    "revision": "0a5b6425b8efc6347ca660ba242f0c52"
  },
  {
    "url": "assets/js/117.ad3f6792.js",
    "revision": "18254dd3d907f00749d647bf3d90412c"
  },
  {
    "url": "assets/js/118.f35643f1.js",
    "revision": "c412136419a0d013d26d6599795548b0"
  },
  {
    "url": "assets/js/119.cb85a46b.js",
    "revision": "592ba5db44b154d9d9b9c6c912fe3e00"
  },
  {
    "url": "assets/js/12.b4d2682c.js",
    "revision": "f9585fc1b92f501bd25b858b623ba3aa"
  },
  {
    "url": "assets/js/120.6d1d9c3a.js",
    "revision": "6554236ead3034b08da1b65c05b677e8"
  },
  {
    "url": "assets/js/121.40a16714.js",
    "revision": "d889189f30639fe4dfffde4de4f74358"
  },
  {
    "url": "assets/js/122.00670c7e.js",
    "revision": "4515ebf509f848021c107cfc81b75e1a"
  },
  {
    "url": "assets/js/123.6c138001.js",
    "revision": "39ce4297a0b7d5de85c364ab467ce1aa"
  },
  {
    "url": "assets/js/124.208e90fa.js",
    "revision": "e0488f9960009423118419db63c5f47b"
  },
  {
    "url": "assets/js/125.0bb4ae87.js",
    "revision": "2463530ef9507f935a4524d53a6b2704"
  },
  {
    "url": "assets/js/126.025accb7.js",
    "revision": "c6e94ad33a627c5d1ef44577d3877066"
  },
  {
    "url": "assets/js/127.041d1500.js",
    "revision": "725f6a56c812b752868120def63ef51d"
  },
  {
    "url": "assets/js/128.1e08851a.js",
    "revision": "8ef43978a2a5f30341de6a1527c175bb"
  },
  {
    "url": "assets/js/13.4cdaf2d2.js",
    "revision": "1907aff1bbd3e7ea8a873146a1fe3b66"
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
    "url": "assets/js/19.6e5eb5a0.js",
    "revision": "588d8d616e8693c3542e60c7e011f481"
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
    "url": "assets/js/21.18263135.js",
    "revision": "76ec822e791f624a88050ea39a6234ec"
  },
  {
    "url": "assets/js/22.6710509a.js",
    "revision": "ac1c1cc3931d989d01a4af08de6f2063"
  },
  {
    "url": "assets/js/23.7720ef78.js",
    "revision": "9cda5f89199bc578e5164e8234f44af2"
  },
  {
    "url": "assets/js/24.9f72a4fa.js",
    "revision": "64d9fbb18f6ca47437f7bf953ffffe71"
  },
  {
    "url": "assets/js/25.d27609fe.js",
    "revision": "7afb292039e90ff8597f2007f707fdcc"
  },
  {
    "url": "assets/js/26.8a87759e.js",
    "revision": "9a9a01ee128a956b1f916264a7e112f5"
  },
  {
    "url": "assets/js/27.43870228.js",
    "revision": "556a4f933a9f5aa8d2d1cfdac516d9bf"
  },
  {
    "url": "assets/js/28.c788b144.js",
    "revision": "4ba9df80ef38ad007d9cad1feed972a7"
  },
  {
    "url": "assets/js/29.f46bf9dc.js",
    "revision": "d124b460939135a537f7ac17c8fb79a5"
  },
  {
    "url": "assets/js/30.94f0b126.js",
    "revision": "aa60a5be1192391db156766a145eb16c"
  },
  {
    "url": "assets/js/31.9e86eb96.js",
    "revision": "c42a44b2003ecdb6b96cb08139f13a2d"
  },
  {
    "url": "assets/js/32.59e8b31a.js",
    "revision": "12de5825e38ba290a92e40a26d740162"
  },
  {
    "url": "assets/js/33.b90a6432.js",
    "revision": "70ceee0c6e6570b0cafcb95f43b46c60"
  },
  {
    "url": "assets/js/34.e1ec4c8b.js",
    "revision": "aefc48e66b776157bd05da14a5a11714"
  },
  {
    "url": "assets/js/35.89b0e559.js",
    "revision": "4b433dbb99c6695e763096b529a95b64"
  },
  {
    "url": "assets/js/36.580842c2.js",
    "revision": "486af650c13d2df0b15b87d3274157ac"
  },
  {
    "url": "assets/js/37.69692e45.js",
    "revision": "864882e68196d43e30a9ce2a867b25af"
  },
  {
    "url": "assets/js/38.fb490435.js",
    "revision": "f036d01cdf39a4780448cb9154094ca9"
  },
  {
    "url": "assets/js/39.409b1481.js",
    "revision": "2b611310896ca3cb177e276cfb51fb6d"
  },
  {
    "url": "assets/js/40.ecf008a5.js",
    "revision": "a6866e54354edf31696530542409da8f"
  },
  {
    "url": "assets/js/41.e7dd6629.js",
    "revision": "23f22a6ddbdcfd7377eb65c3d101113e"
  },
  {
    "url": "assets/js/42.bfb60a36.js",
    "revision": "4afc08bccd3d64c3422b8a64cfb811f0"
  },
  {
    "url": "assets/js/43.abcf4965.js",
    "revision": "f32c604a880577aa1da2c16e2a3988f6"
  },
  {
    "url": "assets/js/44.c5370786.js",
    "revision": "0b539cf3d47d60dbf969bda7950b1c3b"
  },
  {
    "url": "assets/js/45.b0f102c7.js",
    "revision": "b89eb29736e1c8b041989db3fcd34680"
  },
  {
    "url": "assets/js/46.f611cd78.js",
    "revision": "2d2efcd43a7617edf9d0c7b9846125fd"
  },
  {
    "url": "assets/js/47.22be8a51.js",
    "revision": "aba0a6df46b977fd56db07892026d3c2"
  },
  {
    "url": "assets/js/48.1ded4f2a.js",
    "revision": "cecddf95ddd3698f960796269878dd72"
  },
  {
    "url": "assets/js/49.7e00fe7a.js",
    "revision": "a363b7ff696ddd8aaa689efc728a6935"
  },
  {
    "url": "assets/js/5.1e50d71f.js",
    "revision": "694cbf3374e52b1cafb4a78305fb488b"
  },
  {
    "url": "assets/js/50.7f866860.js",
    "revision": "e935d20d639c606c580e35d3cb7ba538"
  },
  {
    "url": "assets/js/51.4803d0ea.js",
    "revision": "31718ace13ee9a5b1f80700363ad7c76"
  },
  {
    "url": "assets/js/52.690c2c1f.js",
    "revision": "88c9e28d5b741b8108cef8ea668c319e"
  },
  {
    "url": "assets/js/53.893f9cc6.js",
    "revision": "54a5c50484e94b60f1810606f7ecd8a6"
  },
  {
    "url": "assets/js/54.31866583.js",
    "revision": "6809b28c4c4b0f4091dbe03915dd5759"
  },
  {
    "url": "assets/js/55.0d169c2e.js",
    "revision": "faf6f29a074793148d7a76c339b896f6"
  },
  {
    "url": "assets/js/56.688feacf.js",
    "revision": "d0ab16a6855299d2df33ed86b318f089"
  },
  {
    "url": "assets/js/57.64dc0b83.js",
    "revision": "bf3f4a004f5ede424ff471a9534fe087"
  },
  {
    "url": "assets/js/58.2b6fc096.js",
    "revision": "0ba6a33bdffc6c07a2eac4040647740a"
  },
  {
    "url": "assets/js/59.114400ab.js",
    "revision": "bdcfc774b0a3eff76802cc5cde8b8391"
  },
  {
    "url": "assets/js/6.289b09d9.js",
    "revision": "f5230bd7de53bc59d601e9795d3942da"
  },
  {
    "url": "assets/js/60.9d488640.js",
    "revision": "ac9fb35141e8cd5bc842bf3a7cea4c0c"
  },
  {
    "url": "assets/js/61.efde9ef5.js",
    "revision": "8f16456b5f92e2412a8bd6e6f66b8f9c"
  },
  {
    "url": "assets/js/62.256dd6da.js",
    "revision": "7cbb008edd2922dc7e8644c952f38907"
  },
  {
    "url": "assets/js/63.1b977d1a.js",
    "revision": "30029a41fea36cfcdba0c5d02b58df06"
  },
  {
    "url": "assets/js/64.b44e4b70.js",
    "revision": "1044999ed8577bcfcde145999eff22c2"
  },
  {
    "url": "assets/js/65.79902e12.js",
    "revision": "6f6434e5c7d2f888688145cfa3a6f1c1"
  },
  {
    "url": "assets/js/66.f7ffeb29.js",
    "revision": "b17a85250e6356fd32f4b5e9d80cf51f"
  },
  {
    "url": "assets/js/67.1c2e1d63.js",
    "revision": "4c3d7cecfcfe17c576f448932e5b3266"
  },
  {
    "url": "assets/js/68.131a0a69.js",
    "revision": "ae826d91f58bd271446d7422c1bed949"
  },
  {
    "url": "assets/js/69.a09989e1.js",
    "revision": "3c2b13652c086b23c1143f57158b6eab"
  },
  {
    "url": "assets/js/7.6f9fcd49.js",
    "revision": "ef37a17d43e2e7dd6170793100792f25"
  },
  {
    "url": "assets/js/70.0d375a0a.js",
    "revision": "22161f5ea771a811872e0fbde792cd52"
  },
  {
    "url": "assets/js/71.b2568bb6.js",
    "revision": "048d241ad530e799ebc1dc8c417f93b4"
  },
  {
    "url": "assets/js/72.f05f91bc.js",
    "revision": "be439c90edfd399143025bf7e8a2b13a"
  },
  {
    "url": "assets/js/73.e692f994.js",
    "revision": "e41791344ff10f4e9b35cdfd814c3f96"
  },
  {
    "url": "assets/js/74.8525778f.js",
    "revision": "d0894ba2a4abfc93f09991337130e2ce"
  },
  {
    "url": "assets/js/75.57296136.js",
    "revision": "a3abbd0d998d8cfb5c79d0eff57475f4"
  },
  {
    "url": "assets/js/76.7b3002d6.js",
    "revision": "6d90a529389eccbd75ecf111eebc3a27"
  },
  {
    "url": "assets/js/77.462ef42b.js",
    "revision": "05c12fa802b85ee4a117ce1ffcd045a8"
  },
  {
    "url": "assets/js/78.a3f7e95d.js",
    "revision": "30b15d998df312975cec50e703c0d4ae"
  },
  {
    "url": "assets/js/79.4a04613e.js",
    "revision": "bbc5e37c3d167f35c98c155a461df9e9"
  },
  {
    "url": "assets/js/8.6a9db5f6.js",
    "revision": "a075b0341ca8395667094ff2766c8f37"
  },
  {
    "url": "assets/js/80.665f5a6f.js",
    "revision": "945b40fbb4eea50d415312c26b1702e0"
  },
  {
    "url": "assets/js/81.ec128606.js",
    "revision": "2f226831d864084710024c59925cb636"
  },
  {
    "url": "assets/js/82.acffe8e2.js",
    "revision": "ca34359761c088e9611b079720bd30ac"
  },
  {
    "url": "assets/js/83.4bcdeee1.js",
    "revision": "403934deeb4abbf0e02da150e310533a"
  },
  {
    "url": "assets/js/84.0bd19886.js",
    "revision": "1151836c8eb8d26c4111620d3004dfe2"
  },
  {
    "url": "assets/js/85.deb70807.js",
    "revision": "502efb9894663a06d8901e3e6c3032ad"
  },
  {
    "url": "assets/js/86.6f93ffcd.js",
    "revision": "07031627ebbc3a06f8706d96aa26a138"
  },
  {
    "url": "assets/js/87.8770b836.js",
    "revision": "a70865ee63ff42fab4faae7d91d94993"
  },
  {
    "url": "assets/js/88.35dbaa0c.js",
    "revision": "acfed53f1dd481f693f3d5654302b9ab"
  },
  {
    "url": "assets/js/89.3ceaef63.js",
    "revision": "368d42ba607a88ca09dac219ac65f9f1"
  },
  {
    "url": "assets/js/9.b1be5bd5.js",
    "revision": "776305157ef8c65843f2876e7ab70df3"
  },
  {
    "url": "assets/js/90.2112424a.js",
    "revision": "fc627eef964f7101e92981c82d9326a4"
  },
  {
    "url": "assets/js/91.382c3d56.js",
    "revision": "b7bc13fa2950b0ff23383969bb41665e"
  },
  {
    "url": "assets/js/92.67a20dbe.js",
    "revision": "b0e667e1518aab4a218b696e865b10e0"
  },
  {
    "url": "assets/js/93.06074ad3.js",
    "revision": "5515c88d529f64b981cc7b8af43e02f7"
  },
  {
    "url": "assets/js/94.dd7f341b.js",
    "revision": "43164dc1b1af1bab9ec8257a22f6f2b9"
  },
  {
    "url": "assets/js/95.b80e6408.js",
    "revision": "e4fbaa73c939df7b904b999f8d8ebaa1"
  },
  {
    "url": "assets/js/96.3f095818.js",
    "revision": "b53f2bbc2f08a42809c2cad3d2a73de3"
  },
  {
    "url": "assets/js/97.e10d23b8.js",
    "revision": "24749de0d9ea00398f4620f592775bd7"
  },
  {
    "url": "assets/js/98.333e9a49.js",
    "revision": "1ff627df714e68a5757f2b454a864352"
  },
  {
    "url": "assets/js/99.cb60f729.js",
    "revision": "c706fc1843da846048deab753c8fe350"
  },
  {
    "url": "assets/js/app.dad98e25.js",
    "revision": "9b44a1717f562b5824224e1475a37e07"
  },
  {
    "url": "assets/js/vendors~flowchart.f4a117dd.js",
    "revision": "a9add723f54de64f29ee219d49c6eb45"
  },
  {
    "url": "categories/笔记等/index.html",
    "revision": "01a3c6870dd8bc1a30623a3bbc1dd1f8"
  },
  {
    "url": "categories/笔记等/page/2/index.html",
    "revision": "f7f7e3d57d97ec9781e9ea5a360377d5"
  },
  {
    "url": "categories/电子设计等/index.html",
    "revision": "33c872c76d2e2925c1a3ce45be21bedf"
  },
  {
    "url": "categories/电子设计等/page/2/index.html",
    "revision": "179914e9174580f76a5a804b363c3bc7"
  },
  {
    "url": "categories/计算机技术等/index.html",
    "revision": "713cfd3551e46d65008126de4dc30c9c"
  },
  {
    "url": "categories/计算机技术等/page/2/index.html",
    "revision": "413ac416d3f1f7d283060580067bdd63"
  },
  {
    "url": "categories/算法等/index.html",
    "revision": "3823cc13565639471d78a1169d1c9afa"
  },
  {
    "url": "categories/算法等/page/2/index.html",
    "revision": "56c38d5ab98ad7bce829e504da772277"
  },
  {
    "url": "categories/游戏设计等/index.html",
    "revision": "e0feafac8a4cdc93115d501c9e021130"
  },
  {
    "url": "categories/杂谈/index.html",
    "revision": "4394f2bf62de2c612ff6d72882b9102b"
  },
  {
    "url": "categories/杂谈/page/2/index.html",
    "revision": "5d3345f4995ec254188b35b7aeca4ba0"
  },
  {
    "url": "categories/AI及机器人等/index.html",
    "revision": "f2112368cecd4c16777d3444dd2a8574"
  },
  {
    "url": "categories/AI及机器人等/page/2/index.html",
    "revision": "1f9952267d2ec2b1b4cca3dea394953d"
  },
  {
    "url": "categories/index.html",
    "revision": "c17951cfcee456ada93cef7953365e94"
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
    "url": "img/freetalk/1/1.jpg",
    "revision": "bfc1fa2ec3ce60d2970cdb6d72fd0ba4"
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
    "revision": "e1e92fe334cf2c2ac433362811bb956b"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "c8209619f9a8260aee66ce7691c9f2ad"
  },
  {
    "url": "projects/github.html",
    "revision": "14f207cf872ac8aee990f472230e248f"
  },
  {
    "url": "tag/index.html",
    "revision": "3dc3877d123cafacecd79bf7e9a522fa"
  },
  {
    "url": "tags/比赛/index.html",
    "revision": "99156d4a77e3fb3732f447cf420ddd9f"
  },
  {
    "url": "tags/操作系统os/index.html",
    "revision": "2c1a8b4bf38aa8a07d00fe859703046b"
  },
  {
    "url": "tags/电子设计/index.html",
    "revision": "c6a3fed02bbc861ed60b9d09ea0973a7"
  },
  {
    "url": "tags/机器人/index.html",
    "revision": "b8a2f5bfcab36febf499bc07cafee1f5"
  },
  {
    "url": "tags/机器学习/index.html",
    "revision": "6495661d9e91eab3077151c8877676b1"
  },
  {
    "url": "tags/计算机视觉/index.html",
    "revision": "a2adc355c13db727c06a1d66d62c5270"
  },
  {
    "url": "tags/计算机网络/index.html",
    "revision": "e184bddcc3982050581ff05e07b0be12"
  },
  {
    "url": "tags/开源写字机/index.html",
    "revision": "6b707771b4d6d27db93a459790ded031"
  },
  {
    "url": "tags/量化/index.html",
    "revision": "5e7a657506aa54ee1a9384c74cee86f8"
  },
  {
    "url": "tags/模型部署/index.html",
    "revision": "7267240e0a3406bb0dfe4c36d80656b5"
  },
  {
    "url": "tags/模型部署及加速/index.html",
    "revision": "db7546b584e91d5ef7f39c9002f98803"
  },
  {
    "url": "tags/目标检测/index.html",
    "revision": "d1feca198a9ca4dab8923989eebbf9b6"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "b1382722f09912bd28e95cf4a4eb0466"
  },
  {
    "url": "tags/前端动画/index.html",
    "revision": "a6f32809b07ec95666d61fd5ea56f44f"
  },
  {
    "url": "tags/嵌入式/index.html",
    "revision": "478d3e844634e80ff62fe1cd64ade051"
  },
  {
    "url": "tags/深度学习/index.html",
    "revision": "08f44732344e0ff807993cb4fb51edf2"
  },
  {
    "url": "tags/数据结构与算法/index.html",
    "revision": "e3bd9d4ebabf7768496cf69fd013d6ce"
  },
  {
    "url": "tags/图像处理/index.html",
    "revision": "7f76300a02b6a4e803a33a19d540e092"
  },
  {
    "url": "tags/图像处理/page/2/index.html",
    "revision": "2c9058c80df4bb8c67b222ab9f28c957"
  },
  {
    "url": "tags/网络协议/index.html",
    "revision": "ad3de81cc5a17a18cf97d2e380b26207"
  },
  {
    "url": "tags/文档笔记/index.html",
    "revision": "177a12e05e343e38b21fb616228f9c7a"
  },
  {
    "url": "tags/物联网/index.html",
    "revision": "7eb7fb6e4e33639d9731504d41cb2350"
  },
  {
    "url": "tags/音视频开发/index.html",
    "revision": "2f2a8b2ab1700aa65a2141f96a8c03d6"
  },
  {
    "url": "tags/游戏开发/index.html",
    "revision": "aae6496c673382ac4529863a23cf4844"
  },
  {
    "url": "tags/杂谈/index.html",
    "revision": "08c734ded705270bfc966f8f357a630d"
  },
  {
    "url": "tags/最优化控制/index.html",
    "revision": "5fb0851642a524c8c83203b8333d09ab"
  },
  {
    "url": "tags/Android/index.html",
    "revision": "8e4e96fd695799beb01b4c7ef7aa8f72"
  },
  {
    "url": "tags/bug/index.html",
    "revision": "91e14d1d5dd4a08ae20568f63fbd929f"
  },
  {
    "url": "tags/CI/CD/index.html",
    "revision": "92218d64d843978f6c3ef3eb34ce2ef3"
  },
  {
    "url": "tags/cmake/index.html",
    "revision": "dadada810ff08be8e61683a477e63f7c"
  },
  {
    "url": "tags/cpp/index.html",
    "revision": "9078a4b0e403c83e39056297186a5027"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "3cf88ac942f12f7ada0ae3d56599b581"
  },
  {
    "url": "tags/FPGA/index.html",
    "revision": "2d60361f4b744931f98887bd383e0447"
  },
  {
    "url": "tags/GUI/index.html",
    "revision": "5cf06662481bdba43f6e1c60352e8d44"
  },
  {
    "url": "tags/HarmonyOS/index.html",
    "revision": "216a2e1284134bbdfbe456966f968640"
  },
  {
    "url": "tags/LINUX/index.html",
    "revision": "108a1f0a7eafa4b87e32fb7a776fce17"
  },
  {
    "url": "tags/live2d/index.html",
    "revision": "ea9cf55b818d6a1e4cc0aa46899e6c18"
  },
  {
    "url": "tags/mmpose/index.html",
    "revision": "59462c3acdfb8bc98bf61d450bc12e4a"
  },
  {
    "url": "tags/NLP/index.html",
    "revision": "1caa12e8d6ef9ea6a91d078fdeee8e49"
  },
  {
    "url": "tags/opencv/index.html",
    "revision": "26cd0cc7ab091d4ec0a8ee94642d8e71"
  },
  {
    "url": "tags/pypi/index.html",
    "revision": "562b99ba2f84ce6f0d89449241d875ef"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "1661ba327b7e9799ac6f5f120afbd114"
  },
  {
    "url": "tags/RL/index.html",
    "revision": "185a3cc1637e0017b00be3b75d9e3dc7"
  },
  {
    "url": "tags/ROS/index.html",
    "revision": "6c336b511ddff19443a4d1adb63b5404"
  },
  {
    "url": "tags/slam/index.html",
    "revision": "a984e2dbac5cb5935c79868079fee05e"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "f52ade94aa81c7e915864ecde19b5f33"
  },
  {
    "url": "timeline/index.html",
    "revision": "8011324e5017c2b9d12e503ad0cce598"
  },
  {
    "url": "view/other/comment.png",
    "revision": "6878f2fce5e82c12f91eef87bde8bd2c"
  },
  {
    "url": "views/AI/2020baidustar.html",
    "revision": "acbcd454ba717c0f7d22cf23117a52d6"
  },
  {
    "url": "views/AI/detection.html",
    "revision": "f419ae6f62a6490765073677c9d2fceb"
  },
  {
    "url": "views/AI/guiYolov4.html",
    "revision": "b6df1a808120265842abd958688a155d"
  },
  {
    "url": "views/AI/mmlab/mmpose/00.html",
    "revision": "349c60ba4fe6d753f99921464eca102d"
  },
  {
    "url": "views/AI/photo.html",
    "revision": "e0becfc88195a279c545636005b13a5d"
  },
  {
    "url": "views/AI/RL/curobo.html",
    "revision": "63b7c96036871e5ac0c00a9cb7a555c7"
  },
  {
    "url": "views/AI/RL/env.html",
    "revision": "39a23dbe01b93a2a450e93d3e9a99ebf"
  },
  {
    "url": "views/AI/RL/ppo.html",
    "revision": "4f7831a76ea51c501c32c52cfb6b3236"
  },
  {
    "url": "views/AI/RL/vima.html",
    "revision": "441b1fc8b4dd0bdb0b343f15283bac7f"
  },
  {
    "url": "views/AI/RL/wtw.html",
    "revision": "a304e7d677b9110877a7b4477932e29f"
  },
  {
    "url": "views/AI/taac2021.html",
    "revision": "85f5b6f39ab2ef2f7d65bc1e14de8455"
  },
  {
    "url": "views/AI/tengine/ohosndk0.html",
    "revision": "066c81b3789ebd1a3c03dbf8aa70c304"
  },
  {
    "url": "views/AI/tensorrt/env.html",
    "revision": "bf821e314424db01714088cdd69cc331"
  },
  {
    "url": "views/AI/TextClassification.html",
    "revision": "433411fc363d1fde5ed98af32d08b556"
  },
  {
    "url": "views/AI/tf2.0.html",
    "revision": "be38a85eae94cd2cfcb9271ce16c537b"
  },
  {
    "url": "views/AI/yolo/yolov4.html",
    "revision": "0c2e582b4794b721883d9c9e676d82e3"
  },
  {
    "url": "views/AI/yolo/yolov9_ncnn.html",
    "revision": "448da651ec4f566bc24f2407c9e31c53"
  },
  {
    "url": "views/algorithm/datastructure/queue.html",
    "revision": "5689fb278d3aa2398755c6afb83816da"
  },
  {
    "url": "views/algorithm/datastructure/stack.html",
    "revision": "d61682a42231e16a58f4660ed849d838"
  },
  {
    "url": "views/algorithm/datastructure/trie.html",
    "revision": "72e5130983e70b61ba453608aaf5bcb5"
  },
  {
    "url": "views/algorithm/leetcode/leetcode1.html",
    "revision": "6c6fc0e5dbf6d27c9efc99b0c81e7688"
  },
  {
    "url": "views/algorithm/leetcode/leetcode2.html",
    "revision": "bed895cf9e48183e8ccfb8b71b71f1b5"
  },
  {
    "url": "views/algorithm/opencv/clahe.html",
    "revision": "25a44dbb6b3cdb3acb43952a05290281"
  },
  {
    "url": "views/algorithm/opencv/env.html",
    "revision": "f28d7bb1cdf899d43b812df7e9d261db"
  },
  {
    "url": "views/algorithm/opencv/ImageProcessing.html",
    "revision": "6feb5677581e702a1289d1cb8b8fdd69"
  },
  {
    "url": "views/algorithm/opencv/iqa.html",
    "revision": "135b65abbf22a3dae7c12b4ef24408c7"
  },
  {
    "url": "views/algorithm/opencv/otsu.html",
    "revision": "b9424e4911ca818ae745b5065530404f"
  },
  {
    "url": "views/algorithm/opencv/retinex.html",
    "revision": "5e7afcee66886b775c2577677d0d7859"
  },
  {
    "url": "views/algorithm/ppq/day1.html",
    "revision": "5204fac6d8efca17b8f841cd8288c566"
  },
  {
    "url": "views/algorithm/ppq/day2.html",
    "revision": "d951834dc752af8cb1834cf1dec529ec"
  },
  {
    "url": "views/algorithm/slam/aloam.html",
    "revision": "5ab6bf26e2ee0f330130f30b23189f36"
  },
  {
    "url": "views/algorithm/slam/n0.html",
    "revision": "6ee902e779eb5bff0d96adb46cd561b4"
  },
  {
    "url": "views/algorithm/slam/velyodyne.html",
    "revision": "6fbd5c94cd4753cc3f16fa88a801f266"
  },
  {
    "url": "views/algorithm/slam/vslam_rs.html",
    "revision": "33e110c9897427f0f87ec2802c26080e"
  },
  {
    "url": "views/cs/android/mina.html",
    "revision": "b7dbd4217364f322cc61ad3ec15b3ed5"
  },
  {
    "url": "views/cs/cmake/00.html",
    "revision": "863364abdca8bc9c7b51913bce44d4af"
  },
  {
    "url": "views/cs/cplusplus/c.html",
    "revision": "bc24c1013598e2cc5c2ebfc41aa46f7c"
  },
  {
    "url": "views/cs/ffmpeg/compile.html",
    "revision": "3069d01e8db9c1d69e3c94793451f87b"
  },
  {
    "url": "views/cs/ffmpeg/win_env.html",
    "revision": "4a1a41a29d1b0e44378bb5e64475b5de"
  },
  {
    "url": "views/cs/gtsreamer/py_gst.html",
    "revision": "464eaffe02de622ceafbd69dff0bfd7e"
  },
  {
    "url": "views/cs/gtsreamer/qs.html",
    "revision": "c5b7fe2fb31ad2c430b44848f6d28d72"
  },
  {
    "url": "views/cs/Imagesegmentation.html",
    "revision": "2eab98297af32a41689739d036da9710"
  },
  {
    "url": "views/cs/MFCbmp.html",
    "revision": "6624dcf26030a591c5d3dbc2a7a99774"
  },
  {
    "url": "views/cs/OS/GlimmerOS.html",
    "revision": "685698eec34e4d51d279221c52536895"
  },
  {
    "url": "views/cs/python/note0.html",
    "revision": "c0d6d0cdf9036d46fadce956d51c938a"
  },
  {
    "url": "views/cs/ros/env.html",
    "revision": "7331ecea213aeaa0e2f74762c2ae623d"
  },
  {
    "url": "views/cs/ros/note00.html",
    "revision": "3fd64c0a9f0fbd9732b839a1b0c7fb9b"
  },
  {
    "url": "views/cs/vueblog.html",
    "revision": "e7d0346804b3b8d8e25324a70d5a6a6c"
  },
  {
    "url": "views/ee/ARMcortex/armenv.html",
    "revision": "24ab171f2e6b8e235cfb0d76d3621416"
  },
  {
    "url": "views/ee/ARMcortex/nanopi0.html",
    "revision": "17af9e8f867ed5399f2179ca52bd82bb"
  },
  {
    "url": "views/ee/cubli.html",
    "revision": "a55d28689d154781a2762520924245b5"
  },
  {
    "url": "views/ee/fpga/env.html",
    "revision": "14cc53c87a86f1a825d1a93fa0285d74"
  },
  {
    "url": "views/ee/harmonyos/ohos0.html",
    "revision": "3d35502dc6be16d4cecabe0ffead88d7"
  },
  {
    "url": "views/ee/Humanoid_Robot/hector.html",
    "revision": "d8b162fdf8f07b39532b97020c138df8"
  },
  {
    "url": "views/ee/Humanoid_Robot/LIPM.html",
    "revision": "2cd6bf0e019104b3e965e9f78eadfa8a"
  },
  {
    "url": "views/ee/Humanoid_Robot/uvc.html",
    "revision": "fef2e590da8276807113f8f75ca2bf4f"
  },
  {
    "url": "views/ee/jetson/jetson1.html",
    "revision": "14a725326165e37535bfa4862917e2fb"
  },
  {
    "url": "views/ee/midbot.html",
    "revision": "044356a0211e4b8ac0539cc9c686063b"
  },
  {
    "url": "views/ee/miniBOT.html",
    "revision": "f3e8ab34a099c11433f38c4b724b37d5"
  },
  {
    "url": "views/ee/mpc/introduction.html",
    "revision": "77fce447b4f646d30d3c317c70568ac7"
  },
  {
    "url": "views/ee/mpc/rfmpc.html",
    "revision": "b4b20ac4bafd99dcf3eda5c4e24940e4"
  },
  {
    "url": "views/ee/mpc/trajectory_optimization.html",
    "revision": "ffaf67b986ffdd6e2c2edfb69b776c62"
  },
  {
    "url": "views/ee/quadsdk.html",
    "revision": "91c8ffcd0eded93290dc636edcfe0cdb"
  },
  {
    "url": "views/ee/riscv/gdf103.html",
    "revision": "c1b9683902840ef14e5eff26c1991eed"
  },
  {
    "url": "views/ee/smallB.html",
    "revision": "7a1c962ac69fb84261bc7562d2741a3c"
  },
  {
    "url": "views/ee/star.html",
    "revision": "c8b78dbaabede66b696d5796be97a94d"
  },
  {
    "url": "views/ee/tcostiny/tcos0.html",
    "revision": "3b4be6a5f53f00b9784883989da403d9"
  },
  {
    "url": "views/ee/tinyascen.html",
    "revision": "78053c45e678985e28ca80382e7e45bf"
  },
  {
    "url": "views/freetalk/android.html",
    "revision": "5ffd65655301c174ffcce45a8953e7fa"
  },
  {
    "url": "views/freetalk/cicd/fix.html",
    "revision": "6d642920de632c2532de7d5f3554ddea"
  },
  {
    "url": "views/freetalk/color.html",
    "revision": "fe3d8e0162244d89ba6ce55c92e79cb3"
  },
  {
    "url": "views/freetalk/docker00.html",
    "revision": "d002ed7cd9776067d94d7de63c38d7a9"
  },
  {
    "url": "views/freetalk/Fourier.html",
    "revision": "0289f044cc964a4d42998865a2e6cb70"
  },
  {
    "url": "views/freetalk/ip0.html",
    "revision": "4cda644a0763d9f85f1a28a3e8b6dc35"
  },
  {
    "url": "views/freetalk/picgo.html",
    "revision": "7f977ee67cd8a435862396b97eea8475"
  },
  {
    "url": "views/freetalk/self_improvement.html",
    "revision": "2f9e0eac0b0c6b4b0d2a299a48efa33a"
  },
  {
    "url": "views/freetalk/spider/github.html",
    "revision": "38ac67ef88455b216b145385dbd695b8"
  },
  {
    "url": "views/freetalk/spider/zhihu.html",
    "revision": "634e93a2d87ad4cbfcff1eee52a43039"
  },
  {
    "url": "views/freetalk/teamwork.html",
    "revision": "f972ddce0a8b55d117c21f6b039561c4"
  },
  {
    "url": "views/freetalk/vsc/tools.html",
    "revision": "83444b09fec953101d7244c435e01b1a"
  },
  {
    "url": "views/freetalk/why.html",
    "revision": "53135b9bc336b4e2665e03f36a3a1af1"
  },
  {
    "url": "views/freetalk/wsl2/note.html",
    "revision": "99a0a0c37a98337555f24cc50ada3114"
  },
  {
    "url": "views/freetalk/wsl2/wsl.html",
    "revision": "25e9f84ce9f7c2b30161f05d083d206c"
  },
  {
    "url": "views/freetalk/wsl2/wslg.html",
    "revision": "db93bd6eec81368066ab31238a75fc55"
  },
  {
    "url": "views/game/16.html",
    "revision": "9c54e58d03ff226905c13dbd74ec4e2a"
  },
  {
    "url": "views/game/live2d/weblive2d.html",
    "revision": "747a109751b2b39de9c42b232361f7f9"
  },
  {
    "url": "views/game/unity/AR.html",
    "revision": "bcf109880e2e047d2d91fe5c381ad18b"
  },
  {
    "url": "views/game/vulkan/note0.html",
    "revision": "4ecee931a9607f43266dd63ee97de201"
  },
  {
    "url": "views/index.html",
    "revision": "1b0ac53ef128f5bd76084eb09fe3c326"
  },
  {
    "url": "views/notes/aibug00.html",
    "revision": "7bb4d28280cddba1676b598b543f43a6"
  },
  {
    "url": "views/notes/Edge.html",
    "revision": "fc5ffe8f49f1c7718515a859dcaef5ec"
  },
  {
    "url": "views/notes/git.html",
    "revision": "d4094e8b3af5ee7dd4200220b37ede86"
  },
  {
    "url": "views/notes/Googlebug.html",
    "revision": "86cfcd6a9f1d09dadea62b33d173928a"
  },
  {
    "url": "views/notes/linux.html",
    "revision": "533a001adce1096b797a645a07e4838c"
  },
  {
    "url": "views/notes/linuxbug00.html",
    "revision": "fac6349111d349afdc7bb15868f40e47"
  },
  {
    "url": "views/notes/markdown.html",
    "revision": "8f988bb43c196484b1254e1f121c769a"
  },
  {
    "url": "views/notes/oamnote.html",
    "revision": "1aba62c54f7f161f7013a400be4fea79"
  },
  {
    "url": "views/notes/opencvbug.html",
    "revision": "60c4c3aea47337fa6cdcf1cac4d4254b"
  },
  {
    "url": "views/notes/pycocotools.html",
    "revision": "64d92a506d87a54409fba92faff2b13e"
  },
  {
    "url": "views/notes/pypi.html",
    "revision": "f00a97f3de13680b83d0a639a7b57a4d"
  },
  {
    "url": "views/notes/Pythonbug.html",
    "revision": "d1ae7fd643b490ee0b3ab1d3e9180ec0"
  },
  {
    "url": "views/notes/vim.html",
    "revision": "8a42c088c86d9bb2289576f5e8b36178"
  },
  {
    "url": "views/notes/webbug.html",
    "revision": "c89c13811d4b87d04bbd4e17bfb2a267"
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
