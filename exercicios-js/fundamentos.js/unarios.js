let num1 = 1
let num2 = 2


num1++ // pós fixada / acrescenta / menos apresada / ordem de precedência
console.log(num1++) // 2
--num1 // pré fixada / tira / mais apresada / ordem de precedência
console.log(--num1) // 1

console.log(++num1 === num2--) // decrementado
console.log(num1 === num2)