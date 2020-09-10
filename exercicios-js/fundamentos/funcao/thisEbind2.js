function Pessoa(){
    this.idade = 0

    //utilizando uma constante para fazer referência ao this da função pessoa
    const self = this
    setInterval(function(){
        //para o exemplo com a constante, substitui-se o this pelo self, conforme abaixo
        self.idade++
        //this.idade++
        //para o exemplo com a constante, substitui-se o this pelo self, conforme abaixo
        console.log(self.idade)
        //console.log(this.idade)
        //a chamada do bind na função setInterval faz com que o this da função Pessoa seja reconhecido
    }/*.bind(this)*/, 1000)
}



new Pessoa
