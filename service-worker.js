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
    "revision": "0997b79a2b2284f82ab2c4b8602da868"
  },
  {
    "url": "assets/css/0.styles.d22e7139.css",
    "revision": "ba3297638e3604d4ef297cda1e4d3be0"
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
    "url": "assets/js/100.bd7c97c8.js",
    "revision": "c4f024f36fbf7c29bb5aa4b83f03d937"
  },
  {
    "url": "assets/js/101.8c0db650.js",
    "revision": "3d9453c34cf4c7e1956f624b6f0d67f3"
  },
  {
    "url": "assets/js/102.8c47a29f.js",
    "revision": "ecd132bc0806298464b121084497f07b"
  },
  {
    "url": "assets/js/103.a91954f4.js",
    "revision": "ad25aa53be8e07e27429fd8a9d9dd6d8"
  },
  {
    "url": "assets/js/104.c5678a89.js",
    "revision": "df49ecf94906d187efe031371e1fa5d3"
  },
  {
    "url": "assets/js/105.720ce26e.js",
    "revision": "0877e72f4459e0c2e61ddd6086340528"
  },
  {
    "url": "assets/js/106.e0c6871a.js",
    "revision": "fa815459cad84db589da15942057b79f"
  },
  {
    "url": "assets/js/107.fd5a840f.js",
    "revision": "0da329cc530e02e3bb6969e192aabf40"
  },
  {
    "url": "assets/js/108.86bb63ac.js",
    "revision": "3caa37eaeb005cfc0f4059710f862f7b"
  },
  {
    "url": "assets/js/109.dae51bc9.js",
    "revision": "0cd601727de100409de25df5988aef3e"
  },
  {
    "url": "assets/js/11.875fc3e6.js",
    "revision": "b0c94f3cf762be3a12ca79a3c2cc69c1"
  },
  {
    "url": "assets/js/110.c05d8fac.js",
    "revision": "7826f1260ee7280bb445df0c85075179"
  },
  {
    "url": "assets/js/111.86ef700e.js",
    "revision": "bc51ec20ad243e52a40c6bd797115959"
  },
  {
    "url": "assets/js/112.7c3fd706.js",
    "revision": "f5f54f50db031f6e6a9295298cf072a9"
  },
  {
    "url": "assets/js/113.929e7876.js",
    "revision": "e3546f6cfd6d2557575e3017c8f9729d"
  },
  {
    "url": "assets/js/114.edb51eb6.js",
    "revision": "15699cb90e5b77086f8299e9e7896ec4"
  },
  {
    "url": "assets/js/115.3275cfea.js",
    "revision": "6c1ff13fb372867cda53b63d9e0fcc2b"
  },
  {
    "url": "assets/js/116.4f969298.js",
    "revision": "3e4807c7a35f61297be195d23ec76934"
  },
  {
    "url": "assets/js/117.5e2f5be7.js",
    "revision": "71acde2acefe82980b105272308b35e1"
  },
  {
    "url": "assets/js/118.d4efd3aa.js",
    "revision": "403ad887945a4007db496b77ca65134d"
  },
  {
    "url": "assets/js/119.d96119a9.js",
    "revision": "2090532222512c0ab73885d02fcf0442"
  },
  {
    "url": "assets/js/12.b4d2682c.js",
    "revision": "f9585fc1b92f501bd25b858b623ba3aa"
  },
  {
    "url": "assets/js/120.02c37d01.js",
    "revision": "c7ec7d67effd1d7dc59f937faad7654a"
  },
  {
    "url": "assets/js/121.e2c492a8.js",
    "revision": "68d0c26c33d876484c017cd786a7104a"
  },
  {
    "url": "assets/js/122.00670c7e.js",
    "revision": "4515ebf509f848021c107cfc81b75e1a"
  },
  {
    "url": "assets/js/123.b8d92db7.js",
    "revision": "dcca8563fbf64196273bc19bb8d4cd38"
  },
  {
    "url": "assets/js/124.208e90fa.js",
    "revision": "e0488f9960009423118419db63c5f47b"
  },
  {
    "url": "assets/js/125.bf1a8d75.js",
    "revision": "a26cd71641bbc4059b5b56037612a1b4"
  },
  {
    "url": "assets/js/126.73865bc5.js",
    "revision": "e29d40cf4741c0f8ec2ec040116449b7"
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
    "url": "assets/js/14.5aefb3d9.js",
    "revision": "1e55f8bd3cbe85bde1f2f088972c250a"
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
    "url": "assets/js/18.95b911f2.js",
    "revision": "069d0012708f0b7bdc882633308a4fd1"
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
    "url": "assets/js/21.13c69909.js",
    "revision": "18d2dd86a38eeb24d7ef5e797fb99b7b"
  },
  {
    "url": "assets/js/22.6710509a.js",
    "revision": "ac1c1cc3931d989d01a4af08de6f2063"
  },
  {
    "url": "assets/js/23.29688aed.js",
    "revision": "cca8460d24097069dc7753db9337b65b"
  },
  {
    "url": "assets/js/24.e8d72828.js",
    "revision": "1efb2c0c2ee14a5aa2c2b7afe7540041"
  },
  {
    "url": "assets/js/25.dc6bd1d0.js",
    "revision": "8710d5555d9e35ac84445800ab9f8793"
  },
  {
    "url": "assets/js/26.f1e80209.js",
    "revision": "77940ec5ddf6780cec439e1a0f4ed724"
  },
  {
    "url": "assets/js/27.030bdad7.js",
    "revision": "de0e3fb5220156d8ba48322b4fde1205"
  },
  {
    "url": "assets/js/28.e54b1073.js",
    "revision": "dd1622dd20301384163db8fad6d623db"
  },
  {
    "url": "assets/js/29.d81be851.js",
    "revision": "8532451df4966008b0b446437a270534"
  },
  {
    "url": "assets/js/30.d51a27ce.js",
    "revision": "2d20668dc5c0e22d86edd5d607581ef5"
  },
  {
    "url": "assets/js/31.8937776a.js",
    "revision": "565e248daabbf2e145b4e1644bb9e3d5"
  },
  {
    "url": "assets/js/32.887278cd.js",
    "revision": "f83a94e0d66724bf1ecf5d50f0ebbafe"
  },
  {
    "url": "assets/js/33.d762decf.js",
    "revision": "d52728938bcf660dd78a4a40afbac358"
  },
  {
    "url": "assets/js/34.581c01b2.js",
    "revision": "4de4c7da23f0270c49a34e31c0c58e5d"
  },
  {
    "url": "assets/js/35.982a7c54.js",
    "revision": "d52ffab835a73d3137591b317f27d2d6"
  },
  {
    "url": "assets/js/36.d8e8e882.js",
    "revision": "dd5e44a8a8a2902968c3c783705f389c"
  },
  {
    "url": "assets/js/37.557e5e8d.js",
    "revision": "c4e3025948387dc3010812b633e04c88"
  },
  {
    "url": "assets/js/38.fb490435.js",
    "revision": "f036d01cdf39a4780448cb9154094ca9"
  },
  {
    "url": "assets/js/39.3a3d65b6.js",
    "revision": "eb1bdeaabad75b2da7518515831afd18"
  },
  {
    "url": "assets/js/40.1e66e97a.js",
    "revision": "29d722045cf6b3283d189baf3e894165"
  },
  {
    "url": "assets/js/41.fa9268bf.js",
    "revision": "c8f6aa8327edf813d754a93a5a238591"
  },
  {
    "url": "assets/js/42.cb720021.js",
    "revision": "71d6639a37d9d603116754e48db3a00d"
  },
  {
    "url": "assets/js/43.3e839975.js",
    "revision": "e390b9bf33fdf51f724b453a31a58d91"
  },
  {
    "url": "assets/js/44.ec6965fc.js",
    "revision": "2c0512a750a0cf4e64085bfb4c57d474"
  },
  {
    "url": "assets/js/45.45b8a4f5.js",
    "revision": "f9576ee933d4db858d89965710c3f453"
  },
  {
    "url": "assets/js/46.d640937b.js",
    "revision": "c38dda79d32780e36ffa97d6e25835eb"
  },
  {
    "url": "assets/js/47.22be8a51.js",
    "revision": "aba0a6df46b977fd56db07892026d3c2"
  },
  {
    "url": "assets/js/48.aa344860.js",
    "revision": "22f92d317818eda395ba1b2bb48e6403"
  },
  {
    "url": "assets/js/49.1c024d5c.js",
    "revision": "057d7780f2767a93572fa36d7248a43c"
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
    "url": "assets/js/52.7b26e678.js",
    "revision": "15dfa1ebbd7a103b528b2f9e48fc7a84"
  },
  {
    "url": "assets/js/53.f0560787.js",
    "revision": "82632cd5103978d2b8a4396e579692a0"
  },
  {
    "url": "assets/js/54.606c1a06.js",
    "revision": "105daeba3a75df50adb75ba1bc1e4527"
  },
  {
    "url": "assets/js/55.1e991a7e.js",
    "revision": "c1653083b66d042cbf6d37651bd7fb8f"
  },
  {
    "url": "assets/js/56.4a609eaf.js",
    "revision": "d3ff1d4b6d221f9e4f32197d01fb3397"
  },
  {
    "url": "assets/js/57.0e09c42e.js",
    "revision": "c5f0d540ecc7c6f8ee92497bd1b5128b"
  },
  {
    "url": "assets/js/58.958ea263.js",
    "revision": "644d8ec5ef24958c688e915af2ce85fd"
  },
  {
    "url": "assets/js/59.d0afd04d.js",
    "revision": "ed2044122e51011e404ecbd94a4aca7f"
  },
  {
    "url": "assets/js/6.289b09d9.js",
    "revision": "f5230bd7de53bc59d601e9795d3942da"
  },
  {
    "url": "assets/js/60.d1f4f126.js",
    "revision": "2363a32f7971d60954475c2732e4c8df"
  },
  {
    "url": "assets/js/61.08cabc78.js",
    "revision": "5c83cee1fd0c6e4cb2c47cb064eb4604"
  },
  {
    "url": "assets/js/62.caef234c.js",
    "revision": "2ddaa760cf0d8356d6f336229810b5db"
  },
  {
    "url": "assets/js/63.4f876aae.js",
    "revision": "d7d574869437d8a884c55c78f1a9c7cb"
  },
  {
    "url": "assets/js/64.3db499e7.js",
    "revision": "86cf3b6ab7bb09593ff854e60e5a2999"
  },
  {
    "url": "assets/js/65.8509e926.js",
    "revision": "ea326d4ee7d635d7647c451b5b744bdb"
  },
  {
    "url": "assets/js/66.286b4023.js",
    "revision": "46381918cee93daefe27c7f8c4443d65"
  },
  {
    "url": "assets/js/67.572b3f43.js",
    "revision": "1652b88d8f962b30a4abbc3069df8338"
  },
  {
    "url": "assets/js/68.ce7a0a2c.js",
    "revision": "9f1fe78ca10d9b1ee6255eb9f53bfafa"
  },
  {
    "url": "assets/js/69.a4d2cdde.js",
    "revision": "84846ce6cc1a0c8853f9254356a210dd"
  },
  {
    "url": "assets/js/7.6f9fcd49.js",
    "revision": "ef37a17d43e2e7dd6170793100792f25"
  },
  {
    "url": "assets/js/70.17f7c284.js",
    "revision": "7a2d28fba0cce33783a6a953230f7962"
  },
  {
    "url": "assets/js/71.1dd24c04.js",
    "revision": "50a2a08822ba3149aa5f87a22775ab5d"
  },
  {
    "url": "assets/js/72.c1db0b3c.js",
    "revision": "220a58236738c35ba2328620dce0c58c"
  },
  {
    "url": "assets/js/73.a0c68ca7.js",
    "revision": "37c1433b17fd2728754672242666367a"
  },
  {
    "url": "assets/js/74.80bca1f4.js",
    "revision": "47f6642c15b360fe050f2020feb1e230"
  },
  {
    "url": "assets/js/75.57296136.js",
    "revision": "a3abbd0d998d8cfb5c79d0eff57475f4"
  },
  {
    "url": "assets/js/76.dae2d50e.js",
    "revision": "2be5894d50b9e9c4c039be5f65a63367"
  },
  {
    "url": "assets/js/77.8b3fcbd5.js",
    "revision": "76964e8d6c8a446635054ca0ea6054ae"
  },
  {
    "url": "assets/js/78.c0a9e854.js",
    "revision": "3e45476f4f7312e1a14434e68f427248"
  },
  {
    "url": "assets/js/79.af22b75d.js",
    "revision": "01599f959b124636ab4974c231de1e19"
  },
  {
    "url": "assets/js/8.6a9db5f6.js",
    "revision": "a075b0341ca8395667094ff2766c8f37"
  },
  {
    "url": "assets/js/80.702dc0bf.js",
    "revision": "8b90d432b995f168fea2f783d5c96379"
  },
  {
    "url": "assets/js/81.bc770259.js",
    "revision": "75e64a597402d6281dae58417b24b413"
  },
  {
    "url": "assets/js/82.de643de6.js",
    "revision": "dc05ef57ccb59db016cb06c0d0a2056b"
  },
  {
    "url": "assets/js/83.4bcdeee1.js",
    "revision": "403934deeb4abbf0e02da150e310533a"
  },
  {
    "url": "assets/js/84.996a4506.js",
    "revision": "84ff3607ffb78b5299496d80b75ae55b"
  },
  {
    "url": "assets/js/85.abb8cdef.js",
    "revision": "a34f28182ed5a4791b5727f2fe1dc8f0"
  },
  {
    "url": "assets/js/86.f15c52c0.js",
    "revision": "78bdd875c4ef96336ff362b4b7980ec2"
  },
  {
    "url": "assets/js/87.4fbbb07d.js",
    "revision": "25dfde6785dd1c142a57f5aba6a85e10"
  },
  {
    "url": "assets/js/88.bd001ff1.js",
    "revision": "a09ad97ef003db85329e60e411ea75c4"
  },
  {
    "url": "assets/js/89.502f1f9e.js",
    "revision": "c54736cc920e2c94ac0fd7ce3b523fa8"
  },
  {
    "url": "assets/js/9.b1be5bd5.js",
    "revision": "776305157ef8c65843f2876e7ab70df3"
  },
  {
    "url": "assets/js/90.d3e874d0.js",
    "revision": "8697fc662eb91671d18a23cb7c3e947d"
  },
  {
    "url": "assets/js/91.4875e28b.js",
    "revision": "08b2b8383eb08060b0596b7cceb23d0d"
  },
  {
    "url": "assets/js/92.6a7d5880.js",
    "revision": "84792a8e5c8b91e75c40fc2fd5c65636"
  },
  {
    "url": "assets/js/93.e809e9bb.js",
    "revision": "324487590526633cf8906a71904e10d1"
  },
  {
    "url": "assets/js/94.21a73c40.js",
    "revision": "59b06d778667fa3a34bd517aa6f9f6a9"
  },
  {
    "url": "assets/js/95.b3c6f7ff.js",
    "revision": "7a87ad0b971748054ae1b40f97d91277"
  },
  {
    "url": "assets/js/96.3f095818.js",
    "revision": "b53f2bbc2f08a42809c2cad3d2a73de3"
  },
  {
    "url": "assets/js/97.75ae7e7f.js",
    "revision": "854ef7bf473b019e3521ae6d52a85ffd"
  },
  {
    "url": "assets/js/98.57415fe8.js",
    "revision": "2176793a6fc861d4459279804af62ef0"
  },
  {
    "url": "assets/js/99.a3283013.js",
    "revision": "47c16f0ac782e6666b885ba98c563aba"
  },
  {
    "url": "assets/js/app.f86c42d4.js",
    "revision": "a585f320ac44fce44fad167f2da935f2"
  },
  {
    "url": "assets/js/vendors~flowchart.f4a117dd.js",
    "revision": "a9add723f54de64f29ee219d49c6eb45"
  },
  {
    "url": "categories/笔记等/index.html",
    "revision": "a042764c52eb8fb4b0bf464aaf9da109"
  },
  {
    "url": "categories/笔记等/page/2/index.html",
    "revision": "f6d64dc30c93918c875aa7e799e8e4fa"
  },
  {
    "url": "categories/电子设计等/index.html",
    "revision": "91ccd92ce59b8852d3d276bf496b92f2"
  },
  {
    "url": "categories/电子设计等/page/2/index.html",
    "revision": "ce459d3aa54231ebb51633108bb02545"
  },
  {
    "url": "categories/计算机技术等/index.html",
    "revision": "40b46d572519eba86c3f73b419e46a1e"
  },
  {
    "url": "categories/计算机技术等/page/2/index.html",
    "revision": "a1fdc274bcb7e77431010e3299d2b147"
  },
  {
    "url": "categories/算法等/index.html",
    "revision": "77f47ef3d485a6b230850b5c56af205e"
  },
  {
    "url": "categories/算法等/page/2/index.html",
    "revision": "6e4a04584dd1c4785f3719aa3f187847"
  },
  {
    "url": "categories/游戏设计等/index.html",
    "revision": "529153ec3d092b6fb135ac4f173f7789"
  },
  {
    "url": "categories/杂谈/index.html",
    "revision": "bde304cf1e6fd5d6bfb0186c6a8cef70"
  },
  {
    "url": "categories/杂谈/page/2/index.html",
    "revision": "974c1b726d343dad3c4530ec956a8fcf"
  },
  {
    "url": "categories/AI及机器人等/index.html",
    "revision": "113dfb7f46e0f572bfec8bc9cacfb1fa"
  },
  {
    "url": "categories/AI及机器人等/page/2/index.html",
    "revision": "7c104e8251703db2733e2d7ad1d3c887"
  },
  {
    "url": "categories/index.html",
    "revision": "e9280146727b6da26478cfcb451bf9dc"
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
    "revision": "945379002b028601b265a216a429242e"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "c8209619f9a8260aee66ce7691c9f2ad"
  },
  {
    "url": "projects/github.html",
    "revision": "c362c52e2d956d260ea177be18c853b0"
  },
  {
    "url": "tag/index.html",
    "revision": "3d6ac2d5c281b8e9086627bf01e6983e"
  },
  {
    "url": "tags/比赛/index.html",
    "revision": "96e2155586e92add3272f46e0901e5e1"
  },
  {
    "url": "tags/操作系统os/index.html",
    "revision": "96d981869591c3dfea6ae104d2b16175"
  },
  {
    "url": "tags/电子设计/index.html",
    "revision": "9278dd674ecebda42c01a717d8f3e39c"
  },
  {
    "url": "tags/机器人/index.html",
    "revision": "3000e1ce36005dc332feb62f757a3a7d"
  },
  {
    "url": "tags/机器学习/index.html",
    "revision": "a45e8377120507951643129ef29c9181"
  },
  {
    "url": "tags/计算机视觉/index.html",
    "revision": "d9d205fd1208a332e3731fd9d15c7a56"
  },
  {
    "url": "tags/计算机网络/index.html",
    "revision": "4e6cd874b54fe7fce3c38962d81e8963"
  },
  {
    "url": "tags/开源写字机/index.html",
    "revision": "701ac72a1d5a5a0333e123bc1390e31f"
  },
  {
    "url": "tags/量化/index.html",
    "revision": "e006ec3ae6c1bc6cf57d0e3abbc4d51c"
  },
  {
    "url": "tags/模型部署/index.html",
    "revision": "a671b0bf0c2d6d64443ec7747fe37b37"
  },
  {
    "url": "tags/模型部署及加速/index.html",
    "revision": "e9c0493989cf896569de5f9313496f38"
  },
  {
    "url": "tags/目标检测/index.html",
    "revision": "4311267579e80e7a1422703d18b899c7"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "e71a1a2dfa3b374ce18aff47ee1cfbb5"
  },
  {
    "url": "tags/前端动画/index.html",
    "revision": "87c3b3dd6202d78305d48e01b14831f8"
  },
  {
    "url": "tags/嵌入式/index.html",
    "revision": "4b05623aa467020e66e71f2cea1820e9"
  },
  {
    "url": "tags/深度学习/index.html",
    "revision": "0dfe9702f1dec84fb29829abc70ddae4"
  },
  {
    "url": "tags/数据结构与算法/index.html",
    "revision": "7b75e8a79a99aa3c57abb96134d35a01"
  },
  {
    "url": "tags/图像处理/index.html",
    "revision": "bca2a3ac595ef9f7322d8a0502029187"
  },
  {
    "url": "tags/图像处理/page/2/index.html",
    "revision": "e7e7cf9e7c0382b2ac687ea41aafb686"
  },
  {
    "url": "tags/网络协议/index.html",
    "revision": "0d87269e19f2aba64cb221c9d34f05a3"
  },
  {
    "url": "tags/文档笔记/index.html",
    "revision": "39939b1224dfa8bae2749a15ec101ba6"
  },
  {
    "url": "tags/物联网/index.html",
    "revision": "54c76ea0467328807227de82728ed889"
  },
  {
    "url": "tags/音视频开发/index.html",
    "revision": "297f7a82cf17fbfb849f40615346ce72"
  },
  {
    "url": "tags/游戏开发/index.html",
    "revision": "4d1dfc1bb0c1708c1d5a6fc139104b10"
  },
  {
    "url": "tags/杂谈/index.html",
    "revision": "f919219660c6eb2fa8ccfd56adb2a5e1"
  },
  {
    "url": "tags/最优化控制/index.html",
    "revision": "d64e2f5d401946806d110013c4672620"
  },
  {
    "url": "tags/Android/index.html",
    "revision": "db1f3e4bf367cdaf3a66f84b484616b5"
  },
  {
    "url": "tags/bug/index.html",
    "revision": "4c4ca4e3d2bf520a053dc8677bc3134e"
  },
  {
    "url": "tags/CI/CD/index.html",
    "revision": "06fc750c646cbba542009d88c5b5e435"
  },
  {
    "url": "tags/cmake/index.html",
    "revision": "1c96d90f49c78aa9d5316daf1d90a1d7"
  },
  {
    "url": "tags/cpp/index.html",
    "revision": "009d92c6b4c847706199169dcc316a5a"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "89c7ba871756511f7c41b968c7719270"
  },
  {
    "url": "tags/FPGA/index.html",
    "revision": "8b0eae32c9092a42eaa67c18d46099e2"
  },
  {
    "url": "tags/GUI/index.html",
    "revision": "5c40e41fd054a7e8d4678f1413cfdfa5"
  },
  {
    "url": "tags/HarmonyOS/index.html",
    "revision": "e5231cf5ef244324f7e9e5ed64631b37"
  },
  {
    "url": "tags/LINUX/index.html",
    "revision": "c75bb3937271253505144aea5de50841"
  },
  {
    "url": "tags/live2d/index.html",
    "revision": "d09a50d66e0aa8724da16fc77dfa2b3d"
  },
  {
    "url": "tags/mmpose/index.html",
    "revision": "f7ff7d17a6b0c460de5a0456b7e0319b"
  },
  {
    "url": "tags/NLP/index.html",
    "revision": "6828e4803a71e646f1565628c9f1cee5"
  },
  {
    "url": "tags/opencv/index.html",
    "revision": "8d29e60f84402d13611d4b7b60b5b35f"
  },
  {
    "url": "tags/pypi/index.html",
    "revision": "08c43ffcaf4799d7b9b2cbf65a66ecc6"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "449bd23f86c65dc41b45e415e92287b7"
  },
  {
    "url": "tags/RL/index.html",
    "revision": "dd8ad780b85d572c1fe37f2a27d6f6a5"
  },
  {
    "url": "tags/ROS/index.html",
    "revision": "ced749c436fb14d2561d286ea3e3fad0"
  },
  {
    "url": "tags/slam/index.html",
    "revision": "b5f8d0e30cbce09383976385912e1565"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "8bcd887d79a0134542e1a895f3f03674"
  },
  {
    "url": "timeline/index.html",
    "revision": "57ad7a646e1025bb1d752fc8be1edca5"
  },
  {
    "url": "view/other/comment.png",
    "revision": "6878f2fce5e82c12f91eef87bde8bd2c"
  },
  {
    "url": "views/AI/2020baidustar.html",
    "revision": "14387be9d360ca711adec49ac8da6f64"
  },
  {
    "url": "views/AI/detection.html",
    "revision": "e76ad475680b617c75d6f35dd503f093"
  },
  {
    "url": "views/AI/guiYolov4.html",
    "revision": "ecc330249d548fc4ab66dc2b18e110f2"
  },
  {
    "url": "views/AI/mmlab/mmpose/00.html",
    "revision": "95270d75923f2a09cda54d84ad2081af"
  },
  {
    "url": "views/AI/photo.html",
    "revision": "dd106e1a18aadb9aad0b52262d257744"
  },
  {
    "url": "views/AI/RL/curobo.html",
    "revision": "cdf622c882e9224569e9229fe2602fdb"
  },
  {
    "url": "views/AI/RL/env.html",
    "revision": "d19ca4d4edd0ab1dc3cd0acd7c8a0c80"
  },
  {
    "url": "views/AI/RL/ppo.html",
    "revision": "ec8dd053e3794998d0ba55f4b80a96c5"
  },
  {
    "url": "views/AI/RL/vima.html",
    "revision": "3a89272e648f94f8c5a51b31f2b9e803"
  },
  {
    "url": "views/AI/RL/wtw.html",
    "revision": "d05a278dd458779821ee7cf4b92e23d0"
  },
  {
    "url": "views/AI/taac2021.html",
    "revision": "f3f3ffa9cb736bd86c7e3aa6af8204be"
  },
  {
    "url": "views/AI/tengine/ohosndk0.html",
    "revision": "35870102b026eef466c94adf520f8566"
  },
  {
    "url": "views/AI/tensorrt/env.html",
    "revision": "02a1f9b47a235f1a34ddf7befeb13b4c"
  },
  {
    "url": "views/AI/TextClassification.html",
    "revision": "11832db6279c5d9a13351314f7aeb530"
  },
  {
    "url": "views/AI/tf2.0.html",
    "revision": "6e9168dfd1b89904b31610577f351f57"
  },
  {
    "url": "views/AI/yolo/yolov4.html",
    "revision": "7c67d544f4126c462c993de1f07467e3"
  },
  {
    "url": "views/AI/yolo/yolov9_ncnn.html",
    "revision": "809a376c35d8b92582580980c22f3f79"
  },
  {
    "url": "views/algorithm/datastructure/queue.html",
    "revision": "c244b94514ff9d6c1928103afa062a63"
  },
  {
    "url": "views/algorithm/datastructure/stack.html",
    "revision": "71cdf84dd6b47b77b61bddae18208a96"
  },
  {
    "url": "views/algorithm/datastructure/trie.html",
    "revision": "ef6b6d776e8eaf3cea14c12389fd17fa"
  },
  {
    "url": "views/algorithm/leetcode/leetcode1.html",
    "revision": "eddab698de08bdce39409f676932d5f9"
  },
  {
    "url": "views/algorithm/leetcode/leetcode2.html",
    "revision": "543d58d94b7b54e5f1acfbdb988fee74"
  },
  {
    "url": "views/algorithm/opencv/clahe.html",
    "revision": "fcfc915d3e1f3af94a60d695a744f692"
  },
  {
    "url": "views/algorithm/opencv/env.html",
    "revision": "cf97cd2f605e48f36ab96c7be92aff96"
  },
  {
    "url": "views/algorithm/opencv/ImageProcessing.html",
    "revision": "7b3a47b759452198cc05615432c5dfc3"
  },
  {
    "url": "views/algorithm/opencv/iqa.html",
    "revision": "6a3616cbcc1b641f9266f49524565954"
  },
  {
    "url": "views/algorithm/opencv/otsu.html",
    "revision": "796317e7b3566857e2853a7a7e4fc40f"
  },
  {
    "url": "views/algorithm/opencv/retinex.html",
    "revision": "707cdafd65224c4b807ee0cc4cf06b29"
  },
  {
    "url": "views/algorithm/ppq/day1.html",
    "revision": "d34292b38e4a77c210209a8471f7ad20"
  },
  {
    "url": "views/algorithm/ppq/day2.html",
    "revision": "f816919997c0a737df0abdecd9bb9d03"
  },
  {
    "url": "views/algorithm/slam/aloam.html",
    "revision": "1f038766872550c12fa0eab24dc9fc77"
  },
  {
    "url": "views/algorithm/slam/n0.html",
    "revision": "b67d80f930cb15dbea518137c69fd02c"
  },
  {
    "url": "views/algorithm/slam/velyodyne.html",
    "revision": "75c863079a580c0cc109ad94a8ec8409"
  },
  {
    "url": "views/algorithm/slam/vslam_rs.html",
    "revision": "44a191d51c05f1c3ac3e93f6ac35e80f"
  },
  {
    "url": "views/cs/android/mina.html",
    "revision": "ce27952723845ace4483b769c6920e4e"
  },
  {
    "url": "views/cs/cmake/00.html",
    "revision": "18dfb33a920c42b76ff9fb4298726f10"
  },
  {
    "url": "views/cs/cplusplus/c.html",
    "revision": "6695158d3fd5dafae41ec6533e59f1bf"
  },
  {
    "url": "views/cs/ffmpeg/compile.html",
    "revision": "bb8b276196f52dd13924c41ac53b93a1"
  },
  {
    "url": "views/cs/ffmpeg/win_env.html",
    "revision": "9b7d2eb73d6afbb861cde114944049ef"
  },
  {
    "url": "views/cs/gtsreamer/py_gst.html",
    "revision": "de698a3aea2710c7381d83eade964b33"
  },
  {
    "url": "views/cs/gtsreamer/qs.html",
    "revision": "407f271408ae7b436ade19fc4c10f903"
  },
  {
    "url": "views/cs/Imagesegmentation.html",
    "revision": "008f85d10543b21dbb560f26d3680f01"
  },
  {
    "url": "views/cs/MFCbmp.html",
    "revision": "d12695be8043ca72e538414b3990e41f"
  },
  {
    "url": "views/cs/OS/GlimmerOS.html",
    "revision": "2f90e2f023fffbb5962ff404adb725d3"
  },
  {
    "url": "views/cs/python/note0.html",
    "revision": "cc8d7373cd53d7f62ad8a6294a2df2fc"
  },
  {
    "url": "views/cs/ros/env.html",
    "revision": "f9ecbee5b5082fc4a474835bab69b526"
  },
  {
    "url": "views/cs/ros/note00.html",
    "revision": "ecae4c81c8db37415c7f944362e0f469"
  },
  {
    "url": "views/cs/vueblog.html",
    "revision": "11d7048e28f06818466860b3d81fab69"
  },
  {
    "url": "views/ee/ARMcortex/armenv.html",
    "revision": "80da571eee6c76181126efdc346ab718"
  },
  {
    "url": "views/ee/ARMcortex/nanopi0.html",
    "revision": "5f7a09514816aa48155bcfb13869d8cc"
  },
  {
    "url": "views/ee/cubli.html",
    "revision": "185feab39f22f871d3b654f69190db3e"
  },
  {
    "url": "views/ee/fpga/env.html",
    "revision": "e84256783dded24bb36d34c634b29a4f"
  },
  {
    "url": "views/ee/harmonyos/ohos0.html",
    "revision": "f8d0943c4cd4a774a9377dd4d4025ca6"
  },
  {
    "url": "views/ee/Humanoid_Robot/hector.html",
    "revision": "3c22bf6e0fb4b7c33974feaf515cb539"
  },
  {
    "url": "views/ee/Humanoid_Robot/LIPM.html",
    "revision": "fffe13c08c8072f459718b8ad8a46a47"
  },
  {
    "url": "views/ee/Humanoid_Robot/uvc.html",
    "revision": "be1edd412dd706520305c0fb7159694b"
  },
  {
    "url": "views/ee/jetson/jetson1.html",
    "revision": "444f7dc37eaab7fe94df7d81c4014223"
  },
  {
    "url": "views/ee/midbot.html",
    "revision": "b81c9254b09dd14c28a5856cc03379bb"
  },
  {
    "url": "views/ee/miniBOT.html",
    "revision": "1d7aba8bee434d2c927ca00a21904c68"
  },
  {
    "url": "views/ee/mpc/introduction.html",
    "revision": "4a279a0ce1aeb25c6b82ae4d89e88ce7"
  },
  {
    "url": "views/ee/mpc/rfmpc.html",
    "revision": "1ca938b113646acddee7ea34228be5d8"
  },
  {
    "url": "views/ee/mpc/trajectory_optimization.html",
    "revision": "ee8e7574a56e28b5de46cdfe88bfff3e"
  },
  {
    "url": "views/ee/quadsdk.html",
    "revision": "f81d28829f66f14f299bfab13627f858"
  },
  {
    "url": "views/ee/riscv/gdf103.html",
    "revision": "ec417bfd3b8b3e4e913fcca352c7b736"
  },
  {
    "url": "views/ee/smallB.html",
    "revision": "df13bd536b974361568dbf8409864d69"
  },
  {
    "url": "views/ee/star.html",
    "revision": "8d2cd0f7397f6fe2905bd5a3dfeb3589"
  },
  {
    "url": "views/ee/tcostiny/tcos0.html",
    "revision": "78230c1109a170e5768463166f1f0325"
  },
  {
    "url": "views/ee/tinyascen.html",
    "revision": "e8e07077e26fbc1ea58466cf7688b64c"
  },
  {
    "url": "views/freetalk/android.html",
    "revision": "1724424ce322bdbc1fdc7229344160b7"
  },
  {
    "url": "views/freetalk/cicd/fix.html",
    "revision": "8a38df2ccf1b80bf59d266febd950d11"
  },
  {
    "url": "views/freetalk/color.html",
    "revision": "efa68042454b1140dd89d7d16d2e7eab"
  },
  {
    "url": "views/freetalk/docker00.html",
    "revision": "f753d48584864430dfa946ae3b7ee9f5"
  },
  {
    "url": "views/freetalk/Fourier.html",
    "revision": "98adaa5ad071c1005dddd96c57c500ff"
  },
  {
    "url": "views/freetalk/ip0.html",
    "revision": "8671936c6469212ba5ca83bec088453d"
  },
  {
    "url": "views/freetalk/picgo.html",
    "revision": "3690d04924874772be9096997441160e"
  },
  {
    "url": "views/freetalk/self_improvement.html",
    "revision": "d72c707b54228296e138c8928e9631a5"
  },
  {
    "url": "views/freetalk/spider/github.html",
    "revision": "342cef65b96000f6be913a8667c62122"
  },
  {
    "url": "views/freetalk/spider/zhihu.html",
    "revision": "64ff394e4a8f696e7772bfed7770dbaf"
  },
  {
    "url": "views/freetalk/teamwork.html",
    "revision": "a4aaa097e187f723b4f265c377b2ca8c"
  },
  {
    "url": "views/freetalk/vsc/tools.html",
    "revision": "7d1ac3b3fda3161137363f8fc94d9c10"
  },
  {
    "url": "views/freetalk/why.html",
    "revision": "b61c75cb943eb08a894e5711b782d894"
  },
  {
    "url": "views/freetalk/wsl2/note.html",
    "revision": "2e2f585ee1acc34a065570eedf933c2c"
  },
  {
    "url": "views/freetalk/wsl2/wsl.html",
    "revision": "37a92c5f75736f9ef753dbc6323266d4"
  },
  {
    "url": "views/freetalk/wsl2/wslg.html",
    "revision": "0997fba1323bdb7d9ef6e2f32b89cc55"
  },
  {
    "url": "views/game/16.html",
    "revision": "e61620e9ce41e8d108826a832ff2ec55"
  },
  {
    "url": "views/game/live2d/weblive2d.html",
    "revision": "5e027865f13c78dd72905f54bc840b43"
  },
  {
    "url": "views/game/unity/AR.html",
    "revision": "ce7c0716cee063aa842bf498cffd88e2"
  },
  {
    "url": "views/game/vulkan/note0.html",
    "revision": "ed0a5894bef7529ee807c884c2d89c1a"
  },
  {
    "url": "views/index.html",
    "revision": "ee339fa502bed13fd077bf14a7d00c9a"
  },
  {
    "url": "views/notes/aibug00.html",
    "revision": "c9834d6b5e54a35bfde84d705bb14eee"
  },
  {
    "url": "views/notes/Edge.html",
    "revision": "0e3def9e6eaecc7b0cdb038062e795b0"
  },
  {
    "url": "views/notes/git.html",
    "revision": "5e5db2bda6cd505e32d90308102f06bb"
  },
  {
    "url": "views/notes/Googlebug.html",
    "revision": "689a201a5023631ffdb0df76a5f27feb"
  },
  {
    "url": "views/notes/linux.html",
    "revision": "2a1c1f34a3c12e24e814278dfa58e03e"
  },
  {
    "url": "views/notes/linuxbug00.html",
    "revision": "3f1d283c64ed1dc3e19ce6e00a966a69"
  },
  {
    "url": "views/notes/markdown.html",
    "revision": "cca935d639d0e3b7ade7c7ab34adec92"
  },
  {
    "url": "views/notes/oamnote.html",
    "revision": "d1620aca48f833d3ad29df15edc3d0ac"
  },
  {
    "url": "views/notes/opencvbug.html",
    "revision": "0a2534e8a2902f0564fad90f61546d5b"
  },
  {
    "url": "views/notes/pycocotools.html",
    "revision": "ebc9dc6354879ed052139d0aa4ee1f87"
  },
  {
    "url": "views/notes/pypi.html",
    "revision": "7bb82988655624fb48e4368ce5fc460f"
  },
  {
    "url": "views/notes/Pythonbug.html",
    "revision": "cb51214402d3906e85343de1fb6e3094"
  },
  {
    "url": "views/notes/vim.html",
    "revision": "f6e76eac594751ced16c67bb2a8b6a40"
  },
  {
    "url": "views/notes/webbug.html",
    "revision": "a6e646927b7e5d05c5adfe292cf5625a"
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
