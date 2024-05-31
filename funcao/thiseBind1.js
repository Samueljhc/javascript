const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e orientada a objetos

const falarDePessoa = pessoa.falar.bind(pessoa) // .bind chamou a constante pessoa
falarDePessoa()