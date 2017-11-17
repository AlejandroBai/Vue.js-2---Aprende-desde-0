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
