const aprovados = [ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]

aprovados.forEach(function(nome, indice) { // normal function
    console.log(`${indice}) ${nome}`)
//  console.log(array) // o forEach() executa os elementos separadamente
})

aprovados.forEach( nome => console.log(nome) ) // arrow function

const exibirAprovados = (aprovados) => console.log(aprovados) // armazenando em uma constante
aprovados.forEach(exibirAprovados)