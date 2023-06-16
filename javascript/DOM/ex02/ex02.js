//Escopo de função
//variáveis declaradas dentro de função, não são acessadas fora dela

const data = {
    dia: 21, 
    mes: 'maio', 
    ano: 2001, 
}

data.ano = 2002;

console.log(data)


/*
o let impede que você redeclare uma variável, mas permite que você 
altere o valor dela
*/