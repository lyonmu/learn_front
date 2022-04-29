<template>
  <div>
    <div id="app">
      <img alt="Vue logo" src="./assets/logo.png" />
    </div>

    <div class="test">
      <!-- <div class="markdown-body"> -->
        <div class="c-html-render" >
        <VueMarkdown :source="value" ></VueMarkdown>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VueMarkdown from "vue-markdown";
/* On-demand import */
import "@corgicoding/theme/dist/normalize.css";
import "@corgicoding/theme/dist/github.css";

import "@corgicoding/theme";

export default {
  name: "App",
  data() {
    return { value: `` };
  },
  components: {
    VueMarkdown,
  },
  mounted() {
    console.log("页面挂载完毕!!!");
    axios
      .get("http://192.168.0.103:8001/essay/get/1") //
      .then((response) => {
        this.value = response.data.data.body;
      });
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
.test {
  width: 900px;
  position: absolute;
  top: 300px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
