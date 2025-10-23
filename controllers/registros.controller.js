const db = require("../db");

exports.getAll = (req, res) => {
  db.query(
    `SELECT r.id, p.nombre AS persona, e.nombre AS evento, r.fecha_registro
     FROM registros r
     JOIN personas p ON r.persona_id = p.id
     JOIN eventos e ON r.evento_id = e.id`,
    (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows);
    }
  );
};

exports.create = (req, res) => {
  const { persona_id, evento_id } = req.body;
  db.query(
    "INSERT INTO registros (persona_id, evento_id) VALUES (?,?)",
    [persona_id, evento_id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: result.insertId, persona_id, evento_id });
    }
  );
};

exports.remove = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM registros WHERE id=?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Registro eliminado correctamente" });
  });
};
