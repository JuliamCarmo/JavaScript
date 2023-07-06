// Verifique a distância do primeiro parágrafo
// em relação ao topo da página

const primeiroP = document.querySelector('p');
console.log(primeiroP.offsetTop);


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('href');

links.forEach((link) => {
    const linkWidth = links.offsetWidth;
    const linkHeight = links.offsetHeight;

    if(linkWidth >= 48 && linkHeight >= 48){
        console.log(link, 'Tamanho maior que o recomendado!')
    }else{
        console.log(link, 'dentro do padrão recomendado!')
    }
});


// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browser = window.matchMedia('(max-widht: 720px)').matches;

if(browser){
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
}