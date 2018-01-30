new Vue({
  el: '#app',
  data: {
    nombre: 'Homer',
    apellido: 'Simpson',
    nombreCompleto: 'Homer Simpson'
  },

  //EJEMPLO CON WATCH
  // watch: {
  //   nombre: function (val) {
  //     this.nombreCompleto = val + ' ' + this.apellido
  //   },
  //   apellido: function (val) {
  //     this.nombreCompleto = this.nombre + ' ' + val
  //   }
  // }

  //EJEMPLO CON PROPIEDAD COMPUTADA
  computed: {
    nombreCompleto: function () {
      return this.nombre + ' ' + this.apellido
    }
  }
});
