const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/JsOpenCloseWindowNoteDemo-D53Io_u4.js","assets/index-YWpp7Snf.js","assets/index-CtERxmw5.css","assets/JsOpenCloseWindowNoteDemo-TSkHhGjF.css","assets/ButtomUpdateMessageNoteDemo-BBgpKl4i.js","assets/ButtomUpdateMessageNoteDemo-tKWPik4T.css"])))=>i.map(i=>d[i]);
import{_ as w,r as S,m as p,k as D,o as f,p as g,c as n,b as t,g as k,F as m,d as H,w as T,T as b,q as v,f as o,j as h,t as c,h as d,s as M,v as x,n as A,i as _}from"./index-YWpp7Snf.js";import{H as r}from"./vs2015-txMzNINg.js";import{x as L,j as N}from"./javascript-BK9ByurK.js";const C={class:"javascript-note-view"},J={class:"layout"},Q={class:"sidebar"},j=["onClick"],E={class:"content-title"},I={class:"content-body"},V=["innerHTML"],B=["innerHTML"],P={class:"code"},W={class:"html"},O={class:"javascript"},K={__name:"JavascriptNoteView",setup(R){r.registerLanguage("html",L),r.registerLanguage("javascript",N);const a=[{id:"jsOpenCloseWindowNote",title:"開新視窗與關閉視窗",description:null,demoStyle:null,component:p(()=>v(()=>import("./JsOpenCloseWindowNoteDemo-D53Io_u4.js"),__vite__mapDeps([0,1,2,3]))),demo:`<!-- 這裡使用 Bootstrap 的樣式 -->

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
};`},{id:"bottomUpdateMessageNote",title:"按鈕更新文字",description:"<p>註：此處是用傳統 JavaScript 寫的 DOM 操作，若在 Vue.js 中，可以改透過 <code>v-text</code> 、 <code>{{ message }}</code> 或 <code>v-html</code> 等「響應式資料綁定」來實現畫面更新。</p>",demoStyle:null,component:p(()=>v(()=>import("./ButtomUpdateMessageNoteDemo-BBgpKl4i.js"),__vite__mapDeps([4,1,2,5]))),demo:`<div id="msg">原始文字</div>
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
`},{id:"ES6ClassNote",title:"一個典型的 class",description:`<p style="padding-top: 8px;">一個常見的 <code>class</code> 結構包含：</p>
<ul style="line-height: 1.65;">
  <li><strong>constructor</strong> → 初始化屬性</li>
  <li><strong>instance methods</strong> → 實例可以呼叫的方法</li>
  <li><strong>getters</strong> / <strong>setters</strong> → 讀取或修改屬性時做特殊處理</li>
  <li><strong>static methods</strong> → 類別本身的方法（不用 <code>new</code> 就能呼叫）</li>
  <li><strong>繼承（extends + super）</strong>→ 讓子類別可以共用父類別的功能</li>
</ul>`,demoStyle:null,component:null,demo:null,demoJS:`class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Instance method
  sayHello() {
    return \`Hi, I'm \${this.name}\`;
  }

  // Getter
  get isAdult() {
    return this.age >= 18;
  }

  // Setter
  set rename(newName) {
    this.name = newName;
  }

  // Static method
  static species() {
    return "Homo sapiens";
  }
}

// 建立實例
const p = new Person("Kuro", 25);
console.log(p.sayHello());  // "Hi, I'm Kuro"
console.log(p.isAdult);     // true
p.rename = "Ken";
console.log(p.sayHello());  // "Hi, I'm Ken"

// 不用 new，直接呼叫 class 的方法
console.log(Person.species()); // "Homo sapiens"
`}],u=S(a[0].id),e=D(()=>a.find(i=>i.id===u.value)||a[0]);f(()=>{g(()=>r.highlightAll())});function y(){g(()=>{document.querySelectorAll("pre code").forEach(i=>{delete i.dataset.highlighted}),r.highlightAll()})}return(i,s)=>(o(),n("div",C,[t("div",J,[t("nav",Q,[t("ul",null,[(o(),n(m,null,H(a,l=>t("li",{key:l.id,class:h({active:l.id===u.value}),onClick:U=>u.value=l.id},c(l.title),11,j)),64))])]),k(b,{name:"fade",mode:"out-in",onAfterEnter:y},{default:T(()=>[e.value?(o(),n("section",{class:"content",key:e.value.id},[t("h3",E,c(e.value.title),1),s[2]||(s[2]=t("hr",null,null,-1)),t("div",I,[e.value.description?(o(),n("div",{key:0,class:"description",innerHTML:e.value.description},null,8,V)):d("",!0),t("div",{class:h({demo:e.value.demo})},[e.value.component?(o(),M(x(e.value.component),{key:0})):(o(),n("div",{key:1,innerHTML:e.value.demo,style:A(e.value.demoStyle)},null,12,B))],2),t("div",P,[e.value.demo?(o(),n(m,{key:0},[s[0]||(s[0]=_(" html code: ")),t("pre",null,[t("code",W,c(e.value.demo),1)])],64)):d("",!0),e.value.demoJS?(o(),n(m,{key:1},[s[1]||(s[1]=_(" javascript code: ")),t("pre",null,[t("code",O,c(e.value.demoJS),1)])],64)):d("",!0)])])])):d("",!0)]),_:1})])]))}},$=w(K,[["__scopeId","data-v-54a36a99"]]);export{$ as default};
