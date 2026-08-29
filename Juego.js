
class Juego {
    #id;
    #nombrejuego;
    #esrb;
    #estudiodesarrollador;
    #numerojugadores;
    #totalexistencia;
    #tipo;

    constructor(id, nombrejuego, esrb, estudiodesarrollador, numerojugadores, totalexistencia, tipo) {
        this.#id = id;
        this.#nombrejuego = nombrejuego;
        this.#esrb = esrb;
        this.#estudiodesarrollador = estudiodesarrollador;
        this.#numerojugadores = numerojugadores;
        this.#totalexistencia = totalexistencia;
        this.#tipo = tipo;
    }

    getId() { return this.#id; }
    setId(id) { this.#id = id; }
    getNombrejuego() { return this.#nombrejuego; }
    setNombrejuego(nombrejuego) { this.#nombrejuego = nombrejuego; }
    getEsrb() { return this.#esrb; }
    setEsrb(esrb) { this.#esrb = esrb; }
    getEstudiodesarrollador() { return this.#estudiodesarrollador; }
    setEstudiodesarrollador(estudiodesarrollador) { this.#estudiodesarrollador = estudiodesarrollador; }
    getNumerojugadores() { return this.#numerojugadores; }
    setNumerojugadores(numerojugadores) { this.#numerojugadores = numerojugadores; }
    getTotalexistencia() { return this.#totalexistencia; }
    setTotalexistencia(totalexistencia) { this.#totalexistencia = totalexistencia; }
    getTipo() { return this.#tipo; }
    setTipo(tipo) { this.#tipo = tipo; }
    crearJuego() { return true; }
    actualizarJuego() {}
    verificarExistencia() { return true; }
}

module.exports = Juego;
