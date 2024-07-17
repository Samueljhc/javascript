// pessoa -> 123 -> { ... }
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> { ... }
// pessoa = { nome: 'Ana' } // tentar mudar o endereço da variável vai gerar um erro
console.log(pessoa)

Object.freeze(pessoa) // congela o objeto

pessoa.endereco = 'Rua ABC' // ignora sem gerar erros
pessoa.nome = 'Maria' // ignora sem gerar erros
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João' }) // isso é um objeto constante
console.log(pessoaConstante)
pessoaConstante.nome = 'Maria' // ignora sem gerar erros
console.log(pessoaConstante)