
class SesionEntrenamiento {
    #id;
    #fechaAgendamiento;
    #horaInicio;
    #horaFinalizacion;

    constructor(id, fechaAgendamiento, horaInicio, horaFinalizacion) {
        this.#id = id;
        this.#fechaAgendamiento = fechaAgendamiento;
        this.#horaInicio = horaInicio;
        this.#horaFinalizacion = horaFinalizacion;
    }

    getId() { return this.#id; }
    setId(id) { this.#id = id; }
    getFechaAgendamiento() { return this.#fechaAgendamiento; }
    setFechaAgendamiento(fechaAgendamiento) { this.#fechaAgendamiento = fechaAgendamiento; }
    getHoraInicio() { return this.#horaInicio; }
    setHoraInicio(horaInicio) { this.#horaInicio = horaInicio; }
    getHoraFinalizacion() { return this.#horaFinalizacion; }
    setHoraFinalizacion(horaFinalizacion) { this.#horaFinalizacion = horaFinalizacion; }
    agendar() { return true; }
    cancelar() {}
    cerrar() {}
    calcularHoras() { return 0; }
    asignarExperiencia() {}
}