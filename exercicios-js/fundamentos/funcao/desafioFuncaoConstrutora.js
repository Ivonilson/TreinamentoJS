
// O desafio é transformar o código da classe abaixo para uma função construtora
/*class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`);
    }
}*/

//factory
function Pessoa(nome){
    this.nome = nome;

    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`);
    }
}

p1 = new Pessoa('Paulo');
p1.falar();

