new Vue({
  el: '#app',
  data: {
    mensaje: 'Hola',
    pregunta: '¿Cómo estás?'
  },
  filters: {
    saludo(valor, nombre, pregunta) {
      return valor + ' ' + nombre + ' ' + pregunta;
    }
  }
});
