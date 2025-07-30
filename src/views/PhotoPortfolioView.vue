<template>
  <div class="photo-view">
    <router-link
      custom
      v-slot="{ navigate }"
      v-for="cardData in cardDatas"
      :to="cardData.href"
    >
      <div class="photo-card" @click="navigate" role="link">
        <div class="card">
          <img
            class="card-img"
            :src="cardData.image.src"
            :alt="cardData.image.alt"
            :title="cardData.image.title"
          />
          <div class="card-body">
            <h5 class="card-title">{{ cardData.title }}</h5>
            <p class="card-text" v-html="cardData.text"></p>
          </div>
          <small class="card-footer">{{ cardData.footer }}</small>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup>
// Vite 的批次導入工具（batch import），適合用來載入靜態資源
// const images = import.meta.glob("../assets/photo/*", { eager: true, as: "url"});
const images = import.meta.glob("../assets/*", { eager: true, as: "url"});

const cardDatas = [
  {
    title: "攝影社故事",
    text: "一場在<span style='font-family: Georgia, serif;'>2018.09 - 2021.01</span>間的冒險",
    href: "/photo/ntuphoto-life",
    image: {
      src: images["../assets/IMG_2073.jpg"],
      alt: "找一張攝影社合照來放",
      title: ""
    },
    footer: "致消逝的青春"
  },
  {
    title: "器材",
    text: "這些年噴了多少錢在這些酷東西上啊",
    href: "/photo/photographic-equipment",
    image: {
      src: images["../assets/photo/vue.svg"],
      alt: "要放攝影器材合照",
      title: ""
    },
    footer: "致消逝的錢錢"
  },
];
</script>

<style scoped>
.photo-view {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 40px 20px;
  background-color: #333333;
}

.photo-card {
  width: 100%;
  max-width: 400px;
  margin: 20px;
  transition: transform 0.25s ease-in-out, text-shadow 0.25s;
  cursor: pointer;
}

.photo-card:hover {
  text-shadow: 0px 0px 2px #ffffff;
  transform: translateY(-6px);
}

.card {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #f8f8f8;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  text-decoration: none;
}

.card-img {
  width: 100%;
  height: auto;
  display: block;
}

.card-body {
  padding: 10px;
}

.card-title {
  font-size: 20px;
  margin: 8px 0;
}

.card-text {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.card-footer {
  display: block;
  padding: 10px;
  font-size: 14px;
  color: #999999;
  border-top: 0.5px solid gray;
  background-color: #f8f8f8;
}
</style>
