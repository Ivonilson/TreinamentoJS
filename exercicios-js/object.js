// um par de chaves é uma forma literal de se declarar objetos em JS
// os atributos dos objetos em JS podem ser criado dinamicamente, conforme os exemplos abaixo
const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 1252.52
//é possível criar a chave (identificador) com espaços entre as palavras, embora deve-se evitar essa prática.
prod1['Desconto legal'] = 25.00

console.log(prod1)

//outra forma de você criar um objeto e declarando e valorando os atributos
//também é possível criar um objeto dentro de outro objeto
const prod2 = {
    nome: 'João',
    sobrenome: 'da Silva',
    documentos: {
        cpf: 78787878787
    }
}

console.log(prod2)