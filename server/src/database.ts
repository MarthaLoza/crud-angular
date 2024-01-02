import pgPromise, { IDatabase, IMain } from 'pg-promise';
import keys from './keys';

const pgp: IMain = pgPromise();

// Crear una instancia de la base de datos utilizando las claves de configuración
const pool: IDatabase<unknown> = pgp(keys.database);

// Verificar la conexión
pool.connect()
  .then(obj => {
    console.log('DB is connected');
    // No llames a obj.done() para mantener abierta la conexión
  })
  .catch(error => {
    console.error('Error al conectar a la base de datos:', error);
  });

export default pool;
