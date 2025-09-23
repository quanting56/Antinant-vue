<template>
  <div class="python-note-view">
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
            <!-- 先顯示說明，再顯示程式碼 -->
            <div
              class="description"
              v-if="currentTab.description"
              v-html="currentTab.description"
            ></div>

            <div class="code">
              <template v-if="currentTab.pythonCode">
                Python code:
                <pre><code class="language-python">{{ currentTab.pythonCode }}</code></pre>
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
import python from "highlight.js/lib/languages/python";
import "highlight.js/styles/vs2015.css";
hljs.registerLanguage("python", python);

import { onMounted, ref, computed, nextTick } from "vue";

// import照片，用於tabs
// import ... from ...;

const tabs = [
  {
    id: "pythonZipProcessNote",
    title: "解壓縮/壓縮 zip",
    description: "<p><code>import zipfile</code> ，解壓縮 zip 或壓縮 zip。</p>",
    pythonCode: 
`import zipfile


# 解壓縮
files = zipfile.ZipFile("/Users/dongguanting/Downloads/python-3.5.1-embed-win32.zip")
print(files.namelist())  # 顯示zip裡包含了哪些檔案

# 方法一，解壓縮"python.exe"這個檔案到路徑
files.extract("python.exe", r"/Users/dongguanting/Downloads")

# 方法二，解壓縮全部檔案到路徑
files.extractall("/Users/dongguanting/Downloads")

files.close() # 關閉檔案物件


# 壓縮檔案
zip_file = zipfile.ZipFile("/Users/dongguanting/Downloads/python.zip", mode="w")  # 壓縮後的檔名
zip_file.write("/Users/dongguanting/Downloads/python.exe")  # 要壓縮的檔案
zip_file.close()  # 關閉檔案物件`
  },
  {
    id: "pythonOpenNote",
    title: "存取檔案物件",
    description: "<p>使用 <code>open()</code> 建立 <strong>檔案物件</strong> ，並進行操作。</p>",
    pythonCode: 
`# 開啟檔案
file_object = open("python.txt", "r")  # 讀寫模式
file_object = open("python.txt", "w")  # 寫入模式（覆蓋檔案）
file_object = open("python.txt", "a")  # 追加（從檔案末尾寫）


# 讀取檔案
file_object.read()  # 讀取檔案內容


# 寫入檔案
file_object.write("")  # 寫入空字串（等於清空）
file_object.write("this is sample in python.")  # 寫入文字
file_object.flush()  # 立即寫入硬碟


# 移動游標
file_object.seek(0)  # 回到檔案開頭


# 關閉檔案
file_object.close()  # 關閉檔案



# 不想寫".close()"的話，可以用"with"的寫法
with open("python.txt", "w+") as monkey:
    monkey.write("this is sample in python.\\n")
    monkey.seek(0)
    print(monkey.read())`
  },
  {
    id: "python???Note",
    title: "？？？",
    description: "<p><code>import zipfile</code> ，解壓縮 zip 或壓縮 zip。</p>",
    pythonCode: 
``
  },
  // ...把其他 tab 照此格式一一加入 tabs 陣列
];

const activeTab = ref(tabs[1].id);

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
