/*
para classes usamos o classList ou className (String) 

Retorna uma lista com as classes do elemento. 
Permite adicionar, remover e verificar se contém.
É uma array-like, não é uma array
*/

const menu = document.querySelector('.menu');

console.log(menu.className); //string

console.log(menu.classList); //lista da classe

console.log(menu.classList.add('adicionar')); //colocamos . e o metodo (nesse caso o método adicionar)

console.log(menu.classList.remove('adicionar')); //remove elementos da classe

console.log(menu.classList.toggle('adicionar')); //adiciona / remove caso tenho ou não tenha

console.log(menu.classList.contains('adicionar')); //verifica se contem algum elemento que estamos procurando na classe (retorna true ou false)

console.log(menu.classList.replace('adicionar', 'removido')) //trocar uma classe por outra



//Testes

if(menu.classList.contains('menu')){
    menu.classList.replace('menu', 'menuzinho');
}else {
    console.log('Não possui menu!');
}


if(menu.classList.contains('removido')){
    menu.classList.remove('removido');
}


//Formas de "abreviação"

//add
menu.classList += ' verde';
console.log(menu.className);
