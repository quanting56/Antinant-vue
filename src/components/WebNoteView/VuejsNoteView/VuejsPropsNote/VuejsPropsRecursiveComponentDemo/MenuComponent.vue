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
h3 {
  margin-top: 0 !important;
}

h3:hover {
  color: lightcoral;
  cursor: pointer;
}
</style>
