<template>
  <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" @click="toggleDropdown">個人連結</button>
    <ul class="dropdown-menu" :class="{ show: isOpen }">
      <template v-for="(item, idx) in links" :key="idx">
        <li><div class="dropdown-divider"></div></li>
        <li><a class="dropdown-item" :href="item.link" target="_blank">{{ item.name }}</a></li>
      </template>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const links = ref([
  { name: "Instagram", link: "https://www.instagram.com/ting.d_927"},
  { name: "Facebook", link: "https://www.facebook.com/guanting.dong"},
  { name: "Line", link: "https://line.me/ti/p/fOtvr_KEbv"},
]);

// 取代Bootstrap樣式的code
const isOpen = ref(false);
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
/* 基本按鈕樣式 (模仿 bootstrap .btn & .btn-primary) */
.btn {
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #fff;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.375rem;
  transition: background-color 0.15s, border-color 0.15s;
}

.btn-primary {
  background-color: #0d6efd;
  border-color: #0d6efd;
}

.btn-primary:hover {
  background-color: #0b5ed7;
  border-color: #0a58ca;
}

/* 下拉按鈕箭頭 */
.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-left: 0.3em solid transparent;
}

/* Dropdown 容器 */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown menu */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none; /* 預設隱藏 */
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.375rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.175);
}

.dropdown-menu.show {
  display: block;
}

/* Dropdown item */
.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.25rem 1rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}

.dropdown-item:hover {
  background-color: #f8f9fa;
  color: #16181b;
}

/* 分隔線 */
.dropdown-divider {
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 1px solid #e9ecef;
}
</style>
