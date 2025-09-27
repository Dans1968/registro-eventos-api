# Registro de Eventos API

API REST para registrar personas y eventos.  
Mi proyecto del Sena

## Endpoints principales
- `POST /personas` → Crear persona
- `GET /personas` → Listar esas personas
- `POST /eventos` → Crear evento
- `GET /eventos` → Listar los eventos
- `POST /registros` → Registrar asistencia de cada evento
- `GET /registros` → Listar registros con JOIN

## Cómo ejecutar
1. Clonar el repositorio
2. Importar `database.sql` en MySQL
3. Configurar la conexión en `db.js`
4. Instalar dependencias con `npm install`
5. Iniciar con `node index.js`
