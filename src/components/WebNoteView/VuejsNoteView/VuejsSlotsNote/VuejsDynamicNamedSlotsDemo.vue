<template>
  <label v-for="opt in options">
    <input type="radio" :value="opt" v-model="dynamic_slot_name">{{ opt }}
  </label>

  <light-box>
    <!-- 透過所選的dynamic_slot_name動態切換對應的slot -->
    <template v-slot:[dynamic_slot_name]>
      <p>點擊按鈕我就會到那行去</p>
    </template>
  </light-box>
</template>

<script setup>
import { ref } from "vue";
import LightBox from "./VuejsDynamicNamedSlotsDemo/LightBox.vue";

const options = ref(["header", "footer", "default"]);
const dynamic_slot_name = ref("header");
</script>

<style scoped></style>
