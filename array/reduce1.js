/**
 * a função reduce serve para acumular operações ou modificações que serão realizadas/solicitadas a cada
 * iteração da chamada callback. Como parâmetro, pode-se definir um valor qualquer ou, caso não seja definido um valor, a chamada
 * callback pegará os dois primeiros índices como parâmetros, sendo o primeiro indice (0) o acumulador e o segundo índice (1) o
 * valor/propriedade que será sofrerá a ação e será adicionado ao acumulador.
 * */

 const alunos = [
     {nome: 'João', nota: 7.3, bolsita: false},
     {nome: 'Maria', nota: 9.2, bolsista: true},
     {nome: 'Pedro', nota: 9.8, bolsista: false},
     {nome: 'Ana', nota: 8.7, bolsista: true}
 ]

 const resultado = alunos.map(a => a.nota)

