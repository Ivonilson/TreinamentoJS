//função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

//chamando a função
imprimirSoma(2,3)

//mesmo tendo dois parâmetros na função, podemos passar apenas um se for o caso, isso resultará em um NaN
imprimirSoma(2)

//caso seja passado mais parâmetro que o solicitado na função, apenas os que foram passados na função serão considerados, sem dar erro.
imprimirSoma(2, 2, 5, 6, 7, 8)

//mesmo chamando a função sem passar qualquer parâmetro, ainda assim não dará erro, apenas será retornado um NaN
imprimirSoma()

//função com retorno, sendo um dos parâmetros inicializado com um valor default
function soma(a, b = 1){
    return a + b
}

//chamando a função com retorno
console.log(soma(2,3))

//chamando a função e passando apenas o primeiro parâmetro
console.log(soma(2))

//chamando a função com retorno sem passar nenhum parâmetro... isso retornará um NaN, pois o primeiro parâmetro não tem valor default
console.log(soma())

//armazenando uma função anônima em uma variável
const mostrarSoma = function (a, b){
    console.log(a + b)
}

//chamando a função armazenada na variável
mostrarSoma(2, 8)

//declarando uma função arrow (forma mais otimizada de declaração de função)
const soma1 = (a, b) => {
    return a + b
}

//chamando a função arrow
console.log(soma1(4,4))

//arrow function com retorno implícito... Nessa caso utiliza-se para funções que possuem apenas uma única linha, sendo despensado o uso das chaves...
const subtracao = (a, b) => a - b

//chamando a função de uma única linha... mais otimizada ainda
console.log(subtracao(5,4))

//arrow function com apenas um parâmetro...mais otimizada de todas
const imprimir1 = a => a * 2

//chamando a função arrow com apenas um parâmetro e com retorno implicito
console.log(imprimir1(10))

