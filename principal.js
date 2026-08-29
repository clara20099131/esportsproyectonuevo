
// ARCHIVO PRUEBA  Principal.js


// 1. Importamos las clases de Modelo
const Usuario = require('../Modelo/Usuario.js');
const Jugador = require('../Modelo/Jugador.js');
const EquipoJuego = require('../Modelo/EquipoJuego.js');
const Juego = require('../Modelo/Juego.js');
const Torneo = require('../Modelo/Torneo.js');

// 2. Importamos los Servicios
const UsuarioServicio = require('../Servicio/UsuarioServicio.js');
const JugadorServicio = require('../Servicio/JugadorServicio.js');
const EquipoJuegoServicio = require('../Servicio/EquipoJuegoServicio.js');
const JuegoServicio = require('../Servicio/JuegoServicio.js');
const TorneoServicio = require('../Servicio/TorneoServicio.js');

console.log("========================================");
console.log("  INICIANDO PRUEBA DEL SISTEMA...");
console.log("========================================\n");

// ========== CREAMOS LOS SERVICIOS ==========
const servicioUsuario = new UsuarioServicio();
const servicioJugador = new JugadorServicio();
const servicioEquipo = new EquipoJuegoServicio();
const servicioJuego = new JuegoServicio();
const servicioTorneo = new TorneoServicio();
console.log(" Servicios creados correctamente");

//  CREAMOS UN JUEGO 
const juego1 = new Juego(1, "League of Legends", "E10+", "Riot Games", 5, 100, "MOBA");
const juegoCreado = servicioJuego.crearJuego(juego1);
console.log(" Juego creado:", juego1.getNombrejuego());

// CREAMOS UN USUARIO (hereda de Persona) 
const usuario1 = new Usuario(
    1, "CC", "1.098.765.432",
    "Aurora", "Maria", "Gomez", "Rivero",
    18, "2008-05-10", "F",
    "Comuna 1", "Barrio Centro", "Calle 1 #2-3",
    "AuroraG", "1234", "No aplica", "MariaG@email.com",
    
);
const usuarioCreado = servicioUsuario.crearUsuario(usuario1);
console.log(" Usuario creado:", usuario1.getNombre());

// CREAMOS UN JUGADOR 
const jugador1 = new Jugador("Luchito", "Medio", "Equipo Azul");
servicioJugador.crearJugador(jugador1);
console.log(" Jugador creado:", jugador1.getNombre());

// CREAMOS UN EQUIPO 
const equipo1 = new EquipoJuego(1, "Fuego y Pasion", 50, 3);
servicioEquipo.crearEquipo(equipo1);
console.log(" Equipo creado:", equipo1.getNombre());

// CREAMOS UN TORNEO 
const torneo1 = new Torneo("Copa Estudiantil", "League of Legends", "Equipo A, Equipo B");
servicioTorneo.crearTorneo(torneo1);
console.log(" Torneo creado:", torneo1.getNombre_torneo());

//  PRUEBA DE BUSQUEDAS
console.log("\n====== PRUEBA DE BÚSQUEDAS ======");
const buscarUsuario = servicioUsuario.buscarUsuarioPorId(1);
console.log("Buscar usuario por ID 1:", buscarUsuario ? "Encontrado " : "No encontrado ");

const buscarJuego = servicioJuego.buscarJuegoPorId(1);
console.log(" Buscar juego por ID 1:", buscarJuego ? "Encontrado " : "No encontrado ");

//  LISTAR TODOS 
console.log("\n====== LISTA COMPLETA ======");
console.log(" Total usuarios:", servicioUsuario.listarTodos().length);
console.log(" Total jugadores:", servicioJugador.listarTodos().length);
console.log(" Total equipos:", servicioEquipo.listarTodos().length);
console.log(" Total juegos:", servicioJuego.listarTodos().length);
console.log(" Total torneos:", servicioTorneo.listarTodos().length);

console.log("\n========================================");
console.log("  TODO FUNCIONA PERFECTAMENTE!");
console.log("========================================");