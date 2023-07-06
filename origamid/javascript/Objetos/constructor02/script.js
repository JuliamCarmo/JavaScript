function Carro(marca, valor){
    const taxa = 1.2;
    const valorFinal = valor * taxa;

    this.marca = marca;
    this.valor = valorFinal;
}

const c1 = new Carro('Fiat', 2000);