const readline = require("readline");

const TOTAL_NUMEROS = 75;
let numerosDisponiveis = []; // Lista
let numerosSorteados = []; // Lista

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

if (numerosDisponiveis.length === 0) {
    console.log("\nTodos os números já soram sorteados!\n");
    return;
}