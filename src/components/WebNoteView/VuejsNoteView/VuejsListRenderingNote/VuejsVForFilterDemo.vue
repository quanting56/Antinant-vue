<template>
  <div v-for="i in evenNumbers">{{ i }}</div>
</template>

<script setup>
import { ref, computed } from "vue";

const numbers = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const evenNumbers = computed(() => {
  return numbers.value.filter(num => num % 2 === 0);
});
</script>

<style scoped></style>
