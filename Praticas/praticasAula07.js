// Situação do Voto

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite sua idade: ", (idade) => {
    idade = Number(idade);
    if (idade < 16) {
        console.log("Não pode votar");
    } else if (idade <= 17 || idade >= 70) {
        console.log("Voto opcional");
    } else {
        console.log("Voto obrigatório");
    }
    rl.close();
});