import{_,r as f,k as g,o as y,p as m,c as o,b as t,g as b,F as u,d as k,w as x,T as S,f as s,j as w,t as d,h as c,s as T,v as A,n as C,i as h}from"./index-CRU9xyTZ.js";import{H as r,x as N,j as B}from"./vs2015-CMXDCM_s.js";const j={class:"useful-bootstrap-component-view"},H={class:"layout"},L={class:"sidebar"},F=["onClick"],J={class:"content-title"},V={class:"content-body"},M=["innerHTML"],z={class:"demo"},E=["innerHTML"],I={key:1,class:"code"},D={class:"html"},q={class:"javascript"},$={__name:"CssFunctionNoteView",setup(G){r.registerLanguage("html",N),r.registerLanguage("javascript",B);const a=[{id:"bootstrapIconNote",title:"Bootstrap-icons",description:'<p>📌 <a href="https://icons.bootcss.com" target="_blank">Bootstrap官方圖標庫</a></p><p>使用範例如下：</p>',demoStyle:null,component:null,demo:`<!-- 可在 <head> 裡面增加此 <link> 以啟用 bootstrap-icons -->

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
</div>`,demoJS:null}],p=f(a[0].id),e=g(()=>a.find(i=>i.id===p.value)||a[0]);y(()=>{m(()=>r.highlightAll())});function v(){m(()=>{document.querySelectorAll("pre code").forEach(i=>{delete i.dataset.highlighted}),r.highlightAll()})}return(i,n)=>(s(),o("div",j,[t("div",H,[t("nav",L,[t("ul",null,[(s(),o(u,null,k(a,l=>t("li",{key:l.id,class:w({active:l.id===p.value}),onClick:K=>p.value=l.id},d(l.title),11,F)),64))])]),b(S,{name:"fade",mode:"out-in",onAfterEnter:v},{default:x(()=>[e.value?(s(),o("section",{class:"content",key:e.value.id},[t("h3",J,d(e.value.title),1),n[2]||(n[2]=t("hr",null,null,-1)),t("div",V,[e.value.description?(s(),o("div",{key:0,class:"description",innerHTML:e.value.description},null,8,M)):c("",!0),t("div",z,[e.value.component?(s(),T(A(e.value.component),{key:0})):(s(),o("div",{key:1,innerHTML:e.value.demo,style:C(e.value.demoStyle)},null,12,E))]),e.value.demo?(s(),o("div",I,[n[1]||(n[1]=h(" html code: ")),t("pre",null,[t("code",D,d(e.value.demo),1)]),e.value.demoJS?(s(),o(u,{key:0},[n[0]||(n[0]=h(" javascript code: ")),t("pre",null,[t("code",q,d(e.value.demoJS),1)])],64)):c("",!0)])):c("",!0)])])):c("",!0)]),_:1})])]))}},Q=_($,[["__scopeId","data-v-7a3cd7b0"]]);export{Q as default};
