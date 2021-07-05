function getInteiroAleatorioEntre(min, max){
    var valor = Math.random() * (max - min) + min

    return Math.floor(valor)
}

let opcao = -1
do {
    opcao = getInteiroAleatorioEntre(-1, 2)
    console.log(`Valor Sorteado: ${opcao}`)
}while(opcao != -1)

console.log('Fim de Sorteio')