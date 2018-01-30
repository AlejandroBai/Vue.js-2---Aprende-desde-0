new Vue({
  el: '#app',
  data: {
    citas: [{
        autor: 'Homer Simpson',
        cita: 'Tendrá todo el dinero del mundo, pero hay una cosa que nunca podrá comprar... ¡Un dinosaurio!'
      },
      {
        autor: 'Homer Simpson',
        cita: 'Lisa, los vampiros son seres inventados, como los duendes, los gremlins y los esquimales'
      },
      {
        autor: 'Ralph Wiggum',
        cita: '¡Corre, plátano!'
      },
      {
        autor: 'Barney Gumble',
        cita: 'No hay nada mejor que la cerveza para darle a uno esa falsa sensación de bienestar'
      },
    ]
  },
  methods: {
    citasAutor: function(autor) {
      return this.citas.filter(function(cita) {
        return cita.autor === autor;
      });
    }
  }
});
