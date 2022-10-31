//Operador E &&

/*
true && false = false
false && true = false
true && true = true 

Se não encontrar nenhum valor false, ele retorna o ULTIMO valor que foi verdadeiro
*/

if ((5 - 5) && (5 + 5)) { //5 -5 = 0, resultado considerado false
  console.log('Verdadeiro')
} else {
  console.log('Falso')
}

if ((5 - 10) && (5 + 5)) {
  console.log('Verdadeiro')
} else {
  console.log('Falso')
}

//Operador OU ||
/*
true || false = true
false || true = true
true || true = true
false || false = false

O operador || esta sempre em busca do verdadeiro, retorna o PRIMEIRO valor verdadeiro
*/
