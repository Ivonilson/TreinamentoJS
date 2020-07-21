function rand([min = 0, max = 1000]){
    if(min > max) [min, max] = [max, min];
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand([50,40]));//utiliza os valores passados no parâmetro
console.log(rand([]));// utiliza os valores definidos por default nos parâmetros
console.log(rand([992]));//utiliza uns dos valores passados no parâmetro por default
console.log(rand());//erro