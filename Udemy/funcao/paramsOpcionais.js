function area(larg, alt){
    const area = larg * alt

    if(area > 20){
        console.log(`Valor acima do permitido: ${area}`)
    }else{
        return area
    }
}

console.log(area(2, 11))