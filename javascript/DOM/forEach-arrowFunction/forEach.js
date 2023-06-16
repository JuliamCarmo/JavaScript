//querySelectorAll retorna uma nodeList, que possui o método array

//forEach é um método de array

const imgs = document.querySelectorAll('img');

imgs.forEach(function(item, index){
    console.log(imgs);
});


/*
o getElementeById retorna um HTMLCollection, que não possui uma array
por isso temos que transformá-lo em uma array para conseguir usar 
o método forEach
*/

const titulo = document.getElementsByClassName('titulo'); //pega o item
const tituloArray = Array.from(titulo);   //transforma em array

console.log(titulo); //retorna uma HTMLCollection
console.log(tituloArray); //retorna uma array


tituloArray.forEach(function(item, index){
    console.log(tituloArray);
}); //manipula normalmente



//sintaxe curta da function com forEach

tituloArray.forEach((index, item) => { //a flecha é o arrow-function
    console.log(index, item)
});

tituloArray.forEach(() => console.log('outra forma!'))