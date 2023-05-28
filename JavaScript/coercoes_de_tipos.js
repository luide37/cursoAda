//coerção de tipos; conversão

const numero = 10;

console.log(numero, typeof numero);

const numeroEmFormatoDeString = String(numero);

console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString );

console.log(Number('10'));
console.log(parseFloat('12.15'));
console.log(Boolean(12));

//coerção automatica

console.clear();
console.log(10 + 1); //atendo ao operador comum + 
console.log(10 + '1');
console.log(10 - '1');

console.clear();

let n = 1 + 1;
 console.log(n);
