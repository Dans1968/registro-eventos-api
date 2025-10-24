// app 
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Importar rutas
const personasRoutes = require("./routes/personas.routes");
const eventosRoutes = require("./routes/eventos.routes");
const registrosRoutes = require("./routes/registros.routes");

// Usar rutas
app.use("/personas", personasRoutes);
app.use("/eventos", eventosRoutes);
app.use("/registros", registrosRoutes);

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
