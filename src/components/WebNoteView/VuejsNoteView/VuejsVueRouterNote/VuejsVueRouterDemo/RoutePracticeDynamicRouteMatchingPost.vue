<template>
  <h3>Post form User-{{ userId }}</h3>
  <ol>
    <li v-for="post in posts" :key="post.id">
      <h4>{{ post.id }}</h4>
      <p>{{ post.body }}</p>
    </li>
  </ol>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();  // 把route先存起來
const posts = ref([]);

// 取得網址路由提供的userId
const userId = computed(() => route.params.userId);

// api:取得指定user的post列表
async function fetchUserPosts(id) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?userId=" + id);
  return res.json();
};

onMounted(async () => {
  posts.value = await fetchUserPosts(userId.value);
});
</script>

<style scoped></style>
