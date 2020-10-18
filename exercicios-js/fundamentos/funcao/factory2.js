function criarProduto(nome, preco){
    return {
        nome: nome,
        preco: preco,
        desconto: 0.10
    }
}

console.log(criarProduto("Camisa", 80));
console.log(criarProduto("Tênis", 200));