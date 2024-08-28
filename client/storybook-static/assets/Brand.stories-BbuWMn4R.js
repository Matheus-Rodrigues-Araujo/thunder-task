import{j as _}from"./jsx-runtime-CkxqCPlQ.js";import{R as v,r as s}from"./index-DJO9vBfz.js";import"./index-DLC2J04D.js";var K={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},I=v.createContext&&v.createContext(K),le=["attr","size","title"];function oe(e,t){if(e==null)return{};var n=ue(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ue(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?T(Object(n),!0).forEach(function(r){ce(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ce(e,t,n){return t=fe(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function fe(e){var t=he(e,"string");return typeof t=="symbol"?t:t+""}function he(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function D(e){return e&&e.map((t,n)=>v.createElement(t.tag,O({key:n},t.attr),D(t.child)))}function de(e){return t=>v.createElement(pe,y({attr:O({},e.attr)},t),D(e.child))}function pe(e){var t=n=>{var{attr:r,size:a,title:i}=e,l=oe(e,le),c=a||n.size||"1em",o;return n.className&&(o=n.className),e.className&&(o=(o?o+" ":"")+e.className),v.createElement("svg",y({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:o,style:O(O({color:e.color||n.color},n.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),i&&v.createElement("title",null,i),e.children)};return I!==void 0?v.createElement(I.Consumer,null,n=>t(n)):t(K)}function me(e){return de({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7z"},child:[]}]})(e)}/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}var W;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(W||(W={}));function d(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function B(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function V(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}var z;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(z||(z={}));function ve(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function ge(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?V(e):e;return{pathname:n?n.startsWith("/")?n:be(n,t):t,search:ye(r),hash:Oe(a)}}function be(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function C(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function xe(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function G(e,t){let n=xe(e);return t?n.map((r,a)=>a===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function q(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=V(e):(a=P({},e),d(!a.pathname||!a.pathname.includes("?"),C("?","pathname","search",a)),d(!a.pathname||!a.pathname.includes("#"),C("#","pathname","hash",a)),d(!a.search||!a.search.includes("#"),C("#","search","hash",a)));let i=e===""||a.pathname==="",l=i?"/":a.pathname,c;if(l==null)c=n;else{let h=t.length-1;if(!r&&l.startsWith("..")){let p=l.split("/");for(;p[0]==="..";)p.shift(),h-=1;a.pathname=p.join("/")}c=h>=0?t[h]:"/"}let o=ge(a,c),u=l&&l!=="/"&&l.endsWith("/"),f=(i||l===".")&&n.endsWith("/");return!o.pathname.endsWith("/")&&(u||f)&&(o.pathname+="/"),o}const X=e=>e.join("/").replace(/\/\/+/g,"/"),ye=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Oe=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,k=["post","put","patch","delete"];new Set(k);const we=["get",...k];new Set(we);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}const Q=s.createContext(null),g=s.createContext(null),Y=s.createContext(null),w=s.createContext({outlet:null,matches:[],isDataRoute:!1});function Ce(e,t){let{relative:n}=t===void 0?{}:t;E()||d(!1);let{basename:r,navigator:a}=s.useContext(g),{hash:i,pathname:l,search:c}=H(e,{relative:n}),o=l;return r!=="/"&&(o=l==="/"?r:X([r,l])),a.createHref({pathname:o,search:c,hash:i})}function E(){return s.useContext(Y)!=null}function R(){return E()||d(!1),s.useContext(Y).location}function Z(e){s.useContext(g).static||s.useLayoutEffect(e)}function Pe(){let{isDataRoute:e}=s.useContext(w);return e?Ne():je()}function je(){E()||d(!1);let e=s.useContext(Q),{basename:t,future:n,navigator:r}=s.useContext(g),{matches:a}=s.useContext(w),{pathname:i}=R(),l=JSON.stringify(G(a,n.v7_relativeSplatPath)),c=s.useRef(!1);return Z(()=>{c.current=!0}),s.useCallback(function(u,f){if(f===void 0&&(f={}),!c.current)return;if(typeof u=="number"){r.go(u);return}let h=q(u,JSON.parse(l),i,f.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:X([t,h.pathname])),(f.replace?r.replace:r.push)(h,f.state,f)},[t,r,l,i,e])}function H(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=s.useContext(g),{matches:a}=s.useContext(w),{pathname:i}=R(),l=JSON.stringify(G(a,r.v7_relativeSplatPath));return s.useMemo(()=>q(e,JSON.parse(l),i,n==="path"),[e,l,i,n])}var ee=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ee||{}),te=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(te||{});function Se(e){let t=s.useContext(Q);return t||d(!1),t}function Ee(e){let t=s.useContext(w);return t||d(!1),t}function Re(e){let t=Ee(),n=t.matches[t.matches.length-1];return n.route.id||d(!1),n.route.id}function Ne(){let{router:e}=Se(ee.UseNavigateStable),t=Re(te.UseNavigateStable),n=s.useRef(!1);return Z(()=>{n.current=!0}),s.useCallback(function(a,i){i===void 0&&(i={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,j({fromRouteId:t},i)))},[e,t])}new Promise(()=>{});/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},S.apply(this,arguments)}function Ue(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Le(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function _e(e,t){return e.button===0&&(!t||t==="_self")&&!Le(e)}const Ie=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Te="6";try{window.__reactRouterVersion=Te}catch{}const We=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Be=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ze=s.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:i,replace:l,state:c,target:o,to:u,preventScrollReset:f,unstable_viewTransition:h}=t,p=Ue(t,Ie),{basename:re}=s.useContext(g),N,U=!1;if(typeof u=="string"&&Be.test(u)&&(N=u,We))try{let m=new URL(window.location.href),b=u.startsWith("//")?new URL(m.protocol+u):new URL(u),L=ve(b.pathname,re);b.origin===m.origin&&L!=null?u=L+b.search+b.hash:U=!0}catch{}let ae=Ce(u,{relative:a}),ie=Me(u,{replace:l,state:c,target:o,preventScrollReset:f,relative:a,unstable_viewTransition:h});function se(m){r&&r(m),m.defaultPrevented||ie(m)}return s.createElement("a",S({},p,{href:N||ae,onClick:U||i?r:se,ref:n,target:o}))});var M;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(M||(M={}));var F;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(F||(F={}));function Me(e,t){let{target:n,replace:r,state:a,preventScrollReset:i,relative:l,unstable_viewTransition:c}=t===void 0?{}:t,o=Pe(),u=R(),f=H(e,{relative:l});return s.useCallback(h=>{if(_e(h,n)){h.preventDefault();let p=r!==void 0?r:B(u)===B(f);o(e,{replace:p,state:a,preventScrollReset:i,relative:l,unstable_viewTransition:c})}},[u,o,f,r,a,n,e,i,l,c])}const ne=()=>_.jsxs(ze,{to:"/",className:"brand text-cyan-500 flex items-center transition duration-200 ease-in text-3xl font-bold",children:["Thunder",_.jsx(me,{size:"2rem",color:"#06b6d4",className:"transition duration-200 ease-in"}),"Task"]});ne.__docgenInfo={description:"",methods:[],displayName:"Brand"};const Je={title:"Example/Brand",component:ne,args:{}},x={args:{}};var A,$,J;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {}
}`,...(J=($=x.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};const Ke=["Default"];export{x as Default,Ke as __namedExportsOrder,Je as default};