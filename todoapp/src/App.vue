<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <button @click="isShow = !isShow">显示/隐藏</button>
    <br>
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__zoomIn"
      leave-active-class="animate__zoomOut"
    >
      <img v-show="!isShow" key="1" alt="Vue logo" src="./assets/logo.png" />
      <img v-show="isShow" key="2" alt="Vue logo" src="./assets/logo.png" />
    </transition-group>

    <div class="todo-container">
      <div class="todo-wrap">
        <AppHearder @addTodo="addTodo" />
        <AppList :todos="todos" />
        <AppFooter
          :todos="todos"
          @checkAllTodo="checkAllTodo"
          @clearAllTodo="clearAllTodo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppHearder from "./components/AppHearder.vue";
import AppList from "./components/AppList.vue";
import AppFooter from "./components/AppFooter.vue";
import "animate.css";

export default {
  name: "App",
  components: {
    AppHearder,
    AppList,
    AppFooter,
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
      isShow: true,
    };
  },
  mounted() {
    this.$bus.$on("deleteTodo", this.deleteTodo);
    this.$bus.$on("checkTodo", this.checkTodo);
    var css = `
            background-image: linear-gradient(to right, orange, purple);
            -webkit-background-clip: text;
            color: white;
            font-size: 15px;
            border-radius:5px;`;
    console.log("%c我的测试 app", css);
  },
  methods: {
    //添加一个todo
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },
    //勾选or取消勾选一个todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    //删除一个todo
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    //全选or取消全选
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    //清除所有已经完成的todo
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  beforeDestroy() {
    this.$bus.$off("deleteTodo");
    this.$bus.$off("checkTodo");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/*base*/
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
