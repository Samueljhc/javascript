Array.prototype.forEach2 = function(callback) { // criando um forEach()
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = [ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]

aprovados.forEach2(function(nome, indice) { // normal function
    console.log(`${indice}) ${nome}`)
//  console.log(array) // o forEach() executa os elementos separadamente
})