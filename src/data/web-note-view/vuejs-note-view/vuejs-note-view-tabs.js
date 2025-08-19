import { defineAsyncComponent } from "vue";

export const vuejsNoteViewTabs = [
  {
    id: "vuejsStartNote",
    title: "開始使用 Vue.js",
    description: "<p>Vue.js 可以透過多種方式使用，依據不同的需求，選擇最適合的方法。（From ChatGPT）</p>",
    descriptionComponent: null,
    descriptionComponentStyle: null,
    lists: [
      {
        listTitle: "使用 CDN",
        listSubtitle: 
`<ol>
  <li>直接在 HTML 的 <code>&lt;head&gt;</code> 或 <code>&lt;body&gt;</code> 內引入 Vue.js 的 CDN 連結。</li>
  <li>在 <code>&lt;script&gt;</code> 中寫 Vue 程式碼。</li>
</ol>
<pre style="margin-top: 12px; padding: 16px;"><code class="html">&lt;script src="https://unpkg.com/vue@3/dist/vue.global.js"&gt;&lt;/script&gt;</code></pre>
<h5 style="margin-top: 24px;">- 適用情境 -</h5>
<div>
  ✅ 快速開發與測試，不需要額外安裝。<br />
  ✅ 適合寫小型專案或學習 Vue。<br />
  ❌ 不適合正式上線，因為網速影響載入速度。
</div>`,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailContent: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueSFCCode: null
            }
          }
        ]
      },
      {
        listTitle: "下載 Vue.js 本地檔案",
        listSubtitle: 
`<ol>
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
</div>`,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailContent: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueSFCCode: null
            }
          }
        ]
      },
      {
        listTitle: "使用 npm 安裝 Vue（適合大型專案、前端開發者）",
        listSubtitle: 
`<ol>
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
</div>`,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailContent: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueSFCCode: null
            }
          }
        ]
      },
      {
        listTitle: "使用 Vue CLI 建立完整專案",
        listSubtitle: 
`<p>Vue CLI（Command Line Interface）是 Vue 官方提供的工具，可以快速建立 Vue 應用程式。</p>
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
</div>`,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailContent: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueSFCCode: null
            }
          }
        ]
      },
      {
        listTitle: "使用 Vite 建立 Vue 專案（比 Vue CLI 更快）",
        listSubtitle: 
`<p>Vite 是 Vue 官方推薦的開發工具，比 Vue CLI 載入更快。</p>
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
</div>`,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailContent: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueSFCCode: null
            }
          }
        ]
      },
      {
        listTitle: "透過 CDN 使用 Vue SFC（單文件元件）",
        listSubtitle: 
`<p>Vue 3 支援單文件元件（Single File Component, SFC），即 <code>.vue</code> 檔案，但通常需要 Webpack 或 Vite 來處理。若不想安裝這些工具，可以使用 Vue 官方的 <code>@vue/compiler-sfc</code>。</p>
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

  const app = createApp({` + "\n" +
'    template: `&lt;h1&gt;{{ message }}&lt;/h1&gt;`,' + "\n" +
`    data() {
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
</div>`,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailContent: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueSFCCode: null
            }
          }
        ]
      },
      {
        listTitle: "結論",
        listSubtitle: 
`<table border="1" cellpadding="5" cellspacing="0">
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
</table>`,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailContent: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueSFCCode: null
            }
          }
        ]
      }
    ]
  },
  {
    id: "vuejsInstanceNote",
    title: "Vue 實體",
    description: null,
    descriptionComponent: defineAsyncComponent(() =>
      import("../../../components/WebNoteView/VuejsNoteView/VuejsInstanceNote/VuejsInstanceExplanation.vue")
    ),
    descriptionComponentStyle: null,
    lists: [
      {
        listTitle: "template 模板屬性",
        listSubtitle: null,
        listComponent: defineAsyncComponent(() =>
          import("../../../components/WebNoteView/VuejsNoteView/VuejsInstanceNote/VuejsTemplateDemo.vue")
        ),
        listCode: {
          htmlCode: 
`<div id="VuejsTemplate">
  <p>這行字會被模板字取代</p>
</div>

<script>
  const vmVuejsTemplate = Vue.createApp({` + "\n" +
'    template: `<p><b>{{ greeting }}</b> 好棒棒！</p><input v-model="greeting" placeholder="可輸入文字">`,' + "\n" +
`    data() {
      return {
        greeting: ""
      }
    }
  }).mount("#VuejsTemplate");
</script>`,
          jsCode: null,
          vueSFCCode: 
`<template>
  <p><b>{{ greeting }}</b> 好棒棒！</p>
  <input v-model="greeting" placeholder="可輸入文字" />
</template>

<script setup>
import { ref } from "vue";

const greeting = ref("");
</script>

<style scoped>
p {
  margin-top: 0;
}
</style>`
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailContent: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueSFCCode: null
            }
          }
        ]
      }
    ]
  },
  {
    id: "vuejsDataProcessingNote",
    title: "資料加工與邏輯整合",
    description: "包含 <code>methods</code> 與 <code>computed</code>。",
    descriptionComponent: null,
    descriptionComponentStyle: null,
    lists: [
      {
        listTitle: "methods 方法",
        listSubtitle: null,
        listComponent: defineAsyncComponent(() =>
          import("../../../components/WebNoteView/VuejsNoteView/VuejsDataProcessingNote/VuejsMethodsDemo.vue")
        ),
        listCode: {
          htmlCode: 
`<div id="VuejsMethods">
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
</script>`,
          jsCode: null,
          vueSFCCode: 
`<template>
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
</script>

<style scoped>
p {
  margin-top: 0;
}
</style>`
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailContent: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueSFCCode: null
            }
          }
        ]
      },
      {
        listTitle: "computed 計算屬性",
        listSubtitle: `<div style="color: rgba(33, 37, 41, 0.75); font-size: 12px; font-style: italic; margin-bottom: 8px;">- 在這個例子，跟上面只有差在模板裡的 subtotal 有沒有加 <code>()</code></div>`,
        listComponent: defineAsyncComponent(() =>
          import("../../../components/WebNoteView/VuejsNoteView/VuejsDataProcessingNote/VuejsComputedDemo.vue")
        ),
        listCode: {
          htmlCode: 
`<div id="VuejsComputed">
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
</script>`,
          jsCode: null,
          vueSFCCode: 
`<template>
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
</script>

<style scoped></style>`
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailContent: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueSFCCode: null
            }
          }
        ]
      },
      {
        listTitle: "methods 與 computed 比較",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: "<code>methods</code> 方法",
            detailSubtitle: null,
            detailContent: 
`<ul style="margin-top: 16px; line-height: 1.6;">
  <li><code>methods</code> 內的函式 <strong>每次呼叫時都會執行，不會快取</strong> 結果。</li>
  <li>適用於 <strong>需要即時執行的操作</strong>，例如事件處理（按鈕點擊）、非同步請求（AJAX）、DOM 操作等。</li>
  <li><strong>不適合用來依賴數據計算值</strong>，因為每次呼叫時都會重新執行，即使數據沒有變更，可能會造成效能浪費。</li>
</ul>`,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueSFCCode: null
            }
          },
          {
            detailTitle: "<code>computed</code> 計算屬性",
            detailSubtitle: null,
            detailContent: 
`<ul style="margin-top: 16px; line-height: 1.6;">
  <li><code>computed</code> 屬性會 <strong>基於它所依賴的響應式數據</strong> 來自動計算結果，並且 <strong>有快取機制（Cache）</strong>。</li>
  <li>當 <strong>依賴的數據沒有變化</strong> 時，<code>computed</code> <strong>不會重新執行</strong>，而是直接返回上一次的計算結果，提升效能。</li>
  <li>適用於 <strong>根據既有數據計算新數據的情境</strong>，例如格式化數據、過濾數據、簡單運算等。</li>
</ul>`,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueSFCCode: null
            }
          },
          {
            detailTitle: "兩者對比",
            detailSubtitle: null,
            detailContent: 
`<table border="1" cellpadding="5" cellspacing="0">
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
</table>`,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueSFCCode: null
            }
          },
          {
            detailTitle: '何時應該用 <code>computed</code>，何時用 <code>methods</code>？</h5>',
            detailSubtitle: null,
            detailContent: 
`<ul>
  <li>如果是依賴數據的計算，並且希望有快取機制，應該使用 <code>computed</code>。</li>
  <li>如果是純函式運算，每次都需要執行（例如事件處理、非同步請求），應該使用 <code>methods</code>。</li>
</ul>`,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueSFCCode: null
            }
          }
        ]
      }
    ]
  },
  {
    id: "vuejsDirectiveNote",
    title: "Vue 指令",
    description: 
`包含——
<ul style="margin-top: 8px; line-height: 1.6;">
  <li>屬性綁定：<code>v-bind</code>。</li>
  <li>表單綁定：<code>v-model</code> 與其修飾子。</li>
  <li>模板綁定：<code>v-text</code>、<code>v-html</code>、<code>v-once</code>、<code>v-pre</code>。</li>
  <li>樣式綁定：<code>v-bind:class</code>、<code>v-bind:style</code>。
</ul>`,
    descriptionComponent: null,
    descriptionComponentStyle: null,
    lists: [
      {
        listTitle: "屬性綁定：v-bind",
        listSubtitle: '<div style="color: rgba(33, 37, 41, 0.75); font-size: 12px; font-style: italic; margin-bottom: 8px;">- <code>v-bind:id="customId"</code> 也可以寫成 <code>:id="customId"</code></div>',
        listComponent: null,
        listCode: {
          htmlCode: 
`<div id="vBindId">
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
</script>`,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailContent: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueSFCCode: null
            }
          }
        ]
      },
      {
        listTitle: "表單綁定：v-model",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: "input 文字框",
            detailSubtitle: null,
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/VuejsNoteView/VuejsDirectiveNote/VuejsVModelInputDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="VuejsVModelInput">
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
</script>`,
              jsCode: null,
              vueSFCCode: 
`<template>
  <input type="text" v-model="message" placeholder="edit me">
  <p>Message is: <b>{{ message }}</b></p>
</template>

<script setup>
import { ref } from "vue";

const message = ref("");
</script>

<style scoped>
p {
  margin-bottom: 0;
}
</style>`
            }
          },
          {
            detailTitle: "textarea 文字方塊",
            detailSubtitle: null,
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/VuejsNoteView/VuejsDirectiveNote/VuejsVModelTextareaDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="VuejsVModelTextarea">
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
</script>`,
              jsCode: null,
              vueSFCCode: 
`<template>
  <textarea v-model="message" placeholder="add multiline lines"></textarea>
  <p>Multiline message is: <b>{{ message }}</b></p>
</template>

<script setup>
import { ref } from "vue";

const message = ref("");
</script>

<style scoped>
p {
  margin: 0;
}
</style>`
            }
          },
          {
            detailTitle: "radio 選擇框",
            detailSubtitle: null,
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/VuejsNoteView/VuejsDirectiveNote/VuejsVModelRadioDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="VuejsVModelRadio">
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
</script>`,
              jsCode: null,
              vueSFCCode: 
`<template>
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
</script>

<style scoped></style>`
            }
          },
          {
            detailTitle: "checkbox 選擇框（多個選項）",
            detailSubtitle: null,
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/VuejsNoteView/VuejsDirectiveNote/VuejsVModelCheckboxMultipleDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="VuejsVModelCheckbox">
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
</script>`,
              jsCode: null,
              vueSFCCode: 
`<template>
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
</script>

<style scoped>
p {
  margin-bottom: 0;
}
</style>`
            }
          },
          {
            detailTitle: "checkbox 選擇框（單個選項）",
            detailSubtitle: null,
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/VuejsNoteView/VuejsDirectiveNote/VuejsVModelCheckboxSingleDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="VuejsVModelCheckboxSingle">
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
</script>`,
              jsCode: null,
              vueSFCCode: 
`<template>
  <label>
    <input type="checkbox" v-model="isChecked">
    Status: {{ isChecked }}
  </label>
</template>

<script setup>
import { ref } from "vue";

const isChecked = ref(false);
</script>

<style scoped></style>`
            }
          },
          {
            detailTitle: "select 下拉式選單",
            detailSubtitle: null,
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/VuejsNoteView/VuejsDirectiveNote/VuejsVModelSelectDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="VuejsVModelSelect">
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
</script>`,
              jsCode: null,
              vueSFCCode: 
`<template>
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
</script>

<style scoped></style>`
            }
          }
        ]
      },
      {
        listTitle: "v-model 與修飾子",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: "<code>v-model.lazy</code>",
            detailSubtitle: '在 <code>v-model</code> 後面加上 <code>.lazy</code>，會在使用者離開輸入框焦點時，才會更新 data 內容。',
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/VuejsNoteView/VuejsDirectiveNote/VuejsVModelLazyDemo.vue")
            ),
            detailCode: {
              htmlCode:  // 到這裡，尚未開啟新Vue SFC來寫此處元件
`<div id="VuejsVModelLazy">
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
</script>`,
              jsCode: null,
              vueSFCCode: 
`<template>
  <input v-model.lazy="lazyMessage" placeholder="edit me">
  <p>Message is: {{ lazyMessage }}</p>
</template>

<script setup>
import { ref } from "vue";

const lazyMessage = ref("");
</script>

<style scoped>
p {
  margin-bottom: 0;
}
</style>`
            }
          },
          {
            detailTitle: "<code>v-model.number</code>",
            detailSubtitle: "在 <code>&lt;input&gt;</code> 輸入框中輸入的數字都會是 string 型別，在 <code>v-model</code> 後加上 <code>.number</code> 可將其轉成 number 型別。",
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/VuejsNoteView/VuejsDirectiveNote/VuejsVModelNumberDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="app14">
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
</script>`,
              jsCode: null,
              vueSFCCode: 
`<template>
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
</script>

<style scoped></style>`
            }
          },
          {
            detailTitle: "<code>v-model.trim</code>",
            detailSubtitle: "<code>v-model</code> 加上 <code>.trim</code> 修飾子後，可自動過濾輸入框內前後輸入的空白字元。",
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/VuejsNoteView/VuejsDirectiveNote/VuejsVModelTrimDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="app16">
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
</script>`,
              jsCode: null,
              vueSFCCode: 
`<template>
  <textarea v-model.trim="message16"></textarea>
  <p>產出結果為： <pre>{{ message16 }}</pre></p>
</template>

<script setup>
import { ref } from "vue";

const message16 = ref("");
</script>

<style scoped></style>`
            }
          }
        ]
      },
      {
        listTitle: "模板綁定",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: "<code>v-text</code> 與 <code>v-html</code>",
            detailSubtitle: null,
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/VuejsNoteView/VuejsDirectiveNote/VuejsVTextVHtmlDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="app17">
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
</script>`,
              jsCode: null,
              vueSFCCode: 
`<template>
  <div v-text="text"></div>
  <div v-html="text"></div>
  <div>{{ text }}</div>
</template>

<script setup>
import { ref } from "vue";

const text = ref("<h3>Hello World!</h3>");
</script>

<style scoped></style>`
            }
          },
          {
            detailTitle: "<code>v-once</code>",
            detailSubtitle: "只會渲染指定的節點一次，往後就不再更新。",
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/VuejsNoteView/VuejsDirectiveNote/VuejsVOnceDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="app18">
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
</script>`,
              jsCode: null,
              vueSFCCode: 
`<template>
  <input v-model="text">
  <div>沒有 <code>v-once</code> → {{ text }}</div>
  <div v-once>有 <code>v-once</code> → {{ text }}</div>
</template>

<script setup>
import { ref } from "vue";

const text = ref("Hello World");
</script>

<style scoped></style>`
            }
          },
          {
            detailTitle: "<code>v-pre</code>",
            detailSubtitle: '以下面例子來說，加上 <code>v-pre</code> 指令，會顯示原始的 "{{ text }}" ，而不會是編譯後的 text 內容。',
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/VuejsNoteView/VuejsDirectiveNote/VuejsVPreDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="app19">
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
</script>`,
              jsCode: null,
              vueSFCCode: 
`<template>
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
</script>

<style scoped></style>`
            }
          }
        ]
      },
      {
        listTitle: "樣式綁定",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: "控制 <code>class</code>",
            detailSubtitle: '以下面例子來說，當 <code>message20.length > 10</code> 為真，DOM 會有 <code>class="error"</code> 的樣式。',
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/VuejsNoteView/VuejsDirectiveNote/VuejsVBindClass1Demo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="app20">
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
</script>`,
              jsCode: null,
              vueSFCCode: 
`<template>
  <input
    type="text"
    v-model.trim="message20"
    :class="{ 'error': message20.length > 10 }"
  >
</template>

<script setup>
import { ref } from "vue";

const message20 = ref("");
</script>

<style scoped>
  .error {
    border: red solid 1px;
    color: red;
  }
</style>`
            }
          },
          {
            detailTitle: "控制多組 <code>class</code>",
            detailSubtitle: null,
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/VuejsNoteView/VuejsDirectiveNote/VuejsVBindClass2Demo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="app21">
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
</script>`,
              jsCode: null,
              vueSFCCode: 
`<template>
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
</script>

<style scoped>
  .active {
    border: gray dashed 1px;
    color: blue;
  }
  .text-danger {
    border: red solid 1px;
    color: red;
  }
</style>`
            }
          },
          {
            detailTitle: "直接操作 <code>style</code> 屬性",
            detailSubtitle: null,
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/VuejsNoteView/VuejsDirectiveNote/VuejsVBindStyleDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="app22">
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
</script>`,
              jsCode: null,
              vueSFCCode: 
`<template>
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
</script>

<style scoped></style>`
            }
          }
        ]
      }
    ]
  },
  {
    id: "vuejsEventNote",
    title: "Vue 事件處理",
    description: "包含 <code></code>。",
    descriptionComponent: null,
    descriptionComponentStyle: null,
    lists: [
      {
        listTitle: null,
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailContent: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueSFCCode: null
            }
          }
        ]
      }
    ]
  },
  {
    id: "vuejsConditionListNote",
    title: "Vue 條件判斷與列表渲染",
    description: null,
    descriptionComponent: null,
    descriptionComponentStyle: null,
    lists: [
      {
        listTitle: null,
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailContent: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueSFCCode: null
            }
          }
        ]
      }
    ]
  },
  {
    id: "vuejsLifecycleNote",
    title: "Vue 元件的生命週期與更新機制",
    description: null,
    descriptionComponent: null,
    descriptionComponentStyle: null,
    lists: [
      {
        listTitle: null,
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailContent: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueSFCCode: null
            }
          }
        ]
      }
    ]
  },
  {
    id: "vuejs??????Note",
    title: "？？？？？",
    description: null,
    descriptionComponent: null,
    descriptionComponentStyle: null,
    lists: [
      {
        listTitle: null,
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailContent: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueSFCCode: null
            }
          }
        ]
      }
    ]
  }
];