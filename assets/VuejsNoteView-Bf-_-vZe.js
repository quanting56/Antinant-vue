const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/VuejsInstanceExplanation-DNsGHe0p.js","assets/index-DlM_QTRZ.js","assets/index-B86luwFC.css","assets/VuejsInstanceExplanation-RhpWG5WB.css","assets/VuejsTemplateDemo-CoPek9Ik.js","assets/VuejsTemplateDemo-ogo8ED3N.css","assets/VuejsMethodsDemo-BnTvq3Lp.js","assets/VuejsMethodsDemo-DC2R1YNO.css","assets/VuejsComputedDemo-CrdzPJJf.js","assets/VuejsVModelInput-ChBCfask.js","assets/VuejsVModelInput-DoEmIrEv.css","assets/VuejsVModelTextareaDemo-BLCiacFh.js","assets/VuejsVModelTextareaDemo-DFU87P_O.css","assets/VuejsVModelRadioDemo-B21ngEYh.js","assets/VuejsVModelCheckboxMultipleDemo-WA9oA0IP.js","assets/VuejsVModelCheckboxMultipleDemo-kZnEW0Bt.css","assets/VuejsVModelCheckboxSingleDemo-tRw1OU3s.js","assets/VuejsVModelSelectDemo-C68K4nXh.js"])))=>i.map(i=>d[i]);
import{m as s,q as u,_ as y,r as _,k,o as T,p as S,c as t,b as d,g as x,F as c,d as h,u as f,w as M,T as F,f as e,j as D,t as a,h as i,n as L,s as b,v as g,i as V}from"./index-DlM_QTRZ.js";import{H as m,x as N,j as A}from"./vs2015-CSxvYctc.js";const I=[{id:"vuejsStartNote",title:"開始使用 Vue.js",description:"<p>Vue.js 可以透過多種方式使用，依據不同的需求，選擇最適合的方法。（From ChatGPT）</p>",descriptionComponent:null,descriptionComponentStyle:null,lists:[{listTitle:"使用 CDN",listSubtitle:`<ol>
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
</table>`,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]}]},{id:"vuejsInstanceNote",title:"Vue 實體",description:null,descriptionComponent:s(()=>u(()=>import("./VuejsInstanceExplanation-DNsGHe0p.js"),__vite__mapDeps([0,1,2,3]))),descriptionComponentStyle:null,lists:[{listTitle:"template 模板屬性",listSubtitle:null,listComponent:s(()=>u(()=>import("./VuejsTemplateDemo-CoPek9Ik.js"),__vite__mapDeps([4,1,2,5]))),listCode:{htmlCode:`<div id="VuejsTemplate">
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
</style>`},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]}]},{id:"vuejsDataProcessingNote",title:"資料加工與邏輯整合",description:"包含 <code>methods</code> 與 <code>computed</code>。",descriptionComponent:null,descriptionComponentStyle:null,lists:[{listTitle:"methods 方法",listSubtitle:null,listComponent:s(()=>u(()=>import("./VuejsMethodsDemo-BnTvq3Lp.js"),__vite__mapDeps([6,1,2,7]))),listCode:{htmlCode:`<div id="VuejsMethods">
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
</style>`},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]},{listTitle:"computed 計算屬性",listSubtitle:'<div style="color: rgba(33, 37, 41, 0.75); font-size: 12px; font-style: italic; margin-bottom: 8px;">- 在這個例子，跟上面只有差在模板裡的 subtotal 有沒有加 <code>()</code></div>',listComponent:s(()=>u(()=>import("./VuejsComputedDemo-CrdzPJJf.js"),__vite__mapDeps([8,1,2]))),listCode:{htmlCode:`<div id="VuejsComputed">
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
</ul>`,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]}]},{id:"vuejsDirectiveNote",title:"Vue 指令",description:"包含 <code>v-bind</code>、<code>v-model</code> 與其修飾子、<code>v-text</code>、<code>v-html</code>、<code>v-once</code>、<code>v-pre</code>。",descriptionComponent:null,descriptionComponentStyle:null,lists:[{listTitle:"屬性綁定：v-bind",listSubtitle:'<div style="color: rgba(33, 37, 41, 0.75); font-size: 12px; font-style: italic; margin-bottom: 8px;">- <code>v-bind:id="customId"</code> 也可以寫成 <code>:id="customId"</code></div>',listComponent:null,listCode:{htmlCode:`<div id="vBindId">
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
<\/script>`,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]},{listTitle:"表單綁定：v-model",listSubtitle:null,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:"input 文字框",detailSubtitle:null,detailContent:null,detailComponent:s(()=>u(()=>import("./VuejsVModelInput-ChBCfask.js"),__vite__mapDeps([9,1,2,10]))),detailCode:{htmlCode:`<div id="VuejsVModelInput">
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
</style>`}},{detailTitle:"textarea 文字方塊",detailSubtitle:null,detailContent:null,detailComponent:s(()=>u(()=>import("./VuejsVModelTextareaDemo-BLCiacFh.js"),__vite__mapDeps([11,1,2,12]))),detailCode:{htmlCode:`<div id="VuejsVModelTextarea">
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
</style>`}},{detailTitle:"radio 選擇框",detailSubtitle:null,detailContent:null,detailComponent:s(()=>u(()=>import("./VuejsVModelRadioDemo-B21ngEYh.js"),__vite__mapDeps([13,1,2]))),detailCode:{htmlCode:`<div id="VuejsVModelRadio">
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

<style scoped></style>`}},{detailTitle:"checkbox 選擇框（多個選項）",detailSubtitle:null,detailContent:null,detailComponent:s(()=>u(()=>import("./VuejsVModelCheckboxMultipleDemo-WA9oA0IP.js"),__vite__mapDeps([14,1,2,15]))),detailCode:{htmlCode:`<div id="VuejsVModelCheckbox">
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
</style>`}},{detailTitle:"checkbox 選擇框（單個選項）",detailSubtitle:null,detailContent:null,detailComponent:s(()=>u(()=>import("./VuejsVModelCheckboxSingleDemo-tRw1OU3s.js"),__vite__mapDeps([16,1,2]))),detailCode:{htmlCode:`<div id="VuejsVModelCheckboxSingle">
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

<style scoped></style>`}},{detailTitle:"select 下拉式選單",detailSubtitle:null,detailContent:null,detailComponent:s(()=>u(()=>import("./VuejsVModelSelectDemo-C68K4nXh.js"),__vite__mapDeps([17,1,2]))),detailCode:{htmlCode:`<div id="VuejsVModelSelect">
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

<style scoped></style>`}}]},{listTitle:"v-model 與修飾子",listSubtitle:null,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:"<code>v-model.lazy</code>",detailSubtitle:"在 <code>v-model</code> 後面加上 <code>.lazy</code>，會在使用者離開輸入框焦點時，才會更新 data 內容。",detailContent:null,detailComponent:null,detailCode:{htmlCode:`<div id="VuejsVModelLazy">
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
<\/script>`,jsCode:null,vueSFCCode:null}},{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}},{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]},{listTitle:null,listSubtitle:null,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]}]},{id:"vuejsEventNote",title:"Vue 事件處理",description:null,descriptionComponent:null,descriptionComponentStyle:null,lists:[{listTitle:null,listSubtitle:null,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]}]},{id:"vuejsConditionListNote",title:"Vue 條件判斷與列表渲染",description:null,descriptionComponent:null,descriptionComponentStyle:null,lists:[{listTitle:null,listSubtitle:null,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]}]},{id:"vuejsLifecycleNote",title:"Vue 元件的生命週期與更新機制",description:null,descriptionComponent:null,descriptionComponentStyle:null,lists:[{listTitle:null,listSubtitle:null,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]}]},{id:"vuejs??????Note",title:"？？？？？",description:null,descriptionComponent:null,descriptionComponentStyle:null,lists:[{listTitle:null,listSubtitle:null,listComponent:null,listCode:{htmlCode:null,jsCode:null,vueSFCCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,vueSFCCode:null}}]}]}],E={class:"vuejs-note-view"},P={class:"layout"},H={class:"sidebar"},q=["onClick"],O={class:"content-title"},R=["innerHTML"],w={key:2,class:"content-body"},z=["innerHTML"],J=["innerHTML"],B={key:1,class:"lists-demo"},W={key:2,class:"code"},G={key:0},X={class:"html"},$={key:1},K={class:"javascript"},Q={class:"html"},U={key:3},Y=["innerHTML"],Z=["innerHTML"],ee=["innerHTML"],te={key:2,class:"details-demo"},le={key:3,class:"code"},oe={key:0},ie={class:"html"},de={key:1},ne={class:"javascript"},se={class:"html"},ue={__name:"VuejsNoteView",setup(ae){const r=I,v=_(r[3].id),n=k(()=>r.find(C=>C.id===v.value)||r[0]);m.registerLanguage("html",N),m.registerLanguage("javascript",A),T(()=>{S(()=>m.highlightAll())});function j(){S(()=>{document.querySelectorAll("pre code").forEach(C=>{delete C.dataset.highlighted}),m.highlightAll()})}return(C,p)=>(e(),t("div",E,[d("div",P,[d("nav",H,[d("ul",null,[(e(!0),t(c,null,h(f(r),l=>(e(),t("li",{key:l.id,class:D({active:l.id===v.value}),onClick:o=>v.value=l.id},a(l.title),11,q))),128))])]),x(F,{name:"fade",mode:"out-in",onAfterEnter:j},{default:M(()=>[n.value?(e(),t("section",{class:"content",key:n.value.id},[d("h3",O,a(n.value.title),1),p[2]||(p[2]=d("hr",null,null,-1)),n.value.description?(e(),t("div",{key:0,class:"description",innerHTML:n.value.description},null,8,R)):i("",!0),n.value.descriptionComponent?(e(),t("div",{key:1,style:L(n.value.descriptionComponentStyle),class:"description-component"},[(e(),b(g(n.value.descriptionComponent)))],4)):i("",!0),n.value.lists.length&&n.value.lists[0].listTitle?(e(),t("ul",w,[(e(!0),t(c,null,h(n.value.lists,l=>(e(),t("li",{key:l.listTitle,class:"list"},[d("h4",{class:"list-title",innerHTML:l.listTitle},null,8,z),l.listSubtitle?(e(),t("div",{key:0,class:"list-subtitle",innerHTML:l.listSubtitle},null,8,J)):i("",!0),l.listComponent?(e(),t("div",B,[(e(),b(g(l.listComponent)))])):i("",!0),l.listCode.htmlCode||l.listCode.jsCode||l.listCode.vueCode?(e(),t("div",W,[l.listCode.htmlCode?(e(),t("pre",G,[d("code",X,a(l.listCode.htmlCode),1)])):i("",!0),l.listCode.jsCode?(e(),t("pre",$,[d("code",K,a(l.listCode.jsCode),1)])):i("",!0),l.listCode.vueSFCCode?(e(),t(c,{key:2},[p[0]||(p[0]=V(" Vue 3 SFC（使用Composition API）這樣寫： ")),d("pre",null,[d("code",Q,a(l.listCode.vueSFCCode),1)])],64)):i("",!0)])):i("",!0),l.listDetails.length&&l.listDetails[0].detailTitle?(e(),t("ol",U,[(e(!0),t(c,null,h(l.listDetails,o=>(e(),t("li",{key:o.detailTitle,class:"detail"},[d("h5",{class:"detail-title",innerHTML:o.detailTitle},null,8,Y),o.detailSubtitle?(e(),t("div",{key:0,class:"detail-subtitle",innerHTML:o.detailSubtitle},null,8,Z)):i("",!0),o.detailContent?(e(),t("div",{key:1,class:"detail-content",innerHTML:o.detailContent},null,8,ee)):i("",!0),o.detailComponent?(e(),t("div",te,[(e(),b(g(o.detailComponent)))])):i("",!0),o.detailCode.htmlCode||o.detailCode.jsCode||o.detailCode.vueCode?(e(),t("div",le,[o.detailCode.htmlCode?(e(),t("pre",oe,[d("code",ie,a(o.detailCode.htmlCode),1)])):i("",!0),o.detailCode.jsCode?(e(),t("pre",de,[d("code",ne,a(o.detailCode.jsCode),1)])):i("",!0),o.detailCode.vueSFCCode?(e(),t(c,{key:2},[p[1]||(p[1]=V(" Vue 3 SFC（使用Composition API）這樣寫： ")),d("pre",null,[d("code",se,a(o.detailCode.vueSFCCode),1)])],64)):i("",!0)])):i("",!0)]))),128))])):i("",!0)]))),128))])):i("",!0)])):i("",!0)]),_:1})])]))}},re=y(ue,[["__scopeId","data-v-2ace79d1"]]);export{re as default};
