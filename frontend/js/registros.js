// frontend/js/registros.js

const API_PERSONAS = "http://127.0.0.1:3000/personas";
const API_EVENTOS = "http://127.0.0.1:3000/eventos";
const API_REGISTROS = "http://127.0.0.1:3000/registros";

const personaSelect = document.getElementById("persona");
const eventoSelect = document.getElementById("evento");
const formRegistro = document.getElementById("formRegistro");
const mensaje = document.getElementById("mensaje");
const listaRegistros = document.getElementById("listaRegistros");

// Cargar personas y eventos al iniciar
async function cargarSelects() {
  try {
    const [personasRes, eventosRes] = await Promise.all([
      fetch(API_PERSONAS),
      fetch(API_EVENTOS),
    ]);

    const personas = await personasRes.json();
    const eventos = await eventosRes.json();

    personaSelect.innerHTML = personas.map(
      (p) => `<option value="${p.id}">${p.nombre}</option>`
    ).join("");

    eventoSelect.innerHTML = eventos.map(
      (e) => `<option value="${e.id}">${e.nombre}</option>`
    ).join("");

  } catch (error) {
    console.error("Error al cargar selects:", error);
  }
}

// Registrar participación
formRegistro.addEventListener("submit", async (e) => {
  e.preventDefault();

  const persona_id = personaSelect.value;
  const evento_id = eventoSelect.value;

  try {
    const respuesta = await fetch(API_REGISTROS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ persona_id, evento_id }),
    });

    if (!respuesta.ok) throw new Error("Error al registrar");

    const resultado = await respuesta.json();
    mensaje.innerHTML = `<p class="text-success fw-bold">✅ Registro exitoso (ID: ${resultado.id})</p>`;
    formRegistro.reset();

    // recargar lista
    cargarRegistros();
  } catch (error) {
    console.error(error);
    mensaje.innerHTML = `<p class="text-danger fw-bold">❌ Error al registrar participación.</p>`;
  }
});

// Cargar lista de registros
async function cargarRegistros() {
  try {
    const res = await fetch(API_REGISTROS);
    const registros = await res.json();

    if (registros.length === 0) {
      listaRegistros.innerHTML = `<p class="text-muted text-center">Aún no hay registros.</p>`;
      return;
    }

    listaRegistros.innerHTML = `
      <table class="table table-striped shadow-sm">
        <thead class="table-dark">
          <tr>
            <th>ID</th>
            <th>Persona</th>
            <th>Evento</th>
            <th>Fecha de Registro</th>
          </tr>
        </thead>
        <tbody>
          ${registros.map(r => `
            <tr>
              <td>${r.id}</td>
              <td>${r.persona}</td>
              <td>${r.evento}</td>
              <td>${new Date(r.fecha_registro).toLocaleDateString()}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `;
  } catch (error) {
    console.error("Error al cargar registros:", error);
  }
}

// Inicializar
cargarSelects();
cargarRegistros();
