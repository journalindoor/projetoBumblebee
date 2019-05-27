window.onload = function () {
    console.log('Onload disparado');

    partida();
    ligaFarol();
}

function partida() {
    var motor = document.getElementsByClassName('motor');
    motor[0].addEventListener('click', function() {
        var movel = document.getElementsByClassName('movel');
        for (i = 0; i < movel.length; i++) {
            console.log('Peça: ', movel[i].classList.toggle('balanca'));
        }
    });
}


function ligaFarol() {
    var farol = document.getElementsByClassName('farol');
    farol[0].addEventListener('click', function() {
        this.classList.toggle('aceso');
    });
}