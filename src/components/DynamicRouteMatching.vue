<template>
  <h3>User ID: {{ $route.params.userId }} - {{ userInfo.name }}</h3>
  <p>
    username: {{ userInfo.name }}<br />
    email: {{ userInfo.email }}<br />
    phone: {{ userInfo.phone }}
  </p>
  <br />
  <p>原始資料如下：</p>
  <pre>{{ userInfo }}</pre>
</template>

<script>
export default {
  name: "DynamicRouteMatching",
  data() {
    return {
      userInfo: {},
    };
  },
  computed: {
    userId() {
      // 假設URL為'/users/1'，'$route.params.userId'的值就是1
      return this.$route.params.userId;
    },
  },
  watch: {
    userId: async function (val) {
      this.userInfo = await this.fetchUserInfo(val);
    },
  },
  methods: {
    async fetchUserInfo(id) {
      return await fetch(
        "https://jsonplaceholder.typicode.com/users/" + id
      ).then((res) => res.json());
    },
  },
  async created() {
    this.userInfo = await this.fetchUserInfo(this.userId);
  },
};
</script>
