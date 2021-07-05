function rand( {min = 0, max = 10} ){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = {
    carlos: 0,
    carlao: 10
}
console.log(rand(obj))
/*

function sorteio (a = 1, b = 10){
    const valor = Math.random() * (b - a) + a
    return Math.floor(valor)
}
console.log(sorteio())
*/