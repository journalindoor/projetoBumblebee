

var palco = document.getElementById('palco');
var junin = document.getElementById('junin');
var juninEsq = 0;


function qualSeta(e) {

    if (e.keyCode == '38' || e.keyCode == '32') {
        console.log('seta cima');
        pulando();
    }
    else if (e.keyCode == '40') {
        console.log('seta baixo');
    }
    else if (e.keyCode == '37') {
       console.log('seta esquerda');
       juninEsq -= 2;
       junin.style.left = juninEsq + 'px';
       if(juninEsq <= 0){
       		juninEsq += 2;
       }
    }
    else if (e.keyCode == '39') {
       console.log('seta direita');
       juninEsq += 2;
       junin.style.left = juninEsq + 'px';
    }

}

document.onkeydown = qualSeta;

function pulando(){

  junin.classList.add('pulando');
  junin.addEventListener("animationend", fimDoPulo);

}

function fimDoPulo(){
  this.classList.remove('pulando');
}