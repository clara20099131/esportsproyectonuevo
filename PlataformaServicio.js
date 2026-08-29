
class PlataformaServicio {
    constructor() {
        this.listaPlataformas = [];
    }

    crearPlataforma(plataforma) {
        this.listaPlataformas.push(plataforma);
        return true;
    }

    buscarPlataformaPorId(id) {
        return this.listaPlataformas.find(p => p.getId() === id);
    }

    actualizarPlataforma(id, datos) {
        const plataforma = this.buscarPlataformaPorId(id);
        if (plataforma) {
            plataforma.setNombre(datos.nombre);
            plataforma.setFabricante(datos.fabricante);
            plataforma.actualizarPlataforma();
            return true;
        }
        return false;
    }

    eliminarPlataforma(id) {
        const indice = this.listaPlataformas.findIndex(p => p.getId() === id);
        if (indice !== -1) {
            this.listaPlataformas.splice(indice, 1);
            return true;
        }
        return false;
    }

    listarTodos() {
        return this.listaPlataformas;
    }
}