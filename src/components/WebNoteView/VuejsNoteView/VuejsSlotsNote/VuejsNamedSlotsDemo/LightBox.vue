<template>
  <div class="lightbox">
    <div class="modal-mask" :style="modalStyle">
      <div class="modal-container" @click.self="toggleModal">
        <div class="modal-body">
          <header>
            <slot name="header">Default Header</slot>
          </header>
          <hr>
          <section>
            <slot>Default Body</slot>
          </section>
          <hr>
          <footer>
            <slot name="footer">Default Footer</slot>
          </footer>
        </div>
      </div>
    </div>
  
    <button @click="isShow = true">Click Me</button>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const isShow = ref(false);

const modalStyle = computed(() => {
  return {
    "display": isShow.value ? "" : "none"
  };
});

function toggleModal() {
  isShow.value = !isShow.value;
}
</script>

<style scoped>
.lightbox {
  position: relative;
  display: table;
  width: 90%;
}

.modal-mask {
  position: absolute;
  display: table-cell;
  width: 100%;
  z-index: 20;
  background-color: rgb(0, 0, 0, 0.5);
}

.modal-container {
  cursor: pointer;
  padding-top: 48px;
  padding-bottom: 48px;
}

.modal-body {
  cursor: auto;
  width: 50%;
  margin: 0 auto;
  padding: 32px;
  background-color: #fafafa;
}
</style>
