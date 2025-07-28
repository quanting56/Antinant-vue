<template>
  <div class="webnote-view">
    <div class="webnote-chapter-link">
      <router-link
        v-for="website in webNoteWebsites"
        :key="website.websiteName"
        :to="{ name: website.websiteName }"
        class="webnote-chapter-link-item"
      >{{ website.websiteTitle }}
      </router-link>
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

.webnote-chapter-link-item {
  padding-right: 12px;
}

.webnote-chapter-title {
  background-color: #ffc107;
}
</style>
