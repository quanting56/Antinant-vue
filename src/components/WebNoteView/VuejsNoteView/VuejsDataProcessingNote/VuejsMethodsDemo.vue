<template>
  <p>
    <input v-model="price" placeholder="0"> 元/顆蘋果
     * <input v-model="quantity" placeholder="0"> 顆蘋果
     = {{ subtotal() }} 元
  </p>
</template>

<script setup>
import { ref } from "vue";

const price = ref("");
const quantity = ref("");

// methods可以直接寫成函數
function subtotal() {
  return price.value * quantity.value;
}
</script>

<style scoped>
p {
  margin-top: 0;
}
</style>
