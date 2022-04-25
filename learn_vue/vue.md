# Vue 笔记
## Vue 核心
### Vue 介绍
Vue (读音 /vjuː/，类似于 **view**) 是一套用于构建用户界面的**渐进式框架**。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

Vue 中文官网:https://cn.vuejs.org/

特点:

1. 遵循 MVVM 模式
2. 编码简洁, 体积小, 运行效率高, 适合移动/PC 端开发
3. 它本身只关注 UI, 也可以引入其它第三方库开发项目

### hello world

- Vue 实例对象和容器是一一绑定的

```html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script type="text/javascript" src="../localjs/vue.js"></script>
</head>

<body>

    <!-- 准备一个容器 -->
    <div id="root">
        <h1>hello {{name}}</h1>
    </div>

    <script type="text/javascript">
        // 关闭 Vue 的开发版的提示
        Vue.config.productionTip = false;
        // 创建 Vue 实例对象
        new Vue({
            el: '#root',// el指定当前 Vue 实例为那个容器服务,值通常是 css 选择器的字符串
            data: { // data 以对象的形式存储数据,数据供 el 所指定的容器去使用
                name: 'uqingu'
            }
        });
    </script>
</body>

</html>
```

### Vue 模本语法

### 插值语法

- {{}}
- 用于处理标签体的内容

### 指令语法

用于处理标签,比如属性,事件

1. v-bind:为标签的属性绑定值

   ```vue
   <!-- 完整语法 -->
   <a v-bind:href="url">...</a>

   <!-- 缩写 -->
   <a :href="url">...</a>

   <!-- 动态参数的缩写 (2.6.0+) -->
   <a :[key]="url"> ... </a>
   ```

2. v-model:实现双向数据绑定,只能用于表单类元素,建议与表单类的元素 value 属性绑定

   ```html
   <div id="root">
      单项数据绑定:<input type="text" :value="name"><br>
      双向数据绑定:<input type="text" v-model:value="test">
      <!-- 简写形式 -->
      双向数据绑定:<input type="text" v-model="test">
   </div>
   ```

3. el与data的两种写法

   ```html
   <div id="root">
       <h1>{{name}}</h1>
   </div>
   <script>
       Vue.config.productionTip = false;
       const v = new Vue({
           // el:'#root', //第一种方法
           // data: {  // 第一种写法对象式
           //     name: 'test'
           // }
           data() { // 第二种写法函数式
               return {
                   name: 'test'
               }
           },
       })
       setTimeout(() => {
           v.$mount('#root'); // 第二种方法
       }, 1000);
   
   </script>
   ```
4. v-on:为事件绑定对应函数
   ```html
    <body>
        <div id="root">
            <h1>{{message}}</h1>
            <button v-on:click="handle">事件绑定 1</button><br>
            <button @click="handle">事件绑定 2</button><br>
            <button @click="func">事件绑定 3</button><br>
            <button @click="func01($event,55)">事件绑定 4</button>
        </div>
   
        <script>
            Vue.config.productionTip = false;
            new Vue({
                el: '#root',
                data() {
                    return {
                        message: '事件处理'
                    }
                },
                methods: {
                    handle() {
                        alert('事件响应函数!!!')
                    },
                    func(e) {
                        console.log('获取事件对象');
                        console.log(e);
                        alert('获取事件对象')
                    },
                    func01(e,number){
                            console.log('获取事件对象和值');
                        console.log(e);
                        console.log(number);
                        alert('获取事件对象')
                    }
                },
            });
        </script>
    </body>
   ```
5. 事件修饰符
   事件修饰符支持级联书写

	 - prevent：阻止默认事件（常用）；
   - stop：阻止事件冒泡（常用）；
    - once：事件只触发一次（常用）；
    - capture：使用事件的捕获模式；
    - self：只有event.target是当前操作的元素时才触发事件；
    - passive：事件的默认行为立即执行，无需等待事件回调执行完毕；
6. 键盘事件
	- Vue中常用的按键别名：
        回车 => enter
        删除 => delete (捕获“删除”和“退格”键)
        退出 => esc
        空格 => space
        换行 => tab (特殊，必须配合keydown去使用)
        上 => up
        下 => down
        左 => left
        右 => right

    - Vue未提供别名的按键，可以使用按键原始的key值去绑定，但注意要转为kebab-case（短横线命名）

    - 系统修饰键（用法特殊）：ctrl、alt、shift、meta
                (1).配合keyup使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发。
                (2).配合keydown使用：正常触发事件。

    - 也可以使用keyCode去指定具体的按键（不推荐）

    - Vue.config.keyCodes.自定义键名 = 键码，可以去定制按键别名

### MVVM模型

- M:模型(Model)==> `对应 data 中的数据`

- V:视图(View)==> `模板`

- VM:视图模型(ViewModel)==> `Vue 实例对象`

  <img src="https://myimages-1305160569.cos.ap-guangzhou.myqcloud.com//images/202204241907446.png" alt="20190218151740267" style="zoom:100%;" />

### 计算属性 computed

1. 定义：要用的属性不存在，要通过已有属性计算得来。
2. 原理：底层借助了Objcet.defineproperty方法提供的getter和setter。
3. get函数什么时候执行？
   1. 初次读取时会执行一次。
   2. 当依赖的数据发生改变时会被再次调用。
4. 优势：与methods实现相比，内部有缓存机制（复用），效率更高，调试方便。
5. 备注：
   1. 计算属性最终会出现在vm上，直接读取使用即可。
   2. 如果计算属性要被修改，那必须写set函数去响应修改，且set中要引起计算时依赖的数据发生改变。


```html
<div id="root">
    <h1>姓名 插值语法 实现</h1>
    姓:<input type="text" v-model="firstName"><br>
    名:<input type="text" v-model="lastName"><br>
    <br>
    全名:<span>{{firstName}}_{{lastName}}</span>
    <br>
    <h1>姓名 methods 实现</h1>

    姓:<input type="text" v-model="firstName"><br>
    名:<input type="text" v-model="lastName"><br>
    <br>
    全名:<span>{{fullName()}}</span>
    <br>
    <h1>姓名 计算属性 实现</h1>

    姓:<input type="text" v-model="firstName"><br>
    名:<input type="text" v-model="lastName"><br>
    <br>
    全名:<span>{{fullNameComputed}}</span>

    <h1>姓名 计算属性 简写</h1>

    姓:<input type="text" v-model="firstName"><br>
    名:<input type="text" v-model="lastName"><br>
    <br>
    全名:<span>{{fullNameComputed02}}</span>
</div>

<script>
    Vue.config.productionTip = false;
    const vm = new Vue({
        el: '#root',
        data() {
            return {
                firstName: '张',
                lastName: '三',
            }
        },
        methods: {
            fullName() {
                return this.firstName + '_' + this.lastName
            }
        },
        computed: {
            fullNameComputed: {
                //get有什么作用？当有人读取fullName时，get就会被调用，且返回值就作为fullName的值
                //get什么时候调用？1.初次读取fullName时。2.所依赖的数据发生变化时。
                get() {
                    console.log('get')
                    return this.firstName + '_' + this.lastName;
                },
                //set什么时候调用? 当fullName被修改时。
                set(value) {
                    console.log('set', value)
                    const arr = value.split('_')
                    this.firstName = arr[0]
                    this.lastName = arr[1]
                }
            },
            // 简写形式
            fullNameComputed02: {
                get() {
                    console.log('get被调用了');
                    return this.firstName + '-' + this.lastName;
                }

            }
        },
    });

</script>
```

### 监视属性 watch

- 监视属性watch：
  1. 当被监视的属性变化时, 回调函数自动调用, 进行相关操作
  2. 监视的属性必须存在，才能进行监视！！
  3. 监视的两种写法：
     1. new Vue时传入watch配置
     2. 通过vm.$watch监视
- computed和watch之间的区别：
  1. computed能完成的功能，watch都可以完成。
  2. watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作。
- 两个重要的小原则：
  1. 所被Vue管理的函数，最好写成普通函数，这样this的指向才是vm 或 组件实例对象。
  2. 所有不被Vue所管理的函数（定时器的回调函数、ajax的回调函数等、Promise的回调函数），最好写成箭头函数，这样this的指向才是vm 或 组件实例对象。

```html
<div id="root">
    <h1>计算属性实现</h1>
    <h2>今天天气很{{info}}</h2>
    <!-- 绑定事件的时候：@xxx="yyy" yyy可以写一些简单的语句 -->
    <!-- <button @click="isHot = !isHot">切换天气</button> -->
    <button @click="changeWeather">切换天气</button>
    <h1>监视属性实现</h1>
    <h2>今天天气很{{info}}</h2>
    <button @click="changeWeather">切换天气</button>

    <h1>深度监视实现</h1>
    <h2>a:{{numbers.a}}</h2>
    <h2>b:{{numbers.a1.b}}</h2>
    <h2>c:{{numbers.a1.b1.c}}</h2>
    <h2>d:{{numbers.a1.b1.c1.d}}</h2>
    <button style="width: 40px; height :30px" @click="changea">a++</button>
    <button style="width: 40px; height :30px" @click="changeb">b++</button>
    <button style="width: 40px; height :30px" @click="changec">c++</button>
    <button style="width: 40px; height :30px" @click="changed">d++</button>
    <br /><br />
    <h1>姓名监视实现</h1>
    姓：<input type="text" v-model="firstName"> <br /><br />
    名：<input type="text" v-model="lastName"> <br /><br />
    全名：<span>{{fullName}}</span> <br /><br />
</div>
<script>
    Vue.config.productionTip = false;
    const vm = new Vue({
        el: '#root',
        data() {
            return {
                isHot: true,
                numbers: {
                    a: 0,
                    a1: {
                        b: 0,
                        b1: {
                            c: 0,
                            c1: {
                                d: 0
                            }
                        }
                    }
                },
                firstName: '张',
                lastName: '三',
                fullName: '张-三'
            }
        },
        methods: {
            changeWeather() {
                this.isHot = !this.isHot
            },
            changea() {
                console.log('changea')
                this.numbers.a++;
            },
            changeb() {
                console.log('changeb')
                this.numbers.a1.b++;
            },
            changec() {
                console.log('changec')
                this.numbers.a1.b1.c++;
            },
            changed() {
                console.log('changed')
                this.numbers.a1.b1.c1.d++;
            }
        },
        computed: {
            info() {
                return this.isHot ? '炎热' : '凉爽'
            }
        },
        watch: {
            /* isHot: {
                immediate: true, //初始化时让handler调用一下
                //handler什么时候调用？当isHot发生改变时。
                handler(newValue, oldValue) {
                    console.log('isHot被修改了构造参数', newValue, oldValue)
                }
            }, */
            //简写
            isHot(newValue, oldValue) {
                console.log('isHot被修改了', newValue, oldValue, this)
            },
            //监视多级结构中某个属性的变化
            'numbers.a': {
                handler(newValue, oldValue) {
                    console.log('a++', newValue, oldValue)
                }
            },
            //监视多级结构中所有属性的变化
            numbers: {
                deep: true,
                handler() {
                    console.log('numbers改变了')
                }
            },
            firstName(val) {
                setTimeout(() => {
                    console.log('输入的姓:' + val)
                    this.fullName = val + '-' + this.lastName
                }, 1000);
            },
            lastName(val) {
                console.log('输入的名:' + val)
                this.fullName = this.firstName + '-' + val
            }
        },
    });

    vm.$watch('isHot', {
        immediate: true, //初始化时让handler调用一下
        //handler什么时候调用？当isHot发生改变时。
        handler(newValue, oldValue) {
            console.log('isHot被修改了vm监视', newValue, oldValue)
        }
    })
</script>
```



