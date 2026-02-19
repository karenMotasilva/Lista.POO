class Livro {
    #titulo
    #autor
    #editora
    #anoPublicado
    #disponivel = true

    constructor(titulo, autor, editora, anoPublicado) {
        this.#titulo = titulo
        this.#autor = autor
        this.#editora = editora 
        this.#anoPublicado = anoPublicado 
        this.#disponivel = true
    }

    
    emprestar() {
        if (this.#disponivel) {
            this.#disponivel = false
            console.log(`O livro "${this.#titulo}" foi emprestado com sucesso!`)
        } else {
            console.log(`Desculpe, o livro "${this.#titulo}" já está emprestado.`)
        }
    } 

    devolver() {
        this.#disponivel = true 
        return `O Livro ${this.#titulo} foi devolvido.`
    }

    estaDisponivel() {
        return this.#disponivel 
    }

    idadeLivro() {
        const anoAtual = new Date().getFullYear()
        return anoAtual - this.#anoPublicado 
    }

    get status() {
        return this.#disponivel ? "Disponível" : "Indisponível";
    }
}

try {
    const biblioteca = new Livro("Entendendo Algoritmos", "Aditya Y. Bhargava", "NovaTec", 1995)
    console.log(`Status inicial: ${biblioteca.status}`)
    biblioteca.emprestar()
    console.log(`Status após empréstimo: ${biblioteca.status}`)
} catch (error) {
    console.error("Ocorreu um erro:", error.message);
}