<template>
  <div class="note-move-to-change-img">
    <div
      @mouseover="hovering = true"
      @mouseout="hovering = false"
      style="height: 250px; width: 250px;"
    >
      <img
        :src="hovering ? imageSrc.hover : imageSrc.default"
        :alt="'範例圖片 ' + (hovering ? 'hover' : 'default')"
        style="height: 250px;"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import defaultImage from "../../../assets/about-me/ntubicdsab_trademark.JPG";
import hoverImage from "../../../assets/about-me/ntubicd_trademark.png";

const hovering = ref(false)

const imageSrc = {
  default: defaultImage,
  hover: hoverImage
}
</script>

<style scoped></style>
