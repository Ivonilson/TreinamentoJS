/**
 * O OBJETO EM JS é uma coleção de pares chave/valor
 */
const produto = new Object
produto.nome = 'Cadeira';
//inclusive na forma de declaração abaixo, a instância pode ter espaços no nome
produto['marca do produto'] = 'Genérica';
produto.preco = 220

console.log(produto)

//deletando uma estancia
delete produto.preco;
delete produto['marca do produto'];

console.log(produto)

//Objeto mais complexo
const carro = {
    modelo: 'A4',
    valor: 89000,
    //dentro do objeto carro podemo ter outro objeto como atributo que contém as sua propriedades específicas
    proprietario: {
        nome: 'Raul',
        idade: 50,
        //abaixo outro objeto dentro de um objeto que é parte de outro objeto
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
            }
        },   
        //abaixo um array de objetos que é um atributo o objeto carro
        condutores: [{
            nome: 'Junior',
            idade: 19,
        }, {
            nome: 'Ana',
            idade: 42
        }],
        //aqui temos ainda uma função como sendo atributo do objeto carro
        calcularValorSeguro: function(){
            // ...
        }
}

//uma força de acessar os atributos do objeto carro - Neste exemplo abaixo estamos acessadno o número do endereço e atribuindo o valor 1000 ao mesmo
carro.proprietario.endereco.numero = 1000

//outra forma de acessar é através da notação de colchetes, mesmo que o nome dos atributos não tenham sido definidos dessa forma
carro['proprietario']['endereco']['logradouro'] = 'Avenida Gigante';

console.log(carro)

//Quando você deleta um atributo, tudo que está embaixo na hieraquia do objeto que é um atributo, vai junto.
delete carro.condutores;
console.log(carro)

//Quando você tenta acessar um atributo que não existe em um objeto existe, não dá erro, mas sim retorna indefined para aquele atributo
console.log(carro.condutores)

//agora, tentar acessar propriedades de algo que está indefinido, dá erro.
console.log(carro.condutores.length)