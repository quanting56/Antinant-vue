<template>
  <div v-for="i in sortedNumbers">{{ i }}</div>
</template>

<script setup>
import { ref, computed } from "vue";

const numbers = ref([3, 5, 2, 6, 1, 9, 8, 7]);
const sortedNumbers = computed(() => {
  // return this.numbers.sort((a, b) => b - a);  // 若在此直接執行.sort會直接改變this.numbers的順序
  return [...numbers.value].sort((a, b) => a - b);  // 先透過[...this.numbers]複製一份新陣列再排序
});
</script>

<style scoped></style>
