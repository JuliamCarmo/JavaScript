//em Javascript tudo o que tem propriedades e metodos é um objeto

var nome = 'Julia';
var preco = 19.99
console.log(nome.toLowerCase());
console.log(nome.toUpperCase());
console.log(preco.toFixed());


//metodo DOM
var btn = document.querySelector('.btn');

btn.addEventListener('ckick', function(){
  console.log('Clicou!');
});