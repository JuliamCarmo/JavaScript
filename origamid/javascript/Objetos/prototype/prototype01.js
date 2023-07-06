//prototype sempre esta ligado as funções, ele é uma propriedade das funções

/*
Todos os objetos JavaScript herdam propriedades e métodos de um protótipo. 
Ou seja, com o prototype conseguimos adicionar propriedades e metodos nas funções construtoras
*/

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade
    this.andar = function(){
        console.log(nome + ' andou!')
    }
}

Pessoa.prototype.nadar = function() {
    return this.nome + " sabe nadar!"
}

const p1 = new Pessoa('Julia', 22)
