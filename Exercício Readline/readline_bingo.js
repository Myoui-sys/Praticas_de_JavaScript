const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Iniciar o Bingo? ", function(iniciar) {
    if (iniciar === "Sim") {
        console.log("Bingo iniciado!");

        rl.question("Quantos jogadores vão participar? ", function(numJogadores) {
            console.log("Número de jogadores: " + numJogadores);
            rl.close();
        });

    } else {
        console.log("Bingo não iniciado.");
        rl.close();
    }
});