new Vue({
  el: '#app',
  data: {
    a: null,
    b: null,
    c: null,
    operador: null
  },
  methods: {
    calcular() {
      switch (this.operador) {
        case '+':
          this.c = this.a + this.b
          break;
        case '-':
          this.c = this.a - this.b
          break;
        case 'x':
          this.c = this.a * this.b
          break;
        case '/':
          this.c = this.a / this.b
          break;
      }
    }
  }
});
