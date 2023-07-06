//...continuando

//repetção
const ta = "ta";
console.log(ta.repeat(5));


//Trocar parte da string por outra. Podemos usar uma regular expression ou
//um valor direto (o valor direto troca apenas o primeiro que encontrar).

let preco = 'R$ 1200,00';
console.log(preco.replace(',', '.')); //'R$ 1200.00'

let listaItens = 'Camisa Calça Bermuda Vestido short'
console.log(listaItens.replace(/[  ]+/g, ', '))

console.log(listaItens.replace('Camisa', 'Shirts'));


//divide a string de acordo com o padrão passado
const listaCores = 'Azul Verde Amarelo Vermelho Rosa Roxo'
const arrayCores = listaCores.split(', ');
console.log(arrayCores);

const htmlText = '<div>A cor mais bonita</div><div>A mais cheirosa</div>'
const htmlArray = htmlText.split('div')
console.log(htmlArray);


const listaFrutas = ['Banana', 'Laranja', 'Melancia', 'Abacaxi', 'Maça']
console.log(listaFrutas.join('-')); //adicionar


//Uppercase / lowercase
let sexo1 = 'feminino';
let sexo2 = 'Feminino';
let sexo3 = 'FEMININO';

if(sexo1.toLowerCase() === 'Feminino'){
    console.log('ok!')
}else {
    sexo1 = sexo1.toLowerCase();
    console.log(sexo1)
}