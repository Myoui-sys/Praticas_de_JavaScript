// Calculando o estoque de uma loja

const ESTOQUE_INICIAL = 50;
let quantidadeVendida = 13;
let quantidadeReposicionada = 20;
let estoqueAtual = ESTOQUE_INICIAL - quantidadeVendida + quantidadeReposicionada;
console.log("Estoque atual da loja: " + estoqueAtual);

// Usando operadores relacionais

let nomeCandidato = "Zenaide";
let idadeCandidato = 30;
const IDADE_MINIMA = 18;
let podeConcorrer = idadeCandidato >= IDADE_MINIMA;
console.log("O candidato " + nomeCandidato + " pode concorrer? " + podeConcorrer);

let nomeCandidato2 = "Gabriel";
let idadeCandidato2 = 16;
let podeConcorrer2 = idadeCandidato2 >= IDADE_MINIMA;
console.log("O candidato " + nomeCandidato2 + " pode concorrer? " + podeConcorrer2);

// Mini sistema de pedido de lanchonete
let nomeCliente = "Olivia";
let nomeProduto = "Hambúrguer";
let precoProduto = 15.00;
let quantidadeComprada = 2;
let taxaEntrega = 5.00;
const VALOR_MINIMO_PARA_ENTREGA_GRATIS = 13.00;

let valorTotal = (precoProduto * quantidadeComprada) + taxaEntrega;
let entregaGratis = valorTotal >= VALOR_MINIMO_PARA_ENTREGA_GRATIS;

console.log("Nome do cliente: " + nomeCliente);
console.log("Total do produtos: " + valorTotal);
console.log("Produto comprado: " + nomeProduto);