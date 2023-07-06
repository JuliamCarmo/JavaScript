//selecionar por id
const selectIdAnimais = document.getElementById('animais');
console.log(selectIdAnimais.innerText)

const selectIdFaq = document.getElementById('faq');
console.log(selectIdFaq.innerText);

const selectIdContato = document.getElementById('contato');
console.log(selectIdContato);


//selecionar por classe,retorna o HTMLCollection(parecido com uma array)
const selectClass = document.getElementsByClassName('copy');
console.log(selectClass);


//selecionar por tag,retorna o HTMLCollection(parecido com uma array)
const selectTag = document.getElementsByTagName('ul');
console.log(selectTag[1]);




//selecionar com querySelector (selecionar por css, retorna apenas o primeiro)
const selectQs = document.querySelector('ul');
console.log(selectQs);


const linkInterno = document.querySelector('[href^="https://"]');
console.log(linkInterno);


//selecionando por querySelectorAll (selecionar por css, retora todos como NodeList)
//retorna uma nodeList parecida com uma array, com alocação estática
const selectQsAll = document.querySelectorAll('.animais-lista img');
console.log(selectQsAll[2]);
