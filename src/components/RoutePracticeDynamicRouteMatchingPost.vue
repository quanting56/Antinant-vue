<template>
  <h3>Post form User-{{ userId }}</h3>
  <ol>
    <li v-for="post in posts" :key="post.id">
      <h4>{{ post.id }}</h4>
      <p>{{ post.body }}</p>
    </li>
  </ol>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    };
  },
  computed: {
    userId() {
      // 取得網址路由提供的userId
      return this.$route.params.userId;
    },
  },
  methods: {
    // api:取得指定user的post列表
    async fetchUserPosts() {
      return await fetch(
        "https://jsonplaceholder.typicode.com/posts?userId=" + this.userId
      ).then((res) => res.json());
    },
  },
  async created() {
    this.posts = await this.fetchUserPosts(this.userId);
  },
};
</script>
