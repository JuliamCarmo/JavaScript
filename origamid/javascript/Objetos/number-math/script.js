//Number é um construtor com prototype que possui propriedades e metodos

const ano = 1999;
const preco = new Number(99.99);
console.log(ano);
console.log(preco);

console.log(Number.isNaN(NaN)); //true
console.log(Number.isNaN(5)); //false

console.log(Number.isInteger(20)); //true
console.log(Number.isInteger(20.3)); //false


//Retornar numeros a partir de strings 
console.log(Number.parseFloat('22.89 Reais')); //22.89
console.log(Number.parseInt('45.79 R$', 10)); //45
console.log(Number.parseInt(45.79, 10)); //45


//Arredondar os valores com toFixed()
const preco2 = 99.99;
console.log(preco2.toFixed()); //100

const carro = 27000.45;
console.log(carro.toFixed()); //27000