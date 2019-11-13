const escola = "Cod3r"

console.log(escola.charAt(4)) //retorna da string conforme especificação do índice.
console.log(escola.charAt(8)) //como extrapolou o último índice existente, vai retornar vazio. Não dará erro.

console.log(escola.charCodeAt(3)) //retorna o valor do caractere referente ao índice da string com sua representação na tabela UNICODE ASCII
console.log(escola.indexOf('r')) //retorna o primeiro índice ao qual o caractere está posicionado em relação a string alvo.

console.log(escola.substring(1)) //indica que irá retornar todos os caracteres da string a partir do índice informado.
console.log(escola.substring(0, 3)) //indica que irá retornar todos os caracteres da string a partir do intervalo de índices informados não mostrando o último.

console.log('Escola '.concat(escola).concat("!")) //função para concatenação.

console.log(escola.replace(3, 'e')) //função utilização para substituir caracteres em uma string.

console.log('IVONILSON,REGINA,AGNES'.split(',')) //função que converte uma string em um array, utilizando o parâmetro para identificar o ponto de cisão.



