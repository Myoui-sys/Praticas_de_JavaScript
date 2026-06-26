// Exiba os números de 1 a 15 utilizando um for

for (let i = 1; i <= 15; i++) {
    console.log(i);
}

console.log("-".repeat(60));

// Exiba apenas os números pares de 0 a 30

for (let i = 0; i <= 30; i++) {
    if (i % 2 === 0) {
        console.log(i);
    } 
}

console.log("-".repeat(60));

// Exiba apenas os números ímpares de 1 a 25
for (let i = 1; i <= 25; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log("-".repeat(60));

// Exiba todos os múltiplos de 5 entre 5 e 50

for (let i = 5; i <= 50; i++) {
    if (i % 5 === 0) {
        console.log(i)
    }
}

console.log("-".repeat(60));

// Calcule e exiba a média de 4 notas usando um for

let notas = [8, 4, 9, 7];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

let media = soma / notas.length;
console.log("Média: ", media);