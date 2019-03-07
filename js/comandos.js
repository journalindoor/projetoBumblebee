

var palco = document.getElementById('palco');
var junin = document.getElementById('junin');
var juninEsq = 0;
var juninBai = 70;
var velocidade = 10;


function qualSeta(e) {

  if (e.keyCode == '38') {
    console.log('seta cima');
    andaPraCima();
  }
  else if (e.keyCode == '40') {
    console.log('seta baixo');
    andaPraBaixo();
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

function andaPraCima(){
  if(juninBai >= 230){
   juninBai -= velocidade;
 }
 juninBai += velocidade;
 junin.style.bottom = juninBai + 'px';  
}

function andaPraBaixo(){
  if(juninBai <= 70){
   juninBai += velocidade;
 }
  juninBai -= velocidade;
  junin.style.bottom = juninBai + 'px';
}

function andaPraEsquerda(){
  if(juninEsq <= 0){
   juninEsq += velocidade;
 }
  juninEsq -= velocidade;
  junin.style.left = juninEsq + 'px';
}

function andaPraDireita(){
 juninEsq += velocidade;
 junin.style.left = juninEsq + 'px';  
}
