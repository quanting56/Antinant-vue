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