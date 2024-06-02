function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0

    // metodo Público
    this.acelerar = () => {
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima // não deixa acrescentar mais o delta
        }
    }
    // metodo publico
    this.getvelocidadeatual = () => velocidadeAtual
}

const uno = new Carro // parêntesis e opcional
uno.acelerar()
console.log(uno.getvelocidadeatual())

const ferrari = new Carro(350, 20) // parêntesis e obrigátorio
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getvelocidadeatual())