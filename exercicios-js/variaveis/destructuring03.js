function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const obj = {max: 50, min: 40};
console.log(rand(obj)); // usa os valores do objeto criado.
console.log(rand({min: 955})); // usa um dos valores padrão do parâmetro
console.log(rand({})); //usa o valor padrão do parãmetro
console.log(rand()); //erro