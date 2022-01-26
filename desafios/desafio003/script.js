function verificar() {
  var data = new Date()
  var ano = data.getUTCFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 15) {
        //Criança
        img.setAttribute('src', 'imagens/menino.jpg')
      } else if (idade < 23) {
        //Jovem
        img.setAttribute('src', 'imagens/jovem.jpg')
      } else if (idade < 50) {
        //Adulto
        img.setAttribute('src', 'imagens/adultoh.jpg')
      } else {
        //Idoso
        img.setAttribute('src', 'imagens/idoso.jpg')
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 14) {
        //Criança
        img.setAttribute('src', 'imagens/menina.jpg')
      } else if (idade < 24) {
        //Jovem
        img.setAttribute('src', 'imagens/jovem-mulher.jpg')
      } else if (idade < 50) {
        //Adulto
        img.setAttribute('src', 'imagens/adulta.jpg')
      } else {
        //Idoso
        img.setAttribute('src', 'imagens/idosa.jpg')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detequitamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}