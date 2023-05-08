//loops

//For
for(a = 0; a <= 5; a ++){
  console.log(a);
}

//while
var i = 0;
while (i <= 5){
  console.log(i);
  i++;
}

//array e loop

var cores = ['azul', 'verde', 'amarelo', 'rosa'];

for(var i = 0; i < cores.length; i++){
  console.log(cores[i]);
}

//for com uma condição if e break (ainda usando a array cores)
for(var x = 0; x < cores.length; x++){
  console.log(cores[x]);
  if(cores[x] === 'amarelo'){
    break;
  }
}


//forEach 
//é um metodo que executa uma função para cada item da array, os argumetos são aribuídos dinâmicamente 

var frutas = ['maça', 'pera', 'abacaxi', 'laranja', 'banana'];

frutas.forEach(function(fruta, i){   //podemos passar os parametros, item, index e array
  console.log(fruta, i);
})
