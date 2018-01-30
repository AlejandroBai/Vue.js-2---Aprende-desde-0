new Vue({
  el: '#app',
  data: {
    contador: 0
  },
  methods: {
    sumar: function() {
      return this.contador++;
    }
  }
});
