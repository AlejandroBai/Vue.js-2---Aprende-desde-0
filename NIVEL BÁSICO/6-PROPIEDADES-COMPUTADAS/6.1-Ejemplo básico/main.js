new Vue({
  el: '#app',
  data: {
    mensaje: '¡Hola Movida!'
  },
  computed: {
    mensajeInvertido: function () {
      return this.mensaje.split('').reverse().join('');
    }
  }
});
