/**
 * O MAP serve para mapear um array fazendo uma transformação dos dados para outro array. Esse mapeamento
 * sempre resultará em outro array transformado, mas sempre do mesmo tamanho, ou seja, se o primeiro array conter
 * 06 elementos, o array transformado também deverá conter 06 elementos. Isso é regra.
 */

 /**
  * O propósito da aplicação do map no array de exemplo abaixo é dobrar (transformar) todos os valores dos elementos.
  */
const nums = [1, 2, 3, 4, 5];

/**
 * a função map pode receber 03 parâmetros, sendo: o valor atual do elemento, o indice e o array completo. Mas 
 * não é obrigatório passar os três elementos de uma, sendo opcional o uso do parâmetro que se deseja naquele momento.
 */

 let resultado = nums.map(function(e){
     return e * 2;
 });
/**
 * retornando, conforme a regra, uma novo array com os resultados esperados.
 */
 console.log(resultado);

 /**
  * Abaixo foram criadas três funções arrow que serão passadas como parâmetro para a função map de array
  */
 const soma10 = e => e + 10;
 const triplo = e => e * 3;
 const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;

 /**
  * Chamando os maps encadeados para aplicar as funções criadas acima. Como um map gera outro array transformando,
  * então é possível as chamadas encadeadas.
  */
 resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
 console.log(resultado);

