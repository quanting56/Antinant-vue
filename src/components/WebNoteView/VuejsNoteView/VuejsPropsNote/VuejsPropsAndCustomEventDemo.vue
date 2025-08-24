<template>
  <ul v-for="(book, idx) in books" :key="book.id">
    <li>{{ book.name }}</li>
    <li>{{ book.author }}</li>
    <li>{{ book.publishedAt }}</li>
  </ul>

  <!-- 直接將v-for物件作為props傳遞 -->
  <!-- 並監聽自定義事件（此處update為自訂義事件） -->
  <my-component
    v-for="(book, idx) in books"
    :key="idx"
    v-bind="book"
    @update="updateInfo"
  ></my-component>
</template>

<script setup>
import { ref } from "vue";
import MyComponent from "./VuejsPropsAndCustomEventDemo/MyComponent.vue";

const books = ref([
  {
    id: "a00001",
    name: "D3.js資料視覺化實用攻略：完整掌握Web開發技術，繪製互動式圖表不求人",
    author: "金筠婷",
    publishedAt: "2023/06/16"
  },
  {
    id: "a00002",
    name: "重新認識Vue.js：008天絕對看不完的Vue.js 3指南",
    author: "許國政",
    publishedAt: "2021/02/09"
  }
]);

function updateInfo(val) {
  const idx = books.value.findIndex(d => d.id === val.id);
  books.value[idx] = val;
};
</script>

<style scoped>
ul {
  margin-bottom: 32px;
}
</style>
