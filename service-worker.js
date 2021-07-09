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
    "revision": "09d533b97f61ec8862f0019b315f2706"
  },
  {
    "url": "aboutme.html",
    "revision": "5109ede1d6f99829f287d97fe406e812"
  },
  {
    "url": "assets/css/0.styles.3bb448d5.css",
    "revision": "18d3f6f0417e4aba47eda96120c5b96e"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.40e49907.svg",
    "revision": "40e499073350c37f960f190956a744d2"
  },
  {
    "url": "assets/img/loading.c38bb4c9.svg",
    "revision": "c38bb4c91362836bff4e41485000be83"
  },
  {
    "url": "assets/js/1.84318436.js",
    "revision": "cb1e61ae2c5bf27e1e93c13b8d9bb656"
  },
  {
    "url": "assets/js/10.1451bde7.js",
    "revision": "fa816dab953c41c864778c780f8bc474"
  },
  {
    "url": "assets/js/11.7015faf5.js",
    "revision": "4f0002e335ccd95da876c5973eea8959"
  },
  {
    "url": "assets/js/12.e2ae3455.js",
    "revision": "19587ef2ff77d87a46a5a5ea851559ce"
  },
  {
    "url": "assets/js/13.e622d1b4.js",
    "revision": "c2c3cd3d8b74a4991dd2f5cd32628cbf"
  },
  {
    "url": "assets/js/14.249b76ae.js",
    "revision": "00e5c058b2eaf9c3a4b33e4f83c49969"
  },
  {
    "url": "assets/js/15.d593d378.js",
    "revision": "45e57cb31bd4a3372a93272dbec2eca7"
  },
  {
    "url": "assets/js/16.35a421fa.js",
    "revision": "d45172f1f7997ec74640c0019d567e36"
  },
  {
    "url": "assets/js/17.6c3031df.js",
    "revision": "6c1b4cf74936e973fec5ab8086b291ce"
  },
  {
    "url": "assets/js/18.003080c0.js",
    "revision": "1dc78a3d2843408344d43b7a3c028d6e"
  },
  {
    "url": "assets/js/19.89a2458d.js",
    "revision": "64e53e84bfebc6c06d78542439499f4a"
  },
  {
    "url": "assets/js/20.4f1a6912.js",
    "revision": "62d16022d7f5c6ff43b7869934317545"
  },
  {
    "url": "assets/js/21.bc01666a.js",
    "revision": "599e4876f112dd55b2de3448b50c3d52"
  },
  {
    "url": "assets/js/22.c57ee10d.js",
    "revision": "fdb9a5ebc338b7ea47ec2f5c30f1b3f9"
  },
  {
    "url": "assets/js/23.665d333a.js",
    "revision": "132b47be8a1e0db6100017a18348bb5d"
  },
  {
    "url": "assets/js/24.1ffdc7f3.js",
    "revision": "a56b56a33dbd3c07d96a5c45440edbdd"
  },
  {
    "url": "assets/js/25.d79885f6.js",
    "revision": "3f15372ff243ffe51e5a58b2dc20f5b8"
  },
  {
    "url": "assets/js/26.f4c676a2.js",
    "revision": "ac8605d4e742be3efabd52f6726eecc0"
  },
  {
    "url": "assets/js/27.74d2412a.js",
    "revision": "86480c16eef84ec80dbf9edd7c8191e8"
  },
  {
    "url": "assets/js/28.ce72c366.js",
    "revision": "3c2669427ea1408cb1aed606915f2f57"
  },
  {
    "url": "assets/js/29.5e24f400.js",
    "revision": "39f9e1276815259bcdd50b9a55d91ac6"
  },
  {
    "url": "assets/js/30.5a2dfcea.js",
    "revision": "f7131cf842011d55f5f907748444f857"
  },
  {
    "url": "assets/js/31.7be64773.js",
    "revision": "c113ea849da2bb857b5383c791d71ffa"
  },
  {
    "url": "assets/js/32.ac8b883a.js",
    "revision": "ae850e686f474ca99c6ecac85c7ff5e4"
  },
  {
    "url": "assets/js/33.40ec7a89.js",
    "revision": "ac71508d4afadf0ec80587738c0b74ae"
  },
  {
    "url": "assets/js/34.af43f495.js",
    "revision": "0bb1f37ff6d7196e757212467e44b448"
  },
  {
    "url": "assets/js/35.5b47e1de.js",
    "revision": "d463e1d3f041a076a0ef5c9bd07d64f5"
  },
  {
    "url": "assets/js/36.31e8ab3f.js",
    "revision": "b06338973c82e4a9a9f281638169c97b"
  },
  {
    "url": "assets/js/37.4e62e81f.js",
    "revision": "3d1403b346e5cda8c769112e6c501a7d"
  },
  {
    "url": "assets/js/38.8ad738c4.js",
    "revision": "91cf21be26bde2b666ea93975bf38a3e"
  },
  {
    "url": "assets/js/39.9fbc9f12.js",
    "revision": "6537fa920500607ecc19c54367cb2a4e"
  },
  {
    "url": "assets/js/4.d86678ca.js",
    "revision": "47856bd9342d33e64a0bef62337b4dce"
  },
  {
    "url": "assets/js/40.1b54d6c9.js",
    "revision": "f9bad71e6addf0f91a8ee024b39303d7"
  },
  {
    "url": "assets/js/41.ab26be0b.js",
    "revision": "8bc28b61c7e4d6550e955262facaf329"
  },
  {
    "url": "assets/js/42.54758084.js",
    "revision": "3cca660d8106ce56e5fa88258998fc4e"
  },
  {
    "url": "assets/js/43.dcd5c9a6.js",
    "revision": "698f224ec26cd9d18325ae13ba1441f8"
  },
  {
    "url": "assets/js/44.b42360b9.js",
    "revision": "ed78123bf0a46675a4983776ae4e5fe2"
  },
  {
    "url": "assets/js/45.a5a1a1fe.js",
    "revision": "2b7b9a13799f695ca2a816ba382e95ed"
  },
  {
    "url": "assets/js/46.184be64c.js",
    "revision": "e2b494fe478379602e3d57fc88d69f2f"
  },
  {
    "url": "assets/js/47.70eada35.js",
    "revision": "c4f4f66570f308b6c58b12cefef8a9c4"
  },
  {
    "url": "assets/js/48.97aa95c3.js",
    "revision": "9bc546282c953783c0d8f7df3a4e8b42"
  },
  {
    "url": "assets/js/49.c94c42f7.js",
    "revision": "f907538f1b99101aa78cf6b9b3c5f525"
  },
  {
    "url": "assets/js/5.fc4dea16.js",
    "revision": "7139c6c4894894c927cea6ed694e4aeb"
  },
  {
    "url": "assets/js/50.21e885d6.js",
    "revision": "931050fa1af680e517228c57a53e1e3e"
  },
  {
    "url": "assets/js/51.6b91e325.js",
    "revision": "3ba05a51d90bfb295f7c0cebfc4aa2ea"
  },
  {
    "url": "assets/js/52.5eef6c64.js",
    "revision": "15a380ee90766de9b43c869eaabeb825"
  },
  {
    "url": "assets/js/53.1208869c.js",
    "revision": "9235baf3681f8669fa75cbc2ea150061"
  },
  {
    "url": "assets/js/54.a271ce47.js",
    "revision": "b310caf3c6366e825f0a4898e59781a4"
  },
  {
    "url": "assets/js/55.e1a5cc41.js",
    "revision": "bad513b2a0f4896a9dc38b96dd4f9188"
  },
  {
    "url": "assets/js/56.7f8000a2.js",
    "revision": "04bcf7acdb2d104c81b54fccb8da9501"
  },
  {
    "url": "assets/js/57.552f1220.js",
    "revision": "fbd64ae99210c9c0c2b8293a890b1eff"
  },
  {
    "url": "assets/js/58.573356d2.js",
    "revision": "82d54f8329935f4e6271d2b10ebb69ce"
  },
  {
    "url": "assets/js/59.41c15622.js",
    "revision": "b55c81d7092b799269fe8a448cfc6fe1"
  },
  {
    "url": "assets/js/6.936ff5fb.js",
    "revision": "70802913813b258ef0f2b9c81855d9a2"
  },
  {
    "url": "assets/js/60.d346ffbb.js",
    "revision": "91b1a6e61efa3f7158f32f9903a05f28"
  },
  {
    "url": "assets/js/61.97addd82.js",
    "revision": "6aaed04b3e80ab0d9d404b8da6e2417a"
  },
  {
    "url": "assets/js/62.9ca0b54d.js",
    "revision": "6f71061c6d56d0917753507647df5938"
  },
  {
    "url": "assets/js/63.ad5615fd.js",
    "revision": "5e2ba91a0543f7ae2677ec5bdd50c01c"
  },
  {
    "url": "assets/js/64.63b780ee.js",
    "revision": "4ec1ff597287187e6513b7753584cf7d"
  },
  {
    "url": "assets/js/65.fc276338.js",
    "revision": "1ab582f5ed16bbcef9e87893ff91e5bc"
  },
  {
    "url": "assets/js/66.bec9afcb.js",
    "revision": "9b8824fe550c314d28891cc31ca75dd3"
  },
  {
    "url": "assets/js/67.ff7a1f3d.js",
    "revision": "63e88a1e9ff8f48f00ba274336cdc4dc"
  },
  {
    "url": "assets/js/68.c3a71595.js",
    "revision": "e9694afbc5ff3ce8fc4573d7f37f2040"
  },
  {
    "url": "assets/js/69.7a60be61.js",
    "revision": "f896c6a22d8e5905ef341c2e21aa8068"
  },
  {
    "url": "assets/js/7.e5d67b8e.js",
    "revision": "cfac89ae817f05969a1c5d7237b72bef"
  },
  {
    "url": "assets/js/70.5bba8742.js",
    "revision": "c501360689b4ad3ad7f0a90e031893a0"
  },
  {
    "url": "assets/js/8.e3dc7109.js",
    "revision": "9cd25ed5144cc9656dab0705e244ac1f"
  },
  {
    "url": "assets/js/9.cae61bf8.js",
    "revision": "34ad9156f7c75c043310c50e67e81fc7"
  },
  {
    "url": "assets/js/app.45d1b639.js",
    "revision": "71f490804fc10599f80254189df34cf7"
  },
  {
    "url": "assets/js/vendors~flowchart.6da9b285.js",
    "revision": "629f1b9d9419f774426877b781538044"
  },
  {
    "url": "categories/AI及大数据类/index.html",
    "revision": "06ec284794813e7fee5f00e2f18b67fa"
  },
  {
    "url": "categories/index.html",
    "revision": "81ebda4bc100d765a507af71b707f581"
  },
  {
    "url": "categories/杂谈/index.html",
    "revision": "0cda93782b923ff0f9ae88ded8fe958a"
  },
  {
    "url": "categories/游戏设计类/index.html",
    "revision": "2e7ea4252edb7c045d80b76cbb21ed31"
  },
  {
    "url": "categories/电子设计类/index.html",
    "revision": "f999e155f688328a75414a40e6bd4e43"
  },
  {
    "url": "categories/电子设计类/page/2/index.html",
    "revision": "b736ef63565a19d8d616ebd007de4849"
  },
  {
    "url": "categories/笔记类/index.html",
    "revision": "c8fabe2430f36332afe07cf286e8b85a"
  },
  {
    "url": "categories/算法类/index.html",
    "revision": "e9f135389cc7fbdaceb36a657ba93a9b"
  },
  {
    "url": "categories/计算机技术类/index.html",
    "revision": "068c19feddc78be94cefa6768287375c"
  },
  {
    "url": "Headimage.jpg",
    "revision": "45d67f880eb19be09aabb3161cb0dee3"
  },
  {
    "url": "iconfont/iconfont.css",
    "revision": "c8b00d812608bf98f806b55fa4140795"
  },
  {
    "url": "iconfont/iconfont.eot",
    "revision": "0fe2ea06e44b4c5586cd81edfb62fa67"
  },
  {
    "url": "iconfont/iconfont.svg",
    "revision": "40e499073350c37f960f190956a744d2"
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
    "url": "images.png",
    "revision": "6bc165218f8ede7e3846020dc1440f36"
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
    "revision": "2b5d34e9638d0c33d6bd8d8115e75842"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "projects/github.html",
    "revision": "12e35e51bde2a186b60260ddfc95c06c"
  },
  {
    "url": "tag/index.html",
    "revision": "7769ae5c04ee8d553bd00be0ff0ee1a0"
  },
  {
    "url": "tags/Android/index.html",
    "revision": "860f29a14e27c7287d7ff91fd7b13d30"
  },
  {
    "url": "tags/bug/index.html",
    "revision": "3e317051820ebbf53d4ab3cf268a7b9b"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "3d91678bbb8301f3651a4814c80d2bd4"
  },
  {
    "url": "tags/FPGA/index.html",
    "revision": "41e66f33fab2776cffdf80d7ae6e3b42"
  },
  {
    "url": "tags/GUI/index.html",
    "revision": "b257a4e74d10225e547e7db89b4a7183"
  },
  {
    "url": "tags/HarmonyOS/index.html",
    "revision": "521c237d96b7313e23261591730eb27b"
  },
  {
    "url": "tags/LINUX/index.html",
    "revision": "31bdf8bc2371ee4ab69b342fd5fc41c2"
  },
  {
    "url": "tags/NLP/index.html",
    "revision": "fef577e4f8b77ac36fba092247d85dd4"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "704477abad82d7954350f4fc68bf2652"
  },
  {
    "url": "tags/前端动画/index.html",
    "revision": "42b9c513b68c6de1f47e83027059d744"
  },
  {
    "url": "tags/图像处理/index.html",
    "revision": "d143bcc8c4f0fc2fcc715e48830e233f"
  },
  {
    "url": "tags/嵌入式/index.html",
    "revision": "a60347bee26abbef58ccf0e32a1f77ff"
  },
  {
    "url": "tags/开源写字机/index.html",
    "revision": "a66d4acb17bc2638b9ada15ba008b064"
  },
  {
    "url": "tags/操作系统os/index.html",
    "revision": "70a7426a3b7c1407a60c161019df1c09"
  },
  {
    "url": "tags/数据结构与算法/index.html",
    "revision": "ef12119e791269a973293f66ad9e3753"
  },
  {
    "url": "tags/文档笔记/index.html",
    "revision": "c27bc0dfb4a2e33c907a26a3c35d4f5f"
  },
  {
    "url": "tags/智能车/index.html",
    "revision": "62cf3563f6edc6e234e36599bd760754"
  },
  {
    "url": "tags/机器人/index.html",
    "revision": "d8e7ab5cff19a68346d7b233cdd1765e"
  },
  {
    "url": "tags/机器学习/index.html",
    "revision": "eb9d54455957023f1780f5d75df393de"
  },
  {
    "url": "tags/杂谈/index.html",
    "revision": "a0872e5f484c03a778f39609482e8a43"
  },
  {
    "url": "tags/模型部署及加速/index.html",
    "revision": "682c26217aaf042eac5ddd73b9925a4c"
  },
  {
    "url": "tags/比赛/index.html",
    "revision": "e6dd74c23c4c29ac3a1a0206ead852be"
  },
  {
    "url": "tags/深度学习/index.html",
    "revision": "4a80943469d5b08a8ed87a040b12843c"
  },
  {
    "url": "tags/游戏开发/index.html",
    "revision": "f0a3c70d6aedcc9cd566c5d36eca82c9"
  },
  {
    "url": "tags/物联网/index.html",
    "revision": "346b91ab64b4370cb11842fa04a25c6b"
  },
  {
    "url": "tags/电子设计/index.html",
    "revision": "06451ec3a9407c7f05fb10d39fcac3c0"
  },
  {
    "url": "tags/目标检测/index.html",
    "revision": "fc433f2a721356cac38ddf4f370e3566"
  },
  {
    "url": "tags/网络协议/index.html",
    "revision": "9051479e46708b71c94dc21e9b3ee280"
  },
  {
    "url": "tags/计算机视觉/index.html",
    "revision": "bd63e1bf2da1a4791bb32506e6a965a7"
  },
  {
    "url": "tags/计算机网络/index.html",
    "revision": "6e9c107f3f439d7efaafad504a507edd"
  },
  {
    "url": "timeline/index.html",
    "revision": "babbb8b659c8560b847a81fbfe05355e"
  },
  {
    "url": "views/AI/2020baidustar.html",
    "revision": "5306cccf6a5ad1e964f71b2d29d93b90"
  },
  {
    "url": "views/AI/aione.html",
    "revision": "5c438243a183b75ed215f9e921509d2b"
  },
  {
    "url": "views/AI/detection.html",
    "revision": "80653d9026deb982edd8b5508fdb2bd4"
  },
  {
    "url": "views/AI/taac2021.html",
    "revision": "760731697dbdb7bd1f61e8a0a1511110"
  },
  {
    "url": "views/AI/tengine/ohosndk0.html",
    "revision": "009bb2d497d1aaf99fa203ca57548f91"
  },
  {
    "url": "views/AI/TextClassification.html",
    "revision": "d3d0a84b578fd7f4c9808e3533a1a076"
  },
  {
    "url": "views/algorithm/clahe.html",
    "revision": "54a6c08acae87cdc3aeccbdb49050cc2"
  },
  {
    "url": "views/algorithm/ImageProcessing.html",
    "revision": "89ef5137286176605b99df22584dab77"
  },
  {
    "url": "views/algorithm/leetcode1.html",
    "revision": "196e8c67696a873996df862eca5ec96d"
  },
  {
    "url": "views/algorithm/otsu.html",
    "revision": "d63c33a653a8571a6701aa3e1a654764"
  },
  {
    "url": "views/algorithm/retinex.html",
    "revision": "af31f1f96ca0ea0b59d88677a50d622e"
  },
  {
    "url": "views/cs/guiYolov4.html",
    "revision": "3161b298276ecea1b1244b230454f3f7"
  },
  {
    "url": "views/cs/Imagesegmentation.html",
    "revision": "14ae34562efb92dc906477cd9e5bfd96"
  },
  {
    "url": "views/cs/MFCbmp.html",
    "revision": "f98da12b6dbcf269305882dfa2553806"
  },
  {
    "url": "views/cs/OS/GlimmerOS.html",
    "revision": "87b22e9cb56888e0a29e0d183e53b396"
  },
  {
    "url": "views/cs/photo.html",
    "revision": "ac601a0f26edf5873f97792477b5d3c6"
  },
  {
    "url": "views/cs/vueblog.html",
    "revision": "c4db5e56158f147ccb0b0a06a8390fb0"
  },
  {
    "url": "views/cs/yolov4.html",
    "revision": "f47a59671a79b98b57d9b2885ea8f484"
  },
  {
    "url": "views/ee/ARMcortex/armenv.html",
    "revision": "8c3724cca4490c4a90d027a2dd1aad05"
  },
  {
    "url": "views/ee/ARMcortex/nanopi0.html",
    "revision": "fdbe23f90c06159549dea622e1857142"
  },
  {
    "url": "views/ee/cubli.html",
    "revision": "307cfb499b8800257fb791ed1958ce2f"
  },
  {
    "url": "views/ee/cxv/start.html",
    "revision": "2060dc96f1ece6a4dad2b2d921701062"
  },
  {
    "url": "views/ee/fpga/env.html",
    "revision": "66089192c4158f4ee5de3bcfa1dc5648"
  },
  {
    "url": "views/ee/harmonyos/ohos0.html",
    "revision": "9650a3c690195db8e729550cd4f4d9ad"
  },
  {
    "url": "views/ee/midbot.html",
    "revision": "c12ef436846e4c935dd5a6680fb3088f"
  },
  {
    "url": "views/ee/miniBOT.html",
    "revision": "4bd3ced6b4264b7c21fdee882e4eeeda"
  },
  {
    "url": "views/ee/riscv/gdf103.html",
    "revision": "f401a43da0bb67d5ca1e519b8799f7ce"
  },
  {
    "url": "views/ee/smallB.html",
    "revision": "add3af62798745d7b6683cae3043abbc"
  },
  {
    "url": "views/ee/star.html",
    "revision": "4a7028fdf243d21afe51db657cc15e97"
  },
  {
    "url": "views/ee/tcostiny/tcos0.html",
    "revision": "599899122c0833224e5d37743944f851"
  },
  {
    "url": "views/ee/tinyascen.html",
    "revision": "c2b345afacfbe5ed4bf58178500a216a"
  },
  {
    "url": "views/freetalk/android.html",
    "revision": "08bb5fbb8ab5e1f3723a9eb2ea449154"
  },
  {
    "url": "views/freetalk/color.html",
    "revision": "c6c90d227386bae9124f97d2f9e954c8"
  },
  {
    "url": "views/freetalk/docker00.html",
    "revision": "92bf8f44c789a0f8d8abe2018c60fc0a"
  },
  {
    "url": "views/freetalk/Fourier.html",
    "revision": "1947bb47b1a55da5ecdb16331bdf20ef"
  },
  {
    "url": "views/freetalk/ip0.html",
    "revision": "071ee8a2785d2b7b813697f9b5e1733e"
  },
  {
    "url": "views/freetalk/picgo.html",
    "revision": "8f7f46ba98d5012570bf8fe2b065cae4"
  },
  {
    "url": "views/freetalk/why.html",
    "revision": "6b1620f3ee9a8cbbfe2287236fe257e2"
  },
  {
    "url": "views/freetalk/wsl.html",
    "revision": "f553c4d74604dd5c2a53420ca5e6c953"
  },
  {
    "url": "views/game/16.html",
    "revision": "b558e293c10749608ebde4010213eb4d"
  },
  {
    "url": "views/index.html",
    "revision": "4a57d1dd323660d4a6d3bdb9c2f686c5"
  },
  {
    "url": "views/notes/aibug00.html",
    "revision": "18cdbb1bb643f50f4fcc24fb6adae396"
  },
  {
    "url": "views/notes/bug00.html",
    "revision": "6a0f89b9ad2116f6ff024bc6363725a2"
  },
  {
    "url": "views/notes/Edge.html",
    "revision": "8a103d1858e25e94f32c3adf71fcf0f1"
  },
  {
    "url": "views/notes/git.html",
    "revision": "3db21cb8eb1a23692e9612be1fe6f9cb"
  },
  {
    "url": "views/notes/Googlebug.html",
    "revision": "8632c9a05ef18fedcf669c4fed88ef67"
  },
  {
    "url": "views/notes/linux.html",
    "revision": "d74cf96ec4b30fd52635bed0382f0594"
  },
  {
    "url": "views/notes/markdown.html",
    "revision": "88e4b01723af729c69946536fc640059"
  },
  {
    "url": "views/notes/oamnote.html",
    "revision": "16b6c9c2db5361c4076b65b15ae5fffe"
  },
  {
    "url": "views/notes/Pythonbug.html",
    "revision": "3aa80ed47b1ce78d3d236496f8bf6139"
  },
  {
    "url": "views/notes/vim.html",
    "revision": "eabeaffe778626bbe84041e62adf5d9a"
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
