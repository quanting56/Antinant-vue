<template>
  <!-- Todo list -->
  <h4>Todo</h4>
  <ul>
    <li v-for="i in todoLists" :key="i.id">
      <label><input type="checkbox" v-model="i.isDone">{{ i.title }}</label>
    </li>
  </ul>

  <!-- Done List -->
  <h4>Done</h4>
  <ul>
    <li v-for="i in doneLists" :key="i.id">
      <label><input type="checkbox" v-model="i.isDone">{{ i.title }}</label>
    </li>
  </ul>
</template>

<script setup>
import { ref, computed } from "vue";

const lists = ref([
  { id: "task001", title: "洗澡", isDone: false },
  { id: "task002", title: "吃晚餐", isDone: false },
  { id: "task003", title: "記錄飲食", isDone: false }
]);
const todoLists = computed(() => {
  return lists.value.filter(d => !d.isDone);
});
const doneLists = computed(() => {
  return lists.value.filter(d => d.isDone);
});
</script>

<style scoped>
h4 {
  margin-top: 0 !important;
}
</style>
