function playSonido (idElementoAudio){
   document.querySelector(idElementoAudio).play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0;contador < ListaDeTeclas.length;contador++ ){
   const tecla = ListaDeTeclas[contador];
   const instrumento = tecla.classList[1];

   const idAudio =`#sonido_${instrumento}`;

   tecla.onclick = function (){
      playSonido(idAudio);
   }

  tecla.onkeydown = function(evento){

     if(evento.code === 'Space' || evento.code === 'Enter'){
       tecla.classList.add('activa');
  }
}
   tecla.onkeyup = function(){
   tecla.classList.remove('activa');
}
}  
