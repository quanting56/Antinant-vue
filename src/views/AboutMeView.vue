<template>
  <div class="about-me-view">
    <!-- 關於我 主區塊 -->
    <section class="profile-section">
      <div class="profile-info-image">
        <img :src="profile.img" :title="profile.name" alt="我的照片" class="profile-img" />
      </div>
      <div class="profile-info-text">
        <h1>{{ profile.name }} {{ profile.nameEnglish }}</h1>
        <hr />
        <div class="info-list">
          <div
            v-for="(edu, idx) in education"
            :key="idx"
            class="info-item"
          >
            <a :href="edu.link" target="_blank">
              <img :src="edu.logo" alt="系徽" :title="edu.logoName" class="info-logo" />
            </a>
            <dl>
              <dt>{{ edu.degree }}</dt>
              <dd>{{ edu.description }}</dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 證書／證照 -->
    <section v-if="certificates.length" class="section">
      <h2>證書／證照</h2>
      <hr />
      <dl v-for="(cert, i) in certificates" :key="i">
        <dt>{{ cert.test }}</dt>
        <dd>{{ cert.description }}</dd>
      </dl>
    </section>

    <!-- 社團幹部經歷 -->
    <section v-if="clubPositions.length" class="club-positions-section section">
      <h2>社團幹部經歷</h2>
      <hr />
      <div class="clubs">
        <div
          v-for="(club, i) in clubPositions"
          :key="i"
          class="club-block"
        >
          <div
            v-for="(pos, j) in club.positions"
            :key="j"
            class="club-position"
          >
            <a :href="club.link" target="_blank">
              <img
                :src="club.logo"
                :alt="club.club"
                :title="club.logoName"
                class="club-logo"
              />
            </a>
            <dl class="club-position-info">
              <dt>
                {{ club.club }} {{ pos.title }}
                <span class="club-position-period">{{ pos.period }}</span>
              </dt>
              <dd>{{ pos.description }}</dd>
            </dl>
          </div>
        </div>
      </div>
    </section>

    <!-- 作品集 (預留) -->
    <section v-if="portfolios.length" class="section">
      <h2 id="portfolio">作品集</h2>
      <hr />
      <!-- 作品集內容 -->
    </section>

    <!-- 其他工作經驗 (預留) -->
    <section v-if="jobExperiences.length" class="section">
      <h2 id="jobExperience">其他工作經驗</h2>
      <hr />
      <!-- 工作經驗內容 -->
      <div class="jobs">
        <div
          v-for="(jobE, i) in jobExperiences"
          :key="i"
          class="job-block"
        >
          <div
            v-for="(pos, j) in jobE.positions"
            :key="j"
            class="job-position"
            :class="{ 'first': j === 0 }"
          >
            <a :href="jobE.link" target="_blank">
              <img
                :src="jobE.logo"
                :alt="jobE.conpany"
                :title="jobE.company"
                class="job-logo"
              />
            </a>
            <dl class="job-position-info">
              <dt>
                {{ jobE.company }} {{ pos.title }}
                <span class="job-position-period">{{ pos.period }}</span>
              </dt>
              <dd>{{ pos.description }}</dd>
            </dl>
          </div>
        </div>
      </div>
    </section>

    <!-- 個人時間軸 -->
    <section class="section timeline-section">
      <div class="timeline-header">
        <h2>阿蛤的時間軸</h2>
        <div class="button-container">
          <button
            type="button"
            v-for="timelineBtn in timelineButtons"
            :key="timelineBtn.title"
            @click="changeTimeline(timelineBtn)"
            class="timeline-btn"
            :class="{ active: timelineBtn.title === activeTimelineTitle }"
          >
            {{ timelineBtn.title }}
          </button>
        </div>
      </div>
      <hr />
      <div class="timeline-container">
        <!-- TODO: 動態生成時間軸 -->
        <Timeline :items="activeTimelineData"></Timeline>
      </div>
    </section>
  </div>

  <!-- 待處理，先放這 -->
  <!-- 可嵌入 Vue 模板或 HTML 頁面中 -->
  <img
    src="https://github-readme-stats.vercel.app/api/top-langs/?username=quanting56&layout=compact&theme=algolia"
    alt="GitHub Top Languages"
    style="max-width: 100%; height: auto"
  />
</template>

<script setup>
import { ref } from "vue";

// 時間軸的部分
import Timeline from "../components/AboutMeView/Timeline.vue";
import { generalTimelineData } from "../data/about-me-view/general-timeline.js";
import { programLearningTimelineData } from "../data/about-me-view/program-learning-timeline.js";

const timelineButtons = [
  { title: "一般時間軸", data: generalTimelineData },
  { title: "程式語言學習時間軸", data: programLearningTimelineData }
]

const activeTimelineTitle = ref(timelineButtons[0].title);
const activeTimelineData = ref(timelineButtons[0].data);

// 切換時間軸的函式
const changeTimeline = (newBtn) => {
  activeTimelineTitle.value = newBtn.title;
  activeTimelineData.value = newBtn.data;
};

// Vite 的批次導入工具（batch import），適合用來載入靜態資源
const images = import.meta.glob("../assets/about-me-view/*", { eager: true, as: "url"});

// 個人資料定義
const profile = {
  name: "董冠霆",
  nameEnglish: "Kuan-Ting Tung",
  img: images["../assets/about-me-view/IMG_9028.jpg"]
};

// 學歷
const education = [
  {
    degree: "國立臺灣大學 藥學系 (2016 - 2020)",
    description: "學習基礎醫藥課程、醫病人際互動。",
    link: "https://rx.mc.ntu.edu.tw",
    logo: images["../assets/about-me-view/nturx_mark.jpg"],
    logoName: "臺大藥學系"
  },
  {
    degree: "國立臺灣大學 生物產業傳播暨發展學系 (2020 - 2024)",
    description: "學習行銷與傳播，並理解臺灣農業的發展。",
    link: "http://www.bicd.ntu.edu.tw",
    logo: images["../assets/about-me-view/ntubicd_trademark.png"],
    logoName: "臺大生傳系",
  }
];

// 證書／證照
const certificates = [
  {
    test: "全民英檢中高級初試",
    description: "2024/_/_ 通過"
  },
  {
    test: "TOEIC考試",
    description: "2024/_/_ 考試，獲得 分"
  },
  {
    test: "金融市場常識與職業道德",
    description: "2024/_/_ 通過"
  }
];

// 社團幹部經歷預留
const clubPositions = [
  {
    club: "臺大藥學系學會",
    link: "https://rx.mc.ntu.edu.tw/nturxsa/",
    logo: images["../assets/about-me-view/nturx_mark.jpg"],
    logoName: "臺大藥學系",
    positions: [
      {
        title: "活動部部員",
        period: "2016.10 - 2017.05",
        description: "籌辦系上活動，增進系上同學感情"
      }
    ]
  },
  {
    club: "臺大攝影社",
    link: "https://www.facebook.com/ntuphoto/",
    logo: images["../assets/about-me-view/ntuphoto_trademark.JPG"],
    logoName: "臺大攝影研究社",
    positions: [
      {
        title: "活動部長",
        period: "2019.02 - 2019.07",
        description: "籌辦活動、管理出團狀況"
      },
      {
        title: "暗房部長",
        period: "2019.08 - 2020.01",
        description: "規劃課程、擔任教學、管理社團內化學藥品"
      },
      {
        title: "數暗部長",
        period: "2020.02 - 2020.07",
        description: "規劃課程、擔任教學、協助管理社團器材"
      }
    ]
  },
  {
    club: "臺大生傳系學會",
    link: "https://www.facebook.com/NTUBICDSA/",
    logo: images["../assets/about-me-view/ntubicdsab_trademark.JPG"],
    logoName: "臺大生傳系學會",
    positions: [
      {
        title: "影視部部員",
        period: "2021.10 - 2022.02",
        description: "製作劇情短片、劇組分工完成影片拍攝"
      }
    ]
  },
  {
    club: "臺大數位廣播社",
    link: "https://www.facebook.com/voiceofntu.2022/",
    logo: images["../assets/about-me-view/voiceOfNtu_tardemark.JPG"],
    logoName: "臺大數位廣播社/台大之聲",
    positions: [
      {
        title: "社長",
        period: "2022.08 - 2023.07",
        description: "統領社團、規劃社團活動、協調幹部工作、掌控社團氛圍"
      },
      {
        title: "節目負責人",
        period: "2022.09 - 2023.07",
        description: "節目策劃與安排、協調主持人、技術協助"
      },
    ]
  },
];

// 作品集預留
const portfolios = [];

// 工作經驗預留
const jobExperiences = [
  {
    company: "Taipei Camera Club",
    link: "https://quanting56.github.io/taipeicameraclub/",
    logo: images["../assets/about-me-view/TCC_logo.png"],
    positions: [
      {
        title: "網宣組長",
        period: "2020.?? - 202?.07",
        description: "行銷、宣傳 Taipei Camera Club，並管理官方 Instagram 帳號與 Facebook 粉絲帳號。"
      }
    ]
  },
];
</script>

<style scoped>
dt { font-weight: bold; }
dd { margin-left: 0; }
hr { opacity: 0.5; }

.about-me-view {
  font-family: serif;
  padding: 100px 40px;
}

/* profile */
.profile-section {
  display: flex;
  flex-wrap: wrap;
}

.profile-info-image {
  display: flex;
  flex: 0 0 33%;
  justify-content: center;
  margin-bottom: 16px;
}

.profile-img {
  width: 70%;
  max-width: 300px;
  object-fit: contain;
}

.profile-info-text {
  flex: 0 0 66%;
}

.profile-info-text h1 {
  font-size: 40px;
  margin-top: 0;
  margin-bottom: 16px;
  font-weight: 500;
  line-height: 1.2;
}

/* 響應式設計 - 平板 */
@media (max-width: 992px) and (min-width: 769px) {
  .profile-info-image {
    flex: 0 0 50%;
  }

  .profile-info-text {
    flex: 0 0 50%;
    /* margin-left: 16px; */
  }
}

/* 響應式設計 - 手機 */
@media (max-width: 768px) {
  .profile-info-image {
    flex: 0 0 100%;
    justify-content: left;
    margin-bottom: 48px;
  }

  .profile-info-text {
    flex: 0 0 100%;
  }
}

/* 教育程度 */
.info-list {
  margin-top: 24px;
}

.info-item {
  display: flex;
  align-items: center;
}

.info-logo {
  width: 50px;
  height: auto;
  border-radius: 50%;
  margin-right: 20px;
}

.info-item dt,
.info-item dd {
  padding: 1px;
}

/* 通用區塊 */
.section {
  margin-top: 72px;
}

.section h2 {
  font-size: 32px;
  margin-bottom: 12px;
  font-weight: 500;
  line-height: 1.2;
}

/* 社團幹部經歷 / 工作經歷 */
.clubs,
.jobs {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 16px;
}

.club-block,
.job-block {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.club-position,
.job-position {
  display: flex;
  align-items: center;
}

.club-logo,
.job-logo {
  width: 50px;
  border-radius: 50%;
  border: 0.1px solid lightgray;
  margin-right: 18px;
}

.club-position-info dt {
  align-items: baseline;
}

.club-position-period {
  font-style: italic;
  margin-left: 4px;
  font-size: 12px;
}

/* 時間軸 */
.timeline-header {
  display: flex;
  gap: 30px;
  align-items: baseline;
}

.timeline-header h2 { margin-bottom: 4px;}

.button-container {
  display: flex;
  gap: 5px;
}

.timeline-btn {
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #cccccc;
  text-decoration: none;
  color: #333333;
  background-color: #ffffff;
  cursor: pointer;
}

.timeline-btn:hover {
  border-color: #a9a9a9;
}

.timeline-btn.active {
  border: 1px solid #a67a44;
  font-weight: 700;
  color: #a67a44;
}
</style>
