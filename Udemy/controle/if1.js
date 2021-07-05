function soBoaNoticia(nota){
    if (nota >= 7){
        console.log('Você passou com:', nota)
    }
}
soBoaNoticia(7)
soBoaNoticia(5)

function seForVerdadeEuFalo(valor){
    if(valor){  
        console.log('É verdade...', valor)
    }
}
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo( [] )
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo( {} )