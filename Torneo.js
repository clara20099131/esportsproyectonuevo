
class Torneo {
    #nombre_torneo;
    #juego;
    #equipos_inscritos;

    constructor(nombre_torneo, juego, equipos_inscritos) {
        this.#nombre_torneo = nombre_torneo;
        this.#juego = juego;
        this.#equipos_inscritos = equipos_inscritos;
    }

    getNombre_torneo() { return this.#nombre_torneo; }
    setNombre_torneo(nombre_torneo) { this.#nombre_torneo = nombre_torneo; }
    getJuego() { return this.#juego; }
    setJuego(juego) { this.#juego = juego; }
    getEquipos_inscritos() { return this.#equipos_inscritos; }
    setEquipos_inscritos(equipos_inscritos) { this.#equipos_inscritos = equipos_inscritos; }
    agregarEquipo(equipo) {}
}

module.exports = Torneo;