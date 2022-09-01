//Opção 01
function logCurso(){
  const nome = 'JavaScript'
  console.log(nome)
}
logCurso()

//Opção 02
function logIdade(idade){  //(idade) é um parâmetro declarado
  console.log(idade)
}
logIdade('21') //('21') é um argumento que esta sendo passado
logIdade('18')

//É possivel declarar mais de uma parâmetro dentro da mesma função
function logParametro(nome, idade, curso){
  console.log(nome, idade, curso)
}
logParametro('Julia', '21 anos', 'Desenvolvimento Web' )