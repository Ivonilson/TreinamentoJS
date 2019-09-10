//formas de atribuir números
const peso1 = 1.0
const peso2 = Number('2.0')
const peso3 = 'a'

console.log(peso1, peso2)
console.log(typeof(peso1))
console.log(typeof(peso3))

console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)

//utilizando a função toFixed() é possível definir a quantidade de casas decimais que se deseja apresentar
console.log(media.toFixed(2))

//convertendo um valor númerico em uma string
console.log(media.toString())
console.log(typeof(media.toString()))