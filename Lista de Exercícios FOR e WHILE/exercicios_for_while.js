const readline = require("readline-sync"); 
// Decidi utilizar o readline-síncrono para funcionar com while e for, sem necessidade do readline nativo.
// Instalação: npm install readline-sync

console.log("\n========== Ex 1 - Números de 1 a 10 ==========");
// 1 - Exiba os números de 1 a 10 utilizando while

let i = 1; // Inicialização: Atribuimos 1 para fazer a contagem de 1 a 10 (Essa variável pode ser atualizada enquanto nossa condição do while for true);
while (i <= 10) { // Condição: Enquanto nossa variável for menor ou igual a 10, o bloco de código vai rodar (Se for true);
    console.log(i);
    i++; // Incremento: Adicionamos +1 a cada loop.
}

console.log("\n========== Ex 2 - Números de 10 a 1 ==========");
// 2 - Exiba os números de 10 a 1 utilizando while

let j = 10; // Inicialização: Atribuimos 10 para fazer a contagem de 10 a 1 (Essa variável pode ser atualizada enquanto nossa condição do while for true);
while (j >= 1) { // Condição: Enquanto nossa variável for maior ou igual a 1, o bloco de código vai rodar (Se for true);
    console.log(j);
    j--; // Decremento: Tiramos -1 a cada loop.
}

console.log("\n========== Ex 3 - Números pares de 2 a 20 ==========");
// 3 - Exiba apenas os números pares de 2 a 20 utilizando while

let par = 2; // Inicialização: Atribuimos 2 para exibir os números pares (Essa variável pode ser atualizada enquanto nossa condição do while for true);
while (par <= 20) { // Condição: Enquanto nossa variável for menor ou igual a 20, o bloco de código vai rodar (Se for true);
    console.log(par);
    par += 2; // Incremento: Pulamos de 2 em 2 para exibir apenas os pares.
}

console.log("\n========== Ex 4 - Soma de 1 a 100 ==========");
// 4 - Calcule e exiba a soma dos números de 1 a 100 utilizando while

let k = 1; // Inicialização: Atribuimos 1 para percorrer os números de 1 a 100;
let soma = 0; // Acumulador: Começa em 0 e vai recebendo a soma de cada número do loop;

while (k <= 100) { // Condição: Enquanto nossa variável for menor ou igual a 100, o bloco de código vai rodar (Se for true);
    soma += k; // Acumulação: Adicionamos o valor atual de k à soma a cada iteração;
    k++; // Incremento: Adicionamos +1 a cada loop.
}

console.log(soma); // Exibe o resultado final da soma após o loop encerrar (resultado: 5050);

console.log("\n========== Ex 5 - Tabuada ==========");
// 5. Receba um número e exiba a tabuada desse número (1 a 10) utilizando while

let numero = Number(readline.question("Digite um numero para a tabuada: ")); // Entrada: Recebemos o número do usuário e convertemos para Number, pois o readline retorna string;
let tabuada = 1; // Inicialização: Atribuimos 1 para fazer a contagem de 1 a 10;

while (tabuada <= 10) { // Condição: Enquanto nossa variável for menor ou igual a 10, o bloco de código vai rodar (Se for true);
    let resultado = numero * tabuada; // Cálculo: Multiplicamos o número digitado pelo contador atual da tabuada;
    console.log(numero, " x ", tabuada, " = ", resultado);
    tabuada++; // Incremento: Adicionamos +1 a cada loop.
}

console.log("\n========== Ex 6 - Verificação de Senha ==========");
// 6. Receba uma senha e continue pedindo outra enquanto ela for diferente de '1234'. Ao acertar, exiba 'Acesso permitido'.

let senha = readline.question("Digite a senha: "); // Entrada: Recebemos a primeira tentativa antes de entrar no loop;

while (senha !== "1234") { // Condição: Enquanto a senha for diferente de '1234', o bloco vai continuar rodando (Se for true);
    console.log("Senha incorreta. Tente novamente.");
    senha = readline.question("Digite a senha: "); // Atualização: Pedimos uma nova senha a cada iteração para reavaliar a condição;
}

console.log("Acesso permitido."); // Só chega aqui quando a condição do while for false (senha correta);

console.log("\n========== Ex 7 - Contagem Regressiva ==========");
// 7. Receba um número e exiba uma contagem regressiva desse número até 0 utilizando while

let numeroRegressivo = Number(readline.question("Digite um numero: ")); // Entrada: Recebemos o número do usuário e convertemos para Number, pois o readline retorna string;

while (numeroRegressivo >= 0) { // Condição: Enquanto o número for maior ou igual a 0, o loop vai rodar;
    console.log(numeroRegressivo);
    numeroRegressivo--; // Decremento: Tiramos -1 a cada loop.
}

console.log("\n========== Ex 8 - Números de 1 a 20 ==========");
// 8. Exiba os números de 1 a 20 utilizando for

for (let q = 1; q <= 20; q++) { // Inicialização: q começa em 1 | Condição: roda enquanto q for menor ou igual a 20 | Incremento: +1 a cada loop;
    console.log(q);
}

console.log("\n========== Ex 9 - Números ímpares de 1 a 30 ==========");
// 9. Exiba os números ímpares de 1 a 30 utilizando for

for (let imparFor = 1; imparFor <= 30; imparFor++) { // Inicialização: começa em 1 | Condição: roda enquanto imparFor for menor ou igual a 30 | Incremento: +1 a cada loop;
    if (imparFor % 2 !== 0) { // Verificação: se o resto da divisão por 2 for diferente de 0, o número é ímpar;
        console.log(imparFor);
    }
}

console.log("\n========== Ex 10 - Tabuada do número 7 ==========");
// 10. Exiba a tabuada do número 7 utilizando for

for (let tabuadaNumSete = 1; tabuadaNumSete <= 10; tabuadaNumSete++) { // Inicialização: começa em 1 | Condição: roda enquanto tabuadaNumSete for menor ou igual a 10 | Incremento: +1 a cada loop;
    let resultadoTabuada = 7 * tabuadaNumSete; // Cálculo: Multiplicamos 7 pelo contador atual da tabuada;
    console.log(7, " x ", tabuadaNumSete, " = ", resultadoTabuada);
}

console.log("\n========== Ex 11 - Soma dos números pares de 1 a 50 ==========");
// 11. Calcule a soma dos números pares de 1 a 50 utilizando for

let somaPares = 0; // Acumulador: começa em 0 e vai recebendo a soma de cada número par;

for (let numeroPar = 2; numeroPar <= 50; numeroPar += 2) { // Inicialização: começa em 2 (primeiro par) | Condição: roda enquanto numeroPar for menor ou igual a 50 | Incremento: +2 para pular os ímpares;
    somaPares += numeroPar; // Acumulação: adicionamos o valor atual à soma a cada iteração;
}

console.log(somaPares); // Exibe o resultado final após o loop encerrar (resultado: 650);

console.log("\n========== Ex 12 - Contagem regressiva de 10 até 0 ==========");
// 12. Exiba uma contagem regressiva de 10 até 0 utilizando for

for (let r = 10; r >= 0; r--) { // Inicialização: r começa em 10 | Condição: roda enquanto r for maior ou igual a 0 | Decremento: -1 a cada loop;
    console.log(r);
}

console.log("\n========== Ex 13 - Ímpar ou Par ==========");
// 13. Receba um número e exiba todos os números de 1 até esse número, informando se cada um é par ou ímpar, utilizando for

let numeroQuestionTreze = Number(readline.question("Digite um numero: ")); // Entrada: Recebemos o número do usuário e convertemos para Number, pois o readline retorna string;

for (let x = 1; x <= numeroQuestionTreze; x++) { // Inicialização: x começa em 1 | Condição: roda enquanto x for menor ou igual ao número digitado | Incremento: +1 a cada loop;
    if (x % 2 === 0) { // Verificação: se o resto da divisão por 2 for 0, o número é par;
        console.log(x, "é par");
    } else {
        console.log(x, "é ímpar"); // Caso contrário, é ímpar;
    }
}


console.log("\n========== Ex 14 - Número Primo ==========");
// 14. Receba um número e informe se ele é primo utilizando for