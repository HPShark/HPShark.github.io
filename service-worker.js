if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return d[e]||(i=new Promise((async i=>{if("document"in self){const d=document.createElement("script");d.src=e,document.head.appendChild(d),d.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!d[e])throw new Error(`Module ${e} didn’t register its module`);return d[e]}))},i=(i,d)=>{Promise.all(i.map(e)).then((e=>d(1===e.length?e[0]:e)))},d={require:Promise.resolve(i)};self.define=(i,a,r)=>{d[i]||(d[i]=Promise.resolve().then((()=>{let d={};const c={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return d;case"module":return c;default:return e(i)}}))).then((e=>{const i=r(...e);return d.default||(d.default=i),d}))})))}}define("./service-worker.js",["./workbox-543be79b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2019/12/26/hello-world/index.html",revision:"e6e1264dbf4a217022f034e20e82810c"},{url:"2020/01/20/暴力提升网速——多拨/index.html",revision:"15fabae8eaa7ba1972d6444253ac6fbb"},{url:"2020/03/24/windows-XP安装pyqt5和pyinstaller的坑/index.html",revision:"1c7cce21e6138e9b7e0cf19136654d95"},{url:"2020/05/22/travis-ci在Node.js-v14.0下自动构建hexo报错/index.html",revision:"ccd4c514245ff015a139ffaef1b972e4"},{url:"2021/09/13/使用Cloudflare Workers反向代理/index.html",revision:"284d89cfa8f481992743d1f26f1ddf33"},{url:"2021/09/30/win11启用wsl2/index.html",revision:"93ccea730f5f21186dd16573238a353a"},{url:"2021/10/02/开机执行python脚本自动登录SNNU校园网/index.html",revision:"45215ebdc2a26747b6d65d44e76d6835"},{url:"2021/10/12/安全规约第一讲/index.html",revision:"3a5d23376675ee8cef5d6373711ef268"},{url:"2021/10/15/常见经典算法AND背包问题/index.html",revision:"bf2318f4a157a5cd17626748c01f13a7"},{url:"2021/10/16/Win1011网络断连，无网络原因及解决方法/index.html",revision:"a18bedc8080a23b6727a755728eda80b"},{url:"2021/10/21/Linux命令手册/index.html",revision:"93466956c3b478b9113d1b1959763114"},{url:"2022/02/09/清蒸贝壳/index.html",revision:"5dd20c68835323b01de30ddad48aa11b"},{url:"2022/02/09/糖醋排骨/index.html",revision:"17803bce6d5e6a658c7daf6f65dcdc10"},{url:"2022/02/09/紫菜蛋花汤/index.html",revision:"ddb15bcf2798d57720e2082cf56d59d3"},{url:"2022/02/09/红烧虾/index.html",revision:"38779fd0484e8ec20a3172cf0bc81b75"},{url:"2022/02/09/红烧鱼/index.html",revision:"a7baba4b1e26d1f3c8955b0cdf7b195a"},{url:"2022/02/10/炒扇贝肉/index.html",revision:"62400353e3eec4a530cf7055e93c1fb6"},{url:"2022/02/10/炒烤肉/index.html",revision:"dbcb406180789c2675ddc66362ccdf6b"},{url:"2022/02/10/蒸饭（高压锅速成版）/index.html",revision:"a405b52a989e5beae604c1a8d4f69f9c"},{url:"2022/02/10/红烧多宝鱼/index.html",revision:"dea9a64eec6a3dbda76390ede6ebb599"},{url:"2022/02/11/蒸面条/index.html",revision:"3e76ed70f58258208908bedbd36c3227"},{url:"2022/02/12/抓饭/index.html",revision:"7e0e3dfecdf203fd3b601fba1ffc5ae9"},{url:"2022/03/02/安全规约第二讲——有限域，群，双线性对，哈希函数/index.html",revision:"9b6e3d2a68464b923df6d40f7baadffc"},{url:"2022/03/03/安全规约第三讲——困难问题和安全规约的基本解释/index.html",revision:"bd1572561472e8166c35dc121bbeed71"},{url:"2022/03/04/安全规约第四讲——安全规约入门/index.html",revision:"1c00219effd47d0ee1aa5ee9cdf873a8"},{url:"2022/03/05/安全规约第五讲——安全规约的困难性/index.html",revision:"b7925171420ec070cae87856240269d4"},{url:"2022/05/10/SNNU校园网白嫖&校园网nas搭建指南/index.html",revision:"ff9ede83a9b810d4e20e09d2086d1940"},{url:"2022/05/31/jsdelivr被墙解决方案——使用自己的域名解析github图床防止被dns污染/index.html",revision:"a13f74bce6384850d5b5519d59665c0d"},{url:"2022/06/21/习近平总书记在庆祝中国共产党成立100周年大会上的讲话 Part.23/index.html",revision:"8e5f736191f41d7b808c438b3e769b12"},{url:"2022/07/10/ubuntu流量统计工具——vnstat/index.html",revision:"80fa212be8b5d221cc889c2b15125155"},{url:"2023/04/03/PC,树莓派,安卓的miracl库环境配置/index.html",revision:"fb4d122de678d5304445801c6a52f583"},{url:"2023/10/19/群辉container Manager修复思源笔记v2.10.x的accessAuthCode执行命令的错误/index.html",revision:"7ba83681faae1fac0b511749e8f54359"},{url:"2023/10/24/语法大学习/index.html",revision:"2614092f31610e2899226227a193f4ab"},{url:"404.html",revision:"cdf413f675c10407eaa1de58d57bc251"},{url:"about/index.html",revision:"106d1950ede61c3073f81a1b6b293d73"},{url:"archives/2019/12/index.html",revision:"f3471b86e911226dd8461cf756ece170"},{url:"archives/2019/index.html",revision:"fff8ed42c02ceb9a799db043e40b0690"},{url:"archives/2020/01/index.html",revision:"a4ef2ad4e7845e5896c72ca091ad2302"},{url:"archives/2020/03/index.html",revision:"72299e0c2bfd7e4572e3705482fab122"},{url:"archives/2020/05/index.html",revision:"70bfac1cb3a28c66785c0f52b97b0bd3"},{url:"archives/2020/index.html",revision:"b9d57c7f2ee73822f675cdb1df476535"},{url:"archives/2021/09/index.html",revision:"5f65f838ff50a1fea37cd79da70b29ac"},{url:"archives/2021/10/index.html",revision:"9b2beb5aa2e82da20f235d965d8b7426"},{url:"archives/2021/index.html",revision:"63041482fcebb6d9bda4753d084d53cd"},{url:"archives/2022/02/index.html",revision:"df1d5f996b73ce1604af9e77702465a4"},{url:"archives/2022/02/page/2/index.html",revision:"7d92cbda0e5ad6c67f7d14dfcac41d2e"},{url:"archives/2022/03/index.html",revision:"9545b99e54ac440ef811902dde72da1a"},{url:"archives/2022/05/index.html",revision:"44f7249ca1cbff4a19aa2350f7b976a9"},{url:"archives/2022/06/index.html",revision:"666c533ada50e58e6b581bb0435ea053"},{url:"archives/2022/07/index.html",revision:"8779e8bddb88ef34c8d1bb79e0dd4635"},{url:"archives/2022/index.html",revision:"4f2401255e0de47543844e130e0e50b9"},{url:"archives/2022/page/2/index.html",revision:"0797f818be25f4a5b5c818324c58b1ec"},{url:"archives/2023/04/index.html",revision:"daa006b811eef848be0bc691d67f4f02"},{url:"archives/2023/10/index.html",revision:"40d1dfe5a2e1876d86f256def5a0940e"},{url:"archives/2023/index.html",revision:"c5915442b9cf6b2eb0d81f8c6935de54"},{url:"archives/index.html",revision:"45e5df873ae623eddc01b883880b7516"},{url:"archives/page/2/index.html",revision:"1306dbec944cef0af86bf7a7b8d3b30e"},{url:"archives/page/3/index.html",revision:"6a4a75fa30fce13da94a18cca3d04632"},{url:"archives/page/4/index.html",revision:"6a3c2bb1bf07a93d159ff917f34ea4e5"},{url:"categories/index.html",revision:"57b73421e90afa3f60e7c22ae36cc77f"},{url:"categories/Linux/index.html",revision:"0002146fdd2a11dbf8abda85e73f9687"},{url:"categories/python/index.html",revision:"6591a0072fbf925b53d03339537966ed"},{url:"categories/SNNU/index.html",revision:"73dbf3a806025fc8ad9bed5488c5145f"},{url:"categories/博客/index.html",revision:"2f541436b57d98bb3ca32b44821c04ca"},{url:"categories/厨房里的秘密/index.html",revision:"43c98c58d1de0e9ba259c7732efec1a9"},{url:"categories/厨房里的秘密/page/2/index.html",revision:"608d7a4ba8f904de21c1a8dea16d8466"},{url:"categories/学习/index.html",revision:"1f508b1d85e4c5333974ddd0accce810"},{url:"categories/安全规约/index.html",revision:"48d16617e54ac193ca560336b1e665cd"},{url:"categories/实验室大杂烩/index.html",revision:"4be314c50c3bdeff0db0756cdb5af832"},{url:"categories/宽带/index.html",revision:"814362da41dc3e7f3953715948634045"},{url:"categories/技术/index.html",revision:"c025a6bbc30336684a73b7fef95898b5"},{url:"categories/算法设计/index.html",revision:"0b8416b449b4cef59b5fc75d349cdd3a"},{url:"categories/英语作业/index.html",revision:"61fa7bfa0364346a814f0c669638fda6"},{url:"css/index.css",revision:"3681eaa0c0e8046920dd699bd7978378"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/index.html",revision:"6d1a74c37e479cba97aea3448fcc315a"},{url:"hexoimg/about_me.jpg",revision:"30135f02dbbf18b1e7bac3a84b6bace7"},{url:"hexoimg/archive_img.jpg",revision:"b49f3f1be034292343d8523cf5eff418"},{url:"hexoimg/bg1.png",revision:"66090af1abb0720a27a763d937748e70"},{url:"hexoimg/bg2.jpg",revision:"1fa68f2c8b22b8df11315eb687dd651e"},{url:"hexoimg/bg3.jpg",revision:"c118eb0eae96a70760ea93dc08af3121"},{url:"hexoimg/bg4.jpg",revision:"13773ec1c6324d9d984875d7916406d5"},{url:"hexoimg/bg5.jpg",revision:"99abbf6c539a0396c75d2365ae6c39d9"},{url:"hexoimg/category_img.jpg",revision:"27b3a1740aa4b18d048a415e7ed00280"},{url:"hexoimg/music.jpg",revision:"3284d20fbc8827a8d19e4e735ef36f93"},{url:"hexoimg/tag_img.jpg",revision:"d136fad0780208c3e353035c9ff5fe9c"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"2ec56c1d90ca412d8042a1b3891865eb"},{url:"js/main.js",revision:"83ea4e2ab7b0c8206a90aa557cd491c3"},{url:"js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"link/index.html",revision:"5153a4351eba873456b1ee243a3bd774"},{url:"live2dw/assets/moc/hijiki.2048/texture_00.png",revision:"817ca52e35fef3ef3a452127d1c88f43"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"music/index.html",revision:"6f0b46669bf7dc2908b481157bd23780"},{url:"page/2/index.html",revision:"affbdadf3c964e5e65945a6d00d441b1"},{url:"page/3/index.html",revision:"f48fc903d3a8773fc0c3925715b566d6"},{url:"page/4/index.html",revision:"cd5ea59acbab6177a15660bdc54db1b0"},{url:"tags/docker/index.html",revision:"dbc6d97362cd22c9698ce3acfebd46e0"},{url:"tags/hexo/index.html",revision:"e3bbf320692f67362b568dc490643d6a"},{url:"tags/index.html",revision:"367269a13b0682b4ea1f34a9de68ed16"},{url:"tags/Linux/index.html",revision:"32dc4462108c65b4b4806cce9602015a"},{url:"tags/miracl/index.html",revision:"96b900b2a4f9de6653688e17d5ecfd4e"},{url:"tags/pyqt5/index.html",revision:"dd43446ad31cb6d31518f10e74d706df"},{url:"tags/serverless/index.html",revision:"5b54804020fb9726384e0805f82d646b"},{url:"tags/travis-CI/index.html",revision:"45aeaa1e9b38ac3cc5526f63e522eaee"},{url:"tags/v2ray/index.html",revision:"76c48f19ca358dc97335e23fa4c06c7c"},{url:"tags/wifi/index.html",revision:"70f3b2137aa48a3f628a1658a0e1da8a"},{url:"tags/windowsXP/index.html",revision:"40412d5a4699ff8bd86eca6e3dfe5567"},{url:"tags/交叉编译/index.html",revision:"a563e62af9ad3f1bce6084ee4daf83b6"},{url:"tags/多拨/index.html",revision:"dfb1fef7314c85a934820f9b83929ac5"},{url:"tags/学习/index.html",revision:"92690001698f4677da98a03a12567f08"},{url:"tags/安全规约/index.html",revision:"7ab881ca22915e66339cf6785890f916"},{url:"tags/家的味道/index.html",revision:"d09f04d60b337d92c4399e7d6d071979"},{url:"tags/家的味道/page/2/index.html",revision:"f1df6351a791d4b2bf2779b905bfae6e"},{url:"tags/宽带/index.html",revision:"23ff55c9e88d4b93e46a708e2a45f49f"},{url:"tags/技术/index.html",revision:"fe6031e3a6371399e96de1c6bb61955c"},{url:"tags/提速/index.html",revision:"edf1b2c5c4fc08c916cdeff77ec67e63"},{url:"tags/算法/index.html",revision:"a1d45ef56ea129ba589c525cf8f7af50"},{url:"tags/网络/index.html",revision:"0592a7cb20734ef92fb1acf79724d2d9"},{url:"tags/群晖/index.html",revision:"a5c06e502784dacc8396f684943d2c06"},{url:"tags/英语/index.html",revision:"78049b03e9faf258da98431ac4f77f59"},{url:"tags/虚拟机/index.html",revision:"c40b54e7bd9699c7d0e94055fd3cb040"},{url:"tags/论文/index.html",revision:"598b559bd369e170feace1f813982ccb"},{url:"tags/语文/index.html",revision:"d8e496399210c1323d04821e73b30678"},{url:"tags/语雀/index.html",revision:"e5926180a21e87c03b22b2f65ef6e048"}],{})}));
//# sourceMappingURL=service-worker.js.map
