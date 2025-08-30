<template>
  <h3>User ID: {{ $route.params.userId }} - {{ userInfo.name }}</h3>
  <p>
    username: {{ userInfo.name }}<br />
    email: {{ userInfo.email }}<br />
    phone: {{ userInfo.phone }}
  </p>
  <hr />
  <h4>原始資料如下：</h4>
  <pre><code>{{ userInfo }}</code></pre>
  <br />
  <router-link :to="{ name: 'posts', params: { userId } }">
    查看post
  </router-link>
  <router-view></router-view>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();  // 先呼叫一次存在route，避免多次呼叫useRoute()
const userInfo = ref({});

// 假設URL為'/users/1'，'route.params.userId'的值就是1
const userId = computed(() => route.params.userId);
  
async function fetchUserInfo(id) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  return res.json();
};

onMounted(async () => {
  userInfo.value = await fetchUserInfo(userId.value);
});

// 監聽userId的變化
watch(userId, async (val) => {
  userInfo.value = await fetchUserInfo(val);
});
</script>

<style scoped></style>
