// Liste 5 objetos nativos
// Object 
// Number
// String
// Array
// Function
// Date

// Liste 5 objetos do browser (DOM)
// HTMLCollection
// NodeList
// Event
// DomLocator
// Document
// Window

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
 if(typeof window.webkitResolveLocalFileSystemURL !== "undefined"){
    console.log('Existe!')
 } else {
    console.log('Não existe!')
 }