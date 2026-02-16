class Livro{

    #titulo
    #autor
    #editora
    #anoPublicado
    #disponivel = true
   
    constructor(titulo,autor,editora,anoPublicado){
        this.#titulo = titulo
        this.#autor = autor
        this.editora = editora
        this.anoPublicado =anoPublicado
        this.#disponivel = true
    }

     emprestar ( ){
     if (this.#disponivel){
        this.#disponivel = false
        console.log(`O livro ${this.#titulo} emprestado com Sucesso`)
        } else {
        console.log(`Desculpe, Este livro ${this.#titulo}, ja esta emprestado a outra pessoa !`)
       }   
       devolver ();{
        this.#disponivel = false 
        return `O Livro ${this.#titulo}, foi devolvido`
       }   
        estaDisponivel();{
       return this.#disponivel = true

       }
       idadeLivro();{
        const anoAtual = new Date().getFullYear()
        return anoAtual ; this.#anoPublicado
       }
      }
    get status() {
    return this.#disponivel ? "Disponível" : "Indisponível";
 }  
}
try {
   const biblioteca = new Livro("Entendendo Algoritmo","Aditya Y. Bhargava","NovaTec",1995)
   console.log(biblioteca.status)
   biblioteca.emprestar()
    
} catch (error) {
  console.error(error.menssagem);
}   