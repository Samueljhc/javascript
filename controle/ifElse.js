const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    }
    
    else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') // string = 7? / não pode ser comparado, ou seja, é falso!