class Veiculo {
    constructor(placa, modelo, capacidade, numeroPassageiros) {
        this._placa = placa
        this._modelo = modelo
        this._capacidade = capacidade
        this._numeroPassageiros = numeroPassageiros
    }
    get placa() {
        return this._placa
    }
    set placa(i) {
        this._placa = i
    }
    get modelo() {
        return this._modelo
    }
    set modelo(i) {
        this._modelo = i
    }
    get capacidade() {
        return this._capacidade
    }
    set capacidade(i) {
        if (i > 0) {
            this._capacidade = i
        }
    }
    get numeroPassageiros() {
        return this._numeroPassageiros
    }
    set numeroPassageiros(i) {
        this._numeroPassageiros = i
    }

    capacidadeMaxima() {
        if (this._numeroPassageiros > this._capacidade) {
            return "Limite excedido"
        } else if (this._numeroPassageiros == this._capacidade) {
            return "Limite atingido"
        } else {
            return "Limite não atingido"
        }
    }
}

class Onibus extends Veiculo {
    constructor(placa, modelo, capacidade, numeroPassageiros, linha) {
        super(placa, modelo, capacidade, numeroPassageiros)
        this._linha = linha
    }
    get linha() {
        return this._linha
    }
    set linha(i) {
        this._linha = i
    }
}
class Metro extends Veiculo {
    constructor(placa, modelo, capacidade, numeroPassageiros, numeroDevagoes) {
        super(placa, modelo, capacidade, numeroPassageiros)
        this._numeroDevagoes = numeroDevagoes
    }
    get numeroDevagoes() {
        return this._numeroDevagoes
    }
    set numeroDevagoes(i) {
        if (i > 0) {
            this._numeroDevagoes = i
        }
    }
}

class Bilhete {
    constructor(codigo, saldo) {
        this._codigo = codigo
        this._saldo = saldo
    }
    get codigo() {
        return this._codigo
    }
    set codigo(i) {
        this._codigo = i
    }
    get saldo() {
        return this._saldo
    }
    set saldo(valor) {
        if (valor >= 0) {
            this._saldo = valor
        }
    }

    recarga(valor) {
        if (valor > 0) {
            this._saldo += valor
            return "Recarga feita, valor da recarga: " + this._saldo

        } else {
            return "Recarga invalida"
        }
    }
}
//teste de bilheteria
const cliente = new Bilhete(1232, 12)
const cliente1 = new Bilhete(3445, 34)
console.log("codigo: " + cliente1.codigo)
console.log("Recarga: " + cliente1.recarga(23))
console.log("Codigo: " + cliente.codigo)
console.log("Recarga: " + cliente.recarga(0))

//teste onibus
const onibus1 = new Onibus("abc-123", "ford", 13, 2)
const onibus2 = new Onibus("BBC-980", "MERCEDES", 15, 20)
console.log(Onibus.onibus1)
console.log("Capacidade do ônibus: " + onibus1.capacidadeMaxima())

//teste metro
const metro1 = new Metro("metro123", "metroRec", 145, 145)
const metro2 = new Metro("metro-345", "metroRec", 123, 45)
console.log("Capacidade do mêtro: " + metro1.capacidadeMaxima())
console.log("Capacidade do mêtro: " + metro2.capacidadeMaxima(23))