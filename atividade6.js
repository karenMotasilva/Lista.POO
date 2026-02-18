class Cliente {
    #nome
    #cpf
    #dataNascimento
    #endereco
    #email 
    #ocupacao 
    #rendaAnual 
    #nivelDeEscolaridade

    constructor (nome, cpf, dataNascimento, endereco, email, ocupacao, rendaAnual, nivelDeEscolaridade) {
        this.#nome = nome
        this.#cpf = cpf
        this.#dataNascimento = dataNascimento
        this.#endereco = endereco
        this.#email= email
        this.#ocupacao = ocupacao
        this.#rendaAnual = rendaAnual
        this.#nivelDeEscolaridade =nivelDeEscolaridade

    }
    get nome(){
        return`Nome : ${this.#nome}`
    }
    get cpf (){
        return `CPF: ${this.#cpf}`
    }
    get  dataNascimento (){
        return `Data de Nascimento: ${this.#dataNascimento}`
    }
     get  endereco (){
        return `Endereço: ${this.#endereco}`
    }
    get  email (){
        return `Email: ${this.#email}`
    }
     get  ocupacao (){
        return `Oculpação: ${this.#ocupacao}`
    }
     get  rendaAnual (){
        return `Renda Anual${this.#rendaAnual}`
    } 
    get nivelDeEscolaridade  (){
        return `Nivel: ${this.#nivelDeEscolaridade}`
    }
    set nome (novoNome){
        this.#nome(novoNome)
    }
    set cpf (novocpf){
        this.#cpf (novocpf)
    }
    set  dataNascimento(novaData){
        this.#dataNascimento (novaData)
    }
    set  endereco(novoEndereco){
        this.#endereco(novoEndereco)
    }
    set email (novoEmail){
        this.#email (novoEmail)
    }
    set ocupacao (novaOcupacao){
        this.#ocupacao(novaOcupacao)
    }
    set  rendaAnual(novaRenda){
        this.#rendaAnual (novaRenda)
    }
    set  nivelDeEscolaridade(novoNivel){
        this.#nivelDeEscolaridade(novoNivel)
    }

    relatorioDoCliente(){
        return`Relatorio Do Cliente \nNome: ${this.#nome} \nCPF: ${this.#cpf}\nData de Nascimento ${this.#dataNascimento}
Endereço: ${this.#endereco}\nE-mail: ${this.#email} \nOcupação: ${this.#ocupacao} \nRenda: ${this.#rendaAnual}
Nivel de Escolaridade: ${this.#nivelDeEscolaridade}`
    }
}
let cliente = new Cliente("nilson",'01230','07-05-1993',"rua viva","nilson@nilson","dev","2500","superior" )
console.log(cliente.relatorioDoCliente())
