(function(e){function t(t){for(var r,c,o=t[0],i=t[1],u=t[2],p=0,d=[];p<o.length;p++)c=o[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},s=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/Decentralised-Testament/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=i;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},16:function(e,t){},17:function(e,t){},18:function(e,t){},19:function(e,t){},2:function(e,t){},20:function(e,t){},3:function(e,t){},3664:function(e,t,n){},4:function(e,t){},4678:function(e,t,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id="4678"},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:""}},[n("v-app-bar-nav-icon",{attrs:{hidden:""},on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),e._v(" Test on rinkeby network "),n("v-spacer"),void 0===e.account?n("v-btn",{on:{click:function(t){return e.connectWallet()}}},[e._v(" Connect wallet ")]):n("v-btn",{attrs:{depressed:""},on:{click:function(t){return e.connectWallet()}}},[e._v(" "+e._s(e.shortAccount())+" ")])],1),n("v-navigation-drawer",{staticClass:".d-flex .d-sm-none",attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-h6"},[e._v(" พินัยกรรม ")]),n("v-list-item-subtitle",[e._v(" แบบไร้ตัวกลาง ")])],1)],1),n("v-divider"),n("v-list",{attrs:{nav:""}},e._l(e.items,(function(t){return n("v-list-item",{key:t.title,attrs:{link:"",to:t.href}},[n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),1)],1),n("v-main",[n("router-view")],1)],1)},s=[],c=n("1da1"),o=(n("96cf"),n("5530")),i=n("d4ec"),u=n("bee2"),l=(n("b0c0"),n("99e5")),p=n.n(l),d=n("5845"),f=(n("fb6a"),{validateWeb3Connection:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if("undefined"!==typeof window.web3){n.next=4;break}throw r="Please install MetaMask, Cipher or Trust wallet.",t.showToastError(e,r,6e4),Error(r);case 4:return n.next=6,t.getNetworkName();case 6:if(a=n.sent,console.log("currentNetwork ".concat(t.network)),a===t.network){n.next=12;break}throw s="Wrong network! Please switch to **".concat(t.capitalize(t.network),"** on Metamask."),t.showToastError(e,s,6e4),Error(s);case 12:case"end":return n.stop()}}),n)})))()},validateWallet:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.web3.eth.getAccounts();case 2:if(r=n.sent,console.log("accounts ".concat(r)),0!==r.length){n.next=9;break}throw setInterval(Object(c["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.web3.eth.getAccounts();case 2:n=e.sent,n.length>0&&(console.log("refresh"),location.reload());case 4:case"end":return e.stop()}}),e)}))),100),a="Please unlock your MetaMask.",t.showToastError(e,a,6e4),Error(a);case 9:case"end":return n.stop()}}),n)})))()},showToastError:function(e,t){var n=arguments;return Object(c["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:a=n.length>2&&void 0!==n[2]?n[2]:5e3,e.open({duration:a,message:t,type:"is-danger"});case 2:case"end":return r.stop()}}),r)})))()},capitalize:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}}),m=f,b=n("c1df"),h=n.n(b),v=function(){function e(){if(Object(i["a"])(this,e),h.a.locale("TH"),window.ethereum){this.web3=new p.a(window.ethereum);try{window.ethereum.enable().then((function(){}))}catch(t){console.log(t)}}else"undefined"!==typeof web3?this.web3=new p.a(window.web3.currentProvider):(console.log("No web3? You should consider trying MetaMask!"),this.web3=new p.a(new p.a.providers.HttpProvider("https://kovan.infura.io/")));console.log("web3: ",this.web3)}return Object(u["a"])(e,[{key:"init",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getNetID();case 2:t=e.sent,"Rinkeby"==t.name&&(this.contractAddr="0x971E6AD25C76b79B0332bA43591BAfd2CB513455"),this.contract=new this.web3.eth.Contract(d,this.contractAddr),console.log("Methods: ",this.contract.methods);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getNetID",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.web3.eth.net.getId();case 2:t=e.sent,n="",r="",console.log("netId: "+t),e.t0=t,e.next=1===e.t0?9:2===e.t0?12:3===e.t0?15:4===e.t0?18:42===e.t0?20:22;break;case 9:return n="Mainnet",r="please switch your network to Rinkeby",e.abrupt("break",24);case 12:return n="Deprecated Morden",r="please switch your network to Rinkeby",e.abrupt("break",24);case 15:return n="Ropsten",r="please switch your network to Rinkeby",e.abrupt("break",24);case 18:return n="Rinkeby",e.abrupt("break",24);case 20:return n="Kovan",e.abrupt("break",24);case 22:n="Unknown",r="please switch your network to Rinkeby";case 24:return console.log("result: ",t,n,r),e.abrupt("return",{netId:t,name:n,warning:r});case 26:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"loadUserAddress",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.web3.eth.getAccounts();case 2:return t=e.sent,console.log("loadUserAddress >> "+t[0]),e.abrupt("return",t[0]);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getContractBalance",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=this.web3.utils,e.next=3,this.contract.methods.getContractBalance().call();case 3:return e.t1=e.sent,e.abrupt("return",e.t0.fromWei.call(e.t0,e.t1,"ether"));case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getContractLogs",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.logs=[],e.next=3,this.contract.methods.getTotalLogs().call();case 3:this.count=e.sent,t=0;case 5:if(!(t<this.count)){e.next=17;break}return e.t0=this.logs,e.next=9,this.contract.methods.logs(t).call();case 9:e.t1=e.sent,e.t0.push.call(e.t0,e.t1),this.logs[t].estate=this.web3.utils.fromWei(this.logs[t].estate,"ether"),this.logs[t].startDate=h.a.unix(parseInt(this.logs[t].startDate)).format("Do MMM YYYY, h:mm:ss"),this.logs[t].completeDate=h.a.unix(parseInt(this.logs[t].completeDate)).format("Do MMM YYYY, h:mm:ss");case 14:t++,e.next=5;break;case 17:return e.abrupt("return",this.logs);case 18:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"setMyLastWill",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t,n,r,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=this.web3.utils.toWei(""+n,"ether"),console.log("owner",t),console.log("estate",n),console.log("completeDate",r),console.log("receiver",a),e.next=7,this.contract.methods.setMyLastWill(a,r).send({from:t,value:n}).on("error",(function(e){return console.error(e),{result:"error",message:e}})).on("transactionHash",(function(e){console.log(e)})).on("confirmation",(function(e,t){return console.log("confirmationNumber",e),console.log(t),{result:"confirmation",message:"OK",confirmationNumber:e,receipt:t}}));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e,this)})));function t(t,n,r,a){return e.apply(this,arguments)}return t}()},{key:"cancellationMyLastWillTestament",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.contract.methods.cancellationMyLastWillTestament(n).send({from:t}).on("error",(function(e){return console.error(e),{result:"error",message:e}})).on("transactionHash",(function(e){console.log(e)})).on("confirmation",(function(e,t){return console.log("confirmationNumber",e),console.log(t),{result:"confirmation",message:"OK",confirmationNumber:e,receipt:t}}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"legateeWithdrawsAll",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.contract.methods.legateeWithdrawsAll(n).send({from:t}).on("error",(function(e){return console.error(e),{result:"error",message:e}})).on("transactionHash",(function(e){console.log(e)})).on("confirmation",(function(e,t){return console.log("confirmationNumber",e),console.log(t),{result:"confirmation",message:"OK",confirmationNumber:e,receipt:t}}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()}]),e}();Object.setPrototypeOf(v.prototype,Object(o["a"])({},m));var w=v,g=new w,y={name:"App",data:function(){return{account:"",items:[{title:"ภาพรวม",href:"/"},{title:"สร้างพินัยกรรม",href:"/create"},{title:"ถอนเงินมรดก",href:"/CancelContract"},{title:"รับมรดก",href:"/inherit"}],drawer:null}},watch:{group:function(){this.drawer=!1}},created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.connectWallet();case 2:case"end":return t.stop()}}),t)})))()},mounted:function(){},methods:{shortAccount:function(){return this.account.substring(0,4)+"..."+this.account.substring(this.account.length-4,this.account.length)},connectWallet:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g.loadUserAddress();case 2:e.account=t.sent;case 3:case"end":return t.stop()}}),t)})))()}}},j=y,x=n("2877"),k=n("6544"),T=n.n(k),M=n("7496"),A=n("40dc"),R=n("5bc1"),C=n("8336"),O=n("ce7e"),_=n("8860"),D=n("da13"),V=n("5d23"),z=n("f6c4"),L=n("f774"),W=n("2fa4"),Y=Object(x["a"])(j,a,s,!1,null,null,null),B=Y.exports;T()(Y,{VApp:M["a"],VAppBar:A["a"],VAppBarNavIcon:R["a"],VBtn:C["a"],VDivider:O["a"],VList:_["a"],VListItem:D["a"],VListItemContent:V["a"],VListItemSubtitle:V["b"],VListItemTitle:V["c"],VMain:z["a"],VNavigationDrawer:L["a"],VSpacer:W["a"]});var E=n("8c4f"),N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",{staticClass:"align-content-center justify-center",staticStyle:{height:"30vh"}},[n("h1",{staticClass:"textCenter"},[e._v("ยอดกองมรดกทั้งหมด"),n("br"),e._v(e._s(e.tvl)+" ETH")])]),n("v-row",{staticClass:"justify-center"},[n("v-card",[n("v-card-title",[e._v(" ธุรกรรมที่สร้างพินัยกรรมทั้งหมด "),n("v-spacer"),n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),n("v-data-table",{attrs:{headers:e.headers,items:e.logs,search:e.search,"items-per-page":5,loading:e.loadData,"loading-text":"Loading... Please wait"}})],1)],1)],1)},P=[],S=new w,I={name:"Home",components:{},created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,S.init();case 2:return t.next=4,e.getContractBalance();case 4:return t.next=6,e.getContractLogs();case 6:case"end":return t.stop()}}),t)})))()},data:function(){return{tvl:0,loadData:!0,search:"",headers:[{text:"วันสร้างพินัยกรรม",value:"startDate"},{text:"บัญชีผู้สร้างพินัยกรรม",align:"start",sortable:!1,value:"owner"},{text:"บัญชีผู้รับมรดก",value:"legatee"},{text:"ยอดมรดก (ETH)",value:"estate"},{text:"วันเปิดพินัยกรรม",value:"completeDate"}],logs:[]}},methods:{getContractBalance:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,S.getContractBalance();case 2:e.tvl=t.sent;case 3:case"end":return t.stop()}}),t)})))()},getContractLogs:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,S.getContractLogs();case 2:e.logs=t.sent,e.loadData=!1;case 4:case"end":return t.stop()}}),t)})))()}}},H=I,U=(n("6c51"),n("b0af")),q=n("99d9"),F=n("a523"),$=n("8fea"),K=n("0fd9"),J=n("8654"),G=Object(x["a"])(H,N,P,!1,null,"a001b194",null),Q=G.exports;T()(G,{VCard:U["a"],VCardTitle:q["c"],VContainer:F["a"],VDataTable:$["a"],VRow:K["a"],VSpacer:W["a"],VTextField:J["a"]});var X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",{staticClass:"mt-16"}),n("v-card",{staticClass:"px-16 pb-10 mx-auto rounded-xl",attrs:{"max-width":"550px"}},[n("h1",{staticClass:"pb-3 pt-10"},[e._v("กรอกข้อมูลเพื่อสร้างหนังสือพินัยกรรม")]),n("form",{on:{submit:function(t){return t.preventDefault(),e.openTestament.apply(null,arguments)}}},[n("v-text-field",{attrs:{placeholder:"0x...",label:"บัญชีผู้รับมรดก",required:""},model:{value:e.receiverAccount,callback:function(t){e.receiverAccount="string"===typeof t?t.trim():t},expression:"receiverAccount"}}),n("v-text-field",{attrs:{placeholder:"5",suffix:"นาที",label:"ระยะเวลา",required:""},model:{value:e.timeMinutes,callback:function(t){e.timeMinutes=t},expression:"timeMinutes"}}),n("v-text-field",{attrs:{placeholder:"0",suffix:"ETH",label:"ยอดเงินมรดก",required:""},model:{value:e.estate,callback:function(t){e.estate=t},expression:"estate"}}),[n("v-btn",{staticClass:"mb-3 mt-5",attrs:{block:"",color:"pink",type:"submit"}},[e._v(" สร้างพินัยกรรม ")])]],2)]),n("v-dialog",{attrs:{persistent:"","max-width":"70vh"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"text-h5"},[e._v("หนังสือพินัยกรรม ")])]),n("v-card-text",[e._v(" เจตจำนงและพินัยกรรมฉลับสุดท้ายของบัญชี "+e._s(e.ownAccount)+" ณ วันที่ "+e._s(e.now)+" ข้าพเจ้าขอแต่งตั้งให้ 0xaF9feB20E57c140471c92f1b84814810EBAa3A0A ( Smart Contract ) นี้เป็นผู้จัดการมรดก เพื่อดำเนินการต่างๆให้เป็นไปตามเจตจำนงของข้าพเจ้า ขอยกทรัพย์สินของข้าพเจ้าจำนวน "+e._s(e.estate)+" ETH ให้แก่ 0xaF9feB20E57c140471c92f1b84814810EBAa3A0A ในฐานะผู้รับพินัยกรรม แล้วจะสามารถรับมรดกได้ในวันที่ "+e._s(e.completeDate)+" ")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Disagree ")]),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.submitTestament}},[e._v(" Agree ")])],1)],1)],1)],1)},Z=[];h.a.locale("TH");var ee=new w,te={name:"Create",created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ee.init();case 2:return t.next=4,e.getAccount();case 4:case"end":return t.stop()}}),t)})))()},data:function(){return{ownAccount:"0x...",receiverAccount:"",estate:null,timeMinutes:null,dialog:!1,now:h()().format("Do MMMM YYYY เวลา h:mm:ss"),completeDate:h()().format("Do MMMM YYYY เวลา h:mm:ss")}},methods:{getAccount:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ee.loadUserAddress();case 2:e.ownAccount=t.sent;case 3:case"end":return t.stop()}}),t)})))()},openTestament:function(){this.now=h()().format("Do MMMM YYYY เวลา h:mm:ss"),this.completeDate=h()().add(this.timeMinutes,"minutes").format("Do MMMM YYYY เวลา h:mm:ss"),this.dialog=!0},submitTestament:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.dialog=!1,t.next=3,ee.setMyLastWill(e.ownAccount,e.estate,e.timeMinutes,e.receiverAccount);case 3:case"end":return t.stop()}}),t)})))()}}},ne=te,re=n("169a"),ae=Object(x["a"])(ne,X,Z,!1,null,"01d95808",null),se=ae.exports;T()(ae,{VBtn:C["a"],VCard:U["a"],VCardActions:q["a"],VCardText:q["b"],VCardTitle:q["c"],VContainer:F["a"],VDialog:re["a"],VRow:K["a"],VSpacer:W["a"],VTextField:J["a"]});var ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",{staticClass:"mt-16"}),n("v-card",{staticClass:"px-16 pb-10 mx-auto rounded-xl",attrs:{"max-width":"550px"}},[n("h1",{staticClass:"pb-3 pt-10"},[e._v("กรอกข้อมูลเพื่อยกเลิกหนังสือพินัยกรรม")]),n("form",{on:{submit:function(t){return t.preventDefault(),e.create.apply(null,arguments)}}},[n("v-text-field",{attrs:{placeholder:"0x...",label:"บัญชีผู้รับมรดก",required:""},model:{value:e.receiverAccount,callback:function(t){e.receiverAccount="string"===typeof t?t.trim():t},expression:"receiverAccount"}}),n("v-btn",{staticClass:"mb-3 mt-5",attrs:{block:"",color:"red",type:"submit"}},[e._v(" ฉีกพินัยกรรม ")])],1)])],1)},oe=[],ie=new w,ue={name:"CancelContract",created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ie.init();case 2:return t.next=4,e.getAccount();case 4:case"end":return t.stop()}}),t)})))()},data:function(){return{ownAccount:"0x...",receiverAccount:""}},methods:{getAccount:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ie.loadUserAddress();case 2:e.ownAccount=t.sent;case 3:case"end":return t.stop()}}),t)})))()},create:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ie.cancellationMyLastWillTestament(e.ownAccount,e.receiverAccount);case 2:case"end":return t.stop()}}),t)})))()}}},le=ue,pe=Object(x["a"])(le,ce,oe,!1,null,"30c728af",null),de=pe.exports;T()(pe,{VBtn:C["a"],VCard:U["a"],VContainer:F["a"],VRow:K["a"],VTextField:J["a"]});var fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",{staticClass:"mt-16"}),n("v-card",{staticClass:"px-16 pb-10 mx-auto rounded-xl",attrs:{"max-width":"550px"}},[n("h1",{staticClass:"pb-3 pt-10"},[e._v("กรอกข้อมูลเพื่อขอรับมรดก")]),n("form",{on:{submit:function(t){return t.preventDefault(),e.create.apply(null,arguments)}}},[n("v-text-field",{attrs:{placeholder:"0x...",label:"บัญชีผู้สร้างพินัยกรรม",required:""},model:{value:e.receiverAccount,callback:function(t){e.receiverAccount="string"===typeof t?t.trim():t},expression:"receiverAccount"}}),n("v-btn",{staticClass:"mb-3 mt-5",attrs:{block:"",color:"teal",type:"submit"}},[e._v(" ขอรับเงินมรดกทั้งหมด ")])],1)])],1)},me=[],be=new w,he={name:"LegateeWithdraws",created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,be.init();case 2:return t.next=4,e.getAccount();case 4:case"end":return t.stop()}}),t)})))()},data:function(){return{ownAccount:"0x...",receiverAccount:""}},methods:{getAccount:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,be.loadUserAddress();case 2:e.ownAccount=t.sent;case 3:case"end":return t.stop()}}),t)})))()},create:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,be.legateeWithdrawsAll(e.ownAccount,e.receiverAccount);case 2:case"end":return t.stop()}}),t)})))()}}},ve=he,we=Object(x["a"])(ve,fe,me,!1,null,"4ca1dffa",null),ge=we.exports;T()(we,{VBtn:C["a"],VCard:U["a"],VContainer:F["a"],VRow:K["a"],VTextField:J["a"]}),r["a"].use(E["a"]);var ye=[{path:"/",name:"Dashboard",component:Q},{path:"/create",name:"Create",component:se},{path:"/cancelcontract",name:"CancelContract",component:de},{path:"/inherit",name:"inherit",component:ge}],je=new E["a"]({mode:"history",base:"/Decentralised-Testament/",routes:ye}),xe=je,ke=n("2f62");r["a"].use(ke["a"]);var Te=new ke["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Me=n("f309");r["a"].use(Me["a"]);var Ae=new Me["a"]({theme:{dark:!0}});r["a"].config.productionTip=!1,new r["a"]({router:xe,store:Te,vuetify:Ae,render:function(e){return e(B)}}).$mount("#app")},5845:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"cancellationMyLastWillTestament","outputs":[{"internalType":"uint256","name":"remainingBalance","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"withdrow_amount","type":"uint256"}],"name":"legateeWithdraws","outputs":[{"internalType":"uint256","name":"remainingBalance","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"legateeWithdrawsAll","outputs":[{"internalType":"uint256","name":"remainingBalance","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"withdrow_amount","type":"uint256"}],"name":"ownerWithdraws","outputs":[{"internalType":"uint256","name":"remainingBalance","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint8","name":"completeDate","type":"uint8"}],"name":"setMyLastWill","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"countMyTestamentList","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalLogs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"logs","outputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"estate","type":"uint256"},{"internalType":"uint256","name":"startDate","type":"uint256"},{"internalType":"uint256","name":"completeDate","type":"uint256"},{"internalType":"address","name":"legatee","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"MyTestament","outputs":[{"internalType":"uint256","name":"estate","type":"uint256"},{"internalType":"uint256","name":"startDate","type":"uint256"},{"internalType":"uint256","name":"completeDate","type":"uint256"},{"internalType":"bool","name":"saveLog","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"MyTestamentList","outputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"estate","type":"uint256"},{"internalType":"uint256","name":"startDate","type":"uint256"},{"internalType":"uint256","name":"completeDate","type":"uint256"},{"internalType":"address","name":"legatee","type":"address"}],"stateMutability":"view","type":"function"}]')},6:function(e,t){},"6c51":function(e,t,n){"use strict";n("3664")},7:function(e,t){},8:function(e,t){},9:function(e,t){}});
//# sourceMappingURL=app.a3e0e710.js.map