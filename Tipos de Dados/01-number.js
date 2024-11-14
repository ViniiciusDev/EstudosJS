// Quando queremos trabalhar com dados do tipo number colocamos somente o número sem colocar aspas, e para colocarmos números com virgola (ponto flutuante), utilizamos o ponto.
const notaPrimeiroBi = 8;
const notaSegundoBi = 6.5;
const notaTerceiroBi = -2;
// Quando adicionamos uma string dentro de um calcolo matemático ele não irá dar erro porém ele irá agregar o texto no final do resultado.
const notaQuartoBi = '5';
// Quando temos uma variável iremos ler ela sempre da direita para esquerda, ou sejá, primeiro será realizada a soma e depois irá armazenar o valor dentro da variável total.

// Quando recebemos valores de formulários eles chegam sempre como string e quando se trata de valores devemos realizar essa conversão
const notaQuintoBi = Number.parseInt('6');

const total = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuintoBi) / 4;
// O + que tem com o calcolo matemático e a nota do quarto bimestre, ela praticamente está juntando a string ao valor do calcolo.
console.log(total.toFixed(2));


