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
    id: "vuejsEventHandlingNote",
    title: "事件處理 v-on",
    description: "包含 <code>v-on</code>、<code>v-on</code> 修飾子、鍵盤修飾子、滑鼠修飾子、<code>v-model</code> 的語法糖還原。",
    descriptionComponent: null,
    descriptionComponentStyle: null,
    lists: [
      {
        listTitle: "<code>v-on</code> 事件綁定",
        listSubtitle: "Vue.js 中，與事件有關的指令，只有一個 <code>v-on</code>。",
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: '<code>v-on:[事件名稱]="運算式"</code>',
            detailSubtitle: '註：<code>v-on:[事件名稱]="運算式"</code> = <code>@[事件名稱]="運算式"</code>',
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/VuejsNoteView/VuejsEventHandlingNote/VuejsVOnDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<!-- 以下兩種寫法結果相同 -->
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
</script>`,
              jsCode: null,
              vueSFCCode: 
`<template>
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
</script>

<style scoped>
p {
  margin: 0;
}

button {
  margin-bottom: 16px;
}
</style>`
            }
          }
        ]
      },
      {
        listTitle: "<code>v-on</code> 與修飾子",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: "<code>.stop</code>",
            detailSubtitle: "用來阻擋事件冒泡，DOM 的 <code>@click</code> 加上 <code>.stop</code>，click 事件就不會像外層傳遞。",
            detailContent: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueSFCCode: null
            }
          },
          {
            detailTitle: "<code>.prevent</code>",
            detailSubtitle: "用來阻擋元素的預設行為。",
            detailContent: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueSFCCode: null
            }
          },
          {
            detailTitle: "<code>.capture</code>",
            detailSubtitle: "指定事件以捕獲（capturing）的形式來觸發。",
            detailContent: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueSFCCode: null
            }
          },
          {
            detailTitle: "<code>.self</code>",
            detailSubtitle: "<code>.self</code> 的作用是只會觸發元素自己的事件行為，由子層元素傳來的事件則不會觸發。例如燈箱操作，希望點擊燈箱外遮罩可自動關閉，但點擊元素時不想有關閉效果。",
            detailContent: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueSFCCode: null
            }
          },
          {
            detailTitle: "<code>.once</code>",
            detailSubtitle: "讓指定的事件只觸發一次，執行後就解除事件監聽。",
            detailContent: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueSFCCode: null
            }
          },
          {
            detailTitle: "<code>.passive</code>",
            detailSubtitle: "<code>.passive</code> 等同於 <code>addEventListener</code> 的 <code>passive</code> 屬性，用途是告訴瀏覽器這個事件處理器會不會呼叫 <code>event.preventDefault</code> 來停止瀏覽器的原生行為。",
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
        listTitle: "鍵盤修飾子",
        listSubtitle: 
`<ul>
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
</ul>`,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: "<code>.exact</code> 精確判斷",
            detailSubtitle: "用來精確判斷鍵盤的修飾子，以此例來說，當沒有加上 <code>.exact</code> 時，按 <kbd>Ctrl</kbd> + <kbd>Enter</kbd> 鍵時，亦會執行 <code>alert()</code>；但當加上 <code>.exact</code> 後，就只有在「只按下 <kbd>Enter</kbd> 鍵」時，才會執行 <code>alert()</code>。",
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/VuejsNoteView/VuejsEventHandlingNote/VuejsVOnKeydownEnterDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="app25">
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
</script>`,
              jsCode: null,
              vueSFCCode: 
`<template>
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
  alert("hello world\n" + keyboardModifiers1.value );
};
function addToMessages2() {
  alert("hello world\n" + keyboardModifiers2.value );
};
</script>

<style scoped>
h5 {
  margin-top: 0;
}

input {
  width: 180px;
  padding: 3px;
}
</style>`
            }
          }
        ]
      },
      {
        listTitle: "滑鼠修飾子",
        listSubtitle: 
`<ul>
  <li><code>.left</code></li>
  <li><code>.right</code></li>
  <li><code>.middle</code></li>
</ul>`,
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
        listTitle: "拆解 <code>v-model</code> 的黑魔法",
        listSubtitle: "<code>v-model</code> 本質上是一種語法糖，還原後如下：",
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: '<code>&lt;input type="text"&gt;</code> 與 <code>&lt;input type="textarea"&gt;</code>',
            detailSubtitle: null,
            detailContent: null,
            detailComponent: null,
            detailCode: {
              htmlCode: 
`<!-- 以下兩行幾乎等價（但不完全相同） -->
<input v-model="msg">
<input :value="msg" @input="msg = $event.target.value">


<!-- 若需使用修飾符（如".trim"），使用v-model較方便 -->
<input v-model.trim="msg">
<input :value="msg" @input="msg = $event.target.value.trim()">`,
              jsCode: null,
              vueSFCCode: null
            }
          },
          {
            detailTitle: '<code>&lt;input type="radio"&gt;</code>、<code>&lt;input type="checkbox"&gt;</code> 與 <code>&lt;select&gt;</code>',
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
    id: "vuejsConditionRenderingNote",
    title: "條件判斷 v-show/v-if",
    description: "包含 <code>v-show</code> 與 <code>v-if</code>。",
    descriptionComponent: null,
    descriptionComponentStyle: null,
    lists: [
      {
        listTitle: "<code>v-show</code>",
        listSubtitle: "作用十分單純，值為 <u>truthy</u> 時顯示，值為 <u>falsy</u> 則隱藏（透過 CSS 的 <code>display: none</code> 來將元素隱藏）。",
        listComponent: defineAsyncComponent(() =>
          import("../../../components/WebNoteView/VuejsNoteView/VuejsConditionRenderingNote/VuejsVShowDemo.vue")
        ),
        listCode: {
          htmlCode: 
`<div id="app26">
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
</script>`,
          jsCode: null,
          vueSFCCode: 
`<template>
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
</script>

<style scoped>
button {
  margin-right: 32px;
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
        listTitle: "<code>v-if</code>",
        listSubtitle: 
`<code>v-if</code> 可與 <code>v-else-if</code>、<code>v-else</code> 做條件搭配。
<ul style="margin-top: 16px;">
  <li><code>key</code>：加上 <code>key</code> 屬性，讓 Vue.js 根據 <code>key</code> 屬性的內容是否相同，決定是否重新渲染元素。雖可能會降低網頁渲染的效率，但可避免因重複利用已經存在的 DOM，導致畫面殘留。</li>
</ul>`,
        listComponent: defineAsyncComponent(() =>
          import("../../../components/WebNoteView/VuejsNoteView/VuejsConditionRenderingNote/VuejsVIfDemo.vue")
        ),
        listCode: {
          htmlCode: 
`<div id="app27">
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
</script>`,
          jsCode: null,
          vueSFCCode: 
`<template>
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
      }
    ]
  },
  {
    id: "vuejsListRenderingNote",
    title: "列表渲染 v-for",
    description: "包含「<code>v-for</code> + 陣列」、「<code>v-for</code> + 物件」、「<code>v-for</code> + 數字範圍」、「<code>v-for</code> + <code>&lt;template&gt;</code>」、「<code>v-for</code> 列表的過濾與順序」，以及「<code>v-for</code> 的 <code>key</code>」。",
    descriptionComponent: null,
    descriptionComponentStyle: null,
    lists: [
      {
        listTitle: "<code>v-for</code> + 陣列",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: "<code>item in Array</code> / <code>(item, index) in Array</code>",
            detailSubtitle: "這裡的 <code>item</code> 可任意命名，只要是合法的 JavaScript 變數名稱即可。<code>index</code> 為索引值，從 0 開始。",
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/VuejsNoteView/VuejsListRenderingNote/VuejsVForArrayDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="app28">
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
</script>`,
              jsCode: null,
              vueSFCCode: 
`<template>
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
</script>

<style scoped>
h4 {
  margin-top: 0 !important;
}
</style>`
            }
          }
        ]
      },
      {
        listTitle: "<code>v-for</code> + 物件",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: "<code>value in Object</code> / <code>(value, key) in Object</code> / <code>(value, key, index) in Object</code>",
            detailSubtitle: "這裡的 <code>value</code> 可任意命名，只要是合法的 JavaScript 變數名稱即可。<code>index</code> 為索引值，從 0 開始。",
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/VuejsNoteView/VuejsListRenderingNote/VuejsVForObjectDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="app29">
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
</script>`,
              jsCode: null,
              vueSFCCode: 
`<template>
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
</script>

<script setup></script>`
            }
          }
        ]
      },
      {
        listTitle: "<code>v-for</code> + 數字範圍",
        listSubtitle: 
`<p style="color: rgba(33, 37, 41, 0.75); font-size: 12px; font-style: italic; margin-bottom: 8px;">
- 除了陣列（Array）與物件（Object）外，<code>v-for</code> 還可以接受整數作為渲染的條件，數字越大重複的次數越多。但需注意，此處的計數是從 1 開始計算。
</p>`,
        listComponent: defineAsyncComponent(() =>
          import("../../../components/WebNoteView/VuejsNoteView/VuejsListRenderingNote/VuejsVForNumberRangeDemo.vue")
        ),
        listCode: {
          htmlCode: 
`<ul id="app30" class="pagination">
  <li class="page-item"><a class="page-link">&lt;</a></li>
  <!-- 會從 1 ~ 10 出現十次<li> -->
  <li class="page-item" v-for="page in 10">
    <a class="page-link" href="#">{{ page }}</a>
  </li>
  <li class="page-item"><a class="page-link">&gt;</a></li>
</ul>

<script>
  const vm30 = Vue.createApp().mount("#app30");
</script>`,
          jsCode: null,
          vueSFCCode: 
`<template>
  <ul class="pagination">
    <li class="page-item"><a class="page-link">&lt;</a></li>
    <!-- 會從 1 ~ 10 出現十次<li> -->
    <li class="page-item" v-for="page in 10">
      <a class="page-link" href="#">{{ page }}</a>
    </li>
    <li class="page-item"><a class="page-link">&gt;</a></li>
  </ul>
</template>

<script setup></script>

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
        listTitle: "<code>v-for</code> + <code>&lt;template&gt;</code>",
        listSubtitle: null,
        listComponent: defineAsyncComponent(() =>
          import("../../../components/WebNoteView/VuejsNoteView/VuejsListRenderingNote/VuejsVForTemplateDemo.vue")
        ),
        listCode: {
          htmlCode: 
`<!-- 加 style="display: inline;" 是因為 class="dropdown-menu" 預設 display: none -->
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
</script>`,
          jsCode: null,
          vueSFCCode: 
`<template>
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
</script>

<style scoped>
/* 樣式模擬Bootstrap樣式，在此省略，若有需要可進入原元件查看 */
/* 元件位置：components/WebNoteView/VuejsNoteView/VuejsListRenderingNote/VuejsVForTemplateDemo.vue */
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
        listTitle: "<code>v-for</code> 列表的過濾與排序",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: "<code>v-for</code> 列表的過濾",
            detailSubtitle: null,
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/VuejsNoteView/VuejsListRenderingNote/VuejsVForFilterDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="app32">
  <div :id="'app32-' + i" v-for="i in evenNumbers">{{ i }}</div>
</div>

<script>
  const vm32 = Vue.createApp({
    data() {
      return {
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }
    },
    computed: {
      // 只顯示偶數
      evenNumbers() {
        return this.numbers.filter(num => num % 2 === 0);
      }
    }
  }).mount("#app32");
</script>`,
              jsCode: null,
              vueSFCCode: 
`<template>
  <div v-for="i in evenNumbers">{{ i }}</div>
</template>

<script setup>
import { ref, computed } from "vue";

const numbers = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const evenNumbers = computed(() => {
  return numbers.value.filter(num => num % 2 === 0);
});
</script>

<style scoped></style>`
            }
          },
          {
            detailTitle: "<code>v-for</code> 列表的排序",
            detailSubtitle: "由於 JavaScript 的 <code>Array.sort()</code> 會直接影響原始陣列，比較好的做法是先複製一份新的陣列再進行排序。",
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/VuejsNoteView/VuejsListRenderingNote/VuejsVForSortDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="app33">
  <div :id="'app33-' + i" v-for="i in sortedNumbers">{{ i }}</div>
</div>

<script>
  const vm33 = Vue.createApp({
    data() {
      return {
        numbers: [3, 5, 2, 6, 1, 9, 8, 7]
      }
    },
    computed: {
      sortedNumbers() {
        // return this.numbers.sort((a, b) => b - a);  // 若在此直接執行.sort會直接改變this.numbers的順序
        return [...this.numbers].sort((a, b) => a - b);  // 先透過[...this.numbers]複製一份新陣列再排序
      }
    }
  }).mount("#app33");
</script>`,
              jsCode: null,
              vueSFCCode: 
`<template>
  <div v-for="i in sortedNumbers">{{ i }}</div>
</template>

<script setup>
import { ref, computed } from "vue";

const numbers = ref([3, 5, 2, 6, 1, 9, 8, 7]);
const sortedNumbers = computed(() => {
  // return this.numbers.sort((a, b) => b - a);  // 若在此直接執行.sort會直接改變this.numbers的順序
  return [...numbers.value].sort((a, b) => a - b);  // 先透過[...this.numbers]複製一份新陣列再排序
});
</script>

<style scoped></style>`
            }
          }
        ]
      },
      {
        listTitle: "<code>v-for</code> 可以使用 <code>index</code> 當作 <code>key</code> 嗎？",
        listSubtitle: 
`<div style="text-indent: 32px; line-height: 1.6;">
  <p><code>v-for</code> 為了提高網頁渲染的效率，會選擇重複利用已經存在的元素，而不是重新渲染。也就是說，當陣列的順序被改變時，Vue.js 不會移動實際 DOM 的節點，而是更新現有的 DOM 內容。當 <code>v-for</code> 內部含有子元件或表單元素時，此時要是沒有加上 <code>key</code> 屬性，就可能會出現一些不可預期的錯誤。</p>
  <p>由於 <code>v-for</code> 裡的 <code>index</code> 是隨著陣列生成的，當 <code>index</code> 沒變時，對 Vue.js 而言，它就是一個可以重複使用的元素（或元件）。此時即使我們為 <code>v-for</code> 加上了 <code>key</code> 屬性，它的作用也會跟沒加一樣。所以標題的答案是——“<u><strong>不適合</strong></u>”。</p>
</div>`,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: "Todo List",
            detailSubtitle: null,
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/VuejsNoteView/VuejsListRenderingNote/VuejsVForToDoListDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="app34">
  <!-- Todo list -->
  <h4>Todo</h4>
  <ul>
    <li v-for="i in todoLists" :key="i.id">
      <label><input type="checkbox" v-model="i.isDone">{{ i.title }}</label>
    </li>
  </ul>

  <!-- Done List -->
  <h4>Done</h4>
  <ul>
    <li v-for="i in doneLists" :key="i.id">
      <label><input type="checkbox" v-model="i.isDone">{{ i.title }}</label>
    </li>
  </ul>
</div>

<script>
  const vm34 = Vue.createApp({
    data() {
      return {
        lists: [
          {
            id: "task001",
            title: "洗澡",
            isDone: false
          },
          {
            id: "task002",
            title: "吃晚餐",
            isDone: false
          },
          {
            id: "task003",
            title: "記錄飲食",
            isDone: false
          },
        ]
      }
    },
    computed: {
      todoLists() {
        return this.lists.filter(d => !d.isDone)
      },
      doneLists() {
        return this.lists.filter(d => d.isDone)
      }
    }
  }).mount("#app34");
</script>`,
              jsCode: null,
              vueSFCCode: null
            }
          }
        ]
      }
    ]
  },
  {
    id: "vuejsLifecycleHooksNote",
    title: "Vue 元件的生命週期與更新機制",
    description: null,
    descriptionComponent: null,
    descriptionComponentStyle: null,
    lists: [
      {
        listTitle: "生命週期與鉤子函式（Hooks function）",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: 
`<div id="app35">{{ msg }}</div>

<script>
  const vm35 = Vue.createApp({
    data() {
      return {
        msg: "生命週期與鉤子函式測試"
      }
    },
    created() {
      console.log("created");
    },
    mounted() {
      console.log("mounted")
    },
    unmounted() {
      console.log("unmounted")
    }
  });

  // 如未執行"mount()"，則後續所有的lifecycle hook都將不會繼續執行
  vm35.mount("#app35");
</script>`,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: "<code>unmount()</code> 卸載元件",
            detailSubtitle: "若在 <code>Vue.createApp()</code> 時直接接上 <code>.mount()</code>，則無法透過 <code>vm.unmount()</code> 來卸載元件。",
            detailContent: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: 
`// 錯誤寫法：
const vm = Vue.createApp({
  // 略
}).mount("#app");

// Error: "vm.unmount is not a function"
vm.unmount();



// 需要改為以下寫法，方可順利執行：

// 正確寫法：
const vm = Vue.createApp({
  // 略
});

// mount
vm.mount("#app");

// It's ok.
vm.unmount();`,
              vueSFCCode: null
            }
          }
        ]
      },
      {
        listTitle: "狀態的更新與畫面的同步",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: "聊天室",
            detailSubtitle: null,
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/VuejsNoteView/VuejsLifecycleHooksNote/VuejsChatRoomDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="app36">
  <p v-for="m in messages">{{ m }}</p>
  <input type="text" placeholder="輸入任意文字後按下Enter鍵" v-model.trim="msg" @keydown.enter="addToMessages">
</div>

<script>
  const vm36 = Vue.createApp({
    data() {
      return {
        msg: "",
        messages: ["Hello", "Vue.js is good", "Do you think so too?"]
      }
    },
    methods: {
      addToMessages() {
        this.messages.push(this.msg);
        this.msg = "";

        // 等待畫面更新後再即時抓取元素屬性
        this.$nextTick(() => {
          // 透過this.$el取得實體綁定後的DOM
          const el = document.querySelector("#app36");

          // 將el.scrollTop指定為捲軸的高度el.scrollHeight
          el.scrollTop = el.scrollHeight;
        });
      }
    }
  });
  vm36.mount("#app36");
</script>`,
              jsCode: null,
              vueSFCCode: 
`<template>
  <div ref="msgContainer" style="max-height: 150px; overflow-y: auto;">
    <p v-for="m in messages">{{ m }}</p>
  </div>
  <input
    type="text"
    placeholder="輸入任意文字後按下Enter鍵"
    v-model.trim="msg"
    @keydown.enter="addToMessages"
  >
</template>

<script setup>
import { ref, nextTick } from "vue";

const msg = ref("");
const messages = ref(["Hello", "Vue.js is good", "Do you think so too?"]);
const msgContainer = ref(null);

async function addToMessages() {
  if (!msg.value) return;

  messages.value.push(msg.value);
  msg.value = "";

  // 等待 DOM 更新後捲到最底
  await nextTick();
  if (msgContainer.value) {
    msgContainer.value.scrollTop = msgContainer.value.scrollHeight;
  };
};
</script>

<style scoped></style>`
            }
          }
        ]
      }
    ]
  },
  {
    id: "vuejsComponentNote",
    title: "元件系統的特性",
    description: null,
    descriptionComponent: null,
    descriptionComponentStyle: null,
    lists: [
      {
        listTitle: "什麼是元件（Component）？",
        listSubtitle: 
`<p style="text-indent: 32px; line-height: 1.6;">
  每一個被封裝後的元件單元，都含有自己的模板 <code>&lt;template&gt;</code>、行為邏輯 <code>&lt;script&gt;</code>、樣式 <code>&lt;style&gt;</code>，並且可以被重複使用。而在元件之中又可以含有元件，這樣由一個個元件單元組合而成的「元件樹」，就是 Vue.js 元件系統的概念。
</p>`,
        listComponent: null,
        listCode: {
          htmlCode: 
`<div id="app">
  <header-component>...</header-component>
  <menu-component>...</menu-component>
  <main-component>...</main-component>
  <footer-component>...</footer-component>
</div>`,
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
        listTitle: "元件的分類",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: "展示型元件（Presentation）",
            detailSubtitle: null,
            detailContent: 
`<p style="text-indent: 32px; line-height: 1.6;">
  以負責呈現 UI 為主的類型，我們很單純地把資料傳遞進去，然後 DOM 就根據我們丟進去的資料生成出來。這種元件的好處是可以提升 UI 的重複使用性。
</p>`,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueSFCCode: null
            }
          },
          {
            detailTitle: "容器型元件（Container）",
            detailSubtitle: null,
            detailContent: 
`<p style="text-indent: 32px; line-height: 1.6;">
  這類型的元件主要負責與資料層的 service 溝通，包含了與 server 端、資料來源做溝通的邏輯，然後再將資料傳遞給前面所說的展示型元件。
</p>`,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueSFCCode: null
            }
          },
          {
            detailTitle: "互動型元件（Interactive）",
            detailSubtitle: null,
            detailContent: 
`<p style="text-indent: 32px; line-height: 1.6;">
  像是大家所熟知的 elementUI、Bootstrap 的 UI library 都屬於此種類型。這種類型的元件通常會包含許多的互動邏輯在裡面，但也與展示型元件同樣強調重複使用。像是表單、燈箱等各種互動元素都算在這類型。
</p>`,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueSFCCode: null
            }
          },
          {
            detailTitle: "功能型元件（Functions）",
            detailSubtitle: null,
            detailContent: 
`<p style="text-indent: 32px; line-height: 1.6;">
  這類型的元件本身不渲染任何內容，主要負責將元件內容作為某種應用程式的延伸，或是某種機制的封裝。像是 <code>&lt;template&gt;</code>、<code>&lt;router-view&gt;</code> 都屬於此類型。
</p>`,
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
        listTitle: "元件的宣告與註冊",
        listSubtitle: "全域元件 / 區域元件 / X-Templates",
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: "全域元件",
            detailSubtitle: null,
            detailContent: null,
            detailComponent: null,
            detailCode: {
              htmlCode: 
`<div id="app37">
  <h5>Root Instance</h5>

  <!-- 使用自訂元件 my-component -->
  <my-component></my-component>
  <my-component></my-component>
</div>

<script>
  const vm37 = Vue.createApp({});

  // 將元件註冊在vm37上
  vm37.component("my-component", {` + "\n" +
'    template: `<div>Hello Vue 3.x!<br>此處為 {{ msg }} 。</div>`,' + "\n" +
`    // 內部其餘選項與過去幾乎一樣
    data() {
      return {
        msg: "全域元件"
      }
    },
    props: {},
    computed: {},
    methods: {}
  });

  // 新增一個'根實體'，並掛載於#app37上
  vm37.mount("#app37");
</script>`,
              jsCode: null,
              vueSFCCode: null
            }
          },
          {
            detailTitle: "區域元件",
            detailSubtitle: null,
            detailContent: null,
            detailComponent: null,
            detailCode: {
              htmlCode: 
`<div id="app38">
  <h5>Root Instance</h5>

  <my-component></my-component>
  <my-component></my-component>
</div>

<script>
  const vm38 = Vue.createApp({
    components: {
      "my-component": {
        // 子元件的options` + "\n" +
'        template:  `<div>Hello Vue 3.x!<br>此處為 {{ msg }} 。</div>`,' + "\n" +
`        data() {
          return {
            msg: "區域元件"
          }
        }
      }
    }
  });

  vm38.mount("#app38");
</script>`,
              jsCode: null,
              vueSFCCode: null
            }
          },
          {
            detailTitle: "X-Templates",
            detailSubtitle: "這基本上是 Vue 2 時代的遺物，Vue 3 官方已完全不建議再使用，因為 SFC 完全取代了它，且 X-Templates 可讀性、維護性差。",
            detailContent: null,
            detailComponent: null,
            detailCode: {
              htmlCode: 
`<div id="app39"></div>

<!-- 將網頁直接用<script>包覆 -->
<script type="text/x-template" id="app39-x-template">
  <div class="bg-warning">
    <h5>這是一個x-template的標題</h5>
    <p>這是一個x-template的內文，內文內文內文。</p>
  </div>
</script>

<script>
  const vm39 = Vue.createApp({
    template: "<app39-x-template></app39-x-template>"
  });

  vm39.component("app39-x-template", {
    // 這裡的#app39-x-template對應id="app39-x-template"
    template: "#app39-x-template"
  });

  vm39.mount("#app39");
</script>`,
              jsCode: null,
              vueSFCCode: null
            }
          }
        ]
      },
      {
        listTitle: "子元件的 <code>data</code> 必須是函式",
        listSubtitle: "子元件的 <code>data</code> 必須是「函式（function）」而不能是「物件（object）」，以確保”<strong>每個元件實例有自己獨立的資料</strong>“；如果是寫死成物件，所有元件就會共用同一份資料，狀態會互相干擾。",
        listComponent: null,
        listCode: {
          htmlCode: 
`<div id="app40">
  <my-component></my-component>
  <my-component></my-component>
  <my-component></my-component>
  <my-component></my-component>
</div>

<script>
  const vm40 = Vue.createApp({});
  vm40.component("my-component", {` + "\n" +
'    template: `' + "\n" +
`      <div>
        <div>Count: {{ count }}</div>
        <button @click="count++">Plus</button>
      </div>` + "\n" +
'    `,' + "\n" +
`    data() {  // 要寫成"data()"；若寫成"data:"，子元件們會變成共用同一份資料而造成干擾
      return {
        count: 0
      }
    }
  })
  vm40.mount("#app40");
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
      }
    ]
  },
  {
    id: "vuejsPropsNote",
    title: "Props",
    description: "包含「元件之間的溝通傳遞」、「<code>props</code> 資料類型的驗證」、「以物件作為 <code>props</code> 傳遞」、「<code>props</code> 與遞迴元件」、「元件與自訂事件（Props in, Evemt out）」、「<code>v-model</code> 與元件的雙向綁定」、「跨越層級的傳遞方式（<code>provide</code> 與 <code>inject</code>）」",
    descriptionComponent: null,
    descriptionComponentStyle: null,
    lists: [
      {
        listTitle: "元件之間的溝通傳遞",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: "父元件與子元件之間的溝通傳遞",
            detailSubtitle: "這段 code 是 Vue 2/3 Options API + CDN script 的舊寫法，現在如果是用 Vue 3 + Vite + SFC 開發，會建議改成 <strong>父元件（Parent.vue）</strong> 和 <strong>子元件（MyComponent.vue）</strong> 的形式，用兩個 Vue SFC。",
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/VuejsNoteView/VuejsPropsNote/VuejsPropsParentsDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="app41">
  <!-- 這是外層元素的msg -->
  <p>{{ msg }}</p>

  <my-component :parent-msg="msg"></my-component>
</div>

<script>
  const vm41 = Vue.createApp({
    data() {
      return {
        msg: "這是外層元件的msg"
      }
    }
  });

  vm41.component("my-component", {` + "\n" +
'    template: `' + "\n" +
`      <div>
        <div>從props來的parentMsg ==> {{ parentMsg }}</div>
        <div>自己的msg ==> {{ innerMsg }}</div>
      </div>` + "\n" +
'    `,' + "\n" +
`    // 此props處，接受的對象為一個陣列
    props: ["parentMsg"],  // Vue會自動處理連字號（kebab-case）與駝峰式命名（camelCase）之間的轉換，此對應的是':parent-msg'
    data() {
      return {
        innerMsg: "這是內層元件的msg"
      }
    }
  });

  vm41.mount("#app41");
</script>`,
              jsCode: null,
              vueSFCCode: 
`<!-- 父元件 Parent.vue -->
<template>
  <!-- 這是外層元素的msg -->
  <p>{{ msg }}</p>

  <!-- 把父層的msg傳給子元件 -->
  <my-component :parent-msg="msg"></my-component>
</template>

<script setup>
import { ref } from "vue";
import MyComponent from "./VuejsPropsParentsChildDemo.vue";

const msg = ref("這是外層元件的msg");
</script>

<style scoped>
p {
  margin-top: 0;
}
</style>



<!-- 子元件 MyComponent.vue -->
<template>
  <div>
    <div>從props來的parentMsg ==> {{ parentMsg }}</div>
    <div>自己的msg ==> {{ innerMsg }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 接受父元件傳來的資料
defineProps({
  parentMsg: {
    type: String,
    required: true
  }
});

const innerMsg = ref("這是內層元件的msg");
</script>

<style scoped></style>`
            }
          }
        ]
      },
      {
        listTitle: "<code>props</code> 資料類型的驗證",
        listSubtitle: null,
        listComponent: defineAsyncComponent(() =>
          import("../../../components/WebNoteView/VuejsNoteView/VuejsPropsNote/VuejsPropsTypeValidationDemo.vue")
        ),
        listCode: {
          htmlCode: 
`<div id="app42">
  <input type="text" v-model="msg" placeholder="請輸入msg內容">
  <p>外層的msg：{{ msg }}</p>

  <ol>
    <li>
      單純的資料傳遞
      <simple-component :props-number="msg"></simple-component>
    </li>
    <li>
      替props指定資料格式
      <assign-type-component :props-number="msg"></assign-type-component>
    </li>
    <li>
      加上 <code>required: true</code>，若沒有 props，Vue 會在開發模式下顯示警告
      <required-assign-type-component></required-assign-type-component>
    </li>
    <li>
      替 props 指定預設值
      <set-props-default-component :props-number="msg || undefined"></set-props-default-component>
    </li>
    <li>
      自訂 props 驗證規則，只會在主控臺跳警告通知，不會報錯<br />
      <input type="text" v-model="msgForValidator" placeholder="請輸入 0 ~ 100"><br />
      輸入的值為 {{ msgForValidator }}
      <validator-component :props-number="Number(msgForValidator) || undefined"></validator-component>
    </li>
  </ol>
</div>

<script>
  const vm42 = Vue.createApp({
    data() {
      return {
        msg: "",
        msgForValidator: ""
      }
    }
  });

  vm42.component("simple-component", {` + "\n" +
'    template: `' + "\n" +
`      <div>從外層接受到的的msg： {{ propsNumber }}</div>` + "\n" +
'    `,' + "\n" +
`    props: ["propsNumber"]
  });

  vm42.component("assign-type-component", {` + "\n" +
'    template: `' + "\n" +
`      <div>指定type後，接受到的msg： {{ propsNumber }}</div>` + "\n" +
'    `,' + "\n" +
`    // props除了陣列寫法，也可以寫成物件（下方這樣）
    props: {
      "propsNumber": {
        type: [Number, String]  // 若只需要一個type，可寫作"type: Number"
      }
    }
  });

  vm42.component("required-assign-type-component", {` + "\n" +
'    template: `' + "\n" +
`      <div>接受到的msg：{{ propsNumber }}</div>` + "\n" +
'    `,' + "\n" +
`    props: {
      "propsNumber": {
        // required: true  // 先註解掉，不然一直報錯很煩
      }
    }
  });

  vm42.component("set-props-default-component", {` + "\n" +
'    template: `' + "\n" +
`      <div>這次轉帳的金額（若未輸入則顯示為0）： <b>{{ propsNumber }}</b> 元</div>` + "\n" +
'    `,' + "\n" +
`    props: {
      "propsNumber": {
        default: 0

        // 可以是陣列
        // default: [1,2,3]
              
        // 也可以是物件的預設內容
        // default: {
        //   msg: "Hello Vue3.0!"
        // }
      }
    }
  });

  vm42.component("validator-component", {` + "\n" +
'    template: `' + "\n" +
`      <div>指定type並加入驗證後，收到的msg：{{ propsNumber }}</div>` + "\n" +
'    `,' + "\n" +
`    props: {
      propsNumber: {
        type: Number,
        required: true,
        default: 0,
        validator: value => value >= 0 && value <= 100
      }
    }
  });

  vm42.mount("#app42");
</script>`,
          jsCode: null,
          vueSFCCode: 
`<!-- 把元件拆開成多個.vue檔（父元件＆子元件） -->

<!-- 父元件 VuejsPropsTypeValidationDemo.vue -->
<!-- 把元件拆開成多個.vue檔（父元件＆子元件） -->
<template>
  <input type="text" v-model="msg" placeholder="請輸入msg內容">
  <p>外層的 msg：{{ msg }}</p>

  <ol>
    <li>
      單純的資料傳遞
      <simple-component :props-number="msg"></simple-component>
    </li>
    <li>
      替props指定資料格式
      <assign-type-component :props-number="msg"></assign-type-component>
    </li>
    <li>
      加上 <code>required: true</code>，若沒有 props，Vue 會在開發模式下顯示警告
      <required-assign-type-component></required-assign-type-component>
    </li>
    <li>
      替 props 指定預設值
      <set-props-default-component :props-number="msg || undefined"></set-props-default-component>
    </li>
    <li>
      自訂 props 驗證規則，只會在主控臺跳警告通知，不會報錯<br />
      <input type="text" v-model="msgForValidator" placeholder="請輸入 0 ~ 100"><br />
      輸入的值為 {{ msgForValidator }}
      <validator-component :props-number="Number(msgForValidator) || undefined"></validator-component>
    </li>
  </ol>
</template>

<script setup>
import { ref } from "vue";
import SimpleComponent from "./VuejsPropsTypeValidationDemo/SimpleComponent.vue";
import AssignTypeComponent from "./VuejsPropsTypeValidationDemo/AssignTypeComponent.vue";
import RequiredAssignTypeComponent from "./VuejsPropsTypeValidationDemo/RequiredAssignTypeComponent.vue";
import SetPropsDefaultComponent from "./VuejsPropsTypeValidationDemo/SetPropsDefaultComponent.vue";
import ValidatorComponent from "./VuejsPropsTypeValidationDemo/ValidatorComponent.vue";

// 父元件資料
const msg = ref("");
const msgForValidator = ref("");
</script>

<style scoped>
li {
  margin-bottom: 12px;
  line-height: 1.6;
}
</style>





<!-- 子元件 SimpleComponent.vue -->
<template>
  <div>從外層接受到的的msg： {{ propsNumber }}</div>
</template>

<script setup>
defineProps(["propsNumber"]);
// 或是寫成
// defineProps({ propsNumber: {} });
</script>



<!-- 子元件 AssignTypeComponent.vue -->
<template>
  <div>指定type後，接受到的msg： {{ propsNumber }}</div>
</template>

<script setup>
defineProps({
  propsNumber: [Number, String]  // 若只需要一個type，可寫作"type: Number"
});
</script>



<!-- 子元件 RequiredAssignTypeComponent.vue -->
<template>
  <div>接受到的msg：{{ propsNumber }}</div>
</template>

<script setup>
defineProps({
  propsNumber: {
    // required: true  // 先註解掉，不然一直報錯很煩
  }
});
</script>



<!-- 子元件 SetPropsDefaultComponent.vue -->
<template>
  <div>這次轉帳的金額（若未輸入則顯示為0）： <b>{{ propsNumber }}</b> 元</div>
</template>

<script setup>
defineProps({
  propsNumber: {
    default: 0

    // 可以是陣列
    // default: [1,2,3]
            
    // 也可以是物件的預設內容
    // default: {
    //   msg: "Hello Vue3.0!"
    // }
  }
});
</script>



<!-- 子元件 ValidatorComponent.vue -->
<template>
  <div>指定type並加入驗證後，收到的msg： {{ propsNumber }}</div>
</template>

<script setup>
defineProps({
  propsNumber: {
    type: Number,
    required: true,
    default: 0,
    validator: value => value >= 0 && value <= 100
  }
});
</script>`
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
        listTitle: "以物件作為 <code>props</code> 傳遞",
        listSubtitle: "Vue 為單向資料流（one-way data flow），應避免子元件直接修改 <code>props</code>，所以先在本地複製一段 <code>props</code>。",
        listComponent: defineAsyncComponent(() =>
          import("../../../components/WebNoteView/VuejsNoteView/VuejsPropsNote/VuejsPropsPassObjectAsPropsDemo.vue")
        ),
        listCode: {
          htmlCode: 
`<div id="app44">
  <p>↓↓↓</p>
  <p>這裡是父元件，由 <code>v-for</code> 將父元件的 data 渲染出來。</p>
  <p>此處修改父元件 <code>props</code> 時子元件的「本地副本」不會自動跟著改，因為只是複製初始值。</p>
  <ul v-for="book in books" :key="book.id">
    <div class="test-input">
      <input type="text" v-model="book.name"> <sub class="text-muted">&lt;- 這行是拿來測試單向資訊流</sub><br />
      <input type="text" v-model="book.author"> <sub class="text-muted">&lt;- 這行是拿來測試單向資訊流</sub><br />
      <input type="text" v-model="book.publishedAt"> <sub class="text-muted">&lt;- 這行是拿來測試單向資訊流</sub>
    </div>
    <div class="test-output">
      <li>書名：{{ book.name }}</li>
      <li>作者：{{ book.author }}</li>
      <li>出版日期：{{ book.publishedAt }}</li>
    </div>
  </ul>
  <hr />
  <p>這裡是子元件 <code>&lt;my-component&gt;</code>，透過在本地複製一份 <code>props</code> 資訊，來避免直接修改父元件傳來的 <code>props</code>。（若希望父元件修改時，子元件內容跟著改，可用 <code>watch</code> 監聽 <code>props</code>，讓本地副本跟著更新，此處未示範）</p>
  <my-component
    v-for="book in books"
    :name="book.name"
    :author="book.author"
    :published-at="book.publishedAt"></my-component>
  <!-- 上面<my-component>也可以寫成以下這樣，Vue.js會自動解構 -->
  <!-- <my-component
    v-for="book in books"
    v-bind="book"></my-component> -->
</div>

<script>
  const vm44 = Vue.createApp({
    data() {
      return {
        books: [
          {
            id: "a00001",
            name: "D3.js資料視覺化實用攻略：完整掌握Web開發技術，繪製互動式圖表不求人",
            author: "金筠婷",
            publishedAt: "2023/06/16"
          },
          {
            id: "a00002",
            name: "重新認識Vue.js：008天絕對看不完的Vue.js 3指南",
            author: "許國政",
            publishedAt: "2021/02/09"
          },
          {
            id: "a00003",
            name: "第三本書？",
            author: "作者？",
            publishedAt: "哪天出版？"
          }
        ]
      }
    }
  });

  vm44.component("my-component", {
    props: ["name", "author", "publishedAt"],
    data() {  // 在本地建立一份data，以避免更改props
      return {
        localName: this.name,
        localAuthor: this.author,
        localPublishedAt: this.publishedAt
      };
    },` + "\n" +
'    template: `' + "\n" +
`      <div>
        <div>書名：<input type="text" v-model="localName"> <sub class="text-muted">&lt;- 這行是拿來測試單向資訊流</sub></div>
        <div>作者：<input type="text" v-model="localAuthor"> <sub class="text-muted">&lt;- 這行是拿來測試單向資訊流</sub></div>
        <div>出版日期：<input type="text" v-model="localPublishedAt"> <sub class="text-muted">&lt;- 這行是拿來測試單向資訊流</sub></div>
      </div>` + "\n" +
'    `' + "\n" +
`  });

  vm44.mount("#app44");
</script>`,
          jsCode: null,
          vueSFCCode: 
`<!-- 父元件 VuejsPropsPassObjectAsPropsDemo.vue -->
<template>
  <p>↓↓↓</p>
  <p>這裡是父元件，由 <code>v-for</code> 將父元件的 data 渲染出來。</p>
  <p>此處修改父元件 <code>props</code> 時子元件的「本地副本」不會自動跟著改，因為只是複製初始值。</p>
  <ul v-for="book in books" :key="book.id">
    <div class="test-input">
      <input type="text" v-model="book.name"> <sub>&lt;- 這行是拿來測試單向資訊流</sub><br />
      <input type="text" v-model="book.author"> <sub>&lt;- 這行是拿來測試單向資訊流</sub><br />
      <input type="text" v-model="book.publishedAt"> <sub>&lt;- 這行是拿來測試單向資訊流</sub>
    </div>
    <div class="test-output">
      <li>書名：{{ book.name }}</li>
      <li>作者：{{ book.author }}</li>
      <li>出版日期：{{ book.publishedAt }}</li>
    </div>
  </ul>
  <hr />
  <p>這裡是子元件 <code>&lt;my-component&gt;</code>，透過在本地複製一份 <code>props</code> 資訊，來避免直接修改父元件傳來的 <code>props</code>。（若希望父元件修改時，子元件內容跟著改，可用 <code>watch</code> 監聽 <code>props</code>，讓本地副本跟著更新，此處未示範）</p>
  <my-component
    v-for="book in books"
    :name="book.name"
    :author="book.author"
    :published-at="book.publishedAt"></my-component>
  <!-- 上面<my-component>也可以寫成以下這樣，Vue.js會自動解構 -->
  <!-- <my-component
    v-for="book in books"
    v-bind="book"></my-component> -->
</template>

<script setup>
import { ref } from "vue";
import MyComponent from "./VuejsPropsPassObjectAsPropsDemo/MyComponent.vue";

const books = ref([
  {
    id: "a00001",
    name: "D3.js資料視覺化實用攻略：完整掌握Web開發技術，繪製互動式圖表不求人",
    author: "金筠婷",
    publishedAt: "2023/06/16"
  },
  {
    id: "a00002",
    name: "重新認識Vue.js：008天絕對看不完的Vue.js 3指南",
    author: "許國政",
    publishedAt: "2021/02/09"
  },
  {
    id: "a00003",
    name: "第三本書？",
    author: "作者？",
    publishedAt: "哪天出版？"
  }
]);
</script>

<style scoped>
p {
  margin-top: 0;
}

ul {
  margin-top: 32px;
  margin-bottom: 32px;
}
</style>



<!-- 子元件 MyComponent.vue -->
<template>
  <div class="my-component-book">
    <div>書名：<input type="text" v-model="localName"> <sub>&lt;- 這行是拿來測試單向資訊流</sub></div>
    <div>作者：<input type="text" v-model="localAuthor"> <sub>&lt;- 這行是拿來測試單向資訊流</sub></div>
    <div>出版日期：<input type="text" v-model="localPublishedAt"> <sub>&lt;- 這行是拿來測試單向資訊流</sub></div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  name: String,
  author: String,
  publishedAt: String
});

// 在本地建立一份data，以避免更改props
const localName = ref(props.name);
const localAuthor = ref(props.author);
const localPublishedAt = ref(props.publishedAt);
</script>

<style scoped>
.my-component-book {
  margin-top: 24px;
  margin-bottom: 8px;
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
        listTitle: "<code>props</code> 與遞迴元件（Recursive Component）",
        listSubtitle: "過去使用遞迴元件必須要有 <code>name</code> 屬性。然而在 Vue 3（尤其是 SFC + <code>&lt;script setup&gt;</code> 的寫法）中，這個要求就放寬了，不是必要的，但建議保留。",
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: "階層式選單資訊",
            detailSubtitle: "樹狀結構（tree view）的 Vue 實作",
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/VuejsNoteView/VuejsPropsNote/VuejsPropsRecursiveComponentDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<style>
  #app45 h2:hover {
    color: lightcoral;
    cursor: pointer;
  }
</style>

<div id="app45">
  <!-- Magic! -->
  <menu-component
    :title="app45Data.title"
    :child="app45Data.childNodes"></menu-component>
</div>

<script>
  const app45Data = {
    title: '好書推薦',
    childNodes: [{
      title: 'Git',
      url: null,
      childNodes: [{
        title: '為你自己學 Git',
        url: 'https://www.tenlong.com.tw/products/9789864342662'
      }]
    },
    {
      title: '前端開發',
      url: null,
      childNodes: [{
        title: '金魚都能懂的 CSS 選取器',
        url: 'https://www.tenlong.com.tw/products/9789864344994'
      },
      {
        title: '0 陷阱！0 誤解！8 天重新認識 JavaScript！',
        url: 'https://www.tenlong.com.tw/products/9789864344130'
      },
      {
        title: '讓 TypeScript 成為你全端開發的 ACE！',
        url: 'https://www.tenlong.com.tw/products/9789864344895'
      },
      ]
    },
    {
      title: 'IoT',
      url: null,
      childNodes: [{
        title: 'IoT沒那麼難！新手用 JavaScript 入門做自己的玩具！',
        url: 'https://www.tenlong.com.tw/products/9789864345328'
      }]
    },
    {
      title: 'Chatbot',
      url: null,
      childNodes: [{
        title: '人人可作卡米狗：從零打造自己的 LINE 聊天機器人',
        url: 'https://www.tenlong.com.tw/products/9789864342938'
      }]
    }]
  };

  const vm45 = Vue.createApp({
    data() {
      return {
        app45Data
      }
    }
  });

  vm45.component("menu-component", {` + "\n" +
'    name: `MenuComponent`,  // 必備的，不然Vue不知道<menu-component>這標籤應該對應誰' + "\n" +
`    props: {
      title: String,
      url: String,
      child: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        isOpen: false
      }
    },` + "\n" +
'    template: `' + "\n" +
`      <ul>
        <li>
          <template v-if="child.length > 0">
            <h2
              :class="{ 'is-open': isOpen}"
              @click="isOpen = !isOpen">{{ title }}</h2>
            <menu-component
              v-show="isOpen"
              v-for="c in child"
              :key="c.name"
              :title="c.name"
              :child="c.childNodes"
              :url="c.url"></menu-component>
          </template>
          <!-- 下層已經沒有chileNodes了，表示是最後一層，直接渲染連結 -->
          <a :href="url" target="_blank" v-else>{{ title }}</a>
        </li>
      </ul>` + "\n" +
'    `' + "\n" +
`  });

  vm45.mount("#app45");
</script>`,
              jsCode: null,
              vueSFCCode: 
`<!-- 父元件 VuejsPropsRecursiveComponentDemo.vue -->
<template>
  <!-- Magic! -->
  <menu-component
    :title="recursiveComponentData.title"
    :child="recursiveComponentData.childNodes"></menu-component>
</template>

<script setup>
import MenuComponent from "./VuejsPropsRecursiveComponentDemo/MenuComponent.vue";

const recursiveComponentData = {
  title: '好書推薦',
  childNodes: [
    {
      title: 'Git',
      url: null,
      childNodes: [
        {
          title: '為你自己學 Git',
          url: 'https://www.tenlong.com.tw/products/9789864342662'
        }
      ]
    },
    {
      title: '前端開發',
      url: null,
      childNodes: [
        {
          title: '金魚都能懂的 CSS 選取器',
          url: 'https://www.tenlong.com.tw/products/9789864344994'
        },
        {
          title: '0 陷阱！0 誤解！8 天重新認識 JavaScript！',
          url: 'https://www.tenlong.com.tw/products/9789864344130'
        },
        {
          title: '讓 TypeScript 成為你全端開發的 ACE！',
          url: 'https://www.tenlong.com.tw/products/9789864344895'
        },
      ]
    },
    {
      title: 'IoT',
      url: null,
      childNodes: [
        {
          title: 'IoT沒那麼難！新手用 JavaScript 入門做自己的玩具！',
          url: 'https://www.tenlong.com.tw/products/9789864345328'
        }
      ]
    },
    {
      title: 'Chatbot',
      url: null,
      childNodes: [
        {
          title: '人人可作卡米狗：從零打造自己的 LINE 聊天機器人',
          url: 'https://www.tenlong.com.tw/products/9789864342938'
        }
      ]
    }
  ]
};
</script>

<style scoped></style>



<!-- 子元件 MenuComponent.vue -->
<template>
  <ul>
    <li>
      <template v-if="child.length > 0">
        <h3
          :class="{ 'is-open': isOpen}"
          @click="isOpen = !isOpen"
        >
          {{ title }}
        </h3>
        <menu-component
          v-show="isOpen"
          v-for="c in child"
          :key="c.title"
          :title="c.title"
          :child="c.childNodes"
          :url="c.url"
        ></menu-component>
      </template>
      <!-- 下層已經沒有chileNodes了，表示是最後一層，直接渲染連結 -->
      <a v-else :href="url" target="_blank">{{ title }}</a>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  title: String,
  url: String,
  child: {
    type: Array,
    default: []
  }
});

const isOpen = ref(false);

// 在Vue SFC中指定元件名稱（方便 DevTools 與 遞迴 用）
// 如果不寫defineOptions，Vue會用檔名"MenuComponent.vue"來顯示
// 基本上也能正常運作，但在 遞迴 或 DevTools debug 上，寫name會更直覺
defineOptions({
  name: "MenuComponent"
});
</script>

<style scoped>
h3:hover {
  color: lightcoral;
  cursor: pointer;
}
</style>`
            }
          }
        ]
      },
      {
        listTitle: "元件與自訂事件",
        listSubtitle: 
`<strong style="border: 1.5px solid #9abcaa; padding: 1.5px 3px;">Props in, Event out</strong>——父層元件 data 透過 <code>props</code> 傳入子層，而子層透過 <code>event</code> 來觸發父層狀態的更新。
<div style="
  background-color: antiquewhite;
  margin-top: 16px;
  padding: 8px;
">
  <h5>下列範例 code 說明：</h5>
  <p style="text-indent: 32px;">這段代碼繞了一個圈，實現了合法的父子組件數據交互，遵守了 Vue.js 的 <strong>單向數據流</strong> 原則。具體來說，這段代碼的流程是：</p>
  <ol>
    <li>
      <p><strong>父元件的數據流</strong>：</p>
      <ul>
        <li>在父元件中，定義了 <code>books</code> 陣列作為其數據，這些數據會以 <code>props</code> 的形式傳遞給子元件 <code>&lt;my-component&gt;</code> 。</li>
      </ul>
    </li>
    <li>
      <p><strong>子元件的操作</strong>：</p>
      <ul>
        <li>子元件 <code>&lt;my-component&gt;</code> 收到父元件傳遞的 <code>props</code>，在本地 <code>data</code> 建立一份 <code>bookInfo</code>，並通過 <code>v-model</code> 雙向綁定（<code>bookInfo.name</code>、<code>bookInfo.author</code>和<code>bookInfo.publishedAt</code>）來處理表單輸入。</li>
        <li>當用戶在輸入框中修改書籍資訊時，<code>bookInfo</code> 物件的內容會發生變化。亦即，當使用者改 input → 修改 <code>bookInfo</code>。</li>
      </ul>
    </li>
    <li>
      <p><strong>觸發事件通知父元件</strong>：</p>
      <ul>
        <li>在 <code>&lt;my-component&gt;</code> 中使用 <code>watch</code> 監聽 <code>bookInfo</code> 物件的變化，並且設置 <code>deep: true</code>，這樣 Vue 就會深層監聽 <code>bookInfo</code> 物件內的屬性變化。</li>
        <li>每當 <code>bookInfo</code> 中的任一屬性發生改變時，<code>watch</code> 會觸發 <code>handler</code> 函數，並且這個函數會使用 <code>$emit</code> 發射一個名為 <code>update</code> 的自定義事件，將新的 <code>bookInfo</code> 數據傳遞給父元件（即用 <code>$emit("update", val)</code> 把新的 <code>bookInfo</code> 傳回給父元件）。</li>
      </ul>
    </li>
    <li>
      <p><strong>父元件接收事件並更新數據</strong>：</p>
      <ul>
        <li>在父元件中，<code>&lt;my-component&gt;</code> 綁定了 <code>@update="updateInfo"</code>，即當 <code>update</code> 事件發生時，會調用 <code>updateInfo</code> 方法。</li>
        <li><code>updateInfo</code> 方法會接受傳來的 <code>val</code>（更新後的書籍數據），然後使用 <code>findIndex</code> 方法查找對應的書籍並更新 <code>books</code> 陣列中的數據。 → 保持 <strong>單向數據流</strong></li>
      </ul>
    </li>
  </ol>
  <h5>這樣做的目的：</h5>
  <ol>
    <li>
      <strong>單向數據流</strong>：父元件通過 <code>props</code> 向子元件傳遞數據，子元件不直接修改父元件的數據，而是通過發射自定義事件告訴父元件更新數據，這符合 Vue 的數據流規範。
    </li>
    <li>
      <strong>避免直接修改父數據</strong>：Vue 不建議子元件直接修改父元件的數據，這樣會使得數據流變得難以追蹤和維護。通過這種方式（發射事件），可以讓父元件來更新自己的數據，保證數據流的可預測性和一致性。
    </li>
  </ol>
  <h5>總結：</h5>
  <p>這段 code 遵循了 Vue 的單向數據流原則，使用了自定義事件（<code>update</code>）來讓子元件向父元件發送更新，從而合法地修改父元件的數據。這樣設計使得應用的數據管理更加清晰且易於維護。</p>
</div>`,
        listComponent: defineAsyncComponent(() =>
          import("../../../components/WebNoteView/VuejsNoteView/VuejsPropsNote/VuejsPropsAndCustomEventDemo.vue")
        ),
        listCode: {
          htmlCode: 
`<div id="app46">
  <ul v-for="(book, idx) in books" :key="book.id">
    <li>{{ book.name }}</li>
    <li>{{ book.author }}</li>
    <li>{{ book.publishedAt }}</li>
  </ul>

  <!-- 直接將v-for物件作為props傳遞 -->
  <!-- 並監聽自定義事件（此處update為自訂義事件） -->
  <my-component
    v-for="(book, idx) in books"
    :key="idx"
    v-bind="book"
    @update="updateInfo"></my-component>
</div>

<script>
  const vm46 = Vue.createApp({
    data() {
      return {
        books: [
          {
            id: "a00001",
            name: "D3.js資料視覺化實用攻略：完整掌握Web開發技術，繪製互動式圖表不求人",
            author: "金筠婷",
            publishedAt: "2023/06/16"
          },
          {
            id: "a00002",
            name: "重新認識Vue.js：008天絕對看不完的Vue.js 3指南",
            author: "許國政",
            publishedAt: "2021/02/09"
          }
        ]
      }
    },
    methods: {
      updateInfo(val) {
        const idx = this.books.findIndex(d => d.id === val.id);
        this.books[idx] = val;
      }
    }
  });

  vm46.component("my-component", {` + "\n" +
'    template: `' + "\n" +
`      <div>
        <div>書名： <input type="text" v-model="bookInfo.name"></div>
        <div>作者： <input type="text" v-model="bookInfo.author"></div>
        <div>出版日期： <input type="text" v-model="bookInfo.publishedAt"></div>
      </div>` + "\n" +
'    `,' +
`    props: ["id","name", "author", "publishedAt"],
    data() {
      return {
        bookInfo: {
          id: this.id,
          name: this.name,
          author: this.author,
          publishedAt: this.publishedAt
        }
      }
    },
    watch: {
      bookInfo: {
        // 注意！bookInfo物件必須加上deep: true
        // Vue才能做物件的深層更新偵測（偵測物件內部所有層次的屬性變化）
        deep: true,
        handler(val) {
          this.$emit("update", val);  // 當watch事件觸發，發射"update"事件
        }
      }
    }
  })

  vm46.mount("#app46")
</script>`,
          jsCode: null,
          vueSFCCode: 
`<!-- 父元件 VuejsPropsAndCustomEventDemo.vue -->
<template>
  <ul v-for="(book, idx) in books" :key="book.id">
    <li>{{ book.name }}</li>
    <li>{{ book.author }}</li>
    <li>{{ book.publishedAt }}</li>
  </ul>

  <!-- 直接將v-for物件作為props傳遞 -->
  <!-- 並監聽自定義事件（此處update為自訂義事件） -->
  <my-component
    v-for="(book, idx) in books"
    :key="idx"
    v-bind="book"
    @update="updateInfo"
  ></my-component>
</template>

<script setup>
import { ref } from "vue";
import MyComponent from "./VuejsPropsAndCustomEventDemo/MyComponent.vue";

const books = ref([
  {
    id: "a00001",
    name: "D3.js資料視覺化實用攻略：完整掌握Web開發技術，繪製互動式圖表不求人",
    author: "金筠婷",
    publishedAt: "2023/06/16"
  },
  {
    id: "a00002",
    name: "重新認識Vue.js：008天絕對看不完的Vue.js 3指南",
    author: "許國政",
    publishedAt: "2021/02/09"
  }
]);

function updateInfo(val) {
  const idx = books.value.findIndex(d => d.id === val.id);
  books.value[idx] = val;
};
</script>

<style scoped>
ul {
  margin-bottom: 32px;
}
</style>



<!-- 子元件 MyComponent.vue -->
<template>
  <div class="book-item">
    <div>書名： <input type="text" v-model="bookInfo.name"></div>
    <div>作者： <input type="text" v-model="bookInfo.author"></div>
    <div>出版日期： <input type="text" v-model="bookInfo.publishedAt"></div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps(["id", "name", "author", "publishedAt"]);

const bookInfo = ref({
  id: props.id,
  name: props.name,
  author: props.author,
  publishedAt: props.publishedAt
});

// Composition API中，要先明確宣告要用哪些事件
const emit = defineEmits(["update"]);

// 深度監聽物件 → 當任何屬性變更，emit給父層
watch(bookInfo, (val) => {
  emit("update", val);  // 當watch事件觸發，發射"update"事件
},
// 注意！bookInfo物件必須加上deep: true
// Vue才能做物件的深層更新偵測（偵測物件內部所有層次的屬性變化）
{ deep: true });
</script>

<style scoped>
.book-item {
  margin-bottom: 16px;
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
        listTitle: "<code>v-model</code> 與元件的雙向綁定",
        listSubtitle: "<strong>不會違反單向數據流</strong> ，因為 <code>v-model</code> 只是 <code>props</code> + <code>emit</code> 的語法糖，底層仍然是 <strong>單向數據流</strong> + <strong>自訂事件</strong>。",
        listComponent: defineAsyncComponent(() =>
          import("../../../components/WebNoteView/VuejsNoteView/VuejsPropsNote/VuejsPropsVModelDemo.vue")
        ),
        listCode: {
          htmlCode: 
`<div id="app47">
  <h4>{{ message }}</h4>

  <!-- 透過v-model來做到父子元件間的「雙向綁定」 -->
  <custom-input v-model="message"></custom-input>
  <!-- 上一行實際上等於下一行，為下一行的語法糖 -->
  <!-- <custom-input :modelValue="message" @update:modelValue="message = $event"></custom-input> -->
</div>

<script>
  const vm47 = Vue.createApp({
    data() {
      return {
        message: "Hello World!"
      }
    }
  });

  // 子元件<custom-input>
  vm47.component("custom-input", {
    props: ["modelValue"],  // modelValue是Vue 3 v-model預設對應的prop名稱，但要使用的話仍要明確宣告` + "\n" +
'    template: `' + "\n" +
`      <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)">` + "\n" +
'    `' + "\n" +
`  });

  vm47.mount("#app47");
</script>`,
          jsCode: null,
          vueSFCCode: 
`<!-- 父元件 VuejsPropsVModelDemo.vue -->
<template>
  <p>{{ message }}</p>

  <!-- 透過v-model來做到父子元件間的「雙向綁定」 -->
  <!-- "modelValue"是Vue 3 v-model預設對應的prop名稱 -->
  <!-- 若想使用多個v-model prop或非modelValue，就必須使用"v-model:其他名稱" -->
  <custom-input v-model="message"></custom-input>
  <!-- 上一行實際上等於下一行，為下一行的簡寫 -->
   <!-- <custom-input v-model:modelValue="message"></custom-input> -->
  <!-- 上一行實際上等於下一行，為下一行的語法糖 -->
  <!-- <custom-input :modelValue="message" @update:modelValue="message = $event"></custom-input> -->
</template>

<script setup>
import { ref } from "vue";
import CustomInput from "./VuejsPropsVModelDemo/CustomInput.vue";

const message = ref("Hello World!");
</script>

<style scoped>
p {
  font-size: 28px;
  margin-top: 0;
}
</style>



<!-- 子元件 CustomInput.vue -->
<template>
  <input
    :value="modelValue"
    @input="onInput"
  >
</template>

<script setup>
// 定義props（接收父元件傳入的值）
const props = defineProps(["modelValue"]);

// 定義emit（發送事件給父元件）
const emit = defineEmits(["update:modelValue"]);

// 處理input事件
function onInput(e) {
  emit("update:modelValue", e.target.value)
};
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
        listTitle: "跨越層級的傳遞方式<small>（透過 <code>provide</code> 與 <code>inject</code>）</small>",
        listSubtitle: 
`<ul style="line-height: 1.6;">
  <li><code>props</code> / <code>emit</code> 是 <strong>標準溝通方式</strong>。 → 清楚、明確、好維護</li>
  <li><code>provide</code> / <code>inject</code> 是 <strong>進階用法</strong>，專門解決「深層級或跨層級」的情境。 → 方便，但隱性依賴較多</li>
  <li>Pinia（或 Vuex） 是 <strong>狀態管理工具</strong> ，處理更大規模共享狀態。</li>
</ul>`,
        listComponent: defineAsyncComponent(() =>
          import("../../../components/WebNoteView/VuejsNoteView/VuejsPropsNote/VuejsPropsProvideAndInjectDemo.vue")
        ),
        listCode: {
          htmlCode: 
`<div id="app48">
  輸入一些文字，看看底下的變化：<br />
  <input type="text" v-model="msg"><br />
  父層資料： {{ msg }}
  <list-component></list-component>
</div>

<script>
  const vm48 = Vue.createApp({
    data() {
      return {
        msg: "Hello Vue.js!"
      };
    },
    provide() {
      // 將this.msg透過provide傳遞出去
      return {
        // 只是這樣寫的話，當父層資料更動，子孫元件不會跟著動
        provideMsg1: this.msg,

        // 使用Vue.computed()進行包裝，才會跟著連動
        provideMsg2: Vue.computed(() => this.msg)
      };
    }
  });

  vm48.component("list-component", {` + "\n" +
'    template: `' + "\n" +
`      <ul>
        <li v-for="i in 3">
          用 <code>v-for</code> 跑出３次一樣的孫元件，這是第 {{ i }} 次
          <list-item></list-item>
        </li>
      </ul>` + "\n" +
'    `,' + "\n" +
`    components: {
      "list-item": {
        inject: ["provideMsg1", "provideMsg2"],` + "\n" +
'        template: `' + "\n" +
`          <div>provideMsg1: {{ provideMsg1 }} <small>→ 非響應式</small></div>
          <div>provideMsg2: {{ provideMsg2 }} <small>→ 響應式（用 <code>computed()</code>）</small></div>` + "\n" +
'        `' + "\n" +
`      }
    }
  });

  vm48.mount("#app48");
</script>`,
          jsCode: null,
          vueSFCCode: 
`<!-- 父元件 VuejsPropsProvideAndInjectDemo.vue -->
<template>
  輸入一些文字，看看底下的變化：<br />
  <input type="text" v-model="msg"><br />
  父層資料： {{ msg }}
  <list-component></list-component>
</template>

<script setup>
import { ref, provide, computed } from "vue";
import ListComponent from "./VuejsPropsProvideAndInjectDemo/ListComponent.vue";

const msg = ref("Hello Vue.js!");

// 透過provide()，提供資料給子孫元件
provide("provideMsg1", msg.value)  // 只是這樣寫的話，當父層資料更動，子孫元件不會跟著動
provide("provideMsg2", computed(() => msg.value));  // 使用Vue.computed()進行包裝，才會跟著連動
</script>

<style scoped>
input {
  margin-top: 12px;
  padding: 4px;
  margin-bottom: 4px;
}
</style>





<!-- 子元件 ListComponent.vue -->
<template>
  <ul>
    <li v-for="i in 3">
      用 <code>v-for</code> 跑出３次一樣的孫元件，這是第 {{ i }} 次
      <list-item></list-item>
    </li>
  </ul>
</template>

<script setup>
import ListItem from "./ListItem.vue";
</script>

<style scoped>
li {
  margin-top: 12px;
  margin-bottom: 12px;
}
</style>





<!-- 孫元件 ListItem.vue -->
<template>
  <div>provideMsg1: {{ provideMsg1 }} <small>→ 非響應式</small></div>
  <div>provideMsg2: {{ provideMsg2 }} <small>→ 響應式（用 <code>computed()</code>）</small></div>
</template>

<script setup>
import { inject } from "vue";

// 用inject()拿資料
const provideMsg1 = inject("provideMsg1");
const provideMsg2 = inject("provideMsg2");
</script>

<style scoped>
small {
  margin-left: 8px;
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
    id: "vuejsVBindIsNote",
    title: "動態元件的管理",
    description: "包含「<code>v-bind:is</code> 與動態元件」、「<code>&lt;keep-alive&gt;</code>」。",
    descriptionComponent: null,
    descriptionComponentStyle: null,
    lists: [
      {
        listTitle: "<code>v-bind:is</code> 與動態元件（Dynamic Component）",
        listSubtitle: '使用 <code>&lt;component :is="currentTabComponent"&gt;&lt;/component&gt;</code>。',
        listComponent: defineAsyncComponent(() =>
          import("../../../components/WebNoteView/VuejsNoteView/VuejsVBindIsNote/VuejsDynamicComponentDemo.vue")
        ),
        listCode: {
          htmlCode: 
`<div id="app49">
  <button
    v-for="tab in tabs"
    :key="tab"
    :class="['tab-button', { active: currentTab === tab}]"
    @click="currentTab = tab"
  >
    {{ tab }}
  </button>

  <!-- 動態元件切換 -->
  <component :is="currentTabComponent"></component>
</div>

<script>
  const vm49 = Vue.createApp({
    data() {
      return {
        currentTab: "Home",
        tabs: ["Home", "Posts", "Archive"]
      };
    },
    computed: {
      currentTabComponent() {` + "\n" +
'        return `tab-${ this.currentTab.toLowerCase() }`;' + "\n" +
`      }
    }
  });

  vm49.component("tab-home", {` + "\n" +
'    template: `<div class="demo-tab">Home component</div>`' + "\n" +
`  });

  vm49.component("tab-posts", {` + "\n" +
'    template: `<div class="demo-tab">Post component</div>`' + "\n" +
`  });

  vm49.component("tab-archive", {` + "\n" +
'    template: `<div class="demo-tab">Archive component</div>`' + "\n" +
`  });

  vm49.mount("#app49");
</script>

<style>
  .demo-tab {
    padding: 10px;
    border: 1px solid #cccccc;
    margin-top: -0.5px;
  }

  .tab-button {
    padding: 6px 10px;
    border: 1px solid #cccccc;
    background: #f0f0f0;
    margin-bottom: -1px;
  }

  .tab-button:hover{
    background: #e4e4e4;
    color: #0a0a0a
  }

  .tab-button.active {
    background: #d8d8d8;
    color: #0a0a0a
  }
</style>`,
          jsCode: null,
          vueSFCCode: 
`<!-- 父元件 VuejsDynamicComponentDemo.vue -->
<template>
  <button
    v-for="tab in tabs"
    :key="tab"
    :class="['tab-button', { active: currentTab === tab}]"
    @click="currentTab = tab"
  >
    {{ tab }}
  </button>

  <!-- 動態元件切換 -->
  <!-- 加一個tab-wrapper，否則css選擇器抓不到子元件的DOM（<component>不是實際DOM） -->
  <div class="tab-wrapper">
    <component :is="currentTabComponent"></component>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import TabHome from "./VuejsDynamicComponentDemo/TabHome.vue";
import TabPosts from "./VuejsDynamicComponentDemo/TabPosts.vue";
import TabArchive from "./VuejsDynamicComponentDemo/TabArchive.vue";

const currentTab = ref("Home");
const tabs = ref(["Home", "Posts", "Archive"]);

// 根據currentTab切換元件
const currentTabComponent = computed(() => {
  switch (currentTab.value) {
    case "Home": 
      return TabHome;
    case "Posts":
      return TabPosts;
    case "Archive":
      return TabArchive;
    default:
      return TabHome;
  };
});
</script>

<style scoped>
::v-deep(.demo-tab) {
  padding: 10px;
  border: 1px solid #cccccc;
  margin-top: -0.5px;
}

.tab-button {
  padding: 6px 10px;
  border: 1px solid #cccccc;
  background: #f0f0f0;
  margin-bottom: -1px;
  cursor: pointer;
}

.tab-button:hover{
  background: #e4e4e4;
  color: #0a0a0a
}

.tab-button.active {
  background: #d8d8d8;
  color: #0a0a0a
}
</style>





<!-- 子元件 TabHome.vue -->
<template>
  <div class="demo-tab">Home component</div>
</template>


<!-- 子元件 TabPosts.vue -->
<template>
  <div class="demo-tab">Post component</div>
</template>


<!-- 子元件 TabArchive.vue -->
<template>
  <div class="demo-tab">Archive component</div>
</template>`
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
        listTitle: "<code>&lt;keep-alive&gt;</code> 保留元件狀態",
        listSubtitle: 
`<ul style="line-height: 1.6;">
  <li>過去遇到這狀況，會將 <code>v-if</code> 改成 <code>v-show</code> 以避開元件銷毀與重建。</li>
  <li>現在改用 <code>:is</code>（即 <code>v-bind:is</code>）來動態切換元件後，用 <code>&lt;keep-alive&gt;</code> 標籤包住，即可保留切換後的元素狀態。</li>
  <li>
    <code>&lt;keep-alive&gt;</code> 有 <code>include</code>、<code>exclude</code>、<code>max</code> 等屬性可以用。<code>include</code> 可針對某部分的子元件進行暫存快取；<code>exclude</code> 排除某些子元件有 <code>&lt;keep-alive&gt;</code> 效果，<code>max</code> 則可指定瀏覽器暫存的元件數量。
    <div style="color: rgba(33, 37, 41, 0.75); font-size: 12px; font-style: italic; margin-top: 4px;">
      - 註：在 Vue Option API 中，<code>include</code>、<code>exclude</code>、<code>max</code> 等屬性對應的是子元件的 <code>name</code> 屬性，而非子元件的標籤名。
    </div>
  </li>
</ul>`,
        listComponent: defineAsyncComponent(() =>
          import("../../../components/WebNoteView/VuejsNoteView/VuejsVBindIsNote/VuejsDynamicComponentKeepAliveDemo.vue")
        ),
        listCode: {
          htmlCode: 
`<div id="app50">
  <button
    v-for="tab in tabs"
    :key="tab"
    :class="['tab-button', { active: currentTab === tab}]"
    @click="currentTab = tab">
    {{ tab }}
  </button>
  <keep-alive>
    <component :is="currentTabComponent"></component>
  </keep-alive>
</div>

<script>
  const vm50 = Vue.createApp({
    data() {
      return {
        currentTab: "Home",
        tabs: ["Home", "Posts", "Archive"]
      };
    },
    computed: {
      currentTabComponent() {` + "\n" +
'        return `tab-${ this.currentTab.toLowerCase() }`;' + "\n" +
`      }
    }
  });

  vm50.component("tab-home", {
    name: "tab-home",` + "\n" +
'    template: `<div class="demo-tab"><input v-model="title"></div>`,' + "\n" +
`    data() {
      return {
        title: "Home component"
      };
    }
  });

  vm50.component("tab-posts", {
    name: "tab-posts",` + "\n" +
'    template: `<div class="demo-tab"><input v-model="title"></div>`,' + "\n" +
`    data() {
      return {
        title: "Post component"
      };
    }
  });

  vm50.component("tab-archive", {
    name: "tab-archive",` + "\n" +
'    template: `<div class="demo-tab"><input v-model="title"></div>`,' + "\n" +
`    data() {
      return {
        title: "Archive component"
      };
    }
  });

  vm50.mount("#app50");
</script>

<style>
  .demo-tab {
    padding: 10px;
    border: 1px solid #cccccc;
    margin-top: -0.5px;
  }

  .tab-button {
    padding: 6px 10px;
    border: 1px solid #cccccc;
    background: #f0f0f0;
    margin-bottom: -1px;
  }

  .tab-button:hover{
    background: #e4e4e4;
    color: #0a0a0a
  }

  .tab-button.active {
    background: #d8d8d8;
    color: #0a0a0a
  }
</style>`,
          jsCode: null,
          vueSFCCode: 
`<!-- 父元件 VuejsDynamicComponentKeepAliveDemo.vue -->
<template>
  <button
    v-for="tab in tabs"
    :key="tab"
    :class="['tab-button', { active: currentTab === tab}]"
    @click="currentTab = tab"
  >
    {{ tab }}
  </button>

  <!-- 動態元件切換 -->
  <!-- 加一個tab-wrapper，否則css選擇器抓不到子元件的DOM（<component>不是實際DOM） -->
  <div class="tab-wrapper">
    <keep-alive>
      <component :is="currentTabComponent"></component>
    </keep-alive>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import TabHome from "./VuejsDynamicComponentKeepAliveDemo/TabHome.vue";
import TabPosts from "./VuejsDynamicComponentKeepAliveDemo/TabPosts.vue";
import TabArchive from "./VuejsDynamicComponentKeepAliveDemo/TabArchive.vue";

const currentTab = ref("Home");
const tabs = ref(["Home", "Posts", "Archive"]);

// 根據currentTab切換元件
const currentTabComponent = computed(() => {
  switch (currentTab.value) {
    case "Home": 
      return TabHome;
    case "Posts":
      return TabPosts;
    case "Archive":
      return TabArchive;
    default:
      return TabHome;
  };
});
</script>

<style scoped>
.tab-wrapper ::v-deep(.demo-tab) {
  padding: 10px;
  border: 1px solid #cccccc;
  margin-top: -0.5px;
}

.tab-button {
  padding: 6px 10px;
  border: 1px solid #cccccc;
  background: #f0f0f0;
  margin-bottom: -1px;
  cursor: pointer;
}

.tab-button:hover{
  background: #e4e4e4;
  color: #0a0a0a
}

.tab-button.active {
  background: #d8d8d8;
  color: #0a0a0a
}
</style>





<!-- 子元件 TabHome.vue -->
<template>
  <div class="demo-tab"><input v-model="title"></div>
</template>

<script setup>
import { ref } from "vue";

const title = ref("Home component");
</script>


<!-- 子元件 TabPosts.vue -->
<template>
  <div class="demo-tab"><input v-model="title"></div>
</template>

<script setup>
import { ref } from "vue";

const title = ref("Post component");
</script>


<!-- 子元件 TabArchive.vue -->
<template>
  <div class="demo-tab"><input v-model="title"></div>
</template>

<script setup>
import { ref } from "vue";

const title = ref("Archive component");
</script>`
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
    id: "vuejsSlotsNote",
    title: "插槽 Slots",
    description: "包含「一般插槽」、「具名插槽（Named Slots）」、「動態切換具名插槽」、「作用域插槽（Scoped Slots）」、「<code>&lt;teleport&gt;</code>」。",
    descriptionComponent: null,
    descriptionComponentStyle: null,
    lists: [
      {
        listTitle: "<code>&lt;slot&gt;</code> 插槽",
        listSubtitle: 
`<ul style="line-height: 1.6;">
  <li>在子元件開個洞（<code>&lt;slot&gt;</code>），由外層元件將內容置放在子層元件指定位置中。</li>
  <li>子元件本身對 <code>&lt;slot&gt;</code> 裡面被傳了什麼東西沒有控制權。</li>
  <li><code>&lt;slot&gt;</code> 標籤內是預設內容，用於外層元件 <strong>沒有提供任何內容</strong> 給子元件時顯示用。</li>
</ul>`,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: "一般插槽",
            detailSubtitle: null,
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/VuejsNoteView/VuejsSlotsNote/VuejsGeneralSlotDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="app52">
  <p>&gt; {{ msg }}</p>
  <custom-component>{{ msg }}</custom-component>
</div>

<script>
  const vm52 = Vue.createApp({
    data() {
      return {
        msg: "Parent!"
      };
    }
  });

  vm52.component("custom-component", {` + "\n" +
'    template: `' + "\n" +
`      <div>
        &gt; Hello {{ msg }}
        <div>
          &gt; <slot>這是預設內容，若沒有傳資料進來就會出現這段文字。</slot>
        </div>
      </div>` + "\n" +
'    `,' + "\n" +
`    data() {
      return {
        msg: "Child!"
      }
    }
  });

  vm52.mount("#app52");
</script>`,
              jsCode: null,
              vueSFCCode: 
`<!-- 父元件 VuejsGeneralSlotDemo.vue -->
<template>
  <p>&gt; {{ msg }}</p>
  <custom-component>{{ msg }}</custom-component>
</template>

<script setup>
import { ref } from "vue";
import CustomComponent from "./VuejsGeneralSlotDemo/CustomComponent.vue";

const msg = ref("Parent!");
</script>

<style scoped>
p {
  margin-top: 0;
}
</style>



<!-- 子元件 CustomComponent.vue -->
<template>
  <div>
    &gt; Hello {{ msg }}
    <div>
      &gt; <slot>這是預設內容，若沒有傳資料進來就會出現這段文字。</slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const msg = ref("Child!");
</script>

<style scoped></style>`
            }
          },
          {
            detailTitle: "具名插槽（Named Slots）",
            detailSubtitle: null,
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/VuejsNoteView/VuejsSlotsNote/VuejsNamedSlotsDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="app53">
  <light-box>
    <template v-slot:header>
      <p>我是Header</p>
    </template>

    <template v-slot:footer>
      <p>我是Footer</p>
    </template>

    <div>
      <a href="https://www.google.com/" target="_blank">點我進到內容的超連結</a>
    </div>
  </light-box>
</div>

<script>
  const vm53 = Vue.createApp({
    data() {
      return {
        msg: "預設文字呼呼嘿嘿"
      };
    }
  });

  vm53.component("light-box", {` + "\n" +
'    template: `' + "\n" +
`      <div class="lightbox">
        <div class="modal-mask" :style="modalStyle">
          <div class="modal-container" @click.self="toggleModal">
            <div class="modal-body">
              <header>
                <slot name="header">Default Header</slot>
              </header>
              <hr>
              <section>
                <slot>Default Body</slot>
              </section>
              <hr>
              <footer>
                <slot name="footer">Default Footer</slot>
              </footer>
            </div>
          </div>
        </div>
      
        <button @click="isShow = true">Click Me</button>
      </div>` + "\n" +
'    `,' + "\n" +
`    data() {
      return {
        isShow: false
      };
    },
    computed: {
      modalStyle() {
        return {
          "display": this.isShow ? "" : "none"
        };
      }
    },
    methods: {
      toggleModal() {
        this.isShow = !this.isShow;
      }
    }
  });

  vm53.mount("#app53");
</script>

<style>
  .lightbox {
    position: relative;
    display: table;
    width: 90%;
  }

  .modal-mask {
    position: absolute;
    display: table-cell;
    width: 100%;
    z-index: 20;
    background-color: rgb(0, 0, 0, 0.5);
  }

  .modal-container {
    cursor: pointer;
    padding-top: 48px;
    padding-bottom: 48px;
  }

  .modal-body {
    cursor: auto;
    width: 50%;
    margin: 0 auto;
    padding: 32px;
    background-color: #fafafa;
  }
  
  .button {
    cursor: pointer;
  }
</style>`,
              jsCode: null,
              vueSFCCode: 
`<!-- 父元件 VuejsNamedSlotsDemo.vue -->
<template>
  <light-box>
    <template v-slot:header>
      <p>我是Header</p>
    </template>

    <template v-slot:footer>
      <p>我是Footer</p>
    </template>

    <div>
      <a href="https://www.google.com/" target="_blank">點我進到內容的超連結</a>
    </div>
  </light-box>
</template>

<script setup>
import { ref } from "vue";
import LightBox from "./VuejsNamedSlotsDemo/LightBox.vue";

const msg = ref("預設文字呼呼嘿嘿");
</script>

<style scoped></style>





<!-- 子元件 LightBox.vue -->
<template>
  <div class="lightbox">
    <div class="modal-mask" :style="modalStyle">
      <div class="modal-container" @click.self="toggleModal">
        <div class="modal-body">
          <header>
            <slot name="header">Default Header</slot>
          </header>
          <hr>
          <section>
            <slot>Default Body</slot>
          </section>
          <hr>
          <footer>
            <slot name="footer">Default Footer</slot>
          </footer>
        </div>
      </div>
    </div>
  
    <button @click="isShow = true">Click Me</button>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const isShow = ref(false);

const modalStyle = computed(() => {
  return {
    "display": isShow.value ? "" : "none"
  };
});

function toggleModal() {
  isShow.value = !isShow.value;
}
</script>

<style scoped>
.lightbox {
  position: relative;
  display: table;
  width: 90%;
}

.modal-mask {
  position: absolute;
  display: table-cell;
  width: 100%;
  z-index: 20;
  background-color: rgb(0, 0, 0, 0.5);
}

.modal-container {
  cursor: pointer;
  padding-top: 48px;
  padding-bottom: 48px;
}

.modal-body {
  cursor: auto;
  width: 50%;
  margin: 0 auto;
  padding: 32px;
  background-color: #fafafa;
}

button {
  cursor: pointer;
}
</style>`
            }
          },
          {
            detailTitle: "動態切換具名插槽",
            detailSubtitle: null,
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/VuejsNoteView/VuejsSlotsNote/VuejsDynamicNamedSlotsDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="app54">
  <label v-for="opt in options">
    <input type="radio" :value="opt" v-model="dynamic_slot_name">{{ opt }}
  </label>

  <light-box>
    <!-- 透過所選的dynamic_slot_name動態切換對應的slot -->
    <template v-slot:[dynamic_slot_name]>
      <p>點擊按鈕我就會到那行去</p>
    </template>
  </light-box>
</div>

<script>
  const vm54 = Vue.createApp({
    data() {
      return {
        options: ["header", "footer", "default"],
        dynamic_slot_name: "header"
      };
    }
  });

  vm54.component("light-box", {` + "\n" +
'    template: `' + "\n" +
`      <div class="lightbox">
        <div class="modal-mask" :style="modalStyle">
          <div class="modal-container" @click.self="toggleModal">
            <div class="modal-body">
              <header>
                <slot name="header">Default Header</slot>
              </header>
              <hr>
              <section>
                <slot>Default Body</slot>
              </section>
              <hr>
              <footer>
                <slot name="footer">Default Footer</slot>
              </footer>
            </div>
          </div>
        </div>
      
        <button @click="isShow = true">Click Me</button>
      </div>` + "\n" +
'    `,' + "\n" +
`    data() {
      return {
        isShow: false
      };
    },
    computed: {
      modalStyle() {
        return {
          "display": this.isShow ? "" : "none"
        };
      }
    },
    methods: {
      toggleModal() {
        this.isShow = !this.isShow;
      }
    }
  });

  vm54.mount("#app54");
</script>

<style>
  .lightbox {
    position: relative;
    display: table;
    width: 90%;
  }

  .modal-mask {
    position: absolute;
    display: table-cell;
    width: 100%;
    z-index: 20;
    background-color: rgb(0, 0, 0, 0.5);
  }

  .modal-container {
    cursor: pointer;
    padding-top: 48px;
    padding-bottom: 48px;
  }

  .modal-body {
    cursor: auto;
    width: 50%;
    margin: 0 auto;
    padding: 32px;
    background-color: #fafafa;
  }

  button {
    cursor: pointer;
  }
</style>`,
              jsCode: null,
              vueSFCCode: 
`<!-- 父元件 VuejsDynamicNamedSlotsDemo.vue -->
<template>
  <label v-for="opt in options">
    <input type="radio" :value="opt" v-model="dynamic_slot_name">{{ opt }}
  </label>

  <light-box>
    <!-- 透過所選的dynamic_slot_name動態切換對應的slot -->
    <template v-slot:[dynamic_slot_name]>
      <p>點擊按鈕我就會到那行去</p>
    </template>
  </light-box>
</template>

<script setup>
import { ref } from "vue";
import LightBox from "./VuejsDynamicNamedSlotsDemo/LightBox.vue";

const options = ref(["header", "footer", "default"]);
const dynamic_slot_name = ref("header");
</script>

<style scoped></style>





<!-- 子元件 LightBox.vue -->
<template>
  <div class="lightbox">
    <div class="modal-mask" :style="modalStyle">
      <div class="modal-container" @click.self="toggleModal">
        <div class="modal-body">
          <header>
            <slot name="header">Default Header</slot>
          </header>
          <hr>
          <section>
            <slot>Default Body</slot>
          </section>
          <hr>
          <footer>
            <slot name="footer">Default Footer</slot>
          </footer>
        </div>
      </div>
    </div>

    <button @click="isShow = true">Click Me</button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const isShow = ref(false);

const modalStyle = computed(() => ({
  "display": isShow.value ? "" : "none"
}));

function toggleModal() {
  isShow.value = !isShow.value;
};
</script>

<style scoped>
.lightbox {
  position: relative;
  display: table;
  width: 90%;
}

.modal-mask {
  position: absolute;
  display: table-cell;
  width: 100%;
  z-index: 20;
  background-color: rgb(0, 0, 0, 0.5);
}

.modal-container {
  cursor: pointer;
  padding-top: 48px;
  padding-bottom: 48px;
}

.modal-body {
  cursor: auto;
  width: 50%;
  margin: 0 auto;
  padding: 32px;
  background-color: #fafafa;
}

button {
  cursor: pointer;
}
</style>`
            }
          },
          {
            detailTitle: "作用域插槽（Scoped Slots）",
            detailSubtitle: "「具名插槽（named slots）」 + 「slot props（作用域插槽）」",
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/VuejsNoteView/VuejsSlotsNote/VuejsScopedSlotsDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="app55">
  <p>
    請選擇：
    <select v-model="lang">
      <option v-for="n in langOptions" :value="n.val">{{ n.name }}</option>
    </select>
  </p>

  <light-box :lang="lang">
    <template v-slot:content="slotProps">
      {{ langOptions.find(d => d.val === lang)["name"] }}: {{ slotProps.hello }}
    </template>
  </light-box>
</div>

<script>
  const vm55 = Vue.createApp({
    data() {
      return {
        langOptions: [
          {name: "繁體中文", val: "tw"},
          {name: "英文", val: "en"},
          {name: "德文", val: "de"}
        ],
        lang: "tw"
      }
    }
  });

  vm55.component("light-box", {
    data() {
      return {
        isShow: false,
        helloString: {
          "tw": "哈囉世界！",
          "en": "Hello World!",
          "de": "Hello Welt!"
        }
      };
    },
    props: {
      lang: {
        type: String,
        default: "tw"
      }
    },` + "\n" +
'    template: `' + "\n" +
`      <div class="lightbox">
        <div class="modal-mask" :style="modalStyle">
          <div class="modal-container" @click.self="toggleModal">
            <div class="modal-body">
              <slot name="content" v-bind:hello="helloString[lang]"></slot>
            </div>
          </div>
        </div>

        <button @click="isShow = true">Click Me</button>
      </div>` + "\n" +
'    `,' + "\n" +
`    computed: {
      modalStyle() {
        return {
          "display": this.isShow ? "" : "none"
        };
      }
    },
    methods: {
      toggleModal() {
        this.isShow = !this.isShow;
      }
    }
  });

  vm55.mount("#app55");
</script>

<style>
  .lightbox {
    position: relative;
    display: table;
    width: 90%;
  }

  .modal-mask {
    position: absolute;
    display: table-cell;
    width: 100%;
    z-index: 20;
    background-color: rgb(0, 0, 0, 0.5);
  }

  .modal-container {
    cursor: pointer;
    padding-top: 48px;
    padding-bottom: 48px;
  }

  .modal-body {
    cursor: auto;
    width: 50%;
    margin: 0 auto;
    padding: 32px;
    background-color: #fafafa;
  }

  button {
    cursor: pointer;
  }
</style>`,
              jsCode: null,
              vueSFCCode: 
`<!-- 父元件 VuejsScopedSlotsDemo.vue -->
<template>
  <p>
    請選擇：
    <select v-model="lang">
      <option v-for="n in langOptions" :value="n.val">{{ n.name }}</option>
    </select>
  </p>

  <light-box :lang="lang">
    <template v-slot:content="slotProps">
      {{ langOptions.find(d => d.val === lang)["name"] }}: {{ slotProps.hello }}
    </template>
  </light-box>
</template>

<script setup>
import { ref } from "vue";
import LightBox from "./VuejsScopedSlotsDemo/LightBox.vue";

const langOptions = ref([
  {name: "繁體中文", val: "tw"},
  {name: "英文", val: "en"},
  {name: "德文", val: "de"}
]);
const lang = ref("tw");
</script>

<style scoped></style>





<!-- 子元件 LightBox.vue -->
<template>
  <div class="lightbox">
    <div class="modal-mask" :style="modalStyle">
      <div class="modal-container" @click.self="toggleModal">
        <div class="modal-body">
          <slot name="content" v-bind:hello="helloString[lang]"></slot>
        </div>
      </div>
    </div>

    <button @click="isShow = true">Click Me</button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

defineProps({
  lang: {
    type: String,
    default: "tw"
  }
});

const isShow = ref(false);
const helloString = ref({
  "tw": "哈囉世界！",
  "en": "Hello World!",
  "de": "Hello Welt!"
});

const modalStyle = computed(() => ({
  "display": isShow.value ? "" : "none"
}));

function toggleModal() {
  isShow.value = !isShow.value;
}
</script>

<style scoped>
.lightbox {
  position: relative;
  display: table;
  width: 90%;
}

.modal-mask {
  position: absolute;
  display: table-cell;
  width: 100%;
  z-index: 20;
  background-color: rgb(0, 0, 0, 0.5);
}

.modal-container {
  cursor: pointer;
  padding-top: 48px;
  padding-bottom: 48px;
}

.modal-body {
  cursor: auto;
  width: 50%;
  margin: 0 auto;
  padding: 32px;
  background-color: #fafafa;
}

button {
  cursor: pointer;
}
</style>`
            }
          },
          {
            detailTitle: "<code>&lt;teleport&gt;</code>",
            detailSubtitle: "透過 <code>&lt;teleport&gt;</code>，可以將 DOM 移動到指定位置渲染。<code>to</code> 屬性的值為目標 DOM 節點，使用 CSS 選擇器。",
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/VuejsNoteView/VuejsSlotsNote/VuejsTeleportDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="app56">
  <p>
    請選擇：
    <select v-model="lang">
      <option v-for="n in langOptions" :value="n.val">{{ n.name }}</option>
    </select>
  </p>

  <light-box :lang="lang">
    <template v-slot:content="slotProps">
      {{ langOptions.find(d => d.val === lang)["name"] }}: {{ slotProps.hello }}
    </template>
  </light-box>
</div>

<script>
  const vm56 = Vue.createApp({
    data() {
      return {
        langOptions: [
          {name: "繁體中文", val: "tw"},
          {name: "英文", val: "en"},
          {name: "德文", val: "de"}
        ],
        lang: "tw"
      }
    }
  });

  vm56.component("light-box", {
    data() {
      return {
        isShow: false,
        helloString: {
          "tw": "哈囉世界！",
          "en": "Hello World!",
          "de": "Hello Welt!"
        }
      };
    },
    props: {
      lang: {
        type: String,
        default: "tw"
      }
    },` + "\n" +
'    template: `' + "\n" +
`      <div class="lightbox">
        <teleport to="body">
          <div class="modal-mask" :style="modalStyle">
            <div class="modal-container" @click.self="toggleModal">
              <div class="modal-body">
                <slot name="content" v-bind:hello="helloString[lang]"></slot>
              </div>
            </div>
          </div>
        </teleport>

        <button @click="isShow = true">Click Me</button>
      </div>` + "\n" +
'    `,' + "\n" +
`   computed: {
      modalStyle() {
        return {
          "display": this.isShow ? "" : "none"
        };
      }
    },
    methods: {
      toggleModal() {
        this.isShow = !this.isShow;
      }
    }
  });

  vm56.mount("#app56");
</script>

<style>
  .lightbox {
    position: relative;
    display: table;
    width: 90%;
  }

  .modal-mask {
    position: absolute;
    display: table-cell;
    width: 100%;
    z-index: 20;
    background-color: rgb(0, 0, 0, 0.5);
  }

  .modal-container {
    cursor: pointer;
    padding-top: 48px;
    padding-bottom: 48px;
  }

  .modal-body {
    cursor: auto;
    width: 50%;
    margin: 0 auto;
    padding: 32px;
    background-color: #fafafa;
  }
</style>`,
              jsCode: null,
              vueSFCCode: 
`<!-- 跟上面原code不完全相同，有改善一些code -->
<!-- 父元件 VuejsTeleportDemo.vue -->
<template>
  <p>
    請選擇：
    <select v-model="lang">
      <option v-for="n in langOptions" :value="n.val">{{ n.name }}</option>
    </select>
  </p>

  <light-box :lang="lang">
    <template v-slot:content="slotProps">
      {{ langOptions.find(d => d.val === lang)["name"] }}: {{ slotProps.hello }}
    </template>
  </light-box>
</template>

<script setup>
import { ref, computed } from "vue";
import LightBox from "./VuejsTeleportDemo/LightBox.vue";

const langOptions = ref([
  {name: "繁體中文", val: "tw"},
  {name: "英文", val: "en"},
  {name: "德文", val: "de"}
]);
const lang = ref("tw");
</script>

<style scoped></style>





<!-- 子元件 LightBox.vue -->
<template>
  <div class="lightbox">
    <teleport to="body" v-if="isShow">
      <div class="modal-mask" @click.self="toggleModal">
        <div class="modal-body">
          <slot name="content" v-bind:hello="helloString[lang]"></slot>
        </div>
      </div>
    </teleport>

    <button @click="isShow = true">Click Me</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  lang: {
    type: String,
    default: "tw"
  }
});

const isShow = ref(false);
const helloString = ref({
  "tw": "哈囉世界！",
  "en": "Hello World!",
  "de": "Hello Welt!"
});

function toggleModal() {
  isShow.value = !isShow.value;
};
</script>

<style scoped>
.lightbox {
  width: 90%;
}

.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2000;
  background-color: rgb(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  cursor: pointer;
}

.modal-body {
  cursor: auto;
  width: 50%;
  margin: 0 auto;
  padding: 32px;
  background-color: #fafafa;
}

button {
  cursor: pointer;
}
</style>`
            }
          }
        ]
      }
    ]
  },
  {
    id: "vuejsTransitionNote",
    title: "漸變與動畫 <transition>",
    description: 
`包含 「<code>&lt;transition&gt;</code> 漸變與動畫」與「其他動畫（不用 <code>&lt;transition&gt;</code>）」。
<ul style="line-height: 1.7;">
  <li>
    <h5><code>&lt;transition&gt;</code> 漸變與動畫</h5>
    <ol>
      <li>基本的 <code>&lt;transition&gt;</code> 漸變動畫</li>
      <li>有自定義名稱的 <code>&gt;transition&gt;</code></li>
      <li>條件與動態切換</li>
      <li>漸變效果的順序（transition mode）</li>
      <li>複數元素／元件的漸變渲染 <code>&lt;transition-group&gt;</code></li>
      <li>結合漸變動畫的 Hooks 函式處理事件</li>
    </ol>
  </li>
  <li>
    <h5>其他動畫（不用 <code>&lt;transition&gt;</code>）</h5>
    <ol>
      <li>自己寫 CSS 的 keyframes 影格動畫</li>
      <li>與其他 CSS 工具庫搭配</li>
    </ol>
  </li>
</ul>
<hr />`,
    descriptionComponent: null,
    descriptionComponentStyle: null,
    lists: [
      {
        listTitle: "<code>&lt;transition&gt;</code> 漸變與動畫",
        listSubtitle: 
`<p><code>&lt;transition&gt;</code> 提供的是 <strong>動畫生命週期 + class 名稱約定</strong> ，方便管理和套用動畫。它並不會自帶動畫，只處理「元素進出 DOM 時的 <code>class</code> 套用」，實際動畫效果還是要靠 CSS 或 JavaScript 寫。</p>
<table>
  <thead>
    <tr>
      <th>狀態</th>
      <th><code>class</code> 名稱</th>
      <th>說明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>進入前</td>
      <td><code>v-enter-from</code></td>
      <td>定義元素在進場「之前」的樣式。</td>
    </tr>
    <tr>
      <td>進入</td>
      <td><code>v-enter-active</code></td>
      <td>定義元素在進場「過程」的樣式。</td>
    </tr>
    <tr>
      <td>進入完成</td>
      <td><code>v-enter-to</code></td>
      <td>定義元素在進場「結束時」的樣式。</td>
    </tr>
    <tr>
      <td>離開前</td>
      <td><code>v-leave-from</code></td>
      <td>定義元素在退場「之前」的樣式。</td>
    </tr>
    <tr>
      <td>離開</td>
      <td><code>v-leave-active</code></td>
      <td>定義元素在退場「過程」的樣式。</td>
    </tr>
    <tr>
      <td>離開完成</td>
      <td><code>v-leave-to</code></td>
      <td>定義元素在退場「結束時」的樣式。</td>
    </tr>
  </tbody>
</table>`,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: "基本的 <code>&lt;transition&gt;</code> 漸變動畫",
            detailSubtitle: null,
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/VuejsNoteView/VuejsTransitionNote/VuejsTransitionBasicDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="app57">
  <transition>
    <!-- 透過v-show來控制顯示或隱藏 -->
    <div v-show="isShow">Hello Vue!</div>
  </transition>

  <button @click="isShow = !isShow">Toggle</button>
</div>

<script>
  const vm57 = Vue.createApp({
    data() {
      return {
        isShow: true
      }
    }
  }).mount("#app57");
</script>

<style>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 1s;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  .v-enter-to,
  .v-leave-from {
    opacity: 1;
  }
</style>`,
              jsCode: null,
              vueSFCCode: 
`<template>
  <transition>
    <!-- 透過v-show來控制顯示或隱藏 -->
    <div v-show="isShow">Hello Vue.js!</div>
  </transition>

  <button @click="isShow = !isShow">Toggle</button>
</template>

<script setup>
import { ref } from "vue";

const isShow = ref(true);
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}

button {
  cursor: pointer;
}
</style>`
            }
          },
          {
            detailTitle: "有自定義名稱的 <code>&lt;transition&gt;</code>",
            detailSubtitle: '<code>&lt;transition name="<i>自定義名稱</i>"&gt; ... &lt;/transition&gt;</code>',
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/VuejsNoteView/VuejsTransitionNote/VuejsTransitionNamedDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="app58">
  <!-- slide -->
  <transition name="slide">
    <div v-show="slideIsShow">我是slide特效</div>
  </transition>
  <button @click="slideIsShow = !slideIsShow">Toggle</button>
  <br>

  <!-- fade -->
  <transition name="fade">
    <div v-show="fadeIsShow">我是fade特效</div>
  </transition>
  <button @click="fadeIsShow = !fadeIsShow">Toggle</button>
</div>

<script>
  const vm58 = Vue.createApp({
    data() {
      return {
        slideIsShow: true,
        fadeIsShow: true
      }
    }
  }).mount("#app58");
</script>

<style>
  /* <transition name="slide"> */
  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.9s ease;
  }

  .slide-enter-from {
    transform: translateX(-100%);
  }

  .slide-leave-to {
    transform: translateX(100%);
  }

  /* <transition name="fade"> */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-to,
  .fade-leave-from {
    opacity: 1;
  }
</style>`,
              jsCode: null,
              vueSFCCode: 
`<template>
  <!-- slide -->
  <transition name="slide">
    <div v-show="slideIsShow">我是slide特效</div>
  </transition>
  <button @click="slideIsShow = !slideIsShow">Toggle</button>

  <!-- fade -->
  <transition name="fade">
    <div v-show="fadeIsShow">我是fade特效</div>
  </transition>
  <button @click="fadeIsShow = !fadeIsShow">Toggle</button>
</template>

<script setup>
import { ref } from "vue";

const slideIsShow = ref(true);
const fadeIsShow = ref(true);
</script>

<style scoped>
/* <transition name="slide"> */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.9s ease;
}

.slide-enter-from {
  transform: translateX(-100%);
}

.slide-leave-to {
  transform: translateX(100%);
}

/* <transition name="fade"> */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

button {
  margin-bottom: 16px;
}
</style>`
            }
          },
          {
            detailTitle: "條件與動態切換",
            detailSubtitle: "若我們要在 <code>&lt;transition&gt;</code> 進行多個 DOM 元素或元件切換，必須寫成 <code>v-if</code>、<code>v-else-if</code>、<code>v-else</code> 的形式，或採用 <code>:is</code> 的方式進行切換，才能正常運作。不可直接使用多個 <code>v-if</code> 或 <code>v-show</code>。",
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/VuejsNoteView/VuejsTransitionNote/VuejsTransitionDynamicSwitchDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="app59">
  <button @click="modeToggle()">Toggle</button>

  <!-- 用mode="out-in"以先執行離場動畫，再執行進場動畫 -->
  <transition name="app59-fade" mode="out-in">
    <div v-if="mode === 'mode-1'">Block 1</div>
    <div v-else-if="mode === 'mode-2'">Block 2</div>
    <div v-else>Block 3</div>
  </transition>
</div>

<script>
  const vm59 = Vue.createApp({
    data() {
      let modeLists = ["mode-1", "mode-2", "mode-3"];
      return {
        modeChoose: modeLists,
        mode: modeLists[0]
      }
    },
    methods: {
      modeToggle() {
        const index = this.modeChoose.indexOf(this.mode);
        this.mode = this.modeChoose[(index + 1) % this.modeChoose.length];
      },
    },
  }).mount("#app59");
</script>

<style>
  .app59-fade-enter-active,
  .app59-fade-leave-active {
    transition: opacity 0.5s;
  }

  .app59-fade-enter-from,
  .app59-fade-leave-to {
    opacity: 0;
  }

  .app59-fade-enter-to,
  .app59-fade-leave-from {
    opacity: 1;
  }
</style>`,
              jsCode: null,
              vueSFCCode: 
`<template>
  <button @click="modeToggle()">Toggle</button>

  <!-- 用mode="out-in"以先執行離場動畫，再執行進場動畫 -->
  <transition name="app59-fade" mode="out-in">
    <div v-if="mode === 'mode-1'">Block 1</div>
    <div v-else-if="mode === 'mode-2'">Block 2</div>
    <div v-else>Block 3</div>
  </transition>
</template>

<script setup>
import { ref } from "vue";

const modeLists = ["mode-1", "mode-2", "mode-3"];
const mode = ref(modeLists[0]);

function modeToggle() {
  const index = modeLists.indexOf(mode.value);
  mode.value = modeLists[(index + 1) % modeLists.length];
};
</script>

<style scoped>
.app59-fade-enter-active,
.app59-fade-leave-active {
  transition: opacity 0.25s;
}

.app59-fade-enter-from,
.app59-fade-leave-to {
  opacity: 0;
}

.app59-fade-enter-to,
.app59-fade-leave-from {
  opacity: 1;
}

button {
  cursor: pointer;
}
</style>`
            }
          },
          {
            detailTitle: "漸變效果的順序（transition mode）",
            detailSubtitle: null,
            detailContent: 
`上例中漸變效果的切換，除了預設的「新元素進場的動畫先執行，再移除現有的元素以外（<code>in-out</code>），同時也提供了「先移除現有的元素，再執行新元素進場」的動畫（<code>in-out</code>）方式。`,
            detailComponent: null,
            detailCode: {
              htmlCode: 
`<!-- 舊元素先離場，再進新元素，避免新舊元素同時出現 -->
<transition mode="out-in"></transition>

<!-- 新元素先進，舊元素再離場，需「新舊重疊」一小段時間使用 -->
<transition mode="in-out"></transition>`,
              jsCode: null,
              vueSFCCode: null
            }
          },
          {
            detailTitle: "複數元素／元件的漸變渲染 <code>&lt;transition-group&gt;</code>",
            detailSubtitle: null,
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/VuejsNoteView/VuejsTransitionNote/VuejsTransitionGroupDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="app60">
  <button @click="addListElement()">生成一個隨機數字方塊</button><br>
  <button @click="shuffle()">給我重新排列</button><br>
  <button @click="lists.length = 0">通通蛋雕</button>

  <!-- 添增一個tag屬性，此處代表在外層加一層<ul>來包覆 -->
  <!-- <transition>的class屬性，是給外層<ul>的class屬性 -->
  <!-- 另外，內層子元素都需要加上key的唯一屬性來確保動畫正常運作 -->
  <transition-group tag="ul" class="number-list" name="number-list">
    <li v-for="item in lists" :key="item" class="number-item">{{ item }}</li>
  </transition-group>
</div>

<script>
  const vm60 = Vue.createApp({
    data() {
      return {
        lists: [1, 2, 3, 4, 5]
      };
    },
    methods: {
      addListElement() {
        // 生成新數字，並且是唯一
        let randomNumber;
        do {
          randomNumber = Math.ceil(Math.random() * 100);
        } while ( this.lists.includes(randomNumber) );
        this.lists.push(randomNumber);
      },
      shuffle() {
        this.lists.sort(() => Math.random() - 0.5);
      }
    }
  }).mount("#app60");
</script>

<style>
  .number-list {
    overflow: hidden;
    padding: 0;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .number-list li {
    display: block;
    float: left;
    width: 35px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    background-color: #ff0000;
    color: #ffffff;
    margin-right: 1rem;
    margin-bottom: 1rem;
    font-family: system-ui;
  }

  .number-list-enter-from {
    opacity: 0;
    transform: translateY(-20px);
  }

  /* 只有在<transition-group>中才會有v-move可以使用 */
  .number-list-enter-active,
  .number-list-leave-active,
  .number-list-move {
    transition: opacity 0.7s, transform 0.7s ease;
  }

  .number-list-enter-to,
  .number-list-leave-from {
    opacity: 1;
    transform: 0;
  }

  /* 此步是為了要讓元素到同一處消失 */
  .number-list-leave-active {
    position: absolute;
  }

  .number-list-leave-to {
    opacity: 0;
  }
</style>`,
              jsCode: null,
              vueSFCCode: 
`<template>
  <button @click="addListElement()">生成一個隨機數字方塊</button><br>
  <button @click="shuffle()">給我重新排列</button><br>
  <button @click="lists.length = 0">通通蛋雕</button>

  <!-- 添增一個tag屬性，此處代表在外層加一層<ul>來包覆 -->
  <!-- <transition>的class屬性，是給外層<ul>的class屬性 -->
  <!-- 另外，內層子元素都需要加上key的唯一屬性來確保動畫正常運作 -->
  <transition-group tag="ul" class="number-list" name="number-list">
    <li v-for="item in lists" :key="item" class="number-item">{{ item }}</li>
  </transition-group>
</template>

<script setup>
import { ref } from "vue";

const lists = ref([1, 2, 3, 4, 5]);

function addListElement() {
  // 生成新數字，並且是唯一
  let randomNumber;
  do {
    randomNumber = Math.ceil(Math.random() * 100);
  } while ( lists.value.includes(randomNumber) );
  lists.value.push(randomNumber);
};

function shuffle() {
  lists.value.sort(() => Math.random() - 0.5);
}
</script>

<style scoped>
  .number-list {
    overflow: hidden;
    padding: 0;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .number-list li {
    display: block;
    float: left;
    width: 35px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    background-color: #ff0000;
    color: #ffffff;
    margin-right: 1rem;
    margin-bottom: 1rem;
    font-family: system-ui;
  }

  .number-list-enter-from {
    opacity: 0;
    transform: translateY(-20px);
  }

  /* 只有在<transition-group>中才會有v-move可以使用 */
  .number-list-enter-active,
  .number-list-leave-active,
  .number-list-move {
    transition: opacity 0.7s, transform 0.7s ease;
  }

  .number-list-enter-to,
  .number-list-leave-from {
    opacity: 1;
    transform: 0;
  }

  /* 此步是為了要讓元素到同一處消失 */
  .number-list-leave-active {
    position: absolute;
  }

  .number-list-leave-to {
    opacity: 0;
  }
</style>`
            }
          },
          {
            detailTitle: "結合漸變動畫的 Hooks 函式處理事件",
            detailSubtitle: null,
            detailContent: 
`<p>在執行漸變動畫時，搭配 Hooks 函式來處理執行動畫之前、過程中、結束後要做的事。</p>
<table>
  <thead>
    <tr>
      <th>Hooks 名稱</th>
      <th>階段</th>
      <th>說明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>before-enter</code></td>
      <td>進場</td>
      <td>漸變動畫開始前，常用來設定初始狀態。</td>
    </tr>
    <tr>
      <td><code>enter</code></td>
      <td>進場</td>
      <td>漸變動畫執行時，可用於 JavaScript 動畫。</td>
    </tr>
    <tr>
      <td><code>after-enter</code></td>
      <td>進場</td>
      <td>漸變動畫執行完畢觸發。</td>
    </tr>
    <tr>
      <td><code>enter-cancelled</code></td>
      <td>進場</td>
      <td>漸變動畫執行時取消，如狀態瞬間切換。</td>
    </tr>
    <tr>
      <td><code>before-leave</code></td>
      <td>退場</td>
      <td>漸變動畫開始前，常用來設定初始狀態。</td>
    </tr>
    <tr>
      <td><code>leave</code></td>
      <td>退場</td>
      <td>漸變動畫執行時，可用於 JavaScript 動畫。</td>
    </tr>
    <tr>
      <td><code>after-leave</code></td>
      <td>退場</td>
      <td>漸變動畫執行完畢觸發。</td>
    </tr>
    <tr>
      <td><code>leave-cancelled</code></td>
      <td>退場</td>
      <td>漸變動畫執行時取消（僅限 <code>v-show</code> 有效）。</td>
    </tr>
    <tr>
      <td><code>appear</code></td>
      <td>初始渲染</td>
      <td>初始渲染的漸變動畫開始（需 <code>&lt;transition appear&gt;</code>）。</td>
    </tr>
    <tr>
      <td><code>after-appear</code></td>
      <td>初始渲染</td>
      <td>初始渲染的漸變動畫執行完觸發。</td>
    </tr>
    <tr>
      <td><code>appear-cancelled</code></td>
      <td>初始渲染</td>
      <td>初始渲染的漸變動畫執行時取消。</td>
    </tr>
  </tbody>
</table>`,
            detailComponent: defineAsyncComponent(() =>
              import ("../../../components/WebNoteView/VuejsNoteView/VuejsTransitionNote/VuejsTransitionHooksFunctionDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="app61">
  <button @click="getUserInfo">取得隨機User資訊</button>

  <div class="flexbox-wrapper" :style="{ height: heightControlByVue + 'px'}">
    <div class="flexbox-body" ref="content">
      <div class="user-block" v-if="userInfo.name">
        <h6>{{ userInfo.name }} / @{{ userInfo.username }}</h6>

        <img src="https://dummyimage.com/200x200/666/fff" alt="dummyimage">
        <div class="wraps">
          <p>{{ userInfo.company.name }}</p>
          <p>{{ userInfo.phone }}</p>
          <p>{{ userInfo.email }}</p>
        </div>
      </div>
    </div>

    <!-- hooks event需搭配v-on使用 -->
    <transition
      @before-enter="beforeEnter"
      @before-leave="beforeLeave"
      name="user-info">
      <!-- loading圖 -->
      <div class="loading" v-if="isLoading">
        載入中...
        <!-- 在此使用Bootstrap的載入符號 -->
        <div class="spinner-border" role="status">
          <span class="visually-hidden"></span>
        </div>
      </div>
    </transition>
  </div>
</div>

<script>
  const vm61 = Vue.createApp({
    data() {
      return {
        heightControlByVue: 0,
        userInfo: {},
        isLoading: false
      };
    },
    methods: {
      getRandomUserIdNumber() {
        // 隨機從1~10取出一數字作為user ID
        return Math.ceil(Math.random() * 10);
      },
      async getUserInfo() {
        // 從jsonplaceholder取得隨機假資料
        this.isLoading = true;
        this.userInfo = {};  // 清空舊資料
        const userId = this.getRandomUserIdNumber();

        const res = await fetch("https://jsonplaceholder.typicode.com/users/" + userId)
                            .then(response => response.json());

        // 加上setTimeout模擬延遲，避免回傳太快看不到loading
        window.setTimeout(() => {
          this.isLoading = false;
          this.userInfo = res;
        }, 800);
      },
      beforeEnter() {
        // 開始執行動畫前，將文字區塊的高度歸零
        this.heightControlByVue = 0;
      },
      beforeLeave() {
        // 取得隨機文字後，為確保資料與畫面同步，加上$nextTick
        // 並透過getBoundingClientRect()來取得DOM實際高度
        this.$nextTick(() => {
          this.heightControlByVue = this.$refs.content.getBoundingClientRect().height;
        });
      }
    }
  }).mount("#app61");
</script>

<style>
  .flexbox-wrapper {
    position: relative;
    overflow: hidden;
    transition: height 1s;
    min-height: 35px;  /* 缺少這一行會導致Loading的<div>不可見 */
    height: auto;
  }

  .user-block {
    overflow: hidden;
    background: #eeeeee;
    padding: 1rem;
    width: 420px;
  }
        
  .user-block img {
    width: 100px;
    height: 100px;
    float: left;
    margin: 0.5rem 1rem 0 0;
  }

  .user-block .wraps {    
    float: left;
    margin-top: 0.5rem;
    margin-left: 0.7rem;
    font-size: 0.9rem;
  }

  .loading {
    display: block;
    margin: 0 auto;
    text-align: center;
  }

  .user-info-enter-active,
  .user-info-leave-active {
    transition: opacity 1s;
  }
        
  .user-info-enter-from,
  .user-info-leave-to {
    opacity: 0;
  }
</style>`,
              jsCode: null,
              vueSFCCode: 
`<!-- 與上面略有不同，有些小修改（例如未使用Bootstrap） -->
<template>
  <button @click="getUserInfo">取得隨機User資訊</button>

  <div class="flexbox-wrapper" :style="{ height: heightControlByVue + 'px'}">
    <div class="flexbox-body" ref="content">
      <div class="user-block" v-if="userInfo.name">
        <h6>{{ userInfo.name }} / @{{ userInfo.username }}</h6>

        <img src="https://dummyimage.com/200x200/666/fff" alt="dummyimage">
        <div class="wraps">
          <p>{{ userInfo.company.name }}</p>
          <p>{{ userInfo.phone }}</p>
          <p>{{ userInfo.email }}</p>
        </div>
      </div>
    </div>

    <!-- hooks event需搭配v-on使用 -->
    <transition
      @before-enter="beforeEnter"
      @before-leave="beforeLeave"
      name="user-info"
    >
      <!-- loading圖 -->
      <div class="loading" v-if="isLoading">
        載入中...
        <span class="spinner"></span>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, nextTick } from "vue";

const heightControlByVue = ref(0);
const userInfo = ref({});
const isLoading = ref(false);
const content = ref(null);

function getRandomUserIdNumber() {
  // 隨機從1~10取出一數字作為user ID
  return Math.ceil(Math.random() * 10);
};

async function getUserInfo() {
  // 從jsonplaceholder取得隨機假資料
  isLoading.value = true;
  userInfo.value = {};  // 清空舊資料
  const userId = getRandomUserIdNumber();

  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + userId
  ).then(response => response.json());

  // 加上setTimeout模擬延遲，避免回傳太快看不到loading
  window.setTimeout(() => {
    isLoading.value = false;
    userInfo.value = res;
  }, 800);
};

function beforeEnter() {
  // 開始執行動畫前，將文字區塊的高度歸零
  heightControlByVue.value = 0;
};

function beforeLeave() {
  // 取得隨機文字後，為確保資料與畫面同步，使用nextTick
  // 並透過getBoundingClientRect()來取得DOM實際高度
  nextTick(() => {
    heightControlByVue.value = content.value.getBoundingClientRect().height;
  });
};
</script>

<style scoped>
.flexbox-wrapper {
  position: relative;
  overflow: hidden;
  transition: height 1s;
  min-height: 60px;  /* 缺少這一行會導致Loading的<div>不可見 */
}

.user-block {
  overflow: hidden;
  background: #eeeeee;
  padding: 1rem;
  width: 420px;
}
        
.user-block img {
  width: 100px;
  height: 100px;
  float: left;
  margin: 0.5rem 1rem 0 0;
}

.user-block .wraps {    
  float: left;
  margin-top: 0.5rem;
  margin-left: 0.7rem;
  font-size: 0.9rem;
}

.user-info-enter-active,
.user-info-leave-active {
  transition: opacity 1s;
}
        
.user-info-enter-from,
.user-info-leave-to {
  opacity: 0;
}

button {
  cursor: pointer;
}

/* 自製loading、spinner */
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-align: center;
  color: #333333;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #dddddd;  /* 淡色邊框 */
  border-top-color: #333333;  /* 深色邊框，會形成旋轉效果 */
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

/* 旋轉動畫 */
@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>`
            }
          }
        ]
      },
      {
        listTitle: "其他動畫（不用 <code>&lt;transition&gt;</code>）",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueSFCCode: null
        },
        listDetails: [
          {
            detailTitle: "自己寫 CSS 的 keyframes 影格動畫",
            detailSubtitle: null,
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/VuejsNoteView/VuejsTransitionNote/VuejsCssKeyframesAnimationDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="app62">
  <div id="app62-block" ref="block" :class="{ 'app62-shake': activated }">Block</div>
  <button @click="activated = true">Shake it!</button>
</div>

<script>
  const vm62 = Vue.createApp({
    data() {
      return {
        activated: false
      };
    },
    methods: {
      reactivated() {
        this.activated = false;
      }
    },
    mounted() {
      // 在mounted階段加入animationend事件
      this.$refs.block.addEventListener("animationend", this.reactivated);
    },
    beforeUnmount() {
      // 記得解除事件
      this.$refs.block.removeEventListener("animationend", this.reactivated);
    }
  }).mount("#app62");
</script>

<style>
  .app62-shake {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97);
    transform: translate3d(0, 0, 0);
  }

  @keyframes shake {
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
  }
</style>`,
              jsCode: null,
              vueSFCCode: 
`<template>
  <div ref="block" :class="{ 'app62-shake': activated }">Block</div>
  <button @click="activated = true">Shake it!</button>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const block = ref(null);
const activated = ref(false);

function reactivated() {
  activated.value = false;
};

onMounted(() => {
  // 在onMounted階段加入animationend事件
  block.value.addEventListener("animationend", reactivated);
});

onBeforeUnmount(() => {
  // 記得解除事件
  block.value.removeEventListener("animationend", reactivated);
});
</script>

<style scoped>
.app62-shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97);
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}

button {
  cursor: pointer;
}
</style>`
            }
          },
          {
            detailTitle: "與其他 CSS 工具庫搭配",
            detailSubtitle: "以 Animation.css 為例。",
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/VuejsNoteView/VuejsTransitionNote/VuejsAnimationCssAnimationDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="app63">
  <div id="app63-wrap">
    <button
      v-for="c in animateClasses"
      :key="c"
      @click="activedAnimate(c)"
    >
      {{ c }}
    </button>
  </div>

  <!-- 透過v-bind:class來控制class屬性 -->
  <div id="app63-block" ref="block" :class="animatedClassName">Block</div>
</div>

<script>
  const vm63 = Vue.createApp({
    data() {
      return {
        animateClasses: [
          'bounce',
          'rubberBand',
          'tada',
          'shakeY',
          'shakeX'
        ],
        animatedClassName: ''
      };
    },
    methods: {
      activedAnimate(className) {` + "\n" +
'        this.animatedClassName = `animate__animated animate__${className}`;' + "\n" +
`      }
    }
  }).mount("#app63");
</script>

<style>
  #app63-block {
    display: block;
    width: 120px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    background-color: #3eaf7c;
    color: #ffffff;
  }
</style>`,
              jsCode: null,
              vueSFCCode: 
`<template>
  <div id="app63-wrap">
    <button
      v-for="c in animateClasses"
      :key="c"
      @click="activedAnimate(c)"
    >
      {{ c }}
    </button>
  </div>

  <!-- 透過v-bind:class來控制class屬性 -->
  <div
    ref="block"
    class="app63-block"
    :class="animatedClassName"
  >
    Block
  </div>
</template>

<script setup>
import { ref } from "vue";

const animateClasses = ref([
  "bounce",
  "rubberBand",
  "tada",
  "shakeY",
  "shakeX"
]);
const animatedClassName = ref("");

function activedAnimate(className) {` + "\n" +
'  animatedClassName.value = `animate__animated animate__${className}`;' + "\n" +
`};
</script>

<style scoped>
#app63-block {
  display: block;
  width: 120px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  background-color: #3eaf7c;
  color: #ffffff;
}

button {
  cursor: pointer;
}
</style>`
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