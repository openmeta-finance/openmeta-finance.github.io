(this.webpackJsonpreact_openmeta=this.webpackJsonpreact_openmeta||[]).push([[22],{205:function(e,t,n){"use strict";var _=n(135),a=n(43),j=n(0),m=n.n(j),p=n(10),c=n(206),h=n.n(c),O=n(5);t.a=Object(a.b)("store")(Object(a.c)(function(e){var t=e.store,n=e.endTime,a=e.type,c=e.callback,i=t.config,r=i.langTextList,s=i.timeInterval,o=i.lang,l=Object(j.useRef)(),e=Object(j.useState)("0d: 0h: 0m: 0s"),t=Object(_.a)(e,2),i=t[0],d=t[1],e=Object(j.useState)({d:0,h:0,m:0,s:0}),t=Object(_.a)(e,2),e=t[0],u=t[1],r=r.Com;Object(j.useEffect)(function(){var e=parseInt((new Date).getTime()/1e3)+("bline"!=a?s:0);return function(e){-1!==l.current&&clearTimeout(l.current);var t=e;l.current=setInterval(function(){0<=t?(d(b(t).countDownDOM),u(b(t).countDownVal),--t):(c&&c(),clearTimeout(l.current))},1e3)}(n-e),function(){clearTimeout(l.current)}},[n]);var b=function(e){var t=e,n=(n=Math.floor(t/86400))<10?"0".concat(n):n,a=(a=Math.floor(t%86400/3600))<10?"0".concat(a):a,e=(e=Math.floor(t%86400%3600/60))<10?"0".concat(e):e,t=(t=Math.floor(t%86400%3600%60))<10?"0".concat(t):t;return{countDownDOM:(0<n?" ".concat(n,"d: ").concat(a,"h: ").concat(e,"m: "):(0<a?" ".concat(a,"h : "):"").concat(e,"m : ")).concat(t,"s"),countDownVal:{d:n,h:a,m:e,s:t}}};return Object(O.jsx)(m.a.Fragment,{children:["detail","bline"].includes(a)?Object(O.jsxs)("div",{className:"".concat(h.a.time," ").concat(h.a[o]),children:[Object(O.jsxs)("div",{className:"item",children:[Object(O.jsxs)("div",{className:"number hours",children:[e.d,Object(O.jsx)("span",{children:":"})]}),Object(O.jsx)("span",{children:r.Day})]}),Object(O.jsxs)("div",{className:"item",children:[Object(O.jsxs)("div",{className:"number minutes",children:[e.h,Object(O.jsx)("span",{children:":"})]}),Object(O.jsx)("span",{children:r.Hour})]}),Object(O.jsxs)("div",{className:"item",children:[Object(O.jsxs)("div",{className:"number seconds",children:[e.m,Object(O.jsx)("span",{children:":"})]}),Object(O.jsx)("span",{children:r.Min})]}),Object(O.jsxs)("div",{className:"item",children:[Object(O.jsx)("div",{className:"number seconds",children:e.s}),Object(O.jsx)("span",{children:r.Sec})]})]}):Object(O.jsxs)("div",{className:h.a.timebar,children:[Object(O.jsx)("img",{src:p.V,alt:""}),Object(O.jsx)("span",{children:i})]})})}))},206:function(e,t,n){e.exports={mainContent:"CountDown_mainContent__2TYil",start:"CountDown_start__2pNsx",end:"CountDown_end__3v6cC",align:"CountDown_align__2rogz",align_center:"CountDown_align_center__3oOD8",timebar:"CountDown_timebar__23m5G",align_between:"CountDown_align_between__27DEj",align_around:"CountDown_align_around__3sgyk",horizontal_between:"CountDown_horizontal_between__3Hn2v",horizontal_center:"CountDown_horizontal_center__8l2xI",clamp:"CountDown_clamp__1SSVV",clamp2:"CountDown_clamp2__1bNyb",clamp3:"CountDown_clamp3__1RhkV",clamp4:"CountDown_clamp4__3b249",time:"CountDown_time__jAb3b",en:"CountDown_en__1tK5C"}},213:function(e,t,n){"use strict";n(0);var a=n(43),c=n(6),i=n(139),r=n(214),s=n.n(r),o=n(5);t.a=Object(c.j)(Object(a.b)("store")(Object(a.c)(function(e){var t=e.store,n=e.history,a=e.type,e=t.config,t=e.langTextList,e=e.lang,t=t.Com,c=Object(i.a)({la:e});return Object(o.jsx)("button",{className:s.a.back,onClick:function(){"home"==a?n.push(c.Home):window.history.back()},children:t["home"==a?"BackHome":"Back"]})})))},214:function(e,t,n){e.exports={mainContent:"Back_mainContent__UGPl3",start:"Back_start__2uEOW",end:"Back_end__rmaEn",align:"Back_align__2--cJ",align_center:"Back_align_center__APnN6",align_between:"Back_align_between__XJwGe",align_around:"Back_align_around__I7Ztu",horizontal_between:"Back_horizontal_between__14IKJ",horizontal_center:"Back_horizontal_center__17D8i",clamp:"Back_clamp__3PNjD",clamp2:"Back_clamp2__3FweH",clamp3:"Back_clamp3__8pMqo",clamp4:"Back_clamp4__1wW88",back:"Back_back__jnBND"}},221:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a={prDis:function(e){return{paddingRight:e}},plDis:function(e){return{paddingLeft:e}},ptDis:function(e){return{paddingTop:e}},pDis:function(e){return{padding:e}},mtDis:function(e){return{marginTop:e}},mbDis:function(e){return{marginBottom:e}},mlDis:function(e){return{marginLeft:e}},mrDis:function(e){return{marginRight:e}},mhDis:function(e){return{marginHorizontal:e}},mvDis:function(e){return{marginVertical:e}},mDis:function(e){return{margin:e}},setWidth:function(e){return{width:e}},setHeight:function(e){return{height:e}},boTW:function(e){return{borderTopWidth:e}},boBW:function(e){return{borderBottomWidth:e}}}},399:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=[{chainId:56,nftContract:"0x7AA2117096aCF0aBf229dDaE32ED9A0994342dfF",blineContract:"0x9d7E680B850426F0F786a76A4445De6000886419",poolContract:"0xb2DE2Eb4de07B69AEAc92644B9D58e2Cd8df0Bd7",openContract:"0x07fcBcf7076fA25fEE15272bBA4adCa0D2d148dc",activeType:"public"},{chainId:56,nftContract:"0x7AA2117096aCF0aBf229dDaE32ED9A0994342dfF",blineContract:"0x9d7E680B850426F0F786a76A4445De6000886419",poolContract:"0xB8A24Df9374d74e3B839C21138251Be3ABAfcB98",openContract:"0x07fcBcf7076fA25fEE15272bBA4adCa0D2d148dc",activeType:"community"},{chainId:56,nftContract:"0x7AA2117096aCF0aBf229dDaE32ED9A0994342dfF",blineContract:"0x9d7E680B850426F0F786a76A4445De6000886419",poolContract:"0x0606037CF5f5Ade1AA67EDc5ACe868916C928C4B",openContract:"0x07fcBcf7076fA25fEE15272bBA4adCa0D2d148dc",activeType:"lock"}]},676:function(e,t,n){e.exports={mainContent:"BlindDetail_mainContent__2zcIO",start:"BlindDetail_start__2T4ZS",main:"BlindDetail_main__1rtyp",right:"BlindDetail_right__3DNgn",price_snum:"BlindDetail_price_snum__uy3yA",end:"BlindDetail_end__3ZC7U",align:"BlindDetail_align__iM44x",align_center:"BlindDetail_align_center__1sjDp",align_between:"BlindDetail_align_between__3XmUr",bnum_time:"BlindDetail_bnum_time__YEbgl",bnumBar:"BlindDetail_bnumBar__1mRAx",align_around:"BlindDetail_align_around__3y3TW",priceBar:"BlindDetail_priceBar__2hiZ_",amountBar:"BlindDetail_amountBar__1f1a9",horizontal_between:"BlindDetail_horizontal_between__pjVtJ",horizontal_center:"BlindDetail_horizontal_center__2DkfC",clamp:"BlindDetail_clamp__1rbvg",clamp2:"BlindDetail_clamp2__H3RFr",clamp3:"BlindDetail_clamp3__2x82y",clamp4:"BlindDetail_clamp4__I22pS",snumBar:"BlindDetail_snumBar__1y63K",btnWrap:"BlindDetail_btnWrap__3kMXS",approve:"BlindDetail_approve__3sg1t",approveLoading:"BlindDetail_approveLoading__aRD7z",confirm:"BlindDetail_confirm__1DBP2",confirmLoading:"BlindDetail_confirmLoading__3FArJ",view:"BlindDetail_view__2rkf5",timeBar:"BlindDetail_timeBar__2okb7",en:"BlindDetail_en__2q9om"}},677:function(e,t,n){e.exports={mainContent:"Tab_mainContent__1qvjn",start:"Tab_start__2cNS6",end:"Tab_end__2pqcb",align:"Tab_align__1QmKP",align_center:"Tab_align_center__2zidf",align_between:"Tab_align_between__3FJdc",detail_tab:"Tab_detail_tab__fSwdV",con0:"Tab_con0__3XCe0",align_around:"Tab_align_around__1OEm9",horizontal_between:"Tab_horizontal_between__1AQ4h",horizontal_center:"Tab_horizontal_center__2n57j",clamp:"Tab_clamp__3duVn",clamp2:"Tab_clamp2__2imFV",clamp3:"Tab_clamp3__1bds8",clamp4:"Tab_clamp4__3xHXa",tab:"Tab_tab__2Zzh9",con1:"Tab_con1__2Orum",en:"Tab_en__1i8Gh"}},702:function(e,t,n){"use strict";n.r(t),n(251);var a=n(253),te=n.n(a),c=(n(252),n(269)),ne=n.n(c),ae=n(44),ce=n(135),a=n(30),ie=n.n(a),c=n(43),re=n(0),se=n.n(re),oe=n(6),le=n(146),de=n(22),ue=n(2),be=n(399),_e=n(139),je=n(205),me=n(404),pe=n(221),a=n(676),he=n.n(a),Oe=n(213),fe=n(157),xe=n(179),ge=n.p+"static/media/minus.6f4c3cd0.svg",ve=n.p+"static/media/plus.7c72c9e7.svg",_=n(10),a=n(677),j=n.n(a),Be=n(5),De=Object(c.b)("store")(Object(c.c)(function(e){var n,a,t=e.store,c=e.info,i=t.config,r=i.langTextList,e=i.lang,t=Object(re.useState)({}),i=Object(ce.a)(t,2),t=i[0],s=i[1],o=["zh-CN","zh-HK"].includes(e)?"ch":"en",i=Object(re.useState)(0),i=Object(ce.a)(i,2),l=i[0],d=i[1],u=r.Tab,b=r.Field;return Object(re.useEffect)(function(){var e=c.raritySetting,t=c.description,n=c.blindBoxBackgroundImage;s({raritySetting:e||[],description:t?t[o]:"FFF",descImg:n||_.n})},[c]),Object(Be.jsx)("div",{className:"box ".concat(j.a.detail_tab," ").concat(j.a[e]),children:Object(Be.jsxs)("div",{className:"space-y-20",children:[Object(Be.jsx)("div",{className:"d-flex justify-content-between mb-50_reset",children:Object(Be.jsx)("ul",{className:"nav nav-tabs ".concat(j.a.tab),children:(a=[],[{text:"BlindDetail",sign:0},{text:"ProjectDesc",sign:1}].forEach(function(e,t){a.push(Object(Be.jsx)("li",{className:"nav-item",onClick:function(){return d(t)},children:Object(Be.jsx)("a",{className:"btn btn-white btn-sm ".concat(t==l?"active":""),children:u[e.text]})},"blindDetailTabListRender_".concat(t)))}),a)})}),Object(Be.jsxs)("div",{children:[0==l&&Object(Be.jsx)("div",{className:"tab-pane ".concat(j.a.con0),children:0<(null===(e=t.raritySetting)||void 0===e?void 0:e.length)&&Object(Be.jsx)("ul",{children:(n=[],t.raritySetting.forEach(function(e,t){n.push(Object(Be.jsxs)("li",{children:[Object(Be.jsx)("div",{children:e.logoImage&&Object(Be.jsx)("img",{src:e.logoImage,alt:""})}),Object(Be.jsxs)("div",{children:[Object(Be.jsx)("h3",{children:e.name[o]}),Object(Be.jsxs)("div",{children:[b.Raruty,Object(Be.jsx)("span",{children:e.rarity})]}),Object(Be.jsxs)("div",{children:[b.Quantity,Object(Be.jsx)("span",{children:e.quantity})]}),Object(Be.jsxs)("div",{children:[b.Probability,Object(Be.jsx)("span",{children:e.probability})]})]})]},"blindDetailRender_".concat(t)))}),n)})}),1==l&&Object(Be.jsxs)("div",{className:"tab-pane ".concat(j.a.con1),children:[Object(Be.jsx)("img",{src:t.descImg,alt:""}),Object(Be.jsx)("p",{children:t.description})]})]})]})})}));t.default=Object(oe.j)(Object(c.b)("store")(Object(c.c)(function(e){function t(){b.getPrimaryDetail({chain_id:l,contractAddress:d}).then(function(e){e.code||H(e)})}var n,a,c,i=e.store,r=e.history,s=Object(re.useRef)(),o=Object(oe.i)(),l=o.chainId,d=o.contract,u=i.config,b=i.nft,_=u.lang,j=u.isPC,m=u.uploadImgPr,p=u.account,h=u.coinList,O=u.langTextList,f=Object(re.useState)(0),x=Object(ce.a)(f,2),g=x[0],v=x[1],B=Object(re.useState)(1),D=Object(ce.a)(B,2),C=D[0],w=D[1],y=Object(re.useState)(0),k=Object(ce.a)(y,2),N=k[0],T=k[1],A=Object(re.useState)(!0),E=Object(ce.a)(A,2),S=E[0],z=E[1],e=Object(re.useState)({lastAmount:0,userCanBuy:{}}),o=Object(ce.a)(e,2),I=o[0],F=o[1],i=O.Button,f=O.Field,x=O.Hint,L=O.Com,B=Object(re.useState)({blindBoxDetailImage:"",tokenAddress:"",remainingNum:0,totalSale:0,salePrice:0,title:""}),D=Object(ce.a)(B,2),y=D[0],H=D[1],k=y.blindBoxDetailImage,A=y.title,E=y.salePrice,e=y.totalSale,P=y.remainingNum,V=y.startTime,o=y.endTime,R=y.boxNftAddress,M=y.tokenAddress,W=Object(_e.a)({la:_}),O=(new Date).getTime(),J=ue.r[l],K=Object(de.d)(h,M,J),B=["zh-CN","zh-HK"].includes(_)?"ch":"en",q=E*C,X=(X=be.a.find(function(e){return e.poolContract.toLowerCase()==d.toLowerCase()}))||{},Z=(c=Object(ae.a)(ie.a.mark(function e(){var t;return ie.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("public"==X.activeType)return e.next=3,Object(le.l)(d,p);e.next=7;break;case 3:t=e.sent,F({lastAmount:t,userCanBuy:{}}),e.next=8;break;case 7:b.getNftBindBoxCheck({account:p,nft_num:C,chain_id:l,contract:X.poolContract}).then(function(e){var t=e.code,e=e.result;0==t&&F(e)});case 8:case"end":return e.stop()}},e)})),function(){return c.apply(this,arguments)}),G=(a=Object(ae.a)(ie.a.mark(function e(){var t;return ie.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t="",M==ue.b)return e.next=4,Object(le.j)(p);e.next=7;break;case 4:t=e.sent,e.next=10;break;case 7:return e.next=9,Object(le.i)(M,p);case 9:t=e.sent;case 10:T(t);case 12:case"end":return e.stop()}},e)})),function(){return a.apply(this,arguments)}),U=(n=Object(ae.a)(ie.a.mark(function e(){var t;return ie.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(M!=ue.b)return e.next=3,Object(le.k)(M,p,d);e.next=13;break;case 3:if(!((t=e.sent)&&0<t)){e.next=8;break}v(3),e.next=13;break;case 8:return v(1),e.next=11,Object(le.h)(M,d,p);case 11:0<e.sent.toString()&&Object(le.s)(M,p,d);case 13:case"end":return e.stop()}},e)})),function(){return n.apply(this,arguments)});Object(re.useEffect)(function(){p&&Z()},[p]),Object(re.useEffect)(function(){return t(),s.current=setInterval(function(){t()},9e3),function(){clearInterval(s.current)}},[]),Object(re.useEffect)(function(){var e;(e=Object(ae.a)(ie.a.mark(function e(){return ie.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:p&&(u.chainId==l?0<P?0<I.lastAmount&&M?S?(G(),U(),z(!1)):[1,2].includes(g)||v(3):v(3):v(6):v(7));case 1:case"end":return e.stop()}},e)})),function(){return e.apply(this,arguments)})()},[y,p,I,u.chainId]);function Q(){var e=(new Date).getTime();return 0<P&&C<=P&&C<=I.lastAmount&&q<=+N&&V<e}function Y(e){"plus"==e&&w(C+1),"minus"==e&&1<C&&w(C-1)}function $(e){if(Object.keys(h).length){var t,e=((null===(t=h[J][K])||void 0===t?void 0:t.usdtPrice)||0)*+e;return Object(de.j)(e,2)}return 0}function ee(e,t,n,a,c){n={apply:"".concat(L.Approve," ").concat(n," ").concat(L[e]),trade:"".concat(L.Trade," ").concat(t," ").concat(n," ").concat(L[e])},ne.a[e.toLowerCase()]({description:Object(Be.jsxs)("div",{children:[Object(Be.jsx)("p",{children:n[c]}),a&&Object(Be.jsx)("a",{href:Object(de.g)(a,J),target:"_blank",rel:"noreferrer",children:"".concat(L.ViewOn," ").concat("en"===_?J:"")})]})})}D=Object(Be.jsx)(me.a,{style:{fontSize:20},spin:!0});return Object(Be.jsxs)("div",{className:"overflow-hidden ".concat(he.a[_]),children:[Object(Be.jsx)(fe.a,{}),Object(Be.jsxs)("div",{className:"container ".concat(he.a.main),children:[j&&Object(Be.jsx)("div",{className:"my-40",children:Object(Be.jsx)(Oe.a,{})}),Object(Be.jsx)("div",{className:"item_details",children:Object(Be.jsxs)("div",{className:"row sm:space-y-20",children:[Object(Be.jsx)("div",{className:"col-lg-5 mr-40",children:Object(Be.jsx)("img",{className:"item_img ".concat(he.a.pic),src:Object(de.e)(m,k),alt:""})}),Object(Be.jsxs)("div",{className:"col-lg-6 ".concat(he.a.right),children:[Object(Be.jsx)("h3",{children:Object(de.m)(A[B])}),Object(Be.jsxs)("div",{className:he.a.price_snum,children:[Object(Be.jsxs)("div",{className:he.a.priceBar,children:[Object(Be.jsx)("span",{children:f.UnitPrice}),Object(Be.jsxs)("div",{children:[0<Object.keys(h).length&&Object(Be.jsx)("img",{src:Object(de.c)(J,M),alt:""}),Object(Be.jsxs)("strong",{children:[E," ",K]})]}),Object(Be.jsxs)("span",{children:["≈$ ",$(E)]})]}),Object(Be.jsxs)("div",{className:he.a.snumBar,children:[Object(Be.jsx)("span",{children:f.ResidueNum}),Object(Be.jsxs)("div",{children:[Object(Be.jsx)("strong",{children:P}),"/",e]})]})]}),Object(Be.jsxs)("div",{className:he.a.bnum_time,children:[Object(Be.jsxs)("div",{className:he.a.bnumBar,children:[Object(Be.jsx)("p",{children:f.BuyNum}),Object(Be.jsxs)("div",{children:[Object(Be.jsx)("img",{src:ge,alt:"",onClick:function(){return Y("minus")}}),C,Object(Be.jsx)("img",{src:ve,alt:"",onClick:function(){return Y("plus")}})]}),Object(Be.jsx)("span",{dangerouslySetInnerHTML:{__html:f.CanBuyAmount(I.lastAmount)}})]}),0<P&&Object(Be.jsxs)("div",{className:he.a.timeBar,children:[Object(Be.jsx)("p",{children:f[O<=V?"StratTime":"EndTime"]}),Object(Be.jsx)(je.a,{endTime:O<=V?parseInt(V/1e3):parseInt(o/1e3),type:"bline",callback:function(){t()}})]})]}),Object(Be.jsxs)("div",{className:he.a.amountBar,children:[f.TotalAmount,Object(Be.jsxs)("strong",{children:[q," ",K]}),"≈$ ",$(q)]}),Object(Be.jsxs)("div",{className:he.a.btnWrap,children:[1===g&&Object(Be.jsx)("button",{className:he.a.approve,onClick:function(){var t;Object(le.a)(M,d).then((t=Object(ae.a)(ie.a.mark(function e(t){var n,a;return ie.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return v(2),e.next=3,t.wait();case 3:n=e.sent,a=n.transactionHash,1===n.status?(ee("Success","",K,a,"apply"),Object(le.s)(M,p,d),v(3)):(v(1),ee("Error","",K,a,"apply"));case 6:case"end":return e.stop()}},e)})),function(e){return t.apply(this,arguments)})).catch(function(e){ee("Error","",K,"","apply")})},children:"".concat(L.Approve)}),2===g&&Object(Be.jsxs)("button",{className:he.a.approveLoading,children:[Object(Be.jsx)(te.a,{indicator:D}),Object(Be.jsx)("span",{style:pe.a.plDis(15),children:"".concat(L.Approve)})]}),3===g&&Object(Be.jsx)("button",{className:Q()?he.a.confirm:"",onClick:function(){function n(e,t){var n;Object(le.c)(e,d,t,p,X.activeType).then((n=Object(ae.a)(ie.a.mark(function e(t){var n,a;return ie.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return v(4),e.next=3,t.wait();case 3:n=e.sent,a=n.transactionHash,1===n.status?(G(),v(3),Z(),ee("Success","","",a,"trade")):(v(3),ee("Error","","",a,"trade"));case 7:case"end":return e.stop()}},e)})),function(e){return n.apply(this,arguments)})).catch(function(e){ee("Error","","","","trade")})}1==C||"public"==X.activeType?n(I.userCanBuy,C):b.getNftBindBoxCheck({account:p,nft_num:C,chain_id:l,contract:X.poolContract}).then(function(e){var t=e.code,e=e.result;0==t?n(e.userCanBuy,C):ee("Error","","","","trade")})},disabled:!Q(),children:"".concat(i.Buy)}),4===g&&Object(Be.jsxs)("button",{className:he.a.confirmLoading,children:[Object(Be.jsx)(te.a,{indicator:D}),Object(Be.jsx)("span",{style:pe.a.plDis(15),children:"".concat(i.Buy)})]}),6===g&&Object(Be.jsxs)(se.a.Fragment,{children:[Object(Be.jsx)("button",{disabled:!0,children:0==P?i.AlreadySellOut:i.AlreadyOver}),Object(Be.jsx)("button",{className:he.a.view,onClick:function(){var e=W.SCollection,t=R;r.push({pathname:"".concat(e,"/").concat(t)})},children:i.ToViewCollection})]}),7===g&&Object(Be.jsx)("button",{disabled:!0,children:"".concat(x.ChainErr)})]})]})]})}),Object(Be.jsx)(De,{info:y})]}),Object(Be.jsx)(xe.a,{})]})})))}}]);