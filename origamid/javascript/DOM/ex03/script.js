//retornar url da pag
const href = window.location.href;
console.log(href);


//selecionar o primeiro elemento da pag que possui classe
const h1 = document.querySelector('h1');
console.log(h1.classList[0]);


//retornar a linguagem do navegador
const idioma = window.navigator.language
console.log(idioma);


//retornar a largura da janela
const largura = window.innerWidth;
const altura = window.innerHeight;
console.log(`largura: ${largura} altura: ${altura}`);