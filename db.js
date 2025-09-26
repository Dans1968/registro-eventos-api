const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",   // cambia si tu MySQL usa otro usuario
  password: "admin123_",   // pon tu contraseña si tienes
  database: "registro_eventos"
});

connection.connect(err => {
  if (err) {
    console.error("❌ Error conectando a MySQL:", err);
    process.exit(1);
  }
  console.log("✅ Conectado a MySQL");
});

module.exports = connection;
