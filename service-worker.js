if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return d[e]||(i=new Promise((async i=>{if("document"in self){const d=document.createElement("script");d.src=e,document.head.appendChild(d),d.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!d[e])throw new Error(`Module ${e} didn’t register its module`);return d[e]}))},i=(i,d)=>{Promise.all(i.map(e)).then((e=>d(1===e.length?e[0]:e)))},d={require:Promise.resolve(i)};self.define=(i,r,a)=>{d[i]||(d[i]=Promise.resolve().then((()=>{let d={};const c={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return d;case"module":return c;default:return e(i)}}))).then((e=>{const i=a(...e);return d.default||(d.default=i),d}))})))}}define("./service-worker.js",["./workbox-543be79b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2019/12/26/hello-world/index.html",revision:"17d3c6ad260f2abdc9866d8a1d476460"},{url:"2020/01/20/暴力提升网速——多拨/index.html",revision:"da8c7596558bd0542141005bddb31670"},{url:"2020/03/24/windows-XP安装pyqt5和pyinstaller的坑/index.html",revision:"ac5c5914bfef8f245ad01159b08a86e1"},{url:"2020/05/22/travis-ci在Node.js-v14.0下自动构建hexo报错/index.html",revision:"f191d21f2eeba4989d842d456e5b9c94"},{url:"2021/09/13/使用Cloudflare Workers反向代理/index.html",revision:"ce4b0a28071ac384a736fe2c3038b163"},{url:"2021/09/30/win11启用wsl2/index.html",revision:"181dd9e12f143cf1a2a146df6ff57e61"},{url:"2021/10/02/开机执行python脚本自动登录SNNU校园网/index.html",revision:"07868406d8565fabf897d20b0a034825"},{url:"2021/10/12/安全规约第一讲/index.html",revision:"cf49f28a3419b18a4f3757a20f8b4260"},{url:"2021/10/15/常见经典算法AND背包问题/index.html",revision:"452b08a70ca1789bf80a0629b418fb52"},{url:"2021/10/16/Win1011网络断连，无网络原因及解决方法/index.html",revision:"f958b8df2be996a2dd2bfc80aeddbb94"},{url:"2021/10/21/Linux命令手册/index.html",revision:"fdb436c7f19ac13f0ee72650c6559915"},{url:"2022/02/09/清蒸贝壳/index.html",revision:"a82f6de35b8bf37c73d2c0a02c1d922a"},{url:"2022/02/09/糖醋排骨/index.html",revision:"bbe597e2fb4b695538e483d77c67f301"},{url:"2022/02/09/紫菜蛋花汤/index.html",revision:"f3bb02fd831d201475d9b185e431d697"},{url:"2022/02/09/红烧虾/index.html",revision:"93f11aaa4cd9f103325af672845707e7"},{url:"2022/02/09/红烧鱼/index.html",revision:"8d74ca362b843629e340168973b965f5"},{url:"2022/02/10/炒扇贝肉/index.html",revision:"da6f58964afbab581bf8c196e14506a7"},{url:"2022/02/10/炒烤肉/index.html",revision:"7772b545d607c0465ec241e8bf6d3321"},{url:"2022/02/10/蒸饭（高压锅速成版）/index.html",revision:"f7963b1f94c64fdf40d1901823c226b6"},{url:"2022/02/10/红烧多宝鱼/index.html",revision:"3c9e4655f90925d892f0674b13d59983"},{url:"2022/02/11/蒸面条/index.html",revision:"983efbab4b202782b1bee59b7424830e"},{url:"2022/02/12/抓饭/index.html",revision:"8249d75cc149ebe662401c8ac69e9787"},{url:"2022/03/02/安全规约第二讲——有限域，群，双线性对，哈希函数/index.html",revision:"6b18f914c8d10fd9e999dc8b7ebed1d9"},{url:"2022/03/03/安全规约第三讲——困难问题和安全规约的基本解释/index.html",revision:"0fba732c353aa1d9793e073411ef934f"},{url:"2022/03/04/安全规约第四讲——安全规约入门/index.html",revision:"070e1c2427db990053c09d005692e78c"},{url:"2022/03/05/安全规约第五讲——安全规约的困难性/index.html",revision:"8256cf3585b801b62eb177eb8309d413"},{url:"2022/05/10/SNNU校园网白嫖&校园网nas搭建指南/index.html",revision:"9520d86e9cfc0c9a3fcbc8369ae5220c"},{url:"2022/05/31/jsdelivr被墙解决方案——使用自己的域名解析github图床防止被dns污染/index.html",revision:"b05ee9e121f946e7f26cb31c3079c29b"},{url:"404.html",revision:"c3f249d78699e3ed3d92f3551c886192"},{url:"about/index.html",revision:"310227103c4313b63abd138f3f39ca11"},{url:"archives/2019/12/index.html",revision:"62c877ba84ff4ea5c924138b72527258"},{url:"archives/2019/index.html",revision:"7e7d0e7bcb3f9f3c24abb6240224328a"},{url:"archives/2020/01/index.html",revision:"02e01a1bfe7abdfadf1b997ca29126e7"},{url:"archives/2020/03/index.html",revision:"46164339cf9a55594db46563efeec5fa"},{url:"archives/2020/05/index.html",revision:"68e0a3c562e1a8d0d8e976babad8fce4"},{url:"archives/2020/index.html",revision:"46fc68f83fdbd0f45549ef505751c170"},{url:"archives/2021/09/index.html",revision:"e4df44be603fe0144c66c1962e55bff9"},{url:"archives/2021/10/index.html",revision:"c4d532f35ab88ec4d944cceedf433ef1"},{url:"archives/2021/index.html",revision:"26ac18478368697edc9f6cbcbbcc0a67"},{url:"archives/2022/02/index.html",revision:"7bc511be4ea1253533a1c90579fe53b5"},{url:"archives/2022/02/page/2/index.html",revision:"305e9f86f268622dce4e358a5fc288c8"},{url:"archives/2022/03/index.html",revision:"85023ec5e90222c4404aac079af1d2cc"},{url:"archives/2022/05/index.html",revision:"3ddbe44e744ee8eead31b0f37c58273d"},{url:"archives/2022/index.html",revision:"ca77e13892e295e9b5604c626d51236f"},{url:"archives/2022/page/2/index.html",revision:"9447dd60cbb23245c2973746ce56c1e8"},{url:"archives/index.html",revision:"735118e61e1da53663eb004e8abee3c8"},{url:"archives/page/2/index.html",revision:"f7be73842747cdee77bdac7895904b7f"},{url:"archives/page/3/index.html",revision:"ff919a074ca3d3d913ee4fd1343320ba"},{url:"categories/index.html",revision:"2f04d0e823016fba9e834e5db9c703a7"},{url:"categories/Linux/index.html",revision:"37b9da92d41126220c82b36d80cc94a7"},{url:"categories/python/index.html",revision:"dd260844a46947147c13dd5006e23ab7"},{url:"categories/SNNU/index.html",revision:"93e2ecdabb6868359240791e648bc11d"},{url:"categories/博客/index.html",revision:"fc90f2c1f6698b1f16d67b45040604ca"},{url:"categories/厨房里的秘密/index.html",revision:"92bdb40e6a194a20387f21b3560d7180"},{url:"categories/厨房里的秘密/page/2/index.html",revision:"e5fd45d020687fabf1c696396658bacf"},{url:"categories/安全规约/index.html",revision:"d399f2b25e42d88a3056d93862f18978"},{url:"categories/宽带/index.html",revision:"441c009cfc27dc16f7d3fc2260f62aea"},{url:"categories/技术/index.html",revision:"babd70d4f9ec5b60244a32c316d8d30c"},{url:"categories/算法设计/index.html",revision:"25ee1002bdd50a939047b52f7197d705"},{url:"css/index.css",revision:"da520131f3d84f75e2b4d3f337a1bce9"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/index.html",revision:"61bc1fd47b752bc81745752b249e7f3a"},{url:"hexoimg/about_me.jpg",revision:"30135f02dbbf18b1e7bac3a84b6bace7"},{url:"hexoimg/archive_img.jpg",revision:"b49f3f1be034292343d8523cf5eff418"},{url:"hexoimg/bg1.png",revision:"66090af1abb0720a27a763d937748e70"},{url:"hexoimg/bg2.jpg",revision:"1fa68f2c8b22b8df11315eb687dd651e"},{url:"hexoimg/bg3.jpg",revision:"c118eb0eae96a70760ea93dc08af3121"},{url:"hexoimg/bg4.jpg",revision:"13773ec1c6324d9d984875d7916406d5"},{url:"hexoimg/bg5.jpg",revision:"99abbf6c539a0396c75d2365ae6c39d9"},{url:"hexoimg/category_img.jpg",revision:"27b3a1740aa4b18d048a415e7ed00280"},{url:"hexoimg/music.jpg",revision:"3284d20fbc8827a8d19e4e735ef36f93"},{url:"hexoimg/tag_img.jpg",revision:"d136fad0780208c3e353035c9ff5fe9c"},{url:"img/404.jpg",revision:"cae3eebf3121aedff311f6eea7e76a5e"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/avatar.png",revision:"34d7feb6ea8ef6a36a675634303e36ef"},{url:"img/comment_bg.png",revision:"34a79bf208a1c3bee9d6e491a00cd369"},{url:"img/cover.jpg",revision:"ad85f42ead6c51a701ab62a6a5681b18"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/icp.png",revision:"6e26aed5ced63bc60524cc736611d39e"},{url:"img/index.jpg",revision:"dce4b2c6fe3c36d9c9e8059f64f4d506"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"img/post_loadding.svg",revision:"2901bcb74c0f032ed139676618432304"},{url:"img/post.jpg",revision:"8fb7d10986b67a1dcba885f50a5de3a9"},{url:"index.html",revision:"7e9e90da4070f42aa8e0cb64de25c25e"},{url:"js/main.js",revision:"01f62452fd05335569c6341d3ac0f52b"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"dcf72f416b8f223917fc46dc66fd5681"},{url:"live2dw/assets/moc/hijiki.2048/texture_00.png",revision:"817ca52e35fef3ef3a452127d1c88f43"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"music/index.html",revision:"b6672a11f43149b5bf81c03e7c044072"},{url:"page/2/index.html",revision:"be55b11c3daa0bf1c45033489f031b8a"},{url:"page/3/index.html",revision:"e5c76a6afd655e1bcd49c18cc86b10a8"},{url:"tags/hexo/index.html",revision:"8abc7f41adbf067b9ce9ba4892a383ce"},{url:"tags/index.html",revision:"c62b06b7afef00a87f0c59f72170bac2"},{url:"tags/Linux/index.html",revision:"9112c76da843b00ca77dbb483f9bc2ea"},{url:"tags/pyqt5/index.html",revision:"bedeb0357cc8c67c63d2dd6d45c2f32c"},{url:"tags/serverless/index.html",revision:"e7128b1182ecce39d84553e92619a42f"},{url:"tags/travis-CI/index.html",revision:"e362d4a0211d68ac2a8c0c55bbea8f28"},{url:"tags/v2ray/index.html",revision:"825452fec88a94d4b4a62577289e1f4a"},{url:"tags/wifi/index.html",revision:"a04b63e52f82426ddd69cf0da427a2df"},{url:"tags/windowsXP/index.html",revision:"1c6f75f53cdb3f9ebbaf3c2703633fd6"},{url:"tags/多拨/index.html",revision:"9946e8d10665423097f2370fcd955ab3"},{url:"tags/安全规约/index.html",revision:"b8d7d156669d4d5063cef59523ab97ce"},{url:"tags/家的味道/index.html",revision:"282c04c323df94f0242093747f5c7574"},{url:"tags/家的味道/page/2/index.html",revision:"46c0a35fab7833912013807e90a4d6d3"},{url:"tags/宽带/index.html",revision:"14b0ffbdb23277e34e217007f39600bd"},{url:"tags/技术/index.html",revision:"b6d7f19253fb8732500740717b52bcbf"},{url:"tags/提速/index.html",revision:"a18b63387dcdafae1f84937320d31998"},{url:"tags/算法/index.html",revision:"6d376b3bada80014cbd9ea4ab8c8fb5d"},{url:"tags/网络/index.html",revision:"6d26f4271e924b25332403e8eca9615b"},{url:"tags/虚拟机/index.html",revision:"96cb341792d434a574e7f055169f1bd5"},{url:"tags/语雀/index.html",revision:"5cd05351a78312d961e1fae2c6115e81"}],{})}));
//# sourceMappingURL=service-worker.js.map
