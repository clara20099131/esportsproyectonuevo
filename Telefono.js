
class Telefono {
    #id;
    #tipo;
    #numero;

    constructor(id, tipo, numero) {
        this.#id = id;
        this.#tipo = tipo;
        this.#numero = numero;
    }

    getId() { return this.#id; }
    setId(id) { this.#id = id; }
    getTipo() { return this.#tipo; }
    setTipo(tipo) { this.#tipo = tipo; }
    getNumero() { return this.#numero; }
    setNumero(numero) { this.#numero = numero; }
    agregarTelefono() { return this; }
    actualizarTelefono() {}
    eliminarTelefono() {}
}