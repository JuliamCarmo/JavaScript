//Modo simplificado

function livro(nome, ano, autor){
  return{
    nome: nome.toUpperCase(),
    totalAnos: 2022 - ano,
    frase: nome +' por '+ autor
  }
}

const retorno = livro('1954', 1949, 'George Orewll')
console.log(retorno)