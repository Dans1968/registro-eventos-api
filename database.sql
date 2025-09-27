-- CREAR BASE DE DATOS DESDE CERO PARA PROBAR EL FUNCIONAMIENTO DEL API
DROP DATABASE IF EXISTS registro_eventos;
CREATE DATABASE registro_eventos;
USE registro_eventos;

-- TABLA PERSONAS
CREATE TABLE personas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  correo VARCHAR(100) UNIQUE NOT NULL,
  telefono VARCHAR(20)
);

-- TABLA EVENTOS
CREATE TABLE eventos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  fecha DATE NOT NULL,
  lugar VARCHAR(100),
  descripcion TEXT
);

-- TABLA REGISTROS (RELACIÓN MUCHOS A MUCHOS)
-- Osea Una persona puede asistir a muchos eventos y Un evento puede tener muchas personas inscritas
CREATE TABLE registros (
  id INT AUTO_INCREMENT PRIMARY KEY,
  persona_id INT NOT NULL,
  evento_id INT NOT NULL,
  fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (persona_id) REFERENCES personas(id),
  FOREIGN KEY (evento_id) REFERENCES eventos(id)
);

-- DATOS DE PRUEBA (aletorios que se me ocurrieron)

-- Personas
INSERT INTO personas (nombre, correo, telefono) VALUES
('Julia Pérez', 'julia@example.com', '3001234567'),
('Fidelino Gómez', 'fidelino@example.com', '3109876543'),
('Ana Torres', 'ana@example.com', '3205551234');

-- Eventos
INSERT INTO eventos (nombre, fecha, lugar, descripcion) VALUES
('Conferencia Node.js', '2025-10-15', 'Bogotá', 'Evento sobre desarrollo con Node.js'),
('Taller de MySQL', '2025-11-01', 'Medellín', 'Taller práctico de bases de datos MySQL'),
('Seminario de APIs', '2025-12-10', 'Cali', 'Seminario sobre creación y consumo de APIs REST');

-- Registros (personas inscritas en eventos)
INSERT INTO registros (persona_id, evento_id) VALUES
(1, 1), -- Julia en Conferencia Node.js
(2, 2), -- Fidelino en Taller de MySQL
(3, 3), -- Ana en Seminario de APIs
(1, 3); -- Julia también en Seminario de APIs

