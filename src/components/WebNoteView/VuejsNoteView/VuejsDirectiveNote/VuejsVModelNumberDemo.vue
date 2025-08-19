<template>
  字串相加<br />
  <input v-model="message14a"> + <input v-model="message14b"> = {{ stringSum }}<br>
  <br />
  數字相加<br />
  <input v-model.number="message15a"> + <input v-model.number="message15b"> = {{ numberSum }}
</template>

<script setup>
import { ref, computed } from 'vue';

const message14a = ref(0);
const message14b = ref(0);
const stringSum = computed(() => message14a.value + message14b.value);

const message15a = ref(0);
const message15b = ref(0);
const numberSum = computed(() => message15a.value + message15b.value);
</script>

<style scoped></style>
