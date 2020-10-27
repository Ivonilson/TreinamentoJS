/**
 * Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos
 */
function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao){
    let juros = capitalInicial * taxaJuros * tempoAplicacao;
    let montante = capitalInicial + (capitalInicial * (juros/capitalInicial));
    return montante;
}
console.log("Montante Juros Simples: " + jurosSimples(250000, 0.0699 , 20));

function jurosCompostos(capitalInicial, taxaJuros, tempoAplicacao){
    let montante = capitalInicial* (1 + taxaJuros) ** tempoAplicacao;
    return montante;
}
console.log("Montante Juros Compostos: " + jurosCompostos(1400, 0.07 , 2));