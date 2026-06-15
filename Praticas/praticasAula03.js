const TOTAL_NUMEROS = 75;
let numeroSorteado = 42;
let totalSorteados = 7;
let nomeDoEvento = "Bingo da Comunidade";

let numerosRestantes = TOTAL_NUMEROS - totalSorteados;
let jogoTerminado = (numerosRestantes === TOTAL_NUMEROS);

console.log ("Bem-vindo ao " + nomeDoEvento + "!");
console.log("Ainda restam " + numerosRestantes + " números para serem sorteados.");
console.log("Jogo terminou: " + jogoTerminado);