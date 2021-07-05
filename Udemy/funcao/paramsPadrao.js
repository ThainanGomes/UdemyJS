function soma1(a, b){
    a = a || 1
    b = b || 2 //se b receber falso usa o padrão... usando o operador OU

    return a + b
}

console.log(soma1(3), soma1(0,0))

//outras estrategias pra valor padrao

function soma2(a,b,c){
    a = a != undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
}

//valor padrao do es2015

function soma3 (a = 1, b = 1, c =1){
    return a + b + c
}
console.log(soma3(3), soma3(0,0))