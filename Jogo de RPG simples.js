class Personagem {
    constructor(nome, pontosDeVida, forca, metodosAtaque, metodosDefesa) {
        this._nome = nome
        this._pontosDeVida = pontosDeVida
        this._forca = forca
        this._metodosAtaque = metodosAtaque
        this._metodosDefesa = metodosDefesa

    }
    get nome() {
        return this._nome
    }
    set nome(novoNome) {
        this._nome = novoNome
    }
    get pontosDeVida() {
        return this._pontosDeVida
    }
    set pontosDeVida(novoPontovida) {
        this._pontosDeVida = novoPontovida
    }
    get forca() {
        return this._forca
    }
    set forca(novaForca) {
        if (this._forca >= 0) {
            this._forca = novaForca
        }
    }
    get metodosAtaque() {
        return this._metodosAtaque
    }
    set metodosAtaque(novoAtaque) {
        this._metodosAtaque = novoAtaque
    }
    get metodosDefesa() {
        return this._metodosDefesa
    }
    set metodosDefesa(novaDefesa) {
        this._metodosDefesa = novaDefesa
    }

}

class Guerreiro extends Personagem {
    constructor(nome, pontosDeVida, forca) {
        super(nome, pontosDeVida, forca)


    }
    metodosAtaque() {
        let danoCausado = this.forca * 1.5
        return danoCausado
    }
    metodosDefesa() {
        let danoEvitado = this.forca * 0.6
        return danoEvitado
    }
}
class Mago extends Personagem {
    constructor(nome, pontosDeVida, forca, feitico) {
        super(nome, pontosDeVida, forca)
        this._feitico = feitico
    }
    lancarFeitiço() {
        let danoMagico = this._feitico * 2.5
        return danoMagico
    }
    metodosAtaque() {
        let danoCausado = this.forca * 1
        return danoCausado
    }
    metodosDefesa() {
        let danoEvitado = this.forca * 0.4
        return danoEvitado
    }
}
class Item {
    constructor(nome, vidaExtra, danoExtra) {
        this._nome = nome
        this._vidaExtra = vidaExtra
        this._danoExtra = danoExtra
    }
    usarItem(personagem) {
        personagem.forca += this._danoExtra
        console.log(personagem.nome + " usou " + this._nome)
        personagem.pontosDeVida += this._vidaExtra
        console.log(personagem.nome + " usou " + this._nome)
    }
}

class Batalha {
    constructor(play1, play2) {
        this.play1 = play1
        this.play2 = play2
    }
    lutar() {
        while (this.play1.pontosDeVida > 0 && this.play2.pontosDeVida > 0) {
            let danoPlay1 = this.play1.metodosAtaque() - this.play2.metodosDefesa()
            if (danoPlay1 < 0) {
                danoPlay1 = 0
            }
            this.play2.pontosDeVida -= danoPlay1
            this.play2.pontosDeVida -= danoPlay1
            console.log(this.play1.nome + " causou " + danoPlay1)

            if (this.play2.pontosDeVida <= 0) {
                console.log("voce venceu! " + this.play1.nome)
                break;
            }
            let danoPlay2 = this.play2.lancarFeitiço()
            this.play1.pontosDeVida -= danoPlay2
            console.log(this.play2.nome + " causou " + danoPlay2)

            if (this.play1.pontosDeVida <= 0) {
                console.log("voce venceu! " + this.play2.nome)
                break;
            }
        }
    }
}
//teste guerreiro vence
const lutador = new Guerreiro("leonidas", 89, 100)
const feiticeiro = new Mago("Merlin", 77, 110, 100)

const espada = new Item("Espada Mágica", 5, 0)
const pocao = new Item("Poção", 0, 20)

espada.usarItem(lutador)
pocao.usarItem(feiticeiro)

let batalha = new Batalha(lutador, feiticeiro)
batalha.lutar()
//teste mago vence
const lutador1 = new Guerreiro("leonidas", 70, 60)
const feiticeiro1 = new Mago("Merlin", 77, 110, 100)

const espada1 = new Item("Espada Mágica", 4, 0)
const pocao1 = new Item("Poção", 0, 20)

espada1.usarItem(lutador1)
pocao1.usarItem(feiticeiro1)

let batalha1 = new Batalha(lutador1, feiticeiro1)
batalha1.lutar()
