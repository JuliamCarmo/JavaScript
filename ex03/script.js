//Verificar se o valor é true

function verificar(valor){
    return !!valor;         //verificação !!
}

console.log(verificar('Julia'))



//Calcular o perímetro de uma quadrado

function perimetroQuadrado(lado){
    return lado * 4;
}

console.log(perimetroQuadrado(5))



//Junção do nome e sobrenome

function nomeComp(nome, sobrenome){
    return `${nome} ${sobrenome}` 
}

console.log(nomeComp('Julia', 'Carmo'));



//verificar se o valor é par ou impar

function parImpar(valor){
    if(valor % 2 == 0){
        return 'Par!';
    }else{
        return 'Impar!'
    }
}

console.log(parImpar(23));



//verificar o tipo de dado passado como argumento

function tipoDado(valor){
    return typeof valor;
}

console.log(tipoDado(true));


/*
addEventListener é uma função nativa do Javascript
o seu primeiro parâmetro é o evento que ocorre e o segundo é o callback
*/

//função com o evento scroll e callback 

addEventListener('click', function(){
    console.log('Julia');
});