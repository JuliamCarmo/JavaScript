//As funções contrutoras são responsáveis por construir novos objetos

function Carro() {
    //atributos
    this.marca = 'marca';
    this.ano = 2010;
    
    //metodo
    this.andar = function(){
    console.log('andou')
}
}

const honda = new Carro(); //instancia
honda.marca = 'honda';
honda.ano = 2017;

const fiat = new Carro();
fiat.marca = 'Fiat';
fiat.ano = 2016;
fiat.andar;


//Passando parametros
function Pessoa(nome, idade, altura){
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
}

const p1 = new Pessoa('Ana', 19, 1.68);
const p2 = new Pessoa('Heitor', 23, 1.72)
