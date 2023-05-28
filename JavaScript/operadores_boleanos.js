//operadores booleanos

const numero = 10;

console.log(numero > 12);
console.log(numero == 10);

//== e ====

console.log(numero === '10');// compara o valor e o tipo de variavel

console.clear();
console.log(numero != '10');
console.log(numero !== '10');

// AND => &&

console.clear();

let idade = 26;
let tenhoCnh = true;

const possoDirigir = idade >= 18 && tenhoCnh === true;

//or ou = ||
idade = 60;

const voto = idade >= 18 && idade <= 40;

console.log(possoDirigir);
console.log(voto);

