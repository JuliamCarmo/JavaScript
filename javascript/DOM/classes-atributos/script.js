//add a classe 'ativo' a todos os itens a do menu

const itensMenu = document.querySelectorAll('.menu a');
console.log(itensMenu);

itensMenu.forEach((itensMenu) => {
    itensMenu.classList.add('ativo');
});



/*remover a classe 'ativo' de todos os itens do menu
deixando apenas no primeiro
*/
itensMenu.forEach((itensMenu) => {
    itensMenu.classList.remove('ativo');
});

itensMenu[0].classList.add('ativo');


//verificar se as imagens possuem alt

const imgs = document.querySelectorAll('img');
console.log(imgs);

imgs.forEach((imgs) => {
    console.log(imgs.hasAttribute('alt'));
});


//Modificar o href do link externo no menu

const linkExterno = document.querySelector('[href^="https"]');
console.log(linkExterno);

linkExterno.setAttribute('href', 'https://www.google.com.br')