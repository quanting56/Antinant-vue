<template>
  <input
    type="text"
    v-model.trim="message21"
    :class="{ 'active': isActive, 'text-danger': hasError }"
  >
</template>

<script setup>
import { ref, watch } from "vue";

const message21 = ref("");
const isActive = ref(true);
const hasError = ref(false);

watch(message21, (newValue) => {
  if ( newValue.length <= 5 ) {
    isActive.value = true;
    hasError.value = false;
  } else {
    isActive.value = false;
    hasError.value = true;
  };
});
</script>

<style scoped>
  .active {
    border: gray dashed 1px;
    color: blue;
  }
  .text-danger {
    border: red solid 1px;
    color: red;
  }
</style>
