let a = 0
global.b = 123
this.c = 456
this.d = false
this.e = 'Teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports === this)
console.log(module.exports)

// Criando uma váriavel maluca, ou seja sem 'var' nem 'let'
abc = 678 // NÃO RECOMENDADO, VAI DAR RUIM!
console.log(global.abc)

// module.exports = { e: 456, f: false, g: 'teste' }