<template>
  <div class="javascript-note-view">
    <!-- 整體分欄：左側 Nav, 右側 Content -->
    <div class="layout">
      <!-- 左側分頁列 -->
      <nav class="sidebar">
        <ul>
          <li
            v-for="tab in tabs"
            :key="tab.id"
            :class="{ active: tab.id === activeTab }"
            @click="activeTab = tab.id"
          >
            {{ tab.title }}
          </li>
        </ul>
      </nav>

      <!-- 右側內容區 -->
      <transition
        name="fade"
        mode="out-in"
        @after-enter="handleHighlight"
      >
        <section class="content" v-if="currentTab" :key="currentTab.id">
          <h3 class="content-title">{{ currentTab.title }}</h3>
          <hr />

          <div class="content-body">
            <!-- 先顯示說明，再示範效果，再顯示程式碼 -->
            <div
              class="description"
              v-if="currentTab.description"
              v-html="currentTab.description"
            ></div>
    
            <div :class="{ 'demo': currentTab.demo }">
              <!-- 若有component，就顯示component -->
              <component v-if="currentTab.component" :is="currentTab.component"></component>
              <!-- 否則用v-html顯示demo -->
              <div
                v-else
                v-html="currentTab.demo"
                :style="currentTab.demoStyle"
              ></div>
            </div>
    
            <div class="code">
              <template v-if="currentTab.demo">
                html code:
                <pre><code class="html">{{ currentTab.demo }}</code></pre>
              </template>
              
              <template v-if="currentTab.demoJS">
                javascript code:
                <pre><code class="javascript">{{ currentTab.demoJS }}</code></pre>
              </template>
            </div>
          </div>
        </section>
      </transition>
    </div>
  </div>
</template>

<script setup>
// 預先 import Highlight.js
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/vs2015.css";
hljs.registerLanguage("html", html);
hljs.registerLanguage("javascript", javascript);

import { onMounted, ref, computed, nextTick, defineAsyncComponent } from "vue";

// import照片，用於tabs
// import ... from ...;

const tabs = [
  {
    id: "jsOpenCloseWindowNote",
    title: "開新視窗與關閉視窗",
    description: null,
    demoStyle: null,
    component: defineAsyncComponent(() =>
      import("../../components/WebNoteView/JavascriptNoteView/JsOpenCloseWindowNoteDemo.vue")
    ),
    demo: 
`<!-- 這裡使用 Bootstrap 的樣式 -->

<!-- 「開新文件」按鈕 -->
<button class="btn btn-outline-primary" onclick="openDocument();">開新文件</button>

<!-- 「關閉目前視窗」按鈕 -->
<button class="btn btn-outline-danger" onclick="window.close();">關閉目前視窗</button>


<!-- 註：'window.close();'只能關閉由JavaScript開啟的視窗，不能關掉使用者直接打開的分頁（大部分瀏覽器會阻擋） -->`,
    demoJS: 
`function openDocument() {
  var newWin = window.open("", "newWin");

  if (newWin) {
    newWin.document.open("text/html");
    newWin.document.write("這是新的HTML文件");
    newWin.document.close();
  } else {
    alert("彈出窗口被阻擋，請允許彈出窗口後重視");
  };
};`
  },
  {
    id: "bottomUpdateMessageNote",
    title: "按鈕更新文字",
    description: `<p>註：此處是用傳統 JavaScript 寫的 DOM 操作，若在 Vue.js 中，可以改透過 <code>v-text</code> 、 <code>{{ message }}</code> 或 <code>v-html</code> 等「響應式資料綁定」來實現畫面更新。</p>`,
    demoStyle: null,
    component: defineAsyncComponent(() =>
      import("../../components/WebNoteView/JavascriptNoteView/ButtomUpdateMessageNoteDemo.vue")
    ),
    demo: 
`<div id="msg">原始文字</div>
<button onclick="updateMessage1()">Update Message 1</button>
<button onclick="updateMessage2()">Update Message 2</button>`,
    demoJS: 
`function updateMessage1() {
  document.getElementById('msg').innerHTML = "<i>我是按鈕一的文字</i>";
};
                    
function updateMessage2() {
  document.getElementById('msg').innerHTML = "<i>我是按鈕二的文字</i>";
};`
  },
  {
    id: "rocDateToAdDateNote",
    title: "民國紀年改成西元",
    description: null,
    demoStyle: null,
    component: null,
    demo: null,
    demoJS: 
`// 先設一個函式轉換日期格式
// 中華民國年份改成西元
const ROCDateToADDate = (date) => {
  // 年份轉換
  date = date.replace(/\d{3}/, (match => String(+match + 1911)));  // 將前三位數字加上1911，使其從民國紀年轉為西元紀年

  // 季度換成每季第一天
  // 定義一個對應表，用於將季度表示（如Q1, Q2）轉換成對應的日期
  const seasonDates = {
    Q1: "-01-01",
    Q2: "-04-01",
    Q3: "-07-01",
    Q4: "-10-01"
  };

  const season = date.match(/Q\d/)[0];  // 找到季度表示（如Q1, Q2），因為'.match()'會返回一個陣列（此處為單元素陣列），所以需要用[0]取出該元素
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
`
  },
  {
    id: "ES6ClassNote",
    title: "一個典型的 class",
    description: 
`<p style="padding-top: 8px;">一個常見的 <code>class</code> 結構包含：</p>
<ul style="line-height: 1.65;">
  <li><strong>constructor</strong> → 初始化屬性</li>
  <li><strong>instance methods</strong> → 實例可以呼叫的方法</li>
  <li><strong>getters</strong> / <strong>setters</strong> → 讀取或修改屬性時做特殊處理</li>
  <li><strong>static methods</strong> → 類別本身的方法（不用 <code>new</code> 就能呼叫）</li>
  <li><strong>繼承（extends + super）</strong>→ 讓子類別可以共用父類別的功能</li>
</ul>`,
    demoStyle: null,
    component: null,
    demo: null,
    demoJS: 
`class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Instance method
  sayHello() {` + "\n" +
"    return `Hi, I'm ${this.name}`;" + "\n" +
`  }

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
`
  }
  // ...把其他 tab 照此格式一一加入 tabs 陣列
];

const activeTab = ref(tabs[3].id);

const currentTab = computed(() => {
  return tabs.find(t => t.id === activeTab.value) || tabs[0];
});

// 每次切換後重新 highlight
onMounted(() => {
  nextTick(() => hljs.highlightAll());
});

function handleHighlight() {
  nextTick(() => {
    // 清除所有<code>上的data-highlighted屬性標記
    document.querySelectorAll("pre code").forEach(el => {
      delete el.dataset.highlighted;
    });

    // 重新高亮
    hljs.highlightAll();
  });
};
</script>

<style scoped>
.javascript-note-view {
  max-width: 100%;
}

/* 分欄布局 */
.layout {
  display: flex;
  gap: 20px;
  margin-bottom: 32px;
}

/* 左側 Sidebar */
.sidebar {
  flex: 0 0 200px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 4px;
}

.sidebar li.active {
  background-color: #ffc107; /* bootstrap warning color */
  color: #333333;
}

.sidebar li:hover:not(.active) {
  background-color: #eeeeee;
}

/* 右側 Content */
/* 淡入淡出動畫：fade */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.12s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.content {
  flex: 1;
}

.content-title {
  font-size: 24px;
  margin-top: 0;
  margin-bottom: 8px;
}

/* Demo 區塊樣式 */
.demo {
  padding: 16px;
  margin-bottom: 16px;
}

/* 其他樣式寫在style.css裡 */
pre code {
  padding: 24px;
}

/* 響應式結構，斷點為 992px */
@media (max-width: 992px) {
  .layout {
    flex-direction: column;
  }

  .sidebar {
    margin-bottom: 16px;
    flex: 0;
  }

  .sidebar ul {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .sidebar li {
    margin-bottom: 0; /* 移除原本的垂直 margin */
    padding: 8px 12px;
    border: 1px solid #cccccc;
  }
}
</style>
