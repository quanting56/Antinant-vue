<template>
  <nav class="navbar">
    <!-- Logo + Title -->
    <router-link to="/" class="navbar-brand">
      <img src="../../assets/IMG_2073.jpg" class="brand-img" />
      <span class="brand-text"> 阿蛤ㄉ窩</span>
    </router-link>

    <!-- Hamburger Button -->
    <button class="hamburger" @click="toggleMobileMenu">
      ☰
    </button>

    <!-- Main Nav -->
    <ul class="nav-list" :class="{ open: mobileMenuOpen }">
      <li v-for="item in navItems" :key="item.title" class="nav-item" @mouseleave="closeDropdown(item)">
        <router-link
          v-if="!item.children"
          :to="item.to"
          class="nav-link"
        >{{ item.title }}</router-link>

        <div v-else class="dropdown">
          <div class="nav-link dropdown-toggle" @click="toggleDropdown(item)">
            {{ item.title }}
          </div>
          <ul v-show="item.open" class="dropdown-menu">
            <template v-for="child in item.children">
              <li v-if="child.divider" class="dropdown-divider"></li>
              <li v-else-if="child.header" class="dropdown-header">{{ child.header }}</li>
              <li v-else>
                <!-- 使用 router-link 邏輯：若 href 是以 '/' 開頭的內部路由 -->
                <router-link
                  v-if="child.href && child.href.startsWith('/')"
                  :to="child.href"
                  class="dropdown-item"
                  :target="child.target || '_self'"
                >
                  {{ child.label }}
                </router-link>

                <!-- 傳統連結：.html 或其他非 Vue router 連結 -->
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
import { ref } from 'vue';

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
};

const toggleDropdown = (item) => {
  item.open = !item.open;
};

const closeDropdown = (item) => {
  item.open = false;
};

const navItems = ref([
  { title: '關於我', to: '/about-me' },
  {
    title: '一些文章',
    open: false,
    children: [
      { label: '攝影', href: 'photo.html' },
      { label: '公路', href: 'road.html' },
      { label: '學習', href: 'study.html' },
      { label: '投資', href: 'investment.html' }
    ]
  },
  {
    title: '旅遊',
    open: false,
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
    open: false,
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
    open: false,
    children: [
      { label: '投資總覽', href: '#', target: '_blank' },
      { divider: true },
      { header: '個人投資' },
      { label: '我的投資', href: 'investment/myInvestment.html' },
      { divider: true },
      { header: '投資工具（待整理）' },
      { label: '滾動報酬率動圖測試', href: 'investment/d3RollingReturnTest.html', target: '_blank' },
      { label: 'K線圖測試', href: 'investment/kLineTest.html', target: '_blank' }
    ]
  },
  {
    title: '其他網頁',
    open: false,
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
])
</script>

<style scoped>
.navbar {
  display: flex;
  flex-wrap: wrap;
  background-color: #333333;
  position: sticky;
  top: 0;
  z-index: 999;
  opacity: 0.9;
  padding: 8px 0px;
}

.navbar-brand {
  display: flex;
  align-items: center;
  margin-left: 12px;
}

.navbar-brand:hover {
  background-color: #555555;
  transition: background-color 0.5s;
}

.brand-img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 6px;
  margin-top: 1px;
}

.brand-text {
  color: white;
  font-size: 20px;
}

/* Hamburger */
.hamburger {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 28px;
  cursor: pointer;
}

.hamburger:hover {
  background-color: #5a5a5a;
}

/* Nav List */
.nav-list {
  display: flex;
  list-style: none;
  min-width: 180px;
  margin: 0;
  padding-left: 16px;
  gap: 3px;
}

.nav-item {
  position: relative;
}

.nav-link {
  color: rgba(255, 255, 255, 0.55);
  font-size: 16px;
  padding: 6px 10px;
  display: block;
  text-decoration: none;
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

.dropdown-item {
  display: block;
  padding: 8px 12px;
  color: white;
  text-decoration: none;
  text-align: center;
}

.dropdown-item:hover {
  background-color: #666666;
  transition: background-color 0.3s;
}

.dropdown-header {
  font-size: 12px;
  color: #d0d0d0;
  padding: 6px 12px;
  text-align: center;
}

.dropdown-header::before {
  content: "# ";
}

.dropdown-divider {
  height: 1px;
  background-color: #666666;
  margin: 4px 0;
}

/* Responsive */
@media (max-width: 768px) {
  .navbar {
    justify-content: space-between;
  }

  .hamburger {
    display: block;
    margin-right: 12px;
  }

  .nav-list {
    display: none;
    flex-direction: column;
    background-color: #333333;
    margin: 5px;
    position: absolute;
    top: 100%;
    right: 0;
    padding: 10px;
    border: 1px solid #222222;
  }

  .nav-list.open {
    display: flex;
  }

  .dropdown-menu {
    position: static;
    border: none;
  }
}
</style>
