const notas = [4, 7, 10, 9]

for(let i in notas ){
   // console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    peso: '50kg',
    idade: 30
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)    //nooooooooooossa mto mto bom! Percorrendo os atributos de um objeto ou array...
}
