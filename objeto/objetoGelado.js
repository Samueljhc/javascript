const obj = Object.freeze({
    nome: 'qualquer', preco: 1.99, tag: 'matérial escolar'
})

console.log(obj)

obj.nome = 'Borracha'
obj.descrição = 'Borracha usada para apagar rabiscos feitos com lapís'
delete obj.tag

console.log(obj)