// funções


// definindo funcao

function saudacao() {
    console.log('Olá seja bem vindo!');
}

saudacao();

console.clear();

// como enviar parametros para as funções

function saudacao(nome, curso) {
    console.log(`Olá ${nome}! seja bem vindo! ${curso}`);
}

saudacao('lucas','adda');
console.clear();

// retorno da função 

// function soma(numero1,numero2) {
//     console.log('soma =', numero1 + numero2); //não recomendado
// }

function soma(numero1,numero2) {
    return numero1 + numero2;
}

const resultado = soma(10,20);

console.log(resultado / 2);

console.clear();

function maiorQueCinquenta(numero) {
    if (numero > 50) {
        return true;
    }  
    
    return false;
}