new Vue({
  el: '#app',
  methods: {
    saludar: function(mensaje) {
      return alert('Vue.js dice: ' + mensaje);
    }
  }
});
