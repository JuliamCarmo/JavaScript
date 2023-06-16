//Criamos objetos em js com: var a = {}
//Para acessar as propriedades e metodos em js sempre utilizamos . (get)
//para atribuir um valor ao objeto utilizamos = (set)
//this é uma referencia ao objeto


//classe
let pessoa = {      
    //atributos
    nome: 'Julia',
    idade: 21, 
    profissao: 'dev', 
    facul: true
}

console.log(pessoa.nome);




let quadrado = {    //classe
    lados: 4,       //atributo - propriedade

    area: function(lado){        //metodo   também pode ser declarado como area(lado){}
        return lado * lado;
    },

    perimetro(lado){            //metodo
        return lado * this.lados;
    }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));



//classe
var menu = {
    //propriedades
    width: 800,
    heigth: 50,
    bgcolor: '#111',
}

//add uma nova propriedade ao objeto
menu.color = 'blue';


//add um novo metodo ao objeto
menu.esconder = function(){
    return 'sumiu!';
}


console.log(menu.esconder())

