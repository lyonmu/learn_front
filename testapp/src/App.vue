<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="test">
      <!-- <mavon-editor
        v-model="value"
        :ishljs="true"
        :toolbarsFlag="false"
        :subfield="false"
      /> -->
      <div class="markdown-body">
        <VueMarkdown :source="value" v-highlight></VueMarkdown>
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  name: "App",
  data() {
    return { value: "# 测试标题\n## 测试标题" };
  },
  components: {
    VueMarkdown,
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
  width: 800px;
  position: absolute;
  top: 300px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
