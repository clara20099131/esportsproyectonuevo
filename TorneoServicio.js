
class TorneoServicio {
    constructor() {
        this.listaTorneos = [];
    }

    crearTorneo(torneo) {
        this.listaTorneos.push(torneo);
        return true;
    }

    buscarTorneoPorNombre(nombre) {
        return this.listaTorneos.find(t => t.getNombre_torneo() === nombre);
    }

    agregarEquipoATorneo(nombreTorneo, equipo) {
        const torneo = this.buscarTorneoPorNombre(nombreTorneo);
        if (torneo) {
            torneo.agregarEquipo(equipo);
            return true;
        }
        return false;
    }

    actualizarTorneo(nombreTorneo, datos) {
        const torneo = this.buscarTorneoPorNombre(nombreTorneo);
        if (torneo) {
            torneo.setNombre_torneo(datos.nombre_torneo);
            torneo.setJuego(datos.juego);
            torneo.setEquipos_inscritos(datos.equipos_inscritos);
            return true;
        }
        return false;
    }

    eliminarTorneo(nombre) {
        const indice = this.listaTorneos.findIndex(t => t.getNombre_torneo() === nombre);
        if (indice !== -1) {
            this.listaTorneos.splice(indice, 1);
            return true;
        }
        return false;
    }

    listarTodos() {
        return this.listaTorneos;
    }
}

module.exports = TorneoServicio;