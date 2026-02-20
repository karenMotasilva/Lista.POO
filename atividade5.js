class Produto {
    constructor(nome, preco, quantidade) {
        this._nome = nome
        this._preco = preco
        this._quantidade = quantidade

    }

    get nome() {
        return this._nome
    }
    set nome(novoNome) {
        this._nome = novoNome
    }
    get preco() {
        return this._preco
    }
    set preco(novoPreco) {
        this._preco = novoPreco
    }
    get quantidade() {
        return this._quantidade
    }
    set quantidade(novaQuantidade) {
        this._quantidade = novaQuantidade
    }
    calculatTotal() {
        return this._preco * this._quantidade
    }

}

const produto1 = new Produto("tablet", 1500, 3)
const produto2 = new Produto("notbook", 3500, 2)
const produto3 = new Produto("celular", 1960, 1)

console.log(produto1)
console.log(produto2)
console.log(produto3)

produto1._nome = "caixa de som"

console.log("o produto " + produto1._nome + " com a quantidade de " + produto1._quantidade + " ficou no valor de: " + produto1.calculatTotal())
console.log("o produto " + produto2._nome + " com a quantidade de " + produto2._quantidade + " ficou no valor de: " + produto2.calculatTotal())
console.log("o produto " + produto3._nome + " com a quantidade de " + produto3._quantidade + " ficou no valor de: " + produto3.calculatTotal())