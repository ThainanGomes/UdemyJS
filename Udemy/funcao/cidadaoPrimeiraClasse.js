//forma literal
function fun1(){

}

//armazenar em uma variável
const fun2 = function(){

}

//armazenar em array
const array = [function(a){ return a+1 }, fun2, fun1]

//armazenar em um atributo de um obj

const obj = {}
    obj.falar = function(){ return 'Opa' }

//Passar funcao como parâmetro
function run(fun){
    fun()    
}

//uma funcão pode retornar/conter uma função
function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}
soma(2,3)(4)