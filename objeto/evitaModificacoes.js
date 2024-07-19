// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Entensível:', Object.isExtensible(produto)) // teste para saber se pode ser extentido

produto.nome = 'Borracha' // tentando alterar o valor da propriedade
produto.descrição = 'Borracha escolar branca' // tentando criar uma propriedade
delete produto.tag // deletando uma propriedade (pode deletar, só não pode adicionar)
console.log(produto)

// Object.seal
const pessoa = { nome: 'Iarla', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa)) // teste para saber se está selado

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes