
class Persona {
    #id;
    #tipo_doc;
    #numero_doc;
    #primer_nombre;
    #segundo_nombre;
    #primer_apellido;
    #segundo_apellido;
    #edad;
    #fecha_nacimiento;
    #sexo;
    #comuna;
    #barrio;
    #direccion;
    #nickname;
    #clave;
    #acudiente;
    #direccion_correo;

    constructor(id, tipo_doc, numero_doc, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, edad, fecha_nacimiento, sexo, comuna, barrio, direccion, nickname, clave, acudiente, direccion_correo) {
        this.#id = id;
        this.#tipo_doc = tipo_doc;
        this.#numero_doc = numero_doc;
        this.#primer_nombre = primer_nombre;
        this.#segundo_nombre = segundo_nombre;
        this.#primer_apellido = primer_apellido;
        this.#segundo_apellido = segundo_apellido;
        this.#edad = edad;
        this.#fecha_nacimiento = fecha_nacimiento;
        this.#sexo = sexo;
        this.#comuna = comuna;
        this.#barrio = barrio;
        this.#direccion = direccion;
        this.#nickname = nickname;
        this.#clave = clave;
        this.#acudiente = acudiente;
        this.#direccion_correo = direccion_correo;
    }

    getId() { return this.#id; }
    setId(id) { this.#id = id; }

    getTipo_doc() { return this.#tipo_doc; }
    setTipo_doc(tipodoc) { this.#tipo_doc = tipodoc; }

    getNumerodoc() { return this.#numero_doc; }
    setNumerodoc(numerodoc) { this.#numero_doc = numerodoc; }

    getPrimernombre() { return this.#primer_nombre; }
    setPrimernombre(primernombre) { this.#primer_nombre = primernombre; }

    getPrimerapellido() { return this.#primer_apellido; }
    setSegundoapellido(segundoapellido) { this.#segundo_apellido = segundoapellido; }

    getEdad() { return this.#edad; }
    setEdad(edad) { this.#edad = edad; }

    getFechanacimiento() { return this.#fecha_nacimiento; }
    setFechanacimiento(fechanacimiento) { this.#fecha_nacimiento = fechanacimiento; }

    getDireccioncorreo() { return this.#direccion_correo; }
    setDireccioncorreo(direccion_correo) { this.#direccion_correo = direccion_correo; }
}

module.exports = Persona;