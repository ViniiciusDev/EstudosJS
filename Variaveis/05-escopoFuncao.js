// Variáveis declaradas dentro de uma função são consideradas variáveis locais, e não pode ser acessada por código que se encontre fora do bloco da function.

function greetings() {
    const name = 'Viniii'; // Variável local 
    const greetings = 'Hello'; // Variável local
    console.log(`${greetings}, ${name}!`); // Resultado: Hello, Viniii!
}


// As variáveis declardas dentro da function não podem ser acessadas pelo lado de fora.

console.log(`${greetings}, ${name}!`);  // Resultado: Error "not defined". pois não foi possível encotrar as variáveis.