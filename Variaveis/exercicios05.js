/* 
    TODO: Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloco e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.
*/

var professor = 'Matheus';
if (1 > 0) {
    var aluno = 'Pedro';
    console.log(professor);

}
console.log(aluno);

let maestro = 'João';

if (1 > 0) {
    /* let pupilo = 'DaVinci'; */
    console.log(maestro);

}
console.log(pupilo);
