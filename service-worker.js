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
    "revision": "d0a99abfa499ca138de2edc7704c2d95"
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
    "url": "assets/js/100.a21e38f4.js",
    "revision": "a6fa2367487498b6aa038e09eb0e12a1"
  },
  {
    "url": "assets/js/101.6bd0e070.js",
    "revision": "23ea47a5fd91bd37b5931e2ed7ba8d80"
  },
  {
    "url": "assets/js/102.18112286.js",
    "revision": "89bdcfcbac2fd974180a16660ac8af74"
  },
  {
    "url": "assets/js/103.55c3fa7f.js",
    "revision": "a23cbf8ebb371e391b07dce94443c086"
  },
  {
    "url": "assets/js/104.09487a09.js",
    "revision": "0cb671823728838be228e65bfb062123"
  },
  {
    "url": "assets/js/105.705c42fb.js",
    "revision": "b2a615e85ffd29285359210b612a7c00"
  },
  {
    "url": "assets/js/106.04f36aba.js",
    "revision": "aa98dd08dfaaa53d65ae6b53413325ac"
  },
  {
    "url": "assets/js/107.90369584.js",
    "revision": "98d18de1fc396ad1cad05cdad2de779b"
  },
  {
    "url": "assets/js/108.1810d497.js",
    "revision": "5acb8a2d25e4ddd72dd0582c0134fba2"
  },
  {
    "url": "assets/js/109.99149e5d.js",
    "revision": "d7460f82c4aa5ef25172f71ee304c36c"
  },
  {
    "url": "assets/js/11.875fc3e6.js",
    "revision": "b0c94f3cf762be3a12ca79a3c2cc69c1"
  },
  {
    "url": "assets/js/110.51e13d39.js",
    "revision": "08c95ad60fa4327188e6c899148c5115"
  },
  {
    "url": "assets/js/111.cc3f511d.js",
    "revision": "d1624f99fcfd96d64763fa861d7de5cf"
  },
  {
    "url": "assets/js/112.4f7fa3a1.js",
    "revision": "4f0cbd710faa3db57484e67c91aa6b0d"
  },
  {
    "url": "assets/js/113.605b3316.js",
    "revision": "a0bf9e499a4bb5c5a3ffe00e0d3e5b0d"
  },
  {
    "url": "assets/js/114.271af660.js",
    "revision": "ae4b64566fa73b61351210d933cfa3b3"
  },
  {
    "url": "assets/js/115.c844bcb5.js",
    "revision": "ab855789e861c40486d10b96f1416055"
  },
  {
    "url": "assets/js/116.6057fccd.js",
    "revision": "f9cb2a55b13c70fbc0ce3da8e319224b"
  },
  {
    "url": "assets/js/117.d9c5693e.js",
    "revision": "3f9177361b4240725aafcfe3962dace2"
  },
  {
    "url": "assets/js/118.b488827e.js",
    "revision": "aed26735bca09a270a26f613c265b441"
  },
  {
    "url": "assets/js/119.7a8cd137.js",
    "revision": "a9d6cef84ea3cf2b45d83e28d806d71c"
  },
  {
    "url": "assets/js/12.b4d2682c.js",
    "revision": "f9585fc1b92f501bd25b858b623ba3aa"
  },
  {
    "url": "assets/js/120.7091c6ab.js",
    "revision": "db6158f9f47e596b960b1d3c46fb9b7c"
  },
  {
    "url": "assets/js/121.df8d11ff.js",
    "revision": "74cad12ffe283baebb51123886d9736b"
  },
  {
    "url": "assets/js/122.02bbd18c.js",
    "revision": "200a7df6b93016f9f59fdd2667d14d92"
  },
  {
    "url": "assets/js/123.ed27d711.js",
    "revision": "92dba77850e3368a2f091a3b784ecf8a"
  },
  {
    "url": "assets/js/124.c794a422.js",
    "revision": "af7c34b7c94f8d9cdd1bfc70ad2ded82"
  },
  {
    "url": "assets/js/125.79465692.js",
    "revision": "5f11511b246b6920cebf6640542dd1b2"
  },
  {
    "url": "assets/js/126.d1e98e85.js",
    "revision": "c713180a00214414b0b9137e86794ffd"
  },
  {
    "url": "assets/js/127.6b9d1dc0.js",
    "revision": "82776ec093540df866484d1e9c9658c4"
  },
  {
    "url": "assets/js/128.3cbd3d27.js",
    "revision": "0e098e8c59d5d09f7fb950ec6312fe86"
  },
  {
    "url": "assets/js/129.78ec29aa.js",
    "revision": "288d86fde582e5efc187a88152f1b95a"
  },
  {
    "url": "assets/js/13.4cdaf2d2.js",
    "revision": "1907aff1bbd3e7ea8a873146a1fe3b66"
  },
  {
    "url": "assets/js/130.2bcc867d.js",
    "revision": "85a7bc702addc46e20e26c26ea0f0978"
  },
  {
    "url": "assets/js/131.dd5392b9.js",
    "revision": "c6df1a36fe9b5ef70f6cdf06bbe65b86"
  },
  {
    "url": "assets/js/132.b05a476f.js",
    "revision": "76638b1c517bf021233cd73fc1e87a9c"
  },
  {
    "url": "assets/js/133.f1c1d872.js",
    "revision": "1260935ba4bd8b20d0ea15c6d8699977"
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
    "url": "assets/js/19.e8a30c63.js",
    "revision": "91a5a53ad25e5e502949debbcffc30cb"
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
    "url": "assets/js/23.18d620a1.js",
    "revision": "3245304ecfcf3a68c633d0027ce56b7c"
  },
  {
    "url": "assets/js/24.81075dfa.js",
    "revision": "1a40fccf19beb6ccadfc9797811bc946"
  },
  {
    "url": "assets/js/25.6ea440a6.js",
    "revision": "afceaac0659aa7443c7d03abba655ba0"
  },
  {
    "url": "assets/js/26.ccdd9dad.js",
    "revision": "dd5204c508d6e207226e1c630ce70be5"
  },
  {
    "url": "assets/js/27.079c0040.js",
    "revision": "6fc019c8d28dea177efad990b7aea236"
  },
  {
    "url": "assets/js/28.c31129f2.js",
    "revision": "9ed06c201882ab10622890e1ca38083b"
  },
  {
    "url": "assets/js/29.b848c837.js",
    "revision": "b9cb6a391bdb24767cb3ed4da35381a0"
  },
  {
    "url": "assets/js/30.89c99e89.js",
    "revision": "af07d2fd15b6ba8109889da412e303d8"
  },
  {
    "url": "assets/js/31.34e143c0.js",
    "revision": "ed61b7e77c2738eb3e22705099412d9f"
  },
  {
    "url": "assets/js/32.c6e080bc.js",
    "revision": "7995a9b349e5c6b0e852f191b47cf3ff"
  },
  {
    "url": "assets/js/33.5b3ec9cf.js",
    "revision": "4147fb75f697de6ab3e8b6b6cf450763"
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
    "url": "assets/js/36.299fb4f9.js",
    "revision": "003a667f2bc336d566728ba2108e0986"
  },
  {
    "url": "assets/js/37.c7389b7c.js",
    "revision": "1f2e4cc1752bed2560fe74fab8046824"
  },
  {
    "url": "assets/js/38.14e9f998.js",
    "revision": "ec9a29695bc367d1f7ca940df9c1cb11"
  },
  {
    "url": "assets/js/39.ac244cf5.js",
    "revision": "a1cb8a12d5338cb29e0aba5a77c90334"
  },
  {
    "url": "assets/js/40.6d1861c1.js",
    "revision": "266770e7ec36ebbab830ba7d89b33f3e"
  },
  {
    "url": "assets/js/41.9468a731.js",
    "revision": "dae61e78e9a10ee4d5491e955d8c92c0"
  },
  {
    "url": "assets/js/42.3a494f7f.js",
    "revision": "c6aba381804f57e63aae7168cc1a80ed"
  },
  {
    "url": "assets/js/43.da377ed9.js",
    "revision": "59894de9ad92a2ed72bc1dd3e49b98f7"
  },
  {
    "url": "assets/js/44.f9b8f675.js",
    "revision": "bf122f3618661cbfafbede3cbbdfdf20"
  },
  {
    "url": "assets/js/45.939ae9b6.js",
    "revision": "8f7dfe10d56f0339ee7e93edde7a2856"
  },
  {
    "url": "assets/js/46.e39d1543.js",
    "revision": "5eed53062163dbb7489ed47a1779d7e8"
  },
  {
    "url": "assets/js/47.f478559d.js",
    "revision": "61c46b9bd70aa7a9e55431e7b5a92574"
  },
  {
    "url": "assets/js/48.581fcbe3.js",
    "revision": "08094bfb9e8c7f74bec7ead0338606e9"
  },
  {
    "url": "assets/js/49.349f2b2d.js",
    "revision": "27faeda386be4f7b0590f68203a9938c"
  },
  {
    "url": "assets/js/5.1e50d71f.js",
    "revision": "694cbf3374e52b1cafb4a78305fb488b"
  },
  {
    "url": "assets/js/50.64f3775e.js",
    "revision": "e0d65129ea918f8f8c1bbc1fe8e0fa01"
  },
  {
    "url": "assets/js/51.f2afcf4e.js",
    "revision": "ca8597deb34cf571e9b76e459b156815"
  },
  {
    "url": "assets/js/52.64e0762d.js",
    "revision": "4228bdd0cdaa5d39767562adde01e6e1"
  },
  {
    "url": "assets/js/53.c1034999.js",
    "revision": "5eeb860dd70c5ebab6ed9428484dc770"
  },
  {
    "url": "assets/js/54.0aa9fca3.js",
    "revision": "22eb4f5c241b32fcfa504d0b76c406d7"
  },
  {
    "url": "assets/js/55.8d494529.js",
    "revision": "9d10c7d63115fdfec8d0008dd21000d9"
  },
  {
    "url": "assets/js/56.68467c67.js",
    "revision": "f5adfc9ddcbf45b541a5e2eac040d25c"
  },
  {
    "url": "assets/js/57.797b3cb5.js",
    "revision": "f5b31b9e59f5ee51b5811fbf2532229b"
  },
  {
    "url": "assets/js/58.9f846d99.js",
    "revision": "356c769d9ff837622d32e0614734112e"
  },
  {
    "url": "assets/js/59.51128194.js",
    "revision": "f4d0abef2d1face6c09f61b51b43d186"
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
    "url": "assets/js/61.f7204d8f.js",
    "revision": "846423406b2722b0c9a1984bf757c841"
  },
  {
    "url": "assets/js/62.080a5344.js",
    "revision": "ad4fb705c89bc95803a6b235f78fa0f7"
  },
  {
    "url": "assets/js/63.99906644.js",
    "revision": "4c324925d100b795c9129a3b9b9c2ff6"
  },
  {
    "url": "assets/js/64.4408c44b.js",
    "revision": "91401d0b7ee4c242fae02000f2ee2a1f"
  },
  {
    "url": "assets/js/65.187f85e2.js",
    "revision": "8612e35dfdfe68f2ca1bf32ab18957d0"
  },
  {
    "url": "assets/js/66.0606d0a6.js",
    "revision": "2a3eaf87e89c12ea98a1aab7dcef46fa"
  },
  {
    "url": "assets/js/67.cf5024f4.js",
    "revision": "30a90e8aebb465f89aae5281b5f65e04"
  },
  {
    "url": "assets/js/68.41ccaffa.js",
    "revision": "eb149bc366df5c5f8232ba5a562a4dd1"
  },
  {
    "url": "assets/js/69.07c29b82.js",
    "revision": "ce2dd0c6ba3b410227497faf6bec1702"
  },
  {
    "url": "assets/js/7.6f9fcd49.js",
    "revision": "ef37a17d43e2e7dd6170793100792f25"
  },
  {
    "url": "assets/js/70.8480b58d.js",
    "revision": "d87057588d894d5b4b1fec34fe10232b"
  },
  {
    "url": "assets/js/71.9b8ee716.js",
    "revision": "97cc91017d3260dffbaeb6f5abb73afb"
  },
  {
    "url": "assets/js/72.faa30c12.js",
    "revision": "d986798bbfe210030acdc23208dca595"
  },
  {
    "url": "assets/js/73.185c7075.js",
    "revision": "a6bdd029ea0af817d37ffc62534ed104"
  },
  {
    "url": "assets/js/74.11102f97.js",
    "revision": "66e4453543a74f742b76c5a7c237e63b"
  },
  {
    "url": "assets/js/75.51c5c30d.js",
    "revision": "b25fdd345b862386523bc1a90aa08757"
  },
  {
    "url": "assets/js/76.551e2a22.js",
    "revision": "f7caeb76071603163443112850fd9a20"
  },
  {
    "url": "assets/js/77.c3d998c8.js",
    "revision": "8be986afe6d6b1d0cc9824494a0cba73"
  },
  {
    "url": "assets/js/78.7468d053.js",
    "revision": "9da073af36b5af65c3d15e52d3b5feb4"
  },
  {
    "url": "assets/js/79.39b02bbf.js",
    "revision": "b50bd76cfd38ec27ae0bd6d8c9a9b7ce"
  },
  {
    "url": "assets/js/8.6a9db5f6.js",
    "revision": "a075b0341ca8395667094ff2766c8f37"
  },
  {
    "url": "assets/js/80.40101caa.js",
    "revision": "a49149dce0ecb68b6e9471d6de9e1716"
  },
  {
    "url": "assets/js/81.3072a0b9.js",
    "revision": "4ba1e5c2d8cc06150d1562d1237a7dad"
  },
  {
    "url": "assets/js/82.b0d04f22.js",
    "revision": "68b8b39d0aef534bd2e23147688b629a"
  },
  {
    "url": "assets/js/83.49f9b09a.js",
    "revision": "4e80806e243fc30371bb04a0e8a7d73b"
  },
  {
    "url": "assets/js/84.a4e66c57.js",
    "revision": "f04b794fec91c35881501f0f8af6cc57"
  },
  {
    "url": "assets/js/85.8d32d7be.js",
    "revision": "71f17f60d76eee15a97848d57e3098fd"
  },
  {
    "url": "assets/js/86.e37f8b4d.js",
    "revision": "b4e265c1fc4332b12c6d11797babe1e0"
  },
  {
    "url": "assets/js/87.a608dcd0.js",
    "revision": "c6137284313005bfb35f2001ea239230"
  },
  {
    "url": "assets/js/88.b83b20f7.js",
    "revision": "1d2929dbb2d70b5787f476e58dfdeb24"
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
    "url": "assets/js/90.3ddd64a9.js",
    "revision": "3f561644f758630d60896eacf3d311ab"
  },
  {
    "url": "assets/js/91.a3327b97.js",
    "revision": "ad70e67a7e0eb372ee0e6a0dde56ddde"
  },
  {
    "url": "assets/js/92.5033bfaa.js",
    "revision": "d31a1f3ca2ee1d0aade247d7fdfca5b7"
  },
  {
    "url": "assets/js/93.b8810822.js",
    "revision": "7312c1f7270cf75f5ecfe72fe51e0ec7"
  },
  {
    "url": "assets/js/94.351a73e2.js",
    "revision": "bcd101946f78f00b07470a2126fbbea8"
  },
  {
    "url": "assets/js/95.f4370f43.js",
    "revision": "f1bf8dbb919ea127f03f31a6fdc1be40"
  },
  {
    "url": "assets/js/96.958e40d1.js",
    "revision": "ce65c09c3d67011b5a486a430457c09a"
  },
  {
    "url": "assets/js/97.659592f8.js",
    "revision": "e199474a2861b97c3c5bf855240a684d"
  },
  {
    "url": "assets/js/98.ed2faa63.js",
    "revision": "54687f8678f0735d664d894a9eeb1a1b"
  },
  {
    "url": "assets/js/99.4819a778.js",
    "revision": "ad3a12df794293cb3713566b70a543eb"
  },
  {
    "url": "assets/js/app.49083b88.js",
    "revision": "8365450bab2d0f2f11068894c251ab12"
  },
  {
    "url": "assets/js/vendors~flowchart.f4a117dd.js",
    "revision": "a9add723f54de64f29ee219d49c6eb45"
  },
  {
    "url": "categories/笔记等/index.html",
    "revision": "c855a978795c3d01de575f327fbd54f3"
  },
  {
    "url": "categories/笔记等/page/2/index.html",
    "revision": "28016c1a26866abf9cf4e6e77e82ffe4"
  },
  {
    "url": "categories/电子设计等/index.html",
    "revision": "5a3f738272080f687daad1132f981eda"
  },
  {
    "url": "categories/电子设计等/page/2/index.html",
    "revision": "00a4957fc93f4f5875bf6ab623f1956c"
  },
  {
    "url": "categories/计算机技术等/index.html",
    "revision": "a45e918a623a4f95b0005e3864da31e5"
  },
  {
    "url": "categories/计算机技术等/page/2/index.html",
    "revision": "a29a1ce1a3935af86f5476e11da88d5c"
  },
  {
    "url": "categories/算法等/index.html",
    "revision": "3b80b808d21fdd29871a1639643af35b"
  },
  {
    "url": "categories/算法等/page/2/index.html",
    "revision": "8e64a135064318697be7613fc9f7bea3"
  },
  {
    "url": "categories/游戏设计等/index.html",
    "revision": "bf1d0a0ab13f03466ce7e1a73a237e87"
  },
  {
    "url": "categories/杂谈/index.html",
    "revision": "e1d97ece4dd15e85df67090a44531d1b"
  },
  {
    "url": "categories/杂谈/page/2/index.html",
    "revision": "9891f8eac3d509284ddc3f80cc2d0f29"
  },
  {
    "url": "categories/AI及机器人等/index.html",
    "revision": "ac689839788449725311721effc0e048"
  },
  {
    "url": "categories/AI及机器人等/page/2/index.html",
    "revision": "876f84d1623b8b4e8bfee6b5089718c7"
  },
  {
    "url": "categories/index.html",
    "revision": "b5ecc03ed1fccab1775877eeeb15c232"
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
    "revision": "276ef9778861e9e95947050faa76685c"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "c8209619f9a8260aee66ce7691c9f2ad"
  },
  {
    "url": "projects/github.html",
    "revision": "b27702c2dc83e3ad5b9bfdc4b254e6ce"
  },
  {
    "url": "tag/index.html",
    "revision": "0404e204ebb8bf126411f77b22c0059d"
  },
  {
    "url": "tags/比赛/index.html",
    "revision": "3f7bfb0dd20b27d4dc3345af11dfd2df"
  },
  {
    "url": "tags/编解码器/index.html",
    "revision": "e3d53f13397bf6e6c3086aef928cfa3b"
  },
  {
    "url": "tags/操作系统os/index.html",
    "revision": "6ca9ef847a4789c0b51823b3ee6097dc"
  },
  {
    "url": "tags/电子设计/index.html",
    "revision": "2ee16fe62b807cbd2f41354a2ef2e5d2"
  },
  {
    "url": "tags/机器人/index.html",
    "revision": "05b419a566877fc94c077e91413b4b94"
  },
  {
    "url": "tags/机器学习/index.html",
    "revision": "de03d6126fc744d2d33396c8566f154d"
  },
  {
    "url": "tags/计算机视觉/index.html",
    "revision": "02d531e16a1e6d139b80ddc884ac36a3"
  },
  {
    "url": "tags/计算机网络/index.html",
    "revision": "89f2a07a9a670518c0e60bef7e96c5b3"
  },
  {
    "url": "tags/开源写字机/index.html",
    "revision": "711eff7bdced4061a28454ad4ab2d00d"
  },
  {
    "url": "tags/量化/index.html",
    "revision": "a393a9d685cbe037179f12ea32c28928"
  },
  {
    "url": "tags/模型部署/index.html",
    "revision": "e8b654718fe71499b868aef2e73e7a4c"
  },
  {
    "url": "tags/模型部署及加速/index.html",
    "revision": "7cca7b959ea4f57684e6b7d924d49920"
  },
  {
    "url": "tags/目标检测/index.html",
    "revision": "795361f753ed664261aff419a2ef57a8"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "5018e0ea30e9f1e1f194a16c0e6172f8"
  },
  {
    "url": "tags/前端动画/index.html",
    "revision": "c468d8b3357409f70ee48b64436e8273"
  },
  {
    "url": "tags/嵌入式/index.html",
    "revision": "893c7a3632233ee9cb369722b56470fa"
  },
  {
    "url": "tags/深度学习/index.html",
    "revision": "4bc521ebefee6203100ad340f635d738"
  },
  {
    "url": "tags/数据结构与算法/index.html",
    "revision": "ba7b1e78a3e1bbb08901c23b3b289763"
  },
  {
    "url": "tags/图像处理/index.html",
    "revision": "c0cff26b39f7207b2525f5b238c33ee6"
  },
  {
    "url": "tags/网络协议/index.html",
    "revision": "2986ffc1a5c49fd41345941807e8b831"
  },
  {
    "url": "tags/文档笔记/index.html",
    "revision": "d199ad25a4133ccfb5aff8eb0dfb07fe"
  },
  {
    "url": "tags/物联网/index.html",
    "revision": "a09a8bc6f6d499b938cb9968cf3e9861"
  },
  {
    "url": "tags/音视频开发/index.html",
    "revision": "01676486c721d3d05734bb252e1bc28e"
  },
  {
    "url": "tags/游戏开发/index.html",
    "revision": "65e2530a35e1dd67a04bb06b13682581"
  },
  {
    "url": "tags/杂谈/index.html",
    "revision": "2424133263c130cbd1a092058038853b"
  },
  {
    "url": "tags/最优化控制/index.html",
    "revision": "155894e172299998ef4da0edb92f3bf7"
  },
  {
    "url": "tags/Android/index.html",
    "revision": "4a024a7521e9f236178aa253e98b4e89"
  },
  {
    "url": "tags/bug/index.html",
    "revision": "478161dcf8e21d549ea0474047fa3ad4"
  },
  {
    "url": "tags/CI/CD/index.html",
    "revision": "15c0a6c255e51f9c9f6196b64e808657"
  },
  {
    "url": "tags/cmake/index.html",
    "revision": "24d10e80adbcc3a0e38244e31558f63f"
  },
  {
    "url": "tags/CNN/index.html",
    "revision": "5c977670e1ef8d50b2e3a21d95d143b0"
  },
  {
    "url": "tags/cpp/index.html",
    "revision": "470ff265be0c01d3f16fd37f200f36e6"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "ab4dd555350debd63782edcdcfd0e043"
  },
  {
    "url": "tags/FPGA/index.html",
    "revision": "e951503a379a55f1530e1ecc0e0784c4"
  },
  {
    "url": "tags/GUI/index.html",
    "revision": "b9f5020ec75b6ea5ded1ec3f932885ed"
  },
  {
    "url": "tags/HarmonyOS/index.html",
    "revision": "fd4a17e1da27530c282cda24c539a86b"
  },
  {
    "url": "tags/LINUX/index.html",
    "revision": "fbff6e2df7f57ba0ea43b79566113ed3"
  },
  {
    "url": "tags/live2d/index.html",
    "revision": "d23521456577a576782888b7622e3055"
  },
  {
    "url": "tags/mmpose/index.html",
    "revision": "d86e139218b55635f2ced0fbaaad2562"
  },
  {
    "url": "tags/NLP/index.html",
    "revision": "8de6e422e0266a67f9f025ecd4759300"
  },
  {
    "url": "tags/opencv/index.html",
    "revision": "92e4e9a95a1af7f681c2cd254573532e"
  },
  {
    "url": "tags/pypi/index.html",
    "revision": "b81f37cd804df5e5d873e4985f10b433"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "dc14b736269be8a7e7d9b2162388f08d"
  },
  {
    "url": "tags/RL/index.html",
    "revision": "69c7d56ec72d4280b71aa6df455853ff"
  },
  {
    "url": "tags/ROS/index.html",
    "revision": "28b9c79cdf0423c0fb942f32b5b0db28"
  },
  {
    "url": "tags/slam/index.html",
    "revision": "32c75da04f1becf3c313f5423c15c1ba"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "20050aca237b3231a802cef539dbd5d1"
  },
  {
    "url": "timeline/index.html",
    "revision": "afef8f2811cdde725d04285c8eb04834"
  },
  {
    "url": "view/other/comment.png",
    "revision": "6878f2fce5e82c12f91eef87bde8bd2c"
  },
  {
    "url": "views/AI/2020baidustar.html",
    "revision": "31fc9c983bf13ae17ee8f6e1684803e2"
  },
  {
    "url": "views/AI/coder/index.html",
    "revision": "91596b1cf1dca4d8c087498b6ad82f5d"
  },
  {
    "url": "views/AI/detection.html",
    "revision": "0f3dca142e97a9049785b903e4dffdcd"
  },
  {
    "url": "views/AI/guiYolov4.html",
    "revision": "c090a14ac83887e1bb451ab8a3200742"
  },
  {
    "url": "views/AI/handwrite/cnn/cifar.html",
    "revision": "818a5d269a80bef2c2e50122ac0ea831"
  },
  {
    "url": "views/AI/mmlab/mmpose/00.html",
    "revision": "eaec45da40dc865f44a5d2784ad112b1"
  },
  {
    "url": "views/AI/photo.html",
    "revision": "c5f92082ff7184438a26890124fae71d"
  },
  {
    "url": "views/AI/RL/curobo.html",
    "revision": "e825e710d652e4ea5fa0e266aa32f2ac"
  },
  {
    "url": "views/AI/RL/env.html",
    "revision": "8d06ef54d48a7fd5467a8d51334e9144"
  },
  {
    "url": "views/AI/RL/ppo.html",
    "revision": "553006137ae33a8eb99b37817640e208"
  },
  {
    "url": "views/AI/RL/vima.html",
    "revision": "e402083c4edf2f3f1294aba7e0404455"
  },
  {
    "url": "views/AI/RL/wtw.html",
    "revision": "f8de886f275f00a6c939850391db37ac"
  },
  {
    "url": "views/AI/taac2021.html",
    "revision": "3881c3dac6d0f287b9e32f25008663a2"
  },
  {
    "url": "views/AI/tengine/ohosndk0.html",
    "revision": "6668c27f1d93e9d56b726fb77cc3839a"
  },
  {
    "url": "views/AI/tensorrt/env.html",
    "revision": "68ffe6506953652192ed6c787753aad6"
  },
  {
    "url": "views/AI/TextClassification.html",
    "revision": "34d33c6cc7eefb6cb35ff251e76cf1cf"
  },
  {
    "url": "views/AI/tf2.0.html",
    "revision": "3e94dfcd0b990685389928161ffaad1b"
  },
  {
    "url": "views/AI/yolo/yolov4.html",
    "revision": "681adf2f69030921dc21615c33d80ea6"
  },
  {
    "url": "views/AI/yolo/yolov9_ncnn.html",
    "revision": "0e00dadbf256d4358e13850e9e2b4aa8"
  },
  {
    "url": "views/algorithm/datastructure/queue.html",
    "revision": "fd9cc60ce2d96854ba83079e021580a7"
  },
  {
    "url": "views/algorithm/datastructure/stack.html",
    "revision": "adeb8063cc11f7b9eaffc912e2a7036c"
  },
  {
    "url": "views/algorithm/datastructure/trie.html",
    "revision": "76ff54e7d2c0c6e2a3a9dd38972ceb02"
  },
  {
    "url": "views/algorithm/leetcode/leetcode1.html",
    "revision": "bb72937d092bfeff36441b3fc89637e6"
  },
  {
    "url": "views/algorithm/leetcode/leetcode2.html",
    "revision": "d325624ee926e52bd363890aaf806c66"
  },
  {
    "url": "views/algorithm/opencv/clahe.html",
    "revision": "2f3a9f06ba93fbaac7fd40033f10a418"
  },
  {
    "url": "views/algorithm/opencv/cornerdetection00.html",
    "revision": "dd2900a4eec7a05e8962e75a1ce8c86d"
  },
  {
    "url": "views/algorithm/opencv/env.html",
    "revision": "53370551a85ff351e3502fad96957d41"
  },
  {
    "url": "views/algorithm/opencv/ImageProcessing.html",
    "revision": "12b962db6ed85b7284cf96d7cf307721"
  },
  {
    "url": "views/algorithm/opencv/iqa.html",
    "revision": "75d0c20efc8ef47734d3e6f596b53b0e"
  },
  {
    "url": "views/algorithm/opencv/otsu.html",
    "revision": "2586e5021bec4974c5b0feef0f62865a"
  },
  {
    "url": "views/algorithm/opencv/retinex.html",
    "revision": "ed27be07293ba975a2d38d3bfd120b06"
  },
  {
    "url": "views/algorithm/ppq/day1.html",
    "revision": "49cecd2f686ec67cf1ca778717df9907"
  },
  {
    "url": "views/algorithm/ppq/day2.html",
    "revision": "3d16604dc0088f97feaa01b45805481b"
  },
  {
    "url": "views/algorithm/slam/aloam.html",
    "revision": "a19cc3f520739f3fd81419887d84251d"
  },
  {
    "url": "views/algorithm/slam/n0.html",
    "revision": "48f96e9b95317e9b3165ead0c8d99a3d"
  },
  {
    "url": "views/algorithm/slam/velyodyne.html",
    "revision": "1c2dcadb1067bfd964fadc54419b360f"
  },
  {
    "url": "views/algorithm/slam/vslam_rs.html",
    "revision": "5662b9d0961ddf806885b095c7bf9939"
  },
  {
    "url": "views/cs/android/mina.html",
    "revision": "dfd343ee3f0ed348a478d3c3d5cb0d2d"
  },
  {
    "url": "views/cs/cmake/00.html",
    "revision": "30450b984d3ce7992f563edce8c781f3"
  },
  {
    "url": "views/cs/cplusplus/c.html",
    "revision": "ccbda43bb9b71238398376c2cc25f63b"
  },
  {
    "url": "views/cs/ffmpeg/compile.html",
    "revision": "367486ba09477c77b7a06b7ff1e2333c"
  },
  {
    "url": "views/cs/ffmpeg/win_env.html",
    "revision": "3fb635ef391a1695a699431861e2410f"
  },
  {
    "url": "views/cs/gtsreamer/py_gst.html",
    "revision": "6df3612bf8302d78e7e2440dee11583b"
  },
  {
    "url": "views/cs/gtsreamer/qs.html",
    "revision": "f472569346ba36ea6bda74a61c25cc43"
  },
  {
    "url": "views/cs/Imagesegmentation.html",
    "revision": "5983328695f88e61ca220a792b56075e"
  },
  {
    "url": "views/cs/MFCbmp.html",
    "revision": "3cfa10dc1fcbabdae3e196dbcfc7de44"
  },
  {
    "url": "views/cs/OS/GlimmerOS.html",
    "revision": "4dc61fab6930c5df45ef9e1691cd0426"
  },
  {
    "url": "views/cs/python/note0.html",
    "revision": "ef32b2d6fdd6b74c86e6bb7df0313406"
  },
  {
    "url": "views/cs/ros/env.html",
    "revision": "805114d06f1490bb1131364b311e9d6a"
  },
  {
    "url": "views/cs/ros/note00.html",
    "revision": "6f8c39d7704e141a8a56222f1239ebfd"
  },
  {
    "url": "views/cs/vueblog.html",
    "revision": "b9dd118be450861b1a78433bfb21f9b4"
  },
  {
    "url": "views/ee/ARMcortex/armenv.html",
    "revision": "a60903f48c74b543b25d791b737e45fd"
  },
  {
    "url": "views/ee/ARMcortex/nanopi0.html",
    "revision": "93b4369c6c662cd671f2a436e6a1a8dd"
  },
  {
    "url": "views/ee/cubli.html",
    "revision": "c4646f4d982f2cdd85044b4aecbe2d37"
  },
  {
    "url": "views/ee/fpga/env.html",
    "revision": "206e63b6fdd911de157ec890a870b840"
  },
  {
    "url": "views/ee/harmonyos/ohos0.html",
    "revision": "7b7392e1ba2178e5607106f823fc7561"
  },
  {
    "url": "views/ee/Humanoid_Robot/hector.html",
    "revision": "2236d8dd3638d4255469a6db4adf5a00"
  },
  {
    "url": "views/ee/Humanoid_Robot/LIPM.html",
    "revision": "31b62ccd3ad29d6e9bdd269e492a6e75"
  },
  {
    "url": "views/ee/Humanoid_Robot/uvc.html",
    "revision": "e287b2ad46a8ba5cfbb5b53993b86bad"
  },
  {
    "url": "views/ee/jetson/jetson1.html",
    "revision": "536b5ea0efcde151fdecf3eb62dc4e6d"
  },
  {
    "url": "views/ee/midbot.html",
    "revision": "c693b2b6570f43970d4d7b5bc0740aeb"
  },
  {
    "url": "views/ee/miniBOT.html",
    "revision": "c87d7e7476feae6f3fbae0e41fb26379"
  },
  {
    "url": "views/ee/mpc/introduction.html",
    "revision": "08267bae078ac899c4ced3c5c091fb1e"
  },
  {
    "url": "views/ee/mpc/rfmpc.html",
    "revision": "bd069bf0cb5cd22655fccb0b56827e81"
  },
  {
    "url": "views/ee/mpc/trajectory_optimization.html",
    "revision": "c1305c3ed074a1805fcc260fefb940c9"
  },
  {
    "url": "views/ee/quadsdk.html",
    "revision": "cbd80f56a04fe12e9f9f682c2bb24f0f"
  },
  {
    "url": "views/ee/riscv/gdf103.html",
    "revision": "636f3b6f311dc92084070e1164fe21d9"
  },
  {
    "url": "views/ee/smallB.html",
    "revision": "452b5e94d04f9b947400d3e87958600c"
  },
  {
    "url": "views/ee/star.html",
    "revision": "c40af94b0e329baa8dcc69240e00b6f8"
  },
  {
    "url": "views/ee/tcostiny/tcos0.html",
    "revision": "b460abedd37209ab7d8dab577ea1c865"
  },
  {
    "url": "views/ee/tinyascen.html",
    "revision": "f6f3ee846944cb8fc2d30d53df2060b2"
  },
  {
    "url": "views/freetalk/独立开发者之旅.html",
    "revision": "3223626ceeb3cdc28eafccbadb166df4"
  },
  {
    "url": "views/freetalk/android.html",
    "revision": "f5b0e9c6f7fe2b7bce4eab9a29092da8"
  },
  {
    "url": "views/freetalk/cicd/fix.html",
    "revision": "da900e0cd21ac6e3d881ddf86c13de91"
  },
  {
    "url": "views/freetalk/color.html",
    "revision": "a8ff133c25157f3f6f2d5dee7dd6d58f"
  },
  {
    "url": "views/freetalk/crossapp.html",
    "revision": "aa36a37d619c6303de39416db7be849f"
  },
  {
    "url": "views/freetalk/docker00.html",
    "revision": "5415737efa3b2bc1e47c8f29ef9d636e"
  },
  {
    "url": "views/freetalk/Fourier.html",
    "revision": "05e4b868a6eef5a933ad457e222e6100"
  },
  {
    "url": "views/freetalk/ip0.html",
    "revision": "d82439bd4d1c61c78e43be5c81c71ae7"
  },
  {
    "url": "views/freetalk/picgo.html",
    "revision": "b0b6ef71b102d49f3160c89a7594c14f"
  },
  {
    "url": "views/freetalk/self_improvement.html",
    "revision": "989cc0bb87c657cc8cf5dc9815e16283"
  },
  {
    "url": "views/freetalk/spider/github.html",
    "revision": "5fab6044528490c9dd248c2e0455f591"
  },
  {
    "url": "views/freetalk/spider/zhihu.html",
    "revision": "58ec7f4d58edb23ab021c6c9ce8c65a5"
  },
  {
    "url": "views/freetalk/teamwork.html",
    "revision": "5019a7879bdd4923802c45c32020232d"
  },
  {
    "url": "views/freetalk/vsc/tools.html",
    "revision": "e5258cd52df282ffb96c49104aaf0070"
  },
  {
    "url": "views/freetalk/why.html",
    "revision": "4e04bca2bc18aaa5392c2c130775af63"
  },
  {
    "url": "views/freetalk/wsl2/note.html",
    "revision": "3c8c88f16c41bb9e1535ee25952aa582"
  },
  {
    "url": "views/freetalk/wsl2/wsl.html",
    "revision": "ec4f609efe1b5d66acea13151cbd2c27"
  },
  {
    "url": "views/freetalk/wsl2/wslg.html",
    "revision": "28db26f8149292c8c62a5b4a6a243048"
  },
  {
    "url": "views/game/16.html",
    "revision": "9f9aaf84c1a3dcde6ede79ac67948ae1"
  },
  {
    "url": "views/game/live2d/weblive2d.html",
    "revision": "fd7d725d2705c6459a59178dc06beb68"
  },
  {
    "url": "views/game/unity/AR.html",
    "revision": "5a6b0656fc07309b24336368270c3dbb"
  },
  {
    "url": "views/game/vulkan/note0.html",
    "revision": "41547e410dc09970f8d7728e9d145a9f"
  },
  {
    "url": "views/index.html",
    "revision": "4bed357fd3227644f66212d924a8ed53"
  },
  {
    "url": "views/notes/aibug00.html",
    "revision": "fc25baefd19bbb678cf5f073baf0a2d8"
  },
  {
    "url": "views/notes/Edge.html",
    "revision": "76456d4ff065871d28be756c8d55e3bf"
  },
  {
    "url": "views/notes/git.html",
    "revision": "1ac211d9e9e52f37171a7053a94d8f32"
  },
  {
    "url": "views/notes/Googlebug.html",
    "revision": "b6437a9fe3a00cde73771dc23c50c4d8"
  },
  {
    "url": "views/notes/linux.html",
    "revision": "b1e43fe832477d9680e17c4ed5156c83"
  },
  {
    "url": "views/notes/linuxbug00.html",
    "revision": "47bd347d6dcfd624277d1bb46217a4dd"
  },
  {
    "url": "views/notes/markdown.html",
    "revision": "4e134a716e756c34c300f1cad2d0db57"
  },
  {
    "url": "views/notes/oamnote.html",
    "revision": "ab8182206bfa47057ba402809084b1c6"
  },
  {
    "url": "views/notes/opencvbug.html",
    "revision": "f8fcd30dc902a5c93256afb895aa0b16"
  },
  {
    "url": "views/notes/pycocotools.html",
    "revision": "2badc9b3a6de4f634377fffec50d80aa"
  },
  {
    "url": "views/notes/pypi.html",
    "revision": "65f900133c199c60ccf873a8fa6eae45"
  },
  {
    "url": "views/notes/Pythonbug.html",
    "revision": "a620ed9f9573eaa9922af3586cd540b4"
  },
  {
    "url": "views/notes/vim.html",
    "revision": "05f1f675cc3e055f2b542cb99a26d2d1"
  },
  {
    "url": "views/notes/webbug.html",
    "revision": "4d9d187e9c66539e10f51277256885d2"
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
