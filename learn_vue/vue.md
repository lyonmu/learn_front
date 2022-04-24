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

   
