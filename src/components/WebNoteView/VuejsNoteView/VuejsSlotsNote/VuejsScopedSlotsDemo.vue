<template>
  <p>
    請選擇：
    <select v-model="lang">
      <option v-for="n in langOptions" :value="n.val">{{ n.name }}</option>
    </select>
  </p>

  <light-box :lang="lang">
    <template v-slot:content="slotProps">
      {{ langOptions.find(d => d.val === lang)["name"] }}: {{ slotProps.hello }}
    </template>
  </light-box>
</template>

<script setup>
import { ref } from "vue";
import LightBox from "./VuejsScopedSlotsDemo/LightBox.vue";

const langOptions = ref([
  {name: "繁體中文", val: "tw"},
  {name: "英文", val: "en"},
  {name: "德文", val: "de"}
]);
const lang = ref("tw");
</script>

<style scoped></style>
