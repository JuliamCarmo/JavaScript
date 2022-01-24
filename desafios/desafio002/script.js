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
    document.body.style.backgroundImagec = 'linear-gradient(to right, #f85e00, #ffb563, #ffd29d)'
  } else {
    imagem.src = 'desafio/fotonoite.jpg'
    document.body.style.backgroundImage = 'linear-gradient(to right, #202361, #8287FA, #4A52E0, #1A1E69, #393FAD)'
  }
}
