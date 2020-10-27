/*Exercicio 01
Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores
*/
function operacoes(valor1, valor2){
    let soma = valor1 + valor2;
    let subtracao = valor1 - valor2;
    let multiplicacao = valor1 * valor2;
    let divisao = valor1 / valor2;

    return console.log("\nSoma: " + soma + "\nSubtração: " + subtracao + "\nMultiplicação: " + multiplicacao + "\nDivisão: " + divisao);
}
operacoes(8, 2);