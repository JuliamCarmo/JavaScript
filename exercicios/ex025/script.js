const botao = document.querySelector(".botao")

function mostrar(){
  const texto = document.querySelector(".texto")
  console.log(texto)
  texto.classList.toggle("ativar") //existem alguns comandos em 'classList', como 'add', 'remove' e o 'toggle'. O toggle faz a ativação e a remoção também. 
}

botao.addEventListener("click", mostrar)