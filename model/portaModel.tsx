export default class PortaModel {
    
    #numero: number
    #aberta: boolean
    #selecionada: boolean
    #temPresente: boolean
    
    constructor(numero: number, temPresente = false, selecionada = false, aberta = false) {

         this.#temPresente = temPresente
         this.#selecionada = selecionada
         this.#aberta = aberta
         this.#numero = numero
    }

    get numero() {
        return this.#numero
    }

    get temPresente() {
        return this.#temPresente
    }

    get aberta() {
        return this.#aberta
    }

    get selecionada() {
        return this.#selecionada
    }

    desselecionar() {
        const selecionada = false
        return new  PortaModel(this.numero, this.temPresente, selecionada, this.aberta)
    }

    alternaSelecao() {
        const selecionada = !this.selecionada
        return new PortaModel( this.numero, this.temPresente, selecionada, this.aberta)
    }

    abrir() {
        const aberta = true
        return new PortaModel(this.numero, this.temPresente, this.selecionada, this.aberta)
    }
}