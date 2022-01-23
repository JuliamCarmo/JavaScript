let amigo = {
  nome: 'Julia', sexo: 'F', peso: 65.5,
  engordar(p) {
    console.log('Ganho de peso')
    this.peso += p
  }
}

amigo.engordar(2)
console.log(`${amigo.nome} esta pesando atualmente ${amigo.peso}Kg`)