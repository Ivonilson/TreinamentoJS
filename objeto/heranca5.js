//O que é uma string dentro do JS. Veja abaixo o retorno com typeof
console.log(typeof String);

//O que é um array dentro do JS. Veja abaixo o retorno com typeof
console.log(typeof Array);

//O que é um objeto dentro do JS. Veja abaixo o retorno com typeof
console.log(typeof Object)

/**Toda função tem um atributo chamado prototype */

//O exemplo abaixo adiciona um método na String através do prototype
String.prototype.reverse = function (){
    //o método reverse existe no JS para arrays (que nesse exemplo veio do split())
    return this.split('').reverse().join('');
}
console.log('Marcos Antonio'.reverse());

//Adicionando ao Array via prototype um método para pegar o primeiro elemento
Array.prototype.first = function (){
    return this[0];
}
console.log([1, 2, 3, 4, 5].first());

//Sobrescrevendo via prototype funções que já existem para String. Não é recomendo fazer isso. Aqui apenas para fins didáticos
String.prototype.toString = function (){
    return 'Lascou tudo...';
}
//Efeito colateral gerado por ter alterado a função nativa do toString()
console.log('Marcos'.reverse());