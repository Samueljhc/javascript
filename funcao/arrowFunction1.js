let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um parâmetro
console.log(ola())

/*

Arrow Function
const aprovado1 = (nota1, nota2) => {
    nota1 = 4
    nota2 = 2
    return nota1 * nota2
}
console.log(aprovado1())



Function
function aprovado2(nota3, nota4) {
    nota3 = 5
    nota4 = 2
    return nota3 * nota4
}
console.log(aprovado2())

*/