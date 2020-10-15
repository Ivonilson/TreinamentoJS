//Closure é o escopo criado no momento da declaração da função e a manipulação das variáveis externas (no contexo)
const x = 'Global';

function fora(){
    const x = 'Local';
    function dentro(){
        return x;
    }
    return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao());