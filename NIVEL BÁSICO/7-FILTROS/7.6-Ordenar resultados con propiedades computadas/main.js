new Vue({
  el: '#app',
  data: {
    orden: 1,
    juegos: [{
        titulo: 'Mario Kart 8 Deluxe',
        puntuacion: 9
      },
      {
        titulo: 'FIFA 18',
        puntuacion: 7
      },
      {
        titulo: 'Super Mario Odyssey',
        puntuacion: 10
      },
      {
        titulo: 'Dragon Ball Xenoverse 2',
        puntuacion: 7.5
      }
    ]
  },
  computed: {
    ordenarJuegos: function(juego) {
      // ES6 con arrow functions. No haría falta crear la variable orden.
      // return this.juegos.sort((a,b) => (a.puntuacion - b.puntuacion * this.orden));
      orden = this.orden;
      return this.juegos.sort(function(a, b) {
        return (a.puntuacion - b.puntuacion) * orden;
      });
    }
  }
});
