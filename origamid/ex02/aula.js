//função area do quadrado

function areaQ(lado){   //parametros
    return lado * lado;
}

console.log(areaQ(10)); //argumentos




//função PI

function pi(){
   return 3.14;
}

var calc = 5 * pi();
console.log(calc)




//função IMC

function imc(peso, altura){
    const imc = peso / (altura ** 2);
    return imc;
}

console.log(imc(65, 1.70))

//função IMC2
function imc2(peso, altura){
    const imc = peso / (altura ** 2);
    console.log(imc);
}

imc2(20, 1.8)




//função com if else

function corF(cor){
    if(cor === 'Azul'){
        return 'Olhe para o céu';
    }else if(cor === 'Rosa'){
        return 'Olha para as flores';
    }else if(cor === 'Verde'){
        return 'Olha para a floresta';
    }else{
        return 'Cor não encontrada :(';
    }
}

console.log(corF('Azul'))




//função callback (função que ocorre após algo que acontece, nesse caso após o evento de click)

addEventListener('click', function(){
    console.log('oi');
});




//função para verificar idade
function terceiraIdade(idade){
    if(typeof idade !== 'number'){
        return 'Informe sua idade (apenas numeros)';
    }else if (idade >= 60){
        return true;
    }else{
        return false;
    }
}

console.log(terceiraIdade(21));



//função países para visitar

function falta(visitados){
    var totalP = 193;
    var total = totalP - visitados;
    return `Faltam visitar ${total} países`; 
}

console.log(falta(1));



//função dentro de função

var profissao = 'dev'

function dados(){
    var nome = 'Julia';
    var idade = 21;

    function outrosDados(){
        var endereco = 'sp';
        var idade = 22;

        return `${nome}, ${idade}, ${endereco}, ${profissao}`;
    }
    return outrosDados();
}

console.log(dados());