
class InventarioJuegoServicio {
    constructor() {
        this.listaInventario = [];
    }

    agregarInventario(item) {
        this.listaInventario.push(item);
        return true;
    }

    consultarExistencias(plataformaid, juegoid) {
        const item = this.listaInventario.find(i => 
            i.getPlataformaid() === plataformaid && i.getJuegoid() === juegoid
        );
        return item ? item.consultarExistencias() : 0;
    }

    actualizarInventario(plataformaid, juegoid, nuevoTotal) {
        const item = this.listaInventario.find(i => 
            i.getPlataformaid() === plataformaid && i.getJuegoid() === juegoid
        );
        if (item) {
            item.setTotal(nuevoTotal);
            item.actualizarInventario();
            return true;
        }
        return false;
    }

    eliminarInventario(plataformaid, juegoid) {
        const indice = this.listaInventario.findIndex(i => 
            i.getPlataformaid() === plataformaid && i.getJuegoid() === juegoid
        );
        if (indice !== -1) {
            this.listaInventario.splice(indice, 1);
            return true;
        }
        return false;
    }

    listarTodos() {
        return this.listaInventario;
    }
}