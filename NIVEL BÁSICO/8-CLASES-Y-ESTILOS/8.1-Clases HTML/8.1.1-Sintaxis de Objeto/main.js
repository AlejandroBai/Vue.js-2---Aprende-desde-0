new Vue({
  el: '#app',
  data: {
    color: true,
  },
  methods: {
    cambiarColor(){
      return this.color = !this.color;
    }
  }
});
