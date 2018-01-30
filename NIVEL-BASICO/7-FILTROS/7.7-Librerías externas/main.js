new Vue({
  el: '#app',
  data: {
    orden: 'desc',
    juegos: [
      { titulo: 'Mario Kart 8 Deluxe', puntuacion: 9 },
      { titulo: 'FIFA 18', puntuacion: 7 },
      { titulo: 'Super Mario Odyssey', puntuacion: 10 },
      { titulo: 'Dragon Ball Xenoverse 2', puntuacion: 7.5 }
    ]
  },
  computed: {
    ordenarJuegos: function(){
      let orden = this.orden;
      return _.orderBy(this.juegos, ['puntuacion'], [orden]);
    }
  },
  methods: {
    invertirOrden: function(){
      // this.orden = (this.orden === 'desc') ? 'asc' : 'desc';
      if(this.orden === 'desc'){
        this.orden = 'asc';
      }else{
        this.orden = 'desc';
      }
    }
  }
});
