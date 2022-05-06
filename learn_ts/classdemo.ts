// 定义类
class Person {
    id: number
    name: string
    sex?: boolean
    constructor(id: number, name: string, sex?: boolean) {
        this.id = id
        this.name = name
        this.sex = sex

    }
    run() {
        console.log(this.name)
    }
}

// 继承
class User extends Person {
    // 利用实现继承父类的属性,必须在构造函数中使用 super 方法才可以继承父类的属性,语法规定
    constructor(id: number, name: string, sex?: boolean) {
        super(id, name, sex)
    }
    call() {
        console.log("我是:" + this.name)
    }

    // 重写
    run(): void {
        console.log(this.id)
    }

    // 方法的重载
    double(x: number): number;
    double(x: string): string;
    double(x: number | string): number | string {
        if (typeof x === 'number') {
            return x * 2;
        } else {
            return x + ', ' + x;
        }
    }

}
const p: Person = new Person(1925627832, "uqingqu")
p.run()
const u: User = new User(123456, "mqingqm");
u.call()
u.run()
console.log(u.double(12))
console.log(u.double("测试方法重载"))
// 多态
const up: Person = new User(987654321, "qingq");
up.run()
