// // Arrays - parte 2 metodos

// const arr1 =[10, 40, 50, 80];
// const arr2 =[20, 30, 41, 98];

// // fatiamento slice

// // console.log(arr1.slice(0,2));
// // console.log(arr1.slice(2));

// // adicionando elementos push | unshit

// // arr1.push(88); //no final do array

// // arr1.unshift(0); //no começo do array


// // removendo elemntos  pop  shift 

// // arr1.pop()
// // arr1.shift()

// // conectando arrays   concat

// // console.log(arr1.concat(arr2));

// //  buscando elemntos: indexOf | lastIndexOf



// let indiceElemento =  arr1.indexOf(50);
// let indiceElemento2 =  arr1.indexOf(50);


// console.log(indiceElemento);


// // descobrindo a existencia de um elemento  includes

// // console.log(arr1.includes(50));

// //invertendo arrays : reverse

// //const arr1Invertido = arr1.reverse();


// // console.log(arr1Invertido);
// // console.log(arr2);

function funcao(array) {
    let acc = 0;
  
    for (let elemento of array) {
      acc += elemento;
    }
  
    return (acc / array.length);
  }
  
  console.log(funcao([4, 6, 4, 2]));

