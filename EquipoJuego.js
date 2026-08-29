
class EquipoJuego {
    #id;
    #nombre;
    #horasacomuladas;
    #nivel;

    constructor(id, nombre, horasacomuladas, nivel) {
        this.#id = id;
        this.#nombre = nombre;
        this.#horasacomuladas = horasacomuladas;
        this.#nivel = nivel;
    }

    getId() { return this.#id; }
    setId(id) { this.#id = id; }
    getNombre() { return this.#nombre; }
    setNombre(nombre) { this.#nombre = nombre; }
    getHorasacomuladas() { return this.#horasacomuladas; }
    setHorasacomuladas(horasacomuladas) { this.#horasacomuladas = horasacomuladas; }
    getNivel() { return this.#nivel; }
    setNivel(nivel) { this.#nivel = nivel; }
    crearEquipo() { return true; }
    actualizarEquipo() {}
    agregarJugador() {}
    eliminarJugador() {}
    calcularNivel() { return 0; }
    asignarLogro() {}
    asignarExperiencia() {}
}

module.exports = EquipoJuego;