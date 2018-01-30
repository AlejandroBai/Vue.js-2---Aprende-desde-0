Vue.filter('minusculas', function(value) {
  return value.toLowerCase();
});

new Vue({
  el: '#app',
  data: {
    mensaje: '¡Hola Movida!'
  },
  filters: {
    mayusculas(valor) {
      return valor.toUpperCase();
    }
  }
});
