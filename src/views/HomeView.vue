<template>
  <div class="home-view">
    <!-- Banner Section -->
    <header class="banner" :style="{ backgroundImage: `url(${bannerImgUrl})` }">
      <div class="banner-content" :style="{ opacity: textOpacity }">
        <h1>阿蛤ㄉ窩</h1>
        <p>一場奇幻之旅</p>
      </div>
    </header>

    <!-- semi-nav-buttons Section -->
    <section class="button-grid">
      <div
        v-for="item in buttons"
        :key="item.title"
        class="button-item"
      >
        <router-link :to="{ name: item.href }" class="semi-nav-button">
          <img :src="item.img" :alt="item.subtitle" />
          <div class="button-text">
            <strong>{{ item.title }}</strong>
            <span>{{ item.subtitle }}</span>
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount } from "vue";
import bannerImgUrl from "../assets/home-view/Kodak_UltraMax_053.jpg";

// Vite 的批次導入工具（batch import），適合用來載入靜態資源
const images = import.meta.glob("../assets/home-view/*", { eager: true, as: "url"});

const buttons = [
  // { title: '旅遊', subtitle: '旅遊記憶', href: 'trip.html', img: images['../assets/home-view/IMG_1217.jpg'] },
  { title: '攝影', subtitle: '攝影相關', href: 'photo-portfolio', img: images['../assets/home-view/Kodak_UltraMax_002.jpg'] },
  // { title: '公路', subtitle: '公路紀錄', href: 'road.html', img: images['../assets/home-view/Ilford_HP5_Plus_036.jpg'] },
  { title: '網頁', subtitle: '網頁練習', href: 'web-note', img: images['../assets/home-view/網頁截圖.png'] },
  // { title: '學習', subtitle: '學習筆記', href: 'learn.html', img: images['../assets/home-view/學習按鈕圖.png'] },
  // { title: '其他', subtitle: '其他東東', href: '#', img: images['../assets/home-view/facebook_img_2024.jpg'] }
];

// Banner Section 文字捲動效果
const textOpacity = ref(1);

const handleScroll = () => {
  const scrollY = window.scrollY;
  const fadeStart = window.innerHeight * 0.12;
  const fadeEnd = window.innerHeight * 0.2;
  // 用Math.min()和Math.max()確保 0 <= progress <= 1
  const progress = Math.min(1, Math.max(0, ( scrollY - fadeStart ) / ( fadeEnd - fadeStart )));
  textOpacity.value = 1 - progress;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeMount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* Banner */
.banner {
  background-size: cover;
  background-position: center;
  height: 52vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  font-family: serif;
}

.banner-content { 
  position: fixed;
  top: 32%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: fadeIn 1s ease; /* 一開始進網頁的時候 */
  transition: opacity 0.5s ease; /* 讓 opacity 更平滑 */
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.banner-content h1 {
  color: #ffffff;
  font-size: 30px;
  margin: 0;
}

.banner-content p {
  font-size: 14px;
  color: #eeeeee;
}

/* Button Grid */
.button-grid {
  padding: 56px 44px;
  max-width: 1080px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 28px;
}

.button-item {
  display: flex;
  justify-content: center;
}

.semi-nav-button {
  display: flex;
  align-items: center;
  width: 90%;
  text-decoration: none;
  color: black;
  border: 1.5px solid lightgray;
  background-color: white;
  border-radius: 12px;
  box-shadow: 2px 2px 3px lightgray;
  overflow: hidden;
  transition: transform 0.25s, background-color 0.25s;
}

.semi-nav-button img {
  width: 60px;
  height: 60px;
  border: 0.1px solid #cdcdcd;
}

.semi-nav-button .button-text {
  padding-left: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.semi-nav-button .button-text strong {
  font-size: 18px;
}

.semi-nav-button .button-text span {
  font-size: 12px;
  color: gray;
  padding-top: 4px;
}

.semi-nav-button:hover {
  background-color: #dedede;
  transform: translateY(-3px);
}
</style>
