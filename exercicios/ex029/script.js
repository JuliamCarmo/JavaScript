const lista = ["JavaScript", "HTML", "CSS", "PHP"]
const body = document.querySelector("body")

function adicionarBody(item){
  body.innerHTML += "<li>" + item + "</li>"
}

lista.forEach(adicionarBody)