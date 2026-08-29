
class UsuarioServicio {
    constructor() {
        this.listaUsuarios = [];
    }

    crearUsuario(usuario) {
        this.listaUsuarios.push(usuario);
        return true;
    }

    buscarUsuarioPorId(id) {
        return this.listaUsuarios.find(u => u.getId() === id);
    }

    actualizarUsuario(id, datos) {
        const usuario = this.buscarUsuarioPorId(id);
        if (usuario) {
            usuario.setNombre(datos.nombre);
            usuario.setCorreo(datos.correo);
            return true;
        }
        return false;
    }

    eliminarUsuario(id) {
        const indice = this.listaUsuarios.findIndex(u => u.getId() === id);
        if (indice !== -1) {
            this.listaUsuarios.splice(indice, 1);
            return true;
        }
        return false;
    }

    listarTodos() {
        return this.listaUsuarios;
    }
}

module.exports = UsuarioServicio;