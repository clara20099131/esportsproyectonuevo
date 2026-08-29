
class JugadorServicio {
    constructor() {
        this.listaJugadores = [];
    }

    crearJugador(jugador) {
        this.listaJugadores.push(jugador);
        return true;
    }

    buscarJugadorPorId(id) {
        return this.listaJugadores.find(j => j.getId() === id);
    }

    actualizarJugador(id, datos) {
        const jugador = this.buscarJugadorPorId(id);
        if (jugador) {
            jugador.setNombre(datos.nombre);
            jugador.setPosicion(datos.posicion);
            jugador.setEquipo(datos.equipo);
            return true;
        }
        return false;
    }

    eliminarJugador(id) {
        const indice = this.listaJugadores.findIndex(j => j.getId() === id);
        if (indice !== -1) {
            this.listaJugadores.splice(indice, 1);
            return true;
        }
        return false;
    }

    listarTodos() {
        return this.listaJugadores;
    }
}

module.exports = JugadorServicio;