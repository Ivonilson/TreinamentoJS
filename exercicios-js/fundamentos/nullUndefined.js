let valor // não inicializada
console.log(valor)
//console.log(valor2) //gera um erro
valor = null
console.log(valor) //nulo é ausência de valor, o que é diferente de indefined (não inicializada)
//console.log(valor.toString()) //gera um erro - não pode ler propriedade toString de NULL
const produto = {}
console.log(produto.preco) //não gera erro - Gera uma propriedade com valor indefinido
//console.log(produto.preco.) //aqui gera erro, pois não tem como pegar uma propriedade de algo que está indefinido ou nulo
console.log(produto)

produto.preco = 3.50
console.log(produto.preco)

produto.preco = undefined //evite atribuir o valor indefined às variáveis
console.log(produto.preco)
console.log(!!produto.preco) //solicitando o retorno de um tipo boolean

delete produto.preco //eliminando o atributo de um objeto
console.log(produto.preco) //mostra um objeto com o atributo indefinido

produto.preco = null //é uma forma de dizer que o produto está sem preço
console.log(produto.preco)

console.log(!!produto.preco) //convertendo o retorno do valor para um boolean
console.log(produto)
