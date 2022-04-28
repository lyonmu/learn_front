import Vue from 'vue'
import App from './App.vue'

// import mavonEditor from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'
import 'github-markdown-css/github-markdown.css'
import hljs from 'highlight.js'

Vue.config.productionTip = false
// use
// Vue.use(mavonEditor)

Vue.directive('highlight', function (el) {
  const blocks = el.querySelectorAll('pre code')
  blocks.forEach(block => {
    hljs.highlightBlock(block)
  })
})

new Vue({
  el: "#app",
  render: h => h(App),
})
