//Dom - Document object model

/*
interface que representa documentos html e xml atravez de objetos.
Com isso conseguimos manipular estruturas, estilos e conteúdos
*/

console.log(window);
//window é o objwto completo do browser, possui metodos e propriedades

console.log(window.innerHeight); //altura do browser

//window.alert('hello');

const href = window.location.href;
console.log(href);

if(href === 'http://127.0.0.1:5500/index.html'){
    console.log('esta na pag certa!');
}


//pegar algo do html

const pegar = document.querySelector('h1');

console.log(pegar)


//função de callback (uma função que é ativada após um evento)

pegar.addEventListener('click', function(){
    console.log('clicou em ', pegar.innerText);
});