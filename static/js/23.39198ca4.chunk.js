(this.webpackJsonpreact_openmeta=this.webpackJsonpreact_openmeta||[]).push([[23],{217:function(e,t,a){"use strict";a(0);var c=a(43),n=a(6),l=a(139),s=a(218),i=a.n(s),o=a(4);t.a=Object(n.j)(Object(c.b)("store")(Object(c.c)(function(e){var t=e.store,a=e.history,c=e.type,e=t.config,t=e.langTextList,e=e.lang,t=t.Com,n=Object(l.a)({la:e});return Object(o.jsx)("button",{className:i.a.back,onClick:function(){"home"==c?a.push(n.Home):window.history.back()},children:t["home"==c?"BackHome":"Back"]})})))},218:function(e,t,a){e.exports={mainContent:"Back_mainContent__UGPl3",start:"Back_start__2uEOW",end:"Back_end__rmaEn",align:"Back_align__2--cJ",align_center:"Back_align_center__APnN6",align_between:"Back_align_between__XJwGe",align_around:"Back_align_around__I7Ztu",horizontal_between:"Back_horizontal_between__14IKJ",horizontal_center:"Back_horizontal_center__17D8i",clamp:"Back_clamp__3PNjD",clamp2:"Back_clamp2__3FweH",clamp3:"Back_clamp3__8pMqo",clamp4:"Back_clamp4__1wW88",back:"Back_back__jnBND"}},686:function(e,t,a){e.exports={mainContent:"Wallet_mainContent__1m2Il",start:"Wallet_start__21n3k",end:"Wallet_end__3b0BU",align:"Wallet_align__QCc6h",align_center:"Wallet_align_center__3DtSq",align_between:"Wallet_align_between__2VEIi",align_around:"Wallet_align_around__2CKR4",horizontal_between:"Wallet_horizontal_between__9hKpV",horizontal_center:"Wallet_horizontal_center__1EYDw",clamp:"Wallet_clamp__3Pde-",clamp2:"Wallet_clamp2__1xS8Q",clamp3:"Wallet_clamp3__2XZYc",clamp4:"Wallet_clamp4__2P70l",main:"Wallet_main__2iVsn"}},715:function(e,t,a){"use strict";a.r(t);var u=a(44),h=a(135),c=a(30),p=a.n(c),n=a(43),l=a(6),g=a(0),w=a(142),O=a(139),x=a.p+"static/media/metamask.6dcf68e7.svg",f=a(9),k=a(217),v=a(158),N=a(181),c=a(686),W=a.n(c),B=a(4);t.default=Object(l.j)(Object(n.b)("store")(Object(n.c)(function(e){var t=e.store,n=e.history,l=t.config,s=t.user,a=t.lang,c=l.isPC,i=l.chainName,o=l.timeInterval,e=l.langTextList,r=l.account,_=l.backRouter,t=Object(g.useState)(!1),t=Object(h.a)(t,2),m=t[0],j=t[1],b=Object(g.useRef)(),e=e.Wallet,d=Object(O.a)({la:a});Object(g.useEffect)(function(){return m&&(b.current=setTimeout(function(){j(!1)},2e3)),function(){clearTimeout(b.current)}},[m]);a=Object(g.useCallback)(function(){var t;m||window.ethereum&&Object(w.f)().then((t=Object(u.a)(p.a.mark(function e(a){var t,c;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(l.saveAccount(a[0]),window.localStorage.getItem("token")){e.next=9;break}return j(!0),e.next=6,Object(w.v)(a[0]);case 6:t=e.sent,c=JSON.stringify({timestamp:parseInt((new Date).getTime()/1e3)+o}),t.signMessage(c).then(function(e){s.setLogin({message:c,signature:e,chain:i},a[0]).then(function(e){var t=e.code,e=e.data;0==t&&(window.localStorage.setItem("token",e.jwt),s.getUserInfo({address:a[0]},a[0]).then(function(e){var t=e.code,e=e.data;0==t&&(s.saveUserInfo(e.info),(e=window.localStorage.getItem("localAccount"))?e==r?_?n.push(_):window.history.back():(window.localStorage.setItem("localAccount",r),n.push(d.Home)):(window.localStorage.setItem("localAccount",r),_?n.push(_):window.history.back()))}))})});case 9:case"end":return e.stop()}},e)})),function(e){return t.apply(this,arguments)}))},[m,i]);return Object(B.jsxs)("div",{className:"overflow-hidden",children:[Object(B.jsx)(v.a,{}),Object(B.jsx)("div",{className:"effect ".concat(W.a.main),children:Object(B.jsxs)("div",{className:"container",children:[Object(B.jsx)("div",{className:"pt-20",children:c&&Object(B.jsx)(k.a,{type:"home"})}),Object(B.jsx)("div",{className:"hero__wallets pt-100 pb-50",children:Object(B.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[Object(B.jsx)("div",{className:"logo mb-20",children:Object(B.jsx)("img",{src:f.i,alt:""})}),Object(B.jsx)("h2",{className:"text-center mb-20",children:e.ConnectWallet}),Object(B.jsx)("p",{className:"text-center",children:e.ConnectWalletDesc})]})}),Object(B.jsx)("div",{className:"row justify-content-center",children:Object(B.jsx)("div",{className:"col-lg-9",children:Object(B.jsx)("div",{className:"wallets",children:Object(B.jsx)("div",{className:"row mb-20_reset",children:Object(B.jsx)("div",{className:"col-lg-4 cp",onClick:a,children:Object(B.jsxs)("div",{className:"box in__wallet space-y-10",children:[Object(B.jsx)("div",{className:"logo",children:Object(B.jsx)("img",{src:x,alt:"logo_community"})}),Object(B.jsx)("h5",{className:"text-center",children:"metamask"}),Object(B.jsx)("p",{className:"text-center",children:e.MetamaskDesc})]})})})})})})]})}),Object(B.jsx)(N.a,{})]})})))}}]);