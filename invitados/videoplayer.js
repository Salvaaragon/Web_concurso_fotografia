//Controles de vídeo

function iniciar(){
  
  miVideo=document.getElementById("miPelicula");
  reproducir=document.getElementById("botonPlay");
  audio=document.getElementById("botonAudioSi");
  parar=document.getElementById("botonStop");
  barra=document.getElementById("barra");
  barra.largoBarra = 540;
  barraProgreso=document.getElementById("barraProgreso");
  
  reproducir.addEventListener("click",playOPausa,false);
  parar.addEventListener("click",stop, false);
  audio.addEventListener("click",sonar,false);
  barra.addEventListener("click",clickEnBarra,false);
}

function playOPausa(){
  if(!miVideo.paused && !miVideo.ended){
    miVideo.pause();
    reproducir.src="../imagenes/botones/play.png";
    window.clearInterval(actualizarBarra);
  }else{
    miVideo.play();
    reproducir.src="../imagenes/botones/pausar.png";
    actualizarBarra=window.setInterval(actualizar,500);
  }
}

function stop(){
  miVideo.pause();
  reproducir.src="../imagenes/botones/play.png";
  miVideo.currentTime=0;
  barraProgreso.style.width="0px";
  
}

function sonar(){
  if(miVideo.muted){
    miVideo.muted=false;
    audio.src="../imagenes/botones/audiosi.png";
  }else{
    miVideo.muted=true;
    audio.src="../imagenes/botones/audio_no.png";
  }
}

function actualizar(){
  if(!miVideo.ended){
    var largo=parseInt(miVideo.currentTime*barra.largoBarra/miVideo.duration);
    barraProgreso.style.width=largo+"px";
  } else {
    barraProgreso.style.width="0px";
    reproducir.src="../imagenes/botones/play.png";
    window.clearInterval(actualizarBarra);
  }
}

function clickEnBarra(e){
  if(!miVideo.paused && !miVideo.ended){
    var ratonX = e.pageX-barra.offsetLeft;
    miVideo.currentTime = ratonX*miVideo.duration/barra.largoBarra;
    barraProgreso.style.width=ratonX+"px";
  }
}

window.addEventListener("load", iniciar,false);
