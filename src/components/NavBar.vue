<template>
  <v-app>
    <v-app-bar app dark color="#333333" elevated>
      <v-toolbar-title>
        <v-img
          src="src/assets/IMG_2073.jpg"
          width="30"
          class="d-inline-block rounded-circle"
        ></v-img>
        阿蛤ㄉ窩
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list>
        <v-list-item link to="/about_me">
          <v-list-item-title>關於我</v-list-item-title>
        </v-list-item>
        <v-list-group
          v-for="(item, index) in dropdownItems"
          :key="index"
          :value="false"
        >
          <template v-slot:activator>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </template>
          <v-list-item
            v-for="(subItem, subIndex) in item.subItems"
            :key="subIndex"
            link
            :to="subItem.link"
          >
            <v-list-item-title>{{ subItem.label }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      drawer: false,
      dropdownItems: [
        {
          title: "一些文章",
          subItems: [
            { label: "攝影", link: "/photo" },
            { label: "公路", link: "/road" },
            { label: "學習", link: "/study" },
            { label: "投資", link: "/investment" },
          ],
        },
        {
          title: "旅遊",
          subItems: [
            { label: "旅遊總覽", link: "/trip" },
            { label: "澎湖之旅", link: "/trip/Penghu_trip_2019" },
            { label: "高屏行", link: "/trip/KaohsiungPingtung_trip_2021" },
          ],
        },
        {
          title: "網頁練習/筆記",
          subItems: [
            { label: "試驗場", link: "/web_note/TestTestTest" },
            { label: "網頁練習筆記區", link: "/web_note" },
          ],
        },
        {
          title: "投資相關",
          subItems: [
            { label: "投資總覽", link: "/investment" },
            { label: "我的投資", link: "/investment/myInvestment" },
          ],
        },
        {
          title: "其他網頁",
          subItems: [
            { label: "舊版網頁（20240508版本）", link: "/old_index_20240508" },
            { label: "舊版網頁（20240620版本）", link: "/old_index_20240620" },
          ],
        },
      ],
    };
  },
};
</script>

<style>
/* 可以自訂樣式 */
</style>
