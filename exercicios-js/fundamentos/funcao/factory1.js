//Função factory é uma função que retorna um objeto. É um design pattern
//ex:
function CriarPessoa(){
    return {
        nome: 'Ivonilson',
        sobrenome: 'Cardoso'
    }
}

console.log(CriarPessoa());