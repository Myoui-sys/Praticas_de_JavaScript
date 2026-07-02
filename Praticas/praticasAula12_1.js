function somar(numero1, numero2) {
    return numero1 + numero2;
}

let resultado = somar(10, 5);

console.log(resultado);

function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

let resultado2 = multiplicar(2, 5);

console.log(resultado2);

function casemiro(gol) {
    if(gol > 0) {
        return "Slc joga muito";
    } else {
        return "tira esse veio";
    }
}

console.log(casemiro(0));
console.log(casemiro(1));

function verificarNumero(numero) {
    if (numero >=1 && numero <= 75) {
        return true;
    } else {
        return false;
    }
}

let valido = verificarNumero(42);
console.log("Válido: ", valido);

let frutas = ["Maçã", "banana", "uva"];

for (let fruta of frutas) {
    console.log(fruta);
}

let lista = ["Caio", "Evellyn", "Dacy"];

console.log(lista);

let numerosSorteados = [42, 17, 63, 8, 51];
console.log(numerosSorteados.length); 

let sorteados = [];
sorteados.push(42);
sorteados.push(17);
sorteados.push(63);

console.log(sorteados);
console.log(sorteados.length);