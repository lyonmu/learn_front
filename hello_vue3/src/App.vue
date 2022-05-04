<script setup >
// https://v3.cn.vuejs.org/api/sfc-script-setup.html
import { ref, reactive, onMounted, onUpdated } from "vue"
const name = ref("uqingu")
const age = ref(18)
const sex = ref(true)
const user = reactive({
  id: "123456",
  load: "南阳"
})
function testfun(params) {
  console.log(params)
}
// mounted
onMounted(() => {
  console.log("测试生命周期函数")
})
onUpdated(() => {
  console.log("数据发生改变")
})
function testfun01() {
  name.value = 'muqing'
  age.value = 22
  user.id = '654321'
  user.load = "chedu"
}
</script>

<template>
  <h1>HelloWorld</h1>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>性别：{{ sex }}</h2>
  <h2>性别：{{ user.id }}</h2>
  <h2>性别：{{ user.load }}</h2>
  <h1>
    <div @click="testfun(name)">点击触发函数</div>
  </h1>
  <h1>
    <div @click="testfun01">点击修改属性函数</div>
  </h1>
</template>

<style>
</style>
