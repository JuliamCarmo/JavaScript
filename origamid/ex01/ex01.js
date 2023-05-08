//Objetos

//Objeto com meus dados pessoais
var dados = {
  nome: 'Julia',
  sobrenome: 'Carmo',
  idade: 21,
  nacionalidade: 'brasileira',
  facul: true,
}

dados.nomeC = function () {
  return `${this.nome} ${this.sobrenome}`;
}


//modificando um objeto

var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi'
}

carro.preco = 3000;


//outro objeto

var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(pessoa){
    if(pessoa === 'homem'){
      return 'auau';
    }else{
      return 'não auau';
    }
  }
}