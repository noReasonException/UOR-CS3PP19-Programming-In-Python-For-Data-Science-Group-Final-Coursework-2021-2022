(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
'use strict';var n=this||self;function p(a,b){return a.g?a.j.slice(0,a.g.index)+b+a.j.slice(a.g.index):a.j+b}function r(a,b){return a.i&&a.h||a.l?1==b?a.i?a.h:p(a,"&dct=1"):2==b?p(a,"&ri=2"):p(a,"&ri=16"):a.j}var aa=class{constructor({url:a}){this.j=a;const b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){let c;try{c=decodeURIComponent(this.g[1])}catch(d){c=null}this.h=c}}};var t=class{constructor(a,b){this.g=b===ba?a:""}};t.prototype.i=!0;t.prototype.h=function(){return this.g.toString()};t.prototype.toString=function(){return this.g.toString()};function ca(a){return a instanceof t&&a.constructor===t?a.g:"type_error:SafeUrl"}var da=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,ba={};function ea(a,b){a:{const c=a.length,d="string"===typeof a?a.split(""):a;for(let e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]};var fa;a:{const a=n.navigator;if(a){const b=a.userAgent;if(b){fa=b;break a}}fa=""}let ha=fa;function u(a){return-1!=ha.indexOf(a)};function ia(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}};function v(a,b){b instanceof t||b instanceof t||(b="object"==typeof b&&b.i?b.h():String(b),da.test(b)||(b="about:invalid#zClosurez"),b=new t(b,ba));a.href=ca(b)};function ka(){return u("iPhone")&&!u("iPod")&&!u("iPad")};function la(a){la[" "](a);return a}la[" "]=function(){};var ma=ka(),na=u("iPad");var oa=ka()||u("iPod"),pa=u("iPad");var qa={},w=null;var sa="function"===typeof Uint8Array;const y=Symbol(void 0);function z(a){Object.isFrozen(a)||(y?a[y]|=1:void 0!==a.g?a.g|=1:Object.defineProperties(a,{g:{value:1,configurable:!0,writable:!0,enumerable:!1}}));return a};function ta(a){return null!==a&&"object"===typeof a&&a.constructor===Object}let ua;function B(a){a=a.g;const b=[];for(let c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.push(c);return b}function D(a,b){return a.j?(b.g||(b.g=new a.j(b.value)),b.g):b.value}function va(a,b){const c=B(a);c.sort();for(let d=0;d<c.length;d++){const e=a.g[c[d]];b.call(void 0,D(a,e),e.key,a)}} 
var E=class{constructor(a,b){this.h=a;this.j=b;this.g={};this.i=!0;if(0<this.h.length){for(a=0;a<this.h.length;a++){b=this.h[a];const c=b[0];this.g[c.toString()]=new wa(c,b[1])}this.i=!0}}entries(){const a=[],b=B(this);b.sort();for(let c=0;c<b.length;c++){const d=this.g[b[c]];a.push([d.key,D(this,d)])}return new xa(a)}keys(){const a=[],b=B(this);b.sort();for(let c=0;c<b.length;c++)a.push(this.g[b[c]].key);return new xa(a)}values(){const a=[],b=B(this);b.sort();for(let c=0;c<b.length;c++)a.push(D(this, 
this.g[b[c]]));return new xa(a)}set(a,b){const c=new wa(a);this.j?(c.g=b,c.value=b.g):c.value=b;this.g[a.toString()]=c;this.i=!1;return this}get(a){if(a=this.g[a.toString()])return D(this,a)}has(a){return a.toString()in this.g}[Symbol.iterator](){return this.entries()}};class wa{constructor(a,b){this.key=a;this.value=b;this.g=void 0}} 
class xa{constructor(a){this.h=0;this.g=a}next(){return this.h<this.g.length?{done:!1,value:this.g[this.h++]}:{done:!0,value:void 0}}[Symbol.iterator](){return this}};function ya(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(sa&&null!=a&&a instanceof Uint8Array){var b;void 0===b&&(b=0);if(!w){w={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));qa[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===w[h]&&(w[h]=g)}}}b=qa[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var l=a[f],k=a[f+1]; 
h=a[f+2];g=b[l>>2];l=b[(l&3)<<4|k>>4];k=b[(k&15)<<2|h>>6];h=b[h&63];c[e++]=g+l+k+h}g=0;h=d;switch(a.length-f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}if(a instanceof E){if(!a.i){a.h.length=0;b=B(a);b.sort();for(c=0;c<b.length;c++)d=a.g[b[c]],a.h.push([d.key,d.value]);a.i=!0}return a.h}}return a};function za(a,b){if(null!=a)return Array.isArray(a)||ta(a)?Aa(a,b):b(a)}function Aa(a,b){if(Array.isArray(a)){var c=Array(a.length);for(let e=0;e<a.length;e++)c[e]=za(a[e],b);if(b=Array.isArray(a)){var d;y?d=a[y]:d=a.g;b=(null==d?0:d)&1}b&&z(c);return c}d={};for(c in a)d[c]=za(a[c],b);return d}function Ba(a){a=ya(a);return Array.isArray(a)?Aa(a,Ba):a} 
function Ca(a){if(sa&&null!=a&&a instanceof Uint8Array)var b=new Uint8Array(a);else if(a instanceof E){b=a.j;const e=new E(z([]),b),f=a.g;for(let g in f)if(Object.prototype.hasOwnProperty.call(f,g)){var c=f[g];if(b&&c.g)e.set(c.key,Da(c.g));else{a=e;var d=c.key;c=za(c.value,Ca);a.g[d.toString()]=new wa(d,c);a.i=!1}}b=e}else b=a;return b};let Ea;function G(a,b,c){var d=Ea;Ea=null;a||(a=d);d=this.constructor.R;a||(a=d?[d]:[]);this.j=(d?0:-1)-(this.constructor.P||0);this.h=null;this.g=a;a:{d=this.g.length;a=d-1;if(d&&(d=this.g[a],ta(d))){this.l=a-this.j;this.i=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.j),this.i=null):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)a=c[b],a<this.l?(a+=this.j,(d=this.g[a])?Array.isArray(d)&&z(d):this.g[a]=Fa):(Ga(this),(d=this.i[a])?Array.isArray(d)&&z(d):this.i[a]=Fa)}const Fa=Object.freeze(z([])); 
function Ga(a){let b=a.l+a.j;a.g[b]||(a.i=a.g[b]={})}function H(a,b,c=!1){return-1===b?null:c||b>=a.l?a.i?a.i[b]:void 0:a.g[b+a.j]}function Ha(a,b,c=!1){let d=H(a,b,c);null==d&&(d=Fa);d===Fa&&(d=z(d.slice()),J(a,b,d,c));return d}function K(a,b,c){a=H(a,b);return null==a?c:a}function L(a,b){a=H(a,b);a=null==a?a:!!a;return null==a?!1:a}function M(a,b,c){let d=H(a,b);null==d&&(d=z([]));if(d.constructor===E)return d;c=new E(d,c);J(a,b,c,!1);return c} 
function J(a,b,c,d=!1){d||b>=a.l?(Ga(a),a.i[b]=c):a.g[b+a.j]=c;return a}function N(a,b,c,d,e=!1){if(-1===c)return null;a.h||(a.h={});const f=a.h[c];if(f)return f;e=H(a,c,e);if(null==e&&!d)return f;b=new b(e);return a.h[c]=b}function Ia(a,b,c,d=!1){a.h||(a.h={});let e=a.h[c];if(!e){d=Ha(a,c,d);e=[];for(let f=0;f<d.length;f++)e[f]=new b(d[f]);a.h[c]=e}return e}G.prototype.toJSON=function(){const a=this.g;return ua?a:Aa(a,Ba)};function Ja(a,b){return ya(b)} 
function Ka(a){ua=!0;try{return JSON.stringify(a.toJSON(),Ja)}finally{ua=!1}}G.prototype.toString=function(){return this.g.toString()};function Da(a){var b=a.constructor,c=Aa(a.g,Ca);Ea=c;b=new b(c);Ea=null;La(b,a);return b} 
function La(a,b){b.m&&(a.m=b.m.slice());const c=b.h;if(c){b=b.i;for(let f in c){const g=c[f];if(g){var d=!(!b||!b[f]),e=+f;if(Array.isArray(g)){if(g.length)for(d=Ia(a,g[0].constructor,e,d),e=0;e<Math.min(d.length,g.length);e++)La(d[e],g[e])}else(d=N(a,g.constructor,e,void 0,d))&&La(d,g)}}}}function O(a,b){return K(a,b,"")};var Na=class extends G{constructor(a){super(a,-1,Ma)}},Ma=[6];var Ra=class extends G{constructor(a){super(a)}},Sa=class extends G{constructor(a){super(a)}};var Ua=class extends G{constructor(a){super(a,-1,Ta)}},Va=class extends G{constructor(a){super(a)}o(){return O(this,3)}H(a){J(this,5,a)}},Wa=class extends G{constructor(a){super(a)}o(){return O(this,1)}H(a){J(this,2,a)}},Xa=class extends G{constructor(a){super(a)}},Ta=[6,7];var Za=class extends G{constructor(a){super(a,-1,Ya)}},Ya=[17];var $a=class extends G{constructor(a){super(a)}};/* 
 
 SPDX-License-Identifier: Apache-2.0 
*/ 
var ab=class{};class bb extends ab{constructor(a){super();this.g=a}toString(){return this.g}}var cb=new bb("about:invalid#zTSz");class db{constructor(a){this.O=a}}function P(a){return new db(b=>b.substr(0,a.length+1).toLowerCase()===a+":")}const eb=new db(a=>/^[^:]*([/?#]|$)/.test(a));var fb=P("http"),gb=P("https"),ib=P("ftp"),jb=P("mailto");const kb=[P("data"),fb,gb,jb,ib,eb];function lb(a,b=kb){for(let c=0;c<b.length;++c){const d=b[c];if(d instanceof db&&d.O(a))return new bb(a)}}function nb(a,b=kb){return lb(a,b)||cb};function ob(a){if(a instanceof ab)if(a instanceof bb)a=a.g;else throw Error("");else a=ca(a);return a};var pb={capture:!0},qb={passive:!0},rb=ia(function(){let a=!1;try{const b=Object.defineProperty({},"passive",{get:function(){a=!0}});n.addEventListener("test",null,b)}catch(b){}return a});function sb(a){return a?a.passive&&rb()?a:a.capture||!1:!1}function Q(a,b,c,d){a.addEventListener&&a.addEventListener(b,c,sb(d))}function tb(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,sb(void 0))};function ub(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)};var vb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wb(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]}function xb(a,b){return b?a?a+"&"+b:b:a}function yb(a,b){if(!b)return a;a=wb(a);a[1]=xb(a[1],b);return a[0]+(a[1]?"?"+a[1]:"")+a[2]} 
function zb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)zb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}function Ab(a){var b=[],c;for(c in a)zb(c,a[c],b);return b.join("&")}function Bb(){var a=ub();a=null!=a?"="+encodeURIComponent(String(a)):"";return yb("https://pagead2.googlesyndication.com/pagead/gen_204","zx"+a)} 
function Cb(a,b){a=wb(a);var c=a[1],d=[];c&&c.split("&").forEach(function(e){var f=e.indexOf("=");b.hasOwnProperty(0<=f?e.substr(0,f):e)||d.push(e)});a[1]=xb(d.join("&"),Ab(b));return a[0]+(a[1]?"?"+a[1]:"")+a[2]};function Db(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{la(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}function Eb(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}let Fb=[];const Gb=()=>{const a=Fb;Fb=[];for(const b of a)try{b()}catch(c){}}; 
var Hb=a=>{Fb.push(a);1==Fb.length&&(window.Promise?Promise.resolve().then(Gb):window.setImmediate?setImmediate(Gb):setTimeout(Gb,0))},Ib=a=>{var b=R;"complete"===b.readyState||"interactive"===b.readyState?Hb(a):b.addEventListener("DOMContentLoaded",a)},Jb=a=>{var b=window;"complete"===b.document.readyState?Hb(a):b.addEventListener("load",a)};function Kb(a){a=void 0===a?document:a;return a.createElement("img")};function S(a,b,c=null){Lb(a,b,c)}function Lb(a,b,c){a.google_image_requests||(a.google_image_requests=[]);const d=Kb(a.document);if(c){const e=f=>{c&&c(f);tb(d,"load",e);tb(d,"error",e)};Q(d,"load",e);Q(d,"error",e)}d.src=b;a.google_image_requests.push(d)} 
var Mb=(a,b)=>{var c;if(c=a.navigator)c=a.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&a.navigator.sendBeacon?a.navigator.sendBeacon(b):S(a,b)},Ob=()=>{let a="https://pagead2.googlesyndication.com/pagead/gen_204?id=badpubwin";Eb({stack:Error().stack},(b,c)=>{b&&(a+=`&${c}=${encodeURIComponent(b)}`)});Nb(a)},Nb=a=>{var b=window;b.fetch?b.fetch(a,{keepalive:!0,credentials:"include",redirect:"follow",method:"get",mode:"no-cors"}):S(b,a)};let Pb=0;function Qb(a){return(a=Vb(a,document.currentScript))&&a.getAttribute("data-jc-version")||"unknown"}function Vb(a,b=null){return b&&b.getAttribute("data-jc")===String(a)?b:document.querySelector(`[${"data-jc"}="${a}"]`)}function Wb(a){.01<Math.random()||(a=`https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${a}&version=${Qb(a)}&sample=${.01}`,Mb(window,a))};var R=document,T=window;const Xb=[fb,gb,jb,ib,eb,P("market"),P("itms"),P("intent"),P("itms-appss")];function Yb(a,b){if(a instanceof t)return a;const c=nb(a,Xb);c===cb&&b(a);return new t(ob(c),ba)}var $b=a=>{var b=`${Zb()?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;return c=>{c=Ab({id:"unsafeurl",ctx:a,url:c});c=yb(b,c);navigator.sendBeacon&&navigator.sendBeacon(c,"")}};var Zb=()=>{var a=void 0===a?T:a;return"http:"===a.location.protocol},ac=!!window.google_async_iframe_id;let V=ac&&window.parent||window;var bc=a=>{var b=R;try{return b.querySelectorAll("*["+a+"]")}catch(c){return[]}};class cc{constructor(a,b){this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta={}}};const dc=RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");var ec=class{constructor(a,b){this.g=a;this.h=b}},fc=class{constructor(a,b){this.url=a;this.G=!!b;this.depth=null}};function gc(a,b){const c={};c[a]=b;return[c]}function hc(a,b,c,d,e){const f=[];Eb(a,function(g,h){(g=ic(g,b,c,d,e))&&f.push(h+"="+g)});return f.join(b)} 
function ic(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){const f=[];for(let g=0;g<a.length;g++)f.push(ic(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(hc(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function jc(a){let b=1;for(const c in a.h)b=c.length>b?c.length:b;return 3997-b-a.i.length-1} 
function kc(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;let d=jc(a)-c.length;if(0>d)return"";a.g.sort(function(f,g){return f-g});c=null;let e="";for(let f=0;f<a.g.length;f++){const g=a.g[f],h=a.h[g];for(let l=0;l<h.length;l++){if(!d){c=null==c?g:c;break}let k=hc(h[l],a.i,",$");if(k){k=e+k;if(d>=k.length){d-=k.length;b+=k;e=a.i;break}c=null==c?g:c}}}a="";null!=c&&(a=e+"trn="+c);return b+a}class lc{constructor(){this.i="&";this.h={};this.j=0;this.g=[]}};function mc(){var a=nc,b=W.google_srt;0<=b&&1>=b&&(a.g=b)}function oc(a,b,c,d,e,f){if((d?a.g:Math.random())<(e||.01))try{let g;c instanceof lc?g=c:(g=new lc,Eb(c,(l,k)=>{var m=g,q=m.j++;l=gc(k,l);m.g.push(q);m.h[q]=l}));const h=kc(g,a.h,"/pagead/gen_204?id="+b+"&");h&&("undefined"!==typeof f?S(n,h,f):S(n,h))}catch(g){}}class pc{constructor(){this.h=Zb()?"http:":"https:";this.g=Math.random()}};let qc=null;var rc=()=>{const a=n.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()},sc=()=>{const a=n.performance;return a&&a.now?a.now():null};class tc{constructor(a,b){var c=sc()||rc();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0}};const X=n.performance,uc=!!(X&&X.mark&&X.measure&&X.clearMarks),Y=ia(()=>{var a;if(a=uc){var b;if(null===qc){qc="";try{a="";try{a=n.top.location.hash}catch(c){a=n.location.hash}a&&(qc=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=qc;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function vc(a){a&&X&&Y()&&(X.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),X.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))} 
class wc{constructor(){var a=W;this.h=[];this.i=a||n;let b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.h=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=Y()||(null!=b?b:1>Math.random())}start(a,b){if(!this.g)return null;a=new tc(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;X&&Y()&&X.mark(b);return a}end(a){if(this.g&&"number"===typeof a.value){a.duration=(sc()||rc())-a.value;var b=`goog_${a.label}_${a.uniqueId}_end`;X&&Y()&&X.mark(b);!this.g||2048<this.h.length|| 
this.h.push(a)}}};function xc(a){let b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);let c;for(;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(c){}}return b} 
function yc(a,b,c){let d,e;try{a.g&&a.g.g?(e=a.g.start(b.toString(),3),d=c(),a.g.end(e)):d=c()}catch(f){c=!0;try{vc(e),c=a.m(b,new cc(f,{message:xc(f)}),void 0,void 0)}catch(g){a.l(217,g)}if(c){let g,h;null==(g=window.console)||null==(h=g.error)||h.call(g,f)}else throw f;}return d}function zc(a,b){var c=Ac;return(...d)=>yc(c,a,()=>b.apply(void 0,d))} 
class Bc{constructor(){var a=Cc;this.i=nc;this.h=null;this.m=this.l;this.g=void 0===a?null:a;this.j=!1}pinger(){return this.i}l(a,b,c,d,e){e=e||"jserror";let f;try{const F=new lc;var g=F;g.g.push(1);g.h[1]=gc("context",a);b.error&&b.meta&&b.id||(b=new cc(b,{message:xc(b)}));if(b.msg){g=F;var h=b.msg.substring(0,512);g.g.push(2);g.h[2]=gc("msg",h)}var l=b.meta||{};b=l;if(this.h)try{this.h(b)}catch(I){}if(d)try{d(b)}catch(I){}d=F;l=[l];d.g.push(3);d.h[3]=l;d=n;l=[];b=null;do{var k=d;if(Db(k)){var m= 
k.location.href;b=k.document&&k.document.referrer||null}else m=b,b=null;l.push(new fc(m||""));try{d=k.parent}catch(I){d=null}}while(d&&k!=d);for(let I=0,Rb=l.length-1;I<=Rb;++I)l[I].depth=Rb-I;k=n;if(k.location&&k.location.ancestorOrigins&&k.location.ancestorOrigins.length==l.length-1)for(m=1;m<l.length;++m){var q=l[m];q.url||(q.url=k.location.ancestorOrigins[m-1]||"",q.G=!0)}var x=l;let ra=new fc(n.location.href,!1);k=null;const Oa=x.length-1;for(q=Oa;0<=q;--q){var C=x[q];!k&&dc.test(C.url)&&(k= 
C);if(C.url&&!C.G){ra=C;break}}C=null;const Tc=x.length&&x[Oa].url;0!=ra.depth&&Tc&&(C=x[Oa]);f=new ec(ra,C);if(f.h){x=F;var A=f.h.url||"";x.g.push(4);x.h[4]=gc("top",A)}var Pa={url:f.g.url||""};if(f.g.url){var Qa=f.g.url.match(vb),U=Qa[1],Sb=Qa[3],Tb=Qa[4];A="";U&&(A+=U+":");Sb&&(A+="//",A+=Sb,Tb&&(A+=":"+Tb));var Ub=A}else Ub="";U=F;Pa=[Pa,{url:Ub}];U.g.push(5);U.h[5]=Pa;oc(this.i,e,F,this.j,c)}catch(F){try{oc(this.i,e,{context:"ecmserr",rctx:a,msg:xc(F),url:f&&f.g.url},this.j,c)}catch(ra){}}return!0}} 
;class Dc{};let nc,Ac;if(ac&&!Db(V)){.01>Math.random()&&Ob();let a="."+R.domain;try{for(;2<a.split(".").length&&!Db(V);)R.domain=a=a.substr(a.indexOf(".")+1),V=window.parent}catch(b){}Db(V)||(V=window)}const W=V,Cc=new wc;var Ec=()=>{if(!W.google_measure_js_timing){var a=Cc;a.g=!1;a.h!=a.i.google_js_reporting_queue&&(Y()&&Array.prototype.forEach.call(a.h,vc,void 0),a.h.length=0)}}; 
(a=>{nc=null!=a?a:new pc;"number"!==typeof W.google_srt&&(W.google_srt=Math.random());mc();Ac=new Bc;Ac.h=b=>{const c=Pb;0!==c&&(b.jc=String(c),b.shv=Qb(c))};Ac.j=!0;"complete"==W.document.readyState?Ec():Cc.g&&Q(W,"load",()=>{Ec()})})();var Fc=(a,b)=>zc(a,b),Gc=a=>{var b=Dc,c="F";b.F&&b.hasOwnProperty(c)||(c=new b,b.F=c);b=[];!a.eid&&b.length&&(a.eid=b.toString());oc(nc,"gdn-asoch",a,!0,void 0,void 0)};var Hc=(a,b)=>{b=O(a,2)||b;if(!b)return"";if(L(a,13))return b;const c=/[?&]adurl=([^&]+)/.exec(b);if(!c)return b;const d=[b.slice(0,c.index+1)];va(M(a,4),(e,f)=>{d.push(encodeURIComponent(f)+"="+encodeURIComponent(e)+"&")});d.push(b.slice(c.index+1));return d.join("")},Ic=(a,b)=>{b=void 0===b?[]:b;b=0<b.length?b:bc("data-asoch-targets");a=M(a,1,Ua);const c=[];for(let h=0;h<b.length;++h){var d=b[h].getAttribute("data-asoch-targets"),e=d.split(","),f=!0;for(let l of e)if(!a.has(l)){f=!1;break}if(f){f= 
a.get(e[0]);for(d=1;d<e.length;++d){var g=a.get(e[d]);f=Da(f).toJSON();g=g.toJSON();const l=Math.max(f.length,g.length);for(let k=0;k<l;++k)null==f[k]&&(f[k]=g[k]);f=new Ua(f)}e=M(f,4);null!=H(f,5)&&e.set("nb",K(f,5,0).toString());c.push({element:b[h],data:f})}else Gc({type:1,data:d})}return c},Kc=(a,b,c,d)=>{c=Hc(b,c);if(0<c.length){if(null!=H(b,18)){var e=609===d;let f;f=e?1:void 0!==R.featurePolicy&&R.featurePolicy.allowsFeature("attribution-reporting")?3:2;c=Jc(c,"nis",f.toString());if(e||!a.hasAttribute("attributionsourceeventid"))e= 
N(b,Na,18),a.setAttribute("attributiondestination",O(e,2)),a.setAttribute("attributionsourceeventid",O(e,1)),a.setAttribute("attributionreportto",O(e,3)),a.setAttribute("attributionexpiry",O(e,4))}v(a,Yb(c,$b(d)));a.target||(a.target=null!=H(b,11)?O(b,11):"_top")}},Lc=a=>{var b=void 0===b?"":b;for(const d of a){a=d.data;var c=0===b.length?!1:d.element.matches(b);"A"!=d.element.tagName||L(a,1)||c||(c=d.element,Kc(c,a,c.href,609))}},Mc=a=>{const b=n.oneAfmaInstance;if(b)for(const c of a)if((a=c.data)&& 
null!=H(a,8)){const d=O(N(a,Xa,8),4);if(d){b.fetchAppStoreOverlay(d,void 0,O(N(a,Xa,8),6));break}}},Nc=(a,b)=>{b=void 0===b?500:b;const c=[],d=[];for(var e of a)(a=e.data)&&null!=H(a,12)&&(d.push(N(a,Wa,12)),c.push(N(a,Wa,12).o()));e=(f,g)=>{if(g)for(const h of d)g[h.o()]&&h.H(!0)};a=n.oneAfmaInstance;for(const f of c){let g;null==(g=a)||g.canOpenAndroidApp(f,e,()=>{},b)}},Pc=(a,b,c,d,e)=>{if(a||!b||null==H(b,12))return!1;const f=N(b,Wa,12).o();a="";if(0<Ia(b,Va,7).length)for(const g of Ia(b,Va,7))a+= 
O(g,2)+" "+g.o()+" ";if(L(N(b,Wa,12),2))return Oc({id:"gmob-apps",event:"och-open-android-app-before-click",deepLinks:a,appId:f,isDeepLinkPath:!1,exptIds:e}),d.click(c),d.openAndroidApp(f),setTimeout(()=>{var g={id:"gmob-apps",event:"och-open-android-app",appId:f,isDeepLinkPath:!1,exptIds:e};Z(Cb(Bb(),g))},1E3),!0;Oc({id:"gmob-apps",event:"och-open-android-app-validated-false",deepLinks:a,appId:f,isDeepLinkPath:!1,exptIds:e});return!1},Rc=(a,b,c,d,e,f,g,h)=>{if(!c||null==H(c,8))return!1;const l=N(c, 
Xa,8);let k=O(l,2);va(M(c,10),(m,q)=>{var x=k;q=encodeURIComponent(q);const C=encodeURIComponent(m);m=new RegExp("[?&]"+q+"=([^&]+)");const A=m.exec(x);console.log(A);q=q+"="+C;k=A?x.replace(m,A[0].charAt(0)+q):x.replace("?","?"+q+"&")});Oc({id:"gmob-apps",event:"och-try-u2-redirect",appId:O(l,4)||"",isIos:a,isDeepLinkPath:!1,exptIds:f});g&&Qc(c)&&L(c,15)&&(d=Jc(d,"label","deep_link_fallback"));a=m=>e.openStoreOverlay(m,void 0,O(l,6));c=m=>Mb(T,m);return e.redirectForStoreU2({clickUrl:d,trackingUrl:O(l, 
3),finalUrl:k,pingFunc:h?c:e.click,openFunc:(null==b?0:L(b,1))?a:e.openIntentOrNativeApp})},Sc=(a,b)=>{b=void 0===b?null:b;if(null!==b){const c=new aa({url:a});if(c.i&&c.h||c.l)return b(p(c,"&act=1&ri=1")),r(c,1)}else return b=new aa({url:a}),b.i&&b.h||b.l?navigator.sendBeacon?navigator.sendBeacon(p(b,"&act=1&ri=1"),"")?r(b,1):r(b,2):r(b,0):a;return a},Oc=a=>{Z(Cb(Bb(),a))},Z=(a,b)=>{(void 0===b||b)&&T.fetch?T.fetch(a,{method:"GET",keepalive:!0,mode:"no-cors"}).then(c=>{c.ok||S(T,a)}):S(T,a)},Jc= 
(a,b,c)=>{b=encodeURIComponent(String(b));c=encodeURIComponent(String(c));return a.replace("?","?"+b+"="+c+"&")},Qc=a=>{for(const b of Ia(a,Va,7))if(3===K(b,1,0)&&O(b,2))return!0;return!1};var Vc=class extends G{constructor(){super(void 0,-1,Uc)}},Uc=[6];const Wc="platform platformVersion architecture model uaFullVersion bitness".split(" ");var Xc=()=>{var a=window;return a.navigator&&a.navigator.userAgentData&&"function"===typeof a.navigator.userAgentData.getHighEntropyValues?a.navigator.userAgentData.getHighEntropyValues(Wc).then(b=>{var c=new Vc;c=J(c,1,b.platform);c=J(c,2,b.platformVersion);c=J(c,3,b.architecture);c=J(c,4,b.model);c=J(c,5,b.uaFullVersion);return J(c,9,b.bitness)}):null};function Yc(a){for(const b of a)if("A"==b.element.tagName){a=b.element;const c=b.data;null!=H(c,2)||J(c,2,a.href)}}function Zc(a,b){return ea(a,c=>c.element===b)}function $c(a){Ib(Fc(556,()=>{new ad(a||{})}))} 
function bd(a,b,c,d){if(!L(d,13)){var e=c.href;var f=/[?&]adurl=([^&]+)/.exec(e);e=f?[e.slice(0,f.index),e.slice(f.index)]:[e,""];for(v(c,Yb(e[0],$b(557)));!c.id;)if(f="asoch-id-"+ub(),!R.getElementById(f)){c.id=f;break}f=c.id;"function"===typeof window.xy&&window.xy(b,c,R.body);"function"===typeof window.mb&&window.mb(c);"function"===typeof window.bgz&&window.bgz(f);"function"===typeof window.ja&&window.ja(f,d?K(d,5,0):0);a.i&&"function"===typeof window.ss&&(a.D?window.ss(f,1,a.i):window.ss(a.i, 
1));0<e.length&&(a=0<a.v.length?c.href+"&uach="+encodeURIComponent(a.v)+e[1]:c.href+e[1],v(c,Yb(a,$b(557))))}}async function cd(a,b,c,d){let e="";var f=n.oneAfmaInstance;if(f&&(e=await f.appendClickSignalsAsync(c.href)||"",a.A&&(f=await f.getNativeClickMeta()))){if(f.customClickGestureEligible)return;e=Jc(e,"nas",f.encodedNas)}dd(a,b,c,d,e)} 
function dd(a,b,c,d,e){const f=L(a.h,2),g=f&&Date.now()-a.C>a.J,h=n.oneAfmaInstance;if(h){if(b.preventDefault?b.preventDefault():b.returnValue=!1,e=h.logScionEventAndAddParam(e),!Pc(a.l,d,e,h,a.m)&&!Rc(a.l,a.j,d,e,h,a.m,a.K,a.L)){c=a.M;b=a.l;var l=a.m;const k=L(d,15),m=!/[?&]dsh=1(&|$)/.test(e)&&/[?&]ae=1(&|$)/.test(e);!f||!g||k&&m||(e=Sc(e,h.click));e&&e.startsWith("intent:")?(h.openIntentOrNativeApp(e),d={id:"gmob-apps",event:"och-open-intent-or-native-app",appId:null!=H(d,8)&&O(N(d,Xa,8),4)||"", 
isIos:b,isDeepLinkPath:!1,exptIds:l},Z(Cb(Bb(),d))):c?b?h.openBrowser(e):h.openChromeCustomTab(e):h.openSystemBrowser(e,{useFirstPackage:!0,useRunningProcess:!0})}}else d=window,d.pawsig&&"function"===typeof d.pawsig.clk?d.pawsig.clk(c):g&&(d=Sc(c.href),d!==c.href&&v(c,Yb(d,$b(599))));g&&(a.C=Date.now());Wb(a.B)} 
var ad=class{constructor(a){this.l=oa||ma||pa||na;var b=bc("data-asoch-meta");if(1!==b.length)Gc({type:2,data:b.length});else{this.B=70;this.h=new Za(JSON.parse(b[0].getAttribute("data-asoch-meta"))||[]);this.I=a["extra-meta"]?new Za(JSON.parse(a["extra-meta"])):null;this.A=!1;this.j=a["ios-store-overlay-config"]?new $a(JSON.parse(a["ios-store-overlay-config"])):null;this.M="true"===a["use-cct-over-browser"];this.m=a["expt-ids"]||"";this.K="true"===a.avoid_ace_double_billing;this.L="true"===a["send-ac-click-ping-by-js"]; 
this.v="";b=Xc();null!=b&&b.then(d=>{this.v=Ka(d)});this.g=Ic(this.h);this.J=Number(a["async-click-timeout"])||300;this.N=Number(a["deeplink-and-android-app-validation-timeout"])||500;this.C=-Infinity;this.i=O(this.h,5)||"";this.D=L(this.h,11);this.I&&(this.D=L(this.I,11));this.u=this.s=null;L(this.h,3)||(Lc(this.g),J(this.h,3,!0));Yc(this.g);a=n.oneAfmaInstance;!this.l&&a&&Nc(this.g,this.N);var c;if(a&&(null==(c=this.j)?0:L(c,2)))switch(c=()=>{const d=K(this.j,4,0);0<d?n.setTimeout(()=>{Mc(this.g)}, 
d):Mc(this.g)},K(this.j,3,0)){case 1:a.runOnOnShowEvent(c);break;case 2:Jb(c);break;default:Mc(this.g)}Q(R,"click",Fc(557,d=>{a:if(!d.defaultPrevented||this.s===d){for(var e,f,g=d.target;(!e||!f)&&g;){f||"A"!=g.tagName||(f=g);var h=g.hasAttribute("data-asoch-targets");const q=g.hasAttribute("data-asoch-fixed-value");if(!e)if(q)e=new Ua(JSON.parse(g.getAttribute("data-asoch-fixed-value"))||[]);else if("A"==g.tagName||h)if(h=h&&"true"===g.getAttribute("data-asoch-is-dynamic")?Ic(this.h,[g]):this.g, 
h=Zc(h,g))e=h.data;g=g.parentElement}if(g=e&&!L(e,1)){if(d.defaultPrevented){var l=f,k=e;if(this.s===d&&this.u){e=new Ra(this.u);f=O(k,9);g="";switch(K(e,4,1)){case 2:if(K(e,2,0))g="blocked_fast_click";else if(O(e,1)||O(e,7))g="blocked_border_click";break;case 3:var m=void 0===m?R:m;m=m.getElementById?m.getElementById("common_15click_anchor"):null;"function"===typeof window.copfcChm&&m&&(k=Da(k),J(k,5,12),M(k,4).set("nb",(12).toString()),(g=Zc(this.g,m))?g.data=k:this.g.push({element:m,data:k}),l&& 
(bd(this,d,l,k),J(k,2,l.href)),window.copfcChm(d,Hc(k,m.href),null,null!=H(e,10)?Ka(N(e,Sa,10)):null));g="onepointfiveclick_first_click"}f&&g&&Z(f+"&label="+g,!1);Wb(this.B)}break a}m=e;for(k of Ha(m,6))Z(k)}if(f&&g){m=f;e=g?e:null;(f=Zc(this.g,m))?f=f.data:(f=new Ua,J(f,2,m.href),J(f,11,m.target||"_top"),this.g.push({element:m,data:f}));Kc(m,e||f,O(f,2),557);bd(this,d,m,e);for(l of Ha(this.h,17))f=l,k=R.body,g={},"function"===typeof window.CustomEvent?h=new CustomEvent(f,g):(h=document.createEvent("CustomEvent"), 
h.initCustomEvent(f,!!g.bubbles,!!g.cancelable,g.detail)),k.dispatchEvent(h);L(this.h,16)||this.A?cd(this,d,m,e):(l="",(f=n.oneAfmaInstance)&&(l=f.appendClickSignals(m.href)),dd(this,d,m,e,l))}}}),pb);this.i&&"function"===typeof window.ss&&Q(R.body,"mouseover",Fc(626,()=>{window.ss(this.i,0)}),qb);c=window;c.googqscp&&"function"===typeof c.googqscp.registerCallback&&c.googqscp.registerCallback((d,e)=>{this.s=d;this.u=e})}}};var ed=Fc(555,a=>$c(a));Pb=70;const fd=Vb(70,document.currentScript);if(null==fd)throw Error("JSC not found 70");const gd={},hd=fd.attributes;for(let a=hd.length-1;0<=a;a--){const b=hd[a].name;0===b.indexOf("data-jcp-")&&(gd[b.substring(9)]=hd[a].value)}ed(gd);}).call(this);
