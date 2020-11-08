const sequencia = {
    _valor: 1, //convenção que diz que pretende-se o uso privado para esta variável (iniciando com _)
    get valor (){
        return this._valor++;
    },
    set valor(valor) {
        if(valor > this._valor){
            this._valor = valor;
        }
    }
}

//acessando através do método get e set
console.log(sequencia.valor, sequencia.valor);

sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor);

//tentando atribuir um valor que está contrário a regra estabelecida no if do set. Perceba que a tentativa de atribuição será ignorada
sequencia.valor = 900;
console.log(sequencia.valor, sequencia.valor);