let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!true)

console.log('Os verdadeiros:')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')

console.log('Os falsos:')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("Pra finalizar: ")
console.log(!("" || null || 0 || 'e'))

//let nome = 'thainan'
let nome = ''
console.log(nome || 'Desconhecido')