/*function playSonidoPom() {
    document.querySelector('#sonido_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = playSonidoPom;

function playSonidoClap() {
    document.querySelector('#sonido_tecla_clap').play();
}

document.querySelector('.tecla_clap').onclick = playSonidoClap;*/

/*function playSonido(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < 9) {
    const tecla = listaTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#sonido_${instrumento}`;
    tecla.onclick = function (){
        playSonido(idAudio);
    }
    contador = contador + 1
}*/

function playSonido(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaTeclas.length; contador++) {
    const tecla = listaTeclas[contador];
    const instrumento = tecla.classList[1];
    console.log(contador)

    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio)

    tecla.onclick = function () {
        playSonido(idAudio);
    };
    /*tecla.onkeydown = function () {
        tecla.classList.add('activa');
    }*/
    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('activa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('activa');
    }

    // Agregue el código necesario aquí para eliminar la clase 'activa' tan pronto como la tecla deje de ser presionada.
}
