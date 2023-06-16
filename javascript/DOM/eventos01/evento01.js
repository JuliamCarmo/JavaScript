//O métdoso usado para adicionar um evento é o addEventListener
//Ativa uma cahamada assim que um evento ocorre no elemento
//Sintaxe:  elemento.addEventListener('event', callback, option)

const h2 = document.querySelector('h2');

h2.addEventListener('click', function(){
    console.log('Clicou');
});


/*
uma boa prática é criar a função de callback fora do evento
e depois chamá-lo
*/

function callback(){
    console.log('clicouuu')
}

const h1 = document.querySelector('h1');

h1.addEventListener('click', callback);



//Outra forma de sintaxe:

const p = document.querySelector('p');

p.addEventListener('click', () => {
    console.log('clicou clicou')
})
