<!--  -->
<template>
    <div>
        <h1>{{ msg }}</h1>
        <h1>{{ one.id }}</h1>
        <h1>{{ one.load }}</h1>
        <h1>{{ one.age }}</h1>
        <h1>{{ one.sex }}</h1>
        <button @click="testfun">点击修改属性</button>
    </div>
</template>

<script setup lang='ts'>
import { reactive, onMounted, onUpdated } from "vue"
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
</script>
<style scoped>
</style>
