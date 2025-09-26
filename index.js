const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// ------------------- PERSONAS -------------------
app.post("/personas", (req, res) => {
  const { nombre, correo, telefono } = req.body;
  db.query("INSERT INTO personas (nombre, correo, telefono) VALUES (?,?,?)",
    [nombre, correo, telefono],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: result.insertId, nombre, correo, telefono });
    });
});

app.get("/personas", (req, res) => {
  db.query("SELECT * FROM personas", (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// ------------------- EVENTOS -------------------
app.post("/eventos", (req, res) => {
  const { nombre, fecha, lugar, descripcion } = req.body;
  db.query("INSERT INTO eventos (nombre, fecha, lugar, descripcion) VALUES (?,?,?,?)",
    [nombre, fecha, lugar, descripcion],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: result.insertId, nombre, fecha, lugar, descripcion });
    });
});

app.get("/eventos", (req, res) => {
  db.query("SELECT * FROM eventos", (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// ------------------- REGISTROS -------------------
app.post("/registros", (req, res) => {
  const { persona_id, evento_id } = req.body;
  db.query("INSERT INTO registros (persona_id, evento_id) VALUES (?,?)",
    [persona_id, evento_id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: result.insertId, persona_id, evento_id });
    });
});

app.get("/registros", (req, res) => {
  db.query(`SELECT r.id, p.nombre AS persona, e.nombre AS evento, r.fecha_registro
            FROM registros r
            JOIN personas p ON r.persona_id = p.id
            JOIN eventos e ON r.evento_id = e.id`,
    (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows);
    });
});

// ------------------- SERVIDOR -------------------
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 API corriendo en http://localhost:${PORT}`);
});
