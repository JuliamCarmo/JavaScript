var saudar = document.getElementById('saudar')
var nome = window.prompt('Olá, qual é o seu nome?')

function carregar() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  var minutos = data.getMinutes()
  var segundos = data.getSeconds()
  msg.innerHTML = `Olá ${nome}! Agora são exatamente ${hora}:${minutos}:${segundos}`

  if (hora >= 0 && hora < 12) {
    img.src = 'desafio/imagemmanha.jpg'
    document.body.style.backgroundImage = 'linear-gradient(to right, #287851, #9DF9CC, #52F7A7, #447A60, #41C485)'
  } else if (hora >= 12 && hora <= 18) {
    img.src = 'desafio/fototarde.jpg'
    document.body.style.backgroundImagec = 'linear-gradient(to right, #f85e00, #ffb563, #ffd29d)'
  } else {
    imagem.src = 'desafio/imagemnoite.jpg'
    document.body.style.backgroundImage = 'linear-gradient(to right, #305252, #373e40, black)'
  }
}
window.setInterval('carregar()', 1000)
