//Modo mais descritivo

function livro(nome, ano, autor) {
  const nomeUpper = nome.toUpperCase()
  const anoTotal = 2022 - ano
  const frase = nome + ' por ' + autor

  const objeto = {
    nome: nomeUpper,
    anoTotal,
    frase
  }
  return objeto
}

const livroRetorno = livro('1954', 1949, 'George Orewll')
console.log(livroRetorno.frase)


