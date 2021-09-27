/* global Vue, axios */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      todos: [],
      postTodo: [],
    };
  },
  methods: {
    loadTodos: function () {
      axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
        console.log(response.data);
        this.todos = response.data;
      });
    },
    postTodos: function () {
      axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          userId: 23,
          title: "Meet the Flintstones",
          completed: true,
        })
        .then((response) => {
          console.log(response.data);
          this.postTodo = response.data;
        });
    },
  },
});
