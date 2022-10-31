//Qual a maior idade?
var minhaIdade = 21;
var idadePrimo = 27;

if (minhaIdade > idadePrimo) {
  console.log('Minha idade é maior')
} else if (minhaIdade === idadePrimo) {
  console.log('Nossa idade é igual')
} else{
  console.log('Minha idade é menor')
}


//Qual valor é retornado?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2) // 3 (true)

//Verifique se os valores são true ou false
var nome = 'Julia';
var idade = 21;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

//Total de habitantes Brasil e China
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log(`Maior quantidade de habitentes, Brasil - ${brasil}.`)
} else {
  console.log(`Maior quantidade de habitentes, China - ${china}.`)
}

//O que irá aparecer no console? 
if (('Gato' === 'gato') && (5 > 2)) { //false
  console.log('Verdadeiro')
} else {
  console.log('Falso')
}

//O que irá aparecer no console? 
if (('Gato' === 'gato') || (5 > 2)) { //true
  console.log('Gato' && 'Cão')
} else {
  console.log('Falso')
}

