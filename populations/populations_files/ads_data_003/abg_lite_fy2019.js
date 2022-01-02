(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
'use strict';var m=this||self;function n(a){return a};function aa(a){aa[" "](a);return a}aa[" "]=function(){};var ba={},p=null;var ca="function"===typeof Uint8Array;const q=Symbol(void 0);function t(a){Object.isFrozen(a)||(q?a[q]|=1:void 0!==a.g?a.g|=1:Object.defineProperties(a,{g:{value:1,configurable:!0,writable:!0,enumerable:!1}}));return a};function da(a){return null!==a&&"object"===typeof a&&a.constructor===Object};function ea(a,b){if(null!=a)return Array.isArray(a)||da(a)?fa(a,b):b(a)}function fa(a,b){if(Array.isArray(a)){var c=Array(a.length);for(let e=0;e<a.length;e++)c[e]=ea(a[e],b);if(b=Array.isArray(a)){var d;q?d=a[q]:d=a.g;b=(null==d?0:d)&1}b&&t(c);return c}d={};for(c in a)d[c]=ea(a[c],b);return d} 
function ha(a){a:switch(typeof a){case "number":a=isFinite(a)?a:String(a);break a;case "object":if(ca&&null!=a&&a instanceof Uint8Array){var b;void 0===b&&(b=0);if(!p){p={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));ba[e]=f;for(var g=0;g<f.length;g++){var k=f[g];void 0===p[k]&&(p[k]=g)}}}b=ba[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var l=a[f],h= 
a[f+1];k=a[f+2];g=b[l>>2];l=b[(l&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[e++]=g+l+h+k}g=0;k=d;switch(a.length-f){case 2:g=a[f+1],k=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=b[a>>2]+b[(a&3)<<4|g>>4]+k+d}a=c.join("")}}return Array.isArray(a)?fa(a,ha):a};let ia;function ja(a,b){var c=ia;ia=null;a||(a=c);c=this.constructor.W;a||(a=c?[c]:[]);this.i=(c?0:-1)-(this.constructor.V||0);this.j=null;this.g=a;a:{c=this.g.length;a=c-1;if(c&&(c=this.g[a],da(c))){this.l=a-this.i;this.h=c;break a}this.l=Number.MAX_VALUE}if(b)for(a=0;a<b.length;a++)if(c=b[a],c<this.l){c+=this.i;var d=this.g[c];d?Array.isArray(d)&&t(d):this.g[c]=na}else d=this.l+this.i,this.g[d]||(this.h=this.g[d]={}),(d=this.h[c])?Array.isArray(d)&&t(d):this.h[c]=na}const na=Object.freeze(t([])); 
function u(a,b,c=!1){return-1===b?null:c||b>=a.l?a.h?a.h[b]:void 0:a.g[b+a.i]}function v(a,b){a=u(a,b);a=null==a?a:!!a;return null==a?!1:a}function oa(a){var b=pa;a.j||(a.j={});const c=a.j[1];if(c)return c;let d=u(a,1,!1);if(null==d)return c;b=new b(d);return a.j[1]=b}ja.prototype.toJSON=function(){return fa(this.g,ha)};function qa(a,b){a=u(a,b);return null==a?0:a}function ra(a,b){a=u(a,b);return null==a?"":a};var pa=class extends ja{constructor(a){super(a,sa)}},sa=[28];var ua=class extends ja{constructor(a){super(a,ta)}},ta=[21];var w;var A=class{constructor(a,b){this.g=b===va?a:""}};A.prototype.toString=function(){return this.g+""};var va={};function wa(a){if(void 0===w){var b=null;var c=m.trustedTypes;if(c&&c.createPolicy){try{b=c.createPolicy("goog#html",{createHTML:n,createScript:n,createScriptURL:n})}catch(d){m.console&&m.console.error(d.message)}w=b}else w=b}a=(b=w)?b.createScriptURL(a):a;return new A(a,va)};/* 
 
 SPDX-License-Identifier: Apache-2.0 
*/ 
function xa(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}};var ya={passive:!0},za=xa(function(){let a=!1;try{const b=Object.defineProperty({},"passive",{get:function(){a=!0}});m.addEventListener("test",null,b)}catch(b){}return a});function B(a,b,c,d){if(a.addEventListener){var e=a.addEventListener;d=d?d.passive&&za()?d:d.capture||!1:!1;e.call(a,b,c,d)}};function F(a){var b=document;return"string"===typeof a?b.getElementById(a):a}function Aa(a){var b=document;b.getElementsByClassName?a=b.getElementsByClassName(a)[0]:(b=document,a=b.querySelectorAll&&b.querySelector&&a?b.querySelector(a?"."+a:""):Ba(b,a)[0]||null);return a||null} 
function Ba(a,b){var c,d;if(a.querySelectorAll&&a.querySelector&&b)return a.querySelectorAll(b?"."+b:"");if(b&&a.getElementsByClassName){var e=a.getElementsByClassName(b);return e}e=a.getElementsByTagName("*");if(b){var f={};for(c=d=0;a=e[c];c++){var g=a.className,k;if(k="function"==typeof g.split)k=0<=Array.prototype.indexOf.call(g.split(/\s+/),b,void 0);k&&(f[d++]=a)}f.length=d;return f}return e}function Ca(a){a&&a.parentNode&&a.parentNode.removeChild(a)};var Da=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function G(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{aa(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}function H(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}function Ea(a,b){b=void 0===b?document:b;return b.createElement(String(a).toLowerCase())};function I(a,b){a.google_image_requests||(a.google_image_requests=[]);const c=Ea("IMG",a.document);c.src=b;a.google_image_requests.push(c)}var Ga=()=>{let a="https://pagead2.googlesyndication.com/pagead/gen_204?id=badpubwin";H({stack:Error().stack},(b,c)=>{b&&(a+=`&${c}=${encodeURIComponent(b)}`)});Fa(a)},Fa=a=>{var b=window;b.fetch?b.fetch(a,{keepalive:!0,credentials:"include",redirect:"follow",method:"get",mode:"no-cors"}):I(b,a)};let Ha=0;function Ia(a){return(a=Ja(a,document.currentScript))&&a.getAttribute("data-jc-version")||"unknown"}function Ja(a,b=null){return b&&b.getAttribute("data-jc")===String(a)?b:document.querySelector(`[${"data-jc"}="${a}"]`)} 
function Ka(){if(!(.01<Math.random())){var a=`https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${60}&version=${Ia(60)}&sample=${.01}`,b=window,c;if(c=b.navigator)c=b.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&b.navigator.sendBeacon?b.navigator.sendBeacon(a):I(b,a)}};var J=document,K=window;function La(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}function Ma(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:La(a).match(/\S+/g)||[],b=0<=Array.prototype.indexOf.call(a,b,void 0));return b}function L(a,b){if(a.classList)a.classList.add(b);else if(!Ma(a,b)){var c=La(a);b=c+(0<c.length?" "+b:b);"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}};class Na{constructor(a){this.g=(this.serializedAttributionData=a)?new ua(a):null;this.isMutableImpression=null!=u(this.g,1)&&!!v(oa(this.g),33);this.S=!!v(this.g,11);this.hasUserFeedbackData=!!this.g&&null!=u(this.g,1);this.K=!!v(this.g,4);this.N=!!v(this.g,6);this.J=!!v(this.g,13);this.creativeIndexSuffix=1<qa(this.g,8)?qa(this.g,7).toString():"";this.T=!!v(this.g,17);this.P=!!v(this.g,18);this.I=!!v(this.g,14);this.enableMultiplexThirdPartyAttribution=!!v(this.g,32);this.B=!!v(this.g,15);this.U= 
!!v(this.g,31);this.O=1==v(this.g,9);this.openAttributionInline=1==v(this.g,10);this.isMobileDevice=!!v(this.g,12);this.R=null;this.M=(a=J.querySelector("[data-slide]"))?"true"===a.getAttribute("data-slide"):!1;(this.D=""!==this.creativeIndexSuffix)&&void 0===K.goog_multislot_cache&&(K.goog_multislot_cache={});if(this.D&&!this.M){if(a=K.goog_multislot_cache.hd,void 0===a){a=!1;var b=J.querySelector("[data-dim]");if(b)if(b=b.getBoundingClientRect(),150<=b.right-b.left&&150<=b.bottom-b.top)a=!1;else{var c= 
document.body.getBoundingClientRect();150>(1>=Math.abs(c.left-b.left)&&1>=Math.abs(c.right-b.right)?b.bottom-b.top:b.right-b.left)&&(a=!0)}else a=!1;window.goog_multislot_cache.hd=a}}else a=!1;this.C=a;this.u=F("abgcp"+this.creativeIndexSuffix);this.s=F("abgc"+this.creativeIndexSuffix);this.h=F("abgs"+this.creativeIndexSuffix);F("abgl"+this.creativeIndexSuffix);this.o=F("abgb"+this.creativeIndexSuffix);this.A=F("abgac"+this.creativeIndexSuffix);F("mute_panel"+this.creativeIndexSuffix);this.v=Aa("goog_delegate_attribution"+ 
this.creativeIndexSuffix);this.isDelegateAttributionActive=!!this.v&&!!this.I&&!Aa("goog_delegate_disabled")&&!this.B;if(this.h)a:{a=this.h;b="A";c=a.childNodes;for(let d=0;d<c.length;d++){const e=c.item(d);if("undefined"!=typeof e.tagName&&e.tagName.toUpperCase()==b){a=e;break a}}}else a=null;this.l=a;this.j=this.isDelegateAttributionActive?this.v:F("cbb"+this.creativeIndexSuffix);this.L=this.C?"0"===this.creativeIndexSuffix:!0;this.enableDelegateDismissableMenu=!!this.j&&Ma(this.j,"goog_dismissable_menu"); 
this.m=null;this.F=0;this.i=this.isDelegateAttributionActive?this.v:this.N&&this.u?this.u:this.s;this.H=!!v(this.g,19);this.adbadgeEnabled=!!v(this.g,24);this.enableNativeJakeUi=!!v(this.g,27)}};class Sa{constructor(a,b){if(!a)throw Error("bad conv util ctor args");this.h=a;this.g=b}};var Ta=!!window.google_async_iframe_id;let N=Ta&&window.parent||window;var O=(a,b)=>{a&&H(b,(c,d)=>{a.style[d]=c})};class Ua{constructor(a,b){this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta={}}};const Va=RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");var Wa=class{constructor(a,b){this.g=a;this.h=b}},Xa=class{constructor(a,b){this.url=a;this.G=!!b;this.depth=null}};function P(a,b){const c={};c[a]=b;return[c]}function Ya(a,b,c,d,e){const f=[];H(a,function(g,k){(g=Za(g,b,c,d,e))&&f.push(k+"="+g)});return f.join(b)} 
function Za(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){const f=[];for(let g=0;g<a.length;g++)f.push(Za(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(Ya(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function $a(a){let b=1;for(const c in a.h)b=c.length>b?c.length:b;return 3997-b-a.i.length-1} 
function ab(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;let d=$a(a)-c.length;if(0>d)return"";a.g.sort(function(f,g){return f-g});c=null;let e="";for(let f=0;f<a.g.length;f++){const g=a.g[f],k=a.h[g];for(let l=0;l<k.length;l++){if(!d){c=null==c?g:c;break}let h=Ya(k[l],a.i,",$");if(h){h=e+h;if(d>=h.length){d-=h.length;b+=h;e=a.i;break}c=null==c?g:c}}}a="";null!=c&&(a=e+"trn="+c);return b+a}class bb{constructor(){this.i="&";this.h={};this.j=0;this.g=[]}};function cb(){var a=db,b=Q.google_srt;0<=b&&1>=b&&(a.g=b)}function eb(a,b,c,d,e){if((d?a.g:Math.random())<(e||.01))try{let f;c instanceof bb?f=c:(f=new bb,H(c,(k,l)=>{var h=f,r=h.j++;k=P(l,k);h.g.push(r);h.h[r]=k}));const g=ab(f,a.h,"/pagead/gen_204?id="+b+"&");g&&I(m,g)}catch(f){}}class fb{constructor(){var a=void 0===a?K:a;this.h="http:"===a.location.protocol?"http:":"https:";this.g=Math.random()}};let R=null;var gb=()=>{const a=m.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()},hb=()=>{const a=m.performance;return a&&a.now?a.now():null};class ib{constructor(a,b){var c=hb()||gb();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0}};const S=m.performance,jb=!!(S&&S.mark&&S.measure&&S.clearMarks),T=xa(()=>{var a;if(a=jb){var b;if(null===R){R="";try{a="";try{a=m.top.location.hash}catch(c){a=m.location.hash}a&&(R=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=R;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function kb(a){a&&S&&T()&&(S.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),S.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))} 
class lb{constructor(){var a=Q;this.h=[];this.i=a||m;let b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.h=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=T()||(null!=b?b:1>Math.random())}start(a,b){if(!this.g)return null;a=new ib(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;S&&T()&&S.mark(b);return a}end(a){if(this.g&&"number"===typeof a.value){a.duration=(hb()||gb())-a.value;var b=`goog_${a.label}_${a.uniqueId}_end`;S&&T()&&S.mark(b);!this.g||2048<this.h.length|| 
this.h.push(a)}}};function mb(a){let b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);let c;for(;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(c){}}return b} 
function nb(a,b,c){let d,e;try{a.g&&a.g.g?(e=a.g.start(b.toString(),3),d=c(),a.g.end(e)):d=c()}catch(f){c=!0;try{kb(e),c=a.m(b,new Ua(f,{message:mb(f)}),void 0,void 0)}catch(g){a.j(217,g)}if(c){let g,k;null==(g=window.console)||null==(k=g.error)||k.call(g,f)}else throw f;}return d}function ob(a,b){var c=U;return(...d)=>nb(c,a,()=>b.apply(void 0,d))} 
class pb{constructor(){var a=qb;this.l=db;this.h=null;this.m=this.j;this.g=void 0===a?null:a;this.i=!1}j(a,b,c,d,e){e=e||"jserror";let f;try{const x=new bb;var g=x;g.g.push(1);g.h[1]=P("context",a);b.error&&b.meta&&b.id||(b=new Ua(b,{message:mb(b)}));if(b.msg){g=x;var k=b.msg.substring(0,512);g.g.push(2);g.h[2]=P("msg",k)}var l=b.meta||{};b=l;if(this.h)try{this.h(b)}catch(C){}if(d)try{d(b)}catch(C){}d=x;l=[l];d.g.push(3);d.h[3]=l;d=m;l=[];b=null;do{var h=d;if(G(h)){var r=h.location.href;b=h.document&& 
h.document.referrer||null}else r=b,b=null;l.push(new Xa(r||""));try{d=h.parent}catch(C){d=null}}while(d&&h!=d);for(let C=0,Oa=l.length-1;C<=Oa;++C)l[C].depth=Oa-C;h=m;if(h.location&&h.location.ancestorOrigins&&h.location.ancestorOrigins.length==l.length-1)for(r=1;r<l.length;++r){var D=l[r];D.url||(D.url=h.location.ancestorOrigins[r-1]||"",D.G=!0)}var y=l;let Y=new Xa(m.location.href,!1);h=null;const ka=y.length-1;for(D=ka;0<=D;--D){var z=y[D];!h&&Va.test(z.url)&&(h=z);if(z.url&&!z.G){Y=z;break}}z= 
null;const xb=y.length&&y[ka].url;0!=Y.depth&&xb&&(z=y[ka]);f=new Wa(Y,z);if(f.h){y=x;var E=f.h.url||"";y.g.push(4);y.h[4]=P("top",E)}var la={url:f.g.url||""};if(f.g.url){var ma=f.g.url.match(Da),M=ma[1],Pa=ma[3],Qa=ma[4];E="";M&&(E+=M+":");Pa&&(E+="//",E+=Pa,Qa&&(E+=":"+Qa));var Ra=E}else Ra="";M=x;la=[la,{url:Ra}];M.g.push(5);M.h[5]=la;eb(this.l,e,x,this.i,c)}catch(x){try{eb(this.l,e,{context:"ecmserr",rctx:a,msg:mb(x),url:f&&f.g.url},this.i,c)}catch(Y){}}return!0}};let db,U;if(Ta&&!G(N)){.01>Math.random()&&Ga();let a="."+J.domain;try{for(;2<a.split(".").length&&!G(N);)J.domain=a=a.substr(a.indexOf(".")+1),N=window.parent}catch(b){}G(N)||(N=window)}const Q=N,qb=new lb;var rb=()=>{if(!Q.google_measure_js_timing){var a=qb;a.g=!1;a.h!=a.i.google_js_reporting_queue&&(T()&&Array.prototype.forEach.call(a.h,kb,void 0),a.h.length=0)}}; 
(a=>{db=null!=a?a:new fb;"number"!==typeof Q.google_srt&&(Q.google_srt=Math.random());cb();U=new pb;U.h=b=>{const c=Ha;0!==c&&(b.jc=String(c),b.shv=Ia(c))};U.i=!0;"complete"==Q.document.readyState?rb():qb.g&&B(Q,"load",()=>{rb()})})();var V=(a,b)=>ob(a,b);function sb(a){if(a.g.l&&a.g.P){const b=oa(a.g.g);b&&null!=u(b,5)&&null!=u(b,6)&&(a.i=new Sa(ra(b,5),ra(b,19)));B(a.g.l,"click",V(452,()=>{if(!a.j&&(a.j=!0,a.i)){var c=a.i;let d=c.h+"&label=closebutton_whythisad_click";d+="&label_instance=1";c.g&&(d+="&cid="+c.g);I(window,d)}}))}} 
function tb(a){if(a.g.S)B(a.g.i,"click",V(365,b=>{const c=K.goog_interstitial_display;c&&(c(b),b&&(b.stopPropagation(),b.preventDefault()))}));else if(a.g.isMutableImpression&&a.g.isMobileDevice)B(a.g.i,"click",()=>a.h());else if(a.g.isMutableImpression&&!a.g.isMobileDevice&&(a.g.j&&(B(a.g.j,"click",()=>a.h()),B(a.g.j,"keydown",b=>{"Enter"!==b.code&&"Space"!==b.code||a.h()})),a.g.U&&a.g.h&&B(a.g.h,"click",()=>a.h())),a.g.K)ub(a);else{B(a.g.i,"mouseover",V(367,()=>ub(a)));B(a.g.i,"mouseout",V(369, 
()=>vb(a,500)));B(a.g.i,"touchstart",V(368,()=>ub(a)),ya);const b=V(370,()=>vb(a,4E3));B(a.g.i,"mouseup",b);B(a.g.i,"touchend",b);B(a.g.i,"touchcancel",b);a.g.l&&B(a.g.l,"click",V(371,c=>a.preventDefault(c)))}}function ub(a){window.clearTimeout(a.g.m);a.g.m=null;a.g.h&&"block"==a.g.h.style.display||(a.g.F=Date.now(),a.g.o&&a.g.h&&(a.g.o.style.display="none",a.g.h.style.display="block"))}function vb(a,b){window.clearTimeout(a.g.m);a.g.m=window.setTimeout(()=>wb(a),b)} 
function yb(a){const b=a.g.A;b.style.display="block";a.g.enableNativeJakeUi&&window.requestAnimationFrame(()=>{L(b,"abgacfo")})}function wb(a){window.clearTimeout(a.g.m);a.g.m=null;a.g.o&&a.g.h&&(a.g.o.style.display="block",a.g.h.style.display="none")} 
class zb{constructor(a,b){this.g=a;this.h=b;this.g.T||(this.j=!1,this.i=null,!this.g.C||this.g.adbadgeEnabled||this.g.L?sb(this):(a={display:"none"},b={width:"15px",height:"15px"},this.g.isMobileDevice?(O(this.g.o,a),O(this.g.h,a),O(this.g.u,b),O(this.g.s,b)):O(this.g.s,a)),tb(this),this.g.enableNativeJakeUi&&L(this.g.A,"abgnac"),this.g.isDelegateAttributionActive?(L(document.body,"goog_delegate_active"),L(document.body,"jaa")):(!this.g.isMutableImpression&&this.g.j&&Ca(this.g.j),setTimeout(()=>{L(document.body, 
"jar")},this.g.J?750:100)),this.g.B&&L(document.body,"goog_delegate_disabled"),this.g.H&&K.addEventListener("load",()=>this.h()))}preventDefault(a){if(this.g.h&&"block"==this.g.h.style.display&&500>Date.now()-this.g.F)a.preventDefault?a.preventDefault():a.returnValue=!1;else if(this.g.openAttributionInline){var b=this.g.l.getAttribute("href");window.adSlot?window.adSlot.openAttribution(b)&&(a.preventDefault?a.preventDefault():a.returnValue=!1):window.openAttribution&&(window.openAttribution(b),a.preventDefault? 
a.preventDefault():a.returnValue=!1)}else this.g.O&&(b=this.g.l.getAttribute("href"),window.adSlot?window.adSlot.openSystemBrowser(b)&&(a.preventDefault?a.preventDefault():a.returnValue=!1):window.openSystemBrowser&&(window.openSystemBrowser(b),a.preventDefault?a.preventDefault():a.returnValue=!1))}};function Ab(a){if(!a.g&&(a.g=!0,K.goog_delegate_deferred_token=void 0,a.h)){var b=a.i;a=a.h;if(!a)throw Error("bad attrdata");a=new Na(a);new b(a)}}class Bb{constructor(a){var b=Cb;if(!b)throw Error("bad ctor");this.i=b;this.h=a;this.g=!1;Aa("goog_delegate_deferred")?void 0!==K.goog_delegate_deferred_token?Ab(this):(a=()=>{Ab(this)},K.goog_delegate_deferred_token=a,setTimeout(a,5E3)):Ab(this)}};var Db=(a=[])=>{m.google_logging_queue||(m.google_logging_queue=[]);m.google_logging_queue.push([11,a])};class Eb{constructor(){this.promise=new Promise(a=>{this.g=a})}};var Fb=class{constructor(){const a=new Eb;this.promise=a.promise;this.resolve=a.g}},Gb=(a,b)=>{a.google_llp||(a.google_llp={});a=a.google_llp;a[5]||(a[5]=new Fb,b&&b());return a[5]}; 
function Hb(a,b){return Gb(a,function(){var c=a.document;const d=Ea("SCRIPT",c);d.src=b instanceof A&&b.constructor===A?b.g:"type_error:TrustedResourceUrl";var e;const f=(d.ownerDocument&&d.ownerDocument.defaultView||window).document,g=null===(e=f.querySelector)||void 0===e?void 0:e.call(f,"script[nonce]");(e=g?g.nonce||g.getAttribute("nonce")||"":"")&&d.setAttribute("nonce",e);(c=c.getElementsByTagName("script")[0])&&c.parentNode&&c.parentNode.insertBefore(d,c)}).promise};function Ib(a){nb(U,373,()=>{wb(a.h);yb(a.h)});Hb(window,wa(`https://${"pagead2.googlesyndication.com"}${"/pagead/js/"+ra(a.g.g,33)+"/abg_survey.js"}`)).then(b=>{b.createAttributionCard(a.g);a.g.R=b;b.expandAttributionCard()});Ka()}class Cb{constructor(a){this.g=a;this.h=new zb(this.g,V(359,()=>Ib(this)))}};Ha=60;function Jb(a){Db([a]);new Bb(a)}var W=["buildAttribution"],X=m;W[0]in X||"undefined"==typeof X.execScript||X.execScript("var "+W[0]);for(var Z;W.length&&(Z=W.shift());)W.length||void 0===Jb?X[Z]&&X[Z]!==Object.prototype[Z]?X=X[Z]:X=X[Z]={}:X[Z]=Jb;}).call(this);
