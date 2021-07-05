//Funcao sem retorno
function imprimirSoma(a, b){
    console.lo
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(4)
imprimirSoma(4,20,40)

//funcao com retorno

function soma(a, b = 1){
    return a + b
}

console.log(soma(4,5))
console.log(soma(30))