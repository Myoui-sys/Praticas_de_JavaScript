const readline = require("readline-sync"); 
// Decidi utilizar o readline-síncrono para funcionar com while e for, sem necessidade do readline nativo.
// Instalação: npm install readline-sync

// 1 - Exiba os números de 1 a 10 utilizando while

let i = 1; // Inicialização: Atribuimos 1 para fazer a contagem de 1 a 10 (Essa variável pode ser atualizada enquanto nossa condição do while for true);
while (i <= 10) { // Condição: Enquanto nossa variável for menor ou igual a 10, o bloco de código vai rodar (Se for true);
    console.log(i);
    i++; // Incremento: Adicionamos +1 a cada loop.
}

// 2 - Exiba os números de 10 a 1 utilizando while

let j = 10; // Inicialização: Atribuimos 10 para fazer a contagem de 10 a 1 (Essa variável pode ser atualizada enquanto nossa condição do while for true);
while (j >= 1) { // Condição: Enquanto nossa variável for maior ou igual a 1, o bloco de código vai rodar (Se for true);
    console.log(j);
    j--; // Decremento: Tiramos -1 a cada loop.
}

// 3 - Exiba apenas os números pares de 2 a 20 utilizando while

let par = 2; // Inicialização: Atribuimos 2 para exibir os números pares (Essa variável pode ser atualizada enquanto nossa condição do while for true);
while (par <= 20) { // Condição: Enquanto nossa variável for menor ou igual a 20, o bloco de código vai rodar (Se for true);
    console.log(par);
    par += 2; // Incremento: Pulamos de 2 em 2 para exibir apenas os pares.
}

// 4 - Calcule e exiba a soma dos números de 1 a 100 utilizando while

let k = 1; // Inicialização: Atribuimos 1 para percorrer os números de 1 a 100;
let soma = 0; // Acumulador: Começa em 0 e vai recebendo a soma de cada número do loop;

while (k <= 100) { // Condição: Enquanto nossa variável for menor ou igual a 100, o bloco de código vai rodar (Se for true);
    soma += k; // Acumulação: Adicionamos o valor atual de k à soma a cada iteração;
    k++; // Incremento: Adicionamos +1 a cada loop.
}

console.log(soma); // Exibe o resultado final da soma após o loop encerrar (resultado: 5050);


// 5. Receba um número e exiba a tabuada desse número (1 a 10) utilizando while

let numero = Number(readline.question("Digite um numero para a tabuada: ")); // Entrada: Recebemos o número do usuário e convertemos para Number, pois o readline retorna string;
let tabuada = 1; // Inicialização: Atribuimos 1 para fazer a contagem de 1 a 10;

while (tabuada <= 10) { // Condição: Enquanto nossa variável for menor ou igual a 10, o bloco de código vai rodar (Se for true);
    let resultado = numero * tabuada; // Cálculo: Multiplicamos o número digitado pelo contador atual da tabuada;
    console.log(numero, " x ", tabuada, " = ", resultado);
    tabuada++; // Incremento: Adicionamos +1 a cada loop.
}

// 6. Receba uma senha e continue pedindo outra enquanto ela for diferente de '1234'. Ao acertar, exiba 'Acesso permitido'.

let senha = readline.question("Digite a senha: "); // Entrada: Recebemos a primeira tentativa antes de entrar no loop;

while (senha !== "1234") { // Condição: Enquanto a senha for diferente de '1234', o bloco vai continuar rodando (Se for true);
    console.log("Senha incorreta. Tente novamente.");
    senha = readline.question("Digite a senha: "); // Atualização: Pedimos uma nova senha a cada iteração para reavaliar a condição;
}

console.log("Acesso permitido."); // Só chega aqui quando a condição do while for false (senha correta);

// 7. Receba um número e exiba uma contagem regressiva desse número até 0 utilizando while

let numeroRegressivo = Number(readline.question("Digite um numero: ")); // Entrada: Recebemos um número;

while (numeroRegressivo >= 0) { // Condição: Enquanto o número for maior ou igual a 0, o loop vai rodar;
    console.log(numeroRegressivo)
    numeroRegressivo--; // Decremento: Tiramos -1 a cada loop.
}

