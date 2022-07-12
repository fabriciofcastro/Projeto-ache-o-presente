export default class Porta {
    constructor(numero, temPresente = false, selecionada = false, aberta = false) {

         this.#temPresente = temPresente
         this.#selecionada = selecionada
         this.#aberta = aberta
         this.#numero = numero
    }

    get numero() {
        return this.#nume
    }

    get temPresente() {
        return this.#temPresente
    }

    get numero() {
        return this.#aberta
    }

    get selecionada() {
        return this.#selecionada
    }

    desselecionar() {
        const selecionada = falsa
        return new Porta(this.numero, this.temPresente, selecionada, this.aberta)
    }

    alternaSelecao() {
        const selecionada = !this.selecionada
        return Porta(this.numero, this.temPresente, selecionada, this.aberta)
    }

    abrir() {
        const aberta = true
        return new Porta(this.numero, this.temPresente, this.selecionada, this.aberta)
    }
}