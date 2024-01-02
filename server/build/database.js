"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_promise_1 = __importDefault(require("pg-promise"));
const keys_1 = __importDefault(require("./keys"));
const pgp = (0, pg_promise_1.default)();
// Crear una instancia de la base de datos utilizando las claves de configuración
const pool = pgp(keys_1.default.database);
// Verificar la conexión
pool.connect()
    .then(obj => {
    console.log('DB is connected');
    // No llames a obj.done() para mantener abierta la conexión
})
    .catch(error => {
    console.error('Error al conectar a la base de datos:', error);
});
exports.default = pool;
