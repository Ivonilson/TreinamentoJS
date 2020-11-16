/**JSON é um dos formatos de dados mais utilizados hoje em dia para a interoperabilidade de sistemas*/

//Abaixo transformando um Objeto em JSON
const obj = {a: 1, b: 2, c: 3, soma () {return a + b + c}};
console.log(JSON.stringify(obj));

//Abaixo transformando um JSON em Objeto. Todo atributo no formato JSON deverá ser delimitado por aspas duplas.
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'));

//Transformando mais dados diferentes em JSON para Objeto
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d":{}, "e": [] }'));