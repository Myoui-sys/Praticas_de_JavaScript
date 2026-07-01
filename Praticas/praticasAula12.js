function titulo() {
    console.log("Bem-vindo ao bingo!");
}

titulo();

console.log("|".repeat(100));

function menu() {
    console.log("Iniciar");
    console.log("Carregar jogo");
    console.log("Configurações");
    console.log("Sair");
}

menu();

console.log("|".repeat(100));

function media(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

let resultado = media(4, 10);

console.log(resultado);