//atribuir valor a uma variável

var scroll = 1000;
scroll += 500;
console.log(scroll);


//atribuir valor a uma variável utilizando ternário
var possuiCarro = true;
var possuiCasa = true;

var darCredito = (possuiCarro && possuiCasa);
console.log(darCredito);

/*
o operador ternário sempre retorna true ou false, então a parte 
? true : false nesse caso não é tão necessária
*/