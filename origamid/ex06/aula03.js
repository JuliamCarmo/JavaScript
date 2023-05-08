var n = 2e3;
console.log(n);


//Operadores aritméticos
//Os operadores (exceto a soma) podem realizar operações com valores em string

var soma = 10 + 10;
var sub = "10" - 5;
var mult = "10" * "2";
var div = "10" / "2";
var expoente = "4" ** "2";
var resDiv = "10" % "2";

console.log(resDiv);


//Ordem de precedencia

var n1 = 5.5;
var n2 = 7;
var n3 = 8;
var n4 = 7;

var media = (n1 + n2 + n3 + n4) / 4;

console.log(media);


//Operadores Unários
//nesse caso não podemos usar const

var incremento = 5;
console.log(incremento++); //depois
console.log(incremento);

var incremento2 = 5;
console.log(++incremento2); //antes
console.log(incremento2);


//podemos usar + ou - na frente de uma String para transforma-la em um numero 
var idade = "21";
var num = 1;

console.log(+idade + 1);