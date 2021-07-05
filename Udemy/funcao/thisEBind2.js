function pessoa(){
    this.idade = 0

    const self = this //n importa quem chame, o self sempre será o mesmo 
    //(porque já recebeu o 'endereço de memoria' atual do this)
    
    setInterval(function (){
        self.idade++
        //console.log(this.idade)
        console.log(self.idade)
    }/*.bind(this)*/, 1000) //mil milisegundo (1 s)
}

new pessoa