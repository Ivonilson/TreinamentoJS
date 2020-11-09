function MeuObjeto(){
    
}
//console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto;
const obj2 = new MeuObjeto;
console.log(obj1.__proto__ === obj2.__proto__);
console.log(MeuObjeto.prototype === obj1.__proto__);

//Todos os objetos que foram instanciados através da função Objeto MeuObjeto terão acesso aos atributos criados abaixo (herança)
MeuObjeto.prototype.nome = 'Anonimo';
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia! Meu nome é ${this.nome}`);
}
obj1.nome = 'Ivo';
obj1.falar();

//Neste momento está com a referência de herança vindo de Object.prototype
const obj3 = {

}

//Mudando a referência de herança do objeto para a função MeuObjeto
obj3.__proto__ = MeuObjeto.prototype;
obj3.falar();

//Resumo
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype);
console.log(MeuObjeto.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);