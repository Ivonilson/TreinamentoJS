const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

/**A utilização da referência __proto__ retorna quem é o ancestral (na escala de herança) do objeto referenciado  */
//no exemplo abaixo é retornado que o protótipo do objeto ferrari é um objeto vazio, porém existente.
console.log(ferrari.__proto__);
//como podemos confirmar abaixo, fazendo a comparação de igualdade estrita
console.log(ferrari.__proto__ === Object.prototype);
//Confirmando o mesmo teste com o outro objeto
console.log(volvo.__proto__ === Object.prototype);
//O exemplo abaixo atesta que Object.prototype é o objeto de protótipo primário, não pré-existindo outro objeto prótotipo com hierarquia superior a este
//aqui verifica se o objeto protótipo tem algum outro objeto protótipo antes dele. O retorno é indefined, por não existe esse protótipo anterior.
console.log(Object.prototype.__proto);

//Verificando o protótipo de um objeto função e revisando o conceito de protótipo primário
function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype);