const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const frageis = produto => produto.fragil == true;
const caros = produto => produto.preco > 1000; 

console.log(produtos.filter(caros).filter(frageis));