//Em Js praticamente todo tipo de dados é um objeto.
//'console.log' é um bom exemplo. O 'console' é um objeto e o '.log' é um método que estamos tentando acessar. 

//Objects
const nome = 'O Senhor dos Anéis'
const ano = 1954
const autor = 'J. R. R. Tolkien'

const nomeFilme = 'O Senhor dos Anéis'
const anoFilme = 2001
const diretorFilme = 'Peter Jackson'


const livro = {
  nome: 'O Senhor dos Anéis',
  ano: 1954,
  autor: 'J. R. R. Tolkien'
}

const filme = {
  filme: 'O Senhor dos Anéis',
  ano: 2001,
  autor: 'J. R. R. Tolkien',
  diretor: 'Peter Jackson'
}

console.log(livro.ano)
console.log(nome == nome)
console.log(filme)

const texto = document.querySelector('p')
console.log(texto.clientHeight)