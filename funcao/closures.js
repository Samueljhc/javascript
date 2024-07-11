// Closure é o scopo criado quando a função é declarada
// Esse scopo permite a função acessar e manipular variáveis externas à função

// Contexto léxico em ação!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
        return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())