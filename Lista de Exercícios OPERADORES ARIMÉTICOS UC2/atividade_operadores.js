// Somando produtos de uma compra

let qntdCanetas = 3;
let qntCadernos = 2;

let valorCaneta = 3;
let valorCaderno = 12;

let valorTotalDaCompra = (qntdCanetas * valorCaneta) + (qntCadernos * valorCaderno);

console.log("Valor total da compra: R$ " + valorTotalDaCompra);

// Calculando média de notas

let nomeAluno = "Lindalvo";
let nota1 = 8;
let nota2 = 7;
let nota3 = 9;

let mediaNotas = (nota1 + nota2 + nota3) / 3;

if (mediaNotas > 7) {
    console.log("Parabéns, " + nomeAluno + "! Sua média é " + mediaNotas + ". Você passou de ano!");
} else {
    console.log("Infelizmente, " + nomeAluno + ", sua média é " + mediaNotas + ". Estude mais para melhorar!");
}

// Descobrindo quantos itens sobraram 

let estoqueInicialDeCamisetas = 50;
let camisetasVendidas = 17;

let estoqueFinal = estoqueInicialDeCamisetas - camisetasVendidas;
console.log("Estoque final: " + estoqueFinal + " camisetas.");

// Calculando o resto da divisão

let qntdAlunos = 23;
let qntdGrupos = 4;

let alunosQueSobram = qntdAlunos % qntdGrupos;
console.log("Alunos que sobram: " + alunosQueSobram);

// Calculando potência 

let pontuacaoInicial = 2;
let pontosAdicionados = 4;

let pontuacaoFinal = pontuacaoInicial ** pontosAdicionados;
console.log("Pontuação final: " + pontuacaoFinal);
