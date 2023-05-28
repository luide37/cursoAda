//laco numerico :  for

//problema
 const input = require('readline-sync')


// const nota1 = Number(input('informe a nota 1'))
// const nota2 = Number(input('informe a nota 2'))
// const nota3 = Number(input('informe a nota 3'))

// let media = (nota1 + nota2 + nota3) / 3;


//acumulador

let acumulador1 = 0; 

acumulador1 = acumulador1 + 10;

acumulador1 += 2;

acumulador1++

console.log(acumulador1);

console.clear();

// estrutura for

 for (let i  = 0; i <= 4; i++){
    console.log('repetição', i);
    
 }

 
console.clear();

let nota;
let soma = 0;

for (let i = 1; i <= 3; i++){
    nota = Number(input.question(`Informe a Nota ${i} do aluno:`));

    soma = soma + nota;
}
console.log(`A media do aluno é ${soma / 3}.`);