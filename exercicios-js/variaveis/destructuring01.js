//Operador de desestruturação
//ex 01

const pessoa = {
    nome: 'Ana', 
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

//usando destructuring para extrair valores
const {nome, idade } = pessoa
//com as variaveis extraídas, agora é só exibir...
console.log(nome, idade)

//usando destructuring para extrair valores e atribuíndo a variáveis com o nome de sua preferência
const {nome: n, idade: i} = pessoa
console.log(n, i)

/*usando destructuring para extrair valores que não existem dentro do target e definindo valor default para umas delas caso
retorne undefined*/
const {sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado)

/**usando destructuring para extrair valores de uma coleção (objeto dentro de objetos, arrays dentros de objetos, etc) */
const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)