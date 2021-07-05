const pessoa = {
    nome: 'ana',
    idade: 5,
    endereco: {
        rua: 'das dores',
        numero: 100,
        bairro: 'Centro'
    }
}

const { nome, idade } = pessoa //'tire de dentro do objeto pessoa o atributo nome e idade'
console.log(nome, idade)

const { nome: n, idade: i } = pessoa 
console.log(n, i)

const {endereco:{rua, bairro}} = pessoa