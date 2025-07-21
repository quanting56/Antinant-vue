<template>
  <div class="photo-view">
    <div class="photo-card" id="card-1">
      <a href="/photo/NTU_photo_life.html">
        <div class="card">
          <img
            class="card-img"
            src="../assets/IMG_2073.jpg"
            alt="2023年跨年烤肉在拍照的旻倫"
            title="拍照的旻倫"
          />
          <div class="card-body">
            <h5 class="card-title">攝影社故事</h5>
            <p class="card-text">
              一場在<span class="number">2018.09 - 2021.01</span>間的冒險
            </p>
          </div>
          <small class="card-footer">致消逝的青春</small>
        </div>
      </a>
    </div>

    <div class="photo-card" id="card-2">
      <a href="/photo/photographic_equipment.html">
        <div class="card">
          <img
            class="card-img"
            src="../assets/vue.svg"
            alt="2023年跨年烤肉在拍照的阿楷"
            title="拍照的竣楷"
          />
          <div class="card-body">
            <h5 class="card-title">器材</h5>
            <p class="card-text">
              這些年噴了多少錢在這些酷東西上啊
            </p>
          </div>
          <small class="card-footer">致消逝的錢錢</small>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
// 若未來想將圖片資料改為 JSON 或 props 載入，也可在此處處理。
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
}

.photo-card:hover {
  text-shadow: 0px 0px 2px #ffffff;
  transform: translateY(-6px);
}

.card {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  text-decoration: none;
  color: inherit;
}

.card-img {
  width: 100%;
  height: auto;
  display: block;
}

.card-body {
  padding: 1rem;
}

.card-title {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

.card-text {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.card-footer {
  display: block;
  padding: 0.75rem;
  font-size: 0.875rem;
  color: #999;
  background-color: #f8f8f8;
}

.number {
  font-family: Georgia, serif;
}

@media (min-width: 768px) {
  .photo-card {
    width: 45%;
  }
}
</style>
