const listaAnimais = ['Cachorro', 'Gato', 'Passaro'];
console.log(listaAnimais);

//retorna uma NodeList com os prototypes de nodeList
const lista = document.querySelectorAll('li');
console.log(lista);  


//transformar em Array e retorna os prototypes de array
const listaArray1 = Array.prototype.slice.call(lista);
console.log(listaArray1);

//o melhor é transformar assim
const listaArray2 = Array.from(lista);
console.log(listaArray2);