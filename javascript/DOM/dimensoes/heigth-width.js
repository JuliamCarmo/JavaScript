const section = document.querySelector('.animais');

// Height e Width

console.log(section.clientHeight); // height + padding
console.log(section.offsetHeight); // height + padding + border
console.log(section.scrollHeight); // height total, mesmo dentro de scroll



// offsetTop e offsetLeft

// Distância entre o topo do elemento e o topo da página
console.log(section.offsetTop);

// Distância entre o canto esquerdo do elemento e o canto esquerdo da página
console.log(section.offsetLeft);



// getBoundingClientReact() 

 // Método que retorna um onjeto com valores width, height, distâncias do elemento e mais

const rect = section.getBoundingClientRect();

rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll

if(rect.top < 0){
  console.log('passou do elemento')
}


// Window
console.log(
window.innerWidth, // width do janela
window.outerWidth, // soma dev tools também
window.innerHeight, // height do janela
window.outerHeight, // soma a barra de endereço

window.pageYOffset, // distância total do scroll vertical
window.pageXOffset // distância total do scroll horizontal
);


if(window.innerWidth < 600) {
  console.log('Tela menor que 600px'); //não é o ideal
}


// MatchMedia()

// Utiliza media-querie como no CSS para verificar a largura do browser

const small = window.matchMedia('(max-width: 600px)');
console.log(small) //retorna matches true ou false

if(small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}
