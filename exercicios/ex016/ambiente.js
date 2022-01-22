let valores = [2, 4, 5, 8, 9, 3]
valores.sort()
console.log(valores)

/*
for(let pos=0; pos<valores.length; pos++){
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} */

for (let pos in valores) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}