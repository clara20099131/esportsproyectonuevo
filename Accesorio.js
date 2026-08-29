
class Accesorio {
    #id;
    #numserie;
    #tipo;

    constructor(id, numserie, tipo) {
        this.#id = id;
        this.#numserie = numserie;
        this.#tipo = tipo;
    }

    getId() { return this.#id; }
    setId(id) { this.#id = id; }
    getNumserie() { return this.#numserie; }
    setNumserie(numserie) { this.#numserie = numserie; }
    getTipo() { return this.#tipo; }
    setTipo(tipo) { this.#tipo = tipo; }
    crearAccesorio() { return true; }
    actualizarAccesorio() {}
    conectarPlataforma(plataforma) { return true; }
}