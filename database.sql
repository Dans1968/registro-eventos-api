--Script con el que se creo la base de datos para la creacion del api
CREATE DATABASE IF NOT EXISTS registro_eventos;
USE registro_eventos;
--Creacion Tabla de personas que se registran
CREATE TABLE personas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  correo VARCHAR(100)
);
--Creacion Tabla de los eventos disponibles en los que se pueden registrar
CREATE TABLE eventos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  fecha DATE
);
--Creacion Tabla de registros que debe tener relacion (personas-eventos)
CREATE TABLE registros (
  id INT AUTO_INCREMENT PRIMARY KEY,
  persona_id INT,
  evento_id INT,
  FOREIGN KEY (persona_id) REFERENCES personas(id),
  FOREIGN KEY (evento_id) REFERENCES eventos(id)
);
-- Datos para ensayar puse nombres aleatorios y eventos sobre programacion y el sena

--Ingresar datos de personas para probar
INSERT INTO personas (nombre,email)VALUES
('Julia Rodriguez','julita@gmail.com'),
('Fidelino Corso', 'fide@gmail.com'),
('Javier Castro', 'javi@gmail.com'),

--Ingresar datos sobre los posibles eventos 
INSERT INTO eventos (nombre, fecha, lugar) VALUES
('Conferencia Node.js', '2025-10-15', 'Bogotá'),
('Taller de MySQL', '2025-11-01', 'Medellín'),
('Seminario de APIs', '2025-12-10', 'Cali');

--Ingresar datos sobre las relaciones de la persona con el evento en el que se registro

INSERT INTO registros (persona_id, evento_id) VALUES
(1, 1), -- Julia en Conferencia Node.js
(2, 2), -- Fidelino en Taller de MySQL
(3, 3); -- Javier en Seminario de APIs