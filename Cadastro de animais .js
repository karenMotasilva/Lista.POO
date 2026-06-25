class Animal {
    constructor(nome, tipo) {
        this._nome = nome
        this._tipo = tipo
    }

    get nome() {
        return this._nome
    }
    set nome(novoNome) {
        this._nome = novoNome
    }
    get tipo() {
        return this._tipo
    }
    set tipo(novoTipo) {
        this._tipo = novoTipo
    }

}

class Cachorro extends Animal {
    constructor(nome, tipo) {
        super(nome, tipo)
    }
    emitirSom() {
        console.log("au au au")
    }
}
class Cobra extends Animal {
    constructor(nome, tipo) {
        super(nome, tipo)
    }
    emitirSom() {
        console.log("shiiiiiiiiiiiii")
    }
}
class Galinha extends Animal {
    constructor(nome, tipo) {
        super(nome, tipo)
    }
    emitirSom() {
        console.log("co co co")
    }
}

const animal1 = new Cachorro("cachorro", "mamifero")
console.log("o nome do animal é: " + animal1._nome + "\ntipo: " + animal1._tipo)
animal1.emitirSom()

const animal2 = new Galinha("galinha", "ave")
console.log("o nome do animal é: " + animal2._nome + "\ntipo: " + animal2._tipo)
animal2.emitirSom()

const animal3 = new Cobra("cobra", "réptio")
console.log("o nome do animal é: " + animal3._nome + "\ntipo: " + animal3._tipo)
animal3.emitirSom() 
