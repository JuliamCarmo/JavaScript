//array loop - anos em que o Brasil ganhou a copa

var copa = [1959, 1962, 1970, 1994, 2002];
console.log(copa)

for(i = 0; i < copa.length; i++){
  console.log(`Brasil ganhou a copa de ${copa[i]}`)
}


//array loop com if e break - até que frutas[x] === 'Pera'
var frutas = ['Banana', 'Maça', 'Pera', 'Uva', 'Melância'];

for(x = 0; x < frutas.length; x++){
  console.log(frutas[x])
  if(frutas[x] === 'Pera'){
    break;
  }
}


//ultima fruta
var ultimaFruta = frutas[frutas.length -1];
console.log(ultimaFruta)