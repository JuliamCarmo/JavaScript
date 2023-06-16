//Atributos = attributes

// const animais = document.querySelector('.animais');
// console.log(animais.attributes[1]);


//get e set com os atributos

const img = document.querySelector('img');

console.log(img.getAttribute('src'));  //pegar o valor

console.log(img.setAttribute('alt', 'texto alternativo'));  //alterar o valor

console.log(img.hasAttribute('src')) //verificar se há o atributo

console.log(img.removeAttribute('alt')) //remover um atributo 



/*
existem propriedades que não permitem mudar seus valores,
são consideradas Read Only, apenas para leitura
*/

