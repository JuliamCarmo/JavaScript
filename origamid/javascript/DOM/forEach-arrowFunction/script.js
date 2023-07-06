//mostrar no console cada paragrafo do site

const p = document.querySelectorAll('p');
console.log(p);

p.forEach((item) => { //função de callback com arrow-function
    console.log(item)
});


//mostrar os textos dos paragrafos

p.forEach((item) => {
    console.log(item.innerText)
});