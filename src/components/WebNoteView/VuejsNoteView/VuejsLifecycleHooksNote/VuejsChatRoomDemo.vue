<template>
  <div ref="msgContainer" style="max-height: 150px; overflow-y: auto;">
    <p v-for="m in messages">{{ m }}</p>
  </div>
  <input
    type="text"
    placeholder="輸入任意文字後按下Enter鍵"
    v-model.trim="msg"
    @keydown.enter="addToMessages"
  >
</template>

<script setup>
import { ref, nextTick } from "vue";

const msg = ref("");
const messages = ref(["Hello", "Vue.js is good", "Do you think so too?"]);
const msgContainer = ref(null);

async function addToMessages() {
  if (!msg.value) return;

  messages.value.push(msg.value);
  msg.value = "";

  // 等待 DOM 更新後捲到最底
  await nextTick();
  if (msgContainer.value) {
    msgContainer.value.scrollTop = msgContainer.value.scrollHeight;
  };
};
</script>

<style scoped></style>
