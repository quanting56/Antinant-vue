<template>
  <div class="useful-bootstrap-component-view">
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
                :style="currentTab.demoStyle"
              ></div>
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

import { onMounted, ref, computed, nextTick } from "vue";

// import照片，用於tabs
// import ... from ...;

const tabs = [
  {
    id: "bootstrapIconNote",
    title: "Bootstrap-icons",
    description: `<p>📌 <a href="https://icons.bootcss.com" target="_blank">Bootstrap官方圖標庫</a></p><p>使用範例如下：</p>`,
    demoStyle: null,
    component: null,
    demo: 
`<!-- 可在 <head> 裡面增加此 <link> 以啟用 bootstrap-icons -->

<!--

<head>
  ...
  <link rel="stylesheet" href="css/bootstrap_icons-main/font/bootstrap-icons.css"/>
  ...
</head>

-->


<div style="display: flex;">
  <div style="display: flex; align-items: center; justify-content: center; height: 40px; width: 40px;">
    <i class="bi bi-person-bounding-box"></i>
  </div>
  <div style="display: flex; align-items: center; height: 40px; padding-left: 10px;">
    <p>
      <small style="color: #6c757d; font-weight: 300;">授課對象</small><br>
      生物產業傳播暨發展學系
    </p>
  </div>
</div>`,
    demoJS: null
  },
  {
    id: "fontawesomeIconNote",
    title: "Font-Awesome-icons",
    description: `<p>📌 <a href="https://fontawesome.com/icons" target="_blank">Font Awesome圖標庫</a></p>`,
    demoStyle: null,
    component: null,
    demo: null,
    demoJS: null
  },
  {
    id: "animateCssNote",
    title: "Animate.css",
    description: `<p>📌 <a href="https://animate.style" target="_blank">Animate.css動畫庫</a></p><p>使用範例如下：</p>`,
    demoStyle: null,
    component: null,
    demo: 
`<!-- 可在 <head> 裡面增加此 <link> 以啟用 Animate.css -->

<!--

<head>
  ...
  <link rel="stylesheet" href="css/animate_v4.1.1_min.css"/>
  ...
</head>

-->


<div style="padding-left: 60px; font-size: 30px;">
  <p class="animate__animated animate__rubberBand animate__infinite">rubberBand動畫效果</p>
</div>`,
    demoJS: null
  }
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
.useful-bootstrap-component-view {
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
