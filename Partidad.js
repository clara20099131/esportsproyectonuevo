
class Partida {
    #id;
    #equipoLocal;
    #equipoVisitante;
    #resultado;
    #estado;

    constructor(id, equipoLocal, equipoVisitante, resultado, estado) {
        this.#id = id;
        this.#equipoLocal = equipoLocal;
        this.#equipoVisitante = equipoVisitante;
        this.#resultado = resultado;
        this.#estado = estado;
    }

    getId() { return this.#id; }
    setId(id) { this.#id = id; }
    getEquipoLocal() { return this.#equipoLocal; }
    setEquipoLocal(equipolocal) { this.#equipoLocal = equipolocal; }
    getEquipoVisitante() { return this.#equipoVisitante; }
    setEquipoVisitante(equipovisitante) { this.#equipoVisitante = equipovisitante; }
    getResultado() { return this.#resultado; }
    setResultado(resultado) { this.#resultado = resultado; }
    getEstado() { return this.#estado; }
    setEstado(estado) { this.#estado = estado; }
}