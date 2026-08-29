//usuario hereda de la clase persona
const Persona = require('./Persona.js');

class Usuario extends Persona {
    constructor(id, tipo_doc, numero_doc, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, edad, fecha_nacimiento, sexo, comuna, barrio, direccion, nickname, clave, acudiente, direccion_correo) {
        super(id, tipo_doc, numero_doc, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, edad, fecha_nacimiento, sexo, comuna, barrio, direccion, nickname, clave, acudiente, direccion_correo);
    }

    getNombre() { return this.getPrimernombre(); }
    setNombre(nombre) { this.setPrimernombre(nombre); }
    getCorreo() { return this.getDireccioncorreo(); }
    setCorreo(correo) { this.setDireccioncorreo(correo); }
}

module.exports = Usuario;