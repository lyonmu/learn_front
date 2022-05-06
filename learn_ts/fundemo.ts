function add(x: number, y = 10, z?: number, ...parameters: number[]): number {
    console.log("必要参数" + x)
    console.log("默认参数" + y)
    console.log("可选参数" + z)
    console.log("剩余参数" + parameters)
    return x * y;
}
let testadd01 = add(2, 10, 2, 2, 2, 2, 2)
let testadd02 = add(2)
let testfunc = (para: string) => {
    console.log(para)
}
testfunc("测试箭头函数")
console.log(testadd01)
console.log(testadd02)
