let arr = ['lucas',26,13051996]



// console.log(arr);

console.log('primeiro elemento', arr[0]);
console.log('segundo elemento', arr[1]);
console.log('terceiro elemento', arr[2]);

console.log('quantos elementos:',arr.length);

console.clear();

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

console.clear();

for (let elemento of arr){
    console.log(elemento);
}

console.clear();

for (let indices in arr){ // percorre os indices 
    console.log(indices, arr[indices]);
}