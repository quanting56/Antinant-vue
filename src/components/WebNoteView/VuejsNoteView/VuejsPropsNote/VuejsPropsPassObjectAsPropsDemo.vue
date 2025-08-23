<template>
  <p>↓↓↓</p>
  <p>這裡是父元件，由 <code>v-for</code> 將父元件的 data 渲染出來。</p>
  <p>此處修改父元件 <code>props</code> 時子元件的「本地副本」不會自動跟著改，因為只是複製初始值。</p>
  <ul v-for="book in books" :key="book.id">
    <div class="test-input">
      <input type="text" v-model="book.name"> <sub>&lt;- 這行是拿來測試單向資訊流</sub><br />
      <input type="text" v-model="book.author"> <sub>&lt;- 這行是拿來測試單向資訊流</sub><br />
      <input type="text" v-model="book.publishedAt"> <sub>&lt;- 這行是拿來測試單向資訊流</sub>
    </div>
    <div class="test-output">
      <li>書名：{{ book.name }}</li>
      <li>作者：{{ book.author }}</li>
      <li>出版日期：{{ book.publishedAt }}</li>
    </div>
  </ul>
  <hr />
  <p>這裡是子元件 <code>&lt;my-component&gt;</code>，透過在本地複製一份 <code>props</code> 資訊，來避免直接修改父元件傳來的 <code>props</code>。（若希望父元件修改時，子元件內容跟著改，可用 <code>watch</code> 監聽 <code>props</code>，讓本地副本跟著更新，此處未示範）</p>
  <my-component
    v-for="book in books"
    :name="book.name"
    :author="book.author"
    :published-at="book.publishedAt"></my-component>
  <!-- 上面<my-component>也可以寫成以下這樣，Vue.js會自動解構 -->
  <!-- <my-component
    v-for="book in books"
    v-bind="book"></my-component> -->
</template>

<script setup>
import { ref } from "vue";
import MyComponent from "./VuejsPropsPassObjectAsPropsDemo/MyComponent.vue";

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
  },
  {
    id: "a00003",
    name: "第三本書？",
    author: "作者？",
    publishedAt: "哪天出版？"
  }
]);
</script>

<style scoped>
p {
  margin-top: 0;
}

ul {
  margin-top: 32px;
  margin-bottom: 32px;
}
</style>
