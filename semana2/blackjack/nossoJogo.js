const carta = comprarCarta();

let cartaJogador = []
let cartaOponete = []
let pontosJogador = 0
let pontosComputador = 0




console.log('Boas Vindas ao jogo de Blackjack')

if(confirm('Quer iniciar uma nova rodada?')){
   cartaJogador = [compreCarta(), compreCarta()]
   cartaComputador = [compreCarta(), compreCarta()]

   pontosJogador = cartaJogador[0].valor + cartaJogador[1].valor
   pontosComputador = cartaComputador[0].valor + cartaComputador[1].valor
   
   console.log(`Usuário - cartas: ${cartaJogador[0].texto} ${cartaJogador[1].texto} - pontuação ${pontosJogador}`)
   console.log(`Computador - cartas: ${cartaComputador[0].texto} ${cartaComputador[1].texto} - pontuação ${pontosComputador}`)

if (pontosJogador . pontosComputador){
   console.log('Usuário ganhou!')

 } else if (pontosComputador > pontosJogador){
    console.log('O adversário ganhou!')
 } else if (pontosJogador === pontosComputador){
    console.log('Empate')

 }else (
    console.log('Game over')
 }