//forma literal
function fun1() {}  // pode ou não ter um retorno. Quando não tem retorno explícito, a função retorna undefined implicitamente.

//armazenando em uma constante
const fun2 = function () {} //armazenando a função anônima em uma constante

// armazenando dentro de array
const array = [function (a, b) { return a + b }, fun1, fun2] // passando funções já declaradas e declarando função como item de um array

//chamando o array acima que recebeu as funções como parâmetro
console.log(array[0](2,3));

//armazenando funções dentro de atributos de objetos
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

//passando uma função como parâmetro para outra função

function run(fun){
    fun()
}

//Uma função pode retornar/conter outra função
function soma(a, b) {
    return function(c) {
        console.log(a+b+c)
    }
}

soma(1,1)(2);


