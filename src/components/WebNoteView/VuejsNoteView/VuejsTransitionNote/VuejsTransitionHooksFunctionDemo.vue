<template>
  <button @click="getUserInfo">取得隨機User資訊</button>

  <div class="flexbox-wrapper" :style="{ height: heightControlByVue + 'px'}">
    <div class="flexbox-body" ref="content">
      <div class="user-block" v-if="userInfo.name">
        <h6>{{ userInfo.name }} / @{{ userInfo.username }}</h6>

        <img src="https://dummyimage.com/200x200/666/fff" alt="dummyimage">
        <div class="wraps">
          <p>{{ userInfo.company.name }}</p>
          <p>{{ userInfo.phone }}</p>
          <p>{{ userInfo.email }}</p>
        </div>
      </div>
    </div>

    <!-- hooks event需搭配v-on使用 -->
    <transition
      @before-enter="beforeEnter"
      @before-leave="beforeLeave"
      name="user-info"
    >
      <!-- loading圖 -->
      <div class="loading" v-if="isLoading">
        載入中...
        <span class="spinner"></span>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, nextTick } from "vue";

const heightControlByVue = ref(0);
const userInfo = ref({});
const isLoading = ref(false);
const content = ref(null);

function getRandomUserIdNumber() {
  // 隨機從1~10取出一數字作為user ID
  return Math.ceil(Math.random() * 10);
};

async function getUserInfo() {
  // 從jsonplaceholder取得隨機假資料
  isLoading.value = true;
  userInfo.value = {};  // 清空舊資料
  const userId = getRandomUserIdNumber();

  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + userId
  ).then(response => response.json());

  // 加上setTimeout模擬延遲，避免回傳太快看不到loading
  window.setTimeout(() => {
    isLoading.value = false;
    userInfo.value = res;
  }, 800);
};

function beforeEnter() {
  // 開始執行動畫前，將文字區塊的高度歸零
  heightControlByVue.value = 0;
};

function beforeLeave() {
  // 取得隨機文字後，為確保資料與畫面同步，使用nextTick
  // 並透過getBoundingClientRect()來取得DOM實際高度
  nextTick(() => {
    heightControlByVue.value = content.value.getBoundingClientRect().height;
  });
};
</script>

<style scoped>
.flexbox-wrapper {
  position: relative;
  overflow: hidden;
  transition: height 1s;
  min-height: 60px;  /* 缺少這一行會導致Loading的<div>不可見 */
}

.user-block {
  overflow: hidden;
  background: #eeeeee;
  padding: 1rem;
  width: 420px;
}
        
.user-block img {
  width: 100px;
  height: 100px;
  float: left;
  margin: 0.5rem 1rem 0 0;
}

.user-block .wraps {    
  float: left;
  margin-top: 0.5rem;
  margin-left: 0.7rem;
  font-size: 0.9rem;
}

.user-info-enter-active,
.user-info-leave-active {
  transition: opacity 1s;
}
        
.user-info-enter-from,
.user-info-leave-to {
  opacity: 0;
}

button {
  cursor: pointer;
}

/* 自製loading、spinner */
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-align: center;
  color: #333333;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #dddddd;  /* 淡色邊框 */
  border-top-color: #333333;  /* 深色邊框，會形成旋轉效果 */
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

/* 旋轉動畫 */
@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
