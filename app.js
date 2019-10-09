/* AGOSTO 26 DE 2019
    OBTENGO REFERENCIA A CADA UNO DE LOS ELEMENTOS DE LA PÁGINA
*/
const TextoJugador = document.getElementById('text-jugador');
const TextoPc      = document.getElementById('text-pc');
const ImgJugador   = document.getElementById('img-jugador');
const ImgPc        = document.getElementById('img-pc');
const TextoGanador = document.getElementById('texto-ganador');
const TextoScore   = document.getElementById('texto-score') ;
const OpcionPresionada     = document.querySelectorAll('figure');
const Opciones = ['piedra', 'papel', 'tijeras'];
let  PositiveScore =0;
let  NegativeScore = 0;

TextoGanador.innerHTML = ' QUIEN GANARA ?';
TextoScore.innerHTML  = 'PUNTAJES...';
OpcionPresionada.forEach(
    figure => figure.addEventListener('click', GameStart )   
);

 
function GameStart (event ) {
    if ( event.target.id ){     return ;  }
        const EleccionJugador     = PlayerChoice ( event );
        const EleccionComputadora = PlayerComputer (); 
        ChangePlayerImage ( EleccionJugador );
        ChageComputerImage ( EleccionComputadora) ;
        const ElGanadorEs         = GetWinner( EleccionJugador, EleccionComputadora);
        MostrarTextos( ElGanadorEs, EleccionJugador,  EleccionComputadora);
}

function MostrarTextos ( QuienGana, Usuario, Pc ){
    let Texto = '';
    switch (QuienGana ){
        case 'empate':
            Texto = 'HA HABIDO EMPATE !!!';
            break;
        case 'gana-usuario':
            Texto = `Tú has GANADO!!!! porque elegiste: ${Usuario} y la computadora eligió: ${Pc}`;
            ++PositiveScore ;
            break;
        case 'gana-computadora':
                    Texto = `Tú has PERDIDO!!!! porque elegiste: ${Usuario} y la computadora eligió: ${Pc}`;
                    ++NegativeScore;
                    break;
    }
     TextoGanador.innerHTML= Texto;
     TextoScore.innerHTML = `Has ganado: ${PositiveScore} y has pedido ${NegativeScore}`;
}

function PlayerChoice (event ){
    return   event.currentTarget.dataset.choice ;
}

function PlayerComputer() {
    let ImgAleatoria ;
        ImgAleatoria = Math.random()*3;
        ImgAleatoria = parseInt ( ImgAleatoria );
        return Opciones[ImgAleatoria] ;
}

function ChangePlayerImage( EleccionJugador ){
    ImgJugador.src=`./images/${EleccionJugador}.png`; 
}

function ChageComputerImage( EleccionPc ){
    ImgPc.src=`./images/${EleccionPc}.png`; 
    
}

function GetWinner ( usuario, pc ){
   
    if ( usuario === pc ) {
        return 'empate';
    }
    if ( usuario === 'tijeras') {
        if ( pc ==='papel'){
            return 'gana-usuario';
        }else {
            return 'gana-computadora';
        }
    }
    if ( usuario === 'papel'){
        if ( pc === 'piedra'){
            return 'gana-usuario';
        }else {
            return 'gana-computadora';
        }
    }
    if ( usuario === 'piedra'){
        if ( pc === 'tijeras') {
            return 'gana-usuario';
        }else {
            return 'gana-computadora';
        }
    }

}
