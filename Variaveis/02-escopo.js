// É possível criar uma variável dentro de um bloco de código e reatribuir o seu valor fora do bloco.
if (1 > 0) {
    var estudante = 'Caroline';
    console.log(estudante);
}

estudante = 'Marcos';
console.log(estudante);

// Agora diferente da declaração com var, quando trabalhamos com let a variável terá um escopo somente dentro do bloco. Dessa forma com a variável que temos fora do bloco é como se fosse criada uma nova variável com o var escondido, e agora temos 2 variáveis professor, uma com o escopo dentro do bloco e uma com o escopo global. 
if (1 > 0) {
    let professor = 'Vinicius';
    console.log(professor);
}

professor = 'Pedro';
console.log(professor);

// Quando criamos nossa variável com const mesmo fora do bloco seguindo o escopo global, ela não pode ser alterada propriamente porque ela está sendo acompanha da palavra chave const. Dessa forma seu valor não pode ser alterado.
const materia = 'Historia';

if (1 > 0) {
    console.log(materia);
}

console.log(materia);
