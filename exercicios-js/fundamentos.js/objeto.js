const prod1 = {} // os valores serão aplicados de forma dinamica
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.9
prod1['desconto legal'] = 0.4 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.9
}
prod2['desconto legal'] = 0.4
console.log(prod2)