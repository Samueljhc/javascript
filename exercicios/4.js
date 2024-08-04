function receberNomeDoMes(numero) {
    const mapeamento = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ]

    return mapeamento[--numero]
}

console.log(receberNomeDoMes(8))