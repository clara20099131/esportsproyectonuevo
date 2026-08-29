
class JuegoServicio {
    constructor() {
        this.listaJuegos = [];
    }

    crearJuego(juego) {
        this.listaJuegos.push(juego);
        return juego.crearJuego();
    }

    buscarJuegoPorId(id) {
        return this.listaJuegos.find(j => j.getId() === id);
    }

    verificarExistencia(id) {
        const juego = this.buscarJuegoPorId(id);
        return juego ? juego.verificarExistencia() : false;
    }

    actualizarJuego(id, datos) {
        const juego = this.buscarJuegoPorId(id);
        if (juego) {
            juego.setNombrejuego(datos.nombrejuego);
            juego.setEsrb(datos.esrb);
            juego.setEstudiodesarrollador(datos.estudiodesarrollador);
            juego.setNumerojugadores(datos.numerojugadores);
            juego.setTotalexistencia(datos.totalexistencia);
            juego.setTipo(datos.tipo);
            juego.actualizarJuego();
            return true;
        }
        return false;
    }

    eliminarJuego(id) {
        const indice = this.listaJuegos.findIndex(j => j.getId() === id);
        if (indice !== -1) {
            this.listaJuegos.splice(indice, 1);
            return true;
        }
        return false;
    }

    listarTodos() {
        return this.listaJuegos;
    }
}

module.exports = JuegoServicio;