
class PerfilSocial {
    #redsocialid;
    #usuariolid;
    #Urlperfil;

    constructor(redsocialid, usuariolid, Urlperfil) {
        this.#redsocialid = redsocialid;
        this.#usuariolid = usuariolid;
        this.#Urlperfil = Urlperfil;
    }

    getRedsocialid() { return this.#redsocialid; }
    setRedsocialid(redsocialid) { this.#redsocialid = redsocialid; }
    getUsuariolid() { return this.#usuariolid; }
    setUsuariolid(usuariolid) { this.#usuariolid = usuariolid; }
    getUrlperfil() { return this.#Urlperfil; }
    setUrlperfil(urlperfil) { this.#Urlperfil = urlperfil; }
    crearPerfil() { return true; }
    actualizarPerfil() {}
    eliminarPerfil() {}
}
module.exports = Perfilsocial;