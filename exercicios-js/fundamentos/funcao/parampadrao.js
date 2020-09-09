//Estratégia 1 para gerar valor padrão no parâmetro da função
function soma1 (a, b, c) {
    a = a || 1 
    b = b || 1
    c = c || 1
    return a + b + c
}

//vai ter um comportamento normal aqui
console.log(soma1())

//aqui vai ter um efeito colateral, pois ele interpreta o 0 (zero) como falso, então vai para o valor da condição
console.log(soma1(0,0,0))

//continua o efeito colateral aqui
console.log(soma1(0,1,1))

//estratégia 2, 3 e 4 para gerar valor padrão para o parâmetro da função
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(0,0,'x'))

//usando a forma de definir o valor padrão com ECMA 2015 (ES15)
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3(1))