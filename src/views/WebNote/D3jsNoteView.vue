<template>
  <div class="d3js-note-view">
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

          <!-- 總說明 -->
          <div
            class="description"
            v-if="currentTab.description"
            v-html="currentTab.description"
          ></div>
          <div
            v-if="currentTab.descriptionComponent"
            :style="currentTab.descriptionComponentStyle"
            class="description-component"
          >
            <component :is="currentTab.descriptionComponent"></component>
          </div>

          <!-- 大項說明 -->
          <ul
            v-if="currentTab.lists.length && currentTab.lists[0].listTitle"
            class="content-body"
          >
            <li
              v-for="list in currentTab.lists"
              :key="list.listTitle"
              class="list"
            >
              <h4 class="list-title" v-html="list.listTitle"></h4>
              <div
                v-if="list.listSubtitle"
                class="list-subtitle"
                v-html="list.listSubtitle"
              ></div>
              <div
                v-if="list.listComponent"
                class="lists-demo"
              >
                <component :is="list.listComponent"></component>
              </div>

              <!-- 大項程式碼 -->
              <div
                v-if="list.listCode.htmlCode || list.listCode.jsCode || list.listCode.vueCode"
                class="code"
              >
                <template v-if="list.listCode.htmlCode">
                  <!-- html code: -->
                  <pre><code class="html">{{ list.listCode.htmlCode }}</code></pre>
                </template>

                <template v-if="list.listCode.jsCode">
                  <!-- javascript code: -->
                  <pre><code class="javascript">{{ list.listCode.jsCode }}</code></pre>
                </template>

                <template v-if="list.listCode.vueCode">
                  Vue SFC 這樣寫（Vue 3 - Composition API）：
                  <pre><code class="html">{{ list.listCode.vueCode }}</code></pre>
                </template>
              </div>


              <!-- 小項說明 -->
              <ol v-if="list.listDetails.length && list.listDetails[0].detailTitle">
                <li
                  v-for="detail in list.listDetails"
                  :key="detail.detailTitle"
                  class="detail"
                >
                  <h5 class="detail-title" v-html="detail.detailTitle"></h5>
                  <div
                    v-if="detail.detailSubtitle"
                    class="detail-subtitle"
                    v-html="detail.detailSubtitle"
                  ></div>
                  <div v-if="detail.detailComponent" class="details-demo">
                    <component :is="detail.detailComponent"></component>
                  </div>

                  <!-- 小項程式碼 -->
                  <div
                    v-if="detail.detailCode.htmlCode || detail.detailCode.jsCode || detail.detailCode.vueCode"
                    class="code"
                  >
                    <template v-if="detail.detailCode.htmlCode">
                      <!-- html code: -->
                      <pre><code class="html">{{ detail.detailCode.htmlCode }}</code></pre>
                    </template>

                    <template v-if="detail.detailCode.jsCode">
                      <!-- javascript code: -->
                      <pre><code class="javascript">{{ detail.detailCode.jsCode }}</code></pre>
                    </template>

                    <template v-if="detail.detailCode.vueCode">
                      Vue SFC 這樣寫（Vue 3 - Composition API）：
                      <pre><code class="html">{{ detail.detailCode.vueCode }}</code></pre>
                    </template>
                  </div>
                </li>
              </ol>
            </li>
          </ul>
        </section>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed, nextTick, defineAsyncComponent } from "vue";

// import 資料進來渲染
import { d3jsNoteViewTabs } from "../../data/web-note-view/d3js-note-view/d3js-note-view-tabs";
const tabs = d3jsNoteViewTabs;

// 處理 tab 切換
const activeTab = ref(tabs[7].id);
const currentTab = computed(() => {
  return tabs.find(t => t.id === activeTab.value) || tabs[0];
});


// 預先 import Highlight.js
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/vs2015.css";
hljs.registerLanguage("html", html);
hljs.registerLanguage("javascript", javascript);

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
.d3js-note-view {
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

/* import 的內容格式 */
::v-deep(.content h1),
::v-deep(.content h2),
::v-deep(.content h3:not(.content-title)),
::v-deep(.content h4),
::v-deep(.content h5),
::v-deep(.content h6) {
  margin-top: 16px;
  margin-bottom: 8px;
}

.description {
  margin-bottom: 36px;
}

.list {
  margin-bottom: 60px;
}

.list-title {
  font-size: 22px;
}

.list-subtitle {
  margin-bottom: 28px;
}

.detail {
  margin-bottom: 28px;
}

.detail-title {
  font-size: 16px;
}

.detail-subtitle {
  color: rgba(33, 37, 41, 0.75);
  font-size: 12px;
  font-style: italic;
  margin-bottom: 8px;
}

.detail-subtitle ::v-deep(code) {
  font-style: normal;
}

.detail-subtitle::before {
  content: "- ";
}

/* Demo 區塊樣式 */
.lists-demo,
.details-demo {
  padding: 16px 16px;
  margin-bottom: 8px;
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

/* 表格樣式 */
::v-deep(table) {
  border: 1px solid #666666;
  border-collapse: collapse;
}

::v-deep(th),
::v-deep(td) {
  border: 1px solid #666666;
  padding: 4px;
}
</style>
