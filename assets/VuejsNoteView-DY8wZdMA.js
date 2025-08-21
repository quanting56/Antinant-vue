const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/VuejsInstanceExplanation-DXDfaQ7P.js","assets/index-C1gfjxE6.js","assets/index-CtERxmw5.css","assets/VuejsInstanceExplanation-RhpWG5WB.css","assets/VuejsTemplateDemo-MX_pW3Tq.js","assets/VuejsTemplateDemo-ogo8ED3N.css","assets/VuejsMethodsDemo-Bek7aKjw.js","assets/VuejsMethodsDemo-DC2R1YNO.css","assets/VuejsComputedDemo-D64OZ_Lk.js","assets/VuejsVModelInputDemo-BMIkNN3W.js","assets/VuejsVModelInputDemo-CL_NTIDM.css","assets/VuejsVModelTextareaDemo-BjiNP-d7.js","assets/VuejsVModelTextareaDemo-DFU87P_O.css","assets/VuejsVModelRadioDemo-Cgmnlo4C.js","assets/VuejsVModelCheckboxMultipleDemo-B-7EKMrX.js","assets/VuejsVModelCheckboxMultipleDemo-kZnEW0Bt.css","assets/VuejsVModelCheckboxSingleDemo-BRK3ZBAd.js","assets/VuejsVModelSelectDemo-CgiqVxQi.js","assets/VuejsVModelLazyDemo-Bxsh4vij.js","assets/VuejsVModelLazyDemo-Bfue5IRt.css","assets/VuejsVModelNumberDemo-C5_t9TMG.js","assets/VuejsVModelTrimDemo-DDtxXN24.js","assets/VuejsVTextVHtmlDemo-DG7nE14w.js","assets/VuejsVOnceDemo-WsZoPPyj.js","assets/VuejsVPreDemo-A1FSKyTK.js","assets/VuejsVBindClass1Demo-CDpydVAy.js","assets/VuejsVBindClass1Demo-BD27_cCY.css","assets/VuejsVBindClass2Demo-DM8HUc8E.js","assets/VuejsVBindClass2Demo-wnXBbQuf.css","assets/VuejsVBindStyleDemo-BRBciaHH.js","assets/VuejsVOnDemo-DNiKqxfy.js","assets/VuejsVOnDemo-BCnyyx8-.css","assets/VuejsVOnKeydownEnterDemo-BuuxqdJa.js","assets/VuejsVOnKeydownEnterDemo-CTdYBlpU.css","assets/VuejsVShowDemo-9DMgHNXA.js","assets/VuejsVShowDemo-Bs5Lwwpa.css","assets/VuejsVIfDemo-DMtvXAqt.js","assets/VuejsVForArrayDemo-CZ5QzNvg.js","assets/VuejsVForArrayDemo-C2d8LPow.css","assets/VuejsVForObjectDemo-CMQCLmJ3.js","assets/VuejsVForNumberRangeDemo-Ds2xRo6d.js","assets/VuejsVForNumberRangeDemo-Bz9kLrmA.css","assets/VuejsVForTemplateDemo-CJIHm4gY.js","assets/VuejsVForTemplateDemo-Df8Eplkd.css"])))=>i.map(i=>d[i]);
import{m as t,q as l,_ as V,r as _,k,o as j,p as y,c as i,b as s,g as x,F as r,d as h,u as T,w as F,T as A,f as e,j as M,t as a,h as n,n as D,s as b,v as g,i as S}from"./index-C1gfjxE6.js";import{H as C,x as E,j as w}from"./vs2015-CSxvYctc.js";const L=[{id:"vuejsStartNote",title:"開始使用 Vue.js",description:"<p>Vue.js 可以透過多種方式使用，依據不同的需求，選擇最適合的方法。（From ChatGPT）</p>",descriptionComponent:null,descriptionComponentStyle:null,lists:[{listTitle:"使用 CDN",listSubtitle:`<ol>
  <li>直接在 HTML 的 <code>&lt;head&gt;</code> 或 <code>&lt;body&gt;</code> 內引入 Vue.js 的 CDN 連結。</li>
  <li>在 <code>&lt;script&gt;</code> 中寫 Vue 程式碼。</li>
</ol>
<pre style="margin-top: 12px; padding: 16px;"><code class="html">&lt;script src="https://unpkg.com/vue@3/dist/vue.global.js"&gt;&lt;/script&gt;</code></pre>
<h5 style="margin-top: 24px;">- 適用情境 -</h5>
<div>
  ✅ 快速開發與測試，不需要額外安裝。<br />
  ✅ 適合寫小型專案或學習 Vue。<br />
  ❌ 不適合正式上線，因為網速影響載入速度。
</div>`,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]},{listTitle:"下載 Vue.js 本地檔案",listSubtitle:`<ol>
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
</div>`,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]},{listTitle:"使用 npm 安裝 Vue（適合大型專案、前端開發者）",listSubtitle:`<ol>
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
</div>`,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]},{listTitle:"使用 Vue CLI 建立完整專案",listSubtitle:`<p>Vue CLI（Command Line Interface）是 Vue 官方提供的工具，可以快速建立 Vue 應用程式。</p>
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
</div>`,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]},{listTitle:"使用 Vite 建立 Vue 專案（比 Vue CLI 更快）",listSubtitle:`<p>Vite 是 Vue 官方推薦的開發工具，比 Vue CLI 載入更快。</p>
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
</div>`,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]},{listTitle:"透過 CDN 使用 Vue SFC（單文件元件）",listSubtitle:`<p>Vue 3 支援單文件元件（Single File Component, SFC），即 <code>.vue</code> 檔案，但通常需要 Webpack 或 Vite 來處理。若不想安裝這些工具，可以使用 Vue 官方的 <code>@vue/compiler-sfc</code>。</p>
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
</div>`,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]},{listTitle:"結論",listSubtitle:`<table border="1" cellpadding="5" cellspacing="0">
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
</table>`,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]}]},{id:"vuejsInstanceNote",title:"Vue 實體",description:null,descriptionComponent:t(()=>l(()=>import("./VuejsInstanceExplanation-DXDfaQ7P.js"),__vite__mapDeps([0,1,2,3]))),descriptionComponentStyle:null,lists:[{listTitle:"template 模板屬性",listSubtitle:null,listComponent:t(()=>l(()=>import("./VuejsTemplateDemo-MX_pW3Tq.js"),__vite__mapDeps([4,1,2,5]))),listCode:{htmlCode:`<div id="VuejsTemplate">
  <p>這行字會被模板字取代</p>
</div>

<script>
  const vmVuejsTemplate = Vue.createApp({
    template: \`<p><b>{{ greeting }}</b> 好棒棒！</p><input v-model="greeting" placeholder="可輸入文字">\`,
    data() {
      return {
        greeting: ""
      }
    }
  }).mount("#VuejsTemplate");
<\/script>`,jsCode:null,vueSFCCode:`<template>
  <p><b>{{ greeting }}</b> 好棒棒！</p>
  <input v-model="greeting" placeholder="可輸入文字" />
</template>

<script setup>
import { ref } from "vue";

const greeting = ref("");
<\/script>

<style scoped>
p {
  margin-top: 0;
}
</style>`},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]}]},{id:"vuejsDataProcessingNote",title:"資料加工與邏輯整合",description:"包含 <code>methods</code> 與 <code>computed</code>。",descriptionComponent:null,descriptionComponentStyle:null,lists:[{listTitle:"methods 方法",listSubtitle:null,listComponent:t(()=>l(()=>import("./VuejsMethodsDemo-Bek7aKjw.js"),__vite__mapDeps([6,1,2,7]))),listCode:{htmlCode:`<div id="VuejsMethods">
  <p>
    <input v-model="price" placeholder="0"> 元/顆蘋果
     * <input v-model="quantity" placeholder="0"> 顆蘋果
     = {{ subtotal() }} 元
  </p>
</div>

<script>
  const vmVuejsMethods = Vue.createApp({
    data() {
      return {
        price: "",
        quantity: ""
      }
    },
    methods: {
      subtotal() {
        return this.price * this.quantity;
      }
    }
  }).mount("#VuejsMethods");
<\/script>`,jsCode:null,vueSFCCode:`<template>
  <p>
    <input v-model="price" placeholder="0"> 元/顆蘋果
     * <input v-model="quantity" placeholder="0"> 顆蘋果
     = {{ subtotal() }} 元
  </p>
</template>

<script setup>
import { ref } from "vue";

const price = ref("");
const quantity = ref("");

// methods可以直接寫成函數
function subtotal() {
  return price.value * quantity.value;
}
<\/script>

<style scoped>
p {
  margin-top: 0;
}
</style>`},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]},{listTitle:"computed 計算屬性",listSubtitle:'<div style="color: rgba(33, 37, 41, 0.75); font-size: 12px; font-style: italic; margin-bottom: 8px;">- 在這個例子，跟上面只有差在模板裡的 subtotal 有沒有加 <code>()</code></div>',listComponent:t(()=>l(()=>import("./VuejsComputedDemo-D64OZ_Lk.js"),__vite__mapDeps([8,1,2]))),listCode:{htmlCode:`<div id="VuejsComputed">
  <p>
    <input v-model="price" placeholder="0"> 元/顆蘋果
     * <input v-model="quantity" placeholder="0"> 顆蘋果
     = {{ subtotal }} 元
  </p>
</div>

<script>
  const vmVuejsComputed = Vue.createApp({
    data() {
      return {
        price: "",
        quantity: "",
      }
    },
    computed: {
      subtotal() {
        return this.price * this.quantity;
      }
    }
  }).mount("#VuejsComputed");
<\/script>`,jsCode:null,vueSFCCode:`<template>
  <p>
    <input v-model="price" placeholder="0"> 元/顆蘋果
     * <input v-model="quantity" placeholder="0"> 顆蘋果
     = {{ subtotal }} 元
  </p>
</template>

<script setup>
import { ref, computed } from "vue";

const price = ref("");
const quantity = ref("");

// subtotal會隨著price, quantity自動計算
const subtotal = computed(() => price.value * quantity.value);
<\/script>

<style scoped></style>`},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]},{listTitle:"methods 與 computed 比較",listSubtitle:null,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:"<code>methods</code> 方法",detailSubtitle:null,detailContent:`<ul style="margin-top: 16px; line-height: 1.6;">
  <li><code>methods</code> 內的函式 <strong>每次呼叫時都會執行，不會快取</strong> 結果。</li>
  <li>適用於 <strong>需要即時執行的操作</strong>，例如事件處理（按鈕點擊）、非同步請求（AJAX）、DOM 操作等。</li>
  <li><strong>不適合用來依賴數據計算值</strong>，因為每次呼叫時都會重新執行，即使數據沒有變更，可能會造成效能浪費。</li>
</ul>`,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}},{detailTitle:"<code>computed</code> 計算屬性",detailSubtitle:null,detailContent:`<ul style="margin-top: 16px; line-height: 1.6;">
  <li><code>computed</code> 屬性會 <strong>基於它所依賴的響應式數據</strong> 來自動計算結果，並且 <strong>有快取機制（Cache）</strong>。</li>
  <li>當 <strong>依賴的數據沒有變化</strong> 時，<code>computed</code> <strong>不會重新執行</strong>，而是直接返回上一次的計算結果，提升效能。</li>
  <li>適用於 <strong>根據既有數據計算新數據的情境</strong>，例如格式化數據、過濾數據、簡單運算等。</li>
</ul>`,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}},{detailTitle:"兩者對比",detailSubtitle:null,detailContent:`<table border="1" cellpadding="5" cellspacing="0">
  <thead>
    <tr>
      <th></th>
      <th><code>computed</code></th>
      <th><code>methods</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>是否快取</b></td>
      <td>✅ 會快取結果</td>
      <td>❌ 不會快取，每次都執行</td>
    </tr>
    <tr>
      <td><b>何時執行</b></td>
      <td>只有當 <strong>依賴的數據變更</strong> 時才會重新計算</td>
      <td>每次呼叫時都會執行</td>
    </tr>
    <tr>
      <td><b>適用情境</b></td>
      <td><strong>基於現有數據計算新值</strong>，如：計算屬性、過濾數據、格式化日期</td>
      <td><strong>執行操作或處理事件</strong>，如：按鈕點擊、發送 API 請求、DOM 操作</td>
    </tr>
    <tr>
      <td><b>呼叫方式</b></td>
      <td><code>{{ computedProperty }}</code> 或 <code>this.computedProperty</code> <strong>像變數一樣使用</strong></td>
      <td><code>{{ method() }}</code> 或 <code>this.method()</code> <strong>像函式一樣調用</strong>
      </td>
    </tr>
  </tbody>
</table>`,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}},{detailTitle:"何時應該用 <code>computed</code>，何時用 <code>methods</code>？</h5>",detailSubtitle:null,detailContent:`<ul>
  <li>如果是依賴數據的計算，並且希望有快取機制，應該使用 <code>computed</code>。</li>
  <li>如果是純函式運算，每次都需要執行（例如事件處理、非同步請求），應該使用 <code>methods</code>。</li>
</ul>`,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]}]},{id:"vuejsDirectiveNote",title:"Vue 指令",description:`包含——
<ul style="margin-top: 8px; line-height: 1.6;">
  <li>屬性綁定：<code>v-bind</code>。</li>
  <li>表單綁定：<code>v-model</code> 與其修飾子。</li>
  <li>模板綁定：<code>v-text</code>、<code>v-html</code>、<code>v-once</code>、<code>v-pre</code>。</li>
  <li>樣式綁定：<code>v-bind:class</code>、<code>v-bind:style</code>。
</ul>`,descriptionComponent:null,descriptionComponentStyle:null,lists:[{listTitle:"屬性綁定：v-bind",listSubtitle:'<div style="color: rgba(33, 37, 41, 0.75); font-size: 12px; font-style: italic; margin-bottom: 8px;">- <code>v-bind:id="customId"</code> 也可以寫成 <code>:id="customId"</code></div>',listComponent:null,listCode:{htmlCode:`<div id="vBindId">
  <p v-bind:id="customId">我是vBindId</p>
</div>

<script>
  const vm = Vue.createApp({
    data() {
      return {
        customId: "item-id-1"
      }
    }
  }).mount("#vBindId");
<\/script>`,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]},{listTitle:"表單綁定：v-model",listSubtitle:null,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:"input 文字框",detailSubtitle:null,detailContent:null,detailComponent:t(()=>l(()=>import("./VuejsVModelInputDemo-BMIkNN3W.js"),__vite__mapDeps([9,1,2,10]))),detailCode:{htmlCode:`<div id="VuejsVModelInput">
  <input type="text" v-model="message" placeholder="edit me">
  <p>Message is: <b class="ms-2">{{ message }}</b></p>
</div>

<script>
  const VuejsVModelInputVM = Vue.createApp({
    data() {
      return {
        message: ""
      }
    }
  }).mount("#VuejsVModelInput");
<\/script>`,jsCode:null,vueSFCCode:`<template>
  <input type="text" v-model="message" placeholder="edit me">
  <p>Message is: <b>{{ message }}</b></p>
</template>

<script setup>
import { ref } from "vue";

const message = ref("");
<\/script>

<style scoped>
p {
  margin-bottom: 0;
}
</style>`}},{detailTitle:"textarea 文字方塊",detailSubtitle:null,detailContent:null,detailComponent:t(()=>l(()=>import("./VuejsVModelTextareaDemo-BjiNP-d7.js"),__vite__mapDeps([11,1,2,12]))),detailCode:{htmlCode:`<div id="VuejsVModelTextarea">
  <textarea v-model="message" placeholder="add multiline lines"></textarea>
  <p>Multiline message is: <b class="ms-2">{{ message }}</b></p>
</div>

<script>
  const VuejsVModelTextareaVM = Vue.createApp({
    data() {
      return {
        message: ""
      }
    }
  }).mount("#VuejsVModelTextarea");
<\/script>`,jsCode:null,vueSFCCode:`<template>
  <textarea v-model="message" placeholder="add multiline lines"></textarea>
  <p>Multiline message is: <b>{{ message }}</b></p>
</template>

<script setup>
import { ref } from "vue";

const message = ref("");
<\/script>

<style scoped>
p {
  margin: 0;
}
</style>`}},{detailTitle:"radio 選擇框",detailSubtitle:null,detailContent:null,detailComponent:t(()=>l(()=>import("./VuejsVModelRadioDemo-Cgmnlo4C.js"),__vite__mapDeps([13,1,2]))),detailCode:{htmlCode:`<div id="VuejsVModelRadio">
  <!-- 要注意下面兩組input對應的都是v-model="picked" -->
  <div>
    <input type="radio" id="one" value="1" v-model="picked">
    <label for="one" class="ms-1">One</label>
  </div>
  <div>
    <input type="radio" id="two" value="2" v-model="picked">
    <label for="two" class="ms-1">Two</label>
  </div>
  <span>Picked: {{ picked }}</span>
</div>

<script>
  const VuejsVModelRadioVM = Vue.createApp({
    data() {
      return {
        picked: ""
      }
    }
  }).mount("#VuejsVModelRadio");
<\/script>`,jsCode:null,vueSFCCode:`<template>
  <!-- 要注意下面兩組input對應的都是v-model="picked" -->
  <!-- 另外，把<input>包在<label>裡面的寫法，可以避免使用id+for造成的全域污染問題 -->
  <div>
    <label>
      <input type="radio" value="1" v-model="picked">
      <label>One</label>
    </label>
  </div>
  <div>
    <label>
      <input type="radio" value="2" v-model="picked">
      <label>Two</label>
    </label>
  </div>
  <span>Picked: {{ picked }}</span>
</template>

<script setup>
import { ref } from "vue";

const picked = ref("");
<\/script>

<style scoped></style>`}},{detailTitle:"checkbox 選擇框（多個選項）",detailSubtitle:null,detailContent:null,detailComponent:t(()=>l(()=>import("./VuejsVModelCheckboxMultipleDemo-B-7EKMrX.js"),__vite__mapDeps([14,1,2,15]))),detailCode:{htmlCode:`<div id="VuejsVModelCheckbox">
  <!-- 注意下面input對應的都是v-model="checkedNames" -->
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkedNames">
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
  <label for="mike">Mike</label>
  <input type="checkbox" id="mary" value="Mary" v-model="checkedNames">
  <label for="mary">Mary</label>
  <br>
  <p>Checked names: {{ checkedNames }}</p>
</div>

<script>
  const VuejsVModelCheckbox = Vue.createApp({
    data() {
      return {
        // 因為是複選的關係，這裡的checkedNames是陣列
        checkedNames: []
      }
    }
  }).mount("#VuejsVModelCheckbox");
<\/script>`,jsCode:null,vueSFCCode:`<template>
  <!-- 注意下面input對應的都是v-model="checkedNames" -->
  <!-- 另外，把<input>包在<label>裡面的寫法，可以避免使用id+for造成的全域污染問題 -->
  <label>
    <input type="checkbox" value="Jack" v-model="checkedNames">
    Jack
  </label>
  <label>
    <input type="checkbox" value="John" v-model="checkedNames">
    John
  </label>
  <label>
    <input type="checkbox" value="Mike" v-model="checkedNames">
    Mike
  </label>
  <label>
    <input type="checkbox" value="Mary" v-model="checkedNames">
    Mary
  </label>
  <br>
  <p>Checked names: {{ checkedNames }}</p>
</template>

<script setup>
import { ref } from "vue";

// 因為是複選的關係，這裡的checkedNames是陣列
const checkedNames = ref([]);
<\/script>

<style scoped>
p {
  margin-bottom: 0;
}
</style>`}},{detailTitle:"checkbox 選擇框（單個選項）",detailSubtitle:null,detailContent:null,detailComponent:t(()=>l(()=>import("./VuejsVModelCheckboxSingleDemo-BRK3ZBAd.js"),__vite__mapDeps([16,1,2]))),detailCode:{htmlCode:`<div id="VuejsVModelCheckboxSingle">
  <input type="checkbox" id="VuejsVModelCheckboxSingleCheckbox" v-model="isChecked">
  <label for="VuejsVModelCheckboxSingleCheckbox">Status: {{ isChecked }}</label>
</div>

<script>
  const VuejsVModelCheckboxSingleVM = Vue.createApp({
    data() {
      return {
        isChecked: false
      }
    }
  }).mount("#VuejsVModelCheckboxSingle");
<\/script>`,jsCode:null,vueSFCCode:`<template>
  <label>
    <input type="checkbox" v-model="isChecked">
    Status: {{ isChecked }}
  </label>
</template>

<script setup>
import { ref } from "vue";

const isChecked = ref(false);
<\/script>

<style scoped></style>`}},{detailTitle:"select 下拉式選單",detailSubtitle:null,detailContent:null,detailComponent:t(()=>l(()=>import("./VuejsVModelSelectDemo-CgiqVxQi.js"),__vite__mapDeps([17,1,2]))),detailCode:{htmlCode:`<div id="VuejsVModelSelect">
  <!-- 注意，v-model要放在select而不是option -->
  <select v-model="selected">
    <!-- 第一個選項設定為disabled的好處是可以保證使用者不會送出此預設值 -->
    <option disabled value="">請選擇</option>
    <option value="臺北市">臺北市</option>
    <option value="新北市">新北市</option>
    <option value="基隆市">基隆市</option>
  </select>
  <p>現在選到的行政區是 <b>{{ selected || '未選擇'}}</b></p>
</div>

<script>
  const VuejsVModelSelectVM = Vue.createApp({
    data() {
      return {
        selected: ""
      }
    }
  }).mount("#VuejsVModelSelect");
<\/script>`,jsCode:null,vueSFCCode:`<template>
  <!-- 注意，v-model要放在select而不是option -->
  <select v-model="selected">
    <!-- 第一個選項設定為disabled的好處是可以保證使用者不會送出此預設值 -->
    <option disabled value="">請選擇</option>
    <option value="臺北市">臺北市</option>
    <option value="新北市">新北市</option>
    <option value="基隆市">基隆市</option>
  </select>
  <p>現在選到的行政區是 <b>{{ selected || '未選擇'}}</b></p>
</template>

<script setup>
import { ref } from "vue";

const selected = ref("");
<\/script>

<style scoped></style>`}}]},{listTitle:"v-model 與修飾子",listSubtitle:null,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:"<code>v-model.lazy</code>",detailSubtitle:"在 <code>v-model</code> 後面加上 <code>.lazy</code>，會在使用者離開輸入框焦點時，才會更新 data 內容。",detailContent:null,detailComponent:t(()=>l(()=>import("./VuejsVModelLazyDemo-Bxsh4vij.js"),__vite__mapDeps([18,1,2,19]))),detailCode:{htmlCode:`<div id="VuejsVModelLazy">
  <input v-model.lazy="lazyMessage" placeholder="edit me">
  <p>Message is: {{ lazyMessage }}</p>
</div>

<script>
  const VuejsVModelLazyVM = Vue.createApp({
    data() {
      return {
        lazyMessage: ""
      }
    }
  }).mount("#VuejsVModelLazy");
<\/script>`,jsCode:null,vueSFCCode:`<template>
  <input v-model.lazy="lazyMessage" placeholder="edit me">
  <p>Message is: {{ lazyMessage }}</p>
</template>

<script setup>
import { ref } from "vue";

const lazyMessage = ref("");
<\/script>

<style scoped>
p {
  margin-bottom: 0;
}
</style>`}},{detailTitle:"<code>v-model.number</code>",detailSubtitle:"在 <code>&lt;input&gt;</code> 輸入框中輸入的數字都會是 string 型別，在 <code>v-model</code> 後加上 <code>.number</code> 可將其轉成 number 型別。",detailContent:null,detailComponent:t(()=>l(()=>import("./VuejsVModelNumberDemo-C5_t9TMG.js"),__vite__mapDeps([20,1,2]))),detailCode:{htmlCode:`<div id="app14">
  字串相加<br />
  <input v-model="message14a"> + <input v-model="message14b"> = {{ stringSum }}<br>
</div>
<br />
<div id="app15">
  數字相加<br />
  <input v-model.number="message15a"> + <input v-model.number="message15b"> = {{ numberSum }}
</div>

<script>
  const vm14 = Vue.createApp({
    data() {
      return {
        message14a: 0,
        message14b: 0
      }
    },
    computed: {
      stringSum() {
        return this.message14a + this.message14b;
      }
    }
  }).mount("#app14");

  const vm15 = Vue.createApp({
    data() {
      return {
        message15a: 0,
        message15b: 0
      }
    },
    computed: {
      numberSum() {
        return this.message15a + this.message15b;
      }
    }
  }).mount("#app15");
<\/script>`,jsCode:null,vueSFCCode:`<template>
  字串相加<br />
  <input v-model="message14a"> + <input v-model="message14b"> = {{ stringSum }}<br>
  <br />
  數字相加<br />
  <input v-model.number="message15a"> + <input v-model.number="message15b"> = {{ numberSum }}
</template>

<script setup>
import { ref, computed } from 'vue';

const message14a = ref(0);
const message14b = ref(0);
const stringSum = computed(() => message14a.value + message14b.value);

const message15a = ref(0);
const message15b = ref(0);
const numberSum = computed(() => message15a.value + message15b.value);
<\/script>

<style scoped></style>`}},{detailTitle:"<code>v-model.trim</code>",detailSubtitle:"<code>v-model</code> 加上 <code>.trim</code> 修飾子後，可自動過濾輸入框內前後輸入的空白字元。",detailContent:null,detailComponent:t(()=>l(()=>import("./VuejsVModelTrimDemo-DDtxXN24.js"),__vite__mapDeps([21,1,2]))),detailCode:{htmlCode:`<div id="app16">
  <textarea v-model.trim="message16"></textarea>
  <p>產出結果為： <pre>{{ message16 }}</pre></p>
</div>

<script>
  const vm16 = Vue.createApp({
    data() {
      return {
        message16: ""
      }
    }
  }).mount("#app16");
<\/script>`,jsCode:null,vueSFCCode:`<template>
  <textarea v-model.trim="message16"></textarea>
  <p>產出結果為： <pre>{{ message16 }}</pre></p>
</template>

<script setup>
import { ref } from "vue";

const message16 = ref("");
<\/script>

<style scoped></style>`}}]},{listTitle:"模板綁定",listSubtitle:null,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:"<code>v-text</code> 與 <code>v-html</code>",detailSubtitle:null,detailContent:null,detailComponent:t(()=>l(()=>import("./VuejsVTextVHtmlDemo-DG7nE14w.js"),__vite__mapDeps([22,1,2]))),detailCode:{htmlCode:`<div id="app17">
  <div v-text="text"></div>
  <div v-html="text"></div>
  <div>{{ text }}</div>
</div>

<script>
  const vm17 = Vue.createApp({
    data() {
      return {
        text: "<h3>Hello World!</h3>"
      }
    }
  }).mount("#app17");
<\/script>`,jsCode:null,vueSFCCode:`<template>
  <div v-text="text"></div>
  <div v-html="text"></div>
  <div>{{ text }}</div>
</template>

<script setup>
import { ref } from "vue";

const text = ref("<h3>Hello World!</h3>");
<\/script>

<style scoped></style>`}},{detailTitle:"<code>v-once</code>",detailSubtitle:"只會渲染指定的節點一次，往後就不再更新。",detailContent:null,detailComponent:t(()=>l(()=>import("./VuejsVOnceDemo-WsZoPPyj.js"),__vite__mapDeps([23,1,2]))),detailCode:{htmlCode:`<div id="app18">
  <input v-model="text">
  <div>
    沒有 <code>v-once</code> → {{ text }}
  </div>
  <div v-once>
    有 <code>v-once</code> → {{ text }}
  </div>
</div>

<script>
  const vm18 = Vue.createApp({
    data() {
      return {
        text: "Hello World"
      }
    }
  }).mount("#app18");
<\/script>`,jsCode:null,vueSFCCode:`<template>
  <input v-model="text">
  <div>沒有 <code>v-once</code> → {{ text }}</div>
  <div v-once>有 <code>v-once</code> → {{ text }}</div>
</template>

<script setup>
import { ref } from "vue";

const text = ref("Hello World");
<\/script>

<style scoped></style>`}},{detailTitle:"<code>v-pre</code>",detailSubtitle:'以下面例子來說，加上 <code>v-pre</code> 指令，會顯示原始的 "{{ text }}" ，而不會是編譯後的 text 內容。',detailContent:null,detailComponent:t(()=>l(()=>import("./VuejsVPreDemo-A1FSKyTK.js"),__vite__mapDeps([24,1,2]))),detailCode:{htmlCode:`<div id="app19">
  <!-- 加上v-pre後不會解析模板內容，直接顯示{{ text }} -->
  <div v-pre>
    有 <code>v-pre</code> → {{ text }}
  </div>

  <!-- 將{{ text }}轉換為text的內容 -->
  <div>
    沒有 <code>v-pre</code> → {{ text }}
  </div>
</div>

<script>
  const vm19 = Vue.createApp({
    data() {
      return {
        text: "v-pre測試內容"
      }
    }
  }).mount("#app19");
<\/script>`,jsCode:null,vueSFCCode:`<template>
  <!-- 加上v-pre後不會解析模板內容，直接顯示{{ text }} -->
  <div v-pre>
    有 <code>v-pre</code> → {{ text }}
  </div>

  <!-- 將{{ text }}轉換為text的內容 -->
  <div>
    沒有 <code>v-pre</code> → {{ text }}
  </div>
</template>

<script setup>
import { ref } from "vue";

const text = ref("v-pre測試內容");
<\/script>

<style scoped></style>`}}]},{listTitle:"樣式綁定",listSubtitle:null,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:"控制 <code>class</code>",detailSubtitle:'以下面例子來說，當 <code>message20.length > 10</code> 為真，DOM 會有 <code>class="error"</code> 的樣式。',detailContent:null,detailComponent:t(()=>l(()=>import("./VuejsVBindClass1Demo-CDpydVAy.js"),__vite__mapDeps([25,1,2,26]))),detailCode:{htmlCode:`<div id="app20">
  <input type="text" v-model.trim="message20" v-bind:class="{ 'error': message20.length > 10 }">
</div>

<style>
  .error {
    border: red solid 1px;
    color: red;
  }
</style>

<script>
  const vm20 = Vue.createApp({
    data() {
      return {
        message20: ""
      }
    }
  }).mount("#app20");
<\/script>`,jsCode:null,vueSFCCode:`<template>
  <input
    type="text"
    v-model.trim="message20"
    :class="{ 'error': message20.length > 10 }"
  >
</template>

<script setup>
import { ref } from "vue";

const message20 = ref("");
<\/script>

<style scoped>
  .error {
    border: red solid 1px;
    color: red;
  }
</style>`}},{detailTitle:"控制多組 <code>class</code>",detailSubtitle:null,detailContent:null,detailComponent:t(()=>l(()=>import("./VuejsVBindClass2Demo-DM8HUc8E.js"),__vite__mapDeps([27,1,2,28]))),detailCode:{htmlCode:`<div id="app21">
  <input type="text" v-model.trim="message21" v-bind:class="{ 'active': isActive, 'text-danger': hasError }">
</div>

<style>
  .active {
    border: gray dashed 1px;
    color: blue;
  }
  .text-danger {
    border: red solid 1px;
    color: red;
  }
</style>

<script>
  const vm21 = Vue.createApp({
    data() {
      return {
        message21: "",
        isActive: true,
        hasError: false
      }
    },
    watch: {
      message21(newValue) {
        if ( newValue.length <= 5 ) {
          this.isActive = true;
          this.hasError = false;
        } else {
          this.isActive = false;
          this.hasError = true;
        }
      }
    }
  }).mount("#app21");
<\/script>`,jsCode:null,vueSFCCode:`<template>
  <input
    type="text"
    v-model.trim="message21"
    :class="{ 'active': isActive, 'text-danger': hasError }"
  >
</template>

<script setup>
import { ref, watch } from "vue";

const message21 = ref("");
const isActive = ref(true);
const hasError = ref(false);

watch(message21, (newValue) => {
  if ( newValue.length <= 5 ) {
    isActive.value = true;
    hasError.value = false;
  } else {
    isActive.value = false;
    hasError.value = true;
  };
});
<\/script>

<style scoped>
  .active {
    border: gray dashed 1px;
    color: blue;
  }
  .text-danger {
    border: red solid 1px;
    color: red;
  }
</style>`}},{detailTitle:"直接操作 <code>style</code> 屬性",detailSubtitle:null,detailContent:null,detailComponent:t(()=>l(()=>import("./VuejsVBindStyleDemo-BRBciaHH.js"),__vite__mapDeps([29,1,2]))),detailCode:{htmlCode:`<div id="app22">
  <input type="text" v-model.trim="message22" placeholder="請勿超過10個字" :style="msgStyle">
</div>

<script>
  const vm22 = Vue.createApp({
    data() {
      return {
        message22: ""
      }
    },
    computed: {
      msgStyle() {
        return {
          'border': this.message22.length <= 10 ? "" : "red solid 1px",
          'color': this.message22.length <= 10 ? "" : "red"
        };
      }
    }
  }).mount("#app22");
<\/script>`,jsCode:null,vueSFCCode:`<template>
  <input
    type="text"
    v-model.trim="message22"
    placeholder="請勿超過10個字"
    :style="msgStyle"
  >
</template>

<script setup>
import { ref, computed } from "vue";

const message22 = ref("");
const msgStyle = computed(() => {
  return {
    "border": message22.value.length <= 10 ? "" : "red solid 1px",
    "color": message22.value.length <= 10 ? "" : "red"
  };
});
<\/script>

<style scoped></style>`}}]}]},{id:"vuejsEventHandlingNote",title:"事件處理 v-on",description:"包含 <code>v-on</code>、<code>v-on</code> 修飾子、鍵盤修飾子、滑鼠修飾子、<code>v-model</code> 的語法糖還原。",descriptionComponent:null,descriptionComponentStyle:null,lists:[{listTitle:"<code>v-on</code> 事件綁定",listSubtitle:"Vue.js 中，與事件有關的指令，只有一個 <code>v-on</code>。",listComponent:null,listCode:{htmlCode:null,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:'<code>v-on:[事件名稱]="運算式"</code>',detailSubtitle:'註：<code>v-on:[事件名稱]="運算式"</code> = <code>@[事件名稱]="運算式"</code>',detailContent:null,detailComponent:t(()=>l(()=>import("./VuejsVOnDemo-DNiKqxfy.js"),__vite__mapDeps([30,1,2,31]))),detailCode:{htmlCode:`<!-- 以下兩種寫法結果相同 -->
<div id="app23">
  <p>Count: {{ count }}</p>
  <button v-on:click="count++">Plus</button>
</div>
<div id="app24">
  <p>Count: {{ count }}</p>
  <button v-on:click="plus">Plus</button>
</div>

<script>
  const vm23 = Vue.createApp({
    data() {
      return {
        count: 0
      }
    }
  }).mount("#app23");

  const vm24 = Vue.createApp({
    data() {
      return {
        count: 0
      }
    },
    methods: {
      plus() {
        this.count++;
      }
    }
  }).mount("#app24");
<\/script>`,jsCode:null,vueSFCCode:`<template>
  <!-- 以下兩種寫法結果相同 -->
  <!-- 寫法1：直接在模板中寫表達式 -->
  <p>Count: {{ count1 }}</p>
  <button v-on:click="count1++">Plus</button>
  
  <!-- 寫法2：用methods -->
  <p>Count: {{ count2 }}</p>
  <button v-on:click="plus">Plus</button>
</template>

<script setup>
import { ref } from "vue";

// 寫法1：直接操作變數
const count1 = ref(0);

// 寫法2：用methods（在<script setup其實就是一個函式）
const count2 = ref(0);
function plus() {
  count2.value++;
};
<\/script>

<style scoped>
p {
  margin: 0;
}

button {
  margin-bottom: 16px;
}
</style>`}}]},{listTitle:"<code>v-on</code> 與修飾子",listSubtitle:null,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:"<code>.stop</code>",detailSubtitle:"用來阻擋事件冒泡，DOM 的 <code>@click</code> 加上 <code>.stop</code>，click 事件就不會像外層傳遞。",detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}},{detailTitle:"<code>.prevent</code>",detailSubtitle:"用來阻擋元素的預設行為。",detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}},{detailTitle:"<code>.capture</code>",detailSubtitle:"指定事件以捕獲（capturing）的形式來觸發。",detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}},{detailTitle:"<code>.self</code>",detailSubtitle:"<code>.self</code> 的作用是只會觸發元素自己的事件行為，由子層元素傳來的事件則不會觸發。例如燈箱操作，希望點擊燈箱外遮罩可自動關閉，但點擊元素時不想有關閉效果。",detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}},{detailTitle:"<code>.once</code>",detailSubtitle:"讓指定的事件只觸發一次，執行後就解除事件監聽。",detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}},{detailTitle:"<code>.passive</code>",detailSubtitle:"<code>.passive</code> 等同於 <code>addEventListener</code> 的 <code>passive</code> 屬性，用途是告訴瀏覽器這個事件處理器會不會呼叫 <code>event.preventDefault</code> 來停止瀏覽器的原生行為。",detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]},{listTitle:"鍵盤修飾子",listSubtitle:`<ul>
  <li><code>.enter</code></li>
  <li><code>.tab</code></li>
  <li><code>.delete</code>：包含 <kbd>Delete</kbd> 與 <kbd>Backspace</kbd> 鍵。</li>
  <li><code>.esc</code></li>
  <li><code>.space</code></li>
  <li><code>.up</code></li>
  <li><code>.down</code></li>
  <li><code>.left</code></li>
  <li><code>.right</code></li>
  <li><code>.ctrl</code></li>
  <li><code>.alt</code></li>
  <li><code>.shift</code></li>
  <li><code>.meta</code>：在 window 系統對應的是 <kbd>⊞ Win</kbd> 鍵，在 mac 系統對應的是 <kbd>command</kbd> 鍵。</li>
</ul>`,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:"<code>.exact</code> 精確判斷",detailSubtitle:"用來精確判斷鍵盤的修飾子，以此例來說，當沒有加上 <code>.exact</code> 時，按 <kbd>Ctrl</kbd> + <kbd>Enter</kbd> 鍵時，亦會執行 <code>alert()</code>；但當加上 <code>.exact</code> 後，就只有在「只按下 <kbd>Enter</kbd> 鍵」時，才會執行 <code>alert()</code>。",detailContent:null,detailComponent:t(()=>l(()=>import("./VuejsVOnKeydownEnterDemo-BuuxqdJa.js"),__vite__mapDeps([32,1,2,33]))),detailCode:{htmlCode:`<div id="app25">
  <div>
    沒有加 <code>.exact</code>：
    <input type="text" placeholder="輸入任意文字後按下Enter鍵" v-model.trim="keyboardModifiers1" @keydown.enter="addToMessages1">
  </div>
  <div>
    有加 <code>.exact</code>：
    <input type="text" placeholder="輸入任意文字後按下Enter鍵" v-model.trim="keyboardModifiers2" @keydown.enter.exact="addToMessages2">
  </div>
</div>

<script>
  const vm25 = Vue.createApp({
    data() {
      return {
        keyboardModifiers1: "",
        keyboardModifiers2: ""
      };
    },
    methods: {
      addToMessages1() {
        alert("hello world\\n" + this.keyboardModifiers1 );
      },
      addToMessages2() {
        alert("hello world\\n" + this.keyboardModifiers2 );
      }
    }
  }).mount("#app25");
<\/script>`,jsCode:null,vueSFCCode:`<template>
  <div>
    沒有加 <code>.exact</code>：
    <input
      type="text"
      placeholder="輸入任意文字後按下Enter鍵"
      v-model.trim="keyboardModifiers1"
      @keydown.enter="addToMessages1"
    >
  </div>
  <div>
    有加 <code>.exact</code>：
    <input
      type="text"
      placeholder="輸入任意文字後按下Enter鍵"
      v-model.trim="keyboardModifiers2"
      @keydown.enter.exact="addToMessages2"
    >
  </div>
</template>

<script setup>
import { ref } from "vue";

const keyboardModifiers1 = ref("");
const keyboardModifiers2 = ref("");
function addToMessages1() {
  alert("hello world
" + keyboardModifiers1.value );
};
function addToMessages2() {
  alert("hello world
" + keyboardModifiers2.value );
};
<\/script>

<style scoped>
h5 {
  margin-top: 0;
}

input {
  width: 180px;
  padding: 3px;
}
</style>`}}]},{listTitle:"滑鼠修飾子",listSubtitle:`<ul>
  <li><code>.left</code></li>
  <li><code>.right</code></li>
  <li><code>.middle</code></li>
</ul>`,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]},{listTitle:"拆解 <code>v-model</code> 的黑魔法",listSubtitle:"<code>v-model</code> 本質上是一種語法糖，還原後如下：",listComponent:null,listCode:{htmlCode:null,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:'<code>&lt;input type="text"&gt;</code> 與 <code>&lt;input type="textarea"&gt;</code>',detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:`<!-- 以下兩行幾乎等價（但不完全相同） -->
<input v-model="msg">
<input :value="msg" @input="msg = $event.target.value">


<!-- 若需使用修飾符（如".trim"），使用v-model較方便 -->
<input v-model.trim="msg">
<input :value="msg" @input="msg = $event.target.value.trim()">`,jsCode:null,vueSFCCode:null}},{detailTitle:'<code>&lt;input type="radio"&gt;</code>、<code>&lt;input type="checkbox"&gt;</code> 與 <code>&lt;select&gt;</code>',detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]}]},{id:"vuejsConditionRenderingNote",title:"條件判斷 v-show/v-if",description:"包含 <code>v-show</code> 與 <code>v-if</code>。",descriptionComponent:null,descriptionComponentStyle:null,lists:[{listTitle:"<code>v-show</code>",listSubtitle:"作用十分單純，值為 <u>truthy</u> 時顯示，值為 <u>falsy</u> 則隱藏（透過 CSS 的 <code>display: none</code> 來將元素隱藏）。",listComponent:t(()=>l(()=>import("./VuejsVShowDemo-9DMgHNXA.js"),__vite__mapDeps([34,1,2,35]))),listCode:{htmlCode:`<div id="app26">
  <button @click="toggleVisibility">切換顯示/隱藏</button>
  <code>isVisible</code> 現在狀態：<code>{{ isVisible }}</code>
  <p v-show="isVisible">這段文字會根據 <code>isVisible</code> 變數的值顯示或隱藏。</p>
</div>

<script>
  const vm26 = Vue.createApp({
    data() {
      return {
        isVisible: true  // 控制顯示/隱藏
      }
    },
    methods: {
      toggleVisibility() {
        this.isVisible = !this.isVisible;  // 切換 isVisible 的值
      }
    }
  }).mount("#app26");
<\/script>`,jsCode:null,vueSFCCode:`<template>
  <button @click="toggleVisibility">切換顯示/隱藏</button>
  <code>isVisible</code> 現在狀態：<code>{{ isVisible }}</code>
  <p v-show="isVisible">這段文字會根據 <code>isVisible</code> 變數的值顯示或隱藏。</p>
</template>

<script setup>
import { ref } from "vue";

const isVisible = ref(true);  // 控制顯示/隱藏
function toggleVisibility() {
  isVisible.value = !isVisible.value;  // 切換 isVisible 的值
};
<\/script>

<style scoped>
button {
  margin-right: 32px;
}
</style>`},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]},{listTitle:"<code>v-if</code>",listSubtitle:`<code>v-if</code> 可與 <code>v-else-if</code>、<code>v-else</code> 做條件搭配。
<ul style="margin-top: 16px;">
  <li><code>key</code>：加上 <code>key</code> 屬性，讓 Vue.js 根據 <code>key</code> 屬性的內容是否相同，決定是否重新渲染元素。雖可能會降低網頁渲染的效率，但可避免因重複利用已經存在的 DOM，導致畫面殘留。</li>
</ul>`,listComponent:t(()=>l(()=>import("./VuejsVIfDemo-DMtvXAqt.js"),__vite__mapDeps([36,1,2]))),listCode:{htmlCode:`<div id="app27">
  <button @click="changeVisibility">切換段落</button>
  <template v-if="visibility === 'A'">
    <h4>Title A</h4>
    <p>Paragraph A - 1</p>
    <p>Paragraph A - 2</p>
  </template>
  <template v-else>
    <h4>Title B</h4>
    <p>Paragraph B - 1</p>
    <p>Paragraph B - 2</p>
  </template>
</div>

<script>
  const vm27 = Vue.createApp({
    data() {
      return {
        visibility: "A"
      }
    },
    methods: {
      changeVisibility() {
        if(this.visibility == "A") {
          this.visibility = "B";
        } else {
          this.visibility = "A";
        }
      }
    }
  }).mount("#app27");
<\/script>`,jsCode:null,vueSFCCode:`<template>
  <button @click="changeVisibility">切換段落</button>
  <template v-if="visibility === 'A'">
    <h4>Title A</h4>
    <p>Paragraph A - 1</p>
    <p>Paragraph A - 2</p>
  </template>
  <template v-else>
    <h4>Title B</h4>
    <p>Paragraph B - 1</p>
    <p>Paragraph B - 2</p>
  </template>
</template>

<script setup>
import { ref } from "vue";

const visibility = ref("A");
function changeVisibility() {
  if(visibility.value == "A") {
    visibility.value = "B";
  } else {
    visibility.value = "A";
  };
};
<\/script>

<style scoped></style>`},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]}]},{id:"vuejsListRenderingNote",title:"列表渲染 v-for",description:"包含 <code></code>",descriptionComponent:null,descriptionComponentStyle:null,lists:[{listTitle:"<code>v-for</code> + 陣列",listSubtitle:null,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:"<code>item in Array</code> / <code>(item, index) in Array</code>",detailSubtitle:"這裡的 <code>item</code> 可任意命名，只要是合法的 JavaScript 變數名稱即可。<code>index</code> 為索引值，從 0 開始。",detailContent:null,detailComponent:t(()=>l(()=>import("./VuejsVForArrayDemo-CZ5QzNvg.js"),__vite__mapDeps([37,1,2,38]))),detailCode:{htmlCode:`<div id="app28">
  <ul>
    <h4>item in arr:</h4>
    <li><u>item</u></li>
    <li v-for="item in arr">{{ item }}</li>
    <br>
    <h4>(item, index) in arr:</h4>
    <li><u>index</u> -&gt; <u>item</u></li>
    <li v-for="(item, index) in arr">{{ index }} -&gt; {{ item }}</li>
  </ul>
</div>

<script>
  const vm28 = Vue.createApp({
    data() {
      return {
        arr: ['008', 'js', 'is', 'awesome']
      }
    }
  }).mount("#app28")
<\/script>`,jsCode:null,vueSFCCode:`<template>
  <ul>
    <h4>item in arr:</h4>
    <li><u>item</u></li>
    <li v-for="item in arr">{{ item }}</li>
    <br>
    <h4>(item, index) in arr:</h4>
    <li><u>index</u> -&gt; <u>item</u></li>
    <li v-for="(item, index) in arr">{{ index }} -&gt; {{ item }}</li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

const arr = ref(['008', 'js', 'is', 'awesome']);
<\/script>

<style scoped>
h4 {
  margin-top: 0 !important;
}
</style>`}}]},{listTitle:"<code>v-for</code> + 物件",listSubtitle:null,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:"<code>value in Object</code> / <code>(value, key) in Object</code> / <code>(value, key, index) in Object</code>",detailSubtitle:"這裡的 <code>value</code> 可任意命名，只要是合法的 JavaScript 變數名稱即可。<code>index</code> 為索引值，從 0 開始。",detailContent:null,detailComponent:t(()=>l(()=>import("./VuejsVForObjectDemo-CMQCLmJ3.js"),__vite__mapDeps([39,1,2]))),detailCode:{htmlCode:`<div id="app29">
  <ul>
    <h4>item</h4>
    <li v-for="value in fishBurger">{{ value }}</li>
    <h4>key: value</h4>
    <li v-for="(value, key) in fishBurger">{{ key }}: {{ value }}</li>
    <h4>index -&gt; key: value</h4>
    <li v-for="(value, key, index) in fishBurger">{{ index }} -&gt; {{ key }}: {{ value }}</li>
  </ul>
</div>

<script>
  const vm29 = Vue.createApp({
    data() {
      return {
        fishBurger: {
          Calories: "508 Kcal",
          Protein: "20.5 g",
          Fat: "28.7 g",
          Carbonhydrates: "39.6 g",
          Sodium: "608.0 mg"
        }
      }
    }
  }).mount("#app29");
<\/script>`,jsCode:null,vueSFCCode:`<template>
  <ul>
    <h4>value in fishBurger</h4>
    <li><u>value</u></li>
    <li v-for="value in fishBurger">{{ value }}</li>
    <h4>(value, key) in fishBurger</h4>
    <li><u>key</u>: <u>value</u></li>
    <li v-for="(value, key) in fishBurger">{{ key }}: {{ value }}</li>
    <h4>(value, key, index) in fishBurger</h4>
    <li><u>index</u> -&gt; <u>key</u>: <u>value</u></li>
    <li v-for="(value, key, index) in fishBurger">{{ index }} -&gt; {{ key }}: {{ value }}</li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

const fishBurger = ref({
  Calories: "508 Kcal",
  Protein: "20.5 g",
  Fat: "28.7 g",
  Carbonhydrates: "39.6 g",
  Sodium: "608.0 mg"
});
<\/script>

<script setup><\/script>`}}]},{listTitle:"<code>v-for</code> + 數字範圍",listSubtitle:`<p style="color: rgba(33, 37, 41, 0.75); font-size: 12px; font-style: italic; margin-bottom: 8px;">
- 除了陣列（Array）與物件（Object）外，<code>v-for</code> 還可以接受整數作為渲染的條件，數字越大重複的次數越多。但需注意，此處的計數是從 1 開始計算。
</p>`,listComponent:t(()=>l(()=>import("./VuejsVForNumberRangeDemo-Ds2xRo6d.js"),__vite__mapDeps([40,1,2,41]))),listCode:{htmlCode:`<ul id="app30" class="pagination">
  <li class="page-item"><a class="page-link">&lt;</a></li>
  <!-- 會從 1 ~ 10 出現十次<li> -->
  <li class="page-item" v-for="page in 10">
    <a class="page-link" href="#">{{ page }}</a>
  </li>
  <li class="page-item"><a class="page-link">&gt;</a></li>
</ul>

<script>
  const vm30 = Vue.createApp().mount("#app30");
<\/script>`,jsCode:null,vueSFCCode:`<template>
  <ul class="pagination">
    <li class="page-item"><a class="page-link">&lt;</a></li>
    <!-- 會從 1 ~ 10 出現十次<li> -->
    <li class="page-item" v-for="page in 10">
      <a class="page-link" href="#">{{ page }}</a>
    </li>
    <li class="page-item"><a class="page-link">&gt;</a></li>
  </ul>
</template>

<script setup><\/script>

<style scoped>
ul {
  margin-bottom: 16px;
}

.pagination {
  display: flex;
  list-style: none;
}

.page-item {
  margin: 0;
}

.page-link {
  position: relative;
  display: block;
  padding: 0.375rem 0.75rem;
  color: #0d6efd;
  text-decoration: none;
  background-color: #ffffff;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  transition: background-color 0.15s, color 0.15s;
}

.page-link:hover {
  color: #0a58ca;
  background-color: #e9ecef;
  border-color: #dee2e6;
}

.page-item.disabled .page-link {
  color: #6c757d;
  pointer-events: none;
  background-color: #fff;
  border-color: #dee2e6;
}

.page-item.active .page-link {
  z-index: 1;
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
</style>`},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]},{listTitle:"<code>v-for</code> + <code>&lt;template&gt;</code>",listSubtitle:null,listComponent:t(()=>l(()=>import("./VuejsVForTemplateDemo-CJIHm4gY.js"),__vite__mapDeps([42,1,2,43]))),listCode:{htmlCode:`<!-- 加 style="display: inline;" 是因為 class="dropdown-menu" 預設 display: none -->
<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">個人連結</button>
  <ul id="app31" class="dropdown-menu">
    <template v-for="i in links">
      <li><div class="dropdown-divider"></div></li>
      <li><a class="dropdown-item" :href="i.link" target="_blank">{{ i.name }}</a></li>
    </template>
  </ul>
</div>

<script>
  const vm31 = Vue.createApp({
    data() {
      return {
        links: [
          { name: "Instagram", link: "https://www.instagram.com/ting.d_927"},
          { name: "Facebook", link: "https://www.facebook.com/guanting.dong"},
          { name: "Line", link: "https://line.me/ti/p/fOtvr_KEbv"},
        ]
      }
    }
  }).mount("#app31");
<\/script>`,jsCode:null,vueSFCCode:`<template>
  <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" @click="toggleDropdown">個人連結</button>
    <ul class="dropdown-menu" :class="{ show: isOpen }">
      <template v-for="(item, idx) in links" :key="idx">
        <li><div class="dropdown-divider"></div></li>
        <li><a class="dropdown-item" :href="item.link" target="_blank">{{ item.name }}</a></li>
      </template>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const links = ref([
  { name: "Instagram", link: "https://www.instagram.com/ting.d_927"},
  { name: "Facebook", link: "https://www.facebook.com/guanting.dong"},
  { name: "Line", link: "https://line.me/ti/p/fOtvr_KEbv"},
]);

// 取代Bootstrap樣式的code
const isOpen = ref(false);
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};
<\/script>

<style scoped>
/* 樣式模擬Bootstrap樣式，在此省略，若有需要可進入原元件查看 */
/* 元件位置：components/WebNoteView/VuejsNoteView/VuejsListRenderingNote/VuejsVForTemplateDemo.vue */
</style>`},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]},{listTitle:"<code>v-for</code> 列表的排序與過濾",listSubtitle:null,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]},{listTitle:"<code>v-for</code> 可以使用 <code>index</code> 當作 <code>key</code> 嗎？",listSubtitle:null,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]}]},{id:"vuejsLifecycleHooksNote",title:"Vue 元件的生命週期與更新機制",description:null,descriptionComponent:null,descriptionComponentStyle:null,lists:[{listTitle:null,listSubtitle:null,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]}]},{id:"vuejsComponentNote",title:"元件系統的特性",description:null,descriptionComponent:null,descriptionComponentStyle:null,lists:[{listTitle:null,listSubtitle:null,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]}]},{id:"vuejsPropsNote",title:"Props",description:null,descriptionComponent:null,descriptionComponentStyle:null,lists:[{listTitle:null,listSubtitle:null,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]}]},{id:"vuejsVBindIsNote",title:"動態元件的管理",description:null,descriptionComponent:null,descriptionComponentStyle:null,lists:[{listTitle:null,listSubtitle:null,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]}]},{id:"vuejsSlotsNote",title:"插槽 <slot>",description:null,descriptionComponent:null,descriptionComponentStyle:null,lists:[{listTitle:null,listSubtitle:null,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]}]},{id:"vuejsTransitionNote",title:"漸變與動畫 <transition>",description:null,descriptionComponent:null,descriptionComponentStyle:null,lists:[{listTitle:null,listSubtitle:null,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]}]},{id:"vuejs??????Note",title:"？？？？？",description:null,descriptionComponent:null,descriptionComponentStyle:null,lists:[{listTitle:null,listSubtitle:null,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]}]}],I={class:"vuejs-note-view"},P={class:"layout"},N={class:"sidebar"},O=["onClick"],R={class:"content-title"},B=["innerHTML"],H={key:2,class:"content-body"},z=["innerHTML"],q=["innerHTML"],J={key:1,class:"lists-demo"},W={key:2,class:"code"},K={key:0},$={class:"html"},G={key:1},X={class:"javascript"},Q={class:"html"},U={key:3},Y=["innerHTML"],Z=["innerHTML"],ee=["innerHTML"],te={key:2,class:"details-demo"},le={key:3,class:"code"},ie={key:0},oe={class:"html"},de={key:1},ne={class:"javascript"},se={class:"html"},ue={__name:"VuejsNoteView",setup(ae){const c=L,v=_(c[6].id),u=k(()=>c.find(m=>m.id===v.value)||c[0]);C.registerLanguage("html",E),C.registerLanguage("javascript",w),j(()=>{y(()=>C.highlightAll())});function f(){y(()=>{document.querySelectorAll("pre code").forEach(m=>{delete m.dataset.highlighted}),C.highlightAll()})}return(m,p)=>(e(),i("div",I,[s("div",P,[s("nav",N,[s("ul",null,[(e(!0),i(r,null,h(T(c),o=>(e(),i("li",{key:o.id,class:M({active:o.id===v.value}),onClick:d=>v.value=o.id},a(o.title),11,O))),128))])]),x(A,{name:"fade",mode:"out-in",onAfterEnter:f},{default:F(()=>[u.value?(e(),i("section",{class:"content",key:u.value.id},[s("h3",R,a(u.value.title),1),p[2]||(p[2]=s("hr",null,null,-1)),u.value.description?(e(),i("div",{key:0,class:"description",innerHTML:u.value.description},null,8,B)):n("",!0),u.value.descriptionComponent?(e(),i("div",{key:1,style:D(u.value.descriptionComponentStyle),class:"description-component"},[(e(),b(g(u.value.descriptionComponent)))],4)):n("",!0),u.value.lists.length&&u.value.lists[0].listTitle?(e(),i("ul",H,[(e(!0),i(r,null,h(u.value.lists,o=>(e(),i("li",{key:o.listTitle,class:"list"},[s("h4",{class:"list-title",innerHTML:o.listTitle},null,8,z),o.listSubtitle?(e(),i("div",{key:0,class:"list-subtitle",innerHTML:o.listSubtitle},null,8,q)):n("",!0),o.listComponent?(e(),i("div",J,[(e(),b(g(o.listComponent)))])):n("",!0),o.listCode.htmlCode||o.listCode.jsCode||o.listCode.vueCode?(e(),i("div",W,[o.listCode.htmlCode?(e(),i("pre",K,[s("code",$,a(o.listCode.htmlCode),1)])):n("",!0),o.listCode.jsCode?(e(),i("pre",G,[s("code",X,a(o.listCode.jsCode),1)])):n("",!0),o.listCode.vueSFCCode?(e(),i(r,{key:2},[p[0]||(p[0]=S(" Vue 3 SFC（使用Composition API）這樣寫： ")),s("pre",null,[s("code",Q,a(o.listCode.vueSFCCode),1)])],64)):n("",!0)])):n("",!0),o.listDetails.length&&o.listDetails[0].detailTitle?(e(),i("ol",U,[(e(!0),i(r,null,h(o.listDetails,d=>(e(),i("li",{key:d.detailTitle,class:"detail"},[s("h5",{class:"detail-title",innerHTML:d.detailTitle},null,8,Y),d.detailSubtitle?(e(),i("div",{key:0,class:"detail-subtitle",innerHTML:d.detailSubtitle},null,8,Z)):n("",!0),d.detailContent?(e(),i("div",{key:1,class:"detail-content",innerHTML:d.detailContent},null,8,ee)):n("",!0),d.detailComponent?(e(),i("div",te,[(e(),b(g(d.detailComponent)))])):n("",!0),d.detailCode.htmlCode||d.detailCode.jsCode||d.detailCode.vueCode?(e(),i("div",le,[d.detailCode.htmlCode?(e(),i("pre",ie,[s("code",oe,a(d.detailCode.htmlCode),1)])):n("",!0),d.detailCode.jsCode?(e(),i("pre",de,[s("code",ne,a(d.detailCode.jsCode),1)])):n("",!0),d.detailCode.vueSFCCode?(e(),i(r,{key:2},[p[1]||(p[1]=S(" Vue 3 SFC（使用Composition API）這樣寫： ")),s("pre",null,[s("code",se,a(d.detailCode.vueSFCCode),1)])],64)):n("",!0)])):n("",!0)]))),128))])):n("",!0)]))),128))])):n("",!0)])):n("",!0)]),_:1})])]))}},ce=V(ue,[["__scopeId","data-v-6ca59c8b"]]);export{ce as default};
