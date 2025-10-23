// controllers/personas.controller.js
const db = require("../db");

// Obtener todas las personas
exports.getAll = (req, res) => {
  db.query("SELECT * FROM personas", (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

// Crear nueva persona
exports.create = (req, res) => {
  const { nombre, correo, telefono } = req.body;
  db.query(
    "INSERT INTO personas (nombre, correo, telefono) VALUES (?,?,?)",
    [nombre, correo, telefono],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: result.insertId, nombre, correo, telefono });
    }
  );
};

// Actualizar persona
exports.update = (req, res) => {
  const { id } = req.params;
  const { nombre, correo, telefono } = req.body;
  db.query(
    "UPDATE personas SET nombre=?, correo=?, telefono=? WHERE id=?",
    [nombre, correo, telefono, id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Persona actualizada correctamente" });
    }
  );
};

// Eliminar persona
exports.remove = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM personas WHERE id=?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Persona eliminada correctamente" });
  });
};
