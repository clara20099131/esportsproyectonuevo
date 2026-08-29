
class AccesorioServicio {
    constructor() {
        this.listaAccesorios = [];
    }

    crearAccesorio(accesorio) {
        this.listaAccesorios.push(accesorio);
        return accesorio.crearAccesorio();
    }

    buscarAccesorioPorId(id) {
        return this.listaAccesorios.find(a => a.getId() === id);
    }

    conectarPlataforma(id, plataforma) {
        const accesorio = this.buscarAccesorioPorId(id);
        return accesorio ? accesorio.conectarPlataforma(plataforma) : false;
    }

    actualizarAccesorio(id, datos) {
        const accesorio = this.buscarAccesorioPorId(id);
        if (accesorio) {
            accesorio.setNumserie(datos.numserie);
            accesorio.setTipo(datos.tipo);
            accesorio.actualizarAccesorio();
            return true;
        }
        return false;
    }

    eliminarAccesorio(id) {
        const indice = this.listaAccesorios.findIndex(a => a.getId() === id);
        if (indice !== -1) {
            this.listaAccesorios.splice(indice, 1);
            return true;
        }
        return false;
    }

    listarTodos() {
        return this.listaAccesorios;
    }
}