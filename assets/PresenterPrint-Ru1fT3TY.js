import{d as _,u as d,a as u,c as m,b as p,r as h,e as a,f as t,t as s,g as l,F as f,h as g,n as v,i as x,o as n,j as y,k as b,l as k,m as N,_ as P}from"./index-EqWm2i17.js";import{N as w}from"./NoteDisplay-V7hnTbrb.js";const S={class:"m-4"},V={class:"mb-10"},C={class:"text-4xl font-bold mt-2"},L={class:"opacity-50"},T={class:"text-lg"},B={class:"font-bold flex gap-2"},D={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),j={key:0,class:"border-gray-400/50 mb-8"},z=_({__name:"PresenterPrint",setup(F){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),u({title:`Notes - ${m.title}`});const i=p(()=>h.map(o=>{var r;return(r=o.meta)==null?void 0:r.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,r)=>(n(),a("div",{id:"page-root",style:v(l(x))},[t("div",S,[t("div",V,[t("h1",C,s(l(m).title),1),t("div",L,s(new Date().toLocaleString()),1)]),(n(!0),a(f,null,g(i.value,(e,c)=>(n(),a("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",T,[t("div",B,[t("div",D,s(e==null?void 0:e.no)+"/"+s(l(y)),1),b(" "+s(e==null?void 0:e.title)+" ",1),H])]),k(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(n(),a("hr",j)):N("v-if",!0)]))),128))])],4))}}),E=P(z,[["__file","/home/runner/work/CourseSchedulingPresentation/CourseSchedulingPresentation/node_modules/.pnpm/@slidev+client@0.46.1_postcss@8.4.32_typescript@5.3.3_vite@5.0.10/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
