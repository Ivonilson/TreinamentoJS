/* hoisting significa içamento. Mesmo tendo chamado o console.log antes da declaração não vai dar erro,
pois o JS automaticamente joga a declaração da variável para cima e com o valor vazio (undefined e não not defined)
O efeito de hoisting não afeta variáveis declaradas com let
*/
console.log('a = ', a)
var a = 2