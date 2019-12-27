//as declarações de variáveis com var (exceto funções) deixa a visibilidade da mesma global. 
{ { { { var sera = 'Será ?' } } } }

//console.log(sera)

function teste(){
    var local = 123
}

//a chamada abaixo vai dar erro porque a variável está sendo chamada fora do seu escopo
//console.log(local)

//variável declarada globalmente
var numero = 1

{
    var numero = 2
    //embora esteja dentro das chaves, esta variável foi declarada (redeclarada, pois existe uma com mesmo nome) globalmente e estará acessível em qualquer ponto do arquivo
    console.log('dentro = ', numero)
}
//a chamada abaixo mostrará o valor sobrescrito da variável, ocorrido dentro da redeclaração das chaves.
console.log('fora =', numero)


