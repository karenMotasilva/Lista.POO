class Endereco {
 #rua
  #numero
  #complemento
  #bairro
  #cidade
  #estado
  #cep

   constructor (rua, numero ,complemento ,bairro ,cidade ,estado ,cep ){
  this.rua = rua
  this.numero = numero
  this.complemento = complemento
  this.bairro = bairro
  this.cidade = cidade
  this.estado = estado
  this.cep = cep  
  }

  get rua(){
    return `Endereço :Rua ${this.#rua}`
  }  
  get numero(){
    return `Número :${this.#numero}`
  }
  get complemento(){
    return `Complemento :${this.#complemento}`
  }  
  get bairro(){
    return `Bairro :${this.#bairro}`
  }
  get cidade(){
    return `Cidade :${this.#cidade}`
  }
  get estado(){
    return `Estado :${this.#estado}`
  }
  get cep(){
    return `CEP: ${this.#cep}`
  }
  set rua(ruaA ){
   this.#rua = ruaA
  }  
  set numero(identificacao){
    this.#numero = identificacao
  }
  set complemento(CasaA){
    this.#complemento = CasaA
  }  
  set bairro(areias){
    this.#bairro = areias
  }
  set cidade(recife){
    this.#cidade = recife
  }
  set estado(pernambuco){
    this.#estado = pernambuco
  }
  set cep(localidade){
    this.#cep = localidade
  }

}
let cadastrosEndereco = new Endereco('argentina',50,'casa B','cavaleiro', 'jaboatão','PE',54210320)


console.log(cadastrosEndereco.rua)
console.log(cadastrosEndereco.complemento)
console.log(cadastrosEndereco.bairro)
console.log(cadastrosEndereco.cidade)
console.log(cadastrosEndereco.estado)
console.log(cadastrosEndereco.cep)
