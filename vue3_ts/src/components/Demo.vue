<!--  -->
<template>
    <div>
        <h1>{{ msg }}</h1>
        <h1>{{ one.id }}</h1>
        <h1>{{ one.load }}</h1>
        <h1>{{ one.age }}</h1>
        <h1>{{ one.sex }}</h1>
        <hr>
        <h1>解构赋值</h1>
        <h1>{{ id }}</h1>
        <h1>{{ load }}</h1>
        <h1>{{ sex }}</h1>
        <h1>{{ age }}</h1>
        <button @click="testfun">点击修改属性</button>
    </div>
</template>

<script setup lang='ts'>
import { reactive, onMounted, onUpdated, toRefs } from "vue"
defineProps<{ msg: string }>()
interface user {
    id: string;
    load: string;
    age: number;
    sex: boolean;
}

let one: user = reactive({
    id: "uqingu", load: "nanyang", age: 19, sex: true
})
// mounted
onMounted(() => {
    console.log("测试生命周期函数")
})
onUpdated(() => {
    console.log("数据发生改变")
})
function testfun() {
    one.id = "test"
    one.sex = !one.sex
}
let { id, load, age, sex } = toRefs(one)
</script>
<style scoped>
</style>
