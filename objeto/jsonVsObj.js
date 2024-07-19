/* Transformando um Objeto em JSON */
const obj = { a: 1, b: 2, c: 3, soma() { a + b + c } } // o formato JSON ignora a função!
console.log(JSON.stringify(obj))

/* Transformando um JSON em Objeto */

// console.log(JSON.parse("{a: 1, b: 2, c: 3}")) // não corresponde ao formato de um JSON!
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")) // não corresponde a um JSON

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // minha ideia estavá correra!
console.log(JSON.parse('{ "a": 1.7, "b": "Meu nome é Samuel!", "c": true, "d": {}, "e": [] }'))