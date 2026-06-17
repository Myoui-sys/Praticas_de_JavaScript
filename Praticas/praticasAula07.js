// Situação do Voto e Faixa Etária

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Situação do voto
rl.question("Digite sua idade: ", (idade) => {
    idade = Number(idade);

    if (idade < 16) {
        console.log("Ainda não pode votar");
    } else if (idade <= 17 || idade >= 70) {
        console.log("Voto opcional");
    } else {
        console.log("Voto obrigatório");
    }

    // Faixa etária
    rl.question("Digite sua idade novamente: ", (idadeFaixa) => {
        idadeFaixa = Number(idadeFaixa);

        if (idadeFaixa < 12) {
            console.log("Criança");
        } else if (idadeFaixa <= 17) {
            console.log("Adolescente");
        } else if (idadeFaixa <= 59) {
            console.log("Adulto");
        } else {
            console.log("Idoso");
        }

        // Horário do Dia
        rl.question("Digite uma hora (de 0 a 23): ", (horario) => {
            horario = Number(horario);

            if (horario >= 0 && horario <= 11) {
                console.log("Bom dia!");
            } else if (horario <= 17) {
                console.log("Boa tarde!");
            } else if (horario <= 23) {
                console.log("Boa noite!");
            } else {
                console.log("Horário inválido");
            }

            // Senha
            rl.question("Digite a senha: ", (senha) => {
                if (senha === "1234") {
                    console.log("Acesso liberado");
                } else {
                    console.log("Acesso negado");
                }

                // Temperatura 
                rl.question("Digite a temperatura: ", (temperatura) => {
                    temperatura = Number(temperatura);
                    if (temperatura < 15) {
                        console.log("Frio");
                    } else if (temperatura <= 25) {
                        console.log("Agradável");
                    } else {
                        console.log("Quente");
                    }
                    rl.close();
                });
            });
        });
    });
});