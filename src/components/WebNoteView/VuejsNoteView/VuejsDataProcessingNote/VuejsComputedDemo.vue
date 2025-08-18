<template>
  <p>
    <input v-model="price" placeholder="0"> 元/顆蘋果
     * <input v-model="quantity" placeholder="0"> 顆蘋果
     = {{ subtotal }} 元
  </p>
</template>

<script setup>
import { ref, computed } from "vue";

const price = ref("");
const quantity = ref("");

// subtotal會隨著price, quantity自動計算
const subtotal = computed(() => price.value * quantity.value);
</script>

<style scoped></style>
