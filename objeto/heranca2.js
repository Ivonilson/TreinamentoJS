//cadeia de protótipos
const avo = {attr1: 'A', attr2: 'E'};
//abaixo a demonstração de como a referenciar o objeto avo como herança (prototype) para o objeto filho (pai)
const pai = { __proto__: avo, attr2: 'B', attr3: 'D'};
const filho = {__proto__: pai, attr3: 'C'};

//chamando um atributo com utilização de herança (protótipo)
console.log(filho.attr1);

//caso seja chamado um atributo que não existe dentro da hierarquia de herança, o valor retornado será undefined
console.log(filho.attr0);

//Se for criado um atributo junto ao Objetc (objeto primário), conforme exemplo abaixo, o valor é retornado
Object.prototype.attr0 = 'Z'; //não é recomendado criar atributos nesse Objeto primário. Aqui só foi para fins didáticos
/**Note que agora o valor retornado para attr0 não é mais nulo, pois a busca pela herança percorre todas as hierarquias,
 * até chegar na última, que seria o Object. Neste caso ainda, quando solicitado um atributo, o mesmo será buscado na herança (protótipo) direta
 * preferencialmente, não encontrando, será buscado nas herança indiretas, obecendo sempre a hierarquia, até chega na última camada, que é Object.
 */
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta;
        } else {
            this.velAtual = this.velMax;
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}km/h`;
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // quando for realizada a herança (prototype), ocorrerá o shadowing (sombreamento)
}

const volvo = {
    modelo: 'VOLVO',
    status(){
        return `${this.modelo} : ${super.status()}`;
    }
}

/**Estabelecendo a relação de protótipo (herança) de forma diferente da explicada anteriormente, neste 
 * caso será utilizada uma função.
 */
Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

//testando
volvo.acelerarMais(100);
console.log(volvo.status());

//outro teste
volvo.acelerarMais(300);
console.log(volvo.status());

//mais um - Neste caso, a velocidade máxima considerada será a definida no próprio objeto.
ferrari.acelerarMais(300);
console.log(ferrari.status());

//tentando ultrapassar a velocidade máxima da ferrari
ferrari.acelerarMais(350);
//o que não é possível, pois existe uma condição de velocidade máxima dentro do próprio objeto que é considerada no if/else da função herdada.
console.log(ferrari.status());

