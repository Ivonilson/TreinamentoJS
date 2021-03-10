const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];

//retorna os elementos conforme o intervalo informado nos parâmetros (retorna inclusive o primeiro, mas o último não retorna)
const algunsPilotos = pilotos.slice(1, 3);
console.log(algunsPilotos);

//Se for passado apenas 01 parâmetro, será retornando os elementos a partir dele, inclusive ele.
const outrosPilotos = pilotos.slice(2);
console.log(outrosPilotos);