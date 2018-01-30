new Vue({
  el: '#app',
  data: {
    pregunta: '¿',
    respuesta: '¡No puedo darte la respuesta hasta que no escribas la pregunta!',
    imagen: null
  },
  watch: {
    // Cada vez que la pregunta cambie, se ejecutará esta función
    pregunta: function(nuevaPregunta) {
      this.respuesta = 'Esperando a que acabes de escribir...';
      this.getRespuesta();
    }
  },
  methods: {
    // _.debounce es una función que nos proporciona Lodash para limitar una operación compleja. Es decir, sirve para invocar una función después de haber esperado unos milisegundos. En este caso queremos acceder a la API para obtener la respuesta a la pregunta después de 1 segundo. Por lo tanto, cuando el usuario haya terminado de escribir en el teclado, tras 1000 milisegundos se realizará la petición ajax a la API. Para saber más sobre Lodash y la función _.debounce visita: https://lodash.com/docs#debounce
    getRespuesta: _.debounce(
      function() {
        if (this.pregunta.indexOf('?') === -1) {
          this.respuesta = 'Las preguntas tienen que contener símbolos de interrogación. ;-)';
          return
        }
        this.respuesta = 'Pensando...';
        var vm = this;
        axios.get('https://yesno.wtf/api').then(function(response) {
            vm.respuesta = _.capitalize(response.data.answer);
            vm.imagen = response.data.image;
          }).catch(function(error) {
            vm.respuesta = '¡Error! No se ha podido acceder a la API. ' + error;
          });
      },
      // Estos son los milisegundos que esparamos después de que el usuario termina de escribir.
      1000
    )
  }
});
