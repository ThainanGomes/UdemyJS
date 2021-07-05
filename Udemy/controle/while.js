function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max-min) + min //random gera um valor entre 0-1

    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 10) //o return cai na let opcao
    console.log(`O resultado foi: ${opcao}.`)
}
console.log('acabou')