// const Dom = {
//     seletor: 'li',
//     element() {
//         const sel = document.querySelectorAll(this.seletor);
//         console.log(sel);

//         //return document.querySelector(this.seletor)
//     },
//     ativar(){
//         const ativar = document.querySelector(this.seletor);
//         ativar.classList.add('ativar');

//         //this.element().classList.add('ativar');
//     }
// }



//transformar o objeto em uma função construtora
//criação da função construtora com metodos 

function Dom(seletor) {

    this.element = function() {
        const sel = document.querySelectorAll(seletor);
        console.log(sel);

        //return document.querySelector(this.seletor)
    }
    this.ativar = function() {
        const ativar = document.querySelector(seletor);
        ativar.classList.add('ativar');

        //this.element().classList.add('ativar');
    }
}

//instancia e uso dos metodos da função construtora

const li = new Dom('li');
const ul = new Dom('ul');
const p = new Dom('p');