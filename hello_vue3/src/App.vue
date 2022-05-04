<script setup >
// https://v3.cn.vuejs.org/api/sfc-script-setup.html
const name = "uqingu"
const age = 18
const sex = true
function testfun(params) {
  console.log(params)
}
</script>

<template>
  <h1>HelloWorld</h1>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>性别：{{ sex }}</h2>
  <h1>
    <div @click="testfun(name)">点击触发函数</div>
  </h1>
</template>

<style>
</style>
