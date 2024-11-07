-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS mi_base_datos;

-- Seleccionar la base de datos
USE mi_base_datos;


-- Crear la tabla de users
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM users;

INSERT INTO users (username, password, email) 
VALUES ('usuario_prueba', 'contraseña_encriptada', 'correo@ejemplo.com');

SELECT * FROM users;

USE mi_base_datos;
DROP TABLE IF EXISTS users;
