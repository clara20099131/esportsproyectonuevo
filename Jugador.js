//jugador hereda de la clase persona
class Jugador {
    #nombre;
    #posicion;
    #equipo;

    constructor(nombre, posicion, equipo) {
        this.#nombre = nombre;
        this.#posicion = posicion;
        this.#equipo = equipo;
    }

    getNombre() { return this.#nombre; }
    setNombre(nombre) { this.#nombre = nombre; }
    getPosicion() { return this.#posicion; }
    setPosicion(posicion) { this.#posicion = posicion; }
    getEquipo() { return this.#equipo; }
    setEquipo(equipo) { this.#equipo = equipo; }
}

module.exports = Jugador;
