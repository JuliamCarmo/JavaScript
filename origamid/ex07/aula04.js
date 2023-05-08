//Condicionais if else

var n1 = 5;
var n2 = 3;

if(n1 >= n2){
    console.log(`${n1} é maior que ${n2}`);
}else{
    console.log(`${n2} é maior que ${n1}`);
}


/*
Formas de retornar false

if(false)
if(0) ou -0
if(NaN)
if(null)
if(undefined)
if("")

*/


//Operadores Lógicos

//operador && e

var idade = 55;

if(idade >= 0 && idade <= 4){
    console.log("Você ainda é um bebê");
}else if(idade >= 5 && idade <= 13){
    console.log("Você é criança");
}else if(idade >= 14 && idade <= 17){
    console.log("Você é adolescente")
}else if(idade >= 18 && idade <= 29){
    console.log("Você é um jovem adulto");
}else if(idade >= 30 && idade <= 50){
    console.log("Você é adulto");
}else{
    console.log("Você atingiu a terceira idade")
}

var condicional = ((5 - 5) && (5 + 5));

if(condicional){
    console.log("Verdadeiro");
}else{
    console.log("Falso");
}


//operador || ou

var condicional2 = ((5 + 5) || (5 - 5))

if(condicional2){
    console.log("Verdadeiro");
}else{
    console.log("Falso");
}


//Switch case

var cor = "Azul";

switch(cor){
    case "Azul":
        console.log("Olhe para o céu");
        break;
    case "Vermelho":
        console.log("Olhe para as rosas");
        break;
    case "Amarelo":
        console.log("Olhe para o sol");
        break;
    default:
        console.log("Feche os olhos");
}



//Comparação

var minhaIdade = 25;
var idadePrimo = 25;

if(minhaIdade > idadePrimo){
    console.log("Você é mais velho!");
}else if(minhaIdade === idadePrimo){
    console.log("Vocês tem a mesma idade!");
}else{
    console.log("Seu primo é mais velho!");
}