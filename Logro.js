
class Logro {
    #id;
    #nombre;
    #puntosadquisicion;
    #tipo;

    constructor(id, nombre, puntosadquisicion, tipo) {
        this.#id = id;
        this.#nombre = nombre;
        this.#puntosadquisicion = puntosadquisicion;
        this.#tipo = tipo;
    }

    getId() { return this.#id; }
    setId(id) { this.#id = id; }
    getNombre() { return this.#nombre; }
    setNombre(nombre) { this.#nombre = nombre; }
    getPuntosadquisicion() { return this.#puntosadquisicion; }
    setPuntosadquisicion(adquisicion) { this.#puntosadquisicion = adquisicion; }
    getTipo() { return this.#tipo; }
    setTipo(tipo) { this.#tipo = tipo; }
    crearLogro() { return true; }
    asignarLogro() {}
    asignarUsuario() {}
    asignarEquipo() {}
}