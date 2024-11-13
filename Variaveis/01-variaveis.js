// Para criarmos um variável com js usamos a palavra chave let

let estudante = 'Caroline'; // Conjunto de caracteres chamado string no js.
let professora = 'Ana';

// Da forma acima temos 2 espaços de armazenando informações sendo ambos string.

console.log(estudante, professora);

// Podemos também passar um novo valor a uma mesma variável dessa forma.
// Dessa forma temos um valor variável
estudante = 'Vinicius';

console.log(estudante);

// Para evitarmos que sejá possível realizar a alteração do valor de alguma variável usamos a palavra chave const
const materia = "Matemática";

console.log(materia);
// Dessa forma não podemos realizar a alteração do valor da nossa variável, caso tentarmos alterar irá dar um erro.
// Dessa forma "protegemos" o valor daquela variável. 


/* 
    - Devemos sempre utilizar const quando formos atribuir uma variável
    - let deve ser utilizando somente quando precisamos realizar a alteração do nosso valor da variável.
    - var ele não deve ser mais utilizado, porém ainda hoje em código mais antigos podemos encontra-lo.
    - Devemos lembrar também que o js é case-sensitive, então conforme passarmos o nome da variável ele ficará salvo. 
    - É de estrema importança que nunca utilizemos espaço ou caracteres especiais ou iniciar o nome da variável com número.
*/