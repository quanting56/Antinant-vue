<template>
  <div class="book-item">
    <div>書名： <input type="text" v-model="bookInfo.name"></div>
    <div>作者： <input type="text" v-model="bookInfo.author"></div>
    <div>出版日期： <input type="text" v-model="bookInfo.publishedAt"></div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps(["id", "name", "author", "publishedAt"]);

const bookInfo = ref({
  id: props.id,
  name: props.name,
  author: props.author,
  publishedAt: props.publishedAt
});

// Composition API中，要先明確宣告要用哪些事件
const emit = defineEmits(["update"]);

// 深度監聽物件 → 當任何屬性變更，emit給父層
watch(bookInfo, (val) => {
  emit("update", val);  // 當watch事件觸發，發射"update"事件
},
// 注意！bookInfo物件必須加上deep: true
// Vue才能做物件的深層更新偵測（偵測物件內部所有層次的屬性變化）
{ deep: true });
</script>

<style scoped>
.book-item {
  margin-bottom: 16px;
}
</style>
