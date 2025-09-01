<template>
  <div>
    <p>產品名稱：{{ productStore.product }}</p>
    <p>大寫名稱：{{ productStore.upperProduct }}</p>
    <button @click="productStore.setProduct('Apple')">換 Apple</button>
    <button @click="productStore.setProduct('Banana')">換 Banana</button>
    <button @click="productStore.setProduct('Pinia')">換 Pinia</button>
  </div>
</template>

<script setup>
import { useProductStore } from "../../../../stores/webNote/VuejsNotePiniaNote/productStore"

// 拿到 store
const productStore = useProductStore();
</script>

<style scoped></style>
