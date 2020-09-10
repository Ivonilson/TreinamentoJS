//A arrow function foi introduzida a partir do ECMA 2015 OU ES6

//funcção normal abaixo
let dobro = function (a){
    return 2 * a
}

//função reescrita usando arrow
dobro = (a) => {
    return 2 * a
}

//função reescrita com mais redução ainda, se for passado apenas um parâmetro, com retorno implicito
dobro = a => 2 * a

//chamada função normal
console.log(dobro(4))

//chamada função arrow um pouco reduzida
console.log(dobro(5))

//chamada função arrow mais reduzida ainda
console.log(dobro(6))

//outro exemplo de arrow funcion
//função normal
let ola = function (){
    return 'Olá'
}

//refatorando para arrow function
//ola = () => 'Olá'

//função com um único parâmetro também pode ser escrita da forma abaixo
ola = _ => 'ola'

console.log(ola())

