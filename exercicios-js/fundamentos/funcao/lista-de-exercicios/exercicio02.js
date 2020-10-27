/*Exercicio 02
Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo)
*/
function verificaTriangulo(lado1, lado2, lado3){
    let l1 = parseInt(lado1);
    let l2 = parseInt(lado2);
    let l3 = parseInt(lado3);
    let resultado = "";

    if(l1 === l2 && l1 === l3 && l2 === l3) {
        resultado = "Triângulo Equilátero";
    } else if (l1 === l2 || l1 === l3 || l2 === l3){
        resultado = "Triângulo Isósceles";
    } else {
        resultado = "Triângulo Escaleno";
    }
    return console.log(resultado);
}

verificaTriangulo(5,5,5);