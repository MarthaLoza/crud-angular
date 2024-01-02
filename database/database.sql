-- Crear la base de datos
CREATE DATABASE ng_games_db;

-- Conectar a la base de datos
\c ng_games_db;

-- Crear la tabla
CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    title VARCHAR(180),
    description VARCHAR(255),
    image VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
