import{_ as f,r as g,k as y,o as k,p as u,c as n,b as t,g as b,F as p,d as x,w as S,T as w,f as s,j as h,t as d,h as c,s as T,v as A,n as C,i as v}from"./index-BE8DdE87.js";import{H as r}from"./vs2015-txMzNINg.js";import{x as N,j as B}from"./javascript-BK9ByurK.js";const j={class:"css-function-note-view"},H={class:"layout"},L={class:"sidebar"},F=["onClick"],J={class:"content-title"},V={class:"content-body"},M=["innerHTML"],z=["innerHTML"],E={class:"code"},I={class:"html"},D={class:"javascript"},q={__name:"CssFunctionNoteView",setup($){r.registerLanguage("html",N),r.registerLanguage("javascript",B);const i=[{id:"bootstrapIconNote",title:"Bootstrap-icons",description:'<p>📌 <a href="https://icons.bootcss.com" target="_blank">Bootstrap官方圖標庫</a></p><p>使用範例如下：</p>',demoStyle:null,component:null,demo:`<!-- 可在 <head> 裡面增加此 <link> 以啟用 bootstrap-icons -->

<!--

<head>
  ...
  <link rel="stylesheet" href="css/bootstrap_icons-main/font/bootstrap-icons.css"/>
  ...
</head>

-->


<div style="display: flex;">
  <div style="display: flex; align-items: center; justify-content: center; height: 40px; width: 40px;">
    <i class="bi bi-person-bounding-box"></i>
  </div>
  <div style="display: flex; align-items: center; height: 40px; padding-left: 10px;">
    <p>
      <small style="color: #6c757d; font-weight: 300;">授課對象</small><br>
      生物產業傳播暨發展學系
    </p>
  </div>
</div>`,demoJS:null},{id:"fontawesomeIconNote",title:"Font-Awesome-icons",description:'<p>📌 <a href="https://fontawesome.com/icons" target="_blank">Font Awesome圖標庫</a></p>',demoStyle:null,component:null,demo:null,demoJS:null},{id:"animateCssNote",title:"Animate.css",description:'<p>📌 <a href="https://animate.style" target="_blank">Animate.css動畫庫</a></p><p>使用範例如下：</p>',demoStyle:null,component:null,demo:`<!-- 可在 <head> 裡面增加此 <link> 以啟用 Animate.css -->

<!--

<head>
  ...
  <link rel="stylesheet" href="css/animate_v4.1.1_min.css"/>
  ...
</head>

-->


<div style="padding-left: 60px; font-size: 30px;">
  <p class="animate__animated animate__rubberBand animate__infinite">rubberBand動畫效果</p>
</div>`,demoJS:null}],m=g(i[0].id),e=y(()=>i.find(a=>a.id===m.value)||i[0]);k(()=>{u(()=>r.highlightAll())});function _(){u(()=>{document.querySelectorAll("pre code").forEach(a=>{delete a.dataset.highlighted}),r.highlightAll()})}return(a,o)=>(s(),n("div",j,[t("div",H,[t("nav",L,[t("ul",null,[(s(),n(p,null,x(i,l=>t("li",{key:l.id,class:h({active:l.id===m.value}),onClick:G=>m.value=l.id},d(l.title),11,F)),64))])]),b(w,{name:"fade",mode:"out-in",onAfterEnter:_},{default:S(()=>[e.value?(s(),n("section",{class:"content",key:e.value.id},[t("h3",J,d(e.value.title),1),o[2]||(o[2]=t("hr",null,null,-1)),t("div",V,[e.value.description?(s(),n("div",{key:0,class:"description",innerHTML:e.value.description},null,8,M)):c("",!0),t("div",{class:h({demo:e.value.demo})},[e.value.component?(s(),T(A(e.value.component),{key:0})):(s(),n("div",{key:1,innerHTML:e.value.demo,style:C(e.value.demoStyle)},null,12,z))],2),t("div",E,[e.value.demo?(s(),n(p,{key:0},[o[0]||(o[0]=v(" html code: ")),t("pre",null,[t("code",I,d(e.value.demo),1)])],64)):c("",!0),e.value.demoJS?(s(),n(p,{key:1},[o[1]||(o[1]=v(" javascript code: ")),t("pre",null,[t("code",D,d(e.value.demoJS),1)])],64)):c("",!0)])])])):c("",!0)]),_:1})])]))}},Q=f(q,[["__scopeId","data-v-55de863f"]]);export{Q as default};
