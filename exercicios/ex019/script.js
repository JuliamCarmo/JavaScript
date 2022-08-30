//Manipulação do DOM. 

//Seleciona o elemento  
const nav = document.querySelector('nav')
const produtos = document.querySelector('.produtos a')

//E muda o que você quer nele, atravez de propriedades e metodos.
console.log(nav)
console.log(produtos)

console.log(produtos.innerHTML)
console.log(produtos.href)

produtos.remove() //FUNÇÃO para remover elementos

nav.style.backgroundColor = "grey"
nav.style.padding = "1rem"

nav.classList.add("ativo")