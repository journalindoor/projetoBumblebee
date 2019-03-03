

var palco = document.getElementById('palco');
var junin = document.getElementById('junin');
var juninEsq = 0;
var juninBai = 0;


function qualSeta(e) {

    if (e.keyCode == '38') {
        console.log('seta cima');
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

function pula(){



}