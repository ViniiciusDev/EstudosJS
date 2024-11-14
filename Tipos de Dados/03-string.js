// String é o nome que damos para a cadeia de caracteres.
// Podemos declarar uma string com aspas duplas simples e colocar aspas simples dentro de aspas duplar 
const estudante = "Caroline";
const docente = 'Marco';
const cumprimento = "nosso lema é 'estudar bastante!'";
// Também podemos usar o template string que é com acento grave e nele podemos usar as aspas simples e duplas dentro dele, além de chamar variáveis dentro da nossa template com ${nome-variavel}. 
const citacao = `Vinicius diz: "nosso lema é 'estudar bastante!'";`

console.log(cumprimento);
console.log(citacao);

// O proprio javascript ele disponibiliza funções para realizarmos alterações na nossa string como por exemplo. 

const senha = 'SenhaSegura123' + estudante.toUpperCase();
// Dessa forma com a function toUpperCase() ele vai transformar tudo que está na variável estudante em maiúsculo.

console.log(senha);

