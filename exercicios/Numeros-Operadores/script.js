var teste1 = '100' / 2;
var teste2 = 'Numero 100' / 2;

console.log(isNaN(teste1));
console.log(isNaN(teste2));

//Incremento - Decremento
var x = 5;
console.log(++x); //ou x++
console.log(--x); //ou x--

var idade = +'21'; //+ converte uma string para number
var calculoIdade = -5; //- faz a subtração
console.log(idade + calculoIdade);

//Resulptado da expressão
var total = 10 + 5 * 2 / 2 + 20; // 35
console.log(total);

//Duas expressões que retornam NaN
var testeNaN1 = 'valor 100' * 4;
console.log(testeNaN1);

var testeNaN2 = 'valor 123' / 1;
console.log(testeNaN2)

//Somar string com número
var n1 = +'200';
var n2 = 50;
console.log(n1 + n2)

//Incremente o número 5 e retorne o seu valor incrementado
var valor = 5;
console.log(++valor)

//Como dividir o peso por 2?
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + 'kg';
console.log(peso)


