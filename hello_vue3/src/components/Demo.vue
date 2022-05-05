<template>
    <h1>HelloWorld</h1>
    <h1>一个人的信息</h1>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>性别：{{ sex }}</h2>
    <h2>reactive对象：{{ user.id }}</h2>
    <h2>reactive对象：{{ user.load }}</h2>
    <h2>计算属性：{{ compu }}</h2>
    <h2>props：{{ props.msg }}</h2>
    <button @click="test">测试自定义事件</button>
    <h1>
        <div @click="testfun(name)">点击触发函数</div>
    </h1>
    <h1>
        <div @click="testfun01">点击修改属性函数</div>
    </h1>
</template>

<script setup >
// https://v3.cn.vuejs.org/api/sfc-script-setup.html
import { ref, reactive, onMounted, onUpdated, watch, computed } from "vue"
const name = ref("uqingu")
const age = ref(18)
const sex = ref(true)
// 接收传递的props参数,必须声明接收的类型
const props = defineProps({
    msg: String
})
// 接收自定义事件
const emit = defineEmits(['hello'])
const user = reactive({
    id: "123456",
    load: "南阳"
})
// 绑定事件
function test() {
    // 触发父组件的自定义事件
    emit('hello', 666)
}
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
watch([name, user], (newValue, oldValue) => {
    console.log(newValue + "===" + oldValue)
    console.log(newValue + "===" + oldValue)
}, { immediate: true, deep: true })
function testfun01() {
    name.value = 'muqing'
    age.value = 22
    user.id = '654321'
    user.load = "chedu"
}
const compu = computed(() => {
    return name.value + user.load
})
</script>

<style>
</style>
