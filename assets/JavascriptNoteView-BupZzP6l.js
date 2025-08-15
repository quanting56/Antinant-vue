const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/JsOpenCloseWindowNoteDemo-Cpjp4lyq.js","assets/index-BRY76vrL.js","assets/index-pSLBK3gT.css","assets/JsOpenCloseWindowNoteDemo-TSkHhGjF.css","assets/ButtomUpdateMessageNoteDemo-C2Di7g9s.js","assets/ButtomUpdateMessageNoteDemo-tKWPik4T.css"])))=>i.map(i=>d[i]);
import{_ as w,r as D,m as p,k as f,o as k,p as v,c as n,b as t,g as T,F as m,d as b,w as M,T as S,q as _,f as o,j as h,t as d,h as c,s as L,v as Q,n as j,i as g}from"./index-BRY76vrL.js";import{H as r,x,j as A}from"./vs2015-CSxvYctc.js";const C={class:"javascript-note-view"},H={class:"layout"},J={class:"sidebar"},E=["onClick"],N={class:"content-title"},V={class:"content-body"},B=["innerHTML"],W=["innerHTML"],O={class:"code"},I={class:"html"},P={class:"javascript"},R={__name:"JavascriptNoteView",setup(U){r.registerLanguage("html",x),r.registerLanguage("javascript",A);const a=[{id:"jsOpenCloseWindowNote",title:"開新視窗與關閉視窗",description:null,demoStyle:null,component:p(()=>_(()=>import("./JsOpenCloseWindowNoteDemo-Cpjp4lyq.js"),__vite__mapDeps([0,1,2,3]))),demo:`<!-- 這裡使用 Bootstrap 的樣式 -->

<!-- 「開新文件」按鈕 -->
<button class="btn btn-outline-primary" onclick="openDocument();">開新文件</button>

<!-- 「關閉目前視窗」按鈕 -->
<button class="btn btn-outline-danger" onclick="window.close();">關閉目前視窗</button>


<!-- 註：'window.close();'只能關閉由JavaScript開啟的視窗，不能關掉使用者直接打開的分頁（大部分瀏覽器會阻擋） -->`,demoJS:`function openDocument() {
  var newWin = window.open("", "newWin");

  if (newWin) {
    newWin.document.open("text/html");
    newWin.document.write("這是新的HTML文件");
    newWin.document.close();
  } else {
    alert("彈出窗口被阻擋，請允許彈出窗口後重視");
  };
};`},{id:"bottomUpdateMessageNote",title:"按鈕更新文字",description:"<p>註：此處是用傳統 JavaScript 寫的 DOM 操作，若在 Vue.js 中，可以改透過 <code>v-text</code> 、 <code>{{ message }}</code> 或 <code>v-html</code> 等「響應式資料綁定」來實現畫面更新。</p>",demoStyle:null,component:p(()=>_(()=>import("./ButtomUpdateMessageNoteDemo-C2Di7g9s.js"),__vite__mapDeps([4,1,2,5]))),demo:`<div id="msg">原始文字</div>
<button onclick="updateMessage1()">Update Message 1</button>
<button onclick="updateMessage2()">Update Message 2</button>`,demoJS:`function updateMessage1() {
  document.getElementById('msg').innerHTML = "<i>我是按鈕一的文字</i>";
};
                    
function updateMessage2() {
  document.getElementById('msg').innerHTML = "<i>我是按鈕二的文字</i>";
};`},{id:"rocDateToAdDateNote",title:"民國紀年改成西元",description:null,demoStyle:null,component:null,demo:null,demoJS:`// 先設一個函式轉換日期格式
// 中華民國年份改成西元
const ROCDateToADDate = (date) => {
  // 年份轉換
  date = date.replace(/d{3}/, (match => String(+match + 1911)));  // 將前三位數字加上1911，使其從民國紀年轉為西元紀年

  // 季度換成每季第一天
  // 定義一個對應表，用於將季度表示（如Q1, Q2）轉換成對應的日期
  const seasonDates = {
    Q1: "-01-01",
    Q2: "-04-01",
    Q3: "-07-01",
    Q4: "-10-01"
  };

  const season = date.match(/Qd/)[0];  // 找到季度表示（如Q1, Q2），因為'.match()'會返回一個陣列（此處為單元素陣列），所以需要用[0]取出該元素
  date = date.replace(season, seasonDates[season]);  // 用對應的日期替換季度表示
  return new Date(date);  // 將處理後的字串轉換成Date物件，並回傳
};



// 若是用 D3.js 取 csv 檔，可再如下引用上方函式

// 取資料（資料格式要注意）
const res = await d3.csv("../data/housePrice/南港96Q3至113Q1買賣契約價格平均總價.csv")
const data = res.map((i) => {
  i["date"] = ROCDateToADDate(i["date"]);
  return i;
});  // 日期格式轉換
`}],u=D(a[0].id),e=f(()=>a.find(i=>i.id===u.value)||a[0]);k(()=>{v(()=>r.highlightAll())});function y(){v(()=>{document.querySelectorAll("pre code").forEach(i=>{delete i.dataset.highlighted}),r.highlightAll()})}return(i,s)=>(o(),n("div",C,[t("div",H,[t("nav",J,[t("ul",null,[(o(),n(m,null,b(a,l=>t("li",{key:l.id,class:h({active:l.id===u.value}),onClick:q=>u.value=l.id},d(l.title),11,E)),64))])]),T(S,{name:"fade",mode:"out-in",onAfterEnter:y},{default:M(()=>[e.value?(o(),n("section",{class:"content",key:e.value.id},[t("h3",N,d(e.value.title),1),s[2]||(s[2]=t("hr",null,null,-1)),t("div",V,[e.value.description?(o(),n("div",{key:0,class:"description",innerHTML:e.value.description},null,8,B)):c("",!0),t("div",{class:h({demo:e.value.demo})},[e.value.component?(o(),L(Q(e.value.component),{key:0})):(o(),n("div",{key:1,innerHTML:e.value.demo,style:j(e.value.demoStyle)},null,12,W))],2),t("div",O,[e.value.demo?(o(),n(m,{key:0},[s[0]||(s[0]=g(" html code: ")),t("pre",null,[t("code",I,d(e.value.demo),1)])],64)):c("",!0),e.value.demoJS?(o(),n(m,{key:1},[s[1]||(s[1]=g(" javascript code: ")),t("pre",null,[t("code",P,d(e.value.demoJS),1)])],64)):c("",!0)])])])):c("",!0)]),_:1})])]))}},$=w(R,[["__scopeId","data-v-ce73464f"]]);export{$ as default};
