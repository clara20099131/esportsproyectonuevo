
class Plataforma {
    #id;
    #nombre;
    #marca;
    #totalconsolas;

    constructor(id, nombre, marca, totalconsolas) {
        this.#id = id;
        this.#nombre = nombre;
        this.#marca = marca;
        this.#totalconsolas = totalconsolas;
    }

    getId() { return this.#id; }
    setId(id) { this.#id = id; }
    getNombre() { return this.#nombre; }
    setNombre(nombre) { this.#nombre = nombre; }
    getMarca() { return this.#marca; }
    setMarca(marca) { this.#marca = marca; }
    getTotalconsolas() { return this.#totalconsolas; }
    setTotalconsolas(totalconsolas) { this.#totalconsolas = totalconsolas; }
    crearPlataforma() { return true; }
    actualizarPlataforma() {}
    crearJuego(juego) {}
}