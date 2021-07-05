const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    },
}
pessoa.falar()

const falar = pessoa.falar
falar()

const falarDePessoa = pessoa.falar.bind(pessoa) //método responsável por resolver o conflito do this
falarDePessoa()
