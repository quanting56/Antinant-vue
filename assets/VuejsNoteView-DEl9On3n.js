import{_ as y,r as b,k as V,o as S,p as g,c as l,b as i,g as _,F as p,d as v,u as T,w as x,T as k,f as e,j as O,t as u,h as o,n as D,s as h,v as j,i as r}from"./index-CEHlQR9v.js";import{H as c,x as L,j as N}from"./vs2015-CSxvYctc.js";const f=[{id:"vuejsStartNote",title:"開始使用 Vue.js",description:"<p>Vue.js 可以透過多種方式使用，依據不同的需求，選擇最適合的方法。（From ChatGPT）</p>",descriptionComponent:null,descriptionComponentStyle:null,lists:[{listTitle:"使用 CDN",listSubtitle:`<ol>
  <li>直接在 HTML 的 <code>&lt;head&gt;</code> 或 <code>&lt;body&gt;</code> 內引入 Vue.js 的 CDN 連結。</li>
  <li>在 <code>&lt;script&gt;</code> 中寫 Vue 程式碼。</li>
</ol>
<pre style="margin-top: 12px; padding: 16px;"><code class="html">&lt;script src="https://unpkg.com/vue@3/dist/vue.global.js"&gt;&lt;/script&gt;</code></pre>
<h5 style="margin-top: 24px;">- 適用情境 -</h5>
<div>
  ✅ 快速開發與測試，不需要額外安裝。<br />
  ✅ 適合寫小型專案或學習 Vue。<br />
  ❌ 不適合正式上線，因為網速影響載入速度。
</div>`,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueOptionApiCode:null,vueCompositionApiCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueOptionApiCode:null,vueCompositionApiCode:null}}]},{listTitle:"下載 Vue.js 本地檔案",listSubtitle:`<ol>
  <li>下載 Vue.js：
    <ul>
      <li>官方網站下載：<a href="https://vuejs.org/" target="_blank">https://vuejs.org/</a>。</li>
      <li>選擇 <code>vue.global.js</code> 或 <code>vue.global.prod.js</code>（生產環境）。</li>
    </ul>
  </li>
  <li>把檔案放在專案資料夾內，例如 <code>/js/vue.global.js</code>。</li>
  <li>在 HTML 內引用。</li>
</ol>
<pre style="margin-top: 12px; padding: 16px;"><code class="html">&lt;script src="js/vue.global.js"&gt;&lt;/script&gt;</code></pre>
<h5 style="margin-top: 24px;">- 適用情境 -</h5>
<div>
  ✅ 適合內部專案或網路受限的環境。<br />
  ✅ 不受 CDN 影響，可以完全掌控 Vue 版本。<br />
  ❌ 需要手動更新 Vue.js 版本。
</div>`,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueOptionApiCode:null,vueCompositionApiCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueOptionApiCode:null,vueCompositionApiCode:null}}]},{listTitle:"使用 npm 安裝 Vue（適合大型專案、前端開發者）",listSubtitle:`<ol>
  <li>安裝 Node.js 與 npm（如果還沒裝）：
    <ul>
      <li>官方網站下載：<a href="https://nodejs.org/" target="_blank">https://nodejs.org/</a>。</li>
      <li>
        安裝後，開啟終端機（Terminal / CMD）輸入：
<pre style="margin-top: 12px; padding: 16px;"><code class="javascript">node -v
npm -v</pre></code>
        確認已安裝 Node.js 和 npm。
      </li>
    </ul>
  </li>
  <li style="margin-top: 16px;">
    建立專案資料夾並初始化 npm
<pre style="margin-top: 12px; padding: 16px;"><code class="javascript">mkdir my-vue-app
cd my-vue-app
npm init -y</code></pre>
  </li>
  <li>安裝 Vue
<pre style="margin-top: 12px; padding: 16px;"><code class="javascript">npm install vue</code></pre>
  </li>
  <li>
    在 JavaScript 檔案（如 <code>main.js</code>）中：
<pre style="margin-top: 12px; padding: 16px;"><code class="javascript">import { createApp } from "vue";

const app = createApp({
  data() {
    return { message: "Hello Vue with npm!" };
  }
});

app.mount("#app");</code></pre>
                          </li>
</ol>
<h5 style="margin-top: 24px;">- 適用情境 -</h5>
<div>
  ✅ 適合大型專案，能搭配 Vue CLI、Webpack、Vite。<br />
  ✅ 支援 ES6 模組化開發，適合與其他前端工具整合。<br />
  ❌ 需要安裝 npm，較適合有開發經驗的使用者。
</div>`,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueOptionApiCode:null,vueCompositionApiCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueOptionApiCode:null,vueCompositionApiCode:null}}]},{listTitle:"使用 Vue CLI 建立完整專案",listSubtitle:`<p>Vue CLI（Command Line Interface）是 Vue 官方提供的工具，可以快速建立 Vue 應用程式。</p>
<ol>
  <li>安裝 Vue CLI：
<pre style="margin-top: 12px; padding: 16px;"><code class="javascript">npm install -g @vue/cli</code></pre>
  </li>
  <li>建立 Vue 專案：
<pre style="margin-top: 12px; padding: 16px;"><code class="javascript">vue create my-vue-project</code></pre>
  </li>
  <li>進入專案資料夾並啟動伺服器：
<pre style="margin-top: 12px; padding: 16px;"><code class="javascript">cd my-vue-project
npm run serve</code></pre>
  </li>
  <li>瀏覽器開啟 <code>http://localhost:8080</code>，即可看到 Vue 頁面。</li>
</ol>
<h5 style="margin-top: 24px;">- 適用情境 -</h5>
<div>
  ✅ 適合正式專案，內建 Webpack、熱重載等功能。<br />
  ✅ 支援 SCSS、TypeScript、ESLint 等前端開發工具。<br />
  ❌ 需要學習 CLI 指令，較適合開發團隊。
</div>`,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueOptionApiCode:null,vueCompositionApiCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueOptionApiCode:null,vueCompositionApiCode:null}}]},{listTitle:"使用 Vite 建立 Vue 專案（比 Vue CLI 更快）",listSubtitle:`<p>Vite 是 Vue 官方推薦的開發工具，比 Vue CLI 載入更快。</p>
<ol>
  <li>安裝 Vite：
<pre style="margin-top: 12px; padding: 16px;"><code class="javascript">npm create vite@latest my-vite-project --template vue</code></pre>
  </li>
  <li>進入專案並安裝依賴：
<pre style="margin-top: 12px; padding: 16px;"><code class="javascript">cd my-vite-project
npm install</code></pre>
  </li>
  <li>啟動伺服器：
<pre style="margin-top: 12px; padding: 16px;"><code class="javascript">npm run dev</code></pre>
  </li>
  <li>在瀏覽器開啟 <code>http://localhost:5173</code>，即可看到 Vue 頁面。</li>
</ol>
<h5 style="margin-top: 24px;">- 適用情境 -</h5>
<div>
  ✅ 開發速度快，適合 Vue 3 專案。<br />
  ✅ 內建 HMR（熱重載），更快速調整程式碼。<br />
  ✅ 適合與 Tailwind CSS、Pinia、TypeScript 搭配。<br />
  ❌ 需要學習 Vite 配置，較適合開發者。
</div>`,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueOptionApiCode:null,vueCompositionApiCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueOptionApiCode:null,vueCompositionApiCode:null}}]},{listTitle:"透過 CDN 使用 Vue SFC（單文件元件）",listSubtitle:`<p>Vue 3 支援單文件元件（Single File Component, SFC），即 <code>.vue</code> 檔案，但通常需要 Webpack 或 Vite 來處理。若不想安裝這些工具，可以使用 Vue 官方的 <code>@vue/compiler-sfc</code>。</p>
<ol>
  <li>透過 CDN載入 Vue：
<pre style="margin-top: 12px; padding: 16px;"><code class="html">&lt;script type="importmap"&gt;
  {
    "imports": {
      "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
    }
  }
&lt;/script&gt;</code></pre>
  </li>
  <li>建立 Vue SFC（單文件元件）
<pre style="margin-top: 12px; padding: 16px;"><code class="html">&lt;script type="module"&gt;
  import { createApp } from "vue";

  const app = createApp({
    template: \`&lt;h1&gt;{{ message }}&lt;/h1&gt;\`,
    data() {
      return { message: "Hello Vue SFC!" };
    }
  });

  app.mount("#app");
&lt;/script&gt;</code></pre>
  </li>
</ol>
<h5 style="margin-top: 24px;">- 適用情境 -</h5>
<div>
  ✅ 不需要安裝 npm，但可以使用 Vue 組件。<br />
  ✅ 適合小型專案或學習 Vue SFC。<br />
  ❌ 瀏覽器需要支援 ES 模組（較新版本才行）。
</div>`,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueOptionApiCode:null,vueCompositionApiCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueOptionApiCode:null,vueCompositionApiCode:null}}]},{listTitle:"結論",listSubtitle:`<table border="1" cellpadding="5" cellspacing="0">
  <tr>
    <th>方法</th>
    <th>優點</th>
    <th>缺點</th>
    <th>適合對象</th>
  </tr>
  <tr>
    <td>CDN</td>
    <td>快速、無需安裝</td>
    <td>不適合正式專案</td>
    <td>初學者、快速測試</td>
  </tr>
  <tr>
    <td>下載本地 Vue.js</td>
    <td>不受 CDN 限制</td>
    <td>需手動更新</td>
    <td>小型專案</td>
  </tr>
  <tr>
    <td>npm 安裝 Vue</td>
    <td>可搭配 ES6 模組</td>
    <td>需安裝 npm</td>
    <td>前端開發者</td>
  </tr>
  <tr>
    <td>Vue CLI</td>
    <td>自動配置 Webpack</td>
    <td>需學習 CLI</td>
    <td>正式開發</td>
  </tr>
  <tr>
    <td>Vite</td>
    <td>開發速度快</td>
    <td>需學習配置</td>
    <td>Vue 3 專案</td>
  </tr>
  <tr>
    <td>Vue SFC (CDN)</td>
    <td>支援 Vue 組件</td>
    <td>瀏覽器支援限制</td>
    <td>小型 Vue 組件開發</td>
  </tr>
</table>`,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueOptionApiCode:null,vueCompositionApiCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueOptionApiCode:null,vueCompositionApiCode:null}}]}]},{id:"vuejsInstanceNote",title:"Vue.js的實體",description:null,descriptionComponent:null,descriptionComponentStyle:null,lists:[{listTitle:null,listSubtitle:null,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueOptionApiCode:null,vueCompositionApiCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueOptionApiCode:null,vueCompositionApiCode:null}}]}]},{id:"vuejsDataProcessingNote",title:"資料加工與邏輯整合",description:null,descriptionComponent:null,descriptionComponentStyle:null,lists:[{listTitle:null,listSubtitle:null,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueOptionApiCode:null,vueCompositionApiCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueOptionApiCode:null,vueCompositionApiCode:null}}]}]},{id:"vuejsDirectiveNote",title:"Vue.js指令",description:null,descriptionComponent:null,descriptionComponentStyle:null,lists:[{listTitle:null,listSubtitle:null,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueOptionApiCode:null,vueCompositionApiCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueOptionApiCode:null,vueCompositionApiCode:null}}]}]},{id:"vuejsEventNote",title:"Vue.js事件處理",description:null,descriptionComponent:null,descriptionComponentStyle:null,lists:[{listTitle:null,listSubtitle:null,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueOptionApiCode:null,vueCompositionApiCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueOptionApiCode:null,vueCompositionApiCode:null}}]}]},{id:"vuejsConditionListNote",title:"Vue.js條件判斷與列表渲染",description:null,descriptionComponent:null,descriptionComponentStyle:null,lists:[{listTitle:null,listSubtitle:null,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueOptionApiCode:null,vueCompositionApiCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueOptionApiCode:null,vueCompositionApiCode:null}}]}]},{id:"vuejsLifecycleNote",title:"Vue.js元件的生命週期與更新機制",description:null,descriptionComponent:null,descriptionComponentStyle:null,lists:[{listTitle:null,listSubtitle:null,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueOptionApiCode:null,vueCompositionApiCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueOptionApiCode:null,vueCompositionApiCode:null}}]}]},{id:"vuejs??????Note",title:"？？？？？",description:null,descriptionComponent:null,descriptionComponentStyle:null,lists:[{listTitle:null,listSubtitle:null,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueOptionApiCode:null,vueCompositionApiCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueOptionApiCode:null,vueCompositionApiCode:null}}]}]}],H={class:"vuejs-note-view"},I={class:"layout"},M={class:"sidebar"},F=["onClick"],w={class:"content-title"},E=["innerHTML"],P={key:2,class:"content-body"},B=["innerHTML"],W=["innerHTML"],z={key:1,class:"lists-demo"},J={key:2,class:"code"},q={key:0},G={class:"html"},R={key:1},$={class:"javascript"},K={class:"html"},Q={class:"html"},U={key:3},X=["innerHTML"],Y=["innerHTML"],Z={key:1,class:"details-demo"},ee={key:2,class:"code"},le={key:0},te={class:"html"},ie={key:1},oe={class:"javascript"},ne={class:"html"},de={class:"html"},se={__name:"VuejsNoteView",setup(ue){const a=f,m=b(a[0].id),d=V(()=>a.find(C=>C.id===m.value)||a[0]);c.registerLanguage("html",L),c.registerLanguage("javascript",N),S(()=>{g(()=>c.highlightAll())});function A(){g(()=>{document.querySelectorAll("pre code").forEach(C=>{delete C.dataset.highlighted}),c.highlightAll()})}return(C,s)=>(e(),l("div",H,[i("div",I,[i("nav",M,[i("ul",null,[(e(!0),l(p,null,v(T(a),t=>(e(),l("li",{key:t.id,class:O({active:t.id===m.value}),onClick:n=>m.value=t.id},u(t.title),11,F))),128))])]),_(k,{name:"fade",mode:"out-in",onAfterEnter:A},{default:x(()=>[d.value?(e(),l("section",{class:"content",key:d.value.id},[i("h3",w,u(d.value.title),1),s[4]||(s[4]=i("hr",null,null,-1)),d.value.description?(e(),l("div",{key:0,class:"description",innerHTML:d.value.description},null,8,E)):o("",!0),d.value.descriptionComponent?(e(),l("div",{key:1,style:D(d.value.descriptionComponentStyle),class:"description-component"},[(e(),h(j(d.value.descriptionComponent)))],4)):o("",!0),d.value.lists.length&&d.value.lists[0].listTitle?(e(),l("ul",P,[(e(!0),l(p,null,v(d.value.lists,t=>(e(),l("li",{key:t.listTitle,class:"list"},[i("h4",{class:"list-title",innerHTML:t.listTitle},null,8,B),t.listSubtitle?(e(),l("div",{key:0,class:"list-subtitle",innerHTML:t.listSubtitle},null,8,W)):o("",!0),t.listComponent?(e(),l("div",z,[(e(),h(j(t.listComponent)))])):o("",!0),t.listCode.htmlCode||t.listCode.jsCode||t.listCode.vueCode?(e(),l("div",J,[t.listCode.htmlCode?(e(),l("pre",q,[i("code",G,u(t.listCode.htmlCode),1)])):o("",!0),t.listCode.jsCode?(e(),l("pre",R,[i("code",$,u(t.listCode.jsCode),1)])):o("",!0),t.listCode.vueOptionApiCode?(e(),l(p,{key:2},[s[0]||(s[0]=r(" Vue 3 - Option API 這樣寫： ")),i("pre",null,[i("code",K,u(t.listCode.vueOptionApiCode),1)])],64)):o("",!0),t.listCode.vueCompositionApiCode?(e(),l(p,{key:3},[s[1]||(s[1]=r(" Vue 3 - Composition API 這樣寫： ")),i("pre",null,[i("code",Q,u(t.listCode.vueCompositionApiCode),1)])],64)):o("",!0)])):o("",!0),t.listDetails.length&&t.listDetails[0].detailTitle?(e(),l("ol",U,[(e(!0),l(p,null,v(t.listDetails,n=>(e(),l("li",{key:n.detailTitle,class:"detail"},[i("h5",{class:"detail-title",innerHTML:n.detailTitle},null,8,X),n.detailSubtitle?(e(),l("div",{key:0,class:"detail-subtitle",innerHTML:n.detailSubtitle},null,8,Y)):o("",!0),n.detailComponent?(e(),l("div",Z,[(e(),h(j(n.detailComponent)))])):o("",!0),n.detailCode.htmlCode||n.detailCode.jsCode||n.detailCode.vueCode?(e(),l("div",ee,[n.detailCode.htmlCode?(e(),l("pre",le,[i("code",te,u(n.detailCode.htmlCode),1)])):o("",!0),n.detailCode.jsCode?(e(),l("pre",ie,[i("code",oe,u(n.detailCode.jsCode),1)])):o("",!0),n.detailCode.vueOptionApiCode?(e(),l(p,{key:2},[s[2]||(s[2]=r(" Vue 3 - Option API 這樣寫： ")),i("pre",null,[i("code",ne,u(n.detailCode.vueOptionApiCode),1)])],64)):o("",!0),n.detailCode.vueCompositionApiCode?(e(),l(p,{key:3},[s[3]||(s[3]=r(" Vue 3 - Composition API 這樣寫： ")),i("pre",null,[i("code",de,u(n.detailCode.vueCompositionApiCode),1)])],64)):o("",!0)])):o("",!0)]))),128))])):o("",!0)]))),128))])):o("",!0)])):o("",!0)]),_:1})])]))}},Ce=y(se,[["__scopeId","data-v-d9d19c3d"]]);export{Ce as default};
