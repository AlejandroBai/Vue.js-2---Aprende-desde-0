// var vm1 = new Vue({
//   el: '#app1',
//   data: {
//     mensaje: 'Instancia 1'
//   }
// });

// var vm2 = new Vue({
//   el: '#app2',
//   data: {
//     mensaje: 'Instancia 2'
//   },
// });
// vm1.nuevaPropiedad = '¡Soy nueva!';
// console.log(vm1);

new Vue({
  el: '#app',
  data: {
    titulo: 'Fases de la Instancia Vue'
  },
  
  beforeCreate: function() {
    console.log('beforeCreate()');
  },
  created: function () {
    console.log('create()');
  },
  beforeMount: function() {
    console.log('beforeMount()');
  },
  mounted: function() {
    console.log('mounted()');
  },
  beforeUpdate: function() {
    console.log('beforeUpdate()');
  },
  updated: function() {
    console.log('updated()');
  },
  beforeDestroy: function() {
    console.log('beforeDestroy()');
  },
  destroyed: function() {
    console.log('destroyed()');
  },

  methods: {
    destroy(){
      this.$destroy();
    }
  }
});