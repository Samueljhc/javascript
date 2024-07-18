const pai = { nome: 'Pedro', corCabelo: 'preto' } // prótotipo

const filha1 = Object.create(pai) // criou um objeto com o prótotipo pai
filha1.nome = 'Ana'
console.log(filha1.corCabelo) // preto

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true },
    corCabelo: { value: 'vermelho', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla' // ignorado
console.log(filha2.corCabelo)
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}