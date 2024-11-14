// A coerção de tipos em JS refere-se à conversão automática e implícita de um tipo de dado.

let valorString = '10';
let valorNumber = 5;

let resultado = valorString + valorNumber;
console.log(resultado); // Saída: '105' sendo o numero convertido para 5

// Porém podemos realizar a conversão do tipo de dado.
let str = '20';
let number = parseInt(str)

console.log(number); // Saída: 20 pois o valor foi convertido de string para número utilizando o parseInt(), além dele podemos usar o parseFloat() que irá funcionar da mesma forma, transformando o tipo de dado string em number.
