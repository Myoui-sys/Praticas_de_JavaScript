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