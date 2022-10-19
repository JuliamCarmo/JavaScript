//array e loop
const lista = ["JavaScript", "HTML5", "CSS3", "PHP"]

const body = document.querySelector("body")

//Estrutura de repetição 'for'

for(let index =0; index < lista.length; index++){
  body.innerHTML += "<li>" + lista[index] + "</li>"
}