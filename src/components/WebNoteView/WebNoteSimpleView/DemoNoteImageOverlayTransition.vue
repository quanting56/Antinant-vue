<template>
  <div class="demo-note-image-overlay-transition">
    <!-- 頂部標題區 -->
    <div class="full-screen center" style="background: skyblue;">
      <h1>兩張疊圖接替出現</h1>
    </div>

    <!-- 圖片區：外層與內層圖 -->
    <div ref="scrollContainer" class="scroll-container">
      <div class="background-image">
        <div ref="overlayImage" class="overlay-image"></div>
      </div>
    </div>

    <!-- 底部灰色區 -->
    <div class="full-screen" style="background: skyblue;"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const scrollContainer = ref(null);
const overlayImage = ref(null);

// 以下的比例與計算需要再視實際情況調整
const updateOverlayWidth = () => {
  const container = scrollContainer.value;
  const overlay = overlayImage.value;

  // 保險檢查：如果找不到DOM，就不做事，避免出錯
  if (!container || !overlay) return;

  const maxScroll = container.offsetHeight - window.innerHeight * 2;
  const scrollTop = window.scrollY;
  const viewHeight = window.innerHeight;

  if (scrollTop > viewHeight) {
    const widthPercent = (scrollTop - viewHeight) / maxScroll;
    overlay.style.width = `${widthPercent * 100}%`;
  } else {
    overlay.style.width = "0%";
  };
};

onMounted(() => {
  window.addEventListener("scroll", updateOverlayWidth);
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateOverlayWidth);
});
</script>

<style scoped>
.full-screen {
  height: 100vh;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.scroll-container {
  height: 300vh; /* 再視情況調整 */
}

.background-image {
  position: sticky;
  top: 0;
  height: 100vh;
  background-image: url("../../../assets/about-me-view/timeline/IMG_8373.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  overflow: hidden;
}

.overlay-image {
  height: 100%;
  width: 0%;
  background-image: url("../../../assets/about-me-view/timeline/IMG_2696.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  overflow: hidden;
}
</style>
