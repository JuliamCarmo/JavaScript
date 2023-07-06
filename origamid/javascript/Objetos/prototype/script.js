//Criar uma função construtora e atribuir um prototype
function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
}

const p1 = new Pessoa('Julia', 'Carmo', 22);


// Lista com todos os métodos acessados por:
// NodeList
// HTMLCollection
// Document

Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);


//listar os construtores do elemento
const li = document.querySelector('li');
console.log(li.constructor.name);