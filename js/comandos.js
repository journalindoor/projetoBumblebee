

var palco = document.getElementById('palco');
var junin = document.getElementById('junin');
var juninEsq = 0;
var velocidade = 5;


function qualSeta(e) {

  if (e.keyCode == '38' || e.keyCode == '32') {
    console.log('seta cima ou barra espaco');
    pulando();
  }
  else if (e.keyCode == '40') {
    console.log('seta baixo');
  }
  else if (e.keyCode == '37') {
   console.log('seta esquerda');
   andaPraEsquerda();
   
 }
 else if (e.keyCode == '39') {
   console.log('seta direita');
   andaPraDireita();
 }

}

document.onkeydown = qualSeta;

function andaPraEsquerda(){
  juninEsq -= velocidade;
  junin.style.left = juninEsq + 'px';
  if(juninEsq <= 0){
   juninEsq += velocidade;
 }
}

function andaPraDireita(){
   juninEsq += velocidade;
   junin.style.left = juninEsq + 'px';  
}

function pulando(){
  junin.classList.add('pulando');
  junin.addEventListener("animationend", fimDoPulo);
}

function fimDoPulo(){
  this.classList.remove('pulando');
}