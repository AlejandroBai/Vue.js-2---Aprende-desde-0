new Vue({
  el: '#app',
  data: {
    personajes: [
      {
        nombre: 'Batman',
        votos: 0
      },
      {
        nombre: 'Son Goku',
        votos: 0
      },
      {
        nombre: 'DeadPool',
        votos: 0
      },
    ],
    nuevoPersonaje: {
      nombre: '',
      votos: 0
    },
  },
  methods: {
    insertarPersonaje(){
      //Solo realiza la función de inserción si hay texto escrito y si no se trata de únicamente espacios en blanco
      if(this.nuevoPersonaje.nombre.trim() != ''){
        this.personajes.unshift({nombre: this.nuevoPersonaje.nombre, votos: 0});
        this.nuevoPersonaje.nombre = '';
        this.nuevoPersonaje.votos = 0;
      }
    },
    //Utilizamos la función map() para poner el dato votos en 0
    borrar(){
      this.personajes = this.personajes.map(function(personaje) {
        personaje.votos = 0;
        return personaje;
      });
    }
  },
  computed: {
    ganador(){
        //Primero ordenamos el array de forma descendiente
        let personajesOrdenados = this.personajes.sort(function(a, b) {
          return b.votos - a.votos;
        });
        //El más fuerte será el que esté arriba del array
        return personajesOrdenados[0];
      }
  }
});
