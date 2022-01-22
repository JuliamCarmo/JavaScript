let num = [5, 8, 2, 9, 3]
num[5] = 0 //indica o lugar específico
num.push(7)
num.sort() //organiza os vetores em ordem crescente
//num.length mostra a quantidade de elementos do vetor (deve ser colocado dentro de ${})

console.log(`Nossos vetores são ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro vetor é ${num[0]} e o último vetor é ${num[6]}`)

let pos = num.indexOf(9) //retorna a chave(posição) onde o valor esta
if (pos == -1) {
  console.log(`O valor não foi encontrado!`)
} else {
  console.log(`O valor 9 esta na posição ${pos}`)
}

