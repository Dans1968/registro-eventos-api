# 🎟️ Registro de Eventos API

Aplicativo web completo desarrollado como proyecto , que permite registrar personas, crear eventos y administrar la inscripción de participantes a cada evento.

Incluye una **API REST** creada con **Node.js, Express y MySQL**, además de un **frontend interactivo** en HTML, CSS y JavaScript (Bootstrap) para la gestión visual de los registros.

---

## 🚀 Tecnologías utilizadas

- **Node.js** + **Express** → Servidor backend y rutas REST.
- **MySQL** → Base de datos relacional.
- **Bootstrap 5** → Estilos responsivos del frontend.
- **JavaScript (Fetch API)** → Comunicación entre frontend y backend usando consultas HTTP
- **Postman** → Pruebas de los endpoints del API.

---

## 🧩 Endpoints principales

| Método | Ruta | Descripción |
|--------|------|--------------|
| **POST** | `/personas` | Crea una nueva persona. |
| **GET** | `/personas` | Lista todas las personas registradas. |
| **POST** | `/eventos` | Crea un nuevo evento. |
| **GET** | `/eventos` | Lista los eventos disponibles. |
| **POST** | `/registros` | Registra la asistencia de una persona a un evento. |
| **GET** | `/registros` | Lista los registros con un `JOIN` entre personas y eventos. |

---

## 🖥️ Estructura del proyecto

📂 registro-eventos-api  
 ┣ 📁 controllers → Lógica de negocio  
 ┣ 📁 routes → Definición de rutas Express  
 ┣ 📁 frontend → Interfaz web  
 ┣ 📜 app.js → Servidor principal  
 ┣ 📜 db.js → Conexión MySQL  
 ┣ 📜 database.sql → Script SQL  
 ┗ 📜 README.md → Documentación

 ## ⚙️ Cómo ejecutar el proyecto

1. Clonar el repositorio  
   ```bash
   git clone https://github.com/Dans1968/registro-eventos-api.git
   cd registro-eventos-api
2. Importar database.sql en MySQL
3. Configurar conexión en db.js
4. Instalar dependencias
   npm install
5. Iniciar el servidor
   node app.js
6. Abrir frontend/index.html en el navegador
---

### 🔄 7. **Explicacion del Funcionamiento**
Describe cómo funciona el sistema paso a paso.

```markdown
## 🌐 Flujo funcional del sistema

1. El usuario abre la página principal (**index.html**) para ver los eventos.  
2. Puede registrar una persona nueva (**personas.html**).  
3. Luego selecciona un evento y se inscribe (**registros.html**).

## 🖼️ Capturas de pantalla

### 🏠 Página principal - Lista de eventos
Muestra todos los eventos disponibles con opción para inscribirse.

<img width="1366" height="726" alt="image" src="https://github.com/user-attachments/assets/8200314f-61fb-4fb8-87b8-5a980256af00" />

### 🧍 Registro de personas
Formulario para registrar nuevos participantes en el sistema.
<img width="1366" height="725" alt="image" src="https://github.com/user-attachments/assets/b68697e3-7995-4aaf-a900-48f89bc09370" />

### 📝 Registro de participación
Interfaz donde se selecciona una persona y un evento para registrar su asistencia.
<img width="1366" height="730" alt="image" src="https://github.com/user-attachments/assets/d09dfb8b-8062-4a5a-8c73-0e32256f2149" />




4. Todos los datos se almacenan en MySQL.

