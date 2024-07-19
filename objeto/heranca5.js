console.log(typeof String) // tem .prototype
console.log(typeof Array) // tem .prototype
console.log(typeof Object) // tem .prototype

String.prototype.reverse = function() {
    return this.split('').reverse().join('') // slip: fragmentar // join: juntar
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() {
    return this[0] // primeiro elemento do array
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function() { // não é recomendado fazer isso // gera efeitos colaterais
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())