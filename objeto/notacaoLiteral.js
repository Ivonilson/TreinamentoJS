const a = 1;
const b = 2;
const c = 3

/**Nas versões anteriores ao ECMA2015 era necessária criar os atributos do objeto dessa forma duplicada, por assim dizer, conforme abaixo: */
const obj1 = {a: a, b: b, c: c}

/**Já a partir do ECMA2015, isso não é mais necessário, conforme abaixo, onde o resultado é o mesmo para as duas situação */
const obj2 = {a, b, c};

//mostrando os resultados das duas formas
console.log(obj1);
console.log(obj2);

/**Outra forma de criar um objeto com seus atributos */
const nomeAttr = 'nota';
const valorAttr = 7.87

//uma forma
const obj3 = {};
obj3[nomeAttr] = valorAttr
console.log(obj3)

//outra forma
const obj4 = {[nomeAttr] : valorAttr};
console.log(obj4);

//Formas de declaração funções como atributos de um objeto
const obj5 = {
    funcao1: function (){
        // ...
    },
    funcao2() {
        // ...
    }
}
console.log(obj5);



