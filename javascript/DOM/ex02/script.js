//escopo
{
var x = 1;
let y = 2;
const z = 3;

console.log(x, y, z);
}


//escopo com funções

const num = 10;

function somar(a){
    return a + num;
}

function dividir(b){
    return num / b;
}

console.log(somar(4));
console.log(dividir(2))

