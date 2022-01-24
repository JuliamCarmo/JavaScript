function carregar() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  var minutos = data.getMinutes()
  var saudar = document.getElementById('saudar')
  var nome = window.prompt('Olá, qual é o seu nome?')
  msg.innerHTML = `Olá ${nome}! Agora são ${hora}:${minutos} minutos.`

  if (hora >= 0 && hora < 12) {
    img.src = 'desafio/fotomanha.jpg'
    document.body.style.backgroundImage = 'linear-gradient(to right, #287851, #9DF9CC, #52F7A7, #447A60, #41C485)'
  } else if (hora >= 12 && hora <= 18) {
    img.src = 'desafio/fototarde.jpg'
  } else {
    imagem.src = 'desafio/fotonoite.jpg'
    document.body.style.backgroundImage = 'linear-gradient(to right, #287851, #9DF9CC, #52F7A7, #447A60, #41C485)'
  }
}
