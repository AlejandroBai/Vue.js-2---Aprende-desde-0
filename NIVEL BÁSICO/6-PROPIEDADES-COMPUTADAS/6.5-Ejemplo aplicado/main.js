new Vue({
  el: '#app',
  data: {
    a: null,
    b: null,
    operador: null
  },
  computed: {
    c: function() {
      switch (this.operador) {
        case '+':
          return this.a + this.b
          break;
        case '-':
          return this.a - this.b
          break;
        case 'x':
          return this.a * this.b
          break;
        case '/':
          return this.a / this.b
          break;
      }
    }
  }
});
