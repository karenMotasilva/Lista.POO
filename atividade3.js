
class Data {
    
     dia
     mes
     ano

    constructor (dia, mes, ano) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }    
    get Dia() {
        return dia
    }
    set Dia(i) {
        this.dia = i
    }
    get Mes() {
        return mes
    }
    set Mes(i) {
        this.mes = i
    }

    get Ano() {
        return ano
    }
    set Ano(i) {
        this.ano = i
    }    
    toString() {
        return ( dia, mes, ano);
    }
}
let novadata = new Data (7,5,1993)
console.log(novadata)
