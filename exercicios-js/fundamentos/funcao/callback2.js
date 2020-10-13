const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

//gerar um novo array a partir desse acima, considerando somentes as notas menores do que 7

//1ª abordagem: sem callback
const notasBaixas1 = []
for (let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i]);
    }
}

console.log(notasBaixas1);


//2ª abordagem: usando callback
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
});

console.log(notasBaixas2);

//usando arrow - otimizando
const notasbaixas3 = notas.filter(nota => nota < 7)
console.log(notasbaixas3);