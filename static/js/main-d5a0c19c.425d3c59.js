"use strict";(self.webpackChunkmdex_nft_v3=self.webpackChunkmdex_nft_v3||[]).push([[591],{30162:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(74165),a=t(15861),c=t(47313),u=t(85554),i=t(86399),s=t(71985);function o(n,e){var t=(0,i.Z)()._claimedUsersOperate,o=(0,u.v9)((function(n){return n.config})),f=o.account,p=o.chainId,d=n.receiveStartTime,v=n.receiveEndTime,l=n.userStatus,x=n.activitySN,k=(new Date).getTime(),b=n.chainId,h=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=s.Az[b],n.next=3,t(e,x,f);case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();(0,c.useEffect)((function(){var t=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!f){n.next=44;break}if(b!==p){n.next=41;break}if(!(k<d)){n.next=6;break}e(8),n.next=39;break;case 6:if(!(k<v)){n.next=32;break}n.t0=l,n.next="unReceive"===n.t0?10:"noPermission"===n.t0?12:"receiving"===n.t0?14:"received"===n.t0?22:30;break;case 10:return e(3),n.abrupt("break",30);case 12:return e(9),n.abrupt("break",30);case 14:return n.next=16,h();case 16:if(!n.sent){n.next=20;break}e(11),n.next=21;break;case 20:e(3);case 21:return n.abrupt("break",30);case 22:return n.next=24,h();case 24:if(!n.sent){n.next=28;break}e(6),n.next=29;break;case 28:e(3);case 29:return n.abrupt("break",30);case 30:n.next=39;break;case 32:return n.next=34,h();case 34:if(!n.sent){n.next=38;break}e(6),n.next=39;break;case 38:e(10);case 39:n.next=42;break;case 41:e(7);case 42:n.next=45;break;case 44:e(5);case 45:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();Object.keys(n).length&&t()}),[n,f,p])}},89680:function(n,e,t){t.d(e,{Z:function(){return f}});var r=t(74165),a=t(15861),c=t(24511),u=t(85554),i=t(58818),s=t(2425),o=t(13121);function f(n,e,t){var f=(0,c.$)().t,p=(0,u.I0)(),d=(0,o.Z)()._setApprovalForAllOperate,v=(0,s.Z)(),l=v._setLocalAllowance,x=v._setCoinApprovedOperate,k=v._setLocalAllowTxid,b=(0,u.v9)((function(n){return n.config})).account;return{coinApproveHandle:function(c){t(2);var u="".concat(f("Button.Approve"));p((0,i.zw)({status:!0,kind:"wait",text:u})),x(n,e).then(function(){var s=(0,a.Z)((0,r.Z)().mark((function a(s){var o,f;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return p((0,i.zw)({status:!0,kind:"submit",address:s.hash})),r.next=3,s.wait();case 3:o=r.sent,f=o.transactionHash,1===o.status?(p((0,i.zw)({status:!0,kind:"success",timing:!0,address:f,text:u})),k(n,b,e,f),c()):(t(1),p((0,i.zw)({status:!0,kind:"failed",timing:!0,text:u})));case 6:case"end":return r.stop()}}),a)})));return function(n){return s.apply(this,arguments)}}()).catch((function(n){p((0,i.zw)({status:!0,kind:"failed",timing:!0,text:u})),t(1)}))},nftApproveHandle:function(){t(2);var c="".concat(f("Button.Approve"));p((0,i.zw)({status:!0,kind:"wait",text:c})),d(n,e).then(function(){var u=(0,a.Z)((0,r.Z)().mark((function a(u){var s,o;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return p((0,i.zw)({status:!0,kind:"submit",address:u.hash})),r.next=3,u.wait();case 3:s=r.sent,o=s.transactionHash,1===s.status?(p((0,i.zw)({status:!0,kind:"success",timing:!0,address:o,text:c})),l(n,b,e),k(n,b,e,o),t(3)):(t(1),p((0,i.zw)({status:!0,kind:"failed",timing:!0,text:c})));case 6:case"end":return r.stop()}}),a)})));return function(n){return u.apply(this,arguments)}}()).catch((function(n){p((0,i.zw)({status:!0,kind:"failed",timing:!0,text:c})),t(1)}))}}}},41626:function(n,e,t){t.d(e,{Z:function(){return v}});var r=t(74165),a=t(15861),c=t(47313),u=t(85554),i=t(89266),s=t(2503),o=t(2425),f=t(32118),p=t(91197),d=t(52422);function v(n,e,t){var v=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"0",l=(0,p.Z)(),x=l.currentTime,k=(0,s.Z)(),b=k._isBelongOperate,h=k._isApprovedOperate,w=(0,o.Z)(),Z=w._getAllowanceOperate,m=w._getLocalAllowance,g=w._inPutFormat,y=w._getDecimals,A=(0,u.v9)((function(n){return n.config})),C=A.account,T=A.chainId,_=n.isMinted,D=n.contractAddress,z=n.tokenProtocol,E=n.tokenId,I=n.owner,O=n.paymentTokenAddress,L=n.startTime,H="NFT"===t?[n,C,T,v]:[C,T,v],S=(0,i.yP)(L||x),X=S.contractList,B=n.chainId,F=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("NFT"!==t){n.next=12;break}if(!_){n.next=7;break}return n.next=4,b(D,z,E,C);case 4:return n.abrupt("return",n.sent);case 7:if(!I.includes(C)){n.next=9;break}return n.abrupt("return",!0);case 9:return n.abrupt("return",!1);case 10:n.next=13;break;case 12:return n.abrupt("return",!0);case 13:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),N=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var e,a,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("NFT"!==t){n.next=9;break}if(m(D,C,X[T])){n.next=6;break}return n.next=5,h(D,C,X[T]);case 5:return n.abrupt("return",n.sent);case 6:return n.abrupt("return",!0);case 9:if(O===f.lO){n.next=20;break}if(e=m(O,C,X[T])){n.next=15;break}return n.next=14,Z(O,C,X[T]);case 14:e=n.sent;case 15:return n.next=17,y(O);case 17:return a=n.sent,c=new d.Z(e).minus(g(v,a)).toNumber(),n.abrupt("return",c>=0);case 20:return n.abrupt("return",!0);case 21:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();(0,c.useEffect)((function(){var t=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!C){n.next=18;break}if(B!==T){n.next=15;break}return n.next=4,F();case 4:if(!n.sent){n.next=12;break}return n.next=8,N();case 8:t=n.sent,e(t?3:1),n.next=13;break;case 12:e(6);case 13:n.next=16;break;case 15:e(7);case 16:n.next=19;break;case 18:e(5);case 19:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();Object.keys(n).length&&t()}),H)}},88129:function(n,e,t){t.d(e,{Z:function(){return s}});var r=t(74165),a=t(15861),c=t(47313),u=t(85554),i=t(32118);function s(n,e){var t=(0,u.v9)((function(n){return n.config})),s=t.account,o=t.chainId,f=t.chainSign;(0,c.useEffect)((function(){var t=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s?f==o?n<=i.Ed?e(3):e(6):e(7):e(5);case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[s,o,n])}},91197:function(n,e,t){t.d(e,{Z:function(){return s}});var r=t(77164),a=t(85554),c=t(32118),u=t(89266),i=t(53452);function s(){var n=(0,a.v9)((function(n){return n.config})),e=n.walletType,t=n.timeInterval,s=n.coinData,o=n.chainSign,f=["WalletConnect","Trust Wallet"].includes(e),p=Math.ceil((new Date).getTime()/1e3+t),d=["zh-CN","zh-HK"].includes(r.Z.language)?"ch":"en";return{isSupportCartCoin:function(n){if(n===c.lO)return!0;var e=(0,u.oH)(n,s[o]);return!!["USDT","P-USDT"].includes(e.text)},isEqcodeConnect:f,currentTime:p,isV2Trade:function(n){return!(n<c.IM[0].nodeTime)},linkList:(0,i.vJ)(r.Z.language),lang:d}}},77195:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(74165),a=t(15861),c=t(47313),u=t(85554);function i(n,e){var t=(0,u.v9)((function(n){return n.config})),i=t.account,s=t.chainId;(0,c.useEffect)((function(){var t=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(i?n==s?3:7:5);case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[i,n])}},56901:function(n,e,t){t.d(e,{Z:function(){return a}});var r=t(47313);function a(n,e,t){(0,r.useEffect)((function(){var n=function(n,e,t){n&&e&&t&&n.addEventListener(e,t,!1)},r=function(n,e,t){n&&e&&n.removeEventListener(e,t,!1)},a={beginX:0,isDown:!1,coord:{x:0,y:0}},c=function(n){a.isDown=!0,a.coord.x=n.pageX,a.coord.y=n.pageY,a.beginX=n.pageX},u=function(n){t&&t(n.pageX!==a.beginX),a.isDown=!1,a.coord.x=0,a.coord.y=0},i=e.current,s=function(n){var e=a.coord.x-n.pageX;a.coord.x=n.pageX,a.isDown&&(i.scrollLeft=i.scrollLeft+e)};return i&&(n(i,"mousedown",c),n(document,"mouseup",u),n(i,"mousemove",s)),function(){i&&(r(i,"mousedown",c),r(document,"mouseup",u),r(i,"mousemove",s))}}),[n])}},77891:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(74165),a=t(15861),c=t(47313),u=t(85554),i=t(2425),s=t(2503);function o(n,e){var t=(0,s.Z)()._isApprovedOperate,o=(0,i.Z)()._getLocalAllowance,f=(0,u.v9)((function(n){return n.config})),p=f.account,d=f.chainId,v=n.nftMiningContractAddress,l=n.seriesContractAddress,x=n.chain_id,k=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o(l,p,v)){n.next=5;break}return n.next=4,t(l,p,v);case 4:return n.abrupt("return",n.sent);case 5:return n.abrupt("return",!0);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();(0,c.useEffect)((function(){var t=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(x!==d){n.next=7;break}return n.next=3,k();case 3:t=n.sent,e(t?3:1),n.next=8;break;case 7:e(7);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();Object.keys(n).length&&t()}),[d])}},32402:function(n,e,t){t.d(e,{Z:function(){return c}});var r=t(85554),a=t(93425);function c(){var n=(0,r.v9)((function(n){return n.config})).isDaskMode,e=(0,a.i)(n,"checkboxDefault"),t=(0,a.i)(n,"hoverBtnClose"),c=(0,a.i)(n,"arrowDown"),u=(0,a.i)(n,"filter"),i=(0,a.i)(n,"popClose"),s=(0,a.i)(n,"checkbox");return{CheckboxDefault:e,HoverBtnClose:t,FilterClose:u,ArrowDown:c,BtnClose:(0,a.i)(n,"btnClose"),Checkbox:s,PopClose:i,Refresh:(0,a.i)(n,"refresh")}}},66930:function(n,e,t){t.d(e,{Z:function(){return u}});var r=t(47313),a=t(85554),c=t(58818);function u(n){var e=(0,a.I0)();(0,r.useEffect)((function(){e((0,c.YH)(n)),window.scrollTo(0,0)}),[])}},1154:function(n,e,t){t.d(e,{Z:function(){return c}});var r=t(24511),a=t(53452);function c(n){var e=(0,r.$)().i18n;return(0,a.vJ)(e.language)[n]}}}]);