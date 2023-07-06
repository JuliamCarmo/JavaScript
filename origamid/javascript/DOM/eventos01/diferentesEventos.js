/*
Existem diversos tipos de eventos, podemos sempre consulta-los nas
documentações
*/

const h1 = document.querySelector('h1');

function callback(event){
    console.log(event.type);
}

h1.addEventListener('click', callback);
h1.addEventListener('mouseenter', callback);

//Outras formas

window.addEventListener('scroll', callback)
window.addEventListener('keydown', callback);



//Podemos usar o evento de Keyboard para criar atalhas de navegação
/*
nesse caso, o background da página é mudado de acordo com a tecla que o
usuário digita, sendo 'a' para bg azul e 'b'para bg vermelho
*/

function atalhoKeyboard(event){
    if(event.key === 'a'){
        document.body.classList.toggle('azul');
    }else if(event.key === 'b'){
        document.body.classList.toggle('vermelho');
    }
}

window.addEventListener('keydown', atalhoKeyboard);