/* global Vue */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      name: "Kiel",
      fruits: ["apple", "banana", "pear"],
      newFruit: "",
    };
  },
  methods: {
    changeMessage: function () {
      this.message = "New message";
    },
    addNewFruit: function () {
      this.fruits.push(this.newFruit);
      this.newFruit = "";
    },
  },
});
