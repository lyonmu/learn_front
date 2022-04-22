# JavaScript基础

## JavaScript简介

### 什么是JavaScript

- 运行在浏览器中的“动态类型”编程语言
- 通过JavaScript引擎可以在服务端执行



### 浏览器中的JavaScript可以做什么

- 在网页中添加新的HTML内容
- 修改网页的已有内容和样式
- 响应用户的行为
- 向服务端发送请求，下载和上传文件
- 获取或者设置cookie
- 记住客户端的数据（“本地存储”）

## JavaScript基础语法知识

### JavaScript的书写位置

- HTML的`script`标签之中， `<script type="text/javascript"></script>`
- 外部的js文件之中，外部的脚本可以通过 `<script src="path/to/script.js"></script>` 的方式插入
- 标签的属性之中，`onclick="alert('测试')"`

### 五个输出语句

- 控制台输出语句，`console.log("控制台输出语句");`
- HTML输出语句，`alert("提示框输出语句");`
- 模态框输出语句，`document.write("HTML输出语句");`
- 带文本消息的模态窗口，`let result = prompt("你在干什么","打游戏");`
- 确定和取消两个按钮的模态窗口，`let isBoss = confirm("Are you the boss?");`

### 注释

- 单行注释 `//`
- 多行注释`/*  */`

### 注解

- JavaScript的运行是从上之下逐行执行
- JavaScript严格区分大小写
- 一个单独的 `<script>` 标签不能同时有 `src` 特性和内部包裹的代码
- `type` 和 `language` 特性（attribute）不是必需的

- 用英文分号作为执行语句的结束，如果不写分号解释器会自动补齐但是会浪费浏览器性能

## 变量和常量

变量是数据的“命名存储”，用于存储编程过程中产生的信息

### 变量的命名

- 变量名称必须仅包含字母、数字、符号`$`和`_`
- 变量首字符必须非数字
- 通常采用驼峰命名法
- 不能使用JavaScript的关键字和保留字来命名变量
- 不建议使用JavaScript的内置对象来命名变量

### 变量的声明

- let
- var

### 常量

- 用const声明一个常数（不变）变量
- 普遍的做法大写字母加下划线来作为常量的命名

## 数据类型

### Number

- number类型代表整数和浮点数
- `Infinity` 代表数学概念中的 无穷大 ∞，它有正负之分
- `NaN` 代表一个计算错误，它是一个不正确的或者一个未定义的数学操作所得到的结果

### Bigint

- 用来进行大数运算
- 可以通过将 `n` 附加到整数字段的末尾来创建 `BigInt` 值
- IE不兼容

### String

- JavaScript 中的字符串必须被括在引号里，支持单引号、双引号、反引号

- 双引号和单引号都是“简单”引用，在 JavaScript 中两者几乎没有什么差别

- 反引号是 **功能扩展** 引号。它们允许我们通过将变量和表达式包装在 `${…}` 中，来将它们嵌入到字符串中

  ~~~JavaScript
  let name = "John";
  // 嵌入一个变量
  alert( `Hello, ${name}!` ); // Hello, John!
  // 嵌入一个表达式
  alert( `the result is ${1 + 2}` ); // the result is 3
  ~~~

  

### Boolean

- boolean 类型仅包含两个值：`true` 和 `false`

### “null”

- 特殊的 `null` 值不属于上述任何一种类型
- 它构成了一个独立的类型，只包含 `null` 值

### “undefined”

- `undefined` 的含义是 `未被赋值`。
- 如果一个变量已被声明，但未被赋值，那么它的值就是 `undefined`

### object和symbol

- `object` 类型是一个特殊的类型。
- 其他所有的数据类型都被称为“原始类型”，因为它们的值只包含一个单独的内容（字符串、数字或者其他）。相反，`object` 则用于储存数据集合和更复杂的实体。
- `symbol` 类型用于创建对象的唯一标识符。我们在这里提到 `symbol` 类型是为了完整性，但我们要在学完 `object` 类型后再学习它。

### typeof运算符

- `typeof` 运算符返回参数的类型。当我们想要分别处理不同类型值的时候，或者想快速进行数据类型检验时，非常有用。
- 对 `typeof x` 的调用会以字符串的形式返回数据类型

## 类型转换

大多数情况下，运算符和函数会自动将赋予它们的值转换为正确的类型

### 字符串转换

- 当我们需要一个字符串形式的值时，就会进行字符串类型转换

### 数字型转换

- 在算术函数和表达式中，会自动进行 number 类型转换

- 可以使用 `Number(value)` 显式地将这个 `value` 转换为 number 类型

- number 类型转换规则：

  | 值              | 对应转换规则                                                 |
  | :-------------- | :----------------------------------------------------------- |
  | `undefined`     | `NaN`                                                        |
  | `null`          | `0`                                                          |
  | `true 和 false` | `1` and `0`                                                  |
  | `string`        | 去掉首尾空格后的纯数字字符串中含有的数字。如果剩余字符串为空，则转换结果为 `0`。否则，将会从剩余字符串中“读取”数字。当类型转换出现 error 时返回 `NaN`。 |

### 布尔类型转换

- 直观上为“空”的值（如 `0`、空字符串、`null`、`undefined` 和 `NaN`）将变为 `false`
- 其他值变成 `true`
- 可以通过调用 Boolean(value) 显式地进行转换

## 运算符

大部分运算符同Java运算符

- 可选链操作符 `?.`：允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。`?.` 操作符的功能类似于 `.` 链式操作符
- `typeof`：操作符返回一个字符串，表示未经计算的操作数的类型
- `delete`：用于删除对象的某个属性；如果没有指向这个属性的引用，那它最终会被释放
- `await`：操作符用于等待一个[`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 对象。它只能在异步函数 [`async function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function) 中使用
- `in`：如果指定的属性在指定的对象或其原型链中，则**`in` 运算符**返回`true`
- `instanceof`：用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上
- `===`：检查它的两个操作数是否相等，并且返回一个布尔值结果。全等运算符与[相等运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality)（`==`）最显著的区别是，如果操作数的类型不同，`== `运算符会在比较之前尝试将它们转换为相同的类型
- `!===`：检查它的两个对象是否不相等，返回一个布尔结果。与不等式运算符不同，严格不等式运算符总是认为不同类型的对象是不同的
- `??`：是一个逻辑操作符，当左侧的操作数为 [`null`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null) 或者 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined) 时，返回其右侧操作数，否则返回左侧操作数
- `… ? … : …`：三元运算符

## 条件语句

~~~javascript
if () {
            
        } else {
            
        }
~~~

## 分支语句

~~~javascript
switch (key) {
            case value:

                break;
            case value:

                break;
            case value:

                break;

            default:
                break;
        }
~~~

## 循环语句

~~~javascript

while (condition) {
  // 代码
  // 所谓的“循环体”
}

do {
  // 循环体
} while (condition);

for (begin; condition; step) {
  // ……循环体……
}
~~~

- break/continue/return可以跳出循环

## 对象

JavaScript是一门面向对象的语言。

对象是JS中的引用数据类型

对象是一种复合数据类型，在对象中可以保存多个不同数据类型的属性

使用typeof检查一个对象时，会返回object

### 对象的声明

- 布尔是对象（如果用 `new` 关键词定义）
- 数字是对象（如果用 `new` 关键词定义）
- 字符串是对象（如果用 `new` 关键词定义）
- 日期永远都是对象
- 算术永远都是对象
- 正则表达式永远都是对象
- 数组永远都是对象
- 函数永远都是对象
- 对象永远都是对象

所有 JavaScript 值，除了原始值，都是对象。

#### JavaScript原始值

*原始值*指的是没有属性或方法的值。

*原始数据类型*指的是拥有原始值的数据。

JavaScript 定义了 5 种原始数据类型：

- string
- number
- boolean
- null
- undefined

原始值是一成不变的（它们是硬编码的，因此不能改变）。

#### 对象的声明

- 方式一

  let obj = new Object();

- 方式二

  Let obj = {};

#### 添加对象属性

- 语法：
			对象.属性名 = 属性值;
		对象["属性名"] = 属性值;
- 对象的属性名没有任何要求，不需要遵守标识符的规范，
			但是在开发中，尽量按照标识符的要求去写。
- 属性值也可以任意的数据类型。
- 可以直接在声明时直接添加属性，也可以先声明再向对象添加属性

```javascript
// 先声明再添加
let obj = new Object();
obj.attribute01 = "test01";
obj["attribute02"] = "test02";

// 声明时直接添加
let obj2 = {
    attribute01: "test01",
    ["attribute02"]: "test02"
};
```

#### 读取对象属性

- 语法：
  	对象.属性名
  	对象["属性名"]

```javascript
console.log(obj.attribute01);
console.log(obj2["attribute02"]);
```

#### 删除对象属性

- 语法：

  delete 对象.属性名
  delete 对象["属性名"]

```javascript
let obj2 = {
    attribute01: "test01",
    ["attribute02"]: "test02",
    attribute03: "test01",
    attribute04: "test01",
    attribute05: "test01",
    attribute06: "test01"
};
delete obj2.attribute06
delete obj2["attribute05"]
console.log(obj2);
```

#### in

- 语法："属性名" in 对象
- 如果在对象中含有该属性，则返回true，如果没有则返回false
- `for。。。in`遍历对象的属性

```javascript
let obj2 = {
    attribute01: "test01",
    ["attribute02"]: "test02",
    attribute03: "test01",
    attribute04: "test01",
    attribute05: "test01",
    attribute06: "test01"
};
for (const key in obj2) {
    console.log(typeof key);
    console.log(key);
}
```

### 方法

- 方法（method）
- 可以将一个函数设置为一个对象的属性，当一个对象的属性是一个函数时，我们称这个函数是该对象的方法。
- 对象.方法名();
- 函数名();

### 构造函数

构造函数是专门用来创建对象的函数
- 一个构造函数我们也可以称为一个类

- 通过一个构造函数创建的对象，我们称该对象时这个构造函数的实例

- 通过同一个构造函数创建的对象，我们称为一类对象

- 构造函数就是一个普通的函数，只是他的调用方式不同，
	如果直接调用，它就是一个普通函数
	如果使用new来调用，则它就是一个构造函数

- 例子：
	function Person(){

	}

#### 构造函数的执行流程

1.创建一个新的对象

2.将新的对象作为函数的上下文对象（this）

3.执行函数中的代码

4.将新建的对象返回

#### instanceof

- 语法：对象 instanceof 构造函数
- 如果该对象时构造函数的实例，则返回true，否则返回false
- Object是所有对象的祖先，所以任何对象和Object做instanceof都会返回true

```javascript
function User(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.sayName = function () {
        console.log(this.name);
    };
};

let one = new User("one", 18, "man");
one.sayName();
console.log(one instanceof User);
```

### 原型

- 创建一个函数以后，解析器都会向函数中添加一个属性prototype
	
- prototype属性指向的是一个对象，这个对象我们称为原型对象。
	
- 当函数作为构造函数使用，它所创建的对象中都会有一个隐含的属性执行该原型对象。
	这个隐含的属性可以通过对象`.__proto__`来访问。
	
- 原型对象就相当于一个公共的区域，凡是通过同一个构造函数创建的对象他们通常都可以访问到相同的原型对象。
	我们可以将对象中共有的属性和方法统一添加到原型对象中，这样我们只需要添加一次，就可以使所有的对象都可以使用。
	
- 当我们去访问对象的一个属性或调用对象的一个方法时，它会先自身中寻找，
	如果在自身中找到了，则直接使用。
	如果没有找到，则去原型对象中寻找，如果找到了则使用，
	如果没有找到，则去原型的原型中寻找，依此类推。直到找到Object的原型为止，Object的原型的原型为null，
	如果依然没有找到则返回undefined
	
- hasOwnProperty()
	
	这个方法可以用来检查对象自身中是否含有某个属性
	
	语法：对象.hasOwnProperty("属性名")

```javascript
function User(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.sayName = function () {
        console.log(this.name);
    };
};
User.prototype.test = "我是原型中的属性";
User.prototype.sayHello = function () {
    console.log("我是原型中的方法");
}
let one = new User("one", 18, "man");
console.log(one.__proto__);
console.log(one.test);
one.sayHello();
console.log(one.hasOwnProperty("test"));
console.log(one.__proto__.hasOwnProperty("test"));
```

### 可选链 "?."

## 函数

- 函数是一组执行特定任务（具有特定功能）的，可以重复使用的代码块。

- 除了使用内置函数外，我们也可以自行创建函数（自定义函数），然后在需要的地方调用这个函数，这样不仅可以避免编写重复的代码，还有利于代码的后期维护。

- 函数也是一个对象，也具有普通对象的功能
- 函数中可以封装一些代码，在需要的时候可以去调用函数来执行这些代码
- 使用typeof检查一个函数时会返回function

### 函数声明

- 创建函数
	
	- 函数声明
	  	function 函数名([形参1,形参2...形参N]){
	  			 语句...
	  	}
	
	- 函数表达式
		    var 函数名 = function([形参1,形参2...形参N]){
			    语句...
		    };

```javascript
// 原型
let func02 = new (function func03(test) {
	console.log("func02");
})();
// 取消函数名
let func04 = new (function (test) {
	console.log("func04");
})();

// 取消new
let func05 = function (test) {
	console.log("func05");
};

// 取消赋值
function func06(test) {
	console.log("func05");
}

// 立即执行函数 匿名函数
// 立即执行函数往往只会执行一次
(function (test) {
	console.log(test);
})("立即执行函数");

// 箭头函数 let func = (arg1, arg2, ..., argN) => expression;
let func01 = (test) => {
	console.log(test);
};
```

- 调用函数
	
	- 语法：函数对象([实参1,实参2...实参N]);
	
	  fun() sum() alert() Number() parseInt()
	
	- 当我们调用函数时，函数中封装的代码会按照编写的顺序执行
	

### 函数参数

- 形参：形式参数
		- 定义函数时，可以在()中定义一个或多个形参，形参之间使用,隔开
	- 定义形参就相当于在函数内声明了对应的变量但是并不赋值，形参会在调用时才赋值。
- 实参：实际参数
		 - 调用函数时，可以在()传递实参，传递的实参会赋值给对应的形参,
	 - 调用函数时JS解析器不会检查实参的类型和个数，可以传递任意数据类型的值。
	 - 如果实参的数量大于形参，多余实参将不会赋值，
		 - 如果实参的数量小于形参，则没有对应实参的形参将会赋值undefined

### 函数返回值

返回值，就是函数执行的结果。

- 使用return 来设置函数的返回值。

- 语法：return 值;

  - 该值就会成为函数的返回值，可以通过一个变量来接收返回值

  - return后边的代码都不会执行，一旦执行到return语句时，函数将会立刻退出。
  - return后可以跟任意类型的值，可以是基本数据类型，也可以是一个对象。
  - 如果return后不跟值，或者是不写return则函数默认返回undefined。

### 作用域

 - 作用域简单来说就是一个变量的作用范围。
 - 在JS中作用域分成两种：
	- 全局作用域
	 - 直接在script标签中编写的代码都运行在全局作用域中
	 - 全局作用域在打开页面时创建，在页面关闭时销毁。
		- 全局作用域中有一个全局对象window，window对象由浏览器提供，
		可以在页面中直接使用，它代表的是整个的浏览器的窗口。
		- 在全局作用域中创建的变量都会作为window对象的属性保存
		在全局作用域中创建的函数都会作为window对象的方法保存
		- 在全局作用域中创建的变量和函数可以在页面的任意位置访问。
		在函数作用域中也可以访问到全局作用域的变量。
	 - 尽量不要在全局中创建变量
 - 函数作用域
     - 函数作用域是函数执行时创建的作用域，每次调用函数都会创建一个新的函数作用域。
     - 函数作用域在函数执行时创建，在函数执行结束时销毁。
     - 在函数作用域中创建的变量，不能在全局中访问。
        			- 当在函数作用域中使用一个变量时，它会先在自身作用域中寻找，

  	如果找到了则直接使用，如果没有找到则到上一级作用域中寻找，
  	如果找到了则使用，找不到则继续向上找，一直会
 - 变量的声明提前
  	- 在全局作用域中，使用var关键字声明的变量会在所有的代码执行之前被声明，但是不会赋值。

  			所以我们可以在变量声明前使用变量。但是不使用var关键字声明的变量不会被声明提前。
  	- 在函数作用域中，也具有该特性，使用var关键字声明的变量会在函数所有的代码执行前被声明，
  			如果没有使用var关键字声明变量，则变量会变成全局变量
 - 函数的声明提前
  	- 在全局作用域中，使用函数声明创建的函数（function fun(){}）,会在所有的代码执行之前被创建，

  			也就是我们可以在函数声明前去调用函数，但是使用函数表达式(var fun = function(){})创建的函数没有该特性
   - 在函数作用域中，使用函数声明创建的函数，会在所有的函数中的代码执行之前就被创建好了。

### this

面向对象语言中 this 表示当前对象的一个引用。

但在 JavaScript 中 this 不是固定不变的，它会随着执行环境的改变而改变。

- 在函数中，在严格模式下，this 是未定义的(undefined)。

- 在事件中，this 表示接收事件的元素。

- 我们每次调用函数时，解析器都会将一个上下文对象作为隐含的参数传递进函数。

  使用this来引用上下文对象，根据函数的调用形式不同，this的值也不同。

- 如果 new 了函数内的 this 会指向当前这个 person 并且就算函数内部不 return 也会返回一个对象。

- 如果不 new 的话函数内的 this 指向的是 window。

- this的不同的情况：
  - 1.以函数形式调用时，this永远都是window

     *      2.以方法的形式调用时，this是调用方法的对象
     *      3.以构造函数的形式调用时，this是新创建的那个对象
     *      4.使用call和apply调用时，this是指定的那个对象

### call()和apply()

  - 这两个方法都是函数对象的方法，需要通过函数对象来调用

  - 当对函数调用call()和apply()都会调用函数执行

  - 在调用call()和apply()可以将一个对象指定为第一个参数

       此时这个对象将会成为函数执行时的this

  - call()方法可以将实参在对象之后依次传递

  - apply()方法需要将实参封装到一个数组中统一传递

### arguments

             *      arguments是一个类数组对象,它也可以通过索引来操作数据，也可以获取长度
             
             *      在调用函数时，我们所传递的实参都会在arguments中保存
             
             *      arguments.length可以用来获取实参的长度
             
             *      我们即使不定义形参，也可以通过arguments来使用实参，
             
             只不过比较麻烦
             
             arguments[0] 表示第一个实参
             
             arguments[1] 表示第二个实参 。。。
             
             *      它里边有一个属性叫做callee，
             
             这个属性对应一个函数对象，就是当前正在指向的函数的对象

### 箭头函数

#### 避免使用箭头函数的五种情况

- `不要在对象方法中使用箭头函数。`箭头函数自身没有 this 会导致自动继承外层的 this 导致打印出的变量出错

  ~~~javascript
   // 箭头函数自身没有 this 会导致自动继承外层的 this 导致打印出的变量出错
  this.food = "banana";
  
  let obj = {
      food: "strawberry",
      log: () => {
          console.log(this.food);
      }
  };
  
  obj.log(); // 打印"banana"
  ~~~

- `不要再prototype上使用。`没有 this 导致 this 指向错误，所以在定义 prototype 方法上一定记得不要使用箭头函数

  ```javascript
  this.name = "oli"; // this 从外层基础
  
  function Person(name) {
      this.name = name;
  }
  
  Person.prototype.log = () => {
      console.log(this.name);
  };
  
  let p = new Person();
  
  p.log(); // 打印"oli"
  ```

- `避免再需要arguments上使用。`因为箭头函数没有 arguments 因此如果外层是另外一个函数，那么 arguments 是这个外层函数的

  ```javascript
  function foo() {
      return (...argv) => {
          console.log(...arguments); // 打印[1, 2, 3]，箭头函数并没有arguments需要从外部函数获取
          console.log(...argv); // 打印[1, 2, 3, 4]
      };
  }
  
  foo([1, 2, 3])([1, 2, 3, 4]);
  ```

- `避免在动态上下文中的回调函数里使用。`如果你需要你的上下文是可变的，动态的，那么不要使用箭头函数

  ```javascript
  document.querySelectorAll('p').forEach(elem => {
      elem.addEventListener('click', () => {
          console.log(this.innerText.length) // 这个时候 this 指向 window，因此会报错
      })
  })
  ```

- `避免在需要 caller 的时候使用`caller 早已不再是推荐的标准，应该在任何时候都避免使用 caller 

## 数组

- 数组也是一个对象，是一个用来存储数据的对象

  和Object类似，但是它的存储效率比普通对象要高

- 数组中保存的内容我们称为元素

- 数组使用索引（index）来操作元素

- 索引指由0开始的整数

### 数组的操作

- 创建数组
		
	```javascript
	var arr = new Array();
	var arr = []
	```
	
- 向数组中添加元素

   语法；
   	数组对象[索引] = 值;

   ```javascript
   arr[0] = 123;
   arr[1] = "hello";
   ```

- 创建数组时直接添加元素

   语法：

   ​    var arr = [元素1,元素2....元素N];

   ```javascript
   var arr = [123,"hello",true,null];
   ```

- 获取和修改数组的长度

   - 使用length属性来操作数组的长度
   		
   	- 获取长度：数组.length
   	- length获取到的是数组的最大索引+1
   	- 对于连续的数组，length获取到的就是数组中元素的个数
   	
   - 修改数组的长度
   		
   	- 数组.length = 新长度
   	
   	   - 如果修改后的length大于原长度，则多出的部分会空出来
   	   - 如果修改后的length小于原长度，则原数组中多出的元素会被删除
   	
   - 向数组的最后添加元素
   		数组[数组.length] = 值;

### 数组的方法

[JavaScript Array 对象方法手册](https://www.runoob.com/jsref/jsref-obj-array.html)

### 遍历数组

- 遍历数组就是将数组中元素都获取到

- 一般情况我们都是使用for循环来遍历数组：
	
	```		javascript
	for(var i=0 ; i<数组.length ; i++){
	  			//数组[i]
	  		}
	```
	
- 使用forEach()方法来遍历数组（不兼容IE8）

  ```javascript
  arrays.forEach(function(value , index , obj){
  
  			});
  ```

  - forEach()方法需要一个回调函数作为参数，
  - 数组中有几个元素，回调函数就会被调用几次，
  - 每次调用时，都会将遍历到的信息以实参的形式传递进来，
  - 我们可以定义形参来获取这些信息。
    	`value`:正在遍历的元素
        `index`:正在遍历元素的索引
    	`obj`:被遍历对象

## 包装类

- 在JS中为我们提供了三个包装类：
	`String()` `Boolean()` `Number()`
	
- 通过这三个包装类可以创建基本数据类型的对象
	```javascript
	var num = new Number(2);
	var str = new String("hello");
	var bool = new Boolean(true);
	```
	
	但是在实际应用中千万不要这么干。
	
- 当我们去操作一个基本数据类型的属性和方法时，
	解析器会临时将其转换为对应的包装类，然后再去操作属性和方法，
	操作完成以后再将这个临时对象进行销毁。

## 字符串

- 主要学习字符串的方法
- [JavaScript String 对象方法手册](https://www.runoob.com/jsref/jsref-obj-string.html)

## 时间对象

- 主要学习时间对象的方法
- [JavaScript Math 对象方法手册](https://www.runoob.com/jsref/jsref-obj-math.html)

## Math

- Math属于一个工具类，它不需要我们创建对象，它里边封装了属性运算相关的常量和方法

- 我们可以直接使用它来进行数学运算相关的操作

- Math.PI：常量，圆周率

- Math.abs()：绝对值运算

- Math.ceil()：向上取整

- Math.floor()：向下取整

- Math.round()：四舍五入取整

- Math.random()：

  - 生成一个0-1之间的随机数

  - 生成一个x-y之间的随机数

    Math.round(Math.random()*(y-x)+x);

- Math.pow(x,y)：求x的y次幂

- Math.sqrt()：对一个数进行开方

- Math.max()：求多个数中最大值

- Math.min()：求多个数中的最小值

## DOM对象

当网页被加载时，浏览器会创建页面的文档对象模型（Document Object Model）

通过可编程的对象模型，JavaScript 获得了足够的能力来创建动态的 HTML

- JavaScript 能够改变页面中的所有 HTML 元素
- JavaScript 能够改变页面中的所有 HTML 属性
- JavaScript 能够改变页面中的所有 CSS 样式
- JavaScript 能够对页面中的所有事件做出反应

### DOM查询























































