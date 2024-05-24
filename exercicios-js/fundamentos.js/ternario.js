const resultado1 = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' // funcão arrow
console.log(resultado1(7))
console.log(resultado1(6.9))



const resultado2 = function(nota) {
    return nota >= 7 ? "Aprovado" : "Reprovado"
}
console.log(resultado2(7.1))
console.log(resultado2(6.9))

/* São duas formas diferentes de se montar a mesma função */