import{e as p,h as r,f as d,g as m,S}from"./runtime-dom.esm-bundler.10ab094c.js";const u=()=>{},y=p({props:{value:String,name:String},setup({name:n,value:t}){return t?()=>r("astro-slot",{name:n,innerHTML:t}):()=>null}}),H=n=>async(t,a,i,{client:f})=>{if(delete a.class,!n.hasAttribute("ssr"))return;const c=t.name?`${t.name} Host`:void 0,o={};for(const[e,l]of Object.entries(i))o[e]=()=>r(y,{value:l,name:e==="default"?void 0:e});let s=r(t,a,o);if(A(t.setup)&&(s=r(S,null,s)),f==="only"){const e=d({name:c,render:()=>s});await u(),e.mount(n,!1)}else{const e=m({name:c,render:()=>s});await u(),e.mount(n,!0)}};function A(n){const t=n?.constructor;return t&&t.name==="AsyncFunction"}export{H as default};