<template>
  <div class="my-component-book">
    <div>書名：<input type="text" v-model="localName"> <sub>&lt;- 這行是拿來測試單向資訊流</sub></div>
    <div>作者：<input type="text" v-model="localAuthor"> <sub>&lt;- 這行是拿來測試單向資訊流</sub></div>
    <div>出版日期：<input type="text" v-model="localPublishedAt"> <sub>&lt;- 這行是拿來測試單向資訊流</sub></div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  name: String,
  author: String,
  publishedAt: String
});

// 在本地建立一份data，以避免更改props
const localName = ref(props.name);
const localAuthor = ref(props.author);
const localPublishedAt = ref(props.publishedAt);
</script>

<style scoped>
.my-component-book {
  margin-top: 24px;
  margin-bottom: 8px;
}
</style>
