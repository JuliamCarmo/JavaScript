/*
Native
Os objetos nativos são aqueles definidos na especificação da linguagem
e são implementados independente do browser

Seus construtores são:
Object
String 
Array 
Function
*/


/*
Host
São implementados pelo próprio ambiente. No browser possuimos o DOM,
com o DomList, HTMLCollection e outros. No Node.js os objetos são
diferentes, já que estamos em um ambiente de browser

Seus objetos são:
NodeList
HTMLCollection
Element
*/

/*
User
São definidos pela nossa aplicação, ou seja, qualquer objetos que 
criamos ou que importamos de alguma biblioteca

const Pessoa = {
    nome: 'André';
}
*/


/*
Podemos verificar se algo que queremos usar existe e pode ser implementado

console.log(typeof Array.from !== "undefined")

if(typeof NodeList !== "undefined");

Se não for undefined, quer dizer que existe
*/

console.log(typeof Array.from !== "undefined")


if(typeof Array.from !== "undefined"){
    console.log('Existe!')
}else {
    console.log('Não existe!') //pofio (um código que fario o mesmo, caso o que estamos tentando usar não exista)
}


/*
API - uma interface de software criada para interação com outros 
softwares
As interações que fazemos com os browser, estamos na verdade interagindo
com a API do browser 
*/