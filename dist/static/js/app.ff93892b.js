(function(t){function e(e){for(var a,i,c=e[0],o=e[1],l=e[2],f=0,h=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&h.push(r[i][0]),r[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(h.length)h.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,c=1;c<n.length;c++){var o=n[c];0!==r[o]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0729":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"columns is-centered"},[n("div",{staticClass:"column is-half"},[n("h1",{staticClass:"title"},[t._v("hash-hush")]),n("router-view")],1)])])])])},s=[],i=n("9f12"),c=n("8b83"),o=n("c65a"),l=n("c03e"),u=n("60a3"),f=n("289d");n("5abe");u["b"].use(f["a"]);var h=function(t){function e(){return Object(i["a"])(this,e),Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(u["b"]),b=h,p=n("2877"),v=Object(p["a"])(b,r,s,!1,null,null,null),d=v.exports,m=n("8c4f"),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("p",[t._v("hash-hush is a link aggrigator for hashes.")]),n("br"),n("p",[t._v(" Example: "),n("router-link",{attrs:{to:"/hash/275a021bbfb6489e54d471899f7db9d1663fc695ec2fe2a2c4538aabf651fd0f"}},[t._v("275a021bbfb6489e54d471899f7db9d1663fc695ec2fe2a2c4538aabf651fd0f")])],1)])},j=[],_={},y=Object(p["a"])(_,O,j,!1,null,null,null),g=y.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Links")},k=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"links"},t._l(t.services,(function(e){return n("div",{key:e.name},[n("Link",{attrs:{hash:t.hash,service:e}}),n("hr")],1)})),0)},C=[],E=n("53fe"),L=n("9ab4"),$=(n("b0c0"),function(){function t(){Object(i["a"])(this,t),this.baseURL="https://www.virustotal.com",this.faviconURL="https://www.google.com/s2/favicons?domain=virustotal.com",this.name="VirusTotal"}return Object(E["a"])(t,[{key:"link",value:function(t){return this.baseURL+"/gui/file/".concat(t,"/details")}}]),t}()),S=function(){function t(){Object(i["a"])(this,t),this.baseURL="https://www.hybrid-analysis.com",this.faviconURL="https://www.google.com/s2/favicons?domain=hybrid-analysis.com",this.name="HybridAnalysis"}return Object(E["a"])(t,[{key:"link",value:function(t){return this.baseURL+"/sample/".concat(t,"/")}}]),t}(),P=[new $,new S],R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"link media"},[n("figure",{staticClass:"media-left"},[n("p",{staticClass:"image is-16x16"},[n("img",{attrs:{src:t.service.faviconURL,alt:"favicon"}})])]),n("div",{staticClass:"content"},[n("a",{attrs:{href:t.service.link(t.hash),target:"_blank"}},[t._v(t._s(t.hash))])])])},U=[],M=function(t){function e(){return Object(i["a"])(this,e),Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(u["b"]);M=L["a"]([Object(u["a"])({props:{hash:String,service:Object}})],M);var A=M,H=A,T=(n("def4"),Object(p["a"])(H,R,U,!1,null,"d21c0e08",null)),J=T.exports,D=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments)),t.services=P,t.hash="275a021bbfb6489e54d471899f7db9d1663fc695ec2fe2a2c4538aabf651fd0f",t}return Object(l["a"])(e,t),Object(E["a"])(e,[{key:"mounted",value:function(){this.hash=this.$route.params.hash}}]),e}(u["b"]);D=L["a"]([Object(u["a"])({components:{Link:J}})],D);var V=D,q=V,z=Object(p["a"])(q,x,C,!1,null,null,null),B=z.exports,F={name:"home",components:{Links:B}},G=F,I=Object(p["a"])(G,w,k,!1,null,null,null),K=I.exports,N=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"error"},[n("h1",[t._v("404")])])}],W={},X=Object(p["a"])(W,N,Q,!1,null,null,null),Y=X.exports,Z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},tt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"error"},[n("p",[t._v("Something goes wrong...")])])}],et={},nt=Object(p["a"])(et,Z,tt,!1,null,null,null),at=nt.exports,rt=n("51b1");a["a"].use(m["a"]);var st=function(t){return!!Object(rt["isMD5"])(t)||(!!Object(rt["isSHA1"])(t)||(!!Object(rt["isSHA256"])(t)||!!Object(rt["isSHA512"])(t)))},it=[{path:"/",name:"home",component:g},{path:"/hash/:hash",name:"hash",component:K,beforeEnter:function(t,e,n){if("hash"in t.params){var a=t.params.hash;st(a)?n():n("/error")}else n("/error")}},{path:"/error",name:"error",component:at},{path:"/404",name:"404",component:Y},{path:"*",redirect:"/404"}],ct=new m["a"]({mode:"history",routes:it}),ot=ct;a["a"].config.productionTip=!1,new a["a"]({router:ot,render:function(t){return t(d)}}).$mount("#app")},def4:function(t,e,n){"use strict";var a=n("0729"),r=n.n(a);r.a}});
//# sourceMappingURL=app.ff93892b.js.map