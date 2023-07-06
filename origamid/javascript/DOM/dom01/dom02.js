//diferença de HTMLCollection e NodeList

/*
a diferença está nos métodos e propriedades de ambos. 
o HTMLCollection é uma alocação dinâmica, ela participa das atualizações
a NodeList é uma alocação estática, não faz atualizações
*/

const adicionar = document.querySelector('ul');
console.log(adicionar)
adicionar.classList.add('grid-section');


const selectHtml = document.getElementsByClassName('grid-section');
const selectNode = document.querySelectorAll('.grid-section');

console.log(selectHtml);
console.log(selectNode);


//retorna todas as imgs
const img = document.querySelectorAll('img');
console.log(img);


//retorna imgs que começam com imagem
const imagem = document.querySelectorAll('img[src^="img/imagem"]')
console.log(imagem);


//retorna os links internos que começam com #
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);



const primeiroH2 = document.querySelector('.animais-descricao');
console.log(primeiroH2);
//ou
const h2 = animais.querySelector('h2')
console.log(h2);



//retorna todos os paragrafos, e assim conseguimos ver a quantidade de 
//paragrafos que tem e conseguir puxar o ultimo
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length-1]);
//ou
console.log(paragrafos[--paragrafos.length]);


