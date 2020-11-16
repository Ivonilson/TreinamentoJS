/**Object.preventExtensions - Este método não permite que sejam acrescentados novo atributos ao objeto. Permite exclusão e alteração, mas não 
 * inclusão
 */
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'Promoção'
});
//testando se o objeto criado é extensível
console.log('Extensivel:', Object.isExtensible(produto));

//tentando acrescentar mais um atributo ao objeto produto
produto.descricao = 'Borracha escolar branca';
//retorna indefined, pois não é permitido acrescentar novos atributos
console.log(produto.descricao);
//lendo o objeto
console.log(produto);
//No entanto, é permitido excluir atributos em objetos com preventExtensions
delete produto.tag;
//fazendo a leitura do objeto para verificar se o atributo foi excluído
console.log(produto);

/*Object.seal - "Selar" - com  seal não é possível inclusão ou exclusão de atributos, no entanto, é possível 
alterar as propriedades (valores) dos atributos*/
const pessoa = {nome: 'Juliana', idade: 35};
Object.seal(pessoa);
//verificar se o objeto está selado.
console.log('Selado', Object.isSealed(pessoa));

//não surtirá efeito, pois o objeto está selado e não permite acrescentar atributos
pessoa.sobrenome = 'Silva';
//não surtirá efeito, pois o objeto está selado e não permite exclusões
delete pessoa.nome;
//surtirá efeito, pois é permitido alterar a propriedade (valor) de um objeto selado.
pessoa.idade = 39;
console.log(pessoa);

//Object.freeze - com frezze não é possível incluir e excluir propriedades e tampouco alterar as propriedades (valores) de um objeto
//Já foram realizados exemplos com o mesmo em aulas anteriores.
