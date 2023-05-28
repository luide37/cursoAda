// criando objetos java script

let pessoa = {
    nome: 'lucas',
    idade: 26,
}

console.log(pessoa);

console.log(pessoa.nome);

// console.clear();

// como adicionar um par chave-valor

pessoa.altura = 1.75

console.log(pessoa);

// remover chave 

delete pessoa.altura

console.log(pessoa);

console.clear();

// como percorrer

for (let chave in pessoa){
    console.log(chave);
}