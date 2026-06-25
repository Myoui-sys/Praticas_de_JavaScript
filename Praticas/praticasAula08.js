// THAMIRES, CAIO, EVELLYN E DACYRRÔSE

const readline = require("readline"); // Importando a entrada de usuário

const rl = readline.createInterface({ // Configurando a entrada e saída do readline
    input: process.stdin,
    output: process.stdout
});

// 1. Digitar a idade para exibir a faixa etária
rl.question("Digite sua idade: ", (idade) => {
    idade = Number(idade);

    if (idade < 1 || idade > 120) {
        console.log("Idade inválida");
    } else if (idade < 12) {
        console.log("Criança");
    } else if (idade <= 17) {
        console.log("Adolescente");
    } else if (idade <= 59) {
        console.log("Adulto");
    } else {
        console.log("Idoso");
    }

    // 2. Digitar o valor da compra pra exibir o desconto
    rl.question("Informe o valor da compra: ", (valor) => {
        valor = Number(valor);

        if (valor <= 50) {
            console.log("Sem desconto");
        } else if (valor >= 51 && valor <= 100) {
            console.log("Valor: R$", valor, " Valor com desconto: R$", valor - (valor * 0.1));
        } else if (valor >= 101 && valor <= 200) {
            console.log("Valor: R$", valor, " Valor com desconto: R$", valor - (valor * 0.2));
        } else {
            console.log("Valor original: R$", valor, " Valor com desconto: R$", valor - (valor * 0.3));
        }

        //3. Digitar um número e exibir a Faixa
        rl.question("Digite um número: ", (numero) => {
            numero = Number(numero);
            if (numero >= 1 && numero <= 25) {
                console.log("Faixa B");
            } else if (numero >= 26 && numero <= 50) {
                console.log("Faixa I");
            } else {
                console.log("Faixa N");
            }

            // 4. Digitar uma cor e exibir a informação do semaforo
            rl.question("Digite uma cor: ", (cor) => {
                const corDigitada = cor.toLowerCase().trim();

                if (corDigitada === "verde") {
                    console.log("Pode seguir");
                } else if (corDigitada === "amarelo") {
                    console.log("Atenção, reduza a velocidade");
                } else if (corDigitada === "vermelho") {
                    console.log("Pare");
                } else {
                    console.log("Cor inválida");
                }

                //5. Digitar a temperatura e exibir o clima
                rl.question("Digite a temperatura: ", (temperatura) => {
                    temperatura = Number(temperatura);
                    if (temperatura < 10) {
                        console.log("Frio");
                    } else if (temperatura <= 20) {
                        console.log("Agradável");
                    } else if (temperatura <= 30) {
                        console.log("Quente");
                    } else {
                        console.log("Muito quente");
                    }
                    
                    //6. Digitar a altura e seu peso para informar seu IMC
                    rl.question("Digite sua altura: ", (altura) => {
                        altura = Number(altura);
                        rl.question("Digite seu peso: ", (peso) => {
                            peso = Number(peso);
                            let imc = peso / (altura * altura);

                            if (imc > 0 && imc < 18.5) {
                                console.log("Abaixo do peso");
                            } else if (imc < 24.9) {
                                console.log("Peso normal");
                            } else if (imc < 29.9) {
                                console.log("Acima do peso");
                            } else if (imc >= 30) {
                                console.log("Obesidade");
                            } else {
                                console.log("IMC inválido")
                            }

                            // 7. Informar a hora para exibir o horário
                            rl.question("Digite a hora (de 0 a 23): ", (hora) => {
                                hora = Number(hora);
                                
                                if (hora >= 0 && hora <= 5) { // Se for entre meia-noite e cinco horas, irá aparecer Madrugada
                                    console.log("Madrugada");
                                } else if (hora >= 6 && hora <= 11) { // Se for entre seis e onze horas da manhã, irá aparecer Manhã
                                    console.log("Manhã");
                                } else if (hora >= 12 && hora <= 17) { // Se for entre doze e dezessete horas da tarde, irá aparecer Tarde
                                    console.log("Tarde")
                                } else if (hora >= 18 && hora <= 23) { // Se for entre dezoito e onze horas da noite, irá aparecer Noite
                                    console.log("Noite");
                                } else { // Se for menos que 0 ou um número maior que 23, não vai rolar
                                    console.log("Hora inválida");
                                }

                            rl.close();
                            });
                        });
                    });
                });
            });
        });
    });
});