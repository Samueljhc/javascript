const pilotos = [ 'Vettel', 'Alonso', 'Raikkonen', 'Massa' ] // o array pode ser alterado mesmo com sua variável sendo constante
pilotos.pop() // Massa quebrou o carro! // remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

/* splice pode adicionar ou remover elementos */

// Adicionar //
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Remover //
pilotos.splice(3, 1,) // Massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // retorna um novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)