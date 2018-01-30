new Vue({
  el: '#app',
  data: {
    tareas: [{
        titulo: 'Hacer movidas con Vue.js',
        completado: false
      },
      {
        titulo: 'Hacer la compra de la semana',
        completado: false
      },
      {
        titulo: 'Apuntarse al gimnasio',
        completado: false
      }
    ],
    estiloBase: {
      margin: '0px',
      fontSize: '30px'
    },
    estiloExtra: {
      textDecoration: 'line-through',
    }
  },
  methods: {
    completarTarea: function(tarea) {
      return tarea.completado = !tarea.completado;
    }
  },
  computed: {
    tareasCompletadas: function() {
      return this.tareas.filter(function(tarea) {
        return tarea.completado;
      });
    }
  }
});
