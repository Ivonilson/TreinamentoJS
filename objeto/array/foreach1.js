const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

/**
 * A função forEach espera 02 parâmetros, sendo o segundo o índice do array
 * Qualquer nome que for colocado para o segundo parâmetro dentro deste contexto de callback do 
 * foreach vai assumir o valor de índice do array começando em zero.
 */

aprovados.forEach(function(nome, indice){
    console.log(`${++indice}) ${nome}`);
});

/**
 * Percorrendo o laço com arrow function, no caso de precisar apenas do nome
 */
aprovados.forEach(nome => console.log(nome));


/**
 * Outra forma de exibição, armazenando em variáveis
 */
const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados);

