// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]');

function callback(event){
    event.preventDefault();
    linksInternos.forEach((item) => {
        item.classList.remove('ativo');
    });
    event.currentTarget.classList.add('ativo') //no evento onde for clicado add a classe 'ativo' (também poderiamos usar o this)
}

linksInternos.forEach((link) => {
    link.addEventListener('click', callback)
});




// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll('body *');

function callback2(event){
    console.log(event.target);
}

todosElementos.forEach((elemento) => {
    elemento.addEventListener('click', callback2);
});



// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

const todosElementos2 = document.querySelectorAll('body *');

function callbackRemove(event){
    event.target.remove();
}

todosElementos2.forEach((elementos) => {
    elementos.addEventListener('click', callbackRemove);
});


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function aumentar(event){
    if(event.key === 't'){
        document.documentElement.classList.toggle('aumentar');
    }
}

window.addEventListener('keydown', aumentar);
