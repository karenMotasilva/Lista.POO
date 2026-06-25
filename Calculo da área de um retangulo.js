class Retangulo {
    #base
    #altura
    constructor(base, altura) {
        this.base = base
        this.altura = altura
    }
    get base() {
        return this.#base
    }
    set base(novaBase) {
        if (i < 0) {
            console.log("Valor da base menor que zero")

        } else {
            this.#base = novaBase
        }
    }
    get altura() {
        return this.#altura
    }
    set altura(novaAltura) {
        if (i < 0) {
            console.log("Valor da altura menor que zero")
        } else {
            this.#altura = novaAltura
        }
    }
    calcularArea() {
        return this.#base * this.#altura
    }
    calcularPerimetro() {
        return 2 * (this.#base + this.#altura)
    }
    quadrado() {
        if (this.#base == this.#altura) {
            console.log("é um quadrado")
            return true
        } else {
            console.log("é um retangulo")
            return false
        }
    }
    redimensionaeFator(fator) {
        this.#base = this.#base * fator
        this.#altura = this.altura * fator
        console.log("base redimensionada para: " + this.#base + " altura redimensionada para: " + this.#altura)
    }

}

const objeto = new Retangulo(4, 4)
const objeto1 = new Retangulo(12, 34)
const objeto2 = new Retangulo(2, 4)

console.log(" Base: " + objeto.base + "\n Altura: " + objeto.altura + "\n Area: " + objeto.calcularArea() + "\n Perimetro: " + objeto.calcularPerimetro())
objeto.quadrado()
console.log(" Base: " + objeto1.base + "\n Altura: " + objeto1.altura + "\n Area: " + objeto1.calcularArea() + "\n Perimetro: " + objeto1.calcularPerimetro())
objeto1.quadrado()
console.log(" Base: " + objeto2.base + "\n Altura: " + objeto2.altura + "\n Area: " + objeto2.calcularArea() + "\n Perimetro: " + objeto2.calcularPerimetro())
objeto2.quadrado()

//REDIMENSIONAR 

objeto.redimensionaeFator(2)
objeto1.redimensionaeFator(3)
objeto2.redimensionaeFator(5)



