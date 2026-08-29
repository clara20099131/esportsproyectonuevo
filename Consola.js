
class Consola {
    #id;
    #numserie;
    #nombre;
    #totalExistencia;
    #direccionIp;
    #maucUtp5;
    #macInalambrica;
    #totalControles;

    constructor(id, numserie, nombre, totalExistencia, direccionIp, maucUtp5, macInalambrica, totalControles) {
        this.#id = id;
        this.#numserie = numserie;
        this.#nombre = nombre;
        this.#totalExistencia = totalExistencia;
        this.#direccionIp = direccionIp;
        this.#maucUtp5 = maucUtp5;
        this.#macInalambrica = macInalambrica;
        this.#totalControles = totalControles;
    }

    getId() { return this.#id; }
    setId(id) { this.#id = id; }
    getNumserie() { return this.#numserie; }
    setNumserie(numserie) { this.#numserie = numserie; }
    getNombre() { return this.#nombre; }
    setNombre(nombre) { this.#nombre = nombre; }
    getTotalExistencia() { return this.#totalExistencia; }
    setTotalExistencia(totalexistencia) { this.#totalExistencia = totalexistencia; }
    getDireccionIp() { return this.#direccionIp; }
    setDireccionIp(direccionIp) { this.#direccionIp = direccionIp; }
    getMaucUtp5() { return this.#maucUtp5; }
    setMaucUtp5(maucUtp5) { this.#maucUtp5 = maucUtp5; }
    getMacInalambrica() { return this.#macInalambrica; }
    setMacInalambrica(macInalambrica) { this.#macInalambrica = macInalambrica; }
    getTotalControles() { return this.#totalControles; }
    setTotalControles(totalcontroles) { this.#totalControles = totalcontroles; }
    crearConsola() { return true; }
    actualizarConsola() {}
    verificarDisponibilidad() { return true; }
}