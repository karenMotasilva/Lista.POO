class Cliente {
    nome
    cpf
    dataNascimento
    endereco
    email 
    ocupacao 
    rendaAnual 
    nivelDeEscolaridade

    constructor (nome, cpf, dataNascimento, endereco, email, ocupacao, rendaAnual, nivelDeEscolaridade) {
        this.nome = nome
        this.cpf = cpf
        this.dataNascimento = dataNascimento
        this.Endereço = endereco
        this.email= email
        this.ocupacao = ocupacao
        this.rendaAnual = rendaAnual
        this.nívelDeEscolaridade =nivelDeEscolaridade

    }
    relatorioDoCliente(){
        return`Relatorio Do Cliente \n Nome: ${this.nome} \n CPF: ${this.cpf}\n Data de Nascimento ${this.dataNascimento}
        Endereço: ${this.endereco}\n E-mail: ${this.email} \n Ocupação: ${this.ocupacao} \n Renda: ${this.rendaAnual}
        Nivel de Escolaridade: ${this.nivelDeEscolaridade}`
    }
}
let cliente = new Cliente("nilson",'01230','07-05-1993',"rua viva","nilson@nilson","dev","2500","superior" )
console.log(cliente)