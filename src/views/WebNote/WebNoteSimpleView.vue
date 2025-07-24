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
      <section class="content">
        <h3 class="content-title">{{ currentTab.title }}</h3>
        <hr />

        <!-- 先顯示說明，再示範效果，再顯示程式碼 -->
        <div class="description" v-if="currentTab.description">
          <p>{{ currentTab.description }}</p>
        </div>
        <div
          class="demo"
          :style="currentTab.demoStyle"
          v-html="currentTab.demo"></div>
        <pre><code class="html">{{ currentTab.demo }}</code></pre>
      </section>
    </div>
  </div>
</template>

<script setup>
// 預先 import Highlight.js
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";
import "highlight.js/styles/vs2015.css";
hljs.registerLanguage("html", html);

import { onMounted, watch, ref, computed, nextTick } from "vue";

const tabs = [
  {
    id: 'noteSpacing',
    title: '字的間距',
    description: null,
    demoStyle: null,
    demo: `
<ul class="spacing-test">
  <li>I love bird. 我愛鳥</li>
  <li><span style="letter-spacing: 8px;">I love bird. 我愛鳥</span></li>
  <li><span style="word-spacing: 8px;">I love bird. 我愛鳥</span></li>
</ul>`
  },
  {
    id: 'noteTextShadow',
    title: '文字陰影',
    description: null,
    demoStyle: "font-size: 24px;",
    demo: `
<p style="text-shadow: 3px 3px 3px gray;">文字測試一</p>
<p style="text-shadow: 3px 3px 3px black;">文字測試二</p>
<p style="text-shadow: -5px 12px 5px gray;">文字測試三</p>
<p style="text-shadow: 5px 12px 5px gray;">文字測試四</p>
<p style="text-shadow: 12px 5px 5px gray;">文字測試五</p>
<p style="text-shadow: 12px 5px 3px gray;">文字測試六</p>
<p style="text-shadow: 12px 5px 10px gray;">文字測試七</p>
<p style="text-shadow: 12px 5px 20px gray;">文字測試八</p>
<p style="text-shadow: 12px 5px gray;">文字測試九</p>`
  },
  {
    id: 'noteBorderTest',
    title: 'Border Test',
    description: null,
    demoStyle: "display: flex; flex-wrap: wrap; gap: 12px;",
    demo: `
<div style="border: solid;">border: solid</div>
<div style="border: double;">border: double</div>
<div style="border: dotted;">border: dotted</div>
<div style="border: dashed;">border: dashed</div>
<div style="border: none;">border: none</div>
<div style="border: groove;">border: groove</div>
<div style="border: ridge;">border: ridge</div>
<div style="border: inset;">border: inset</div>
<div style="border: outset;">border: outset</div>`
  },
  {
    id: 'noteFloat',
    title: '文繞圖Float測試',
    description: null,
    demoStyle: "display: flex; flex-wrap: wrap;",
    demo: `
<div style="background-color: #eeeeee; border: 0.5px solid gray; width: 300px; height: 200px;">
  <div style="width: 100px; height: 67px; float: left; background-color: #c8c8c8; border: 1px solid #222222"></div>
  <p style="padding: 20px;">測試文繞圖<br>（圖片style="float: left;"）</p>
</div>
<div style="background-color: #eeeeee; border: 0.5px solid gray; width: 300px; height: 200px;">
  <a><img src="assets/Kodak_UltraMax_053.jpg" title="小門嶼一隅(Kodak Ultramax400)" style="width: 50%; float: right; padding: 15px;"></a>
  <p style="padding: 20px;">測試文繞圖<br>（圖片style="float: right;"）</p>
</div>
<div style="background-color: #eeeeee; border: 0.5px solid gray; width: 300px; height: 200px;">
  <a><img src="assets/Kodak_UltraMax_053.jpg" title="小門嶼一隅(Kodak Ultramax400)" style="width: 50%; padding: 15px;"></a>
  <p style="padding: 20px; float: left;">測試文繞圖<br>（文字style="float: left;"）</p>
</div>
<div style="background-color: #eeeeee; border: 0.5px solid gray; width: 300px; height: 200px;">
  <a><img src="assets/Kodak_UltraMax_053.jpg" title="小門嶼一隅(Kodak Ultramax400)" style="width: 50%; padding: 15px;"></a>
  <p style="padding: 20px; float: right;">測試文繞圖<br>（文字style="float: right;"）</p>
</div>`
  },
  {
    id: 'noteDropDownHref',
    title: '下拉式超連結',
    description: null,
    demoStyle: "font-size: 24px;",
    demo: `
<p style="text-shadow: 3px 3px 3px gray">文字測試一</p>
<p style="text-shadow: 3px 3px 3px black">文字測試二</p>
<p style="text-shadow: 12px 5px gray">文字測試九</p>`
  },
  {
    id: 'noteMoveToChangeImg',
    title: '移動游標換照片',
    description: null,
    demoStyle: "font-size: 24px;",
    demo: `
<p style="text-shadow: 3px 3px 3px gray">文字測試一</p>
<p style="text-shadow: 3px 3px 3px black">文字測試二</p>
<p style="text-shadow: 12px 5px gray">文字測試九</p>`
  },
  {
    id: 'notePictureChange',
    title: '疊圖照片接替出現',
    description: null,
    demoStyle: "font-size: 24px;",
    demo: `
<p style="text-shadow: 3px 3px 3px gray">文字測試一</p>
<p style="text-shadow: 3px 3px 3px black">文字測試二</p>
<p style="text-shadow: 12px 5px gray">文字測試九</p>`
  },
  {
    id: 'noteChineseFonts',
    title: '各式中文字體',
    description: null,
    demoStyle: "font-size: 24px;",
    demo: `
<p style="text-shadow: 3px 3px 3px gray">文字測試一</p>
<p style="text-shadow: 3px 3px 3px black">文字測試二</p>
<p style="text-shadow: 12px 5px gray">文字測試九</p>`
  },
  // ...把其他 tab 照此格式一一加入 tabs 陣列
];

const activeTab = ref(tabs[3].id);

// 處理到這邊，後面待處理
const currentTab = computed(() => {
  return tabs.find(t => t.id === activeTab.value) || tabs[0];
});

// 每次切換後重新 highlight
onMounted(() => {
  nextTick(() => hljs.highlightAll())
})

watch(activeTab, () => {
  nextTick(() => {
    // 清除所有<code>上的data-highlighted屬性標記
    document.querySelectorAll("pre code").forEach(el => {
      delete el.dataset.highlighted;
    });

    // 重新高亮
    hljs.highlightAll()
  });
});
</script>

<style scoped>
/* 分欄布局 */
.layout {
  display: flex;
  gap: 20px;
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
  color: #333;
}
.sidebar li:hover:not(.active) {
  background-color: #eee;
}

/* 右側 Content */
.content { flex: 1; }
.content-title {
  font-size: 1.5rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
}

/* Demo 區塊樣式 */
.demo {
  background: #f8f9fa;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 4px;
}

/* Code block */
pre {
  background: #2d2d2d;
  color: #f8f8f2;
  padding-bottom: 16px;
  overflow: auto;
  border-radius: 4px;
}
</style>
