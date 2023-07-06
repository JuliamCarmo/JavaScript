/*
String é a construtora de string e possui as propriedades e métodos do prototype
de string
*/ 

//em ambos os casos podemos acessar seus metodos e propriedades
const comida = 'Pizza';
const bebida = new String('Agua'); //retorna um objeto

//mostrar posição de alguma string
console.log(bebida.charAt(0));


//concatenar strings
const frase1 = "A melhor linguagem é ";
const frase2 = "JavaScript"

const fraseFinal = frase1.concat(frase2)
console.log(fraseFinal);


//Procurar pela string dentro de outra string (a procura é case sensitive)
const fruta = "Maça";
const listaFrutas = 'Melancia, Abacaxi, Maça, Laranja';

console.log(listaFrutas.includes(fruta)); //true
console.log(fruta.includes(listaFrutas)); //false


//Outra forma de procurar pela string exata dentro de outra string (case sensitive)
const alimento =  'Banana';
console.log(alimento.endsWith('nana')); //true
console.log(alimento.startsWith('Ba')); //true
console.log(alimento.startsWith('na')); //false


//padrões de espaço
const preco = "R$ 99,99";
console.log(preco.padStart(20, "-"));
console.log(preco.padEnd(20, "-"))


const listaPreco = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPreco.forEach((preco) => {
    console.log(preco.padStart(10, '.'))
})

//também podemos alinhar por posição
console.log(listaPreco[0].padStart(10, '-'));


//retornar o index da string 
const instrumento = 'bateria';
console.log(instrumento.indexOf('t'));