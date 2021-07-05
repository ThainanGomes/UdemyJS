const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let x in nums){
    if(x == 5)
        break //desvia o fluxo da aplicação de: For, While e Switch
    console.log(`Indice: ${x} = elemento: ${nums[x]}`)
}

for( let y in nums){
    if(y == 5)
        continue //desvia o fluxo interrompe a repetição e vai pra próxima
        console.log(`Indice: ${y} = elemento: ${nums[y]}`)
}

externo: for(a in nums){
    for(b in nums){
        if(a == 2 && b == 3)
            break
        console.log(`combinacao: ${nums[a]} - ${nums[b]}`)
    }
}