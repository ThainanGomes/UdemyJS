let valor 

valor = null //nao tá apontando pra nenhum endereço de memória (Def: ausência de valor)

//console.log(valor)
//console.log(valor.toString()) TypeError: Cannot read property 'toString' of null

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50

console.log(produto)
produto.preco = undefined // n é bom, é bom null
console.log(!!produto.preco)
//delete produto.preco
console.log(produto.preco)

produto.preco = null 