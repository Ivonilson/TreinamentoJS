let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

//caracteres que se avaliados como booleanos pelo JS retornam true
console.log(!!3) // true - todos os números inteiros, com exeção do zero, são considerados true.
console.log(!!-1) // true - todos os números inteiros, com exeção do zero, são considerados true.
console.log(!!' ') // true - espaços vazios
console.log(!!'abc') // true - textos
console.log(!![]) // true - arrays vazios
console.log(!![1]) // true - arrays com valores
console.log(!!{}) // true - objetos literais
console.log(!!Infinity) // true - tipos infinitos