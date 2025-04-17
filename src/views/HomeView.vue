<template>
  <v-container>
    <h1>我是Home Page</h1>
    <HelloWorld />
  </v-container>
</template>

<script>
import { defineComponent } from "vue";

// Components
import HelloWorld from "../components/HelloWorld.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    HelloWorld,
  },
});
</script>
