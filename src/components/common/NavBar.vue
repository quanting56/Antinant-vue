<template>
  <nav class="navbar" ref="navRef" role="navigation" aria-label="主選單">
    <!-- Logo + Title -->
    <router-link to="/" class="navbar-brand">
      <img :src="brandImg" class="brand-img" alt="品牌" />
      <span class="brand-text"> 阿蛤ㄉ窩</span>
    </router-link>

    <!-- Hamburger Button (手機用) -->
    <button
      class="hamburger"
      type="button"
      @click="menuOpen = !menuOpen"
      :aria-expanded="menuOpen"
      aria-label="切換選單"
    >
      <span :class="['bar', 'bar1', { open: menuOpen }]"></span>
      <span :class="['bar', 'bar2', { open: menuOpen }]"></span>
      <span :class="['bar', 'bar3', { open: menuOpen }]"></span>
    </button>

    <!-- Main Nav -->
    <ul class="nav-list" :class="{ open: menuOpen }">
      <li
        v-for="(item, index) in navItems"
        :key="item.id"
        class="nav-item"
        @mouseleave="handleMouseLeave(item)"
      >
        <!-- 單一連結（沒有 children） -->
        <router-link
          v-if="!item.children"
          :to="item.to"
          class="nav-link"
        >
          {{ item.title }}
        </router-link>

        <!-- Dropdown -->
        <div v-else class="dropdown">
          <div
            class="nav-link dropdown-toggle"
            role="button"
            tabindex="0"
            @click="toggleDropdown(item)"
            @keydown.enter.prevent="toggleDropdown(item)"
            @keydown.space.prevent="toggleDropdown(item)"
            :aria-expanded="!!item.open"
            :aria-haspopup="true"
          >
            {{ item.title }}
          </div>

          <ul v-show="item.open" class="dropdown-menu" role="menu">
            <template v-for="(child, ci) in item.children" :key="`${item.id}-child-${ci}`">
              <li v-if="child.divider" class="dropdown-divider" role="separator"></li>

              <li v-else-if="child.header" class="dropdown-header" role="presentation">
                {{ child.header }}
              </li>

              <li v-else role="menuitem">
                <!-- 以 '/' 開頭視為內部路由 (可依需求調整判斷條件) -->
                <router-link
                  v-if="child.href && child.href.startsWith('/')"
                  :to="child.href"
                  class="dropdown-item"
                  :target="child.target || '_self'"
                >
                  {{ child.label }}
                </router-link>

                <a
                  v-else
                  :href="child.href"
                  class="dropdown-item"
                  :target="child.target || '_self'"
                >
                  {{ child.label }}
                </a>
              </li>
            </template>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import brandImg from '../../assets/IMG_2073.jpg'; // 用相對路徑 import logo

// UI state
const menuOpen = ref(false);
const navRef = ref(null);

// 依螢幕尺寸判斷 desktop / mobile（可根據你的斷點微調）
const isDesktop = ref(window.innerWidth > 992);
const handleResize = () => {
  isDesktop.value = window.innerWidth > 992;
  if (isDesktop.value === true) {
    // 手機切換到桌機時確保主選單顯示正常（關閉 hamburger 隱藏狀態）
    menuOpen.value = false;
  }
};

// 幫 navItems 每個 item 指定唯一 id，並確保 children item 有 open 屬性
const rawItems = [
  { title: '關於我', to: '/about-me' },
  {
    title: '一些文章',
    children: [
      { label: '攝影', href: '/photo-portfolio' },
      { label: '公路', href: 'road.html' },
      { label: '學習', href: 'study.html' },
      { label: '投資', href: 'investment.html' }
    ]
  },
  {
    title: '旅遊',
    children: [
      { label: '旅遊總覽', href: 'trip.html' },
      { divider: true },
      { label: '澎湖之旅', href: 'trip/Penghu_trip_2019.html', target: '_blank' },
      { label: '高屏行', href: 'trip/KaohsiungPingtung_trip_2021.html', target: '_blank' },
      { label: '二林實地考察', href: '#' },
      { label: '蘭嶼小旅行', href: '#' }
    ]
  },
  {
    title: '網頁練習/筆記',
    children: [
      { label: '試驗場', href: '/web-note/test-test-test' },
      { divider: true },
      { header: '非Bootsrap相關筆記' },
      { label: '網頁練習筆記區', href: '/web-note' },
      { divider: true },
      { header: 'Bootstrap相關筆記' },
      { label: '一些好用的Bootstrap元件', href: 'web_note.html#usefulBootstrapComponent', target: '_blank' },
      { label: 'Bootstrap網格與內容樣式筆記', href: 'web_note.html#bootstrapNote' },
      { divider: true },
      { header: 'CSS函式庫相關筆記' },
      { label: '一些CSS函式庫', href: 'web_note.html#cssFunctionNote' },
      { divider: true },
      { header: 'D3.js相關筆記' },
      { label: 'D3.js資料視覺化筆記', href: 'web_note.html#D3jsNote' }
    ]
  },
  {
    title: '投資相關',
    children: [
      { label: '投資總覽', href: '#', target: '_blank' },
      { divider: true },
      { header: '個人投資' },
      { label: '我的投資', href: '/my-investment' },
      { divider: true },
      { header: '投資工具（待整理）' },
      { label: '滾動報酬率動圖測試', href: 'investment/d3RollingReturnTest.html', target: '_blank' },
      { label: 'K線圖測試', href: 'investment/kLineTest.html', target: '_blank' }
    ]
  },
  {
    title: '其他網頁',
    children: [
      { label: '舊版網頁（20240508版本）', href: 'old_index_20240508.html', target: '_blank' },
      { label: '舊版網頁（20240620版本）', href: 'old_index_20240620.html', target: '_blank' },
      { label: '舊版web_note網頁（20240802版本）', href: 'old_web_note_20240802.html', target: '_blank' },
      { label: '統計學筆記', href: 'study/statistics_note.html', target: '_blank' },
      { label: '多媒體影像創作社', href: 'other/degitalMedia_class.html', target: '_blank' },
      { label: '加黑框短邊計算器', href: 'other/photo_short_side_calculator.html', target: '_blank' },
      { label: '軍中日記', href: 'four_month_military_life/diary.html', target: '_blank' }
    ]
  },
  { title: '聯絡我', to: '#' }
];

// 產生 navItems（帶 id 與 open）
const navItems = ref(
  rawItems.map((it, i) => {
    const item = { ...it, id: `nav-item-${i}` };
    if (item.children) item.open = false; // 明確初始化 open 屬性（reactive）
    return item;
  })
);

// Toggle dropdown (desktop: close others; mobile: 不強制關閉其他)
const toggleDropdown = (item) => {
  if (!item.children) return;
  if (isDesktop.value) {
    // 桌機行為：展開同時收合其他 siblings
    navItems.value.forEach((it) => {
      if (it.id !== item.id && it.children) it.open = false;
    });
    item.open = !item.open;
  } else {
    // 手機：切換該項就好（你也可以改成只允許單一展開）
    item.open = !item.open;
  }
};

// 明確關閉單一 dropdown
const closeDropdown = (item) => {
  if (item && item.children) item.open = false;
};

// mouseleave handler 只在 desktop 有效果
const handleMouseLeave = (item) => {
  if (isDesktop.value) closeDropdown(item);
};

// 關閉所有 dropdown
const closeAllDropdowns = () => {
  navItems.value.forEach((it) => {
    if (it.children) it.open = false;
  });
  menuOpen.value = false;
};

// 點擊外部關閉（點在 nav 外面時）
const handleDocClick = (e) => {
  const navEl = navRef.value;
  if (!navEl) return;
  if (!navEl.contains(e.target)) {
    closeAllDropdowns();
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
  document.addEventListener('click', handleDocClick);
  // 初始判斷
  handleResize();
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  document.removeEventListener('click', handleDocClick);
});
</script>

<style scoped>
.navbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: #333333;
  position: sticky;
  top: 0;
  z-index: 999;
  opacity: 0.9;
  padding: 8px 12px;
  gap: 12px;
}

/* Brand */
.navbar-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
}
.brand-img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.brand-text {
  color: #e7e7e7;
  font-size: 20px;
}
.brand-text:hover {
  color: #ffffff;
}

/* Hamburger (button) */
.hamburger {
  display: none;
  background: transparent;
  border: none;
  padding: 6px;
  cursor: pointer;
}
.hamburger:focus {
  outline: 2px solid #aaaaaa;
}

/* 三條線 */
.bar {
  display: block;
  width: 25px;
  height: 3px;
  background: #cccccc;
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.bar + .bar { margin-top: 5px; }

/* 變成 X 動畫 */
.bar1.open { transform: translateY(8px) rotate(45deg); }
.bar2.open { opacity: 0; transform: scaleX(0); }
.bar3.open { transform: translateY(-8px) rotate(-45deg); }

/* Nav list */
.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding-left: 8px;
  gap: 8px;
  align-items: center;
}
.nav-item {
  position: relative;
}

/* Links */
.nav-link {
  color: rgba(255, 255, 255, 0.55);
  font-size: 16px;
  padding: 6px 10px;
  display: block;
  text-decoration: none;
  cursor: pointer;
}
.nav-link:hover {
  background-color: #555555;
  color: rgba(255, 255, 255, 0.95);
  transition: background-color 0.5s;
}

/* Dropdown */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: -1px;
  padding-left: 0;
  min-width: 180px;
  background-color: #444444;
  border: 1px solid #222222;
  z-index: 1000;
  list-style: none;
}
.dropdown-toggle {
  cursor: pointer;
}
.dropdown-toggle::after {
  content: " ▼";
  font-size: 10px;
  opacity: 0.85;
}
.dropdown-item,
.dropdown-header {
  display: block;
  padding: 8px 12px;
  color: #ffffff;
  text-decoration: none;
  text-align: left;
  white-space: nowrap;
}
.dropdown-item:hover {
  background:#666666;
  white-space: nowrap;
}
.dropdown-header {
  color: #d0d0d0;
  font-size: 12px;
  padding: 6px 12px;
}
.dropdown-divider {
  height: 1px;
  background: #666666;
  margin: 4px 0;
}

/* Responsive: 手機樣式 */
@media (max-width: 992px) {
  .hamburger {
    display: block;
    margin-left: auto;
  }
  .nav-list {
    display: none;
    flex-direction: column;
    background-color: #333;
    position: absolute;
    top: 100%;
    right: 12px;
    padding: 10px;
    border: 1px solid #222;
    width: calc(100% - 24px);
    box-sizing: border-box;
  }
  .nav-list.open {
    display: flex;
  }

  .dropdown-menu {
    position: static;
    border: none;
    margin: 6px 0;
  }
}
</style>
