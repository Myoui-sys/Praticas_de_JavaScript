// Jogar enquanto o usuário tiver vida disponível

let vidas = 3;

while (vidas > 0) {
    console.log("Jogando...");
    vidas--;
}

console.log("Game Over!")

// Fazer exercícios enquanto a quantidade de repetições não for atingida

let repeticoes = 1;

while (repeticoes <= 10) {
    console.log("Fazendo repetição ", repeticoes);
    repeticoes++;
}

console.log("Exercício Concluído!");

// Assistir episódios de uma série

let episodio = 1;
let totalEpisodios = 5;

while (episodio <= totalEpisodios) {
    console.log("Assistindo episódio ", episodio);
    episodio++;
}

console.log("Série finalizada!");

// Tentativas de Login 
let tentativas = 1;

while (tentativas <= 3) {
    console.log("Tentativa de login nº ", tentativas);
    tentativas++;
}

console.log("Número máximo de tentativas atingido.");

// Estoque

let estoque = 10;

while(estoque > 0) {
    console.log("Produto vendido!");
    estoque--;
}

console.log("Produto esgotado!");