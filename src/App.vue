<template>
  <Header />
  <Home />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Home from "./components/Home/index.vue";
import Header from "./components/global/Header.vue";

export default defineComponent({
  name: "App",
  components: {
    Home,
    Header,
  },
});
</script>

<style scoped lang="scss">
</style>
