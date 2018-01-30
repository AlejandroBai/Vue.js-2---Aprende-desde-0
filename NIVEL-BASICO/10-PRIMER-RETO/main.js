new Vue({
  el: '#app',
  data: {
    nuevaPartida: false,
    yo: { salud: 100, victorias: 0, derrotas: 0 },
    monstruo: { salud: 100, victorias: 0, derrotas: 0 },
    contadorAtaqueEspecial: 0,
    turnosEspera: 5,
    desactivado: false,
    textoBotonAtaqueEspecial: 'Ataque Especial',
    listaAtaques: []
  },
  methods: {
    ataque(){
      let valorAtaque = Math.floor(Math.random() * (6-1))+1;
      let valorDanoAtacante = Math.floor(Math.random() * (8-1))+1;
      this.monstruo.salud = this.monstruo.salud - valorAtaque;
      this.yo.salud = this.yo.salud - valorDanoAtacante;
      this.listaAtaques.unshift('¡El Monstruo te ha dañado con ' + valorDanoAtacante + '%!');
      this.listaAtaques.unshift('¡Has dañado al Monstruo con ' + valorAtaque + '%!');
      // CONTADOR DE TURNOS PARA ACTIVAR DE NUEVO EL BOTÓN
      if(this.desactivado == true) {
        this.turnosEspera--;
        this.contadorAtaqueEspecial = 0;
      }
    },
    ataqueEspecial(){
      let valorAtaqueEspecial = Math.floor(Math.random() * (15-1))+1;
      let valorDanoAtacanteEspecial = Math.floor(Math.random() * (valorAtaqueEspecial-1))+1;
      this.monstruo.salud = this.monstruo.salud - valorAtaqueEspecial;
      this.yo.salud = this.yo.salud - valorDanoAtacanteEspecial;
      this.listaAtaques.unshift('¡El Monstruo ha contraatacado y te ha dañado con ' + valorDanoAtacanteEspecial + '%!');
      this.listaAtaques.unshift('¡Has utilizado tu poder y has dañado al Monstruo con ' + valorAtaqueEspecial + '%!');
      this.contadorAtaqueEspecial++;
    },
    recuperarSalud(){
      if(this.yo.salud < 100 && this.monstruo.salud < 100){
        let valorRecuperarSalud = Math.floor(Math.random() * (12-1))+1;
        let recuperaMonstruo = Math.floor(Math.random() * (14-1))+1;
        if(this.yo.salud + valorRecuperarSalud > 100){
          this.yo.salud = 100;
        }else{
          this.yo.salud = this.yo.salud + valorRecuperarSalud;
        }
        if(this.monstruo.salud + recuperaMonstruo > 100){
          this.monstruo.salud = 100;
        }else{
          this.monstruo.salud = this.monstruo.salud + recuperaMonstruo;
        }
        this.listaAtaques.unshift('¡El Monstruo también se ha recuperado con un ' + recuperaMonstruo + '%!');
        this.listaAtaques.unshift('¡Has recuperado la salud un ' + valorRecuperarSalud + '%!');
      }
      // CONTADOR DE TURNOS PARA ACTIVAR DE NUEVO EL BOTÓN
      if(this.desactivado == true) {
        this.turnosEspera--;
        this.contadorAtaqueEspecial = 0;
      }
    },
    rendirse(){
      let respuesta = confirm('¿Seguro que quieres rendirte?');
      if(respuesta){
        alert('Te has rendido, fin del juego');
        location.reload();
      }else{
        alert('¡Continúa luchando!');
      }
    }
  },
  computed: {
    funcionamiento(){
      // CONTADOR DE ATAQUE ESPECIAL PARA BLOQUEO DE BOTÓN
      if(this.contadorAtaqueEspecial >= 1){
        this.desactivado = true;
      }

      // CONTADOR DE TURNOS PARA ACTIVAR EL BOTÓN DE ATAQUE ESPECIAL
      if(this.turnosEspera == 0){
        this.turnosEspera = 5;
        this.desactivado = false;
      }

      // TEXTO CAMBIANTE DEL BOTÓN DE ATAQUE ESPECIAL
      if(this.desactivado == true){
        this.textoBotonAtaqueEspecial = 'Carga Especial: ' + this.turnosEspera;
      }else{
        this.textoBotonAtaqueEspecial = 'Ataque Especial';
      }

      // FIN DE LA PARTIDA - ALERT
      if(this.yo.salud <= 0){
        alert('¡Has perdido!');
        this.nuevaPartida = !this.nuevaPartida;
        this.listaAtaques = [];
        this.yo.salud = 100;
        this.monstruo.salud = 100;
        this.contadorAtaqueEspecial = 0;
        this.turnosEspera = 5;
        this.desactivado = false;
        this.yo.derrotas++;
        this.monstruo.victorias++;
      }else if(this.monstruo.salud <= 0) {
        alert('¡Has ganado!');
        this.nuevaPartida = !this.nuevaPartida;
        this.listaAtaques = [];
        this.yo.salud = 100;
        this.monstruo.salud = 100;
        this.contadorAtaqueEspecial = 0;
        this.turnosEspera = 5;
        this.desactivado = false;
        this.yo.victorias++;
        this.monstruo.derrotas++;
      }

      // EL RETURN CON LOS DATOS DEBAJO DE LA PROPIEDAD PARA QUE REALICE EL RESTO
      return this.listaAtaques;
    }
  }
});
