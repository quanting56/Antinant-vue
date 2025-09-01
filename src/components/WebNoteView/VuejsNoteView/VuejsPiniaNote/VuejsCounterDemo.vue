<template>
  <div>
    <p>Count: {{ counter.count }}</p>
    <p>Double: {{ counter.doubleCount }}</p>
    <button @click="counter.increment">+1</button>
    <button @click="counter.reset">reset</button>
  </div>
</template>

<script setup>
import { useCounterStore } from "../../../../stores/webNote/VuejsNotePiniaNote/counterStore";

// 取得 store
const counter = useCounterStore();
</script>

<style scoped></style>
