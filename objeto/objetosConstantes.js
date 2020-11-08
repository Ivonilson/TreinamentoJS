/*a declaração da constante abaixo reserva um espaço de memória que aponta para o atributo nome do objeto pessoa
Neste caso, é possível alterar o valor da propriedade. Só não poderá ser declaração o local de memória do atributo, conforme o próximo exemplo.
*/
const pessoa = {nome: 'João'};
//o valor da propriedade do atributo do objeto pode ser alterado
pessoa.nome = 'Marcos';
console.log(pessoa.nome)

/**
 * No exemplo abaixo um erro será gerado, pois está havendo uma tentativa de redeclarar o local de memória reservado ao atributo do objeto, até mesmo pode se considerar uma 
 * redeclaração do próprio atributo, o que não é permitido por se tratar de uma constante.
 */
//pessoa = {nome: 'Ana'}
//vai gerar um erro na saída, devido a tentativa de redeclação do local de memória do atribudo que já havia sido declarado anteriormente.
//console.log(pessoa.nome)

/**
 * Uma forma de não permitir a alteração da propriedade de um atributo de objeto constante é utlizar a função freeze, que irá congelar o valor do atributo do objeto.
 * Essa congelamento não gera erro quando houver uma tentativa de alteração do valor da propriedade. Inclusive o método freeze fazer o congelamento total do objeto, ou seja, não permite
 * realizar qualquer tipo de alteração, adição ou exclusão de atributos e suas propriedades.
 */
Object.freeze(pessoa)
//O exemplo abaixo tenta fazer a alteração da propriedade do atributo nome do objeto pessoa. O valor não será alterado e não retornará nenhum tipo de erro.
pessoa.nome = 'Antonio';
//Retorna João, o que foi o valor declarado quando criação do atributo do objeto.
console.log(pessoa.nome);

/**A forma abaixo ilustra uma opção de já se criar um objeto com seus atributos e propriedades congeladas com a utilização da função freeze */
const pessoaConstante = Object.freeze({nome: 'Paulo'});
