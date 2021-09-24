/* global Vue */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      name: "Kiel",
    };
  },
  methods: {
    changeMessage: function () {
      this.message = "New message";
    },
  },
});
