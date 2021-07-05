let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1 //num-- tem maior prioridade do que somar 
console.log(num1)

console.log(++num1 === num2--) //só é decrementado depois