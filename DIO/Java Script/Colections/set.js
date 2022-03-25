const myArray  = [30, 30, 40, 5, 223, 2049, 3034, 5];


//esta opção traz os valores unicos em um SET
//a porposta do exercício foi trazer outro ARRAY
function valoresUnicos(arr){
   const mySet = new Set(arr);
   return mySet;
}


function valoresUnicos2(arr){
   const mySet = new Set(arr);
   return[...mySet];
}

console.log(valoresUnicos2(myArray));