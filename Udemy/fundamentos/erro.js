function tratarErro(erro){
    //throw new Error('erro de processamento na funcao')
    //throw 10
    throw {
        nome: erro.name,
        msg: erro.msg,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e){
        tratarErro(e)
    } finally{
        console.log('final')
    }
}

var objeto = {
    name : 'Roberto'
}
imprimirNomeGritado(objeto)