/* Cadeia de protótipos (prototype chain) */

Object.prototype.atributo0 = '0' // topo da hierarquia / 4º opção a ser considerada pela linguagem
const avo = { atributo1: 'A' } // 3º opção a ser considerada pela linguagem
const pai = { __proto__: avo, atributo2: 'B', atributo3: 'c0' } // foi sombreado / 2º opção a ser considerada pela linguagem
const filho = { __proto__: pai, atributo3: 'C' } // sombreou / 1º opção a ver considerada pela linguagem
console.log(filho.atributo0, filho.atributo1, filho.atributo2, filho.atributo3) // a impressão sera feita sobre a variável 'filho'

const carro = {
    velAtual: 0, // muda
    velMax: 200, // não muda
    acelerarMais(delta) { // delta = difereça entre as velocidades
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta // pode continuar acelerando
        } else {
            this.velAtual = this.velMax // vai acelerar até igualar as velocidades
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // sombreamento (shadowing)
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(250)
console.log(ferrari.status())