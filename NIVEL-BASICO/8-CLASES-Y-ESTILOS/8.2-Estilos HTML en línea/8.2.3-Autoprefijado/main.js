new Vue({
  el: '#app',
  data: {
    tareas: [{
        titulo: 'Hacer movidas con Vue.js'
      },
      {
        titulo: 'Hacer la compra de la semana'
      },
      {
        titulo: 'Apuntarse al gimnasio'
      }
    ],
    estiloBase: {
      margin: '0px',
      color: 'red',
      fontSize: '30px'
    },
    estiloExtra: {
      textDecoration: 'line-through',
    },
    autoprefijado: {
      textDecorationSkip: 'none'
    }
  }
});
