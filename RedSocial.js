class Redsocial {
  #id;
  #nombre;
  #url;

  constructor(id, nombre, enlace) {
    this.#id = id;
    this.#nombre = nombre;
    this.#url = url;
  }

  get id() { return this.#id; }
  set id(id) { this.#id = id; }

  get nombre() { return this.#nombre; }
  set nombre(nombre) { this.#nombre = nombre; }

  get url() { return this.#url; }
  set url(url) { this.#url = url; }
}

module.exports = Redsocial;