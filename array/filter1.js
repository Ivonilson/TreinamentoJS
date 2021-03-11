/**
 * a função filter serve para filtrar informações em um array, retornando o resultado do filtro em um novo array, 
 * ou seja, o array original não sofre alterações.
 */

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const frageis = produto => produto.fragil == true;
const caros = produto => produto.preco >= 500; 

console.log(produtos.filter(caros).filter(frageis));