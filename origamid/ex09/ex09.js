function minhaFunction() {
  //Pegar o texto
  var copiarTexto = document.getElementById('meuInput');

  //Selecionar o texto
  copiarTexto.select();

  //Copiar o texto dentro do campo de texto
  navigator.clipboard.writeText(copiarTexto.value);

  //Alertar que o texto foi copiado
  alert("Texto copiado: " + copiarTexto.value);
}

//referencia
//https://www.w3schools.com/howto/howto_js_copy_clipboard.asp