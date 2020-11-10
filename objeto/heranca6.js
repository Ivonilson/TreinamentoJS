function Aula(nome, videoID){
    this.nome = nome;
    this.videoID = videoID;
}

const aula1 = new Aula('Bem vindo', 123);
const aula2 = new Aula('Até Breve', 456);
console.log(aula1, aula2);

//Simulando o operar new
function novo (f, ...params){
    const obj = {};
    obj.__proto__ = f.prototype;
    f.apply(obj, params);
    return obj;
}

//testando a simulação do new
const aula3 = novo(Aula, 'Bem Vindo para aula 3', 565);
const aula4 = novo(Aula, 'Bem-Vinda para aula 4', 871);
//resultado da simulação, obtendo-se o mesmo resultado de quando se faz com o operador new
console.log(aula3, aula4);