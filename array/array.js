// const nome = [ 'Samuel', 17, [ 'Av. Joaquim Veira de Brito', 1075 ] ] // Array dentro de um Array

console.log(typeof Array, new Array, typeof [])

let aprovados1 = new Array('Bia', 'Carlos', 'Ana') // new Array = new Object
console.log(aprovados1)

let aprovados2 = [ 'Bia', 'Carlos', 'Ana' ] // notação literal
console.log(aprovados2)

aprovados1 = [ 'Bia', 'Carlos', 'Ana' ] // re-declarou a variável
console.log(aprovados1[0])
console.log(aprovados1[1])
console.log(aprovados1[2])
// console.log(aprovados1[3]) // tentando acessar um índice que não foi declarado (undefined)

aprovados1[3] = 'Paulo'
console.log(aprovados1[3])
aprovados1.push('Abia')
console.log(aprovados1[4])

console.log(aprovados1.length)

aprovados1[9] = 'Rafael'
console.log(aprovados1.length)
console.log(aprovados1[8] === undefined) // estritamente igual

console.log(aprovados1)
console.log(aprovados1.sort())
console.log(aprovados1)

delete aprovados1[1]
console.log(aprovados1[1] === undefined)
console.log(aprovados1[2])

aprovados1 = [ 'Bia', 'Carlos', 'Ana' ]
aprovados1.splice(1, 1, 'elemento1', 'elemento2') // adicionada ou remove elementos a partir de um índice
console.log(aprovados1)