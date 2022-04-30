<template>
  <div>
    <!-- <div id="app"> -->
      <img alt="Vue logo" src="./assets/logo.png" />
    <!-- </div> -->
    <MarkdownDetail />
  </div>
</template>

<script>
import MarkdownDetail from "./components/MarkdownDetail.vue";

export default {
  name: "App",
  data() {
    return { value: `` };
  },
  components: {
    MarkdownDetail,
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
