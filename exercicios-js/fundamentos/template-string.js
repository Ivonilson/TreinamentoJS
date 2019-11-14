//o template string serve para concatenar strints, considerando as quebras de linhas e a formatação.
const nome = 'Ivonilson'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

//outro exemplo de utilização
console.log(`1 + 1 = ${1 + 1}`)