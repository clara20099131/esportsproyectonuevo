
class EquipoJuegoServicio {
    constructor() {
        this.listaEquipos = [];
    }

    crearEquipo(equipo) {
        this.listaEquipos.push(equipo);
        return equipo.crearEquipo();
    }

    buscarEquipoPorId(id) {
        return this.listaEquipos.find(e => e.getId() === id);
    }

    actualizarEquipo(id, datos) {
        const equipo = this.buscarEquipoPorId(id);
        if (equipo) {
            equipo.setNombre(datos.nombre);
            equipo.setHorasacomuladas(datos.horasacomuladas);
            equipo.setNivel(datos.nivel);
            equipo.actualizarEquipo();
            return true;
        }
        return false;
    }

    eliminarEquipo(id) {
        const indice = this.listaEquipos.findIndex(e => e.getId() === id);
        if (indice !== -1) {
            this.listaEquipos.splice(indice, 1);
            return true;
        }
        return false;
    }

    listarTodos() {
        return this.listaEquipos;
    }
}

module.exports = EquipoJuegoServicio;