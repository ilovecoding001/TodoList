<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addTodo="addTodo"></MyHeader>
        <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"></MyList>
        <MyFooter :todos="todos" :checkAllTodeList="checkAllTodeList"></MyFooter>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";
export default {
  name: "App",
  components: {
    MyHeader,
    MyList,
    MyFooter
  },
  data() {
    return {
      // todos: [
      //   {id: '0001', title:'吃饭', done: true},
      //   {id: '0002', title:'睡觉', done: true},
      //   {id: '0003', title:'看书', done: false},
      // ]
      todos: JSON.parse(localStorage.getItem('todos')) || []
    };
  },
  methods: {
    addTodo(todo) {
      // console.log('我是App组件，我收到了数据', x);
      // 将取得到数据添加到数组中
      this.todos.unshift(todo)
    },
    checkTodo(id) {
      this.todos.forEach((todo)=> {
        if (todo.id === id) {
          todo.done = !todo.done
        }
      })
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo)=> {
        return todo.id !== id
      })
    },
    // 全选or全不选
    checkAllTodeList(done) {
      this.todos.forEach(element => {
        element.done = done
      });
    }
  },
  watch: {
    // todos(value) {
    //   localStorage.setItem('todos', JSON.stringify(value))
    // }
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value))
      }
    }
  }
};
</script>

<style>
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