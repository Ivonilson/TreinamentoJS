const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

//pegando todas as chaves de objeto. Sabemos que um objeto é composto da notação chave/valor
console.log(Object.keys(pessoa));

//pegando apenas os valores dos atributos de um objeto
console.log(Object.values(pessoa));

//Retornando uma lista (array com os sub arrays com chave e valor) contendo todos os atributos e a propriedades dos atributos de um objeto
console.log(Object.entries(pessoa));

//utilizando o foreach para percorrer os dados retornados pela função de objeto entries
Object.entries(pessoa).forEach(e => {
    //usando template string para visualizar
    console.log(`${e[0]}: ${e[1]}`);
});

//utilizando o foreach para percorrer os dados retornados pela função de objeto entries com um operador destructuring
Object.entries(pessoa).forEach(([nome, valor]) => {
    console.log(`${nome}: ${valor}`);
});

//definindo uma propriedade personalizada de um objeto
Object.defineProperty(pessoa, 'dataNascimento', {
    //Objeto passível de ser listado? true ou false
    enumerable: false,
    //Aceita modificação do valor do atributo? true ou false
    writable: false,
    value: '01/01/2019'
});
//fazendo um teste abaixo para verificar se será possível alterar a data de nascimento, o que seria contrário ao definido na propriedade personalizada
pessoa.dataNascimento = '01/01/2017';
//veja que o resultado mostra o valor definido na propriedade personalizada, ou seja, o mesmo não foi alterado. Esse bloqueio não gera erro.
console.log(pessoa.dataNascimento);

//Verificando se a propriedade personalizada do objeto será listada com Object.keys - Perceba que não será lista com os demais atributos do objeto, devido estar marcado false o enumerable.
console.log(Object.keys(pessoa));

//A função abaixo surgiu junto com o ECMA2015
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
/**Essa função concatena os atributos de outros objetos no objeto destino (primeiro parâmetro da função) o qual ficará armazenado em um novo objeto. 
 * Caso haja objetos com o mesmo nome de atributo, o valor será sobrescrito pelo atributo do objeto lido por último */
const obj = Object.assign(dest, o1, o2);
console.log(obj);

//a função de objeto abaixo, congela o mesmo, não permitindo alterações, inclusões ou exclusão de atributos e propriedades. No entanto, não gera erros quando se tenta alterar, incluir ou deletar
Object.freeze(obj);
obj.c = 1234
console.log(obj.c);




    
