//Quando trabalhamos com variáveis declaradas dentro de chaves { } como condições, loops etc. elas ficam acessiveis somente dentro do bloco.
if (1 > 0) {
    let name = 'Pedro';
    console.log(name); // Resultado: Pedro.
}

// Fora do bloco a variável não estará acessível. 
console.log(name); // Error: name is not defined.


// Vale lembrar que variáveis declaradas com var não possuem essa regra e possuem um escopo global.