const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DocsRenderer-PKQXORMH-BtYcNcyU.js","./iframe-Bx_mvroP.js","./index-DJO9vBfz.js","./react-18-CYlqeV5r.js","./index-DLC2J04D.js","./index-BMqhju5R.js","./index-D-8MO0q_.js","./index-0wbOH00J.js","./index-DrFu-skq.js"])))=>i.map(i=>d[i]);
import{_ as a}from"./iframe-Bx_mvroP.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-PKQXORMH-BtYcNcyU.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};