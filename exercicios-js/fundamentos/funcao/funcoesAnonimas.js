const soma = function(x, y){
    return x + y;
}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a,b));
}

imprimirResultado(2,2);
imprimirResultado(3,4, soma);
imprimirResultado(3, 4, function(x, y){
    return x - y;
});

imprimirResultado(3, 4, (X, Y) => X* Y);

const pessoa = {
    falar: function () {
        console.log('Opa');
    }
}

pessoa.falar();

