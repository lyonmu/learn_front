class Animal {
    // 属性默认的权限修饰符是 public
    id: number
    private _name: string
    protected sex: boolean
    readonly read: string
    static origin: string = "我是静态属性"
    constructor(id: number, name: string, sex: boolean, read: string) {
        this.id = id
        this._name = name
        this.sex = sex
        this.read = read
    }

    get name(): string {
        return this._name
    }


    set name(newName: string) {
        this._name = newName
    }


}
// 抽象类
abstract class absAnimal {
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earch...');
    }
}
class test extends Animal {
    constructor(id: number, name: string, sex: boolean, read: string) {
        super(id, name, sex, read)
    }
}
// 只能获取静态属性
let greeterMaker: typeof Animal = Animal;
console.log(greeterMaker.origin)

let a: Animal = new Animal(123456, "uqing", true, "wowo")
console.log(a.name)
a.name = "uuu"
console.log(a.name)
