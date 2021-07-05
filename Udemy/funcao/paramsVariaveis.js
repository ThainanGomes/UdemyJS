function soma(){
    let soma = 0
    for(i in arguments){
        //soma = soma + arguments[i]
        soma += arguments[i]
    }
    return soma
}
console.log(soma(1))
console.log(soma(1, 90, 2))
console.log(soma('a', 'b', 'c', 'd'))
