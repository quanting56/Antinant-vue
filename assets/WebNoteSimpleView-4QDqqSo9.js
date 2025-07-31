const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DemoNoteDropDownHref-By5eWkF1.js","assets/index-ByB5nNjd.js","assets/index-Bg8smPi4.css","assets/DemoNoteImageHoverSwitch-DaypBtbO.js","assets/DemoNoteImageOverlayTransition-B_kRlrrt.js","assets/DemoNoteImageOverlayTransition-WpCSgCNJ.css"])))=>i.map(i=>d[i]);
import{_ as b,r as f,m,k as x,o as _,p as g,c as l,b as t,g as w,F as h,d as S,w as k,T as I,q as u,f as o,j as T,t as s,h as r,s as J,v as E,n as L,i as y}from"./index-ByB5nNjd.js";import{H as c,x as C,j as V}from"./vs2015-CMXDCM_s.js";const H={class:"webnote-simple-view"},B={class:"layout"},j={class:"sidebar"},P=["onClick"],A={class:"content-title"},F={class:"content-body"},M={key:0,class:"description"},N={class:"demo"},D=["innerHTML"],G={key:1,class:"code"},Y={class:"html"},$={class:"javascript"},z={__name:"WebNoteSimpleView",setup(O){c.registerLanguage("html",C),c.registerLanguage("javascript",V);const a=[{id:"noteSpacing",title:"字的間距",description:"字間距測試",demoStyle:null,component:null,demo:`<ul class="spacing-test">
  <li>I love bird. 我愛鳥</li>
  <li><span style="letter-spacing: 8px;">I love bird. 我愛鳥</span></li>
  <li><span style="word-spacing: 8px;">I love bird. 我愛鳥</span></li>
</ul>`,demoJS:null},{id:"noteTextShadow",title:"文字陰影",description:"文字陰影測試（text-shadow）",demoStyle:"font-size: 24px;",component:null,demo:`<p style="text-shadow: 3px 3px 3px gray;">文字測試一</p>
<p style="text-shadow: 3px 3px 3px black;">文字測試二</p>
<p style="text-shadow: -5px 12px 5px gray;">文字測試三</p>
<p style="text-shadow: 5px 12px 5px gray;">文字測試四</p>
<p style="text-shadow: 12px 5px 5px gray;">文字測試五</p>
<p style="text-shadow: 12px 5px 3px gray;">文字測試六</p>
<p style="text-shadow: 12px 5px 10px gray;">文字測試七</p>
<p style="text-shadow: 12px 5px 20px gray;">文字測試八</p>
<p style="text-shadow: 12px 5px gray;">文字測試九</p>`,demoJS:null},{id:"noteBorderTest",title:"Border Test",description:null,demoStyle:"display: flex; flex-wrap: wrap; gap: 12px;",component:null,demo:`<div style="border: solid;">border: solid</div>
<div style="border: double;">border: double</div>
<div style="border: dotted;">border: dotted</div>
<div style="border: dashed;">border: dashed</div>
<div style="border: none;">border: none</div>
<div style="border: groove;">border: groove</div>
<div style="border: ridge;">border: ridge</div>
<div style="border: inset;">border: inset</div>
<div style="border: outset;">border: outset</div>`,demoJS:null},{id:"noteFloat",title:"文繞圖Float測試",description:null,demoStyle:"display: flex; flex-wrap: wrap;",component:null,demo:`<div style="background-color: #eeeeee; border: 0.5px solid gray; width: 400px; height: auto;">
  <div style="width: 50%; aspect-ratio: 3/2; background-color: #ccc; border: 1px solid black; float: left;"></div>
  <p>測試文繞圖<br>（圖片style="float: left;"）</p>
</div>

<div style="background-color: #eeeeee; border: 0.5px solid gray; width: 400px; height: auto;">
  <div style="width: 50%; aspect-ratio: 3/2; background-color: #ccc; border: 1px solid black; float: right;"></div>
  <p>測試文繞圖<br>（圖片style="float: right;"）</p>
</div>

<div style="background-color: #eeeeee; border: 0.5px solid gray; width: 400px; height: auto;">
  <div style="width: 50%; aspect-ratio: 3/2; background-color: #ccc; border: 1px solid black; float: right;"></div>
  <p style="float: left;">測試文繞圖<br>（文字style="float: left;"）<br>（圖片亦需增加float: right）</p>
</div>

<div style="background-color: #eeeeee; border: 0.5px solid gray; width: 400px; height: auto;">
  <div style="width: 50%; aspect-ratio: 3/2; background-color: #ccc; border: 1px solid black; float: left;"></div>
  <p style="float: right;">測試文繞圖<br>（文字style="float: right;"）<br>（圖片亦需增加float: left）</p>
</div>`,demoJS:null},{id:"noteDropDownHref",title:"下拉式超連結",description:"透過超連結下拉式清單到新網頁",demoStyle:null,component:m(()=>u(()=>import("./DemoNoteDropDownHref-By5eWkF1.js"),__vite__mapDeps([0,1,2]))),demo:`<select id="searchEngine">
  <option value="Google">Google</option>
  <option value="Yahoo">Yahoo!奇摩</option>
  <option value="Bing">Bing</option>
</select>
<button onclick="toSearchEngine();">Go!</button>`,demoJS:`// 下拉式超連結
function toSearchEngine() {
  var searchEngine = document.getElementById("searchEngine");
  var selectedValue = searchEngine.value;

  if (selectedValue === "Google") {
    window.open("https://www.google.com.tw", "_blank");
  } else if (selectedValue === "Yahoo") {
    window.open("https://tw.yahoo.com", "");
  } else if (selectedValue === "Bing") {
    window.open("https://www.bing.com", "");
  };  
};`},{id:"noteMoveToChangeImg",title:"移動游標換照片",description:"移動游標改變顯示圖標（JavaScript／jQuery）",demoStyle:null,component:m(()=>u(()=>import("./DemoNoteImageHoverSwitch-DaypBtbO.js"),__vite__mapDeps([3,1,2]))),demo:`<!-- 純 JavaScript 的 html code 用這個 -->
<div onmouseover="ntubicdImage()" onmouseout="ntubicdSabImage()" style="height: 250px; width: 250px;">
  <img id="changeImage1" src="assets/about_me/ntubicdsab_trademark.JPG" alt="拿來測試用的生傳mark" style="height: 250px;">
</div>



<!-- jQuery 的 html code 用這個 -->
<div style="height: 250px; width: 250px;">
  <img id="changeImage2" src="assets/ntubicdsab_trademark.JPG" alt="拿來測試用的生傳mark" style="height: 250px;">
</div>`,demoJS:`// 純 JavaScript 的 js code
function ntubicdImage() {
  var changeImage = document.getElementById("changeImage1");
  changeImage.src = "assets/about_me/ntubicd_trademark.png";
};

function ntubicdSabImage() {
  var changeBackImage = document.getElementById("changeImage1");
  changeBackImage.src = "assets/about_me/ntubicdsab_trademark.JPG";
};



// jQuery 的 js code
$("#changeImage2").on("mouseover", function(){
  $(this).attr("src", "assets/ntubicd_trademark.png");
});

$("#changeImage2").on("mouseout", function(){
  $(this).attr("src", "assets/ntubicdsab_trademark.JPG");
});`},{id:"notePictureChange",title:"疊圖照片接替出現",description:null,demoStyle:null,component:m(()=>u(()=>import("./DemoNoteImageOverlayTransition-B_kRlrrt.js"),__vite__mapDeps([4,1,2,5]))),demo:`<!-- 本段以 Vue SFC 寫成，並未使用純 HTML -->
<!-- 請至以下 SFC 檔查看 code -->
<!-- 路徑：/components/WebNoteView/WebNoteSimpleView/DemoNoteImageOverlayTransition.vue -->


<!-- 亦可至 https://quanting56.github.io/Antinant/web_note/two_picture_change.html 查看完整效果 -->`,demoJS:null},{id:"noteChineseFonts",title:"各式中文字體",description:null,demoStyle:"font-size: 20px; line-height: 1.8;",component:null,demo:`<ol>
  <li>
    <span style="font-family: serif;">滾滾長江東逝水 Lorem Ipsum 1234567890</span>
    /<small><i>serif（襯線字體）</i></small>
  </li>
  <li>
    <span style="font-family: sans-serif;">滾滾長江東逝水 Lorem Ipsum 1234567890</span>
    /<small><i>sans-serif（無襯線字體）</i></small>
  </li>
  <li>
    <span style="font-family: monospace;">滾滾長江東逝水 Lorem Ipsum 1234567890</span>
    /<small><i>monospace（等寬字體）</i></small>
  </li>
  <li>
    <span style="font-family: 'SimSun';">滾滾長江東逝水 Lorem Ipsum 1234567890</span>
    /<small><i>SimSun（宋體）</i></small>
  </li>
  <li>
    <span style="font-family: 'SimHei';">滾滾長江東逝水 Lorem Ipsum 1234567890</span>
    /<small><i>SimHei（黑體）</i></small>
  </li>
  <li>
    <span style="font-family: 'Microsoft YaHei';">滾滾長江東逝水 Lorem Ipsum 1234567890</span>
    /<small><i>Microsoft YaHei（微軟雅黑）</i></small>
  </li>
  <li>
    <span style="font-family: 'Microsoft JhengHei';">滾滾長江東逝水 Lorem Ipsum 1234567890</span>
    /<small><i>Microsoft JhengHei（微軟正黑體）</i></small>
  </li>
  <li>
    <span style="font-family: 'PingFang TC';">滾滾長江東逝水 Lorem Ipsum 1234567890</span>
    /<small><i>PingFang TC（蘋方繁體）</i></small>
  </li>
  <li>
    <span style="font-family: 'Heiti TC';">滾滾長江東逝水 Lorem Ipsum 1234567890</span>
    /<small><i>Heiti TC（黑體繁體）</i></small>
  </li>
</ol>`,demoJS:null}],p=f(a[0].id),e=x(()=>a.find(n=>n.id===p.value)||a[0]);_(()=>{g(()=>c.highlightAll())});function v(){g(()=>{document.querySelectorAll("pre code").forEach(n=>{delete n.dataset.highlighted}),c.highlightAll()})}return(n,i)=>(o(),l("div",H,[t("div",B,[t("nav",j,[t("ul",null,[(o(),l(h,null,S(a,d=>t("li",{key:d.id,class:T({active:d.id===p.value}),onClick:W=>p.value=d.id},s(d.title),11,P)),64))])]),w(I,{name:"fade",mode:"out-in",onAfterEnter:v},{default:k(()=>[e.value?(o(),l("section",{class:"content",key:e.value.id},[t("h3",A,s(e.value.title),1),i[2]||(i[2]=t("hr",null,null,-1)),t("div",F,[e.value.description?(o(),l("div",M,[t("p",null,s(e.value.description),1)])):r("",!0),t("div",N,[e.value.component?(o(),J(E(e.value.component),{key:0})):(o(),l("div",{key:1,innerHTML:e.value.demo,style:L(e.value.demoStyle)},null,12,D))]),e.value.demo?(o(),l("div",G,[i[1]||(i[1]=y(" html code: ")),t("pre",null,[t("code",Y,s(e.value.demo),1)]),e.value.demoJS?(o(),l(h,{key:0},[i[0]||(i[0]=y(" javascript code: ")),t("pre",null,[t("code",$,s(e.value.demoJS),1)])],64)):r("",!0)])):r("",!0)])])):r("",!0)]),_:1})])]))}},R=b(z,[["__scopeId","data-v-d0f8899f"]]);export{R as default};
