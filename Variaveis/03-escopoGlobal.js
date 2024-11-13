// Qualquer variável que se encontre no escopo global pod ser acessada por outras partes do programa, sendo considerada global quando não se encontra dentro de uma função ou bloco.

const name = 'Vinicius'; // Variável com escopo global.

function greetings() {
    console.log(`Hello, ${name}!`); // Acessa a variável com escopo global.
}

greetings(); // Resultado: Hello, Vinicius!