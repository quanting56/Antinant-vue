<template>
  <div class="webnote-view">
    <div class="webnote-chapter-link-wrapper">
      <div class="webnote-chapter-link">
        <router-link
          v-for="website in webNoteWebsites"
          :key="website.websiteName"
          :to="{ name: website.websiteName }"
          class="webnote-chapter-link-item"
          :class="{ active: route.name === website.websiteName }" 
        >{{ website.websiteTitle }}
        </router-link>
      </div>
    </div>
    <h2 class="webnote-chapter-title">{{ currentTitle }}</h2>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const webNoteWebsites = [
  {
    websiteName: "web-note-simple",
    websiteTitle: "一些與Bootstrap無關的筆記"
  },
  {
    websiteName: "useful-bootstrap-component",
    websiteTitle: "一些好用的Bootstrap元件"
  },
  {
    websiteName: "bootstrap-note",
    websiteTitle: "Bootstrap網格與內容樣式筆記"
  },
  {
    websiteName: "css-function-note",
    websiteTitle: "一些CSS函式庫"
  },
  {
    websiteName: "javascript-note",
    websiteTitle: "一些JavaScript筆記"
  },
  {
    websiteName: "d3js-note",
    websiteTitle: "D3.js資料視覺化筆記"
  },
  {
    websiteName: "vuejs-note",
    websiteTitle: "Vue.js（Vue 3）筆記"
  },
  {
    websiteName: "test-test-test",
    websiteTitle: "測試場"
  }
];

const currentTitle = computed(() => {
  const match = webNoteWebsites.find(
    site => site.websiteName === route.name
  );
  return match?.websiteTitle || "";
});
</script>

<style scoped>
.webnote-view {
  padding: 20px;
  font-family: serif;
  max-width: 1440px;
  margin: 0 auto;
}

.webnote-chapter-link-wrapper {
  display: flex;
  gap: 20px;
  margin-bottom: 32px;
  flex-direction: column;
}

.webnote-chapter-link {
  flex: 0;
  list-style: none;
  padding: 0%;
  margin: 0 0 16px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.webnote-chapter-link-item {
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #cccccc;
  text-decoration: none;
  color: #333333;
}

.webnote-chapter-link-item.active {
  border: 1px solid #551a8b;
  font-weight: 800;
  color: #551a8b;
}

.webnote-chapter-link-item:hover:not(.active) {
  background-color: #eeeeee;
}

.webnote-chapter-title {
  background-color: #ffc107;
  font-size: 28px;
}
</style>
