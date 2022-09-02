//Eventos

const ativar = document.querySelector(".ativar")


/** @param {MouseEvent} event (esse comentario facilita no desenvolvimento do site)*/ 

function ativarAoClick(event) {
  console.log(event.timeStamp) //Pode ser usado para verificar quanto tempo levou para o usuário clicar no botão.  
}

ativar.addEventListener("click", ativarAoClick)

console.log(ativar)