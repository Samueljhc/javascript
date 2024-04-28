let isATIVO = false
console.log(isATIVO)

const string = ''

isATIVO = true
console.log(isATIVO)

isATIVO = 1
console.log(!false)

/* Valores verdadeiros */
console.log('os verdadeiros...')
console.log(!!3)
console.log(!!0) // Único número inteiro que é falso
console.log(!!-1)
console.log(!!' ') // Espaço vazio
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isATIVO = true))

/* Valores falsos */
console.log('Os falsos...')
console.log(!!0)
console.log(!!string)
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(isATIVO = false) // Vai olhar oque foi atribuido para a variavel, nesse caso "false"

console.log('pra finalizar...')
console.log(!!('' || null || 0 || 'Ayala' || 123))

let nome = "Lucas"

console.log(nome || 'Desconhecido') // Essas duas barras || são iguais ao termo "ou"