<template>
  <div class="lightbox">
    <teleport to="body" v-if="isShow">
      <div class="modal-mask" @click.self="toggleModal">
        <div class="modal-body">
          <slot name="content" v-bind:hello="helloString[lang]"></slot>
        </div>
      </div>
    </teleport>

    <button @click="isShow = true">Click Me</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  lang: {
    type: String,
    default: "tw"
  }
});

const isShow = ref(false);
const helloString = ref({
  "tw": "哈囉世界！",
  "en": "Hello World!",
  "de": "Hello Welt!"
});

function toggleModal() {
  isShow.value = !isShow.value;
};
</script>

<style scoped>
.lightbox {
  width: 90%;
}

.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2000;
  background-color: rgb(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  cursor: pointer;
}

.modal-body {
  cursor: auto;
  width: 50%;
  margin: 0 auto;
  padding: 32px;
  background-color: #fafafa;
}

button {
  cursor: pointer;
}
</style>
