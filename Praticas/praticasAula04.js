readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número: ", function(valor) {
    let numeroEscolhido = Number(valor); 
    console.log("Você escolheu o número: " + numeroEscolhido);
    rl.close();
});

