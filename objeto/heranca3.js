const pai = {
    nome: 'Pedro',
    corCabelo: 'preto'
}

//Essa forma já cria um objeto criando um prototype do objeto pai, ou seja, a herança.
const filha1 = Object.create(pai);
filha1.nome = 'Maria';
console.log(filha1.nome, filha1.corCabelo);

//Outra forma de criar um objeto com Object.create já passando a herança e outros atributos personalizáveis
const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
});

//não aceita a sobrescrita, conforme definido com a propriedade writable.
filha2.nome = 'Marcela';
console.log(filha2.corCabelo, filha2.nome);

//Mostrando as chaves dos objetos criados
console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

//Percorrendo os atributos dos objetos com a diretiva in, todos são mostrados, inclusive os que vem por herança
for(let key in filha2){
    console.log(key);
}

for (let key in filha1){
    console.log(key)
}

//Teste para verificar os atributos que pertecem ao objeto e os que vem por herança
for (let key in filha2){
    //A função hasOwnProperty verificar se o atributo é do proprio objeto
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`);
}