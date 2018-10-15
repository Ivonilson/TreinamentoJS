/*O código Js se organiza em sentença de código, ou seja, um único comando JS que poderá ocupar
* mais de uma linha e em sblocos de código que são vários comandos JS agrupados. A sentença ou sentenças 
* de código podem ou não terminar em ; (ponto e vírgula)
*/
//abaixo o exemplo de uma sentença de código JS
console.log('Esta é uma sentença de código')

//abaixo outro exemplo de uma sentença de código JS
console.log(
    'esta é uma sentença de código que ocupa mais de uma linha'
)

/*os blocos nada mais são do que sentenças de código agrupadas. As sentenças de códigos que formam 
* um bloco são delimitadas por {} (chaves), conforme o exemplo abaixo:
*/

//bloco de código
{
    // aqui é um bloco dentro de outro
    {
        //sentença de código
        console.log("Olá"); // este utilizou ; (ponto e vírgula que é opcional) e aspas duplas para string
        //outra sentença de código
        console.log('Mundo') // este não utilizou ; (ponto e vírgula) e aspas simples para string
    }
    
}