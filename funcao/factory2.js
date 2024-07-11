function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.99))
console.log(criarProduto("Ipad", 989.99))
console.log(criarProduto('POCO X3 NFC', 1650))