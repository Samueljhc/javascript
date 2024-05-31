/* Estratefia 1 para gerar valor padrão */
function soma1(a, b, c) { // forma mais famosa
    a = a || 1 // "duas barras || representam a expressão 'ou...'"
    b = b || 1
    c = c || 1
    return a + b + c // 1 + 1 + 1
}

console.log(soma1(), soma1(3), soma1(1, 2, 3))
console.log(soma1(0, 0, 0)) // assumiu o valor falso, então e dado o valor padrão, nesse caso 1

/* Estrategia 2, 3 e 4 para gerar valores padrões */
function soma2(a, b, c) { // a = 0 / b = 1 / c = 2
    a = a !== undefined ? a : 1 // indice 0 (primeiro argumento)
    b = 1 in arguments ? b : 1 // indice 1 (segundo argumento)
    c = isNaN(c) ? 1 : c // mais segura (terceiro argumento)
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3))
console.log(soma2(0, 0, 0)) // valor undefined = 0

/* Valor padrão do ECMAScript 2015 */
function soma3(a = 1, b = 1, c = 1) {  // forma literal (mais simples e adequada)
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3))
console.log(soma3(0, 0, 0)) // 0 representa o valor undefined nesse caso