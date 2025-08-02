<template>
  <div class="webnote-simple-view">
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
    
            <div class="demo">
              <!-- 若有component，就顯示component -->
              <component v-if="currentTab.component" :is="currentTab.component"></component>
              <!-- 否則用v-html顯示demo -->
              <div
                v-else
                v-html="currentTab.demo"
                :style="currentTab.demoStyle">
              </div>
            </div>
    
            <div class="code" v-if="currentTab.demo">
              html code:
              <pre><code class="html">{{ currentTab.demo }}</code></pre>
              
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

import { onMounted, defineAsyncComponent, ref, computed, nextTick } from "vue";

const tabs = [
  {
    id: "noteSpacing",
    title: "字的間距",
    description: "<p>字間距測試</p>",
    demoStyle: null,
    component: null,
    demo: 
`<ul class="spacing-test">
  <li>I love bird. 我愛鳥</li>
  <li><span style="letter-spacing: 8px;">I love bird. 我愛鳥</span></li>
  <li><span style="word-spacing: 8px;">I love bird. 我愛鳥</span></li>
</ul>`,
    demoJS: null
  },
  {
    id: "noteTextShadow",
    title: "文字陰影",
    description: "<p>文字陰影測試（text-shadow）</p>",
    demoStyle: "font-size: 24px;",
    component: null,
    demo: 
`<p style="text-shadow: 3px 3px 3px gray;">文字測試一</p>
<p style="text-shadow: 3px 3px 3px black;">文字測試二</p>
<p style="text-shadow: -5px 12px 5px gray;">文字測試三</p>
<p style="text-shadow: 5px 12px 5px gray;">文字測試四</p>
<p style="text-shadow: 12px 5px 5px gray;">文字測試五</p>
<p style="text-shadow: 12px 5px 3px gray;">文字測試六</p>
<p style="text-shadow: 12px 5px 10px gray;">文字測試七</p>
<p style="text-shadow: 12px 5px 20px gray;">文字測試八</p>
<p style="text-shadow: 12px 5px gray;">文字測試九</p>`,
    demoJS: null
  },
  {
    id: "noteBorderTest",
    title: "Border Test",
    description: null,
    demoStyle: "display: flex; flex-wrap: wrap; gap: 12px;",
    component: null,
    demo: 
`<div style="border: solid;">border: solid</div>
<div style="border: double;">border: double</div>
<div style="border: dotted;">border: dotted</div>
<div style="border: dashed;">border: dashed</div>
<div style="border: none;">border: none</div>
<div style="border: groove;">border: groove</div>
<div style="border: ridge;">border: ridge</div>
<div style="border: inset;">border: inset</div>
<div style="border: outset;">border: outset</div>`,
    demoJS: null
  },
  {
    id: "noteFloat",
    title: "文繞圖Float測試",
    description: null,
    demoStyle: "display: flex; flex-wrap: wrap;",
    component: null,
    demo: 
`<div style="background-color: #eeeeee; border: 0.5px solid gray; width: 400px; height: auto;">
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
</div>`,
    demoJS: null
  },
  {
    id: "noteDropDownHref",
    title: "下拉式超連結",
    description: "<p>透過超連結下拉式清單到新網頁</p>",
    demoStyle: null,
    component: defineAsyncComponent(() =>
      import("../../components/WebNoteView/WebNoteSimpleView/DropDownHrefNoteDemo.vue")
    ),
    demo: 
`<select id="searchEngine">
  <option value="Google">Google</option>
  <option value="Yahoo">Yahoo!奇摩</option>
  <option value="Bing">Bing</option>
</select>
<button onclick="toSearchEngine();">Go!</button>`,
    demoJS: 
`// 下拉式超連結
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
};`
  },
  {
    id: "noteMoveToChangeImg",
    title: "移動游標換照片",
    description: "<p>移動游標改變顯示圖標（JavaScript／jQuery）</p>",
    demoStyle: null,
    component: defineAsyncComponent(() =>
      import("../../components/WebNoteView/WebNoteSimpleView/ImageHoverSwitchNoteDemo.vue")
    ),
    demo: 
`<!-- 純 JavaScript 的 html code 用這個 -->
<div onmouseover="ntubicdImage()" onmouseout="ntubicdSabImage()" style="height: 250px; width: 250px;">
  <img id="changeImage1" src="assets/about_me/ntubicdsab_trademark.JPG" alt="拿來測試用的生傳mark" style="height: 250px;">
</div>



<!-- jQuery 的 html code 用這個 -->
<div style="height: 250px; width: 250px;">
  <img id="changeImage2" src="assets/ntubicdsab_trademark.JPG" alt="拿來測試用的生傳mark" style="height: 250px;">
</div>`,
    demoJS: 
`// 純 JavaScript 的 js code
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
});`
  },
  {
    id: "notePictureChange",
    title: "疊圖照片接替出現",
    description: null,
    demoStyle: null,
    component: defineAsyncComponent(() =>
      import("../../components/WebNoteView/WebNoteSimpleView/ImageOverlayTransitionNoteDemo.vue")
    ),
    demo: 
`<!-- 本段以 Vue SFC 寫成，並未使用純 HTML -->
<!-- 請至以下 SFC 檔查看 code -->
<!-- 路徑：/components/WebNoteView/WebNoteSimpleView/ImageOverlayTransitionNoteDemo.vue -->


<!-- 亦可至 https://quanting56.github.io/Antinant/web_note/two_picture_change.html 查看完整效果 -->`,
    demoJS: null
  },
  {
    id: "noteChineseFonts",
    title: "各式中文字體",
    description: null,
    demoStyle: "font-size: 20px; line-height: 1.8;",
    component: null,
    demo: 
`<ol>
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
</ol>`,
    demoJS: null
  },
  // ...把其他 tab 照此格式一一加入 tabs 陣列
];

const activeTab = ref(tabs[0].id);

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
.webnote-simple-view {
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
