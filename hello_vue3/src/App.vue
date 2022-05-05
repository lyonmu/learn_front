<script setup >
import Demo from "components/Demo.vue"
function showHelloMsg(value) {
  alert(`你好啊，你触发了hello事件，我收到的参数是:${value}！`)
}
</script>

<template>
  <Demo @hello="showHelloMsg" msg="Hello Vue 3 + Vite" />
</template>

<style>
</style>
