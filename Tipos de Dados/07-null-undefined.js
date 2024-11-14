/* 
    - É possível criar uma variável sem algum valor, reservando desse modo o espaço na memoria e utilizando ele para armazenar algum dado mais para frente.
*/

let nomeEstudande;
console.log(nomeEstudande); // Saída: undefined (ou sejá o espaço está reservado na memória porém não tem algum valor armazenado dentro dela.)


let telEstudante = null; // Dessa forma estou definindo que não possui algum valor dentro da variável. O espaço na memória existe porém seu valor é null. Representando ausência intencional do valor.

console.log(telEstudante + 3); // Saída: 3 (o null se comporta como 0)


console.log(nomeEstudande + 3);  // Saída: NaN (porque não pode ser realizada uma operação matematica)

