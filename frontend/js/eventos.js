// frontend/js/eventos.js

const API_URL = "http://127.0.0.1:3000/eventos";

async function cargarEventos() {
  try {
    const respuesta = await fetch(API_URL);
    if (!respuesta.ok) throw new Error("Error al obtener los eventos");

    const eventos = await respuesta.json();
    const contenedor = document.getElementById("eventos");

    if (eventos.length === 0) {
      contenedor.innerHTML = `<p class="text-center text-muted">No hay eventos registrados.</p>`;
      return;
    }

    // 👇 Aquí agregamos el botón Inscribirme
    contenedor.innerHTML = eventos.map(e => `
      <div class="col-md-4">
        <div class="card shadow-sm h-100">
          <div class="card-body">
            <h5 class="card-title">${e.nombre}</h5>
            <p class="card-text">
              <strong>Fecha:</strong> ${new Date(e.fecha).toLocaleDateString()}<br>
              <strong>Lugar:</strong> ${e.lugar}<br>
              <strong>Descripción:</strong> ${e.descripcion}
            </p>
            <a href="./registros.html?evento_id=${e.id}" class="btn btn-primary w-100 mt-2">
              Inscribirme
            </a>
          </div>
        </div>
      </div>
    `).join("");

  } catch (error) {
    console.error("Error:", error);
    document.getElementById("eventos").innerHTML =
      `<p class="text-danger text-center">Error al cargar los eventos.</p>`;
  }
}

// Llamar la función al cargar la página
cargarEventos();
