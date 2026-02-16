class contaCorrente {
    #numeroConta
    #saldo
    #limite
    #historico

    constructor(numeroConta, saldoInicial, limite) {
        if (saldoInicial <= 0) {
            this.#saldo = 0
            console.log("saldo insuficiente")
        } else {
            this.#saldo = saldoInicial
        }
        if (limite < 0) {
            this.#limite = 0
            console.log("limite insuficiente")
        } else {
            this.#limite = limite
        }
        this.#historico = []
        this.#numeroConta = numeroConta
    }
    get saldo() {
        return "O seu saldo é " + this.#saldo
    }
    get numeroConta() {
        return "O número da conta é " + this.#numeroConta
    }
    get historico() {
        return this.#historico
    }
    get limite() {
        return this.#limite
    }
    set limite(valor) {
        if (valor >= 0) {
            this.#limite = valor
            console.log("limite aceitavel")
        } else {
            console.log("limite insuficiente")
        }

    }

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor
            this.#historico.push("deposito " + valor)
        } else {
            console.log("erro, saldo insuficiente")
            return false
        }
    }
    sacar(valor) {
        if (valor > 0 && valor <= this.#saldo + this.#limite) {
            this.#saldo -= valor
            this.#historico.push("Saque " + valor)
            return true
        } else {
            console.log("Erro: Saldo insuficiente")
            return false
        }
    }
    trasnferir(valor, contaDestino) {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor)
            this.#historico.push("trasnferencia realizada: " + valor)
            return true
        } else {
            return false
        }
    }
    exibirHistorico() {
        return this.#historico
    }

}


const cliente = new contaCorrente(23123, 110, 400)
const cliente1 = new contaCorrente(121212, 0, 60)
const cliente2 = new contaCorrente(343445, 10, 0)

cliente.depositar(30)
cliente.sacar(100)
cliente.trasnferir(20, cliente1)

console.log(cliente.numeroConta)
console.log(cliente.saldo)
console.log(cliente.limite)
console.log(cliente.exibirHistorico())

cliente.depositar(90)
cliente.sacar(20)
cliente.trasnferir(500, cliente2)

console.log(cliente2.numeroConta)
console.log(cliente2.saldo)
console.log(cliente2.limite)
console.log(cliente2.exibirHistorico())


