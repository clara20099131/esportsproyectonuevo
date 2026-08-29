
class InventarioJuego {
    #plataformaid;
    #juegoid;
    #total;

    constructor(plataformaid, juegoid, total) {
        this.#plataformaid = plataformaid;
        this.#juegoid = juegoid;
        this.#total = total;
    }

    getPlataformaid() { return this.#plataformaid; }
    setPlataformaid(plataformaid) { this.#plataformaid = plataformaid; }
    getJuegoid() { return this.#juegoid; }
    setJuegoid(juegoid) { this.#juegoid = juegoid; }
    getTotal() { return this.#total; }
    setTotal(total) { this.#total = total; }
    actualizarInventario() {}
    consultarExistencias() { return 0; }
}