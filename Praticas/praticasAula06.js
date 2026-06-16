const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número: ", function(valor) {
    let numeroEscolhido = Number(valor); 
    
    if (valor >= 1 && valor <= 75) {
    console.log("Número válido!");
    } else {
    console.log("Número inválido!");
}
    rl.close();
});

