class Tipousuario {
  #id;
  #nombre;

  constructor(id, nombre) {
    this.#id = id;
    this.#nombre = nombre;

  }

  get id() { return this.#id; }
  set id(id) { this.#id = id; }

  get nombre() { return this.#nombre; }
  set nombre(nombre) { this.#nombre = nombre; }

}

module.exports = Tipousuario;