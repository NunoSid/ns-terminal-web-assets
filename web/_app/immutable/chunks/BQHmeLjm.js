import{a as st,g as ot}from"./oiu3ls34.js";import{r as lt}from"./BMhlN9Yp.js";import{r as ut}from"./CEUNPiIB.js";import{r as at}from"./DAWvVRyA.js";function ft(s,c){for(var a=0;a<c.length;a++){const f=c[a];if(typeof f!="string"&&!Array.isArray(f)){for(const h in f)if(h!=="default"&&!(h in s)){const p=Object.getOwnPropertyDescriptor(f,h);p&&Object.defineProperty(s,h,p.get?p:{enumerable:!0,get:()=>f[h]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}var A={};const W=2147483647,L=36,ge=1,Q=26,ct=38,dt=700,$e=72,Ue=128,Ne="-",ht=/^xn--/,mt=/[^\0-\x7F]/,pt=/[\x2E\u3002\uFF0E\uFF61]/g,gt={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},ae=L-ge,$=Math.floor,fe=String.fromCharCode;function z(s){throw new RangeError(gt[s])}function xt(s,c){const a=[];let f=s.length;for(;f--;)a[f]=c(s[f]);return a}function qe(s,c){const a=s.split("@");let f="";a.length>1&&(f=a[0]+"@",s=a[1]),s=s.replace(pt,".");const h=s.split("."),p=xt(h,c).join(".");return f+p}function xe(s){const c=[];let a=0;const f=s.length;for(;a<f;){const h=s.charCodeAt(a++);if(h>=55296&&h<=56319&&a<f){const p=s.charCodeAt(a++);(p&64512)==56320?c.push(((h&1023)<<10)+(p&1023)+65536):(c.push(h),a--)}else c.push(h)}return c}const Re=s=>String.fromCodePoint(...s),St=function(s){return s>=48&&s<58?26+(s-48):s>=65&&s<91?s-65:s>=97&&s<123?s-97:L},ke=function(s,c){return s+22+75*(s<26)-((c!=0)<<5)},ze=function(s,c,a){let f=0;for(s=a?$(s/dt):s>>1,s+=$(s/c);s>ae*Q>>1;f+=L)s=$(s/ae);return $(f+(ae+1)*s/(s+ct))},Se=function(s){const c=[],a=s.length;let f=0,h=Ue,p=$e,o=s.lastIndexOf(Ne);o<0&&(o=0);for(let g=0;g<o;++g)s.charCodeAt(g)>=128&&z("not-basic"),c.push(s.charCodeAt(g));for(let g=o>0?o+1:0;g<a;){const w=f;for(let C=1,u=L;;u+=L){g>=a&&z("invalid-input");const l=St(s.charCodeAt(g++));l>=L&&z("invalid-input"),l>$((W-f)/C)&&z("overflow"),f+=l*C;const m=u<=p?ge:u>=p+Q?Q:u-p;if(l<m)break;const y=L-m;C>$(W/y)&&z("overflow"),C*=y}const I=c.length+1;p=ze(f-w,I,w==0),$(f/I)>W-h&&z("overflow"),h+=$(f/I),f%=I,c.splice(f++,0,h)}return String.fromCodePoint(...c)},ye=function(s){const c=[];s=xe(s);const a=s.length;let f=Ue,h=0,p=$e;for(const w of s)w<128&&c.push(fe(w));const o=c.length;let g=o;for(o&&c.push(Ne);g<a;){let w=W;for(const C of s)C>=f&&C<w&&(w=C);const I=g+1;w-f>$((W-h)/I)&&z("overflow"),h+=(w-f)*I,f=w;for(const C of s)if(C<f&&++h>W&&z("overflow"),C===f){let u=h;for(let l=L;;l+=L){const m=l<=p?ge:l>=p+Q?Q:l-p;if(u<m)break;const y=u-m,j=L-m;c.push(fe(ke(m+y%j,0))),u=$(y/j)}c.push(fe(ke(u,0))),p=ze(h,I,g===o),h=0,++g}++h,++f}return c.join("")},He=function(s){return qe(s,function(c){return ht.test(c)?Se(c.slice(4).toLowerCase()):c})},Be=function(s){return qe(s,function(c){return mt.test(c)?"xn--"+ye(c):c})},yt={version:"2.3.1",ucs2:{decode:xe,encode:Re},decode:Se,encode:ye,toASCII:Be,toUnicode:He},Ct=Object.freeze(Object.defineProperty({__proto__:null,decode:Se,default:yt,encode:ye,toASCII:Be,toUnicode:He,ucs2decode:xe,ucs2encode:Re},Symbol.toStringTag,{value:"Module"})),bt=st(Ct);var ce={};/*!
 * Copyright (c) 2018, Salesforce.com, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of Salesforce.com nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */var Oe;function Je(){if(Oe)return ce;Oe=1;const s=ut(),c=["local","example","invalid","localhost","test"],a=["localhost","invalid"];function f(h,p={}){const o=h.split("."),g=o[o.length-1],w=!!p.allowSpecialUseDomain,I=!!p.ignoreError;if(w&&c.includes(g)){if(o.length>1)return`${o[o.length-2]}.${g}`;if(a.includes(g))return`${g}`}if(!I&&c.includes(g))throw new Error(`Cookie has domain set to the public suffix "${g}" which is a special use domain. To allow this, configure your CookieJar with {allowSpecialUseDomain:true, rejectPublicSuffixes: false}.`);return s.get(h)}return ce.getPublicSuffix=f,ce}var de={};/*!
 * Copyright (c) 2015, Salesforce.com, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of Salesforce.com nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */var Ie;function Ve(){if(Ie)return de;Ie=1;class s{constructor(){this.synchronous=!1}findCookie(a,f,h,p){throw new Error("findCookie is not implemented")}findCookies(a,f,h,p){throw new Error("findCookies is not implemented")}putCookie(a,f){throw new Error("putCookie is not implemented")}updateCookie(a,f,h){throw new Error("updateCookie is not implemented")}removeCookie(a,f,h,p){throw new Error("removeCookie is not implemented")}removeCookies(a,f,h){throw new Error("removeCookies is not implemented")}removeAllCookies(a){throw new Error("removeAllCookies is not implemented")}getAllCookies(a){throw new Error("getAllCookies is not implemented (therefore jar cannot be serialized)")}}return de.Store=s,de}var ne={},ie={},De;function Xe(){return De||(De=1,ie.fromCallback=function(s){return Object.defineProperty(function(){if(typeof arguments[arguments.length-1]=="function")s.apply(this,arguments);else return new Promise((c,a)=>{arguments[arguments.length]=(f,h)=>{if(f)return a(f);c(h)},arguments.length++,s.apply(this,arguments)})},"name",{value:s.name})},ie.fromPromise=function(s){return Object.defineProperty(function(){const c=arguments[arguments.length-1];if(typeof c!="function")return s.apply(this,arguments);delete arguments[arguments.length-1],arguments.length--,s.apply(this,arguments).then(a=>c(null,a),c)},"name",{value:s.name})}),ie}var he={};/*!
 * Copyright (c) 2015, Salesforce.com, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of Salesforce.com nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */var je;function We(){if(je)return he;je=1;const s=Je();function c(a,f){const h=s.getPublicSuffix(a,{allowSpecialUseDomain:f});if(!h)return null;if(h==a)return[a];a.slice(-1)=="."&&(a=a.slice(0,-1));const o=a.slice(0,-(h.length+1)).split(".").reverse();let g=h;const w=[g];for(;o.length;)g=`${o.shift()}.${g}`,w.push(g);return w}return he.permuteDomain=c,he}var me={};/*!
 * Copyright (c) 2015, Salesforce.com, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of Salesforce.com nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */var Pe;function Ge(){if(Pe)return me;Pe=1;function s(c,a){return a===c||c.indexOf(a)===0&&(a.substr(-1)==="/"||c.substr(a.length,1)==="/")}return me.pathMatch=s,me}var re={},Te;function Ke(){if(Te)return re;Te=1;function s(){try{return at()}catch{return null}}function c(){return Symbol.for("nodejs.util.inspect.custom")}function a(f){const p=(f.requireUtil||s)();return p?p.inspect.custom:null}return re.getUtilInspect=function(h,p={}){const g=(p.requireUtil||s)();return function(I,C,u){return g?g.inspect(I,C,u):h(I)}},re.getCustomInspectSymbol=function(h={}){return(h.lookupCustomInspectSymbol||c)()||a(h)},re}/*!
 * Copyright (c) 2015, Salesforce.com, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of Salesforce.com nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */var Me;function Et(){if(Me)return ne;Me=1;const{fromCallback:s}=Xe(),c=Ve().Store,a=We().permuteDomain,f=Ge().pathMatch,{getCustomInspectSymbol:h,getUtilInspect:p}=Ke();class o extends c{constructor(){super(),this.synchronous=!0,this.idx=Object.create(null);const u=h();u&&(this[u]=this.inspect)}inspect(){return`{ idx: ${{inspect:p(g)}.inspect(this.idx,!1,2)} }`}findCookie(u,l,m,y){return!this.idx[u]||!this.idx[u][l]?y(null,void 0):y(null,this.idx[u][l][m]||null)}findCookies(u,l,m,y){const j=[];if(typeof m=="function"&&(y=m,m=!0),!u)return y(null,[]);let T;l?T=function(P){Object.keys(P).forEach(B=>{if(f(l,B)){const H=P[B];for(const J in H)j.push(H[J])}})}:T=function(P){for(const B in P){const H=P[B];for(const J in H)j.push(H[J])}};const N=a(u,m)||[u],G=this.idx;N.forEach(U=>{const P=G[U];P&&T(P)}),y(null,j)}putCookie(u,l){this.idx[u.domain]||(this.idx[u.domain]=Object.create(null)),this.idx[u.domain][u.path]||(this.idx[u.domain][u.path]=Object.create(null)),this.idx[u.domain][u.path][u.key]=u,l(null)}updateCookie(u,l,m){this.putCookie(l,m)}removeCookie(u,l,m,y){this.idx[u]&&this.idx[u][l]&&this.idx[u][l][m]&&delete this.idx[u][l][m],y(null)}removeCookies(u,l,m){return this.idx[u]&&(l?delete this.idx[u][l]:delete this.idx[u]),m(null)}removeAllCookies(u){return this.idx=Object.create(null),u(null)}getAllCookies(u){const l=[],m=this.idx;Object.keys(m).forEach(j=>{Object.keys(m[j]).forEach(N=>{Object.keys(m[j][N]).forEach(U=>{U!==null&&l.push(m[j][N][U])})})}),l.sort((j,T)=>(j.creationIndex||0)-(T.creationIndex||0)),u(null,l)}}["findCookie","findCookies","putCookie","updateCookie","removeCookie","removeCookies","removeAllCookies","getAllCookies"].forEach(C=>{o.prototype[C]=s(o.prototype[C])}),ne.MemoryCookieStore=o;function g(C){const u=Object.keys(C);if(u.length===0)return"[Object: null prototype] {}";let l=`[Object: null prototype] {
`;return Object.keys(C).forEach((m,y)=>{l+=w(m,C[m]),y<u.length-1&&(l+=","),l+=`
`}),l+="}",l}function w(C,u){const l="  ";let m=`${l}'${C}': [Object: null prototype] {
`;return Object.keys(u).forEach((y,j,T)=>{m+=I(y,u[y]),j<T.length-1&&(m+=","),m+=`
`}),m+=`${l}}`,m}function I(C,u){const l="    ";let m=`${l}'${C}': [Object: null prototype] {
`;return Object.keys(u).forEach((y,j,T)=>{const N=u[y];m+=`      ${y}: ${N.inspect()}`,j<T.length-1&&(m+=","),m+=`
`}),m+=`${l}}`,m}return ne.inspectFallback=g,ne}var _={},Fe;function wt(){if(Fe)return _;Fe=1;const s=Object.prototype.toString;function c(l){return typeof l=="function"}function a(l){return p(l)&&l!==""}function f(l){return g(l,Date)&&I(l.getTime())}function h(l){return l===""||l instanceof String&&l.toString()===""}function p(l){return typeof l=="string"||l instanceof String}function o(l){return s.call(l)==="[object Object]"}function g(l,m){try{return l instanceof m}catch{return!1}}function w(l){return a(l)||o(l)&&"hostname"in l&&"pathname"in l&&"protocol"in l||g(l,URL)}function I(l){return typeof l=="number"&&l%1===0}function C(l,m,y){if(c(m)||(y=m,m=null),o(y)||(y={Error:"Failed Check"}),!l)if(m)m(new u(y));else throw new u(y)}class u extends Error{constructor(...m){super(...m)}}return _.ParameterError=u,_.isFunction=c,_.isNonEmptyString=a,_.isDate=f,_.isEmptyString=h,_.isString=p,_.isObject=o,_.isUrlStringOrObject=w,_.validate=C,_}var pe,_e;function vt(){return _e||(_e=1,pe="4.1.4"),pe}/*!
 * Copyright (c) 2015-2020, Salesforce.com, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of Salesforce.com nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */var Le;function At(){if(Le)return A;Le=1;const s=bt,c=lt(),a=Je(),f=Ve().Store,h=Et().MemoryCookieStore,p=Ge().pathMatch,o=wt(),g=vt(),{fromCallback:w}=Xe(),{getCustomInspectSymbol:I}=Ke(),C=/^[\x21\x23-\x2B\x2D-\x3A\x3C-\x5B\x5D-\x7E]+$/,u=/[\x00-\x1F]/,l=[`
`,"\r","\0"],m=/[\x20-\x3A\x3C-\x7E]+/,y=/[\x09\x20-\x2F\x3B-\x40\x5B-\x60\x7B-\x7E]/,j={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11},T=2147483647e3,N=0,G='Invalid sameSiteContext option for getCookies(); expected one of "strict", "lax", or "none"';function U(n){o.validate(o.isNonEmptyString(n),n);const e=String(n).toLowerCase();return e==="none"||e==="lax"||e==="strict"?e:null}const P=Object.freeze({SILENT:"silent",STRICT:"strict",DISABLED:"unsafe-disabled"}),B=/(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-f\d]{1,4}:){7}(?:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,2}|:)|(?:[a-f\d]{1,4}:){4}(?:(?::[a-f\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,3}|:)|(?:[a-f\d]{1,4}:){3}(?:(?::[a-f\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,4}|:)|(?:[a-f\d]{1,4}:){2}(?:(?::[a-f\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,5}|:)|(?:[a-f\d]{1,4}:){1}(?:(?::[a-f\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,6}|:)|(?::(?:(?::[a-f\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,7}|:)))$)/,H=`
\\[?(?:
(?:[a-fA-F\\d]{1,4}:){7}(?:[a-fA-F\\d]{1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|:[a-fA-F\\d]{1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,2}|:)|
(?:[a-fA-F\\d]{1,4}:){4}(?:(?::[a-fA-F\\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,3}|:)|
(?:[a-fA-F\\d]{1,4}:){3}(?:(?::[a-fA-F\\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){2}(?:(?::[a-fA-F\\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,5}|:)|
(?:[a-fA-F\\d]{1,4}:){1}(?:(?::[a-fA-F\\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,6}|:)|
(?::(?:(?::[a-fA-F\\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,7}|:))
)(?:%[0-9a-zA-Z]{1,})?\\]?
`.replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),J=new RegExp(`^${H}$`);function se(n,e,t,r){let i=0;for(;i<n.length;){const d=n.charCodeAt(i);if(d<=47||d>=58)break;i++}return i<e||i>t||!r&&i!=n.length?null:parseInt(n.substr(0,i),10)}function Qe(n){const e=n.split(":"),t=[0,0,0];if(e.length!==3)return null;for(let r=0;r<3;r++){const i=r==2,d=se(e[r],1,2,i);if(d===null)return null;t[r]=d}return t}function Ye(n){n=String(n).substr(0,3).toLowerCase();const e=j[n];return e>=0?e:null}function K(n){if(!n)return;const e=n.split(y);if(!e)return;let t=null,r=null,i=null,d=null,x=null,b=null;for(let v=0;v<e.length;v++){const O=e[v].trim();if(!O.length)continue;let S;if(i===null&&(S=Qe(O),S)){t=S[0],r=S[1],i=S[2];continue}if(d===null&&(S=se(O,1,2,!0),S!==null)){d=S;continue}if(x===null&&(S=Ye(O),S!==null)){x=S;continue}b===null&&(S=se(O,2,4,!0),S!==null&&(b=S,b>=70&&b<=99?b+=1900:b>=0&&b<=69&&(b+=2e3)))}if(!(d===null||x===null||b===null||i===null||d<1||d>31||b<1601||t>23||r>59||i>59))return new Date(Date.UTC(b,x,d,t,r,i))}function Ce(n){return o.validate(o.isDate(n),n),n.toUTCString()}function V(n){return n==null?null:(n=n.trim().replace(/^\./,""),J.test(n)&&(n=n.replace("[","").replace("]","")),s&&/[^\u0001-\u007f]/.test(n)&&(n=s.toASCII(n)),n.toLowerCase())}function oe(n,e,t){if(n==null||e==null)return null;if(t!==!1&&(n=V(n),e=V(e)),n==e)return!0;const r=n.lastIndexOf(e);return!(r<=0||n.length!==e.length+r||n.substr(r-1,1)!=="."||B.test(n))}function be(n){if(!n||n.substr(0,1)!=="/")return"/";if(n==="/")return n;const e=n.lastIndexOf("/");return e===0?"/":n.slice(0,e)}function et(n){if(o.isEmptyString(n))return n;for(let e=0;e<l.length;e++){const t=n.indexOf(l[e]);t!==-1&&(n=n.substr(0,t))}return n}function tt(n,e){n=et(n),o.validate(o.isString(n),n);let t=n.indexOf("=");if(e)t===0&&(n=n.substr(1),t=n.indexOf("="));else if(t<=0)return;let r,i;if(t<=0?(r="",i=n.trim()):(r=n.substr(0,t).trim(),i=n.substr(t+1).trim()),u.test(r)||u.test(i))return;const d=new k;return d.key=r,d.value=i,d}function Ee(n,e){if((!e||typeof e!="object")&&(e={}),o.isEmptyString(n)||!o.isString(n))return null;n=n.trim();const t=n.indexOf(";"),r=t===-1?n:n.substr(0,t),i=tt(r,!!e.loose);if(!i)return;if(t===-1)return i;const d=n.slice(t+1).trim();if(d.length===0)return i;const x=d.split(";");for(;x.length;){const b=x.shift().trim();if(b.length===0)continue;const v=b.indexOf("=");let O,S;switch(v===-1?(O=b,S=null):(O=b.substr(0,v),S=b.substr(v+1)),O=O.trim().toLowerCase(),S&&(S=S.trim()),O){case"expires":if(S){const F=K(S);F&&(i.expires=F)}break;case"max-age":if(S&&/^-?[0-9]+$/.test(S)){const F=parseInt(S,10);i.setMaxAge(F)}break;case"domain":if(S){const F=S.trim().replace(/^\./,"");F&&(i.domain=F.toLowerCase())}break;case"path":i.path=S&&S[0]==="/"?S:null;break;case"secure":i.secure=!0;break;case"httponly":i.httpOnly=!0;break;case"samesite":switch(S?S.toLowerCase():""){case"strict":i.sameSite="strict";break;case"lax":i.sameSite="lax";break;case"none":i.sameSite="none";break;default:i.sameSite=void 0;break}break;default:i.extensions=i.extensions||[],i.extensions.push(b);break}}return i}function nt(n){return o.validate(o.isObject(n),n),!n.key.startsWith("__Secure-")||n.secure}function it(n){return o.validate(o.isObject(n)),!n.key.startsWith("__Host-")||n.secure&&n.hostOnly&&n.path!=null&&n.path==="/"}function we(n){let e;try{e=JSON.parse(n)}catch(t){return t}return e}function Y(n){if(!n||o.isEmptyString(n))return null;let e;if(typeof n=="string"){if(e=we(n),e instanceof Error)return null}else e=n;const t=new k;for(let r=0;r<k.serializableProperties.length;r++){const i=k.serializableProperties[r];e[i]===void 0||e[i]===Z[i]||(i==="expires"||i==="creation"||i==="lastAccessed"?e[i]===null?t[i]=null:t[i]=e[i]=="Infinity"?"Infinity":new Date(e[i]):t[i]=e[i])}return t}function le(n,e){o.validate(o.isObject(n),n),o.validate(o.isObject(e),e);let t=0;const r=n.path?n.path.length:0;if(t=(e.path?e.path.length:0)-r,t!==0)return t;const d=n.creation?n.creation.getTime():T,x=e.creation?e.creation.getTime():T;return t=d-x,t!==0||(t=n.creationIndex-e.creationIndex),t}function rt(n){if(o.validate(o.isString(n)),n==="/")return["/"];const e=[n];for(;n.length>1;){const t=n.lastIndexOf("/");if(t===0)break;n=n.substr(0,t),e.push(n)}return e.push("/"),e}function ve(n){if(n instanceof Object)return n;try{n=decodeURI(n)}catch{}return c(n)}const Z={key:"",value:"",expires:"Infinity",maxAge:null,domain:null,path:null,secure:!1,httpOnly:!1,extensions:null,hostOnly:null,pathIsDefault:null,creation:null,lastAccessed:null,sameSite:void 0};class k{constructor(e={}){const t=I();t&&(this[t]=this.inspect),Object.assign(this,Z,e),this.creation=this.creation||new Date,Object.defineProperty(this,"creationIndex",{configurable:!1,enumerable:!1,writable:!0,value:++k.cookiesCreated})}inspect(){const e=Date.now(),t=this.hostOnly!=null?this.hostOnly:"?",r=this.creation?`${e-this.creation.getTime()}ms`:"?",i=this.lastAccessed?`${e-this.lastAccessed.getTime()}ms`:"?";return`Cookie="${this.toString()}; hostOnly=${t}; aAge=${i}; cAge=${r}"`}toJSON(){const e={};for(const t of k.serializableProperties)this[t]!==Z[t]&&(t==="expires"||t==="creation"||t==="lastAccessed"?this[t]===null?e[t]=null:e[t]=this[t]=="Infinity"?"Infinity":this[t].toISOString():t==="maxAge"?this[t]!==null&&(e[t]=this[t]==1/0||this[t]==-1/0?this[t].toString():this[t]):this[t]!==Z[t]&&(e[t]=this[t]));return e}clone(){return Y(this.toJSON())}validate(){if(!C.test(this.value)||this.expires!=1/0&&!(this.expires instanceof Date)&&!K(this.expires)||this.maxAge!=null&&this.maxAge<=0||this.path!=null&&!m.test(this.path))return!1;const e=this.cdomain();return!(e&&(e.match(/\.$/)||a.getPublicSuffix(e)==null))}setExpires(e){e instanceof Date?this.expires=e:this.expires=K(e)||"Infinity"}setMaxAge(e){e===1/0||e===-1/0?this.maxAge=e.toString():this.maxAge=e}cookieString(){let e=this.value;return e==null&&(e=""),this.key===""?e:`${this.key}=${e}`}toString(){let e=this.cookieString();if(this.expires!=1/0&&(this.expires instanceof Date?e+=`; Expires=${Ce(this.expires)}`:e+=`; Expires=${this.expires}`),this.maxAge!=null&&this.maxAge!=1/0&&(e+=`; Max-Age=${this.maxAge}`),this.domain&&!this.hostOnly&&(e+=`; Domain=${this.domain}`),this.path&&(e+=`; Path=${this.path}`),this.secure&&(e+="; Secure"),this.httpOnly&&(e+="; HttpOnly"),this.sameSite&&this.sameSite!=="none"){const t=k.sameSiteCanonical[this.sameSite.toLowerCase()];e+=`; SameSite=${t||this.sameSite}`}return this.extensions&&this.extensions.forEach(t=>{e+=`; ${t}`}),e}TTL(e){if(this.maxAge!=null)return this.maxAge<=0?0:this.maxAge*1e3;let t=this.expires;return t!=1/0?(t instanceof Date||(t=K(t)||1/0),t==1/0?1/0:t.getTime()-(e||Date.now())):1/0}expiryTime(e){if(this.maxAge!=null){const t=e||this.creation||new Date,r=this.maxAge<=0?-1/0:this.maxAge*1e3;return t.getTime()+r}return this.expires==1/0?1/0:this.expires.getTime()}expiryDate(e){const t=this.expiryTime(e);return t==1/0?new Date(T):t==-1/0?new Date(N):new Date(t)}isPersistent(){return this.maxAge!=null||this.expires!=1/0}canonicalizedDomain(){return this.domain==null?null:V(this.domain)}cdomain(){return this.canonicalizedDomain()}}k.cookiesCreated=0,k.parse=Ee,k.fromJSON=Y,k.serializableProperties=Object.keys(Z),k.sameSiteLevel={strict:3,lax:2,none:1},k.sameSiteCanonical={strict:"Strict",lax:"Lax"};function Ae(n){if(n!=null){const e=n.toLowerCase();switch(e){case P.STRICT:case P.SILENT:case P.DISABLED:return e}}return P.SILENT}class M{constructor(e,t={rejectPublicSuffixes:!0}){typeof t=="boolean"&&(t={rejectPublicSuffixes:t}),o.validate(o.isObject(t),t),this.rejectPublicSuffixes=t.rejectPublicSuffixes,this.enableLooseMode=!!t.looseMode,this.allowSpecialUseDomain=typeof t.allowSpecialUseDomain=="boolean"?t.allowSpecialUseDomain:!0,this.store=e||new h,this.prefixSecurity=Ae(t.prefixSecurity),this._cloneSync=q("clone"),this._importCookiesSync=q("_importCookies"),this.getCookiesSync=q("getCookies"),this.getCookieStringSync=q("getCookieString"),this.getSetCookieStringsSync=q("getSetCookieStrings"),this.removeAllCookiesSync=q("removeAllCookies"),this.setCookieSync=q("setCookie"),this.serializeSync=q("serialize")}setCookie(e,t,r,i){o.validate(o.isUrlStringOrObject(t),i,r);let d;if(o.isFunction(t))return i=t,i(new Error("No URL was specified"));const x=ve(t);if(o.isFunction(r)&&(i=r,r={}),o.validate(o.isFunction(i),i),!o.isNonEmptyString(e)&&!o.isObject(e)&&e instanceof String&&e.length==0)return i(null);const b=V(x.hostname),v=r.loose||this.enableLooseMode;let O=null;if(r.sameSiteContext&&(O=U(r.sameSiteContext),!O))return i(new Error(G));if(typeof e=="string"||e instanceof String){if(e=k.parse(e,{loose:v}),!e)return d=new Error("Cookie failed to parse"),i(r.ignoreError?null:d)}else if(!(e instanceof k))return d=new Error("First argument to setCookie must be a Cookie object or string"),i(r.ignoreError?null:d);const S=r.now||new Date;if(this.rejectPublicSuffixes&&e.domain&&a.getPublicSuffix(e.cdomain(),{allowSpecialUseDomain:this.allowSpecialUseDomain,ignoreError:r.ignoreError})==null&&!J.test(e.domain))return d=new Error("Cookie has domain set to a public suffix"),i(r.ignoreError?null:d);if(e.domain){if(!oe(b,e.cdomain(),!1))return d=new Error(`Cookie not in this host's domain. Cookie:${e.cdomain()} Request:${b}`),i(r.ignoreError?null:d);e.hostOnly==null&&(e.hostOnly=!1)}else e.hostOnly=!0,e.domain=b;if((!e.path||e.path[0]!=="/")&&(e.path=be(x.pathname),e.pathIsDefault=!0),r.http===!1&&e.httpOnly)return d=new Error("Cookie is HttpOnly and this isn't an HTTP API"),i(r.ignoreError?null:d);if(e.sameSite!=="none"&&e.sameSite!==void 0&&O&&O==="none")return d=new Error("Cookie is SameSite but this is a cross-origin request"),i(r.ignoreError?null:d);const ee=this.prefixSecurity===P.SILENT;if(!(this.prefixSecurity===P.DISABLED)){let E=!1,D;if(nt(e)?it(e)||(E=!0,D="Cookie has __Host prefix but either Secure or HostOnly attribute is not set or Path is not '/'"):(E=!0,D="Cookie has __Secure prefix but Secure attribute is not set"),E)return i(r.ignoreError||ee?null:new Error(D))}const R=this.store;R.updateCookie||(R.updateCookie=function(E,D,X){this.putCookie(D,X)});function ue(E,D){if(E)return i(E);const X=function(te){if(te)return i(te);i(null,e)};if(D){if(r.http===!1&&D.httpOnly)return E=new Error("old Cookie is HttpOnly and this isn't an HTTP API"),i(r.ignoreError?null:E);e.creation=D.creation,e.creationIndex=D.creationIndex,e.lastAccessed=S,R.updateCookie(D,e,X)}else e.creation=e.lastAccessed=S,R.putCookie(e,X)}R.findCookie(e.domain,e.path,e.key,ue)}getCookies(e,t,r){o.validate(o.isUrlStringOrObject(e),r,e);const i=ve(e);o.isFunction(t)&&(r=t,t={}),o.validate(o.isObject(t),r,t),o.validate(o.isFunction(r),r);const d=V(i.hostname),x=i.pathname||"/";let b=t.secure;b==null&&i.protocol&&(i.protocol=="https:"||i.protocol=="wss:")&&(b=!0);let v=0;if(t.sameSiteContext){const E=U(t.sameSiteContext);if(v=k.sameSiteLevel[E],!v)return r(new Error(G))}let O=t.http;O==null&&(O=!0);const S=t.now||Date.now(),ee=t.expire!==!1,F=!!t.allPaths,R=this.store;function ue(E){if(E.hostOnly){if(E.domain!=d)return!1}else if(!oe(d,E.domain,!1))return!1;return!F&&!p(x,E.path)||E.secure&&!b||E.httpOnly&&!O||v&&k.sameSiteLevel[E.sameSite||"none"]>v?!1:ee&&E.expiryTime()<=S?(R.removeCookie(E.domain,E.path,E.key,()=>{}),!1):!0}R.findCookies(d,F?null:x,this.allowSpecialUseDomain,(E,D)=>{if(E)return r(E);D=D.filter(ue),t.sort!==!1&&(D=D.sort(le));const X=new Date;for(const te of D)te.lastAccessed=X;r(null,D)})}getCookieString(...e){const t=e.pop();o.validate(o.isFunction(t),t);const r=function(i,d){i?t(i):t(null,d.sort(le).map(x=>x.cookieString()).join("; "))};e.push(r),this.getCookies.apply(this,e)}getSetCookieStrings(...e){const t=e.pop();o.validate(o.isFunction(t),t);const r=function(i,d){i?t(i):t(null,d.map(x=>x.toString()))};e.push(r),this.getCookies.apply(this,e)}serialize(e){o.validate(o.isFunction(e),e);let t=this.store.constructor.name;o.isObject(t)&&(t=null);const r={version:`tough-cookie@${g}`,storeType:t,rejectPublicSuffixes:!!this.rejectPublicSuffixes,enableLooseMode:!!this.enableLooseMode,allowSpecialUseDomain:!!this.allowSpecialUseDomain,prefixSecurity:Ae(this.prefixSecurity),cookies:[]};if(!(this.store.getAllCookies&&typeof this.store.getAllCookies=="function"))return e(new Error("store does not support getAllCookies and cannot be serialized"));this.store.getAllCookies((i,d)=>i?e(i):(r.cookies=d.map(x=>(x=x instanceof k?x.toJSON():x,delete x.creationIndex,x)),e(null,r)))}toJSON(){return this.serializeSync()}_importCookies(e,t){let r=e.cookies;if(!r||!Array.isArray(r))return t(new Error("serialized jar has no cookies array"));r=r.slice();const i=d=>{if(d)return t(d);if(!r.length)return t(d,this);let x;try{x=Y(r.shift())}catch(b){return t(b)}if(x===null)return i(null);this.store.putCookie(x,i)};i()}clone(e,t){arguments.length===1&&(t=e,e=null),this.serialize((r,i)=>{if(r)return t(r);M.deserialize(i,e,t)})}cloneSync(e){if(arguments.length===0)return this._cloneSync();if(!e.synchronous)throw new Error("CookieJar clone destination store is not synchronous; use async API instead.");return this._cloneSync(e)}removeAllCookies(e){o.validate(o.isFunction(e),e);const t=this.store;if(typeof t.removeAllCookies=="function"&&t.removeAllCookies!==f.prototype.removeAllCookies)return t.removeAllCookies(e);t.getAllCookies((r,i)=>{if(r)return e(r);if(i.length===0)return e(null);let d=0;const x=[];function b(v){if(v&&x.push(v),d++,d===i.length)return e(x.length?x[0]:null)}i.forEach(v=>{t.removeCookie(v.domain,v.path,v.key,b)})})}static deserialize(e,t,r){arguments.length!==3&&(r=t,t=null),o.validate(o.isFunction(r),r);let i;if(typeof e=="string"){if(i=we(e),i instanceof Error)return r(i)}else i=e;const d=new M(t,{rejectPublicSuffixes:i.rejectPublicSuffixes,looseMode:i.enableLooseMode,allowSpecialUseDomain:i.allowSpecialUseDomain,prefixSecurity:i.prefixSecurity});d._importCookies(i,x=>{if(x)return r(x);r(null,d)})}static deserializeSync(e,t){const r=typeof e=="string"?JSON.parse(e):e,i=new M(t,{rejectPublicSuffixes:r.rejectPublicSuffixes,looseMode:r.enableLooseMode});if(!i.store.synchronous)throw new Error("CookieJar store is not synchronous; use async API instead.");return i._importCookiesSync(r),i}}M.fromJSON=M.deserializeSync,["_importCookies","clone","getCookies","getCookieString","getSetCookieStrings","removeAllCookies","serialize","setCookie"].forEach(n=>{M.prototype[n]=w(M.prototype[n])}),M.deserialize=w(M.deserialize);function q(n){return function(...e){if(!this.store.synchronous)throw new Error("CookieJar store is not synchronous; use async API instead.");let t,r;if(this[n](...e,(i,d)=>{t=i,r=d}),t)throw t;return r}}return A.version=g,A.CookieJar=M,A.Cookie=k,A.Store=f,A.MemoryCookieStore=h,A.parseDate=K,A.formatDate=Ce,A.parse=Ee,A.fromJSON=Y,A.domainMatch=oe,A.defaultPath=be,A.pathMatch=p,A.getPublicSuffix=a.getPublicSuffix,A.cookieCompare=le,A.permuteDomain=We().permuteDomain,A.permutePath=rt,A.canonicalDomain=V,A.PrefixSecurityEnum=P,A.ParameterError=o.ParameterError,A}var Ze=At();const kt=ot(Ze),Pt=ft({__proto__:null,default:kt},[Ze]);export{Ze as c,Pt as t};
