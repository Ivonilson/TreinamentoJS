const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

/**
 * A função forEach espera 02 parâmetros, sendo o segundo o índice do array
 */
aprovados.forEach(function(nome, indice){
    console.log(`${++indice}) ${nome}`);
});

/**
 * Percorrendo o laço com arrow function, no caso de precisar apenas do nome
 */
aprovados.forEach(nome => console.log(nome));