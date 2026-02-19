class Personagem {
    constructor(nome, pontosDeVida, forca, metodosAtaque, metodosDefesa) {
        this.nome = nome
        this.pontosDeVida = pontosDeVida
        this.forca = forca
        this.metodosAtaque = metodosAtaque
        this.metodosDefesa = metodosDefesa

    }
    get nome() {
        return this.nome
    }
    set nome(i) {
        return this.nome = i
    }
    get pontosDeVida() {
        return this.pontosDeVida
    }
    set pontosDeVida(i) {
        return this.pontosDeVida = i
    }
    get forca() {
        return this.forca
    }
    set forca(i) {
        if (this.forca >= 0) {
            return this.forca = i
        }
    }
    get metodosAtaque() {
        return this.metodosAtaque
    }

}

class Guerreiro extends Personagem {
    constructor(nome, pontosDeVida, forca, metodosAtaque, metodosDefesa) {
        super(nome, pontosDeVida, forca)

    }
    metodosAtaque(forca) {
        let danoCausado = this.forca * 3
        return danoCausado
    }
    metodosDefesa(forca) {
        let danoEvitado = this.forca * 0.5
        return danoEvitado
    }
}
class Mago extends Personagem {
    constructor(nome, pontosDeVida, forca, metodosAtaque, metodosDefesa, feitico) {
        super(nome, pontosDeVida, forca, metodosAtaque, metodosDefesa)
        this.feitico = feitico
    }
}
class Item {
    constructor(nomeItem, tipo, valor) {
        this.nomeItem = nomeItem
        this.tipo = tipo
        this.valor = valor
    }
}

class Batalha {
    constructor(play1, play2) {
        this.play1 = play1
        this.play2 = play2
    }
    lutar() {
        while (this.play1.pontosDeVida > 0 && this.play2.pontosDeVida) {
            let danoPlay1 = this.play1.metodosAtaque(forca)
            this.play2.metodosDefesa(danoPlay1)

            if (this.play2.pontosDeVida <= 0) {
                console.log("voce venceu! " + this.play1.nome)
                break;
            }
            let danoPlay2 = this.play2.metodosAtaque(forca)
            this.play1.metodosDefesa(danoPlay2)
            if (this.play1.pontosDeVida <= 0) {
                console.log("voce venceu! " + this.play2.nome)
                break;
            }
        }
    }
}
