const input = require('readline-sync')

const numero_sorteado = 5;

let numero = Number ( input.question('Qual numero voce escolheu ?'));

while (numero !== numero_sorteado) {
    console.log('voce errou o numero Tente de novo5');

    numero = Number ( input.question('Qual numero voce escolheu ?'));
}

console.log('voce acertou!');