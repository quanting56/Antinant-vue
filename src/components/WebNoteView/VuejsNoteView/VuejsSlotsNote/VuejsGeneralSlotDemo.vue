<template>
  <p>&gt; {{ msg }}</p>
  <custom-component>{{ msg }}</custom-component>
</template>

<script setup>
import { ref } from "vue";
import CustomComponent from "./VuejsGeneralSlotDemo/CustomComponent.vue";

const msg = ref("Parent!");
</script>

<style scoped>
p {
  margin-top: 0;
}
</style>
