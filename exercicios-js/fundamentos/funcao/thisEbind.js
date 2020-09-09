const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar();

const falar = pessoa.falar

//aqui gera indefined, pois a constante falar não tem acesso ao this que é da constante pessoa
falar()

//para resolver o acesso ao this que está em outro contexto, usa-se a função bind()
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()