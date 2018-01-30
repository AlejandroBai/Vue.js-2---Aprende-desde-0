new Vue({
  el: '#app',
  methods: {
    atencion: function(mensaje, event) {
      if (event) event.preventDefault()
      alert(mensaje)
    }
  }
});
