Vue.filter('minusculas', function(value) {
  return value.toLowerCase();
});

new Vue({
  el: '#app',
  data: {
    busqueda: '',
    select: ' ',
    minimo: 0,
    ordenValoracion: 1,
    ordenAlfabetico: 1,
    textoValoracion: 'Puntuación',
    textoAlfabetico: 'Alfabéticamente',
    peliculas: [{
        titulo: 'Crepúsculo',
        genero: 'Adolescente / Fantasía / Romance',
        valoracion: 4.8
      },
      {
        titulo: 'El Club de la Lucha',
        genero: 'Drama / Comedia negra / Acción',
        valoracion: 9.2
      },
      {
        titulo: 'El Exorcista',
        genero: 'Terror',
        valoracion: 8
      },
      {
        titulo: 'Pulp Fiction',
        genero: 'Thriller / Crimen / Comedia negra',
        valoracion: 9.1
      },
      {
        titulo: 'Tiburón',
        genero: 'Suspense / Aventura',
        valoracion: 6.5
      },
      {
        titulo: 'Fast & Furious 6',
        genero: 'Acción / Aventura',
        valoracion: 5
      },
      {
        titulo: 'Reservoir Dogs',
        genero: 'Thriller / Acción / Crimen',
        valoracion: 9
      },
      {
        titulo: 'Armageddon',
        genero: 'Ciencia ficción / Acción',
        valoracion: 4.3
      },
      {
        titulo: 'La Guerra de las Galaxias',
        genero: 'Ciencia ficción / Acción / Aventura',
        valoracion: 8.2
      },
      {
        titulo: 'Austin Powers',
        genero: 'Comedia / Acción / Parodia',
        valoracion: 7.2
      },
      {
        titulo: 'American Pie',
        genero: 'Comedia / Adolescente',
        valoracion: 5.2
      },
      {
        titulo: 'Torrente 3. El protector',
        genero: 'Comedia / Acción',
        valoracion: 3.2
      },
    ]
  },
  computed: {
    funcionamiento() {
      var orden = this.orden;
      var busqueda = this.busqueda.toLowerCase();
      var genero = this.select;
      var minimo = this.minimo;

      return this.peliculas.filter(function(pelicula) {
        var filtrado = pelicula.genero.includes(genero);
        var filtrado2 = pelicula.titulo.toLowerCase().includes(busqueda);
        var filtrado3 = pelicula.valoracion >= minimo;
        return filtrado && filtrado2 && filtrado3;
      });
    }
  },
  methods: {
    ordenarValoracion() {
      let ordenValoracion = this.ordenValoracion;
      if (this.ordenValoracion === 1) {
        this.peliculas.sort(function(a, b) {
          return (a.valoracion - b.valoracion) * ordenValoracion;
        });
        this.textoValoracion = 'Ver mejores arriba';
        this.ordenValoracion = -1;
      } else {
        this.peliculas.sort(function(a, b) {
          return (a.valoracion - b.valoracion) * ordenValoracion;
        });
        this.textoValoracion = 'Ver peores arriba';
        this.ordenValoracion = 1;
      }
    },
    ordenarAlfabeticamente() {
      let ordenAlfabetico = this.ordenAlfabetico;
      let peliculas = this.peliculas;
      if (this.ordenAlfabetico === 1) {
        this.peliculas.sort(function(a, b) {
          var x = a.titulo;
          var y = b.titulo;
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        });
        this.textoAlfabetico = 'Alfabéticamente Z - A';
        this.ordenAlfabetico = -1;
      } else {
        this.peliculas.sort(function(a, b) {
          return (a.titulo > b.titulo) ? 1 : ((b.titulo > a.titulo) ? -1 : 0);
        });
        this.peliculas.reverse();
        this.textoAlfabetico = 'Alfabéticamente A - Z';
        this.ordenAlfabetico = 1;
      }
    }
  }
});
