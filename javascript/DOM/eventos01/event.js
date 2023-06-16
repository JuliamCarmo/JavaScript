//Propriedades do Event

const h1 = document.querySelector('h1');

function evento(event){
    console.log(event);
}

h1.addEventListener('click', evento);


//Podmeos "filtrar" as propriedades do event:

const h2 = document.querySelector('h2');

function eventPropriedades(event){
    const currentTarget = event.currentTarget;  //this (referente ao elemento)
    const target = event.target; // caminho onde precisamento o evento ocorreu
    const type = event.type; // tipo de evento
    const path = event.path; 

    console.log(currentTarget, target, type, path);
}

    h2.addEventListener('click', eventPropriedades);



//Método para previnir um comportamento padrão de um evento 
/*
nesse caso o método impede que ao clicar em link externo o usuário 
seja direcionado para fora da página, em vez disso, o caminho da url 
aparece no console.
*/

const linkExterno = document.querySelector('a[href^="http"]');

function previnir(event){
    event.preventDefault();
    console.log(event.target.href);
}

linkExterno.addEventListener('click', previnir);
    
