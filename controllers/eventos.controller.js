const db = require("../db");

exports.getAll = (req, res) => {
  db.query("SELECT * FROM eventos", (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

exports.create = (req, res) => {
  const { nombre, fecha, lugar, descripcion } = req.body;
  db.query(
    "INSERT INTO eventos (nombre, fecha, lugar, descripcion) VALUES (?,?,?,?)",
    [nombre, fecha, lugar, descripcion],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: result.insertId, nombre, fecha, lugar, descripcion });
    }
  );
};

exports.update = (req, res) => {
  const { id } = req.params;
  const { nombre, fecha, lugar, descripcion } = req.body;
  db.query(
    "UPDATE eventos SET nombre=?, fecha=?, lugar=?, descripcion=? WHERE id=?",
    [nombre, fecha, lugar, descripcion, id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Evento actualizado correctamente" });
    }
  );
};

exports.remove = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM eventos WHERE id=?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Evento eliminado correctamente" });
  });
};
