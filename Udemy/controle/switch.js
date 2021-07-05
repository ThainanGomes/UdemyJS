const imprimirResult = function(nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de Honra')
            //break para o switch em vez de executar todo o restante
            break
        case 8: case 7:
            console.log('Aprovado!')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console('Reprovado')
            break
        default:
            console.log('Nota Inválida!')
    }
}
imprimirResult('dez')