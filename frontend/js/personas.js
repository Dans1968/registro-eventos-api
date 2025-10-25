// frontend/js/personas.js

const API_URL = "http://127.0.0.1:3000/personas";
const form = document.getElementById("formPersona");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nuevaPersona = {
    nombre: document.getElementById("nombre").value,
    correo: document.getElementById("correo").value,
    telefono: document.getElementById("telefono").value,
  };

  try {
    const respuesta = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevaPersona),
    });

    if (!respuesta.ok) throw new Error("Error al registrar persona");

    const resultado = await respuesta.json();
    mensaje.innerHTML = `<p class="text-success fw-bold">✅ Persona registrada con éxito: ${resultado.nombre}</p>`;

    form.reset();
  } catch (error) {
    console.error(error);
    mensaje.innerHTML = `<p class="text-danger fw-bold">❌ Ocurrió un error al registrar la persona.</p>`;
  }
});
