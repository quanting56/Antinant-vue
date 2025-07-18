<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- 左邊內容 -->
      <div class="footer-left">
        <p>
          內文撰寫｜董冠霆<br>
          製&emsp;&emsp;圖｜董冠霆<br>
          網&emsp;&emsp;頁｜董冠霆<br>
          攝&emsp;&emsp;影｜董冠霆<br>
        </p>
        <p>
          聯絡方式：LineID @310956585<br>
          資料最後更新時間：
          <time datetime="2025-07-18T09:47">2025/07/18 09:47</time>
        </p>
        <p>&copy; 2025 Copyright</p>
      </div>

      <!-- 右邊社群連結 -->
      <div class="footer-right">
        <a
          v-for="link in socialLinks"
          :key="link.label"
          :href="link.href"
          class="social-link"
          target="_blank"
          :aria-label="link.label"
        >
          <i :class="link.iconClass"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/ting.d_927',
    iconClass: 'bi bi-instagram',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/guanting.dong',
    iconClass: 'bi bi-facebook',
  },
  {
    label: 'Line',
    href: 'https://line.me/ti/p/fOtvr_KEbv',
    iconClass: 'bi bi-line',
  },
];
</script>

<style scoped>
.footer {
  background-color: #3c3c3c;
  padding-left: 35px;
  padding-top: 20px;
  padding-right: 35px;
  padding-bottom: 25px;
}

.footer-container {
  display: flex;
  flex-direction: column;
  gap: 20px;

  /* 對於桌機：左右排列 */
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
}

.footer-left p {
  font-size: 14px;
  font-weight: 300;
  line-height: 1.5;
  color: #eeeeee;
  margin-bottom: 8px;
}

.footer-right {
  display: flex;
  gap: 20px;
}

.social-link {
  font-size: 24px;
  color: #eeeeee;
  transition: transform 0.2s ease-in-out;
}

.social-link:hover {
  transform: translateY(-1.5px);
}
</style>
