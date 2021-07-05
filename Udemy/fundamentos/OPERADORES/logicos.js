function compras(terca, quinta){
    const comprarSorvete = terca || quinta
    const comprarTvCinq = terca && quinta
    //const comprarTvTrinta = !!(terca ^ quinta) //bitwise ou exclusivo
    const comprarTvTrinta = terca != quinta //diferente... (mesmo ideia do 'ou exclusivo')
    const manterSaudavel = !comprarSorvete 

    return {comprarSorvete, comprarTvCinq, comprarTvTrinta, manterSaudavel}
    //internamente tá retornando o seguinte: 
    /*
    return {comprarSorvete: comprarSorvete,
        comprarTvCinq: comprarTvCinq, 
        comprarTvTrinta: comprarTvTrinta,
        manterSaudavel: manterSaudavel}
    */
}
console.log('--',compras(true, true))
console.log('--',compras(false, true))
console.log('--',compras(false, false))